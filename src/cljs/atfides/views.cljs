(ns atfides.views
  (:require [re-frame.core :as re-frame]
            [cljs.c3]
            [atfides.subs :as subs]))


(def data {:data
           {:columns
                  [
                   ["data1" 30]
                   ["data2" 70]]
            :type "pie"}})

(.-version js/c3)


(def newdata (clj->js data))

(def mychart (.generate js/c3 newdata))

(defn main-panel []
  [:div mychart])

;; (main-panel)


;; (defn main-panel []
;;   (let [name (re-frame/subscribe [::subs/name])]
;;    [:div "Hello from " @name])


