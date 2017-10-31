// Compiled by ClojureScript 1.7.122 {}
goog.provide('atfides.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('atfides.subs');
atfides.views.main_panel = (function atfides$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("atfides.subs","name","atfides.subs/name",752319748)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello from ",cljs.core.deref.call(null,name)], null);
});

//# sourceMappingURL=views.js.map