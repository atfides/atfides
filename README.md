# atfides "Heavy experimentations"

The cleaner version of this repo: [cryptomilli](https://github.com/mohamedhayibor/cryptomilli) live at [https://www.cryptomilli.com](https://www.cryptomilli.com)

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build

To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```

---
MIT License
