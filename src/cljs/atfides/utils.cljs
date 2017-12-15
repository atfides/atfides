(ns atfides.utils
  (:require [print.foo :as pf :include-macros true]))

(defn target-value
  "updates value from event in form text field"
  [e]
  (aget e "target" "value"))

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
