(ns atfides.events
  (:require [re-frame.core :as rf]
            [atfides.db :as db]
            [ajax.core :as ajax]
            [atfides.utils :as u]
            [day8.re-frame.http-fx]))

;; -- Storing pub-keys to localStore --------
;; -- Runs after the event handler :add-pub-key
(def ->local-store (rf/after db/pub-keys->local-store))

;; -- Interceptors --------------------------
;; A chain of interceptors can be represented as a vector
;; These are triggered when user submits
(def pub-keys-interceptors [(rf/path :local-pub-keys)      ;; 1st param to handler will be the value from this path within db
                            ->local-store
                            (when ^boolean js/goog.DEBUG rf/debug) ;; js browser console for debug logs
                            rf/trim-v])                            ;; removes first (event id) element from the event vec


;; -- Taken from re-frame's todomvc example :)
(defn allocate-next-id
  "Returns the pub-key id.
  Assumes pub-keys are sorted.
  Returns one more than the current largest id."
  [pub-keys]
  ((fnil inc 0) (last (keys pub-keys))))


;; -- Event Handlers -------------------------
;;
;; There are 3 main -db events:
;; initialize-db | add-pub-key | delete-pub-key


;; Fetch related data from pre-existing pub-keys
;; We need an -fx coz we're pulling from LS
(rf/reg-event-fx
 :initialize-db

 ;; Retrieve former public addr(s) from localStorage if any
 [(rf/inject-cofx :local-store-pub-keys)]

 ;; the event handler being registered
 (fn [{:keys [db local-pub-keys]} _]
   {:db (assoc db :local-pub-keys local-pub-keys)}))


;; Overall Strategy: add pub key with :balance nil
;; Then update params when data lands
(rf/reg-event-db
  :add-pub-key

  pub-keys-interceptors

  (fn [pub-keys [pub-key]]
    (println "[add-pub-k]>>>> pub-keys: " pub-keys)
    (println "[add-pub-k]>>>> pub-key: " pub-key)
    (let [id (allocate-next-id pub-keys)]
      (assoc pub-keys id {:id id
                          :pub-addr pub-key
                          :balance nil
                          :ticker (u/get-ticker pub-key)}))))


(rf/reg-event-db
  :delete-pub-key

  ;; looks after deleting a pub-key from local store
  pub-keys-interceptors

  (fn [pub-keys [id]]
    (dissoc pub-keys id)))

;; -- Talking to other services (only get requests)
;;
;; Due to availability issues and other uncertainties
;; We save the latest get request data to LS (local storage)
;; * (maybe) trigger updates every 5 minutes
;; * for responsiveness (we serve stale data then update when data lands)


;; -- Debugging notes
;; 1st arg: {:event [:request-address-data %], :db {:local-pub-keys {1 {:id 1, :pub-addr %}}}}
;; 2nd arg: [:request-address-data %] | (:event 1st)
(rf/reg-event-fx
  :request-address-data

  (fn [_ [_ addr]]
    ;; returning a map of side effects
    (println "Kicked request")
    (println "addr: " addr)

    {:http-xhrio {:method         :get
                  ;; https://www.blockcypher.com/dev/bitcoin/#address-balance-endpoint
                  :uri (str "https://api.blockcypher.com/v1/btc/main/addrs/" (name addr) "/balance")
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [:address-data-loaded]
                  :on-failure [:failed-get-request]}}))

(rf/reg-event-db
  :address-data-loaded

  ;; interceptor takes care of saving data to LS
  pub-keys-interceptors

  ;; resp -> :event -> [{:address 1H6ZZpRmMnrw8ytepV3BYwMjYYnEkWDqVP,
  ;; :balance 307780, :final_balance 307780....
  (fn [db [{:keys [address balance]}]]
    (println "Address data loaded......>>>>>XXX...")
    ;; balance is in satoshis (blockcypher) > convert

    ;; 1. Find the id of the address
    ;; 2. Dispatch an event to update address data:
    ;;    * from nil to actual amount
    (let [id-seq (u/id-by-addr db address)
          id (first id-seq)]
      (println "Check computes: >>>>>>")
      (println "(first id-seq)" id)
      (assoc-in db [id :balance] balance))))

(rf/reg-event-db
  :failed-get-request

  (fn [db event]
    (println "Event: " event)
    (println ">>> Failed GET request")))
