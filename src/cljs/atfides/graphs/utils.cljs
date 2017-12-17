(ns atfides.graphs.utils
  (:require [rid3.core :as rid3]
            [reagent.core :as r]))

;; -- Common Helpers -----------------------
;; -----------------------------------------
(defn get-width [ratom]
  ;; 300 <- x -> 500
  (let [page-width (get @ratom :page-width)]
    (max
      (min 500
           (- page-width 100))
      300)))

(defn get-height [ratom]
  ;; square x == width
  (let [width (get-width ratom)]
    width))


;; -- Pie Chart Helpers ---------------------
;; ------------------------------------------
(defn get-radius [ratom]
  (let [width (get-width ratom)]
     (/ width 2)))

(def pie
  (-> js/d3
      .pie
      (.value (fn [d]
                (aget d "balance")))
      (.sort nil)))

(defn prepare-dataset [ratom]
  (-> (clj->js (get @ratom :dataset))
      pie))

(defn create-path [ratom]
  (let [radius (get-radius ratom)]
    (-> js/d3
        .arc
        (.outerRadius (- radius 10))
        (.innerRadius 0))))

(defn create-label [ratom]
  (let [radius (get-radius ratom)]
    (-> js/d3
        .arc
        (.outerRadius (- radius 50))
        (.innerRadius (- radius 50)))))

(def colors
  (-> js/d3
      (.scaleOrdinal #js ["#98abc5" "#8a89a6" "#7b6888" "#6b486b" "#a05d56" "#d0743c" "#ff8c00"])))


;; -- DOM elements --------------------------
;; ------------------------------------------
(defn pie-svg [node ratom]
  (let [width (get-width ratom)
        height (get-height ratom)]

    (-> node
        (.attr "width" width)
        (.attr "height" height))))

(defn pie-container [node ratom]
   (let [width (get-width ratom)
         height (get-height ratom)
         half-width (/ width 2)
         half-height (/ height 2)]

    (-> node
        (.attr "transform" (str "translate("
                                half-width
                                ","
                                half-height
                                ")")))))

(defn arc [node ratom]
  (let [path (create-path ratom)]
    (-> node
        (.attr "d" path)
        (.attr "fill" (fn [d]
                        (colors (aget d "data" "balance"))))
        (.style "stroke" "#FFF"))))

(defn text-label [node ratom]
  (let [label (create-label ratom)]
    (-> node
        (.attr "transform" (fn [d]
                             (str "translate(" (.centroid label d) ")")))
        (.attr "dy" "0.35em")
        (.text (fn [d]
                 (aget d "data" "age")))
        (.style "font" "10px sans-serif")
        (.style "text-anchor" "middle"))))


;; -- Components   --------------------------
;; ------------------------------------------
(defn pie-chart [ratom]
  [rid3/viz
   {:id             "piechart"
    :ratom          ratom
    :svg            {:did-mount pie-svg} ;; pie-svg
    :pie-container  {:did-mount pie-container}}]) ;; pie-container
    ;; :pieces [{:kind         :elem-with-data :class        "arc" :tag          "path" :did-mount    arc :prepare-dataset prepare-dataset}]}])
    ;; {:kind :elem-with-data
    ;;  :class "text-label"
    ;;  :tag "text"
    ;;  :did-mount text-label}]}])
      ;; :prepare-dataset prepare-dataset}]}])


;; -- Temporary static data   ---------------
;; ------------------------------------------
(def static-data
  [{:address "1andreas3batLhQa2FawWjeyjCqyBzypd" :balance 5000}
   {:address "1H6ZZpRmMnrw8ytepV3BYwMjYYnEkWDqVP" :balance 2000}
   {:address "1NZ4J7qUMmvgRJ5RdipLqREwo8ZZEmuxcb" :balance 8000}
   {:address "378j15cCNW1MsTxzxegZ2dFRQZbb4SGP8Y" :balance 3000}
   {:address "3MdMWGJP4aGVezF1eqjGpbMMwQuwoXfeXG" :balance 10000}])

(def example-ratom (r/atom static-data))

(def tau (* 2 js/Math.PI))