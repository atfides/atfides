(ns atfides.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [atfides.events :as events]
            [atfides.views :as views]
            ;; [cljsjs.c3]
            [atfides.config :as config]))

(enable-console-print!)

(def data {:data
           {:columns
            [
             ["data1" 30]
             ["data2" 70]]
            :type "pie"}})


(prn data)

(.-version js/c3)

(def newdata (clj->js data))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
