(ns atfides.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [atfides.events :as events]
            [atfides.views :as views]
            [atfides.config :as config]))


(js/console.log "sdfsdf")


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
