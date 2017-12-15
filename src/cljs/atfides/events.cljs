(ns atfides.events
  (:require [re-frame.core :as rf]
            [atfides.db :as db]
            [ajax.core :as ajax]
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


;; -- Taken form re-frame's todomvc example :)
(defn allocate-next-id
  "Returns the pub-key id.
  Assumes pub-keys are sorted.
  Returns one more than the current largest id."
  [pub-keys]
  ((fnil inc 0) (last (keys pub-keys))))


;; -- Event Handlers -------------------------
;;
;; There are only 3 event:
;; initialise-db | add-pub-key | delete-pub-key


;; fetch related data if pre-existing pub-keys
(rf/reg-event-db
 :initialise-db

 ;; Retrieve former public addr from localStorage if any
 [(rf/inject-cofx :local-store-pub-keys)]

 ;; the event handler being registered
 (fn [{:keys [local-pub-keys]} _]
   {:db (assoc db/default-db :local-pub-keys local-pub-keys)}))


;; usage: > (dispatch [:add-pub-key])
;; add submitted pub-key
(rf/reg-event-db
  :add-pub-key

  ;; looks after writing out pub-keys to localStore
  pub-keys-interceptors

  ;; alt {:id id :pub-key pub-key}
  ;; db example: Think harder about the data structure.
  (fn [pub-keys [pub-key]]                     ;; because of trim-v the 2nd parameter is not [_ text]
    (let [id (allocate-next-id pub-keys)]
      (assoc pub-keys id {:id id :pub-addr pub-key}))))


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
                  :response-format (ajax/json-request-format)
                  ;; :on-failure [:failed-get-request]
                  :on-success [:address-data-loaded]}}))

(rf/reg-event-fx
  :address-data-loaded

  (fn [db item2 item3]
    (println "Address data loaded......XXXXXX...")
    (println "Time to insert smth")
    (println "Item 2: " item2)
    (println "Item 3: " item3)
    (println "db: " db)))


(rf/reg-event-fx
  :failed-get-request

  (fn [item1 item2]
    (println "Item 1: " item1)
    (println "Item 2: " item2)
    (println "Failed GET request")))
