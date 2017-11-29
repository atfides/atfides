(ns atfides.views
  (:require [re-frame.core :as rf]
            [atfides.subs :as subs]))


(defn main-panel []
  [:h1 "Hello world"])


(defn main-panel-test []
  (let [name (rf/subscribe [::subs/pub-keys])]
    [:div.greeting
     "Hello from "
     [:input {:type "text"
              :value @(rf/subscribe [:pub-keys])
              :on-change #(rf/dispatch [:pub-keys]
                                       (-> % .-target .-value))}]]))
