(ns atfides.views
  (:require [re-frame.core :as rf]
            [clojure.string :as str]
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

;; copied pattern from re-frame mvc example
(defn pub-key-input [{:keys [pub-addr on-save on-stop]}]
  (let [val (r/atom pub-addr)
        stop #(do (reset! val "")
                  (when on-stop (on-stop)))
        save #(let [v (-> @val str str/trim)]
                (when (seq v) (on-save v)))]
    (fn [props]
      [ui/text-field (merge props
                            {:type :type
                             :value @val
                             :auto-focus true
                             :on-blur save
                             :on-change #(reset! val (-> % .-target .-value))
                             :on-key-down #(case (.-which %)
                                             13 (save)
                                             27 (stop)
                                             nil)})])))

(defn pub-key-entry
  []
  [pub-key-input
   {:id "new-pub-key"
    :floating-label-text "Enter a new public address..."
    :on-save #(rf/dispatch [:add-pub-key %])}])

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

    [pub-key-entry]
    [:br]
    [ui/raised-button {:label "Enter"
                       :secondary true
                       :on-click #(rf/dispatch [:add-pub-key %])}]]])
                       ;; :padding-left 30
                       ;; :margin-left 30}]]])


(defn main-panel []
  [:div [:h2 "Test First Component"]
        (home-page)])


(defn main-panel-test []
  (let [name @(rf/subscribe [::subs/pub-keys])]
    [:div.greeting
     "Hell from "
     [:input {:type "text"
              :value #(rf/subscribe [:pub-keys])
              :on-change #(rf/dispatch [:pub-keys]
                                       (-> % .-target .-value))}]]))
