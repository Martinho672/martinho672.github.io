(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ne={},Hr=[],xt=()=>{},$0=()=>!1,Ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),rl=t=>t.startsWith("onUpdate:"),Ke=Object.assign,sl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},q0=Object.prototype.hasOwnProperty,Ee=(t,e)=>q0.call(t,e),ae=Array.isArray,Gr=t=>Wo(t)==="[object Map]",Df=t=>Wo(t)==="[object Set]",he=t=>typeof t=="function",We=t=>typeof t=="string",tr=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Nf=t=>(Me(t)||he(t))&&he(t.then)&&he(t.catch),Of=Object.prototype.toString,Wo=t=>Of.call(t),z0=t=>Wo(t).slice(8,-1),Vf=t=>Wo(t)==="[object Object]",il=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},H0=/-(\w)/g,tn=Qo(t=>t.replace(H0,(e,n)=>n?n.toUpperCase():"")),G0=/\B([A-Z])/g,us=Qo(t=>t.replace(G0,"-$1").toLowerCase()),Jo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=Qo(t=>t?`on${Jo(t)}`:""),Jn=(t,e)=>!Object.is(t,e),oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Mf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},dc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},K0=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let ah;const Lf=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hs(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?X0(r):hs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Me(t))return t}const W0=/;(?![^(]*\))/g,Q0=/:([^]+)/,J0=/\/\*[^]*?\*\//g;function X0(t){const e={};return t.replace(J0,"").split(W0).forEach(n=>{if(n){const r=n.split(Q0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tt(t){let e="";if(We(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Tt(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Y0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z0=nl(Y0);function Ff(t){return!!t||t===""}const Uf=t=>!!(t&&t.__v_isRef===!0),jt=t=>We(t)?t:t==null?"":ae(t)||Me(t)&&(t.toString===Of||!he(t.toString))?Uf(t)?jt(t.value):JSON.stringify(t,Bf,2):String(t),Bf=(t,e)=>Uf(e)?Bf(t,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$a(r,i)+" =>"]=s,n),{})}:Df(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$a(n))}:tr(e)?$a(e):Me(e)&&!ae(e)&&!Vf(e)?String(e):e,$a=(t,e="")=>{var n;return tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class e_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function t_(t,e=Lt){e&&e.active&&e.effects.push(t)}function n_(){return Lt}let _r;class ol{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,t_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,nr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(r_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),rr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=$n,n=_r;try{return $n=!0,_r=this,this._runnings++,ch(this),this.fn()}finally{lh(this),this._runnings--,_r=n,$n=e}}stop(){this.active&&(ch(this),lh(this),this.onStop&&this.onStop(),this.active=!1)}}function r_(t){return t.value}function ch(t){t._trackId++,t._depsLength=0}function lh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)jf(t.deps[e],t);t.deps.length=t._depsLength}}function jf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let $n=!0,fc=0;const $f=[];function nr(){$f.push($n),$n=!1}function rr(){const t=$f.pop();$n=t===void 0?!0:t}function al(){fc++}function cl(){for(fc--;!fc&&pc.length;)pc.shift()()}function qf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&jf(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const pc=[];function zf(t,e,n){al();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&pc.push(r.scheduler)))}cl()}const Hf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},mc=new WeakMap,yr=Symbol(""),gc=Symbol("");function yt(t,e,n){if($n&&_r){let r=mc.get(t);r||mc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Hf(()=>r.delete(n))),qf(_r,s)}}function mn(t,e,n,r,s,i){const o=mc.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&ae(t)){const l=Number(r);o.forEach((h,d)=>{(d==="length"||!tr(d)&&d>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":ae(t)?il(n)&&c.push(o.get("length")):(c.push(o.get(yr)),Gr(t)&&c.push(o.get(gc)));break;case"delete":ae(t)||(c.push(o.get(yr)),Gr(t)&&c.push(o.get(gc)));break;case"set":Gr(t)&&c.push(o.get(yr));break}al();for(const l of c)l&&zf(l,4);cl()}const s_=nl("__proto__,__v_isRef,__isVue"),Gf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tr)),uh=i_();function i_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let i=0,o=this.length;i<o;i++)yt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr(),al();const r=be(this)[e].apply(this,n);return cl(),rr(),r}}),t}function o_(t){tr(t)||(t=String(t));const e=be(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Kf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?v_:Xf:i?Jf:Qf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){if(o&&Ee(uh,n))return Reflect.get(uh,n,r);if(n==="hasOwnProperty")return o_}const c=Reflect.get(e,n,r);return(tr(n)?Gf.has(n):s_(n))||(s||yt(e,"get",n),i)?c:vt(c)?o&&il(n)?c:c.value:Me(c)?s?Zf(c):Yo(c):c}}class Wf extends Kf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ei(i);if(!Ao(r)&&!ei(r)&&(i=be(i),r=be(r)),!ae(e)&&vt(i)&&!vt(r))return l?!1:(i.value=r,!0)}const o=ae(e)&&il(n)?Number(n)<e.length:Ee(e,n),c=Reflect.set(e,n,r,s);return e===be(s)&&(o?Jn(r,i)&&mn(e,"set",n,r):mn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tr(n)||!Gf.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ae(e)?"length":yr),Reflect.ownKeys(e)}}class a_ extends Kf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const c_=new Wf,l_=new a_,u_=new Wf(!0);const ll=t=>t,Xo=t=>Reflect.getPrototypeOf(t);function Hi(t,e,n=!1,r=!1){t=t.__v_raw;const s=be(t),i=be(e);n||(Jn(e,i)&&yt(s,"get",e),yt(s,"get",i));const{has:o}=Xo(s),c=r?ll:n?dl:ti;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Gi(t,e=!1){const n=this.__v_raw,r=be(n),s=be(t);return e||(Jn(t,s)&&yt(r,"has",t),yt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ki(t,e=!1){return t=t.__v_raw,!e&&yt(be(t),"iterate",yr),Reflect.get(t,"size",t)}function hh(t){t=be(t);const e=be(this);return Xo(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function dh(t,e){e=be(e);const n=be(this),{has:r,get:s}=Xo(n);let i=r.call(n,t);i||(t=be(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Jn(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function fh(t){const e=be(this),{has:n,get:r}=Xo(e);let s=n.call(e,t);s||(t=be(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function ph(){const t=be(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function Wi(t,e){return function(r,s){const i=this,o=i.__v_raw,c=be(o),l=e?ll:t?dl:ti;return!t&&yt(c,"iterate",yr),o.forEach((h,d)=>r.call(s,l(h),l(d),i))}}function Qi(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=Gr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?ll:e?dl:ti;return!e&&yt(i,"iterate",l?gc:yr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Cn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function h_(){const t={get(i){return Hi(this,i)},get size(){return Ki(this)},has:Gi,add:hh,set:dh,delete:fh,clear:ph,forEach:Wi(!1,!1)},e={get(i){return Hi(this,i,!1,!0)},get size(){return Ki(this)},has:Gi,add:hh,set:dh,delete:fh,clear:ph,forEach:Wi(!1,!0)},n={get(i){return Hi(this,i,!0)},get size(){return Ki(this,!0)},has(i){return Gi.call(this,i,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:Wi(!0,!1)},r={get(i){return Hi(this,i,!0,!0)},get size(){return Ki(this,!0)},has(i){return Gi.call(this,i,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:Wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qi(i,!1,!1),n[i]=Qi(i,!0,!1),e[i]=Qi(i,!1,!0),r[i]=Qi(i,!0,!0)}),[t,n,e,r]}const[d_,f_,p_,m_]=h_();function ul(t,e){const n=e?t?m_:p_:t?f_:d_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const g_={get:ul(!1,!1)},__={get:ul(!1,!0)},y_={get:ul(!0,!1)};const Qf=new WeakMap,Jf=new WeakMap,Xf=new WeakMap,v_=new WeakMap;function w_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E_(t){return t.__v_skip||!Object.isExtensible(t)?0:w_(z0(t))}function Yo(t){return ei(t)?t:hl(t,!1,c_,g_,Qf)}function Yf(t){return hl(t,!1,u_,__,Jf)}function Zf(t){return hl(t,!0,l_,y_,Xf)}function hl(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=E_(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function $s(t){return ei(t)?$s(t.__v_raw):!!(t&&t.__v_isReactive)}function ei(t){return!!(t&&t.__v_isReadonly)}function Ao(t){return!!(t&&t.__v_isShallow)}function ep(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function I_(t){return Object.isExtensible(t)&&Mf(t,"__v_skip",!0),t}const ti=t=>Me(t)?Yo(t):t,dl=t=>Me(t)?Zf(t):t;class tp{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ol(()=>e(this._value),()=>ao(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=be(this);return(!e._cacheable||e.effect.dirty)&&Jn(e._value,e._value=e.effect.run())&&ao(e,4),np(e),e.effect._dirtyLevel>=2&&ao(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function T_(t,e,n=!1){let r,s;const i=he(t);return i?(r=t,s=xt):(r=t.get,s=t.set),new tp(r,s,i||!s,n)}function np(t){var e;$n&&_r&&(t=be(t),qf(_r,(e=t.dep)!=null?e:t.dep=Hf(()=>t.dep=void 0,t instanceof tp?t:void 0)))}function ao(t,e=4,n,r){t=be(t);const s=t.dep;s&&zf(s,e)}function vt(t){return!!(t&&t.__v_isRef===!0)}function A_(t){return rp(t,!1)}function b_(t){return rp(t,!0)}function rp(t,e){return vt(t)?t:new R_(t,e)}class R_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:ti(e)}get value(){return np(this),this._value}set value(e){const n=this.__v_isShallow||Ao(e)||ei(e);e=n?e:be(e),Jn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ti(e),ao(this,4))}}function Kr(t){return vt(t)?t.value:t}const S_={get:(t,e,n)=>Kr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return vt(s)&&!vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sp(t){return $s(t)?t:new Proxy(t,S_)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(t,e,n,r){try{return r?t(...r):t()}catch(s){Zo(s,e,n)}}function Nt(t,e,n,r){if(he(t)){const s=qn(t,e,n,r);return s&&Nf(s)&&s.catch(i=>{Zo(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Nt(t[i],e,n,r));return s}}function Zo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){nr(),qn(l,null,10,[t,o,c]),rr();return}}C_(t,n,s,r)}function C_(t,e,n,r=!0){console.error(t)}let ni=!1,_c=!1;const ut=[];let Jt=0;const Wr=[];let Nn=null,fr=0;const ip=Promise.resolve();let fl=null;function op(t){const e=fl||ip;return t?e.then(this?t.bind(this):t):e}function P_(t){let e=Jt+1,n=ut.length;for(;e<n;){const r=e+n>>>1,s=ut[r],i=ri(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function pl(t){(!ut.length||!ut.includes(t,ni&&t.allowRecurse?Jt+1:Jt))&&(t.id==null?ut.push(t):ut.splice(P_(t.id),0,t),ap())}function ap(){!ni&&!_c&&(_c=!0,fl=ip.then(lp))}function k_(t){const e=ut.indexOf(t);e>Jt&&ut.splice(e,1)}function x_(t){ae(t)?Wr.push(...t):(!Nn||!Nn.includes(t,t.allowRecurse?fr+1:fr))&&Wr.push(t),ap()}function mh(t,e,n=ni?Jt+1:0){for(;n<ut.length;n++){const r=ut[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ut.splice(n,1),n--,r()}}}function cp(t){if(Wr.length){const e=[...new Set(Wr)].sort((n,r)=>ri(n)-ri(r));if(Wr.length=0,Nn){Nn.push(...e);return}for(Nn=e,fr=0;fr<Nn.length;fr++){const n=Nn[fr];n.active!==!1&&n()}Nn=null,fr=0}}const ri=t=>t.id==null?1/0:t.id,D_=(t,e)=>{const n=ri(t)-ri(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function lp(t){_c=!1,ni=!0,ut.sort(D_);try{for(Jt=0;Jt<ut.length;Jt++){const e=ut[Jt];e&&e.active!==!1&&qn(e,null,14)}}finally{Jt=0,ut.length=0,cp(),ni=!1,fl=null,(ut.length||Wr.length)&&lp()}}function N_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[d]||Ne;g&&(s=n.map(E=>We(E)?E.trim():E)),p&&(s=n.map(dc))}let c,l=r[c=ja(e)]||r[c=ja(tn(e))];!l&&i&&(l=r[c=ja(us(e))]),l&&Nt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Nt(h,t,6,s)}}function up(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=h=>{const d=up(h,e,!0);d&&(c=!0,Ke(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Me(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):Ke(o,i),Me(t)&&r.set(t,o),o)}function ea(t,e){return!t||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,us(e))||Ee(t,e))}let _t=null,ta=null;function bo(t){const e=_t;return _t=t,ta=t&&t.type.__scopeId||null,e}function Sr(t){ta=t}function Cr(){ta=null}function un(t,e=_t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ch(-1);const i=bo(e);let o;try{o=t(...s)}finally{bo(i),r._d&&Ch(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:g,setupState:E,ctx:k,inheritAttrs:x}=t,O=bo(t);let G,$;try{if(n.shapeFlag&4){const ne=s||r,fe=ne;G=Qt(h.call(fe,ne,d,p,E,g,k)),$=c}else{const ne=e;G=Qt(ne.length>1?ne(p,{attrs:c,slots:o,emit:l}):ne(p,null)),$=e.props?c:O_(c)}}catch(ne){Hs.length=0,Zo(ne,t,1),G=Le(At)}let U=G;if($&&x!==!1){const ne=Object.keys($),{shapeFlag:fe}=U;ne.length&&fe&7&&(i&&ne.some(rl)&&($=V_($,i)),U=Xn(U,$,!1,!0))}return n.dirs&&(U=Xn(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),G=U,bo(O),G}const O_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ko(n))&&((e||(e={}))[n]=t[n]);return e},V_=(t,e)=>{const n={};for(const r in t)(!rl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function M_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!ea(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?gh(r,o,h):!0:!!o;return!1}function gh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ea(n,i))return!0}return!1}function L_({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const hp="components";function Dt(t,e){return U_(hp,t,!0,e)||t}const F_=Symbol.for("v-ndc");function U_(t,e,n=!0,r=!1){const s=_t||tt;if(s){const i=s.type;if(t===hp){const c=My(i,!1);if(c&&(c===e||c===tn(e)||c===Jo(tn(e))))return i}const o=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!o&&r?i:o}}function _h(t,e){return t&&(t[e]||t[tn(e)]||t[Jo(tn(e))])}const B_=t=>t.__isSuspense;function j_(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):x_(t)}function na(t,e,n=tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{nr();const c=vi(n),l=Nt(e,n,t,o);return c(),rr(),l});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=tt)=>{(!ia||t==="sp")&&na(t,(...r)=>e(...r),n)},$_=En("bm"),dp=En("m"),q_=En("bu"),z_=En("u"),fp=En("bum"),pp=En("um"),H_=En("sp"),G_=En("rtg"),K_=En("rtc");function W_(t,e=tt){na("ec",t,e)}function Q_(t,e){if(_t===null)return t;const n=oa(_t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(nr(),Nt(l,n,8,[t.el,c,t,e]),rr())}}function yi(t,e,n,r){let s;const i=n;if(ae(t)||We(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const h=o[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}/*! #__NO_SIDE_EFFECTS__ */function mp(t,e){return he(t)?Ke({name:t.name},e,{setup:t}):t}const co=t=>!!t.type.__asyncLoader,yc=t=>t?Lp(t)?oa(t):yc(t.parent):null,qs=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yc(t.parent),$root:t=>yc(t.root),$emit:t=>t.emit,$options:t=>ml(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,pl(t.update)}),$nextTick:t=>t.n||(t.n=op.bind(t.proxy)),$watch:t=>my.bind(t)}),za=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ee(t,e),J_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(za(r,e))return o[e]=1,r[e];if(s!==Ne&&Ee(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ee(h,e))return o[e]=3,i[e];if(n!==Ne&&Ee(n,e))return o[e]=4,n[e];vc&&(o[e]=0)}}const d=qs[e];let p,g;if(d)return e==="$attrs"&&yt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Ee(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Ee(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return za(s,e)?(s[e]=n,!0):r!==Ne&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ne&&Ee(t,o)||za(e,o)||(c=i[0])&&Ee(c,o)||Ee(r,o)||Ee(qs,o)||Ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yh(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vc=!0;function X_(t){const e=ml(t),n=t.proxy,r=t.ctx;vc=!1,e.beforeCreate&&vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:E,updated:k,activated:x,deactivated:O,beforeDestroy:G,beforeUnmount:$,destroyed:U,unmounted:ne,render:fe,renderTracked:Q,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:T,inheritAttrs:R,components:A,directives:w,filters:Ce}=e;if(h&&Y_(h,r,null),o)for(const _e in o){const pe=o[_e];he(pe)&&(r[_e]=pe.bind(n))}if(s){const _e=s.call(n,n);Me(_e)&&(t.data=Yo(_e))}if(vc=!0,i)for(const _e in i){const pe=i[_e],wt=he(pe)?pe.bind(n,n):he(pe.get)?pe.get.bind(n,n):xt,Vt=!he(pe)&&he(pe.set)?pe.set.bind(n):xt,Rt=Ft({get:wt,set:Vt});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:Ue=>Rt.value=Ue})}if(c)for(const _e in c)gp(c[_e],r,n,_e);if(l){const _e=he(l)?l.call(n):l;Reflect.ownKeys(_e).forEach(pe=>{lo(pe,_e[pe])})}d&&vh(d,t,"c");function Fe(_e,pe){ae(pe)?pe.forEach(wt=>_e(wt.bind(n))):pe&&_e(pe.bind(n))}if(Fe($_,p),Fe(dp,g),Fe(q_,E),Fe(z_,k),Fe(gy,x),Fe(_y,O),Fe(W_,v),Fe(K_,Q),Fe(G_,b),Fe(fp,$),Fe(pp,ne),Fe(H_,y),ae(T))if(T.length){const _e=t.exposed||(t.exposed={});T.forEach(pe=>{Object.defineProperty(_e,pe,{get:()=>n[pe],set:wt=>n[pe]=wt})})}else t.exposed||(t.exposed={});fe&&t.render===xt&&(t.render=fe),R!=null&&(t.inheritAttrs=R),A&&(t.components=A),w&&(t.directives=w)}function Y_(t,e,n=xt){ae(t)&&(t=wc(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=gn(s.from||r,s.default,!0):i=gn(s.from||r):i=gn(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vh(t,e,n){Nt(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gp(t,e,n,r){const s=r.includes(".")?Pp(n,r):()=>n[r];if(We(t)){const i=e[t];he(i)&&uo(s,i)}else if(he(t))uo(s,t.bind(n));else if(Me(t))if(ae(t))t.forEach(i=>gp(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&uo(s,i,t)}}function ml(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Ro(l,h,o,!0)),Ro(l,e,o)),Me(e)&&i.set(e,l),l}function Ro(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ro(t,i,n,!0),s&&s.forEach(o=>Ro(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Z_[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Z_={data:wh,props:Eh,emits:Eh,methods:Ls,computed:Ls,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Ls,directives:Ls,watch:ty,provide:wh,inject:ey};function wh(t,e){return e?t?function(){return Ke(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function ey(t,e){return Ls(wc(t),wc(e))}function wc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ls(t,e){return t?Ke(Object.create(null),t,e):e}function Eh(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:Ke(Object.create(null),yh(t),yh(e??{})):e}function ty(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function _p(){return{app:null,config:{isNativeTag:$0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ny=0;function ry(t,e){return function(r,s=null){he(r)||(r=Ke({},r)),s!=null&&!Me(s)&&(s=null);const i=_p(),o=new WeakSet;let c=!1;const l=i.app={_uid:ny++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Fy,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&he(h.install)?(o.add(h),h.install(l,...d)):he(h)&&(o.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,p){if(!c){const g=Le(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,h):t(g,h,p),c=!0,l._container=h,h.__vue_app__=l,oa(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){const d=zs;zs=l;try{return h()}finally{zs=d}}};return l}}let zs=null;function lo(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function gn(t,e,n=!1){const r=tt||_t;if(r||zs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const yp={},vp=()=>Object.create(yp),wp=t=>Object.getPrototypeOf(t)===yp;function sy(t,e,n,r=!1){const s={},i=vp();t.propsDefaults=Object.create(null),Ep(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function iy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=be(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ea(t.emitsOptions,g))continue;const E=e[g];if(l)if(Ee(i,g))E!==i[g]&&(i[g]=E,h=!0);else{const k=tn(g);s[k]=Ec(l,c,k,E,t,!1)}else E!==i[g]&&(i[g]=E,h=!0)}}}else{Ep(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ee(e,p)&&((d=us(p))===p||!Ee(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ec(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&mn(t.attrs,"set","")}function Ep(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(js(l))continue;const h=e[l];let d;s&&Ee(s,d=tn(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:ea(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=be(n),h=c||Ne;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ec(s,l,p,h[p],t,!Ee(h,p))}}return o}function Ec(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ee(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=vi(s);r=h[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===us(n))&&(r=!0))}return r}function Ip(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const d=p=>{l=!0;const[g,E]=Ip(p,e,!0);Ke(o,g),E&&c.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Me(t)&&r.set(t,Hr),Hr;if(ae(i))for(let d=0;d<i.length;d++){const p=tn(i[d]);Ih(p)&&(o[p]=Ne)}else if(i)for(const d in i){const p=tn(d);if(Ih(p)){const g=i[d],E=o[p]=ae(g)||he(g)?{type:g}:Ke({},g);if(E){const k=bh(Boolean,E.type),x=bh(String,E.type);E[0]=k>-1,E[1]=x<0||k<x,(k>-1||Ee(E,"default"))&&c.push(p)}}}const h=[o,c];return Me(t)&&r.set(t,h),h}function Ih(t){return t[0]!=="$"&&!js(t)}function Th(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ah(t,e){return Th(t)===Th(e)}function bh(t,e){return ae(e)?e.findIndex(n=>Ah(n,t)):he(e)&&Ah(e,t)?0:-1}const Tp=t=>t[0]==="_"||t==="$stable",gl=t=>ae(t)?t.map(Qt):[Qt(t)],oy=(t,e,n)=>{if(e._n)return e;const r=un((...s)=>gl(e(...s)),n);return r._c=!1,r},Ap=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Tp(s))continue;const i=t[s];if(he(i))e[s]=oy(s,i,r);else if(i!=null){const o=gl(i);e[s]=()=>o}}},bp=(t,e)=>{const n=gl(e);t.slots.default=()=>n},ay=(t,e)=>{const n=t.slots=vp();if(t.vnode.shapeFlag&32){const r=e._;r?(Ke(n,e),Mf(n,"_",r,!0)):Ap(e,n)}else e&&bp(t,e)},cy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(Ke(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Ap(e,s)),o=e}else e&&(bp(t,e),o={default:1});if(i)for(const c in s)!Tp(c)&&o[c]==null&&delete s[c]};function Ic(t,e,n,r,s=!1){if(ae(t)){t.forEach((g,E)=>Ic(g,e&&(ae(e)?e[E]:e),n,r,s));return}if(co(r)&&!s)return;const i=r.shapeFlag&4?oa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Ne?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(We(h)?(d[h]=null,Ee(p,h)&&(p[h]=null)):vt(h)&&(h.value=null)),he(l))qn(l,c,12,[o,d]);else{const g=We(l),E=vt(l);if(g||E){const k=()=>{if(t.f){const x=g?Ee(p,l)?p[l]:d[l]:l.value;s?ae(x)&&sl(x,i):ae(x)?x.includes(i)||x.push(i):g?(d[l]=[i],Ee(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=o,Ee(p,l)&&(p[l]=o)):E&&(l.value=o,t.k&&(d[t.k]=o))};o?(k.id=-1,gt(k,n)):k()}}}const gt=j_;function ly(t){return uy(t)}function uy(t,e){const n=Lf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:E=xt,insertStaticContent:k}=t,x=(_,I,C,V=null,D=null,q=null,K=void 0,B=null,z=!!I.dynamicChildren)=>{if(_===I)return;_&&!pr(_,I)&&(V=N(_),Ue(_,D,q,!0),_=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:L,ref:J,shapeFlag:se}=I;switch(L){case sa:O(_,I,C,V);break;case At:G(_,I,C,V);break;case ho:_==null&&$(I,C,V,K);break;case mt:A(_,I,C,V,D,q,K,B,z);break;default:se&1?fe(_,I,C,V,D,q,K,B,z):se&6?w(_,I,C,V,D,q,K,B,z):(se&64||se&128)&&L.process(_,I,C,V,D,q,K,B,z,Z)}J!=null&&D&&Ic(J,_&&_.ref,q,I||_,!I)},O=(_,I,C,V)=>{if(_==null)r(I.el=c(I.children),C,V);else{const D=I.el=_.el;I.children!==_.children&&h(D,I.children)}},G=(_,I,C,V)=>{_==null?r(I.el=l(I.children||""),C,V):I.el=_.el},$=(_,I,C,V)=>{[_.el,_.anchor]=k(_.children,I,C,V,_.el,_.anchor)},U=({el:_,anchor:I},C,V)=>{let D;for(;_&&_!==I;)D=g(_),r(_,C,V),_=D;r(I,C,V)},ne=({el:_,anchor:I})=>{let C;for(;_&&_!==I;)C=g(_),s(_),_=C;s(I)},fe=(_,I,C,V,D,q,K,B,z)=>{I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),_==null?Q(I,C,V,D,q,K,B,z):y(_,I,D,q,K,B,z)},Q=(_,I,C,V,D,q,K,B)=>{let z,L;const{props:J,shapeFlag:se,transition:re,dirs:te}=_;if(z=_.el=o(_.type,q,J&&J.is,J),se&8?d(z,_.children):se&16&&v(_.children,z,null,V,D,Ha(_,q),K,B),te&&cr(_,null,V,"created"),b(z,_,_.scopeId,K,V),J){for(const Re in J)Re!=="value"&&!js(Re)&&i(z,Re,null,J[Re],q,_.children,V,D,Je);"value"in J&&i(z,"value",null,J.value,q),(L=J.onVnodeBeforeMount)&&Kt(L,V,_)}te&&cr(_,null,V,"beforeMount");const oe=hy(D,re);oe&&re.beforeEnter(z),r(z,I,C),((L=J&&J.onVnodeMounted)||oe||te)&&gt(()=>{L&&Kt(L,V,_),oe&&re.enter(z),te&&cr(_,null,V,"mounted")},D)},b=(_,I,C,V,D)=>{if(C&&E(_,C),V)for(let q=0;q<V.length;q++)E(_,V[q]);if(D){let q=D.subTree;if(I===q){const K=D.vnode;b(_,K,K.scopeId,K.slotScopeIds,D.parent)}}},v=(_,I,C,V,D,q,K,B,z=0)=>{for(let L=z;L<_.length;L++){const J=_[L]=B?Vn(_[L]):Qt(_[L]);x(null,J,I,C,V,D,q,K,B)}},y=(_,I,C,V,D,q,K)=>{const B=I.el=_.el;let{patchFlag:z,dynamicChildren:L,dirs:J}=I;z|=_.patchFlag&16;const se=_.props||Ne,re=I.props||Ne;let te;if(C&&lr(C,!1),(te=re.onVnodeBeforeUpdate)&&Kt(te,C,I,_),J&&cr(I,_,C,"beforeUpdate"),C&&lr(C,!0),L?T(_.dynamicChildren,L,B,C,V,Ha(I,D),q):K||pe(_,I,B,null,C,V,Ha(I,D),q,!1),z>0){if(z&16)R(B,I,se,re,C,V,D);else if(z&2&&se.class!==re.class&&i(B,"class",null,re.class,D),z&4&&i(B,"style",se.style,re.style,D),z&8){const oe=I.dynamicProps;for(let Re=0;Re<oe.length;Re++){const we=oe[Re],qe=se[we],Et=re[we];(Et!==qe||we==="value")&&i(B,we,qe,Et,D,_.children,C,V,Je)}}z&1&&_.children!==I.children&&d(B,I.children)}else!K&&L==null&&R(B,I,se,re,C,V,D);((te=re.onVnodeUpdated)||J)&&gt(()=>{te&&Kt(te,C,I,_),J&&cr(I,_,C,"updated")},V)},T=(_,I,C,V,D,q,K)=>{for(let B=0;B<I.length;B++){const z=_[B],L=I[B],J=z.el&&(z.type===mt||!pr(z,L)||z.shapeFlag&70)?p(z.el):C;x(z,L,J,null,V,D,q,K,!0)}},R=(_,I,C,V,D,q,K)=>{if(C!==V){if(C!==Ne)for(const B in C)!js(B)&&!(B in V)&&i(_,B,C[B],null,K,I.children,D,q,Je);for(const B in V){if(js(B))continue;const z=V[B],L=C[B];z!==L&&B!=="value"&&i(_,B,L,z,K,I.children,D,q,Je)}"value"in V&&i(_,"value",C.value,V.value,K)}},A=(_,I,C,V,D,q,K,B,z)=>{const L=I.el=_?_.el:c(""),J=I.anchor=_?_.anchor:c("");let{patchFlag:se,dynamicChildren:re,slotScopeIds:te}=I;te&&(B=B?B.concat(te):te),_==null?(r(L,C,V),r(J,C,V),v(I.children||[],C,J,D,q,K,B,z)):se>0&&se&64&&re&&_.dynamicChildren?(T(_.dynamicChildren,re,C,D,q,K,B),(I.key!=null||D&&I===D.subTree)&&Rp(_,I,!0)):pe(_,I,C,J,D,q,K,B,z)},w=(_,I,C,V,D,q,K,B,z)=>{I.slotScopeIds=B,_==null?I.shapeFlag&512?D.ctx.activate(I,C,V,K,z):Ce(I,C,V,D,q,K,z):Ye(_,I,z)},Ce=(_,I,C,V,D,q,K)=>{const B=_.component=ky(_,V,D);if(ra(_)&&(B.ctx.renderer=Z),Dy(B),B.asyncDep){if(D&&D.registerDep(B,Fe,K),!_.el){const z=B.subTree=Le(At);G(null,z,I,C)}}else Fe(B,_,I,C,D,q,K)},Ye=(_,I,C)=>{const V=I.component=_.component;if(M_(_,I,C))if(V.asyncDep&&!V.asyncResolved){_e(V,I,C);return}else V.next=I,k_(V.update),V.effect.dirty=!0,V.update();else I.el=_.el,V.vnode=I},Fe=(_,I,C,V,D,q,K)=>{const B=()=>{if(_.isMounted){let{next:J,bu:se,u:re,parent:te,vnode:oe}=_;{const St=Sp(_);if(St){J&&(J.el=oe.el,_e(_,J,K)),St.asyncDep.then(()=>{_.isUnmounted||B()});return}}let Re=J,we;lr(_,!1),J?(J.el=oe.el,_e(_,J,K)):J=oe,se&&oo(se),(we=J.props&&J.props.onVnodeBeforeUpdate)&&Kt(we,te,J,oe),lr(_,!0);const qe=qa(_),Et=_.subTree;_.subTree=qe,x(Et,qe,p(Et.el),N(Et),_,D,q),J.el=qe.el,Re===null&&L_(_,qe.el),re&&gt(re,D),(we=J.props&&J.props.onVnodeUpdated)&&gt(()=>Kt(we,te,J,oe),D)}else{let J;const{el:se,props:re}=I,{bm:te,m:oe,parent:Re}=_,we=co(I);if(lr(_,!1),te&&oo(te),!we&&(J=re&&re.onVnodeBeforeMount)&&Kt(J,Re,I),lr(_,!0),se&&Pe){const qe=()=>{_.subTree=qa(_),Pe(se,_.subTree,_,D,null)};we?I.type.__asyncLoader().then(()=>!_.isUnmounted&&qe()):qe()}else{const qe=_.subTree=qa(_);x(null,qe,C,V,_,D,q),I.el=qe.el}if(oe&&gt(oe,D),!we&&(J=re&&re.onVnodeMounted)){const qe=I;gt(()=>Kt(J,Re,qe),D)}(I.shapeFlag&256||Re&&co(Re.vnode)&&Re.vnode.shapeFlag&256)&&_.a&&gt(_.a,D),_.isMounted=!0,I=C=V=null}},z=_.effect=new ol(B,xt,()=>pl(L),_.scope),L=_.update=()=>{z.dirty&&z.run()};L.id=_.uid,lr(_,!0),L()},_e=(_,I,C)=>{I.component=_;const V=_.vnode.props;_.vnode=I,_.next=null,iy(_,I.props,V,C),cy(_,I.children,C),nr(),mh(_),rr()},pe=(_,I,C,V,D,q,K,B,z=!1)=>{const L=_&&_.children,J=_?_.shapeFlag:0,se=I.children,{patchFlag:re,shapeFlag:te}=I;if(re>0){if(re&128){Vt(L,se,C,V,D,q,K,B,z);return}else if(re&256){wt(L,se,C,V,D,q,K,B,z);return}}te&8?(J&16&&Je(L,D,q),se!==L&&d(C,se)):J&16?te&16?Vt(L,se,C,V,D,q,K,B,z):Je(L,D,q,!0):(J&8&&d(C,""),te&16&&v(se,C,V,D,q,K,B,z))},wt=(_,I,C,V,D,q,K,B,z)=>{_=_||Hr,I=I||Hr;const L=_.length,J=I.length,se=Math.min(L,J);let re;for(re=0;re<se;re++){const te=I[re]=z?Vn(I[re]):Qt(I[re]);x(_[re],te,C,null,D,q,K,B,z)}L>J?Je(_,D,q,!0,!1,se):v(I,C,V,D,q,K,B,z,se)},Vt=(_,I,C,V,D,q,K,B,z)=>{let L=0;const J=I.length;let se=_.length-1,re=J-1;for(;L<=se&&L<=re;){const te=_[L],oe=I[L]=z?Vn(I[L]):Qt(I[L]);if(pr(te,oe))x(te,oe,C,null,D,q,K,B,z);else break;L++}for(;L<=se&&L<=re;){const te=_[se],oe=I[re]=z?Vn(I[re]):Qt(I[re]);if(pr(te,oe))x(te,oe,C,null,D,q,K,B,z);else break;se--,re--}if(L>se){if(L<=re){const te=re+1,oe=te<J?I[te].el:V;for(;L<=re;)x(null,I[L]=z?Vn(I[L]):Qt(I[L]),C,oe,D,q,K,B,z),L++}}else if(L>re)for(;L<=se;)Ue(_[L],D,q,!0),L++;else{const te=L,oe=L,Re=new Map;for(L=oe;L<=re;L++){const dt=I[L]=z?Vn(I[L]):Qt(I[L]);dt.key!=null&&Re.set(dt.key,L)}let we,qe=0;const Et=re-oe+1;let St=!1,ws=0;const An=new Array(Et);for(L=0;L<Et;L++)An[L]=0;for(L=te;L<=se;L++){const dt=_[L];if(qe>=Et){Ue(dt,D,q,!0);continue}let Ct;if(dt.key!=null)Ct=Re.get(dt.key);else for(we=oe;we<=re;we++)if(An[we-oe]===0&&pr(dt,I[we])){Ct=we;break}Ct===void 0?Ue(dt,D,q,!0):(An[Ct-oe]=L+1,Ct>=ws?ws=Ct:St=!0,x(dt,I[Ct],C,null,D,q,K,B,z),qe++)}const Dr=St?dy(An):Hr;for(we=Dr.length-1,L=Et-1;L>=0;L--){const dt=oe+L,Ct=I[dt],Nr=dt+1<J?I[dt+1].el:V;An[L]===0?x(null,Ct,C,Nr,D,q,K,B,z):St&&(we<0||L!==Dr[we]?Rt(Ct,C,Nr,2):we--)}}},Rt=(_,I,C,V,D=null)=>{const{el:q,type:K,transition:B,children:z,shapeFlag:L}=_;if(L&6){Rt(_.component.subTree,I,C,V);return}if(L&128){_.suspense.move(I,C,V);return}if(L&64){K.move(_,I,C,Z);return}if(K===mt){r(q,I,C);for(let se=0;se<z.length;se++)Rt(z[se],I,C,V);r(_.anchor,I,C);return}if(K===ho){U(_,I,C);return}if(V!==2&&L&1&&B)if(V===0)B.beforeEnter(q),r(q,I,C),gt(()=>B.enter(q),D);else{const{leave:se,delayLeave:re,afterLeave:te}=B,oe=()=>r(q,I,C),Re=()=>{se(q,()=>{oe(),te&&te()})};re?re(q,oe,Re):Re()}else r(q,I,C)},Ue=(_,I,C,V=!1,D=!1)=>{const{type:q,props:K,ref:B,children:z,dynamicChildren:L,shapeFlag:J,patchFlag:se,dirs:re,memoIndex:te}=_;if(se===-2&&(D=!1),B!=null&&Ic(B,null,C,_,!0),te!=null&&(I.renderCache[te]=void 0),J&256){I.ctx.deactivate(_);return}const oe=J&1&&re,Re=!co(_);let we;if(Re&&(we=K&&K.onVnodeBeforeUnmount)&&Kt(we,I,_),J&6)Gt(_.component,C,V);else{if(J&128){_.suspense.unmount(C,V);return}oe&&cr(_,null,I,"beforeUnmount"),J&64?_.type.remove(_,I,C,Z,V):L&&(q!==mt||se>0&&se&64)?Je(L,I,C,!1,!0):(q===mt&&se&384||!D&&J&16)&&Je(z,I,C),V&&Be(_)}(Re&&(we=K&&K.onVnodeUnmounted)||oe)&&gt(()=>{we&&Kt(we,I,_),oe&&cr(_,null,I,"unmounted")},C)},Be=_=>{const{type:I,el:C,anchor:V,transition:D}=_;if(I===mt){Tn(C,V);return}if(I===ho){ne(_);return}const q=()=>{s(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:B}=D,z=()=>K(C,q);B?B(_.el,q,z):z()}else q()},Tn=(_,I)=>{let C;for(;_!==I;)C=g(_),s(_),_=C;s(I)},Gt=(_,I,C)=>{const{bum:V,scope:D,update:q,subTree:K,um:B,m:z,a:L}=_;Rh(z),Rh(L),V&&oo(V),D.stop(),q&&(q.active=!1,Ue(K,_,I,C)),B&&gt(B,I),gt(()=>{_.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Je=(_,I,C,V=!1,D=!1,q=0)=>{for(let K=q;K<_.length;K++)Ue(_[K],I,C,V,D)},N=_=>_.shapeFlag&6?N(_.component.subTree):_.shapeFlag&128?_.suspense.next():g(_.anchor||_.el);let X=!1;const W=(_,I,C)=>{_==null?I._vnode&&Ue(I._vnode,null,null,!0):x(I._vnode||null,_,I,null,null,null,C),X||(X=!0,mh(),cp(),X=!1),I._vnode=_},Z={p:x,um:Ue,m:Rt,r:Be,mt:Ce,mc:v,pc:pe,pbc:T,n:N,o:t};let ye,Pe;return{render:W,hydrate:ye,createApp:ry(W,ye)}}function Ha({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rp(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Vn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Rp(o,c)),c.type===sa&&(c.el=o.el)}}function dy(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Sp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sp(e)}function Rh(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const fy=Symbol.for("v-scx"),py=()=>gn(fy),Ji={};function uo(t,e,n){return Cp(t,e,n)}function Cp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Ne){if(e&&i){const Q=e;e=(...b)=>{Q(...b),fe()}}const l=tt,h=Q=>r===!0?Q:Ln(Q,r===!1?1:void 0);let d,p=!1,g=!1;if(vt(t)?(d=()=>t.value,p=Ao(t)):$s(t)?(d=()=>h(t),p=!0):ae(t)?(g=!0,p=t.some(Q=>$s(Q)||Ao(Q)),d=()=>t.map(Q=>{if(vt(Q))return Q.value;if($s(Q))return h(Q);if(he(Q))return qn(Q,l,2)})):he(t)?e?d=()=>qn(t,l,2):d=()=>(E&&E(),Nt(t,l,3,[k])):d=xt,e&&r){const Q=d;d=()=>Ln(Q())}let E,k=Q=>{E=U.onStop=()=>{qn(Q,l,4),E=U.onStop=void 0}},x;if(ia)if(k=xt,e?n&&Nt(e,l,3,[d(),g?[]:void 0,k]):d(),s==="sync"){const Q=py();x=Q.__watcherHandles||(Q.__watcherHandles=[])}else return xt;let O=g?new Array(t.length).fill(Ji):Ji;const G=()=>{if(!(!U.active||!U.dirty))if(e){const Q=U.run();(r||p||(g?Q.some((b,v)=>Jn(b,O[v])):Jn(Q,O)))&&(E&&E(),Nt(e,l,3,[Q,O===Ji?void 0:g&&O[0]===Ji?[]:O,k]),O=Q)}else U.run()};G.allowRecurse=!!e;let $;s==="sync"?$=G:s==="post"?$=()=>gt(G,l&&l.suspense):(G.pre=!0,l&&(G.id=l.uid),$=()=>pl(G));const U=new ol(d,xt,$),ne=n_(),fe=()=>{U.stop(),ne&&sl(ne.effects,U)};return e?n?G():O=U.run():s==="post"?gt(U.run.bind(U),l&&l.suspense):U.run(),x&&x.push(fe),fe}function my(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Pp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=vi(this),c=Cp(s,i.bind(r),n);return o(),c}function Pp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ln(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,vt(t))Ln(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)Ln(t[r],e,n);else if(Df(t)||Gr(t))t.forEach(r=>{Ln(r,e,n)});else if(Vf(t)){for(const r in t)Ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ln(t[r],e,n)}return t}const ra=t=>t.type.__isKeepAlive;function gy(t,e){kp(t,"a",e)}function _y(t,e){kp(t,"da",e)}function kp(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(na(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ra(s.parent.vnode)&&yy(r,e,n,s),s=s.parent}}function yy(t,e,n,r){const s=na(e,t,r,!0);pp(()=>{sl(r[e],s)},n)}const On=Symbol("_leaveCb"),Xi=Symbol("_enterCb");function vy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dp(()=>{t.isMounted=!0}),fp(()=>{t.isUnmounting=!0}),t}const Pt=[Function,Array],xp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},Dp=t=>{const e=t.subTree;return e.component?Dp(e.component):e},wy={name:"BaseTransition",props:xp,setup(t,{slots:e}){const n=xy(),r=vy();return()=>{const s=e.default&&Op(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==At){i=g;break}}const o=be(t),{mode:c}=o;if(r.isLeaving)return Ga(i);const l=Sh(i);if(!l)return Ga(i);let h=Tc(l,o,r,n,g=>h=g);So(l,h);const d=n.subTree,p=d&&Sh(d);if(p&&p.type!==At&&!pr(l,p)&&Dp(n).type!==At){const g=Tc(p,o,r,n);if(So(p,g),c==="out-in"&&l.type!==At)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ga(i);c==="in-out"&&l.type!==At&&(g.delayLeave=(E,k,x)=>{const O=Np(r,p);O[String(p.key)]=p,E[On]=()=>{k(),E[On]=void 0,delete h.delayedLeave},h.delayedLeave=x})}return i}}},Ey=wy;function Np(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Tc(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:E,onAfterLeave:k,onLeaveCancelled:x,onBeforeAppear:O,onAppear:G,onAfterAppear:$,onAppearCancelled:U}=e,ne=String(t.key),fe=Np(n,t),Q=(y,T)=>{y&&Nt(y,r,9,T)},b=(y,T)=>{const R=T[1];Q(y,T),ae(y)?y.every(A=>A.length<=1)&&R():y.length<=1&&R()},v={mode:o,persisted:c,beforeEnter(y){let T=l;if(!n.isMounted)if(i)T=O||l;else return;y[On]&&y[On](!0);const R=fe[ne];R&&pr(t,R)&&R.el[On]&&R.el[On](),Q(T,[y])},enter(y){let T=h,R=d,A=p;if(!n.isMounted)if(i)T=G||h,R=$||d,A=U||p;else return;let w=!1;const Ce=y[Xi]=Ye=>{w||(w=!0,Ye?Q(A,[y]):Q(R,[y]),v.delayedLeave&&v.delayedLeave(),y[Xi]=void 0)};T?b(T,[y,Ce]):Ce()},leave(y,T){const R=String(t.key);if(y[Xi]&&y[Xi](!0),n.isUnmounting)return T();Q(g,[y]);let A=!1;const w=y[On]=Ce=>{A||(A=!0,T(),Ce?Q(x,[y]):Q(k,[y]),y[On]=void 0,fe[R]===t&&delete fe[R])};fe[R]=t,E?b(E,[y,w]):w()},clone(y){const T=Tc(y,e,n,r,s);return s&&s(T),T}};return v}function Ga(t){if(ra(t))return t=Xn(t),t.children=null,t}function Sh(t){if(!ra(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function So(t,e){t.shapeFlag&6&&t.component?So(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Op(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===mt?(o.patchFlag&128&&s++,r=r.concat(Op(o.children,e,c))):(e||o.type!==At)&&r.push(c!=null?Xn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const Iy=t=>t.__isTeleport,mt=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),Hs=[];let Ut=null;function Ie(t=!1){Hs.push(Ut=t?null:[])}function Ty(){Hs.pop(),Ut=Hs[Hs.length-1]||null}let si=1;function Ch(t){si+=t}function Vp(t){return t.dynamicChildren=si>0?Ut||Hr:null,Ty(),si>0&&Ut&&Ut.push(t),t}function Oe(t,e,n,r,s,i){return Vp(j(t,e,n,r,s,i,!0))}function zn(t,e,n,r,s){return Vp(Le(t,e,n,r,s,!0))}function Ac(t){return t?t.__v_isVNode===!0:!1}function pr(t,e){return t.type===e.type&&t.key===e.key}const Mp=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||vt(t)||he(t)?{i:_t,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,r=0,s=null,i=t===mt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mp(e),ref:e&&fo(e),scopeId:ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_t};return c?(_l(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),si>0&&!o&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const Le=Ay;function Ay(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===F_)&&(t=At),Ac(t)){const c=Xn(t,e,!0);return n&&_l(c,n),si>0&&!i&&Ut&&(c.shapeFlag&6?Ut[Ut.indexOf(t)]=c:Ut.push(c)),c.patchFlag=-2,c}if(Ly(t)&&(t=t.__vccOpts),e){e=by(e);let{class:c,style:l}=e;c&&!We(c)&&(e.class=Tt(c)),Me(l)&&(ep(l)&&!ae(l)&&(l=Ke({},l)),e.style=hs(l))}const o=We(t)?1:B_(t)?128:Iy(t)?64:Me(t)?4:he(t)?2:0;return j(t,e,n,r,s,o,i,!0)}function by(t){return t?ep(t)||wp(t)?Ke({},t):t:null}function Xn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Sy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Mp(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(fo(e)):[i,fo(e)]:fo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xn(t.ssContent),ssFallback:t.ssFallback&&Xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&So(d,l.clone(d)),d}function zr(t=" ",e=0){return Le(sa,null,t,e)}function Ry(t,e){const n=Le(ho,null,t);return n.staticCount=e,n}function Xt(t="",e=!1){return e?(Ie(),zn(At,null,t)):Le(At,null,t)}function Qt(t){return t==null||typeof t=="boolean"?Le(At):ae(t)?Le(mt,null,t.slice()):typeof t=="object"?Vn(t):Le(sa,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xn(t)}function _l(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),_l(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!wp(e)?e._ctx=_t:s===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),r&64?(n=16,e=[zr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tt([e.class,r.class]));else if(s==="style")e.style=hs([e.style,r.style]);else if(Ko(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Nt(t,e,7,[n,r])}const Cy=_p();let Py=0;function ky(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Cy,i={uid:Py++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new e_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ip(r,s),emitsOptions:up(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=N_.bind(null,i),t.ce&&t.ce(i),i}let tt=null;const xy=()=>tt||_t;let Co,bc;{const t=Lf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Co=e("__VUE_INSTANCE_SETTERS__",n=>tt=n),bc=e("__VUE_SSR_SETTERS__",n=>ia=n)}const vi=t=>{const e=tt;return Co(t),t.scope.on(),()=>{t.scope.off(),Co(e)}},Ph=()=>{tt&&tt.scope.off(),Co(null)};function Lp(t){return t.vnode.shapeFlag&4}let ia=!1;function Dy(t,e=!1){e&&bc(e);const{props:n,children:r}=t.vnode,s=Lp(t);sy(t,n,s,e),ay(t,r);const i=s?Ny(t,e):void 0;return e&&bc(!1),i}function Ny(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,J_);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Vy(t):null,i=vi(t);nr();const o=qn(r,t,0,[t.props,s]);if(rr(),i(),Nf(o)){if(o.then(Ph,Ph),e)return o.then(c=>{kh(t,c,e)}).catch(c=>{Zo(c,t,0)});t.asyncDep=o}else kh(t,o,e)}else Fp(t,e)}function kh(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=sp(e)),Fp(t,n)}let xh;function Fp(t,e,n){const r=t.type;if(!t.render){if(!e&&xh&&!r.render){const s=r.template||ml(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Ke(Ke({isCustomElement:i,delimiters:c},o),l);r.render=xh(s,h)}}t.render=r.render||xt}{const s=vi(t);nr();try{X_(t)}finally{rr(),s()}}}const Oy={get(t,e){return yt(t,"get",""),t[e]}};function Vy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Oy),slots:t.slots,emit:t.emit,expose:e}}function oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sp(I_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}})):t.proxy}function My(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Ly(t){return he(t)&&"__vccOpts"in t}const Ft=(t,e)=>T_(t,e,ia);function yl(t,e,n){const r=arguments.length;return r===2?Me(e)&&!ae(e)?Ac(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ac(n)&&(n=[n]),Le(t,e,n))}const Fy="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Uy="http://www.w3.org/2000/svg",By="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,Dh=cn&&cn.createElement("template"),jy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?cn.createElementNS(Uy,t):e==="mathml"?cn.createElementNS(By,t):n?cn.createElement(t,{is:n}):cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>cn.createTextNode(t),createComment:t=>cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Dh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Dh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pn="transition",Os="animation",ii=Symbol("_vtc"),aa=(t,{slots:e})=>yl(Ey,$y(t),e);aa.displayName="Transition";const Up={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};aa.props=Ke({},xp,Up);const ur=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},Nh=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function $y(t){const e={};for(const A in t)A in Up||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,k=qy(s),x=k&&k[0],O=k&&k[1],{onBeforeEnter:G,onEnter:$,onEnterCancelled:U,onLeave:ne,onLeaveCancelled:fe,onBeforeAppear:Q=G,onAppear:b=$,onAppearCancelled:v=U}=e,y=(A,w,Ce)=>{hr(A,w?d:c),hr(A,w?h:o),Ce&&Ce()},T=(A,w)=>{A._isLeaving=!1,hr(A,p),hr(A,E),hr(A,g),w&&w()},R=A=>(w,Ce)=>{const Ye=A?b:$,Fe=()=>y(w,A,Ce);ur(Ye,[w,Fe]),Oh(()=>{hr(w,A?l:i),kn(w,A?d:c),Nh(Ye)||Vh(w,r,x,Fe)})};return Ke(e,{onBeforeEnter(A){ur(G,[A]),kn(A,i),kn(A,o)},onBeforeAppear(A){ur(Q,[A]),kn(A,l),kn(A,h)},onEnter:R(!1),onAppear:R(!0),onLeave(A,w){A._isLeaving=!0;const Ce=()=>T(A,w);kn(A,p),kn(A,g),Gy(),Oh(()=>{A._isLeaving&&(hr(A,p),kn(A,E),Nh(ne)||Vh(A,r,O,Ce))}),ur(ne,[A,Ce])},onEnterCancelled(A){y(A,!1),ur(U,[A])},onAppearCancelled(A){y(A,!0),ur(v,[A])},onLeaveCancelled(A){T(A),ur(fe,[A])}})}function qy(t){if(t==null)return null;if(Me(t))return[Ka(t.enter),Ka(t.leave)];{const e=Ka(t);return[e,e]}}function Ka(t){return K0(t)}function kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ii]||(t[ii]=new Set)).add(e)}function hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ii];n&&(n.delete(e),n.size||(t[ii]=void 0))}function Oh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zy=0;function Vh(t,e,n,r){const s=t._endId=++zy,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=Hy(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,g),i()},g=E=>{E.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(h,g)}function Hy(t,e){const n=window.getComputedStyle(t),r=k=>(n[k]||"").split(", "),s=r(`${Pn}Delay`),i=r(`${Pn}Duration`),o=Mh(s,i),c=r(`${Os}Delay`),l=r(`${Os}Duration`),h=Mh(c,l);let d=null,p=0,g=0;e===Pn?o>0&&(d=Pn,p=o,g=i.length):e===Os?h>0&&(d=Os,p=h,g=l.length):(p=Math.max(o,h),d=p>0?o>h?Pn:Os:null,g=d?d===Pn?i.length:l.length:0);const E=d===Pn&&/\b(transform|all)(,|$)/.test(r(`${Pn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:E}}function Mh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Lh(n)+Lh(t[r])))}function Lh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Gy(){return document.body.offsetHeight}function Ky(t,e,n){const r=t[ii];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fh=Symbol("_vod"),Wy=Symbol("_vsh"),Qy=Symbol(""),Jy=/(^|;)\s*display\s*:/;function Xy(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&po(r,c,"")}else for(const o in e)n[o]==null&&po(r,o,"");for(const o in n)o==="display"&&(i=!0),po(r,o,n[o])}else if(s){if(e!==n){const o=r[Qy];o&&(n+=";"+o),r.cssText=n,i=Jy.test(n)}}else e&&t.removeAttribute("style");Fh in t&&(t[Fh]=i?r.display:"",t[Wy]&&(r.display="none"))}const Uh=/\s*!important$/;function po(t,e,n){if(ae(n))n.forEach(r=>po(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Yy(t,e);Uh.test(n)?t.setProperty(us(r),n.replace(Uh,""),"important"):t[r]=n}}const Bh=["Webkit","Moz","ms"],Wa={};function Yy(t,e){const n=Wa[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return Wa[e]=r;r=Jo(r);for(let s=0;s<Bh.length;s++){const i=Bh[s]+r;if(i in t)return Wa[e]=i}return e}const jh="http://www.w3.org/1999/xlink";function $h(t,e,n,r,s,i=Z0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(jh,e.slice(6,e.length)):t.setAttributeNS(jh,e,n):n==null||i&&!Ff(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tr(n)?String(n):n)}function Zy(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const h=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(h!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=Ff(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Fr(t,e,n,r){t.addEventListener(e,n,r)}function ev(t,e,n,r){t.removeEventListener(e,n,r)}const qh=Symbol("_vei");function tv(t,e,n,r,s=null){const i=t[qh]||(t[qh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=nv(e);if(r){const h=i[e]=iv(r,s);Fr(t,c,h,l)}else o&&(ev(t,c,o,l),i[e]=void 0)}}const zh=/(?:Once|Passive|Capture)$/;function nv(t){let e;if(zh.test(t)){e={};let r;for(;r=t.match(zh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):us(t.slice(2)),e]}let Qa=0;const rv=Promise.resolve(),sv=()=>Qa||(rv.then(()=>Qa=0),Qa=Date.now());function iv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Nt(ov(r,n.value),e,5,[r])};return n.value=t,n.attached=sv(),n}function ov(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,av=(t,e,n,r,s,i,o,c,l)=>{const h=s==="svg";e==="class"?Ky(t,r,h):e==="style"?Xy(t,n,r):Ko(e)?rl(e)||tv(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cv(t,e,r,h))?(Zy(t,e,r,i,o,c,l),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$h(t,e,r,h,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$h(t,e,r,h))};function cv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hh(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hh(e)&&We(n)?!1:e in t}const Gh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>oo(e,n):e};function lv(t){t.target.composing=!0}function Kh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ja=Symbol("_assign"),uv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ja]=Gh(s);const i=r||s.props&&s.props.type==="number";Fr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=dc(c)),t[Ja](c)}),n&&Fr(t,"change",()=>{t.value=t.value.trim()}),e||(Fr(t,"compositionstart",lv),Fr(t,"compositionend",Kh),Fr(t,"change",Kh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ja]=Gh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?dc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},hv=["ctrl","shift","alt","meta"],dv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hv.some(n=>t[`${n}Key`]&&!e.includes(n))},Ur=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=dv[e[o]];if(c&&c(s,e))return}return t(s,...i)})},fv=Ke({patchProp:av},jy);let Wh;function pv(){return Wh||(Wh=ly(fv))}const mv=(...t)=>{const e=pv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_v(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,gv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _v(t){return We(t)?document.querySelector(t):t}const Bp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='47'%20viewBox='0%200%2048%2047'%20id='github'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cg%20fill='%23000'%20transform='translate(-700%20-560)'%3e%3cpath%20d='M723.999%20560C710.745%20560%20700%20570.787%20700%20584.097c0%2010.644%206.876%2019.675%2016.414%2022.861%201.2.222%201.639-.522%201.639-1.16%200-.573-.021-2.088-.034-4.098-6.676%201.456-8.085-3.23-8.085-3.23-1.09-2.784-2.663-3.525-2.663-3.525-2.18-1.495.165-1.465.165-1.465%202.407.17%203.674%202.483%203.674%202.483%202.143%203.683%205.618%202.62%206.986%202.002.217-1.557.838-2.619%201.524-3.221-5.33-.609-10.932-2.675-10.932-11.908%200-2.63.934-4.781%202.47-6.466-.247-.61-1.07-3.059.235-6.377%200%200%202.015-.647%206.6%202.47%201.915-.534%203.967-.801%206.008-.811%202.039.01%204.092.277%206.01.811%204.58-3.117%206.592-2.47%206.592-2.47%201.31%203.318.486%205.767.239%206.377%201.538%201.685%202.467%203.835%202.467%206.466%200%209.256-5.611%2011.293-10.957%2011.89.86.744%201.629%202.213%201.629%204.462%200%203.22-.03%205.819-.03%206.61%200%20.644.432%201.394%201.65%201.157C741.13%20603.763%20748%20594.738%20748%20584.097c0-13.31-10.746-24.097-24.001-24.097'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",yv="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='18'%20id='mail'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%3e%3cpath%20d='M3%201h16c1.1%200%202%20.9%202%202v12c0%201.1-.9%202-2%202H3c-1.1%200-2-.9-2-2V3c0-1.1.9-2%202-2z'%3e%3c/path%3e%3cpath%20d='m21%203-10%207L1%203'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",vv="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20id='linkedin'%3e%3cpath%20d='M0%205h3.578v11H0zM13.324%205.129c-.038-.012-.074-.025-.114-.036a2.32%202.32%200%200%200-.145-.028A3.207%203.207%200%200%200%2012.423%205c-2.086%200-3.409%201.517-3.845%202.103V5H5v11h3.578v-6s2.704-3.766%203.845-1v7H16V8.577a3.568%203.568%200%200%200-2.676-3.448z'%3e%3c/path%3e%3ccircle%20cx='1.75'%20cy='1.75'%20r='1.75'%3e%3c/circle%3e%3c/svg%3e",Ht=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},wv={name:"SocialLinks",props:{bgColor:{type:String,default:"#2C2C2C"},mounted(){this.setBgColors()},methods:{setBgColors(){document.documentElement.style.setProperty("--bg-color",this.bgColor)}}}},Ev={class:"items-center justify-between flex gap-4"},Iv=Ry('<a href="https://github.com/Martinho672" target="_blank" class="btn btn-background-circle" data-v-31fa2119><img src="'+Bp+'" alt="GitHub" class="icon h-5" data-v-31fa2119></a><a href="mailto:martinho672@gmail.com" target="_blank" class="btn btn-background-circle" data-v-31fa2119><img src="'+yv+'" alt="Email" class="icon h-4" data-v-31fa2119></a><a href="https://www.linkedin.com/in/fernando-martinho-nascimento-85b76a184/" target="_blank" class="btn btn-background-circle" data-v-31fa2119><img src="'+vv+'" alt="LinkedIn" class="icon h-4" data-v-31fa2119></a><a href="../../src/assets/Fernando-Martinho-Nascimento.pdf" target="_blank" class="btn btn-background-circle" data-v-31fa2119><svg class="icon h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-31fa2119><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 14h-8v-2h8v2zm0-4h-8v-2h8v2zm-3-5V3.5L18.5 9H13z" data-v-31fa2119></path><text x="50%" y="75%" dominant-baseline="middle" font-size="5" fill="currentColor" data-v-31fa2119></text></svg></a>',4),Tv=[Iv];function Av(t,e,n,r,s,i){return Ie(),Oe("div",Ev,Tv)}const vl=Ht(wv,[["render",Av],["__scopeId","data-v-31fa2119"]]),bv={name:"FooterComponent",components:{SocialLinks:vl}},Rv=t=>(Sr("data-v-13c10c76"),t=t(),Cr(),t),Sv={class:"footer"},Cv={class:"container h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-48 py-4"},Pv=Rv(()=>j("div",{class:"mb-4 md:mb-0 text-center md:text-left"},[j("p",{class:"text-sm font-light"},"© 2024 Fernando Nascimento. Todos os direitos reservados.")],-1)),kv={class:"flex space-x-4"};function xv(t,e,n,r,s,i){const o=Dt("SocialLinks");return Ie(),Oe("footer",Sv,[j("div",Cv,[Pv,j("div",kv,[Le(o,{bgColor:"#3C3B3C"})])])])}const Dv=Ht(bv,[["render",xv],["__scopeId","data-v-13c10c76"]]),Nv={name:"Navbar",data(){return{button_active_state:!1,menuOpen:!1,isMounted:!1}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen},closeMenu(){this.menuOpen=!1},scrollToSection(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"}),this.closeMenu()}},mounted(){setTimeout(()=>{this.isMounted=!0},200)}},ca=t=>(Sr("data-v-8815414a"),t=t(),Cr(),t),Ov={id:"nav"},Vv={class:"container mx-auto py-2 flex flex-row items-center justify-between md:items-start"},Mv={class:"block pb-8 md:hidden"},Lv=ca(()=>j("div",{class:"bar1"},null,-1)),Fv=ca(()=>j("div",{class:"bar2"},null,-1)),Uv=ca(()=>j("div",{class:"bar3"},null,-1)),Bv=[Lv,Fv,Uv],jv={class:"hidden md:flex md:flex-row gap-4 mt-2 md:mt-0"},$v={class:"mr-6"},qv={class:"mr-6"},zv={class:"mr-6"},Hv={class:"mr-6"},Gv=ca(()=>j("div",{class:"bottom-0 left-0 right-0 mb-4 bg-white linha"},null,-1)),Kv={class:"flex flex-col gap-4 mt-4"};function Wv(t,e,n,r,s,i){const o=Dt("router-link");return Ie(),Oe("div",Ov,[j("nav",{class:Tt(["principal navbar-content p-4",{"slide-in":s.isMounted}])},[j("div",Vv,[j("div",Mv,[j("div",{onClick:e[0]||(e[0]=(...c)=>i.toggleMenu&&i.toggleMenu(...c)),class:Tt([{change:s.menuOpen},"text-white hamburguer"])},Bv,2)]),j("ul",jv,[j("li",$v,[Le(o,{to:"/",class:"font-medium text-white transition-colors duration-300 ease-in-out hover:text-gray-300 text-base"},{default:un(()=>[zr("Home")]),_:1})]),j("li",qv,[j("a",{href:"#projects",onClick:e[1]||(e[1]=Ur(c=>i.scrollToSection("projects"),["prevent"])),class:"font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base"},"Projetos")]),j("li",zv,[j("a",{href:"#about",onClick:e[2]||(e[2]=Ur(c=>i.scrollToSection("about"),["prevent"])),class:"font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base"},"Sobre")]),j("li",Hv,[Le(o,{to:"/guestbook",class:"font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base"},{default:un(()=>[zr("Guestbook")]),_:1})])])]),Gv],2),s.menuOpen?(Ie(),Oe("div",{key:0,class:"mobile-menu-overlay",onClick:e[10]||(e[10]=(...c)=>i.closeMenu&&i.closeMenu(...c))},[j("div",{class:"mobile-menu-content justify-center text-center align-center",onClick:e[9]||(e[9]=Ur(()=>{},["stop"]))},[j("ul",Kv,[j("li",{onClick:e[3]||(e[3]=(...c)=>i.closeMenu&&i.closeMenu(...c))},[Le(o,{to:"/",class:"font-medium text-white transition-colors duration-300 ease-in-out hover:text-gray-300 text-base"},{default:un(()=>[zr("Home")]),_:1})]),j("li",{onClick:e[5]||(e[5]=(...c)=>i.closeMenu&&i.closeMenu(...c))},[j("a",{href:"#projects",onClick:e[4]||(e[4]=Ur(c=>i.scrollToSection("projects"),["prevent"])),class:"font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base"},"Projetos")]),j("li",{onClick:e[7]||(e[7]=(...c)=>i.closeMenu&&i.closeMenu(...c))},[j("a",{href:"#about",onClick:e[6]||(e[6]=Ur(c=>i.scrollToSection("about"),["prevent"])),class:"font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base"},"Sobre")]),j("li",{onClick:e[8]||(e[8]=(...c)=>i.closeMenu&&i.closeMenu(...c))},[Le(o,{to:"/guestbook",class:"font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base"},{default:un(()=>[zr("Guestbook")]),_:1})])])])])):Xt("",!0)])}const Qv=Ht(Nv,[["render",Wv],["__scopeId","data-v-8815414a"]]),Jv={name:"App",components:{Navbar:Qv,FooterComponent:Dv},computed:{showHeaderFooter(){return this.$route.name!=="ProjectDetails"}}},Xv={id:"app",class:"flex flex-col min-h-screen"};function Yv(t,e,n,r,s,i){const o=Dt("Navbar"),c=Dt("router-view"),l=Dt("FooterComponent");return Ie(),Oe("div",Xv,[i.showHeaderFooter?(Ie(),zn(o,{key:0})):Xt("",!0),Le(aa,{name:"fade",mode:"out-in"},{default:un(()=>[(Ie(),zn(c,{key:t.$route.fullPath}))]),_:1}),i.showHeaderFooter?(Ie(),zn(l,{key:1,class:"mt-auto"})):Xt("",!0)])}const Zv=Ht(Jv,[["render",Yv]]);/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof document<"u";function e2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function Xa(t,e){const n={};for(const r in e){const s=e[r];n[r]=qt(s)?s.map(t):t(s)}return n}const Gs=()=>{},qt=Array.isArray,jp=/#/g,t2=/&/g,n2=/\//g,r2=/=/g,s2=/\?/g,$p=/\+/g,i2=/%5B/g,o2=/%5D/g,qp=/%5E/g,a2=/%60/g,zp=/%7B/g,c2=/%7C/g,Hp=/%7D/g,l2=/%20/g;function wl(t){return encodeURI(""+t).replace(c2,"|").replace(i2,"[").replace(o2,"]")}function u2(t){return wl(t).replace(zp,"{").replace(Hp,"}").replace(qp,"^")}function Rc(t){return wl(t).replace($p,"%2B").replace(l2,"+").replace(jp,"%23").replace(t2,"%26").replace(a2,"`").replace(zp,"{").replace(Hp,"}").replace(qp,"^")}function h2(t){return Rc(t).replace(r2,"%3D")}function d2(t){return wl(t).replace(jp,"%23").replace(s2,"%3F")}function f2(t){return t==null?"":d2(t).replace(n2,"%2F")}function oi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const p2=/\/$/,m2=t=>t.replace(p2,"");function Ya(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=v2(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:oi(o)}}function g2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _2(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zr(e.matched[r],n.matched[s])&&Gp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!y2(t[n],e[n]))return!1;return!0}function y2(t,e){return qt(t)?Jh(t,e):qt(e)?Jh(e,t):t===e}function Jh(t,e){return qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function v2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ai;(function(t){t.pop="pop",t.push="push"})(ai||(ai={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function w2(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),m2(t)}const E2=/^[^#]+#/;function I2(t,e){return t.replace(E2,"#")+e}function T2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const la=()=>({left:window.scrollX,top:window.scrollY});function A2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=T2(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xh(t,e){return(history.state?history.state.position-e:-1)+t}const Sc=new Map;function b2(t,e){Sc.set(t,e)}function R2(t){const e=Sc.get(t);return Sc.delete(t),e}let S2=()=>location.protocol+"//"+location.host;function Kp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Qh(l,"")}return Qh(n,t)+r+s}function C2(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const E=Kp(t,location),k=n.value,x=e.value;let O=0;if(g){if(n.value=E,e.value=g,o&&o===k){o=null;return}O=x?g.position-x.position:0}else r(E);s.forEach(G=>{G(n.value,k,{delta:O,type:ai.pop,direction:O?O>0?Ks.forward:Ks.back:Ks.unknown})})};function l(){o=n.value}function h(g){s.push(g);const E=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return i.push(E),E}function d(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:la()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Yh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?la():null}}function P2(t){const{history:e,location:n}=window,r={value:Kp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:S2()+t+l;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(E){console.error(E),n[d?"replace":"assign"](g)}}function o(l,h){const d=Se({},e.state,Yh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Se({},s.value,e.state,{forward:l,scroll:la()});i(d.current,d,!0);const p=Se({},Yh(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function k2(t){t=w2(t);const e=P2(t),n=C2(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:I2.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function x2(t){return typeof t=="string"||t&&typeof t=="object"}function Wp(t){return typeof t=="string"||typeof t=="symbol"}const Qp=Symbol("");var Zh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zh||(Zh={}));function es(t,e){return Se(new Error,{type:t,[Qp]:!0},e)}function an(t,e){return t instanceof Error&&Qp in t&&(e==null||!!(t.type&e))}const ed="[^/]+?",D2={sensitive:!1,strict:!1,start:!0,end:!0},N2=/[.+*?^${}()[\]/\\]/g;function O2(t,e){const n=Se({},D2,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let E=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(N2,"\\$&"),E+=40;else if(g.type===1){const{value:k,repeatable:x,optional:O,regexp:G}=g;i.push({name:k,repeatable:x,optional:O});const $=G||ed;if($!==ed){E+=10;try{new RegExp(`(${$})`)}catch(ne){throw new Error(`Invalid custom RegExp for param "${k}" (${$}): `+ne.message)}}let U=x?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(U=O&&h.length<2?`(?:/${U})`:"/"+U),O&&(U+="?"),s+=U,E+=20,O&&(E+=-8),x&&(E+=-20),$===".*"&&(E+=-50)}d.push(E)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const E=d[g]||"",k=i[g-1];p[k.name]=E&&k.repeatable?E.split("/"):E}return p}function l(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const E of g)if(E.type===0)d+=E.value;else if(E.type===1){const{value:k,repeatable:x,optional:O}=E,G=k in h?h[k]:"";if(qt(G)&&!x)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const $=qt(G)?G.join("/"):G;if(!$)if(O)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=$}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function V2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Jp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=V2(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(td(r))return 1;if(td(s))return-1}return s.length-r.length}function td(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const M2={type:0,value:""},L2=/[a-zA-Z0-9_]/;function F2(t){if(!t)return[[]];if(t==="/")return[[M2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:L2.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function U2(t,e,n){const r=O2(F2(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function B2(t,e){const n=[],r=new Map;e=sd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,E){const k=!E,x=j2(p);x.aliasOf=E&&E.record;const O=sd(e,p),G=[x];if("alias"in p){const ne=typeof p.alias=="string"?[p.alias]:p.alias;for(const fe of ne)G.push(Se({},x,{components:E?E.record.components:x.components,path:fe,aliasOf:E?E.record:x}))}let $,U;for(const ne of G){const{path:fe}=ne;if(g&&fe[0]!=="/"){const Q=g.record.path,b=Q[Q.length-1]==="/"?"":"/";ne.path=g.record.path+(fe&&b+fe)}if($=U2(ne,g,O),E?E.alias.push($):(U=U||$,U!==$&&U.alias.push($),k&&p.name&&!rd($)&&o(p.name)),Xp($)&&l($),x.children){const Q=x.children;for(let b=0;b<Q.length;b++)i(Q[b],$,E&&E.children[b])}E=E||$}return U?()=>{o(U)}:Gs}function o(p){if(Wp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=z2(p,n);n.splice(g,0,p),p.record.name&&!rd(p)&&r.set(p.record.name,p)}function h(p,g){let E,k={},x,O;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw es(1,{location:p});O=E.record.name,k=Se(nd(g.params,E.keys.filter(U=>!U.optional).concat(E.parent?E.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),p.params&&nd(p.params,E.keys.map(U=>U.name))),x=E.stringify(k)}else if(p.path!=null)x=p.path,E=n.find(U=>U.re.test(x)),E&&(k=E.parse(x),O=E.record.name);else{if(E=g.name?r.get(g.name):n.find(U=>U.re.test(g.path)),!E)throw es(1,{location:p,currentLocation:g});O=E.record.name,k=Se({},g.params,p.params),x=E.stringify(k)}const G=[];let $=E;for(;$;)G.unshift($.record),$=$.parent;return{name:O,path:x,params:k,matched:G,meta:q2(G)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function nd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function j2(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function rd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function q2(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function sd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function z2(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Jp(t,e[i])<0?r=i:n=i+1}const s=H2(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function H2(t){let e=t;for(;e=e.parent;)if(Xp(e)&&Jp(t,e)===0)return e}function Xp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function G2(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($p," "),o=i.indexOf("="),c=oi(o<0?i:i.slice(0,o)),l=o<0?null:oi(i.slice(o+1));if(c in e){let h=e[c];qt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function id(t){let e="";for(let n in t){const r=t[n];if(n=h2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(r)?r.map(i=>i&&Rc(i)):[r&&Rc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function K2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const W2=Symbol(""),od=Symbol(""),El=Symbol(""),Yp=Symbol(""),Cc=Symbol("");function Vs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(es(4,{from:n,to:e})):g instanceof Error?l(g):x2(g)?l(es(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Za(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Q2(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Mn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=e2(d)?d.default:d;o.components[c]=p;const E=(p.__vccOpts||p)[e];return E&&Mn(E,n,r,o,c,s)()}))}}return i}function Q2(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ad(t){const e=gn(El),n=gn(Yp),r=Ft(()=>{const l=Kr(t.to);return e.resolve(l)}),s=Ft(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Zr.bind(null,d));if(g>-1)return g;const E=cd(l[h-2]);return h>1&&cd(d)===E&&p[p.length-1].path!==E?p.findIndex(Zr.bind(null,l[h-2])):g}),i=Ft(()=>s.value>-1&&Z2(n.params,r.value.params)),o=Ft(()=>s.value>-1&&s.value===n.matched.length-1&&Gp(n.params,r.value.params));function c(l={}){return Y2(l)?e[Kr(t.replace)?"replace":"push"](Kr(t.to)).catch(Gs):Promise.resolve()}return{route:r,href:Ft(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const J2=mp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ad,setup(t,{slots:e}){const n=Yo(ad(t)),{options:r}=gn(El),s=Ft(()=>({[ld(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ld(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:yl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),X2=J2;function Y2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Z2(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function cd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ld=(t,e,n)=>t??e??n,e1=mp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=gn(Cc),s=Ft(()=>t.route||r.value),i=gn(od,0),o=Ft(()=>{let h=Kr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=Ft(()=>s.value.matched[o.value]);lo(od,Ft(()=>o.value+1)),lo(W2,c),lo(Cc,s);const l=A_();return uo(()=>[l.value,c.value,t.name],([h,d,p],[g,E,k])=>{d&&(d.instances[p]=h,E&&E!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=E.leaveGuards),d.updateGuards.size||(d.updateGuards=E.updateGuards))),h&&d&&(!E||!Zr(d,E)||!g)&&(d.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return ud(n.default,{Component:g,route:h});const E=p.props[d],k=E?E===!0?h.params:typeof E=="function"?E(h):E:null,O=yl(g,Se({},k,e,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return ud(n.default,{Component:O,route:h})||O}}});function ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const t1=e1;function n1(t){const e=B2(t.routes,t),n=t.parseQuery||G2,r=t.stringifyQuery||id,s=t.history,i=Vs(),o=Vs(),c=Vs(),l=b_(xn);let h=xn;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Xa.bind(null,N=>""+N),p=Xa.bind(null,f2),g=Xa.bind(null,oi);function E(N,X){let W,Z;return Wp(N)?(W=e.getRecordMatcher(N),Z=X):Z=N,e.addRoute(Z,W)}function k(N){const X=e.getRecordMatcher(N);X&&e.removeRoute(X)}function x(){return e.getRoutes().map(N=>N.record)}function O(N){return!!e.getRecordMatcher(N)}function G(N,X){if(X=Se({},X||l.value),typeof N=="string"){const I=Ya(n,N,X.path),C=e.resolve({path:I.path},X),V=s.createHref(I.fullPath);return Se(I,C,{params:g(C.params),hash:oi(I.hash),redirectedFrom:void 0,href:V})}let W;if(N.path!=null)W=Se({},N,{path:Ya(n,N.path,X.path).path});else{const I=Se({},N.params);for(const C in I)I[C]==null&&delete I[C];W=Se({},N,{params:p(I)}),X.params=p(X.params)}const Z=e.resolve(W,X),ye=N.hash||"";Z.params=d(g(Z.params));const Pe=g2(r,Se({},N,{hash:u2(ye),path:Z.path})),_=s.createHref(Pe);return Se({fullPath:Pe,hash:ye,query:r===id?K2(N.query):N.query||{}},Z,{redirectedFrom:void 0,href:_})}function $(N){return typeof N=="string"?Ya(n,N,l.value.path):Se({},N)}function U(N,X){if(h!==N)return es(8,{from:X,to:N})}function ne(N){return b(N)}function fe(N){return ne(Se($(N),{replace:!0}))}function Q(N){const X=N.matched[N.matched.length-1];if(X&&X.redirect){const{redirect:W}=X;let Z=typeof W=="function"?W(N):W;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=$(Z):{path:Z},Z.params={}),Se({query:N.query,hash:N.hash,params:Z.path!=null?{}:N.params},Z)}}function b(N,X){const W=h=G(N),Z=l.value,ye=N.state,Pe=N.force,_=N.replace===!0,I=Q(W);if(I)return b(Se($(I),{state:typeof I=="object"?Se({},ye,I.state):ye,force:Pe,replace:_}),X||W);const C=W;C.redirectedFrom=X;let V;return!Pe&&_2(r,Z,W)&&(V=es(16,{to:C,from:Z}),Rt(Z,Z,!0,!1)),(V?Promise.resolve(V):T(C,Z)).catch(D=>an(D)?an(D,2)?D:Vt(D):pe(D,C,Z)).then(D=>{if(D){if(an(D,2))return b(Se({replace:_},$(D.to),{state:typeof D.to=="object"?Se({},ye,D.to.state):ye,force:Pe}),X||C)}else D=A(C,Z,!0,_,ye);return R(C,Z,D),D})}function v(N,X){const W=U(N,X);return W?Promise.reject(W):Promise.resolve()}function y(N){const X=Tn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(N):N()}function T(N,X){let W;const[Z,ye,Pe]=r1(N,X);W=Za(Z.reverse(),"beforeRouteLeave",N,X);for(const I of Z)I.leaveGuards.forEach(C=>{W.push(Mn(C,N,X))});const _=v.bind(null,N,X);return W.push(_),Je(W).then(()=>{W=[];for(const I of i.list())W.push(Mn(I,N,X));return W.push(_),Je(W)}).then(()=>{W=Za(ye,"beforeRouteUpdate",N,X);for(const I of ye)I.updateGuards.forEach(C=>{W.push(Mn(C,N,X))});return W.push(_),Je(W)}).then(()=>{W=[];for(const I of Pe)if(I.beforeEnter)if(qt(I.beforeEnter))for(const C of I.beforeEnter)W.push(Mn(C,N,X));else W.push(Mn(I.beforeEnter,N,X));return W.push(_),Je(W)}).then(()=>(N.matched.forEach(I=>I.enterCallbacks={}),W=Za(Pe,"beforeRouteEnter",N,X,y),W.push(_),Je(W))).then(()=>{W=[];for(const I of o.list())W.push(Mn(I,N,X));return W.push(_),Je(W)}).catch(I=>an(I,8)?I:Promise.reject(I))}function R(N,X,W){c.list().forEach(Z=>y(()=>Z(N,X,W)))}function A(N,X,W,Z,ye){const Pe=U(N,X);if(Pe)return Pe;const _=X===xn,I=Br?history.state:{};W&&(Z||_?s.replace(N.fullPath,Se({scroll:_&&I&&I.scroll},ye)):s.push(N.fullPath,ye)),l.value=N,Rt(N,X,W,_),Vt()}let w;function Ce(){w||(w=s.listen((N,X,W)=>{if(!Gt.listening)return;const Z=G(N),ye=Q(Z);if(ye){b(Se(ye,{replace:!0}),Z).catch(Gs);return}h=Z;const Pe=l.value;Br&&b2(Xh(Pe.fullPath,W.delta),la()),T(Z,Pe).catch(_=>an(_,12)?_:an(_,2)?(b(_.to,Z).then(I=>{an(I,20)&&!W.delta&&W.type===ai.pop&&s.go(-1,!1)}).catch(Gs),Promise.reject()):(W.delta&&s.go(-W.delta,!1),pe(_,Z,Pe))).then(_=>{_=_||A(Z,Pe,!1),_&&(W.delta&&!an(_,8)?s.go(-W.delta,!1):W.type===ai.pop&&an(_,20)&&s.go(-1,!1)),R(Z,Pe,_)}).catch(Gs)}))}let Ye=Vs(),Fe=Vs(),_e;function pe(N,X,W){Vt(N);const Z=Fe.list();return Z.length?Z.forEach(ye=>ye(N,X,W)):console.error(N),Promise.reject(N)}function wt(){return _e&&l.value!==xn?Promise.resolve():new Promise((N,X)=>{Ye.add([N,X])})}function Vt(N){return _e||(_e=!N,Ce(),Ye.list().forEach(([X,W])=>N?W(N):X()),Ye.reset()),N}function Rt(N,X,W,Z){const{scrollBehavior:ye}=t;if(!Br||!ye)return Promise.resolve();const Pe=!W&&R2(Xh(N.fullPath,0))||(Z||!W)&&history.state&&history.state.scroll||null;return op().then(()=>ye(N,X,Pe)).then(_=>_&&A2(_)).catch(_=>pe(_,N,X))}const Ue=N=>s.go(N);let Be;const Tn=new Set,Gt={currentRoute:l,listening:!0,addRoute:E,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:x,resolve:G,options:t,push:ne,replace:fe,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Fe.add,isReady:wt,install(N){const X=this;N.component("RouterLink",X2),N.component("RouterView",t1),N.config.globalProperties.$router=X,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Kr(l)}),Br&&!Be&&l.value===xn&&(Be=!0,ne(s.location).catch(ye=>{}));const W={};for(const ye in xn)Object.defineProperty(W,ye,{get:()=>l.value[ye],enumerable:!0});N.provide(El,X),N.provide(Yp,Yf(W)),N.provide(Cc,l);const Z=N.unmount;Tn.add(N),N.unmount=function(){Tn.delete(N),Tn.size<1&&(h=xn,w&&w(),w=null,l.value=xn,Be=!1,_e=!1),Z()}}};function Je(N){return N.reduce((X,W)=>X.then(()=>y(W)),Promise.resolve())}return Gt}function r1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Zr(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Zr(h,l))||s.push(l))}return[n,r,s]}const s1="/assets/_ifmg-BHNCwgFv.png",i1="/assets/cortai-logo-COYQGMyw.png",o1="/assets/cdm-logo-5Becqtpq.png",a1="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='50px'%20height='50px'%3e%3cg%20fill='%23f2f2f2'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M7.91,9.32l0.09,0.09v25.89l-5.09,-5.09c-1.81,-1.81%20-2.32,-4.59%20-1.27,-6.92zM35.3,8h-25.89l-0.09,-0.09l13.97,-6.27c2.33,-1.05%205.11,-0.54%206.92,1.27zM37.59,39h-25.88l-0.54,-0.54c-0.75,-0.76%20-1.17,-1.76%20-1.17,-2.83v-24.22zM13.71,41h25.29v6c0,0.55%20-0.45,1%20-1,1h-16.9c-0.27,0%20-0.52,-0.11%20-0.71,-0.29l-4.7,-4.7l0.02,-0.02zM48,21.1v16.9c0,0.55%20-0.45,1%20-1,1h-6.58l-29.01,-29h24.22c1.07,0%202.07,0.42%202.83,1.17l4.53,4.54l0.02,-0.02l4.7,4.7c0.18,0.19%200.29,0.44%200.29,0.71z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",c1="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='50px'%20height='50px'%3e%3cg%20fill='%23f2f2f2'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M26.707,3.293l-21,21c-0.391,0.391%20-0.391,1.024%200,1.414l5.586,5.586c0.391,0.391%201.024,0.391%201.414,0l26.586,-26.586c0.63,-0.63%200.184,-1.707%20-0.707,-1.707h-11.172c-0.265,0%20-0.519,0.105%20-0.707,0.293zM39.293,24.707l-17.293,17.293l-6.293,-6.293c-0.391,-0.391%20-0.391,-1.024%200,-1.414l11,-11c0.188,-0.188%200.442,-0.293%200.707,-0.293h11.172c0.891,0%201.337,1.077%200.707,1.707zM39.293,45.293l-7.293,-7.293l-10,4l4.707,4.707c0.188,0.188%200.442,0.293%200.707,0.293h11.172c0.891,0%201.337,-1.077%200.707,-1.707z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",l1="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='48px'%20height='48px'%3e%3cg%20fill='%23f2f2f2'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(10.66667,10.66667)'%3e%3cpath%20d='M3.125,1c-0.906,0%20-1.62194,0.4805%20-1.96094,1.3125c-0.107,0.257%20-0.16111,0.52955%20-0.16211,0.81055c-0.001,0.931%200.59898,1.68667%200.95898,2.13867c0.063,0.079%200.11969,0.14938%200.17969,0.23438l0.16211,0.21484c0.161,0.211%200.34434,0.45031%200.40234,0.57031c0.019,0.055%200.04412,0.15144%200.07813,0.27344c0.157,0.565%200.45002,1.61506%200.91602,2.41406c0.188,0.322%200.45258,0.72672%200.64258,1.01172c-0.127,0.636%20-0.3418,1.80753%20-0.3418,2.51953c0,1.25%200.25922,2.25388%200.82422,3.17188c0.209,0.328%200.84678,1.32813%201.92578,1.32813c0.383,0%201.01941,-0.14961%201.19141,-1.09961c0.765,0.987%202.05859,2.22461%204.05859,3.09961c0,0%20-3.7492,-4.37456%20-4.4082,-7.10156c0,0%20-0.71717,0.72694%20-1.32617,2.21094c-0.182,-0.458%20-0.26562,-0.97438%20-0.26562,-1.60937c0,-0.627%200.27581,-2.02862%200.38281,-2.51562l0.09375,-0.42383l-0.24609,-0.35742c-0.004,-0.007%20-0.50773,-0.73423%20-0.80273,-1.24023c-0.336,-0.576%20-0.5838,-1.46731%20-0.7168,-1.94531c-0.065,-0.233%20-0.11606,-0.40163%20-0.16406,-0.51562c-0.175,-0.379%20-0.43125,-0.71186%20-0.65625,-1.00586l-0.125,-0.16602c-0.063,-0.091%20-0.14623,-0.19645%20-0.24023,-0.31445c-0.183,-0.23%20-0.52367,-0.65859%20-0.51367,-0.93359l0.11133,-0.07812l0.00195,-0.00391c0.795,0%201.81908,0.56434%202.20508,0.77734c0.126,0.069%200.21858,0.11667%200.26758,0.13867l0.17383,0.07617l0.3418,0.01172c0.447,0.01%201.80563,0.04178%202.76562,0.42578c1.751,0.7%202.71912,1.40069%203.70312,2.67969c2.324,3.022%203.18145,6.93561%203.18945,6.97461l0.125,0.56445l0.54688,0.17773c0.019,0.007%201.54956,0.51847%202.97656,1.85547c-1.795,0.444%20-2.41992,1.31836%20-2.41992,1.31836c0,0%200.476,0.928%202.75,2.375c1.375,0.875%202.125,1.5%203.25,2.625c0,0%20-1.12431,-2.50019%20-2.69531,-4.49219c1.196,-0.383%202.66602,-0.58203%202.66602,-0.58203l-0.91016,-1.26172c-1.498,-2.077%20-3.50689,-3.1252%20-4.46289,-3.5332c-0.332,-1.266%20-1.33469,-4.51623%20-3.42969,-7.24023c-1.199,-1.559%20-2.47487,-2.49131%20-4.54688,-3.32031c-1.227,-0.49%20-2.70238,-0.54845%20-3.35938,-0.56445c-0.575,-0.316%20-1.85272,-1.00586%20-3.13672,-1.00586zM7.1875,5c0,0%20-0.4375,0%20-0.9375,0.125l1.375,1.87305c0.375,-0.498%200.375,-1.08008%200.375,-1.08008c0,0%20-0.2495,-0.66797%20-0.8125,-0.91797z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Zp=[{title:"Cortaí",imageUrl:i1,link:"https://www.instagram.com/appcortai/",backgroundColor:"#F17228",backgroundHeight:"h-26",description:"Aplicativo completo para o gerenciamento e agendamento de Barbeiros e Salões de beleza.Todo o aplicativo foi desenvolvido utilizando o Flutter como Framework principal para o Frontend da aplicação no entando, no backend foi utilizado em sua maior parte Php/Laravel.",stacks:["Dart/Flutter","PHP/Laravel","MySQL","Firebase","Git"]},{title:"Autohouse",imageUrl:"",link:"",backgroundColor:"#1848A0",description:"Aplicativo para o gerenciamento de de cargas remotas para automação residencial, desenvolvido durante um projeto de pesquisa, as principais tecnologias utilizadas foram o Dart/Flutter e Firebase para o gerenciamento de dados e notificações.",stacks:["Dart/Flutter","Firebase","Git"]},{title:"+IFMG",imageUrl:s1,link:"https://play.google.com/store/apps/details?id=com.ifmg.maisifmg&hl=pt_BR&gl=US",backgroundColor:"#1C98ED",backgroundHeight:"h-8",description:"Desenvolvi uma aplicação móvel para exibição de notícias da instituição e acesso a programas de cursos online, utilizando Dart/Flutter e Google Firebase, integrando recursos de autenticação e banco de dados em tempo real.",stacks:["Dart/Flutter","Firebase","Git"]},{title:"Centro de Memória",imageUrl:o1,link:"https://memoria.ifmg.edu.br",backgroundColor:"#242018",backgroundHeight:"h-16",description:"Desenvolvi um site focado em apresentar a história da Instituição IFMG, utilizando Wordpress para integrar conteúdos em vídeo, imagens e texto, oferecendo uma plataforma rica e interativa para os visitantes.",stacks:["Wordpress","PHP","MySQL","Git"]}],u1={props:{id:{type:String,required:!0}},computed:{project(){return Zp[parseInt(this.id)]}},components:{SocialLinks:vl}},em=t=>(Sr("data-v-ba6ce422"),t=t(),Cr(),t),h1=em(()=>j("a",{class:"btn btn-background-circle"},[j("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[j("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})])],-1)),d1={class:"min-h-screen pb-0 p-10 grid md:grid-cols-2 justify-center items-center"},f1={class:"flex flex-col justify-center text-center md:text-start items-center md:items-start"},p1=["href"],m1=["src"],g1={key:0,class:"font-light text-5xl text-white text-center justify-between mb-10"},_1={class:"ml-4"},y1=em(()=>j("h2",{class:"text-md font-lighter"},"Tecnologias utilizadas:",-1)),v1={class:"flex flex-wrap gap-1"},w1={class:"min-h-screen-2 pt-28 p-20 align-end justify-between text-justify"},E1={class:"break-words"};function I1(t,e,n,r,s,i){const o=Dt("router-link");return Ie(),zn(aa,{name:"expand"},{default:un(()=>[j("div",{style:hs({backgroundColor:i.project.backgroundColor})},[j("div",null,[Le(o,{to:"/",class:"text-black"},{default:un(()=>[h1]),_:1})]),j("div",d1,[j("div",f1,[j("a",{href:i.project.link,target:"_blank"},[i.project.imageUrl?(Ie(),Oe("img",{key:0,src:i.project.imageUrl,alt:"Project Image",class:"mt-4 justify-between imagem h-2/5 m-3"},null,8,m1)):Xt("",!0)],8,p1),i.project.imageUrl?Xt("",!0):(Ie(),Oe("span",g1,jt(i.project.title),1)),j("div",_1,[y1,j("div",v1,[(Ie(!0),Oe(mt,null,yi(i.project.stacks,(c,l)=>(Ie(),Oe("span",{key:l,class:"stack-name text-white px-2 py-1 rounded"},jt(c),1))),128))])])]),j("div",w1,[j("p",E1,jt(i.project.description),1)])])],4)]),_:1})}const T1=Ht(u1,[["render",I1],["__scopeId","data-v-ba6ce422"]]);var hd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},A1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,E=h&63;l||(E=64,o||(g=64)),r.push(n[d],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):A1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new b1;const g=i<<2|c>>4;if(r.push(g),h!==64){const E=c<<4&240|h>>2;if(r.push(E),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class b1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const R1=function(t){const e=tm(t);return nm.encodeByteArray(e,!0)},Po=function(t){return R1(t).replace(/\./g,"")},rm=function(t){try{return nm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=()=>S1().__FIREBASE_DEFAULTS__,P1=()=>{if(typeof process>"u"||typeof hd>"u")return;const t=hd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},k1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rm(t[1]);return e&&JSON.parse(e)},ua=()=>{try{return C1()||P1()||k1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sm=t=>{var e,n;return(n=(e=ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},x1=t=>{const e=sm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},im=()=>{var t;return(t=ua())===null||t===void 0?void 0:t.config},om=t=>{var e;return(e=ua())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Po(JSON.stringify(n)),Po(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function O1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function V1(){var t;const e=(t=ua())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function M1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function L1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function F1(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function U1(){return!V1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function B1(){try{return typeof indexedDB=="object"}catch{return!1}}function j1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$1,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?q1(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new In(s,c,r)}}function q1(t,e){return t.replace(z1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const z1=/\{\$([^}]+)}/g;function H1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(dd(i)&&dd(o)){if(!ko(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function G1(t,e){const n=new K1(t,e);return n.subscribe.bind(n)}class K1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");W1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ec),s.error===void 0&&(s.error=ec),s.complete===void 0&&(s.complete=ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new D1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X1(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J1(t){return t===dr?void 0:t}function X1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Q1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Z1={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},ew=ge.INFO,tw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},nw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Il{constructor(e){this.name=e,this._logLevel=ew,this._logHandler=nw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const rw=(t,e)=>e.some(n=>t instanceof n);let fd,pd;function sw(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iw(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const am=new WeakMap,Pc=new WeakMap,cm=new WeakMap,tc=new WeakMap,Tl=new WeakMap;function ow(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&am.set(n,t)}).catch(()=>{}),Tl.set(e,t),e}function aw(t){if(Pc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cw(t){kc=t(kc)}function lw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nc(this),e,...n);return cm.set(r,e.sort?e.sort():[e]),Hn(r)}:iw().includes(t)?function(...e){return t.apply(nc(this),e),Hn(am.get(this))}:function(...e){return Hn(t.apply(nc(this),e))}}function uw(t){return typeof t=="function"?lw(t):(t instanceof IDBTransaction&&aw(t),rw(t,sw())?new Proxy(t,kc):t)}function Hn(t){if(t instanceof IDBRequest)return ow(t);if(tc.has(t))return tc.get(t);const e=uw(t);return e!==t&&(tc.set(t,e),Tl.set(e,t)),e}const nc=t=>Tl.get(t);function hw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const dw=["get","getKey","getAll","getAllKeys","count"],fw=["put","add","delete","clear"],rc=new Map;function md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return rc.set(e,i),i}cw(t=>({...t,get:(e,n,r)=>md(e,n)||t.get(e,n,r),has:(e,n)=>!!md(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",gd="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Il("@firebase/app"),gw="@firebase/app-compat",_w="@firebase/analytics-compat",yw="@firebase/analytics",vw="@firebase/app-check-compat",ww="@firebase/app-check",Ew="@firebase/auth",Iw="@firebase/auth-compat",Tw="@firebase/database",Aw="@firebase/database-compat",bw="@firebase/functions",Rw="@firebase/functions-compat",Sw="@firebase/installations",Cw="@firebase/installations-compat",Pw="@firebase/messaging",kw="@firebase/messaging-compat",xw="@firebase/performance",Dw="@firebase/performance-compat",Nw="@firebase/remote-config",Ow="@firebase/remote-config-compat",Vw="@firebase/storage",Mw="@firebase/storage-compat",Lw="@firebase/firestore",Fw="@firebase/vertexai-preview",Uw="@firebase/firestore-compat",Bw="firebase",jw="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="[DEFAULT]",$w={[xc]:"fire-core",[gw]:"fire-core-compat",[yw]:"fire-analytics",[_w]:"fire-analytics-compat",[ww]:"fire-app-check",[vw]:"fire-app-check-compat",[Ew]:"fire-auth",[Iw]:"fire-auth-compat",[Tw]:"fire-rtdb",[Aw]:"fire-rtdb-compat",[bw]:"fire-fn",[Rw]:"fire-fn-compat",[Sw]:"fire-iid",[Cw]:"fire-iid-compat",[Pw]:"fire-fcm",[kw]:"fire-fcm-compat",[xw]:"fire-perf",[Dw]:"fire-perf-compat",[Nw]:"fire-rc",[Ow]:"fire-rc-compat",[Vw]:"fire-gcs",[Mw]:"fire-gcs-compat",[Lw]:"fire-fst",[Uw]:"fire-fst-compat",[Fw]:"fire-vertex","fire-js":"fire-js",[Bw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map,qw=new Map,Nc=new Map;function _d(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Nc.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,t);for(const n of xo.values())_d(n,t);for(const n of qw.values())_d(n,t);return!0}function Al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new wi("app","Firebase",zw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=jw;function lm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(n||(n=im()),!n)throw Gn.create("no-options");const i=xo.get(s);if(i){if(ko(n,i.options)&&ko(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const o=new Y1(s);for(const l of Nc.values())o.addComponent(l);const c=new Hw(n,r,o);return xo.set(s,c),c}function um(t=Dc){const e=xo.get(t);if(!e&&t===Dc&&im())return lm();if(!e)throw Gn.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let s=(r=$w[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(c.join(" "));return}ts(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="firebase-heartbeat-database",Kw=1,ci="firebase-heartbeat-store";let sc=null;function hm(){return sc||(sc=hw(Gw,Kw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),sc}async function Ww(t){try{const n=(await hm()).transaction(ci),r=await n.objectStore(ci).get(dm(t));return await n.done,r}catch(e){if(e instanceof In)Ir.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function yd(t,e){try{const r=(await hm()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,dm(t)),await r.done}catch(n){if(n instanceof In)Ir.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function dm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1024,Jw=30*24*60*60*1e3;class Xw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Jw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:r,unsentEntries:s}=Yw(this._heartbeatsCache.heartbeats),i=Po(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vd(){return new Date().toISOString().substring(0,10)}function Yw(t,e=Qw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B1()?j1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ww(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wd(t){return Po(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t){ts(new Er("platform-logger",e=>new pw(e),"PRIVATE")),ts(new Er("heartbeat",e=>new Xw(e),"PRIVATE")),Kn(xc,gd,t),Kn(xc,gd,"esm2017"),Kn("fire-js","")}eE("");var tE="firebase",nE="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(tE,nE,"app");function bl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rE=fm,pm=new wi("auth","Firebase",fm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Il("@firebase/auth");function sE(t,...e){Do.logLevel<=ge.WARN&&Do.warn(`Auth (${ds}): ${t}`,...e)}function mo(t,...e){Do.logLevel<=ge.ERROR&&Do.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Sl(t,...e)}function $t(t,...e){return Sl(t,...e)}function Rl(t,e,n){const r=Object.assign(Object.assign({},rE()),{[e]:n});return new wi("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return Rl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),Rl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pm.create(t,...e)}function ce(t,e,...n){if(!t)throw Sl(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function yn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oE(){return Ed()==="http:"||Ed()==="https:"}function Ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oE()||M1()||"connection"in navigator)?navigator.onLine:!0}function cE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=O1()||L1()}get(){return aE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=new Ii(3e4,6e4);function Pl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fs(t,e,n,r,s={}){return gm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ei(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mm.fetch()(_m(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function gm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lE),e);try{const s=new dE(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yi(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Rl(t,d,h);nn(t,d)}}catch(s){if(s instanceof In)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function hE(t,e,n,r,s={}){const i=await fs(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function _m(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Cl(t.config,s):`${t.config.apiScheme}://${s}`}class dE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),uE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$t(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function ym(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pE(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),s=kl(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ws(ic(s.auth_time)),issuedAtTime:Ws(ic(s.iat)),expirationTime:Ws(ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ic(t){return Number(t)*1e3}function kl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=rm(n);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Id(t){const e=kl(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&mE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t){var e;const n=t.auth,r=await t.getIdToken(),s=await li(t,ym(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vm(i.providerUserInfo):[],c=yE(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function _E(t){const e=Ot(t);await No(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yE(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function vm(t){return t.map(e=>{var{providerId:n}=e,r=bl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e){const n=await gm(t,{},async()=>{const r=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=_m(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",mm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wE(t,e){return fs(t,"POST","/v2/accounts:revokeToken",Pl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Id(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vE(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qr;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=bl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pE(this,e)}reload(){return _E(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await No(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await li(this,fE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,G=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:ne,isAnonymous:fe,providerData:Q,stsTokenManager:b}=n;ce(U&&b,e,"internal-error");const v=Qr.fromJSON(this.name,b);ce(typeof U=="string",e,"internal-error"),Dn(p,e.name),Dn(g,e.name),ce(typeof ne=="boolean",e,"internal-error"),ce(typeof fe=="boolean",e,"internal-error"),Dn(E,e.name),Dn(k,e.name),Dn(x,e.name),Dn(O,e.name),Dn(G,e.name),Dn($,e.name);const y=new fn({uid:U,auth:e,email:g,emailVerified:ne,displayName:p,isAnonymous:fe,photoURL:k,phoneNumber:E,tenantId:x,stsTokenManager:v,createdAt:G,lastLoginAt:$});return Q&&Array.isArray(Q)&&(y.providerData=Q.map(T=>Object.assign({},T))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qr;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await No(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?vm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Qr;c.updateFromIdToken(r);const l=new fn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map;function pn(t){yn(t instanceof Function,"Expected a class definition");let e=Td.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Td.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wm.type="NONE";const Ad=wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=go(this.userKey,s.apiKey,i),this.fullPersistenceKey=go("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(pn(Ad),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||pn(Ad);const o=go(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=fn._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Jr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Em(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bm(e))return"Blackberry";if(Rm(e))return"Webos";if(xl(e))return"Safari";if((e.includes("chrome/")||Im(e))&&!e.includes("edge/"))return"Chrome";if(Am(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Em(t=st()){return/firefox\//i.test(t)}function xl(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Im(t=st()){return/crios\//i.test(t)}function Tm(t=st()){return/iemobile/i.test(t)}function Am(t=st()){return/android/i.test(t)}function bm(t=st()){return/blackberry/i.test(t)}function Rm(t=st()){return/webos/i.test(t)}function ha(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EE(t=st()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IE(){return F1()&&document.documentMode===10}function Sm(t=st()){return ha(t)||Am(t)||Rm(t)||bm(t)||/windows phone/i.test(t)||Tm(t)}function TE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e=[]){let n;switch(t){case"Browser":n=bd(st());break;case"Worker":n=`${bd(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(t,e={}){return fs(t,"GET","/v2/passwordPolicy",Pl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=6;class SE{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:RE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rd(this),this.idTokenSubscription=new Rd(this),this.beforeStateQueue=new AE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ym(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await No(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(vr(this));const n=e?Ot(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bE(this),n=new SE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function da(t){return Ot(t)}class Rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=G1(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PE(t){Dl=t}function kE(t){return Dl.loadJS(t)}function xE(){return Dl.gapiScript}function DE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e){const n=Al(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ko(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function OE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VE(t,e,n){const r=da(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Pm(e),{host:o,port:c}=ME(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),LE()}function Pm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ME(t){const e=Pm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sd(o)}}}function Sd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t,e){return hE(t,"POST","/v1/accounts:signInWithIdp",Pl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="http://localhost";class Tr extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=bl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Tr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xr(e,n)}buildRequest(){const e={requestUri:FE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ei(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ti{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ti{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ti{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),o=Cd(r);return new ns({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Cd(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Cd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends In{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Oo(e,n,r,s)}}function xm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(t,i,e,r):i})}async function UE(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(t,e,n=!1){const{auth:r}=t;if(hn(r.app))return Promise.reject(vr(r));const s="reauthenticate";try{const i=await li(t,xm(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=kl(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),ns._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e,n=!1){if(hn(t.app))return Promise.reject(vr(t));const r="signIn",s=await xm(t,r,e),i=await ns._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function $E(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function qE(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}const Vo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(){const t=st();return xl(t)||ha(t)}const HE=1e3,GE=10;class Nm extends Dm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zE()&&TE(),this.fallbackToPolling=Sm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GE):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nm.type="LOCAL";const KE=Nm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om extends Dm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Om.type="SESSION";const Vm=Om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await WE(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Ol("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function JE(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function XE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZE(){return Mm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="firebaseLocalStorageDb",eI=1,Mo="firebaseLocalStorage",Fm="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pa(t,e){return t.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function tI(){const t=indexedDB.deleteDatabase(Lm);return new Ai(t).toPromise()}function Mc(){const t=indexedDB.open(Lm,eI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mo,{keyPath:Fm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mo)?e(r):(r.close(),await tI(),e(await Mc()))})})}async function Pd(t,e,n){const r=pa(t,!0).put({[Fm]:e,value:n});return new Ai(r).toPromise()}async function nI(t,e){const n=pa(t,!1).get(e),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function kd(t,e){const n=pa(t,!0).delete(e);return new Ai(n).toPromise()}const rI=800,sI=3;class Um{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(ZE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XE(),!this.activeServiceWorker)return;this.sender=new QE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await Pd(e,Vo,"1"),await kd(e,Vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pa(s,!1).getAll();return new Ai(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Um.type="LOCAL";const iI=Um;new Ii(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t,e){return e?pn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oI(t){return jE(t.auth,new Vl(t),t.bypassAuthState)}function aI(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),BE(n,new Vl(t),t.bypassAuthState)}async function cI(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),UE(n,new Vl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oI;case"linkViaPopup":case"linkViaRedirect":return cI;case"reauthViaPopup":case"reauthViaRedirect":return aI;default:nn(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new Ii(2e3,1e4);async function uI(t,e,n){if(hn(t.app))return Promise.reject($t(t,"operation-not-supported-in-this-environment"));const r=da(t);iE(t,e,Nl);const s=Bm(r,n);return new mr(r,"signInViaPopup",e,s).executeNotNull()}class mr extends jm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lI.get())};e()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="pendingRedirect",_o=new Map;class dI extends jm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await fI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fI(t,e){const n=gI(e),r=mI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pI(t,e){_o.set(t._key(),e)}function mI(t){return pn(t._redirectPersistence)}function gI(t){return go(hI,t.config.apiKey,t.name)}async function _I(t,e,n=!1){if(hn(t.app))return Promise.reject(vr(t));const r=da(t),s=Bm(r,e),o=await new dI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=10*60*1e3;class vI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$m(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($t(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yI&&this.cachedEventUids.clear(),this.cachedEventUids.has(xd(e))}saveEventToCache(e){this.cachedEventUids.add(xd(e)),this.lastProcessedEventTime=Date.now()}}function xd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $m({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $m(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TI=/^https?/;async function AI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EI(t);for(const n of e)try{if(bI(n))return}catch{}nn(t,"unauthorized-domain")}function bI(t){const e=Oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TI.test(n))return!1;if(II.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Ii(3e4,6e4);function Dd(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SI(t){return new Promise((e,n)=>{var r,s,i;function o(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n($t(t,"network-request-failed"))},timeout:RI.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const c=DE("iframefcb");return Yt()[c]=()=>{gapi.load?o():n($t(t,"network-request-failed"))},kE(`${xE()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw yo=null,e})}let yo=null;function CI(t){return yo=yo||SI(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Ii(5e3,15e3),kI="__/auth/iframe",xI="emulator/auth/iframe",DI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OI(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cl(e,xI):`https://${t.config.authDomain}/${kI}`,r={apiKey:e.apiKey,appName:t.name,v:ds},s=NI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ei(r).slice(1)}`}async function VI(t){const e=await CI(t),n=Yt().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:OI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$t(t,"network-request-failed"),c=Yt().setTimeout(()=>{i(o)},PI.get());function l(){Yt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,FI=600,UI="_blank",BI="http://localhost";class Nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(t,e,n,r=LI,s=FI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},MI),{width:r.toString(),height:s.toString(),top:i,left:o}),h=st().toLowerCase();n&&(c=Im(h)?UI:n),Em(h)&&(e=e||BI,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[E,k])=>`${g}${E}=${k},`,"");if(EE(h)&&c!=="_self")return $I(e||"",c),new Nd(null);const p=window.open(e||"",c,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Nd(p)}function $I(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="__/auth/handler",zI="emulator/auth/handler",HI=encodeURIComponent("fac");async function Od(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:s};if(e instanceof Nl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",H1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ti){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${HI}=${encodeURIComponent(l)}`:"";return`${GI(t)}?${Ei(c).slice(1)}${h}`}function GI({config:t}){return t.emulator?Cl(t,zI):`https://${t.authDomain}/${qI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class KI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vm,this._completeRedirectFn=_I,this._overrideRedirectResult=pI}async _openPopup(e,n,r,s){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Od(e,n,r,Oc(),s);return jI(e,o,Ol())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Od(e,n,r,Oc(),s);return JE(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VI(e),r=new vI(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oc];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sm()||xl()||ha()}}const WI=KI;var Vd="@firebase/auth",Md="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XI(t){ts(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cm(t)},h=new CE(r,s,i,l);return OE(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Er("auth-internal",e=>{const n=da(e.getProvider("auth").getImmediate());return(r=>new QI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Vd,Md,JI(t)),Kn(Vd,Md,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=5*60,ZI=om("authIdTokenMaxAge")||YI;let Ld=null;const eT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZI)return;const s=n==null?void 0:n.token;Ld!==s&&(Ld=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tT(t=um()){const e=Al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NE(t,{popupRedirectResolver:WI,persistence:[iI,KE,Vm]}),r=om("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=eT(i.toString());qE(n,o,()=>o(n.currentUser)),$E(n,c=>o(c))}}const s=sm("auth");return s&&VE(n,`http://${s}`),n}function nT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}PE({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$t("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XI("Browser");var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,qm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(T,R,A){for(var w=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)w[Ce-2]=arguments[Ce];return v.prototype[R].apply(T,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);var T=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)T[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)T[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],R=b.g[2];var A=b.g[3],w=v+(A^y&(R^A))+T[0]+3614090360&4294967295;v=y+(w<<7&4294967295|w>>>25),w=A+(R^v&(y^R))+T[1]+3905402710&4294967295,A=v+(w<<12&4294967295|w>>>20),w=R+(y^A&(v^y))+T[2]+606105819&4294967295,R=A+(w<<17&4294967295|w>>>15),w=y+(v^R&(A^v))+T[3]+3250441966&4294967295,y=R+(w<<22&4294967295|w>>>10),w=v+(A^y&(R^A))+T[4]+4118548399&4294967295,v=y+(w<<7&4294967295|w>>>25),w=A+(R^v&(y^R))+T[5]+1200080426&4294967295,A=v+(w<<12&4294967295|w>>>20),w=R+(y^A&(v^y))+T[6]+2821735955&4294967295,R=A+(w<<17&4294967295|w>>>15),w=y+(v^R&(A^v))+T[7]+4249261313&4294967295,y=R+(w<<22&4294967295|w>>>10),w=v+(A^y&(R^A))+T[8]+1770035416&4294967295,v=y+(w<<7&4294967295|w>>>25),w=A+(R^v&(y^R))+T[9]+2336552879&4294967295,A=v+(w<<12&4294967295|w>>>20),w=R+(y^A&(v^y))+T[10]+4294925233&4294967295,R=A+(w<<17&4294967295|w>>>15),w=y+(v^R&(A^v))+T[11]+2304563134&4294967295,y=R+(w<<22&4294967295|w>>>10),w=v+(A^y&(R^A))+T[12]+1804603682&4294967295,v=y+(w<<7&4294967295|w>>>25),w=A+(R^v&(y^R))+T[13]+4254626195&4294967295,A=v+(w<<12&4294967295|w>>>20),w=R+(y^A&(v^y))+T[14]+2792965006&4294967295,R=A+(w<<17&4294967295|w>>>15),w=y+(v^R&(A^v))+T[15]+1236535329&4294967295,y=R+(w<<22&4294967295|w>>>10),w=v+(R^A&(y^R))+T[1]+4129170786&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^R&(v^y))+T[6]+3225465664&4294967295,A=v+(w<<9&4294967295|w>>>23),w=R+(v^y&(A^v))+T[11]+643717713&4294967295,R=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(R^A))+T[0]+3921069994&4294967295,y=R+(w<<20&4294967295|w>>>12),w=v+(R^A&(y^R))+T[5]+3593408605&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^R&(v^y))+T[10]+38016083&4294967295,A=v+(w<<9&4294967295|w>>>23),w=R+(v^y&(A^v))+T[15]+3634488961&4294967295,R=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(R^A))+T[4]+3889429448&4294967295,y=R+(w<<20&4294967295|w>>>12),w=v+(R^A&(y^R))+T[9]+568446438&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^R&(v^y))+T[14]+3275163606&4294967295,A=v+(w<<9&4294967295|w>>>23),w=R+(v^y&(A^v))+T[3]+4107603335&4294967295,R=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(R^A))+T[8]+1163531501&4294967295,y=R+(w<<20&4294967295|w>>>12),w=v+(R^A&(y^R))+T[13]+2850285829&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^R&(v^y))+T[2]+4243563512&4294967295,A=v+(w<<9&4294967295|w>>>23),w=R+(v^y&(A^v))+T[7]+1735328473&4294967295,R=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(R^A))+T[12]+2368359562&4294967295,y=R+(w<<20&4294967295|w>>>12),w=v+(y^R^A)+T[5]+4294588738&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^R)+T[8]+2272392833&4294967295,A=v+(w<<11&4294967295|w>>>21),w=R+(A^v^y)+T[11]+1839030562&4294967295,R=A+(w<<16&4294967295|w>>>16),w=y+(R^A^v)+T[14]+4259657740&4294967295,y=R+(w<<23&4294967295|w>>>9),w=v+(y^R^A)+T[1]+2763975236&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^R)+T[4]+1272893353&4294967295,A=v+(w<<11&4294967295|w>>>21),w=R+(A^v^y)+T[7]+4139469664&4294967295,R=A+(w<<16&4294967295|w>>>16),w=y+(R^A^v)+T[10]+3200236656&4294967295,y=R+(w<<23&4294967295|w>>>9),w=v+(y^R^A)+T[13]+681279174&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^R)+T[0]+3936430074&4294967295,A=v+(w<<11&4294967295|w>>>21),w=R+(A^v^y)+T[3]+3572445317&4294967295,R=A+(w<<16&4294967295|w>>>16),w=y+(R^A^v)+T[6]+76029189&4294967295,y=R+(w<<23&4294967295|w>>>9),w=v+(y^R^A)+T[9]+3654602809&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^R)+T[12]+3873151461&4294967295,A=v+(w<<11&4294967295|w>>>21),w=R+(A^v^y)+T[15]+530742520&4294967295,R=A+(w<<16&4294967295|w>>>16),w=y+(R^A^v)+T[2]+3299628645&4294967295,y=R+(w<<23&4294967295|w>>>9),w=v+(R^(y|~A))+T[0]+4096336452&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~R))+T[7]+1126891415&4294967295,A=v+(w<<10&4294967295|w>>>22),w=R+(v^(A|~y))+T[14]+2878612391&4294967295,R=A+(w<<15&4294967295|w>>>17),w=y+(A^(R|~v))+T[5]+4237533241&4294967295,y=R+(w<<21&4294967295|w>>>11),w=v+(R^(y|~A))+T[12]+1700485571&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~R))+T[3]+2399980690&4294967295,A=v+(w<<10&4294967295|w>>>22),w=R+(v^(A|~y))+T[10]+4293915773&4294967295,R=A+(w<<15&4294967295|w>>>17),w=y+(A^(R|~v))+T[1]+2240044497&4294967295,y=R+(w<<21&4294967295|w>>>11),w=v+(R^(y|~A))+T[8]+1873313359&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~R))+T[15]+4264355552&4294967295,A=v+(w<<10&4294967295|w>>>22),w=R+(v^(A|~y))+T[6]+2734768916&4294967295,R=A+(w<<15&4294967295|w>>>17),w=y+(A^(R|~v))+T[13]+1309151649&4294967295,y=R+(w<<21&4294967295|w>>>11),w=v+(R^(y|~A))+T[4]+4149444226&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~R))+T[11]+3174756917&4294967295,A=v+(w<<10&4294967295|w>>>22),w=R+(v^(A|~y))+T[2]+718787259&4294967295,R=A+(w<<15&4294967295|w>>>17),w=y+(A^(R|~v))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,T=this.B,R=this.h,A=0;A<v;){if(R==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(T[R++]=b.charCodeAt(A++),R==this.blockSize){s(this,T),R=0;break}}else for(;A<v;)if(T[R++]=b[A++],R==this.blockSize){s(this,T),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var T=0;32>T;T+=8)b[y++]=this.g[v]>>>T&255;return b};function i(b,v){var y=c;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;for(var y=[],T=!0,R=b.length-1;0<=R;R--){var A=b[R]|0;T&&A==v||(y[R]=A,T=!1)}this.g=y}var c={};function l(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return O(h(-b));for(var v=[],y=1,T=0;b>=y;T++)v[T]=b/y|0,y*=4294967296;return new o(v,0)}function d(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return O(d(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(v,8)),T=p,R=0;R<b.length;R+=8){var A=Math.min(8,b.length-R),w=parseInt(b.substring(R,R+A),v);8>A?(A=h(Math.pow(v,A)),T=T.j(A).add(h(w))):(T=T.j(y),T=T.add(h(w)))}return T}var p=l(0),g=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(x(this))return-O(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var T=this.i(y);b+=(0<=T?T:4294967296+T)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if(x(this))return"-"+O(this).toString(b);for(var v=h(Math.pow(b,6)),y=this,T="";;){var R=ne(y,v).g;y=G(y,R.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=R,k(y))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function x(b){return b.h==-1}t.l=function(b){return b=G(this,b),x(b)?-1:k(b)?0:1};function O(b){for(var v=b.g.length,y=[],T=0;T<v;T++)y[T]=~b.g[T];return new o(y,~b.h).add(g)}t.abs=function(){return x(this)?O(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],T=0,R=0;R<=v;R++){var A=T+(this.i(R)&65535)+(b.i(R)&65535),w=(A>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);T=w>>>16,A&=65535,w&=65535,y[R]=w<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function G(b,v){return b.add(O(v))}t.j=function(b){if(k(this)||k(b))return p;if(x(this))return x(b)?O(this).j(O(b)):O(O(this).j(b));if(x(b))return O(this.j(O(b)));if(0>this.l(E)&&0>b.l(E))return h(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],T=0;T<2*v;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<b.g.length;R++){var A=this.i(T)>>>16,w=this.i(T)&65535,Ce=b.i(R)>>>16,Ye=b.i(R)&65535;y[2*T+2*R]+=w*Ye,$(y,2*T+2*R),y[2*T+2*R+1]+=A*Ye,$(y,2*T+2*R+1),y[2*T+2*R+1]+=w*Ce,$(y,2*T+2*R+1),y[2*T+2*R+2]+=A*Ce,$(y,2*T+2*R+2)}for(T=0;T<v;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=v;T<2*v;T++)y[T]=0;return new o(y,0)};function $(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function U(b,v){this.g=b,this.h=v}function ne(b,v){if(k(v))throw Error("division by zero");if(k(b))return new U(p,p);if(x(b))return v=ne(O(b),v),new U(O(v.g),O(v.h));if(x(v))return v=ne(b,O(v)),new U(O(v.g),v.h);if(30<b.g.length){if(x(b)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,T=v;0>=T.l(b);)y=fe(y),T=fe(T);var R=Q(y,1),A=Q(T,1);for(T=Q(T,2),y=Q(y,2);!k(T);){var w=A.add(T);0>=w.l(b)&&(R=R.add(y),A=w),T=Q(T,1),y=Q(y,1)}return v=G(b,R.j(v)),new U(R,v)}for(R=p;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=h(y),w=A.j(v);x(w)||0<w.l(b);)y-=T,A=h(y),w=A.j(v);k(A)&&(A=g),R=R.add(A),b=G(b,w)}return new U(R,b)}t.A=function(b){return ne(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],T=0;T<v;T++)y[T]=this.i(T)&b.i(T);return new o(y,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],T=0;T<v;T++)y[T]=this.i(T)|b.i(T);return new o(y,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],T=0;T<v;T++)y[T]=this.i(T)^b.i(T);return new o(y,this.h^b.h)};function fe(b){for(var v=b.g.length+1,y=[],T=0;T<v;T++)y[T]=b.i(T)<<1|b.i(T-1)>>>31;return new o(y,b.h)}function Q(b,v){var y=v>>5;v%=32;for(var T=b.g.length-y,R=[],A=0;A<T;A++)R[A]=0<v?b.i(A+y)>>>v|b.i(A+y+1)<<32-v:b.i(A+y);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,wr=o}).apply(typeof Fd<"u"?Fd:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zm,Hm,Fs,Gm,vo,Lc,Km,Wm,Qm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in f))break e;f=f[S]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,S={next:function(){if(!m&&f<a.length){var P=f++;return{value:u(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function E(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,S,P){for(var H=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)H[ke-2]=arguments[ke];return u.prototype[S].apply(m,H)}}function x(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(l(m)){const S=a.length||0,P=m.length||0;a.length=S+P;for(let H=0;H<P;H++)a[S+H]=m[H]}else a.push(m)}}class G{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function ne(a){return ne[" "](a),a}ne[" "]=function(){};var fe=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function Q(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function b(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function v(a){const u={};for(const f in a)u[f]=a[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)a[f]=m[f];for(let P=0;P<y.length;P++)f=y[P],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function A(a){c.setTimeout(()=>{throw a},0)}function w(){var a=wt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ce{constructor(){this.h=this.g=null}add(u,f){const m=Ye.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ye=new G(()=>new Fe,a=>a.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,pe=!1,wt=new Ce,Vt=()=>{const a=c.Promise.resolve(void 0);_e=()=>{a.then(Rt)}};var Rt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){A(f)}var u=Ye;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}pe=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Tn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function Gt(a,u){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(fe){e:{try{ne(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Je[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}k(Gt,Be);var Je={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),X=0;function W(a,u,f,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=S,this.key=++X,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,u,f,m,S){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var H=_(a,u,m,S);return-1<H?(u=a[H],f||(u.fa=!1)):(u=new W(u,this.src,P,!!m,S),u.fa=f,a.push(u)),u};function Pe(a,u){var f=u.type;if(f in a.g){var m=a.g[f],S=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=S)&&Array.prototype.splice.call(m,S,1),P&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function _(a,u,f,m){for(var S=0;S<a.length;++S){var P=a[S];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==m)return S}return-1}var I="closure_lm_"+(1e6*Math.random()|0),C={};function V(a,u,f,m,S){if(Array.isArray(u)){for(var P=0;P<u.length;P++)V(a,u[P],f,m,S);return null}return f=re(f),a&&a[N]?a.K(u,f,h(m)?!!m.capture:!!m,S):D(a,u,f,!1,m,S)}function D(a,u,f,m,S,P){if(!u)throw Error("Invalid event type");var H=h(S)?!!S.capture:!!S,ke=J(a);if(ke||(a[I]=ke=new ye(a)),f=ke.add(u,f,m,H,P),f.proxy)return f;if(m=q(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Tn||(S=H),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(z(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function a(f){return u.call(a.src,a.listener,f)}const u=L;return a}function K(a,u,f,m,S){if(Array.isArray(u))for(var P=0;P<u.length;P++)K(a,u[P],f,m,S);else m=h(m)?!!m.capture:!!m,f=re(f),a&&a[N]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],f=_(P,f,m,S),-1<f&&(Z(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=J(a))&&(u=a.g[u.toString()],a=-1,u&&(a=_(u,f,m,S)),(f=-1<a?u[a]:null)&&B(f))}function B(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[N])Pe(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(z(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=J(u))?(Pe(f,a),f.h==0&&(f.src=null,u[I]=null)):Z(a)}}}function z(a){return a in C?C[a]:C[a]="on"+a}function L(a,u){if(a.da)a=!0;else{u=new Gt(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&B(a),a=f.call(m,u)}return a}function J(a){return a=a[I],a instanceof ye?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(a){return typeof a=="function"?a:(a[se]||(a[se]=function(u){return a.handleEvent(u)}),a[se])}function te(){Ue.call(this),this.i=new ye(this),this.M=this,this.F=null}k(te,Ue),te.prototype[N]=!0,te.prototype.removeEventListener=function(a,u,f,m){K(this,a,u,f,m)};function oe(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Be(u,a);else if(u instanceof Be)u.target=u.target||a;else{var S=u;u=new Be(m,a),T(u,S)}if(S=!0,f)for(var P=f.length-1;0<=P;P--){var H=u.g=f[P];S=Re(H,m,!0,u)&&S}if(H=u.g=a,S=Re(H,m,!0,u)&&S,S=Re(H,m,!1,u)&&S,f)for(P=0;P<f.length;P++)H=u.g=f[P],S=Re(H,m,!1,u)&&S}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)Z(f[m]);delete a.g[u],a.h--}}this.F=null},te.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},te.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Re(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,P=0;P<u.length;++P){var H=u[P];if(H&&!H.da&&H.capture==f){var ke=H.listener,Ze=H.ha||H.src;H.fa&&Pe(a.i,H),S=ke.call(Ze,m)!==!1&&S}}return S&&!m.defaultPrevented}function we(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function qe(a){a.g=we(()=>{a.g=null,a.i&&(a.i=!1,qe(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Et extends Ue{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:qe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function St(a){Ue.call(this),this.h=a,this.g={}}k(St,Ue);var ws=[];function An(a){Q(a.g,function(u,f){this.g.hasOwnProperty(f)&&B(u)},a),a.g={}}St.prototype.N=function(){St.aa.N.call(this),An(this)},St.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dr=c.JSON.stringify,dt=c.JSON.parse,Ct=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Nr(){}Nr.prototype.h=null;function gu(a){return a.h||(a.h=a.i())}function _u(){}var Es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sa(){Be.call(this,"d")}k(Sa,Be);function Ca(){Be.call(this,"c")}k(Ca,Be);var sr={},yu=null;function xi(){return yu=yu||new te}sr.La="serverreachability";function vu(a){Be.call(this,sr.La,a)}k(vu,Be);function Is(a){const u=xi();oe(u,new vu(u))}sr.STAT_EVENT="statevent";function wu(a,u){Be.call(this,sr.STAT_EVENT,a),this.stat=u}k(wu,Be);function ft(a){const u=xi();oe(u,new wu(u,a))}sr.Ma="timingevent";function Eu(a,u){Be.call(this,sr.Ma,a),this.size=u}k(Eu,Be);function Ts(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function v0(a,u,f,m,S,P){a.info(function(){if(a.g)if(P)for(var H="",ke=P.split("&"),Ze=0;Ze<ke.length;Ze++){var Te=ke[Ze].split("=");if(1<Te.length){var it=Te[0];Te=Te[1];var ot=it.split("_");H=2<=ot.length&&ot[1]=="type"?H+(it+"="+Te+"&"):H+(it+"=redacted&")}}else H=null;else H=P;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+f+`
`+H})}function w0(a,u,f,m,S,P,H){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+f+`
`+P+" "+H})}function Or(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+I0(a,f)+(m?" "+m:"")})}function E0(a,u){a.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function I0(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(var H=1;H<S.length;H++)S[H]=""}}}}return Dr(f)}catch{return u}}var Di={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pa;function Ni(){}k(Ni,Nr),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Pa=new Ni;function bn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new St(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tu}function Tu(){this.i=null,this.g="",this.h=!1}var Au={},ka={};function xa(a,u,f){a.L=1,a.v=Li(sn(u)),a.m=f,a.P=!0,bu(a,null)}function bu(a,u){a.F=Date.now(),Oi(a),a.A=sn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Uu(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Tu,a.g=rh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Et(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(ws[0]=S.toString()),S=ws);for(var P=0;P<S.length;P++){var H=V(f,S[P],m||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Is(),v0(a.i,a.u,a.A,a.l,a.R,a.m)}bn.prototype.ca=function(a){a=a.target;const u=this.M;u&&on(a)==3?u.j():this.Y(a)},bn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=on(this.g);var u=this.g.Ba();const Lr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Gu(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Lr?Is(3):Is(2)),Da(this);var f=this.g.Z();this.X=f;t:if(Ru(this)){var m=Gu(this.g);a="";var S=m.length,P=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),bs(this);var H="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(P&&u==S-1)});m.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,w0(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ze=this.g;if((ke=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(ke)){var Te=ke;break t}}Te=null}if(f=Te)Or(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,f);else{this.o=!1,this.s=3,ft(12),ir(this),bs(this);break e}}if(this.P){f=!0;let Mt;for(;!this.J&&this.C<H.length;)if(Mt=T0(this,H),Mt==ka){ot==4&&(this.s=4,ft(14),f=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==Au){this.s=4,ft(15),Or(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else Or(this.i,this.l,Mt,null),Na(this,Mt);if(Ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||H.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Or(this.i,this.l,H,"[Invalid Chunked Response]"),ir(this),bs(this);else if(0<H.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Ua(it),it.M=!0,ft(11))}}else Or(this.i,this.l,H,null),Na(this,H);ot==4&&ir(this),this.o&&!this.J&&(ot==4?Zu(this.j,this):(this.o=!1,Oi(this)))}else B0(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),ir(this),bs(this)}}}catch{}finally{}};function Ru(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function T0(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?ka:(f=Number(u.substring(f,m)),isNaN(f)?Au:(m+=1,m+f>u.length?ka:(u=u.slice(m,m+f),a.C=m+f,u)))}bn.prototype.cancel=function(){this.J=!0,ir(this)};function Oi(a){a.S=Date.now()+a.I,Su(a,a.I)}function Su(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ts(g(a.ba,a),u)}function Da(a){a.B&&(c.clearTimeout(a.B),a.B=null)}bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(E0(this.i,this.A),this.L!=2&&(Is(),ft(17)),ir(this),this.s=2,bs(this)):Su(this,this.S-a)};function bs(a){a.j.G==0||a.J||Zu(a.j,a)}function ir(a){Da(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,An(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Na(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Oa(f.h,a))){if(!a.K&&Oa(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)$i(f),Bi(f);else break e;Fa(f),ft(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ts(g(f.Za,f),6e3));if(1>=ku(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ar(f,11)}else if((a.K||f.g==a)&&$i(f),!$(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Te=S[u];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const it=Te[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const ot=Te[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const Lr=Te[5];Lr!=null&&typeof Lr=="number"&&0<Lr&&(m=1.5*Lr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Mt=a.g;if(Mt){const zi=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var P=m.h;P.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Va(P,P.h),P.h=null))}if(m.D){const Ba=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ba&&(m.ya=Ba,De(m.I,m.D,Ba))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var H=a;if(m.qa=nh(m,m.J?m.ia:null,m.W),H.K){xu(m.h,H);var ke=H,Ze=m.L;Ze&&(ke.I=Ze),ke.B&&(Da(ke),Oi(ke)),m.g=H}else Xu(m);0<f.i.length&&ji(f)}else Te[0]!="stop"&&Te[0]!="close"||ar(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?ar(f,7):La(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}Is(4)}catch{}}var A0=class{constructor(a,u){this.g=a,this.map=u}};function Cu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ku(a){return a.h?1:a.g?a.g.size:0}function Oa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Va(a,u){a.g?a.g.add(u):a.h=u}function xu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Cu.prototype.cancel=function(){if(this.i=Du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Du(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return x(a.i)}function b0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function R0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function Nu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=R0(a),m=b0(a),S=m.length,P=0;P<S;P++)u.call(void 0,m[P],f&&f[P],a)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function S0(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),S=null;if(0<=m){var P=a[f].substring(0,m);S=a[f].substring(m+1)}else P=a[f];u(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof or){this.h=a.h,Vi(this,a.j),this.o=a.o,this.g=a.g,Mi(this,a.s),this.l=a.l;var u=a.i,f=new Cs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Vu(this,f),this.m=a.m}else a&&(u=String(a).match(Ou))?(this.h=!1,Vi(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),Mi(this,u[4]),this.l=Rs(u[5]||"",!0),Vu(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}or.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ss(u,Mu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ss(u,Mu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ss(f,f.charAt(0)=="/"?k0:P0,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ss(f,D0)),a.join("")};function sn(a){return new or(a)}function Vi(a,u,f){a.j=f?Rs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Mi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Vu(a,u,f){u instanceof Cs?(a.i=u,N0(a.i,a.h)):(f||(u=Ss(u,x0)),a.i=new Cs(u,a.h))}function De(a,u,f){a.i.set(u,f)}function Li(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Rs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,C0),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function C0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mu=/[#\/\?@]/g,P0=/[#\?:]/g,k0=/[#\?]/g,x0=/[#\?@]/g,D0=/#/g;function Cs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Rn(a){a.g||(a.g=new Map,a.h=0,a.i&&S0(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Cs.prototype,t.add=function(a,u){Rn(this),this.i=null,a=Vr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Lu(a,u){Rn(a),u=Vr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Fu(a,u){return Rn(a),u=Vr(a,u),a.g.has(u)}t.forEach=function(a,u){Rn(this),this.g.forEach(function(f,m){f.forEach(function(S){a.call(u,S,m,this)},this)},this)},t.na=function(){Rn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const S=a[m];for(let P=0;P<S.length;P++)f.push(u[m])}return f},t.V=function(a){Rn(this);let u=[];if(typeof a=="string")Fu(this,a)&&(u=u.concat(this.g.get(Vr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Rn(this),this.i=null,a=Vr(this,a),Fu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Uu(a,u,f){Lu(a,u),0<f.length&&(a.i=null,a.g.set(Vr(a,u),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const P=encodeURIComponent(String(m)),H=this.V(m);for(m=0;m<H.length;m++){var S=P;H[m]!==""&&(S+="="+encodeURIComponent(String(H[m]))),a.push(S)}}return this.i=a.join("&")};function Vr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function N0(a,u){u&&!a.j&&(Rn(a),a.i=null,a.g.forEach(function(f,m){var S=m.toLowerCase();m!=S&&(Lu(this,m),Uu(this,S,f))},a)),a.j=u}function O0(a,u){const f=new As;if(c.Image){const m=new Image;m.onload=E(Sn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=E(Sn,f,"TestLoadImage: error",!1,u,m),m.onabort=E(Sn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=E(Sn,f,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function V0(a,u){const f=new As,m=new AbortController,S=setTimeout(()=>{m.abort(),Sn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(S),P.ok?Sn(f,"TestPingServer: ok",!0,u):Sn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Sn(f,"TestPingServer: error",!1,u)})}function Sn(a,u,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function M0(){this.g=new Ct}function L0(a,u,f){const m=f||"";try{Nu(a,function(S,P){let H=S;h(S)&&(H=Dr(S)),u.push(m+P+"="+encodeURIComponent(H))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function Ps(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Ps,Nr),Ps.prototype.g=function(){return new Fi(this.l,this.j)},Ps.prototype.i=function(a){return function(){return a}}({});function Fi(a,u){te.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Fi,te),t=Fi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ks(this):xs(this),this.readyState==3&&Bu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ks(this))},t.Qa=function(a){this.g&&(this.response=a,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ju(a){let u="";return Q(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Ma(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=ju(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):De(a,u,f))}function $e(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k($e,te);var F0=/^https?$/i,U0=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pa.g(),this.v=this.o?gu(this.o):gu(Pa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){$u(this,P);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())f.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(U0,u,void 0))||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,H]of f)this.g.setRequestHeader(P,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hu(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){$u(this,P)}};function $u(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,qu(a),Ui(a)}function qu(a){a.A||(a.A=!0,oe(a,"complete"),oe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,oe(this,"complete"),oe(this,"abort"),Ui(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ui(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zu(this):this.bb())},t.bb=function(){zu(this)};function zu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||on(a)!=4||a.Z()!=2)){if(a.u&&on(a)==4)we(a.Ea,0,a);else if(oe(a,"readystatechange"),on(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=H===0){var S=String(a.D).match(Ou)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!F0.test(S?S.toLowerCase():"")}f=m}if(f)oe(a,"complete"),oe(a,"success");else{a.m=6;try{var P=2<on(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",qu(a)}}finally{Ui(a)}}}}function Ui(a,u){if(a.g){Hu(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||oe(a,"ready");try{f.onreadystatechange=m}catch{}}}function Hu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function on(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),dt(u)}};function Gu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function B0(a){const u={};a=(a.g&&2<=on(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if($(a[m]))continue;var f=R(a[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[S]||[];u[S]=P,P.push(f)}b(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Ku(a){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ds("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ds("baseRetryDelayMs",5e3,a),this.cb=Ds("retryDelaySeedMs",1e4,a),this.Wa=Ds("forwardChannelMaxRetries",2,a),this.wa=Ds("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cu(a&&a.concurrentRequestLimit),this.Da=new M0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ku.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){ft(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=nh(this,null,this.W),ji(this)};function La(a){if(Wu(a),a.G==3){var u=a.U++,f=sn(a.I);if(De(f,"SID",a.K),De(f,"RID",u),De(f,"TYPE","terminate"),Ns(a,f),u=new bn(a,a.j,u),u.L=2,u.v=Li(sn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=rh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Oi(u)}th(a)}function Bi(a){a.g&&(Ua(a),a.g.cancel(),a.g=null)}function Wu(a){Bi(a),a.u&&(c.clearTimeout(a.u),a.u=null),$i(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ji(a){if(!Pu(a.h)&&!a.s){a.s=!0;var u=a.Ga;_e||Vt(),pe||(_e(),pe=!0),wt.add(u,a),a.B=0}}function j0(a,u){return ku(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ts(g(a.Ga,a,u),eh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new bn(this,this.j,a);let P=this.o;if(this.S&&(P?(P=v(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(S.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ju(this,S,u),f=sn(this.I),De(f,"RID",a),De(f,"CVER",22),this.D&&De(f,"X-HTTP-Session-Id",this.D),Ns(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(ju(P)))+"&"+u:this.m&&Ma(f,this.m,P)),Va(this.h,S),this.Ua&&De(f,"TYPE","init"),this.P?(De(f,"$req",u),De(f,"SID","null"),S.T=!0,xa(S,f,null)):xa(S,f,u),this.G=2}}else this.G==3&&(a?Qu(this,a):this.i.length==0||Pu(this.h)||Qu(this))};function Qu(a,u){var f;u?f=u.l:f=a.U++;const m=sn(a.I);De(m,"SID",a.K),De(m,"RID",f),De(m,"AID",a.T),Ns(a,m),a.m&&a.o&&Ma(m,a.m,a.o),f=new bn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Ju(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Va(a.h,f),xa(f,m,u)}function Ns(a,u){a.H&&Q(a.H,function(f,m){De(u,m,f)}),a.l&&Nu({},function(f,m){De(u,m,f)})}function Ju(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let P=-1;for(;;){const H=["count="+f];P==-1?0<f?(P=S[0].g,H.push("ofs="+P)):P=0:H.push("ofs="+P);let ke=!0;for(let Ze=0;Ze<f;Ze++){let Te=S[Ze].g;const it=S[Ze].map;if(Te-=P,0>Te)P=Math.max(0,S[Ze].g-100),ke=!1;else try{L0(it,H,"req"+Te+"_")}catch{m&&m(it)}}if(ke){m=H.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function Xu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;_e||Vt(),pe||(_e(),pe=!0),wt.add(u,a),a.v=0}}function Fa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ts(g(a.Fa,a),eh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ts(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Bi(this),Yu(this))};function Ua(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Yu(a){a.g=new bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=sn(a.qa);De(u,"RID","rpc"),De(u,"SID",a.K),De(u,"AID",a.T),De(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(u,"TO",a.ja),De(u,"TYPE","xmlhttp"),Ns(a,u),a.m&&a.o&&Ma(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Li(sn(u)),f.m=null,f.P=!0,bu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Bi(this),Fa(this),ft(19))};function $i(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Zu(a,u){var f=null;if(a.g==u){$i(a),Ua(a),a.g=null;var m=2}else if(Oa(a.h,u))f=u.D,xu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;m=xi(),oe(m,new Eu(m,f)),ji(a)}else Xu(a);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&j0(a,u)||m==2&&Fa(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:ar(a,5);break;case 4:ar(a,10);break;case 3:ar(a,6);break;default:ar(a,2)}}}function eh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function ar(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const S=!m;m=new or(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Vi(m,"https"),Li(m),S?O0(m.toString(),f):V0(m.toString(),f)}else ft(2);a.G=0,a.l&&a.l.sa(u),th(a),Wu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function th(a){if(a.G=0,a.ka=[],a.l){const u=Du(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function nh(a,u,f){var m=f instanceof or?sn(f):new or(f);if(m.g!="")u&&(m.g=u+"."+m.g),Mi(m,m.s);else{var S=c.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var P=new or(null);m&&Vi(P,m),u&&(P.g=u),S&&Mi(P,S),f&&(P.l=f),m=P}return f=a.D,u=a.ya,f&&u&&De(m,f,u),De(m,"VER",a.la),Ns(a,m),m}function rh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new $e(new Ps({eb:f})):new $e(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}t=sh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qi(){}qi.prototype.g=function(a,u){return new It(a,u)};function It(a,u){te.call(this),this.g=new Ku(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!$(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Mr(this)}k(It,te),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){La(this.g)},It.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Dr(a),a=f);u.i.push(new A0(u.Ya++,a)),u.G==3&&ji(u)},It.prototype.N=function(){this.g.l=null,delete this.j,La(this.g),delete this.g,It.aa.N.call(this)};function ih(a){Sa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(ih,Sa);function oh(){Ca.call(this),this.status=1}k(oh,Ca);function Mr(a){this.g=a}k(Mr,sh),Mr.prototype.ua=function(){oe(this.g,"a")},Mr.prototype.ta=function(a){oe(this.g,new ih(a))},Mr.prototype.sa=function(a){oe(this.g,new oh)},Mr.prototype.ra=function(){oe(this.g,"b")},qi.prototype.createWebChannel=qi.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Qm=function(){return new qi},Wm=function(){return xi()},Km=sr,Lc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Di.NO_ERROR=0,Di.TIMEOUT=8,Di.HTTP_ERROR=6,vo=Di,Iu.COMPLETE="complete",Gm=Iu,_u.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",te.prototype.listen=te.prototype.K,Fs=_u,Hm=Ps,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,zm=$e}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const Ud="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Il("@firebase/firestore");function Ms(){return Ar.logLevel}function ee(t,...e){if(Ar.logLevel<=ge.DEBUG){const n=e.map(Ml);Ar.debug(`Firestore (${ps}): ${t}`,...n)}}function vn(t,...e){if(Ar.logLevel<=ge.ERROR){const n=e.map(Ml);Ar.error(`Firestore (${ps}): ${t}`,...n)}}function rs(t,...e){if(Ar.logLevel<=ge.WARN){const n=e.map(Ml);Ar.warn(`Firestore (${ps}): ${t}`,...n)}}function Ml(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function xe(t,e){t||le()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class sT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iT{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new Jm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new ct(e)}}class oT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new oT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new cT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=uT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Qe(0,0))}static max(){return new ue(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends ui{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const hT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends ui{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return hT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Ve.fromString(e))}static fromName(e){return new ie(Ve.fromString(e).popFirst(5))}static empty(){return new ie(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Ve(e.slice()))}}function dT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Yn(s,ie.empty(),e)}function fT(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(ue.min(),ie.empty(),-1)}static max(){return new Yn(ue.max(),ie.empty(),-1)}}function pT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==mT)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function _T(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ri(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ll.oe=-1;function ma(t){return t==null}function Lo(t){return t===0&&1/t==-1/0}function yT(t){return typeof t=="number"&&Number.isInteger(t)&&!Lo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ym(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jd(this.data.getIterator())}getIteratorFrom(e){return new jd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class jd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new rt(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zm("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const vT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(xe(!!t),typeof t=="string"){let e=0;const n=vT.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ul(t){const e=t.mapValue.fields.__previous_value__;return Fl(e)?Ul(e):e}function hi(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fl(t)?4:ET(t)?9007199254740991:10:le()}function rn(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zn(s.timestampValue),c=Zn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?Lo(o)===Lo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Bd(o)!==Bd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!rn(o[l],c[l])))return!1;return!0}(t,e);default:return le()}}function fi(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=He(i.integerValue||i.doubleValue),l=He(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return $d(t.timestampValue,e.timestampValue);case 4:return $d(hi(t),hi(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const c=br(i),l=br(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=Ae(c[h],l[h]);if(d!==0)return d}return Ae(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ae(He(i.latitude),He(o.latitude));return c!==0?c:Ae(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let h=0;h<c.length&&h<l.length;++h){const d=is(c[h],l[h]);if(d)return d}return Ae(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===to.mapValue&&o===to.mapValue)return 0;if(i===to.mapValue)return 1;if(o===to.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Ae(l[p],d[p]);if(g!==0)return g;const E=is(c[l[p]],h[d[p]]);if(E!==0)return E}return Ae(l.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function $d(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Zn(t),r=Zn(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function os(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fc(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function qd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function Bl(t){return!!t&&"arrayValue"in t}function zd(t){return!!t&&"nullValue"in t}function Hd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wo(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ET(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Qs(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(Qs(this.value))}}function eg(t){const e=[];return ms(t.fields,(n,r)=>{const s=new nt([n]);if(wo(r)){const i=eg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new lt(e,0,ue.min(),ue.min(),ue.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,ue.min(),ue.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ue.min(),ue.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.position=e,this.inclusive=n}}function Gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n="asc"){this.field=e,this.dir=n}}function IT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{}class Ge extends tg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AT(e,n,r):n==="array-contains"?new ST(e,r):n==="in"?new CT(e,r):n==="not-in"?new PT(e,r):n==="array-contains-any"?new kT(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bT(e,r):new RT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends tg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new zt(e,n)}matches(e){return ng(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ng(t){return t.op==="and"}function rg(t){return TT(t)&&ng(t)}function TT(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function Bc(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+os(t.value);if(rg(t))return t.filters.map(e=>Bc(e)).join(",");{const e=t.filters.map(n=>Bc(n)).join(",");return`${t.op}(${e})`}}function sg(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)}(t,e):t instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&sg(o,s.filters[c]),!0):!1}(t,e):void le()}function ig(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(ig).join(" ,")+"}"}(t):"Filter"}class AT extends Ge{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class bT extends Ge{constructor(e,n){super(e,"in",n),this.keys=og("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RT extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=og("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function og(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class ST extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bl(n)&&fi(n.arrayValue,this.value)}}class CT extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class PT extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class kT extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Wd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xT(t,e,n,r,s,i,o)}function jl(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ma(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ue=n}return e.ue}function $l(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kd(t.startAt,e.startAt)&&Kd(t.endAt,e.endAt)}function jc(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function DT(t,e,n,r,s,i,o,c){return new gs(t,e,n,r,s,i,o,c)}function ag(t){return new gs(t)}function Qd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cg(t){return t.collectionGroup!==null}function Js(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new rt(nt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pi(i,r))}),n.has(nt.keyField().canonicalString())||e.ce.push(new pi(nt.keyField(),r))}return e.ce}function Zt(t){const e=de(t);return e.le||(e.le=NT(e,Js(t))),e.le}function NT(t,e){if(t.limitType==="F")return Wd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pi(s.field,i)});const n=t.endAt?new Fo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fo(t.startAt.position,t.startAt.inclusive):null;return Wd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $c(t,e){const n=t.filters.concat([e]);return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qc(t,e,n){return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ga(t,e){return $l(Zt(t),Zt(e))&&t.limitType===e.limitType}function lg(t){return`${jl(Zt(t))}|lt:${t.limitType}`}function jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ig(s)).join(", ")}]`),ma(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>os(s)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function _a(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Js(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Gd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Js(r),s)||r.endAt&&!function(o,c,l){const h=Gd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Js(r),s))}(t,e)}function OT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ug(t){return(e,n)=>{let r=!1;for(const s of Js(t)){const i=VT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VT(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?is(l,h):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ym(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=new je(ie.comparator);function wn(){return MT}const hg=new je(ie.comparator);function Us(...t){let e=hg;for(const n of t)e=e.insert(n.key,n);return e}function dg(t){let e=hg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return Xs()}function fg(){return Xs()}function Xs(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const LT=new je(ie.comparator),FT=new rt(ie.comparator);function me(...t){let e=FT;for(const n of t)e=e.add(n);return e}const UT=new rt(Ae);function BT(){return UT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lo(e)?"-0":e}}function mg(t){return{integerValue:""+t}}function jT(t,e){return yT(e)?mg(e):pg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this._=void 0}}function $T(t,e,n){return t instanceof Uo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fl(i)&&(i=Ul(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof mi?_g(t,e):t instanceof gi?yg(t,e):function(s,i){const o=gg(s,i),c=Jd(o)+Jd(s.Pe);return Uc(o)&&Uc(s.Pe)?mg(c):pg(s.serializer,c)}(t,e)}function qT(t,e,n){return t instanceof mi?_g(t,e):t instanceof gi?yg(t,e):n}function gg(t,e){return t instanceof Bo?function(r){return Uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Uo extends ya{}class mi extends ya{constructor(e){super(),this.elements=e}}function _g(t,e){const n=vg(e);for(const r of t.elements)n.some(s=>rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class gi extends ya{constructor(e){super(),this.elements=e}}function yg(t,e){let n=vg(e);for(const r of t.elements)n=n.filter(s=>!rn(s,r));return{arrayValue:{values:n}}}class Bo extends ya{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Jd(t){return He(t.integerValue||t.doubleValue)}function vg(t){return Bl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function zT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof mi&&s instanceof mi||r instanceof gi&&s instanceof gi?ss(r.elements,s.elements,rn):r instanceof Bo&&s instanceof Bo?rn(r.Pe,s.Pe):r instanceof Uo&&s instanceof Uo}(t.transform,e.transform)}class HT{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class va{}function wg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ig(t.key,_n.none()):new Si(t.key,t.data,_n.none());{const n=t.data,r=kt.empty();let s=new rt(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Pr(t.key,r,new Bt(s.toArray()),_n.none())}}function GT(t,e,n){t instanceof Si?function(s,i,o){const c=s.value.clone(),l=Yd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(s,i,o){if(!Eo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Yd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Eg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof Si?function(i,o,c,l){if(!Eo(i.precondition,o))return c;const h=i.value.clone(),d=Zd(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(i,o,c,l){if(!Eo(i.precondition,o))return c;const h=Zd(i.fieldTransforms,l,o),d=o.data;return d.setAll(Eg(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Eo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function KT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=gg(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function Xd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,(i,o)=>zT(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Si extends va{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends va{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Eg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yd(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,qT(o,c,n[s]))}return r}function Zd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$T(i,o,e))}return r}class Ig extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WT extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=wg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>Xd(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>Xd(n,r))}}class ql{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return LT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ql(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ve;function YT(t){switch(t){default:return le();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Tg(t){if(t===void 0)return vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case ze.OK:return M.OK;case ze.CANCELLED:return M.CANCELLED;case ze.UNKNOWN:return M.UNKNOWN;case ze.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ze.INTERNAL:return M.INTERNAL;case ze.UNAVAILABLE:return M.UNAVAILABLE;case ze.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ze.NOT_FOUND:return M.NOT_FOUND;case ze.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ze.ABORTED:return M.ABORTED;case ze.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ze.DATA_LOSS:return M.DATA_LOSS;default:return le()}}(ve=ze||(ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=new wr([4294967295,4294967295],0);function ef(t){const e=ZT().encode(t),n=new qm;return n.update(e),new Uint8Array(n.digest())}function tf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wr([n,r],0),new wr([s,i],0)]}class zl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bs(`Invalid padding: ${n}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=wr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(wr.fromNumber(r)));return s.compare(eA)===1&&(s=new wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ef(e),[r,s]=tf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zl(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=ef(e),[r,s]=tf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wa(ue.min(),s,new je(Ae),wn(),me())}}class Ci{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ci(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Ag{constructor(e,n){this.targetId=e,this.me=n}}class bg{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class nf{constructor(){this.fe=0,this.ge=sf(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Ci(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=sf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tA{constructor(e){this.Le=e,this.Be=new Map,this.ke=wn(),this.qe=rf(),this.Qe=new je(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(jc(i))if(r===0){const o=new ie(i.path);this.Ue(n,o,lt.newNoDocument(o,ue.min()))}else xe(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=br(r).toUint8Array()}catch(l){if(l instanceof Zm)return rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new zl(o,s,i)}catch(l){return rs(l instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&jc(c.target)){const l=new ie(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,lt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=me();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new wa(e,n,this.Qe,this.ke,r);return this.ke=wn(),this.qe=rf(),this.Qe=new je(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new nf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new nf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function rf(){return new je(ie.comparator)}function sf(){return new je(ie.comparator)}const nA={asc:"ASCENDING",desc:"DESCENDING"},rA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sA={and:"AND",or:"OR"};class iA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zc(t,e){return t.useProto3Json||ma(e)?e:{value:e}}function jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oA(t,e){return jo(t,e.toTimestamp())}function en(t){return xe(!!t),ue.fromTimestamp(function(n){const r=Zn(n);return new Qe(r.seconds,r.nanos)}(t))}function Hl(t,e){return Hc(t,e).canonicalString()}function Hc(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Sg(t){const e=Ve.fromString(t);return xe(Dg(e)),e}function Gc(t,e){return Hl(t.databaseId,e.path)}function ac(t,e){const n=Sg(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(Pg(n))}function Cg(t,e){return Hl(t.databaseId,e)}function aA(t){const e=Sg(t);return e.length===4?Ve.emptyPath():Pg(e)}function Kc(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pg(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function of(t,e,n){return{name:Gc(t,e),fields:n.value.mapValue.fields}}function cA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(xe(d===void 0||typeof d=="string"),ht.fromBase64String(d||"")):(xe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ht.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?M.UNKNOWN:Tg(h.code);return new Y(d,h.message||"")}(o);n=new bg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ac(t,r.document.name),i=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):ue.min(),c=new kt({mapValue:{fields:r.document.fields}}),l=lt.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Io(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ac(t,r.document),i=r.readTime?en(r.readTime):ue.min(),o=lt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Io([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ac(t,r.document),i=r.removedTargetIds||[];n=new Io([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new XT(s,i),c=r.targetId;n=new Ag(c,o)}}return n}function lA(t,e){let n;if(e instanceof Si)n={update:of(t,e.key,e.value)};else if(e instanceof Ig)n={delete:Gc(t,e.key)};else if(e instanceof Pr)n={update:of(t,e.key,e.data),updateMask:yA(e.fieldMask)};else{if(!(e instanceof WT))return le();n={verify:Gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Uo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Bo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:oA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function uA(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?en(s.updateTime):en(i);return o.isEqual(ue.min())&&(o=en(i)),new HT(o,s.transformResults||[])}(n,e))):[]}function hA(t,e){return{documents:[Cg(t,e.path)]}}function dA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cg(t,s);const i=function(h){if(h.length!==0)return xg(zt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:$r(g.field),direction:mA(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=zc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function fA(t){let e=aA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=kg(p);return g instanceof zt&&rg(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new pi(qr(k.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,ma(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,E=p.values||[];return new Fo(E,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,E=p.values||[];return new Fo(E,g)}(n.endAt)),DT(e,s,o,i,c,"F",l,h)}function pA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qr(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qr(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qr(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qr(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(qr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(r=>kg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function mA(t){return nA[t]}function gA(t){return rA[t]}function _A(t){return sA[t]}function $r(t){return{fieldPath:t.canonicalString()}}function qr(t){return nt.fromServerFormat(t.fieldPath)}function xg(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Hd(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NAN"}};if(zd(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hd(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NAN"}};if(zd(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(n.field),op:gA(n.op),value:n.value}}}(t):t instanceof zt?function(n){const r=n.getFilters().map(s=>xg(s));return r.length===1?r[0]:{compositeFilter:{op:_A(n.op),filters:r}}}(t):le()}function yA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.ct=e}}function wA(t){const e=fA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this._n=new IA}addToCollectionParentIndex(e,n){return this._n.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Yn.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class IA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new as(0)}static Ln(){return new as(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ys(r.mutation,s,Bt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Us();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=wn();const o=Xs(),c=function(){return Xs()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Pr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Ys(d.mutation,h,d.mutation.getFieldMask(),Qe.now())):o.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new AA(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Xs();let s=new je((o,c)=>o-c),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Bt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=fg();d.forEach(g=>{if(!i.has(g)){const E=wg(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(gr());let c=-1,l=i;return o.next(h=>F.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,me())).next(d=>({batchId:c,changes:dg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,i).next(c=>F.forEach(c,l=>{const h=function(p,g){return new gs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,lt.newInvalidDocument(d)))});let c=Us();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&Ys(d.mutation,h,Bt.empty(),Qe.now()),_a(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return F.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:wA(s.bundledQuery),readTime:en(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.overlays=new je(ie.comparator),this.hr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=gr(),i=n.length+1,o=new ie(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=gr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=gr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return F.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JT(n,r));let i=this.hr.get(n);i===void 0&&(i=me(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.Pr=new rt(Xe.Ir),this.Tr=new rt(Xe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Xe(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ie(new Ve([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ie(new Ve([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=me();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ie.comparator(e.key,n.key)||Ae(e.pr,n.pr)}static Er(e,n){return Ae(e.pr,n.pr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new rt(Xe.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QT(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new Xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(Ae);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new ie(i),0);let c=new rt(Ae);return this.wr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.pr)),!0)},o),F.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Xe(n,0),s=this.wr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.vr=e,this.docs=function(){return new je(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=wn();const o=n.path,c=new ie(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||pT(fT(d),r)<=0||(s.has(d.key)||_a(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Fr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kA(this)}getSize(e){return F.resolve(this.size)}}class kA extends TA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.persistence=e,this.Mr=new _s(n=>jl(n),$l),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Gl,this.targetCount=0,this.Lr=as.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),F.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.qn(n),F.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n){this.Br={},this.overlays={},this.kr=new Ll(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new xA(this),this.indexManager=new EA,this.remoteDocumentCache=function(s){return new PA(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new vA(n),this.$r=new RA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new CA(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new NA(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class NA extends gT{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.zr=new Gl,this.jr=null}static Hr(e){return new Kl(e)}get Jr(){if(this.jr)return this.jr;throw le()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),F.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const s=ie.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return F.or([()=>F.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return U1()?8:_T(st())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new OA;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Ms()<=ge.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(Ms()<=ge.DEBUG&&ee("QueryEngine","Query:",jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ms()<=ge.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):F.resolve())}ji(e,n){if(Qd(n))return F.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qc(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Zi(n,c);return this.Xi(n,h,o,l.readTime)?this.ji(e,qc(n,null,"F")):this.es(e,h,n,l)}))})))}Hi(e,n,r,s){return Qd(n)||s.isEqual(ue.min())?F.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?F.resolve(null):(Ms()<=ge.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jr(n)),this.es(e,o,n,dT(s,-1)).next(c=>c))})}Zi(e,n){let r=new rt(ug(e));return n.forEach((s,i)=>{_a(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Ms()<=ge.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",jr(n)),this.zi.getDocumentsMatchingQuery(e,n,Yn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new je(Ae),this.rs=new _s(i=>jl(i),$l),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function LA(t,e,n,r){return new MA(t,e,n,r)}async function Ng(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=me();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({us:h,removedBatchIds:o,addedBatchIds:c}))})})}function FA(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,g=p.keys();let E=F.resolve();return g.forEach(k=>{E=E.next(()=>d.getEntry(l,k)).next(x=>{const O=h.docVersions.get(k);xe(O!==null),x.version.compareTo(O)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=me();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Og(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function UA(t,e){const n=de(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(ht.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),s=s.insert(p,E),function(x,O,G){return x.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(g,E,d)&&c.push(n.Qr.updateTargetData(i,E))});let l=wn(),h=me();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(BA(i,o,e.documentUpdates).next(d=>{l=d.cs,h=d.ls})),!r.isEqual(ue.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return F.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ns=s,i))}function BA(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=wn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{cs:o,ls:s}})}function jA(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $A(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Wc(t,e,n){const r=de(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ri(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function af(t,e,n){const r=de(t);let s=ue.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=de(l),g=p.rs.get(d);return g!==void 0?F.resolve(p.ns.get(g)):p.Qr.getTargetData(h,d)}(r,o,Zt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:me())).next(c=>(qA(r,OT(e),c),{documents:c,hs:i})))}function qA(t,e,n){let r=t.ss.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class cf{constructor(){this.activeTargetIds=BT()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zA{constructor(){this.no=new cf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new cf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=null;function cc(){return no===null?no=function(){return 268435456+Math.round(2147483648*Math.random())}():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class WA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=cc(),l=this.vo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,o),this.Mo(n,l,h,s).then(d=>(ee("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw rs("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=GA[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=cc();return new Promise((o,c)=>{const l=new zm;l.setWithCredentials(!0),l.listenOnce(Gm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vo.NO_ERROR:const d=l.getResponseJson();ee(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case vo.TIMEOUT:ee(at,`RPC '${e}' ${i} timed out`),c(new Y(M.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const p=l.getStatus();if(ee(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const k=function(O){const G=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(G)>=0?G:M.UNKNOWN}(E.status);c(new Y(k,E.message))}else c(new Y(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(M.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{ee(at,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(at,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Oo(e,n,r){const s=cc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qm(),c=Wm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Hm({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");ee(at,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,E=!1;const k=new KA({lo:O=>{E?ee(at,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(ee(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ee(at,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},ho:()=>p.close()}),x=(O,G,$)=>{O.listen(G,U=>{try{$(U)}catch(ne){setTimeout(()=>{throw ne},0)}})};return x(p,Fs.EventType.OPEN,()=>{E||(ee(at,`RPC '${e}' stream ${s} transport opened.`),k.mo())}),x(p,Fs.EventType.CLOSE,()=>{E||(E=!0,ee(at,`RPC '${e}' stream ${s} transport closed`),k.po())}),x(p,Fs.EventType.ERROR,O=>{E||(E=!0,rs(at,`RPC '${e}' stream ${s} transport errored:`,O),k.po(new Y(M.UNAVAILABLE,"The operation could not be completed")))}),x(p,Fs.EventType.MESSAGE,O=>{var G;if(!E){const $=O.data[0];xe(!!$);const U=$,ne=U.error||((G=U[0])===null||G===void 0?void 0:G.error);if(ne){ee(at,`RPC '${e}' stream ${s} received error:`,ne);const fe=ne.status;let Q=function(y){const T=ze[y];if(T!==void 0)return Tg(T)}(fe),b=ne.message;Q===void 0&&(Q=M.INTERNAL,b="Unknown error status: "+fe+" with message "+ne.message),E=!0,k.po(new Y(Q,b)),p.close()}else ee(at,`RPC '${e}' stream ${s} received:`,$),k.yo($)}}),x(c,Km.STAT_EVENT,O=>{O.stat===Lc.PROXY?ee(at,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Lc.NOPROXY&&ee(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){return new iA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Vg(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new Y(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QA extends Mg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=cA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?en(o.readTime):ue.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Kc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=jc(l)?{documents:hA(i,l)}:{query:dA(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Rg(i,o.resumeToken);const h=zc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=jo(i,o.snapshotVersion.toTimestamp());const h=zc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=pA(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Kc(this.serializer),n.removeTarget=e,this.i_(n)}}class JA extends Mg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=uA(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.A_(r,n)}return xe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Kc(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lA(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,Hc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(M.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,Hc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(M.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class YA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(vn(n),this.y_=!1):ee("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{kr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=de(l);h.M_.add(4),await Pi(h),h.N_.set("Unknown"),h.M_.delete(4),await Ia(h)}(this))})}),this.N_=new YA(r,s)}}async function Ia(t){if(kr(t))for(const e of t.x_)await e(!0)}async function Pi(t){for(const e of t.x_)await e(!1)}function Lg(t,e){const n=de(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Yl(n)?Xl(n):ys(n).Xo()&&Jl(n,e))}function Ql(t,e){const n=de(t),r=ys(n);n.F_.delete(e),r.Xo()&&Fg(n,e),n.F_.size===0&&(r.Xo()?r.n_():kr(n)&&n.N_.set("Unknown"))}function Jl(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).P_(e)}function Fg(t,e){t.L_.xe(e),ys(t).I_(e)}function Xl(t){t.L_=new tA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.N_.w_()}function Yl(t){return kr(t)&&!ys(t).Zo()&&t.F_.size>0}function kr(t){return de(t).M_.size===0}function Ug(t){t.L_=void 0}async function eb(t){t.N_.set("Online")}async function tb(t){t.F_.forEach((e,n)=>{Jl(t,e)})}async function nb(t,e){Ug(t),Yl(t)?(t.N_.D_(e),Xl(t)):t.N_.set("Unknown")}async function rb(t,e,n){if(t.N_.set("Online"),e instanceof bg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $o(t,r)}else if(e instanceof Io?t.L_.Ke(e):e instanceof Ag?t.L_.He(e):t.L_.We(e),!n.isEqual(ue.min()))try{const r=await Og(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(h);d&&i.F_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(ht.EMPTY_BYTE_STRING,d.snapshotVersion)),Fg(i,l);const p=new jn(d.target,l,h,d.sequenceNumber);Jl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await $o(t,r)}}async function $o(t,e,n){if(!Ri(e))throw e;t.M_.add(1),await Pi(t),t.N_.set("Offline"),n||(n=()=>Og(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Ia(t)})}function Bg(t,e){return e().catch(n=>$o(t,n,e))}async function Ta(t){const e=de(t),n=er(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;sb(e);)try{const s=await jA(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,ib(e,s)}catch(s){await $o(e,s)}jg(e)&&$g(e)}function sb(t){return kr(t)&&t.v_.length<10}function ib(t,e){t.v_.push(e);const n=er(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function jg(t){return kr(t)&&!er(t).Zo()&&t.v_.length>0}function $g(t){er(t).start()}async function ob(t){er(t).V_()}async function ab(t){const e=er(t);for(const n of t.v_)e.d_(n.mutations)}async function cb(t,e,n){const r=t.v_.shift(),s=ql.from(r,e,n);await Bg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ta(t)}async function lb(t,e){e&&er(t).E_&&await async function(r,s){if(function(o){return YT(o)&&o!==M.ABORTED}(s.code)){const i=r.v_.shift();er(r).t_(),await Bg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ta(r)}}(t,e),jg(t)&&$g(t)}async function uf(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=kr(n);n.M_.add(3),await Pi(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Ia(n)}async function ub(t,e){const n=de(t);e?(n.M_.delete(2),await Ia(n)):e||(n.M_.add(2),await Pi(n),n.N_.set("Unknown"))}function ys(t){return t.B_||(t.B_=function(n,r,s){const i=de(n);return i.f_(),new QA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:eb.bind(null,t),To:tb.bind(null,t),Ao:nb.bind(null,t),h_:rb.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Yl(t)?Xl(t):t.N_.set("Unknown")):(await t.B_.stop(),Ug(t))})),t.B_}function er(t){return t.k_||(t.k_=function(n,r,s){const i=de(n);return i.f_(),new JA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:ob.bind(null,t),Ao:lb.bind(null,t),R_:ab.bind(null,t),A_:cb.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Ta(t)):(await t.k_.stop(),t.v_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Zl(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eu(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Ri(t))return new Y(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new Yr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.q_=new je(ie.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):le():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new cs(e,n,Yr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class db{constructor(){this.queries=new _s(e=>lg(e),ga),this.onlineState="Unknown",this.z_=new Set}}async function fb(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new hb,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=eu(o,`Initialization of query '${jr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&tu(n)}async function pb(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mb(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&tu(n)}function gb(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function tu(t){t.z_.forEach(e=>{e.next()})}var Qc,df;(df=Qc||(Qc={})).J_="default",df.Cache="cache";class _b{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Qc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.key=e}}class zg{constructor(e){this.key=e}}class yb{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=me(),this.mutatedKeys=me(),this.Ia=ug(e),this.Ta=new Yr(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new hf,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),E=_a(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),x=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let O=!1;g&&E?g.data.isEqual(E.data)?k!==x&&(r.track({type:3,doc:E}),O=!0):this.Ra(g,E)||(r.track({type:2,doc:E}),O=!0,(l&&this.Ia(E,l)>0||h&&this.Ia(E,h)<0)&&(c=!0)):!g&&E?(r.track({type:0,doc:E}),O=!0):g&&!E&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(E?(o=o.add(E),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(E,k){const x=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return x(E)-x(k)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,h=l!==this.ha;return this.ha=l,o.length!==0||h?{snapshot:new cs(this.query,e.Ta,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new hf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=me(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new zg(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new qg(r))}),n}pa(e){this.la=e.hs,this.Pa=me();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return cs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class vb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wb{constructor(e){this.key=e,this.wa=!1}}class Eb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new _s(c=>lg(c),ga),this.Da=new Map,this.Ca=new Set,this.va=new je(ie.comparator),this.Fa=new Map,this.Ma=new Gl,this.xa={},this.Oa=new Map,this.Na=as.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Ib(t,e,n=!0){const r=Jg(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Hg(r,e,n,!0),s}async function Tb(t,e){const n=Jg(t);await Hg(n,e,!0,!1)}async function Hg(t,e,n,r){const s=await $A(t.localStore,Zt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await Ab(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Lg(t.remoteStore,s),c}async function Ab(t,e,n,r,s){t.Ba=(p,g,E)=>async function(x,O,G,$){let U=O.view.da(G);U.Xi&&(U=await af(x.localStore,O.query,!1).then(({documents:b})=>O.view.da(b,U)));const ne=$&&$.targetChanges.get(O.targetId),fe=$&&$.targetMismatches.get(O.targetId)!=null,Q=O.view.applyChanges(U,x.isPrimaryClient,ne,fe);return pf(x,O.targetId,Q.fa),Q.snapshot}(t,p,g,E);const i=await af(t.localStore,e,!0),o=new yb(e,i.hs),c=o.da(i.documents),l=Ci.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);pf(t,n,h.fa);const d=new vb(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),h.snapshot}async function bb(t,e,n){const r=de(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!ga(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ql(r.remoteStore,s.targetId),Jc(r,s.targetId)}).catch(bi)):(Jc(r,s.targetId),await Wc(r.localStore,s.targetId,!0))}async function Rb(t,e){const n=de(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ql(n.remoteStore,r.targetId))}async function Sb(t,e,n){const r=Ob(t);try{const s=await function(o,c){const l=de(o),h=Qe.now(),d=c.reduce((E,k)=>E.add(k.key),me());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let k=wn(),x=me();return l.os.getEntries(E,d).next(O=>{k=O,k.forEach((G,$)=>{$.isValidDocument()||(x=x.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,k)).next(O=>{p=O;const G=[];for(const $ of c){const U=KT($,p.get($.key).overlayedDocument);U!=null&&G.push(new Pr($.key,U,eg(U.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(E,h,G,c)}).next(O=>{g=O;const G=O.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(E,O.batchId,G)})}).then(()=>({batchId:g.batchId,changes:dg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.xa[o.currentUser.toKey()];h||(h=new je(Ae)),h=h.insert(c,l),o.xa[o.currentUser.toKey()]=h}(r,s.batchId,n),await ki(r,s.changes),await Ta(r.remoteStore)}catch(s){const i=eu(s,"Failed to persist write");n.reject(i)}}async function Gg(t,e){const n=de(t);try{const r=await UA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?xe(o.wa):s.removedDocuments.size>0&&(xe(o.wa),o.wa=!1))}),await ki(n,r,e)}catch(r){await bi(r)}}function ff(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const g of p.U_)g.j_(c)&&(h=!0)}),h&&tu(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Cb(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new je(ie.comparator);o=o.insert(i,lt.newNoDocument(i,ue.min()));const c=me().add(i),l=new wa(ue.min(),new Map,new je(Ae),o,c);await Gg(r,l),r.va=r.va.remove(i),r.Fa.delete(e),nu(r)}else await Wc(r.localStore,e,!1).then(()=>Jc(r,e,n)).catch(bi)}async function Pb(t,e){const n=de(t),r=e.batch.batchId;try{const s=await FA(n.localStore,e);Wg(n,r,null),Kg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ki(n,s)}catch(s){await bi(s)}}async function kb(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(xe(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);Wg(r,e,n),Kg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ki(r,s)}catch(s){await bi(s)}}function Kg(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Wg(t,e,n){const r=de(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Qg(t,r)})}function Qg(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Ql(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),nu(t))}function pf(t,e,n){for(const r of n)r instanceof qg?(t.Ma.addReference(r.key,e),xb(t,r)):r instanceof zg?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Qg(t,r.key)):le()}function xb(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Ca.add(r),nu(t))}function nu(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ie(Ve.fromString(e)),r=t.Na.next();t.Fa.set(r,new wb(n)),t.va=t.va.insert(n,r),Lg(t.remoteStore,new jn(Zt(ag(n.path)),r,"TargetPurposeLimboResolution",Ll.oe))}}async function ki(t,e,n){const r=de(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const d=h&&!h.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Wl.Ki(l.targetId,h);i.push(d)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,h){const d=de(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,g=>F.forEach(g.qi,E=>d.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>F.forEach(g.Qi,E=>d.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!Ri(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const E=d.ns.get(g),k=E.snapshotVersion,x=E.withLastLimboFreeSnapshotVersion(k);d.ns=d.ns.insert(g,x)}}}(r.localStore,i))}async function Db(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await Ng(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new Y(M.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(n,r.us)}}function Nb(t,e){const n=de(t),r=n.Fa.get(e);if(r&&r.wa)return me().add(r.key);{let s=me();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function Jg(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cb.bind(null,e),e.Sa.h_=mb.bind(null,e.eventManager),e.Sa.ka=gb.bind(null,e.eventManager),e}function Ob(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Pb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kb.bind(null,e),e}class mf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ea(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return LA(this.persistence,new VA,e.initialUser,this.serializer)}createPersistence(e){return new DA(Kl.Hr,this.serializer)}createSharedClientState(e){return new zA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ff(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Db.bind(null,this.syncEngine),await ub(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new db}()}createDatastore(e){const n=Ea(e.databaseInfo.databaseId),r=function(i){return new WA(i)}(e.databaseInfo);return function(i,o,c,l){return new XA(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new ZA(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>ff(this.syncEngine,n,0),function(){return lf.D()?new lf:new HA}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new Eb(s,i,o,c,l,h);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=de(r);ee("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Pi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=Xm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ee("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ee("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=eu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uc(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ng(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ub(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>uf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>uf(e.remoteStore,s)),t._onlineComponents=e}function Fb(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ub(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Fb(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await uc(t,new mf)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await uc(t,new mf);return t._offlineComponents}async function Xg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await gf(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await gf(t,new Vb))),t._onlineComponents}function Bb(t){return Xg(t).then(e=>e.syncEngine)}async function jb(t){const e=await Xg(t),n=e.eventManager;return n.onListen=Ib.bind(null,e.syncEngine),n.onUnlisten=bb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Tb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Rb.bind(null,e.syncEngine),n}function $b(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new Mb({next:g=>{o.enqueueAndForget(()=>pb(i,p)),g.fromCache&&l.source==="server"?h.reject(new Y(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new _b(c,d,{includeMetadataChanges:!0,ra:!0});return fb(i,p)}(await jb(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e,n){if(!n)throw new Y(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qb(t,e,n,r){if(e===!0&&r===!0)throw new Y(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yf(t){if(!ie.isDocumentKey(t))throw new Y(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vf(t){if(ie.isDocumentKey(t))throw new Y(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Aa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function _i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Aa(t);throw new Y(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ba{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rT;switch(r.type){case"firstParty":return new aT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_f.get(n);r&&(ee("ComponentProvider","Removing Datastore"),_f.delete(n),r.terminate())}(this),Promise.resolve()}}function zb(t,e,n,r={}){var s;const i=(t=_i(t,ba))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ct.MOCK_USER;else{c=N1(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ct(h)}t._authCredentials=new sT(new Jm(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xr(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class Qn extends xr{constructor(e,n,r){super(e,n,ag(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new ie(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function Hb(t,e,...n){if(t=Ot(t),Zg("collection","path",e),t instanceof ba){const r=Ve.fromString(e,...n);return vf(r),new Qn(t,null,r)}{if(!(t instanceof bt||t instanceof Qn))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return vf(r),new Qn(t.firestore,null,r)}}function Gb(t,e,...n){if(t=Ot(t),arguments.length===1&&(e=Xm.newId()),Zg("doc","path",e),t instanceof ba){const r=Ve.fromString(e,...n);return yf(r),new bt(t,null,new ie(r))}{if(!(t instanceof bt||t instanceof Qn))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return yf(r),new bt(t.firestore,t instanceof Qn?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Vg(this,"async_queue_retry"),this.hu=()=>{const n=lc();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Wn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ri(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Zl.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&le()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class ru extends ba{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Kb}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||t0(this),this._firestoreClient.terminate()}}function Wb(t,e){const n=typeof t=="object"?t:um(),r=typeof t=="string"?t:"(default)",s=Al(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=x1("firestore");i&&zb(s,...i)}return s}function e0(t){return t._firestoreClient||t0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function t0(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new wT(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Yg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Lb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(ht.fromBase64String(e))}catch(n){throw new Y(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ls(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=/^__.*__$/;class Jb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Si(e,this.data,n,this.fieldTransforms)}}function r0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class ou{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return qo(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(r0(this.fu)&&Qb.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Xb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ea(e)}Fu(e,n,r,s=!1){return new ou({fu:e,methodName:n,vu:r,path:nt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function s0(t){const e=t._freezeSettings(),n=Ea(t._databaseId);return new Xb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yb(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);a0("Data must be an object, but it was:",o,r);const c=i0(r,o);let l,h;if(i.merge)l=new Bt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=eR(e,p,n);if(!o.contains(g))throw new Y(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);nR(d,g)||d.push(g)}l=new Bt(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new Jb(new kt(c),l,h)}function Zb(t,e,n,r=!1){return au(n,t.Fu(r?4:3,e))}function au(t,e){if(o0(t=Ot(t)))return a0("Unsupported field value:",e,t),i0(t,e);if(t instanceof n0)return function(r,s){if(!r0(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=au(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:jo(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(s.serializer,i)}}if(r instanceof iu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ls)return{bytesValue:Rg(s.serializer,r._byteString)};if(r instanceof bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Aa(r)}`)}(t,e)}function i0(t,e){const n={};return Ym(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,s)=>{const i=au(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function o0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof iu||t instanceof ls||t instanceof bt||t instanceof n0)}function a0(t,e,n){if(!o0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Aa(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function eR(t,e,n){if((e=Ot(e))instanceof su)return e._internalPath;if(typeof e=="string")return c0(t,e);throw qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const tR=new RegExp("[~\\*/\\[\\]]");function c0(t,e,n){if(e.search(tR)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new su(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(M.INVALID_ARGUMENT,c+t+l)}function nR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rR extends l0{data(){return super.data()}}function cu(t,e){return typeof e=="string"?c0(t,e):e instanceof su?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lu{}class u0 extends lu{}function iR(t,e,...n){let r=[];e instanceof lu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof hu).length,c=i.filter(l=>l instanceof uu).length;if(o>1||o>0&&c>0)throw new Y(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class uu extends u0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new uu(e,n,r)}_apply(e){const n=this._parse(e);return h0(e._query,n),new xr(e.firestore,e.converter,$c(e._query,n))}_parse(e){const n=s0(e.firestore);return function(i,o,c,l,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){If(p,d);const E=[];for(const k of p)E.push(Ef(l,i,k));g={arrayValue:{values:E}}}else g=Ef(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||If(p,d),g=Zb(c,o,p,d==="in"||d==="not-in");return Ge.create(h,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hu extends lu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)h0(o,l),o=$c(o,l)}(e._query,n),new xr(e.firestore,e.converter,$c(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class du extends u0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new du(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pi(i,o)}(e._query,this._field,this._direction);return new xr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new gs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function oR(t,e="asc"){const n=e,r=cu("orderBy",t);return du._create(r,n)}function Ef(t,e,n){if(typeof(n=Ot(n))=="string"){if(n==="")throw new Y(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cg(e)&&n.indexOf("/")!==-1)throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!ie.isDocumentKey(r))throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qd(t,new ie(r))}if(n instanceof bt)return qd(t,n._key);throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Aa(n)}.`)}function If(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function h0(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class aR{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new iu(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ul(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);xe(Dg(r));const s=new di(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lR extends l0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class To extends lR{data(e={}){return super.data(e)}}class uR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ro(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new To(this._firestore,this._userDataWriter,r.key,r,new ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new To(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ro(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new To(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ro(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:hR(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}class dR extends aR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function fR(t){t=_i(t,xr);const e=_i(t.firestore,ru),n=e0(e),r=new dR(e);return sR(t._query),$b(n,t._query).then(s=>new uR(e,r,t,s))}function pR(t,e,n){t=_i(t,bt);const r=_i(t.firestore,ru),s=cR(t.converter,e,n);return mR(r,[Yb(s0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,_n.none())])}function mR(t,e){return function(r,s){const i=new Wn;return r.asyncQueue.enqueueAndForget(async()=>Sb(await Bb(r),s,i)),i.promise}(e0(t),e)}(function(e,n=!0){(function(s){ps=s})(ds),ts(new Er("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ru(new iT(r.getProvider("auth-internal")),new lT(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Kn(Ud,"4.6.3",e),Kn(Ud,"4.6.3","esm2017")})();const gR={apiKey:"AIzaSyART44llhBhJRo8vjt3LS2cOqd9haOdHnE",authDomain:"portfolio-v2-b7cc7.firebaseapp.com",projectId:"portfolio-v2-b7cc7",storageBucket:"portfolio-v2-b7cc7.appspot.com",messagingSenderId:"1059256515207",appId:"1:1059256515207:web:8562551a2216d4e9c21622",measurementId:"G-KFK141G0TX"},d0=lm(gR),_R=tT(d0),Tf=Wb(d0),yR=new ln,vR={name:"Guestbook",data(){return{user:null,message:"",userMessage:"",messages:[],messageSent:!1}},methods:{signInWithGitHub(){uI(_R,yR).then(t=>{this.user=t.user}).catch(t=>{console.error("Erro ao fazer login com GitHub: ",t)})},async sendMessage(){if(this.message.trim()!=="")try{const t=Gb(Tf,"guestbookMessages",this.user.uid);await pR(t,{userId:this.user.uid,userName:this.user.displayName,message:this.message,timestamp:new Date},{merge:!0}),this.userMessage=this.message,this.message="",this.messageSent=!0,this.fetchMessages()}catch(t){console.error("Erro ao enviar mensagem:",t)}},async fetchMessages(){try{const t=iR(Hb(Tf,"guestbookMessages"),oR("timestamp","desc")),e=await fR(t);this.messages=e.docs.map(n=>({id:n.id,...n.data()}))}catch(t){console.error("Erro ao carregar mensagens:",t)}}},mounted(){const t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animate-fadeIn"),n.target.classList.remove("opacity-0"),t.unobserve(n.target))})},{threshold:.1});t.observe(this.$refs.abracadabrah),this.fetchMessages()}},vs=t=>(Sr("data-v-e62ed087"),t=t(),Cr(),t),wR={class:"py-4 principal",id:"guestbook"},ER={ref:"abracadabrah",class:"opacity-0 transition-opacity duration-1000"},IR=vs(()=>j("h2",{class:"text-2xl font-medium container-texto py-2"},"Assine o livro de visitas 😉​",-1)),TR={class:"mt-4"},AR=vs(()=>j("img",{src:Bp,alt:"",class:"h-5 w-5"},null,-1)),bR=vs(()=>j("p",{class:"ml-2 text-sm font-light"},"Assine com Github",-1)),RR=[AR,bR],SR=vs(()=>j("button",{type:"submit",class:"mt-2 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-yellow-600"}," Enviar Mensagem ",-1)),CR={key:1,class:"mt-6"},PR=vs(()=>j("h3",{class:"text-xl font-semibold"},"Mensagens:",-1)),kR={class:"pequeninas font-mono text-sm"},xR={class:"ml-2 text-sm"},DR={key:2,class:"mt-6"},NR=vs(()=>j("h6",{class:"md:text-xl pequeninas font-light"},"Parece que ninguém deixou uma mensagem ainda 😓, que tal ser o primeiro ? ",-1)),OR=[NR];function VR(t,e,n,r,s,i){return Ie(),Oe("div",wR,[j("div",ER,[IR,j("div",TR,[j("button",{onClick:e[0]||(e[0]=(...o)=>i.signInWithGitHub&&i.signInWithGitHub(...o)),class:"bg-[#3C3B3C] drop-shadow-x1 p-2 border-black rounded-md flex justify-between items-center"},RR)]),s.user&&!s.messageSent?(Ie(),Oe("form",{key:0,onSubmit:e[2]||(e[2]=Ur((...o)=>i.sendMessage&&i.sendMessage(...o),["prevent"])),class:"mt-4"},[Q_(j("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.message=o),rows:"3",class:"w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm",placeholder:"Digite sua mensagem...",required:""},null,512),[[uv,s.message]]),SR],32)):Xt("",!0),s.messages.length>0?(Ie(),Oe("div",CR,[PR,(Ie(!0),Oe(mt,null,yi(s.messages,o=>(Ie(),Oe("div",{key:o.id,class:"mt-6 flex items-center"},[j("p",kR,jt(o.userName)+":",1),j("p",xR,jt(o.message),1)]))),128))])):Xt("",!0),s.messages.length<=0?(Ie(),Oe("div",DR,OR)):Xt("",!0)],512)])}const MR=Ht(vR,[["render",VR],["__scopeId","data-v-e62ed087"]]),LR={props:{id:{type:Number,required:!0},title:{type:String,required:!0},imageUrl:{type:String,required:!0},backgroundColor:{type:String,required:!0},backgroundHeight:{type:String,default:"h-12"}},data(){return{isGrowing:!1,imageLoadError:!1}},computed:{imageClass(){return this.backgroundHeight}},methods:{growCard(){this.isGrowing=!0,setTimeout(()=>{this.isGrowing=!1},1e3)},handleImageError(){this.imageLoadError=!0}}},FR=["src"],UR={key:1,class:"font-bold text-2xl text-white"};function BR(t,e,n,r,s,i){const o=Dt("router-link");return Ie(),zn(o,{to:{name:"ProjectDetails",params:{id:n.id}}},{default:un(()=>[j("div",{onClick:e[1]||(e[1]=(...c)=>i.growCard&&i.growCard(...c)),style:hs({backgroundColor:n.backgroundColor}),class:Tt([["card",{"is-growing":s.isGrowing}],"p-4 flex items-center justify-center h-80 w-50 transition-all duration-500 ease-in-out cursor-pointer"])},[n.imageUrl?(Ie(),Oe("img",{key:0,src:n.imageUrl,alt:"Card Image",class:Tt(i.imageClass),onError:e[0]||(e[0]=(...c)=>i.handleImageError&&i.handleImageError(...c))},null,42,FR)):Xt("",!0),n.imageUrl?Xt("",!0):(Ie(),Oe("span",UR,jt(n.title),1))],6)]),_:1},8,["to"])}const jR=Ht(LR,[["render",BR],["__scopeId","data-v-1c8cc82f"]]),$R="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='48px'%20height='48px'%3e%3cpath%20d='M8.56%204.94l-6.02%2010.4L5.545%201.147C5.642.69%206.257.603%206.476%201.016L8.56%204.94zM9.67%207.02L10.87%209.27%205.34%2014.5zM14.16%206.15l-1.79%201.7-1.52-2.86.973-1.674c.198-.341.694-.329.876.021L14.16%206.15zM21.13%2018.74l-8.8%205.12C12.18%2023.96%2012%2024%2011.83%2024c-.17%200-.35-.04-.5-.13l-8.05-4.65L18.647%204.657c.291-.276.771-.114.837.281L21.61%2017.71C21.68%2018.12%2021.49%2018.53%2021.13%2018.74z'/%3e%3c/svg%3e",qR="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='50px'%20height='50px'%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M28.1875,0c2.75,6.36328%20-9.85937,10.29297%20-11.03125,15.59375c-1.07422,4.87109%207.49219,10.53125%207.5,10.53125c-1.30078,-2.01562%20-2.25781,-3.67578%20-3.5625,-6.8125c-2.20703,-5.30469%2013.44141,-10.10547%207.09375,-19.3125zM36.5625,8.8125c0,0%20-11.0625,0.71094%20-11.625,7.78125c-0.25,3.14844%202.91016,4.80469%203,7.09375c0.07422,1.87109%20-1.875,3.4375%20-1.875,3.4375c0,0%203.54688,-0.67578%204.65625,-3.53125c1.23047,-3.16797%20-2.39844,-5.30859%20-2.03125,-7.84375c0.35156,-2.42578%207.875,-6.9375%207.875,-6.9375zM19.1875,25.15625c0,0%20-10.125,-0.14453%20-10.125,2.71875c0,2.99219%2013.25391,3.21484%2022.71875,1.375c0,0%202.51563,-1.73047%203.1875,-2.375c-6.20312,1.26563%20-20.34375,1.40625%20-20.34375,0.3125c0,-1.00781%204.5625,-2.03125%204.5625,-2.03125zM38.65625,25.15625c-0.99219,0.07813%20-2.0625,0.46094%20-3.03125,1.15625c2.28125,-0.49219%204.21875,0.92188%204.21875,2.53125c0,3.625%20-5.25,7.03125%20-5.25,7.03125c0,0%208.125,-0.92187%208.125,-6.875c0,-2.70312%20-1.87891,-4.01562%20-4.0625,-3.84375zM16.75,30.71875c-1.55469,0%20-3.875,1.21875%20-3.875,2.375c0,2.32422%2011.6875,4.11328%2020.34375,0.71875l-3,-1.84375c-5.86719,1.87891%20-16.67187,1.26563%20-13.46875,-1.25zM18.1875,35.9375c-2.12891,0%20-3.53125,1.28516%20-3.53125,2.25c0,2.98438%2012.71484,3.28516%2017.75,0.25l-3.1875,-2.03125c-3.76172,1.58984%20-13.20312,1.83203%20-11.03125,-0.46875zM11.09375,38.625c-3.46875,-0.07031%20-5.71875,1.48828%20-5.71875,2.78125c0,6.875%2035.5,6.55859%2035.5,-0.46875c0,-1.16797%20-1.34766,-1.73437%20-1.84375,-2c2.90234,6.71875%20-29.0625,6.18359%20-29.0625,2.21875c0,-0.90234%202.35156,-1.76562%204.53125,-1.34375l-1.84375,-1.0625c-0.54297,-0.08203%20-1.06641,-0.11328%20-1.5625,-0.125zM44.625,43.25c-5.39844,5.11719%20-19.07812,6.97266%20-32.84375,3.8125c13.76172,5.63281%2032.77734,2.47266%2032.84375,-3.8125z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",zR="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='48px'%20height='48px'%3e%3cpath%20d='M11.59%203L3%2011.59V4c0-.552.448-1%201-1H11.59zM18.88%204.71L9.58%2014l-6.46%206.46C3.04%2020.32%203%2020.17%203%2020v-5.59L14.41%203h3.76C19.07%203%2019.51%204.08%2018.88%204.71zM18.586%2021H5.42l7.785-7.795%206.087%206.087C19.923%2019.923%2019.477%2021%2018.586%2021z'/%3e%3c/svg%3e",HR="/assets/nodejs-white-SJnRsdAt.svg",GR="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='96px'%20height='96px'%3e%3cg%20fill='none'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.33333,5.33333)'%3e%3cpath%20d='M23.987,17l-5.253,-9h-15.76l21.013,36l21.013,-36h-15.76z'%20fill='%23f6f6f6'%3e%3c/path%3e%3cpath%20d='M29.24,8l-5.253,9l-5.253,-9h-7.588l12.841,22l12.841,-22z'%20fill='%238e9193'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",KR="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='50px'%20height='50px'%3e%3cg%20fill='%23efefef'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M43.33594,4h-36.66797c-1.47266,0%20-2.66797,1.19531%20-2.66797,2.66797v36.66406c0,1.47266%201.19531,2.66797%202.66797,2.66797h36.66406c1.47266,0%202.66797,-1.19531%202.66797,-2.66406v-36.66797c0,-1.47266%20-1.19531,-2.66797%20-2.66406,-2.66797zM27,36.18359c0,3.99609%20-2.34375,5.81641%20-5.76562,5.81641c-3.09375,0%20-5.32422,-2.07422%20-6.23437,-4l3.14453,-1.90234c0.60547,1.07422%201.52734,1.90234%202.85547,1.90234c1.26953,0%202,-0.49609%202,-2.42578v-12.57422h4zM35.67578,42c-3.54297,0%20-5.55469,-1.78516%20-6.67578,-4l3,-2c0.81641,1.33594%201.70703,2.61328%203.58984,2.61328c1.58203,0%202.41016,-0.78906%202.41016,-1.88281c0,-1.30469%20-0.85937,-1.76953%20-2.59766,-2.53125l-0.95312,-0.41016c-2.75391,-1.17187%20-4.58594,-2.64062%20-4.58594,-5.75c0,-2.85937%202.18359,-5.03906%205.58984,-5.03906c2.42578,0%204.16797,0.84375%205.42578,3.05469l-2.96875,1.91016c-0.65625,-1.17578%20-1.35937,-1.63672%20-2.45703,-1.63672c-1.11719,0%20-1.82422,0.71094%20-1.82422,1.63672c0,1.14453%200.70703,1.60547%202.34375,2.31641l0.95313,0.41016c3.24609,1.38672%205.07422,2.80469%205.07422,5.99219c0,3.43359%20-2.69922,5.31641%20-6.32422,5.31641z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",WR="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='96px'%20height='96px'%3e%3cg%20fill='none'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.33333,5.33333)'%3e%3cpath%20d='M42,17.3c0,20.5%20-18,26.7%20-18,26.7c0,0%20-18,-6.2%20-18,-26.7c0,-2.5%200.2,-4.6%200.4,-6.3c0.3,-2.5%202,-4.5%204.4,-5.1c3.1,-0.9%208,-1.9%2013.2,-1.9c5.2,0%2010.1,1%2013.3,1.9c2.4,0.6%204.1,2.7%204.4,5.1c0.1,1.7%200.3,3.9%200.3,6.3z'%20fill='%23ebebeb'%3e%3c/path%3e%3cpath%20d='M24,7c4.9,0%209.5,1%2012.5,1.8c1.2,0.3%202,1.3%202.2,2.6c0.2,1.9%200.3,3.9%200.3,5.9c0,15.6%20-11.5,21.9%20-15,23.4c-3.5,-1.6%20-15,-7.9%20-15,-23.4c0,-2%200.1,-4%200.3,-5.9c0.1,-1.3%201,-2.3%202.2,-2.6c3,-0.8%207.6,-1.8%2012.5,-1.8M24,4c-5.2,0%20-10.1,1%20-13.3,1.9c-2.3,0.6%20-4.1,2.7%20-4.3,5.1c-0.2,1.7%20-0.4,3.9%20-0.4,6.3c0,20.5%2018,26.7%2018,26.7c0,0%2018,-6.2%2018,-26.7c0,-2.5%20-0.2,-4.6%20-0.4,-6.3c-0.3,-2.5%20-2,-4.5%20-4.4,-5.1c-3.1,-0.9%20-8,-1.9%20-13.2,-1.9z'%20fill='%23000000'%3e%3c/path%3e%3cpath%20d='M23,28h2v8h-2z'%20fill='%2398e938'%3e%3c/path%3e%3cpath%20d='M24,10c0,0%20-6,5%20-6,13c0,5.2%203.3,8.5%205,10l1,-3l1,3c1.7,-1.5%205,-4.8%205,-10c0,-8%20-6,-13%20-6,-13z'%20fill='%23000000'%3e%3c/path%3e%3cpath%20d='M24,10c0,0%20-6,5%20-6,13c0,5.2%203.3,8.5%205,10l1,-3z'%20fill='%2381c784'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",QR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0UlEQVR4nO2aW4hWVRSAT1rOpEVaTBR00Sh8yzEbim6i1ENYFEG3B3vKh8YXa7o8JJgWYa/VCEO9JF3wZ2rUyoLMjKaciayH0plIodGIyoqZBDN05ouF64flnr3P9b8V54MfZs6/9jpr/Weftddae0dRSUlJSUlJyX8eYA7wEPAC0Ac8AzwAzM2gYy7woI7tU12ic07UKgBnAKuBCfz8A2wDrovRcT2wXWV9jAPdUSsAPE963gUWmLFXAO9lGP9ss529zWPUMeAwcCJg9FGdEav1bx8nVIfoclneTIf3GkOmgMeBNv2uHbgD2KrfJSEyA8AKo6MNeNIZ/2WznF3kGPxajGwn8HmMs4OiL2b8Zkf+6ro5FkKfpmVRgvxVgSks165MGCs/mOWxqNEAbxkDjiTILgDGYp6wfDc/QcfvRv6NqNFw+hTdFSN3IXDQcfB7YNS5dgDoiNHziZH9rG6OhQD2GwP6AzLtnndXxl0MXATs87zLbQFdbxu5b6NGw6mnVKVirs8CFmuGtMMzfW1y4Us03texomOW0VuxP1ozHP7GGPAFsA74NCZbysNx1blO71FlbzMc3knz+KiRjl4DvANMZjBwWHPl14FNwEb99OoaO6AyaZnUd3pxPR29AHg1wdEfPMvPLmBGCv0znEgs/KjRO87xV8S2Wjt7C/BTwq/+MHC5k1xIlXNphvtcpmOqHFWdqxLuLXn3TbVy9h4NHi4fACfN/y86kVR4JMf9pKiwVFR3lZO6fLmIjXcXdfZmT9SV5eh2/X7IXD/iJPnDaaZyYGrb93lKdVcZUrn7PK+P2HpjkQ7GYUehFPLnGJn1hJlWxsn0liQF+Es/EqwWeuSWx+hd78QViRGWQ8DsPA73OIokKs50ZJYEjNodcPYPj+yfvvdcdAR0L3HkzgI+dGQezePwsFHwMzAvIDfiMWqpR06ebIiKR36pR24kYEMH8JuR25PH4Qmj4KUYuacdo7yFhE7hEBOBMe50XRtjR2+SviwOvxwjt7YGDo/X2OHxolP611Dp5inzQlNaAlSILSmn9GjAhvOBX4pO6R7PunumI9OVIWgt1ADlIoX9JRmC1rWO3EzPj7kmj8OzPcvSxzaNAzYQZlkgUlf0dZHPloCzy1IuS+d62ryyNp+d2WFB0jVP4iEK702ReAwVSDys3imnvVNNPFZo7m4RW2/Ies/TkHQtkFoOelJLeWJFU8vuFKmlu+4KfwN3Zb2fF0nXNIOJY1UdiwcpTOIYK/xkA5GwL6E8PKAlXa3KwzHPtLVMqk3epKiWDfj+HA2AAS32e00DYJM2BbbnaAD0J/XC/08tnp219SZ/E293IMDl5bjqdJt4X0ct1qbt1FartFyztml36NjOmDbtSKs24ts83Yl92oQv0oj/ru4OFthq6fBstYwW3GoZjFp8M21+jTfT3owaDdOLi3pul8q2i6UnaoEN8c0FN8Q7Y8bLWt3cDXEB+MpJ8p9wjjzcqY2/tEcetuoxiXYT9J5y5IajZgHc6jH8mObdtrBwp3B3ikMthwKHWqaVnY12+jnSs80GJz0ZIEeZ0rIhagU49bRsleNmS5JHd8WM71KZUJY20TIH0zxHDzeao4eyO3BelBKRBe43Rw9F18qWOnpYUlJSUlJSEuXlXz4ixbD3cpKbAAAAAElFTkSuQmCC",JR="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='50px'%20height='50px'%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M45,4h-40c-0.553,0%20-1,0.448%20-1,1v40c0,0.552%200.447,1%201,1h40c0.553,0%201,-0.448%201,-1v-40c0,-0.552%20-0.447,-1%20-1,-1zM29,26.445h-5v15.555h-4v-15.555h-5v-3.445h14zM30.121,41.112v-4.158c0,0%202.271,1.712%204.996,1.712c2.725,0%202.62,-1.782%202.62,-2.026c0,-2.586%20-7.721,-2.586%20-7.721,-8.315c0,-7.791%2011.25,-4.717%2011.25,-4.717l-0.14,3.704c0,0%20-1.887,-1.258%20-4.018,-1.258c-2.131,0%20-2.9,1.013%20-2.9,2.096c0,2.795%207.791,2.516%207.791,8.141c0.001,8.664%20-11.878,4.821%20-11.878,4.821z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",XR="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20baseProfile='basic'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2048%2048'%20xml:space='preserve'%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='3.8511'%20y1='2.5956'%20x2='34.4712'%20y2='33.2157'%3e%3cstop%20offset='0'%20style='stop-color:%236D7479'/%3e%3cstop%20offset='1'%20style='stop-color:%23323538'/%3e%3c/linearGradient%3e%3cpath%20style='fill:url(%23SVGID_1_);'%20d='M33.244,25l-9.121-12h1.18c0.84,0,1.631,0.392,2.139,1.061l7.059,9.287l7.059-9.287%20C42.067,13.392,42.858,13,43.698,13h1.18l-9.121,12l9.547,12.56h-1.18c-0.84,0-1.631-0.392-2.139-1.061L34.5,26.652l-7.485,9.847%20c-0.508,0.668-1.299,1.061-2.139,1.061h-1.18L33.244,25z%20M4,26v0.783c0,4.199,2.776,8.032,6.868,8.972%20c4.439,1.02,8.49-1.247,10.228-4.842C21.366,30.355,21.928,30,22.547,30h1.028c-1.319,4.655-5.616,8.059-10.707,7.999%20C6.777,37.927,2,32.694,2,26.142V26v-2l0-0.716c0-5.427,3.812-10.273,9.171-11.136C18.055,11.039,24,16.325,24,23v3H4z%20M4,24h18v-1%20c0-5.648-5.202-10.08-11.076-8.768C6.804,15.153,4,19.002,4,23.71V24z'/%3e%3c/svg%3e",Af="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='50px'%20height='50px'%3e%3cg%20fill='%23f2f2f2'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M24.92969,2.00195c-0.10987,0.0005%20-0.22067,0.01869%20-0.32617,0.05469l-20.93164,7.28516c-0.444,0.154%20-0.72206,0.59745%20-0.66406,1.06445l3.30859,27.12305c0.039,0.321%200.22867,0.60381%200.51367,0.75781l17.64844,9.5918c0.148,0.081%200.31256,0.12109%200.47656,0.12109c0.165,0%200.33147,-0.04105%200.48047,-0.12305l17.73828,-9.72266c0.282,-0.155%200.47372,-0.43686%200.51172,-0.75586l3.30664,-27.12109c0.058,-0.469%20-0.22288,-0.91636%20-0.67188,-1.06836l-21.06641,-7.15625c-0.105,-0.035%20-0.21434,-0.05128%20-0.32422,-0.05078zM25,7l13,28h-4.4375l-2.78125,-5.99219h-11.5625l-2.78125,5.99219h-4.4375zM25,16.5l-3.91992,8.5h7.83984z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",YR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGPUlEQVR4nO1aW29VRRTeVFHwhkaI98uDRBM1SqIREi5q/AUFL4n4VIQHE/GpxJbyoq829E2ib/gkLxYJBMQIhkJIxISaYCyJSiwppc0+Z32zT1EUxnxlTTIZZp+996EH28gkJ9lnz6zbzKxvrVmzk+RG+5+0RqPxIIBjInKJPwBHsyy7P5lrDcAAABv8BpLZ1Ky1CwF0icgHk5OTd8XGiMgpKi8iK0RkuT6fio0lD/IC0EXeyfVoANYAOONmWUROisi91tqbtG8bgN0ichmAsdbO54/P+m43gD4Aq6y1HaQlD2/VzpBPW42gsiJyXg340c06gNMiMhbZSoPeBAyG/Uozos8/Azihz+M0sp2G3CIiF+m89Xr9nizLHvAUuSwiRwB0G2Ne40yH9AAWs49jAAzpCtGoEfKq1Wp3Kzj8TVlJO5uIHFbha/l/amrqEQC9tVrt8aq8SENa8uB/AJ06Kd8n7Wy61/ersM9nmr+IfKaTtJ+ykna0sbGx2wHsU0GTxphXZlqGMeZlEZlQGfsoc0Yc2+1TXQlnxIiILM2jI9xyu3BWqZT3fkJXs5dwnEdfr9efcH5HmW5lqAt1amVmztPp1CcOKONf6LARozuMMW8RyUJkcmMiiHbCGPNmDJ0ALPGMOSAih1SX89StSrCbjhOaWjjBk7GVSNP0UQryIJUCv8kzhH0c4/0/5Jzdb5TlbTNflzNnz569LSlqADa6GSMcEp3ohLGZMMa8CqCmgv4E8InLp/IM4bPCdr/S8H0a8zlzZWcQANaqLtNxBsC7hYaIyGaXTlBgE4NXAchcdDfGPB305xriKfqMiAxrH3mtypNHXby0Z3OhIRMTE3d6KcNIbNmpNADRMb+nabooYmihIWw6079pv9C4cEyj0XhY/ZNGDOfld1c1RmWmHcq8J+zPsux5puie/xwnWlU1RJPJ4x6fY7VabVlkUj70UqGrMoainGqMKUQYsT04nCci60Vk1KUoAL5oNBoPKWBEDaGjcgyAnS5FIQ8ReYc8fRmuUQdNgc5VgmAAq1XAkcCIebrteq21C/iOQUtEPhaRC26vi8gfTVBr1POtC6R1gc9au0DjzLAzyqMfUh6rqxjSp0Td/vt6vf6Ctw24r9cFs7bL69/jO6+Cwx7PoF3+ahOZAPzq+ikr0Klb+/qqGMIzg2WmGrzf5mKFp9B3WZY950MmgA1NeG/woZy05OHHIUQU1qyZ73c3VV6xfcA7Y/C3xB/jBCpEb/LOJv+IyKfh+ILJWkIa0ioP8tqkJ0X+/zYYv9gzljoORGsALA54BpiY5Q7JiFoedDKwXVS6GqGyyAiFUxdISdtPXskVnssc9EfkD6puTs+hq5i7FIAwaq29OWcWp5mEcUNEnnRbgnGoyJDx8fE7vG30lN+XpukiN5kxWuqmiel02jJrDCFtC4YszzUksrUGZ9vWEpGv/K0VhofpRseJOPviJs6+MXD2HS04+47A2TdWcXZjzH1FQr6uAL+H3ArpmDUF8Nvll3tIGx4DcC3wG1O4KCAaY14vCIgrPZ4rg4D4ZRAQ13nJIwPii4FOW7Rv60ylKEy7t7qKoKYoHwUpymjJFGWKtF6KspC8ReSn8OTopSi5qX7TpDFN08fyksZ6vf52kDTuZELIxLCFpHF9iaRxrFLhrmQafzRI45fPRBqfef7m0fY4JCudxmtBuczBCu5g5aCzqiGRgxViBystArqK5slSBysP/qocdYdDBcoYYox5lv7QwlH3/UJDeLAPig+dBcWHVJmzkNDPC54iQ9RHtovIXyWLD51B8SEX3gvLQSzNxMpBXPYgDjA4HmyCWgddEHTHgLxyEIDJWDmo9B0KA1ZOgW4kFr21QPeGN2NlCnQ/kKZJge60jmPF8rDqMl757oQCWiyZvqQocyBSMuWE9HBME/qlXpVxb1Ay7WhHEbtc6bL1IvbeGSlix5quzPQ2oxPOyWuFyEVPp4fxPWEGUKaRhrSRi57DSTubtfZWdbpLhMOqV298p1nslhJXb/Ovy2UoEUovMK/lMvScQycNdieuy2VowfV0h0b7vpLX06v/s+vp8IMBY8x7eWf04IOBFUUfDJAXgK5Sdx+z4BOO7clca9mVGsCQ+6iGQDAnP6q50ZLW2r/I79HeU0guQwAAAABJRU5ErkJggg==",ZR="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99626,255.99626'%20width='48px'%20height='48px'%3e%3cg%20fill='%23f2f2f2'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(10.66667,10.66667)'%3e%3cpath%20d='M18,13c-1.858,0%20-3.489,-1.297%20-5.748,-3.092c-1.521,-1.209%20-5.006,-1.619%20-5.552,-1.194l-1.407,-1.421c2.053,-2.054%203.293,-3.293%205.707,-3.293c3.018,0%205.214,1.688%206.979,3.046c0.554,0.425%201.077,0.827%201.527,1.092c0.342,0.201%201.073,0.436%201.685,0.253c0.391,-0.115%200.689,-0.39%200.914,-0.838l1.834,0.789c-1.06,2.917%20-3.28,4.658%20-5.939,4.658zM8.983,6.633c1.707,0.234%203.512,0.913%204.514,1.709c2.135,1.698%203.397,2.658%204.503,2.658c0.745,0%201.435,-0.207%202.042,-0.599c-0.611,-0.097%20-1.158,-0.31%20-1.548,-0.539c-0.557,-0.328%20-1.128,-0.767%20-1.732,-1.231c-1.606,-1.234%20-3.425,-2.631%20-5.762,-2.631c-0.786,0%20-1.359,0.176%20-2.017,0.633zM13,20c-1.858,0%20-3.489,-1.297%20-5.748,-3.092c-1.52,-1.208%20-5.006,-1.621%20-5.552,-1.194l-1.407,-1.421c2.053,-2.054%203.293,-3.293%205.707,-3.293c3.018,0%205.214,1.688%206.979,3.046c0.554,0.425%201.077,0.827%201.527,1.092c0.342,0.201%201.073,0.433%201.685,0.253c0.391,-0.115%200.689,-0.39%200.914,-0.838l1.834,0.789c-1.06,2.917%20-3.28,4.658%20-5.939,4.658zM3.983,13.633c1.707,0.234%203.512,0.913%204.514,1.709c2.135,1.698%203.397,2.658%204.503,2.658c0.745,0%201.435,-0.207%202.042,-0.599c-0.611,-0.097%20-1.158,-0.31%20-1.548,-0.539c-0.557,-0.328%20-1.128,-0.767%20-1.732,-1.231c-1.606,-1.234%20-3.425,-2.631%20-5.762,-2.631c-0.786,0%20-1.359,0.176%20-2.017,0.633z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",eS={data(){return{technologies:[{name:"Vue.js"},{name:"React"},{name:"Angular"},{name:"Tailwind CSS"},{name:"Node.js"},{name:"Express.js"},{name:"MongoDB"},{name:"MySQL"},{name:"JavaScript"},{name:"REST API"},{name:"TypeScript"},{name:"Flutter"},{name:"Dart"},{name:"Java"},{name:"Kotlin"},{name:"Firebase"}]}},computed:{trackWidth(){return`calc(150px * ${this.technologies.length})`}},methods:{getIconSVG(t){switch(t.toLowerCase()){case"vue.js":return GR;case"node.js":return HR;case"mysql":return l1;case"flutter":return c1;case"java":return qR;case"kotlin":return zR;case"firebase":return $R;case"javascript":return KR;case"mongodb":return WR;case"typescript":return JR;case"react":return QR;case"express.js":return XR;case"angular":return Af;case"dart":return a1;case"rest api":return YR;case"tailwind css":return ZR;case"angular":return Af;default:return""}}}},f0=t=>(Sr("data-v-4d16d5f9"),t=t(),Cr(),t),tS={class:"relative overflow-hidden mx-auto"},nS={class:"slider"},rS=f0(()=>j("div",{class:"fade-gradient left"},null,-1)),sS=f0(()=>j("div",{class:"fade-gradient right"},null,-1)),iS={class:"flex items-center fill-white text-white"},oS={class:"icon-container mr-2"},aS=["src"],cS={class:"text-center pequeninas"};function lS(t,e,n,r,s,i){return Ie(),Oe("div",tS,[j("div",nS,[rS,sS,j("div",{class:"slide-track flex animate-scroll",style:hs({width:i.trackWidth})},[(Ie(!0),Oe(mt,null,yi(s.technologies,(o,c)=>(Ie(),Oe("div",{class:"slide h-100 w-150 flex items-center justify-center",key:c},[j("div",iS,[j("div",oS,[j("img",{src:i.getIconSVG(o.name),alt:"Icon",class:"h-8 w-8 fill-white"},null,8,aS)]),j("p",cS,jt(o.name),1)])]))),128))],4)])])}const uS=Ht(eS,[["render",lS],["__scopeId","data-v-4d16d5f9"]]),hS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAlpJREFUWEftlr1uE0EQx+coKBAvgAQUSAhIRMUTUFFFCYjcnmMbIhAUFpC7s+/8icwLQJSSgiqy9+yYJDiJBFQRokZCoggUPAFKAzQUWWb21sbYd7bPxEDhv/TTenfnZv77IWvhb8i03V0nW9w3bacN9Zds94oKGa8s2/lQKJZFxsn7uHlRKJWFbTtzKmS8Mi3nnZsrCly5xEq7ws2VhJnOzqiQ8erfG7Cd97nCQ2Fnsm2ob2ayswCVhUvQTCyDpz/2MfrD2ZM+LMNGfAXb26q2lJnGHciXhGW7PrgDWez7O4DB2ps7Qtu5EcLNaOxiLs7eqtpSppk7Y1nuRdN0p1tQP5VKHQeoGQltGwt5TGH8Gc0kGdhRtYdQ20BAsmHhHRyagfW40DYSg1nv4vUtMvBSZR9CQQa4cYB8Rvaw/1HC2adQaL6qaCb3cKwGm/FzeL8uwOr1Kaga0/J3ff6oqtqhbgONBVrBd6gnT8t5ARqUy0f6QjEtSJxd017gUdRUzrUYtQfQiJ2X878p2MA3WI2fUBHR5ekz2hbmrGPhGkI5sZW70aMgA540cFJFRBdns3IHKB9dTDKCxyqPoUfdBtbUEXB2SkVEV9W4OjHQa4CFGOAsOTEwMTAxcOgGKvrc6AbG9lccxQA3vsLTu8dURHR5+uXRDVCwx37g+COo6vfxPB9IOFsKpYL8iruHPNOe44NmJAP0AbVbuAIa38aHZlQ28VvK0yKSgVHoLBbE/25gUXu16F++cUEP3Aa+iGpBLyKPzePzaR8v3mD4AMJi6gbNfYFK7KyqqgTwEym0Ki5PjNgTAAAAAElFTkSuQmCC",dS="/assets/academy-abroad-MUhDNhMk.png",fS="/assets/chcjr-fD9Z4uXm.jpg",pS=[{title:"Estágio - Desenvolvedor Frontend/Mobile,",date:"2023",description:"Trabalhei no desenvolvimento de uma plataforma de inteligência operacional e um aplicativo para chão de fábrica, utilizando Flutter, Laravel e SQL, para otimizar processos industriais e melhorar a eficiência operacional.",image:hS},{title:"Acessor de Projetos - ChcJr Multicursos,",date:"2018 - 2020",description:"Contribuí para diversos projetos educacionais, desenvolvendo habilidades em gestão de projetos e coordenação de atividades, focando em soluções tecnológicas para ambientes de aprendizado.",image:fS},{title:"Estágio(Voluntariado) - Dev Frontend, 2020,",description:"Criei dashboards de gerenciamento de dados em React para parcerias B2B, aprimorando minha capacidade de desenvolver interfaces de usuário eficientes e responsivas, aplicando melhores práticas de desenvolvimento front-end.",image:dS}],mS={name:"ExperienceItem",props:{experience:{type:Object,required:!0}}},gS={class:"text-justify py-6 md:w-2/4 flex items-start"},_S=["src"],yS={class:"text-sm font-semibold py-1"},vS={class:"font-thin"},wS={class:"mt-2 text-sm text-pretty pequeninas"};function ES(t,e,n,r,s,i){return Ie(),Oe("div",gS,[j("img",{src:n.experience.image,alt:"Foto de perfil",class:"rounded-full w-10 h-10 object-center object-scale-down drop-shadow-xl border-2 bg-white mr-4 pointer-events-none"},null,8,_S),j("div",null,[j("p",yS,[zr(jt(n.experience.title)+" ",1),j("span",vS,jt(n.experience.date),1)]),j("p",wS,jt(n.experience.description),1)])])}const IS=Ht(mS,[["render",ES]]),TS={name:"AboutPage",components:{ExperienceItem:IS},data(){return{experiences:pS}},mounted(){const t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animate-fadeIn"),n.target.classList.remove("opacity-0"),t.unobserve(n.target))})},{threshold:.1});t.observe(this.$refs.abracadabrah)}},AS=t=>(Sr("data-v-d64b2aac"),t=t(),Cr(),t),bS={class:"py-4 principal",id:"#about"},RS={ref:"abracadabrah",class:"opacity-0 transition-opacity duration-1000"},SS=AS(()=>j("h2",{class:"text-2xl font-medium container-texto py-2"},"Experiências",-1));function CS(t,e,n,r,s,i){const o=Dt("ExperienceItem");return Ie(),Oe("div",bS,[j("div",RS,[SS,j("div",null,[(Ie(!0),Oe(mt,null,yi(s.experiences,(c,l)=>(Ie(),zn(o,{key:l,experience:c},null,8,["experience"]))),128))])],512)])}const PS=Ht(TS,[["render",CS],["__scopeId","data-v-d64b2aac"]]),kS="/assets/perfil-e3IcHROE.webp",xS={components:{SocialLinks:vl,ProjectCard:jR,About:PS,Carrousel:uS},data(){return{projects:Zp,isMounted:!1}},methods:{navigateToProject(t){this.$router.push({name:"ProjectDetails",params:{id:t}})}},mounted(){setTimeout(()=>{this.isMounted=!0},200)}},fu=t=>(Sr("data-v-d4cfefce"),t=t(),Cr(),t),DS={ref:"abracadabrah",class:"principal min-h-screen text-white flex flex-col"},NS={class:"py-1 md:flex-grow flex-col-reverse"},OS={class:"flex flex-col md:flex-row mb-12 items-center"},VS={class:"md:flex-1 md:mr-8"},MS={class:"container-texto md:w-3/4 order-2 md:order-1 text-start"},LS=fu(()=>j("img",{src:kS,alt:"Foto de perfil",class:"rounded-full w-44 h-44 object-cover drop-shadow-xl border-solid border-black border-2 pointer-events-none"},null,-1)),FS=[LS],US={id:"projects"},BS=fu(()=>j("h2",{class:"text-2xl font-medium container-texto py-2"},"Projetos",-1)),jS={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-4 teste"},$S={class:"pt-10"},qS=fu(()=>j("h2",{class:"pequeninas font-medium container-texto py-4"},"Tecnologias com que já trabalhei...",-1)),zS={id:"about"};function HS(t,e,n,r,s,i){const o=Dt("SocialLinks"),c=Dt("ProjectCard"),l=Dt("Carrousel"),h=Dt("About");return Ie(),Oe("div",null,[j("div",DS,[j("section",NS,[j("div",OS,[j("div",VS,[j("div",MS,[j("h1",{class:Tt(["text-2xl md:text-4xl font-medium festa-top",{"slide-in":s.isMounted}])}," Fernando Martinho Nascimento ",2),j("p",{class:Tt(["text-sm festa-top",{"slide-in":s.isMounted}])},"Desenvolvedor Frontend.",2),j("p",{class:Tt(["text-sm text-pretty pequeninas festa",{"slide-in":s.isMounted}])},"Apaixonado por tecnologia, desenvolvo soluções complexas com simplicidade e criatividade. Busco criar aplicações eficientes e inovadoras que tornam a vida mais fácil.",2)]),j("div",{class:Tt(["flex space-x-4 mt-4 festa justify-center md:justify-normal",{"slide-in":s.isMounted}])},[Le(o)],2)]),j("div",{class:Tt(["md:flex-2 mt-4 md:mt-0 sm:block sm:top-0 md:flex-shrink-0 festa md:order-2 order-1",{"slide-in":s.isMounted}])},FS,2)])]),j("section",US,[j("div",{class:Tt(["festa",{"slide-in":s.isMounted}])},[BS,j("div",jS,[(Ie(!0),Oe(mt,null,yi(s.projects,(d,p)=>(Ie(),zn(c,{key:p,id:p,title:d.title,imageUrl:d.imageUrl,backgroundColor:d.backgroundColor,backgroundHeight:d.backgroundHeight,onCardClicked:i.navigateToProject},null,8,["id","title","imageUrl","backgroundColor","backgroundHeight","onCardClicked"]))),128))])],2)]),j("div",$S,[qS,Le(l)])],512),j("section",zS,[Le(h)])])}const GS=Ht(xS,[["render",HS],["__scopeId","data-v-d4cfefce"]]),KS=[{path:"/",name:"Home",component:GS},{path:"/project/:id",name:"ProjectDetails",component:T1,props:!0},{path:"/guestbook",name:"Guestbook",component:()=>MR}],p0=n1({history:k2(),routes:KS});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function zo(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function c(d){try{h(r.next(d))}catch(p){o(p)}}function l(d){try{h(r.throw(d))}catch(p){o(p)}}function h(d){d.done?i(d.value):s(d.value).then(c,l)}h((r=r.apply(t,[])).next())})}const WS=/^(\d+(?:\.\d+)?)([^\d\s.]+)(?:\s+(\d+(?:\.\d+)?)([^\d\s.]+))?$/;function QS(t){var e,n,r,s;const i=WS.exec(t);let o,c;return o={value:+((e=i==null?void 0:i[1])!==null&&e!==void 0?e:0),unit:(n=i==null?void 0:i[2])!==null&&n!==void 0?n:"px"},i!=null&&i[3]?c={value:+((r=i==null?void 0:i[3])!==null&&r!==void 0?r:0),unit:(s=i==null?void 0:i[4])!==null&&s!==void 0?s:"px"}:c=Object.assign({},o),{x:o,y:c}}function JS(t){return`${t.x.value}${t.x.unit} ${t.y.value}${t.y.unit}`}function so(t,e){const n=QS(e);return n.x.unit!=="%"&&(n.x.value=n.x.value*t.inverseScaleX),n.y.unit!=="%"&&(n.y.value=n.y.value*t.inverseScaleY),JS(n)}function XS(t){const e=t.split(" ").map(parseFloat);return{x:e[0],y:e[1]}}const io=(t,e,n)=>n;function YS(t,e){const n=XS(t.getStyle("transformOrigin")),r=e.rect.width/t.rect.width,s=e.rect.height/t.rect.height,i=t.rect.width/e.rect.width,o=t.rect.height/e.rect.height,c=n.x/t.rect.width*(e.rect.width*(1-i)),l=n.y/t.rect.height*(e.rect.height*(1-o)),h=e.rect.left-t.rect.left+c,d=e.rect.top-t.rect.top+l;return{x:h,y:d,scaleX:r,scaleY:s,inverseScaleX:i,inverseScaleY:o}}/*! @license Rematrix v0.7.0

	Copyright 2020 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function Ho(t){if(t&&t.constructor===Array){var e=t.filter(function(r){return typeof r=="number"}).filter(function(r){return!isNaN(r)});if(t.length===6&&e.length===6){var n=Ra();return n[0]=e[0],n[1]=e[1],n[4]=e[2],n[5]=e[3],n[12]=e[4],n[13]=e[5],n}else if(t.length===16&&e.length===16)return t}throw new TypeError("Expected a `number[]` with length 6 or 16.")}function ZS(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var n=e[2].split(", ").map(parseFloat);return Ho(n)}}throw new TypeError("Expected a string containing `matrix()` or `matrix3d()")}function Ra(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function eC(t,e){for(var n=Ho(t),r=Ho(e),s=[],i=0;i<4;i++)for(var o=[n[i],n[i+4],n[i+8],n[i+12]],c=0;c<4;c++){var l=c*4,h=[r[l],r[l+1],r[l+2],r[l+3]],d=o[0]*h[0]+o[1]*h[1]+o[2]*h[2]+o[3]*h[3];s[i+l]=d}return s}function tC(t,e){var n=Ra();return n[0]=t,n[5]=typeof e=="number"?e:t,n}function nC(t){return"matrix3d("+Ho(t).join(", ")+")"}function rC(t,e){var n=Ra();return n[12]=t,e&&(n[13]=e),n}const sC=Ra();function bf(t,e){let n;e.startsWith("matrix")?n=ZS(e):n=sC;const r=[rC(t.x,t.y),n,tC(t.scaleX,t.scaleY)];let s;try{s=nC(r.reduce(eC))}catch{return process,"none"}return s}const Xc={element:{includeChildren:!0,ignoreTransparency:["img"]},zIndex:1,compositeOnly:!1,duration:"300ms",easing:"ease",relativeTo:[document]},iC=/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([01](?:\.\d+)?)\)$/i,oC=t=>/^#([a-f0-9]{4}){1,2}$/i.test(t),aC=t=>Math.floor((t.length-1)/3),cC=t=>t.match(new RegExp(`.{${aC(t)}}`,"g")),lC=t=>parseInt(t.repeat(2/t.length),16),uC=t=>+(t/256).toFixed(2),hC=t=>{const[e,n,r,s]=t.map(lC);return[e,n,r,uC(s)]};function dC(t){const e=iC.exec(t);let n,r,s,i;if(e)[n,r,s,i]=e.slice(1,5).map(parseFloat);else if(oC(t)){const o=cC(t.slice(1));if(!o)return!1;[n,r,s,i]=hC(o)}else return!1;return{r:n,g:r,b:s,a:i}}const fC=t=>t instanceof HTMLElement||t instanceof SVGElement;function pC(t){return t.split(/(?=[A-Z])/).join("-").toLowerCase()}function mC(t,e){Object.keys(t.dataset).forEach(n=>{const r=`data-${pC(n)}`;r.indexOf("data-illusory")!==0&&(!e||!e(r))&&t.removeAttribute(r)})}function gC(t,e){const n=window.getComputedStyle(t);if(n.cssText!=="")e.style.cssText=n.cssText;else{let r="";for(let s=0;s<n.length;s++)r+=`${n[s]}: ${n.getPropertyValue(n[s])}; `;e.style.cssText=r}e.style.transformOrigin=n.transformOrigin}function m0(t,e,n=0){let r=t.cloneNode(!1);if(fC(t)&&(gC(t,r),e.preserveDataAttributes!==!0&&mC(r,e.preserveDataAttributes)),typeof e.processClone=="function"){const s=e.processClone(r,n);if(s)r=s;else return null}return e.includeChildren&&t.childNodes.forEach(s=>{const i=m0(s,e,n+1);i&&r.appendChild(i)}),r}function g0(t,e){t.clone.clientWidth,e==null||e.clone.clientWidth}function _C(t){return t.compositeOnly?`transform ${t.duration} ${t.easing} 0s, opacity ${t.duration} ${t.easing} 0s`:`all ${t.duration} ${t.easing} 0s`}class Go{constructor(e,n){var r,s;this.originalStyle={},this.deltaHandlers={transform:bf,borderTopLeftRadius:so,borderTopRightRadius:so,borderBottomRightRadius:so,borderBottomLeftRadius:so},this.isAttached=!1,this.natural=e,this.initialStyleAttributeValue=this.natural.getAttribute("style"),this._shouldIgnoreTransparency=(r=n==null?void 0:n.ignoreTransparency)!==null&&r!==void 0?r:Xc.element.ignoreTransparency,this.natural.style.transition="none",this.natural.style.animation="none";{const i=this.natural.style.transform;this.natural.style.transform="none",this.rect=this.natural.getBoundingClientRect(),this.natural.style.transform=i}this.clone=m0(this.natural,{includeChildren:(s=n==null?void 0:n.includeChildren)!==null&&s!==void 0?s:Xc.element.includeChildren,preserveDataAttributes:n==null?void 0:n.preserveDataAttributes,processClone:n==null?void 0:n.processClone}),this.setStyle("left","auto"),this.setStyle("right","auto"),this.setStyle("top","auto"),this.setStyle("bottom","auto"),this.setStyle("margin","0 0 0 0"),this.setStyle("transition","none"),this.setStyle("animation","none"),this.setStyle("pointerEvents","none"),this.setStyle("position","fixed"),this.setStyle("left",`${this.rect.left}px`),this.setStyle("top",`${this.rect.top}px`),n!=null&&n.attachImmediately&&this.attach()}_makeCompositeOnly(){this.deltaHandlers={transform:bf,borderTopLeftRadius:io,borderTopRightRadius:io,borderBottomLeftRadius:io,borderBottomRightRadius:io}}get _ignoreTransparency(){return!!(this._shouldIgnoreTransparency===!0||Array.isArray(this._shouldIgnoreTransparency)&&this._shouldIgnoreTransparency.indexOf(this.clone.tagName.toLowerCase())!==-1)}_hasTransparentBackground(){if(this._ignoreTransparency)return!1;const e=dC(this.getStyle("backgroundColor"));return e?e.a<1:!1}_to(e){const n=YS(this,e);Object.keys(this.deltaHandlers).forEach(r=>{this.setStyle(r,this.deltaHandlers[r](n,e.getStyle(r),this.getStyle(r)))})}_enableTransitions(e){this.setStyle("transition",_C(e))}_disableTransitions(){this.setStyle("transition","none")}_setParent(e){this.isAttached&&this.detach(),this.hideNatural(),e.appendChild(this.clone),this.isAttached=!0}_resetNaturalStyleAttribute(){this.initialStyleAttributeValue?this.natural.setAttribute("style",this.initialStyleAttributeValue):this.natural.removeAttribute("style")}getStyle(e){var n;return(n=this.originalStyle[e])!==null&&n!==void 0?n:this.clone.style[e]}setStyle(e,n){this.originalStyle[e]=this.getStyle(e),this.clone.style[e]=n}waitFor(e){return new Promise(n=>{const r=s=>zo(this,void 0,void 0,function*(){e!=="any"&&s.propertyName!==e||(e==="any"&&(yield new Promise(i=>requestAnimationFrame(i))),this.clone.removeEventListener("transitionend",r),n())});this.clone.addEventListener("transitionend",r)})}hide(){this.setStyle("opacity","0")}show(){this.setStyle("opacity","1")}hideNatural(){this.natural.style.opacity="0"}showNatural(){this.natural.style.opacity="1"}flushCSS(){g0(this)}attach(){this._setParent(document.body)}detach(){this.isAttached&&(this.showNatural(),this.flushCSS(),this._resetNaturalStyleAttribute(),this.clone.remove(),this.isAttached=!1)}}const Wt=new Map;class pu{constructor(e,n){this.listeners=[],this.initialPositions=new Map,this.target=e,this.add(n)}static getCumulativeDelta(e){return e.dependencies.reduce(({x:n,y:r},s)=>{const i=Wt.get(s).getDelta(e);return{x:n+i.x,y:r+i.y}},{x:0,y:0})}get currentPosition(){return{x:this.target instanceof Document?window.scrollX:this.target.scrollLeft,y:this.target instanceof Document?window.scrollY:this.target.scrollTop}}getDelta(e){const n=this.initialPositions.get(e),r=this.currentPosition;return{x:n.x-r.x,y:n.y-r.y}}get listenerCount(){return this.listeners.length}add(e){this.listeners.push(e),this.initialPositions.set(e,this.currentPosition)}remove(e){this.listeners.splice(this.listeners.indexOf(e),1),this.initialPositions.delete(e)}dispatch(){this.listeners.forEach(e=>{const n=pu.getCumulativeDelta(e);e.handler(n)})}}let hc=!1;const Rf=t=>{hc||(hc=!0,requestAnimationFrame(()=>{hc=!1;const e=t.target;Wt.has(e)&&Wt.get(e).dispatch()}))};var Sf={add(t){t.dependencies.forEach(e=>{Wt.size||document.addEventListener("scroll",Rf,!0),Wt.has(e)?Wt.get(e).add(t):Wt.set(e,new pu(e,t))})},remove(t){t.dependencies.forEach(e=>{const n=Wt.get(e);n.remove(t),n.listenerCount||Wt.delete(e)}),Wt.size||document.removeEventListener("scroll",Rf,!0)}};function yC(t){const e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.zIndex=t.zIndex.toString(),e.style.transition=`opacity ${t.duration} ${t.easing} 0s`,document.body.appendChild(e);const n={dependencies:t.relativeTo,handler({x:r,y:s}){e.style.transform=`translate(${r}px, ${s}px)`}};return Sf.add(n),{setOpacity(r){e.style.opacity=r},add(r,s){[r,s].forEach(i=>{t.compositeOnly&&i._makeCompositeOnly(),i._setParent(e),i.setStyle("opacity",1)})},destroy(r,s,i){return zo(this,void 0,void 0,function*(){typeof t.beforeDetach=="function"&&(yield t.beforeDetach(r,s,i)),Sf.remove(n),r.detach(),s.detach(),e.remove()})}}}function Yc(t,e,n){const r=Object.assign(Object.assign({},Xc),n),s=h=>h instanceof Go?h:new Go(h,r.element),i=s(t),o=s(e);i.setStyle("zIndex",1),o.setStyle("zIndex",2);const c=yC(r);c.add(i,o),c.setOpacity(i.getStyle("opacity"));const l={cancel:()=>{throw new Error("Cancel called before assigned")}};return{finished:vC(i,o,c,r,l),cancel:()=>{l.cancel()}}}function vC(t,e,n,r,s){return new Promise(i=>zo(this,void 0,void 0,function*(){let o=!1;const c=()=>zo(this,void 0,void 0,function*(){o=!0,yield n.destroy(t,e,o),i(o)});s.cancel=c,e.hide(),e._to(t),typeof r.beforeAnimate=="function"&&(yield Promise.resolve(r.beforeAnimate(t,e))),!o&&(t._enableTransitions(r),e._enableTransitions(r),g0(t,e),t._to(e),e._to(e),!e._ignoreTransparency&&(e._hasTransparentBackground()||r.compositeOnly)&&t.hide(),e.show(),n.setOpacity(e.getStyle("opacity")),yield e.waitFor("any"),!o&&(yield n.destroy(t,e,o),i(o)))}))}var Zs=function(){return Zs=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Zs.apply(this,arguments)};function Zc(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function c(d){try{h(r.next(d))}catch(p){o(p)}}function l(d){try{h(r.throw(d))}catch(p){o(p)}}function h(d){d.done?i(d.value):s(d.value).then(c,l)}h((r=r.apply(t,[])).next())})}function el(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(h){return function(d){return l([h,d])}}function l(h){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,h[0]&&(n=0)),n;)try{if(r=1,s&&(i=h[0]&2?s.return:h[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,h[1])).done)return i;switch(s=0,i&&(h=[h[0]&2,i.value]),h[0]){case 0:case 1:i=h;break;case 4:return n.label++,{value:h[1],done:!1};case 5:n.label++,s=h[1],h=[0];continue;case 7:h=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(h[0]===6||h[0]===2)){n=0;continue}if(h[0]===3&&(!i||h[1]>i[0]&&h[1]<i[3])){n.label=h[1];break}if(h[0]===6&&n.label<i[1]){n.label=i[1],i=h;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(h);break}i[2]&&n.ops.pop(),n.trys.pop();continue}h=e.call(t,n)}catch(d){h=[6,d],s=0}finally{r=i=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}}var wC={easing:"ease",duration:"300ms",endDuration:"150ms",zIndex:1,compositeOnly:!1,includeChildren:!0,ignoreTransparency:["img"],restrictToViewport:!0,restrictToRoutes:!1};function _0(t){t.style.animation="none",t.style.transition="none",t.style.opacity="0"}function EC(t){return t.bottom>=0&&t.right>=0&&t.top<=window.innerHeight&&t.left<=window.innerWidth}function IC(t,e){var n=function(s,i,o){e.clear();var c=[];t.forEach(function(l,h){if(l.options.restrictToRoutes){if(Array.isArray(l.options.restrictToRoutes)){if(!l.options.restrictToRoutes.includes(s.path))return}else if(typeof l.options.restrictToRoutes=="function"&&!l.options.restrictToRoutes(s,i,h))return}if(l.options.restrictToViewport){var d=l.element.getBoundingClientRect();if(!EC(d))return}var p=new Go(l.element,{includeChildren:l.options.includeChildren,ignoreTransparency:l.options.ignoreTransparency,processClone:function(g,E){return E>0&&(g instanceof HTMLElement||g instanceof SVGElement)&&g.dataset.illusoryId&&e.has(g.dataset.illusoryId)&&c.push(g),g}});e.set(h,{id:h,element:p,options:l.options})}),t.clear(),c.forEach(function(l){_0(l)}),o()},r=function(s){var i=s.app.router;i.beforeEach(n)};return{SharedElementRouteGuard:n,NuxtSharedElementRouteGuard:r}}function Cf(){return new Promise(function(t){return requestAnimationFrame(t)})}var y0=new Map,tl=new Map;function Pf(t,e,n,r){return Zc(this,void 0,void 0,function(){var s,i;return el(this,function(o){switch(o.label){case 0:return t.dataset.illusoryId=r,y0.set(r,{element:t,options:n}),s=tl.get(r),s?(i=Yc(s.element,t,{element:{includeChildren:n.includeChildren,ignoreTransparency:s.options.ignoreTransparency,processClone:function(c,l){return l>0&&(c instanceof HTMLElement||c instanceof SVGElement)&&c.dataset.illusoryId&&tl.has(c.dataset.illusoryId)&&_0(c),c}},compositeOnly:s.options.compositeOnly,duration:s.options.duration,zIndex:s.options.zIndex,easing:s.options.easing,relativeTo:[],beforeAnimate:function(c,l){return Zc(this,void 0,void 0,function(){return el(this,function(h){switch(h.label){case 0:return[4,Cf()];case 1:return h.sent(),l.rect=l.natural.getBoundingClientRect(),l.setStyle("left","".concat(l.rect.left,"px")),l.setStyle("top","".concat(l.rect.top,"px")),l._to(c),[4,Cf()];case 2:return h.sent(),[2]}})})},beforeDetach:function(c,l){if(!(n.includeChildren||!n.endDuration||parseFloat(n.endDuration)<=0))return c.hide(),l.showNatural(),l.setStyle("transition","opacity ".concat(n.endDuration)),l.hide(),l.waitFor("opacity")}}).finished,[4,i]):[2];case 1:return o.sent(),[2]}})})}var kf=function(t,e){return new Go(t,e)},xf=function(t){return t===void 0&&(t={}),function(e,n,r){return Zc(void 0,void 0,void 0,function(){var s,i,o;return el(this,function(c){if(s=Zs(Zs(Zs({},wC),t),n.value),i=n.arg,!i)throw new Error("Missing ID on a v-shared-element. For usage see: https://github.com/justintaddei/v-shared-element#readme");return!((o=n.value)===null||o===void 0)&&o.$keepSharedElementAlive&&n.value.$keepSharedElementAlive(function(){Pf(e,r,s,i)}),Pf(e,r,s,i),[2]})})}},TC=function(t){return"config"in t&&"globalProperties"in t.config},AC={install:function(t,e){if(!TC(t)){t.prototype.$illusory=Yc,t.prototype.$createIllusoryElement=kf,t.directive("shared-element",{inserted:xf(e)});return}t.config.globalProperties.$illusory=Yc,t.config.globalProperties.$createIllusoryElement=kf,t.directive("shared-element",{mounted:xf(e)})}},bC=IC(y0,tl),RC=bC.SharedElementRouteGuard;const mu=mv(Zv);mu.directive("shared-element",AC);p0.beforeEach(RC);mu.use(p0);mu.mount("#app");
