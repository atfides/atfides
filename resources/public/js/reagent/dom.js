// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__16893__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__16893__auto__)){
return or__16893__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_23835 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_23835){
return (function (){
var _STAR_always_update_STAR_23836 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23836;
}});})(_STAR_always_update_STAR_23835))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23835;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args23837 = [];
var len__17951__auto___23840 = arguments.length;
var i__17952__auto___23841 = (0);
while(true){
if((i__17952__auto___23841 < len__17951__auto___23840)){
args23837.push((arguments[i__17952__auto___23841]));

var G__23842 = (i__17952__auto___23841 + (1));
i__17952__auto___23841 = G__23842;
continue;
} else {
}
break;
}

var G__23839 = args23837.length;
switch (G__23839) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23837.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__23848_23852 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__23849_23853 = null;
var count__23850_23854 = (0);
var i__23851_23855 = (0);
while(true){
if((i__23851_23855 < count__23850_23854)){
var v_23856 = cljs.core._nth.call(null,chunk__23849_23853,i__23851_23855);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23856);

var G__23857 = seq__23848_23852;
var G__23858 = chunk__23849_23853;
var G__23859 = count__23850_23854;
var G__23860 = (i__23851_23855 + (1));
seq__23848_23852 = G__23857;
chunk__23849_23853 = G__23858;
count__23850_23854 = G__23859;
i__23851_23855 = G__23860;
continue;
} else {
var temp__4425__auto___23861 = cljs.core.seq.call(null,seq__23848_23852);
if(temp__4425__auto___23861){
var seq__23848_23862__$1 = temp__4425__auto___23861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23848_23862__$1)){
var c__17696__auto___23863 = cljs.core.chunk_first.call(null,seq__23848_23862__$1);
var G__23864 = cljs.core.chunk_rest.call(null,seq__23848_23862__$1);
var G__23865 = c__17696__auto___23863;
var G__23866 = cljs.core.count.call(null,c__17696__auto___23863);
var G__23867 = (0);
seq__23848_23852 = G__23864;
chunk__23849_23853 = G__23865;
count__23850_23854 = G__23866;
i__23851_23855 = G__23867;
continue;
} else {
var v_23868 = cljs.core.first.call(null,seq__23848_23862__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23868);

var G__23869 = cljs.core.next.call(null,seq__23848_23862__$1);
var G__23870 = null;
var G__23871 = (0);
var G__23872 = (0);
seq__23848_23852 = G__23869;
chunk__23849_23853 = G__23870;
count__23850_23854 = G__23871;
i__23851_23855 = G__23872;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map