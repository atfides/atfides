(ns atfides.views
  (:require [re-frame.core :as rf]
            [cljsjs.material-ui]
            [reagent.core :as r]
            [atfides.subs :as subs]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [reagent.core :as r]))


(defn home-page []
  [ui/mui-theme-provider
   {:mui-theme (get-mui-theme
                 ;; (aget js/MaterialUIStyles "DarkRawTheme"))}
                 {:palette {:text-color (color :green600)}})}
   [:div
    [ui/app-bar {:title "Total Wealth: $0"
                 :icon-element-right
                        (r/as-element [ui/icon-button
                                       (ic/action-account-balance-wallet)])}]
    [ui/raised-button {:label        "Click me"
                        :icon         (ic/action-account-box)
                        :on-click     #(println "clicked")}]]])


(defn main-panel []
  [:div [:h1 "Test First Component"]
        (home-page)])


(defn main-panel-test []
  (let [name @(rf/subscribe [::subs/pub-keys])]
    [:div.greeting
     "Hell from "
     [:input {:type "text"
              :value #(rf/subscribe [:pub-keys])
              :on-change #(rf/dispatch [:pub-keys]
                                       (-> % .-target .-value))}]]))
