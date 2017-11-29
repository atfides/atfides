(ns atfides.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [atfides.events :as events]
            [atfides.views :as views]
            [atfides.config :as config]))

(enable-console-print!)

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "X: dev  mode")))


(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [::events/initialise-db])
  (dev-setup)
  (mount-root))
