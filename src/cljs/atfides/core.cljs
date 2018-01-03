(ns atfides.core
  (:require [goog.events :as events]
            [reagent.core :as reagent]
            [re-frame.core :as rf]
            [atfides.db :as db]
            [atfides.events]
            [atfides.subs]
            [atfides.views :as views]
            [atfides.config :as config]
            [cljsjs.material-ui]))

(defn ^:export init []
  (rf/dispatch-sync [:initialize-db])
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))
