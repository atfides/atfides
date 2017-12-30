(ns atfides.utils
  (:require [print.foo :as pf :include-macros true]))

(defn test-addresses []
  [:ul
   [:li "1KLMhEcYJBJdR1zcNZtTXByw3FnqSHBSm6"]
   [:li "0x55b78aff680bd386222eac5ba2d8d095460b7e01"]
   [:li "321NNHjv41Y4jg7S1Vx3esPJZ15izsf4eP"]
   [:li "LNeNJdV4a6M9a7NXyxHLeSQ8jEnf5Qx3AD"]
   [:li "3CRSkHdDQ71F1fjMiSt3ikmUtb3JPKtRr3"]])

(defn satoshi->btc
  [satoshi]
  (/ satoshi (* 100 1000 1000)))

(defn gauge-signal [gauge]
  (cond
    (>= gauge 1) "green"
    (> gauge 0.75) "orange"
    (> gauge 0.5) "yellow"
    (> gauge 0.25) "pink"
    :else "red"))

(defn id-by-addr
  "finds id by address lookup in LS
   **Attention** returns a lazy seq
   use (first result) to get value"
  [LS addr]
  (println "LS: " LS)
  (for [val-pairs (vals LS)
        :when (= (:pub-addr val-pairs) addr)
        :let [id (:id val-pairs)]]
    id))

;; With [Allocations by crypto tickers] feature
;; this helper will be obsolete
(defn trunc-addr
  "Truncate pub-addr to display nicely on pie chart"
  [addr]
  (str (subs addr 0 10) "..."))

(defn new-target-link
  "Opens new link on a seperate tab"
  [content link]
  [:a {:href link :target :_blank} content])
