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
            [reagent.core :as r]
            [atfides.utils :as u]))

(def paper-base {:padding 20
                 :margin 40
                 :text-align "center"})


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
                ;; we need to save the pub-key with nil values > then update later
                (rf/dispatch [:add-pub-key %])
                (rf/dispatch [:request-address-data %]))}])


(defn pub-addr-list
  []
  (let [local-keys-map (vals @(rf/subscribe [:local-pub-keys]))]
    (println ">>>>> " local-keys-map)
    [ui/table {:selectable false}
     [ui/table-header {:adjust-for-checkbox false :display-select-all false}
      [ui/table-row
       [ui/table-header-column "Address"]
       [ui/table-header-column "Ticker"]
       [ui/table-header-column "Amount"]]]
     [ui/table-body {:display-row-checkbox false}
      (doall
        (for [addr local-keys-map]
          [ui/table-row {:key (:id addr) :selectable false}
           [ui/table-row-column (:pub-addr addr)]
           [ui/table-row-column (:ticker addr)]
           [ui/table-row-column (:balance addr)]]))]
     [ui/table-footer
      [ui/table-row
       [ui/table-row-column {:style {:text-align "right"}}
        ;; will setup subs later
        [:h1 "Total: $0"]]]]]))



(defn home-page []
  [ui/mui-theme-provider
   {:mui-theme (get-mui-theme
                 ;; (aget js/MaterialUIStyles "DarkRawTheme")
                 {:palette {:text-color (color :green600)}})}

   [:div
    ;; Card 1: welcome ---------------------
    [ui/paper {:style paper-base}
     [:h1 "@Fides"]
     [:p "Visualize all your crypto hodlings."]
     [pub-key-entry]]


    ;; Card 2: allocations ---------------------
    [ui/paper {:style paper-base}
     [:h2 "Hodling Allocations / Diversification"]
     [gpie/GraphPie]]

    ;; Card 3: a milli yet ---------------------
    [ui/paper {:style paper-base}
     [:h2 "Crypto Millionaire yet?"]
     [garc/GraphArc]]

    ;; Card 4: accounts ---------------------
    [ui/paper {:style (dissoc paper-base :text-align)}
     [pub-addr-list]]

    ;; Card 5: sponsor ---------------------

    [ui/paper {:style (dissoc paper-base :text-align)}
     [:h3 "Sponsor these upcoming features:"]
     [:p "~ Allocation by tickers i.e: btc, eth, ltc in aggregate. $500"]
     [:p "~ Visualize by storage i.e: by *hardware* *hot* *cold*. $10,000"]
     [:p "~ Hodlings overtime. Meta-crunching of investing vs spending on all provided addresses. $200,000"]
     ;; [:br] ;; [:p "Historical Hodlings: **dummy example**"]
     [gbar/GraphBar]]

    ;; Card 6: contact ---------------------
    [ui/paper {:style paper-base}
     ;; [:p "How to: just enter a public crypto-currency address and hit enter :)"]
     [:p "Any ideas, suggestions for @Fides, ping me on Twitter: "
      [:bold (u/new-target-link "@mohamedhayibor" "https://twitter.com/mohamedhayibor")]]]

    ;; Testing only ---------------------
    [ui/paper {:style (dissoc paper-base :text-align)}
     [:h3 "Test addresses"]
     [utils/test-addresses]]

    [:br]]])



(defn main-panel []
  [:div [home-page]])
