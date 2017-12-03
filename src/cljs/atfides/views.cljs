(ns atfides.views
  (:require [re-frame.core :as rf]
            [cljsjs.material-ui]
            [reagent.core :as r]
            [atfides.subs :as subs]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [reagent.core :as r]))


(defn target-value
  "updates value from event in form text field"
  [e]
  (aget e "target" "value"))

(defn home-page []
  [ui/mui-theme-provider
   {:mui-theme (get-mui-theme
                 ;; (aget js/MaterialUIStyles "DarkRawTheme"))}
                 {:palette {:text-color (color :green600)}})}

   [:div
    [ui/app-bar {:title "Total Hodlings: $0"
                 :icon-element-right
                        (r/as-element [ui/icon-button
                                       (ic/action-account-balance-wallet)])}]

    [ui/text-field {:floating-label-text "Enter a Public Address"
                    :type :text
                    ;; :length 1000
                    ;; :size 1000
                    ;; :expand nil
                    ;; :style to->path
                    :min 20 ;; check minimum public addr length
                    ;; :value @(rf/subscribe [:]) <- not needed
                    ;; :on-change #(rf/dispatch [:add-pub-key (target-value %)])
                    :on-change #(target-value %)}]
    [:br]
    [ui/raised-button {:label "Enter"
                       :secondary true}]]])
                       ;; :padding-left 30
                       ;; :margin-left 30}]]])

                       ;; :href (u/path-for :skills-create)}]]])


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
