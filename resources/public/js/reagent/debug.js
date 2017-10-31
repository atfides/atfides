// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__23875__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23876__i = 0, G__23876__a = new Array(arguments.length -  0);
while (G__23876__i < G__23876__a.length) {G__23876__a[G__23876__i] = arguments[G__23876__i + 0]; ++G__23876__i;}
  args = new cljs.core.IndexedSeq(G__23876__a,0);
} 
return G__23875__delegate.call(this,args);};
G__23875.cljs$lang$maxFixedArity = 0;
G__23875.cljs$lang$applyTo = (function (arglist__23877){
var args = cljs.core.seq(arglist__23877);
return G__23875__delegate(args);
});
G__23875.cljs$core$IFn$_invoke$arity$variadic = G__23875__delegate;
return G__23875;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23878__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23879__i = 0, G__23879__a = new Array(arguments.length -  0);
while (G__23879__i < G__23879__a.length) {G__23879__a[G__23879__i] = arguments[G__23879__i + 0]; ++G__23879__i;}
  args = new cljs.core.IndexedSeq(G__23879__a,0);
} 
return G__23878__delegate.call(this,args);};
G__23878.cljs$lang$maxFixedArity = 0;
G__23878.cljs$lang$applyTo = (function (arglist__23880){
var args = cljs.core.seq(arglist__23880);
return G__23878__delegate(args);
});
G__23878.cljs$core$IFn$_invoke$arity$variadic = G__23878__delegate;
return G__23878;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map