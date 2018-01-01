(ns atfides.utils
  (:require [print.foo :as pf :include-macros true]))

(defn test-addresses []
  [:ul
   [:li "1KLMhEcYJBJdR1zcNZtTXByw3FnqSHBSm6"]
   [:li "0x55b78aff680bd386222eac5ba2d8d095460b7e01"]
   [:li "321NNHjv41Y4jg7S1Vx3esPJZ15izsf4eP"]
   [:li "LNeNJdV4a6M9a7NXyxHLeSQ8jEnf5Qx3AD"]
   [:li "3CRSkHdDQ71F1fjMiSt3ikmUtb3JPKtRr3"]])

;; works for ->ltc
(defn satoshi->btc
  [satoshi]
  (/ satoshi (* 100 1000 1000)))

(defn wei->eth
  [wei]
  (/ wei (* 1000 1000 1000 1000 1000 1000)))

(defn wei->usd
  "Converts weis to usd value"
  [wei price]
  ;; making sure for numbers
  (let [wei-n (js/Number wei)
        price-n (js/Number price)]
    (* (wei->eth wei-n) price-n)))

(defn satoshi->usd
  "Converts satoshis to usd value"
  [satos price]
  (let [satos-n (js/Number satos)
        price-n (js/Number price)]
    (* (satoshi->btc satos-n) price-n)))

;; addr > {:id 1, :pub-addr x.., :balance nil, :ticker nil}
(defn balance->usd
  "Converts balance based on ticker
  * addr: address hash map
  * do not forget to deref (@) tickers-sub"
  [addr tickers-sub]
  (case (:ticker addr)
    "BTC" (satoshi->usd (:balance addr) (:btc tickers-sub))
    "ETH" (wei->usd (:balance addr) (:eth tickers-sub))
    "LTC" (satoshi->usd (:balance addr) (:ltc tickers-sub))
    ;; silently fail
    nil))

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
  "Opens new link on a separate tab"
  [content link]
  [:a {:href link :target :_blank} content])

(defn id->price
  "Gets the price of a coin's id from coinmarketcap payload"
  [tickers-vec id]
  (js/Number (:price_usd (nth tickers-vec id))))

;; -- Sources of regex
;; https://github.com/litvintech/crypto-balances/blob/master/src/address-checker.coffee#L19
;; https://www.regexpal.com/99712
;; https://gist.github.com/Coinfused/4bdc50ea7af212a7324d
;; removed 3 from ltc bracket, the code assumes segwit -> btc for now
;; really sorry for this mess, but I'm late
(defn route-get [addr]
  (let [eth-reg #"^(0x)?[0-9a-fA-F]{40}$"
        ltc-reg #"^[LM][a-km-zA-HJ-NP-Z1-9]{26,33}$"
        btc-reg #"^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$"
        eth-l (fn [addr] (re-find eth-reg addr))
        ltc-l (fn [addr] (re-find ltc-reg addr))
        btc-l (fn [addr] (re-find btc-reg addr))]
    (if (eth-l addr)
      (str "https://api.blockcypher.com/v1/eth/main/addrs/" addr "/balance")
      (if (ltc-l addr)
        (str "https://api.blockcypher.com/v1/ltc/main/addrs/" addr "/balance")
        (if (btc-l addr)
          (str "https://api.blockcypher.com/v1/btc/main/addrs/" addr "/balance")
          nil)))))

;; Fix duplicate code :-(
(defn get-ticker [addr]
  (let [eth-reg #"^(0x)?[0-9a-fA-F]{40}$"
        ltc-reg #"^[LM][a-km-zA-HJ-NP-Z1-9]{26,33}$"
        btc-reg #"^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$"
        eth-l (fn [addr] (re-find eth-reg addr))
        ltc-l (fn [addr] (re-find ltc-reg addr))
        btc-l (fn [addr] (re-find btc-reg addr))]
    (if (eth-l addr)
      "ETH"
      (if (ltc-l addr)
        "LTC"
        (if (btc-l addr)
          "BTC"
          nil)))))
