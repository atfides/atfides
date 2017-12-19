(ns atfides.graphs.bar
  (:require [rid3.core :as rid3]
            [reagent.core :as r]))

;; Example from:
;; https://bl.ocks.org/mbostock/3885304

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; vars

(def margin
  {:top    20
   :right  20
   :bottom 30
   :left   40})



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; util fns

(defn get-width
  [ratom]
  (let [page-width (get @ratom :page-width)]
    (max (min 900
              (- page-width 100))
         260)))

(defn get-height [ratom]
  (let [width (get-width ratom)]
    (/ width 2)))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; svg

(defn svg [node ratom]
  (let [width (get-width ratom)
        height (get-height ratom)]
    (-> node
        (.attr "width" (+ width
                          (get margin :left)
                          (get margin :right)))
        (.attr "height" (+ height
                           (get margin :top)
                           (get margin :bottom))))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; main-container

(defn main-container [node]
  (-> node
      (.attr "transform" (str "translate("
                              (get margin :left)
                              ","
                              (get margin :top) ")"))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; scales

(defn create-x-scale [ratom]
  (let [dataset (get @ratom :dataset)
        width   (get-width ratom)
        domain  (map :month dataset)]
    (-> js/d3
        .scaleBand
        (.rangeRound #js [0 width])
        (.padding 0.1)
        (.domain (clj->js domain)))))

(defn create-y-scale [ratom]
  (let [dataset (get @ratom :dataset)
        height  (get-height ratom)
        max-y   (apply max (map :value dataset))]
    (-> js/d3
        .scaleLinear
        (.rangeRound #js [height 0])
        (.domain #js [0 max-y]))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; axis

(defn x-axis [node ratom]
  (let [height  (get-height ratom)
        x-scale (create-x-scale ratom)]
    (-> node
        (.attr "transform" (str "translate(0," height ")"))
        (.call (.axisBottom js/d3 x-scale)))
    (-> node
        (.select "path")
        (.style "stroke" "none"))))

(defn y-axis [node ratom]
  (let [y-scale (create-y-scale ratom)]
    (-> node
        (.call (-> (.axisLeft js/d3 y-scale)
                   (.ticks 10 "%"))))))

(defn y-label [node ratom]
  (-> node
      (.attr "transform" "rotate(-90)")
      (.attr "y" 6)
      (.attr "dy" "0.71em")
      (.attr "text-anchor" "end")
      (.attr "font-size" 10)
      (.attr "font-family" "sans-serif")
      (.text "value")))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; bar

(defn bar [node ratom]
  (let [height  (get-height ratom)
        x-scale (create-x-scale ratom)
        y-scale (create-y-scale ratom)]
    (-> node
        (.style "fill" "steelblue")
        (.on "mouseover" (fn []
                           (this-as this
                             (-> (js/d3.select this)
                                 (.style "fill" "brown")))))
        (.on "mouseout" (fn []
                          (this-as this
                            (-> (js/d3.select this)
                                (.style "fill" "steelblue")))))
        (.attr "x" (fn [d]
                     (x-scale (aget d "month"))))
        (.attr "y" (fn [d]
                     (y-scale (aget d "value"))))
        (.attr "width" (.bandwidth x-scale))
        (.attr "height" (fn [d]
                          (- height
                             (y-scale (aget d "value"))))))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; dataset

(def dataset
  [{:month "Jan" :value 2704}
   {:month "Feb" :value 4499}
   {:month "Mar" :value 2159}
   {:month "Apr" :value 3853}
   {:month "May" :value 14106}
   {:month "Jun" :value 8819}
   {:month "Jul" :value 612}
   {:month "Aug" :value 2159}
   {:month "Oct" :value 3853}
   {:month "Nov" :value 14106}
   {:month "Dec" :value 8819}])


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; viz

(defn viz [ratom]
  [rid3/viz
   {:id             "barchart2"
    :ratom          ratom
    :svg            {:did-mount svg}
    :main-container {:did-mount main-container}
    :pieces
                    [{:kind      :elem-with-data
                      :class     "bar"
                      :tag       "rect"
                      :did-mount bar}
                     {:kind  :container
                      :class "axis"
                      :children
                             [{:kind      :container
                               :class     "x-axis"
                               :did-mount x-axis}
                              {:kind      :container
                               :class     "y-axis"
                               :did-mount y-axis}]}
                     {:kind      :elem
                      :class     "y-label"
                      :tag       "text"
                      :did-mount y-label}]}])

