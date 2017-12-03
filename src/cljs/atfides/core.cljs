(ns atfides.core
  (:require [goog.events :as events]
            [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [devtools.core :as devtools]
            [atfides.db :as db]
            [atfides.events]
            [atfides.subs]
            [atfides.views :as views]
            [atfides.config :as config]
            [cljsjs.material-ui]))

;; Debugging helpers
(devtools/install!)
(enable-console-print!)


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "X: dev  mode")))


(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [::events/initialise-db])
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))


(defn ^:export init []
  (dev-setup)
  (mount-root))
