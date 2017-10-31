// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26121_26135 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26122_26136 = null;
var count__26123_26137 = (0);
var i__26124_26138 = (0);
while(true){
if((i__26124_26138 < count__26123_26137)){
var f_26139 = cljs.core._nth.call(null,chunk__26122_26136,i__26124_26138);
cljs.core.println.call(null,"  ",f_26139);

var G__26140 = seq__26121_26135;
var G__26141 = chunk__26122_26136;
var G__26142 = count__26123_26137;
var G__26143 = (i__26124_26138 + (1));
seq__26121_26135 = G__26140;
chunk__26122_26136 = G__26141;
count__26123_26137 = G__26142;
i__26124_26138 = G__26143;
continue;
} else {
var temp__4425__auto___26144 = cljs.core.seq.call(null,seq__26121_26135);
if(temp__4425__auto___26144){
var seq__26121_26145__$1 = temp__4425__auto___26144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26121_26145__$1)){
var c__17696__auto___26146 = cljs.core.chunk_first.call(null,seq__26121_26145__$1);
var G__26147 = cljs.core.chunk_rest.call(null,seq__26121_26145__$1);
var G__26148 = c__17696__auto___26146;
var G__26149 = cljs.core.count.call(null,c__17696__auto___26146);
var G__26150 = (0);
seq__26121_26135 = G__26147;
chunk__26122_26136 = G__26148;
count__26123_26137 = G__26149;
i__26124_26138 = G__26150;
continue;
} else {
var f_26151 = cljs.core.first.call(null,seq__26121_26145__$1);
cljs.core.println.call(null,"  ",f_26151);

var G__26152 = cljs.core.next.call(null,seq__26121_26145__$1);
var G__26153 = null;
var G__26154 = (0);
var G__26155 = (0);
seq__26121_26135 = G__26152;
chunk__26122_26136 = G__26153;
count__26123_26137 = G__26154;
i__26124_26138 = G__26155;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26156 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16893__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16893__auto__)){
return or__16893__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26156);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26156)))?cljs.core.second.call(null,arglists_26156):arglists_26156));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26125 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26126 = null;
var count__26127 = (0);
var i__26128 = (0);
while(true){
if((i__26128 < count__26127)){
var vec__26129 = cljs.core._nth.call(null,chunk__26126,i__26128);
var name = cljs.core.nth.call(null,vec__26129,(0),null);
var map__26130 = cljs.core.nth.call(null,vec__26129,(1),null);
var map__26130__$1 = ((((!((map__26130 == null)))?((((map__26130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26130):map__26130);
var doc = cljs.core.get.call(null,map__26130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26157 = seq__26125;
var G__26158 = chunk__26126;
var G__26159 = count__26127;
var G__26160 = (i__26128 + (1));
seq__26125 = G__26157;
chunk__26126 = G__26158;
count__26127 = G__26159;
i__26128 = G__26160;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26125);
if(temp__4425__auto__){
var seq__26125__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26125__$1)){
var c__17696__auto__ = cljs.core.chunk_first.call(null,seq__26125__$1);
var G__26161 = cljs.core.chunk_rest.call(null,seq__26125__$1);
var G__26162 = c__17696__auto__;
var G__26163 = cljs.core.count.call(null,c__17696__auto__);
var G__26164 = (0);
seq__26125 = G__26161;
chunk__26126 = G__26162;
count__26127 = G__26163;
i__26128 = G__26164;
continue;
} else {
var vec__26132 = cljs.core.first.call(null,seq__26125__$1);
var name = cljs.core.nth.call(null,vec__26132,(0),null);
var map__26133 = cljs.core.nth.call(null,vec__26132,(1),null);
var map__26133__$1 = ((((!((map__26133 == null)))?((((map__26133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26133):map__26133);
var doc = cljs.core.get.call(null,map__26133__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26133__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26165 = cljs.core.next.call(null,seq__26125__$1);
var G__26166 = null;
var G__26167 = (0);
var G__26168 = (0);
seq__26125 = G__26165;
chunk__26126 = G__26166;
count__26127 = G__26167;
i__26128 = G__26168;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map