// Compiled by ClojureScript 1.7.122 {}
goog.provide('re_frame.registrar');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
re_frame.registrar.kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"cofx","cofx",2013202907),null,new cljs.core.Keyword(null,"fx","fx",-1237829572),null], null), null);
re_frame.registrar.kind__GT_id__GT_handler = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
re_frame.registrar.get_handler = (function re_frame$registrar$get_handler(var_args){
var args24780 = [];
var len__17951__auto___24783 = arguments.length;
var i__17952__auto___24784 = (0);
while(true){
if((i__17952__auto___24784 < len__17951__auto___24783)){
args24780.push((arguments[i__17952__auto___24784]));

var G__24785 = (i__17952__auto___24784 + (1));
i__17952__auto___24784 = G__24785;
continue;
} else {
}
break;
}

var G__24782 = args24780.length;
switch (G__24782) {
case 1:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24780.length)].join('')));

}
});

re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1 = (function (kind){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind);
});

re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind),id);
});

re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3 = (function (kind,id,required_QMARK_){
var handler = re_frame.registrar.get_handler.call(null,kind,id);
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_((function (){var and__16881__auto__ = required_QMARK_;
if(cljs.core.truth_(and__16881__auto__)){
return (handler == null);
} else {
return and__16881__auto__;
}
})())){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no ",[cljs.core.str(kind)].join('')," handler registered for: ",id);
} else {
}
} else {
}

return handler;
});

re_frame.registrar.get_handler.cljs$lang$maxFixedArity = 3;
re_frame.registrar.register_handler = (function re_frame$registrar$register_handler(kind,id,handler_fn){
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_(re_frame.registrar.get_handler.call(null,kind,id,false))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting",[cljs.core.str(kind)].join(''),"handler for:",id);
} else {
}
} else {
}

cljs.core.swap_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),handler_fn);

return handler_fn;
});
re_frame.registrar.clear_handlers = (function re_frame$registrar$clear_handlers(var_args){
var args24787 = [];
var len__17951__auto___24790 = arguments.length;
var i__17952__auto___24791 = (0);
while(true){
if((i__17952__auto___24791 < len__17951__auto___24790)){
args24787.push((arguments[i__17952__auto___24791]));

var G__24792 = (i__17952__auto___24791 + (1));
i__17952__auto___24791 = G__24792;
continue;
} else {
}
break;
}

var G__24789 = args24787.length;
switch (G__24789) {
case 0:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24787.length)].join('')));

}
});

re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.reset_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,cljs.core.PersistentArrayMap.EMPTY);
});

re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1 = (function (kind){
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,kind))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"kinds","kinds",1346029638,null),new cljs.core.Symbol(null,"kind","kind",923265724,null))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,cljs.core.dissoc,kind);
});

re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,kind))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"kinds","kinds",1346029638,null),new cljs.core.Symbol(null,"kind","kind",923265724,null))))].join('')));
}

if(cljs.core.truth_(re_frame.registrar.get_handler.call(null,kind,id))){
return cljs.core.swap_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind], null),cljs.core.dissoc,id);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: can't clear",[cljs.core.str(kind)].join(''),"handler for",[cljs.core.str(id),cljs.core.str(". Handler not found.")].join(''));
}
});

re_frame.registrar.clear_handlers.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=registrar.js.map