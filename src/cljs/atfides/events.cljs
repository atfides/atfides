(ns atfides.events
  (:require [re-frame.core :as rf]
            [atfides.db :as db]))

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


;; usage: > (dispatch [:initialise-db])
;; fetch related data if pre-existing pub-keys

(rf/reg-event-db
 :initialise-db

 ;; Retrieve former public addr from localStorage if any
 [(rf/inject-cofx :local-store-pub-keys)]

 ;; the event handler being registered
 (fn [{:keys [local-pub-keys]} _]
   (assoc db/default-db :local-pub-keys local-pub-keys)))


;; usage: > (dispatch [:add-pub-key])
;; add submitted pub-key
(rf/reg-event-db
  :add-pub-key

  ;; looks after writing out pub-keys to localStore
  pub-keys-interceptors

  ;; alt {:id id :pub-key pub-key}
  ;; db example: Think harder about the data structure.
  (fn [pub-keys pub-key]                     ;; because of trim-v the 2nd parameter is not [_ text]
    (let [id (allocate-next-id pub-keys)]
      (assoc pub-keys id pub-key))))


(rf/reg-event-db
  :delete-pub-key

  ;; looks after deleting a pub-key from local store
  pub-keys-interceptors

  (fn [pub-keys id]
    (dissoc pub-keys id)))
