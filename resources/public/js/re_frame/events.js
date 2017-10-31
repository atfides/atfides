// Compiled by ClojureScript 1.7.122 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("re-frame.registrar","kinds","re-frame.registrar/kinds",526766696,null),new cljs.core.Symbol(null,"kind","kind",923265724,null))))].join('')));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__24878_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__24878_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4425__auto___24879 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4425__auto___24879)){
var not_i_24880 = temp__4425__auto___24879;
if(cljs.core.fn_QMARK_.call(null,not_i_24880)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_24880);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_24880);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4423__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4423__auto__)){
var interceptors = temp__4423__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_24891 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_24892 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__23484__auto___24901 = re_frame.interop.now.call(null);
var duration__23485__auto___24902 = (end__23484__auto___24901 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__24893_24903 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__24894_24904 = null;
var count__24895_24905 = (0);
var i__24896_24906 = (0);
while(true){
if((i__24896_24906 < count__24895_24905)){
var vec__24897_24907 = cljs.core._nth.call(null,chunk__24894_24904,i__24896_24906);
var k__23486__auto___24908 = cljs.core.nth.call(null,vec__24897_24907,(0),null);
var cb__23487__auto___24909 = cljs.core.nth.call(null,vec__24897_24907,(1),null);
try{cb__23487__auto___24909.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23485__auto___24902,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e24898){if((e24898 instanceof java.lang.Exception)){
var e__23488__auto___24910 = e24898;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__23486__auto___24908,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__23488__auto___24910);
} else {
throw e24898;

}
}
var G__24911 = seq__24893_24903;
var G__24912 = chunk__24894_24904;
var G__24913 = count__24895_24905;
var G__24914 = (i__24896_24906 + (1));
seq__24893_24903 = G__24911;
chunk__24894_24904 = G__24912;
count__24895_24905 = G__24913;
i__24896_24906 = G__24914;
continue;
} else {
var temp__4425__auto___24915 = cljs.core.seq.call(null,seq__24893_24903);
if(temp__4425__auto___24915){
var seq__24893_24916__$1 = temp__4425__auto___24915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24893_24916__$1)){
var c__17696__auto___24917 = cljs.core.chunk_first.call(null,seq__24893_24916__$1);
var G__24918 = cljs.core.chunk_rest.call(null,seq__24893_24916__$1);
var G__24919 = c__17696__auto___24917;
var G__24920 = cljs.core.count.call(null,c__17696__auto___24917);
var G__24921 = (0);
seq__24893_24903 = G__24918;
chunk__24894_24904 = G__24919;
count__24895_24905 = G__24920;
i__24896_24906 = G__24921;
continue;
} else {
var vec__24899_24922 = cljs.core.first.call(null,seq__24893_24916__$1);
var k__23486__auto___24923 = cljs.core.nth.call(null,vec__24899_24922,(0),null);
var cb__23487__auto___24924 = cljs.core.nth.call(null,vec__24899_24922,(1),null);
try{cb__23487__auto___24924.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23485__auto___24902,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e24900){if((e24900 instanceof java.lang.Exception)){
var e__23488__auto___24925 = e24900;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__23486__auto___24923,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__23488__auto___24925);
} else {
throw e24900;

}
}
var G__24926 = cljs.core.next.call(null,seq__24893_24916__$1);
var G__24927 = null;
var G__24928 = (0);
var G__24929 = (0);
seq__24893_24903 = G__24926;
chunk__24894_24904 = G__24927;
count__24895_24905 = G__24928;
i__24896_24906 = G__24929;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_24892;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_24891;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map