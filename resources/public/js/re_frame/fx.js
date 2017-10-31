// Compiled by ClojureScript 1.7.122 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("re-frame.registrar","kinds","re-frame.registrar/kinds",526766696,null),new cljs.core.Symbol(null,"kind","kind",923265724,null))))].join('')));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__24802 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24803 = null;
var count__24804 = (0);
var i__24805 = (0);
while(true){
if((i__24805 < count__24804)){
var vec__24806 = cljs.core._nth.call(null,chunk__24803,i__24805);
var effect_key = cljs.core.nth.call(null,vec__24806,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24806,(1),null);
var temp__4423__auto___24808 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4423__auto___24808)){
var effect_fn_24809 = temp__4423__auto___24808;
effect_fn_24809.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__24810 = seq__24802;
var G__24811 = chunk__24803;
var G__24812 = count__24804;
var G__24813 = (i__24805 + (1));
seq__24802 = G__24810;
chunk__24803 = G__24811;
count__24804 = G__24812;
i__24805 = G__24813;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24802);
if(temp__4425__auto__){
var seq__24802__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24802__$1)){
var c__17696__auto__ = cljs.core.chunk_first.call(null,seq__24802__$1);
var G__24814 = cljs.core.chunk_rest.call(null,seq__24802__$1);
var G__24815 = c__17696__auto__;
var G__24816 = cljs.core.count.call(null,c__17696__auto__);
var G__24817 = (0);
seq__24802 = G__24814;
chunk__24803 = G__24815;
count__24804 = G__24816;
i__24805 = G__24817;
continue;
} else {
var vec__24807 = cljs.core.first.call(null,seq__24802__$1);
var effect_key = cljs.core.nth.call(null,vec__24807,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24807,(1),null);
var temp__4423__auto___24818 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4423__auto___24818)){
var effect_fn_24819 = temp__4423__auto___24818;
effect_fn_24819.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__24820 = cljs.core.next.call(null,seq__24802__$1);
var G__24821 = null;
var G__24822 = (0);
var G__24823 = (0);
seq__24802 = G__24820;
chunk__24803 = G__24821;
count__24804 = G__24822;
i__24805 = G__24823;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24824 = cljs.core.seq.call(null,value);
var chunk__24825 = null;
var count__24826 = (0);
var i__24827 = (0);
while(true){
if((i__24827 < count__24826)){
var map__24828 = cljs.core._nth.call(null,chunk__24825,i__24827);
var map__24828__$1 = ((((!((map__24828 == null)))?((((map__24828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24828):map__24828);
var effect = map__24828__$1;
var ms = cljs.core.get.call(null,map__24828__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24828__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24824,chunk__24825,count__24826,i__24827,map__24828,map__24828__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24824,chunk__24825,count__24826,i__24827,map__24828,map__24828__$1,effect,ms,dispatch))
,ms);
}

var G__24832 = seq__24824;
var G__24833 = chunk__24825;
var G__24834 = count__24826;
var G__24835 = (i__24827 + (1));
seq__24824 = G__24832;
chunk__24825 = G__24833;
count__24826 = G__24834;
i__24827 = G__24835;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24824);
if(temp__4425__auto__){
var seq__24824__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24824__$1)){
var c__17696__auto__ = cljs.core.chunk_first.call(null,seq__24824__$1);
var G__24836 = cljs.core.chunk_rest.call(null,seq__24824__$1);
var G__24837 = c__17696__auto__;
var G__24838 = cljs.core.count.call(null,c__17696__auto__);
var G__24839 = (0);
seq__24824 = G__24836;
chunk__24825 = G__24837;
count__24826 = G__24838;
i__24827 = G__24839;
continue;
} else {
var map__24830 = cljs.core.first.call(null,seq__24824__$1);
var map__24830__$1 = ((((!((map__24830 == null)))?((((map__24830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24830):map__24830);
var effect = map__24830__$1;
var ms = cljs.core.get.call(null,map__24830__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24830__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24824,chunk__24825,count__24826,i__24827,map__24830,map__24830__$1,effect,ms,dispatch,seq__24824__$1,temp__4425__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24824,chunk__24825,count__24826,i__24827,map__24830,map__24830__$1,effect,ms,dispatch,seq__24824__$1,temp__4425__auto__))
,ms);
}

var G__24840 = cljs.core.next.call(null,seq__24824__$1);
var G__24841 = null;
var G__24842 = (0);
var G__24843 = (0);
seq__24824 = G__24840;
chunk__24825 = G__24841;
count__24826 = G__24842;
i__24827 = G__24843;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__24844 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__24845 = null;
var count__24846 = (0);
var i__24847 = (0);
while(true){
if((i__24847 < count__24846)){
var event = cljs.core._nth.call(null,chunk__24845,i__24847);
re_frame.router.dispatch.call(null,event);

var G__24848 = seq__24844;
var G__24849 = chunk__24845;
var G__24850 = count__24846;
var G__24851 = (i__24847 + (1));
seq__24844 = G__24848;
chunk__24845 = G__24849;
count__24846 = G__24850;
i__24847 = G__24851;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24844);
if(temp__4425__auto__){
var seq__24844__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24844__$1)){
var c__17696__auto__ = cljs.core.chunk_first.call(null,seq__24844__$1);
var G__24852 = cljs.core.chunk_rest.call(null,seq__24844__$1);
var G__24853 = c__17696__auto__;
var G__24854 = cljs.core.count.call(null,c__17696__auto__);
var G__24855 = (0);
seq__24844 = G__24852;
chunk__24845 = G__24853;
count__24846 = G__24854;
i__24847 = G__24855;
continue;
} else {
var event = cljs.core.first.call(null,seq__24844__$1);
re_frame.router.dispatch.call(null,event);

var G__24856 = cljs.core.next.call(null,seq__24844__$1);
var G__24857 = null;
var G__24858 = (0);
var G__24859 = (0);
seq__24844 = G__24856;
chunk__24845 = G__24857;
count__24846 = G__24858;
i__24847 = G__24859;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__24860 = cljs.core.seq.call(null,value);
var chunk__24861 = null;
var count__24862 = (0);
var i__24863 = (0);
while(true){
if((i__24863 < count__24862)){
var event = cljs.core._nth.call(null,chunk__24861,i__24863);
clear_event.call(null,event);

var G__24864 = seq__24860;
var G__24865 = chunk__24861;
var G__24866 = count__24862;
var G__24867 = (i__24863 + (1));
seq__24860 = G__24864;
chunk__24861 = G__24865;
count__24862 = G__24866;
i__24863 = G__24867;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24860);
if(temp__4425__auto__){
var seq__24860__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24860__$1)){
var c__17696__auto__ = cljs.core.chunk_first.call(null,seq__24860__$1);
var G__24868 = cljs.core.chunk_rest.call(null,seq__24860__$1);
var G__24869 = c__17696__auto__;
var G__24870 = cljs.core.count.call(null,c__17696__auto__);
var G__24871 = (0);
seq__24860 = G__24868;
chunk__24861 = G__24869;
count__24862 = G__24870;
i__24863 = G__24871;
continue;
} else {
var event = cljs.core.first.call(null,seq__24860__$1);
clear_event.call(null,event);

var G__24872 = cljs.core.next.call(null,seq__24860__$1);
var G__24873 = null;
var G__24874 = (0);
var G__24875 = (0);
seq__24860 = G__24872;
chunk__24861 = G__24873;
count__24862 = G__24874;
i__24863 = G__24875;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map