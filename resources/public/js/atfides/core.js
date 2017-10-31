// Compiled by ClojureScript 1.7.122 {}
goog.provide('atfides.core');
goog.require('cljs.core');
goog.require('atfides.views');
goog.require('reagent.core');
goog.require('atfides.config');
goog.require('atfides.events');
goog.require('re_frame.core');
console.log("sdfsdf");
atfides.core.dev_setup = (function atfides$core$dev_setup(){
if(cljs.core.truth_(atfides.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
atfides.core.mount_root = (function atfides$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [atfides.views.main_panel], null),document.getElementById("app"));
});
atfides.core.init = (function atfides$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("atfides.events","initialize-db","atfides.events/initialize-db",855706241)], null));

atfides.core.dev_setup.call(null);

return atfides.core.mount_root.call(null);
});
goog.exportSymbol('atfides.core.init', atfides.core.init);

//# sourceMappingURL=core.js.map