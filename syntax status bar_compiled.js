if(!lt.util.load.provided_QMARK_('crate.binding')) {
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8640 = cljs.core.seq.call(null,self__.watches);var chunk__8641 = null;var count__8642 = 0;var i__8643 = 0;while(true){
if((i__8643 < count__8642))
{var vec__8644 = cljs.core._nth.call(null,chunk__8641,i__8643);var key__$1 = cljs.core.nth.call(null,vec__8644,0,null);var f = cljs.core.nth.call(null,vec__8644,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8719 = seq__8640;
var G__8720 = chunk__8641;
var G__8721 = count__8642;
var G__8722 = (i__8643 + 1);
seq__8640 = G__8719;
chunk__8641 = G__8720;
count__8642 = G__8721;
i__8643 = G__8722;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8640);if(temp__4092__auto__)
{var seq__8640__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8640__$1))
{var c__7793__auto__ = cljs.core.chunk_first.call(null,seq__8640__$1);{
var G__8723 = cljs.core.chunk_rest.call(null,seq__8640__$1);
var G__8724 = c__7793__auto__;
var G__8725 = cljs.core.count.call(null,c__7793__auto__);
var G__8726 = 0;
seq__8640 = G__8723;
chunk__8641 = G__8724;
count__8642 = G__8725;
i__8643 = G__8726;
continue;
}
} else
{var vec__8645 = cljs.core.first.call(null,seq__8640__$1);var key__$1 = cljs.core.nth.call(null,vec__8645,0,null);var f = cljs.core.nth.call(null,vec__8645,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8727 = cljs.core.next.call(null,seq__8640__$1);
var G__8728 = null;
var G__8729 = 0;
var G__8730 = 0;
seq__8640 = G__8727;
chunk__8641 = G__8728;
count__8642 = G__8729;
i__8643 = G__8730;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8647 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8647,0,null);var path__$2 = cljs.core.nth.call(null,vec__8647,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
}));
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__8731__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8731 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8731__delegate.call(this,sa,f,x,y,z,more);};
G__8731.cljs$lang$maxFixedArity = 5;
G__8731.cljs$lang$applyTo = (function (arglist__8732){
var sa = cljs.core.first(arglist__8732);
arglist__8732 = cljs.core.next(arglist__8732);
var f = cljs.core.first(arglist__8732);
arglist__8732 = cljs.core.next(arglist__8732);
var x = cljs.core.first(arglist__8732);
arglist__8732 = cljs.core.next(arglist__8732);
var y = cljs.core.first(arglist__8732);
arglist__8732 = cljs.core.next(arglist__8732);
var z = cljs.core.first(arglist__8732);
var more = cljs.core.rest(arglist__8732);
return G__8731__delegate(sa,f,x,y,z,more);
});
G__8731.cljs$core$IFn$_invoke$arity$variadic = G__8731__delegate;
return G__8731;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj8649 = {};return obj8649;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__7033__auto__ = this$;if(and__7033__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__7033__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__7672__auto__ = (((this$ == null))?null:this$);return (function (){var or__7045__auto__ = (crate.binding._depend[goog.typeOf(x__7672__auto__)]);if(or__7045__auto__)
{return or__7045__auto__;
} else
{var or__7045__auto____$1 = (crate.binding._depend["_"]);if(or__7045__auto____$1)
{return or__7045__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__7033__auto__ = this$;if(and__7033__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__7033__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__7672__auto__ = (((this$ == null))?null:this$);return (function (){var or__7045__auto__ = (crate.binding._compute[goog.typeOf(x__7672__auto__)]);if(or__7045__auto__)
{return or__7045__auto__;
} else
{var or__7045__auto____$1 = (crate.binding._compute["_"]);if(or__7045__auto____$1)
{return or__7045__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,(function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
}));
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8650 = cljs.core.seq.call(null,self__.watches);var chunk__8651 = null;var count__8652 = 0;var i__8653 = 0;while(true){
if((i__8653 < count__8652))
{var vec__8654 = cljs.core._nth.call(null,chunk__8651,i__8653);var key__$1 = cljs.core.nth.call(null,vec__8654,0,null);var f = cljs.core.nth.call(null,vec__8654,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8733 = seq__8650;
var G__8734 = chunk__8651;
var G__8735 = count__8652;
var G__8736 = (i__8653 + 1);
seq__8650 = G__8733;
chunk__8651 = G__8734;
count__8652 = G__8735;
i__8653 = G__8736;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8650);if(temp__4092__auto__)
{var seq__8650__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8650__$1))
{var c__7793__auto__ = cljs.core.chunk_first.call(null,seq__8650__$1);{
var G__8737 = cljs.core.chunk_rest.call(null,seq__8650__$1);
var G__8738 = c__7793__auto__;
var G__8739 = cljs.core.count.call(null,c__7793__auto__);
var G__8740 = 0;
seq__8650 = G__8737;
chunk__8651 = G__8738;
count__8652 = G__8739;
i__8653 = G__8740;
continue;
}
} else
{var vec__8655 = cljs.core.first.call(null,seq__8650__$1);var key__$1 = cljs.core.nth.call(null,vec__8655,0,null);var f = cljs.core.nth.call(null,vec__8655,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8741 = cljs.core.next.call(null,seq__8650__$1);
var G__8742 = null;
var G__8743 = 0;
var G__8744 = 0;
seq__8650 = G__8741;
chunk__8651 = G__8742;
count__8652 = G__8743;
i__8653 = G__8744;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__8660_8745 = cljs.core.seq.call(null,atms);var chunk__8661_8746 = null;var count__8662_8747 = 0;var i__8663_8748 = 0;while(true){
if((i__8663_8748 < count__8662_8747))
{var atm_8749 = cljs.core._nth.call(null,chunk__8661_8746,i__8663_8748);crate.binding._depend.call(null,neue,atm_8749);
{
var G__8750 = seq__8660_8745;
var G__8751 = chunk__8661_8746;
var G__8752 = count__8662_8747;
var G__8753 = (i__8663_8748 + 1);
seq__8660_8745 = G__8750;
chunk__8661_8746 = G__8751;
count__8662_8747 = G__8752;
i__8663_8748 = G__8753;
continue;
}
} else
{var temp__4092__auto___8754 = cljs.core.seq.call(null,seq__8660_8745);if(temp__4092__auto___8754)
{var seq__8660_8755__$1 = temp__4092__auto___8754;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8660_8755__$1))
{var c__7793__auto___8756 = cljs.core.chunk_first.call(null,seq__8660_8755__$1);{
var G__8757 = cljs.core.chunk_rest.call(null,seq__8660_8755__$1);
var G__8758 = c__7793__auto___8756;
var G__8759 = cljs.core.count.call(null,c__7793__auto___8756);
var G__8760 = 0;
seq__8660_8745 = G__8757;
chunk__8661_8746 = G__8758;
count__8662_8747 = G__8759;
i__8663_8748 = G__8760;
continue;
}
} else
{var atm_8761 = cljs.core.first.call(null,seq__8660_8755__$1);crate.binding._depend.call(null,neue,atm_8761);
{
var G__8762 = cljs.core.next.call(null,seq__8660_8755__$1);
var G__8763 = null;
var G__8764 = 0;
var G__8765 = 0;
seq__8660_8745 = G__8762;
chunk__8661_8746 = G__8763;
count__8662_8747 = G__8764;
i__8663_8748 = G__8765;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj8665 = {};return obj8665;
})();
crate.binding.bindable = (function (){var obj8667 = {};return obj8667;
})();
crate.binding._value = (function _value(this$){if((function (){var and__7033__auto__ = this$;if(and__7033__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__7033__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__7672__auto__ = (((this$ == null))?null:this$);return (function (){var or__7045__auto__ = (crate.binding._value[goog.typeOf(x__7672__auto__)]);if(or__7045__auto__)
{return or__7045__auto__;
} else
{var or__7045__auto____$1 = (crate.binding._value["_"]);if(or__7045__auto____$1)
{return or__7045__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__7033__auto__ = this$;if(and__7033__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__7033__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__7672__auto__ = (((this$ == null))?null:this$);return (function (){var or__7045__auto__ = (crate.binding._on_change[goog.typeOf(x__7672__auto__)]);if(or__7045__auto__)
{return or__7045__auto__;
} else
{var or__7045__auto____$1 = (crate.binding._on_change["_"]);if(or__7045__auto____$1)
{return or__7045__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){return func.call(null,crate.binding._value.call(null,this$__$1));
}));
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8668 = cljs.core.seq.call(null,self__.watches);var chunk__8669 = null;var count__8670 = 0;var i__8671 = 0;while(true){
if((i__8671 < count__8670))
{var vec__8672 = cljs.core._nth.call(null,chunk__8669,i__8671);var key = cljs.core.nth.call(null,vec__8672,0,null);var f = cljs.core.nth.call(null,vec__8672,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8766 = seq__8668;
var G__8767 = chunk__8669;
var G__8768 = count__8670;
var G__8769 = (i__8671 + 1);
seq__8668 = G__8766;
chunk__8669 = G__8767;
count__8670 = G__8768;
i__8671 = G__8769;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8668);if(temp__4092__auto__)
{var seq__8668__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8668__$1))
{var c__7793__auto__ = cljs.core.chunk_first.call(null,seq__8668__$1);{
var G__8770 = cljs.core.chunk_rest.call(null,seq__8668__$1);
var G__8771 = c__7793__auto__;
var G__8772 = cljs.core.count.call(null,c__7793__auto__);
var G__8773 = 0;
seq__8668 = G__8770;
chunk__8669 = G__8771;
count__8670 = G__8772;
i__8671 = G__8773;
continue;
}
} else
{var vec__8673 = cljs.core.first.call(null,seq__8668__$1);var key = cljs.core.nth.call(null,vec__8673,0,null);var f = cljs.core.nth.call(null,vec__8673,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8774 = cljs.core.next.call(null,seq__8668__$1);
var G__8775 = null;
var G__8776 = 0;
var G__8777 = 0;
seq__8668 = G__8774;
chunk__8669 = G__8775;
count__8670 = G__8776;
i__8671 = G__8777;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__8674){var vec__8675 = p__8674;var event = cljs.core.nth.call(null,vec__8675,0,null);var el = cljs.core.nth.call(null,vec__8675,1,null);var v = cljs.core.nth.call(null,vec__8675,2,null);return func.call(null,event,el,v);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__7045__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__7045__auto__))
{return or__7045__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__8778){
var bc = cljs.core.first(arglist__8778);
var segs = cljs.core.rest(arglist__8778);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8684_8779 = cljs.core.seq.call(null,added);var chunk__8685_8780 = null;var count__8686_8781 = 0;var i__8687_8782 = 0;while(true){
if((i__8687_8782 < count__8686_8781))
{var a_8783 = cljs.core._nth.call(null,chunk__8685_8780,i__8687_8782);crate.binding.bc_add.call(null,bc,a_8783,a_8783);
{
var G__8784 = seq__8684_8779;
var G__8785 = chunk__8685_8780;
var G__8786 = count__8686_8781;
var G__8787 = (i__8687_8782 + 1);
seq__8684_8779 = G__8784;
chunk__8685_8780 = G__8785;
count__8686_8781 = G__8786;
i__8687_8782 = G__8787;
continue;
}
} else
{var temp__4092__auto___8788 = cljs.core.seq.call(null,seq__8684_8779);if(temp__4092__auto___8788)
{var seq__8684_8789__$1 = temp__4092__auto___8788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8684_8789__$1))
{var c__7793__auto___8790 = cljs.core.chunk_first.call(null,seq__8684_8789__$1);{
var G__8791 = cljs.core.chunk_rest.call(null,seq__8684_8789__$1);
var G__8792 = c__7793__auto___8790;
var G__8793 = cljs.core.count.call(null,c__7793__auto___8790);
var G__8794 = 0;
seq__8684_8779 = G__8791;
chunk__8685_8780 = G__8792;
count__8686_8781 = G__8793;
i__8687_8782 = G__8794;
continue;
}
} else
{var a_8795 = cljs.core.first.call(null,seq__8684_8789__$1);crate.binding.bc_add.call(null,bc,a_8795,a_8795);
{
var G__8796 = cljs.core.next.call(null,seq__8684_8789__$1);
var G__8797 = null;
var G__8798 = 0;
var G__8799 = 0;
seq__8684_8779 = G__8796;
chunk__8685_8780 = G__8797;
count__8686_8781 = G__8798;
i__8687_8782 = G__8799;
continue;
}
}
} else
{}
}
break;
}
var seq__8688 = cljs.core.seq.call(null,removed);var chunk__8689 = null;var count__8690 = 0;var i__8691 = 0;while(true){
if((i__8691 < count__8690))
{var r = cljs.core._nth.call(null,chunk__8689,i__8691);crate.binding.bc_remove.call(null,bc,r);
{
var G__8800 = seq__8688;
var G__8801 = chunk__8689;
var G__8802 = count__8690;
var G__8803 = (i__8691 + 1);
seq__8688 = G__8800;
chunk__8689 = G__8801;
count__8690 = G__8802;
i__8691 = G__8803;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8688);if(temp__4092__auto__)
{var seq__8688__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8688__$1))
{var c__7793__auto__ = cljs.core.chunk_first.call(null,seq__8688__$1);{
var G__8804 = cljs.core.chunk_rest.call(null,seq__8688__$1);
var G__8805 = c__7793__auto__;
var G__8806 = cljs.core.count.call(null,c__7793__auto__);
var G__8807 = 0;
seq__8688 = G__8804;
chunk__8689 = G__8805;
count__8690 = G__8806;
i__8691 = G__8807;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8688__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8808 = cljs.core.next.call(null,seq__8688__$1);
var G__8809 = null;
var G__8810 = 0;
var G__8811 = 0;
seq__8688 = G__8808;
chunk__8689 = G__8809;
count__8690 = G__8810;
i__8691 = G__8811;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__8692){var vec__8695 = p__8692;var path = cljs.core.nth.call(null,vec__8695,0,null);var opts = cljs.core.nth.call(null,vec__8695,1,null);var vec__8696 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8696,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8696,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8692 = null;if (arguments.length > 1) {
  p__8692 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8692);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8812){
var atm = cljs.core.first(arglist__8812);
var p__8692 = cljs.core.rest(arglist__8812);
return bound_coll__delegate(atm,p__8692);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8697){var vec__8699 = p__8697;var opts = cljs.core.nth.call(null,vec__8699,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8697 = null;if (arguments.length > 2) {
  p__8697 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8697);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8813){
var as = cljs.core.first(arglist__8813);
arglist__8813 = cljs.core.next(arglist__8813);
var atm = cljs.core.first(arglist__8813);
var p__8697 = cljs.core.rest(arglist__8813);
return map_bound__delegate(as,atm,p__8697);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8701 = b;if(G__8701)
{var bit__7695__auto__ = null;if(cljs.core.truth_((function (){var or__7045__auto__ = bit__7695__auto__;if(cljs.core.truth_(or__7045__auto__))
{return or__7045__auto__;
} else
{return G__8701.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8701.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8701);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8701);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8703 = b;if(G__8703)
{var bit__7695__auto__ = null;if(cljs.core.truth_((function (){var or__7045__auto__ = bit__7695__auto__;if(cljs.core.truth_(or__7045__auto__))
{return or__7045__auto__;
} else
{return G__8703.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8703.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8703);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8703);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8705 = atm;if(G__8705)
{var bit__7695__auto__ = (G__8705.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7695__auto__) || (G__8705.cljs$core$IDeref$))
{return true;
} else
{if((!G__8705.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8705);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8705);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__8706){var vec__8708 = p__8706;var func = cljs.core.nth.call(null,vec__8708,0,null);var func__$1 = (function (){var or__7045__auto__ = func;if(cljs.core.truth_(or__7045__auto__))
{return or__7045__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8706 = null;if (arguments.length > 1) {
  p__8706 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8706);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8814){
var atm = cljs.core.first(arglist__8814);
var p__8706 = cljs.core.rest(arglist__8814);
return bound__delegate(atm,p__8706);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.syntaxstatusbar')) {
goog.provide('lt.plugins.syntaxstatusbar');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.statusbar');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.statusbar');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
lt.plugins.syntaxstatusbar.syntax_ui = (function syntax_ui(syntax_name){var e__8506__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.editor-syntax","span.editor-syntax",4301196305),syntax_name], null));var seq__8596_8615 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"set-syntax","set-syntax",2718399264));
})], null)));var chunk__8597_8616 = null;var count__8598_8617 = 0;var i__8599_8618 = 0;while(true){
if((i__8599_8618 < count__8598_8617))
{var vec__8600_8619 = cljs.core._nth.call(null,chunk__8597_8616,i__8599_8618);var ev__8507__auto___8620 = cljs.core.nth.call(null,vec__8600_8619,0,null);var func__8508__auto___8621 = cljs.core.nth.call(null,vec__8600_8619,1,null);lt.util.dom.on.call(null,e__8506__auto__,ev__8507__auto___8620,func__8508__auto___8621);
{
var G__8622 = seq__8596_8615;
var G__8623 = chunk__8597_8616;
var G__8624 = count__8598_8617;
var G__8625 = (i__8599_8618 + 1);
seq__8596_8615 = G__8622;
chunk__8597_8616 = G__8623;
count__8598_8617 = G__8624;
i__8599_8618 = G__8625;
continue;
}
} else
{var temp__4092__auto___8626 = cljs.core.seq.call(null,seq__8596_8615);if(temp__4092__auto___8626)
{var seq__8596_8627__$1 = temp__4092__auto___8626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8596_8627__$1))
{var c__7793__auto___8628 = cljs.core.chunk_first.call(null,seq__8596_8627__$1);{
var G__8629 = cljs.core.chunk_rest.call(null,seq__8596_8627__$1);
var G__8630 = c__7793__auto___8628;
var G__8631 = cljs.core.count.call(null,c__7793__auto___8628);
var G__8632 = 0;
seq__8596_8615 = G__8629;
chunk__8597_8616 = G__8630;
count__8598_8617 = G__8631;
i__8599_8618 = G__8632;
continue;
}
} else
{var vec__8601_8633 = cljs.core.first.call(null,seq__8596_8627__$1);var ev__8507__auto___8634 = cljs.core.nth.call(null,vec__8601_8633,0,null);var func__8508__auto___8635 = cljs.core.nth.call(null,vec__8601_8633,1,null);lt.util.dom.on.call(null,e__8506__auto__,ev__8507__auto___8634,func__8508__auto___8635);
{
var G__8636 = cljs.core.next.call(null,seq__8596_8627__$1);
var G__8637 = null;
var G__8638 = 0;
var G__8639 = 0;
seq__8596_8615 = G__8636;
chunk__8597_8616 = G__8637;
count__8598_8617 = G__8638;
i__8599_8618 = G__8639;
continue;
}
}
} else
{}
}
break;
}
return e__8506__auto__;
});
lt.plugins.syntaxstatusbar.__GT_syntax_html = (function __GT_syntax_html(p__8602){var map__8604 = p__8602;var map__8604__$1 = ((cljs.core.seq_QMARK_.call(null,map__8604))?cljs.core.apply.call(null,cljs.core.hash_map,map__8604):map__8604);var o = map__8604__$1;var cur_ed = cljs.core.get.call(null,map__8604__$1,new cljs.core.Keyword(null,"cur-ed","cur-ed",3959684798));if(cljs.core.truth_(cur_ed))
{return lt.plugins.syntaxstatusbar.syntax_ui.call(null,new cljs.core.Keyword(null,"type-name","type-name",1486910640).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cur_ed))));
} else
{return null;
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.syntaxstatusbar","container","lt.plugins.syntaxstatusbar/container",1268978759),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),crate.binding.bound.call(null,this$,lt.plugins.syntaxstatusbar.__GT_syntax_html)], null)], null);
}));
lt.plugins.syntaxstatusbar.container = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.syntaxstatusbar","container","lt.plugins.syntaxstatusbar/container",1268978759));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.syntaxstatusbar.container);
lt.plugins.syntaxstatusbar.__BEH__attach = (function __BEH__attach(this$){return lt.object.merge_BANG_.call(null,lt.plugins.syntaxstatusbar.container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cur-ed","cur-ed",3959684798),this$], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.syntaxstatusbar","attach","lt.plugins.syntaxstatusbar/attach",4412258043),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.syntaxstatusbar.__BEH__attach,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
}

//# sourceMappingURL=syntax status bar_compiled.js.map