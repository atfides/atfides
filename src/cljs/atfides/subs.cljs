(ns atfides.subs
  (:require [re-frame.core :as rf]
            [atfides.db :as db]))

;; -- High level architechture:
;; 1. App db
;; 2. Extraction
;; 3. Computation (derived from 2)
;; 4. View (hiccup -> reagent)


;; -- Layer 2 -------------------------------------
;; -- accessor
;; usage (subscribe [:local-pub-keys])
(rf/reg-sub
 :local-pub-keys
 (fn [db _]
   (:local-pub-keys db)))




;; -- Layer 3 --------------------------------------
;; a subscription handler is a function which re-runs
;; every time the <> state changes
;;
;; reg-sub allows you to:
;; 1. a function which returns the input signals.
;; > return either a single signal or a vector (map) of signals
;;
;; 2. a function that does the computation.
;; > input values -> derived values


