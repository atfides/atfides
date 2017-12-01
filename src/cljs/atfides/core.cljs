(ns atfides.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [devtools.core :as devtools]
            [atfides.db :as db]
            [atfides.events :as events]
            [atfides.subs :as subs]
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
