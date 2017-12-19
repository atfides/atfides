(ns atfides.views
  (:require [re-frame.core :as rf]
            [clojure.string :as str]
            [cljsjs.material-ui]
            [reagent.core :as r]
            [atfides.subs :as subs]
            [atfides.utils :as utils]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [rid3.core :as rid3]
            [atfides.graphs.pie :as gpie]
            [atfides.graphs.bar :as gbar]
            [atfides.graphs.arc :as garc]
            [reagent.core :as r]))

(defn pub-key-input [{:keys [pub-addr on-save on-stop]}]
  (let [val (r/atom pub-addr)
        stop #(do (reset! val "")
                  (when on-stop (on-stop)))
        save #(let [v (-> @val str str/trim)]
                (when (seq v)
                  (on-save v)
                  (stop)))]
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
   {:id "new-pub-addr"
    :floating-label-text "Paste a new public address, then hit Enter..."
    :full-width true
    :on-save #(do
                (rf/dispatch [:add-pub-key %])
                (rf/dispatch [:request-address-data %]))}])


(defn pub-addr-item
  []
  (let [editing (r/atom false)]
    (fn [{:keys [id pub-addr]}]
      [:li
       [:div.view
        [:label pub-addr]]])))


(defn pub-addr-list
  []
  (let [local-keys-map (vals @(rf/subscribe [:local-pub-keys]))]
    [:section#main
     [:h3 "Saved addresses: "]
     [:ul#pub-addr
        (for [addr local-keys-map]
          ^{:key (:id addr)} [pub-addr-item addr])]


     [:h3 "From Graph Pie"]
     [gpie/viz (r/atom {:dataset gpie/dataset})]

     [:h3 "From Graph Barchart"]
     [gbar/viz (r/atom {:dataset gbar/dataset})]

     [:h3 "From Graph Arc"]
     [garc/viz  (r/atom {})]

     ;; For testing purposes
     [:h3 "Test addresses"]
     (utils/test-addresses)]))



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

    [pub-addr-list]

    [:br]

    [:br]]])



(defn main-panel []
  [:div [:h2 "Test First Component"]
        (home-page)])
