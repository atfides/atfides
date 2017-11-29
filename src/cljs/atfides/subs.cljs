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
(rf/reg-sub
 ::pub-keys
 (fn [db _]
   (:pub-keys db)))


;; -- later: move to utils
(defn get-pub-keys
  "Read the current pub-keys from global app state "
  [db]
  (:pub-keys db))


;; -- registration
;; usage (subscribe [:pub-keys])
(rf/reg-sub get-pub-keys)


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


