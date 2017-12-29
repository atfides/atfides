(ns atfides.utils
  (:require [print.foo :as pf :include-macros true]))

(defn test-addresses []
  [:ul
   [:li "1andreas3batLhQa2FawWjeyjCqyBzypd"]
   [:li "1NZ4J7qUMmvgRJ5RdipLqREwo8ZZEmuxcb"]
   [:li "1H6ZZpRmMnrw8ytepV3BYwMjYYnEkWDqVP"]
   [:li "378j15cCNW1MsTxzxegZ2dFRQZbb4SGP8Y"]
   [:li "3MdMWGJP4aGVezF1eqjGpbMMwQuwoXfeXG"]])

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
