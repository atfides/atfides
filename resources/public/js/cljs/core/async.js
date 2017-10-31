// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async27186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27186 = (function (fn_handler,f,meta27187){
this.fn_handler = fn_handler;
this.f = f;
this.meta27187 = meta27187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27188,meta27187__$1){
var self__ = this;
var _27188__$1 = this;
return (new cljs.core.async.t_cljs$core$async27186(self__.fn_handler,self__.f,meta27187__$1));
});

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27188){
var self__ = this;
var _27188__$1 = this;
return self__.meta27187;
});

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27187","meta27187",1793675468,null)], null);
});

cljs.core.async.t_cljs$core$async27186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27186";

cljs.core.async.t_cljs$core$async27186.cljs$lang$ctorPrWriter = (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async27186");
});

cljs.core.async.__GT_t_cljs$core$async27186 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27186(fn_handler__$1,f__$1,meta27187){
return (new cljs.core.async.t_cljs$core$async27186(fn_handler__$1,f__$1,meta27187));
});

}

return (new cljs.core.async.t_cljs$core$async27186(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27191 = [];
var len__17951__auto___27194 = arguments.length;
var i__17952__auto___27195 = (0);
while(true){
if((i__17952__auto___27195 < len__17951__auto___27194)){
args27191.push((arguments[i__17952__auto___27195]));

var G__27196 = (i__17952__auto___27195 + (1));
i__17952__auto___27195 = G__27196;
continue;
} else {
}
break;
}

var G__27193 = args27191.length;
switch (G__27193) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27191.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27198 = [];
var len__17951__auto___27201 = arguments.length;
var i__17952__auto___27202 = (0);
while(true){
if((i__17952__auto___27202 < len__17951__auto___27201)){
args27198.push((arguments[i__17952__auto___27202]));

var G__27203 = (i__17952__auto___27202 + (1));
i__17952__auto___27202 = G__27203;
continue;
} else {
}
break;
}

var G__27200 = args27198.length;
switch (G__27200) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27198.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27205 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27205);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27205,ret){
return (function (){
return fn1.call(null,val_27205);
});})(val_27205,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27206 = [];
var len__17951__auto___27209 = arguments.length;
var i__17952__auto___27210 = (0);
while(true){
if((i__17952__auto___27210 < len__17951__auto___27209)){
args27206.push((arguments[i__17952__auto___27210]));

var G__27211 = (i__17952__auto___27210 + (1));
i__17952__auto___27210 = G__27211;
continue;
} else {
}
break;
}

var G__27208 = args27206.length;
switch (G__27208) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27206.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17796__auto___27213 = n;
var x_27214 = (0);
while(true){
if((x_27214 < n__17796__auto___27213)){
(a[x_27214] = (0));

var G__27215 = (x_27214 + (1));
x_27214 = G__27215;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27216 = (i + (1));
i = G__27216;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27220 = (function (alt_flag,flag,meta27221){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27221 = meta27221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27222,meta27221__$1){
var self__ = this;
var _27222__$1 = this;
return (new cljs.core.async.t_cljs$core$async27220(self__.alt_flag,self__.flag,meta27221__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27222){
var self__ = this;
var _27222__$1 = this;
return self__.meta27221;
});})(flag))
;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27220.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27221","meta27221",-22798367,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27220";

cljs.core.async.t_cljs$core$async27220.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async27220");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27220 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27220(alt_flag__$1,flag__$1,meta27221){
return (new cljs.core.async.t_cljs$core$async27220(alt_flag__$1,flag__$1,meta27221));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27220(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27226 = (function (alt_handler,flag,cb,meta27227){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27227 = meta27227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27228,meta27227__$1){
var self__ = this;
var _27228__$1 = this;
return (new cljs.core.async.t_cljs$core$async27226(self__.alt_handler,self__.flag,self__.cb,meta27227__$1));
});

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27228){
var self__ = this;
var _27228__$1 = this;
return self__.meta27227;
});

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27227","meta27227",-853501250,null)], null);
});

cljs.core.async.t_cljs$core$async27226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27226";

cljs.core.async.t_cljs$core$async27226.cljs$lang$ctorPrWriter = (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async27226");
});

cljs.core.async.__GT_t_cljs$core$async27226 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27226(alt_handler__$1,flag__$1,cb__$1,meta27227){
return (new cljs.core.async.t_cljs$core$async27226(alt_handler__$1,flag__$1,cb__$1,meta27227));
});

}

return (new cljs.core.async.t_cljs$core$async27226(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27229_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27229_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27230_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27230_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16893__auto__ = wport;
if(cljs.core.truth_(or__16893__auto__)){
return or__16893__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27231 = (i + (1));
i = G__27231;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16893__auto__ = ret;
if(cljs.core.truth_(or__16893__auto__)){
return or__16893__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16881__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16881__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16881__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17958__auto__ = [];
var len__17951__auto___27237 = arguments.length;
var i__17952__auto___27238 = (0);
while(true){
if((i__17952__auto___27238 < len__17951__auto___27237)){
args__17958__auto__.push((arguments[i__17952__auto___27238]));

var G__27239 = (i__17952__auto___27238 + (1));
i__17952__auto___27238 = G__27239;
continue;
} else {
}
break;
}

var argseq__17959__auto__ = ((((1) < args__17958__auto__.length))?(new cljs.core.IndexedSeq(args__17958__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17959__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27234){
var map__27235 = p__27234;
var map__27235__$1 = ((((!((map__27235 == null)))?((((map__27235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27235):map__27235);
var opts = map__27235__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27232){
var G__27233 = cljs.core.first.call(null,seq27232);
var seq27232__$1 = cljs.core.next.call(null,seq27232);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27233,seq27232__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27240 = [];
var len__17951__auto___27290 = arguments.length;
var i__17952__auto___27291 = (0);
while(true){
if((i__17952__auto___27291 < len__17951__auto___27290)){
args27240.push((arguments[i__17952__auto___27291]));

var G__27292 = (i__17952__auto___27291 + (1));
i__17952__auto___27291 = G__27292;
continue;
} else {
}
break;
}

var G__27242 = args27240.length;
switch (G__27242) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27240.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18976__auto___27294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___27294){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___27294){
return (function (state_27266){
var state_val_27267 = (state_27266[(1)]);
if((state_val_27267 === (7))){
var inst_27262 = (state_27266[(2)]);
var state_27266__$1 = state_27266;
var statearr_27268_27295 = state_27266__$1;
(statearr_27268_27295[(2)] = inst_27262);

(statearr_27268_27295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (1))){
var state_27266__$1 = state_27266;
var statearr_27269_27296 = state_27266__$1;
(statearr_27269_27296[(2)] = null);

(statearr_27269_27296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (4))){
var inst_27245 = (state_27266[(7)]);
var inst_27245__$1 = (state_27266[(2)]);
var inst_27246 = (inst_27245__$1 == null);
var state_27266__$1 = (function (){var statearr_27270 = state_27266;
(statearr_27270[(7)] = inst_27245__$1);

return statearr_27270;
})();
if(cljs.core.truth_(inst_27246)){
var statearr_27271_27297 = state_27266__$1;
(statearr_27271_27297[(1)] = (5));

} else {
var statearr_27272_27298 = state_27266__$1;
(statearr_27272_27298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (13))){
var state_27266__$1 = state_27266;
var statearr_27273_27299 = state_27266__$1;
(statearr_27273_27299[(2)] = null);

(statearr_27273_27299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (6))){
var inst_27245 = (state_27266[(7)]);
var state_27266__$1 = state_27266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27266__$1,(11),to,inst_27245);
} else {
if((state_val_27267 === (3))){
var inst_27264 = (state_27266[(2)]);
var state_27266__$1 = state_27266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27266__$1,inst_27264);
} else {
if((state_val_27267 === (12))){
var state_27266__$1 = state_27266;
var statearr_27274_27300 = state_27266__$1;
(statearr_27274_27300[(2)] = null);

(statearr_27274_27300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (2))){
var state_27266__$1 = state_27266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27266__$1,(4),from);
} else {
if((state_val_27267 === (11))){
var inst_27255 = (state_27266[(2)]);
var state_27266__$1 = state_27266;
if(cljs.core.truth_(inst_27255)){
var statearr_27275_27301 = state_27266__$1;
(statearr_27275_27301[(1)] = (12));

} else {
var statearr_27276_27302 = state_27266__$1;
(statearr_27276_27302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (9))){
var state_27266__$1 = state_27266;
var statearr_27277_27303 = state_27266__$1;
(statearr_27277_27303[(2)] = null);

(statearr_27277_27303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (5))){
var state_27266__$1 = state_27266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27278_27304 = state_27266__$1;
(statearr_27278_27304[(1)] = (8));

} else {
var statearr_27279_27305 = state_27266__$1;
(statearr_27279_27305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (14))){
var inst_27260 = (state_27266[(2)]);
var state_27266__$1 = state_27266;
var statearr_27280_27306 = state_27266__$1;
(statearr_27280_27306[(2)] = inst_27260);

(statearr_27280_27306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (10))){
var inst_27252 = (state_27266[(2)]);
var state_27266__$1 = state_27266;
var statearr_27281_27307 = state_27266__$1;
(statearr_27281_27307[(2)] = inst_27252);

(statearr_27281_27307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (8))){
var inst_27249 = cljs.core.async.close_BANG_.call(null,to);
var state_27266__$1 = state_27266;
var statearr_27282_27308 = state_27266__$1;
(statearr_27282_27308[(2)] = inst_27249);

(statearr_27282_27308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___27294))
;
return ((function (switch__18911__auto__,c__18976__auto___27294){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_27286 = [null,null,null,null,null,null,null,null];
(statearr_27286[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_27286[(1)] = (1));

return statearr_27286;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_27266){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_27266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e27287){if((e27287 instanceof Object)){
var ex__18915__auto__ = e27287;
var statearr_27288_27309 = state_27266;
(statearr_27288_27309[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27310 = state_27266;
state_27266 = G__27310;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_27266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_27266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___27294))
})();
var state__18978__auto__ = (function (){var statearr_27289 = f__18977__auto__.call(null);
(statearr_27289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___27294);

return statearr_27289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___27294))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27494){
var vec__27495 = p__27494;
var v = cljs.core.nth.call(null,vec__27495,(0),null);
var p = cljs.core.nth.call(null,vec__27495,(1),null);
var job = vec__27495;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18976__auto___27677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___27677,res,vec__27495,v,p,job,jobs,results){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___27677,res,vec__27495,v,p,job,jobs,results){
return (function (state_27500){
var state_val_27501 = (state_27500[(1)]);
if((state_val_27501 === (1))){
var state_27500__$1 = state_27500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27500__$1,(2),res,v);
} else {
if((state_val_27501 === (2))){
var inst_27497 = (state_27500[(2)]);
var inst_27498 = cljs.core.async.close_BANG_.call(null,res);
var state_27500__$1 = (function (){var statearr_27502 = state_27500;
(statearr_27502[(7)] = inst_27497);

return statearr_27502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27500__$1,inst_27498);
} else {
return null;
}
}
});})(c__18976__auto___27677,res,vec__27495,v,p,job,jobs,results))
;
return ((function (switch__18911__auto__,c__18976__auto___27677,res,vec__27495,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0 = (function (){
var statearr_27506 = [null,null,null,null,null,null,null,null];
(statearr_27506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__);

(statearr_27506[(1)] = (1));

return statearr_27506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1 = (function (state_27500){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_27500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e27507){if((e27507 instanceof Object)){
var ex__18915__auto__ = e27507;
var statearr_27508_27678 = state_27500;
(statearr_27508_27678[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27679 = state_27500;
state_27500 = G__27679;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = function(state_27500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1.call(this,state_27500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___27677,res,vec__27495,v,p,job,jobs,results))
})();
var state__18978__auto__ = (function (){var statearr_27509 = f__18977__auto__.call(null);
(statearr_27509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___27677);

return statearr_27509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___27677,res,vec__27495,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27510){
var vec__27511 = p__27510;
var v = cljs.core.nth.call(null,vec__27511,(0),null);
var p = cljs.core.nth.call(null,vec__27511,(1),null);
var job = vec__27511;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17796__auto___27680 = n;
var __27681 = (0);
while(true){
if((__27681 < n__17796__auto___27680)){
var G__27512_27682 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27512_27682) {
case "compute":
var c__18976__auto___27684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27681,c__18976__auto___27684,G__27512_27682,n__17796__auto___27680,jobs,results,process,async){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (__27681,c__18976__auto___27684,G__27512_27682,n__17796__auto___27680,jobs,results,process,async){
return (function (state_27525){
var state_val_27526 = (state_27525[(1)]);
if((state_val_27526 === (1))){
var state_27525__$1 = state_27525;
var statearr_27527_27685 = state_27525__$1;
(statearr_27527_27685[(2)] = null);

(statearr_27527_27685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (2))){
var state_27525__$1 = state_27525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27525__$1,(4),jobs);
} else {
if((state_val_27526 === (3))){
var inst_27523 = (state_27525[(2)]);
var state_27525__$1 = state_27525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27525__$1,inst_27523);
} else {
if((state_val_27526 === (4))){
var inst_27515 = (state_27525[(2)]);
var inst_27516 = process.call(null,inst_27515);
var state_27525__$1 = state_27525;
if(cljs.core.truth_(inst_27516)){
var statearr_27528_27686 = state_27525__$1;
(statearr_27528_27686[(1)] = (5));

} else {
var statearr_27529_27687 = state_27525__$1;
(statearr_27529_27687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (5))){
var state_27525__$1 = state_27525;
var statearr_27530_27688 = state_27525__$1;
(statearr_27530_27688[(2)] = null);

(statearr_27530_27688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (6))){
var state_27525__$1 = state_27525;
var statearr_27531_27689 = state_27525__$1;
(statearr_27531_27689[(2)] = null);

(statearr_27531_27689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (7))){
var inst_27521 = (state_27525[(2)]);
var state_27525__$1 = state_27525;
var statearr_27532_27690 = state_27525__$1;
(statearr_27532_27690[(2)] = inst_27521);

(statearr_27532_27690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27681,c__18976__auto___27684,G__27512_27682,n__17796__auto___27680,jobs,results,process,async))
;
return ((function (__27681,switch__18911__auto__,c__18976__auto___27684,G__27512_27682,n__17796__auto___27680,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0 = (function (){
var statearr_27536 = [null,null,null,null,null,null,null];
(statearr_27536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__);

(statearr_27536[(1)] = (1));

return statearr_27536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1 = (function (state_27525){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_27525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e27537){if((e27537 instanceof Object)){
var ex__18915__auto__ = e27537;
var statearr_27538_27691 = state_27525;
(statearr_27538_27691[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27692 = state_27525;
state_27525 = G__27692;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = function(state_27525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1.call(this,state_27525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__;
})()
;})(__27681,switch__18911__auto__,c__18976__auto___27684,G__27512_27682,n__17796__auto___27680,jobs,results,process,async))
})();
var state__18978__auto__ = (function (){var statearr_27539 = f__18977__auto__.call(null);
(statearr_27539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___27684);

return statearr_27539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(__27681,c__18976__auto___27684,G__27512_27682,n__17796__auto___27680,jobs,results,process,async))
);


break;
case "async":
var c__18976__auto___27693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27681,c__18976__auto___27693,G__27512_27682,n__17796__auto___27680,jobs,results,process,async){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (__27681,c__18976__auto___27693,G__27512_27682,n__17796__auto___27680,jobs,results,process,async){
return (function (state_27552){
var state_val_27553 = (state_27552[(1)]);
if((state_val_27553 === (1))){
var state_27552__$1 = state_27552;
var statearr_27554_27694 = state_27552__$1;
(statearr_27554_27694[(2)] = null);

(statearr_27554_27694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (2))){
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27552__$1,(4),jobs);
} else {
if((state_val_27553 === (3))){
var inst_27550 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27552__$1,inst_27550);
} else {
if((state_val_27553 === (4))){
var inst_27542 = (state_27552[(2)]);
var inst_27543 = async.call(null,inst_27542);
var state_27552__$1 = state_27552;
if(cljs.core.truth_(inst_27543)){
var statearr_27555_27695 = state_27552__$1;
(statearr_27555_27695[(1)] = (5));

} else {
var statearr_27556_27696 = state_27552__$1;
(statearr_27556_27696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (5))){
var state_27552__$1 = state_27552;
var statearr_27557_27697 = state_27552__$1;
(statearr_27557_27697[(2)] = null);

(statearr_27557_27697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (6))){
var state_27552__$1 = state_27552;
var statearr_27558_27698 = state_27552__$1;
(statearr_27558_27698[(2)] = null);

(statearr_27558_27698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (7))){
var inst_27548 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
var statearr_27559_27699 = state_27552__$1;
(statearr_27559_27699[(2)] = inst_27548);

(statearr_27559_27699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27681,c__18976__auto___27693,G__27512_27682,n__17796__auto___27680,jobs,results,process,async))
;
return ((function (__27681,switch__18911__auto__,c__18976__auto___27693,G__27512_27682,n__17796__auto___27680,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0 = (function (){
var statearr_27563 = [null,null,null,null,null,null,null];
(statearr_27563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__);

(statearr_27563[(1)] = (1));

return statearr_27563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1 = (function (state_27552){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_27552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e27564){if((e27564 instanceof Object)){
var ex__18915__auto__ = e27564;
var statearr_27565_27700 = state_27552;
(statearr_27565_27700[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27701 = state_27552;
state_27552 = G__27701;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = function(state_27552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1.call(this,state_27552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__;
})()
;})(__27681,switch__18911__auto__,c__18976__auto___27693,G__27512_27682,n__17796__auto___27680,jobs,results,process,async))
})();
var state__18978__auto__ = (function (){var statearr_27566 = f__18977__auto__.call(null);
(statearr_27566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___27693);

return statearr_27566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(__27681,c__18976__auto___27693,G__27512_27682,n__17796__auto___27680,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27702 = (__27681 + (1));
__27681 = G__27702;
continue;
} else {
}
break;
}

var c__18976__auto___27703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___27703,jobs,results,process,async){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___27703,jobs,results,process,async){
return (function (state_27588){
var state_val_27589 = (state_27588[(1)]);
if((state_val_27589 === (1))){
var state_27588__$1 = state_27588;
var statearr_27590_27704 = state_27588__$1;
(statearr_27590_27704[(2)] = null);

(statearr_27590_27704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (2))){
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27588__$1,(4),from);
} else {
if((state_val_27589 === (3))){
var inst_27586 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27588__$1,inst_27586);
} else {
if((state_val_27589 === (4))){
var inst_27569 = (state_27588[(7)]);
var inst_27569__$1 = (state_27588[(2)]);
var inst_27570 = (inst_27569__$1 == null);
var state_27588__$1 = (function (){var statearr_27591 = state_27588;
(statearr_27591[(7)] = inst_27569__$1);

return statearr_27591;
})();
if(cljs.core.truth_(inst_27570)){
var statearr_27592_27705 = state_27588__$1;
(statearr_27592_27705[(1)] = (5));

} else {
var statearr_27593_27706 = state_27588__$1;
(statearr_27593_27706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (5))){
var inst_27572 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27588__$1 = state_27588;
var statearr_27594_27707 = state_27588__$1;
(statearr_27594_27707[(2)] = inst_27572);

(statearr_27594_27707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (6))){
var inst_27574 = (state_27588[(8)]);
var inst_27569 = (state_27588[(7)]);
var inst_27574__$1 = cljs.core.async.chan.call(null,(1));
var inst_27575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27576 = [inst_27569,inst_27574__$1];
var inst_27577 = (new cljs.core.PersistentVector(null,2,(5),inst_27575,inst_27576,null));
var state_27588__$1 = (function (){var statearr_27595 = state_27588;
(statearr_27595[(8)] = inst_27574__$1);

return statearr_27595;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27588__$1,(8),jobs,inst_27577);
} else {
if((state_val_27589 === (7))){
var inst_27584 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27596_27708 = state_27588__$1;
(statearr_27596_27708[(2)] = inst_27584);

(statearr_27596_27708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (8))){
var inst_27574 = (state_27588[(8)]);
var inst_27579 = (state_27588[(2)]);
var state_27588__$1 = (function (){var statearr_27597 = state_27588;
(statearr_27597[(9)] = inst_27579);

return statearr_27597;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27588__$1,(9),results,inst_27574);
} else {
if((state_val_27589 === (9))){
var inst_27581 = (state_27588[(2)]);
var state_27588__$1 = (function (){var statearr_27598 = state_27588;
(statearr_27598[(10)] = inst_27581);

return statearr_27598;
})();
var statearr_27599_27709 = state_27588__$1;
(statearr_27599_27709[(2)] = null);

(statearr_27599_27709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___27703,jobs,results,process,async))
;
return ((function (switch__18911__auto__,c__18976__auto___27703,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0 = (function (){
var statearr_27603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__);

(statearr_27603[(1)] = (1));

return statearr_27603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1 = (function (state_27588){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_27588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e27604){if((e27604 instanceof Object)){
var ex__18915__auto__ = e27604;
var statearr_27605_27710 = state_27588;
(statearr_27605_27710[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27711 = state_27588;
state_27588 = G__27711;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = function(state_27588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1.call(this,state_27588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___27703,jobs,results,process,async))
})();
var state__18978__auto__ = (function (){var statearr_27606 = f__18977__auto__.call(null);
(statearr_27606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___27703);

return statearr_27606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___27703,jobs,results,process,async))
);


var c__18976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto__,jobs,results,process,async){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto__,jobs,results,process,async){
return (function (state_27644){
var state_val_27645 = (state_27644[(1)]);
if((state_val_27645 === (7))){
var inst_27640 = (state_27644[(2)]);
var state_27644__$1 = state_27644;
var statearr_27646_27712 = state_27644__$1;
(statearr_27646_27712[(2)] = inst_27640);

(statearr_27646_27712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (20))){
var state_27644__$1 = state_27644;
var statearr_27647_27713 = state_27644__$1;
(statearr_27647_27713[(2)] = null);

(statearr_27647_27713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (1))){
var state_27644__$1 = state_27644;
var statearr_27648_27714 = state_27644__$1;
(statearr_27648_27714[(2)] = null);

(statearr_27648_27714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (4))){
var inst_27609 = (state_27644[(7)]);
var inst_27609__$1 = (state_27644[(2)]);
var inst_27610 = (inst_27609__$1 == null);
var state_27644__$1 = (function (){var statearr_27649 = state_27644;
(statearr_27649[(7)] = inst_27609__$1);

return statearr_27649;
})();
if(cljs.core.truth_(inst_27610)){
var statearr_27650_27715 = state_27644__$1;
(statearr_27650_27715[(1)] = (5));

} else {
var statearr_27651_27716 = state_27644__$1;
(statearr_27651_27716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (15))){
var inst_27622 = (state_27644[(8)]);
var state_27644__$1 = state_27644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27644__$1,(18),to,inst_27622);
} else {
if((state_val_27645 === (21))){
var inst_27635 = (state_27644[(2)]);
var state_27644__$1 = state_27644;
var statearr_27652_27717 = state_27644__$1;
(statearr_27652_27717[(2)] = inst_27635);

(statearr_27652_27717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (13))){
var inst_27637 = (state_27644[(2)]);
var state_27644__$1 = (function (){var statearr_27653 = state_27644;
(statearr_27653[(9)] = inst_27637);

return statearr_27653;
})();
var statearr_27654_27718 = state_27644__$1;
(statearr_27654_27718[(2)] = null);

(statearr_27654_27718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (6))){
var inst_27609 = (state_27644[(7)]);
var state_27644__$1 = state_27644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27644__$1,(11),inst_27609);
} else {
if((state_val_27645 === (17))){
var inst_27630 = (state_27644[(2)]);
var state_27644__$1 = state_27644;
if(cljs.core.truth_(inst_27630)){
var statearr_27655_27719 = state_27644__$1;
(statearr_27655_27719[(1)] = (19));

} else {
var statearr_27656_27720 = state_27644__$1;
(statearr_27656_27720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (3))){
var inst_27642 = (state_27644[(2)]);
var state_27644__$1 = state_27644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27644__$1,inst_27642);
} else {
if((state_val_27645 === (12))){
var inst_27619 = (state_27644[(10)]);
var state_27644__$1 = state_27644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27644__$1,(14),inst_27619);
} else {
if((state_val_27645 === (2))){
var state_27644__$1 = state_27644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27644__$1,(4),results);
} else {
if((state_val_27645 === (19))){
var state_27644__$1 = state_27644;
var statearr_27657_27721 = state_27644__$1;
(statearr_27657_27721[(2)] = null);

(statearr_27657_27721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (11))){
var inst_27619 = (state_27644[(2)]);
var state_27644__$1 = (function (){var statearr_27658 = state_27644;
(statearr_27658[(10)] = inst_27619);

return statearr_27658;
})();
var statearr_27659_27722 = state_27644__$1;
(statearr_27659_27722[(2)] = null);

(statearr_27659_27722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (9))){
var state_27644__$1 = state_27644;
var statearr_27660_27723 = state_27644__$1;
(statearr_27660_27723[(2)] = null);

(statearr_27660_27723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (5))){
var state_27644__$1 = state_27644;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27661_27724 = state_27644__$1;
(statearr_27661_27724[(1)] = (8));

} else {
var statearr_27662_27725 = state_27644__$1;
(statearr_27662_27725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (14))){
var inst_27624 = (state_27644[(11)]);
var inst_27622 = (state_27644[(8)]);
var inst_27622__$1 = (state_27644[(2)]);
var inst_27623 = (inst_27622__$1 == null);
var inst_27624__$1 = cljs.core.not.call(null,inst_27623);
var state_27644__$1 = (function (){var statearr_27663 = state_27644;
(statearr_27663[(11)] = inst_27624__$1);

(statearr_27663[(8)] = inst_27622__$1);

return statearr_27663;
})();
if(inst_27624__$1){
var statearr_27664_27726 = state_27644__$1;
(statearr_27664_27726[(1)] = (15));

} else {
var statearr_27665_27727 = state_27644__$1;
(statearr_27665_27727[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (16))){
var inst_27624 = (state_27644[(11)]);
var state_27644__$1 = state_27644;
var statearr_27666_27728 = state_27644__$1;
(statearr_27666_27728[(2)] = inst_27624);

(statearr_27666_27728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (10))){
var inst_27616 = (state_27644[(2)]);
var state_27644__$1 = state_27644;
var statearr_27667_27729 = state_27644__$1;
(statearr_27667_27729[(2)] = inst_27616);

(statearr_27667_27729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (18))){
var inst_27627 = (state_27644[(2)]);
var state_27644__$1 = state_27644;
var statearr_27668_27730 = state_27644__$1;
(statearr_27668_27730[(2)] = inst_27627);

(statearr_27668_27730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (8))){
var inst_27613 = cljs.core.async.close_BANG_.call(null,to);
var state_27644__$1 = state_27644;
var statearr_27669_27731 = state_27644__$1;
(statearr_27669_27731[(2)] = inst_27613);

(statearr_27669_27731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto__,jobs,results,process,async))
;
return ((function (switch__18911__auto__,c__18976__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0 = (function (){
var statearr_27673 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27673[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__);

(statearr_27673[(1)] = (1));

return statearr_27673;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1 = (function (state_27644){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_27644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e27674){if((e27674 instanceof Object)){
var ex__18915__auto__ = e27674;
var statearr_27675_27732 = state_27644;
(statearr_27675_27732[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27733 = state_27644;
state_27644 = G__27733;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__ = function(state_27644){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1.call(this,state_27644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto__,jobs,results,process,async))
})();
var state__18978__auto__ = (function (){var statearr_27676 = f__18977__auto__.call(null);
(statearr_27676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto__);

return statearr_27676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto__,jobs,results,process,async))
);

return c__18976__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27734 = [];
var len__17951__auto___27737 = arguments.length;
var i__17952__auto___27738 = (0);
while(true){
if((i__17952__auto___27738 < len__17951__auto___27737)){
args27734.push((arguments[i__17952__auto___27738]));

var G__27739 = (i__17952__auto___27738 + (1));
i__17952__auto___27738 = G__27739;
continue;
} else {
}
break;
}

var G__27736 = args27734.length;
switch (G__27736) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27734.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27741 = [];
var len__17951__auto___27744 = arguments.length;
var i__17952__auto___27745 = (0);
while(true){
if((i__17952__auto___27745 < len__17951__auto___27744)){
args27741.push((arguments[i__17952__auto___27745]));

var G__27746 = (i__17952__auto___27745 + (1));
i__17952__auto___27745 = G__27746;
continue;
} else {
}
break;
}

var G__27743 = args27741.length;
switch (G__27743) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27741.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27748 = [];
var len__17951__auto___27801 = arguments.length;
var i__17952__auto___27802 = (0);
while(true){
if((i__17952__auto___27802 < len__17951__auto___27801)){
args27748.push((arguments[i__17952__auto___27802]));

var G__27803 = (i__17952__auto___27802 + (1));
i__17952__auto___27802 = G__27803;
continue;
} else {
}
break;
}

var G__27750 = args27748.length;
switch (G__27750) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27748.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18976__auto___27805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___27805,tc,fc){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___27805,tc,fc){
return (function (state_27776){
var state_val_27777 = (state_27776[(1)]);
if((state_val_27777 === (7))){
var inst_27772 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27778_27806 = state_27776__$1;
(statearr_27778_27806[(2)] = inst_27772);

(statearr_27778_27806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (1))){
var state_27776__$1 = state_27776;
var statearr_27779_27807 = state_27776__$1;
(statearr_27779_27807[(2)] = null);

(statearr_27779_27807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (4))){
var inst_27753 = (state_27776[(7)]);
var inst_27753__$1 = (state_27776[(2)]);
var inst_27754 = (inst_27753__$1 == null);
var state_27776__$1 = (function (){var statearr_27780 = state_27776;
(statearr_27780[(7)] = inst_27753__$1);

return statearr_27780;
})();
if(cljs.core.truth_(inst_27754)){
var statearr_27781_27808 = state_27776__$1;
(statearr_27781_27808[(1)] = (5));

} else {
var statearr_27782_27809 = state_27776__$1;
(statearr_27782_27809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (13))){
var state_27776__$1 = state_27776;
var statearr_27783_27810 = state_27776__$1;
(statearr_27783_27810[(2)] = null);

(statearr_27783_27810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (6))){
var inst_27753 = (state_27776[(7)]);
var inst_27759 = p.call(null,inst_27753);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27759)){
var statearr_27784_27811 = state_27776__$1;
(statearr_27784_27811[(1)] = (9));

} else {
var statearr_27785_27812 = state_27776__$1;
(statearr_27785_27812[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (3))){
var inst_27774 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27776__$1,inst_27774);
} else {
if((state_val_27777 === (12))){
var state_27776__$1 = state_27776;
var statearr_27786_27813 = state_27776__$1;
(statearr_27786_27813[(2)] = null);

(statearr_27786_27813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (2))){
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27776__$1,(4),ch);
} else {
if((state_val_27777 === (11))){
var inst_27753 = (state_27776[(7)]);
var inst_27763 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27776__$1,(8),inst_27763,inst_27753);
} else {
if((state_val_27777 === (9))){
var state_27776__$1 = state_27776;
var statearr_27787_27814 = state_27776__$1;
(statearr_27787_27814[(2)] = tc);

(statearr_27787_27814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (5))){
var inst_27756 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27757 = cljs.core.async.close_BANG_.call(null,fc);
var state_27776__$1 = (function (){var statearr_27788 = state_27776;
(statearr_27788[(8)] = inst_27756);

return statearr_27788;
})();
var statearr_27789_27815 = state_27776__$1;
(statearr_27789_27815[(2)] = inst_27757);

(statearr_27789_27815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (14))){
var inst_27770 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27790_27816 = state_27776__$1;
(statearr_27790_27816[(2)] = inst_27770);

(statearr_27790_27816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (10))){
var state_27776__$1 = state_27776;
var statearr_27791_27817 = state_27776__$1;
(statearr_27791_27817[(2)] = fc);

(statearr_27791_27817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (8))){
var inst_27765 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27765)){
var statearr_27792_27818 = state_27776__$1;
(statearr_27792_27818[(1)] = (12));

} else {
var statearr_27793_27819 = state_27776__$1;
(statearr_27793_27819[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___27805,tc,fc))
;
return ((function (switch__18911__auto__,c__18976__auto___27805,tc,fc){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_27797 = [null,null,null,null,null,null,null,null,null];
(statearr_27797[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_27797[(1)] = (1));

return statearr_27797;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_27776){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_27776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e27798){if((e27798 instanceof Object)){
var ex__18915__auto__ = e27798;
var statearr_27799_27820 = state_27776;
(statearr_27799_27820[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27821 = state_27776;
state_27776 = G__27821;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_27776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_27776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___27805,tc,fc))
})();
var state__18978__auto__ = (function (){var statearr_27800 = f__18977__auto__.call(null);
(statearr_27800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___27805);

return statearr_27800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___27805,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto__){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto__){
return (function (state_27868){
var state_val_27869 = (state_27868[(1)]);
if((state_val_27869 === (1))){
var inst_27854 = init;
var state_27868__$1 = (function (){var statearr_27870 = state_27868;
(statearr_27870[(7)] = inst_27854);

return statearr_27870;
})();
var statearr_27871_27886 = state_27868__$1;
(statearr_27871_27886[(2)] = null);

(statearr_27871_27886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (2))){
var state_27868__$1 = state_27868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27868__$1,(4),ch);
} else {
if((state_val_27869 === (3))){
var inst_27866 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27868__$1,inst_27866);
} else {
if((state_val_27869 === (4))){
var inst_27857 = (state_27868[(8)]);
var inst_27857__$1 = (state_27868[(2)]);
var inst_27858 = (inst_27857__$1 == null);
var state_27868__$1 = (function (){var statearr_27872 = state_27868;
(statearr_27872[(8)] = inst_27857__$1);

return statearr_27872;
})();
if(cljs.core.truth_(inst_27858)){
var statearr_27873_27887 = state_27868__$1;
(statearr_27873_27887[(1)] = (5));

} else {
var statearr_27874_27888 = state_27868__$1;
(statearr_27874_27888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (5))){
var inst_27854 = (state_27868[(7)]);
var state_27868__$1 = state_27868;
var statearr_27875_27889 = state_27868__$1;
(statearr_27875_27889[(2)] = inst_27854);

(statearr_27875_27889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (6))){
var inst_27857 = (state_27868[(8)]);
var inst_27854 = (state_27868[(7)]);
var inst_27861 = f.call(null,inst_27854,inst_27857);
var inst_27854__$1 = inst_27861;
var state_27868__$1 = (function (){var statearr_27876 = state_27868;
(statearr_27876[(7)] = inst_27854__$1);

return statearr_27876;
})();
var statearr_27877_27890 = state_27868__$1;
(statearr_27877_27890[(2)] = null);

(statearr_27877_27890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (7))){
var inst_27864 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
var statearr_27878_27891 = state_27868__$1;
(statearr_27878_27891[(2)] = inst_27864);

(statearr_27878_27891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18976__auto__))
;
return ((function (switch__18911__auto__,c__18976__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18912__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18912__auto____0 = (function (){
var statearr_27882 = [null,null,null,null,null,null,null,null,null];
(statearr_27882[(0)] = cljs$core$async$reduce_$_state_machine__18912__auto__);

(statearr_27882[(1)] = (1));

return statearr_27882;
});
var cljs$core$async$reduce_$_state_machine__18912__auto____1 = (function (state_27868){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_27868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e27883){if((e27883 instanceof Object)){
var ex__18915__auto__ = e27883;
var statearr_27884_27892 = state_27868;
(statearr_27884_27892[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27893 = state_27868;
state_27868 = G__27893;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18912__auto__ = function(state_27868){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18912__auto____1.call(this,state_27868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18912__auto____0;
cljs$core$async$reduce_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18912__auto____1;
return cljs$core$async$reduce_$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto__))
})();
var state__18978__auto__ = (function (){var statearr_27885 = f__18977__auto__.call(null);
(statearr_27885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto__);

return statearr_27885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto__))
);

return c__18976__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27894 = [];
var len__17951__auto___27946 = arguments.length;
var i__17952__auto___27947 = (0);
while(true){
if((i__17952__auto___27947 < len__17951__auto___27946)){
args27894.push((arguments[i__17952__auto___27947]));

var G__27948 = (i__17952__auto___27947 + (1));
i__17952__auto___27947 = G__27948;
continue;
} else {
}
break;
}

var G__27896 = args27894.length;
switch (G__27896) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27894.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto__){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto__){
return (function (state_27921){
var state_val_27922 = (state_27921[(1)]);
if((state_val_27922 === (7))){
var inst_27903 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27923_27950 = state_27921__$1;
(statearr_27923_27950[(2)] = inst_27903);

(statearr_27923_27950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (1))){
var inst_27897 = cljs.core.seq.call(null,coll);
var inst_27898 = inst_27897;
var state_27921__$1 = (function (){var statearr_27924 = state_27921;
(statearr_27924[(7)] = inst_27898);

return statearr_27924;
})();
var statearr_27925_27951 = state_27921__$1;
(statearr_27925_27951[(2)] = null);

(statearr_27925_27951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (4))){
var inst_27898 = (state_27921[(7)]);
var inst_27901 = cljs.core.first.call(null,inst_27898);
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27921__$1,(7),ch,inst_27901);
} else {
if((state_val_27922 === (13))){
var inst_27915 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27926_27952 = state_27921__$1;
(statearr_27926_27952[(2)] = inst_27915);

(statearr_27926_27952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (6))){
var inst_27906 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27906)){
var statearr_27927_27953 = state_27921__$1;
(statearr_27927_27953[(1)] = (8));

} else {
var statearr_27928_27954 = state_27921__$1;
(statearr_27928_27954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (3))){
var inst_27919 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27921__$1,inst_27919);
} else {
if((state_val_27922 === (12))){
var state_27921__$1 = state_27921;
var statearr_27929_27955 = state_27921__$1;
(statearr_27929_27955[(2)] = null);

(statearr_27929_27955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (2))){
var inst_27898 = (state_27921[(7)]);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27898)){
var statearr_27930_27956 = state_27921__$1;
(statearr_27930_27956[(1)] = (4));

} else {
var statearr_27931_27957 = state_27921__$1;
(statearr_27931_27957[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (11))){
var inst_27912 = cljs.core.async.close_BANG_.call(null,ch);
var state_27921__$1 = state_27921;
var statearr_27932_27958 = state_27921__$1;
(statearr_27932_27958[(2)] = inst_27912);

(statearr_27932_27958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (9))){
var state_27921__$1 = state_27921;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27933_27959 = state_27921__$1;
(statearr_27933_27959[(1)] = (11));

} else {
var statearr_27934_27960 = state_27921__$1;
(statearr_27934_27960[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (5))){
var inst_27898 = (state_27921[(7)]);
var state_27921__$1 = state_27921;
var statearr_27935_27961 = state_27921__$1;
(statearr_27935_27961[(2)] = inst_27898);

(statearr_27935_27961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (10))){
var inst_27917 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27936_27962 = state_27921__$1;
(statearr_27936_27962[(2)] = inst_27917);

(statearr_27936_27962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (8))){
var inst_27898 = (state_27921[(7)]);
var inst_27908 = cljs.core.next.call(null,inst_27898);
var inst_27898__$1 = inst_27908;
var state_27921__$1 = (function (){var statearr_27937 = state_27921;
(statearr_27937[(7)] = inst_27898__$1);

return statearr_27937;
})();
var statearr_27938_27963 = state_27921__$1;
(statearr_27938_27963[(2)] = null);

(statearr_27938_27963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto__))
;
return ((function (switch__18911__auto__,c__18976__auto__){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_27942 = [null,null,null,null,null,null,null,null];
(statearr_27942[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_27942[(1)] = (1));

return statearr_27942;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_27921){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_27921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e27943){if((e27943 instanceof Object)){
var ex__18915__auto__ = e27943;
var statearr_27944_27964 = state_27921;
(statearr_27944_27964[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27965 = state_27921;
state_27921 = G__27965;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_27921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_27921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto__))
})();
var state__18978__auto__ = (function (){var statearr_27945 = f__18977__auto__.call(null);
(statearr_27945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto__);

return statearr_27945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto__))
);

return c__18976__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17548__auto__ = (((_ == null))?null:_);
var m__17549__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,_);
} else {
var m__17549__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17548__auto__ = (((m == null))?null:m);
var m__17549__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17549__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17548__auto__ = (((m == null))?null:m);
var m__17549__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,m,ch);
} else {
var m__17549__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17548__auto__ = (((m == null))?null:m);
var m__17549__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,m);
} else {
var m__17549__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28187 = (function (mult,ch,cs,meta28188){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28188 = meta28188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28189,meta28188__$1){
var self__ = this;
var _28189__$1 = this;
return (new cljs.core.async.t_cljs$core$async28187(self__.mult,self__.ch,self__.cs,meta28188__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28189){
var self__ = this;
var _28189__$1 = this;
return self__.meta28188;
});})(cs))
;

cljs.core.async.t_cljs$core$async28187.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28187.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28187.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28187.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28187.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28187.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28187.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28188","meta28188",217035492,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28187";

cljs.core.async.t_cljs$core$async28187.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async28187");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28187 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28187(mult__$1,ch__$1,cs__$1,meta28188){
return (new cljs.core.async.t_cljs$core$async28187(mult__$1,ch__$1,cs__$1,meta28188));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28187(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18976__auto___28408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___28408,cs,m,dchan,dctr,done){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___28408,cs,m,dchan,dctr,done){
return (function (state_28320){
var state_val_28321 = (state_28320[(1)]);
if((state_val_28321 === (7))){
var inst_28316 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28322_28409 = state_28320__$1;
(statearr_28322_28409[(2)] = inst_28316);

(statearr_28322_28409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (20))){
var inst_28221 = (state_28320[(7)]);
var inst_28231 = cljs.core.first.call(null,inst_28221);
var inst_28232 = cljs.core.nth.call(null,inst_28231,(0),null);
var inst_28233 = cljs.core.nth.call(null,inst_28231,(1),null);
var state_28320__$1 = (function (){var statearr_28323 = state_28320;
(statearr_28323[(8)] = inst_28232);

return statearr_28323;
})();
if(cljs.core.truth_(inst_28233)){
var statearr_28324_28410 = state_28320__$1;
(statearr_28324_28410[(1)] = (22));

} else {
var statearr_28325_28411 = state_28320__$1;
(statearr_28325_28411[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (27))){
var inst_28261 = (state_28320[(9)]);
var inst_28268 = (state_28320[(10)]);
var inst_28263 = (state_28320[(11)]);
var inst_28192 = (state_28320[(12)]);
var inst_28268__$1 = cljs.core._nth.call(null,inst_28261,inst_28263);
var inst_28269 = cljs.core.async.put_BANG_.call(null,inst_28268__$1,inst_28192,done);
var state_28320__$1 = (function (){var statearr_28326 = state_28320;
(statearr_28326[(10)] = inst_28268__$1);

return statearr_28326;
})();
if(cljs.core.truth_(inst_28269)){
var statearr_28327_28412 = state_28320__$1;
(statearr_28327_28412[(1)] = (30));

} else {
var statearr_28328_28413 = state_28320__$1;
(statearr_28328_28413[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (1))){
var state_28320__$1 = state_28320;
var statearr_28329_28414 = state_28320__$1;
(statearr_28329_28414[(2)] = null);

(statearr_28329_28414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (24))){
var inst_28221 = (state_28320[(7)]);
var inst_28238 = (state_28320[(2)]);
var inst_28239 = cljs.core.next.call(null,inst_28221);
var inst_28201 = inst_28239;
var inst_28202 = null;
var inst_28203 = (0);
var inst_28204 = (0);
var state_28320__$1 = (function (){var statearr_28330 = state_28320;
(statearr_28330[(13)] = inst_28238);

(statearr_28330[(14)] = inst_28202);

(statearr_28330[(15)] = inst_28204);

(statearr_28330[(16)] = inst_28203);

(statearr_28330[(17)] = inst_28201);

return statearr_28330;
})();
var statearr_28331_28415 = state_28320__$1;
(statearr_28331_28415[(2)] = null);

(statearr_28331_28415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (39))){
var state_28320__$1 = state_28320;
var statearr_28335_28416 = state_28320__$1;
(statearr_28335_28416[(2)] = null);

(statearr_28335_28416[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (4))){
var inst_28192 = (state_28320[(12)]);
var inst_28192__$1 = (state_28320[(2)]);
var inst_28193 = (inst_28192__$1 == null);
var state_28320__$1 = (function (){var statearr_28336 = state_28320;
(statearr_28336[(12)] = inst_28192__$1);

return statearr_28336;
})();
if(cljs.core.truth_(inst_28193)){
var statearr_28337_28417 = state_28320__$1;
(statearr_28337_28417[(1)] = (5));

} else {
var statearr_28338_28418 = state_28320__$1;
(statearr_28338_28418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (15))){
var inst_28202 = (state_28320[(14)]);
var inst_28204 = (state_28320[(15)]);
var inst_28203 = (state_28320[(16)]);
var inst_28201 = (state_28320[(17)]);
var inst_28217 = (state_28320[(2)]);
var inst_28218 = (inst_28204 + (1));
var tmp28332 = inst_28202;
var tmp28333 = inst_28203;
var tmp28334 = inst_28201;
var inst_28201__$1 = tmp28334;
var inst_28202__$1 = tmp28332;
var inst_28203__$1 = tmp28333;
var inst_28204__$1 = inst_28218;
var state_28320__$1 = (function (){var statearr_28339 = state_28320;
(statearr_28339[(18)] = inst_28217);

(statearr_28339[(14)] = inst_28202__$1);

(statearr_28339[(15)] = inst_28204__$1);

(statearr_28339[(16)] = inst_28203__$1);

(statearr_28339[(17)] = inst_28201__$1);

return statearr_28339;
})();
var statearr_28340_28419 = state_28320__$1;
(statearr_28340_28419[(2)] = null);

(statearr_28340_28419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (21))){
var inst_28242 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28344_28420 = state_28320__$1;
(statearr_28344_28420[(2)] = inst_28242);

(statearr_28344_28420[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (31))){
var inst_28268 = (state_28320[(10)]);
var inst_28272 = done.call(null,null);
var inst_28273 = cljs.core.async.untap_STAR_.call(null,m,inst_28268);
var state_28320__$1 = (function (){var statearr_28345 = state_28320;
(statearr_28345[(19)] = inst_28272);

return statearr_28345;
})();
var statearr_28346_28421 = state_28320__$1;
(statearr_28346_28421[(2)] = inst_28273);

(statearr_28346_28421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (32))){
var inst_28261 = (state_28320[(9)]);
var inst_28260 = (state_28320[(20)]);
var inst_28262 = (state_28320[(21)]);
var inst_28263 = (state_28320[(11)]);
var inst_28275 = (state_28320[(2)]);
var inst_28276 = (inst_28263 + (1));
var tmp28341 = inst_28261;
var tmp28342 = inst_28260;
var tmp28343 = inst_28262;
var inst_28260__$1 = tmp28342;
var inst_28261__$1 = tmp28341;
var inst_28262__$1 = tmp28343;
var inst_28263__$1 = inst_28276;
var state_28320__$1 = (function (){var statearr_28347 = state_28320;
(statearr_28347[(9)] = inst_28261__$1);

(statearr_28347[(20)] = inst_28260__$1);

(statearr_28347[(22)] = inst_28275);

(statearr_28347[(21)] = inst_28262__$1);

(statearr_28347[(11)] = inst_28263__$1);

return statearr_28347;
})();
var statearr_28348_28422 = state_28320__$1;
(statearr_28348_28422[(2)] = null);

(statearr_28348_28422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (40))){
var inst_28288 = (state_28320[(23)]);
var inst_28292 = done.call(null,null);
var inst_28293 = cljs.core.async.untap_STAR_.call(null,m,inst_28288);
var state_28320__$1 = (function (){var statearr_28349 = state_28320;
(statearr_28349[(24)] = inst_28292);

return statearr_28349;
})();
var statearr_28350_28423 = state_28320__$1;
(statearr_28350_28423[(2)] = inst_28293);

(statearr_28350_28423[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (33))){
var inst_28279 = (state_28320[(25)]);
var inst_28281 = cljs.core.chunked_seq_QMARK_.call(null,inst_28279);
var state_28320__$1 = state_28320;
if(inst_28281){
var statearr_28351_28424 = state_28320__$1;
(statearr_28351_28424[(1)] = (36));

} else {
var statearr_28352_28425 = state_28320__$1;
(statearr_28352_28425[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (13))){
var inst_28211 = (state_28320[(26)]);
var inst_28214 = cljs.core.async.close_BANG_.call(null,inst_28211);
var state_28320__$1 = state_28320;
var statearr_28353_28426 = state_28320__$1;
(statearr_28353_28426[(2)] = inst_28214);

(statearr_28353_28426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (22))){
var inst_28232 = (state_28320[(8)]);
var inst_28235 = cljs.core.async.close_BANG_.call(null,inst_28232);
var state_28320__$1 = state_28320;
var statearr_28354_28427 = state_28320__$1;
(statearr_28354_28427[(2)] = inst_28235);

(statearr_28354_28427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (36))){
var inst_28279 = (state_28320[(25)]);
var inst_28283 = cljs.core.chunk_first.call(null,inst_28279);
var inst_28284 = cljs.core.chunk_rest.call(null,inst_28279);
var inst_28285 = cljs.core.count.call(null,inst_28283);
var inst_28260 = inst_28284;
var inst_28261 = inst_28283;
var inst_28262 = inst_28285;
var inst_28263 = (0);
var state_28320__$1 = (function (){var statearr_28355 = state_28320;
(statearr_28355[(9)] = inst_28261);

(statearr_28355[(20)] = inst_28260);

(statearr_28355[(21)] = inst_28262);

(statearr_28355[(11)] = inst_28263);

return statearr_28355;
})();
var statearr_28356_28428 = state_28320__$1;
(statearr_28356_28428[(2)] = null);

(statearr_28356_28428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (41))){
var inst_28279 = (state_28320[(25)]);
var inst_28295 = (state_28320[(2)]);
var inst_28296 = cljs.core.next.call(null,inst_28279);
var inst_28260 = inst_28296;
var inst_28261 = null;
var inst_28262 = (0);
var inst_28263 = (0);
var state_28320__$1 = (function (){var statearr_28357 = state_28320;
(statearr_28357[(9)] = inst_28261);

(statearr_28357[(20)] = inst_28260);

(statearr_28357[(21)] = inst_28262);

(statearr_28357[(27)] = inst_28295);

(statearr_28357[(11)] = inst_28263);

return statearr_28357;
})();
var statearr_28358_28429 = state_28320__$1;
(statearr_28358_28429[(2)] = null);

(statearr_28358_28429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (43))){
var state_28320__$1 = state_28320;
var statearr_28359_28430 = state_28320__$1;
(statearr_28359_28430[(2)] = null);

(statearr_28359_28430[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (29))){
var inst_28304 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28360_28431 = state_28320__$1;
(statearr_28360_28431[(2)] = inst_28304);

(statearr_28360_28431[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (44))){
var inst_28313 = (state_28320[(2)]);
var state_28320__$1 = (function (){var statearr_28361 = state_28320;
(statearr_28361[(28)] = inst_28313);

return statearr_28361;
})();
var statearr_28362_28432 = state_28320__$1;
(statearr_28362_28432[(2)] = null);

(statearr_28362_28432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (6))){
var inst_28252 = (state_28320[(29)]);
var inst_28251 = cljs.core.deref.call(null,cs);
var inst_28252__$1 = cljs.core.keys.call(null,inst_28251);
var inst_28253 = cljs.core.count.call(null,inst_28252__$1);
var inst_28254 = cljs.core.reset_BANG_.call(null,dctr,inst_28253);
var inst_28259 = cljs.core.seq.call(null,inst_28252__$1);
var inst_28260 = inst_28259;
var inst_28261 = null;
var inst_28262 = (0);
var inst_28263 = (0);
var state_28320__$1 = (function (){var statearr_28363 = state_28320;
(statearr_28363[(9)] = inst_28261);

(statearr_28363[(20)] = inst_28260);

(statearr_28363[(30)] = inst_28254);

(statearr_28363[(29)] = inst_28252__$1);

(statearr_28363[(21)] = inst_28262);

(statearr_28363[(11)] = inst_28263);

return statearr_28363;
})();
var statearr_28364_28433 = state_28320__$1;
(statearr_28364_28433[(2)] = null);

(statearr_28364_28433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (28))){
var inst_28279 = (state_28320[(25)]);
var inst_28260 = (state_28320[(20)]);
var inst_28279__$1 = cljs.core.seq.call(null,inst_28260);
var state_28320__$1 = (function (){var statearr_28365 = state_28320;
(statearr_28365[(25)] = inst_28279__$1);

return statearr_28365;
})();
if(inst_28279__$1){
var statearr_28366_28434 = state_28320__$1;
(statearr_28366_28434[(1)] = (33));

} else {
var statearr_28367_28435 = state_28320__$1;
(statearr_28367_28435[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (25))){
var inst_28262 = (state_28320[(21)]);
var inst_28263 = (state_28320[(11)]);
var inst_28265 = (inst_28263 < inst_28262);
var inst_28266 = inst_28265;
var state_28320__$1 = state_28320;
if(cljs.core.truth_(inst_28266)){
var statearr_28368_28436 = state_28320__$1;
(statearr_28368_28436[(1)] = (27));

} else {
var statearr_28369_28437 = state_28320__$1;
(statearr_28369_28437[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (34))){
var state_28320__$1 = state_28320;
var statearr_28370_28438 = state_28320__$1;
(statearr_28370_28438[(2)] = null);

(statearr_28370_28438[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (17))){
var state_28320__$1 = state_28320;
var statearr_28371_28439 = state_28320__$1;
(statearr_28371_28439[(2)] = null);

(statearr_28371_28439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (3))){
var inst_28318 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28320__$1,inst_28318);
} else {
if((state_val_28321 === (12))){
var inst_28247 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28372_28440 = state_28320__$1;
(statearr_28372_28440[(2)] = inst_28247);

(statearr_28372_28440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (2))){
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28320__$1,(4),ch);
} else {
if((state_val_28321 === (23))){
var state_28320__$1 = state_28320;
var statearr_28373_28441 = state_28320__$1;
(statearr_28373_28441[(2)] = null);

(statearr_28373_28441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (35))){
var inst_28302 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28374_28442 = state_28320__$1;
(statearr_28374_28442[(2)] = inst_28302);

(statearr_28374_28442[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (19))){
var inst_28221 = (state_28320[(7)]);
var inst_28225 = cljs.core.chunk_first.call(null,inst_28221);
var inst_28226 = cljs.core.chunk_rest.call(null,inst_28221);
var inst_28227 = cljs.core.count.call(null,inst_28225);
var inst_28201 = inst_28226;
var inst_28202 = inst_28225;
var inst_28203 = inst_28227;
var inst_28204 = (0);
var state_28320__$1 = (function (){var statearr_28375 = state_28320;
(statearr_28375[(14)] = inst_28202);

(statearr_28375[(15)] = inst_28204);

(statearr_28375[(16)] = inst_28203);

(statearr_28375[(17)] = inst_28201);

return statearr_28375;
})();
var statearr_28376_28443 = state_28320__$1;
(statearr_28376_28443[(2)] = null);

(statearr_28376_28443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (11))){
var inst_28221 = (state_28320[(7)]);
var inst_28201 = (state_28320[(17)]);
var inst_28221__$1 = cljs.core.seq.call(null,inst_28201);
var state_28320__$1 = (function (){var statearr_28377 = state_28320;
(statearr_28377[(7)] = inst_28221__$1);

return statearr_28377;
})();
if(inst_28221__$1){
var statearr_28378_28444 = state_28320__$1;
(statearr_28378_28444[(1)] = (16));

} else {
var statearr_28379_28445 = state_28320__$1;
(statearr_28379_28445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (9))){
var inst_28249 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28380_28446 = state_28320__$1;
(statearr_28380_28446[(2)] = inst_28249);

(statearr_28380_28446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (5))){
var inst_28199 = cljs.core.deref.call(null,cs);
var inst_28200 = cljs.core.seq.call(null,inst_28199);
var inst_28201 = inst_28200;
var inst_28202 = null;
var inst_28203 = (0);
var inst_28204 = (0);
var state_28320__$1 = (function (){var statearr_28381 = state_28320;
(statearr_28381[(14)] = inst_28202);

(statearr_28381[(15)] = inst_28204);

(statearr_28381[(16)] = inst_28203);

(statearr_28381[(17)] = inst_28201);

return statearr_28381;
})();
var statearr_28382_28447 = state_28320__$1;
(statearr_28382_28447[(2)] = null);

(statearr_28382_28447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (14))){
var state_28320__$1 = state_28320;
var statearr_28383_28448 = state_28320__$1;
(statearr_28383_28448[(2)] = null);

(statearr_28383_28448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (45))){
var inst_28310 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28384_28449 = state_28320__$1;
(statearr_28384_28449[(2)] = inst_28310);

(statearr_28384_28449[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (26))){
var inst_28252 = (state_28320[(29)]);
var inst_28306 = (state_28320[(2)]);
var inst_28307 = cljs.core.seq.call(null,inst_28252);
var state_28320__$1 = (function (){var statearr_28385 = state_28320;
(statearr_28385[(31)] = inst_28306);

return statearr_28385;
})();
if(inst_28307){
var statearr_28386_28450 = state_28320__$1;
(statearr_28386_28450[(1)] = (42));

} else {
var statearr_28387_28451 = state_28320__$1;
(statearr_28387_28451[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (16))){
var inst_28221 = (state_28320[(7)]);
var inst_28223 = cljs.core.chunked_seq_QMARK_.call(null,inst_28221);
var state_28320__$1 = state_28320;
if(inst_28223){
var statearr_28388_28452 = state_28320__$1;
(statearr_28388_28452[(1)] = (19));

} else {
var statearr_28389_28453 = state_28320__$1;
(statearr_28389_28453[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (38))){
var inst_28299 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28390_28454 = state_28320__$1;
(statearr_28390_28454[(2)] = inst_28299);

(statearr_28390_28454[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (30))){
var state_28320__$1 = state_28320;
var statearr_28391_28455 = state_28320__$1;
(statearr_28391_28455[(2)] = null);

(statearr_28391_28455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (10))){
var inst_28202 = (state_28320[(14)]);
var inst_28204 = (state_28320[(15)]);
var inst_28210 = cljs.core._nth.call(null,inst_28202,inst_28204);
var inst_28211 = cljs.core.nth.call(null,inst_28210,(0),null);
var inst_28212 = cljs.core.nth.call(null,inst_28210,(1),null);
var state_28320__$1 = (function (){var statearr_28392 = state_28320;
(statearr_28392[(26)] = inst_28211);

return statearr_28392;
})();
if(cljs.core.truth_(inst_28212)){
var statearr_28393_28456 = state_28320__$1;
(statearr_28393_28456[(1)] = (13));

} else {
var statearr_28394_28457 = state_28320__$1;
(statearr_28394_28457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (18))){
var inst_28245 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28395_28458 = state_28320__$1;
(statearr_28395_28458[(2)] = inst_28245);

(statearr_28395_28458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (42))){
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28320__$1,(45),dchan);
} else {
if((state_val_28321 === (37))){
var inst_28279 = (state_28320[(25)]);
var inst_28288 = (state_28320[(23)]);
var inst_28192 = (state_28320[(12)]);
var inst_28288__$1 = cljs.core.first.call(null,inst_28279);
var inst_28289 = cljs.core.async.put_BANG_.call(null,inst_28288__$1,inst_28192,done);
var state_28320__$1 = (function (){var statearr_28396 = state_28320;
(statearr_28396[(23)] = inst_28288__$1);

return statearr_28396;
})();
if(cljs.core.truth_(inst_28289)){
var statearr_28397_28459 = state_28320__$1;
(statearr_28397_28459[(1)] = (39));

} else {
var statearr_28398_28460 = state_28320__$1;
(statearr_28398_28460[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (8))){
var inst_28204 = (state_28320[(15)]);
var inst_28203 = (state_28320[(16)]);
var inst_28206 = (inst_28204 < inst_28203);
var inst_28207 = inst_28206;
var state_28320__$1 = state_28320;
if(cljs.core.truth_(inst_28207)){
var statearr_28399_28461 = state_28320__$1;
(statearr_28399_28461[(1)] = (10));

} else {
var statearr_28400_28462 = state_28320__$1;
(statearr_28400_28462[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___28408,cs,m,dchan,dctr,done))
;
return ((function (switch__18911__auto__,c__18976__auto___28408,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18912__auto__ = null;
var cljs$core$async$mult_$_state_machine__18912__auto____0 = (function (){
var statearr_28404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28404[(0)] = cljs$core$async$mult_$_state_machine__18912__auto__);

(statearr_28404[(1)] = (1));

return statearr_28404;
});
var cljs$core$async$mult_$_state_machine__18912__auto____1 = (function (state_28320){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_28320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e28405){if((e28405 instanceof Object)){
var ex__18915__auto__ = e28405;
var statearr_28406_28463 = state_28320;
(statearr_28406_28463[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28464 = state_28320;
state_28320 = G__28464;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18912__auto__ = function(state_28320){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18912__auto____1.call(this,state_28320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18912__auto____0;
cljs$core$async$mult_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18912__auto____1;
return cljs$core$async$mult_$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___28408,cs,m,dchan,dctr,done))
})();
var state__18978__auto__ = (function (){var statearr_28407 = f__18977__auto__.call(null);
(statearr_28407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___28408);

return statearr_28407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___28408,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28465 = [];
var len__17951__auto___28468 = arguments.length;
var i__17952__auto___28469 = (0);
while(true){
if((i__17952__auto___28469 < len__17951__auto___28468)){
args28465.push((arguments[i__17952__auto___28469]));

var G__28470 = (i__17952__auto___28469 + (1));
i__17952__auto___28469 = G__28470;
continue;
} else {
}
break;
}

var G__28467 = args28465.length;
switch (G__28467) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28465.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17548__auto__ = (((m == null))?null:m);
var m__17549__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,m,ch);
} else {
var m__17549__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17548__auto__ = (((m == null))?null:m);
var m__17549__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,m,ch);
} else {
var m__17549__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17548__auto__ = (((m == null))?null:m);
var m__17549__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,m);
} else {
var m__17549__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17548__auto__ = (((m == null))?null:m);
var m__17549__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,m,state_map);
} else {
var m__17549__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17548__auto__ = (((m == null))?null:m);
var m__17549__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,m,mode);
} else {
var m__17549__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17958__auto__ = [];
var len__17951__auto___28482 = arguments.length;
var i__17952__auto___28483 = (0);
while(true){
if((i__17952__auto___28483 < len__17951__auto___28482)){
args__17958__auto__.push((arguments[i__17952__auto___28483]));

var G__28484 = (i__17952__auto___28483 + (1));
i__17952__auto___28483 = G__28484;
continue;
} else {
}
break;
}

var argseq__17959__auto__ = ((((3) < args__17958__auto__.length))?(new cljs.core.IndexedSeq(args__17958__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17959__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28476){
var map__28477 = p__28476;
var map__28477__$1 = ((((!((map__28477 == null)))?((((map__28477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28477):map__28477);
var opts = map__28477__$1;
var statearr_28479_28485 = state;
(statearr_28479_28485[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28477,map__28477__$1,opts){
return (function (val){
var statearr_28480_28486 = state;
(statearr_28480_28486[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28477,map__28477__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28481_28487 = state;
(statearr_28481_28487[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28472){
var G__28473 = cljs.core.first.call(null,seq28472);
var seq28472__$1 = cljs.core.next.call(null,seq28472);
var G__28474 = cljs.core.first.call(null,seq28472__$1);
var seq28472__$2 = cljs.core.next.call(null,seq28472__$1);
var G__28475 = cljs.core.first.call(null,seq28472__$2);
var seq28472__$3 = cljs.core.next.call(null,seq28472__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28473,G__28474,G__28475,seq28472__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28651 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28652){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28652 = meta28652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28653,meta28652__$1){
var self__ = this;
var _28653__$1 = this;
return (new cljs.core.async.t_cljs$core$async28651(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28652__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28653){
var self__ = this;
var _28653__$1 = this;
return self__.meta28652;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28651.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28652","meta28652",-1732531208,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28651";

cljs.core.async.t_cljs$core$async28651.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async28651");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28651 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28651(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28652){
return (new cljs.core.async.t_cljs$core$async28651(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28652));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28651(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18976__auto___28814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28751){
var state_val_28752 = (state_28751[(1)]);
if((state_val_28752 === (7))){
var inst_28669 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28753_28815 = state_28751__$1;
(statearr_28753_28815[(2)] = inst_28669);

(statearr_28753_28815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (20))){
var inst_28681 = (state_28751[(7)]);
var state_28751__$1 = state_28751;
var statearr_28754_28816 = state_28751__$1;
(statearr_28754_28816[(2)] = inst_28681);

(statearr_28754_28816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (27))){
var state_28751__$1 = state_28751;
var statearr_28755_28817 = state_28751__$1;
(statearr_28755_28817[(2)] = null);

(statearr_28755_28817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (1))){
var inst_28657 = (state_28751[(8)]);
var inst_28657__$1 = calc_state.call(null);
var inst_28659 = (inst_28657__$1 == null);
var inst_28660 = cljs.core.not.call(null,inst_28659);
var state_28751__$1 = (function (){var statearr_28756 = state_28751;
(statearr_28756[(8)] = inst_28657__$1);

return statearr_28756;
})();
if(inst_28660){
var statearr_28757_28818 = state_28751__$1;
(statearr_28757_28818[(1)] = (2));

} else {
var statearr_28758_28819 = state_28751__$1;
(statearr_28758_28819[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (24))){
var inst_28725 = (state_28751[(9)]);
var inst_28704 = (state_28751[(10)]);
var inst_28711 = (state_28751[(11)]);
var inst_28725__$1 = inst_28704.call(null,inst_28711);
var state_28751__$1 = (function (){var statearr_28759 = state_28751;
(statearr_28759[(9)] = inst_28725__$1);

return statearr_28759;
})();
if(cljs.core.truth_(inst_28725__$1)){
var statearr_28760_28820 = state_28751__$1;
(statearr_28760_28820[(1)] = (29));

} else {
var statearr_28761_28821 = state_28751__$1;
(statearr_28761_28821[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (4))){
var inst_28672 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
if(cljs.core.truth_(inst_28672)){
var statearr_28762_28822 = state_28751__$1;
(statearr_28762_28822[(1)] = (8));

} else {
var statearr_28763_28823 = state_28751__$1;
(statearr_28763_28823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (15))){
var inst_28698 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
if(cljs.core.truth_(inst_28698)){
var statearr_28764_28824 = state_28751__$1;
(statearr_28764_28824[(1)] = (19));

} else {
var statearr_28765_28825 = state_28751__$1;
(statearr_28765_28825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (21))){
var inst_28703 = (state_28751[(12)]);
var inst_28703__$1 = (state_28751[(2)]);
var inst_28704 = cljs.core.get.call(null,inst_28703__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28705 = cljs.core.get.call(null,inst_28703__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28706 = cljs.core.get.call(null,inst_28703__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28751__$1 = (function (){var statearr_28766 = state_28751;
(statearr_28766[(10)] = inst_28704);

(statearr_28766[(13)] = inst_28705);

(statearr_28766[(12)] = inst_28703__$1);

return statearr_28766;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28751__$1,(22),inst_28706);
} else {
if((state_val_28752 === (31))){
var inst_28733 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
if(cljs.core.truth_(inst_28733)){
var statearr_28767_28826 = state_28751__$1;
(statearr_28767_28826[(1)] = (32));

} else {
var statearr_28768_28827 = state_28751__$1;
(statearr_28768_28827[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (32))){
var inst_28710 = (state_28751[(14)]);
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28751__$1,(35),out,inst_28710);
} else {
if((state_val_28752 === (33))){
var inst_28703 = (state_28751[(12)]);
var inst_28681 = inst_28703;
var state_28751__$1 = (function (){var statearr_28769 = state_28751;
(statearr_28769[(7)] = inst_28681);

return statearr_28769;
})();
var statearr_28770_28828 = state_28751__$1;
(statearr_28770_28828[(2)] = null);

(statearr_28770_28828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (13))){
var inst_28681 = (state_28751[(7)]);
var inst_28688 = inst_28681.cljs$lang$protocol_mask$partition0$;
var inst_28689 = (inst_28688 & (64));
var inst_28690 = inst_28681.cljs$core$ISeq$;
var inst_28691 = (inst_28689) || (inst_28690);
var state_28751__$1 = state_28751;
if(cljs.core.truth_(inst_28691)){
var statearr_28771_28829 = state_28751__$1;
(statearr_28771_28829[(1)] = (16));

} else {
var statearr_28772_28830 = state_28751__$1;
(statearr_28772_28830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (22))){
var inst_28711 = (state_28751[(11)]);
var inst_28710 = (state_28751[(14)]);
var inst_28709 = (state_28751[(2)]);
var inst_28710__$1 = cljs.core.nth.call(null,inst_28709,(0),null);
var inst_28711__$1 = cljs.core.nth.call(null,inst_28709,(1),null);
var inst_28712 = (inst_28710__$1 == null);
var inst_28713 = cljs.core._EQ_.call(null,inst_28711__$1,change);
var inst_28714 = (inst_28712) || (inst_28713);
var state_28751__$1 = (function (){var statearr_28773 = state_28751;
(statearr_28773[(11)] = inst_28711__$1);

(statearr_28773[(14)] = inst_28710__$1);

return statearr_28773;
})();
if(cljs.core.truth_(inst_28714)){
var statearr_28774_28831 = state_28751__$1;
(statearr_28774_28831[(1)] = (23));

} else {
var statearr_28775_28832 = state_28751__$1;
(statearr_28775_28832[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (36))){
var inst_28703 = (state_28751[(12)]);
var inst_28681 = inst_28703;
var state_28751__$1 = (function (){var statearr_28776 = state_28751;
(statearr_28776[(7)] = inst_28681);

return statearr_28776;
})();
var statearr_28777_28833 = state_28751__$1;
(statearr_28777_28833[(2)] = null);

(statearr_28777_28833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (29))){
var inst_28725 = (state_28751[(9)]);
var state_28751__$1 = state_28751;
var statearr_28778_28834 = state_28751__$1;
(statearr_28778_28834[(2)] = inst_28725);

(statearr_28778_28834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (6))){
var state_28751__$1 = state_28751;
var statearr_28779_28835 = state_28751__$1;
(statearr_28779_28835[(2)] = false);

(statearr_28779_28835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (28))){
var inst_28721 = (state_28751[(2)]);
var inst_28722 = calc_state.call(null);
var inst_28681 = inst_28722;
var state_28751__$1 = (function (){var statearr_28780 = state_28751;
(statearr_28780[(15)] = inst_28721);

(statearr_28780[(7)] = inst_28681);

return statearr_28780;
})();
var statearr_28781_28836 = state_28751__$1;
(statearr_28781_28836[(2)] = null);

(statearr_28781_28836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (25))){
var inst_28747 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28782_28837 = state_28751__$1;
(statearr_28782_28837[(2)] = inst_28747);

(statearr_28782_28837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (34))){
var inst_28745 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28783_28838 = state_28751__$1;
(statearr_28783_28838[(2)] = inst_28745);

(statearr_28783_28838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (17))){
var state_28751__$1 = state_28751;
var statearr_28784_28839 = state_28751__$1;
(statearr_28784_28839[(2)] = false);

(statearr_28784_28839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (3))){
var state_28751__$1 = state_28751;
var statearr_28785_28840 = state_28751__$1;
(statearr_28785_28840[(2)] = false);

(statearr_28785_28840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (12))){
var inst_28749 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28751__$1,inst_28749);
} else {
if((state_val_28752 === (2))){
var inst_28657 = (state_28751[(8)]);
var inst_28662 = inst_28657.cljs$lang$protocol_mask$partition0$;
var inst_28663 = (inst_28662 & (64));
var inst_28664 = inst_28657.cljs$core$ISeq$;
var inst_28665 = (inst_28663) || (inst_28664);
var state_28751__$1 = state_28751;
if(cljs.core.truth_(inst_28665)){
var statearr_28786_28841 = state_28751__$1;
(statearr_28786_28841[(1)] = (5));

} else {
var statearr_28787_28842 = state_28751__$1;
(statearr_28787_28842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (23))){
var inst_28710 = (state_28751[(14)]);
var inst_28716 = (inst_28710 == null);
var state_28751__$1 = state_28751;
if(cljs.core.truth_(inst_28716)){
var statearr_28788_28843 = state_28751__$1;
(statearr_28788_28843[(1)] = (26));

} else {
var statearr_28789_28844 = state_28751__$1;
(statearr_28789_28844[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (35))){
var inst_28736 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
if(cljs.core.truth_(inst_28736)){
var statearr_28790_28845 = state_28751__$1;
(statearr_28790_28845[(1)] = (36));

} else {
var statearr_28791_28846 = state_28751__$1;
(statearr_28791_28846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (19))){
var inst_28681 = (state_28751[(7)]);
var inst_28700 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28681);
var state_28751__$1 = state_28751;
var statearr_28792_28847 = state_28751__$1;
(statearr_28792_28847[(2)] = inst_28700);

(statearr_28792_28847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (11))){
var inst_28681 = (state_28751[(7)]);
var inst_28685 = (inst_28681 == null);
var inst_28686 = cljs.core.not.call(null,inst_28685);
var state_28751__$1 = state_28751;
if(inst_28686){
var statearr_28793_28848 = state_28751__$1;
(statearr_28793_28848[(1)] = (13));

} else {
var statearr_28794_28849 = state_28751__$1;
(statearr_28794_28849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (9))){
var inst_28657 = (state_28751[(8)]);
var state_28751__$1 = state_28751;
var statearr_28795_28850 = state_28751__$1;
(statearr_28795_28850[(2)] = inst_28657);

(statearr_28795_28850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (5))){
var state_28751__$1 = state_28751;
var statearr_28796_28851 = state_28751__$1;
(statearr_28796_28851[(2)] = true);

(statearr_28796_28851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (14))){
var state_28751__$1 = state_28751;
var statearr_28797_28852 = state_28751__$1;
(statearr_28797_28852[(2)] = false);

(statearr_28797_28852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (26))){
var inst_28711 = (state_28751[(11)]);
var inst_28718 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28711);
var state_28751__$1 = state_28751;
var statearr_28798_28853 = state_28751__$1;
(statearr_28798_28853[(2)] = inst_28718);

(statearr_28798_28853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (16))){
var state_28751__$1 = state_28751;
var statearr_28799_28854 = state_28751__$1;
(statearr_28799_28854[(2)] = true);

(statearr_28799_28854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (38))){
var inst_28741 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28800_28855 = state_28751__$1;
(statearr_28800_28855[(2)] = inst_28741);

(statearr_28800_28855[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (30))){
var inst_28704 = (state_28751[(10)]);
var inst_28705 = (state_28751[(13)]);
var inst_28711 = (state_28751[(11)]);
var inst_28728 = cljs.core.empty_QMARK_.call(null,inst_28704);
var inst_28729 = inst_28705.call(null,inst_28711);
var inst_28730 = cljs.core.not.call(null,inst_28729);
var inst_28731 = (inst_28728) && (inst_28730);
var state_28751__$1 = state_28751;
var statearr_28801_28856 = state_28751__$1;
(statearr_28801_28856[(2)] = inst_28731);

(statearr_28801_28856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (10))){
var inst_28657 = (state_28751[(8)]);
var inst_28677 = (state_28751[(2)]);
var inst_28678 = cljs.core.get.call(null,inst_28677,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28679 = cljs.core.get.call(null,inst_28677,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28680 = cljs.core.get.call(null,inst_28677,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28681 = inst_28657;
var state_28751__$1 = (function (){var statearr_28802 = state_28751;
(statearr_28802[(16)] = inst_28680);

(statearr_28802[(17)] = inst_28679);

(statearr_28802[(18)] = inst_28678);

(statearr_28802[(7)] = inst_28681);

return statearr_28802;
})();
var statearr_28803_28857 = state_28751__$1;
(statearr_28803_28857[(2)] = null);

(statearr_28803_28857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (18))){
var inst_28695 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28804_28858 = state_28751__$1;
(statearr_28804_28858[(2)] = inst_28695);

(statearr_28804_28858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (37))){
var state_28751__$1 = state_28751;
var statearr_28805_28859 = state_28751__$1;
(statearr_28805_28859[(2)] = null);

(statearr_28805_28859[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (8))){
var inst_28657 = (state_28751[(8)]);
var inst_28674 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28657);
var state_28751__$1 = state_28751;
var statearr_28806_28860 = state_28751__$1;
(statearr_28806_28860[(2)] = inst_28674);

(statearr_28806_28860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18911__auto__,c__18976__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18912__auto__ = null;
var cljs$core$async$mix_$_state_machine__18912__auto____0 = (function (){
var statearr_28810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28810[(0)] = cljs$core$async$mix_$_state_machine__18912__auto__);

(statearr_28810[(1)] = (1));

return statearr_28810;
});
var cljs$core$async$mix_$_state_machine__18912__auto____1 = (function (state_28751){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_28751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e28811){if((e28811 instanceof Object)){
var ex__18915__auto__ = e28811;
var statearr_28812_28861 = state_28751;
(statearr_28812_28861[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28862 = state_28751;
state_28751 = G__28862;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18912__auto__ = function(state_28751){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18912__auto____1.call(this,state_28751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18912__auto____0;
cljs$core$async$mix_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18912__auto____1;
return cljs$core$async$mix_$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18978__auto__ = (function (){var statearr_28813 = f__18977__auto__.call(null);
(statearr_28813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___28814);

return statearr_28813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___28814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17548__auto__ = (((p == null))?null:p);
var m__17549__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17549__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17548__auto__ = (((p == null))?null:p);
var m__17549__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,p,v,ch);
} else {
var m__17549__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28863 = [];
var len__17951__auto___28866 = arguments.length;
var i__17952__auto___28867 = (0);
while(true){
if((i__17952__auto___28867 < len__17951__auto___28866)){
args28863.push((arguments[i__17952__auto___28867]));

var G__28868 = (i__17952__auto___28867 + (1));
i__17952__auto___28867 = G__28868;
continue;
} else {
}
break;
}

var G__28865 = args28863.length;
switch (G__28865) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28863.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17548__auto__ = (((p == null))?null:p);
var m__17549__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,p);
} else {
var m__17549__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17548__auto__ = (((p == null))?null:p);
var m__17549__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17548__auto__)]);
if(!((m__17549__auto__ == null))){
return m__17549__auto__.call(null,p,v);
} else {
var m__17549__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17549__auto____$1 == null))){
return m__17549__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28871 = [];
var len__17951__auto___28996 = arguments.length;
var i__17952__auto___28997 = (0);
while(true){
if((i__17952__auto___28997 < len__17951__auto___28996)){
args28871.push((arguments[i__17952__auto___28997]));

var G__28998 = (i__17952__auto___28997 + (1));
i__17952__auto___28997 = G__28998;
continue;
} else {
}
break;
}

var G__28873 = args28871.length;
switch (G__28873) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28871.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16893__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16893__auto__)){
return or__16893__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16893__auto__,mults){
return (function (p1__28870_SHARP_){
if(cljs.core.truth_(p1__28870_SHARP_.call(null,topic))){
return p1__28870_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28870_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16893__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28874 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28875){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28875 = meta28875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28876,meta28875__$1){
var self__ = this;
var _28876__$1 = this;
return (new cljs.core.async.t_cljs$core$async28874(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28875__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28876){
var self__ = this;
var _28876__$1 = this;
return self__.meta28875;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28874.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28875","meta28875",-67102899,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28874";

cljs.core.async.t_cljs$core$async28874.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async28874");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28874 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28875){
return (new cljs.core.async.t_cljs$core$async28874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28875));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28874(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18976__auto___29000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___29000,mults,ensure_mult,p){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___29000,mults,ensure_mult,p){
return (function (state_28948){
var state_val_28949 = (state_28948[(1)]);
if((state_val_28949 === (7))){
var inst_28944 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28950_29001 = state_28948__$1;
(statearr_28950_29001[(2)] = inst_28944);

(statearr_28950_29001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (20))){
var state_28948__$1 = state_28948;
var statearr_28951_29002 = state_28948__$1;
(statearr_28951_29002[(2)] = null);

(statearr_28951_29002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (1))){
var state_28948__$1 = state_28948;
var statearr_28952_29003 = state_28948__$1;
(statearr_28952_29003[(2)] = null);

(statearr_28952_29003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (24))){
var inst_28927 = (state_28948[(7)]);
var inst_28936 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28927);
var state_28948__$1 = state_28948;
var statearr_28953_29004 = state_28948__$1;
(statearr_28953_29004[(2)] = inst_28936);

(statearr_28953_29004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (4))){
var inst_28879 = (state_28948[(8)]);
var inst_28879__$1 = (state_28948[(2)]);
var inst_28880 = (inst_28879__$1 == null);
var state_28948__$1 = (function (){var statearr_28954 = state_28948;
(statearr_28954[(8)] = inst_28879__$1);

return statearr_28954;
})();
if(cljs.core.truth_(inst_28880)){
var statearr_28955_29005 = state_28948__$1;
(statearr_28955_29005[(1)] = (5));

} else {
var statearr_28956_29006 = state_28948__$1;
(statearr_28956_29006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (15))){
var inst_28921 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28957_29007 = state_28948__$1;
(statearr_28957_29007[(2)] = inst_28921);

(statearr_28957_29007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (21))){
var inst_28941 = (state_28948[(2)]);
var state_28948__$1 = (function (){var statearr_28958 = state_28948;
(statearr_28958[(9)] = inst_28941);

return statearr_28958;
})();
var statearr_28959_29008 = state_28948__$1;
(statearr_28959_29008[(2)] = null);

(statearr_28959_29008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (13))){
var inst_28903 = (state_28948[(10)]);
var inst_28905 = cljs.core.chunked_seq_QMARK_.call(null,inst_28903);
var state_28948__$1 = state_28948;
if(inst_28905){
var statearr_28960_29009 = state_28948__$1;
(statearr_28960_29009[(1)] = (16));

} else {
var statearr_28961_29010 = state_28948__$1;
(statearr_28961_29010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (22))){
var inst_28933 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
if(cljs.core.truth_(inst_28933)){
var statearr_28962_29011 = state_28948__$1;
(statearr_28962_29011[(1)] = (23));

} else {
var statearr_28963_29012 = state_28948__$1;
(statearr_28963_29012[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (6))){
var inst_28879 = (state_28948[(8)]);
var inst_28929 = (state_28948[(11)]);
var inst_28927 = (state_28948[(7)]);
var inst_28927__$1 = topic_fn.call(null,inst_28879);
var inst_28928 = cljs.core.deref.call(null,mults);
var inst_28929__$1 = cljs.core.get.call(null,inst_28928,inst_28927__$1);
var state_28948__$1 = (function (){var statearr_28964 = state_28948;
(statearr_28964[(11)] = inst_28929__$1);

(statearr_28964[(7)] = inst_28927__$1);

return statearr_28964;
})();
if(cljs.core.truth_(inst_28929__$1)){
var statearr_28965_29013 = state_28948__$1;
(statearr_28965_29013[(1)] = (19));

} else {
var statearr_28966_29014 = state_28948__$1;
(statearr_28966_29014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (25))){
var inst_28938 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28967_29015 = state_28948__$1;
(statearr_28967_29015[(2)] = inst_28938);

(statearr_28967_29015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (17))){
var inst_28903 = (state_28948[(10)]);
var inst_28912 = cljs.core.first.call(null,inst_28903);
var inst_28913 = cljs.core.async.muxch_STAR_.call(null,inst_28912);
var inst_28914 = cljs.core.async.close_BANG_.call(null,inst_28913);
var inst_28915 = cljs.core.next.call(null,inst_28903);
var inst_28889 = inst_28915;
var inst_28890 = null;
var inst_28891 = (0);
var inst_28892 = (0);
var state_28948__$1 = (function (){var statearr_28968 = state_28948;
(statearr_28968[(12)] = inst_28890);

(statearr_28968[(13)] = inst_28914);

(statearr_28968[(14)] = inst_28889);

(statearr_28968[(15)] = inst_28891);

(statearr_28968[(16)] = inst_28892);

return statearr_28968;
})();
var statearr_28969_29016 = state_28948__$1;
(statearr_28969_29016[(2)] = null);

(statearr_28969_29016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (3))){
var inst_28946 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28948__$1,inst_28946);
} else {
if((state_val_28949 === (12))){
var inst_28923 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28970_29017 = state_28948__$1;
(statearr_28970_29017[(2)] = inst_28923);

(statearr_28970_29017[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (2))){
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28948__$1,(4),ch);
} else {
if((state_val_28949 === (23))){
var state_28948__$1 = state_28948;
var statearr_28971_29018 = state_28948__$1;
(statearr_28971_29018[(2)] = null);

(statearr_28971_29018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (19))){
var inst_28879 = (state_28948[(8)]);
var inst_28929 = (state_28948[(11)]);
var inst_28931 = cljs.core.async.muxch_STAR_.call(null,inst_28929);
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28948__$1,(22),inst_28931,inst_28879);
} else {
if((state_val_28949 === (11))){
var inst_28903 = (state_28948[(10)]);
var inst_28889 = (state_28948[(14)]);
var inst_28903__$1 = cljs.core.seq.call(null,inst_28889);
var state_28948__$1 = (function (){var statearr_28972 = state_28948;
(statearr_28972[(10)] = inst_28903__$1);

return statearr_28972;
})();
if(inst_28903__$1){
var statearr_28973_29019 = state_28948__$1;
(statearr_28973_29019[(1)] = (13));

} else {
var statearr_28974_29020 = state_28948__$1;
(statearr_28974_29020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (9))){
var inst_28925 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28975_29021 = state_28948__$1;
(statearr_28975_29021[(2)] = inst_28925);

(statearr_28975_29021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (5))){
var inst_28886 = cljs.core.deref.call(null,mults);
var inst_28887 = cljs.core.vals.call(null,inst_28886);
var inst_28888 = cljs.core.seq.call(null,inst_28887);
var inst_28889 = inst_28888;
var inst_28890 = null;
var inst_28891 = (0);
var inst_28892 = (0);
var state_28948__$1 = (function (){var statearr_28976 = state_28948;
(statearr_28976[(12)] = inst_28890);

(statearr_28976[(14)] = inst_28889);

(statearr_28976[(15)] = inst_28891);

(statearr_28976[(16)] = inst_28892);

return statearr_28976;
})();
var statearr_28977_29022 = state_28948__$1;
(statearr_28977_29022[(2)] = null);

(statearr_28977_29022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (14))){
var state_28948__$1 = state_28948;
var statearr_28981_29023 = state_28948__$1;
(statearr_28981_29023[(2)] = null);

(statearr_28981_29023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (16))){
var inst_28903 = (state_28948[(10)]);
var inst_28907 = cljs.core.chunk_first.call(null,inst_28903);
var inst_28908 = cljs.core.chunk_rest.call(null,inst_28903);
var inst_28909 = cljs.core.count.call(null,inst_28907);
var inst_28889 = inst_28908;
var inst_28890 = inst_28907;
var inst_28891 = inst_28909;
var inst_28892 = (0);
var state_28948__$1 = (function (){var statearr_28982 = state_28948;
(statearr_28982[(12)] = inst_28890);

(statearr_28982[(14)] = inst_28889);

(statearr_28982[(15)] = inst_28891);

(statearr_28982[(16)] = inst_28892);

return statearr_28982;
})();
var statearr_28983_29024 = state_28948__$1;
(statearr_28983_29024[(2)] = null);

(statearr_28983_29024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (10))){
var inst_28890 = (state_28948[(12)]);
var inst_28889 = (state_28948[(14)]);
var inst_28891 = (state_28948[(15)]);
var inst_28892 = (state_28948[(16)]);
var inst_28897 = cljs.core._nth.call(null,inst_28890,inst_28892);
var inst_28898 = cljs.core.async.muxch_STAR_.call(null,inst_28897);
var inst_28899 = cljs.core.async.close_BANG_.call(null,inst_28898);
var inst_28900 = (inst_28892 + (1));
var tmp28978 = inst_28890;
var tmp28979 = inst_28889;
var tmp28980 = inst_28891;
var inst_28889__$1 = tmp28979;
var inst_28890__$1 = tmp28978;
var inst_28891__$1 = tmp28980;
var inst_28892__$1 = inst_28900;
var state_28948__$1 = (function (){var statearr_28984 = state_28948;
(statearr_28984[(12)] = inst_28890__$1);

(statearr_28984[(14)] = inst_28889__$1);

(statearr_28984[(15)] = inst_28891__$1);

(statearr_28984[(17)] = inst_28899);

(statearr_28984[(16)] = inst_28892__$1);

return statearr_28984;
})();
var statearr_28985_29025 = state_28948__$1;
(statearr_28985_29025[(2)] = null);

(statearr_28985_29025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (18))){
var inst_28918 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28986_29026 = state_28948__$1;
(statearr_28986_29026[(2)] = inst_28918);

(statearr_28986_29026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (8))){
var inst_28891 = (state_28948[(15)]);
var inst_28892 = (state_28948[(16)]);
var inst_28894 = (inst_28892 < inst_28891);
var inst_28895 = inst_28894;
var state_28948__$1 = state_28948;
if(cljs.core.truth_(inst_28895)){
var statearr_28987_29027 = state_28948__$1;
(statearr_28987_29027[(1)] = (10));

} else {
var statearr_28988_29028 = state_28948__$1;
(statearr_28988_29028[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___29000,mults,ensure_mult,p))
;
return ((function (switch__18911__auto__,c__18976__auto___29000,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_28992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28992[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_28992[(1)] = (1));

return statearr_28992;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_28948){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_28948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e28993){if((e28993 instanceof Object)){
var ex__18915__auto__ = e28993;
var statearr_28994_29029 = state_28948;
(statearr_28994_29029[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29030 = state_28948;
state_28948 = G__29030;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_28948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_28948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___29000,mults,ensure_mult,p))
})();
var state__18978__auto__ = (function (){var statearr_28995 = f__18977__auto__.call(null);
(statearr_28995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___29000);

return statearr_28995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___29000,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29031 = [];
var len__17951__auto___29034 = arguments.length;
var i__17952__auto___29035 = (0);
while(true){
if((i__17952__auto___29035 < len__17951__auto___29034)){
args29031.push((arguments[i__17952__auto___29035]));

var G__29036 = (i__17952__auto___29035 + (1));
i__17952__auto___29035 = G__29036;
continue;
} else {
}
break;
}

var G__29033 = args29031.length;
switch (G__29033) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29031.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29038 = [];
var len__17951__auto___29041 = arguments.length;
var i__17952__auto___29042 = (0);
while(true){
if((i__17952__auto___29042 < len__17951__auto___29041)){
args29038.push((arguments[i__17952__auto___29042]));

var G__29043 = (i__17952__auto___29042 + (1));
i__17952__auto___29042 = G__29043;
continue;
} else {
}
break;
}

var G__29040 = args29038.length;
switch (G__29040) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29038.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29045 = [];
var len__17951__auto___29116 = arguments.length;
var i__17952__auto___29117 = (0);
while(true){
if((i__17952__auto___29117 < len__17951__auto___29116)){
args29045.push((arguments[i__17952__auto___29117]));

var G__29118 = (i__17952__auto___29117 + (1));
i__17952__auto___29117 = G__29118;
continue;
} else {
}
break;
}

var G__29047 = args29045.length;
switch (G__29047) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29045.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18976__auto___29120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___29120,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___29120,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29086){
var state_val_29087 = (state_29086[(1)]);
if((state_val_29087 === (7))){
var state_29086__$1 = state_29086;
var statearr_29088_29121 = state_29086__$1;
(statearr_29088_29121[(2)] = null);

(statearr_29088_29121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (1))){
var state_29086__$1 = state_29086;
var statearr_29089_29122 = state_29086__$1;
(statearr_29089_29122[(2)] = null);

(statearr_29089_29122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (4))){
var inst_29050 = (state_29086[(7)]);
var inst_29052 = (inst_29050 < cnt);
var state_29086__$1 = state_29086;
if(cljs.core.truth_(inst_29052)){
var statearr_29090_29123 = state_29086__$1;
(statearr_29090_29123[(1)] = (6));

} else {
var statearr_29091_29124 = state_29086__$1;
(statearr_29091_29124[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (15))){
var inst_29082 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29092_29125 = state_29086__$1;
(statearr_29092_29125[(2)] = inst_29082);

(statearr_29092_29125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (13))){
var inst_29075 = cljs.core.async.close_BANG_.call(null,out);
var state_29086__$1 = state_29086;
var statearr_29093_29126 = state_29086__$1;
(statearr_29093_29126[(2)] = inst_29075);

(statearr_29093_29126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (6))){
var state_29086__$1 = state_29086;
var statearr_29094_29127 = state_29086__$1;
(statearr_29094_29127[(2)] = null);

(statearr_29094_29127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (3))){
var inst_29084 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29086__$1,inst_29084);
} else {
if((state_val_29087 === (12))){
var inst_29072 = (state_29086[(8)]);
var inst_29072__$1 = (state_29086[(2)]);
var inst_29073 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29072__$1);
var state_29086__$1 = (function (){var statearr_29095 = state_29086;
(statearr_29095[(8)] = inst_29072__$1);

return statearr_29095;
})();
if(cljs.core.truth_(inst_29073)){
var statearr_29096_29128 = state_29086__$1;
(statearr_29096_29128[(1)] = (13));

} else {
var statearr_29097_29129 = state_29086__$1;
(statearr_29097_29129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (2))){
var inst_29049 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29050 = (0);
var state_29086__$1 = (function (){var statearr_29098 = state_29086;
(statearr_29098[(9)] = inst_29049);

(statearr_29098[(7)] = inst_29050);

return statearr_29098;
})();
var statearr_29099_29130 = state_29086__$1;
(statearr_29099_29130[(2)] = null);

(statearr_29099_29130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (11))){
var inst_29050 = (state_29086[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29086,(10),Object,null,(9));
var inst_29059 = chs__$1.call(null,inst_29050);
var inst_29060 = done.call(null,inst_29050);
var inst_29061 = cljs.core.async.take_BANG_.call(null,inst_29059,inst_29060);
var state_29086__$1 = state_29086;
var statearr_29100_29131 = state_29086__$1;
(statearr_29100_29131[(2)] = inst_29061);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (9))){
var inst_29050 = (state_29086[(7)]);
var inst_29063 = (state_29086[(2)]);
var inst_29064 = (inst_29050 + (1));
var inst_29050__$1 = inst_29064;
var state_29086__$1 = (function (){var statearr_29101 = state_29086;
(statearr_29101[(7)] = inst_29050__$1);

(statearr_29101[(10)] = inst_29063);

return statearr_29101;
})();
var statearr_29102_29132 = state_29086__$1;
(statearr_29102_29132[(2)] = null);

(statearr_29102_29132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (5))){
var inst_29070 = (state_29086[(2)]);
var state_29086__$1 = (function (){var statearr_29103 = state_29086;
(statearr_29103[(11)] = inst_29070);

return statearr_29103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(12),dchan);
} else {
if((state_val_29087 === (14))){
var inst_29072 = (state_29086[(8)]);
var inst_29077 = cljs.core.apply.call(null,f,inst_29072);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29086__$1,(16),out,inst_29077);
} else {
if((state_val_29087 === (16))){
var inst_29079 = (state_29086[(2)]);
var state_29086__$1 = (function (){var statearr_29104 = state_29086;
(statearr_29104[(12)] = inst_29079);

return statearr_29104;
})();
var statearr_29105_29133 = state_29086__$1;
(statearr_29105_29133[(2)] = null);

(statearr_29105_29133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (10))){
var inst_29054 = (state_29086[(2)]);
var inst_29055 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29086__$1 = (function (){var statearr_29106 = state_29086;
(statearr_29106[(13)] = inst_29054);

return statearr_29106;
})();
var statearr_29107_29134 = state_29086__$1;
(statearr_29107_29134[(2)] = inst_29055);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (8))){
var inst_29068 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29108_29135 = state_29086__$1;
(statearr_29108_29135[(2)] = inst_29068);

(statearr_29108_29135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___29120,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18911__auto__,c__18976__auto___29120,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_29112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29112[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_29112[(1)] = (1));

return statearr_29112;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_29086){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_29086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e29113){if((e29113 instanceof Object)){
var ex__18915__auto__ = e29113;
var statearr_29114_29136 = state_29086;
(statearr_29114_29136[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29137 = state_29086;
state_29086 = G__29137;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_29086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_29086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___29120,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18978__auto__ = (function (){var statearr_29115 = f__18977__auto__.call(null);
(statearr_29115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___29120);

return statearr_29115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___29120,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29139 = [];
var len__17951__auto___29195 = arguments.length;
var i__17952__auto___29196 = (0);
while(true){
if((i__17952__auto___29196 < len__17951__auto___29195)){
args29139.push((arguments[i__17952__auto___29196]));

var G__29197 = (i__17952__auto___29196 + (1));
i__17952__auto___29196 = G__29197;
continue;
} else {
}
break;
}

var G__29141 = args29139.length;
switch (G__29141) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29139.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18976__auto___29199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___29199,out){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___29199,out){
return (function (state_29171){
var state_val_29172 = (state_29171[(1)]);
if((state_val_29172 === (7))){
var inst_29151 = (state_29171[(7)]);
var inst_29150 = (state_29171[(8)]);
var inst_29150__$1 = (state_29171[(2)]);
var inst_29151__$1 = cljs.core.nth.call(null,inst_29150__$1,(0),null);
var inst_29152 = cljs.core.nth.call(null,inst_29150__$1,(1),null);
var inst_29153 = (inst_29151__$1 == null);
var state_29171__$1 = (function (){var statearr_29173 = state_29171;
(statearr_29173[(9)] = inst_29152);

(statearr_29173[(7)] = inst_29151__$1);

(statearr_29173[(8)] = inst_29150__$1);

return statearr_29173;
})();
if(cljs.core.truth_(inst_29153)){
var statearr_29174_29200 = state_29171__$1;
(statearr_29174_29200[(1)] = (8));

} else {
var statearr_29175_29201 = state_29171__$1;
(statearr_29175_29201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (1))){
var inst_29142 = cljs.core.vec.call(null,chs);
var inst_29143 = inst_29142;
var state_29171__$1 = (function (){var statearr_29176 = state_29171;
(statearr_29176[(10)] = inst_29143);

return statearr_29176;
})();
var statearr_29177_29202 = state_29171__$1;
(statearr_29177_29202[(2)] = null);

(statearr_29177_29202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (4))){
var inst_29143 = (state_29171[(10)]);
var state_29171__$1 = state_29171;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29171__$1,(7),inst_29143);
} else {
if((state_val_29172 === (6))){
var inst_29167 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
var statearr_29178_29203 = state_29171__$1;
(statearr_29178_29203[(2)] = inst_29167);

(statearr_29178_29203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (3))){
var inst_29169 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29171__$1,inst_29169);
} else {
if((state_val_29172 === (2))){
var inst_29143 = (state_29171[(10)]);
var inst_29145 = cljs.core.count.call(null,inst_29143);
var inst_29146 = (inst_29145 > (0));
var state_29171__$1 = state_29171;
if(cljs.core.truth_(inst_29146)){
var statearr_29180_29204 = state_29171__$1;
(statearr_29180_29204[(1)] = (4));

} else {
var statearr_29181_29205 = state_29171__$1;
(statearr_29181_29205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (11))){
var inst_29143 = (state_29171[(10)]);
var inst_29160 = (state_29171[(2)]);
var tmp29179 = inst_29143;
var inst_29143__$1 = tmp29179;
var state_29171__$1 = (function (){var statearr_29182 = state_29171;
(statearr_29182[(10)] = inst_29143__$1);

(statearr_29182[(11)] = inst_29160);

return statearr_29182;
})();
var statearr_29183_29206 = state_29171__$1;
(statearr_29183_29206[(2)] = null);

(statearr_29183_29206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (9))){
var inst_29151 = (state_29171[(7)]);
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29171__$1,(11),out,inst_29151);
} else {
if((state_val_29172 === (5))){
var inst_29165 = cljs.core.async.close_BANG_.call(null,out);
var state_29171__$1 = state_29171;
var statearr_29184_29207 = state_29171__$1;
(statearr_29184_29207[(2)] = inst_29165);

(statearr_29184_29207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (10))){
var inst_29163 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
var statearr_29185_29208 = state_29171__$1;
(statearr_29185_29208[(2)] = inst_29163);

(statearr_29185_29208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (8))){
var inst_29152 = (state_29171[(9)]);
var inst_29151 = (state_29171[(7)]);
var inst_29150 = (state_29171[(8)]);
var inst_29143 = (state_29171[(10)]);
var inst_29155 = (function (){var cs = inst_29143;
var vec__29148 = inst_29150;
var v = inst_29151;
var c = inst_29152;
return ((function (cs,vec__29148,v,c,inst_29152,inst_29151,inst_29150,inst_29143,state_val_29172,c__18976__auto___29199,out){
return (function (p1__29138_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29138_SHARP_);
});
;})(cs,vec__29148,v,c,inst_29152,inst_29151,inst_29150,inst_29143,state_val_29172,c__18976__auto___29199,out))
})();
var inst_29156 = cljs.core.filterv.call(null,inst_29155,inst_29143);
var inst_29143__$1 = inst_29156;
var state_29171__$1 = (function (){var statearr_29186 = state_29171;
(statearr_29186[(10)] = inst_29143__$1);

return statearr_29186;
})();
var statearr_29187_29209 = state_29171__$1;
(statearr_29187_29209[(2)] = null);

(statearr_29187_29209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___29199,out))
;
return ((function (switch__18911__auto__,c__18976__auto___29199,out){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_29191 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29191[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_29191[(1)] = (1));

return statearr_29191;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_29171){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_29171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e29192){if((e29192 instanceof Object)){
var ex__18915__auto__ = e29192;
var statearr_29193_29210 = state_29171;
(statearr_29193_29210[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29211 = state_29171;
state_29171 = G__29211;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_29171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_29171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___29199,out))
})();
var state__18978__auto__ = (function (){var statearr_29194 = f__18977__auto__.call(null);
(statearr_29194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___29199);

return statearr_29194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___29199,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29212 = [];
var len__17951__auto___29261 = arguments.length;
var i__17952__auto___29262 = (0);
while(true){
if((i__17952__auto___29262 < len__17951__auto___29261)){
args29212.push((arguments[i__17952__auto___29262]));

var G__29263 = (i__17952__auto___29262 + (1));
i__17952__auto___29262 = G__29263;
continue;
} else {
}
break;
}

var G__29214 = args29212.length;
switch (G__29214) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29212.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18976__auto___29265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___29265,out){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___29265,out){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (7))){
var inst_29220 = (state_29238[(7)]);
var inst_29220__$1 = (state_29238[(2)]);
var inst_29221 = (inst_29220__$1 == null);
var inst_29222 = cljs.core.not.call(null,inst_29221);
var state_29238__$1 = (function (){var statearr_29240 = state_29238;
(statearr_29240[(7)] = inst_29220__$1);

return statearr_29240;
})();
if(inst_29222){
var statearr_29241_29266 = state_29238__$1;
(statearr_29241_29266[(1)] = (8));

} else {
var statearr_29242_29267 = state_29238__$1;
(statearr_29242_29267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (1))){
var inst_29215 = (0);
var state_29238__$1 = (function (){var statearr_29243 = state_29238;
(statearr_29243[(8)] = inst_29215);

return statearr_29243;
})();
var statearr_29244_29268 = state_29238__$1;
(statearr_29244_29268[(2)] = null);

(statearr_29244_29268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (4))){
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(7),ch);
} else {
if((state_val_29239 === (6))){
var inst_29233 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29245_29269 = state_29238__$1;
(statearr_29245_29269[(2)] = inst_29233);

(statearr_29245_29269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (3))){
var inst_29235 = (state_29238[(2)]);
var inst_29236 = cljs.core.async.close_BANG_.call(null,out);
var state_29238__$1 = (function (){var statearr_29246 = state_29238;
(statearr_29246[(9)] = inst_29235);

return statearr_29246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (2))){
var inst_29215 = (state_29238[(8)]);
var inst_29217 = (inst_29215 < n);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29217)){
var statearr_29247_29270 = state_29238__$1;
(statearr_29247_29270[(1)] = (4));

} else {
var statearr_29248_29271 = state_29238__$1;
(statearr_29248_29271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (11))){
var inst_29215 = (state_29238[(8)]);
var inst_29225 = (state_29238[(2)]);
var inst_29226 = (inst_29215 + (1));
var inst_29215__$1 = inst_29226;
var state_29238__$1 = (function (){var statearr_29249 = state_29238;
(statearr_29249[(10)] = inst_29225);

(statearr_29249[(8)] = inst_29215__$1);

return statearr_29249;
})();
var statearr_29250_29272 = state_29238__$1;
(statearr_29250_29272[(2)] = null);

(statearr_29250_29272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (9))){
var state_29238__$1 = state_29238;
var statearr_29251_29273 = state_29238__$1;
(statearr_29251_29273[(2)] = null);

(statearr_29251_29273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (5))){
var state_29238__$1 = state_29238;
var statearr_29252_29274 = state_29238__$1;
(statearr_29252_29274[(2)] = null);

(statearr_29252_29274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (10))){
var inst_29230 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29253_29275 = state_29238__$1;
(statearr_29253_29275[(2)] = inst_29230);

(statearr_29253_29275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (8))){
var inst_29220 = (state_29238[(7)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29238__$1,(11),out,inst_29220);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___29265,out))
;
return ((function (switch__18911__auto__,c__18976__auto___29265,out){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_29257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29257[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_29257[(1)] = (1));

return statearr_29257;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_29238){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e29258){if((e29258 instanceof Object)){
var ex__18915__auto__ = e29258;
var statearr_29259_29276 = state_29238;
(statearr_29259_29276[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29277 = state_29238;
state_29238 = G__29277;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___29265,out))
})();
var state__18978__auto__ = (function (){var statearr_29260 = f__18977__auto__.call(null);
(statearr_29260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___29265);

return statearr_29260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___29265,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29285 = (function (map_LT_,f,ch,meta29286){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29286 = meta29286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29287,meta29286__$1){
var self__ = this;
var _29287__$1 = this;
return (new cljs.core.async.t_cljs$core$async29285(self__.map_LT_,self__.f,self__.ch,meta29286__$1));
});

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29287){
var self__ = this;
var _29287__$1 = this;
return self__.meta29286;
});

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29288 = (function (map_LT_,f,ch,meta29286,_,fn1,meta29289){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29286 = meta29286;
this._ = _;
this.fn1 = fn1;
this.meta29289 = meta29289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29290,meta29289__$1){
var self__ = this;
var _29290__$1 = this;
return (new cljs.core.async.t_cljs$core$async29288(self__.map_LT_,self__.f,self__.ch,self__.meta29286,self__._,self__.fn1,meta29289__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29290){
var self__ = this;
var _29290__$1 = this;
return self__.meta29289;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29278_SHARP_){
return f1.call(null,(((p1__29278_SHARP_ == null))?null:self__.f.call(null,p1__29278_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29288.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29286","meta29286",178505753,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29285","cljs.core.async/t_cljs$core$async29285",2107605053,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29289","meta29289",-903896462,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29288";

cljs.core.async.t_cljs$core$async29288.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async29288");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29288 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29288(map_LT___$1,f__$1,ch__$1,meta29286__$1,___$2,fn1__$1,meta29289){
return (new cljs.core.async.t_cljs$core$async29288(map_LT___$1,f__$1,ch__$1,meta29286__$1,___$2,fn1__$1,meta29289));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29288(self__.map_LT_,self__.f,self__.ch,self__.meta29286,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16881__auto__ = ret;
if(cljs.core.truth_(and__16881__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16881__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29286","meta29286",178505753,null)], null);
});

cljs.core.async.t_cljs$core$async29285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29285";

cljs.core.async.t_cljs$core$async29285.cljs$lang$ctorPrWriter = (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async29285");
});

cljs.core.async.__GT_t_cljs$core$async29285 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29285(map_LT___$1,f__$1,ch__$1,meta29286){
return (new cljs.core.async.t_cljs$core$async29285(map_LT___$1,f__$1,ch__$1,meta29286));
});

}

return (new cljs.core.async.t_cljs$core$async29285(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29294 = (function (map_GT_,f,ch,meta29295){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29295 = meta29295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29296,meta29295__$1){
var self__ = this;
var _29296__$1 = this;
return (new cljs.core.async.t_cljs$core$async29294(self__.map_GT_,self__.f,self__.ch,meta29295__$1));
});

cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29296){
var self__ = this;
var _29296__$1 = this;
return self__.meta29295;
});

cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29295","meta29295",2053827348,null)], null);
});

cljs.core.async.t_cljs$core$async29294.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29294";

cljs.core.async.t_cljs$core$async29294.cljs$lang$ctorPrWriter = (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async29294");
});

cljs.core.async.__GT_t_cljs$core$async29294 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29294(map_GT___$1,f__$1,ch__$1,meta29295){
return (new cljs.core.async.t_cljs$core$async29294(map_GT___$1,f__$1,ch__$1,meta29295));
});

}

return (new cljs.core.async.t_cljs$core$async29294(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29300 = (function (filter_GT_,p,ch,meta29301){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29301 = meta29301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29302,meta29301__$1){
var self__ = this;
var _29302__$1 = this;
return (new cljs.core.async.t_cljs$core$async29300(self__.filter_GT_,self__.p,self__.ch,meta29301__$1));
});

cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29302){
var self__ = this;
var _29302__$1 = this;
return self__.meta29301;
});

cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29301","meta29301",1868531055,null)], null);
});

cljs.core.async.t_cljs$core$async29300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29300";

cljs.core.async.t_cljs$core$async29300.cljs$lang$ctorPrWriter = (function (this__17491__auto__,writer__17492__auto__,opt__17493__auto__){
return cljs.core._write.call(null,writer__17492__auto__,"cljs.core.async/t_cljs$core$async29300");
});

cljs.core.async.__GT_t_cljs$core$async29300 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29300(filter_GT___$1,p__$1,ch__$1,meta29301){
return (new cljs.core.async.t_cljs$core$async29300(filter_GT___$1,p__$1,ch__$1,meta29301));
});

}

return (new cljs.core.async.t_cljs$core$async29300(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29303 = [];
var len__17951__auto___29347 = arguments.length;
var i__17952__auto___29348 = (0);
while(true){
if((i__17952__auto___29348 < len__17951__auto___29347)){
args29303.push((arguments[i__17952__auto___29348]));

var G__29349 = (i__17952__auto___29348 + (1));
i__17952__auto___29348 = G__29349;
continue;
} else {
}
break;
}

var G__29305 = args29303.length;
switch (G__29305) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29303.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18976__auto___29351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___29351,out){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___29351,out){
return (function (state_29326){
var state_val_29327 = (state_29326[(1)]);
if((state_val_29327 === (7))){
var inst_29322 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
var statearr_29328_29352 = state_29326__$1;
(statearr_29328_29352[(2)] = inst_29322);

(statearr_29328_29352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (1))){
var state_29326__$1 = state_29326;
var statearr_29329_29353 = state_29326__$1;
(statearr_29329_29353[(2)] = null);

(statearr_29329_29353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (4))){
var inst_29308 = (state_29326[(7)]);
var inst_29308__$1 = (state_29326[(2)]);
var inst_29309 = (inst_29308__$1 == null);
var state_29326__$1 = (function (){var statearr_29330 = state_29326;
(statearr_29330[(7)] = inst_29308__$1);

return statearr_29330;
})();
if(cljs.core.truth_(inst_29309)){
var statearr_29331_29354 = state_29326__$1;
(statearr_29331_29354[(1)] = (5));

} else {
var statearr_29332_29355 = state_29326__$1;
(statearr_29332_29355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (6))){
var inst_29308 = (state_29326[(7)]);
var inst_29313 = p.call(null,inst_29308);
var state_29326__$1 = state_29326;
if(cljs.core.truth_(inst_29313)){
var statearr_29333_29356 = state_29326__$1;
(statearr_29333_29356[(1)] = (8));

} else {
var statearr_29334_29357 = state_29326__$1;
(statearr_29334_29357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (3))){
var inst_29324 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29326__$1,inst_29324);
} else {
if((state_val_29327 === (2))){
var state_29326__$1 = state_29326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29326__$1,(4),ch);
} else {
if((state_val_29327 === (11))){
var inst_29316 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
var statearr_29335_29358 = state_29326__$1;
(statearr_29335_29358[(2)] = inst_29316);

(statearr_29335_29358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (9))){
var state_29326__$1 = state_29326;
var statearr_29336_29359 = state_29326__$1;
(statearr_29336_29359[(2)] = null);

(statearr_29336_29359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (5))){
var inst_29311 = cljs.core.async.close_BANG_.call(null,out);
var state_29326__$1 = state_29326;
var statearr_29337_29360 = state_29326__$1;
(statearr_29337_29360[(2)] = inst_29311);

(statearr_29337_29360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (10))){
var inst_29319 = (state_29326[(2)]);
var state_29326__$1 = (function (){var statearr_29338 = state_29326;
(statearr_29338[(8)] = inst_29319);

return statearr_29338;
})();
var statearr_29339_29361 = state_29326__$1;
(statearr_29339_29361[(2)] = null);

(statearr_29339_29361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (8))){
var inst_29308 = (state_29326[(7)]);
var state_29326__$1 = state_29326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29326__$1,(11),out,inst_29308);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___29351,out))
;
return ((function (switch__18911__auto__,c__18976__auto___29351,out){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_29343 = [null,null,null,null,null,null,null,null,null];
(statearr_29343[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_29343[(1)] = (1));

return statearr_29343;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_29326){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_29326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e29344){if((e29344 instanceof Object)){
var ex__18915__auto__ = e29344;
var statearr_29345_29362 = state_29326;
(statearr_29345_29362[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29363 = state_29326;
state_29326 = G__29363;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_29326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_29326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___29351,out))
})();
var state__18978__auto__ = (function (){var statearr_29346 = f__18977__auto__.call(null);
(statearr_29346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___29351);

return statearr_29346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___29351,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29364 = [];
var len__17951__auto___29367 = arguments.length;
var i__17952__auto___29368 = (0);
while(true){
if((i__17952__auto___29368 < len__17951__auto___29367)){
args29364.push((arguments[i__17952__auto___29368]));

var G__29369 = (i__17952__auto___29368 + (1));
i__17952__auto___29368 = G__29369;
continue;
} else {
}
break;
}

var G__29366 = args29364.length;
switch (G__29366) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29364.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto__){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto__){
return (function (state_29536){
var state_val_29537 = (state_29536[(1)]);
if((state_val_29537 === (7))){
var inst_29532 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29538_29579 = state_29536__$1;
(statearr_29538_29579[(2)] = inst_29532);

(statearr_29538_29579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (20))){
var inst_29502 = (state_29536[(7)]);
var inst_29513 = (state_29536[(2)]);
var inst_29514 = cljs.core.next.call(null,inst_29502);
var inst_29488 = inst_29514;
var inst_29489 = null;
var inst_29490 = (0);
var inst_29491 = (0);
var state_29536__$1 = (function (){var statearr_29539 = state_29536;
(statearr_29539[(8)] = inst_29491);

(statearr_29539[(9)] = inst_29488);

(statearr_29539[(10)] = inst_29513);

(statearr_29539[(11)] = inst_29489);

(statearr_29539[(12)] = inst_29490);

return statearr_29539;
})();
var statearr_29540_29580 = state_29536__$1;
(statearr_29540_29580[(2)] = null);

(statearr_29540_29580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (1))){
var state_29536__$1 = state_29536;
var statearr_29541_29581 = state_29536__$1;
(statearr_29541_29581[(2)] = null);

(statearr_29541_29581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (4))){
var inst_29477 = (state_29536[(13)]);
var inst_29477__$1 = (state_29536[(2)]);
var inst_29478 = (inst_29477__$1 == null);
var state_29536__$1 = (function (){var statearr_29542 = state_29536;
(statearr_29542[(13)] = inst_29477__$1);

return statearr_29542;
})();
if(cljs.core.truth_(inst_29478)){
var statearr_29543_29582 = state_29536__$1;
(statearr_29543_29582[(1)] = (5));

} else {
var statearr_29544_29583 = state_29536__$1;
(statearr_29544_29583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (15))){
var state_29536__$1 = state_29536;
var statearr_29548_29584 = state_29536__$1;
(statearr_29548_29584[(2)] = null);

(statearr_29548_29584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (21))){
var state_29536__$1 = state_29536;
var statearr_29549_29585 = state_29536__$1;
(statearr_29549_29585[(2)] = null);

(statearr_29549_29585[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (13))){
var inst_29491 = (state_29536[(8)]);
var inst_29488 = (state_29536[(9)]);
var inst_29489 = (state_29536[(11)]);
var inst_29490 = (state_29536[(12)]);
var inst_29498 = (state_29536[(2)]);
var inst_29499 = (inst_29491 + (1));
var tmp29545 = inst_29488;
var tmp29546 = inst_29489;
var tmp29547 = inst_29490;
var inst_29488__$1 = tmp29545;
var inst_29489__$1 = tmp29546;
var inst_29490__$1 = tmp29547;
var inst_29491__$1 = inst_29499;
var state_29536__$1 = (function (){var statearr_29550 = state_29536;
(statearr_29550[(8)] = inst_29491__$1);

(statearr_29550[(9)] = inst_29488__$1);

(statearr_29550[(11)] = inst_29489__$1);

(statearr_29550[(12)] = inst_29490__$1);

(statearr_29550[(14)] = inst_29498);

return statearr_29550;
})();
var statearr_29551_29586 = state_29536__$1;
(statearr_29551_29586[(2)] = null);

(statearr_29551_29586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (22))){
var state_29536__$1 = state_29536;
var statearr_29552_29587 = state_29536__$1;
(statearr_29552_29587[(2)] = null);

(statearr_29552_29587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (6))){
var inst_29477 = (state_29536[(13)]);
var inst_29486 = f.call(null,inst_29477);
var inst_29487 = cljs.core.seq.call(null,inst_29486);
var inst_29488 = inst_29487;
var inst_29489 = null;
var inst_29490 = (0);
var inst_29491 = (0);
var state_29536__$1 = (function (){var statearr_29553 = state_29536;
(statearr_29553[(8)] = inst_29491);

(statearr_29553[(9)] = inst_29488);

(statearr_29553[(11)] = inst_29489);

(statearr_29553[(12)] = inst_29490);

return statearr_29553;
})();
var statearr_29554_29588 = state_29536__$1;
(statearr_29554_29588[(2)] = null);

(statearr_29554_29588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (17))){
var inst_29502 = (state_29536[(7)]);
var inst_29506 = cljs.core.chunk_first.call(null,inst_29502);
var inst_29507 = cljs.core.chunk_rest.call(null,inst_29502);
var inst_29508 = cljs.core.count.call(null,inst_29506);
var inst_29488 = inst_29507;
var inst_29489 = inst_29506;
var inst_29490 = inst_29508;
var inst_29491 = (0);
var state_29536__$1 = (function (){var statearr_29555 = state_29536;
(statearr_29555[(8)] = inst_29491);

(statearr_29555[(9)] = inst_29488);

(statearr_29555[(11)] = inst_29489);

(statearr_29555[(12)] = inst_29490);

return statearr_29555;
})();
var statearr_29556_29589 = state_29536__$1;
(statearr_29556_29589[(2)] = null);

(statearr_29556_29589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (3))){
var inst_29534 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29536__$1,inst_29534);
} else {
if((state_val_29537 === (12))){
var inst_29522 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29557_29590 = state_29536__$1;
(statearr_29557_29590[(2)] = inst_29522);

(statearr_29557_29590[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (2))){
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(4),in$);
} else {
if((state_val_29537 === (23))){
var inst_29530 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29558_29591 = state_29536__$1;
(statearr_29558_29591[(2)] = inst_29530);

(statearr_29558_29591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (19))){
var inst_29517 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29559_29592 = state_29536__$1;
(statearr_29559_29592[(2)] = inst_29517);

(statearr_29559_29592[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (11))){
var inst_29502 = (state_29536[(7)]);
var inst_29488 = (state_29536[(9)]);
var inst_29502__$1 = cljs.core.seq.call(null,inst_29488);
var state_29536__$1 = (function (){var statearr_29560 = state_29536;
(statearr_29560[(7)] = inst_29502__$1);

return statearr_29560;
})();
if(inst_29502__$1){
var statearr_29561_29593 = state_29536__$1;
(statearr_29561_29593[(1)] = (14));

} else {
var statearr_29562_29594 = state_29536__$1;
(statearr_29562_29594[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (9))){
var inst_29524 = (state_29536[(2)]);
var inst_29525 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29536__$1 = (function (){var statearr_29563 = state_29536;
(statearr_29563[(15)] = inst_29524);

return statearr_29563;
})();
if(cljs.core.truth_(inst_29525)){
var statearr_29564_29595 = state_29536__$1;
(statearr_29564_29595[(1)] = (21));

} else {
var statearr_29565_29596 = state_29536__$1;
(statearr_29565_29596[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (5))){
var inst_29480 = cljs.core.async.close_BANG_.call(null,out);
var state_29536__$1 = state_29536;
var statearr_29566_29597 = state_29536__$1;
(statearr_29566_29597[(2)] = inst_29480);

(statearr_29566_29597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (14))){
var inst_29502 = (state_29536[(7)]);
var inst_29504 = cljs.core.chunked_seq_QMARK_.call(null,inst_29502);
var state_29536__$1 = state_29536;
if(inst_29504){
var statearr_29567_29598 = state_29536__$1;
(statearr_29567_29598[(1)] = (17));

} else {
var statearr_29568_29599 = state_29536__$1;
(statearr_29568_29599[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (16))){
var inst_29520 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29569_29600 = state_29536__$1;
(statearr_29569_29600[(2)] = inst_29520);

(statearr_29569_29600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (10))){
var inst_29491 = (state_29536[(8)]);
var inst_29489 = (state_29536[(11)]);
var inst_29496 = cljs.core._nth.call(null,inst_29489,inst_29491);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29536__$1,(13),out,inst_29496);
} else {
if((state_val_29537 === (18))){
var inst_29502 = (state_29536[(7)]);
var inst_29511 = cljs.core.first.call(null,inst_29502);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29536__$1,(20),out,inst_29511);
} else {
if((state_val_29537 === (8))){
var inst_29491 = (state_29536[(8)]);
var inst_29490 = (state_29536[(12)]);
var inst_29493 = (inst_29491 < inst_29490);
var inst_29494 = inst_29493;
var state_29536__$1 = state_29536;
if(cljs.core.truth_(inst_29494)){
var statearr_29570_29601 = state_29536__$1;
(statearr_29570_29601[(1)] = (10));

} else {
var statearr_29571_29602 = state_29536__$1;
(statearr_29571_29602[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto__))
;
return ((function (switch__18911__auto__,c__18976__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18912__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18912__auto____0 = (function (){
var statearr_29575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29575[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18912__auto__);

(statearr_29575[(1)] = (1));

return statearr_29575;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18912__auto____1 = (function (state_29536){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_29536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e29576){if((e29576 instanceof Object)){
var ex__18915__auto__ = e29576;
var statearr_29577_29603 = state_29536;
(statearr_29577_29603[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29604 = state_29536;
state_29536 = G__29604;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18912__auto__ = function(state_29536){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18912__auto____1.call(this,state_29536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18912__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18912__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto__))
})();
var state__18978__auto__ = (function (){var statearr_29578 = f__18977__auto__.call(null);
(statearr_29578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto__);

return statearr_29578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto__))
);

return c__18976__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29605 = [];
var len__17951__auto___29608 = arguments.length;
var i__17952__auto___29609 = (0);
while(true){
if((i__17952__auto___29609 < len__17951__auto___29608)){
args29605.push((arguments[i__17952__auto___29609]));

var G__29610 = (i__17952__auto___29609 + (1));
i__17952__auto___29609 = G__29610;
continue;
} else {
}
break;
}

var G__29607 = args29605.length;
switch (G__29607) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29605.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29612 = [];
var len__17951__auto___29615 = arguments.length;
var i__17952__auto___29616 = (0);
while(true){
if((i__17952__auto___29616 < len__17951__auto___29615)){
args29612.push((arguments[i__17952__auto___29616]));

var G__29617 = (i__17952__auto___29616 + (1));
i__17952__auto___29616 = G__29617;
continue;
} else {
}
break;
}

var G__29614 = args29612.length;
switch (G__29614) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29612.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29619 = [];
var len__17951__auto___29670 = arguments.length;
var i__17952__auto___29671 = (0);
while(true){
if((i__17952__auto___29671 < len__17951__auto___29670)){
args29619.push((arguments[i__17952__auto___29671]));

var G__29672 = (i__17952__auto___29671 + (1));
i__17952__auto___29671 = G__29672;
continue;
} else {
}
break;
}

var G__29621 = args29619.length;
switch (G__29621) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29619.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18976__auto___29674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___29674,out){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___29674,out){
return (function (state_29645){
var state_val_29646 = (state_29645[(1)]);
if((state_val_29646 === (7))){
var inst_29640 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
var statearr_29647_29675 = state_29645__$1;
(statearr_29647_29675[(2)] = inst_29640);

(statearr_29647_29675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (1))){
var inst_29622 = null;
var state_29645__$1 = (function (){var statearr_29648 = state_29645;
(statearr_29648[(7)] = inst_29622);

return statearr_29648;
})();
var statearr_29649_29676 = state_29645__$1;
(statearr_29649_29676[(2)] = null);

(statearr_29649_29676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (4))){
var inst_29625 = (state_29645[(8)]);
var inst_29625__$1 = (state_29645[(2)]);
var inst_29626 = (inst_29625__$1 == null);
var inst_29627 = cljs.core.not.call(null,inst_29626);
var state_29645__$1 = (function (){var statearr_29650 = state_29645;
(statearr_29650[(8)] = inst_29625__$1);

return statearr_29650;
})();
if(inst_29627){
var statearr_29651_29677 = state_29645__$1;
(statearr_29651_29677[(1)] = (5));

} else {
var statearr_29652_29678 = state_29645__$1;
(statearr_29652_29678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (6))){
var state_29645__$1 = state_29645;
var statearr_29653_29679 = state_29645__$1;
(statearr_29653_29679[(2)] = null);

(statearr_29653_29679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (3))){
var inst_29642 = (state_29645[(2)]);
var inst_29643 = cljs.core.async.close_BANG_.call(null,out);
var state_29645__$1 = (function (){var statearr_29654 = state_29645;
(statearr_29654[(9)] = inst_29642);

return statearr_29654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29645__$1,inst_29643);
} else {
if((state_val_29646 === (2))){
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29645__$1,(4),ch);
} else {
if((state_val_29646 === (11))){
var inst_29625 = (state_29645[(8)]);
var inst_29634 = (state_29645[(2)]);
var inst_29622 = inst_29625;
var state_29645__$1 = (function (){var statearr_29655 = state_29645;
(statearr_29655[(7)] = inst_29622);

(statearr_29655[(10)] = inst_29634);

return statearr_29655;
})();
var statearr_29656_29680 = state_29645__$1;
(statearr_29656_29680[(2)] = null);

(statearr_29656_29680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (9))){
var inst_29625 = (state_29645[(8)]);
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29645__$1,(11),out,inst_29625);
} else {
if((state_val_29646 === (5))){
var inst_29625 = (state_29645[(8)]);
var inst_29622 = (state_29645[(7)]);
var inst_29629 = cljs.core._EQ_.call(null,inst_29625,inst_29622);
var state_29645__$1 = state_29645;
if(inst_29629){
var statearr_29658_29681 = state_29645__$1;
(statearr_29658_29681[(1)] = (8));

} else {
var statearr_29659_29682 = state_29645__$1;
(statearr_29659_29682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (10))){
var inst_29637 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
var statearr_29660_29683 = state_29645__$1;
(statearr_29660_29683[(2)] = inst_29637);

(statearr_29660_29683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (8))){
var inst_29622 = (state_29645[(7)]);
var tmp29657 = inst_29622;
var inst_29622__$1 = tmp29657;
var state_29645__$1 = (function (){var statearr_29661 = state_29645;
(statearr_29661[(7)] = inst_29622__$1);

return statearr_29661;
})();
var statearr_29662_29684 = state_29645__$1;
(statearr_29662_29684[(2)] = null);

(statearr_29662_29684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___29674,out))
;
return ((function (switch__18911__auto__,c__18976__auto___29674,out){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_29666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29666[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_29666[(1)] = (1));

return statearr_29666;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_29645){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_29645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e29667){if((e29667 instanceof Object)){
var ex__18915__auto__ = e29667;
var statearr_29668_29685 = state_29645;
(statearr_29668_29685[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29686 = state_29645;
state_29645 = G__29686;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_29645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_29645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___29674,out))
})();
var state__18978__auto__ = (function (){var statearr_29669 = f__18977__auto__.call(null);
(statearr_29669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___29674);

return statearr_29669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___29674,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29687 = [];
var len__17951__auto___29757 = arguments.length;
var i__17952__auto___29758 = (0);
while(true){
if((i__17952__auto___29758 < len__17951__auto___29757)){
args29687.push((arguments[i__17952__auto___29758]));

var G__29759 = (i__17952__auto___29758 + (1));
i__17952__auto___29758 = G__29759;
continue;
} else {
}
break;
}

var G__29689 = args29687.length;
switch (G__29689) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29687.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18976__auto___29761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___29761,out){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___29761,out){
return (function (state_29727){
var state_val_29728 = (state_29727[(1)]);
if((state_val_29728 === (7))){
var inst_29723 = (state_29727[(2)]);
var state_29727__$1 = state_29727;
var statearr_29729_29762 = state_29727__$1;
(statearr_29729_29762[(2)] = inst_29723);

(statearr_29729_29762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (1))){
var inst_29690 = (new Array(n));
var inst_29691 = inst_29690;
var inst_29692 = (0);
var state_29727__$1 = (function (){var statearr_29730 = state_29727;
(statearr_29730[(7)] = inst_29692);

(statearr_29730[(8)] = inst_29691);

return statearr_29730;
})();
var statearr_29731_29763 = state_29727__$1;
(statearr_29731_29763[(2)] = null);

(statearr_29731_29763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (4))){
var inst_29695 = (state_29727[(9)]);
var inst_29695__$1 = (state_29727[(2)]);
var inst_29696 = (inst_29695__$1 == null);
var inst_29697 = cljs.core.not.call(null,inst_29696);
var state_29727__$1 = (function (){var statearr_29732 = state_29727;
(statearr_29732[(9)] = inst_29695__$1);

return statearr_29732;
})();
if(inst_29697){
var statearr_29733_29764 = state_29727__$1;
(statearr_29733_29764[(1)] = (5));

} else {
var statearr_29734_29765 = state_29727__$1;
(statearr_29734_29765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (15))){
var inst_29717 = (state_29727[(2)]);
var state_29727__$1 = state_29727;
var statearr_29735_29766 = state_29727__$1;
(statearr_29735_29766[(2)] = inst_29717);

(statearr_29735_29766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (13))){
var state_29727__$1 = state_29727;
var statearr_29736_29767 = state_29727__$1;
(statearr_29736_29767[(2)] = null);

(statearr_29736_29767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (6))){
var inst_29692 = (state_29727[(7)]);
var inst_29713 = (inst_29692 > (0));
var state_29727__$1 = state_29727;
if(cljs.core.truth_(inst_29713)){
var statearr_29737_29768 = state_29727__$1;
(statearr_29737_29768[(1)] = (12));

} else {
var statearr_29738_29769 = state_29727__$1;
(statearr_29738_29769[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (3))){
var inst_29725 = (state_29727[(2)]);
var state_29727__$1 = state_29727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29727__$1,inst_29725);
} else {
if((state_val_29728 === (12))){
var inst_29691 = (state_29727[(8)]);
var inst_29715 = cljs.core.vec.call(null,inst_29691);
var state_29727__$1 = state_29727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29727__$1,(15),out,inst_29715);
} else {
if((state_val_29728 === (2))){
var state_29727__$1 = state_29727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29727__$1,(4),ch);
} else {
if((state_val_29728 === (11))){
var inst_29707 = (state_29727[(2)]);
var inst_29708 = (new Array(n));
var inst_29691 = inst_29708;
var inst_29692 = (0);
var state_29727__$1 = (function (){var statearr_29739 = state_29727;
(statearr_29739[(7)] = inst_29692);

(statearr_29739[(8)] = inst_29691);

(statearr_29739[(10)] = inst_29707);

return statearr_29739;
})();
var statearr_29740_29770 = state_29727__$1;
(statearr_29740_29770[(2)] = null);

(statearr_29740_29770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (9))){
var inst_29691 = (state_29727[(8)]);
var inst_29705 = cljs.core.vec.call(null,inst_29691);
var state_29727__$1 = state_29727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29727__$1,(11),out,inst_29705);
} else {
if((state_val_29728 === (5))){
var inst_29692 = (state_29727[(7)]);
var inst_29695 = (state_29727[(9)]);
var inst_29700 = (state_29727[(11)]);
var inst_29691 = (state_29727[(8)]);
var inst_29699 = (inst_29691[inst_29692] = inst_29695);
var inst_29700__$1 = (inst_29692 + (1));
var inst_29701 = (inst_29700__$1 < n);
var state_29727__$1 = (function (){var statearr_29741 = state_29727;
(statearr_29741[(11)] = inst_29700__$1);

(statearr_29741[(12)] = inst_29699);

return statearr_29741;
})();
if(cljs.core.truth_(inst_29701)){
var statearr_29742_29771 = state_29727__$1;
(statearr_29742_29771[(1)] = (8));

} else {
var statearr_29743_29772 = state_29727__$1;
(statearr_29743_29772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (14))){
var inst_29720 = (state_29727[(2)]);
var inst_29721 = cljs.core.async.close_BANG_.call(null,out);
var state_29727__$1 = (function (){var statearr_29745 = state_29727;
(statearr_29745[(13)] = inst_29720);

return statearr_29745;
})();
var statearr_29746_29773 = state_29727__$1;
(statearr_29746_29773[(2)] = inst_29721);

(statearr_29746_29773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (10))){
var inst_29711 = (state_29727[(2)]);
var state_29727__$1 = state_29727;
var statearr_29747_29774 = state_29727__$1;
(statearr_29747_29774[(2)] = inst_29711);

(statearr_29747_29774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29728 === (8))){
var inst_29700 = (state_29727[(11)]);
var inst_29691 = (state_29727[(8)]);
var tmp29744 = inst_29691;
var inst_29691__$1 = tmp29744;
var inst_29692 = inst_29700;
var state_29727__$1 = (function (){var statearr_29748 = state_29727;
(statearr_29748[(7)] = inst_29692);

(statearr_29748[(8)] = inst_29691__$1);

return statearr_29748;
})();
var statearr_29749_29775 = state_29727__$1;
(statearr_29749_29775[(2)] = null);

(statearr_29749_29775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___29761,out))
;
return ((function (switch__18911__auto__,c__18976__auto___29761,out){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_29753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29753[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_29753[(1)] = (1));

return statearr_29753;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_29727){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_29727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e29754){if((e29754 instanceof Object)){
var ex__18915__auto__ = e29754;
var statearr_29755_29776 = state_29727;
(statearr_29755_29776[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29777 = state_29727;
state_29727 = G__29777;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_29727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_29727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___29761,out))
})();
var state__18978__auto__ = (function (){var statearr_29756 = f__18977__auto__.call(null);
(statearr_29756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___29761);

return statearr_29756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___29761,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29778 = [];
var len__17951__auto___29852 = arguments.length;
var i__17952__auto___29853 = (0);
while(true){
if((i__17952__auto___29853 < len__17951__auto___29852)){
args29778.push((arguments[i__17952__auto___29853]));

var G__29854 = (i__17952__auto___29853 + (1));
i__17952__auto___29853 = G__29854;
continue;
} else {
}
break;
}

var G__29780 = args29778.length;
switch (G__29780) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29778.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18976__auto___29856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___29856,out){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___29856,out){
return (function (state_29822){
var state_val_29823 = (state_29822[(1)]);
if((state_val_29823 === (7))){
var inst_29818 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29824_29857 = state_29822__$1;
(statearr_29824_29857[(2)] = inst_29818);

(statearr_29824_29857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (1))){
var inst_29781 = [];
var inst_29782 = inst_29781;
var inst_29783 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29822__$1 = (function (){var statearr_29825 = state_29822;
(statearr_29825[(7)] = inst_29782);

(statearr_29825[(8)] = inst_29783);

return statearr_29825;
})();
var statearr_29826_29858 = state_29822__$1;
(statearr_29826_29858[(2)] = null);

(statearr_29826_29858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (4))){
var inst_29786 = (state_29822[(9)]);
var inst_29786__$1 = (state_29822[(2)]);
var inst_29787 = (inst_29786__$1 == null);
var inst_29788 = cljs.core.not.call(null,inst_29787);
var state_29822__$1 = (function (){var statearr_29827 = state_29822;
(statearr_29827[(9)] = inst_29786__$1);

return statearr_29827;
})();
if(inst_29788){
var statearr_29828_29859 = state_29822__$1;
(statearr_29828_29859[(1)] = (5));

} else {
var statearr_29829_29860 = state_29822__$1;
(statearr_29829_29860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (15))){
var inst_29812 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29830_29861 = state_29822__$1;
(statearr_29830_29861[(2)] = inst_29812);

(statearr_29830_29861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (13))){
var state_29822__$1 = state_29822;
var statearr_29831_29862 = state_29822__$1;
(statearr_29831_29862[(2)] = null);

(statearr_29831_29862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (6))){
var inst_29782 = (state_29822[(7)]);
var inst_29807 = inst_29782.length;
var inst_29808 = (inst_29807 > (0));
var state_29822__$1 = state_29822;
if(cljs.core.truth_(inst_29808)){
var statearr_29832_29863 = state_29822__$1;
(statearr_29832_29863[(1)] = (12));

} else {
var statearr_29833_29864 = state_29822__$1;
(statearr_29833_29864[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (3))){
var inst_29820 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29822__$1,inst_29820);
} else {
if((state_val_29823 === (12))){
var inst_29782 = (state_29822[(7)]);
var inst_29810 = cljs.core.vec.call(null,inst_29782);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29822__$1,(15),out,inst_29810);
} else {
if((state_val_29823 === (2))){
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29822__$1,(4),ch);
} else {
if((state_val_29823 === (11))){
var inst_29790 = (state_29822[(10)]);
var inst_29786 = (state_29822[(9)]);
var inst_29800 = (state_29822[(2)]);
var inst_29801 = [];
var inst_29802 = inst_29801.push(inst_29786);
var inst_29782 = inst_29801;
var inst_29783 = inst_29790;
var state_29822__$1 = (function (){var statearr_29834 = state_29822;
(statearr_29834[(7)] = inst_29782);

(statearr_29834[(11)] = inst_29800);

(statearr_29834[(8)] = inst_29783);

(statearr_29834[(12)] = inst_29802);

return statearr_29834;
})();
var statearr_29835_29865 = state_29822__$1;
(statearr_29835_29865[(2)] = null);

(statearr_29835_29865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (9))){
var inst_29782 = (state_29822[(7)]);
var inst_29798 = cljs.core.vec.call(null,inst_29782);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29822__$1,(11),out,inst_29798);
} else {
if((state_val_29823 === (5))){
var inst_29790 = (state_29822[(10)]);
var inst_29783 = (state_29822[(8)]);
var inst_29786 = (state_29822[(9)]);
var inst_29790__$1 = f.call(null,inst_29786);
var inst_29791 = cljs.core._EQ_.call(null,inst_29790__$1,inst_29783);
var inst_29792 = cljs.core.keyword_identical_QMARK_.call(null,inst_29783,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29793 = (inst_29791) || (inst_29792);
var state_29822__$1 = (function (){var statearr_29836 = state_29822;
(statearr_29836[(10)] = inst_29790__$1);

return statearr_29836;
})();
if(cljs.core.truth_(inst_29793)){
var statearr_29837_29866 = state_29822__$1;
(statearr_29837_29866[(1)] = (8));

} else {
var statearr_29838_29867 = state_29822__$1;
(statearr_29838_29867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (14))){
var inst_29815 = (state_29822[(2)]);
var inst_29816 = cljs.core.async.close_BANG_.call(null,out);
var state_29822__$1 = (function (){var statearr_29840 = state_29822;
(statearr_29840[(13)] = inst_29815);

return statearr_29840;
})();
var statearr_29841_29868 = state_29822__$1;
(statearr_29841_29868[(2)] = inst_29816);

(statearr_29841_29868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (10))){
var inst_29805 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29842_29869 = state_29822__$1;
(statearr_29842_29869[(2)] = inst_29805);

(statearr_29842_29869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (8))){
var inst_29782 = (state_29822[(7)]);
var inst_29790 = (state_29822[(10)]);
var inst_29786 = (state_29822[(9)]);
var inst_29795 = inst_29782.push(inst_29786);
var tmp29839 = inst_29782;
var inst_29782__$1 = tmp29839;
var inst_29783 = inst_29790;
var state_29822__$1 = (function (){var statearr_29843 = state_29822;
(statearr_29843[(7)] = inst_29782__$1);

(statearr_29843[(14)] = inst_29795);

(statearr_29843[(8)] = inst_29783);

return statearr_29843;
})();
var statearr_29844_29870 = state_29822__$1;
(statearr_29844_29870[(2)] = null);

(statearr_29844_29870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18976__auto___29856,out))
;
return ((function (switch__18911__auto__,c__18976__auto___29856,out){
return (function() {
var cljs$core$async$state_machine__18912__auto__ = null;
var cljs$core$async$state_machine__18912__auto____0 = (function (){
var statearr_29848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29848[(0)] = cljs$core$async$state_machine__18912__auto__);

(statearr_29848[(1)] = (1));

return statearr_29848;
});
var cljs$core$async$state_machine__18912__auto____1 = (function (state_29822){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_29822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e29849){if((e29849 instanceof Object)){
var ex__18915__auto__ = e29849;
var statearr_29850_29871 = state_29822;
(statearr_29850_29871[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29872 = state_29822;
state_29822 = G__29872;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
cljs$core$async$state_machine__18912__auto__ = function(state_29822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18912__auto____1.call(this,state_29822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18912__auto____0;
cljs$core$async$state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18912__auto____1;
return cljs$core$async$state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___29856,out))
})();
var state__18978__auto__ = (function (){var statearr_29851 = f__18977__auto__.call(null);
(statearr_29851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___29856);

return statearr_29851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___29856,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map