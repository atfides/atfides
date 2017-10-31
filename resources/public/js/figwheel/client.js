// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25011 = cljs.core._EQ_;
var expr__25012 = (function (){var or__16893__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16893__auto__)){
return or__16893__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25011.call(null,"true",expr__25012))){
return true;
} else {
if(cljs.core.truth_(pred__25011.call(null,"false",expr__25012))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25012)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25014__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25015__i = 0, G__25015__a = new Array(arguments.length -  0);
while (G__25015__i < G__25015__a.length) {G__25015__a[G__25015__i] = arguments[G__25015__i + 0]; ++G__25015__i;}
  args = new cljs.core.IndexedSeq(G__25015__a,0);
} 
return G__25014__delegate.call(this,args);};
G__25014.cljs$lang$maxFixedArity = 0;
G__25014.cljs$lang$applyTo = (function (arglist__25016){
var args = cljs.core.seq(arglist__25016);
return G__25014__delegate(args);
});
G__25014.cljs$core$IFn$_invoke$arity$variadic = G__25014__delegate;
return G__25014;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25017){
var map__25020 = p__25017;
var map__25020__$1 = ((((!((map__25020 == null)))?((((map__25020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25020):map__25020);
var message = cljs.core.get.call(null,map__25020__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25020__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16893__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16893__auto__)){
return or__16893__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16881__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16881__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16881__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18976__auto___25182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___25182,ch){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___25182,ch){
return (function (state_25151){
var state_val_25152 = (state_25151[(1)]);
if((state_val_25152 === (7))){
var inst_25147 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25153_25183 = state_25151__$1;
(statearr_25153_25183[(2)] = inst_25147);

(statearr_25153_25183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (1))){
var state_25151__$1 = state_25151;
var statearr_25154_25184 = state_25151__$1;
(statearr_25154_25184[(2)] = null);

(statearr_25154_25184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (4))){
var inst_25104 = (state_25151[(7)]);
var inst_25104__$1 = (state_25151[(2)]);
var state_25151__$1 = (function (){var statearr_25155 = state_25151;
(statearr_25155[(7)] = inst_25104__$1);

return statearr_25155;
})();
if(cljs.core.truth_(inst_25104__$1)){
var statearr_25156_25185 = state_25151__$1;
(statearr_25156_25185[(1)] = (5));

} else {
var statearr_25157_25186 = state_25151__$1;
(statearr_25157_25186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (15))){
var inst_25111 = (state_25151[(8)]);
var inst_25126 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25111);
var inst_25127 = cljs.core.first.call(null,inst_25126);
var inst_25128 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25127);
var inst_25129 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25128)].join('');
var inst_25130 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25129);
var state_25151__$1 = state_25151;
var statearr_25158_25187 = state_25151__$1;
(statearr_25158_25187[(2)] = inst_25130);

(statearr_25158_25187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (13))){
var inst_25135 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25159_25188 = state_25151__$1;
(statearr_25159_25188[(2)] = inst_25135);

(statearr_25159_25188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (6))){
var state_25151__$1 = state_25151;
var statearr_25160_25189 = state_25151__$1;
(statearr_25160_25189[(2)] = null);

(statearr_25160_25189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (17))){
var inst_25133 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25161_25190 = state_25151__$1;
(statearr_25161_25190[(2)] = inst_25133);

(statearr_25161_25190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (3))){
var inst_25149 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25151__$1,inst_25149);
} else {
if((state_val_25152 === (12))){
var inst_25110 = (state_25151[(9)]);
var inst_25124 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25110,opts);
var state_25151__$1 = state_25151;
if(cljs.core.truth_(inst_25124)){
var statearr_25162_25191 = state_25151__$1;
(statearr_25162_25191[(1)] = (15));

} else {
var statearr_25163_25192 = state_25151__$1;
(statearr_25163_25192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (2))){
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25151__$1,(4),ch);
} else {
if((state_val_25152 === (11))){
var inst_25111 = (state_25151[(8)]);
var inst_25116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25117 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25111);
var inst_25118 = cljs.core.async.timeout.call(null,(1000));
var inst_25119 = [inst_25117,inst_25118];
var inst_25120 = (new cljs.core.PersistentVector(null,2,(5),inst_25116,inst_25119,null));
var state_25151__$1 = state_25151;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25151__$1,(14),inst_25120);
} else {
if((state_val_25152 === (9))){
var inst_25111 = (state_25151[(8)]);
var inst_25137 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25138 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25111);
var inst_25139 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25138);
var inst_25140 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25139)].join('');
var inst_25141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25140);
var state_25151__$1 = (function (){var statearr_25164 = state_25151;
(statearr_25164[(10)] = inst_25137);

return statearr_25164;
})();
var statearr_25165_25193 = state_25151__$1;
(statearr_25165_25193[(2)] = inst_25141);

(statearr_25165_25193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (5))){
var inst_25104 = (state_25151[(7)]);
var inst_25106 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25107 = (new cljs.core.PersistentArrayMap(null,2,inst_25106,null));
var inst_25108 = (new cljs.core.PersistentHashSet(null,inst_25107,null));
var inst_25109 = figwheel.client.focus_msgs.call(null,inst_25108,inst_25104);
var inst_25110 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25109);
var inst_25111 = cljs.core.first.call(null,inst_25109);
var inst_25112 = figwheel.client.autoload_QMARK_.call(null);
var state_25151__$1 = (function (){var statearr_25166 = state_25151;
(statearr_25166[(9)] = inst_25110);

(statearr_25166[(8)] = inst_25111);

return statearr_25166;
})();
if(cljs.core.truth_(inst_25112)){
var statearr_25167_25194 = state_25151__$1;
(statearr_25167_25194[(1)] = (8));

} else {
var statearr_25168_25195 = state_25151__$1;
(statearr_25168_25195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (14))){
var inst_25122 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25169_25196 = state_25151__$1;
(statearr_25169_25196[(2)] = inst_25122);

(statearr_25169_25196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (16))){
var state_25151__$1 = state_25151;
var statearr_25170_25197 = state_25151__$1;
(statearr_25170_25197[(2)] = null);

(statearr_25170_25197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (10))){
var inst_25143 = (state_25151[(2)]);
var state_25151__$1 = (function (){var statearr_25171 = state_25151;
(statearr_25171[(11)] = inst_25143);

return statearr_25171;
})();
var statearr_25172_25198 = state_25151__$1;
(statearr_25172_25198[(2)] = null);

(statearr_25172_25198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (8))){
var inst_25110 = (state_25151[(9)]);
var inst_25114 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25110,opts);
var state_25151__$1 = state_25151;
if(cljs.core.truth_(inst_25114)){
var statearr_25173_25199 = state_25151__$1;
(statearr_25173_25199[(1)] = (11));

} else {
var statearr_25174_25200 = state_25151__$1;
(statearr_25174_25200[(1)] = (12));

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
});})(c__18976__auto___25182,ch))
;
return ((function (switch__18911__auto__,c__18976__auto___25182,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18912__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18912__auto____0 = (function (){
var statearr_25178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25178[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18912__auto__);

(statearr_25178[(1)] = (1));

return statearr_25178;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18912__auto____1 = (function (state_25151){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_25151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e25179){if((e25179 instanceof Object)){
var ex__18915__auto__ = e25179;
var statearr_25180_25201 = state_25151;
(statearr_25180_25201[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25202 = state_25151;
state_25151 = G__25202;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18912__auto__ = function(state_25151){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18912__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18912__auto____1.call(this,state_25151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18912__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18912__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___25182,ch))
})();
var state__18978__auto__ = (function (){var statearr_25181 = f__18977__auto__.call(null);
(statearr_25181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___25182);

return statearr_25181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___25182,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25203_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25203_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25210 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25210){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25208 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25209 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25208,_STAR_print_newline_STAR_25209,base_path_25210){
return (function() { 
var G__25211__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25212__i = 0, G__25212__a = new Array(arguments.length -  0);
while (G__25212__i < G__25212__a.length) {G__25212__a[G__25212__i] = arguments[G__25212__i + 0]; ++G__25212__i;}
  args = new cljs.core.IndexedSeq(G__25212__a,0);
} 
return G__25211__delegate.call(this,args);};
G__25211.cljs$lang$maxFixedArity = 0;
G__25211.cljs$lang$applyTo = (function (arglist__25213){
var args = cljs.core.seq(arglist__25213);
return G__25211__delegate(args);
});
G__25211.cljs$core$IFn$_invoke$arity$variadic = G__25211__delegate;
return G__25211;
})()
;})(_STAR_print_fn_STAR_25208,_STAR_print_newline_STAR_25209,base_path_25210))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25209;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25208;
}}catch (e25207){if((e25207 instanceof Error)){
var e = e25207;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25210], null));
} else {
var e = e25207;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25210))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25214){
var map__25221 = p__25214;
var map__25221__$1 = ((((!((map__25221 == null)))?((((map__25221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25221):map__25221);
var opts = map__25221__$1;
var build_id = cljs.core.get.call(null,map__25221__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25221,map__25221__$1,opts,build_id){
return (function (p__25223){
var vec__25224 = p__25223;
var map__25225 = cljs.core.nth.call(null,vec__25224,(0),null);
var map__25225__$1 = ((((!((map__25225 == null)))?((((map__25225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25225):map__25225);
var msg = map__25225__$1;
var msg_name = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25224,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25224,map__25225,map__25225__$1,msg,msg_name,_,map__25221,map__25221__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25224,map__25225,map__25225__$1,msg,msg_name,_,map__25221,map__25221__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25221,map__25221__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25231){
var vec__25232 = p__25231;
var map__25233 = cljs.core.nth.call(null,vec__25232,(0),null);
var map__25233__$1 = ((((!((map__25233 == null)))?((((map__25233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25233):map__25233);
var msg = map__25233__$1;
var msg_name = cljs.core.get.call(null,map__25233__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25232,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25235){
var map__25245 = p__25235;
var map__25245__$1 = ((((!((map__25245 == null)))?((((map__25245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25245):map__25245);
var on_compile_warning = cljs.core.get.call(null,map__25245__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25245__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25245,map__25245__$1,on_compile_warning,on_compile_fail){
return (function (p__25247){
var vec__25248 = p__25247;
var map__25249 = cljs.core.nth.call(null,vec__25248,(0),null);
var map__25249__$1 = ((((!((map__25249 == null)))?((((map__25249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25249):map__25249);
var msg = map__25249__$1;
var msg_name = cljs.core.get.call(null,map__25249__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25248,(1));
var pred__25251 = cljs.core._EQ_;
var expr__25252 = msg_name;
if(cljs.core.truth_(pred__25251.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25252))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25251.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25252))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25245,map__25245__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto__,msg_hist,msg_names,msg){
return (function (state_25468){
var state_val_25469 = (state_25468[(1)]);
if((state_val_25469 === (7))){
var inst_25392 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
if(cljs.core.truth_(inst_25392)){
var statearr_25470_25516 = state_25468__$1;
(statearr_25470_25516[(1)] = (8));

} else {
var statearr_25471_25517 = state_25468__$1;
(statearr_25471_25517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (20))){
var inst_25462 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25472_25518 = state_25468__$1;
(statearr_25472_25518[(2)] = inst_25462);

(statearr_25472_25518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (27))){
var inst_25458 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25473_25519 = state_25468__$1;
(statearr_25473_25519[(2)] = inst_25458);

(statearr_25473_25519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (1))){
var inst_25385 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25468__$1 = state_25468;
if(cljs.core.truth_(inst_25385)){
var statearr_25474_25520 = state_25468__$1;
(statearr_25474_25520[(1)] = (2));

} else {
var statearr_25475_25521 = state_25468__$1;
(statearr_25475_25521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (24))){
var inst_25460 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25476_25522 = state_25468__$1;
(statearr_25476_25522[(2)] = inst_25460);

(statearr_25476_25522[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (4))){
var inst_25466 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25468__$1,inst_25466);
} else {
if((state_val_25469 === (15))){
var inst_25464 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25477_25523 = state_25468__$1;
(statearr_25477_25523[(2)] = inst_25464);

(statearr_25477_25523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (21))){
var inst_25423 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25478_25524 = state_25468__$1;
(statearr_25478_25524[(2)] = inst_25423);

(statearr_25478_25524[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (31))){
var inst_25447 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25468__$1 = state_25468;
if(cljs.core.truth_(inst_25447)){
var statearr_25479_25525 = state_25468__$1;
(statearr_25479_25525[(1)] = (34));

} else {
var statearr_25480_25526 = state_25468__$1;
(statearr_25480_25526[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (32))){
var inst_25456 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25481_25527 = state_25468__$1;
(statearr_25481_25527[(2)] = inst_25456);

(statearr_25481_25527[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (33))){
var inst_25445 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25482_25528 = state_25468__$1;
(statearr_25482_25528[(2)] = inst_25445);

(statearr_25482_25528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (13))){
var inst_25406 = figwheel.client.heads_up.clear.call(null);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(16),inst_25406);
} else {
if((state_val_25469 === (22))){
var inst_25427 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25428 = figwheel.client.heads_up.append_message.call(null,inst_25427);
var state_25468__$1 = state_25468;
var statearr_25483_25529 = state_25468__$1;
(statearr_25483_25529[(2)] = inst_25428);

(statearr_25483_25529[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (36))){
var inst_25454 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25484_25530 = state_25468__$1;
(statearr_25484_25530[(2)] = inst_25454);

(statearr_25484_25530[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (29))){
var inst_25438 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25485_25531 = state_25468__$1;
(statearr_25485_25531[(2)] = inst_25438);

(statearr_25485_25531[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (6))){
var inst_25387 = (state_25468[(7)]);
var state_25468__$1 = state_25468;
var statearr_25486_25532 = state_25468__$1;
(statearr_25486_25532[(2)] = inst_25387);

(statearr_25486_25532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (28))){
var inst_25434 = (state_25468[(2)]);
var inst_25435 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25436 = figwheel.client.heads_up.display_warning.call(null,inst_25435);
var state_25468__$1 = (function (){var statearr_25487 = state_25468;
(statearr_25487[(8)] = inst_25434);

return statearr_25487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(29),inst_25436);
} else {
if((state_val_25469 === (25))){
var inst_25432 = figwheel.client.heads_up.clear.call(null);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(28),inst_25432);
} else {
if((state_val_25469 === (34))){
var inst_25449 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(37),inst_25449);
} else {
if((state_val_25469 === (17))){
var inst_25414 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25488_25533 = state_25468__$1;
(statearr_25488_25533[(2)] = inst_25414);

(statearr_25488_25533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (3))){
var inst_25404 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25468__$1 = state_25468;
if(cljs.core.truth_(inst_25404)){
var statearr_25489_25534 = state_25468__$1;
(statearr_25489_25534[(1)] = (13));

} else {
var statearr_25490_25535 = state_25468__$1;
(statearr_25490_25535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (12))){
var inst_25400 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25491_25536 = state_25468__$1;
(statearr_25491_25536[(2)] = inst_25400);

(statearr_25491_25536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (2))){
var inst_25387 = (state_25468[(7)]);
var inst_25387__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25468__$1 = (function (){var statearr_25492 = state_25468;
(statearr_25492[(7)] = inst_25387__$1);

return statearr_25492;
})();
if(cljs.core.truth_(inst_25387__$1)){
var statearr_25493_25537 = state_25468__$1;
(statearr_25493_25537[(1)] = (5));

} else {
var statearr_25494_25538 = state_25468__$1;
(statearr_25494_25538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (23))){
var inst_25430 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25468__$1 = state_25468;
if(cljs.core.truth_(inst_25430)){
var statearr_25495_25539 = state_25468__$1;
(statearr_25495_25539[(1)] = (25));

} else {
var statearr_25496_25540 = state_25468__$1;
(statearr_25496_25540[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (35))){
var state_25468__$1 = state_25468;
var statearr_25497_25541 = state_25468__$1;
(statearr_25497_25541[(2)] = null);

(statearr_25497_25541[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (19))){
var inst_25425 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25468__$1 = state_25468;
if(cljs.core.truth_(inst_25425)){
var statearr_25498_25542 = state_25468__$1;
(statearr_25498_25542[(1)] = (22));

} else {
var statearr_25499_25543 = state_25468__$1;
(statearr_25499_25543[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (11))){
var inst_25396 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25500_25544 = state_25468__$1;
(statearr_25500_25544[(2)] = inst_25396);

(statearr_25500_25544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (9))){
var inst_25398 = figwheel.client.heads_up.clear.call(null);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(12),inst_25398);
} else {
if((state_val_25469 === (5))){
var inst_25389 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25468__$1 = state_25468;
var statearr_25501_25545 = state_25468__$1;
(statearr_25501_25545[(2)] = inst_25389);

(statearr_25501_25545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (14))){
var inst_25416 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25468__$1 = state_25468;
if(cljs.core.truth_(inst_25416)){
var statearr_25502_25546 = state_25468__$1;
(statearr_25502_25546[(1)] = (18));

} else {
var statearr_25503_25547 = state_25468__$1;
(statearr_25503_25547[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (26))){
var inst_25440 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25468__$1 = state_25468;
if(cljs.core.truth_(inst_25440)){
var statearr_25504_25548 = state_25468__$1;
(statearr_25504_25548[(1)] = (30));

} else {
var statearr_25505_25549 = state_25468__$1;
(statearr_25505_25549[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (16))){
var inst_25408 = (state_25468[(2)]);
var inst_25409 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25410 = figwheel.client.format_messages.call(null,inst_25409);
var inst_25411 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25412 = figwheel.client.heads_up.display_error.call(null,inst_25410,inst_25411);
var state_25468__$1 = (function (){var statearr_25506 = state_25468;
(statearr_25506[(9)] = inst_25408);

return statearr_25506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(17),inst_25412);
} else {
if((state_val_25469 === (30))){
var inst_25442 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25443 = figwheel.client.heads_up.display_warning.call(null,inst_25442);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(33),inst_25443);
} else {
if((state_val_25469 === (10))){
var inst_25402 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25507_25550 = state_25468__$1;
(statearr_25507_25550[(2)] = inst_25402);

(statearr_25507_25550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (18))){
var inst_25418 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25419 = figwheel.client.format_messages.call(null,inst_25418);
var inst_25420 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25421 = figwheel.client.heads_up.display_error.call(null,inst_25419,inst_25420);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(21),inst_25421);
} else {
if((state_val_25469 === (37))){
var inst_25451 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25508_25551 = state_25468__$1;
(statearr_25508_25551[(2)] = inst_25451);

(statearr_25508_25551[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (8))){
var inst_25394 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(11),inst_25394);
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
});})(c__18976__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18911__auto__,c__18976__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto____0 = (function (){
var statearr_25512 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25512[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto__);

(statearr_25512[(1)] = (1));

return statearr_25512;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto____1 = (function (state_25468){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_25468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e25513){if((e25513 instanceof Object)){
var ex__18915__auto__ = e25513;
var statearr_25514_25552 = state_25468;
(statearr_25514_25552[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25553 = state_25468;
state_25468 = G__25553;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto__ = function(state_25468){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto____1.call(this,state_25468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto__,msg_hist,msg_names,msg))
})();
var state__18978__auto__ = (function (){var statearr_25515 = f__18977__auto__.call(null);
(statearr_25515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto__);

return statearr_25515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto__,msg_hist,msg_names,msg))
);

return c__18976__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18976__auto___25616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto___25616,ch){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto___25616,ch){
return (function (state_25599){
var state_val_25600 = (state_25599[(1)]);
if((state_val_25600 === (1))){
var state_25599__$1 = state_25599;
var statearr_25601_25617 = state_25599__$1;
(statearr_25601_25617[(2)] = null);

(statearr_25601_25617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (2))){
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25599__$1,(4),ch);
} else {
if((state_val_25600 === (3))){
var inst_25597 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25599__$1,inst_25597);
} else {
if((state_val_25600 === (4))){
var inst_25587 = (state_25599[(7)]);
var inst_25587__$1 = (state_25599[(2)]);
var state_25599__$1 = (function (){var statearr_25602 = state_25599;
(statearr_25602[(7)] = inst_25587__$1);

return statearr_25602;
})();
if(cljs.core.truth_(inst_25587__$1)){
var statearr_25603_25618 = state_25599__$1;
(statearr_25603_25618[(1)] = (5));

} else {
var statearr_25604_25619 = state_25599__$1;
(statearr_25604_25619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (5))){
var inst_25587 = (state_25599[(7)]);
var inst_25589 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25587);
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25599__$1,(8),inst_25589);
} else {
if((state_val_25600 === (6))){
var state_25599__$1 = state_25599;
var statearr_25605_25620 = state_25599__$1;
(statearr_25605_25620[(2)] = null);

(statearr_25605_25620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (7))){
var inst_25595 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
var statearr_25606_25621 = state_25599__$1;
(statearr_25606_25621[(2)] = inst_25595);

(statearr_25606_25621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (8))){
var inst_25591 = (state_25599[(2)]);
var state_25599__$1 = (function (){var statearr_25607 = state_25599;
(statearr_25607[(8)] = inst_25591);

return statearr_25607;
})();
var statearr_25608_25622 = state_25599__$1;
(statearr_25608_25622[(2)] = null);

(statearr_25608_25622[(1)] = (2));


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
});})(c__18976__auto___25616,ch))
;
return ((function (switch__18911__auto__,c__18976__auto___25616,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18912__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18912__auto____0 = (function (){
var statearr_25612 = [null,null,null,null,null,null,null,null,null];
(statearr_25612[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18912__auto__);

(statearr_25612[(1)] = (1));

return statearr_25612;
});
var figwheel$client$heads_up_plugin_$_state_machine__18912__auto____1 = (function (state_25599){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_25599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e25613){if((e25613 instanceof Object)){
var ex__18915__auto__ = e25613;
var statearr_25614_25623 = state_25599;
(statearr_25614_25623[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25624 = state_25599;
state_25599 = G__25624;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18912__auto__ = function(state_25599){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18912__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18912__auto____1.call(this,state_25599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18912__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18912__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto___25616,ch))
})();
var state__18978__auto__ = (function (){var statearr_25615 = f__18977__auto__.call(null);
(statearr_25615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___25616);

return statearr_25615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto___25616,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18976__auto__){
return (function (){
var f__18977__auto__ = (function (){var switch__18911__auto__ = ((function (c__18976__auto__){
return (function (state_25645){
var state_val_25646 = (state_25645[(1)]);
if((state_val_25646 === (1))){
var inst_25640 = cljs.core.async.timeout.call(null,(3000));
var state_25645__$1 = state_25645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(2),inst_25640);
} else {
if((state_val_25646 === (2))){
var inst_25642 = (state_25645[(2)]);
var inst_25643 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25645__$1 = (function (){var statearr_25647 = state_25645;
(statearr_25647[(7)] = inst_25642);

return statearr_25647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25645__$1,inst_25643);
} else {
return null;
}
}
});})(c__18976__auto__))
;
return ((function (switch__18911__auto__,c__18976__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18912__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18912__auto____0 = (function (){
var statearr_25651 = [null,null,null,null,null,null,null,null];
(statearr_25651[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18912__auto__);

(statearr_25651[(1)] = (1));

return statearr_25651;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18912__auto____1 = (function (state_25645){
while(true){
var ret_value__18913__auto__ = (function (){try{while(true){
var result__18914__auto__ = switch__18911__auto__.call(null,state_25645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18914__auto__;
}
break;
}
}catch (e25652){if((e25652 instanceof Object)){
var ex__18915__auto__ = e25652;
var statearr_25653_25655 = state_25645;
(statearr_25653_25655[(5)] = ex__18915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25656 = state_25645;
state_25645 = G__25656;
continue;
} else {
return ret_value__18913__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18912__auto__ = function(state_25645){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18912__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18912__auto____1.call(this,state_25645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18912__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18912__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18912__auto__;
})()
;})(switch__18911__auto__,c__18976__auto__))
})();
var state__18978__auto__ = (function (){var statearr_25654 = f__18977__auto__.call(null);
(statearr_25654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto__);

return statearr_25654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
});})(c__18976__auto__))
);

return c__18976__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25657){
var map__25664 = p__25657;
var map__25664__$1 = ((((!((map__25664 == null)))?((((map__25664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25664):map__25664);
var ed = map__25664__$1;
var formatted_exception = cljs.core.get.call(null,map__25664__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25664__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25664__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25666_25670 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25667_25671 = null;
var count__25668_25672 = (0);
var i__25669_25673 = (0);
while(true){
if((i__25669_25673 < count__25668_25672)){
var msg_25674 = cljs.core._nth.call(null,chunk__25667_25671,i__25669_25673);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25674);

var G__25675 = seq__25666_25670;
var G__25676 = chunk__25667_25671;
var G__25677 = count__25668_25672;
var G__25678 = (i__25669_25673 + (1));
seq__25666_25670 = G__25675;
chunk__25667_25671 = G__25676;
count__25668_25672 = G__25677;
i__25669_25673 = G__25678;
continue;
} else {
var temp__4425__auto___25679 = cljs.core.seq.call(null,seq__25666_25670);
if(temp__4425__auto___25679){
var seq__25666_25680__$1 = temp__4425__auto___25679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25666_25680__$1)){
var c__17696__auto___25681 = cljs.core.chunk_first.call(null,seq__25666_25680__$1);
var G__25682 = cljs.core.chunk_rest.call(null,seq__25666_25680__$1);
var G__25683 = c__17696__auto___25681;
var G__25684 = cljs.core.count.call(null,c__17696__auto___25681);
var G__25685 = (0);
seq__25666_25670 = G__25682;
chunk__25667_25671 = G__25683;
count__25668_25672 = G__25684;
i__25669_25673 = G__25685;
continue;
} else {
var msg_25686 = cljs.core.first.call(null,seq__25666_25680__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25686);

var G__25687 = cljs.core.next.call(null,seq__25666_25680__$1);
var G__25688 = null;
var G__25689 = (0);
var G__25690 = (0);
seq__25666_25670 = G__25687;
chunk__25667_25671 = G__25688;
count__25668_25672 = G__25689;
i__25669_25673 = G__25690;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25691){
var map__25694 = p__25691;
var map__25694__$1 = ((((!((map__25694 == null)))?((((map__25694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25694):map__25694);
var w = map__25694__$1;
var message = cljs.core.get.call(null,map__25694__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16881__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16881__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16881__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25702 = cljs.core.seq.call(null,plugins);
var chunk__25703 = null;
var count__25704 = (0);
var i__25705 = (0);
while(true){
if((i__25705 < count__25704)){
var vec__25706 = cljs.core._nth.call(null,chunk__25703,i__25705);
var k = cljs.core.nth.call(null,vec__25706,(0),null);
var plugin = cljs.core.nth.call(null,vec__25706,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25708 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25702,chunk__25703,count__25704,i__25705,pl_25708,vec__25706,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25708.call(null,msg_hist);
});})(seq__25702,chunk__25703,count__25704,i__25705,pl_25708,vec__25706,k,plugin))
);
} else {
}

var G__25709 = seq__25702;
var G__25710 = chunk__25703;
var G__25711 = count__25704;
var G__25712 = (i__25705 + (1));
seq__25702 = G__25709;
chunk__25703 = G__25710;
count__25704 = G__25711;
i__25705 = G__25712;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25702);
if(temp__4425__auto__){
var seq__25702__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25702__$1)){
var c__17696__auto__ = cljs.core.chunk_first.call(null,seq__25702__$1);
var G__25713 = cljs.core.chunk_rest.call(null,seq__25702__$1);
var G__25714 = c__17696__auto__;
var G__25715 = cljs.core.count.call(null,c__17696__auto__);
var G__25716 = (0);
seq__25702 = G__25713;
chunk__25703 = G__25714;
count__25704 = G__25715;
i__25705 = G__25716;
continue;
} else {
var vec__25707 = cljs.core.first.call(null,seq__25702__$1);
var k = cljs.core.nth.call(null,vec__25707,(0),null);
var plugin = cljs.core.nth.call(null,vec__25707,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25717 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25702,chunk__25703,count__25704,i__25705,pl_25717,vec__25707,k,plugin,seq__25702__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25717.call(null,msg_hist);
});})(seq__25702,chunk__25703,count__25704,i__25705,pl_25717,vec__25707,k,plugin,seq__25702__$1,temp__4425__auto__))
);
} else {
}

var G__25718 = cljs.core.next.call(null,seq__25702__$1);
var G__25719 = null;
var G__25720 = (0);
var G__25721 = (0);
seq__25702 = G__25718;
chunk__25703 = G__25719;
count__25704 = G__25720;
i__25705 = G__25721;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25722 = [];
var len__17951__auto___25725 = arguments.length;
var i__17952__auto___25726 = (0);
while(true){
if((i__17952__auto___25726 < len__17951__auto___25725)){
args25722.push((arguments[i__17952__auto___25726]));

var G__25727 = (i__17952__auto___25726 + (1));
i__17952__auto___25726 = G__25727;
continue;
} else {
}
break;
}

var G__25724 = args25722.length;
switch (G__25724) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25722.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17958__auto__ = [];
var len__17951__auto___25733 = arguments.length;
var i__17952__auto___25734 = (0);
while(true){
if((i__17952__auto___25734 < len__17951__auto___25733)){
args__17958__auto__.push((arguments[i__17952__auto___25734]));

var G__25735 = (i__17952__auto___25734 + (1));
i__17952__auto___25734 = G__25735;
continue;
} else {
}
break;
}

var argseq__17959__auto__ = ((((0) < args__17958__auto__.length))?(new cljs.core.IndexedSeq(args__17958__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17959__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25730){
var map__25731 = p__25730;
var map__25731__$1 = ((((!((map__25731 == null)))?((((map__25731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25731):map__25731);
var opts = map__25731__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25729){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25729));
});

//# sourceMappingURL=client.js.map