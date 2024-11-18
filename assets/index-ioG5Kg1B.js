var dE=Object.defineProperty;var fE=(t,e,n)=>e in t?dE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var oe=(t,e,n)=>fE(t,typeof e!="symbol"?e+"":e,n);function pE(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function wd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z_={exports:{}},kd={},F_={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zl=Symbol.for("react.element"),mE=Symbol.for("react.portal"),gE=Symbol.for("react.fragment"),yE=Symbol.for("react.strict_mode"),vE=Symbol.for("react.profiler"),xE=Symbol.for("react.provider"),bE=Symbol.for("react.context"),_E=Symbol.for("react.forward_ref"),wE=Symbol.for("react.suspense"),kE=Symbol.for("react.memo"),SE=Symbol.for("react.lazy"),M2=Symbol.iterator;function TE(t){return t===null||typeof t!="object"?null:(t=M2&&t[M2]||t["@@iterator"],typeof t=="function"?t:null)}var B_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$_=Object.assign,U_={};function So(t,e,n){this.props=t,this.context=e,this.refs=U_,this.updater=n||B_}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H_(){}H_.prototype=So.prototype;function v0(t,e,n){this.props=t,this.context=e,this.refs=U_,this.updater=n||B_}var x0=v0.prototype=new H_;x0.constructor=v0;$_(x0,So.prototype);x0.isPureReactComponent=!0;var D2=Array.isArray,W_=Object.prototype.hasOwnProperty,b0={current:null},K_={key:!0,ref:!0,__self:!0,__source:!0};function G_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W_.call(e,i)&&!K_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:zl,type:t,key:s,ref:o,props:r,_owner:b0.current}}function EE(t,e){return{$$typeof:zl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _0(t){return typeof t=="object"&&t!==null&&t.$$typeof===zl}function CE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var V2=/\/+/g;function Kf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CE(""+t.key):e.toString(36)}function Fu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zl:case mE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Kf(o,0):i,D2(r)?(n="",t!=null&&(n=t.replace(V2,"$&/")+"/"),Fu(r,e,n,"",function(c){return c})):r!=null&&(_0(r)&&(r=EE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(V2,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",D2(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Kf(s,a);o+=Fu(s,e,n,l,r)}else if(l=TE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Kf(s,a++),o+=Fu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wc(t,e,n){if(t==null)return t;var i=[],r=0;return Fu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function PE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},Bu={transition:null},jE={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Bu,ReactCurrentOwner:b0};function q_(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:wc,forEach:function(t,e,n){wc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wc(t,function(){e++}),e},toArray:function(t){return wc(t,function(e){return e})||[]},only:function(t){if(!_0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=So;le.Fragment=gE;le.Profiler=vE;le.PureComponent=v0;le.StrictMode=yE;le.Suspense=wE;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jE;le.act=q_;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=b0.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)W_.call(e,l)&&!K_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:zl,type:t.type,key:r,ref:s,props:i,_owner:o}};le.createContext=function(t){return t={$$typeof:bE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xE,_context:t},t.Consumer=t};le.createElement=G_;le.createFactory=function(t){var e=G_.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:_E,render:t}};le.isValidElement=_0;le.lazy=function(t){return{$$typeof:SE,_payload:{_status:-1,_result:t},_init:PE}};le.memo=function(t,e){return{$$typeof:kE,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Bu.transition;Bu.transition={};try{t()}finally{Bu.transition=e}};le.unstable_act=q_;le.useCallback=function(t,e){return Ft.current.useCallback(t,e)};le.useContext=function(t){return Ft.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};le.useEffect=function(t,e){return Ft.current.useEffect(t,e)};le.useId=function(){return Ft.current.useId()};le.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Ft.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};le.useRef=function(t){return Ft.current.useRef(t)};le.useState=function(t){return Ft.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Ft.current.useTransition()};le.version="18.3.1";F_.exports=le;var V=F_.exports;const lt=wd(V),mm=pE({__proto__:null,default:lt},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AE=V,IE=Symbol.for("react.element"),RE=Symbol.for("react.fragment"),ME=Object.prototype.hasOwnProperty,DE=AE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VE={key:!0,ref:!0,__self:!0,__source:!0};function Q_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ME.call(e,i)&&!VE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:IE,type:t,key:s,ref:o,props:r,_owner:DE.current}}kd.Fragment=RE;kd.jsx=Q_;kd.jsxs=Q_;z_.exports=kd;var u=z_.exports,gm={},Y_={exports:{}},cn={},X_={exports:{}},J_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,q){var Y=U.length;U.push(q);e:for(;0<Y;){var J=Y-1>>>1,se=U[J];if(0<r(se,q))U[J]=q,U[Y]=se,Y=J;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var q=U[0],Y=U.pop();if(Y!==q){U[0]=Y;e:for(var J=0,se=U.length,_e=se>>>1;J<_e;){var Qe=2*(J+1)-1,rt=U[Qe],Ve=Qe+1,hn=U[Ve];if(0>r(rt,Y))Ve<se&&0>r(hn,rt)?(U[J]=hn,U[Ve]=Y,J=Ve):(U[J]=rt,U[Qe]=Y,J=Qe);else if(Ve<se&&0>r(hn,Y))U[J]=hn,U[Ve]=Y,J=Ve;else break e}}return q}function r(U,q){var Y=U.sortIndex-q.sortIndex;return Y!==0?Y:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,p=3,g=!1,y=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(U){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=U)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function A(U){if(x=!1,k(U),!y)if(n(l)!==null)y=!0,ne(M);else{var q=n(c);q!==null&&me(A,q.startTime-U)}}function M(U,q){y=!1,x&&(x=!1,_(S),S=-1),g=!0;var Y=p;try{for(k(q),f=n(l);f!==null&&(!(f.expirationTime>q)||U&&!R());){var J=f.callback;if(typeof J=="function"){f.callback=null,p=f.priorityLevel;var se=J(f.expirationTime<=q);q=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&i(l),k(q)}else i(l);f=n(l)}if(f!==null)var _e=!0;else{var Qe=n(c);Qe!==null&&me(A,Qe.startTime-q),_e=!1}return _e}finally{f=null,p=Y,g=!1}}var L=!1,E=null,S=-1,C=5,j=-1;function R(){return!(t.unstable_now()-j<C)}function D(){if(E!==null){var U=t.unstable_now();j=U;var q=!0;try{q=E(!0,U)}finally{q?I():(L=!1,E=null)}}else L=!1}var I;if(typeof b=="function")I=function(){b(D)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ae=re.port2;re.port1.onmessage=D,I=function(){ae.postMessage(null)}}else I=function(){w(D,0)};function ne(U){E=U,L||(L=!0,I())}function me(U,q){S=w(function(){U(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,ne(M))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var Y=p;p=q;try{return U()}finally{p=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Y=p;p=U;try{return q()}finally{p=Y}},t.unstable_scheduleCallback=function(U,q,Y){var J=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?J+Y:J):Y=J,U){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Y+se,U={id:d++,callback:q,priorityLevel:U,startTime:Y,expirationTime:se,sortIndex:-1},Y>J?(U.sortIndex=Y,e(c,U),n(l)===null&&U===n(c)&&(x?(_(S),S=-1):x=!0,me(A,Y-J))):(U.sortIndex=se,e(l,U),y||g||(y=!0,ne(M))),U},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(U){var q=p;return function(){var Y=p;p=q;try{return U.apply(this,arguments)}finally{p=Y}}}})(J_);X_.exports=J_;var LE=X_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OE=V,an=LE;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z_=new Set,Ya={};function ss(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(Ya[t]=e,t=0;t<e.length;t++)Z_.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ym=Object.prototype.hasOwnProperty,NE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L2={},O2={};function zE(t){return ym.call(O2,t)?!0:ym.call(L2,t)?!1:NE.test(t)?O2[t]=!0:(L2[t]=!0,!1)}function FE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BE(t,e,n,i){if(e===null||typeof e>"u"||FE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var w0=/[\-:]([a-z])/g;function k0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(w0,k0);xt[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(w0,k0);xt[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(w0,k0);xt[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function S0(t,e,n,i){var r=xt.hasOwnProperty(e)?xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BE(e,n,r,i)&&(n=null),i||r===null?zE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=OE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kc=Symbol.for("react.element"),As=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),T0=Symbol.for("react.strict_mode"),vm=Symbol.for("react.profiler"),ew=Symbol.for("react.provider"),tw=Symbol.for("react.context"),E0=Symbol.for("react.forward_ref"),xm=Symbol.for("react.suspense"),bm=Symbol.for("react.suspense_list"),C0=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),nw=Symbol.for("react.offscreen"),N2=Symbol.iterator;function Yo(t){return t===null||typeof t!="object"?null:(t=N2&&t[N2]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,Gf;function fa(t){if(Gf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gf=e&&e[1]||""}return`
`+Gf+t}var qf=!1;function Qf(t,e){if(!t||qf)return"";qf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{qf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fa(t):""}function $E(t){switch(t.tag){case 5:return fa(t.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return t=Qf(t.type,!1),t;case 11:return t=Qf(t.type.render,!1),t;case 1:return t=Qf(t.type,!0),t;default:return""}}function _m(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case As:return"Portal";case vm:return"Profiler";case T0:return"StrictMode";case xm:return"Suspense";case bm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tw:return(t.displayName||"Context")+".Consumer";case ew:return(t._context.displayName||"Context")+".Provider";case E0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C0:return e=t.displayName||null,e!==null?e:_m(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return _m(t(e))}catch{}}return null}function UE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _m(e);case 8:return e===T0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HE(t){var e=iw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sc(t){t._valueTracker||(t._valueTracker=HE(t))}function rw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=iw(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ph(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wm(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function z2(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sw(t,e){e=e.checked,e!=null&&S0(t,"checked",e,!1)}function km(t,e){sw(t,e);var n=sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sm(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function F2(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sm(t,e,n){(e!=="number"||ph(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pa=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function B2(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(pa(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function ow(t,e){var n=sr(e.value),i=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $2(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function aw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Em(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?aw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tc,lw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tc=Tc||document.createElement("div"),Tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WE=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){WE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function cw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function uw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cw(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var KE=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cm(t,e){if(e){if(KE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Pm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jm=null;function P0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Am=null,Gs=null,qs=null;function U2(t){if(t=$l(t)){if(typeof Am!="function")throw Error($(280));var e=t.stateNode;e&&(e=Pd(e),Am(t.stateNode,t.type,e))}}function hw(t){Gs?qs?qs.push(t):qs=[t]:Gs=t}function dw(){if(Gs){var t=Gs,e=qs;if(qs=Gs=null,U2(t),e)for(t=0;t<e.length;t++)U2(e[t])}}function fw(t,e){return t(e)}function pw(){}var Yf=!1;function mw(t,e,n){if(Yf)return t(e,n);Yf=!0;try{return fw(t,e,n)}finally{Yf=!1,(Gs!==null||qs!==null)&&(pw(),dw())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var i=Pd(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Im=!1;if(vi)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Im=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Im=!1}function GE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Pa=!1,mh=null,gh=!1,Rm=null,qE={onError:function(t){Pa=!0,mh=t}};function QE(t,e,n,i,r,s,o,a,l){Pa=!1,mh=null,GE.apply(qE,arguments)}function YE(t,e,n,i,r,s,o,a,l){if(QE.apply(this,arguments),Pa){if(Pa){var c=mh;Pa=!1,mh=null}else throw Error($(198));gh||(gh=!0,Rm=c)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function H2(t){if(os(t)!==t)throw Error($(188))}function XE(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return H2(r),t;if(s===i)return H2(r),e;s=s.sibling}throw Error($(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function yw(t){return t=XE(t),t!==null?vw(t):null}function vw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vw(t);if(e!==null)return e;t=t.sibling}return null}var xw=an.unstable_scheduleCallback,W2=an.unstable_cancelCallback,JE=an.unstable_shouldYield,ZE=an.unstable_requestPaint,Ke=an.unstable_now,e8=an.unstable_getCurrentPriorityLevel,j0=an.unstable_ImmediatePriority,bw=an.unstable_UserBlockingPriority,yh=an.unstable_NormalPriority,t8=an.unstable_LowPriority,_w=an.unstable_IdlePriority,Sd=null,Gn=null;function n8(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(Sd,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:s8,i8=Math.log,r8=Math.LN2;function s8(t){return t>>>=0,t===0?32:31-(i8(t)/r8|0)|0}var Ec=64,Cc=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vh(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ma(a):(s&=o,s!==0&&(i=ma(s)))}else o=n&~r,o!==0?i=ma(o):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Dn(e),r=1<<n,i|=t[n],e&=~r;return i}function o8(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a8(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=o8(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Mm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ww(){var t=Ec;return Ec<<=1,!(Ec&4194240)&&(Ec=64),t}function Xf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=n}function l8(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Dn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function A0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Dn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Se=0;function kw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sw,I0,Tw,Ew,Cw,Dm=!1,Pc=[],Wi=null,Ki=null,Gi=null,Za=new Map,el=new Map,Ni=[],c8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function K2(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(e.pointerId)}}function Jo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$l(e),e!==null&&I0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function u8(t,e,n,i,r){switch(e){case"focusin":return Wi=Jo(Wi,t,e,n,i,r),!0;case"dragenter":return Ki=Jo(Ki,t,e,n,i,r),!0;case"mouseover":return Gi=Jo(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Za.set(s,Jo(Za.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,el.set(s,Jo(el.get(s)||null,t,e,n,i,r)),!0}return!1}function Pw(t){var e=zr(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=gw(n),e!==null){t.blockedOn=e,Cw(t.priority,function(){Tw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);jm=i,n.target.dispatchEvent(i),jm=null}else return e=$l(n),e!==null&&I0(e),t.blockedOn=n,!1;e.shift()}return!0}function G2(t,e,n){$u(t)&&n.delete(e)}function h8(){Dm=!1,Wi!==null&&$u(Wi)&&(Wi=null),Ki!==null&&$u(Ki)&&(Ki=null),Gi!==null&&$u(Gi)&&(Gi=null),Za.forEach(G2),el.forEach(G2)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Dm||(Dm=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,h8)))}function tl(t){function e(r){return Zo(r,t)}if(0<Pc.length){Zo(Pc[0],t);for(var n=1;n<Pc.length;n++){var i=Pc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&Zo(Wi,t),Ki!==null&&Zo(Ki,t),Gi!==null&&Zo(Gi,t),Za.forEach(e),el.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Pw(n),n.blockedOn===null&&Ni.shift()}var Qs=Ci.ReactCurrentBatchConfig,xh=!0;function d8(t,e,n,i){var r=Se,s=Qs.transition;Qs.transition=null;try{Se=1,R0(t,e,n,i)}finally{Se=r,Qs.transition=s}}function f8(t,e,n,i){var r=Se,s=Qs.transition;Qs.transition=null;try{Se=4,R0(t,e,n,i)}finally{Se=r,Qs.transition=s}}function R0(t,e,n,i){if(xh){var r=Vm(t,e,n,i);if(r===null)ap(t,e,i,bh,n),K2(t,i);else if(u8(r,t,e,n,i))i.stopPropagation();else if(K2(t,i),e&4&&-1<c8.indexOf(t)){for(;r!==null;){var s=$l(r);if(s!==null&&Sw(s),s=Vm(t,e,n,i),s===null&&ap(t,e,i,bh,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ap(t,e,i,null,n)}}var bh=null;function Vm(t,e,n,i){if(bh=null,t=P0(i),t=zr(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bh=t,null}function jw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e8()){case j0:return 1;case bw:return 4;case yh:case t8:return 16;case _w:return 536870912;default:return 16}default:return 16}}var Fi=null,M0=null,Uu=null;function Aw(){if(Uu)return Uu;var t,e=M0,n=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Uu=r.slice(t,1<i?1-i:void 0)}function Hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jc(){return!0}function q2(){return!1}function un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jc:q2,this.isPropagationStopped=q2,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jc)},persist:function(){},isPersistent:jc}),e}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},D0=un(To),Bl=ze({},To,{view:0,detail:0}),p8=un(Bl),Jf,Zf,ea,Td=ze({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(Jf=t.screenX-ea.screenX,Zf=t.screenY-ea.screenY):Zf=Jf=0,ea=t),Jf)},movementY:function(t){return"movementY"in t?t.movementY:Zf}}),Q2=un(Td),m8=ze({},Td,{dataTransfer:0}),g8=un(m8),y8=ze({},Bl,{relatedTarget:0}),ep=un(y8),v8=ze({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),x8=un(v8),b8=ze({},To,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_8=un(b8),w8=ze({},To,{data:0}),Y2=un(w8),k8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E8(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T8[t])?!!e[t]:!1}function V0(){return E8}var C8=ze({},Bl,{key:function(t){if(t.key){var e=k8[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?S8[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V0,charCode:function(t){return t.type==="keypress"?Hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P8=un(C8),j8=ze({},Td,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X2=un(j8),A8=ze({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V0}),I8=un(A8),R8=ze({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),M8=un(R8),D8=ze({},Td,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),V8=un(D8),L8=[9,13,27,32],L0=vi&&"CompositionEvent"in window,ja=null;vi&&"documentMode"in document&&(ja=document.documentMode);var O8=vi&&"TextEvent"in window&&!ja,Iw=vi&&(!L0||ja&&8<ja&&11>=ja),J2=" ",Z2=!1;function Rw(t,e){switch(t){case"keyup":return L8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function N8(t,e){switch(t){case"compositionend":return Mw(e);case"keypress":return e.which!==32?null:(Z2=!0,J2);case"textInput":return t=e.data,t===J2&&Z2?null:t;default:return null}}function z8(t,e){if(Rs)return t==="compositionend"||!L0&&Rw(t,e)?(t=Aw(),Uu=M0=Fi=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iw&&e.locale!=="ko"?null:e.data;default:return null}}var F8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F8[t.type]:e==="textarea"}function Dw(t,e,n,i){hw(i),e=_h(e,"onChange"),0<e.length&&(n=new D0("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Aa=null,nl=null;function B8(t){Ww(t,0)}function Ed(t){var e=Vs(t);if(rw(e))return t}function $8(t,e){if(t==="change")return e}var Vw=!1;if(vi){var tp;if(vi){var np="oninput"in document;if(!np){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),np=typeof tv.oninput=="function"}tp=np}else tp=!1;Vw=tp&&(!document.documentMode||9<document.documentMode)}function nv(){Aa&&(Aa.detachEvent("onpropertychange",Lw),nl=Aa=null)}function Lw(t){if(t.propertyName==="value"&&Ed(nl)){var e=[];Dw(e,nl,t,P0(t)),mw(B8,e)}}function U8(t,e,n){t==="focusin"?(nv(),Aa=e,nl=n,Aa.attachEvent("onpropertychange",Lw)):t==="focusout"&&nv()}function H8(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ed(nl)}function W8(t,e){if(t==="click")return Ed(e)}function K8(t,e){if(t==="input"||t==="change")return Ed(e)}function G8(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:G8;function il(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ym.call(e,r)||!Ln(t[r],e[r]))return!1}return!0}function iv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rv(t,e){var n=iv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iv(n)}}function Ow(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ow(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nw(){for(var t=window,e=ph();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ph(t.document)}return e}function O0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function q8(t){var e=Nw(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ow(n.ownerDocument.documentElement,n)){if(i!==null&&O0(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rv(n,s);var o=rv(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Q8=vi&&"documentMode"in document&&11>=document.documentMode,Ms=null,Lm=null,Ia=null,Om=!1;function sv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Om||Ms==null||Ms!==ph(i)||(i=Ms,"selectionStart"in i&&O0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ia&&il(Ia,i)||(Ia=i,i=_h(Lm,"onSelect"),0<i.length&&(e=new D0("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Ac(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:Ac("Animation","AnimationEnd"),animationiteration:Ac("Animation","AnimationIteration"),animationstart:Ac("Animation","AnimationStart"),transitionend:Ac("Transition","TransitionEnd")},ip={},zw={};vi&&(zw=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Cd(t){if(ip[t])return ip[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zw)return ip[t]=e[n];return t}var Fw=Cd("animationend"),Bw=Cd("animationiteration"),$w=Cd("animationstart"),Uw=Cd("transitionend"),Hw=new Map,ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){Hw.set(t,e),ss(e,[t])}for(var rp=0;rp<ov.length;rp++){var sp=ov[rp],Y8=sp.toLowerCase(),X8=sp[0].toUpperCase()+sp.slice(1);gr(Y8,"on"+X8)}gr(Fw,"onAnimationEnd");gr(Bw,"onAnimationIteration");gr($w,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Uw,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J8=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function av(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,YE(i,e,void 0,t),t.currentTarget=null}function Ww(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;av(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;av(r,a,c),s=l}}}if(gh)throw t=Rm,gh=!1,Rm=null,t}function je(t,e){var n=e[$m];n===void 0&&(n=e[$m]=new Set);var i=t+"__bubble";n.has(i)||(Kw(e,t,2,!1),n.add(i))}function op(t,e,n){var i=0;e&&(i|=4),Kw(n,t,i,e)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function rl(t){if(!t[Ic]){t[Ic]=!0,Z_.forEach(function(n){n!=="selectionchange"&&(J8.has(n)||op(n,!1,t),op(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ic]||(e[Ic]=!0,op("selectionchange",!1,e))}}function Kw(t,e,n,i){switch(jw(e)){case 1:var r=d8;break;case 4:r=f8;break;default:r=R0}n=r.bind(null,e,n,t),r=void 0,!Im||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ap(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mw(function(){var c=s,d=P0(n),f=[];e:{var p=Hw.get(t);if(p!==void 0){var g=D0,y=t;switch(t){case"keypress":if(Hu(n)===0)break e;case"keydown":case"keyup":g=P8;break;case"focusin":y="focus",g=ep;break;case"focusout":y="blur",g=ep;break;case"beforeblur":case"afterblur":g=ep;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Q2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=g8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=I8;break;case Fw:case Bw:case $w:g=x8;break;case Uw:g=M8;break;case"scroll":g=p8;break;case"wheel":g=V8;break;case"copy":case"cut":case"paste":g=_8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=X2}var x=(e&4)!==0,w=!x&&t==="scroll",_=x?p!==null?p+"Capture":null:p;x=[];for(var b=c,k;b!==null;){k=b;var A=k.stateNode;if(k.tag===5&&A!==null&&(k=A,_!==null&&(A=Ja(b,_),A!=null&&x.push(sl(b,A,k)))),w)break;b=b.return}0<x.length&&(p=new g(p,y,null,n,d),f.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==jm&&(y=n.relatedTarget||n.fromElement)&&(zr(y)||y[xi]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?zr(y):null,y!==null&&(w=os(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(x=Q2,A="onMouseLeave",_="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(x=X2,A="onPointerLeave",_="onPointerEnter",b="pointer"),w=g==null?p:Vs(g),k=y==null?p:Vs(y),p=new x(A,b+"leave",g,n,d),p.target=w,p.relatedTarget=k,A=null,zr(d)===c&&(x=new x(_,b+"enter",y,n,d),x.target=k,x.relatedTarget=w,A=x),w=A,g&&y)t:{for(x=g,_=y,b=0,k=x;k;k=bs(k))b++;for(k=0,A=_;A;A=bs(A))k++;for(;0<b-k;)x=bs(x),b--;for(;0<k-b;)_=bs(_),k--;for(;b--;){if(x===_||_!==null&&x===_.alternate)break t;x=bs(x),_=bs(_)}x=null}else x=null;g!==null&&lv(f,p,g,x,!1),y!==null&&w!==null&&lv(f,w,y,x,!0)}}e:{if(p=c?Vs(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var M=$8;else if(ev(p))if(Vw)M=K8;else{M=H8;var L=U8}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(M=W8);if(M&&(M=M(t,c))){Dw(f,M,n,d);break e}L&&L(t,p,c),t==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&Sm(p,"number",p.value)}switch(L=c?Vs(c):window,t){case"focusin":(ev(L)||L.contentEditable==="true")&&(Ms=L,Lm=c,Ia=null);break;case"focusout":Ia=Lm=Ms=null;break;case"mousedown":Om=!0;break;case"contextmenu":case"mouseup":case"dragend":Om=!1,sv(f,n,d);break;case"selectionchange":if(Q8)break;case"keydown":case"keyup":sv(f,n,d)}var E;if(L0)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Rs?Rw(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Iw&&n.locale!=="ko"&&(Rs||S!=="onCompositionStart"?S==="onCompositionEnd"&&Rs&&(E=Aw()):(Fi=d,M0="value"in Fi?Fi.value:Fi.textContent,Rs=!0)),L=_h(c,S),0<L.length&&(S=new Y2(S,t,null,n,d),f.push({event:S,listeners:L}),E?S.data=E:(E=Mw(n),E!==null&&(S.data=E)))),(E=O8?N8(t,n):z8(t,n))&&(c=_h(c,"onBeforeInput"),0<c.length&&(d=new Y2("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}Ww(f,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _h(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ja(t,n),s!=null&&i.unshift(sl(t,s,r)),s=Ja(t,e),s!=null&&i.push(sl(t,s,r))),t=t.return}return i}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lv(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ja(n,s),l!=null&&o.unshift(sl(n,l,a))):r||(l=Ja(n,s),l!=null&&o.push(sl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Z8=/\r\n?/g,eC=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(Z8,`
`).replace(eC,"")}function Rc(t,e,n){if(e=cv(e),cv(t)!==e&&n)throw Error($(425))}function wh(){}var Nm=null,zm=null;function Fm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bm=typeof setTimeout=="function"?setTimeout:void 0,tC=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,nC=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(t){return uv.resolve(null).then(t).catch(iC)}:Bm;function iC(t){setTimeout(function(){throw t})}function lp(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),tl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);tl(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Eo,ol="__reactProps$"+Eo,xi="__reactContainer$"+Eo,$m="__reactEvents$"+Eo,rC="__reactListeners$"+Eo,sC="__reactHandles$"+Eo;function zr(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hv(t);t!==null;){if(n=t[Kn])return n;t=hv(t)}return e}t=n,n=t.parentNode}return null}function $l(t){return t=t[Kn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Pd(t){return t[ol]||null}var Um=[],Ls=-1;function yr(t){return{current:t}}function Re(t){0>Ls||(t.current=Um[Ls],Um[Ls]=null,Ls--)}function Ee(t,e){Ls++,Um[Ls]=t.current,t.current=e}var or={},Dt=yr(or),qt=yr(!1),Xr=or;function io(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qt(t){return t=t.childContextTypes,t!=null}function kh(){Re(qt),Re(Dt)}function dv(t,e,n){if(Dt.current!==or)throw Error($(168));Ee(Dt,e),Ee(qt,n)}function Gw(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error($(108,UE(t)||"Unknown",r));return ze({},n,i)}function Sh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Xr=Dt.current,Ee(Dt,t),Ee(qt,qt.current),!0}function fv(t,e,n){var i=t.stateNode;if(!i)throw Error($(169));n?(t=Gw(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,Re(qt),Re(Dt),Ee(Dt,t)):Re(qt),Ee(qt,n)}var li=null,jd=!1,cp=!1;function qw(t){li===null?li=[t]:li.push(t)}function oC(t){jd=!0,qw(t)}function vr(){if(!cp&&li!==null){cp=!0;var t=0,e=Se;try{var n=li;for(Se=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,jd=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),xw(j0,vr),r}finally{Se=e,cp=!1}}return null}var Os=[],Ns=0,Th=null,Eh=0,yn=[],vn=0,Jr=null,ui=1,hi="";function Ir(t,e){Os[Ns++]=Eh,Os[Ns++]=Th,Th=t,Eh=e}function Qw(t,e,n){yn[vn++]=ui,yn[vn++]=hi,yn[vn++]=Jr,Jr=t;var i=ui;t=hi;var r=32-Dn(i)-1;i&=~(1<<r),n+=1;var s=32-Dn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ui=1<<32-Dn(e)+r|n<<r|i,hi=s+t}else ui=1<<s|n<<r|i,hi=t}function N0(t){t.return!==null&&(Ir(t,1),Qw(t,1,0))}function z0(t){for(;t===Th;)Th=Os[--Ns],Os[Ns]=null,Eh=Os[--Ns],Os[Ns]=null;for(;t===Jr;)Jr=yn[--vn],yn[vn]=null,hi=yn[--vn],yn[vn]=null,ui=yn[--vn],yn[vn]=null}var sn=null,rn=null,Me=!1,In=null;function Yw(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,rn=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:ui,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,rn=null,!0):!1;default:return!1}}function Hm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wm(t){if(Me){var e=rn;if(e){var n=e;if(!pv(t,e)){if(Hm(t))throw Error($(418));e=qi(n.nextSibling);var i=sn;e&&pv(t,e)?Yw(i,n):(t.flags=t.flags&-4097|2,Me=!1,sn=t)}}else{if(Hm(t))throw Error($(418));t.flags=t.flags&-4097|2,Me=!1,sn=t}}}function mv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function Mc(t){if(t!==sn)return!1;if(!Me)return mv(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fm(t.type,t.memoizedProps)),e&&(e=rn)){if(Hm(t))throw Xw(),Error($(418));for(;e;)Yw(t,e),e=qi(e.nextSibling)}if(mv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=sn?qi(t.stateNode.nextSibling):null;return!0}function Xw(){for(var t=rn;t;)t=qi(t.nextSibling)}function ro(){rn=sn=null,Me=!1}function F0(t){In===null?In=[t]:In.push(t)}var aC=Ci.ReactCurrentBatchConfig;function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var i=n.stateNode}if(!i)throw Error($(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Dc(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gv(t){var e=t._init;return e(t._payload)}function Jw(t){function e(_,b){if(t){var k=_.deletions;k===null?(_.deletions=[b],_.flags|=16):k.push(b)}}function n(_,b){if(!t)return null;for(;b!==null;)e(_,b),b=b.sibling;return null}function i(_,b){for(_=new Map;b!==null;)b.key!==null?_.set(b.key,b):_.set(b.index,b),b=b.sibling;return _}function r(_,b){return _=Ji(_,b),_.index=0,_.sibling=null,_}function s(_,b,k){return _.index=k,t?(k=_.alternate,k!==null?(k=k.index,k<b?(_.flags|=2,b):k):(_.flags|=2,b)):(_.flags|=1048576,b)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,b,k,A){return b===null||b.tag!==6?(b=gp(k,_.mode,A),b.return=_,b):(b=r(b,k),b.return=_,b)}function l(_,b,k,A){var M=k.type;return M===Is?d(_,b,k.props.children,A,k.key):b!==null&&(b.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Vi&&gv(M)===b.type)?(A=r(b,k.props),A.ref=ta(_,b,k),A.return=_,A):(A=Xu(k.type,k.key,k.props,null,_.mode,A),A.ref=ta(_,b,k),A.return=_,A)}function c(_,b,k,A){return b===null||b.tag!==4||b.stateNode.containerInfo!==k.containerInfo||b.stateNode.implementation!==k.implementation?(b=yp(k,_.mode,A),b.return=_,b):(b=r(b,k.children||[]),b.return=_,b)}function d(_,b,k,A,M){return b===null||b.tag!==7?(b=Gr(k,_.mode,A,M),b.return=_,b):(b=r(b,k),b.return=_,b)}function f(_,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return b=gp(""+b,_.mode,k),b.return=_,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case kc:return k=Xu(b.type,b.key,b.props,null,_.mode,k),k.ref=ta(_,null,b),k.return=_,k;case As:return b=yp(b,_.mode,k),b.return=_,b;case Vi:var A=b._init;return f(_,A(b._payload),k)}if(pa(b)||Yo(b))return b=Gr(b,_.mode,k,null),b.return=_,b;Dc(_,b)}return null}function p(_,b,k,A){var M=b!==null?b.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return M!==null?null:a(_,b,""+k,A);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case kc:return k.key===M?l(_,b,k,A):null;case As:return k.key===M?c(_,b,k,A):null;case Vi:return M=k._init,p(_,b,M(k._payload),A)}if(pa(k)||Yo(k))return M!==null?null:d(_,b,k,A,null);Dc(_,k)}return null}function g(_,b,k,A,M){if(typeof A=="string"&&A!==""||typeof A=="number")return _=_.get(k)||null,a(b,_,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case kc:return _=_.get(A.key===null?k:A.key)||null,l(b,_,A,M);case As:return _=_.get(A.key===null?k:A.key)||null,c(b,_,A,M);case Vi:var L=A._init;return g(_,b,k,L(A._payload),M)}if(pa(A)||Yo(A))return _=_.get(k)||null,d(b,_,A,M,null);Dc(b,A)}return null}function y(_,b,k,A){for(var M=null,L=null,E=b,S=b=0,C=null;E!==null&&S<k.length;S++){E.index>S?(C=E,E=null):C=E.sibling;var j=p(_,E,k[S],A);if(j===null){E===null&&(E=C);break}t&&E&&j.alternate===null&&e(_,E),b=s(j,b,S),L===null?M=j:L.sibling=j,L=j,E=C}if(S===k.length)return n(_,E),Me&&Ir(_,S),M;if(E===null){for(;S<k.length;S++)E=f(_,k[S],A),E!==null&&(b=s(E,b,S),L===null?M=E:L.sibling=E,L=E);return Me&&Ir(_,S),M}for(E=i(_,E);S<k.length;S++)C=g(E,_,S,k[S],A),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?S:C.key),b=s(C,b,S),L===null?M=C:L.sibling=C,L=C);return t&&E.forEach(function(R){return e(_,R)}),Me&&Ir(_,S),M}function x(_,b,k,A){var M=Yo(k);if(typeof M!="function")throw Error($(150));if(k=M.call(k),k==null)throw Error($(151));for(var L=M=null,E=b,S=b=0,C=null,j=k.next();E!==null&&!j.done;S++,j=k.next()){E.index>S?(C=E,E=null):C=E.sibling;var R=p(_,E,j.value,A);if(R===null){E===null&&(E=C);break}t&&E&&R.alternate===null&&e(_,E),b=s(R,b,S),L===null?M=R:L.sibling=R,L=R,E=C}if(j.done)return n(_,E),Me&&Ir(_,S),M;if(E===null){for(;!j.done;S++,j=k.next())j=f(_,j.value,A),j!==null&&(b=s(j,b,S),L===null?M=j:L.sibling=j,L=j);return Me&&Ir(_,S),M}for(E=i(_,E);!j.done;S++,j=k.next())j=g(E,_,S,j.value,A),j!==null&&(t&&j.alternate!==null&&E.delete(j.key===null?S:j.key),b=s(j,b,S),L===null?M=j:L.sibling=j,L=j);return t&&E.forEach(function(D){return e(_,D)}),Me&&Ir(_,S),M}function w(_,b,k,A){if(typeof k=="object"&&k!==null&&k.type===Is&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case kc:e:{for(var M=k.key,L=b;L!==null;){if(L.key===M){if(M=k.type,M===Is){if(L.tag===7){n(_,L.sibling),b=r(L,k.props.children),b.return=_,_=b;break e}}else if(L.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Vi&&gv(M)===L.type){n(_,L.sibling),b=r(L,k.props),b.ref=ta(_,L,k),b.return=_,_=b;break e}n(_,L);break}else e(_,L);L=L.sibling}k.type===Is?(b=Gr(k.props.children,_.mode,A,k.key),b.return=_,_=b):(A=Xu(k.type,k.key,k.props,null,_.mode,A),A.ref=ta(_,b,k),A.return=_,_=A)}return o(_);case As:e:{for(L=k.key;b!==null;){if(b.key===L)if(b.tag===4&&b.stateNode.containerInfo===k.containerInfo&&b.stateNode.implementation===k.implementation){n(_,b.sibling),b=r(b,k.children||[]),b.return=_,_=b;break e}else{n(_,b);break}else e(_,b);b=b.sibling}b=yp(k,_.mode,A),b.return=_,_=b}return o(_);case Vi:return L=k._init,w(_,b,L(k._payload),A)}if(pa(k))return y(_,b,k,A);if(Yo(k))return x(_,b,k,A);Dc(_,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,b!==null&&b.tag===6?(n(_,b.sibling),b=r(b,k),b.return=_,_=b):(n(_,b),b=gp(k,_.mode,A),b.return=_,_=b),o(_)):n(_,b)}return w}var so=Jw(!0),Zw=Jw(!1),Ch=yr(null),Ph=null,zs=null,B0=null;function $0(){B0=zs=Ph=null}function U0(t){var e=Ch.current;Re(Ch),t._currentValue=e}function Km(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Ph=t,B0=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gt=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(B0!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if(Ph===null)throw Error($(308));zs=t,Ph.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var Fr=null;function H0(t){Fr===null?Fr=[t]:Fr.push(t)}function ek(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,H0(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Li=!1;function W0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tk(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,H0(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function Wu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,A0(t,n)}}function yv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jh(t,e,n,i){var r=t.updateQueue;Li=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(p=e,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(g,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(g,f,p):y,p==null)break e;f=ze({},f,p);break e;case 2:Li=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=f}}function vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error($(191,r));r.call(i)}}}var Ul={},qn=yr(Ul),al=yr(Ul),ll=yr(Ul);function Br(t){if(t===Ul)throw Error($(174));return t}function K0(t,e){switch(Ee(ll,e),Ee(al,t),Ee(qn,Ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Em(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Em(e,t)}Re(qn),Ee(qn,e)}function oo(){Re(qn),Re(al),Re(ll)}function nk(t){Br(ll.current);var e=Br(qn.current),n=Em(e,t.type);e!==n&&(Ee(al,t),Ee(qn,n))}function G0(t){al.current===t&&(Re(qn),Re(al))}var Le=yr(0);function Ah(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var up=[];function q0(){for(var t=0;t<up.length;t++)up[t]._workInProgressVersionPrimary=null;up.length=0}var Ku=Ci.ReactCurrentDispatcher,hp=Ci.ReactCurrentBatchConfig,Zr=0,Ne=null,tt=null,ot=null,Ih=!1,Ra=!1,cl=0,lC=0;function St(){throw Error($(321))}function Q0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function Y0(t,e,n,i,r,s){if(Zr=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ku.current=t===null||t.memoizedState===null?dC:fC,t=n(i,r),Ra){s=0;do{if(Ra=!1,cl=0,25<=s)throw Error($(301));s+=1,ot=tt=null,e.updateQueue=null,Ku.current=pC,t=n(i,r)}while(Ra)}if(Ku.current=Rh,e=tt!==null&&tt.next!==null,Zr=0,ot=tt=Ne=null,Ih=!1,e)throw Error($(300));return t}function X0(){var t=cl!==0;return cl=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Ne.memoizedState=ot=t:ot=ot.next=t,ot}function Sn(){if(tt===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=ot===null?Ne.memoizedState:ot.next;if(e!==null)ot=e,tt=t;else{if(t===null)throw Error($(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ot===null?Ne.memoizedState=ot=t:ot=ot.next=t}return ot}function ul(t,e){return typeof e=="function"?e(t):e}function dp(t){var e=Sn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var i=tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Zr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ne.lanes|=d,es|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ln(i,e.memoizedState)||(Gt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ne.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fp(t){var e=Sn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ln(s,e.memoizedState)||(Gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ik(){}function rk(t,e){var n=Ne,i=Sn(),r=e(),s=!Ln(i.memoizedState,r);if(s&&(i.memoizedState=r,Gt=!0),i=i.queue,J0(ak.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,hl(9,ok.bind(null,n,i,r,e),void 0,null),ct===null)throw Error($(349));Zr&30||sk(n,e,r)}return r}function sk(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ok(t,e,n,i){e.value=n,e.getSnapshot=i,lk(e)&&ck(t)}function ak(t,e,n){return n(function(){lk(e)&&ck(t)})}function lk(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function ck(t){var e=bi(t,1);e!==null&&Vn(e,t,1,-1)}function xv(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:t},e.queue=t,t=t.dispatch=hC.bind(null,Ne,t),[e.memoizedState,t]}function hl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function uk(){return Sn().memoizedState}function Gu(t,e,n,i){var r=$n();Ne.flags|=t,r.memoizedState=hl(1|e,n,void 0,i===void 0?null:i)}function Ad(t,e,n,i){var r=Sn();i=i===void 0?null:i;var s=void 0;if(tt!==null){var o=tt.memoizedState;if(s=o.destroy,i!==null&&Q0(i,o.deps)){r.memoizedState=hl(e,n,s,i);return}}Ne.flags|=t,r.memoizedState=hl(1|e,n,s,i)}function bv(t,e){return Gu(8390656,8,t,e)}function J0(t,e){return Ad(2048,8,t,e)}function hk(t,e){return Ad(4,2,t,e)}function dk(t,e){return Ad(4,4,t,e)}function fk(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pk(t,e,n){return n=n!=null?n.concat([t]):null,Ad(4,4,fk.bind(null,e,t),n)}function Z0(){}function mk(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Q0(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function gk(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Q0(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function yk(t,e,n){return Zr&21?(Ln(n,e)||(n=ww(),Ne.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=n)}function cC(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var i=hp.transition;hp.transition={};try{t(!1),e()}finally{Se=n,hp.transition=i}}function vk(){return Sn().memoizedState}function uC(t,e,n){var i=Xi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xk(t))bk(e,n);else if(n=ek(t,e,n,i),n!==null){var r=zt();Vn(n,t,i,r),_k(n,e,i)}}function hC(t,e,n){var i=Xi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xk(t))bk(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ln(a,o)){var l=e.interleaved;l===null?(r.next=r,H0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ek(t,e,r,i),n!==null&&(r=zt(),Vn(n,t,i,r),_k(n,e,i))}}function xk(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function bk(t,e){Ra=Ih=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _k(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,A0(t,n)}}var Rh={readContext:kn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},dC={readContext:kn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:bv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4194308,4,fk.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gu(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=uC.bind(null,Ne,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:xv,useDebugValue:Z0,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=xv(!1),e=t[0];return t=cC.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ne,r=$n();if(Me){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),ct===null)throw Error($(349));Zr&30||sk(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,bv(ak.bind(null,i,s,t),[t]),i.flags|=2048,hl(9,ok.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=ct.identifierPrefix;if(Me){var n=hi,i=ui;n=(i&~(1<<32-Dn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=cl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fC={readContext:kn,useCallback:mk,useContext:kn,useEffect:J0,useImperativeHandle:pk,useInsertionEffect:hk,useLayoutEffect:dk,useMemo:gk,useReducer:dp,useRef:uk,useState:function(){return dp(ul)},useDebugValue:Z0,useDeferredValue:function(t){var e=Sn();return yk(e,tt.memoizedState,t)},useTransition:function(){var t=dp(ul)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:ik,useSyncExternalStore:rk,useId:vk,unstable_isNewReconciler:!1},pC={readContext:kn,useCallback:mk,useContext:kn,useEffect:J0,useImperativeHandle:pk,useInsertionEffect:hk,useLayoutEffect:dk,useMemo:gk,useReducer:fp,useRef:uk,useState:function(){return fp(ul)},useDebugValue:Z0,useDeferredValue:function(t){var e=Sn();return tt===null?e.memoizedState=t:yk(e,tt.memoizedState,t)},useTransition:function(){var t=fp(ul)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:ik,useSyncExternalStore:rk,useId:vk,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gm(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Id={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=zt(),r=Xi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(Vn(e,t,r,i),Wu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=zt(),r=Xi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(Vn(e,t,r,i),Wu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),i=Xi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Qi(t,r,i),e!==null&&(Vn(e,t,i,n),Wu(e,t,i))}};function _v(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!il(n,i)||!il(r,s):!0}function wk(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=Qt(e)?Xr:Dt.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Id,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Id.enqueueReplaceState(e,e.state,null)}function qm(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},W0(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=Qt(e)?Xr:Dt.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gm(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Id.enqueueReplaceState(r,r.state,null),jh(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=$E(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mC=typeof WeakMap=="function"?WeakMap:Map;function kk(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dh||(Dh=!0,sg=i),Qm(t,e)},n}function Sk(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qm(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new mC;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=jC.bind(null,t,e,n),e.then(t,t))}function Sv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t)}var gC=Ci.ReactCurrentOwner,Gt=!1;function Nt(t,e,n,i){e.child=t===null?Zw(e,null,n,i):so(e,t.child,n,i)}function Ev(t,e,n,i,r){n=n.render;var s=e.ref;return Ys(e,r),i=Y0(t,e,n,i,s,r),n=X0(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(Me&&n&&N0(e),e.flags|=1,Nt(t,e,i,r),e.child)}function Cv(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!a1(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tk(t,e,s,i,r)):(t=Xu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:il,n(o,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function Tk(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(il(s,i)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,_i(t,e,r)}return Ym(t,e,n,i,r)}function Ek(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Bs,tn),tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Bs,tn),tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ee(Bs,tn),tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ee(Bs,tn),tn|=i;return Nt(t,e,r,n),e.child}function Ck(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ym(t,e,n,i,r){var s=Qt(n)?Xr:Dt.current;return s=io(e,s),Ys(e,r),n=Y0(t,e,n,i,s,r),i=X0(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(Me&&i&&N0(e),e.flags|=1,Nt(t,e,n,r),e.child)}function Pv(t,e,n,i,r){if(Qt(n)){var s=!0;Sh(e)}else s=!1;if(Ys(e,r),e.stateNode===null)qu(t,e),wk(e,n,i),qm(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=Qt(n)?Xr:Dt.current,c=io(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&wv(e,o,i,c),Li=!1;var p=e.memoizedState;o.state=p,jh(e,i,o,r),l=e.memoizedState,a!==i||p!==l||qt.current||Li?(typeof d=="function"&&(Gm(e,n,d,i),l=e.memoizedState),(a=Li||_v(e,n,a,i,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,tk(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=Qt(n)?Xr:Dt.current,l=io(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&wv(e,o,i,l),Li=!1,p=e.memoizedState,o.state=p,jh(e,i,o,r);var y=e.memoizedState;a!==f||p!==y||qt.current||Li?(typeof g=="function"&&(Gm(e,n,g,i),y=e.memoizedState),(c=Li||_v(e,n,c,i,p,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Xm(t,e,n,i,s,r)}function Xm(t,e,n,i,r,s){Ck(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fv(e,n,!1),_i(t,e,s);i=e.stateNode,gC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):Nt(t,e,a,s),e.memoizedState=i.state,r&&fv(e,n,!0),e.child}function Pk(t){var e=t.stateNode;e.pendingContext?dv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dv(t,e.context,!1),K0(t,e.containerInfo)}function jv(t,e,n,i,r){return ro(),F0(r),e.flags|=256,Nt(t,e,n,i),e.child}var Jm={dehydrated:null,treeContext:null,retryLane:0};function Zm(t){return{baseLanes:t,cachePool:null,transitions:null}}function jk(t,e,n){var i=e.pendingProps,r=Le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ee(Le,r&1),t===null)return Wm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dd(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zm(n),e.memoizedState=Jm,t):e1(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return yC(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Zm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jm,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function e1(t,e){return e=Dd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vc(t,e,n,i){return i!==null&&F0(i),so(e,t.child,null,n),t=e1(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yC(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pp(Error($(422))),Vc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dd({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Zm(o),e.memoizedState=Jm,s);if(!(e.mode&1))return Vc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error($(419)),i=pp(s,i,void 0),Vc(t,e,o,i)}if(a=(o&t.childLanes)!==0,Gt||a){if(i=ct,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),Vn(i,t,r,-1))}return o1(),i=pp(Error($(421))),Vc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=AC.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,rn=qi(r.nextSibling),sn=e,Me=!0,In=null,t!==null&&(yn[vn++]=ui,yn[vn++]=hi,yn[vn++]=Jr,ui=t.id,hi=t.overflow,Jr=e),e=e1(e,i.children),e.flags|=4096,e)}function Av(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Km(t.return,e,n)}function mp(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ak(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Nt(t,e,i.children,n),i=Le.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Av(t,n,e);else if(t.tag===19)Av(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ee(Le,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ah(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mp(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ah(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mp(e,!0,n,null,s);break;case"together":mp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vC(t,e,n){switch(e.tag){case 3:Pk(e),ro();break;case 5:nk(e);break;case 1:Qt(e.type)&&Sh(e);break;case 4:K0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ee(Ch,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ee(Le,Le.current&1),e.flags|=128,null):n&e.child.childLanes?jk(t,e,n):(Ee(Le,Le.current&1),t=_i(t,e,n),t!==null?t.sibling:null);Ee(Le,Le.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ak(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ee(Le,Le.current),i)break;return null;case 22:case 23:return e.lanes=0,Ek(t,e,n)}return _i(t,e,n)}var Ik,eg,Rk,Mk;Ik=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eg=function(){};Rk=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(qn.current);var s=null;switch(n){case"input":r=wm(t,r),i=wm(t,i),s=[];break;case"select":r=ze({},r,{value:void 0}),i=ze({},i,{value:void 0}),s=[];break;case"textarea":r=Tm(t,r),i=Tm(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wh)}Cm(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Mk=function(t,e,n,i){n!==i&&(e.flags|=4)};function na(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xC(t,e,n){var i=e.pendingProps;switch(z0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Qt(e.type)&&kh(),Tt(e),null;case 3:return i=e.stateNode,oo(),Re(qt),Re(Dt),q0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Mc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(lg(In),In=null))),eg(t,e),Tt(e),null;case 5:G0(e);var r=Br(ll.current);if(n=e.type,t!==null&&e.stateNode!=null)Rk(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error($(166));return Tt(e),null}if(t=Br(qn.current),Mc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[ol]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(r=0;r<ga.length;r++)je(ga[r],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":z2(i,s),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},je("invalid",i);break;case"textarea":B2(i,s),je("invalid",i)}Cm(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Rc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Rc(i.textContent,a,t),r=["children",""+a]):Ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",i)}switch(n){case"input":Sc(i),F2(i,s,!0);break;case"textarea":Sc(i),$2(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wh)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=aw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Kn]=e,t[ol]=i,Ik(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pm(n,i),n){case"dialog":je("cancel",t),je("close",t),r=i;break;case"iframe":case"object":case"embed":je("load",t),r=i;break;case"video":case"audio":for(r=0;r<ga.length;r++)je(ga[r],t);r=i;break;case"source":je("error",t),r=i;break;case"img":case"image":case"link":je("error",t),je("load",t),r=i;break;case"details":je("toggle",t),r=i;break;case"input":z2(t,i),r=wm(t,i),je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ze({},i,{value:void 0}),je("invalid",t);break;case"textarea":B2(t,i),r=Tm(t,i),je("invalid",t);break;default:r=i}Cm(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xa(t,l):typeof l=="number"&&Xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&je("scroll",t):l!=null&&S0(t,s,l,o))}switch(n){case"input":Sc(t),F2(t,i,!1);break;case"textarea":Sc(t),$2(t);break;case"option":i.value!=null&&t.setAttribute("value",""+sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wh)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)Mk(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error($(166));if(n=Br(ll.current),Br(qn.current),Mc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:Rc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Rc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return Tt(e),null;case 13:if(Re(Le),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&rn!==null&&e.mode&1&&!(e.flags&128))Xw(),ro(),e.flags|=98560,s=!1;else if(s=Mc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Kn]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tt(e),s=!1}else In!==null&&(lg(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Le.current&1?nt===0&&(nt=3):o1())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return oo(),eg(t,e),t===null&&rl(e.stateNode.containerInfo),Tt(e),null;case 10:return U0(e.type._context),Tt(e),null;case 17:return Qt(e.type)&&kh(),Tt(e),null;case 19:if(Re(Le),s=e.memoizedState,s===null)return Tt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)na(s,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ah(t),o!==null){for(e.flags|=128,na(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Le,Le.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>lo&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ah(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Me)return Tt(e),null}else 2*Ke()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=Le.current,Ee(Le,i?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return s1(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?tn&1073741824&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function bC(t,e){switch(z0(e),e.tag){case 1:return Qt(e.type)&&kh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),Re(qt),Re(Dt),q0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return G0(e),null;case 13:if(Re(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Le),null;case 4:return oo(),null;case 10:return U0(e.type._context),null;case 22:case 23:return s1(),null;case 24:return null;default:return null}}var Lc=!1,It=!1,_C=typeof WeakSet=="function"?WeakSet:Set,K=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){$e(t,e,i)}else n.current=null}function tg(t,e,n){try{n()}catch(i){$e(t,e,i)}}var Iv=!1;function wC(t,e){if(Nm=xh,t=Nw(),O0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zm={focusedElem:t,selectionRange:n},xh=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,w=y.memoizedState,_=e.stateNode,b=_.getSnapshotBeforeUpdate(e.elementType===e.type?x:jn(e.type,x),w);_.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(A){$e(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return y=Iv,Iv=!1,y}function Ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&tg(e,n,s)}r=r.next}while(r!==i)}}function Rd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ng(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dk(t){var e=t.alternate;e!==null&&(t.alternate=null,Dk(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[ol],delete e[$m],delete e[rC],delete e[sC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vk(t){return t.tag===5||t.tag===3||t.tag===4}function Rv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vk(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ig(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wh));else if(i!==4&&(t=t.child,t!==null))for(ig(t,e,n),t=t.sibling;t!==null;)ig(t,e,n),t=t.sibling}function rg(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rg(t,e,n),t=t.sibling;t!==null;)rg(t,e,n),t=t.sibling}var pt=null,An=!1;function Ii(t,e,n){for(n=n.child;n!==null;)Lk(t,e,n),n=n.sibling}function Lk(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(Sd,n)}catch{}switch(n.tag){case 5:It||Fs(n,e);case 6:var i=pt,r=An;pt=null,Ii(t,e,n),pt=i,An=r,pt!==null&&(An?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(An?(t=pt,n=n.stateNode,t.nodeType===8?lp(t.parentNode,n):t.nodeType===1&&lp(t,n),tl(t)):lp(pt,n.stateNode));break;case 4:i=pt,r=An,pt=n.stateNode.containerInfo,An=!0,Ii(t,e,n),pt=i,An=r;break;case 0:case 11:case 14:case 15:if(!It&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tg(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!It&&(Fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){$e(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(It=(i=It)||n.memoizedState!==null,Ii(t,e,n),It=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Mv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _C),e.forEach(function(i){var r=IC.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,An=!1;break e;case 3:pt=a.stateNode.containerInfo,An=!0;break e;case 4:pt=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(pt===null)throw Error($(160));Lk(s,o,r),pt=null,An=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){$e(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ok(e,t),e=e.sibling}function Ok(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Nn(t),i&4){try{Ma(3,t,t.return),Rd(3,t)}catch(x){$e(t,t.return,x)}try{Ma(5,t,t.return)}catch(x){$e(t,t.return,x)}}break;case 1:Pn(e,t),Nn(t),i&512&&n!==null&&Fs(n,n.return);break;case 5:if(Pn(e,t),Nn(t),i&512&&n!==null&&Fs(n,n.return),t.flags&32){var r=t.stateNode;try{Xa(r,"")}catch(x){$e(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sw(r,s),Pm(a,o);var c=Pm(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?uw(r,f):d==="dangerouslySetInnerHTML"?lw(r,f):d==="children"?Xa(r,f):S0(r,d,f,c)}switch(a){case"input":km(r,s);break;case"textarea":ow(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ks(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[ol]=s}catch(x){$e(t,t.return,x)}}break;case 6:if(Pn(e,t),Nn(t),i&4){if(t.stateNode===null)throw Error($(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){$e(t,t.return,x)}}break;case 3:if(Pn(e,t),Nn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(x){$e(t,t.return,x)}break;case 4:Pn(e,t),Nn(t);break;case 13:Pn(e,t),Nn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(i1=Ke())),i&4&&Mv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||d,Pn(e,t),It=c):Pn(e,t),Nn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(K=t,d=t.child;d!==null;){for(f=K=d;K!==null;){switch(p=K,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ma(4,p,p.return);break;case 1:Fs(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){$e(i,n,x)}}break;case 5:Fs(p,p.return);break;case 22:if(p.memoizedState!==null){Vv(f);continue}}g!==null?(g.return=p,K=g):Vv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cw("display",o))}catch(x){$e(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){$e(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pn(e,t),Nn(t),i&4&&Mv(t);break;case 21:break;default:Pn(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vk(n)){var i=n;break e}n=n.return}throw Error($(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xa(r,""),i.flags&=-33);var s=Rv(t);rg(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rv(t);ig(t,a,o);break;default:throw Error($(161))}}catch(l){$e(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kC(t,e,n){K=t,Nk(t)}function Nk(t,e,n){for(var i=(t.mode&1)!==0;K!==null;){var r=K,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Lc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||It;a=Lc;var c=It;if(Lc=o,(It=l)&&!c)for(K=r;K!==null;)o=K,l=o.child,o.tag===22&&o.memoizedState!==null?Lv(r):l!==null?(l.return=o,K=l):Lv(r);for(;s!==null;)K=s,Nk(s),s=s.sibling;K=r,Lc=a,It=c}Dv(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,K=s):Dv(t)}}function Dv(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Rd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!It)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&tl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}It||e.flags&512&&ng(e)}catch(p){$e(e,e.return,p)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Vv(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Lv(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rd(4,e)}catch(l){$e(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){$e(e,r,l)}}var s=e.return;try{ng(e)}catch(l){$e(e,s,l)}break;case 5:var o=e.return;try{ng(e)}catch(l){$e(e,o,l)}}}catch(l){$e(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var SC=Math.ceil,Mh=Ci.ReactCurrentDispatcher,t1=Ci.ReactCurrentOwner,wn=Ci.ReactCurrentBatchConfig,ge=0,ct=null,Ze=null,vt=0,tn=0,Bs=yr(0),nt=0,dl=null,es=0,Md=0,n1=0,Da=null,Wt=null,i1=0,lo=1/0,ai=null,Dh=!1,sg=null,Yi=null,Oc=!1,Bi=null,Vh=0,Va=0,og=null,Qu=-1,Yu=0;function zt(){return ge&6?Ke():Qu!==-1?Qu:Qu=Ke()}function Xi(t){return t.mode&1?ge&2&&vt!==0?vt&-vt:aC.transition!==null?(Yu===0&&(Yu=ww()),Yu):(t=Se,t!==0||(t=window.event,t=t===void 0?16:jw(t.type)),t):1}function Vn(t,e,n,i){if(50<Va)throw Va=0,og=null,Error($(185));Fl(t,n,i),(!(ge&2)||t!==ct)&&(t===ct&&(!(ge&2)&&(Md|=n),nt===4&&zi(t,vt)),Yt(t,i),n===1&&ge===0&&!(e.mode&1)&&(lo=Ke()+500,jd&&vr()))}function Yt(t,e){var n=t.callbackNode;a8(t,e);var i=vh(t,t===ct?vt:0);if(i===0)n!==null&&W2(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&W2(n),e===1)t.tag===0?oC(Ov.bind(null,t)):qw(Ov.bind(null,t)),nC(function(){!(ge&6)&&vr()}),n=null;else{switch(kw(i)){case 1:n=j0;break;case 4:n=bw;break;case 16:n=yh;break;case 536870912:n=_w;break;default:n=yh}n=Kk(n,zk.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zk(t,e){if(Qu=-1,Yu=0,ge&6)throw Error($(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=vh(t,t===ct?vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Lh(t,i);else{e=i;var r=ge;ge|=2;var s=Bk();(ct!==t||vt!==e)&&(ai=null,lo=Ke()+500,Kr(t,e));do try{CC();break}catch(a){Fk(t,a)}while(!0);$0(),Mh.current=s,ge=r,Ze!==null?e=0:(ct=null,vt=0,e=nt)}if(e!==0){if(e===2&&(r=Mm(t),r!==0&&(i=r,e=ag(t,r))),e===1)throw n=dl,Kr(t,0),zi(t,i),Yt(t,Ke()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!TC(r)&&(e=Lh(t,i),e===2&&(s=Mm(t),s!==0&&(i=s,e=ag(t,s))),e===1))throw n=dl,Kr(t,0),zi(t,i),Yt(t,Ke()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error($(345));case 2:Rr(t,Wt,ai);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=i1+500-Ke(),10<e)){if(vh(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bm(Rr.bind(null,t,Wt,ai),e);break}Rr(t,Wt,ai);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Dn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ke()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*SC(i/1960))-i,10<i){t.timeoutHandle=Bm(Rr.bind(null,t,Wt,ai),i);break}Rr(t,Wt,ai);break;case 5:Rr(t,Wt,ai);break;default:throw Error($(329))}}}return Yt(t,Ke()),t.callbackNode===n?zk.bind(null,t):null}function ag(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Lh(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&lg(e)),t}function lg(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function TC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ln(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~n1,e&=~Md,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dn(e),i=1<<n;t[n]=-1,e&=~i}}function Ov(t){if(ge&6)throw Error($(327));Xs();var e=vh(t,0);if(!(e&1))return Yt(t,Ke()),null;var n=Lh(t,e);if(t.tag!==0&&n===2){var i=Mm(t);i!==0&&(e=i,n=ag(t,i))}if(n===1)throw n=dl,Kr(t,0),zi(t,e),Yt(t,Ke()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,Wt,ai),Yt(t,Ke()),null}function r1(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(lo=Ke()+500,jd&&vr())}}function ts(t){Bi!==null&&Bi.tag===0&&!(ge&6)&&Xs();var e=ge;ge|=1;var n=wn.transition,i=Se;try{if(wn.transition=null,Se=1,t)return t()}finally{Se=i,wn.transition=n,ge=e,!(ge&6)&&vr()}}function s1(){tn=Bs.current,Re(Bs)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tC(n)),Ze!==null)for(n=Ze.return;n!==null;){var i=n;switch(z0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kh();break;case 3:oo(),Re(qt),Re(Dt),q0();break;case 5:G0(i);break;case 4:oo();break;case 13:Re(Le);break;case 19:Re(Le);break;case 10:U0(i.type._context);break;case 22:case 23:s1()}n=n.return}if(ct=t,Ze=t=Ji(t.current,null),vt=tn=e,nt=0,dl=null,n1=Md=es=0,Wt=Da=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fr=null}return t}function Fk(t,e){do{var n=Ze;try{if($0(),Ku.current=Rh,Ih){for(var i=Ne.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ih=!1}if(Zr=0,ot=tt=Ne=null,Ra=!1,cl=0,t1.current=null,n===null||n.return===null){nt=1,dl=e,Ze=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Sv(o);if(g!==null){g.flags&=-257,Tv(g,o,a,s,e),g.mode&1&&kv(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){kv(s,c,e),o1();break e}l=Error($(426))}}else if(Me&&a.mode&1){var w=Sv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Tv(w,o,a,s,e),F0(ao(l,a));break e}}s=l=ao(l,a),nt!==4&&(nt=2),Da===null?Da=[s]:Da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=kk(s,l,e);yv(s,_);break e;case 1:a=l;var b=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Yi===null||!Yi.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=Sk(s,a,e);yv(s,A);break e}}s=s.return}while(s!==null)}Uk(n)}catch(M){e=M,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function Bk(){var t=Mh.current;return Mh.current=Rh,t===null?Rh:t}function o1(){(nt===0||nt===3||nt===2)&&(nt=4),ct===null||!(es&268435455)&&!(Md&268435455)||zi(ct,vt)}function Lh(t,e){var n=ge;ge|=2;var i=Bk();(ct!==t||vt!==e)&&(ai=null,Kr(t,e));do try{EC();break}catch(r){Fk(t,r)}while(!0);if($0(),ge=n,Mh.current=i,Ze!==null)throw Error($(261));return ct=null,vt=0,nt}function EC(){for(;Ze!==null;)$k(Ze)}function CC(){for(;Ze!==null&&!JE();)$k(Ze)}function $k(t){var e=Wk(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?Uk(t):Ze=e,t1.current=null}function Uk(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bC(n,e),n!==null){n.flags&=32767,Ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Ze=null;return}}else if(n=xC(n,e,tn),n!==null){Ze=n;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);nt===0&&(nt=5)}function Rr(t,e,n){var i=Se,r=wn.transition;try{wn.transition=null,Se=1,PC(t,e,n,i)}finally{wn.transition=r,Se=i}return null}function PC(t,e,n,i){do Xs();while(Bi!==null);if(ge&6)throw Error($(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(l8(t,s),t===ct&&(Ze=ct=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oc||(Oc=!0,Kk(yh,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=Se;Se=1;var a=ge;ge|=4,t1.current=null,wC(t,n),Ok(n,t),q8(zm),xh=!!Nm,zm=Nm=null,t.current=n,kC(n),ZE(),ge=a,Se=o,wn.transition=s}else t.current=n;if(Oc&&(Oc=!1,Bi=t,Vh=r),s=t.pendingLanes,s===0&&(Yi=null),n8(n.stateNode),Yt(t,Ke()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dh)throw Dh=!1,t=sg,sg=null,t;return Vh&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===og?Va++:(Va=0,og=t):Va=0,vr(),null}function Xs(){if(Bi!==null){var t=kw(Vh),e=wn.transition,n=Se;try{if(wn.transition=null,Se=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,Vh=0,ge&6)throw Error($(331));var r=ge;for(ge|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(K=c;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Ma(8,d,s)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var p=d.sibling,g=d.return;if(Dk(d),d===c){K=null;break}if(p!==null){p.return=g,K=p;break}K=g}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,K=_;break e}K=s.return}}var b=t.current;for(K=b;K!==null;){o=K;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,K=k;else e:for(o=b;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rd(9,a)}}catch(M){$e(a,a.return,M)}if(a===o){K=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,K=A;break e}K=a.return}}if(ge=r,vr(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(Sd,t)}catch{}i=!0}return i}finally{Se=n,wn.transition=e}}return!1}function Nv(t,e,n){e=ao(n,e),e=kk(t,e,1),t=Qi(t,e,1),e=zt(),t!==null&&(Fl(t,1,e),Yt(t,e))}function $e(t,e,n){if(t.tag===3)Nv(t,t,n);else for(;e!==null;){if(e.tag===3){Nv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=ao(n,t),t=Sk(e,t,1),e=Qi(e,t,1),t=zt(),e!==null&&(Fl(e,1,t),Yt(e,t));break}}e=e.return}}function jC(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(vt&n)===n&&(nt===4||nt===3&&(vt&130023424)===vt&&500>Ke()-i1?Kr(t,0):n1|=n),Yt(t,e)}function Hk(t,e){e===0&&(t.mode&1?(e=Cc,Cc<<=1,!(Cc&130023424)&&(Cc=4194304)):e=1);var n=zt();t=bi(t,e),t!==null&&(Fl(t,e,n),Yt(t,n))}function AC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hk(t,n)}function IC(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error($(314))}i!==null&&i.delete(e),Hk(t,n)}var Wk;Wk=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gt=!1,vC(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,Me&&e.flags&1048576&&Qw(e,Eh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qu(t,e),t=e.pendingProps;var r=io(e,Dt.current);Ys(e,n),r=Y0(null,e,i,t,r,n);var s=X0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(s=!0,Sh(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,W0(e),r.updater=Id,e.stateNode=r,r._reactInternals=e,qm(e,i,t,n),e=Xm(null,e,i,!0,s,n)):(e.tag=0,Me&&s&&N0(e),Nt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(qu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=MC(i),t=jn(i,t),r){case 0:e=Ym(null,e,i,t,n);break e;case 1:e=Pv(null,e,i,t,n);break e;case 11:e=Ev(null,e,i,t,n);break e;case 14:e=Cv(null,e,i,jn(i.type,t),n);break e}throw Error($(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Ym(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Pv(t,e,i,r,n);case 3:e:{if(Pk(e),t===null)throw Error($(387));i=e.pendingProps,s=e.memoizedState,r=s.element,tk(t,e),jh(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error($(423)),e),e=jv(t,e,i,n,r);break e}else if(i!==r){r=ao(Error($(424)),e),e=jv(t,e,i,n,r);break e}else for(rn=qi(e.stateNode.containerInfo.firstChild),sn=e,Me=!0,In=null,n=Zw(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=_i(t,e,n);break e}Nt(t,e,i,n)}e=e.child}return e;case 5:return nk(e),t===null&&Wm(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Fm(i,r)?o=null:s!==null&&Fm(i,s)&&(e.flags|=32),Ck(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&Wm(e),null;case 13:return jk(t,e,n);case 4:return K0(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):Nt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Ev(t,e,i,r,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ee(Ch,i._currentValue),i._currentValue=o,s!==null)if(Ln(s.value,o)){if(s.children===r.children&&!qt.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Km(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Km(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ys(e,n),r=kn(r),i=i(r),e.flags|=1,Nt(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Cv(t,e,i,r,n);case 15:return Tk(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),qu(t,e),e.tag=1,Qt(i)?(t=!0,Sh(e)):t=!1,Ys(e,n),wk(e,i,r),qm(e,i,r,n),Xm(null,e,i,!0,t,n);case 19:return Ak(t,e,n);case 22:return Ek(t,e,n)}throw Error($(156,e.tag))};function Kk(t,e){return xw(t,e)}function RC(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,i){return new RC(t,e,n,i)}function a1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MC(t){if(typeof t=="function")return a1(t)?1:0;if(t!=null){if(t=t.$$typeof,t===E0)return 11;if(t===C0)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")a1(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return Gr(n.children,r,s,e);case T0:o=8,r|=8;break;case vm:return t=xn(12,n,e,r|2),t.elementType=vm,t.lanes=s,t;case xm:return t=xn(13,n,e,r),t.elementType=xm,t.lanes=s,t;case bm:return t=xn(19,n,e,r),t.elementType=bm,t.lanes=s,t;case nw:return Dd(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ew:o=10;break e;case tw:o=9;break e;case E0:o=11;break e;case C0:o=14;break e;case Vi:o=16,i=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=xn(7,t,i,e),t.lanes=n,t}function Dd(t,e,n,i){return t=xn(22,t,i,e),t.elementType=nw,t.lanes=n,t.stateNode={isHidden:!1},t}function gp(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function yp(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DC(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xf(0),this.expirationTimes=Xf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function l1(t,e,n,i,r,s,o,a,l){return t=new DC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},W0(s),t}function VC(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gk(t){if(!t)return or;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Qt(n))return Gw(t,n,e)}return e}function qk(t,e,n,i,r,s,o,a,l){return t=l1(n,i,!0,t,r,s,o,a,l),t.context=Gk(null),n=t.current,i=zt(),r=Xi(n),s=fi(i,r),s.callback=e??null,Qi(n,s,r),t.current.lanes=r,Fl(t,r,i),Yt(t,i),t}function Vd(t,e,n,i){var r=e.current,s=zt(),o=Xi(r);return n=Gk(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Qi(r,e,o),t!==null&&(Vn(t,r,o,s),Wu(t,r,o)),o}function Oh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function c1(t,e){zv(t,e),(t=t.alternate)&&zv(t,e)}function LC(){return null}var Qk=typeof reportError=="function"?reportError:function(t){console.error(t)};function u1(t){this._internalRoot=t}Ld.prototype.render=u1.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Vd(t,e,null,null)};Ld.prototype.unmount=u1.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){Vd(null,t,null,null)}),e[xi]=null}};function Ld(t){this._internalRoot=t}Ld.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ew();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Pw(t)}};function h1(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fv(){}function OC(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Oh(o);s.call(c)}}var o=qk(e,i,t,0,null,!1,!1,"",Fv);return t._reactRootContainer=o,t[xi]=o.current,rl(t.nodeType===8?t.parentNode:t),ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Oh(l);a.call(c)}}var l=l1(t,0,!1,null,null,!1,!1,"",Fv);return t._reactRootContainer=l,t[xi]=l.current,rl(t.nodeType===8?t.parentNode:t),ts(function(){Vd(e,l,n,i)}),l}function Nd(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Oh(o);a.call(l)}}Vd(e,o,t,r)}else o=OC(n,e,t,r,i);return Oh(o)}Sw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ma(e.pendingLanes);n!==0&&(A0(e,n|1),Yt(e,Ke()),!(ge&6)&&(lo=Ke()+500,vr()))}break;case 13:ts(function(){var i=bi(t,1);if(i!==null){var r=zt();Vn(i,t,1,r)}}),c1(t,1)}};I0=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=zt();Vn(e,t,134217728,n)}c1(t,134217728)}};Tw=function(t){if(t.tag===13){var e=Xi(t),n=bi(t,e);if(n!==null){var i=zt();Vn(n,t,e,i)}c1(t,e)}};Ew=function(){return Se};Cw=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};Am=function(t,e,n){switch(e){case"input":if(km(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pd(i);if(!r)throw Error($(90));rw(i),km(i,r)}}}break;case"textarea":ow(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};fw=r1;pw=ts;var NC={usingClientEntryPoint:!1,Events:[$l,Vs,Pd,hw,dw,r1]},ia={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zC={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yw(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||LC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{Sd=Nc.inject(zC),Gn=Nc}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NC;cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h1(e))throw Error($(200));return VC(t,e,null,n)};cn.createRoot=function(t,e){if(!h1(t))throw Error($(299));var n=!1,i="",r=Qk;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=l1(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,rl(t.nodeType===8?t.parentNode:t),new u1(e)};cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=yw(e),t=t===null?null:t.stateNode,t};cn.flushSync=function(t){return ts(t)};cn.hydrate=function(t,e,n){if(!Od(e))throw Error($(200));return Nd(null,t,e,!0,n)};cn.hydrateRoot=function(t,e,n){if(!h1(t))throw Error($(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Qk;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qk(e,null,t,1,n??null,r,!1,s,o),t[xi]=e.current,rl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ld(e)};cn.render=function(t,e,n){if(!Od(e))throw Error($(200));return Nd(null,t,e,!1,n)};cn.unmountComponentAtNode=function(t){if(!Od(t))throw Error($(40));return t._reactRootContainer?(ts(function(){Nd(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};cn.unstable_batchedUpdates=r1;cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Od(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Nd(t,e,n,!1,i)};cn.version="18.3.1-next-f1338f8080-20240426";function Yk(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yk)}catch(t){console.error(t)}}Yk(),Y_.exports=cn;var FC=Y_.exports,Bv=FC;gm.createRoot=Bv.createRoot,gm.hydrateRoot=Bv.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fl.apply(this,arguments)}var $i;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($i||($i={}));const $v="popstate";function BC(t){t===void 0&&(t={});function e(r,s){let{pathname:o="/",search:a="",hash:l=""}=as(r.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),cg("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let o=r.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Nh(s))}function i(r,s){d1(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return UC(e,n,i,t)}function He(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function d1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $C(){return Math.random().toString(36).substr(2,8)}function Uv(t,e){return{usr:t.state,key:t.key,idx:e}}function cg(t,e,n,i){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?as(e):e,{state:n,key:e&&e.key||i||$C()})}function Nh(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function as(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function UC(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=$i.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(fl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=$i.Pop;let w=d(),_=w==null?null:w-c;c=w,l&&l({action:a,location:x.location,delta:_})}function p(w,_){a=$i.Push;let b=cg(x.location,w,_);n&&n(b,w),c=d()+1;let k=Uv(b,c),A=x.createHref(b);try{o.pushState(k,"",A)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(A)}s&&l&&l({action:a,location:x.location,delta:1})}function g(w,_){a=$i.Replace;let b=cg(x.location,w,_);n&&n(b,w),c=d();let k=Uv(b,c),A=x.createHref(b);o.replaceState(k,"",A),s&&l&&l({action:a,location:x.location,delta:0})}function y(w){let _=r.location.origin!=="null"?r.location.origin:r.location.href,b=typeof w=="string"?w:Nh(w);return b=b.replace(/ $/,"%20"),He(_,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,_)}let x={get action(){return a},get location(){return t(r,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener($v,f),l=w,()=>{r.removeEventListener($v,f),l=null}},createHref(w){return e(r,w)},createURL:y,encodeLocation(w){let _=y(w);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:p,replace:g,go(w){return o.go(w)}};return x}var Hv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hv||(Hv={}));function HC(t,e,n){return n===void 0&&(n="/"),WC(t,e,n,!1)}function WC(t,e,n,i){let r=typeof e=="string"?as(e):e,s=co(r.pathname||"/",n);if(s==null)return null;let o=Xk(t);KC(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=iP(s);a=tP(o[l],c,i)}return a}function Xk(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(He(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Zi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(He(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Xk(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ZC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Jk(s.path))r(s,o,l)}),e}function Jk(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Jk(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function KC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eP(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const GC=/^:[\w-]+$/,qC=3,QC=2,YC=1,XC=10,JC=-2,Wv=t=>t==="*";function ZC(t,e){let n=t.split("/"),i=n.length;return n.some(Wv)&&(i+=JC),e&&(i+=QC),n.filter(r=>!Wv(r)).reduce((r,s)=>r+(GC.test(s)?qC:s===""?YC:XC),i)}function eP(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function tP(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=zh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=zh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Zi([s,f.pathname]),pathnameBase:aP(Zi([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Zi([s,f.pathnameBase]))}return o}function zh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=nP(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[f];return g&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function nP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),d1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function iP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return d1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function co(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function rP(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?as(t):t;return{pathname:n?n.startsWith("/")?n:sP(n,e):e,search:lP(i),hash:cP(r)}}function sP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function vp(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zk(t,e){let n=oP(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function e4(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=as(t):(r=fl({},t),He(!r.pathname||!r.pathname.includes("?"),vp("?","pathname","search",r)),He(!r.pathname||!r.pathname.includes("#"),vp("#","pathname","hash",r)),He(!r.search||!r.search.includes("#"),vp("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=rP(r,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Zi=t=>t.join("/").replace(/\/\/+/g,"/"),aP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function uP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const t4=["post","put","patch","delete"];new Set(t4);const hP=["get",...t4];new Set(hP);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pl.apply(this,arguments)}const zd=V.createContext(null),n4=V.createContext(null),xr=V.createContext(null),Fd=V.createContext(null),br=V.createContext({outlet:null,matches:[],isDataRoute:!1}),i4=V.createContext(null);function dP(t,e){let{relative:n}=e===void 0?{}:e;Hl()||He(!1);let{basename:i,navigator:r}=V.useContext(xr),{hash:s,pathname:o,search:a}=Bd(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Zi([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Hl(){return V.useContext(Fd)!=null}function Wl(){return Hl()||He(!1),V.useContext(Fd).location}function r4(t){V.useContext(xr).static||V.useLayoutEffect(t)}function De(){let{isDataRoute:t}=V.useContext(br);return t?CP():fP()}function fP(){Hl()||He(!1);let t=V.useContext(zd),{basename:e,future:n,navigator:i}=V.useContext(xr),{matches:r}=V.useContext(br),{pathname:s}=Wl(),o=JSON.stringify(Zk(r,n.v7_relativeSplatPath)),a=V.useRef(!1);return r4(()=>{a.current=!0}),V.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=e4(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Zi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,o,s,t])}const pP=V.createContext(null);function mP(t){let e=V.useContext(br).outlet;return e&&V.createElement(pP.Provider,{value:t},e)}function Bd(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=V.useContext(xr),{matches:r}=V.useContext(br),{pathname:s}=Wl(),o=JSON.stringify(Zk(r,i.v7_relativeSplatPath));return V.useMemo(()=>e4(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function gP(t,e){return yP(t,e)}function yP(t,e,n,i){Hl()||He(!1);let{navigator:r}=V.useContext(xr),{matches:s}=V.useContext(br),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Wl(),d;if(e){var f;let w=typeof e=="string"?as(e):e;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||He(!1),d=w}else d=c;let p=d.pathname||"/",g=p;if(l!=="/"){let w=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=HC(t,{pathname:g}),x=wP(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Zi([l,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Zi([l,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,i);return e&&x?V.createElement(Fd.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:$i.Pop}},x):x}function vP(){let t=EP(),e=uP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:r},n):null,null)}const xP=V.createElement(vP,null);class bP extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(br.Provider,{value:this.props.routeContext},V.createElement(i4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _P(t){let{routeContext:e,match:n,children:i}=t,r=V.useContext(zd);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(br.Provider,{value:e},i)}function wP(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||He(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:g}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||y){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let g,y=!1,x=null,w=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||xP,l&&(c<0&&p===0?(y=!0,w=null):c===p&&(y=!0,w=f.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,p+1)),b=()=>{let k;return g?k=x:y?k=w:f.route.Component?k=V.createElement(f.route.Component,null):f.route.element?k=f.route.element:k=d,V.createElement(_P,{match:f,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:k})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?V.createElement(bP,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:b(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):b()},null)}var s4=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(s4||{}),Fh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Fh||{});function kP(t){let e=V.useContext(zd);return e||He(!1),e}function SP(t){let e=V.useContext(n4);return e||He(!1),e}function TP(t){let e=V.useContext(br);return e||He(!1),e}function o4(t){let e=TP(),n=e.matches[e.matches.length-1];return n.route.id||He(!1),n.route.id}function EP(){var t;let e=V.useContext(i4),n=SP(Fh.UseRouteError),i=o4(Fh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function CP(){let{router:t}=kP(s4.UseNavigateStable),e=o4(Fh.UseNavigateStable),n=V.useRef(!1);return r4(()=>{n.current=!0}),V.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,pl({fromRouteId:e},s)))},[t,e])}const Kv={};function PP(t,e){Kv[e]||(Kv[e]=!0,console.warn(e))}const Gv=(t,e,n)=>PP(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function jP(t,e){t!=null&&t.v7_startTransition||Gv("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&Gv("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function f1(t){return mP(t.context)}function ue(t){He(!1)}function AP(t){let{basename:e="/",children:n=null,location:i,navigationType:r=$i.Pop,navigator:s,static:o=!1,future:a}=t;Hl()&&He(!1);let l=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:l,navigator:s,static:o,future:pl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=as(i));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:y="default"}=i,x=V.useMemo(()=>{let w=co(d,l);return w==null?null:{location:{pathname:w,search:f,hash:p,state:g,key:y},navigationType:r}},[l,d,f,p,g,y,r]);return x==null?null:V.createElement(xr.Provider,{value:c},V.createElement(Fd.Provider,{children:n,value:x}))}function IP(t){let{children:e,location:n}=t;return gP(ug(e),n)}new Promise(()=>{});function ug(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(i,r)=>{if(!V.isValidElement(i))return;let s=[...e,r];if(i.type===V.Fragment){n.push.apply(n,ug(i.props.children,s));return}i.type!==ue&&He(!1),!i.props.index||!i.props.children||He(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=ug(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bh(){return Bh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Bh.apply(this,arguments)}function a4(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function RP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MP(t,e){return t.button===0&&(!e||e==="_self")&&!RP(t)}const DP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],VP=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],LP="6";try{window.__reactRouterVersion=LP}catch{}const OP=V.createContext({isTransitioning:!1}),NP="startTransition",qv=mm[NP];function l4(t){let{basename:e,children:n,future:i,window:r}=t,s=V.useRef();s.current==null&&(s.current=BC({window:r,v5Compat:!0}));let o=s.current,[a,l]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=V.useCallback(f=>{c&&qv?qv(()=>l(f)):l(f)},[l,c]);return V.useLayoutEffect(()=>o.listen(d),[o,d]),V.useEffect(()=>jP(i),[i]),V.createElement(AP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const zP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$d=V.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,p=a4(e,DP),{basename:g}=V.useContext(xr),y,x=!1;if(typeof c=="string"&&FP.test(c)&&(y=c,zP))try{let k=new URL(window.location.href),A=c.startsWith("//")?new URL(k.protocol+c):new URL(c),M=co(A.pathname,g);A.origin===k.origin&&M!=null?c=M+A.search+A.hash:x=!0}catch{}let w=dP(c,{relative:r}),_=$P(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:r,viewTransition:f});function b(k){i&&i(k),k.defaultPrevented||_(k)}return V.createElement("a",Bh({},p,{href:y||w,onClick:x||s?i:b,ref:n,target:l}))}),c4=V.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:d}=e,f=a4(e,VP),p=Bd(l,{relative:f.relative}),g=Wl(),y=V.useContext(n4),{navigator:x,basename:w}=V.useContext(xr),_=y!=null&&UP(p)&&c===!0,b=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,k=g.pathname,A=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(k=k.toLowerCase(),A=A?A.toLowerCase():null,b=b.toLowerCase()),A&&w&&(A=co(A,w)||A);const M=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let L=k===b||!o&&k.startsWith(b)&&k.charAt(M)==="/",E=A!=null&&(A===b||!o&&A.startsWith(b)&&A.charAt(b.length)==="/"),S={isActive:L,isPending:E,isTransitioning:_},C=L?i:void 0,j;typeof s=="function"?j=s(S):j=[s,L?"active":null,E?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(S):a;return V.createElement($d,Bh({},f,{"aria-current":C,className:j,ref:n,style:R,to:l,viewTransition:c}),typeof d=="function"?d(S):d)});var hg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(hg||(hg={}));var Qv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qv||(Qv={}));function BP(t){let e=V.useContext(zd);return e||He(!1),e}function $P(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=De(),c=Wl(),d=Bd(t,{relative:o});return V.useCallback(f=>{if(MP(f,n)){f.preventDefault();let p=i!==void 0?i:Nh(c)===Nh(d);l(t,{replace:p,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,i,r,n,t,s,o,a])}function UP(t,e){e===void 0&&(e={});let n=V.useContext(OP);n==null&&He(!1);let{basename:i}=BP(hg.useViewTransitionState),r=Bd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=co(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=co(n.nextLocation.pathname,i)||n.nextLocation.pathname;return zh(r.pathname,o)!=null||zh(r.pathname,s)!=null}function dg(){return dg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},dg.apply(null,arguments)}function u4(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var HP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,WP=u4(function(t){return HP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),KP=!1;function GP(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function qP(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var QP=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!KP:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(qP(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=GP(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Ct="-ms-",$h="-moz-",ve="-webkit-",h4="comm",p1="rule",m1="decl",YP="@import",d4="@keyframes",XP="@layer",JP=Math.abs,Ud=String.fromCharCode,ZP=Object.assign;function ej(t,e){return gt(t,0)^45?(((e<<2^gt(t,0))<<2^gt(t,1))<<2^gt(t,2))<<2^gt(t,3):0}function f4(t){return t.trim()}function tj(t,e){return(t=e.exec(t))?t[0]:t}function xe(t,e,n){return t.replace(e,n)}function fg(t,e){return t.indexOf(e)}function gt(t,e){return t.charCodeAt(e)|0}function ml(t,e,n){return t.slice(e,n)}function Hn(t){return t.length}function g1(t){return t.length}function zc(t,e){return e.push(t),t}function nj(t,e){return t.map(e).join("")}var Hd=1,uo=1,p4=0,Jt=0,Je=0,Co="";function Wd(t,e,n,i,r,s,o){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:Hd,column:uo,length:o,return:""}}function ra(t,e){return ZP(Wd("",null,null,"",null,null,0),t,{length:-t.length},e)}function ij(){return Je}function rj(){return Je=Jt>0?gt(Co,--Jt):0,uo--,Je===10&&(uo=1,Hd--),Je}function on(){return Je=Jt<p4?gt(Co,Jt++):0,uo++,Je===10&&(uo=1,Hd++),Je}function Qn(){return gt(Co,Jt)}function Ju(){return Jt}function Kl(t,e){return ml(Co,t,e)}function gl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m4(t){return Hd=uo=1,p4=Hn(Co=t),Jt=0,[]}function g4(t){return Co="",t}function Zu(t){return f4(Kl(Jt-1,pg(t===91?t+2:t===40?t+1:t)))}function sj(t){for(;(Je=Qn())&&Je<33;)on();return gl(t)>2||gl(Je)>3?"":" "}function oj(t,e){for(;--e&&on()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Kl(t,Ju()+(e<6&&Qn()==32&&on()==32))}function pg(t){for(;on();)switch(Je){case t:return Jt;case 34:case 39:t!==34&&t!==39&&pg(Je);break;case 40:t===41&&pg(t);break;case 92:on();break}return Jt}function aj(t,e){for(;on()&&t+Je!==57;)if(t+Je===84&&Qn()===47)break;return"/*"+Kl(e,Jt-1)+"*"+Ud(t===47?t:on())}function lj(t){for(;!gl(Qn());)on();return Kl(t,Jt)}function cj(t){return g4(eh("",null,null,null,[""],t=m4(t),0,[0],t))}function eh(t,e,n,i,r,s,o,a,l){for(var c=0,d=0,f=o,p=0,g=0,y=0,x=1,w=1,_=1,b=0,k="",A=r,M=s,L=i,E=k;w;)switch(y=b,b=on()){case 40:if(y!=108&&gt(E,f-1)==58){fg(E+=xe(Zu(b),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:E+=Zu(b);break;case 9:case 10:case 13:case 32:E+=sj(y);break;case 92:E+=oj(Ju()-1,7);continue;case 47:switch(Qn()){case 42:case 47:zc(uj(aj(on(),Ju()),e,n),l);break;default:E+="/"}break;case 123*x:a[c++]=Hn(E)*_;case 125*x:case 59:case 0:switch(b){case 0:case 125:w=0;case 59+d:_==-1&&(E=xe(E,/\f/g,"")),g>0&&Hn(E)-f&&zc(g>32?Xv(E+";",i,n,f-1):Xv(xe(E," ","")+";",i,n,f-2),l);break;case 59:E+=";";default:if(zc(L=Yv(E,e,n,c,d,r,a,k,A=[],M=[],f),s),b===123)if(d===0)eh(E,e,L,L,A,s,f,a,M);else switch(p===99&&gt(E,3)===110?100:p){case 100:case 108:case 109:case 115:eh(t,L,L,i&&zc(Yv(t,L,L,0,0,r,a,k,r,A=[],f),M),r,M,f,a,i?A:M);break;default:eh(E,L,L,L,[""],M,0,a,M)}}c=d=g=0,x=_=1,k=E="",f=o;break;case 58:f=1+Hn(E),g=y;default:if(x<1){if(b==123)--x;else if(b==125&&x++==0&&rj()==125)continue}switch(E+=Ud(b),b*x){case 38:_=d>0?1:(E+="\f",-1);break;case 44:a[c++]=(Hn(E)-1)*_,_=1;break;case 64:Qn()===45&&(E+=Zu(on())),p=Qn(),d=f=Hn(k=E+=lj(Ju())),b++;break;case 45:y===45&&Hn(E)==2&&(x=0)}}return s}function Yv(t,e,n,i,r,s,o,a,l,c,d){for(var f=r-1,p=r===0?s:[""],g=g1(p),y=0,x=0,w=0;y<i;++y)for(var _=0,b=ml(t,f+1,f=JP(x=o[y])),k=t;_<g;++_)(k=f4(x>0?p[_]+" "+b:xe(b,/&\f/g,p[_])))&&(l[w++]=k);return Wd(t,e,n,r===0?p1:a,l,c,d)}function uj(t,e,n){return Wd(t,e,n,h4,Ud(ij()),ml(t,2,-2),0)}function Xv(t,e,n,i){return Wd(t,e,n,m1,ml(t,0,i),ml(t,i+1,-1),i)}function Js(t,e){for(var n="",i=g1(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function hj(t,e,n,i){switch(t.type){case XP:if(t.children.length)break;case YP:case m1:return t.return=t.return||t.value;case h4:return"";case d4:return t.return=t.value+"{"+Js(t.children,i)+"}";case p1:t.value=t.props.join(",")}return Hn(n=Js(t.children,i))?t.return=t.value+"{"+n+"}":""}function dj(t){var e=g1(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function fj(t){return function(e){e.root||(e=e.return)&&t(e)}}var pj=function(e,n,i){for(var r=0,s=0;r=s,s=Qn(),r===38&&s===12&&(n[i]=1),!gl(s);)on();return Kl(e,Jt)},mj=function(e,n){var i=-1,r=44;do switch(gl(r)){case 0:r===38&&Qn()===12&&(n[i]=1),e[i]+=pj(Jt-1,n,i);break;case 2:e[i]+=Zu(r);break;case 4:if(r===44){e[++i]=Qn()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=Ud(r)}while(r=on());return e},gj=function(e,n){return g4(mj(m4(e),n))},Jv=new WeakMap,yj=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Jv.get(i))&&!r){Jv.set(e,!0);for(var s=[],o=gj(n,s),a=i.props,l=0,c=0;l<o.length;l++)for(var d=0;d<a.length;d++,c++)e.props[c]=s[l]?o[l].replace(/&\f/g,a[d]):a[d]+" "+o[l]}}},vj=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function y4(t,e){switch(ej(t,e)){case 5103:return ve+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+t+$h+t+Ct+t+t;case 6828:case 4268:return ve+t+Ct+t+t;case 6165:return ve+t+Ct+"flex-"+t+t;case 5187:return ve+t+xe(t,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Ct+"flex-$1$2")+t;case 5443:return ve+t+Ct+"flex-item-"+xe(t,/flex-|-self/,"")+t;case 4675:return ve+t+Ct+"flex-line-pack"+xe(t,/align-content|flex-|-self/,"")+t;case 5548:return ve+t+Ct+xe(t,"shrink","negative")+t;case 5292:return ve+t+Ct+xe(t,"basis","preferred-size")+t;case 6060:return ve+"box-"+xe(t,"-grow","")+ve+t+Ct+xe(t,"grow","positive")+t;case 4554:return ve+xe(t,/([^-])(transform)/g,"$1"+ve+"$2")+t;case 6187:return xe(xe(xe(t,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),t,"")+t;case 5495:case 3959:return xe(t,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return xe(xe(t,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+t+t;case 4095:case 3583:case 4068:case 2532:return xe(t,/(.+)-inline(.+)/,ve+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(t)-1-e>6)switch(gt(t,e+1)){case 109:if(gt(t,e+4)!==45)break;case 102:return xe(t,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+$h+(gt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~fg(t,"stretch")?y4(xe(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(gt(t,e+1)!==115)break;case 6444:switch(gt(t,Hn(t)-3-(~fg(t,"!important")&&10))){case 107:return xe(t,":",":"+ve)+t;case 101:return xe(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ve+(gt(t,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Ct+"$2box$3")+t}break;case 5936:switch(gt(t,e+11)){case 114:return ve+t+Ct+xe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ve+t+Ct+xe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ve+t+Ct+xe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ve+t+Ct+t+t}return t}var xj=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case m1:e.return=y4(e.value,e.length);break;case d4:return Js([ra(e,{value:xe(e.value,"@","@"+ve)})],r);case p1:if(e.length)return nj(e.props,function(s){switch(tj(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Js([ra(e,{props:[xe(s,/:(read-\w+)/,":"+$h+"$1")]})],r);case"::placeholder":return Js([ra(e,{props:[xe(s,/:(plac\w+)/,":"+ve+"input-$1")]}),ra(e,{props:[xe(s,/:(plac\w+)/,":"+$h+"$1")]}),ra(e,{props:[xe(s,/:(plac\w+)/,Ct+"input-$1")]})],r)}return""})}},bj=[xj],_j=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(x){var w=x.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var r=e.stylisPlugins||bj,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var w=x.getAttribute("data-emotion").split(" "),_=1;_<w.length;_++)s[w[_]]=!0;a.push(x)});var l,c=[yj,vj];{var d,f=[hj,fj(function(x){d.insert(x)})],p=dj(c.concat(r,f)),g=function(w){return Js(cj(w),p)};l=function(w,_,b,k){d=b,g(w?w+"{"+_.styles+"}":_.styles),k&&(y.inserted[_.name]=!0)}}var y={key:n,sheet:new QP({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return y.sheet.hydrate(a),y},wj=!0;function kj(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):r&&(i+=r+" ")}),i}var v4=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||wj===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},Sj=function(e,n,i){v4(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Tj(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Ej={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cj=!1,Pj=/[A-Z]|^ms/g,jj=/_EMO_([^_]+?)_([^]*?)_EMO_/g,x4=function(e){return e.charCodeAt(1)===45},Zv=function(e){return e!=null&&typeof e!="boolean"},xp=u4(function(t){return x4(t)?t:t.replace(Pj,"-$&").toLowerCase()}),ex=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(jj,function(i,r,s){return Wn={name:r,styles:s,next:Wn},r})}return Ej[e]!==1&&!x4(e)&&typeof n=="number"&&n!==0?n+"px":n},Aj="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function yl(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return Wn={name:r.name,styles:r.styles,next:Wn},r.name;var s=n;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)Wn={name:o.name,styles:o.styles,next:Wn},o=o.next;var a=s.styles+";";return a}return Ij(t,e,n)}case"function":{if(t!==void 0){var l=Wn,c=n(t);return Wn=l,yl(t,e,c)}break}}var d=n;if(e==null)return d;var f=e[d];return f!==void 0?f:d}function Ij(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=yl(t,e,n[r])+";";else for(var s in n){var o=n[s];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?i+=s+"{"+e[a]+"}":Zv(a)&&(i+=xp(s)+":"+ex(s,a)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&Cj)throw new Error(Aj);if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var l=0;l<o.length;l++)Zv(o[l])&&(i+=xp(s)+":"+ex(s,o[l])+";");else{var c=yl(t,e,o);switch(s){case"animation":case"animationName":{i+=xp(s)+":"+c+";";break}default:i+=s+"{"+c+"}"}}}}return i}var tx=/label:\s*([^\s;{]+)\s*(;|$)/g,Wn;function Rj(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";Wn=void 0;var s=t[0];if(s==null||s.raw===void 0)i=!1,r+=yl(n,e,s);else{var o=s;r+=o[0]}for(var a=1;a<t.length;a++)if(r+=yl(n,e,t[a]),i){var l=s;r+=l[a]}tx.lastIndex=0;for(var c="",d;(d=tx.exec(r))!==null;)c+="-"+d[1];var f=Tj(r)+c;return{name:f,styles:r,next:Wn}}var Mj=function(e){return e()},Dj=mm.useInsertionEffect?mm.useInsertionEffect:!1,Vj=Dj||Mj,b4=V.createContext(typeof HTMLElement<"u"?_j({key:"css"}):null);b4.Provider;var Lj=function(e){return V.forwardRef(function(n,i){var r=V.useContext(b4);return e(n,r,i)})},Oj=V.createContext({}),Nj=WP,zj=function(e){return e!=="theme"},nx=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Nj:zj},ix=function(e,n,i){var r;if(n){var s=n.shouldForwardProp;r=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},Fj=!1,Bj=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return v4(n,i,r),Vj(function(){return Sj(n,i,r)}),null},$j=function t(e,n){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=ix(e,n,i),l=a||nx(r),c=!l("as");return function(){var d=arguments,f=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&f.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var p=d.length,g=1;g<p;g++)f.push(d[g],d[0][g])}var y=Lj(function(x,w,_){var b=c&&x.as||r,k="",A=[],M=x;if(x.theme==null){M={};for(var L in x)M[L]=x[L];M.theme=V.useContext(Oj)}typeof x.className=="string"?k=kj(w.registered,A,x.className):x.className!=null&&(k=x.className+" ");var E=Rj(f.concat(A),w.registered,M);k+=w.key+"-"+E.name,o!==void 0&&(k+=" "+o);var S=c&&a===void 0?nx(b):l,C={};for(var j in x)c&&j==="as"||S(j)&&(C[j]=x[j]);return C.className=k,_&&(C.ref=_),V.createElement(V.Fragment,null,V.createElement(Bj,{cache:w,serialized:E,isStringTag:typeof b=="string"}),V.createElement(b,C))});return y.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",y.defaultProps=e.defaultProps,y.__emotion_real=y,y.__emotion_base=r,y.__emotion_styles=f,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return o===void 0&&Fj?"NO_COMPONENT_SELECTOR":"."+o}}),y.withComponent=function(x,w){return t(x,dg({},n,w,{shouldForwardProp:ix(y,w,!0)})).apply(void 0,f)},y}},Uj=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],T=$j.bind();Uj.forEach(function(t){T[t]=T(t)});const _4=V.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Kd=V.createContext({}),Gd=V.createContext(null),qd=typeof document<"u",y1=qd?V.useLayoutEffect:V.useEffect,w4=V.createContext({strict:!1}),v1=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Hj="framerAppearId",k4="data-"+v1(Hj);function Wj(t,e,n,i){const{visualElement:r}=V.useContext(Kd),s=V.useContext(w4),o=V.useContext(Gd),a=V.useContext(_4).reducedMotion,l=V.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;V.useInsertionEffect(()=>{c&&c.update(n,o)});const d=V.useRef(!!(n[k4]&&!window.HandoffComplete));return y1(()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())}),V.useEffect(()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),c}function $s(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Kj(t,e,n){return V.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):$s(n)&&(n.current=i))},[e])}function vl(t){return typeof t=="string"||Array.isArray(t)}function Qd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const x1=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],b1=["initial",...x1];function Yd(t){return Qd(t.animate)||b1.some(e=>vl(t[e]))}function S4(t){return!!(Yd(t)||t.variants)}function Gj(t,e){if(Yd(t)){const{initial:n,animate:i}=t;return{initial:n===!1||vl(n)?n:void 0,animate:vl(i)?i:void 0}}return t.inherit!==!1?e:{}}function qj(t){const{initial:e,animate:n}=Gj(t,V.useContext(Kd));return V.useMemo(()=>({initial:e,animate:n}),[rx(e),rx(n)])}function rx(t){return Array.isArray(t)?t.join(" "):t}const sx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},xl={};for(const t in sx)xl[t]={isEnabled:e=>sx[t].some(n=>!!e[n])};function Qj(t){for(const e in t)xl[e]={...xl[e],...t[e]}}const _1=V.createContext({}),T4=V.createContext({}),Yj=Symbol.for("motionComponentSymbol");function Xj({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&Qj(t);function s(a,l){let c;const d={...V.useContext(_4),...a,layoutId:Jj(a)},{isStatic:f}=d,p=qj(a),g=i(a,f);if(!f&&qd){p.visualElement=Wj(r,g,d,e);const y=V.useContext(T4),x=V.useContext(w4).strict;p.visualElement&&(c=p.visualElement.loadFeatures(d,x,t,y))}return V.createElement(Kd.Provider,{value:p},c&&p.visualElement?V.createElement(c,{visualElement:p.visualElement,...d}):null,n(r,a,Kj(g,p.visualElement,l),g,f,p.visualElement))}const o=V.forwardRef(s);return o[Yj]=r,o}function Jj({layoutId:t}){const e=V.useContext(_1).id;return e&&t!==void 0?e+"-"+t:t}function Zj(t){function e(i,r={}){return Xj(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const eA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function w1(t){return typeof t!="string"||t.includes("-")?!1:!!(eA.indexOf(t)>-1||/[A-Z]/.test(t))}const Uh={};function tA(t){Object.assign(Uh,t)}const Gl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ls=new Set(Gl);function E4(t,{layout:e,layoutId:n}){return ls.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Uh[t]||t==="opacity")}const Zt=t=>!!(t&&t.getVelocity),nA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},iA=Gl.length;function rA(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<iA;o++){const a=Gl[o];if(t[a]!==void 0){const l=nA[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const C4=t=>e=>typeof e=="string"&&e.startsWith(t),P4=C4("--"),mg=C4("var(--"),sA=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,oA=(t,e)=>e&&typeof t=="number"?e.transform(t):t,ar=(t,e,n)=>Math.min(Math.max(n,t),e),cs={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},La={...cs,transform:t=>ar(0,1,t)},Fc={...cs,default:1},Oa=t=>Math.round(t*1e5)/1e5,Xd=/(-)?([\d]*\.?[\d])+/g,j4=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,aA=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ql(t){return typeof t=="string"}const Ql=t=>({test:e=>ql(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Mi=Ql("deg"),Yn=Ql("%"),Z=Ql("px"),lA=Ql("vh"),cA=Ql("vw"),ox={...Yn,parse:t=>Yn.parse(t)/100,transform:t=>Yn.transform(t*100)},ax={...cs,transform:Math.round},A4={borderWidth:Z,borderTopWidth:Z,borderRightWidth:Z,borderBottomWidth:Z,borderLeftWidth:Z,borderRadius:Z,radius:Z,borderTopLeftRadius:Z,borderTopRightRadius:Z,borderBottomRightRadius:Z,borderBottomLeftRadius:Z,width:Z,maxWidth:Z,height:Z,maxHeight:Z,size:Z,top:Z,right:Z,bottom:Z,left:Z,padding:Z,paddingTop:Z,paddingRight:Z,paddingBottom:Z,paddingLeft:Z,margin:Z,marginTop:Z,marginRight:Z,marginBottom:Z,marginLeft:Z,rotate:Mi,rotateX:Mi,rotateY:Mi,rotateZ:Mi,scale:Fc,scaleX:Fc,scaleY:Fc,scaleZ:Fc,skew:Mi,skewX:Mi,skewY:Mi,distance:Z,translateX:Z,translateY:Z,translateZ:Z,x:Z,y:Z,z:Z,perspective:Z,transformPerspective:Z,opacity:La,originX:ox,originY:ox,originZ:Z,zIndex:ax,fillOpacity:La,strokeOpacity:La,numOctaves:ax};function k1(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,c=!1,d=!0;for(const f in e){const p=e[f];if(P4(f)){s[f]=p;continue}const g=A4[f],y=oA(p,g);if(ls.has(f)){if(l=!0,o[f]=y,!d)continue;p!==(g.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,a[f]=y):r[f]=y}if(e.transform||(l||i?r.transform=rA(t.transform,n,d,i):r.transform&&(r.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:g=0}=a;r.transformOrigin=`${f} ${p} ${g}`}}const S1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function I4(t,e,n){for(const i in e)!Zt(e[i])&&!E4(i,n)&&(t[i]=e[i])}function uA({transformTemplate:t},e,n){return V.useMemo(()=>{const i=S1();return k1(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function hA(t,e,n){const i=t.style||{},r={};return I4(r,i,t),Object.assign(r,uA(t,e,n)),t.transformValues?t.transformValues(r):r}function dA(t,e,n){const i={},r=hA(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const fA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hh(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||fA.has(t)}let R4=t=>!Hh(t);function pA(t){t&&(R4=e=>e.startsWith("on")?!Hh(e):t(e))}try{pA(require("@emotion/is-prop-valid").default)}catch{}function mA(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(R4(r)||n===!0&&Hh(r)||!e&&!Hh(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function lx(t,e,n){return typeof t=="string"?t:Z.transform(e+n*t)}function gA(t,e,n){const i=lx(e,t.x,t.width),r=lx(n,t.y,t.height);return`${i} ${r}`}const yA={offset:"stroke-dashoffset",array:"stroke-dasharray"},vA={offset:"strokeDashoffset",array:"strokeDasharray"};function xA(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?yA:vA;t[s.offset]=Z.transform(-i);const o=Z.transform(e),a=Z.transform(n);t[s.array]=`${o} ${a}`}function T1(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},d,f,p){if(k1(t,c,d,p),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:g,style:y,dimensions:x}=t;g.transform&&(x&&(y.transform=g.transform),delete g.transform),x&&(r!==void 0||s!==void 0||y.transform)&&(y.transformOrigin=gA(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(g.x=e),n!==void 0&&(g.y=n),i!==void 0&&(g.scale=i),o!==void 0&&xA(g,o,a,l,!1)}const M4=()=>({...S1(),attrs:{}}),E1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function bA(t,e,n,i){const r=V.useMemo(()=>{const s=M4();return T1(s,e,{enableHardwareAcceleration:!1},E1(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};I4(s,t.style,t),r.style={...s,...r.style}}return r}function _A(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(w1(n)?bA:dA)(i,s,o,n),d={...mA(i,typeof n=="string",t),...l,ref:r},{children:f}=i,p=V.useMemo(()=>Zt(f)?f.get():f,[f]);return V.createElement(n,{...d,children:p})}}function D4(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const V4=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function L4(t,e,n,i){D4(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(V4.has(r)?r:v1(r),e.attrs[r])}function C1(t,e){const{style:n}=t,i={};for(const r in n)(Zt(n[r])||e.style&&Zt(e.style[r])||E4(r,t))&&(i[r]=n[r]);return i}function O4(t,e){const n=C1(t,e);for(const i in t)if(Zt(t[i])||Zt(e[i])){const r=Gl.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function P1(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function N4(t){const e=V.useRef(null);return e.current===null&&(e.current=t()),e.current}const Wh=t=>Array.isArray(t),wA=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),kA=t=>Wh(t)?t[t.length-1]||0:t;function th(t){const e=Zt(t)?t.get():t;return wA(e)?e.toValue():e}function SA({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:TA(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const z4=t=>(e,n)=>{const i=V.useContext(Kd),r=V.useContext(Gd),s=()=>SA(t,e,i,r);return n?s():N4(s)};function TA(t,e,n,i){const r={},s=i(t,{});for(const p in s)r[p]=th(s[p]);let{initial:o,animate:a}=t;const l=Yd(t),c=S4(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;return f&&typeof f!="boolean"&&!Qd(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const y=P1(t,g);if(!y)return;const{transitionEnd:x,transition:w,..._}=y;for(const b in _){let k=_[b];if(Array.isArray(k)){const A=d?k.length-1:0;k=k[A]}k!==null&&(r[b]=k)}for(const b in x)r[b]=x[b]}),r}const Ge=t=>t;class cx{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function EA(t){let e=new cx,n=new cx,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,d=!1)=>{const f=d&&r,p=f?e:n;return c&&o.add(l),p.add(l)&&f&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const d=e.order[c];d(l),o.has(d)&&(a.schedule(d),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const Bc=["prepare","read","update","preRender","render","postRender"],CA=40;function PA(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=Bc.reduce((f,p)=>(f[p]=EA(()=>n=!0),f),{}),o=f=>s[f].process(r),a=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,CA),1),r.timestamp=f,r.isProcessing=!0,Bc.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:Bc.reduce((f,p)=>{const g=s[p];return f[p]=(y,x=!1,w=!1)=>(n||l(),g.schedule(y,x,w)),f},{}),cancel:f=>Bc.forEach(p=>s[p].cancel(f)),state:r,steps:s}}const{schedule:Ce,cancel:wi,state:Pt,steps:bp}=PA(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ge,!0),jA={useVisualState:z4({scrapeMotionValuesFromProps:O4,createRenderState:M4,onMount:(t,e,{renderState:n,latestValues:i})=>{Ce.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Ce.render(()=>{T1(n,i,{enableHardwareAcceleration:!1},E1(e.tagName),t.transformTemplate),L4(e,n)})}})},AA={useVisualState:z4({scrapeMotionValuesFromProps:C1,createRenderState:S1})};function IA(t,{forwardMotionProps:e=!1},n,i){return{...w1(t)?jA:AA,preloadedFeatures:n,useRender:_A(e),createVisualElement:i,Component:t}}function di(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const F4=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Jd(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const RA=t=>e=>F4(e)&&t(e,Jd(e));function pi(t,e,n,i){return di(t,e,RA(n),i)}const MA=(t,e)=>n=>e(t(n)),er=(...t)=>t.reduce(MA);function B4(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const ux=B4("dragHorizontal"),hx=B4("dragVertical");function $4(t){let e=!1;if(t==="y")e=hx();else if(t==="x")e=ux();else{const n=ux(),i=hx();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function U4(){const t=$4(!0);return t?(t(),!1):!0}class _r{constructor(e){this.isMounted=!1,this.node=e}update(){}}function dx(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||U4())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&Ce.update(()=>a[i](s,o))};return pi(t.current,n,r,{passive:!t.getProps()[i]})}class DA extends _r{mount(){this.unmount=er(dx(this.node,!0),dx(this.node,!1))}unmount(){}}class VA extends _r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=er(di(this.node.current,"focus",()=>this.onFocus()),di(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const H4=(t,e)=>e?t===e?!0:H4(t,e.parentElement):!1;function _p(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Jd(n))}class LA extends _r{constructor(){super(...arguments),this.removeStartListeners=Ge,this.removeEndListeners=Ge,this.removeAccessibleListeners=Ge,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=pi(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:d,globalTapTarget:f}=this.node.getProps();Ce.update(()=>{!f&&!H4(this.node.current,a.target)?d&&d(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=pi(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=er(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||_p("up",(l,c)=>{const{onTap:d}=this.node.getProps();d&&Ce.update(()=>d(l,c))})};this.removeEndListeners(),this.removeEndListeners=di(this.node.current,"keyup",o),_p("down",(a,l)=>{this.startPress(a,l)})},n=di(this.node.current,"keydown",e),i=()=>{this.isPressing&&_p("cancel",(s,o)=>this.cancelPress(s,o))},r=di(this.node.current,"blur",i);this.removeAccessibleListeners=er(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&Ce.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!U4()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&Ce.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=pi(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=di(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=er(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const gg=new WeakMap,wp=new WeakMap,OA=t=>{const e=gg.get(t.target);e&&e(t)},NA=t=>{t.forEach(OA)};function zA({root:t,...e}){const n=t||document;wp.has(n)||wp.set(n,{});const i=wp.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(NA,{root:t,...e})),i[r]}function FA(t,e,n){const i=zA(e);return gg.set(t,n),i.observe(t),()=>{gg.delete(t),i.unobserve(t)}}const BA={some:0,all:1};class $A extends _r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:BA[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(l)};return FA(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(UA(e,n))&&this.startObserver()}unmount(){}}function UA({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const HA={inView:{Feature:$A},tap:{Feature:LA},focus:{Feature:VA},hover:{Feature:DA}};function W4(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function WA(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function KA(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function Zd(t,e,n){const i=t.getProps();return P1(i,e,n!==void 0?n:i.custom,WA(t),KA(t))}let Kh=Ge;const qr=t=>t*1e3,mi=t=>t/1e3,GA={current:!1},K4=t=>Array.isArray(t)&&typeof t[0]=="number";function G4(t){return!!(!t||typeof t=="string"&&q4[t]||K4(t)||Array.isArray(t)&&t.every(G4))}const ya=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,q4={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ya([0,.65,.55,1]),circOut:ya([.55,0,1,.45]),backIn:ya([.31,.01,.66,-.59]),backOut:ya([.33,1.53,.69,.99])};function Q4(t){if(t)return K4(t)?ya(t):Array.isArray(t)?t.map(Q4):q4[t]}function qA(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const d=Q4(a);return Array.isArray(d)&&(c.easing=d),t.animate(c,{delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function QA(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const Y4=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,YA=1e-7,XA=12;function JA(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Y4(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>YA&&++a<XA);return o}function Yl(t,e,n,i){if(t===e&&n===i)return Ge;const r=s=>JA(s,0,1,t,n);return s=>s===0||s===1?s:Y4(r(s),e,i)}const ZA=Yl(.42,0,1,1),eI=Yl(0,0,.58,1),X4=Yl(.42,0,.58,1),tI=t=>Array.isArray(t)&&typeof t[0]!="number",J4=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Z4=t=>e=>1-t(1-e),j1=t=>1-Math.sin(Math.acos(t)),e3=Z4(j1),nI=J4(j1),t3=Yl(.33,1.53,.69,.99),A1=Z4(t3),iI=J4(A1),rI=t=>(t*=2)<1?.5*A1(t):.5*(2-Math.pow(2,-10*(t-1))),fx={linear:Ge,easeIn:ZA,easeInOut:X4,easeOut:eI,circIn:j1,circInOut:nI,circOut:e3,backIn:A1,backInOut:iI,backOut:t3,anticipate:rI},px=t=>{if(Array.isArray(t)){Kh(t.length===4);const[e,n,i,r]=t;return Yl(e,n,i,r)}else if(typeof t=="string")return Kh(fx[t]!==void 0),fx[t];return t},I1=(t,e)=>n=>!!(ql(n)&&aA.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),n3=(t,e,n)=>i=>{if(!ql(i))return i;const[r,s,o,a]=i.match(Xd);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},sI=t=>ar(0,255,t),kp={...cs,transform:t=>Math.round(sI(t))},$r={test:I1("rgb","red"),parse:n3("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+kp.transform(t)+", "+kp.transform(e)+", "+kp.transform(n)+", "+Oa(La.transform(i))+")"};function oI(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const yg={test:I1("#"),parse:oI,transform:$r.transform},Us={test:I1("hsl","hue"),parse:n3("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Yn.transform(Oa(e))+", "+Yn.transform(Oa(n))+", "+Oa(La.transform(i))+")"},Ot={test:t=>$r.test(t)||yg.test(t)||Us.test(t),parse:t=>$r.test(t)?$r.parse(t):Us.test(t)?Us.parse(t):yg.parse(t),transform:t=>ql(t)?t:t.hasOwnProperty("red")?$r.transform(t):Us.transform(t)},Oe=(t,e,n)=>-n*t+n*e+t;function Sp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function aI({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Sp(l,a,t+1/3),s=Sp(l,a,t),o=Sp(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const Tp=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},lI=[yg,$r,Us],cI=t=>lI.find(e=>e.test(t));function mx(t){const e=cI(t);let n=e.parse(t);return e===Us&&(n=aI(n)),n}const i3=(t,e)=>{const n=mx(t),i=mx(e),r={...n};return s=>(r.red=Tp(n.red,i.red,s),r.green=Tp(n.green,i.green,s),r.blue=Tp(n.blue,i.blue,s),r.alpha=Oe(n.alpha,i.alpha,s),$r.transform(r))};function uI(t){var e,n;return isNaN(t)&&ql(t)&&(((e=t.match(Xd))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(j4))===null||n===void 0?void 0:n.length)||0)>0}const r3={regex:sA,countKey:"Vars",token:"${v}",parse:Ge},s3={regex:j4,countKey:"Colors",token:"${c}",parse:Ot.parse},o3={regex:Xd,countKey:"Numbers",token:"${n}",parse:cs.parse};function Ep(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function Gh(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ep(n,r3),Ep(n,s3),Ep(n,o3),n}function a3(t){return Gh(t).values}function l3(t){const{values:e,numColors:n,numVars:i,tokenised:r}=Gh(t),s=e.length;return o=>{let a=r;for(let l=0;l<s;l++)l<i?a=a.replace(r3.token,o[l]):l<i+n?a=a.replace(s3.token,Ot.transform(o[l])):a=a.replace(o3.token,Oa(o[l]));return a}}const hI=t=>typeof t=="number"?0:t;function dI(t){const e=a3(t);return l3(t)(e.map(hI))}const lr={test:uI,parse:a3,createTransformer:l3,getAnimatableNone:dI},c3=(t,e)=>n=>`${n>0?e:t}`;function u3(t,e){return typeof t=="number"?n=>Oe(t,e,n):Ot.test(t)?i3(t,e):t.startsWith("var(")?c3(t,e):d3(t,e)}const h3=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>u3(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},fI=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=u3(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},d3=(t,e)=>{const n=lr.createTransformer(e),i=Gh(t),r=Gh(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?er(h3(i.values,r.values),n):c3(t,e)},bl=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},gx=(t,e)=>n=>Oe(t,e,n);function pI(t){return typeof t=="number"?gx:typeof t=="string"?Ot.test(t)?i3:d3:Array.isArray(t)?h3:typeof t=="object"?fI:gx}function mI(t,e,n){const i=[],r=n||pI(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Ge:e;a=er(l,a)}i.push(a)}return i}function f3(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Kh(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=mI(e,i,r),a=o.length,l=c=>{let d=0;if(a>1)for(;d<t.length-2&&!(c<t[d+1]);d++);const f=bl(t[d],t[d+1],c);return o[d](f)};return n?c=>l(ar(t[0],t[s-1],c)):l}function gI(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=bl(0,e,i);t.push(Oe(n,1,r))}}function yI(t){const e=[0];return gI(e,t.length-1),e}function vI(t,e){return t.map(n=>n*e)}function xI(t,e){return t.map(()=>e||X4).splice(0,t.length-1)}function qh({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=tI(i)?i.map(px):px(i),s={done:!1,value:e[0]},o=vI(n&&n.length===e.length?n:yI(e),t),a=f3(o,e,{ease:Array.isArray(r)?r:xI(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function p3(t,e){return e?t*(1e3/e):0}const bI=5;function m3(t,e,n){const i=Math.max(e-bI,0);return p3(n-t(i),e-i)}const Cp=.001,_I=.01,wI=10,kI=.05,SI=1;function TI({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=ar(kI,SI,o),t=ar(_I,wI,mi(t)),o<1?(r=c=>{const d=c*o,f=d*t,p=d-n,g=vg(c,o),y=Math.exp(-f);return Cp-p/g*y},s=c=>{const f=c*o*t,p=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*t,y=Math.exp(-f),x=vg(Math.pow(c,2),o);return(-r(c)+Cp>0?-1:1)*((p-g)*y)/x}):(r=c=>{const d=Math.exp(-c*t),f=(c-n)*t+1;return-Cp+d*f},s=c=>{const d=Math.exp(-c*t),f=(n-c)*(t*t);return d*f});const a=5/t,l=CI(r,s,a);if(t=qr(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const EI=12;function CI(t,e,n){let i=n;for(let r=1;r<EI;r++)i=i-t(i)/e(i);return i}function vg(t,e){return t*Math.sqrt(1-e*e)}const PI=["duration","bounce"],jI=["stiffness","damping","mass"];function yx(t,e){return e.some(n=>t[n]!==void 0)}function AI(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!yx(t,jI)&&yx(t,PI)){const n=TI(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function g3({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:d,velocity:f,isResolvedFromDuration:p}=AI({...i,velocity:-mi(i.velocity||0)}),g=f||0,y=l/(2*Math.sqrt(a*c)),x=s-r,w=mi(Math.sqrt(a/c)),_=Math.abs(x)<5;n||(n=_?.01:2),e||(e=_?.005:.5);let b;if(y<1){const k=vg(w,y);b=A=>{const M=Math.exp(-y*w*A);return s-M*((g+y*w*x)/k*Math.sin(k*A)+x*Math.cos(k*A))}}else if(y===1)b=k=>s-Math.exp(-w*k)*(x+(g+w*x)*k);else{const k=w*Math.sqrt(y*y-1);b=A=>{const M=Math.exp(-y*w*A),L=Math.min(k*A,300);return s-M*((g+y*w*x)*Math.sinh(L)+k*x*Math.cosh(L))/k}}return{calculatedDuration:p&&d||null,next:k=>{const A=b(k);if(p)o.done=k>=d;else{let M=g;k!==0&&(y<1?M=m3(b,k,A):M=0);const L=Math.abs(M)<=n,E=Math.abs(s-A)<=e;o.done=L&&E}return o.value=o.done?s:A,o}}}function vx({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:d}){const f=t[0],p={done:!1,value:f},g=S=>a!==void 0&&S<a||l!==void 0&&S>l,y=S=>a===void 0?l:l===void 0||Math.abs(a-S)<Math.abs(l-S)?a:l;let x=n*e;const w=f+x,_=o===void 0?w:o(w);_!==w&&(x=_-f);const b=S=>-x*Math.exp(-S/i),k=S=>_+b(S),A=S=>{const C=b(S),j=k(S);p.done=Math.abs(C)<=c,p.value=p.done?_:j};let M,L;const E=S=>{g(p.value)&&(M=S,L=g3({keyframes:[p.value,y(p.value)],velocity:m3(k,S,p.value),damping:r,stiffness:s,restDelta:c,restSpeed:d}))};return E(0),{calculatedDuration:null,next:S=>{let C=!1;return!L&&M===void 0&&(C=!0,A(S),E(S)),M!==void 0&&S>M?L.next(S-M):(!C&&A(S),p)}}}const II=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Ce.update(e,!0),stop:()=>wi(e),now:()=>Pt.isProcessing?Pt.timestamp:performance.now()}},xx=2e4;function bx(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<xx;)e+=n,i=t.next(e);return e>=xx?1/0:e}const RI={decay:vx,inertia:vx,tween:qh,keyframes:qh,spring:g3};function Qh({autoplay:t=!0,delay:e=0,driver:n=II,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:d,onUpdate:f,...p}){let g=1,y=!1,x,w;const _=()=>{w=new Promise(J=>{x=J})};_();let b;const k=RI[r]||qh;let A;k!==qh&&typeof i[0]!="number"&&(A=f3([0,100],i,{clamp:!1}),i=[0,100]);const M=k({...p,keyframes:i});let L;a==="mirror"&&(L=k({...p,keyframes:[...i].reverse(),velocity:-(p.velocity||0)}));let E="idle",S=null,C=null,j=null;M.calculatedDuration===null&&s&&(M.calculatedDuration=bx(M));const{calculatedDuration:R}=M;let D=1/0,I=1/0;R!==null&&(D=R+o,I=D*(s+1)-o);let re=0;const ae=J=>{if(C===null)return;g>0&&(C=Math.min(C,J)),g<0&&(C=Math.min(J-I/g,C)),S!==null?re=S:re=Math.round(J-C)*g;const se=re-e*(g>=0?1:-1),_e=g>=0?se<0:se>I;re=Math.max(se,0),E==="finished"&&S===null&&(re=I);let Qe=re,rt=M;if(s){const Lo=Math.min(re,I)/D;let ti=Math.floor(Lo),dn=Lo%1;!dn&&Lo>=1&&(dn=1),dn===1&&ti--,ti=Math.min(ti,s+1),!!(ti%2)&&(a==="reverse"?(dn=1-dn,o&&(dn-=o/D)):a==="mirror"&&(rt=L)),Qe=ar(0,1,dn)*D}const Ve=_e?{done:!1,value:i[0]}:rt.next(Qe);A&&(Ve.value=A(Ve.value));let{done:hn}=Ve;!_e&&R!==null&&(hn=g>=0?re>=I:re<=0);const kf=S===null&&(E==="finished"||E==="running"&&hn);return f&&f(Ve.value),kf&&U(),Ve},ne=()=>{b&&b.stop(),b=void 0},me=()=>{E="idle",ne(),x(),_(),C=j=null},U=()=>{E="finished",d&&d(),ne(),x()},q=()=>{if(y)return;b||(b=n(ae));const J=b.now();l&&l(),S!==null?C=J-S:(!C||E==="finished")&&(C=J),E==="finished"&&_(),j=C,S=null,E="running",b.start()};t&&q();const Y={then(J,se){return w.then(J,se)},get time(){return mi(re)},set time(J){J=qr(J),re=J,S!==null||!b||g===0?S=J:C=b.now()-J/g},get duration(){const J=M.calculatedDuration===null?bx(M):M.calculatedDuration;return mi(J)},get speed(){return g},set speed(J){J===g||!b||(g=J,Y.time=mi(re))},get state(){return E},play:q,pause:()=>{E="paused",S=re},stop:()=>{y=!0,E!=="idle"&&(E="idle",c&&c(),me())},cancel:()=>{j!==null&&ae(j),me()},complete:()=>{E="finished"},sample:J=>(C=0,ae(J))};return Y}function MI(t){let e;return()=>(e===void 0&&(e=t()),e)}const DI=MI(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),VI=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),$c=10,LI=2e4,OI=(t,e)=>e.type==="spring"||t==="backgroundColor"||!G4(e.ease);function NI(t,e,{onUpdate:n,onComplete:i,...r}){if(!(DI()&&VI.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const d=()=>{l=new Promise(k=>{a=k})};d();let{keyframes:f,duration:p=300,ease:g,times:y}=r;if(OI(e,r)){const k=Qh({...r,repeat:0,delay:0});let A={done:!1,value:f[0]};const M=[];let L=0;for(;!A.done&&L<LI;)A=k.sample(L),M.push(A.value),L+=$c;y=void 0,f=M,p=L-$c,g="linear"}const x=qA(t.owner.current,e,f,{...r,duration:p,ease:g,times:y}),w=()=>{c=!1,x.cancel()},_=()=>{c=!0,Ce.update(w),a(),d()};return x.onfinish=()=>{c||(t.set(QA(f,r)),i&&i(),_())},{then(k,A){return l.then(k,A)},attachTimeline(k){return x.timeline=k,x.onfinish=null,Ge},get time(){return mi(x.currentTime||0)},set time(k){x.currentTime=qr(k)},get speed(){return x.playbackRate},set speed(k){x.playbackRate=k},get duration(){return mi(p)},play:()=>{o||(x.play(),wi(w))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:k}=x;if(k){const A=Qh({...r,autoplay:!1});t.setWithVelocity(A.sample(k-$c).value,A.sample(k).value,$c)}_()},complete:()=>{c||x.finish()},cancel:_}}function zI({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Ge,pause:Ge,stop:Ge,then:s=>(s(),Promise.resolve()),cancel:Ge,complete:Ge});return e?Qh({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const FI={type:"spring",stiffness:500,damping:25,restSpeed:10},BI=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),$I={type:"keyframes",duration:.8},UI={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},HI=(t,{keyframes:e})=>e.length>2?$I:ls.has(t)?t.startsWith("scale")?BI(e[1]):FI:UI,xg=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(lr.test(e)||e==="0")&&!e.startsWith("url(")),WI=new Set(["brightness","contrast","saturate","opacity"]);function KI(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Xd)||[];if(!i)return t;const r=n.replace(i,"");let s=WI.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const GI=/([a-z-]*)\(.*?\)/g,bg={...lr,getAnimatableNone:t=>{const e=t.match(GI);return e?e.map(KI).join(" "):t}},qI={...A4,color:Ot,backgroundColor:Ot,outlineColor:Ot,fill:Ot,stroke:Ot,borderColor:Ot,borderTopColor:Ot,borderRightColor:Ot,borderBottomColor:Ot,borderLeftColor:Ot,filter:bg,WebkitFilter:bg},R1=t=>qI[t];function y3(t,e){let n=R1(t);return n!==bg&&(n=lr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const v3=t=>/^0[^.\s]+$/.test(t);function QI(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||v3(t)}function YI(t,e,n,i){const r=xg(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?o:s[c-1]),QI(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(a=s[c]);if(r&&l.length&&a)for(let c=0;c<l.length;c++){const d=l[c];s[d]=y3(e,a)}return s}function XI({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}function M1(t,e){return t[e]||t.default||t}const JI={skipAnimations:!1},D1=(t,e,n,i={})=>r=>{const s=M1(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-qr(o);const l=YI(e,t,n,s),c=l[0],d=l[l.length-1],f=xg(t,c),p=xg(t,d);let g={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:y=>{e.set(y),s.onUpdate&&s.onUpdate(y)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(XI(s)||(g={...g,...HI(t,g)}),g.duration&&(g.duration=qr(g.duration)),g.repeatDelay&&(g.repeatDelay=qr(g.repeatDelay)),!f||!p||GA.current||s.type===!1||JI.skipAnimations)return zI(g);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const y=NI(e,t,g);if(y)return y}return Qh(g)};function Yh(t){return!!(Zt(t)&&t.add)}const x3=t=>/^\-?\d*\.?\d+$/.test(t);function V1(t,e){t.indexOf(e)===-1&&t.push(e)}function L1(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class O1{constructor(){this.subscriptions=[]}add(e){return V1(this.subscriptions,e),()=>L1(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ZI=t=>!isNaN(parseFloat(t));class e7{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:o}=Pt;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,Ce.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Ce.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=ZI(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new O1);const i=this.events[e].add(n);return e==="change"?()=>{i(),Ce.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?p3(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ho(t,e){return new e7(t,e)}const b3=t=>e=>e.test(t),t7={test:t=>t==="auto",parse:t=>t},_3=[cs,Z,Yn,Mi,cA,lA,t7],sa=t=>_3.find(b3(t)),n7=[..._3,Ot,lr],i7=t=>n7.find(b3(t));function r7(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ho(n))}function s7(t,e){const n=Zd(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=kA(s[o]);r7(t,o,a)}}function o7(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],c=e[l];let d=null;Array.isArray(c)&&(d=c[0]),d===null&&(d=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),d!=null&&(typeof d=="string"&&(x3(d)||v3(d))?d=parseFloat(d):!i7(d)&&lr.test(c)&&(d=y3(l,c)),t.addValue(l,ho(d,{owner:t})),n[l]===void 0&&(n[l]=d),d!==null&&t.setBaseTarget(l,d))}}function a7(t,e){return e?(e[t]||e.default||e).from:void 0}function l7(t,e,n){const i={};for(const r in t){const s=a7(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function c7({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function u7(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function w3(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const c=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const p=t.getValue(f),g=a[f];if(!p||g===void 0||d&&c7(d,f))continue;const y={delay:n,elapsed:0,...M1(s||{},f)};if(window.HandoffAppearAnimations){const _=t.getProps()[k4];if(_){const b=window.HandoffAppearAnimations(_,f,p,Ce);b!==null&&(y.elapsed=b,y.isHandoff=!0)}}let x=!y.isHandoff&&!u7(p,g);if(y.type==="spring"&&(p.getVelocity()||y.velocity)&&(x=!1),p.animation&&(x=!1),x)continue;p.start(D1(f,p,g,t.shouldReduceMotion&&ls.has(f)?{type:!1}:y));const w=p.animation;Yh(l)&&(l.add(f),w.then(()=>l.remove(f))),c.push(w)}return o&&Promise.all(c).then(()=>{o&&s7(t,o)}),c}function _g(t,e,n={}){const i=Zd(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(w3(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=r;return h7(t,e,c+l,d,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,c]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function h7(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(d7).forEach((c,d)=>{c.notify("AnimationStart",e),o.push(_g(c,e,{...s,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function d7(t,e){return t.sortNodePosition(e)}function f7(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>_g(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=_g(t,e,n);else{const r=typeof e=="function"?Zd(t,e,n.custom):e;i=Promise.all(w3(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const p7=[...x1].reverse(),m7=x1.length;function g7(t){return e=>Promise.all(e.map(({animation:n,options:i})=>f7(t,n,i)))}function y7(t){let e=g7(t);const n=x7();let i=!0;const r=(l,c)=>{const d=Zd(t,c);if(d){const{transition:f,transitionEnd:p,...g}=d;l={...l,...g,...p}}return l};function s(l){e=l(t)}function o(l,c){const d=t.getProps(),f=t.getVariantContext(!0)||{},p=[],g=new Set;let y={},x=1/0;for(let _=0;_<m7;_++){const b=p7[_],k=n[b],A=d[b]!==void 0?d[b]:f[b],M=vl(A),L=b===c?k.isActive:null;L===!1&&(x=_);let E=A===f[b]&&A!==d[b]&&M;if(E&&i&&t.manuallyAnimateOnMount&&(E=!1),k.protectedKeys={...y},!k.isActive&&L===null||!A&&!k.prevProp||Qd(A)||typeof A=="boolean")continue;let C=v7(k.prevProp,A)||b===c&&k.isActive&&!E&&M||_>x&&M,j=!1;const R=Array.isArray(A)?A:[A];let D=R.reduce(r,{});L===!1&&(D={});const{prevResolvedValues:I={}}=k,re={...I,...D},ae=ne=>{C=!0,g.has(ne)&&(j=!0,g.delete(ne)),k.needsAnimating[ne]=!0};for(const ne in re){const me=D[ne],U=I[ne];if(y.hasOwnProperty(ne))continue;let q=!1;Wh(me)&&Wh(U)?q=!W4(me,U):q=me!==U,q?me!==void 0?ae(ne):g.add(ne):me!==void 0&&g.has(ne)?ae(ne):k.protectedKeys[ne]=!0}k.prevProp=A,k.prevResolvedValues=D,k.isActive&&(y={...y,...D}),i&&t.blockInitialAnimation&&(C=!1),C&&(!E||j)&&p.push(...R.map(ne=>({animation:ne,options:{type:b,...l}})))}if(g.size){const _={};g.forEach(b=>{const k=t.getBaseTarget(b);k!==void 0&&(_[b]=k)}),p.push({animation:_})}let w=!!p.length;return i&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(w=!1),i=!1,w?e(p):Promise.resolve()}function a(l,c,d){var f;if(n[l].isActive===c)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(g=>{var y;return(y=g.animationState)===null||y===void 0?void 0:y.setActive(l,c)}),n[l].isActive=c;const p=o(d,l);for(const g in n)n[g].protectedKeys={};return p}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function v7(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!W4(e,t):!1}function Cr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function x7(){return{animate:Cr(!0),whileInView:Cr(),whileHover:Cr(),whileTap:Cr(),whileDrag:Cr(),whileFocus:Cr(),exit:Cr()}}class b7 extends _r{constructor(e){super(e),e.animationState||(e.animationState=y7(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Qd(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let _7=0;class w7 extends _r{constructor(){super(...arguments),this.id=_7++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const k7={animation:{Feature:b7},exit:{Feature:w7}},_x=(t,e)=>Math.abs(t-e);function S7(t,e){const n=_x(t.x,e.x),i=_x(t.y,e.y);return Math.sqrt(n**2+i**2)}class k3{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=jp(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=S7(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:y}=f,{timestamp:x}=Pt;this.history.push({...y,timestamp:x});const{onStart:w,onMove:_}=this.handlers;p||(w&&w(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Pp(p,this.transformPagePoint),Ce.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=jp(f.type==="pointercancel"?this.lastMoveEventInfo:Pp(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,w),y&&y(f,w)},!F4(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Jd(e),a=Pp(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Pt;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(e,jp(a,this.history)),this.removeListeners=er(pi(this.contextWindow,"pointermove",this.handlePointerMove),pi(this.contextWindow,"pointerup",this.handlePointerUp),pi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),wi(this.updatePoint)}}function Pp(t,e){return e?{point:e(t.point)}:t}function wx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function jp({point:t},e){return{point:t,delta:wx(t,S3(e)),offset:wx(t,T7(e)),velocity:E7(e,.1)}}function T7(t){return t[0]}function S3(t){return t[t.length-1]}function E7(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=S3(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>qr(e)));)n--;if(!i)return{x:0,y:0};const s=mi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ln(t){return t.max-t.min}function wg(t,e=0,n=.01){return Math.abs(t-e)<=n}function kx(t,e,n,i=.5){t.origin=i,t.originPoint=Oe(e.min,e.max,t.origin),t.scale=ln(n)/ln(e),(wg(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Oe(n.min,n.max,t.origin)-t.originPoint,(wg(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Na(t,e,n,i){kx(t.x,e.x,n.x,i?i.originX:void 0),kx(t.y,e.y,n.y,i?i.originY:void 0)}function Sx(t,e,n){t.min=n.min+e.min,t.max=t.min+ln(e)}function C7(t,e,n){Sx(t.x,e.x,n.x),Sx(t.y,e.y,n.y)}function Tx(t,e,n){t.min=e.min-n.min,t.max=t.min+ln(e)}function za(t,e,n){Tx(t.x,e.x,n.x),Tx(t.y,e.y,n.y)}function P7(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Oe(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Oe(n,t,i.max):Math.min(t,n)),t}function Ex(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function j7(t,{top:e,left:n,bottom:i,right:r}){return{x:Ex(t.x,n,r),y:Ex(t.y,e,i)}}function Cx(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function A7(t,e){return{x:Cx(t.x,e.x),y:Cx(t.y,e.y)}}function I7(t,e){let n=.5;const i=ln(t),r=ln(e);return r>i?n=bl(e.min,e.max-i,t.min):i>r&&(n=bl(t.min,t.max-r,e.min)),ar(0,1,n)}function R7(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const kg=.35;function M7(t=kg){return t===!1?t=0:t===!0&&(t=kg),{x:Px(t,"left","right"),y:Px(t,"top","bottom")}}function Px(t,e,n){return{min:jx(t,e),max:jx(t,n)}}function jx(t,e){return typeof t=="number"?t:t[e]||0}const Ax=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hs=()=>({x:Ax(),y:Ax()}),Ix=()=>({min:0,max:0}),Xe=()=>({x:Ix(),y:Ix()});function gn(t){return[t("x"),t("y")]}function T3({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function D7({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function V7(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Ap(t){return t===void 0||t===1}function Sg({scale:t,scaleX:e,scaleY:n}){return!Ap(t)||!Ap(e)||!Ap(n)}function Mr(t){return Sg(t)||E3(t)||t.z||t.rotate||t.rotateX||t.rotateY}function E3(t){return Rx(t.x)||Rx(t.y)}function Rx(t){return t&&t!=="0%"}function Xh(t,e,n){const i=t-n,r=e*i;return n+r}function Mx(t,e,n,i,r){return r!==void 0&&(t=Xh(t,r,i)),Xh(t,n,i)+e}function Tg(t,e=0,n=1,i,r){t.min=Mx(t.min,e,n,i,r),t.max=Mx(t.max,e,n,i,r)}function C3(t,{x:e,y:n}){Tg(t.x,e.translate,e.scale,e.originPoint),Tg(t.y,n.translate,n.scale,n.originPoint)}function L7(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ws(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,C3(t,o)),i&&Mr(s.latestValues)&&Ws(t,s.latestValues))}e.x=Dx(e.x),e.y=Dx(e.y)}function Dx(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Oi(t,e){t.min=t.min+e,t.max=t.max+e}function Vx(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=Oe(t.min,t.max,s);Tg(t,e[n],e[i],o,e.scale)}const O7=["x","scaleX","originX"],N7=["y","scaleY","originY"];function Ws(t,e){Vx(t.x,e,O7),Vx(t.y,e,N7)}function P3(t,e){return T3(V7(t.getBoundingClientRect(),e))}function z7(t,e,n){const i=P3(t,n),{scroll:r}=e;return r&&(Oi(i.x,r.offset.x),Oi(i.y,r.offset.y)),i}const j3=({current:t})=>t?t.ownerDocument.defaultView:null,F7=new WeakMap;class B7{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Xe(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Jd(d,"page").point)},s=(d,f)=>{const{drag:p,dragPropagation:g,onDragStart:y}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=$4(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),gn(w=>{let _=this.getAxisMotionValue(w).get()||0;if(Yn.test(_)){const{projection:b}=this.visualElement;if(b&&b.layout){const k=b.layout.layoutBox[w];k&&(_=ln(k)*(parseFloat(_)/100))}}this.originPoint[w]=_}),y&&Ce.update(()=>y(d,f),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:y,onDrag:x}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:w}=f;if(g&&this.currentDirection===null){this.currentDirection=$7(w),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,w),this.updateAxis("y",f.point,w),this.visualElement.render(),x&&x(d,f)},a=(d,f)=>this.stop(d,f),l=()=>gn(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new k3(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:j3(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&Ce.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Uc(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=P7(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&$s(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=j7(r.layoutBox,n):this.constraints=!1,this.elastic=M7(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&gn(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=R7(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!$s(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=z7(i,r.root,this.visualElement.getTransformPagePoint());let o=A7(r.layout.layoutBox,s);if(n){const a=n(D7(o));this.hasMutatedConstraints=!!a,a&&(o=T3(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=gn(d=>{if(!Uc(d,n,this.currentDirection))return;let f=l&&l[d]||{};o&&(f={min:0,max:0});const p=r?200:1e6,g=r?40:1e7,y={type:"inertia",velocity:i?e[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(D1(e,i,0,n))}stopAnimation(){gn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){gn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){gn(n=>{const{drag:i}=this.getProps();if(!Uc(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-Oe(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!$s(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};gn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=I7({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),gn(o=>{if(!Uc(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Oe(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;F7.set(this.visualElement,this);const e=this.visualElement.current,n=pi(e,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();$s(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=di(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(gn(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=kg,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Uc(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function $7(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class U7 extends _r{constructor(e){super(e),this.removeGroupControls=Ge,this.removeListeners=Ge,this.controls=new B7(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ge}unmount(){this.removeGroupControls(),this.removeListeners()}}const Lx=t=>(e,n)=>{t&&Ce.update(()=>t(e,n))};class H7 extends _r{constructor(){super(...arguments),this.removePointerDownListener=Ge}onPointerDown(e){this.session=new k3(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:j3(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Lx(e),onStart:Lx(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&Ce.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=pi(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function W7(){const t=V.useContext(Gd);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=V.useId();return V.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const nh={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ox(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const oa={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Z.test(t))t=parseFloat(t);else return t;const n=Ox(t,e.target.x),i=Ox(t,e.target.y);return`${n}% ${i}%`}},K7={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=lr.parse(t);if(r.length>5)return i;const s=lr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=Oe(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class G7 extends lt.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;tA(q7),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),nh.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Ce.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function A3(t){const[e,n]=W7(),i=V.useContext(_1);return lt.createElement(G7,{...t,layoutGroup:i,switchLayoutGroup:V.useContext(T4),isPresent:e,safeToRemove:n})}const q7={borderRadius:{...oa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:oa,borderTopRightRadius:oa,borderBottomLeftRadius:oa,borderBottomRightRadius:oa,boxShadow:K7},I3=["TopLeft","TopRight","BottomLeft","BottomRight"],Q7=I3.length,Nx=t=>typeof t=="string"?parseFloat(t):t,zx=t=>typeof t=="number"||Z.test(t);function Y7(t,e,n,i,r,s){r?(t.opacity=Oe(0,n.opacity!==void 0?n.opacity:1,X7(i)),t.opacityExit=Oe(e.opacity!==void 0?e.opacity:1,0,J7(i))):s&&(t.opacity=Oe(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<Q7;o++){const a=`border${I3[o]}Radius`;let l=Fx(e,a),c=Fx(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||zx(l)===zx(c)?(t[a]=Math.max(Oe(Nx(l),Nx(c),i),0),(Yn.test(c)||Yn.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Oe(e.rotate||0,n.rotate||0,i))}function Fx(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const X7=R3(0,.5,e3),J7=R3(.5,.95,Ge);function R3(t,e,n){return i=>i<t?0:i>e?1:n(bl(t,e,i))}function Bx(t,e){t.min=e.min,t.max=e.max}function fn(t,e){Bx(t.x,e.x),Bx(t.y,e.y)}function $x(t,e,n,i,r){return t-=e,t=Xh(t,1/n,i),r!==void 0&&(t=Xh(t,1/r,i)),t}function Z7(t,e=0,n=1,i=.5,r,s=t,o=t){if(Yn.test(e)&&(e=parseFloat(e),e=Oe(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Oe(s.min,s.max,i);t===s&&(a-=e),t.min=$x(t.min,e,n,a,r),t.max=$x(t.max,e,n,a,r)}function Ux(t,e,[n,i,r],s,o){Z7(t,e[n],e[i],e[r],e.scale,s,o)}const e9=["x","scaleX","originX"],t9=["y","scaleY","originY"];function Hx(t,e,n,i){Ux(t.x,e,e9,n?n.x:void 0,i?i.x:void 0),Ux(t.y,e,t9,n?n.y:void 0,i?i.y:void 0)}function Wx(t){return t.translate===0&&t.scale===1}function M3(t){return Wx(t.x)&&Wx(t.y)}function n9(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function D3(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function Kx(t){return ln(t.x)/ln(t.y)}class i9{constructor(){this.members=[]}add(e){V1(this.members,e),e.scheduleRender()}remove(e){if(L1(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Gx(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:d}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),d&&(i+=`rotateY(${d}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const r9=(t,e)=>t.depth-e.depth;class s9{constructor(){this.children=[],this.isDirty=!1}add(e){V1(this.children,e),this.isDirty=!0}remove(e){L1(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(r9),this.isDirty=!1,this.children.forEach(e)}}function o9(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(wi(i),t(s-e))};return Ce.read(i,!0),()=>wi(i)}function a9(t){window.MotionDebug&&window.MotionDebug.record(t)}function l9(t){return t instanceof SVGElement&&t.tagName!=="svg"}function c9(t,e,n){const i=Zt(t)?t:ho(t);return i.start(D1("",i,e,n)),i.animation}const qx=["","X","Y","Z"],u9={visibility:"hidden"},Qx=1e3;let h9=0;const Dr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function V3({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=h9++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Dr.totalNodes=Dr.resolvedTargetDeltas=Dr.recalculatedProjection=0,this.nodes.forEach(p9),this.nodes.forEach(x9),this.nodes.forEach(b9),this.nodes.forEach(m9),a9(Dr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new s9)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new O1),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=l9(o),this.instance=o;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=o9(p,250),nh.hasAnimatedSinceResize&&(nh.hasAnimatedSinceResize=!1,this.nodes.forEach(Xx))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||T9,{onLayoutAnimationStart:w,onLayoutAnimationComplete:_}=d.getProps(),b=!this.targetLayout||!D3(this.targetLayout,y)||g,k=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||k||p&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,k);const A={...M1(x,"layout"),onPlay:w,onComplete:_};(d.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A)}else p||Xx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,wi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(_9),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Yx);return}this.isUpdating||this.nodes.forEach(y9),this.isUpdating=!1,this.nodes.forEach(v9),this.nodes.forEach(d9),this.nodes.forEach(f9),this.clearAllSnapshots();const a=performance.now();Pt.delta=ar(0,1e3/60,a-Pt.timestamp),Pt.timestamp=a,Pt.isProcessing=!0,bp.update.process(Pt),bp.preRender.process(Pt),bp.render.process(Pt),Pt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(g9),this.sharedNodes.forEach(w9)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Xe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!M3(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&(a||Mr(this.latestValues)||d)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),E9(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Xe();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Oi(a.x,l.offset.x),Oi(a.y,l.offset.y)),a}removeElementScroll(o){const a=Xe();fn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:d,options:f}=c;if(c!==this.root&&d&&f.layoutScroll){if(d.isRoot){fn(a,o);const{scroll:p}=this.root;p&&(Oi(a.x,-p.offset.x),Oi(a.y,-p.offset.y))}Oi(a.x,d.offset.x),Oi(a.y,d.offset.y)}}return a}applyTransform(o,a=!1){const l=Xe();fn(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Ws(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Mr(d.latestValues)&&Ws(l,d.latestValues)}return Mr(this.latestValues)&&Ws(l,this.latestValues),l}removeTransform(o){const a=Xe();fn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Mr(c.latestValues))continue;Sg(c.latestValues)&&c.updateSnapshot();const d=Xe(),f=c.measurePageBox();fn(d,f),Hx(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return Mr(this.latestValues)&&Hx(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Pt.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xe(),this.relativeTargetOrigin=Xe(),za(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Xe(),this.targetWithTransforms=Xe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),C7(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):fn(this.target,this.layout.layoutBox),C3(this.target,this.targetDelta)):fn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xe(),this.relativeTargetOrigin=Xe(),za(this.relativeTargetOrigin,this.target,g.target),fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Dr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Sg(this.parent.latestValues)||E3(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Pt.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;fn(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;L7(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:y}=a;if(!y){this.projectionTransform&&(this.projectionDelta=Hs(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Hs(),this.projectionDeltaWithTransform=Hs());const x=this.projectionTransform;Na(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=Gx(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Dr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},f=Hs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Xe(),g=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=g!==y,w=this.getStack(),_=!w||w.members.length<=1,b=!!(x&&!_&&this.options.crossfade===!0&&!this.path.some(S9));this.animationProgress=0;let k;this.mixTargetDelta=A=>{const M=A/1e3;Jx(f.x,o.x,M),Jx(f.y,o.y,M),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(za(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),k9(this.relativeTarget,this.relativeTargetOrigin,p,M),k&&n9(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=Xe()),fn(k,this.relativeTarget)),x&&(this.animationValues=d,Y7(d,c,this.latestValues,M,b,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(wi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ce.update(()=>{nh.hasAnimatedSinceResize=!0,this.currentAnimation=c9(0,Qx,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&L3(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Xe();const f=ln(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=ln(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}fn(a,l),Ws(a,d),Na(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new i9),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let d=0;d<qx.length;d++){const f="rotate"+qx[d];l[f]&&(c[f]=l[f],o.setStaticValue(f,0))}o.render();for(const d in c)o.setStaticValue(d,c[d]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return u9;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=th(o==null?void 0:o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=th(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Mr(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=Gx(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:g,y}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Uh){if(p[x]===void 0)continue;const{correct:w,applyTo:_}=Uh[x],b=c.transform==="none"?p[x]:w(p[x],f);if(_){const k=_.length;for(let A=0;A<k;A++)c[_[A]]=b}else c[x]=b}return this.options.layoutId&&(c.pointerEvents=f===this?th(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Yx),this.root.sharedNodes.clear()}}}function d9(t){t.updateLayout()}function f9(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?gn(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=ln(p);p.min=i[f].min,p.max=p.min+g}):L3(s,n.layoutBox,i)&&gn(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=ln(i[f]);p.max=p.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+g)});const a=Hs();Na(a,i,n.layoutBox);const l=Hs();o?Na(l,t.applyTransform(r,!0),n.measuredBox):Na(l,i,n.layoutBox);const c=!M3(a);let d=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const y=Xe();za(y,n.layoutBox,p.layoutBox);const x=Xe();za(x,i,g.layoutBox),D3(y,x)||(d=!0),f.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=y,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function p9(t){Dr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function m9(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function g9(t){t.clearSnapshot()}function Yx(t){t.clearMeasurements()}function y9(t){t.isLayoutDirty=!1}function v9(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Xx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function x9(t){t.resolveTargetDelta()}function b9(t){t.calcProjection()}function _9(t){t.resetRotation()}function w9(t){t.removeLeadSnapshot()}function Jx(t,e,n){t.translate=Oe(e.translate,0,n),t.scale=Oe(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Zx(t,e,n,i){t.min=Oe(e.min,n.min,i),t.max=Oe(e.max,n.max,i)}function k9(t,e,n,i){Zx(t.x,e.x,n.x,i),Zx(t.y,e.y,n.y,i)}function S9(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const T9={duration:.45,ease:[.4,0,.1,1]},eb=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),tb=eb("applewebkit/")&&!eb("chrome/")?Math.round:Ge;function nb(t){t.min=tb(t.min),t.max=tb(t.max)}function E9(t){nb(t.x),nb(t.y)}function L3(t,e,n){return t==="position"||t==="preserve-aspect"&&!wg(Kx(e),Kx(n),.2)}const C9=V3({attachResizeListener:(t,e)=>di(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ip={current:void 0},O3=V3({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ip.current){const t=new C9({});t.mount(window),t.setOptions({layoutScroll:!0}),Ip.current=t}return Ip.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),P9={pan:{Feature:H7},drag:{Feature:U7,ProjectionNode:O3,MeasureLayout:A3}},j9=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function A9(t){const e=j9.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function Eg(t,e,n=1){const[i,r]=A9(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return x3(o)?parseFloat(o):o}else return mg(r)?Eg(r,e,n+1):r}function I9(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!mg(s))return;const o=Eg(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!mg(s))continue;const o=Eg(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const R9=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),N3=t=>R9.has(t),M9=t=>Object.keys(t).some(N3),ib=t=>t===cs||t===Z,rb=(t,e)=>parseFloat(t.split(", ")[e]),sb=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return rb(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?rb(s[1],t):0}},D9=new Set(["x","y","z"]),V9=Gl.filter(t=>!D9.has(t));function L9(t){const e=[];return V9.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const fo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:sb(4,13),y:sb(5,14)};fo.translateX=fo.x;fo.translateY=fo.y;const O9=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=fo[c](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const d=e.getValue(c);d&&d.jump(a[c]),t[c]=fo[c](l,s)}),t},N9=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(N3);let s=[],o=!1;const a=[];if(r.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let d=n[l],f=sa(d);const p=e[l];let g;if(Wh(p)){const y=p.length,x=p[0]===null?1:0;d=p[x],f=sa(d);for(let w=x;w<y&&p[w]!==null;w++)g?Kh(sa(p[w])===g):g=sa(p[w])}else g=sa(p);if(f!==g)if(ib(f)&&ib(g)){const y=c.get();typeof y=="string"&&c.set(parseFloat(y)),typeof p=="string"?e[l]=parseFloat(p):Array.isArray(p)&&g===Z&&(e[l]=p.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(d===0||p===0)?d===0?c.set(g.transform(d)):e[l]=f.transform(p):(o||(s=L9(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(p))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=O9(e,t,a);return s.length&&s.forEach(([d,f])=>{t.getValue(d).set(f)}),t.render(),qd&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function z9(t,e,n,i){return M9(e)?N9(t,e,n,i):{target:e,transitionEnd:i}}const F9=(t,e,n,i)=>{const r=I9(t,e,i);return e=r.target,i=r.transitionEnd,z9(t,e,n,i)},Cg={current:null},z3={current:!1};function B9(){if(z3.current=!0,!!qd)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Cg.current=t.matches;t.addListener(e),e()}else Cg.current=!1}function $9(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(Zt(s))t.addValue(r,s),Yh(i)&&i.add(r);else if(Zt(o))t.addValue(r,ho(s,{owner:t})),Yh(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,ho(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const ob=new WeakMap,F3=Object.keys(xl),U9=F3.length,ab=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],H9=b1.length;class W9{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Ce.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Yd(n),this.isVariantNode=S4(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const p=d[f];a[f]!==void 0&&Zt(p)&&(p.set(a[f],!1),Yh(c)&&c.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,ob.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),z3.current||B9(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Cg.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ob.delete(this.current),this.projection&&this.projection.unmount(),wi(this.notifyUpdate),wi(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=ls.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Ce.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let o,a;for(let l=0;l<U9;l++){const c=F3[l],{isEnabled:d,Feature:f,ProjectionNode:p,MeasureLayout:g}=xl[c];p&&(o=p),d(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:d,dragConstraints:f,layoutScroll:p,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!d||f&&$s(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:g})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Xe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<ab.length;i++){const r=ab[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=$9(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<H9;i++){const r=b1[i],s=this.props[r];(vl(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ho(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=P1(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Zt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new O1),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class B3 extends W9{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let o=l7(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),s){o7(this,i,o);const a=F9(this,i,o,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function K9(t){return window.getComputedStyle(t)}class G9 extends B3{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(ls.has(n)){const i=R1(n);return i&&i.default||0}else{const i=K9(e),r=(P4(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return P3(e,n)}build(e,n,i,r){k1(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return C1(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Zt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){D4(e,n,i,r)}}class q9 extends B3{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ls.has(n)){const i=R1(n);return i&&i.default||0}return n=V4.has(n)?n:v1(n),e.getAttribute(n)}measureInstanceViewportBox(){return Xe()}scrapeMotionValuesFromProps(e,n){return O4(e,n)}build(e,n,i,r){T1(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){L4(e,n,i,r)}mount(e){this.isSVGTag=E1(e.tagName),super.mount(e)}}const Q9=(t,e)=>w1(t)?new q9(e,{enableHardwareAcceleration:!1}):new G9(e,{enableHardwareAcceleration:!0}),Y9={layout:{ProjectionNode:O3,MeasureLayout:A3}},X9={...k7,...HA,...P9,...Y9},F=Zj((t,e)=>IA(t,e,X9,Q9));function $3(){const t=V.useRef(!1);return y1(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function J9(){const t=$3(),[e,n]=V.useState(0),i=V.useCallback(()=>{t.current&&n(e+1)},[e]);return[V.useCallback(()=>Ce.postRender(i),[i]),e]}class Z9 extends V.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function eR({children:t,isPresent:e}){const n=V.useId(),i=V.useRef(null),r=V.useRef({width:0,height:0,top:0,left:0});return V.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=r.current;if(e||!i.current||!s||!o)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),V.createElement(Z9,{isPresent:e,childRef:i,sizeRef:r},V.cloneElement(t,{ref:i}))}const Rp=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=N4(tR),l=V.useId(),c=V.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:d=>{a.set(d,!0);for(const f of a.values())if(!f)return;i&&i()},register:d=>(a.set(d,!1),()=>a.delete(d))}),s?void 0:[n]);return V.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),V.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=V.createElement(eR,{isPresent:n},t)),V.createElement(Gd.Provider,{value:c},t)};function tR(){return new Map}function nR(t){return V.useEffect(()=>()=>t(),[])}const Vr=t=>t.key||"";function iR(t,e){t.forEach(n=>{const i=Vr(n);e.set(i,n)})}function rR(t){const e=[];return V.Children.forEach(t,n=>{V.isValidElement(n)&&e.push(n)}),e}const U3=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=V.useContext(_1).forceRender||J9()[0],l=$3(),c=rR(t);let d=c;const f=V.useRef(new Map).current,p=V.useRef(d),g=V.useRef(new Map).current,y=V.useRef(!0);if(y1(()=>{y.current=!1,iR(c,g),p.current=d}),nR(()=>{y.current=!0,g.clear(),f.clear()}),y.current)return V.createElement(V.Fragment,null,d.map(b=>V.createElement(Rp,{key:Vr(b),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},b)));d=[...d];const x=p.current.map(Vr),w=c.map(Vr),_=x.length;for(let b=0;b<_;b++){const k=x[b];w.indexOf(k)===-1&&!f.has(k)&&f.set(k,void 0)}return o==="wait"&&f.size&&(d=[]),f.forEach((b,k)=>{if(w.indexOf(k)!==-1)return;const A=g.get(k);if(!A)return;const M=x.indexOf(k);let L=b;if(!L){const E=()=>{f.delete(k);const S=Array.from(g.keys()).filter(C=>!w.includes(C));if(S.forEach(C=>g.delete(C)),p.current=c.filter(C=>{const j=Vr(C);return j===k||S.includes(j)}),!f.size){if(l.current===!1)return;a(),i&&i()}};L=V.createElement(Rp,{key:Vr(A),isPresent:!1,onExitComplete:E,custom:e,presenceAffectsLayout:s,mode:o},A),f.set(k,L)}d.splice(M,0,L)}),d=d.map(b=>{const k=b.key;return f.has(k)?b:V.createElement(Rp,{key:Vr(b),isPresent:!0,presenceAffectsLayout:s,mode:o},b)}),V.createElement(V.Fragment,null,f.size?d:d.map(b=>V.cloneElement(b)))};var lb={};/**
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
 */const H3=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},W3={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),i.push(n[d],n[f],n[p],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H3(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw new oR;const p=s<<2|a>>4;if(i.push(p),c!==64){const g=a<<4&240|c>>2;if(i.push(g),f!==64){const y=c<<6&192|f;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aR=function(t){const e=H3(t);return W3.encodeByteArray(e,!0)},Jh=function(t){return aR(t).replace(/\./g,"")},lR=function(t){try{return W3.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uR=()=>cR().__FIREBASE_DEFAULTS__,hR=()=>{if(typeof process>"u"||typeof lb>"u")return;const t=lb.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lR(t[1]);return e&&JSON.parse(e)},N1=()=>{try{return uR()||hR()||dR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fR=t=>{var e,n;return(n=(e=N1())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pR=t=>{const e=fR(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},K3=()=>{var t;return(t=N1())===null||t===void 0?void 0:t.config};/**
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
 */class mR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function gR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Jh(JSON.stringify(n)),Jh(JSON.stringify(o)),""].join(".")}/**
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
 */function yR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vR(){var t;const e=(t=N1())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xR(){return!vR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bR(){try{return typeof indexedDB=="object"}catch{return!1}}function _R(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const wR="FirebaseError";class Po extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=wR,Object.setPrototypeOf(this,Po.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G3.prototype.create)}}class G3{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?kR(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Po(r,a,i)}}function kR(t,e){return t.replace(SR,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const SR=/\{\$([^}]+)}/g;function Pg(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(cb(s)&&cb(o)){if(!Pg(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function cb(t){return t!==null&&typeof t=="object"}/**
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
 */function ki(t){return t&&t._delegate?t._delegate:t}class _l{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lr="[DEFAULT]";/**
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
 */class TR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new mR;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CR(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ER(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ER(t){return t===Lr?void 0:t}function CR(t){return t.instantiationMode==="EAGER"}/**
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
 */class PR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const jR={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},AR=de.INFO,IR={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},RR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=IR[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class q3{constructor(e){this.name=e,this._logLevel=AR,this._logHandler=RR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const MR=(t,e)=>e.some(n=>t instanceof n);let ub,hb;function DR(){return ub||(ub=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VR(){return hb||(hb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q3=new WeakMap,jg=new WeakMap,Y3=new WeakMap,Mp=new WeakMap,z1=new WeakMap;function LR(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Q3.set(n,t)}).catch(()=>{}),z1.set(e,t),e}function OR(t){if(jg.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jg.set(t,e)}let Ag={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Y3.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NR(t){Ag=t(Ag)}function zR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Dp(this),e,...n);return Y3.set(i,e.sort?e.sort():[e]),tr(i)}:VR().includes(t)?function(...e){return t.apply(Dp(this),e),tr(Q3.get(this))}:function(...e){return tr(t.apply(Dp(this),e))}}function FR(t){return typeof t=="function"?zR(t):(t instanceof IDBTransaction&&OR(t),MR(t,DR())?new Proxy(t,Ag):t)}function tr(t){if(t instanceof IDBRequest)return LR(t);if(Mp.has(t))return Mp.get(t);const e=FR(t);return e!==t&&(Mp.set(t,e),z1.set(e,t)),e}const Dp=t=>z1.get(t);function BR(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=tr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(tr(o.result),l.oldVersion,l.newVersion,tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $R=["get","getKey","getAll","getAllKeys","count"],UR=["put","add","delete","clear"],Vp=new Map;function db(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vp.get(e))return Vp.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=UR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||$R.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Vp.set(e,s),s}NR(t=>({...t,get:(e,n,i)=>db(e,n)||t.get(e,n,i),has:(e,n)=>!!db(e,n)||t.has(e,n)}));/**
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
 */class HR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function WR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ig="@firebase/app",fb="0.10.15";/**
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
 */const Si=new q3("@firebase/app"),KR="@firebase/app-compat",GR="@firebase/analytics-compat",qR="@firebase/analytics",QR="@firebase/app-check-compat",YR="@firebase/app-check",XR="@firebase/auth",JR="@firebase/auth-compat",ZR="@firebase/database",eM="@firebase/data-connect",tM="@firebase/database-compat",nM="@firebase/functions",iM="@firebase/functions-compat",rM="@firebase/installations",sM="@firebase/installations-compat",oM="@firebase/messaging",aM="@firebase/messaging-compat",lM="@firebase/performance",cM="@firebase/performance-compat",uM="@firebase/remote-config",hM="@firebase/remote-config-compat",dM="@firebase/storage",fM="@firebase/storage-compat",pM="@firebase/firestore",mM="@firebase/vertexai",gM="@firebase/firestore-compat",yM="firebase",vM="11.0.1";/**
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
 */const Rg="[DEFAULT]",xM={[Ig]:"fire-core",[KR]:"fire-core-compat",[qR]:"fire-analytics",[GR]:"fire-analytics-compat",[YR]:"fire-app-check",[QR]:"fire-app-check-compat",[XR]:"fire-auth",[JR]:"fire-auth-compat",[ZR]:"fire-rtdb",[eM]:"fire-data-connect",[tM]:"fire-rtdb-compat",[nM]:"fire-fn",[iM]:"fire-fn-compat",[rM]:"fire-iid",[sM]:"fire-iid-compat",[oM]:"fire-fcm",[aM]:"fire-fcm-compat",[lM]:"fire-perf",[cM]:"fire-perf-compat",[uM]:"fire-rc",[hM]:"fire-rc-compat",[dM]:"fire-gcs",[fM]:"fire-gcs-compat",[pM]:"fire-fst",[gM]:"fire-fst-compat",[mM]:"fire-vertex","fire-js":"fire-js",[yM]:"fire-js-all"};/**
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
 */const Zh=new Map,bM=new Map,Mg=new Map;function pb(t,e){try{t.container.addComponent(e)}catch(n){Si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ed(t){const e=t.name;if(Mg.has(e))return Si.debug(`There were multiple attempts to register component ${e}.`),!1;Mg.set(e,t);for(const n of Zh.values())pb(n,t);for(const n of bM.values())pb(n,t);return!0}function _M(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new G3("app","Firebase",wM);/**
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
 */class kM{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _l("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const SM=vM;function X3(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Rg,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw nr.create("bad-app-name",{appName:String(r)});if(n||(n=K3()),!n)throw nr.create("no-options");const s=Zh.get(r);if(s){if(Pg(n,s.options)&&Pg(i,s.config))return s;throw nr.create("duplicate-app",{appName:r})}const o=new PR(r);for(const l of Mg.values())o.addComponent(l);const a=new kM(n,i,o);return Zh.set(r,a),a}function TM(t=Rg){const e=Zh.get(t);if(!e&&t===Rg&&K3())return X3();if(!e)throw nr.create("no-app",{appName:t});return e}function Zs(t,e,n){var i;let r=(i=xM[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Si.warn(a.join(" "));return}ed(new _l(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const EM="firebase-heartbeat-database",CM=1,wl="firebase-heartbeat-store";let Lp=null;function J3(){return Lp||(Lp=BR(EM,CM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wl)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),Lp}async function PM(t){try{const n=(await J3()).transaction(wl),i=await n.objectStore(wl).get(Z3(t));return await n.done,i}catch(e){if(e instanceof Po)Si.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Si.warn(n.message)}}}async function mb(t,e){try{const i=(await J3()).transaction(wl,"readwrite");await i.objectStore(wl).put(e,Z3(t)),await i.done}catch(n){if(n instanceof Po)Si.warn(n.message);else{const i=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Si.warn(i.message)}}}function Z3(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jM=1024,AM=30*24*60*60*1e3;class IM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MM(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gb();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=AM}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Si.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gb(),{heartbeatsToSend:i,unsentEntries:r}=RM(this._heartbeatsCache.heartbeats),s=Jh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Si.warn(n),""}}}function gb(){return new Date().toISOString().substring(0,10)}function RM(t,e=jM){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),yb(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yb(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class MM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bR()?_R().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yb(t){return Jh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function DM(t){ed(new _l("platform-logger",e=>new HR(e),"PRIVATE")),ed(new _l("heartbeat",e=>new IM(e),"PRIVATE")),Zs(Ig,fb,t),Zs(Ig,fb,"esm2017"),Zs("fire-js","")}DM("");var VM="firebase",LM="11.0.1";/**
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
 */Zs(VM,LM,"app");var vb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,eS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,S){function C(){}C.prototype=S.prototype,E.D=S.prototype,E.prototype=new C,E.prototype.constructor=E,E.C=function(j,R,D){for(var I=Array(arguments.length-2),re=2;re<arguments.length;re++)I[re-2]=arguments[re];return S.prototype[R].apply(j,I)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,S,C){C||(C=0);var j=Array(16);if(typeof S=="string")for(var R=0;16>R;++R)j[R]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(R=0;16>R;++R)j[R]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=E.g[0],C=E.g[1],R=E.g[2];var D=E.g[3],I=S+(D^C&(R^D))+j[0]+3614090360&4294967295;S=C+(I<<7&4294967295|I>>>25),I=D+(R^S&(C^R))+j[1]+3905402710&4294967295,D=S+(I<<12&4294967295|I>>>20),I=R+(C^D&(S^C))+j[2]+606105819&4294967295,R=D+(I<<17&4294967295|I>>>15),I=C+(S^R&(D^S))+j[3]+3250441966&4294967295,C=R+(I<<22&4294967295|I>>>10),I=S+(D^C&(R^D))+j[4]+4118548399&4294967295,S=C+(I<<7&4294967295|I>>>25),I=D+(R^S&(C^R))+j[5]+1200080426&4294967295,D=S+(I<<12&4294967295|I>>>20),I=R+(C^D&(S^C))+j[6]+2821735955&4294967295,R=D+(I<<17&4294967295|I>>>15),I=C+(S^R&(D^S))+j[7]+4249261313&4294967295,C=R+(I<<22&4294967295|I>>>10),I=S+(D^C&(R^D))+j[8]+1770035416&4294967295,S=C+(I<<7&4294967295|I>>>25),I=D+(R^S&(C^R))+j[9]+2336552879&4294967295,D=S+(I<<12&4294967295|I>>>20),I=R+(C^D&(S^C))+j[10]+4294925233&4294967295,R=D+(I<<17&4294967295|I>>>15),I=C+(S^R&(D^S))+j[11]+2304563134&4294967295,C=R+(I<<22&4294967295|I>>>10),I=S+(D^C&(R^D))+j[12]+1804603682&4294967295,S=C+(I<<7&4294967295|I>>>25),I=D+(R^S&(C^R))+j[13]+4254626195&4294967295,D=S+(I<<12&4294967295|I>>>20),I=R+(C^D&(S^C))+j[14]+2792965006&4294967295,R=D+(I<<17&4294967295|I>>>15),I=C+(S^R&(D^S))+j[15]+1236535329&4294967295,C=R+(I<<22&4294967295|I>>>10),I=S+(R^D&(C^R))+j[1]+4129170786&4294967295,S=C+(I<<5&4294967295|I>>>27),I=D+(C^R&(S^C))+j[6]+3225465664&4294967295,D=S+(I<<9&4294967295|I>>>23),I=R+(S^C&(D^S))+j[11]+643717713&4294967295,R=D+(I<<14&4294967295|I>>>18),I=C+(D^S&(R^D))+j[0]+3921069994&4294967295,C=R+(I<<20&4294967295|I>>>12),I=S+(R^D&(C^R))+j[5]+3593408605&4294967295,S=C+(I<<5&4294967295|I>>>27),I=D+(C^R&(S^C))+j[10]+38016083&4294967295,D=S+(I<<9&4294967295|I>>>23),I=R+(S^C&(D^S))+j[15]+3634488961&4294967295,R=D+(I<<14&4294967295|I>>>18),I=C+(D^S&(R^D))+j[4]+3889429448&4294967295,C=R+(I<<20&4294967295|I>>>12),I=S+(R^D&(C^R))+j[9]+568446438&4294967295,S=C+(I<<5&4294967295|I>>>27),I=D+(C^R&(S^C))+j[14]+3275163606&4294967295,D=S+(I<<9&4294967295|I>>>23),I=R+(S^C&(D^S))+j[3]+4107603335&4294967295,R=D+(I<<14&4294967295|I>>>18),I=C+(D^S&(R^D))+j[8]+1163531501&4294967295,C=R+(I<<20&4294967295|I>>>12),I=S+(R^D&(C^R))+j[13]+2850285829&4294967295,S=C+(I<<5&4294967295|I>>>27),I=D+(C^R&(S^C))+j[2]+4243563512&4294967295,D=S+(I<<9&4294967295|I>>>23),I=R+(S^C&(D^S))+j[7]+1735328473&4294967295,R=D+(I<<14&4294967295|I>>>18),I=C+(D^S&(R^D))+j[12]+2368359562&4294967295,C=R+(I<<20&4294967295|I>>>12),I=S+(C^R^D)+j[5]+4294588738&4294967295,S=C+(I<<4&4294967295|I>>>28),I=D+(S^C^R)+j[8]+2272392833&4294967295,D=S+(I<<11&4294967295|I>>>21),I=R+(D^S^C)+j[11]+1839030562&4294967295,R=D+(I<<16&4294967295|I>>>16),I=C+(R^D^S)+j[14]+4259657740&4294967295,C=R+(I<<23&4294967295|I>>>9),I=S+(C^R^D)+j[1]+2763975236&4294967295,S=C+(I<<4&4294967295|I>>>28),I=D+(S^C^R)+j[4]+1272893353&4294967295,D=S+(I<<11&4294967295|I>>>21),I=R+(D^S^C)+j[7]+4139469664&4294967295,R=D+(I<<16&4294967295|I>>>16),I=C+(R^D^S)+j[10]+3200236656&4294967295,C=R+(I<<23&4294967295|I>>>9),I=S+(C^R^D)+j[13]+681279174&4294967295,S=C+(I<<4&4294967295|I>>>28),I=D+(S^C^R)+j[0]+3936430074&4294967295,D=S+(I<<11&4294967295|I>>>21),I=R+(D^S^C)+j[3]+3572445317&4294967295,R=D+(I<<16&4294967295|I>>>16),I=C+(R^D^S)+j[6]+76029189&4294967295,C=R+(I<<23&4294967295|I>>>9),I=S+(C^R^D)+j[9]+3654602809&4294967295,S=C+(I<<4&4294967295|I>>>28),I=D+(S^C^R)+j[12]+3873151461&4294967295,D=S+(I<<11&4294967295|I>>>21),I=R+(D^S^C)+j[15]+530742520&4294967295,R=D+(I<<16&4294967295|I>>>16),I=C+(R^D^S)+j[2]+3299628645&4294967295,C=R+(I<<23&4294967295|I>>>9),I=S+(R^(C|~D))+j[0]+4096336452&4294967295,S=C+(I<<6&4294967295|I>>>26),I=D+(C^(S|~R))+j[7]+1126891415&4294967295,D=S+(I<<10&4294967295|I>>>22),I=R+(S^(D|~C))+j[14]+2878612391&4294967295,R=D+(I<<15&4294967295|I>>>17),I=C+(D^(R|~S))+j[5]+4237533241&4294967295,C=R+(I<<21&4294967295|I>>>11),I=S+(R^(C|~D))+j[12]+1700485571&4294967295,S=C+(I<<6&4294967295|I>>>26),I=D+(C^(S|~R))+j[3]+2399980690&4294967295,D=S+(I<<10&4294967295|I>>>22),I=R+(S^(D|~C))+j[10]+4293915773&4294967295,R=D+(I<<15&4294967295|I>>>17),I=C+(D^(R|~S))+j[1]+2240044497&4294967295,C=R+(I<<21&4294967295|I>>>11),I=S+(R^(C|~D))+j[8]+1873313359&4294967295,S=C+(I<<6&4294967295|I>>>26),I=D+(C^(S|~R))+j[15]+4264355552&4294967295,D=S+(I<<10&4294967295|I>>>22),I=R+(S^(D|~C))+j[6]+2734768916&4294967295,R=D+(I<<15&4294967295|I>>>17),I=C+(D^(R|~S))+j[13]+1309151649&4294967295,C=R+(I<<21&4294967295|I>>>11),I=S+(R^(C|~D))+j[4]+4149444226&4294967295,S=C+(I<<6&4294967295|I>>>26),I=D+(C^(S|~R))+j[11]+3174756917&4294967295,D=S+(I<<10&4294967295|I>>>22),I=R+(S^(D|~C))+j[2]+718787259&4294967295,R=D+(I<<15&4294967295|I>>>17),I=C+(D^(R|~S))+j[9]+3951481745&4294967295,E.g[0]=E.g[0]+S&4294967295,E.g[1]=E.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+D&4294967295}i.prototype.u=function(E,S){S===void 0&&(S=E.length);for(var C=S-this.blockSize,j=this.B,R=this.h,D=0;D<S;){if(R==0)for(;D<=C;)r(this,E,D),D+=this.blockSize;if(typeof E=="string"){for(;D<S;)if(j[R++]=E.charCodeAt(D++),R==this.blockSize){r(this,j),R=0;break}}else for(;D<S;)if(j[R++]=E[D++],R==this.blockSize){r(this,j),R=0;break}}this.h=R,this.o+=S},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var S=1;S<E.length-8;++S)E[S]=0;var C=8*this.o;for(S=E.length-8;S<E.length;++S)E[S]=C&255,C/=256;for(this.u(E),E=Array(16),S=C=0;4>S;++S)for(var j=0;32>j;j+=8)E[C++]=this.g[S]>>>j&255;return E};function s(E,S){var C=a;return Object.prototype.hasOwnProperty.call(C,E)?C[E]:C[E]=S(E)}function o(E,S){this.h=S;for(var C=[],j=!0,R=E.length-1;0<=R;R--){var D=E[R]|0;j&&D==S||(C[R]=D,j=!1)}this.g=C}var a={};function l(E){return-128<=E&&128>E?s(E,function(S){return new o([S|0],0>S?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return w(c(-E));for(var S=[],C=1,j=0;E>=C;j++)S[j]=E/C|0,C*=4294967296;return new o(S,0)}function d(E,S){if(E.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(E.charAt(0)=="-")return w(d(E.substring(1),S));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(S,8)),j=f,R=0;R<E.length;R+=8){var D=Math.min(8,E.length-R),I=parseInt(E.substring(R,R+D),S);8>D?(D=c(Math.pow(S,D)),j=j.j(D).add(c(I))):(j=j.j(C),j=j.add(c(I)))}return j}var f=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(x(this))return-w(this).m();for(var E=0,S=1,C=0;C<this.g.length;C++){var j=this.i(C);E+=(0<=j?j:4294967296+j)*S,S*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(y(this))return"0";if(x(this))return"-"+w(this).toString(E);for(var S=c(Math.pow(E,6)),C=this,j="";;){var R=A(C,S).g;C=_(C,R.j(S));var D=((0<C.g.length?C.g[0]:C.h)>>>0).toString(E);if(C=R,y(C))return D+j;for(;6>D.length;)D="0"+D;j=D+j}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function y(E){if(E.h!=0)return!1;for(var S=0;S<E.g.length;S++)if(E.g[S]!=0)return!1;return!0}function x(E){return E.h==-1}t.l=function(E){return E=_(this,E),x(E)?-1:y(E)?0:1};function w(E){for(var S=E.g.length,C=[],j=0;j<S;j++)C[j]=~E.g[j];return new o(C,~E.h).add(p)}t.abs=function(){return x(this)?w(this):this},t.add=function(E){for(var S=Math.max(this.g.length,E.g.length),C=[],j=0,R=0;R<=S;R++){var D=j+(this.i(R)&65535)+(E.i(R)&65535),I=(D>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);j=I>>>16,D&=65535,I&=65535,C[R]=I<<16|D}return new o(C,C[C.length-1]&-2147483648?-1:0)};function _(E,S){return E.add(w(S))}t.j=function(E){if(y(this)||y(E))return f;if(x(this))return x(E)?w(this).j(w(E)):w(w(this).j(E));if(x(E))return w(this.j(w(E)));if(0>this.l(g)&&0>E.l(g))return c(this.m()*E.m());for(var S=this.g.length+E.g.length,C=[],j=0;j<2*S;j++)C[j]=0;for(j=0;j<this.g.length;j++)for(var R=0;R<E.g.length;R++){var D=this.i(j)>>>16,I=this.i(j)&65535,re=E.i(R)>>>16,ae=E.i(R)&65535;C[2*j+2*R]+=I*ae,b(C,2*j+2*R),C[2*j+2*R+1]+=D*ae,b(C,2*j+2*R+1),C[2*j+2*R+1]+=I*re,b(C,2*j+2*R+1),C[2*j+2*R+2]+=D*re,b(C,2*j+2*R+2)}for(j=0;j<S;j++)C[j]=C[2*j+1]<<16|C[2*j];for(j=S;j<2*S;j++)C[j]=0;return new o(C,0)};function b(E,S){for(;(E[S]&65535)!=E[S];)E[S+1]+=E[S]>>>16,E[S]&=65535,S++}function k(E,S){this.g=E,this.h=S}function A(E,S){if(y(S))throw Error("division by zero");if(y(E))return new k(f,f);if(x(E))return S=A(w(E),S),new k(w(S.g),w(S.h));if(x(S))return S=A(E,w(S)),new k(w(S.g),S.h);if(30<E.g.length){if(x(E)||x(S))throw Error("slowDivide_ only works with positive integers.");for(var C=p,j=S;0>=j.l(E);)C=M(C),j=M(j);var R=L(C,1),D=L(j,1);for(j=L(j,2),C=L(C,2);!y(j);){var I=D.add(j);0>=I.l(E)&&(R=R.add(C),D=I),j=L(j,1),C=L(C,1)}return S=_(E,R.j(S)),new k(R,S)}for(R=f;0<=E.l(S);){for(C=Math.max(1,Math.floor(E.m()/S.m())),j=Math.ceil(Math.log(C)/Math.LN2),j=48>=j?1:Math.pow(2,j-48),D=c(C),I=D.j(S);x(I)||0<I.l(E);)C-=j,D=c(C),I=D.j(S);y(D)&&(D=p),R=R.add(D),E=_(E,I)}return new k(R,E)}t.A=function(E){return A(this,E).h},t.and=function(E){for(var S=Math.max(this.g.length,E.g.length),C=[],j=0;j<S;j++)C[j]=this.i(j)&E.i(j);return new o(C,this.h&E.h)},t.or=function(E){for(var S=Math.max(this.g.length,E.g.length),C=[],j=0;j<S;j++)C[j]=this.i(j)|E.i(j);return new o(C,this.h|E.h)},t.xor=function(E){for(var S=Math.max(this.g.length,E.g.length),C=[],j=0;j<S;j++)C[j]=this.i(j)^E.i(j);return new o(C,this.h^E.h)};function M(E){for(var S=E.g.length+1,C=[],j=0;j<S;j++)C[j]=E.i(j)<<1|E.i(j-1)>>>31;return new o(C,E.h)}function L(E,S){var C=S>>5;S%=32;for(var j=E.g.length-C,R=[],D=0;D<j;D++)R[D]=0<S?E.i(D+C)>>>S|E.i(D+C+1)<<32-S:E.i(D+C);return new o(R,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,eS=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Qr=o}).apply(typeof vb<"u"?vb:typeof self<"u"?self:typeof window<"u"?window:{});var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tS,va,nS,ih,Dg,iS,rS,sS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,m,v){return h==Array.prototype||h==Object.prototype||(h[m]=v.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hc=="object"&&Hc];for(var m=0;m<h.length;++m){var v=h[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=n(this);function r(h,m){if(m)e:{var v=i;h=h.split(".");for(var P=0;P<h.length-1;P++){var O=h[P];if(!(O in v))break e;v=v[O]}h=h[h.length-1],P=v[h],m=m(P),m!=P&&m!=null&&e(v,h,{configurable:!0,writable:!0,value:m})}}function s(h,m){h instanceof String&&(h+="");var v=0,P=!1,O={next:function(){if(!P&&v<h.length){var N=v++;return{value:m(N,h[N]),done:!1}}return P=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}r("Array.prototype.values",function(h){return h||function(){return s(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(h){var m=typeof h;return m=m!="object"?m:h?Array.isArray(h)?"array":m:"null",m=="array"||m=="object"&&typeof h.length=="number"}function c(h){var m=typeof h;return m=="object"&&h!=null||m=="function"}function d(h,m,v){return h.call.apply(h.bind,arguments)}function f(h,m,v){if(!h)throw Error();if(2<arguments.length){var P=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,P),h.apply(m,O)}}return function(){return h.apply(m,arguments)}}function p(h,m,v){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function g(h,m){var v=Array.prototype.slice.call(arguments,1);return function(){var P=v.slice();return P.push.apply(P,arguments),h.apply(this,P)}}function y(h,m){function v(){}v.prototype=m.prototype,h.aa=m.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(P,O,N){for(var H=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)H[Te-2]=arguments[Te];return m.prototype[O].apply(P,H)}}function x(h){const m=h.length;if(0<m){const v=Array(m);for(let P=0;P<m;P++)v[P]=h[P];return v}return[]}function w(h,m){for(let v=1;v<arguments.length;v++){const P=arguments[v];if(l(P)){const O=h.length||0,N=P.length||0;h.length=O+N;for(let H=0;H<N;H++)h[O+H]=P[H]}else h.push(P)}}class _{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function b(h){return/^[\s\xa0]*$/.test(h)}function k(){var h=a.navigator;return h&&(h=h.userAgent)?h:""}function A(h){return A[" "](h),h}A[" "]=function(){};var M=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function L(h,m,v){for(const P in h)m.call(v,h[P],P,h)}function E(h,m){for(const v in h)m.call(void 0,h[v],v,h)}function S(h){const m={};for(const v in h)m[v]=h[v];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(h,m){let v,P;for(let O=1;O<arguments.length;O++){P=arguments[O];for(v in P)h[v]=P[v];for(let N=0;N<C.length;N++)v=C[N],Object.prototype.hasOwnProperty.call(P,v)&&(h[v]=P[v])}}function R(h){var m=1;h=h.split(":");const v=[];for(;0<m&&h.length;)v.push(h.shift()),m--;return h.length&&v.push(h.join(":")),v}function D(h){a.setTimeout(()=>{throw h},0)}function I(){var h=q;let m=null;return h.g&&(m=h.g,h.g=h.g.next,h.g||(h.h=null),m.next=null),m}class re{constructor(){this.h=this.g=null}add(m,v){const P=ae.get();P.set(m,v),this.h?this.h.next=P:this.g=P,this.h=P}}var ae=new _(()=>new ne,h=>h.reset());class ne{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let me,U=!1,q=new re,Y=()=>{const h=a.Promise.resolve(void 0);me=()=>{h.then(J)}};var J=()=>{for(var h;h=I();){try{h.h.call(h.g)}catch(v){D(v)}var m=ae;m.j(h),100>m.h&&(m.h++,h.next=m.g,m.g=h)}U=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(h,m){this.type=h,this.g=this.target=m,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Qe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var h=!1,m=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};a.addEventListener("test",v,m),a.removeEventListener("test",v,m)}catch{}return h}();function rt(h,m){if(_e.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,P=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=m,m=h.relatedTarget){if(M){e:{try{A(m.nodeName);var O=!0;break e}catch{}O=!1}O||(m=null)}}else v=="mouseover"?m=h.fromElement:v=="mouseout"&&(m=h.toElement);this.relatedTarget=m,P?(this.clientX=P.clientX!==void 0?P.clientX:P.pageX,this.clientY=P.clientY!==void 0?P.clientY:P.pageY,this.screenX=P.screenX||0,this.screenY=P.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ve[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&rt.aa.h.call(this)}}y(rt,_e);var Ve={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),kf=0;function Lo(h,m,v,P,O){this.listener=h,this.proxy=null,this.src=m,this.type=v,this.capture=!!P,this.ha=O,this.key=++kf,this.da=this.fa=!1}function ti(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function dn(h){this.src=h,this.g={},this.h=0}dn.prototype.add=function(h,m,v,P,O){var N=h.toString();h=this.g[N],h||(h=this.g[N]=[],this.h++);var H=Sf(h,m,P,O);return-1<H?(m=h[H],v||(m.fa=!1)):(m=new Lo(m,this.src,N,!!P,O),m.fa=v,h.push(m)),m};function sc(h,m){var v=m.type;if(v in h.g){var P=h.g[v],O=Array.prototype.indexOf.call(P,m,void 0),N;(N=0<=O)&&Array.prototype.splice.call(P,O,1),N&&(ti(m),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Sf(h,m,v,P){for(var O=0;O<h.length;++O){var N=h[O];if(!N.da&&N.listener==m&&N.capture==!!v&&N.ha==P)return O}return-1}var Tf="closure_lm_"+(1e6*Math.random()|0),Ef={};function Dy(h,m,v,P,O){if(Array.isArray(m)){for(var N=0;N<m.length;N++)Dy(h,m[N],v,P,O);return null}return v=Oy(v),h&&h[hn]?h.K(m,v,c(P)?!!P.capture:!!P,O):O6(h,m,v,!1,P,O)}function O6(h,m,v,P,O,N){if(!m)throw Error("Invalid event type");var H=c(O)?!!O.capture:!!O,Te=Pf(h);if(Te||(h[Tf]=Te=new dn(h)),v=Te.add(m,v,P,H,N),v.proxy)return v;if(P=N6(),v.proxy=P,P.src=h,P.listener=v,h.addEventListener)Qe||(O=H),O===void 0&&(O=!1),h.addEventListener(m.toString(),P,O);else if(h.attachEvent)h.attachEvent(Ly(m.toString()),P);else if(h.addListener&&h.removeListener)h.addListener(P);else throw Error("addEventListener and attachEvent are unavailable.");return v}function N6(){function h(v){return m.call(h.src,h.listener,v)}const m=z6;return h}function Vy(h,m,v,P,O){if(Array.isArray(m))for(var N=0;N<m.length;N++)Vy(h,m[N],v,P,O);else P=c(P)?!!P.capture:!!P,v=Oy(v),h&&h[hn]?(h=h.i,m=String(m).toString(),m in h.g&&(N=h.g[m],v=Sf(N,v,P,O),-1<v&&(ti(N[v]),Array.prototype.splice.call(N,v,1),N.length==0&&(delete h.g[m],h.h--)))):h&&(h=Pf(h))&&(m=h.g[m.toString()],h=-1,m&&(h=Sf(m,v,P,O)),(v=-1<h?m[h]:null)&&Cf(v))}function Cf(h){if(typeof h!="number"&&h&&!h.da){var m=h.src;if(m&&m[hn])sc(m.i,h);else{var v=h.type,P=h.proxy;m.removeEventListener?m.removeEventListener(v,P,h.capture):m.detachEvent?m.detachEvent(Ly(v),P):m.addListener&&m.removeListener&&m.removeListener(P),(v=Pf(m))?(sc(v,h),v.h==0&&(v.src=null,m[Tf]=null)):ti(h)}}}function Ly(h){return h in Ef?Ef[h]:Ef[h]="on"+h}function z6(h,m){if(h.da)h=!0;else{m=new rt(m,this);var v=h.listener,P=h.ha||h.src;h.fa&&Cf(h),h=v.call(P,m)}return h}function Pf(h){return h=h[Tf],h instanceof dn?h:null}var jf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oy(h){return typeof h=="function"?h:(h[jf]||(h[jf]=function(m){return h.handleEvent(m)}),h[jf])}function _t(){se.call(this),this.i=new dn(this),this.M=this,this.F=null}y(_t,se),_t.prototype[hn]=!0,_t.prototype.removeEventListener=function(h,m,v,P){Vy(this,h,m,v,P)};function Vt(h,m){var v,P=h.F;if(P)for(v=[];P;P=P.F)v.push(P);if(h=h.M,P=m.type||m,typeof m=="string")m=new _e(m,h);else if(m instanceof _e)m.target=m.target||h;else{var O=m;m=new _e(P,h),j(m,O)}if(O=!0,v)for(var N=v.length-1;0<=N;N--){var H=m.g=v[N];O=oc(H,P,!0,m)&&O}if(H=m.g=h,O=oc(H,P,!0,m)&&O,O=oc(H,P,!1,m)&&O,v)for(N=0;N<v.length;N++)H=m.g=v[N],O=oc(H,P,!1,m)&&O}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var h=this.i,m;for(m in h.g){for(var v=h.g[m],P=0;P<v.length;P++)ti(v[P]);delete h.g[m],h.h--}}this.F=null},_t.prototype.K=function(h,m,v,P){return this.i.add(String(h),m,!1,v,P)},_t.prototype.L=function(h,m,v,P){return this.i.add(String(h),m,!0,v,P)};function oc(h,m,v,P){if(m=h.i.g[String(m)],!m)return!0;m=m.concat();for(var O=!0,N=0;N<m.length;++N){var H=m[N];if(H&&!H.da&&H.capture==v){var Te=H.listener,dt=H.ha||H.src;H.fa&&sc(h.i,H),O=Te.call(dt,P)!==!1&&O}}return O&&!P.defaultPrevented}function Ny(h,m,v){if(typeof h=="function")v&&(h=p(h,v));else if(h&&typeof h.handleEvent=="function")h=p(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:a.setTimeout(h,m||0)}function zy(h){h.g=Ny(()=>{h.g=null,h.i&&(h.i=!1,zy(h))},h.l);const m=h.h;h.h=null,h.m.apply(null,m)}class F6 extends se{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:zy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oo(h){se.call(this),this.h=h,this.g={}}y(Oo,se);var Fy=[];function By(h){L(h.g,function(m,v){this.g.hasOwnProperty(v)&&Cf(m)},h),h.g={}}Oo.prototype.N=function(){Oo.aa.N.call(this),By(this)},Oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Af=a.JSON.stringify,B6=a.JSON.parse,$6=class{stringify(h){return a.JSON.stringify(h,void 0)}parse(h){return a.JSON.parse(h,void 0)}};function If(){}If.prototype.h=null;function $y(h){return h.h||(h.h=h.i())}function Uy(){}var No={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rf(){_e.call(this,"d")}y(Rf,_e);function Mf(){_e.call(this,"c")}y(Mf,_e);var kr={},Hy=null;function ac(){return Hy=Hy||new _t}kr.La="serverreachability";function Wy(h){_e.call(this,kr.La,h)}y(Wy,_e);function zo(h){const m=ac();Vt(m,new Wy(m))}kr.STAT_EVENT="statevent";function Ky(h,m){_e.call(this,kr.STAT_EVENT,h),this.stat=m}y(Ky,_e);function Lt(h){const m=ac();Vt(m,new Ky(m,h))}kr.Ma="timingevent";function Gy(h,m){_e.call(this,kr.Ma,h),this.size=m}y(Gy,_e);function Fo(h,m){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){h()},m)}function Bo(){this.g=!0}Bo.prototype.xa=function(){this.g=!1};function U6(h,m,v,P,O,N){h.info(function(){if(h.g)if(N)for(var H="",Te=N.split("&"),dt=0;dt<Te.length;dt++){var ye=Te[dt].split("=");if(1<ye.length){var wt=ye[0];ye=ye[1];var kt=wt.split("_");H=2<=kt.length&&kt[1]=="type"?H+(wt+"="+ye+"&"):H+(wt+"=redacted&")}}else H=null;else H=N;return"XMLHTTP REQ ("+P+") [attempt "+O+"]: "+m+`
`+v+`
`+H})}function H6(h,m,v,P,O,N,H){h.info(function(){return"XMLHTTP RESP ("+P+") [ attempt "+O+"]: "+m+`
`+v+`
`+N+" "+H})}function gs(h,m,v,P){h.info(function(){return"XMLHTTP TEXT ("+m+"): "+K6(h,v)+(P?" "+P:"")})}function W6(h,m){h.info(function(){return"TIMEOUT: "+m})}Bo.prototype.info=function(){};function K6(h,m){if(!h.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var P=v[h];if(!(2>P.length)){var O=P[1];if(Array.isArray(O)&&!(1>O.length)){var N=O[0];if(N!="noop"&&N!="stop"&&N!="close")for(var H=1;H<O.length;H++)O[H]=""}}}}return Af(v)}catch{return m}}var lc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Df;function cc(){}y(cc,If),cc.prototype.g=function(){return new XMLHttpRequest},cc.prototype.i=function(){return{}},Df=new cc;function Pi(h,m,v,P){this.j=h,this.i=m,this.l=v,this.R=P||1,this.U=new Oo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qy}function Qy(){this.i=null,this.g="",this.h=!1}var Yy={},Vf={};function Lf(h,m,v){h.L=1,h.v=fc(ni(m)),h.m=v,h.P=!0,Xy(h,null)}function Xy(h,m){h.F=Date.now(),uc(h),h.A=ni(h.v);var v=h.A,P=h.R;Array.isArray(P)||(P=[String(P)]),h2(v.i,"t",P),h.C=0,v=h.j.J,h.h=new Qy,h.g=j2(h.j,v?m:null,!h.m),0<h.O&&(h.M=new F6(p(h.Y,h,h.g),h.O)),m=h.U,v=h.g,P=h.ca;var O="readystatechange";Array.isArray(O)||(O&&(Fy[0]=O.toString()),O=Fy);for(var N=0;N<O.length;N++){var H=Dy(v,O[N],P||m.handleEvent,!1,m.h||m);if(!H)break;m.g[H.key]=H}m=h.H?S(h.H):{},h.m?(h.u||(h.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,m)):(h.u="GET",h.g.ea(h.A,h.u,null,m)),zo(),U6(h.i,h.u,h.A,h.l,h.R,h.m)}Pi.prototype.ca=function(h){h=h.target;const m=this.M;m&&ii(h)==3?m.j():this.Y(h)},Pi.prototype.Y=function(h){try{if(h==this.g)e:{const kt=ii(this.g);var m=this.g.Ba();const xs=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||v2(this.g)))){this.J||kt!=4||m==7||(m==8||0>=xs?zo(3):zo(2)),Of(this);var v=this.g.Z();this.X=v;t:if(Jy(this)){var P=v2(this.g);h="";var O=P.length,N=ii(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),$o(this);var H="";break t}this.h.i=new a.TextDecoder}for(m=0;m<O;m++)this.h.h=!0,h+=this.h.i.decode(P[m],{stream:!(N&&m==O-1)});P.length=0,this.h.g+=h,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=v==200,H6(this.i,this.u,this.A,this.l,this.R,kt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,dt=this.g;if((Te=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(Te)){var ye=Te;break t}}ye=null}if(v=ye)gs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nf(this,v);else{this.o=!1,this.s=3,Lt(12),Sr(this),$o(this);break e}}if(this.P){v=!0;let Cn;for(;!this.J&&this.C<H.length;)if(Cn=G6(this,H),Cn==Vf){kt==4&&(this.s=4,Lt(14),v=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(Cn==Yy){this.s=4,Lt(15),gs(this.i,this.l,H,"[Invalid Chunk]"),v=!1;break}else gs(this.i,this.l,Cn,null),Nf(this,Cn);if(Jy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||H.length!=0||this.h.h||(this.s=1,Lt(16),v=!1),this.o=this.o&&v,!v)gs(this.i,this.l,H,"[Invalid Chunked Response]"),Sr(this),$o(this);else if(0<H.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Hf(wt),wt.M=!0,Lt(11))}}else gs(this.i,this.l,H,null),Nf(this,H);kt==4&&Sr(this),this.o&&!this.J&&(kt==4?T2(this.j,this):(this.o=!1,uc(this)))}else uE(this.g),v==400&&0<H.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Sr(this),$o(this)}}}catch{}finally{}};function Jy(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function G6(h,m){var v=h.C,P=m.indexOf(`
`,v);return P==-1?Vf:(v=Number(m.substring(v,P)),isNaN(v)?Yy:(P+=1,P+v>m.length?Vf:(m=m.slice(P,P+v),h.C=P+v,m)))}Pi.prototype.cancel=function(){this.J=!0,Sr(this)};function uc(h){h.S=Date.now()+h.I,Zy(h,h.I)}function Zy(h,m){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Fo(p(h.ba,h),m)}function Of(h){h.B&&(a.clearTimeout(h.B),h.B=null)}Pi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(W6(this.i,this.A),this.L!=2&&(zo(),Lt(17)),Sr(this),this.s=2,$o(this)):Zy(this,this.S-h)};function $o(h){h.j.G==0||h.J||T2(h.j,h)}function Sr(h){Of(h);var m=h.M;m&&typeof m.ma=="function"&&m.ma(),h.M=null,By(h.U),h.g&&(m=h.g,h.g=null,m.abort(),m.ma())}function Nf(h,m){try{var v=h.j;if(v.G!=0&&(v.g==h||zf(v.h,h))){if(!h.K&&zf(v.h,h)&&v.G==3){try{var P=v.Da.g.parse(m)}catch{P=null}if(Array.isArray(P)&&P.length==3){var O=P;if(O[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)xc(v),yc(v);else break e;Uf(v),Lt(18)}}else v.za=O[1],0<v.za-v.T&&37500>O[2]&&v.F&&v.v==0&&!v.C&&(v.C=Fo(p(v.Za,v),6e3));if(1>=n2(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Er(v,11)}else if((h.K||v.g==h)&&xc(v),!b(m))for(O=v.Da.g.parse(m),m=0;m<O.length;m++){let ye=O[m];if(v.T=ye[0],ye=ye[1],v.G==2)if(ye[0]=="c"){v.K=ye[1],v.ia=ye[2];const wt=ye[3];wt!=null&&(v.la=wt,v.j.info("VER="+v.la));const kt=ye[4];kt!=null&&(v.Aa=kt,v.j.info("SVER="+v.Aa));const xs=ye[5];xs!=null&&typeof xs=="number"&&0<xs&&(P=1.5*xs,v.L=P,v.j.info("backChannelRequestTimeoutMs_="+P)),P=v;const Cn=h.g;if(Cn){const _c=Cn.g?Cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_c){var N=P.h;N.g||_c.indexOf("spdy")==-1&&_c.indexOf("quic")==-1&&_c.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ff(N,N.h),N.h=null))}if(P.D){const Wf=Cn.g?Cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wf&&(P.ya=Wf,Pe(P.I,P.D,Wf))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),P=v;var H=h;if(P.qa=P2(P,P.J?P.ia:null,P.W),H.K){i2(P.h,H);var Te=H,dt=P.L;dt&&(Te.I=dt),Te.B&&(Of(Te),uc(Te)),P.g=H}else k2(P);0<v.i.length&&vc(v)}else ye[0]!="stop"&&ye[0]!="close"||Er(v,7);else v.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Er(v,7):$f(v):ye[0]!="noop"&&v.l&&v.l.ta(ye),v.v=0)}}zo(4)}catch{}}var q6=class{constructor(h,m){this.g=h,this.map=m}};function e2(h){this.l=h||10,a.PerformanceNavigationTiming?(h=a.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function t2(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function n2(h){return h.h?1:h.g?h.g.size:0}function zf(h,m){return h.h?h.h==m:h.g?h.g.has(m):!1}function Ff(h,m){h.g?h.g.add(m):h.h=m}function i2(h,m){h.h&&h.h==m?h.h=null:h.g&&h.g.has(m)&&h.g.delete(m)}e2.prototype.cancel=function(){if(this.i=r2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function r2(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let m=h.i;for(const v of h.g.values())m=m.concat(v.D);return m}return x(h.i)}function Q6(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(l(h)){for(var m=[],v=h.length,P=0;P<v;P++)m.push(h[P]);return m}m=[],v=0;for(P in h)m[v++]=h[P];return m}function Y6(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(l(h)||typeof h=="string"){var m=[];h=h.length;for(var v=0;v<h;v++)m.push(v);return m}m=[],v=0;for(const P in h)m[v++]=P;return m}}}function s2(h,m){if(h.forEach&&typeof h.forEach=="function")h.forEach(m,void 0);else if(l(h)||typeof h=="string")Array.prototype.forEach.call(h,m,void 0);else for(var v=Y6(h),P=Q6(h),O=P.length,N=0;N<O;N++)m.call(void 0,P[N],v&&v[N],h)}var o2=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function X6(h,m){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var P=h[v].indexOf("="),O=null;if(0<=P){var N=h[v].substring(0,P);O=h[v].substring(P+1)}else N=h[v];m(N,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Tr(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Tr){this.h=h.h,hc(this,h.j),this.o=h.o,this.g=h.g,dc(this,h.s),this.l=h.l;var m=h.i,v=new Wo;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),a2(this,v),this.m=h.m}else h&&(m=String(h).match(o2))?(this.h=!1,hc(this,m[1]||"",!0),this.o=Uo(m[2]||""),this.g=Uo(m[3]||"",!0),dc(this,m[4]),this.l=Uo(m[5]||"",!0),a2(this,m[6]||"",!0),this.m=Uo(m[7]||"")):(this.h=!1,this.i=new Wo(null,this.h))}Tr.prototype.toString=function(){var h=[],m=this.j;m&&h.push(Ho(m,l2,!0),":");var v=this.g;return(v||m=="file")&&(h.push("//"),(m=this.o)&&h.push(Ho(m,l2,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Ho(v,v.charAt(0)=="/"?eE:Z6,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Ho(v,nE)),h.join("")};function ni(h){return new Tr(h)}function hc(h,m,v){h.j=v?Uo(m,!0):m,h.j&&(h.j=h.j.replace(/:$/,""))}function dc(h,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);h.s=m}else h.s=null}function a2(h,m,v){m instanceof Wo?(h.i=m,iE(h.i,h.h)):(v||(m=Ho(m,tE)),h.i=new Wo(m,h.h))}function Pe(h,m,v){h.i.set(m,v)}function fc(h){return Pe(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Uo(h,m){return h?m?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ho(h,m,v){return typeof h=="string"?(h=encodeURI(h).replace(m,J6),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function J6(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var l2=/[#\/\?@]/g,Z6=/[#\?:]/g,eE=/[#\?]/g,tE=/[#\?@]/g,nE=/#/g;function Wo(h,m){this.h=this.g=null,this.i=h||null,this.j=!!m}function ji(h){h.g||(h.g=new Map,h.h=0,h.i&&X6(h.i,function(m,v){h.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}t=Wo.prototype,t.add=function(h,m){ji(this),this.i=null,h=ys(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(m),this.h+=1,this};function c2(h,m){ji(h),m=ys(h,m),h.g.has(m)&&(h.i=null,h.h-=h.g.get(m).length,h.g.delete(m))}function u2(h,m){return ji(h),m=ys(h,m),h.g.has(m)}t.forEach=function(h,m){ji(this),this.g.forEach(function(v,P){v.forEach(function(O){h.call(m,O,P,this)},this)},this)},t.na=function(){ji(this);const h=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let P=0;P<m.length;P++){const O=h[P];for(let N=0;N<O.length;N++)v.push(m[P])}return v},t.V=function(h){ji(this);let m=[];if(typeof h=="string")u2(this,h)&&(m=m.concat(this.g.get(ys(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)m=m.concat(h[v])}return m},t.set=function(h,m){return ji(this),this.i=null,h=ys(this,h),u2(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[m]),this.h+=1,this},t.get=function(h,m){return h?(h=this.V(h),0<h.length?String(h[0]):m):m};function h2(h,m,v){c2(h,m),0<v.length&&(h.i=null,h.g.set(ys(h,m),x(v)),h.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var P=m[v];const N=encodeURIComponent(String(P)),H=this.V(P);for(P=0;P<H.length;P++){var O=N;H[P]!==""&&(O+="="+encodeURIComponent(String(H[P]))),h.push(O)}}return this.i=h.join("&")};function ys(h,m){return m=String(m),h.j&&(m=m.toLowerCase()),m}function iE(h,m){m&&!h.j&&(ji(h),h.i=null,h.g.forEach(function(v,P){var O=P.toLowerCase();P!=O&&(c2(this,P),h2(this,O,v))},h)),h.j=m}function rE(h,m){const v=new Bo;if(a.Image){const P=new Image;P.onload=g(Ai,v,"TestLoadImage: loaded",!0,m,P),P.onerror=g(Ai,v,"TestLoadImage: error",!1,m,P),P.onabort=g(Ai,v,"TestLoadImage: abort",!1,m,P),P.ontimeout=g(Ai,v,"TestLoadImage: timeout",!1,m,P),a.setTimeout(function(){P.ontimeout&&P.ontimeout()},1e4),P.src=h}else m(!1)}function sE(h,m){const v=new Bo,P=new AbortController,O=setTimeout(()=>{P.abort(),Ai(v,"TestPingServer: timeout",!1,m)},1e4);fetch(h,{signal:P.signal}).then(N=>{clearTimeout(O),N.ok?Ai(v,"TestPingServer: ok",!0,m):Ai(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(O),Ai(v,"TestPingServer: error",!1,m)})}function Ai(h,m,v,P,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),P(v)}catch{}}function oE(){this.g=new $6}function aE(h,m,v){const P=v||"";try{s2(h,function(O,N){let H=O;c(O)&&(H=Af(O)),m.push(P+N+"="+encodeURIComponent(H))})}catch(O){throw m.push(P+"type="+encodeURIComponent("_badmap")),O}}function pc(h){this.l=h.Ub||null,this.j=h.eb||!1}y(pc,If),pc.prototype.g=function(){return new mc(this.l,this.j)},pc.prototype.i=function(h){return function(){return h}}({});function mc(h,m){_t.call(this),this.D=h,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(mc,_t),t=mc.prototype,t.open=function(h,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=m,this.readyState=1,Go(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(m.body=h),(this.D||a).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ko(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Go(this)),this.g&&(this.readyState=3,Go(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;d2(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function d2(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var m=h.value?h.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!h.done}))&&(this.response=this.responseText+=m)}h.done?Ko(this):Go(this),this.readyState==3&&d2(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Ko(this))},t.Qa=function(h){this.g&&(this.response=h,Ko(this))},t.ga=function(){this.g&&Ko(this)};function Ko(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Go(h)}t.setRequestHeader=function(h,m){this.u.append(h,m)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=m.next();return h.join(`\r
`)};function Go(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(mc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function f2(h){let m="";return L(h,function(v,P){m+=P,m+=":",m+=v,m+=`\r
`}),m}function Bf(h,m,v){e:{for(P in v){var P=!1;break e}P=!0}P||(v=f2(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Pe(h,m,v))}function Be(h){_t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Be,_t);var lE=/^https?$/i,cE=["POST","PUT"];t=Be.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,m,v,P){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);m=m?m.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Df.g(),this.v=this.o?$y(this.o):$y(Df),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(m,String(h),!0),this.B=!1}catch(N){p2(this,N);return}if(h=v||"",v=new Map(this.headers),P)if(Object.getPrototypeOf(P)===Object.prototype)for(var O in P)v.set(O,P[O]);else if(typeof P.keys=="function"&&typeof P.get=="function")for(const N of P.keys())v.set(N,P.get(N));else throw Error("Unknown input type for opt_headers: "+String(P));P=Array.from(v.keys()).find(N=>N.toLowerCase()=="content-type"),O=a.FormData&&h instanceof a.FormData,!(0<=Array.prototype.indexOf.call(cE,m,void 0))||P||O||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,H]of v)this.g.setRequestHeader(N,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{y2(this),this.u=!0,this.g.send(h),this.u=!1}catch(N){p2(this,N)}};function p2(h,m){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=m,h.m=5,m2(h),gc(h)}function m2(h){h.A||(h.A=!0,Vt(h,"complete"),Vt(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Vt(this,"complete"),Vt(this,"abort"),gc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gc(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?g2(this):this.bb())},t.bb=function(){g2(this)};function g2(h){if(h.h&&typeof o<"u"&&(!h.v[1]||ii(h)!=4||h.Z()!=2)){if(h.u&&ii(h)==4)Ny(h.Ea,0,h);else if(Vt(h,"readystatechange"),ii(h)==4){h.h=!1;try{const H=h.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var P;if(P=H===0){var O=String(h.D).match(o2)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),P=!lE.test(O?O.toLowerCase():"")}v=P}if(v)Vt(h,"complete"),Vt(h,"success");else{h.m=6;try{var N=2<ii(h)?h.g.statusText:""}catch{N=""}h.l=N+" ["+h.Z()+"]",m2(h)}}finally{gc(h)}}}}function gc(h,m){if(h.g){y2(h);const v=h.g,P=h.v[0]?()=>{}:null;h.g=null,h.v=null,m||Vt(h,"ready");try{v.onreadystatechange=P}catch{}}}function y2(h){h.I&&(a.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function ii(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<ii(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var m=this.g.responseText;return h&&m.indexOf(h)==0&&(m=m.substring(h.length)),B6(m)}};function v2(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function uE(h){const m={};h=(h.g&&2<=ii(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let P=0;P<h.length;P++){if(b(h[P]))continue;var v=R(h[P]);const O=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const N=m[O]||[];m[O]=N,N.push(v)}E(m,function(P){return P.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qo(h,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||m}function x2(h){this.Aa=0,this.i=[],this.j=new Bo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qo("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qo("baseRetryDelayMs",5e3,h),this.cb=qo("retryDelaySeedMs",1e4,h),this.Wa=qo("forwardChannelMaxRetries",2,h),this.wa=qo("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new e2(h&&h.concurrentRequestLimit),this.Da=new oE,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=x2.prototype,t.la=8,t.G=1,t.connect=function(h,m,v,P){Lt(0),this.W=h,this.H=m||{},v&&P!==void 0&&(this.H.OSID=v,this.H.OAID=P),this.F=this.X,this.I=P2(this,null,this.W),vc(this)};function $f(h){if(b2(h),h.G==3){var m=h.U++,v=ni(h.I);if(Pe(v,"SID",h.K),Pe(v,"RID",m),Pe(v,"TYPE","terminate"),Qo(h,v),m=new Pi(h,h.j,m),m.L=2,m.v=fc(ni(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=m.v,v=!0),v||(m.g=j2(m.j,null),m.g.ea(m.v)),m.F=Date.now(),uc(m)}C2(h)}function yc(h){h.g&&(Hf(h),h.g.cancel(),h.g=null)}function b2(h){yc(h),h.u&&(a.clearTimeout(h.u),h.u=null),xc(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&a.clearTimeout(h.s),h.s=null)}function vc(h){if(!t2(h.h)&&!h.s){h.s=!0;var m=h.Ga;me||Y(),U||(me(),U=!0),q.add(m,h),h.B=0}}function hE(h,m){return n2(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=m.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Fo(p(h.Ga,h,m),E2(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const O=new Pi(this,this.j,h);let N=this.o;if(this.S&&(N?(N=S(N),j(N,this.S)):N=this.S),this.m!==null||this.O||(O.H=N,N=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var P=this.i[v];if("__data__"in P.map&&(P=P.map.__data__,typeof P=="string")){P=P.length;break t}P=void 0}if(P===void 0)break;if(m+=P,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=w2(this,O,m),v=ni(this.I),Pe(v,"RID",h),Pe(v,"CVER",22),this.D&&Pe(v,"X-HTTP-Session-Id",this.D),Qo(this,v),N&&(this.O?m="headers="+encodeURIComponent(String(f2(N)))+"&"+m:this.m&&Bf(v,this.m,N)),Ff(this.h,O),this.Ua&&Pe(v,"TYPE","init"),this.P?(Pe(v,"$req",m),Pe(v,"SID","null"),O.T=!0,Lf(O,v,null)):Lf(O,v,m),this.G=2}}else this.G==3&&(h?_2(this,h):this.i.length==0||t2(this.h)||_2(this))};function _2(h,m){var v;m?v=m.l:v=h.U++;const P=ni(h.I);Pe(P,"SID",h.K),Pe(P,"RID",v),Pe(P,"AID",h.T),Qo(h,P),h.m&&h.o&&Bf(P,h.m,h.o),v=new Pi(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),m&&(h.i=m.D.concat(h.i)),m=w2(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ff(h.h,v),Lf(v,P,m)}function Qo(h,m){h.H&&L(h.H,function(v,P){Pe(m,P,v)}),h.l&&s2({},function(v,P){Pe(m,P,v)})}function w2(h,m,v){v=Math.min(h.i.length,v);var P=h.l?p(h.l.Na,h.l,h):null;e:{var O=h.i;let N=-1;for(;;){const H=["count="+v];N==-1?0<v?(N=O[0].g,H.push("ofs="+N)):N=0:H.push("ofs="+N);let Te=!0;for(let dt=0;dt<v;dt++){let ye=O[dt].g;const wt=O[dt].map;if(ye-=N,0>ye)N=Math.max(0,O[dt].g-100),Te=!1;else try{aE(wt,H,"req"+ye+"_")}catch{P&&P(wt)}}if(Te){P=H.join("&");break e}}}return h=h.i.splice(0,v),m.D=h,P}function k2(h){if(!h.g&&!h.u){h.Y=1;var m=h.Fa;me||Y(),U||(me(),U=!0),q.add(m,h),h.v=0}}function Uf(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Fo(p(h.Fa,h),E2(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,S2(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Fo(p(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),yc(this),S2(this))};function Hf(h){h.A!=null&&(a.clearTimeout(h.A),h.A=null)}function S2(h){h.g=new Pi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var m=ni(h.qa);Pe(m,"RID","rpc"),Pe(m,"SID",h.K),Pe(m,"AID",h.T),Pe(m,"CI",h.F?"0":"1"),!h.F&&h.ja&&Pe(m,"TO",h.ja),Pe(m,"TYPE","xmlhttp"),Qo(h,m),h.m&&h.o&&Bf(m,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=fc(ni(m)),v.m=null,v.P=!0,Xy(v,h)}t.Za=function(){this.C!=null&&(this.C=null,yc(this),Uf(this),Lt(19))};function xc(h){h.C!=null&&(a.clearTimeout(h.C),h.C=null)}function T2(h,m){var v=null;if(h.g==m){xc(h),Hf(h),h.g=null;var P=2}else if(zf(h.h,m))v=m.D,i2(h.h,m),P=1;else return;if(h.G!=0){if(m.o)if(P==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var O=h.B;P=ac(),Vt(P,new Gy(P,v)),vc(h)}else k2(h);else if(O=m.s,O==3||O==0&&0<m.X||!(P==1&&hE(h,m)||P==2&&Uf(h)))switch(v&&0<v.length&&(m=h.h,m.i=m.i.concat(v)),O){case 1:Er(h,5);break;case 4:Er(h,10);break;case 3:Er(h,6);break;default:Er(h,2)}}}function E2(h,m){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*m}function Er(h,m){if(h.j.info("Error code "+m),m==2){var v=p(h.fb,h),P=h.Xa;const O=!P;P=new Tr(P||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||hc(P,"https"),fc(P),O?rE(P.toString(),v):sE(P.toString(),v)}else Lt(2);h.G=0,h.l&&h.l.sa(m),C2(h),b2(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function C2(h){if(h.G=0,h.ka=[],h.l){const m=r2(h.h);(m.length!=0||h.i.length!=0)&&(w(h.ka,m),w(h.ka,h.i),h.h.i.length=0,x(h.i),h.i.length=0),h.l.ra()}}function P2(h,m,v){var P=v instanceof Tr?ni(v):new Tr(v);if(P.g!="")m&&(P.g=m+"."+P.g),dc(P,P.s);else{var O=a.location;P=O.protocol,m=m?m+"."+O.hostname:O.hostname,O=+O.port;var N=new Tr(null);P&&hc(N,P),m&&(N.g=m),O&&dc(N,O),v&&(N.l=v),P=N}return v=h.D,m=h.ya,v&&m&&Pe(P,v,m),Pe(P,"VER",h.la),Qo(h,P),P}function j2(h,m,v){if(m&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=h.Ca&&!h.pa?new Be(new pc({eb:v})):new Be(h.pa),m.Ha(h.J),m}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function A2(){}t=A2.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function bc(){}bc.prototype.g=function(h,m){return new en(h,m)};function en(h,m){_t.call(this),this.g=new x2(m),this.l=h,this.h=m&&m.messageUrlParams||null,h=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(h?h["X-WebChannel-Content-Type"]=m.messageContentType:h={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(h?h["X-WebChannel-Client-Profile"]=m.va:h={"X-WebChannel-Client-Profile":m.va}),this.g.S=h,(h=m&&m.Sb)&&!b(h)&&(this.g.m=h),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!b(m)&&(this.g.D=m,h=this.h,h!==null&&m in h&&(h=this.h,m in h&&delete h[m])),this.j=new vs(this)}y(en,_t),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){$f(this.g)},en.prototype.o=function(h){var m=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=Af(h),h=v);m.i.push(new q6(m.Ya++,h)),m.G==3&&vc(m)},en.prototype.N=function(){this.g.l=null,delete this.j,$f(this.g),delete this.g,en.aa.N.call(this)};function I2(h){Rf.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var m=h.__sm__;if(m){e:{for(const v in m){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,m=m!==null&&h in m?m[h]:void 0),this.data=m}else this.data=h}y(I2,Rf);function R2(){Mf.call(this),this.status=1}y(R2,Mf);function vs(h){this.g=h}y(vs,A2),vs.prototype.ua=function(){Vt(this.g,"a")},vs.prototype.ta=function(h){Vt(this.g,new I2(h))},vs.prototype.sa=function(h){Vt(this.g,new R2)},vs.prototype.ra=function(){Vt(this.g,"b")},bc.prototype.createWebChannel=bc.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,sS=function(){return new bc},rS=function(){return ac()},iS=kr,Dg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lc.NO_ERROR=0,lc.TIMEOUT=8,lc.HTTP_ERROR=6,ih=lc,qy.COMPLETE="complete",nS=qy,Uy.EventType=No,No.OPEN="a",No.CLOSE="b",No.ERROR="c",No.MESSAGE="d",_t.prototype.listen=_t.prototype.K,va=Uy,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,tS=Be}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});const xb="@firebase/firestore";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let jo="11.0.0";/**
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
 */const ns=new q3("@firebase/firestore");function Es(){return ns.logLevel}function W(t,...e){if(ns.logLevel<=de.DEBUG){const n=e.map(F1);ns.debug(`Firestore (${jo}): ${t}`,...n)}}function Ti(t,...e){if(ns.logLevel<=de.ERROR){const n=e.map(F1);ns.error(`Firestore (${jo}): ${t}`,...n)}}function po(t,...e){if(ns.logLevel<=de.WARN){const n=e.map(F1);ns.warn(`Firestore (${jo}): ${t}`,...n)}}function F1(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: `+t;throw Ti(e),new Error(e)}function we(t,e){t||ee()}function ie(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Po{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class oS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class NM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zM{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0);let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new gi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gi,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(we(typeof i.accessToken=="string"),new oS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new At(e)}}class FM{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BM{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new FM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $M{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){we(this.o===void 0);const i=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new $M(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function HM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class aS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=HM(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function fe(t,e){return t<e?-1:t>e?1:0}function mo(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new it(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new it(0,0))}static max(){return new te(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kl{constructor(e,n,i){n===void 0?n=0:n>e.length&&ee(),i===void 0?i=e.length-n:i>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return kl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kl?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends kl{construct(e,n,i){return new Ie(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new G(B.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const WM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends kl{construct(e,n,i){return new yt(e,n,i)}static isValidIdentifier(e){return WM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new G(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new G(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new G(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ie.fromString(e))}static fromName(e){return new X(Ie.fromString(e).popFirst(5))}static empty(){return new X(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ie(e.slice()))}}function KM(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(i===1e9?new it(n+1,0):new it(n,i));return new cr(r,X.empty(),e)}function GM(t){return new cr(t.readTime,t.key,-1)}class cr{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new cr(te.min(),X.empty(),-1)}static max(){return new cr(te.max(),X.empty(),-1)}}function qM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const QM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ao(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==QM)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,i)=>{n(e)})}static reject(e){return new z((n,i)=>{i(e)})}static waitFor(e){return new z((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=z.resolve(!1);for(const i of e)n=n.next(r=>r?z.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new z((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&i(o)},d=>r(d))}})}static doWhile(e,n){return new z((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function XM(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Io(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ef{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ef.oe=-1;function tf(t){return t==null}function td(t){return t===0&&1/t==-1/0}function JM(t){return typeof t=="number"&&Number.isInteger(t)&&!td(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ZM(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bb(e)),e=eD(t.get(n),e);return bb(e)}function eD(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const s=t.charAt(r);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function bb(t){return t+""}/**
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
 */function _b(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wc(this.root,e,this.comparator,!0)}}class Wc{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??mt.RED,this.left=r??mt.EMPTY,this.right=s??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new mt(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return mt.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,i,r,s){return this}insert(e,n,i){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wb(this.data.getIterator())}getIteratorFrom(e){return new wb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class wb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rn{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Rn([])}unionWith(e){let n=new ut(yt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class cS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cS("Invalid base64 string: "+s):s}}(e);return new bt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const tD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(we(!!t),typeof t=="string"){let e=0;const n=tD.exec(t);if(we(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hr(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
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
 */function B1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nf(t){const e=t.mapValue.fields.__previous_value__;return B1(e)?nf(e):e}function Sl(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class nD{constructor(e,n,i,r,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Tl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Tl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Kc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?B1(t)?4:rD(t)?9007199254740991:iD(t)?10:11:ee()}function ei(t,e){if(t===e)return!0;const n=dr(t);if(n!==dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sl(t).isEqual(Sl(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=ur(r.timestampValue),a=ur(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return hr(r.bytesValue).isEqual(hr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return We(r.geoPointValue.latitude)===We(s.geoPointValue.latitude)&&We(r.geoPointValue.longitude)===We(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return We(r.integerValue)===We(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=We(r.doubleValue),a=We(s.doubleValue);return o===a?td(o)===td(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return mo(t.arrayValue.values||[],e.arrayValue.values||[],ei);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(_b(o)!==_b(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ei(o[l],a[l])))return!1;return!0}(t,e);default:return ee()}}function El(t,e){return(t.values||[]).find(n=>ei(n,e))!==void 0}function go(t,e){if(t===e)return 0;const n=dr(t),i=dr(e);if(n!==i)return fe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=We(s.integerValue||s.doubleValue),l=We(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return kb(t.timestampValue,e.timestampValue);case 4:return kb(Sl(t),Sl(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=hr(s),l=hr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=fe(a[c],l[c]);if(d!==0)return d}return fe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=fe(We(s.latitude),We(o.latitude));return a!==0?a:fe(We(s.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sb(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,d;const f=s.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,x=fe(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((d=y==null?void 0:y.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Sb(g,y)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Kc.mapValue&&o===Kc.mapValue)return 0;if(s===Kc.mapValue)return 1;if(o===Kc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const p=fe(l[f],d[f]);if(p!==0)return p;const g=go(a[l[f]],c[d[f]]);if(g!==0)return g}return fe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ee()}}function kb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=ur(t),i=ur(e),r=fe(n.seconds,i.seconds);return r!==0?r:fe(n.nanos,i.nanos)}function Sb(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const s=go(n[r],i[r]);if(s)return s}return fe(n.length,i.length)}function yo(t){return Vg(t)}function Vg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=ur(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=Vg(s);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${Vg(n.fields[o])}`;return r+"}"}(t.mapValue):ee()}function rh(t){switch(dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nf(t);return e?16+rh(e):16;case 5:return 2*t.stringValue.length;case 6:return hr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,s)=>r+rh(s),0)}(t.arrayValue);case 10:case 11:return function(i){let r=0;return wr(i.fields,(s,o)=>{r+=s.length+rh(o)}),r}(t.mapValue);default:throw ee()}}function Tb(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lg(t){return!!t&&"integerValue"in t}function $1(t){return!!t&&"arrayValue"in t}function Eb(t){return!!t&&"nullValue"in t}function Cb(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sh(t){return!!t&&"mapValue"in t}function iD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Fa(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!sh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(n)}setAll(e){let n=yt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Fa(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());sh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ei(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];sh(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){wr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new nn(Fa(this.value))}}function uS(t){const e=[];return wr(t.fields,(n,i)=>{const r=new yt([n]);if(sh(i)){const s=uS(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Rn(e)}/**
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
 */class Rt{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,te.min(),te.min(),te.min(),nn.empty(),0)}static newFoundDocument(e,n,i,r){return new Rt(e,1,n,te.min(),i,r,0)}static newNoDocument(e,n){return new Rt(e,2,n,te.min(),te.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,te.min(),te.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nd{constructor(e,n){this.position=e,this.inclusive=n}}function Pb(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=X.comparator(X.fromName(o.referenceValue),n.key):i=go(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function jb(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ei(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class id{constructor(e,n="asc"){this.field=e,this.dir=n}}function sD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hS{}class et extends hS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new aD(e,n,i):n==="array-contains"?new uD(e,i):n==="in"?new hD(e,i):n==="not-in"?new dD(e,i):n==="array-contains-any"?new fD(e,i):new et(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new lD(e,i):new cD(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(go(n,this.value)):n!==null&&dr(this.value)===dr(n)&&this.matchesComparison(go(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends hS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new On(e,n)}matches(e){return dS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dS(t){return t.op==="and"}function fS(t){return oD(t)&&dS(t)}function oD(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Og(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(fS(t))return t.filters.map(e=>Og(e)).join(",");{const e=t.filters.map(n=>Og(n)).join(",");return`${t.op}(${e})`}}function pS(t,e){return t instanceof et?function(i,r){return r instanceof et&&i.op===r.op&&i.field.isEqual(r.field)&&ei(i.value,r.value)}(t,e):t instanceof On?function(i,r){return r instanceof On&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&pS(o,r.filters[a]),!0):!1}(t,e):void ee()}function mS(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${yo(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(mS).join(" ,")+"}"}(t):"Filter"}class aD extends et{constructor(e,n,i){super(e,n,i),this.key=X.fromName(i.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class lD extends et{constructor(e,n){super(e,"in",n),this.keys=gS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cD extends et{constructor(e,n){super(e,"not-in",n),this.keys=gS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>X.fromName(i.referenceValue))}class uD extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $1(n)&&El(n.arrayValue,this.value)}}class hD extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&El(this.value.arrayValue,n)}}class dD extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(El(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!El(this.value.arrayValue,n)}}class fD extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>El(this.value.arrayValue,i))}}/**
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
 */class pD{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Ab(t,e=null,n=[],i=[],r=null,s=null,o=null){return new pD(t,e,n,i,r,s,o)}function U1(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Og(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),tf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>yo(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>yo(i)).join(",")),e.ue=n}return e.ue}function H1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jb(t.startAt,e.startAt)&&jb(t.endAt,e.endAt)}function Ng(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xl{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mD(t,e,n,i,r,s,o,a){return new Xl(t,e,n,i,r,s,o,a)}function W1(t){return new Xl(t)}function Ib(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yS(t){return t.collectionGroup!==null}function Ba(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(yt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new id(s,i))}),n.has(yt.keyField().canonicalString())||e.ce.push(new id(yt.keyField(),i))}return e.ce}function Xn(t){const e=ie(t);return e.le||(e.le=gD(e,Ba(t))),e.le}function gD(t,e){if(t.limitType==="F")return Ab(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new id(r.field,s)});const n=t.endAt?new nd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new nd(t.startAt.position,t.startAt.inclusive):null;return Ab(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function zg(t,e){const n=t.filters.concat([e]);return new Xl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fg(t,e,n){return new Xl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rf(t,e){return H1(Xn(t),Xn(e))&&t.limitType===e.limitType}function vS(t){return`${U1(Xn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>mS(r)).join(", ")}]`),tf(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>yo(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>yo(r)).join(",")),`Target(${i})`}(Xn(t))}; limitType=${t.limitType})`}function sf(t,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):X.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(t,e)&&function(i,r){for(const s of Ba(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(i,r){return!(i.startAt&&!function(o,a,l){const c=Pb(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,Ba(i),r)||i.endAt&&!function(o,a,l){const c=Pb(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,Ba(i),r))}(t,e)}function yD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xS(t){return(e,n)=>{let i=!1;for(const r of Ba(t)){const s=vD(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function vD(t,e,n){const i=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?go(l,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ee()}}/**
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
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return lS(this.inner)}size(){return this.innerSize}}/**
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
 */const xD=new Fe(X.comparator);function Ei(){return xD}const bS=new Fe(X.comparator);function xa(...t){let e=bS;for(const n of t)e=e.insert(n.key,n);return e}function _S(t){let e=bS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ur(){return $a()}function wS(){return $a()}function $a(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const bD=new Fe(X.comparator),_D=new ut(X.comparator);function ce(...t){let e=_D;for(const n of t)e=e.add(n);return e}const wD=new ut(fe);function kD(){return wD}/**
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
 */function K1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:td(e)?"-0":e}}function kS(t){return{integerValue:""+t}}function SD(t,e){return JM(e)?kS(e):K1(t,e)}/**
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
 */class of{constructor(){this._=void 0}}function TD(t,e,n){return t instanceof rd?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&B1(s)&&(s=nf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Cl?TS(t,e):t instanceof Pl?ES(t,e):function(r,s){const o=SS(r,s),a=Rb(o)+Rb(r.Pe);return Lg(o)&&Lg(r.Pe)?kS(a):K1(r.serializer,a)}(t,e)}function ED(t,e,n){return t instanceof Cl?TS(t,e):t instanceof Pl?ES(t,e):n}function SS(t,e){return t instanceof sd?function(i){return Lg(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class rd extends of{}class Cl extends of{constructor(e){super(),this.elements=e}}function TS(t,e){const n=CS(e);for(const i of t.elements)n.some(r=>ei(r,i))||n.push(i);return{arrayValue:{values:n}}}class Pl extends of{constructor(e){super(),this.elements=e}}function ES(t,e){let n=CS(e);for(const i of t.elements)n=n.filter(r=>!ei(r,i));return{arrayValue:{values:n}}}class sd extends of{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Rb(t){return We(t.integerValue||t.doubleValue)}function CS(t){return $1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function CD(t,e){return t.field.isEqual(e.field)&&function(i,r){return i instanceof Cl&&r instanceof Cl||i instanceof Pl&&r instanceof Pl?mo(i.elements,r.elements,ei):i instanceof sd&&r instanceof sd?ei(i.Pe,r.Pe):i instanceof rd&&r instanceof rd}(t.transform,e.transform)}class PD{constructor(e,n){this.version=e,this.transformResults=n}}class yi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yi}static exists(e){return new yi(void 0,e)}static updateTime(e){return new yi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class af{}function PS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new AS(t.key,yi.none()):new lf(t.key,t.data,yi.none());{const n=t.data,i=nn.empty();let r=new ut(yt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new hs(t.key,i,new Rn(r.toArray()),yi.none())}}function jD(t,e,n){t instanceof lf?function(r,s,o){const a=r.value.clone(),l=Db(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hs?function(r,s,o){if(!oh(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Db(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(jS(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ua(t,e,n,i){return t instanceof lf?function(s,o,a,l){if(!oh(s.precondition,o))return a;const c=s.value.clone(),d=Vb(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof hs?function(s,o,a,l){if(!oh(s.precondition,o))return a;const c=Vb(s.fieldTransforms,l,o),d=o.data;return d.setAll(jS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,i):function(s,o,a){return oh(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function AD(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=SS(i.transform,r||null);s!=null&&(n===null&&(n=nn.empty()),n.set(i.field,s))}return n||null}function Mb(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&mo(i,r,(s,o)=>CD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lf extends af{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hs extends af{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Db(t,e,n){const i=new Map;we(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,ED(o,a,n[r]))}return i}function Vb(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,TD(s,o,e))}return i}class AS extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ID extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class RD{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&jD(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Ua(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Ua(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=wS();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=PS(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,(n,i)=>Mb(n,i))&&mo(this.baseMutations,e.baseMutations,(n,i)=>Mb(n,i))}}class G1{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){we(e.mutations.length===i.length);let r=function(){return bD}();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new G1(e,n,i,r)}}/**
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
 */let MD=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
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
 */class DD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ye,he;function VD(t){switch(t){default:return ee();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function IS(t){if(t===void 0)return Ti("GRPC error has no .code"),B.UNKNOWN;switch(t){case Ye.OK:return B.OK;case Ye.CANCELLED:return B.CANCELLED;case Ye.UNKNOWN:return B.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return B.INTERNAL;case Ye.UNAVAILABLE:return B.UNAVAILABLE;case Ye.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ye.NOT_FOUND:return B.NOT_FOUND;case Ye.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ye.ABORTED:return B.ABORTED;case Ye.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ye.DATA_LOSS:return B.DATA_LOSS;default:return ee()}}(he=Ye||(Ye={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function LD(){return new TextEncoder}/**
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
 */const OD=new Qr([4294967295,4294967295],0);function Lb(t){const e=LD().encode(t),n=new eS;return n.update(e),new Uint8Array(n.digest())}function Ob(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qr([n,i],0),new Qr([r,s],0)]}class q1{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new ba(`Invalid padding: ${n}`);if(i<0)throw new ba(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ba(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new ba(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qr.fromNumber(this.Ie)}Ee(e,n,i){let r=e.add(n.multiply(Qr.fromNumber(i)));return r.compare(OD)===1&&(r=new Qr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Lb(e),[i,r]=Ob(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(e,n,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new q1(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Lb(e),[i,r]=Ob(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cf{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,Jl.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new cf(te.min(),r,new Fe(fe),Ei(),ce())}}class Jl{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Jl(i,n,ce(),ce(),ce())}}/**
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
 */class ah{constructor(e,n,i,r){this.Re=e,this.removedTargetIds=n,this.key=i,this.Ve=r}}class RS{constructor(e,n){this.targetId=e,this.me=n}}class MS{constructor(e,n,i=bt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Nb{constructor(){this.fe=0,this.ge=Fb(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),n=ce(),i=ce();return this.ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:ee()}}),new Jl(this.pe,this.ye,e,n,i)}Ce(){this.we=!1,this.ge=Fb()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ND{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ei(),this.qe=zb(),this.Qe=new Fe(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const i=this.Ge(n);switch(e.state){case 0:this.ze(n)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),i.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,i=e.me.count,r=this.Je(n);if(r){const s=r.target;if(Ng(s))if(i===0){const o=new X(s.path);this.Ue(n,o,Rt.newNoDocument(o,te.min()))}else we(i===1);else{const o=this.Ye(n);if(o!==i){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let o,a;try{o=hr(i).toUint8Array()}catch(l){if(l instanceof cS)return po("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new q1(o,r,s)}catch(l){return po(l instanceof ba?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,i){return n.me.count===i-this.nt(e,n.targetId)?0:2}nt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Ng(a.target)){const l=new X(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Rt.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let i=ce();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const r=new cf(e,n,this.Qe,this.ke,i);return this.ke=Ei(),this.qe=zb(),this.Qe=new Fe(fe),r}$e(e,n){if(!this.ze(e))return;const i=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,i){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Nb,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nb),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zb(){return new Fe(X.comparator)}function Fb(){return new Fe(X.comparator)}const zD={asc:"ASCENDING",desc:"DESCENDING"},FD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BD={and:"AND",or:"OR"};class $D{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bg(t,e){return t.useProto3Json||tf(e)?e:{value:e}}function od(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UD(t,e){return od(t,e.toTimestamp())}function Jn(t){return we(!!t),te.fromTimestamp(function(n){const i=ur(n);return new it(i.seconds,i.nanos)}(t))}function Q1(t,e){return $g(t,e).canonicalString()}function $g(t,e){const n=function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function VS(t){const e=Ie.fromString(t);return we(FS(e)),e}function Ug(t,e){return Q1(t.databaseId,e.path)}function Op(t,e){const n=VS(e);if(n.get(1)!==t.databaseId.projectId)throw new G(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(OS(n))}function LS(t,e){return Q1(t.databaseId,e)}function HD(t){const e=VS(t);return e.length===4?Ie.emptyPath():OS(e)}function Hg(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OS(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bb(t,e,n){return{name:Ug(t,e),fields:n.value.mapValue.fields}}function WD(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(we(d===void 0||typeof d=="string"),bt.fromBase64String(d||"")):(we(d===void 0||d instanceof Buffer||d instanceof Uint8Array),bt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?B.UNKNOWN:IS(c.code);return new G(d,c.message||"")}(o);n=new MS(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Op(t,i.document.name),s=Jn(i.document.updateTime),o=i.document.createTime?Jn(i.document.createTime):te.min(),a=new nn({mapValue:{fields:i.document.fields}}),l=Rt.newFoundDocument(r,s,o,a),c=i.targetIds||[],d=i.removedTargetIds||[];n=new ah(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Op(t,i.document),s=i.readTime?Jn(i.readTime):te.min(),o=Rt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new ah([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Op(t,i.document),s=i.removedTargetIds||[];n=new ah([],s,r,null)}else{if(!("filter"in e))return ee();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new DD(r,s),a=i.targetId;n=new RS(a,o)}}return n}function KD(t,e){let n;if(e instanceof lf)n={update:Bb(t,e.key,e.value)};else if(e instanceof AS)n={delete:Ug(t,e.key)};else if(e instanceof hs)n={update:Bb(t,e.key,e.data),updateMask:tV(e.fieldMask)};else{if(!(e instanceof ID))return ee();n={verify:Ug(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof rd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Cl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ee()}(0,i))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:UD(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function GD(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(r,s){let o=r.updateTime?Jn(r.updateTime):Jn(s);return o.isEqual(te.min())&&(o=Jn(s)),new PD(o,r.transformResults||[])}(n,e))):[]}function qD(t,e){return{documents:[LS(t,e.path)]}}function QD(t,e){const n={structuredQuery:{}},i=e.path;let r;e.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=LS(t,r);const s=function(c){if(c.length!==0)return zS(On.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:Ps(p.field),direction:JD(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:r}}function YD(t){let e=HD(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){we(i===1);const d=n.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=NS(f);return p instanceof On&&fS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(y){return new id(js(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,tf(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new nd(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new nd(g,p)}(n.endAt)),mD(e,r,o,s,a,"F",l,c)}function XD(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function NS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=js(n.unaryFilter.field);return et.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=js(n.unaryFilter.field);return et.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=js(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=js(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return et.create(js(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(i=>NS(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function JD(t){return zD[t]}function ZD(t){return FD[t]}function eV(t){return BD[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function js(t){return yt.fromServerFormat(t.fieldPath)}function zS(t){return t instanceof et?function(n){if(n.op==="=="){if(Cb(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(Eb(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cb(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(Eb(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:ZD(n.op),value:n.value}}}(t):t instanceof On?function(n){const i=n.getFilters().map(r=>zS(r));return i.length===1?i[0]:{compositeFilter:{op:eV(n.op),filters:i}}}(t):ee()}function tV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function FS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ui{constructor(e,n,i,r,s=te.min(),o=te.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nV{constructor(e){this.ct=e}}function iV(t){const e=YD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fg(e,e.limit,"L"):e}/**
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
 */class rV{constructor(){this.un=new sV}addToCollectionParentIndex(e,n){return this.un.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(cr.min())}updateCollectionGroup(e,n,i){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class sV{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new ut(Ie.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new ut(Ie.comparator)).toArray()}}/**
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
 */const $b={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ht{constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */Ht.DEFAULT_COLLECTION_PERCENTILE=10,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ht.DEFAULT=new Ht(41943040,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ht.DISABLED=new Ht(-1,0,0);/**
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
 */class vo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vo(0)}static kn(){return new vo(-1)}}/**
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
 */function Ub([t,e],[n,i]){const r=fe(t,n);return r===0?fe(e,i):r}class oV{constructor(e){this.Un=e,this.buffer=new ut(Ub),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Ub(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aV{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){W("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Io(n)?W("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ao(n)}await this.Hn(3e5)})}}class lV{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return z.resolve(ef.oe);const i=new oV(n);return this.Jn.forEachTarget(e,r=>i.zn(r.sequenceNumber)).next(()=>this.Jn.Zn(e,r=>i.zn(r))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.Jn.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve($b)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$b):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let i,r,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(i=f,a=Date.now(),this.removeTargets(e,i,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,i))).next(f=>(c=Date.now(),Es()<=de.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:f})))}}function cV(t,e){return new lV(t,e)}/**
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
 */class uV{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?z.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dV{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Ua(i.mutation,r,Rn.empty(),it.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ce()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ce()){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=xa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ce()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=Ei();const o=$a(),a=function(){return $a()}();return n.forEach((l,c)=>{const d=i.get(c.key);r.has(c.key)&&(d===void 0||d.mutation instanceof hs)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ua(d.mutation,c,d.mutation.getFieldMask(),it.now())):o.set(c.key,Rn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new hV(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const i=$a();let r=new Fe((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=i.get(l)||Rn.empty();d=a.applyToLocalView(c,d),i.set(l,d);const f=(r.get(a.batchId)||ce()).add(l);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=wS();d.forEach(p=>{if(!s.has(p)){const g=PS(n.get(p),i.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return z.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,r){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,r):this.getDocumentsMatchingCollectionQuery(e,n,i,r)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):z.resolve(Ur());let a=-1,l=s;return o.next(c=>z.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?z.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{l=l.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ce())).next(d=>({batchId:a,changes:_S(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(i=>{let r=xa();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i,r){const s=n.collectionGroup;let o=xa();return this.indexManager.getCollectionParents(e,s).next(a=>z.forEach(a,l=>{const c=function(f,p){return new Xl(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i,r).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s,r))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Rt.newInvalidDocument(d)))});let a=xa();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Ua(d.mutation,c,Rn.empty(),it.now()),sf(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class fV{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Jn(r.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:iV(r.bundledQuery),readTime:Jn(r.readTime)}}(n)),z.resolve()}}/**
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
 */class pV{constructor(){this.overlays=new Fe(X.comparator),this.Ir=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Ur();return z.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.ht(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),z.resolve()}getOverlaysForCollection(e,n,i){const r=Ur(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return z.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new Fe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let d=s.get(c.largestBatchId);d===null&&(d=Ur(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Ur(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=r)););return z.resolve(a)}ht(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new MD(n,i));let s=this.Ir.get(n);s===void 0&&(s=ce(),this.Ir.set(n,s)),this.Ir.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class mV{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
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
 */class Y1{constructor(){this.Tr=new ut(st.Er),this.dr=new ut(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const i=new st(e,n);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(i=>this.removeReference(i,n))}gr(e){const n=new X(new Ie([])),i=new st(n,e),r=new st(n,e+1),s=[];return this.dr.forEachInRange([i,r],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Ie([])),i=new st(n,e),r=new st(n,e+1);let s=ce();return this.dr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),i=this.Tr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||fe(e.wr,n.wr)}static Ar(e,n){return fe(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
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
 */class gV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ut(st.Er)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RD(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.vr(i),s=r<0?0:r;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new st(n,0),r=new st(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],o=>{const a=this.Dr(o.wr);s.push(a)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ut(fe);return n.forEach(r=>{const s=new st(r,0),o=new st(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{i=i.add(a.wr)})}),z.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;X.isDocumentKey(s)||(s=s.child(""));const o=new st(new X(s),0);let a=new ut(fe);return this.br.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.wr)),!0)},o),z.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(i=>{const r=this.Dr(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return z.forEach(n.mutations,r=>{const s=new st(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,n){const i=new st(n,0),r=this.br.firstAfterOrEqual(i);return z.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class yV{constructor(e){this.Mr=e,this.docs=function(){return new Fe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Mr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return z.resolve(i?i.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let i=Ei();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Rt.newInvalidDocument(r))}),z.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=Ei();const o=n.path,a=new X(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||qM(GM(d),i)<=0||(r.has(d.key)||sf(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,i,r){ee()}Or(e,n){return z.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new vV(this)}getSize(e){return z.resolve(this.size)}}class vV extends uV{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(e,r)):this.cr.removeEntry(i)}),z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class xV{constructor(e){this.persistence=e,this.Nr=new us(n=>U1(n),H1),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Y1,this.targetCount=0,this.kr=vo.Bn()}forEachTarget(e,n){return this.Nr.forEach((i,r)=>n(r)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Lr&&(this.Lr=n),z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Kn(n),z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),z.waitFor(s).next(()=>r)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const i=this.Nr.get(n)||null;return z.resolve(i)}addMatchingKeys(e,n,i){return this.Br.Rr(n,i),z.resolve()}removeMatchingKeys(e,n,i){this.Br.mr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Br.yr(n);return z.resolve(i)}containsKey(e,n){return z.resolve(this.Br.containsKey(n))}}/**
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
 */class BS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ef(0),this.Kr=!1,this.Kr=!0,this.$r=new mV,this.referenceDelegate=e(this),this.Ur=new xV(this),this.indexManager=new rV,this.remoteDocumentCache=function(r){return new yV(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new nV(n),this.Gr=new fV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.qr[e.toKey()];return i||(i=new gV(n,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,i){W("MemoryPersistence","Starting transaction:",e);const r=new bV(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(e,n){return z.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,n)))}}class bV extends YM{constructor(e){super(),this.currentSequenceNumber=e}}class X1{constructor(e){this.persistence=e,this.Jr=new Y1,this.Yr=null}static Zr(e){return new X1(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,i){return this.Jr.addReference(i,n),this.Xr.delete(i.toString()),z.resolve()}removeReference(e,n,i){return this.Jr.removeReference(i,n),this.Xr.add(i.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,i=>{const r=X.fromPath(i);return this.ei(e,r).next(s=>{s||n.removeEntry(r,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(i=>{i?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return z.or([()=>z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class ad{constructor(e,n){this.persistence=e,this.ti=new us(i=>ZM(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=cV(this,n)}static Zr(e,n){return new ad(e,n)}zr(){}jr(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(r=>i+r))}er(e){let n=0;return this.Zn(e,i=>{n++}).next(()=>n)}Zn(e,n){return z.forEach(this.ti,(i,r)=>this.nr(e,i,r).next(s=>s?z.resolve():n(r)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Or(e,o=>this.nr(e,o,n).next(a=>{a||(i++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.ti.set(i,e.currentSequenceNumber),z.resolve()}removeReference(e,n,i){return this.ti.set(i,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),z.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=rh(e.data.value)),n}nr(e,n,i){return z.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.ti.get(n);return z.resolve(r!==void 0&&r>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class J1{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.$i=i,this.Ui=r}static Wi(e,n){let i=ce(),r=ce();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new J1(e,n.fromCache,i,r)}}/**
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
 */class _V{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wV{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xR()?8:XM(yR())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,i,r){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new _V;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,i,r){return i.documentReadCount<this.ji?(Es()<=de.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(Es()<=de.DEBUG&&W("QueryEngine","Query:",Cs(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(Es()<=de.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):z.resolve())}Yi(e,n){if(Ib(n))return z.resolve(null);let i=Xn(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Fg(n,null,"F"),i=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=ce(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,Fg(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,i,r){return Ib(n)||r.isEqual(te.min())?z.resolve(null):this.Ji.getDocuments(e,i).next(s=>{const o=this.ts(n,s);return this.ns(n,o,i,r)?z.resolve(null):(Es()<=de.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cs(n)),this.rs(e,o,n,KM(r,-1)).next(a=>a))})}ts(e,n){let i=new ut(xS(e));return n.forEach((r,s)=>{sf(e,s)&&(i=i.add(s))}),i}ns(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(e,n,i){return Es()<=de.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.Ji.getDocumentsMatchingQuery(e,n,cr.min(),i)}rs(e,n,i,r){return this.Ji.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class kV{constructor(e,n,i,r){this.persistence=e,this.ss=n,this.serializer=r,this.os=new Fe(fe),this._s=new us(s=>U1(s),H1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dV(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function SV(t,e,n,i){return new kV(t,e,n,i)}async function $S(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.ls(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=ce();for(const c of r){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(i,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function TV(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,p=f.keys();let g=z.resolve();return p.forEach(y=>{g=g.next(()=>d.getEntry(l,y)).next(x=>{const w=c.docVersions.get(y);we(w!==null),x.version.compareTo(w)<0&&(f.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function US(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function EV(t,e){const n=ie(t),i=e.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const p=r.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,i)),r=r.insert(f,g),function(x,w,_){return x.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,g,d)&&a.push(n.Ur.updateTargetData(s,g))});let l=Ei(),c=ce();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(CV(s,o,e.documentUpdates).next(d=>{l=d.Ps,c=d.Is})),!i.isEqual(te.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(d)}return z.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=r,s))}function CV(t,e,n){let i=ce(),r=ce();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=Ei();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:r}})}function PV(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function jV(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ur.getTargetData(i,e).next(s=>s?(r=s,z.resolve(r)):n.Ur.allocateTargetId(i).next(o=>(r=new Ui(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(i.targetId,i),n._s.set(e,i.targetId)),i})}async function Wg(t,e,n){const i=ie(t),r=i.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Io(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.os=i.os.remove(e),i._s.delete(r.target)}function Hb(t,e,n){const i=ie(t);let r=te.min(),s=ce();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=ie(l),p=f._s.get(d);return p!==void 0?z.resolve(f.os.get(p)):f.Ur.getTargetData(c,d)}(i,o,Xn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.ss.getDocumentsMatchingQuery(o,e,n?r:te.min(),n?s:ce())).next(a=>(AV(i,yD(e),a),{documents:a,Ts:s})))}function AV(t,e,n){let i=t.us.get(e)||te.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.us.set(e,i)}class Wb{constructor(){this.activeTargetIds=kD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IV{constructor(){this.so=new Wb,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,i){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wb,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RV{_o(e){}shutdown(){}}/**
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
 */class Kb{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gc=null;function Np(){return Gc===null?Gc=function(){return 268435456+Math.round(2147483648*Math.random())}():Gc++,"0x"+Gc.toString(16)}/**
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
 */const MV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class DV{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Et="WebChannelConnection";class VV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+n.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(n,i,r,s,o){const a=Np(),l=this.xo(n,i.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,r).then(d=>(W("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw po("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",r),d})}Lo(n,i,r,s,o,a){return this.Mo(n,i,r,s,o)}Oo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}xo(n,i){const r=MV[n];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,i,r){const s=Np();return new Promise((o,a)=>{const l=new tS;l.setWithCredentials(!0),l.listenOnce(nS.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ih.NO_ERROR:const d=l.getResponseJson();W(Et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ih.TIMEOUT:W(Et,`RPC '${e}' ${s} timed out`),a(new G(B.DEADLINE_EXCEEDED,"Request time out"));break;case ih.HTTP_ERROR:const f=l.getStatus();if(W(Et,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const y=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(_)>=0?_:B.UNKNOWN}(g.status);a(new G(y,g.message))}else a(new G(B.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new G(B.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{W(Et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);W(Et,`RPC '${e}' ${s} sending request:`,r),l.send(n,"POST",c,i,15)})}Bo(e,n,i){const r=Np(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sS(),a=rS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const d=s.join("");W(Et,`Creating RPC '${e}' stream ${r}: ${d}`,l);const f=o.createWebChannel(d,l);let p=!1,g=!1;const y=new DV({Io:w=>{g?W(Et,`Not sending because RPC '${e}' stream ${r} is closed:`,w):(p||(W(Et,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),W(Et,`RPC '${e}' stream ${r} sending:`,w),f.send(w))},To:()=>f.close()}),x=(w,_,b)=>{w.listen(_,k=>{try{b(k)}catch(A){setTimeout(()=>{throw A},0)}})};return x(f,va.EventType.OPEN,()=>{g||(W(Et,`RPC '${e}' stream ${r} transport opened.`),y.yo())}),x(f,va.EventType.CLOSE,()=>{g||(g=!0,W(Et,`RPC '${e}' stream ${r} transport closed`),y.So())}),x(f,va.EventType.ERROR,w=>{g||(g=!0,po(Et,`RPC '${e}' stream ${r} transport errored:`,w),y.So(new G(B.UNAVAILABLE,"The operation could not be completed")))}),x(f,va.EventType.MESSAGE,w=>{var _;if(!g){const b=w.data[0];we(!!b);const k=b,A=k.error||((_=k[0])===null||_===void 0?void 0:_.error);if(A){W(Et,`RPC '${e}' stream ${r} received error:`,A);const M=A.status;let L=function(C){const j=Ye[C];if(j!==void 0)return IS(j)}(M),E=A.message;L===void 0&&(L=B.INTERNAL,E="Unknown error status: "+M+" with message "+A.message),g=!0,y.So(new G(L,E)),f.close()}else W(Et,`RPC '${e}' stream ${r} received:`,b),y.bo(b)}}),x(a,iS.STAT_EVENT,w=>{w.stat===Dg.PROXY?W(Et,`RPC '${e}' stream ${r} detected buffering proxy`):w.stat===Dg.NOPROXY&&W(Et,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.wo()},0),y}}function zp(){return typeof document<"u"?document:null}/**
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
 */function uf(t){return new $D(t,!0)}/**
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
 */class HS{constructor(e,n,i=1e3,r=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-i);r>0&&W("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class WS{constructor(e,n,i,r,s,o,a,l){this.ui=e,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new HS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Ti(n.toString()),Ti("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===n&&this.P_(i,r)},i=>{e(()=>{const r=new G(B.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(e,n){const i=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LV extends WS{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=WD(this.serializer,e),i=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Jn(o.readTime):te.min()}(e);return this.listener.d_(n,i)}A_(e){const n={};n.database=Hg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ng(l)?{documents:qD(s,l)}:{query:QD(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=DS(s,o.resumeToken);const c=Bg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=od(s,o.snapshotVersion.toTimestamp());const c=Bg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=XD(this.serializer,e);i&&(n.labels=i),this.a_(n)}R_(e){const n={};n.database=Hg(this.serializer),n.removeTarget=e,this.a_(n)}}class OV extends WS{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=GD(e.writeResults,e.commitTime),i=Jn(e.commitTime);return this.listener.g_(i,n)}p_(){const e={};e.database=Hg(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>KD(this.serializer,i))};this.a_(n)}}/**
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
 */class NV extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new G(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,$g(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(B.UNKNOWN,s.toString())})}Lo(e,n,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,$g(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(B.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class zV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ti(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class FV{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{i.enqueueAndForget(async()=>{ds(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ie(l);c.L_.add(4),await Zl(c),c.q_.set("Unknown"),c.L_.delete(4),await hf(c)}(this))})}),this.q_=new zV(i,r)}}async function hf(t){if(ds(t))for(const e of t.B_)await e(!0)}async function Zl(t){for(const e of t.B_)await e(!1)}function KS(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ny(n)?ty(n):Ro(n).r_()&&ey(n,e))}function Z1(t,e){const n=ie(t),i=Ro(n);n.N_.delete(e),i.r_()&&GS(n,e),n.N_.size===0&&(i.r_()?i.o_():ds(n)&&n.q_.set("Unknown"))}function ey(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ro(t).A_(e)}function GS(t,e){t.Q_.xe(e),Ro(t).R_(e)}function ty(t){t.Q_=new ND({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ro(t).start(),t.q_.v_()}function ny(t){return ds(t)&&!Ro(t).n_()&&t.N_.size>0}function ds(t){return ie(t).L_.size===0}function qS(t){t.Q_=void 0}async function BV(t){t.q_.set("Online")}async function $V(t){t.N_.forEach((e,n)=>{ey(t,e)})}async function UV(t,e){qS(t),ny(t)?(t.q_.M_(e),ty(t)):t.q_.set("Unknown")}async function HV(t,e,n){if(t.q_.set("Online"),e instanceof MS&&e.state===2&&e.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(t,e)}catch(i){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ld(t,i)}else if(e instanceof ah?t.Q_.Ke(e):e instanceof RS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const i=await US(t.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.N_.get(l);if(!d)return;s.N_.set(l,d.withResumeToken(bt.EMPTY_BYTE_STRING,d.snapshotVersion)),GS(s,l);const f=new Ui(d.target,l,c,d.sequenceNumber);ey(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){W("RemoteStore","Failed to raise snapshot:",i),await ld(t,i)}}async function ld(t,e,n){if(!Io(e))throw e;t.L_.add(1),await Zl(t),t.q_.set("Offline"),n||(n=()=>US(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await hf(t)})}function QS(t,e){return e().catch(n=>ld(t,n,e))}async function df(t){const e=ie(t),n=fr(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;WV(e);)try{const r=await PV(e.localStore,i);if(r===null){e.O_.length===0&&n.o_();break}i=r.batchId,KV(e,r)}catch(r){await ld(e,r)}YS(e)&&XS(e)}function WV(t){return ds(t)&&t.O_.length<10}function KV(t,e){t.O_.push(e);const n=fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function YS(t){return ds(t)&&!fr(t).n_()&&t.O_.length>0}function XS(t){fr(t).start()}async function GV(t){fr(t).p_()}async function qV(t){const e=fr(t);for(const n of t.O_)e.m_(n.mutations)}async function QV(t,e,n){const i=t.O_.shift(),r=G1.from(i,e,n);await QS(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await df(t)}async function YV(t,e){e&&fr(t).V_&&await async function(i,r){if(function(o){return VD(o)&&o!==B.ABORTED}(r.code)){const s=i.O_.shift();fr(i).s_(),await QS(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await df(i)}}(t,e),YS(t)&&XS(t)}async function Gb(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const i=ds(n);n.L_.add(3),await Zl(n),i&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await hf(n)}async function XV(t,e){const n=ie(t);e?(n.L_.delete(2),await hf(n)):e||(n.L_.add(2),await Zl(n),n.q_.set("Unknown"))}function Ro(t){return t.K_||(t.K_=function(n,i,r){const s=ie(n);return s.w_(),new LV(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Eo:BV.bind(null,t),Ro:$V.bind(null,t),mo:UV.bind(null,t),d_:HV.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ny(t)?ty(t):t.q_.set("Unknown")):(await t.K_.stop(),qS(t))})),t.K_}function fr(t){return t.U_||(t.U_=function(n,i,r){const s=ie(n);return s.w_(),new OV(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:GV.bind(null,t),mo:YV.bind(null,t),f_:qV.bind(null,t),g_:QV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await df(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class iy{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new iy(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ry(t,e){if(Ti("AsyncQueue",`${e}: ${t}`),Io(t))return new G(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class eo{constructor(e){this.comparator=e?(n,i)=>e(n,i)||X.comparator(n.key,i.key):(n,i)=>X.comparator(n.key,i.key),this.keyedMap=xa(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new eo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class qb{constructor(){this.W_=new Fe(X.comparator)}track(e){const n=e.doc.key,i=this.W_.get(n);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(n,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(n):e.type===1&&i.type===2?this.W_=this.W_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,i)=>{e.push(i)}),e}}class xo{constructor(e,n,i,r,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xo(e,n,eo.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class JV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ZV{constructor(){this.queries=Qb(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,i){const r=ie(n),s=r.queries;r.queries=Qb(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(i)})})(this,new G(B.ABORTED,"Firestore shutting down"))}}function Qb(){return new us(t=>vS(t),rf)}async function JS(t,e){const n=ie(t);let i=3;const r=e.query;let s=n.queries.get(r);s?!s.H_()&&e.J_()&&(i=2):(s=new JV,i=e.J_()?0:1);try{switch(i){case 0:s.z_=await n.onListen(r,!0);break;case 1:s.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=ry(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&sy(n)}async function ZS(t,e){const n=ie(t),i=e.query;let r=3;const s=n.queries.get(i);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?r=e.J_()?0:1:!s.H_()&&e.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function eL(t,e){const n=ie(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(r)&&(i=!0);o.z_=r}}i&&sy(n)}function tL(t,e,n){const i=ie(t),r=i.queries.get(e);if(r)for(const s of r.j_)s.onError(n);i.queries.delete(e)}function sy(t){t.Y_.forEach(e=>{e.next()})}var Kg,Yb;(Yb=Kg||(Kg={})).ea="default",Yb.Cache="cache";class eT{constructor(e,n,i){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new xo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const i=n!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Kg.Cache}}/**
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
 */class tT{constructor(e){this.key=e}}class nT{constructor(e){this.key=e}}class nL{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=xS(e),this.Ra=new eo(this.Aa)}get Va(){return this.Ta}ma(e,n){const i=n?n.fa:new qb,r=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((d,f)=>{const p=r.get(d),g=sf(this.query,f)?f:null,y=!!p&&this.mutatedKeys.has(p.key),x=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;p&&g?p.data.isEqual(g.data)?y!==x&&(i.track({type:3,doc:g}),w=!0):this.ga(p,g)||(i.track({type:2,doc:g}),w=!0,(l&&this.Aa(g,l)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!p&&g?(i.track({type:0,doc:g}),w=!0):p&&!g&&(i.track({type:1,doc:p}),w=!0,(l||c)&&(a=!0)),w&&(g?(o=o.add(g),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),i.track({type:1,doc:d})}return{Ra:o,fa:i,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,r){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(g,y){const x=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return x(g)-x(y)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(i),r=r!=null&&r;const a=n&&!r?this.ya():[],l=this.da.size===0&&this.current&&!r?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new xo(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qb,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const n=[];return e.forEach(i=>{this.da.has(i)||n.push(new nT(i))}),this.da.forEach(i=>{e.has(i)||n.push(new tT(i))}),n}ba(e){this.Ta=e.Ts,this.da=ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return xo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class iL{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class rL{constructor(e){this.key=e,this.va=!1}}class sL{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new us(a=>vS(a),rf),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(X.comparator),this.Na=new Map,this.La=new Y1,this.Ba={},this.ka=new Map,this.qa=vo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function oL(t,e,n=!0){const i=lT(t);let r;const s=i.Fa.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await iT(i,e,n,!0),r}async function aL(t,e){const n=lT(t);await iT(n,e,!0,!1)}async function iT(t,e,n,i){const r=await jV(t.localStore,Xn(e)),s=r.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return i&&(a=await lL(t,e,s,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&KS(t.remoteStore,r),a}async function lL(t,e,n,i,r){t.Ka=(f,p,g)=>async function(x,w,_,b){let k=w.view.ma(_);k.ns&&(k=await Hb(x.localStore,w.query,!1).then(({documents:E})=>w.view.ma(E,k)));const A=b&&b.targetChanges.get(w.targetId),M=b&&b.targetMismatches.get(w.targetId)!=null,L=w.view.applyChanges(k,x.isPrimaryClient,A,M);return Jb(x,w.targetId,L.wa),L.snapshot}(t,f,p,g);const s=await Hb(t.localStore,e,!0),o=new nL(e,s.Ts),a=o.ma(s.documents),l=Jl.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Jb(t,n,c.wa);const d=new iL(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function cL(t,e,n){const i=ie(t),r=i.Fa.get(e),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(o=>!rf(o,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Wg(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&Z1(i.remoteStore,r.targetId),Gg(i,r.targetId)}).catch(Ao)):(Gg(i,r.targetId),await Wg(i.localStore,r.targetId,!0))}async function uL(t,e){const n=ie(t),i=n.Fa.get(e),r=n.Ma.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Z1(n.remoteStore,i.targetId))}async function hL(t,e,n){const i=vL(t);try{const r=await function(o,a){const l=ie(o),c=it.now(),d=a.reduce((g,y)=>g.add(y.key),ce());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=Ei(),x=ce();return l.cs.getEntries(g,d).next(w=>{y=w,y.forEach((_,b)=>{b.isValidDocument()||(x=x.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,y)).next(w=>{f=w;const _=[];for(const b of a){const k=AD(b,f.get(b.key).overlayedDocument);k!=null&&_.push(new hs(b.key,k,uS(k.value.mapValue),yi.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,_,a)}).next(w=>{p=w;const _=w.applyToLocalDocumentSet(f,x);return l.documentOverlayCache.saveOverlays(g,w.batchId,_)})}).then(()=>({batchId:p.batchId,changes:_S(f)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Fe(fe)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(i,r.batchId,n),await ec(i,r.changes),await df(i.remoteStore)}catch(r){const s=ry(r,"Failed to persist write");n.reject(s)}}async function rT(t,e){const n=ie(t);try{const i=await EV(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.Na.get(s);o&&(we(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?we(o.va):r.removedDocuments.size>0&&(we(o.va),o.va=!1))}),await ec(n,i,e)}catch(i){await Ao(i)}}function Xb(t,e,n){const i=ie(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=ie(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&sy(l)}(i.eventManager,e),r.length&&i.Ca.d_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dL(t,e,n){const i=ie(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Na.get(e),s=r&&r.key;if(s){let o=new Fe(X.comparator);o=o.insert(s,Rt.newNoDocument(s,te.min()));const a=ce().add(s),l=new cf(te.min(),new Map,new Fe(fe),o,a);await rT(i,l),i.Oa=i.Oa.remove(s),i.Na.delete(e),oy(i)}else await Wg(i.localStore,e,!1).then(()=>Gg(i,e,n)).catch(Ao)}async function fL(t,e){const n=ie(t),i=e.batch.batchId;try{const r=await TV(n.localStore,e);oT(n,i,null),sT(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ec(n,r)}catch(r){await Ao(r)}}async function pL(t,e,n){const i=ie(t);try{const r=await function(o,a){const l=ie(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(we(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(i.localStore,e);oT(i,e,n),sT(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ec(i,r)}catch(r){await Ao(r)}}function sT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function oT(t,e,n){const i=ie(t);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.Ba[i.currentUser.toKey()]=r}}function Gg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Ma.get(e))t.Fa.delete(i),n&&t.Ca.$a(i,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(i=>{t.La.containsKey(i)||aT(t,i)})}function aT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Z1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),oy(t))}function Jb(t,e,n){for(const i of n)i instanceof tT?(t.La.addReference(i.key,e),mL(t,i)):i instanceof nT?(W("SyncEngine","Document no longer in limbo: "+i.key),t.La.removeReference(i.key,e),t.La.containsKey(i.key)||aT(t,i.key)):ee()}function mL(t,e){const n=e.key,i=n.path.canonicalString();t.Oa.get(n)||t.xa.has(i)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(i),oy(t))}function oy(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Ie.fromString(e)),i=t.qa.next();t.Na.set(i,new rL(n)),t.Oa=t.Oa.insert(n,i),KS(t.remoteStore,new Ui(Xn(W1(n.path)),i,"TargetPurposeLimboResolution",ef.oe))}}async function ec(t,e,n){const i=ie(t),r=[],s=[],o=[];i.Fa.isEmpty()||(i.Fa.forEach((a,l)=>{o.push(i.Ka(l,e,n).then(c=>{var d;if((c||n)&&i.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;i.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){r.push(c);const f=J1.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),i.Ca.d_(r),await async function(l,c){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>z.forEach(c,p=>z.forEach(p.$i,g=>d.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>z.forEach(p.Ui,g=>d.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Io(f))throw f;W("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=d.os.get(p),y=g.snapshotVersion,x=g.withLastLimboFreeSnapshotVersion(y);d.os=d.os.insert(p,x)}}}(i.localStore,s))}async function gL(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const i=await $S(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new G(B.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ec(n,i.hs)}}function yL(t,e){const n=ie(t),i=n.Na.get(e);if(i&&i.va)return ce().add(i.key);{let r=ce();const s=n.Ma.get(e);if(!s)return r;for(const o of s){const a=n.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function lT(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dL.bind(null,e),e.Ca.d_=eL.bind(null,e.eventManager),e.Ca.$a=tL.bind(null,e.eventManager),e}function vL(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pL.bind(null,e),e}class cd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uf(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return SV(this.persistence,new wV,e.initialUser,this.serializer)}Ga(e){return new BS(X1.Zr,this.serializer)}Wa(e){return new IV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cd.provider={build:()=>new cd};class xL extends cd{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){we(this.persistence.referenceDelegate instanceof ad);const i=this.persistence.referenceDelegate.garbageCollector;return new aV(i,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new BS(i=>ad.Zr(i,n),this.serializer)}}class qg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Xb(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=gL.bind(null,this.syncEngine),await XV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZV}()}createDatastore(e){const n=uf(e.databaseInfo.databaseId),i=function(s){return new VV(s)}(e.databaseInfo);return function(s,o,a,l){return new NV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,r,s,o,a){return new FV(i,r,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Xb(this.syncEngine,n,0),function(){return Kb.D()?new Kb:new RV}())}createSyncEngine(e,n){return function(r,s,o,a,l,c,d){const f=new sL(r,s,o,a,l,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const s=ie(r);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Zl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qg.provider={build:()=>new qg};/**
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
 */class cT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ti("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class bL{constructor(e,n,i,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=At.UNAUTHENTICATED,this.clientId=aS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=ry(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Fp(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await $S(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _L(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Gb(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Gb(e.remoteStore,r)),t._onlineComponents=e}async function _L(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;po("Error using user provided cache. Falling back to memory cache: "+n),await Fp(t,new cd)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Fp(t,new xL(void 0));return t._offlineComponents}async function uT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Zb(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Zb(t,new qg))),t._onlineComponents}function wL(t){return uT(t).then(e=>e.syncEngine)}async function hT(t){const e=await uT(t),n=e.eventManager;return n.onListen=oL.bind(null,e.syncEngine),n.onUnlisten=cL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=aL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uL.bind(null,e.syncEngine),n}function kL(t,e,n={}){const i=new gi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new cT({next:p=>{d.Za(),o.enqueueAndForget(()=>ZS(s,f));const g=p.docs.has(a);!g&&p.fromCache?c.reject(new G(B.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?c.reject(new G(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new eT(W1(a.path),d,{includeMetadataChanges:!0,_a:!0});return JS(s,f)}(await hT(t),t.asyncQueue,e,n,i)),i.promise}function SL(t,e,n={}){const i=new gi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new cT({next:p=>{d.Za(),o.enqueueAndForget(()=>ZS(s,f)),p.fromCache&&l.source==="server"?c.reject(new G(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new eT(a,d,{includeMetadataChanges:!0,_a:!0});return JS(s,f)}(await hT(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function dT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const e5=new Map;/**
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
 */function fT(t,e,n){if(!n)throw new G(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TL(t,e,n,i){if(e===!0&&i===!0)throw new G(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t5(t){if(!X.isDocumentKey(t))throw new G(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function n5(t){if(X.isDocumentKey(t))throw new G(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ff(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ff(t);throw new G(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class i5{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new G(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dT((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pf{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i5({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i5(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new OM;switch(i.type){case"firstParty":return new BM(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new G(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=e5.get(n);i&&(W("ComponentProvider","Removing Datastore"),e5.delete(n),i.terminate())}(this),Promise.resolve()}}function EL(t,e,n,i={}){var r;const s=(t=is(t,pf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=At.MOCK_USER;else{a=gR(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new G(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new At(c)}t._authCredentials=new NM(new oS(a,l))}}/**
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
 */class Mo{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mo(this.firestore,e,this._query)}}class Xt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class ir extends Mo{constructor(e,n,i){super(e,n,W1(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new X(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function CL(t,e,...n){if(t=ki(t),fT("collection","path",e),t instanceof pf){const i=Ie.fromString(e,...n);return n5(i),new ir(t,null,i)}{if(!(t instanceof Xt||t instanceof ir))throw new G(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ie.fromString(e,...n));return n5(i),new ir(t.firestore,null,i)}}function pT(t,e,...n){if(t=ki(t),arguments.length===1&&(e=aS.newId()),fT("doc","path",e),t instanceof pf){const i=Ie.fromString(e,...n);return t5(i),new Xt(t,null,new X(i))}{if(!(t instanceof Xt||t instanceof ir))throw new G(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ie.fromString(e,...n));return t5(i),new Xt(t.firestore,t instanceof ir?t.converter:null,new X(i))}}/**
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
 */class r5{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new HS(this,"async_queue_retry"),this.Vu=()=>{const i=zp();i&&W("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const n=zp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=zp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Io(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Ti("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=n,n}enqueueAfterDelay(e,n,i){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const r=iy.createAndSchedule(this,e,n,i,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class mf extends pf{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new r5,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new r5(e),this._firestoreClient=void 0,await e}}}function PL(t,e){const n=typeof t=="object"?t:TM(),i=typeof t=="string"?t:"(default)",r=_M(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=pR("firestore");s&&EL(r,...s)}return r}function ay(t){if(t._terminated)throw new G(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jL(t),t._firestoreClient}function jL(t){var e,n,i;const r=t._freezeSettings(),s=function(a,l,c,d){return new nD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,dT(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new bL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bo(bt.fromBase64String(e))}catch(n){throw new G(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bo(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ly{constructor(e){this._methodName=e}}/**
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
 */class cy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class uy{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const AL=/^__.*__$/;class mT{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new hs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class hy{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new hy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:i,xu:!1});return r.Ou(e),r}Nu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:i,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ud(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(gT(this.Cu)&&AL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class IL{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||uf(e)}Qu(e,n,i,r=!1){return new hy({Cu:e,methodName:n,qu:i,path:yt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yT(t){const e=t._freezeSettings(),n=uf(t._databaseId);return new IL(t._databaseId,!!e.ignoreUndefinedProperties,n)}class yf extends ly{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yf}}function RL(t,e,n,i){const r=t.Qu(1,e,n);xT("Data must be an object, but it was:",r,i);const s=[],o=nn.empty();wr(i,(l,c)=>{const d=dy(e,l,n);c=ki(c);const f=r.Nu(d);if(c instanceof yf)s.push(d);else{const p=tc(c,f);p!=null&&(s.push(d),o.set(d,p))}});const a=new Rn(s);return new mT(o,a,r.fieldTransforms)}function ML(t,e,n,i,r,s){const o=t.Qu(1,e,n),a=[s5(e,i,n)],l=[r];if(s.length%2!=0)throw new G(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(s5(e,s[p])),l.push(s[p+1]);const c=[],d=nn.empty();for(let p=a.length-1;p>=0;--p)if(!OL(c,a[p])){const g=a[p];let y=l[p];y=ki(y);const x=o.Nu(g);if(y instanceof yf)c.push(g);else{const w=tc(y,x);w!=null&&(c.push(g),d.set(g,w))}}const f=new Rn(c);return new mT(d,f,o.fieldTransforms)}function DL(t,e,n,i=!1){return tc(n,t.Qu(i?4:3,e))}function tc(t,e){if(vT(t=ki(t)))return xT("Unsupported field value:",e,t),VL(t,e);if(t instanceof ly)return function(i,r){if(!gT(r.Cu))throw r.Bu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let l=tc(a,r.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(i,r){if((i=ki(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return SD(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=it.fromDate(i);return{timestampValue:od(r.serializer,s)}}if(i instanceof it){const s=new it(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:od(r.serializer,s)}}if(i instanceof cy)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof bo)return{bytesValue:DS(r.serializer,i._byteString)};if(i instanceof Xt){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Q1(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof uy)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return K1(a.serializer,l)})}}}}}}(i,r);throw r.Bu(`Unsupported field value: ${ff(i)}`)}(t,e)}function VL(t,e){const n={};return lS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,(i,r)=>{const s=tc(r,e.Mu(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function vT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof cy||t instanceof bo||t instanceof Xt||t instanceof ly||t instanceof uy)}function xT(t,e,n){if(!vT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=ff(n);throw i==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+i)}}function s5(t,e,n){if((e=ki(e))instanceof gf)return e._internalPath;if(typeof e=="string")return dy(t,e);throw ud("Field path arguments must be of type string or ",t,!1,void 0,n)}const LL=new RegExp("[~\\*/\\[\\]]");function dy(t,e,n){if(e.search(LL)>=0)throw ud(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gf(...e.split("."))._internalPath}catch{throw ud(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ud(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new G(B.INVALID_ARGUMENT,a+t+l)}function OL(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bT{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NL extends bT{data(){return super.data()}}function fy(t,e){return typeof e=="string"?dy(t,e):e instanceof gf?e._internalPath:e._delegate._internalPath}/**
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
 */function zL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class py{}class FL extends py{}function BL(t,e,...n){let i=[];e instanceof py&&i.push(e),i=i.concat(n),function(s){const o=s.filter(l=>l instanceof my).length,a=s.filter(l=>l instanceof vf).length;if(o>1||o>0&&a>0)throw new G(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)t=r._apply(t);return t}class vf extends FL{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new vf(e,n,i)}_apply(e){const n=this._parse(e);return _T(e._query,n),new Mo(e.firestore,e.converter,zg(e._query,n))}_parse(e){const n=yT(e.firestore);return function(s,o,a,l,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){a5(f,d);const g=[];for(const y of f)g.push(o5(l,s,y));p={arrayValue:{values:g}}}else p=o5(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||a5(f,d),p=DL(a,o,f,d==="in"||d==="not-in");return et.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $L(t,e,n){const i=e,r=fy("where",t);return vf._create(r,i,n)}class my extends py{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new my(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let o=r;const a=s.getFlattenedFilters();for(const l of a)_T(o,l),o=zg(o,l)}(e._query,n),new Mo(e.firestore,e.converter,zg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function o5(t,e,n){if(typeof(n=ki(n))=="string"){if(n==="")throw new G(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yS(e)&&n.indexOf("/")!==-1)throw new G(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(Ie.fromString(n));if(!X.isDocumentKey(i))throw new G(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Tb(t,new X(i))}if(n instanceof Xt)return Tb(t,n._key);throw new G(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ff(n)}.`)}function a5(t,e){if(!Array.isArray(t)||t.length===0)throw new G(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _T(t,e){const n=function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class UL{convertValue(e,n="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return wr(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(e){var n,i,r;const s=(r=(i=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(o=>We(o.doubleValue));return new uy(s)}convertGeoPoint(e){return new cy(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=nf(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Sl(e));default:return null}}convertTimestamp(e){const n=ur(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ie.fromString(e);we(FS(i));const r=new Tl(i.get(1),i.get(3)),s=new X(i.popFirst(5));return r.isEqual(n)||Ti(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class _a{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wT extends bT{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(fy("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class lh extends wT{data(e={}){return super.data(e)}}class HL{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new _a(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new lh(this._firestore,this._userDataWriter,i.key,i,new _a(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new lh(r._firestore,r._userDataWriter,a.doc.key,a.doc,new _a(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new lh(r._firestore,r._userDataWriter,a.doc.key,a.doc,new _a(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:WL(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function KL(t){t=is(t,Xt);const e=is(t.firestore,mf);return kL(ay(e),t._key).then(n=>YL(e,t,n))}class kT extends UL{constructor(e){super(),this.firestore=e}convertBytes(e){return new bo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function GL(t){t=is(t,Mo);const e=is(t.firestore,mf),n=ay(e),i=new kT(e);return zL(t._query),SL(n,t._query).then(r=>new HL(e,i,t,r))}function qL(t,e,n,...i){t=is(t,Xt);const r=is(t.firestore,mf),s=yT(r);let o;return o=typeof(e=ki(e))=="string"||e instanceof gf?ML(s,"updateDoc",t._key,e,n,i):RL(s,"updateDoc",t._key,e),QL(r,[o.toMutation(t._key,yi.exists(!0))])}function QL(t,e){return function(i,r){const s=new gi;return i.asyncQueue.enqueueAndForget(async()=>hL(await wL(i),r,s)),s.promise}(ay(t),e)}function YL(t,e,n){const i=n.docs.get(e._key),r=new kT(t);return new wT(t,r,e._key,i,new _a(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){jo=r})(SM),ed(new _l("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new mf(new zM(i.getProvider("auth-internal")),new UM(i.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tl(c.options.projectId,d)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Zs(xb,"4.7.4",e),Zs(xb,"4.7.4","esm2017")})();const XL={apiKey:"AIzaSyBPfQCPFhXBX6qwpG_qU0CU5SKuGf1nQYk",authDomain:"webgallery-1.firebaseapp.com",projectId:"webgallery-1",storageBucket:"webgallery-1.appspot.com",messagingSenderId:"1098040584878",appId:"1:1098040584878:web:e4c7c8c8c8c8c8c8c8c8c8"},JL=X3(XL),gy=PL(JL),ST=V.createContext();function ZL({children:t}){const[e,n]=V.useState(!1),[i,r]=V.useState(null),[s,o]=V.useState(!1),[a,l]=V.useState(!1),c=De(),d=async(p,g)=>{try{o(!0);const y=CL(gy,"akun"),x=BL(y,$L("usernameAkun","==",p)),w=await GL(x);if(console.log("Query result:",w.size),w.empty)return{success:!1,error:"Username tidak ditemukan"};const _=w.docs[0],b=_.data();if(b.passwordAkun!==g)return{success:!1,error:"Password salah"};const k={id:_.id,username:b.usernameAkun,role:b.jenisAkun};switch(console.log("User info:",k),localStorage.setItem("user",JSON.stringify(k)),r(k),n(!0),l(!1),b.jenisAkun){case"admin":c("/admin");break;case"moderator":c("/moderator/profile");break;default:c("/user")}return{success:!0}}catch(y){return console.error("Login error:",y),{success:!1,error:"Terjadi kesalahan saat login"}}finally{o(!1)}},f=()=>{localStorage.removeItem("user"),r(null),n(!1),c("/")};return u.jsx(ST.Provider,{value:{isLoggedIn:e,user:i,loading:s,handleLogin:d,handleLogout:f,showLogin:a,setShowLogin:l},children:t})}function fs(){return V.useContext(ST)}const eO=T.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;
  background-color: ${t=>t.scrolled?"rgba(26, 26, 46, 0.8)":"transparent"};
  backdrop-filter: ${t=>t.scrolled?"blur(15px)":"none"};
`,tO=T.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`,nO=T($d)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 1rem;
`,iO=T.img`
  height: 50px;
  width: auto;
`,rO=T.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`,sO=T.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,l5=T.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,zn=T($d)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(to right, #00ff87, #60efff);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,c5=T(F.button)`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 30px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 135, 0.4);
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 200px;
  }
`,oO=T.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`,aO=T.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${t=>t.isOpen?"flex":"none"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 26, 46, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;T(F.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1rem;
`;function lO(){const[t,e]=V.useState(!1),[n,i]=V.useState(!1),{isLoggedIn:r,handleLogout:s,setShowLogin:o}=fs();V.useEffect(()=>{const l=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const a=l=>{const c=document.getElementById(l);if(c){const p=c.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:p,behavior:"smooth"})}};return u.jsx(eO,{scrolled:t,children:u.jsxs(tO,{children:[u.jsxs(nO,{to:"/",onClick:()=>a("beranda"),children:[u.jsx(iO,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"SMKN 1 Bulan Logo"}),u.jsx(rO,{children:"SMKN 1 Bulan"})]}),u.jsx(oO,{onClick:()=>i(!n),children:n?"✕":"☰"}),u.jsxs(sO,{children:[u.jsxs(l5,{children:[u.jsx(zn,{to:"/",onClick:()=>a("beranda"),children:"Beranda"}),u.jsx(zn,{to:"/",onClick:()=>a("profil"),children:"Profil"}),u.jsx(zn,{to:"/",onClick:()=>a("berita"),children:"Berita"}),u.jsx(zn,{to:"/",onClick:()=>a("jurusan"),children:"Program"}),u.jsx(zn,{to:"/",onClick:()=>a("fasilitas"),children:"Fasilitas"})]}),u.jsx(c5,{onClick:()=>{r?s():o(!0),i(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:r?"Logout":"Login"})]}),u.jsxs(aO,{isOpen:n,children:[u.jsxs(l5,{children:[u.jsx(zn,{to:"/",onClick:()=>{a("beranda"),i(!1)},children:"Beranda"}),u.jsx(zn,{to:"/",onClick:()=>{a("profil"),i(!1)},children:"Profil"}),u.jsx(zn,{to:"/",onClick:()=>{a("berita"),i(!1)},children:"Berita"}),u.jsx(zn,{to:"/",onClick:()=>{a("jurusan"),i(!1)},children:"Program"}),u.jsx(zn,{to:"/",onClick:()=>{a("fasilitas"),i(!1)},children:"Fasilitas"})]}),u.jsx(c5,{onClick:()=>{r?s():o(!0),i(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:r?"Logout":"Login"})]})]})})}var TT={exports:{}},cO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",uO=cO,hO=uO;function ET(){}function CT(){}CT.resetWarningCache=ET;var dO=function(){function t(i,r,s,o,a,l){if(l!==hO){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:CT,resetWarningCache:ET};return n.PropTypes=n,n};TT.exports=dO();var fO=TT.exports;const ft=wd(fO);var pO=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var i,r,s;if(Array.isArray(e)){if(i=e.length,i!=n.length)return!1;for(r=i;r--!==0;)if(!t(e[r],n[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),i=s.length,i!==Object.keys(n).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[r]))return!1;for(r=i;r--!==0;){var o=s[r];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};const mO=wd(pO);var Qg={exports:{}},PT;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/PT=function(){var t={},e={};return t.on=function(n,i){var r={name:n,handler:i};return e[n]=e[n]||[],e[n].unshift(r),r},t.off=function(n){var i=e[n.name].indexOf(n);i!==-1&&e[n.name].splice(i,1)},t.trigger=function(n,i){var r=e[n],s;if(r)for(s=r.length;s--;)r[s].handler(i)},t};var gO=PT,Yg={exports:{}},yO=function(e,n,i){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof n=="function"&&(i=n,n={}),n=n||{},i=i||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async="async"in n?!!n.async:!0,s.src=e,n.attrs&&vO(s,n.attrs),n.text&&(s.text=""+n.text);var o="onload"in s?u5:xO;o(s,i),s.onload||u5(s,i),r.appendChild(s)};function vO(t,e){for(var n in e)t.setAttribute(n,e[n])}function u5(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function xO(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=yO,i=r(n);function r(s){return s&&s.__esModule?s:{default:s}}e.default=function(s){var o=new Promise(function(a){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){a(window.YT);return}else{var l=window.location.protocol==="http:"?"http:":"https:";(0,i.default)(l+"//www.youtube.com/iframe_api",function(d){d&&s.trigger("error",d)})}var c=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){c&&c(),a(window.YT)}});return o},t.exports=e.default})(Yg,Yg.exports);var bO=Yg.exports,Xg={exports:{}},Jg={exports:{}},Zg={exports:{}},jl=1e3,Al=jl*60,Il=Al*60,Rl=Il*24,_O=Rl*365.25,wO=function(t,e){e=e||{};var n=typeof t;if(n==="string"&&t.length>0)return kO(t);if(n==="number"&&isNaN(t)===!1)return e.long?TO(t):SO(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function kO(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),i=(e[2]||"ms").toLowerCase();switch(i){case"years":case"year":case"yrs":case"yr":case"y":return n*_O;case"days":case"day":case"d":return n*Rl;case"hours":case"hour":case"hrs":case"hr":case"h":return n*Il;case"minutes":case"minute":case"mins":case"min":case"m":return n*Al;case"seconds":case"second":case"secs":case"sec":case"s":return n*jl;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function SO(t){return t>=Rl?Math.round(t/Rl)+"d":t>=Il?Math.round(t/Il)+"h":t>=Al?Math.round(t/Al)+"m":t>=jl?Math.round(t/jl)+"s":t+"ms"}function TO(t){return qc(t,Rl,"day")||qc(t,Il,"hour")||qc(t,Al,"minute")||qc(t,jl,"second")||t+" ms"}function qc(t,e,n){if(!(t<e))return t<e*1.5?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}(function(t,e){e=t.exports=r.debug=r.default=r,e.coerce=l,e.disable=o,e.enable=s,e.enabled=a,e.humanize=wO,e.names=[],e.skips=[],e.formatters={};var n;function i(c){var d=0,f;for(f in c)d=(d<<5)-d+c.charCodeAt(f),d|=0;return e.colors[Math.abs(d)%e.colors.length]}function r(c){function d(){if(d.enabled){var f=d,p=+new Date,g=p-(n||p);f.diff=g,f.prev=n,f.curr=p,n=p;for(var y=new Array(arguments.length),x=0;x<y.length;x++)y[x]=arguments[x];y[0]=e.coerce(y[0]),typeof y[0]!="string"&&y.unshift("%O");var w=0;y[0]=y[0].replace(/%([a-zA-Z%])/g,function(b,k){if(b==="%%")return b;w++;var A=e.formatters[k];if(typeof A=="function"){var M=y[w];b=A.call(f,M),y.splice(w,1),w--}return b}),e.formatArgs.call(f,y);var _=d.log||e.log||console.log.bind(console);_.apply(f,y)}}return d.namespace=c,d.enabled=e.enabled(c),d.useColors=e.useColors(),d.color=i(c),typeof e.init=="function"&&e.init(d),d}function s(c){e.save(c),e.names=[],e.skips=[];for(var d=(typeof c=="string"?c:"").split(/[\s,]+/),f=d.length,p=0;p<f;p++)d[p]&&(c=d[p].replace(/\*/g,".*?"),c[0]==="-"?e.skips.push(new RegExp("^"+c.substr(1)+"$")):e.names.push(new RegExp("^"+c+"$")))}function o(){e.enable("")}function a(c){var d,f;for(d=0,f=e.skips.length;d<f;d++)if(e.skips[d].test(c))return!1;for(d=0,f=e.names.length;d<f;d++)if(e.names[d].test(c))return!0;return!1}function l(c){return c instanceof Error?c.stack||c.message:c}})(Zg,Zg.exports);var EO=Zg.exports;(function(t,e){var n={};e=t.exports=EO,e.log=s,e.formatArgs=r,e.save=o,e.load=a,e.useColors=i,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:l(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function i(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(c){try{return JSON.stringify(c)}catch(d){return"[UnexpectedJSONParseError]: "+d.message}};function r(c){var d=this.useColors;if(c[0]=(d?"%c":"")+this.namespace+(d?" %c":" ")+c[0]+(d?"%c ":" ")+"+"+e.humanize(this.diff),!!d){var f="color: "+this.color;c.splice(1,0,f,"color: inherit");var p=0,g=0;c[0].replace(/%[a-zA-Z%]/g,function(y){y!=="%%"&&(p++,y==="%c"&&(g=p))}),c.splice(g,0,f)}}function s(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function o(c){try{c==null?e.storage.removeItem("debug"):e.storage.debug=c}catch{}}function a(){var c;try{c=e.storage.debug}catch{}return!c&&typeof process<"u"&&"env"in process&&(c=n.DEBUG),c}e.enable(a());function l(){try{return window.localStorage}catch{}}})(Jg,Jg.exports);var CO=Jg.exports,e0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],t.exports=e.default})(e0,e0.exports);var PO=e0.exports,t0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=e.default})(t0,t0.exports);var jO=t0.exports,n0={exports:{}},i0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default})(i0,i0.exports);var AO=i0.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=AO,i=r(n);function r(s){return s&&s.__esModule?s:{default:s}}e.default={pauseVideo:{acceptableStates:[i.default.ENDED,i.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[i.default.ENDED,i.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[i.default.ENDED,i.default.PLAYING,i.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=e.default})(n0,n0.exports);var IO=n0.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=CO,i=d(n),r=PO,s=d(r),o=jO,a=d(o),l=IO,c=d(l);function d(g){return g&&g.__esModule?g:{default:g}}var f=(0,i.default)("youtube-player"),p={};p.proxyEvents=function(g){var y={},x=function(E){var S="on"+E.slice(0,1).toUpperCase()+E.slice(1);y[S]=function(C){f('event "%s"',S,C),g.trigger(E,C)}},w=!0,_=!1,b=void 0;try{for(var k=a.default[Symbol.iterator](),A;!(w=(A=k.next()).done);w=!0){var M=A.value;x(M)}}catch(L){_=!0,b=L}finally{try{!w&&k.return&&k.return()}finally{if(_)throw b}}return y},p.promisifyPlayer=function(g){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,x={},w=function(S){y&&c.default[S]?x[S]=function(){for(var C=arguments.length,j=Array(C),R=0;R<C;R++)j[R]=arguments[R];return g.then(function(D){var I=c.default[S],re=D.getPlayerState(),ae=D[S].apply(D,j);return I.stateChangeRequired||Array.isArray(I.acceptableStates)&&I.acceptableStates.indexOf(re)===-1?new Promise(function(ne){var me=function U(){var q=D.getPlayerState(),Y=void 0;typeof I.timeout=="number"&&(Y=setTimeout(function(){D.removeEventListener("onStateChange",U),ne()},I.timeout)),Array.isArray(I.acceptableStates)&&I.acceptableStates.indexOf(q)!==-1&&(D.removeEventListener("onStateChange",U),clearTimeout(Y),ne())};D.addEventListener("onStateChange",me)}).then(function(){return ae}):ae})}:x[S]=function(){for(var C=arguments.length,j=Array(C),R=0;R<C;R++)j[R]=arguments[R];return g.then(function(D){return D[S].apply(D,j)})}},_=!0,b=!1,k=void 0;try{for(var A=s.default[Symbol.iterator](),M;!(_=(M=A.next()).done);_=!0){var L=M.value;w(L)}}catch(E){b=!0,k=E}finally{try{!_&&A.return&&A.return()}finally{if(b)throw k}}return x},e.default=p,t.exports=e.default})(Xg,Xg.exports);var RO=Xg.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},i=gO,r=c(i),s=bO,o=c(s),a=RO,l=c(a);function c(f){return f&&f.__esModule?f:{default:f}}var d=void 0;e.default=function(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,y=(0,r.default)();if(d||(d=(0,o.default)(y)),p.events)throw new Error("Event handlers cannot be overwritten.");if(typeof f=="string"&&!document.getElementById(f))throw new Error('Element "'+f+'" does not exist.');p.events=l.default.proxyEvents(y);var x=new Promise(function(_){if((typeof f>"u"?"undefined":n(f))==="object"&&f.playVideo instanceof Function){var b=f;_(b)}else d.then(function(k){var A=new k.Player(f,p);return y.on("ready",function(){_(A)}),null})}),w=l.default.promisifyPlayer(x,g);return w.on=y.on,w.off=y.off,w},t.exports=e.default})(Qg,Qg.exports);var MO=Qg.exports;const DO=wd(MO);var VO=Object.defineProperty,LO=Object.defineProperties,OO=Object.getOwnPropertyDescriptors,h5=Object.getOwnPropertySymbols,NO=Object.prototype.hasOwnProperty,zO=Object.prototype.propertyIsEnumerable,d5=(t,e,n)=>e in t?VO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,r0=(t,e)=>{for(var n in e||(e={}))NO.call(e,n)&&d5(t,n,e[n]);if(h5)for(var n of h5(e))zO.call(e,n)&&d5(t,n,e[n]);return t},s0=(t,e)=>LO(t,OO(e)),FO=(t,e,n)=>new Promise((i,r)=>{var s=l=>{try{a(n.next(l))}catch(c){r(c)}},o=l=>{try{a(n.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((n=n.apply(t,e)).next())});function BO(t,e){var n,i;if(t.videoId!==e.videoId)return!0;const r=((n=t.opts)==null?void 0:n.playerVars)||{},s=((i=e.opts)==null?void 0:i.playerVars)||{};return r.start!==s.start||r.end!==s.end}function f5(t={}){return s0(r0({},t),{height:0,width:0,playerVars:s0(r0({},t.playerVars),{autoplay:0,start:0,end:0})})}function $O(t,e){return t.videoId!==e.videoId||!mO(f5(t.opts),f5(e.opts))}function UO(t,e){var n,i,r,s;return t.id!==e.id||t.className!==e.className||((n=t.opts)==null?void 0:n.width)!==((i=e.opts)==null?void 0:i.width)||((r=t.opts)==null?void 0:r.height)!==((s=e.opts)==null?void 0:s.height)||t.iframeClassName!==e.iframeClassName||t.title!==e.title}var HO={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},WO={videoId:ft.string,id:ft.string,className:ft.string,iframeClassName:ft.string,style:ft.object,title:ft.string,loading:ft.oneOf(["lazy","eager"]),opts:ft.objectOf(ft.any),onReady:ft.func,onError:ft.func,onPlay:ft.func,onPause:ft.func,onEnd:ft.func,onStateChange:ft.func,onPlaybackRateChange:ft.func,onPlaybackQualityChange:ft.func},ch=class extends lt.Component{constructor(t){super(t),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var n,i;return(i=(n=this.props).onReady)==null?void 0:i.call(n,e)},this.onPlayerError=e=>{var n,i;return(i=(n=this.props).onError)==null?void 0:i.call(n,e)},this.onPlayerStateChange=e=>{var n,i,r,s,o,a,l,c;switch((i=(n=this.props).onStateChange)==null||i.call(n,e),e.data){case ch.PlayerState.ENDED:(s=(r=this.props).onEnd)==null||s.call(r,e);break;case ch.PlayerState.PLAYING:(a=(o=this.props).onPlay)==null||a.call(o,e);break;case ch.PlayerState.PAUSED:(c=(l=this.props).onPause)==null||c.call(l,e);break}},this.onPlayerPlaybackRateChange=e=>{var n,i;return(i=(n=this.props).onPlaybackRateChange)==null?void 0:i.call(n,e)},this.onPlayerPlaybackQualityChange=e=>{var n,i;return(i=(n=this.props).onPlaybackQualityChange)==null?void 0:i.call(n,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=s0(r0({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=DO(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(n=>{this.props.title&&n.setAttribute("title",this.props.title),this.props.loading&&n.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(n=>{this.props.id?n.setAttribute("id",this.props.id):n.removeAttribute("id"),this.props.iframeClassName?n.setAttribute("class",this.props.iframeClassName):n.removeAttribute("class"),this.props.opts&&this.props.opts.width?n.setAttribute("width",this.props.opts.width.toString()):n.removeAttribute("width"),this.props.opts&&this.props.opts.height?n.setAttribute("height",this.props.opts.height.toString()):n.removeAttribute("height"),this.props.title?n.setAttribute("title",this.props.title):n.setAttribute("title","YouTube video player"),this.props.loading?n.setAttribute("loading",this.props.loading):n.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,n,i,r;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let s=!1;const o={videoId:this.props.videoId};if((n=this.props.opts)!=null&&n.playerVars&&(s=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(o.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(o.endSeconds=this.props.opts.playerVars.end)),s){(i=this.internalPlayer)==null||i.loadVideoById(o);return}(r=this.internalPlayer)==null||r.cueVideoById(o)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(t){return FO(this,null,function*(){UO(t,this.props)&&this.updatePlayer(),$O(t,this.props)&&(yield this.resetPlayer()),BO(t,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return lt.createElement("div",{className:this.props.className,style:this.props.style},lt.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},xf=ch;xf.propTypes=WO;xf.defaultProps=HO;xf.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var KO=xf;const GO=T.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;

  @media (max-width: 768px) {
    min-height: 90vh;
  }
`,qO=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(15, 32, 39, 0.7) 0%,
      rgba(15, 32, 39, 0.7) 80%,
      rgba(15, 32, 39, 0.9) 97%,
      rgba(15, 32, 39, 1) 100%
    );
    z-index: 2;
  }

  iframe {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
  }

  @media (max-width: 768px) {
    iframe {
      transform: translate(-50%, -50%) scale(2);
    }
  }
`,QO=T(F.div)`
  z-index: 3;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin-top: 150px;
  position: relative;
  padding-bottom: 250px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #00ff87, #60efff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 1rem;
    padding-bottom: 150px;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      padding: 0 1rem;
    }
  }
`;function YO(){const t={height:"100%",width:"100%",playerVars:{autoplay:1,mute:1,controls:0,showinfo:0,rel:0,enablejsapi:1,loop:1,playlist:"Grq4rhiO_Ko",playsinline:1,modestbranding:1}},e=i=>{i.target.playVideo(),document.addEventListener("click",()=>{i.target.unMute()},{once:!0})},n=i=>{i.data===0&&i.target.playVideo()};return u.jsxs(GO,{id:"beranda",children:[u.jsx(qO,{children:u.jsx(KO,{videoId:"Grq4rhiO_Ko",opts:t,onReady:e,onStateChange:n,className:"youtube-player"})}),u.jsxs(QO,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1},children:[u.jsx(F.h1,{animate:{scale:[1,1.02,1]},transition:{duration:2,repeat:1/0},children:"Selamat Datang di SMKN 1 Bulan"}),u.jsx(F.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"Membentuk Generasi Digital yang Inovatif dan Berkarakter"})]})]})}const XO=T.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(
      to bottom,
      rgba(26, 26, 46, 0),
      rgba(26, 26, 46, 0.8) 40%,
      rgba(26, 26, 46, 1) 70%
    );
    pointer-events: none;
    z-index: 2;
  }
`,JO=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,Bp=T.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`,ZO=T.div`
  padding: 4rem 0;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url('https://raw.githubusercontent.com/hfzt07/dbweb/main/jurusan.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 150px;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(
      to bottom,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }

  &::after {
    bottom: 0;
    background: linear-gradient(
      to top,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }
`,eN=T.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,tN=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`,nN=T(F.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
    z-index: 2;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    position: relative;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 255, 135, 0.2);
  }
`,iN=T.div`
  padding: 4rem 0;
`,rN=T.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,sN=T.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,oN=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .image-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .content {
    padding: 1.5rem;
    
    h3 {
      color: #00ff87;
      margin-bottom: 0.8rem;
      font-size: 1.3rem;
    }

    .date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`,aN=T.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 100%;
  justify-content: space-between;
`,lN=T(F.div)`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 90px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .image-container {
    width: 90px;
    height: 90px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .content {
    padding: 0.8rem 1rem 0.8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h3 {
      color: #00ff87;
      margin-bottom: 0.4rem;
      font-size: 0.9rem;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.75rem;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`,cN=T(F.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.85rem;
`,uN=T.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin: 0 auto 5rem;
  max-width: 1100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,hN=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .content {
    flex: 1;
  }

  .image-container {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid rgba(0, 255, 135, 0.3);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  h3 {
    color: #00ff87;
    margin-bottom: 1.8rem;
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.8;
    font-size: 1.15rem;
    letter-spacing: 0.3px;
    text-align: justify;
    text-justify: inter-word;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    .image-container {
      width: 150px;
      height: 150px;
    }
  }
`,dN=T.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,p5=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.8rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  gap: 2.5rem;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .content {
    flex: 1;

    h3 {
      color: #00ff87;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.8;
      font-size: 1.1rem;
      letter-spacing: 0.3px;
      text-align: justify;
      text-justify: inter-word;
    }
  }

  .image-container {
    width: 180px;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    border: none;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 3px;
      border-radius: 15px;
      background: linear-gradient(
        45deg,
        #00ff87,
        #60efff,
        #00ff87
      );
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: borderRotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 255, 135, 0.1) 100%
      );
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      filter: contrast(1.1) brightness(1.1);
    }

    &:hover img {
      transform: scale(1.15);
    }
  }

  @keyframes borderRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
    gap: 2rem;
    
    .image-container {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    .content p {
      text-align: justify;
    }
    
    .image-container {
      width: 140px;
      height: 140px;
    }
  }
`;T.h3`
  color: #00ff87;
  font-size: 2rem;
  margin-bottom: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #60efff;
    text-shadow: 0 0 10px rgba(0, 255, 135, 0.5);
  }
`;function fN(){const t=De(),e=[{nama:"Rekayasa Perangkat Lunak",deskripsi:"Program keahlian yang mempelajari pengembangan aplikasi dan software"},{nama:"Teknik Komputer dan Jaringan",deskripsi:"Program keahlian yang fokus pada infrastruktur jaringan dan hardware"},{nama:"Multimedia",deskripsi:"Program keahlian yang mempelajari desain grafis dan produksi konten digital"},{nama:"Bisnis Digital",deskripsi:"Program keahlian yang mempelajari pemasaran digital dan e-commerce"}],n=[{id:1,judul:"Prestasi Gemilang di Olimpiade Sains",tanggal:"15 Februari 2024",gambar:"/images/berita/berita1.jpg",ringkasan:"Siswa SMKN 1 Bulan meraih medali emas dalam Olimpiade Sains Nasional bidang Informatika."},{id:2,judul:"Workshop Teknologi AI",tanggal:"10 Februari 2024",gambar:"/images/berita/berita2.jpg",ringkasan:"Mengadakan workshop teknologi AI untuk meningkatkan kompetensi siswa dalam era digital."},{id:3,judul:"Kerjasama dengan Industri",tanggal:"5 Februari 2024",gambar:"/images/berita/berita3.jpg",ringkasan:"Menjalin kerjasama dengan perusahaan teknologi untuk program magang siswa."},{id:4,judul:"Penghargaan Sekolah Adiwiyata",tanggal:"1 Februari 2024",gambar:"/images/berita/berita4.jpg",ringkasan:"SMKN 1 Bulan menerima penghargaan sebagai sekolah berwawasan lingkungan."},{id:5,judul:"Juara Umum Lomba Robotik",tanggal:"28 Januari 2024",gambar:"/images/berita/berita5.jpg",ringkasan:"Tim robotik sekolah berhasil meraih juara umum dalam kompetisi robotik tingkat nasional."},{id:6,judul:"Pelatihan Digital Marketing",tanggal:"25 Januari 2024",gambar:"/images/berita/berita6.jpg",ringkasan:"Siswa jurusan Bisnis Digital mengikuti pelatihan intensif bersama praktisi industri."}];return u.jsx(XO,{id:"profil",children:u.jsxs(JO,{children:[u.jsx(Bp,{children:"Profil Sekolah"}),u.jsxs(uN,{children:[u.jsx(hN,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},whileHover:{scale:1.02},onClick:()=>t("/school-detail"),style:{cursor:"pointer"},children:u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:"SMKN 1 Bulan"}),u.jsx("p",{children:"Adalah lembaga pendidikan kejuruan unggulan yang berdiri sejak tahun 2005. Dengan fokus pada bidang teknologi informasi dan komunikasi, kami telah menghasilkan ribuan lulusan berkualitas yang kini berkarya di berbagai perusahaan teknologi terkemuka."})]})}),u.jsxs(dN,{children:[u.jsxs(p5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},whileHover:{scale:1.02},onClick:()=>t("/kepsek-detail"),style:{cursor:"pointer"},children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kepsek.jpg",alt:"Kepala Sekolah"})}),u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:"Sambutan Kepala Sekolah"}),u.jsx("p",{children:'"Pengembangan karakter serta etika merupakan komitmen kami untuk menghasilkan lulusan yang berkualitas dan berakhlak mulia."'})]})]}),u.jsx(p5,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.2},whileHover:{scale:1.02},onClick:()=>t("/visi-misi"),style:{cursor:"pointer"},children:u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:"Visi & Misi"}),u.jsx("p",{children:"Menjadi lembaga pendidikan teknologi terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia untuk membangun masa depan Indonesia yang lebih baik."})]})})]})]}),u.jsx(iN,{id:"berita",children:u.jsxs(rN,{children:[u.jsx(Bp,{children:"Berita Terkini"}),u.jsxs(sN,{children:[u.jsxs(oN,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5},whileHover:{y:-10},children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:n[0].gambar,alt:n[0].judul})}),u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:n[0].judul}),u.jsx("div",{className:"date",children:n[0].tanggal}),u.jsx("p",{children:n[0].ringkasan}),u.jsx(cN,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Baca Selengkapnya"})]})]}),u.jsx(aN,{children:n.slice(1,6).map((i,r)=>u.jsxs(lN,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},transition:{delay:r*.1},whileHover:{x:5},children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:i.gambar,alt:i.judul})}),u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:i.judul}),u.jsx("div",{className:"date",children:i.tanggal})]})]},i.id))})]})]})}),u.jsx(ZO,{id:"jurusan",children:u.jsxs(eN,{children:[u.jsx(Bp,{children:"Program Keahlian"}),u.jsx(tN,{children:e.map((i,r)=>u.jsxs(nN,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:r*.1},whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(0, 255, 135, 0.2)"},children:[u.jsx("h3",{children:i.nama}),u.jsx("p",{children:i.deskripsi})]},r))})]})})]})})}const pN=T.section`
  padding: 4rem 2rem;
  overflow: hidden;
`,mN=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,pn=T(F.div)`
  background: ${t=>`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${t.bgImage})`};
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background: ${t=>`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${t.bgImage})`};
    background-size: cover;
    background-position: center;
  }

  h3 {
    color: #00ff87;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
  }

  p {
    color: #ffffff;
    line-height: 1.8;
    font-size: 1.1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
    opacity: 0.9;
    font-weight: 400;
  }
`,gN=T.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`;function yN(){return u.jsxs(pN,{children:[u.jsx(gN,{children:"Ekstrakurikuler"}),u.jsxs(mN,{children:[u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/osis.jpg",children:[u.jsx("h3",{children:"OSIS"}),u.jsx("p",{children:"Organisasi siswa intra sekolah yang mengembangkan jiwa kepemimpinan dan manajemen organisasi."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/paskibra.jpg",children:[u.jsx("h3",{children:"Paskibra"}),u.jsx("p",{children:"Pasukan pengibar bendera yang melatih kedisiplinan dan jiwa nasionalisme."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pramuka.jpg",children:[u.jsx("h3",{children:"Pramuka"}),u.jsx("p",{children:"Kegiatan kepanduan yang mengembangkan karakter dan keterampilan hidup."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pmr.jpg",children:[u.jsx("h3",{children:"PMR"}),u.jsx("p",{children:"Palang Merah Remaja untuk pendidikan kesehatan dan pertolongan pertama."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/futsal.jpg",children:[u.jsx("h3",{children:"Futsal"}),u.jsx("p",{children:"Olahraga tim yang mengembangkan keterampilan sepak bola dan kerja sama tim."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/basket.jpg",children:[u.jsx("h3",{children:"Basket"}),u.jsx("p",{children:"Olahraga tim yang melatih koordinasi dan strategi permainan."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/volly.jpg",children:[u.jsx("h3",{children:"Voli"}),u.jsx("p",{children:"Olahraga tim yang mengembangkan kerjasama dan ketangkasan."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/silat.jpg",children:[u.jsx("h3",{children:"Pencak Silat"}),u.jsx("p",{children:"Seni bela diri tradisional yang mengajarkan disiplin dan ketangkasan."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/karate.jpg",children:[u.jsx("h3",{children:"Karate"}),u.jsx("p",{children:"Seni bela diri yang mengembangkan kekuatan fisik dan mental."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/paduan.jpg",children:[u.jsx("h3",{children:"Paduan Suara"}),u.jsx("p",{children:"Kegiatan musik vokal yang mengembangkan bakat dan harmonisasi."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/tari.jpg",children:[u.jsx("h3",{children:"Seni Tari"}),u.jsx("p",{children:"Pengembangan bakat dalam bidang tari tradisional dan modern."})]}),u.jsxs(pn,{initial:{opacity:1},animate:{opacity:1},bgImage:"https://raw.githubusercontent.com/hfzt07/dbweb/main/english.jpg",children:[u.jsx("h3",{children:"English Club"}),u.jsx("p",{children:"Klub bahasa Inggris untuk meningkatkan kemampuan berbahasa."})]})]})]})}const vN=T.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,xN=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,bN=T.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`,_N=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 4rem;
`,$p=T(F.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;function wN(){const t=De();return u.jsx(vN,{id:"program",children:u.jsxs(xN,{children:[u.jsx(bN,{children:"Program Unggulan"}),u.jsxs(_N,{children:[u.jsxs($p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1},whileHover:{scale:1.05},onClick:()=>t("/akademik-detail"),style:{cursor:"pointer"},children:[u.jsx("h3",{children:"Program Akademik"}),u.jsx("p",{children:"Program pembelajaran berbasis industri dengan pendekatan teaching factory"})]}),u.jsxs($p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2},whileHover:{scale:1.05},onClick:()=>t("/karakter-detail"),style:{cursor:"pointer"},children:[u.jsx("h3",{children:"Penguatan Karakter"}),u.jsx("p",{children:"Pembentukan karakter dan etika melalui berbagai program pembinaan"})]}),u.jsxs($p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.3},whileHover:{scale:1.05},onClick:()=>t("/ekstrakurikuler-detail"),style:{cursor:"pointer"},children:[u.jsx("h3",{children:"Ekstrakurikuler"}),u.jsx("p",{children:"Pengembangan minat dan bakat melalui berbagai kegiatan ekstrakurikuler"})]})]}),u.jsx(yN,{})]})})}const kN=T.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,SN=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,TN=T.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`,EN=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,CN=T(F.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .content {
    padding: 1.5rem;
    
    h3 {
      color: #00ff87;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 0.9rem;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`;function PN(){const t=De(),e=[{nama:"Perpustakaan Digital",deskripsi:"Perpustakaan dengan koleksi buku digital dan area belajar yang nyaman",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpustakaan.jpg",path:"/perpus-detail"},{nama:"Laboratorium Komputer",deskripsi:"Lab komputer modern dengan perangkat terbaru untuk praktik pemrograman dan desain",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab-komputer.jpg",path:"/lab-komputer-detail"},{nama:"Studio Multimedia",deskripsi:"Studio produksi dengan peralatan profesional untuk praktik multimedia",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio.jpg",path:"/studio-detail"},{nama:"Ruang Praktik Jaringan",deskripsi:"Ruang praktik dengan peralatan jaringan lengkap untuk pembelajaran TKJ",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab-jaringan.jpg",path:"/jaringan-detail"},{nama:"Aula Serbaguna",deskripsi:"Ruang serba guna untuk berbagai kegiatan sekolah dan event",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula.jpg",path:"/aula-detail"},{nama:"Lapangan Olahraga",deskripsi:"Fasilitas olahraga lengkap untuk kegiatan fisik dan ekstrakurikuler",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan.jpg",path:"/lapangan-detail"},{nama:"Kantin Sehat",deskripsi:"Area makan yang bersih dan nyaman dengan menu sehat dan bergizi",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin.jpg",path:"/kantin-detail"},{nama:"Taman Sosial",deskripsi:"Ruang terbuka hijau untuk interaksi sosial dan kegiatan outdoor",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman.jpg",path:"/taman-detail"},{nama:"Titik Internet",deskripsi:"Akses internet berkecepatan tinggi yang tersebar di seluruh area sekolah",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi.jpg",path:"/internet-detail"}];return u.jsx(kN,{id:"fasilitas",children:u.jsxs(SN,{children:[u.jsx(TN,{children:"Fasilitas Sekolah"}),u.jsx(EN,{children:e.map((n,i)=>u.jsxs(CN,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},whileHover:{y:-10},onClick:()=>n.path&&t(n.path),style:{cursor:n.path?"pointer":"default"},children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:n.image,alt:n.nama})}),u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:n.nama}),u.jsx("p",{children:n.deskripsi})]})]},i))})]})})}var jT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m5=lt.createContext&&lt.createContext(jT),jN=["attr","size","title"];function AN(t,e){if(t==null)return{};var n=IN(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function IN(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function hd(){return hd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hd.apply(this,arguments)}function g5(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function dd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?g5(Object(n),!0).forEach(function(i){RN(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g5(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function RN(t,e,n){return e=MN(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function MN(t){var e=DN(t,"string");return typeof e=="symbol"?e:e+""}function DN(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function AT(t){return t&&t.map((e,n)=>lt.createElement(e.tag,dd({key:n},e.attr),AT(e.child)))}function Q(t){return e=>lt.createElement(VN,hd({attr:dd({},t.attr)},e),AT(t.child))}function VN(t){var e=n=>{var{attr:i,size:r,title:s}=t,o=AN(t,jN),a=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),lt.createElement("svg",hd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:dd(dd({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&lt.createElement("title",null,s),t.children)};return m5!==void 0?lt.createElement(m5.Consumer,null,n=>e(n)):e(jT)}function LN(t){return Q({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(t)}function ON(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function NN(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(t)}function zN(t){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function $t(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(t)}function IT(t){return Q({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(t)}function FN(t){return Q({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"},child:[]}]})(t)}function BN(t){return Q({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(t)}function RT(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(t)}function $N(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(t)}function UN(t){return Q({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(t)}function MT(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function DT(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(t)}function HN(t){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(t)}function WN(t){return Q({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"},child:[]}]})(t)}function KN(t){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(t)}function GN(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"},child:[]}]})(t)}function yy(t){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(t)}function qN(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function VT(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"},child:[]}]})(t)}function LT(t){return Q({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(t)}function nc(t){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(t)}function QN(t){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(t)}function OT(t){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(t)}function YN(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"},child:[]}]})(t)}function NT(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}function XN(t){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function zT(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(t)}function JN(t){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(t)}function FT(t){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(t)}function ZN(t){return Q({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(t)}function ez(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(t)}function tz(t){return Q({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function nz(t){return Q({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function BT(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(t)}function $T(t){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"},child:[]}]})(t)}function UT(t){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"},child:[]}]})(t)}function iz(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"},child:[]}]})(t)}function rz(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(t)}function sz(t){return Q({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-30.63 169.75c14.06 16.72 39 19.09 55.97 5.22l88-72.02c17.09-13.98 19.59-39.19 5.62-56.28-13.97-17.11-39.19-19.59-56.31-5.62l-57.44 47-38.91-46.31c-15.44-18.39-39.22-27.92-64-25.33-24.19 2.48-45.25 16.27-56.37 36.92l-49.37 92.03c-23.4 43.64-8.69 96.37 34.19 123.75L131.56 432H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h208c34.08 0 53.77-42.79 28.28-68.28L166.42 333.86l34.8-64.87 24.15 28.76z"},child:[]}]})(t)}function HT(t){return Q({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"},child:[]}]})(t)}function oz(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(t)}function az(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function lz(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(t)}function cz(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"},child:[]}]})(t)}function WT(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function KT(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function uz(t){return Q({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"},child:[]}]})(t)}function GT(t){return Q({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function qT(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(t)}function hz(t){return Q({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"},child:[]}]})(t)}function dz(t){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(t)}function QT(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"},child:[]}]})(t)}function fd(t){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function pr(t){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(t)}function fz(t){return Q({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(t)}function pz(t){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(t)}function mz(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M231.39 243.48a285.56 285.56 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1 333.87 333.87 0 0 1 146.1-192.2zm-36.9-134.4a284.23 284.23 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2 33.4-83.1 98.4-152 182.4-191.5zm187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18zm-124.7 9.5a286.33 286.33 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9 336.1 336.1 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9zm-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1zm180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.59 286.59 0 0 0 89.7-14.2c0-2 .3-4 .3-6 0-107.8-68.7-199.1-164.6-233.4z"},child:[]}]})(t)}function vy(t){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(t)}const gz=T.footer`
  background: #0f2027;
  color: white;
  padding: 4rem 2rem 2rem 2rem;
`,yz=T.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,Qc=T.div`
  h3 {
    color: #00ff87;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  p, a {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    line-height: 1.6;
    display: block;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00ff87;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }
`,vz=T.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;

  a {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    &:hover {
      background: #00ff87;
      transform: translateY(-3px);
    }

    &.facebook:hover {
      background: #1877f2;
    }

    &.instagram:hover {
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    }

    &.youtube:hover {
      background: #ff0000;
    }

    &.tiktok:hover {
      background: #000000;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`,xz=T.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
`,Up=T(F.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    justify-content: center;
  }
`,bz=T.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 3rem auto 0;
  
  .maps-title {
    color: #00ff87;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .maps-wrapper {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    aspect-ratio: 21/9;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    
    .maps-wrapper {
      aspect-ratio: 16/9;
    }
  }
`;function _z(){const t=new Date().getFullYear();return u.jsxs(gz,{id:"kontak",children:[u.jsxs(yz,{children:[u.jsxs(Qc,{children:[u.jsx("h3",{children:"SMKN 1 Bulan"}),u.jsx("p",{children:"Membentuk generasi digital yang inovatif dan berkarakter untuk masa depan Indonesia."}),u.jsxs(vz,{children:[u.jsx("a",{href:"https://www.facebook.com/grizelleana/",target:"_blank",rel:"noopener noreferrer",className:"facebook",children:u.jsx(LN,{})}),u.jsx("a",{href:"https://www.instagram.com/bernadyaribka/",target:"_blank",rel:"noopener noreferrer",className:"instagram",children:u.jsx(ON,{})}),u.jsx("a",{href:"https://www.youtube.com/channel/UCY1bGdpom5tXC9M8-Ahu8dQ",target:"_blank",rel:"noopener noreferrer",className:"youtube",children:u.jsx(zN,{})}),u.jsx("a",{href:"https://www.tiktok.com/@bearnotber?",target:"_blank",rel:"noopener noreferrer",className:"tiktok",children:u.jsx(NN,{})})]})]}),u.jsxs(Qc,{children:[u.jsx("h3",{children:"Program Keahlian"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Rekayasa Perangkat Lunak"})}),u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Teknik Komputer dan Jaringan"})}),u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Multimedia"})}),u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Bisnis Digital"})})]})]}),u.jsxs(Qc,{children:[u.jsx("h3",{children:"Menu"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"#beranda",children:"Beranda"})}),u.jsx("li",{children:u.jsx("a",{href:"#profil",children:"Profil"})}),u.jsx("li",{children:u.jsx("a",{href:"#berita",children:"Berita"})}),u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Program"})}),u.jsx("li",{children:u.jsx("a",{href:"#fasilitas",children:"Fasilitas"})})]})]}),u.jsxs(Qc,{children:[u.jsx("h3",{children:"Kontak Kami"}),u.jsxs(Up,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.1},children:[u.jsx("span",{children:"📍"}),u.jsx("p",{children:"Jl. Contoh No. 123, Kota Bulan"})]}),u.jsxs(Up,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.2},children:[u.jsx("span",{children:"📞"}),u.jsx("p",{children:"+62 123 4567 8900"})]}),u.jsxs(Up,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.3},children:[u.jsx("span",{children:"✉️"}),u.jsx("p",{children:"info@smkn1bulan.sch.id"})]})]})]}),u.jsxs(bz,{children:[u.jsx("h3",{className:"maps-title",children:"TEMUKAN KAMI"}),u.jsx("div",{className:"maps-wrapper",children:u.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666667!2d106.82638889999999!3d-6.175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMzAuMCJTIDEwNsKwNDknMzUuMCJF!5e0!3m2!1sid!2sid!4v1234567890",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),u.jsx("br",{}),u.jsx("br",{})]}),u.jsx(xz,{children:u.jsxs("p",{children:["© ",t," SMKN 1 Bulan. Hak Cipta Dilindungi."]})})]})}const wz=T(F.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,kz=T(F.div)`
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`;T.h2`
  color: #00ff87;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;const Sz=T.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,y5=T.input`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #00ff87;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Tz=T(F.button)`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(to right, #00ff87, #60efff);
  color: #1a1a2e;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Ez=T(F.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`,Cz=T.p`
  color: #ff4444;
  text-align: center;
  margin-top: 1rem;
`,Pz=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -1rem;

  img {
    width: 80px;
    height: auto;
    margin-bottom: -1rem;
  }

  h2 {
    color: #00ff87;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
`;function jz(){const{showLogin:t,setShowLogin:e,handleLogin:n,loading:i}=fs(),[r,s]=V.useState(""),[o,a]=V.useState(""),[l,c]=V.useState(""),d=async f=>{f.preventDefault(),c("");try{const p=await n(r,o);p.success?(e(!1),s(""),a("")):c(p.error)}catch{c("Terjadi kesalahan. Silakan coba lagi.")}};return u.jsx(U3,{children:t&&u.jsx(wz,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>e(!1),children:u.jsxs(kz,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:f=>f.stopPropagation(),children:[u.jsx(Ez,{onClick:()=>e(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(GT,{})}),u.jsxs(Pz,{children:[u.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo"}),u.jsx("h2",{children:"SMKN 1 Bulan"})]}),u.jsxs(Sz,{onSubmit:d,children:[u.jsx(y5,{type:"text",placeholder:"Username",value:r,onChange:f=>s(f.target.value),required:!0}),u.jsx(y5,{type:"password",placeholder:"Password",value:o,onChange:f=>a(f.target.value),required:!0}),l&&u.jsx(Cz,{children:l}),u.jsx(Tz,{type:"submit",disabled:i,whileHover:{scale:1.02},whileTap:{scale:.98},children:i?"Loading...":"Login"})]})]})})})}const Az=T.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
  position: relative;
`,Iz=T.div`
  width: 250px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
`,Rz=T.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  margin-left: 250px;
`,Mz=T.div`
  color: #00ff87;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,_s=T($d)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: linear-gradient(to right, #00ff87, #60efff);
    color: #1a1a2e;
  }
`,Dz=T(F.button)`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 59, 48, 0.1);
  border: none;
  border-radius: 8px;
  color: #ff3b30;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 59, 48, 0.2);
  }
`;function Vz(){const t=De(),e=()=>{t("/")};return u.jsxs(Az,{children:[u.jsxs(Iz,{children:[u.jsx(Mz,{children:"Admin Panel"}),u.jsxs(_s,{to:"/admin",children:[u.jsx(pr,{})," Dashboard"]}),u.jsxs(_s,{to:"/admin/users",children:[u.jsx(pr,{})," Moderator"]}),u.jsxs(_s,{to:"/admin/students-teachers",children:[u.jsx(QT,{})," Siswa & Guru"]}),u.jsxs(_s,{to:"/admin/news",children:[u.jsx(UT,{})," Berita Sekolah"]}),u.jsxs(_s,{to:"/admin/program-news",children:[u.jsx(nc,{})," Berita Program Keahlian"]}),u.jsxs(_s,{to:"/admin/extra-news",children:[u.jsx(HT,{})," Berita Ekstrakurikuler"]}),u.jsx(Dz,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:e,children:"Logout"})]}),u.jsx(Rz,{children:u.jsx(f1,{})})]})}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function ic(t){return t+.5|0}const Hi=(t,e,n)=>Math.max(Math.min(t,n),e);function wa(t){return Hi(ic(t*2.55),0,255)}function rr(t){return Hi(ic(t*255),0,255)}function ci(t){return Hi(ic(t/2.55)/100,0,1)}function v5(t){return Hi(ic(t*100),0,100)}const mn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},o0=[..."0123456789ABCDEF"],Lz=t=>o0[t&15],Oz=t=>o0[(t&240)>>4]+o0[t&15],Yc=t=>(t&240)>>4===(t&15),Nz=t=>Yc(t.r)&&Yc(t.g)&&Yc(t.b)&&Yc(t.a);function zz(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&mn[t[1]]*17,g:255&mn[t[2]]*17,b:255&mn[t[3]]*17,a:e===5?mn[t[4]]*17:255}:(e===7||e===9)&&(n={r:mn[t[1]]<<4|mn[t[2]],g:mn[t[3]]<<4|mn[t[4]],b:mn[t[5]]<<4|mn[t[6]],a:e===9?mn[t[7]]<<4|mn[t[8]]:255})),n}const Fz=(t,e)=>t<255?e(t):"";function Bz(t){var e=Nz(t)?Lz:Oz;return t?"#"+e(t.r)+e(t.g)+e(t.b)+Fz(t.a,e):void 0}const $z=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function YT(t,e,n){const i=e*Math.min(n,1-n),r=(s,o=(s+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[r(0),r(8),r(4)]}function Uz(t,e,n){const i=(r,s=(r+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[i(5),i(3),i(1)]}function Hz(t,e,n){const i=YT(t,1,.5);let r;for(e+n>1&&(r=1/(e+n),e*=r,n*=r),r=0;r<3;r++)i[r]*=1-e-n,i[r]+=e;return i}function Wz(t,e,n,i,r){return t===r?(e-n)/i+(e<n?6:0):e===r?(n-t)/i+2:(t-e)/i+4}function xy(t){const n=t.r/255,i=t.g/255,r=t.b/255,s=Math.max(n,i,r),o=Math.min(n,i,r),a=(s+o)/2;let l,c,d;return s!==o&&(d=s-o,c=a>.5?d/(2-s-o):d/(s+o),l=Wz(n,i,r,d,s),l=l*60+.5),[l|0,c||0,a]}function by(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(rr)}function _y(t,e,n){return by(YT,t,e,n)}function Kz(t,e,n){return by(Hz,t,e,n)}function Gz(t,e,n){return by(Uz,t,e,n)}function XT(t){return(t%360+360)%360}function qz(t){const e=$z.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?wa(+e[5]):rr(+e[5]));const r=XT(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=Kz(r,s,o):e[1]==="hsv"?i=Gz(r,s,o):i=_y(r,s,o),{r:i[0],g:i[1],b:i[2],a:n}}function Qz(t,e){var n=xy(t);n[0]=XT(n[0]+e),n=_y(n),t.r=n[0],t.g=n[1],t.b=n[2]}function Yz(t){if(!t)return;const e=xy(t),n=e[0],i=v5(e[1]),r=v5(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${r}%, ${ci(t.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const x5={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},b5={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Xz(){const t={},e=Object.keys(b5),n=Object.keys(x5);let i,r,s,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],r=0;r<n.length;r++)s=n[r],a=a.replace(s,x5[s]);s=parseInt(b5[o],16),t[a]=[s>>16&255,s>>8&255,s&255]}return t}let Xc;function Jz(t){Xc||(Xc=Xz(),Xc.transparent=[0,0,0,0]);const e=Xc[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Zz=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function eF(t){const e=Zz.exec(t);let n=255,i,r,s;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?wa(o):Hi(o*255,0,255)}return i=+e[1],r=+e[3],s=+e[5],i=255&(e[2]?wa(i):Hi(i,0,255)),r=255&(e[4]?wa(r):Hi(r,0,255)),s=255&(e[6]?wa(s):Hi(s,0,255)),{r:i,g:r,b:s,a:n}}}function tF(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${ci(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Hp=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,ws=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function nF(t,e,n){const i=ws(ci(t.r)),r=ws(ci(t.g)),s=ws(ci(t.b));return{r:rr(Hp(i+n*(ws(ci(e.r))-i))),g:rr(Hp(r+n*(ws(ci(e.g))-r))),b:rr(Hp(s+n*(ws(ci(e.b))-s))),a:t.a+n*(e.a-t.a)}}function Jc(t,e,n){if(t){let i=xy(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=_y(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function JT(t,e){return t&&Object.assign(e||{},t)}function _5(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=rr(t[3]))):(e=JT(t,{r:0,g:0,b:0,a:1}),e.a=rr(e.a)),e}function iF(t){return t.charAt(0)==="r"?eF(t):qz(t)}class Ml{constructor(e){if(e instanceof Ml)return e;const n=typeof e;let i;n==="object"?i=_5(e):n==="string"&&(i=zz(e)||Jz(e)||iF(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=JT(this._rgb);return e&&(e.a=ci(e.a)),e}set rgb(e){this._rgb=_5(e)}rgbString(){return this._valid?tF(this._rgb):void 0}hexString(){return this._valid?Bz(this._rgb):void 0}hslString(){return this._valid?Yz(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,r=e.rgb;let s;const o=n===s?.5:n,a=2*o-1,l=i.a-r.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;s=1-c,i.r=255&c*i.r+s*r.r+.5,i.g=255&c*i.g+s*r.g+.5,i.b=255&c*i.b+s*r.b+.5,i.a=o*i.a+(1-o)*r.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=nF(this._rgb,e._rgb,n)),this}clone(){return new Ml(this.rgb)}alpha(e){return this._rgb.a=rr(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=ic(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Jc(this._rgb,2,e),this}darken(e){return Jc(this._rgb,2,-e),this}saturate(e){return Jc(this._rgb,1,e),this}desaturate(e){return Jc(this._rgb,1,-e),this}rotate(e){return Qz(this._rgb,e),this}}/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function ri(){}const rF=(()=>{let t=0;return()=>t++})();function Ue(t){return t===null||typeof t>"u"}function at(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function be(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Tn(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function Fn(t,e){return Tn(t)?t:e}function pe(t,e){return typeof t>"u"?e:t}const sF=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Ae(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function ke(t,e,n,i){let r,s,o;if(at(t))for(s=t.length,r=0;r<s;r++)e.call(n,t[r],r);else if(be(t))for(o=Object.keys(t),s=o.length,r=0;r<s;r++)e.call(n,t[o[r]],o[r])}function pd(t,e){let n,i,r,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(r=t[n],s=e[n],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}function md(t){if(at(t))return t.map(md);if(be(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let r=0;for(;r<i;++r)e[n[r]]=md(t[n[r]]);return e}return t}function ZT(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function oF(t,e,n,i){if(!ZT(t))return;const r=e[t],s=n[t];be(r)&&be(s)?Dl(r,s,i):e[t]=md(s)}function Dl(t,e,n){const i=at(e)?e:[e],r=i.length;if(!be(t))return t;n=n||{};const s=n.merger||oF;let o;for(let a=0;a<r;++a){if(o=i[a],!be(o))continue;const l=Object.keys(o);for(let c=0,d=l.length;c<d;++c)s(l[c],t,o,n)}return t}function Ha(t,e){return Dl(t,e,{merger:aF})}function aF(t,e,n){if(!ZT(t))return;const i=e[t],r=n[t];be(i)&&be(r)?Ha(i,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=md(r))}const w5={"":t=>t,x:t=>t.x,y:t=>t.y};function lF(t){const e=t.split("."),n=[];let i="";for(const r of e)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function cF(t){const e=lF(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function gd(t,e){return(w5[e]||(w5[e]=cF(e)))(t)}function wy(t){return t.charAt(0).toUpperCase()+t.slice(1)}const yd=t=>typeof t<"u",mr=t=>typeof t=="function",k5=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function uF(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const ht=Math.PI,Zn=2*ht,hF=Zn+ht,vd=Number.POSITIVE_INFINITY,dF=ht/180,Mn=ht/2,Pr=ht/4,S5=ht*2/3,a0=Math.log10,_o=Math.sign;function Wa(t,e,n){return Math.abs(t-e)<n}function T5(t){const e=Math.round(t);t=Wa(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(a0(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function fF(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((r,s)=>r-s).pop(),e}function Vl(t){return!isNaN(parseFloat(t))&&isFinite(t)}function pF(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function mF(t,e,n){let i,r,s;for(i=0,r=t.length;i<r;i++)s=t[i][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Hr(t){return t*(ht/180)}function gF(t){return t*(180/ht)}function E5(t){if(!Tn(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function yF(t,e){const n=e.x-t.x,i=e.y-t.y,r=Math.sqrt(n*n+i*i);let s=Math.atan2(i,n);return s<-.5*ht&&(s+=Zn),{angle:s,distance:r}}function l0(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function vF(t,e){return(t-e+hF)%Zn-ht}function Di(t){return(t%Zn+Zn)%Zn}function e6(t,e,n,i){const r=Di(t),s=Di(e),o=Di(n),a=Di(s-r),l=Di(o-r),c=Di(r-s),d=Di(r-o);return r===s||r===o||i&&s===o||a>l&&c<d}function bn(t,e,n){return Math.max(e,Math.min(n,t))}function xF(t){return bn(t,-32768,32767)}function ka(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function ky(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,r=0,s;for(;i-r>1;)s=r+i>>1,n(s)?r=s:i=s;return{lo:r,hi:i}}const Wr=(t,e,n,i)=>ky(t,n,i?r=>{const s=t[r][e];return s<n||s===n&&t[r+1][e]===n}:r=>t[r][e]<n),bF=(t,e,n)=>ky(t,n,i=>t[i][e]>=n);function _F(t,e,n){let i=0,r=t.length;for(;i<r&&t[i]<e;)i++;for(;r>i&&t[r-1]>n;)r--;return i>0||r<t.length?t.slice(i,r):t}const t6=["push","pop","shift","splice","unshift"];function wF(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),t6.forEach(n=>{const i="_onData"+wy(n),r=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...s){const o=r.apply(this,s);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...s)}),o}})})}function C5(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(e);r!==-1&&i.splice(r,1),!(i.length>0)&&(t6.forEach(s=>{delete t[s]}),delete t._chartjs)}function kF(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const n6=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function i6(t,e){let n=[],i=!1;return function(...r){n=r,i||(i=!0,n6.call(window,()=>{i=!1,t.apply(e,n)}))}}function SF(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const Sy=t=>t==="start"?"left":t==="end"?"right":"center",jt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,TF=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function EF(t,e,n){const i=e.length;let r=0,s=i;if(t._sorted){const{iScale:o,_parsed:a}=t,l=o.axis,{min:c,max:d,minDefined:f,maxDefined:p}=o.getUserBounds();f&&(r=bn(Math.min(Wr(a,l,c).lo,n?i:Wr(e,l,o.getPixelForValue(c)).lo),0,i-1)),p?s=bn(Math.max(Wr(a,o.axis,d,!0).hi+1,n?0:Wr(e,l,o.getPixelForValue(d),!0).hi+1),r,i)-r:s=i-r}return{start:r,count:s}}function CF(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,r={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=r,!0;const s=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),s}const Zc=t=>t===0||t===1,P5=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Zn/n)),j5=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Zn/n)+1,Ka={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*Mn)+1,easeOutSine:t=>Math.sin(t*Mn),easeInOutSine:t=>-.5*(Math.cos(ht*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Zc(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Zc(t)?t:P5(t,.075,.3),easeOutElastic:t=>Zc(t)?t:j5(t,.075,.3),easeInOutElastic(t){return Zc(t)?t:t<.5?.5*P5(t*2,.1125,.45):.5+.5*j5(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Ka.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Ka.easeInBounce(t*2)*.5:Ka.easeOutBounce(t*2-1)*.5+.5};function Ty(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function A5(t){return Ty(t)?t:new Ml(t)}function Wp(t){return Ty(t)?t:new Ml(t).saturate(.5).darken(.1).hexString()}const PF=["x","y","borderWidth","radius","tension"],jF=["color","borderColor","backgroundColor"];function AF(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:jF},numbers:{type:"number",properties:PF}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function IF(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const I5=new Map;function RF(t,e){e=e||{};const n=t+JSON.stringify(e);let i=I5.get(n);return i||(i=new Intl.NumberFormat(t,e),I5.set(n,i)),i}function r6(t,e,n){return RF(e,n).format(t)}const s6={values(t){return at(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let r,s=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(r="scientific"),s=MF(t,n)}const o=a0(Math.abs(s)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),r6(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(a0(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?s6.numeric.call(this,t,e,n):""}};function MF(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var o6={formatters:s6};function DF(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:o6.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const rs=Object.create(null),c0=Object.create(null);function Ga(t,e){if(!e)return t;const n=e.split(".");for(let i=0,r=n.length;i<r;++i){const s=n[i];t=t[s]||(t[s]=Object.create(null))}return t}function Kp(t,e,n){return typeof e=="string"?Dl(Ga(t,e),n):Dl(Ga(t,""),e)}class VF{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,r)=>Wp(r.backgroundColor),this.hoverBorderColor=(i,r)=>Wp(r.borderColor),this.hoverColor=(i,r)=>Wp(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Kp(this,e,n)}get(e){return Ga(this,e)}describe(e,n){return Kp(c0,e,n)}override(e,n){return Kp(rs,e,n)}route(e,n,i,r){const s=Ga(this,e),o=Ga(this,i),a="_"+n;Object.defineProperties(s,{[a]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[r];return be(l)?Object.assign({},c,l):pe(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var qe=new VF({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[AF,IF,DF]);function LF(t){return!t||Ue(t.size)||Ue(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function R5(t,e,n,i,r){let s=e[r];return s||(s=e[r]=t.measureText(r).width,n.push(r)),s>i&&(i=s),i}function jr(t,e,n){const i=t.currentDevicePixelRatio,r=n!==0?Math.max(n/2,.5):0;return Math.round((e-r)*i)/i+r}function M5(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function u0(t,e,n,i){a6(t,e,n,i,null)}function a6(t,e,n,i,r){let s,o,a,l,c,d,f,p;const g=e.pointStyle,y=e.rotation,x=e.radius;let w=(y||0)*dF;if(g&&typeof g=="object"&&(s=g.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(w),t.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),t.restore();return}if(!(isNaN(x)||x<=0)){switch(t.beginPath(),g){default:r?t.ellipse(n,i,r/2,x,0,0,Zn):t.arc(n,i,x,0,Zn),t.closePath();break;case"triangle":d=r?r/2:x,t.moveTo(n+Math.sin(w)*d,i-Math.cos(w)*x),w+=S5,t.lineTo(n+Math.sin(w)*d,i-Math.cos(w)*x),w+=S5,t.lineTo(n+Math.sin(w)*d,i-Math.cos(w)*x),t.closePath();break;case"rectRounded":c=x*.516,l=x-c,o=Math.cos(w+Pr)*l,f=Math.cos(w+Pr)*(r?r/2-c:l),a=Math.sin(w+Pr)*l,p=Math.sin(w+Pr)*(r?r/2-c:l),t.arc(n-f,i-a,c,w-ht,w-Mn),t.arc(n+p,i-o,c,w-Mn,w),t.arc(n+f,i+a,c,w,w+Mn),t.arc(n-p,i+o,c,w+Mn,w+ht),t.closePath();break;case"rect":if(!y){l=Math.SQRT1_2*x,d=r?r/2:l,t.rect(n-d,i-l,2*d,2*l);break}w+=Pr;case"rectRot":f=Math.cos(w)*(r?r/2:x),o=Math.cos(w)*x,a=Math.sin(w)*x,p=Math.sin(w)*(r?r/2:x),t.moveTo(n-f,i-a),t.lineTo(n+p,i-o),t.lineTo(n+f,i+a),t.lineTo(n-p,i+o),t.closePath();break;case"crossRot":w+=Pr;case"cross":f=Math.cos(w)*(r?r/2:x),o=Math.cos(w)*x,a=Math.sin(w)*x,p=Math.sin(w)*(r?r/2:x),t.moveTo(n-f,i-a),t.lineTo(n+f,i+a),t.moveTo(n+p,i-o),t.lineTo(n-p,i+o);break;case"star":f=Math.cos(w)*(r?r/2:x),o=Math.cos(w)*x,a=Math.sin(w)*x,p=Math.sin(w)*(r?r/2:x),t.moveTo(n-f,i-a),t.lineTo(n+f,i+a),t.moveTo(n+p,i-o),t.lineTo(n-p,i+o),w+=Pr,f=Math.cos(w)*(r?r/2:x),o=Math.cos(w)*x,a=Math.sin(w)*x,p=Math.sin(w)*(r?r/2:x),t.moveTo(n-f,i-a),t.lineTo(n+f,i+a),t.moveTo(n+p,i-o),t.lineTo(n-p,i+o);break;case"line":o=r?r/2:Math.cos(w)*x,a=Math.sin(w)*x,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(w)*(r?r/2:x),i+Math.sin(w)*x);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Ll(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Ey(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Cy(t){t.restore()}function OF(t,e,n,i,r){if(!e)return t.lineTo(n.x,n.y);if(r==="middle"){const s=(e.x+n.x)/2;t.lineTo(s,e.y),t.lineTo(s,n.y)}else r==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function NF(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function zF(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Ue(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function FF(t,e,n,i,r){if(r.strikethrough||r.underline){const s=t.measureText(i),o=e-s.actualBoundingBoxLeft,a=e+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,c=n+s.actualBoundingBoxDescent,d=r.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=r.decorationWidth||2,t.moveTo(o,d),t.lineTo(a,d),t.stroke()}}function BF(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Ol(t,e,n,i,r,s={}){const o=at(e)?e:[e],a=s.strokeWidth>0&&s.strokeColor!=="";let l,c;for(t.save(),t.font=r.string,zF(t,s),l=0;l<o.length;++l)c=o[l],s.backdrop&&BF(t,s.backdrop),a&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),Ue(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(c,n,i,s.maxWidth)),t.fillText(c,n,i,s.maxWidth),FF(t,n,i,c,s),i+=Number(r.lineHeight);t.restore()}function h0(t,e){const{x:n,y:i,w:r,h:s,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,1.5*ht,ht,!0),t.lineTo(n,i+s-o.bottomLeft),t.arc(n+o.bottomLeft,i+s-o.bottomLeft,o.bottomLeft,ht,Mn,!0),t.lineTo(n+r-o.bottomRight,i+s),t.arc(n+r-o.bottomRight,i+s-o.bottomRight,o.bottomRight,Mn,0,!0),t.lineTo(n+r,i+o.topRight),t.arc(n+r-o.topRight,i+o.topRight,o.topRight,0,-Mn,!0),t.lineTo(n+o.topLeft,i)}const $F=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,UF=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function HF(t,e){const n=(""+t).match($F);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const WF=t=>+t||0;function l6(t,e){const n={},i=be(e),r=i?Object.keys(e):e,s=be(t)?i?o=>pe(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of r)n[o]=WF(s(o));return n}function KF(t){return l6(t,{top:"y",right:"x",bottom:"y",left:"x"})}function qa(t){return l6(t,["topLeft","topRight","bottomLeft","bottomRight"])}function En(t){const e=KF(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Mt(t,e){t=t||{},e=e||qe.font;let n=pe(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=pe(t.style,e.style);i&&!(""+i).match(UF)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const r={family:pe(t.family,e.family),lineHeight:HF(pe(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:pe(t.weight,e.weight),string:""};return r.string=LF(r),r}function eu(t,e,n,i){let r,s,o;for(r=0,s=t.length;r<s;++r)if(o=t[r],o!==void 0&&o!==void 0)return o}function GF(t,e,n){const{min:i,max:r}=t,s=sF(e,(r-i)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(i,-Math.abs(s)),max:o(r,s)}}function ps(t,e){return Object.assign(Object.create(t),e)}function Py(t,e=[""],n,i,r=()=>t[0]){const s=n||t;typeof i>"u"&&(i=d6("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:i,_getTarget:r,override:a=>Py([a,...t],e,s,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return u6(a,l,()=>tB(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return V5(a).includes(l)},ownKeys(a){return V5(a)},set(a,l,c){const d=a._storage||(a._storage=r());return a[l]=d[l]=c,delete a._keys,!0}})}function wo(t,e,n,i){const r={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:c6(t,i),setContext:s=>wo(t,s,n,i),override:s=>wo(t.override(s),e,n,i)};return new Proxy(r,{deleteProperty(s,o){return delete s[o],delete t[o],!0},get(s,o,a){return u6(s,o,()=>QF(s,o,a))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(s,o,a){return t[o]=a,delete s[o],!0}})}function c6(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:n,indexable:i,isScriptable:mr(n)?n:()=>n,isIndexable:mr(i)?i:()=>i}}const qF=(t,e)=>t?t+wy(e):e,jy=(t,e)=>be(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function u6(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const i=n();return t[e]=i,i}function QF(t,e,n){const{_proxy:i,_context:r,_subProxy:s,_descriptors:o}=t;let a=i[e];return mr(a)&&o.isScriptable(e)&&(a=YF(e,a,t,n)),at(a)&&a.length&&(a=XF(e,a,t,o.isIndexable)),jy(e,a)&&(a=wo(a,r,s&&s[e],o)),a}function YF(t,e,n,i){const{_proxy:r,_context:s,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(s,o||i);return a.delete(t),jy(t,l)&&(l=Ay(r._scopes,r,t,l)),l}function XF(t,e,n,i){const{_proxy:r,_context:s,_subProxy:o,_descriptors:a}=n;if(typeof s.index<"u"&&i(t))return e[s.index%e.length];if(be(e[0])){const l=e,c=r._scopes.filter(d=>d!==l);e=[];for(const d of l){const f=Ay(c,r,t,d);e.push(wo(f,s,o&&o[t],a))}}return e}function h6(t,e,n){return mr(t)?t(e,n):t}const JF=(t,e)=>t===!0?e:typeof t=="string"?gd(e,t):void 0;function ZF(t,e,n,i,r){for(const s of e){const o=JF(n,s);if(o){t.add(o);const a=h6(o._fallback,n,r);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function Ay(t,e,n,i){const r=e._rootScopes,s=h6(e._fallback,n,i),o=[...t,...r],a=new Set;a.add(i);let l=D5(a,o,n,s||n,i);return l===null||typeof s<"u"&&s!==n&&(l=D5(a,o,s,l,i),l===null)?!1:Py(Array.from(a),[""],r,s,()=>eB(e,n,i))}function D5(t,e,n,i,r){for(;n;)n=ZF(t,e,n,i,r);return n}function eB(t,e,n){const i=t._getTarget();e in i||(i[e]={});const r=i[e];return at(r)&&be(n)?n:r||{}}function tB(t,e,n,i){let r;for(const s of e)if(r=d6(qF(s,t),n),typeof r<"u")return jy(t,r)?Ay(n,i,t,r):r}function d6(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function V5(t){let e=t._keys;return e||(e=t._keys=nB(t._scopes)),e}function nB(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(r=>!r.startsWith("_")))e.add(i);return Array.from(e)}const iB=Number.EPSILON||1e-14,ko=(t,e)=>e<t.length&&!t[e].skip&&t[e],f6=t=>t==="x"?"y":"x";function rB(t,e,n,i){const r=t.skip?e:t,s=e,o=n.skip?e:n,a=l0(s,r),l=l0(o,s);let c=a/(a+l),d=l/(a+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const f=i*c,p=i*d;return{previous:{x:s.x-f*(o.x-r.x),y:s.y-f*(o.y-r.y)},next:{x:s.x+p*(o.x-r.x),y:s.y+p*(o.y-r.y)}}}function sB(t,e,n){const i=t.length;let r,s,o,a,l,c=ko(t,0);for(let d=0;d<i-1;++d)if(l=c,c=ko(t,d+1),!(!l||!c)){if(Wa(e[d],0,iB)){n[d]=n[d+1]=0;continue}r=n[d]/e[d],s=n[d+1]/e[d],a=Math.pow(r,2)+Math.pow(s,2),!(a<=9)&&(o=3/Math.sqrt(a),n[d]=r*o*e[d],n[d+1]=s*o*e[d])}}function oB(t,e,n="x"){const i=f6(n),r=t.length;let s,o,a,l=ko(t,0);for(let c=0;c<r;++c){if(o=a,a=l,l=ko(t,c+1),!a)continue;const d=a[n],f=a[i];o&&(s=(d-o[n])/3,a[`cp1${n}`]=d-s,a[`cp1${i}`]=f-s*e[c]),l&&(s=(l[n]-d)/3,a[`cp2${n}`]=d+s,a[`cp2${i}`]=f+s*e[c])}}function aB(t,e="x"){const n=f6(e),i=t.length,r=Array(i).fill(0),s=Array(i);let o,a,l,c=ko(t,0);for(o=0;o<i;++o)if(a=l,l=c,c=ko(t,o+1),!!l){if(c){const d=c[e]-l[e];r[o]=d!==0?(c[n]-l[n])/d:0}s[o]=a?c?_o(r[o-1])!==_o(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}sB(t,r,s),oB(t,s,e)}function tu(t,e,n){return Math.max(Math.min(t,n),e)}function lB(t,e){let n,i,r,s,o,a=Ll(t[0],e);for(n=0,i=t.length;n<i;++n)o=s,s=a,a=n<i-1&&Ll(t[n+1],e),s&&(r=t[n],o&&(r.cp1x=tu(r.cp1x,e.left,e.right),r.cp1y=tu(r.cp1y,e.top,e.bottom)),a&&(r.cp2x=tu(r.cp2x,e.left,e.right),r.cp2y=tu(r.cp2y,e.top,e.bottom)))}function cB(t,e,n,i,r){let s,o,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")aB(t,r);else{let c=i?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)a=t[s],l=rB(c,a,t[Math.min(s+1,o-(i?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&lB(t,n)}function Iy(){return typeof window<"u"&&typeof document<"u"}function Ry(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function xd(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const bf=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function uB(t,e){return bf(t).getPropertyValue(e)}const hB=["top","right","bottom","left"];function Yr(t,e,n){const i={};n=n?"-"+n:"";for(let r=0;r<4;r++){const s=hB[r];i[s]=parseFloat(t[e+"-"+s+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const dB=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function fB(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:r,offsetY:s}=i;let o=!1,a,l;if(dB(r,s,t.target))a=r,l=s;else{const c=e.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Or(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,r=bf(n),s=r.boxSizing==="border-box",o=Yr(r,"padding"),a=Yr(r,"border","width"),{x:l,y:c,box:d}=fB(t,n),f=o.left+(d&&a.left),p=o.top+(d&&a.top);let{width:g,height:y}=e;return s&&(g-=o.width+a.width,y-=o.height+a.height),{x:Math.round((l-f)/g*n.width/i),y:Math.round((c-p)/y*n.height/i)}}function pB(t,e,n){let i,r;if(e===void 0||n===void 0){const s=t&&Ry(t);if(!s)e=t.clientWidth,n=t.clientHeight;else{const o=s.getBoundingClientRect(),a=bf(s),l=Yr(a,"border","width"),c=Yr(a,"padding");e=o.width-c.width-l.width,n=o.height-c.height-l.height,i=xd(a.maxWidth,s,"clientWidth"),r=xd(a.maxHeight,s,"clientHeight")}}return{width:e,height:n,maxWidth:i||vd,maxHeight:r||vd}}const nu=t=>Math.round(t*10)/10;function mB(t,e,n,i){const r=bf(t),s=Yr(r,"margin"),o=xd(r.maxWidth,t,"clientWidth")||vd,a=xd(r.maxHeight,t,"clientHeight")||vd,l=pB(t,e,n);let{width:c,height:d}=l;if(r.boxSizing==="content-box"){const p=Yr(r,"border","width"),g=Yr(r,"padding");c-=g.width+p.width,d-=g.height+p.height}return c=Math.max(0,c-s.width),d=Math.max(0,i?c/i:d-s.height),c=nu(Math.min(c,o,l.maxWidth)),d=nu(Math.min(d,a,l.maxHeight)),c&&!d&&(d=nu(c/2)),(e!==void 0||n!==void 0)&&i&&l.height&&d>l.height&&(d=l.height,c=nu(Math.floor(d*i))),{width:c,height:d}}function L5(t,e,n){const i=e||1,r=Math.floor(t.height*i),s=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==r||o.width!==s?(t.currentDevicePixelRatio=i,o.height=r,o.width=s,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const gB=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Iy()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function O5(t,e){const n=uB(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Nr(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function yB(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function vB(t,e,n,i){const r={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},o=Nr(t,r,n),a=Nr(r,s,n),l=Nr(s,e,n),c=Nr(o,a,n),d=Nr(a,l,n);return Nr(c,d,n)}const xB=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},bB=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function to(t,e,n){return t?xB(e,n):bB()}function p6(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function m6(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function g6(t){return t==="angle"?{between:e6,compare:vF,normalize:Di}:{between:ka,compare:(e,n)=>e-n,normalize:e=>e}}function N5({start:t,end:e,count:n,loop:i,style:r}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:r}}function _B(t,e,n){const{property:i,start:r,end:s}=n,{between:o,normalize:a}=g6(i),l=e.length;let{start:c,end:d,loop:f}=t,p,g;if(f){for(c+=l,d+=l,p=0,g=l;p<g&&o(a(e[c%l][i]),r,s);++p)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:f,style:t.style}}function wB(t,e,n){if(!n)return[t];const{property:i,start:r,end:s}=n,o=e.length,{compare:a,between:l,normalize:c}=g6(i),{start:d,end:f,loop:p,style:g}=_B(t,e,n),y=[];let x=!1,w=null,_,b,k;const A=()=>l(r,k,_)&&a(r,k)!==0,M=()=>a(s,_)===0||l(s,k,_),L=()=>x||A(),E=()=>!x||M();for(let S=d,C=d;S<=f;++S)b=e[S%o],!b.skip&&(_=c(b[i]),_!==k&&(x=l(_,r,s),w===null&&L()&&(w=a(_,r)===0?S:C),w!==null&&E()&&(y.push(N5({start:w,end:S,loop:p,count:o,style:g})),w=null),C=S,k=_));return w!==null&&y.push(N5({start:w,end:f,loop:p,count:o,style:g})),y}function kB(t,e){const n=[],i=t.segments;for(let r=0;r<i.length;r++){const s=wB(i[r],t.points,e);s.length&&n.push(...s)}return n}function SB(t,e,n,i){let r=0,s=e-1;if(n&&!i)for(;r<e&&!t[r].skip;)r++;for(;r<e&&t[r].skip;)r++;for(r%=e,n&&(s+=r);s>r&&t[s%e].skip;)s--;return s%=e,{start:r,end:s}}function TB(t,e,n,i){const r=t.length,s=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%r];c.skip||c.stop?a.skip||(i=!1,s.push({start:e%r,end:(l-1)%r,loop:i}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&s.push({start:e%r,end:o%r,loop:i}),s}function EB(t,e){const n=t.points,i=t.options.spanGaps,r=n.length;if(!r)return[];const s=!!t._loop,{start:o,end:a}=SB(n,r,s,i);if(i===!0)return z5(t,[{start:o,end:a,loop:s}],n,e);const l=a<o?a+r:a,c=!!t._fullLoop&&o===0&&a===r-1;return z5(t,TB(n,o,l,c),n,e)}function z5(t,e,n,i){return!i||!i.setContext||!n?e:CB(t,e,n,i)}function CB(t,e,n,i){const r=t._chart.getContext(),s=F5(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,c=[];let d=s,f=e[0].start,p=f;function g(y,x,w,_){const b=a?-1:1;if(y!==x){for(y+=l;n[y%l].skip;)y-=b;for(;n[x%l].skip;)x+=b;y%l!==x%l&&(c.push({start:y%l,end:x%l,loop:w,style:_}),d=_,f=x%l)}}for(const y of e){f=a?f:y.start;let x=n[f%l],w;for(p=f+1;p<=y.end;p++){const _=n[p%l];w=F5(i.setContext(ps(r,{type:"segment",p0:x,p1:_,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:o}))),PB(w,d)&&g(f,p-1,y.loop,d),x=_,d=w}f<p-1&&g(f,p-1,y.loop,d)}return c}function F5(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function PB(t,e){if(!e)return!1;const n=[],i=function(r,s){return Ty(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class jB{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,r){const s=n.listeners[r],o=n.duration;s.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=n6.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const s=i.items;let o=s.length-1,a=!1,l;for(;o>=0;--o)l=s[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),a=!0):(s[o]=s[s.length-1],s.pop());a&&(r.draw(),this._notify(r,i,e,"progress")),s.length||(i.running=!1,this._notify(r,i,e,"complete"),i.initial=!1),n+=s.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,r)=>Math.max(i,r._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let r=i.length-1;for(;r>=0;--r)i[r].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var si=new jB;const B5="transparent",AB={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=A5(t||B5),r=i.valid&&A5(e||B5);return r&&r.valid?r.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class IB{constructor(e,n,i,r){const s=n[i];r=eu([e.to,r,s,e.from]);const o=eu([e.from,s,r]);this._active=!0,this._fn=e.fn||AB[e.type||typeof o],this._easing=Ka[e.easing]||Ka.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const r=this._target[this._prop],s=i-this._start,o=this._duration-s;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=eu([e.to,n,r,e.from]),this._from=eu([e.from,r,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,r=this._prop,s=this._from,o=this._loop,a=this._to;let l;if(this._active=s!==a&&(o||n<i),!this._active){this._target[r]=a,this._notify(!0);return}if(n<0){this._target[r]=s;return}l=n/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[r]=this._fn(s,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let r=0;r<i.length;r++)i[r][n]()}}class y6{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!be(e))return;const n=Object.keys(qe.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{const s=e[r];if(!be(s))return;const o={};for(const a of n)o[a]=s[a];(at(s.properties)&&s.properties||[r]).forEach(a=>{(a===r||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,r=MB(e,i);if(!r)return[];const s=this._createAnimations(r,i);return i.$shared&&RB(e.options.$animations,i).then(()=>{e.options=i},()=>{}),s}_createAnimations(e,n){const i=this._properties,r=[],s=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){r.push(...this._animateOptions(e,n));continue}const d=n[c];let f=s[c];const p=i.get(c);if(f)if(p&&f.active()){f.update(p,d,a);continue}else f.cancel();if(!p||!p.duration){e[c]=d;continue}s[c]=f=new IB(p,e,c,d),r.push(f)}return r}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return si.add(this._chart,i),!0}}function RB(t,e){const n=[],i=Object.keys(e);for(let r=0;r<i.length;r++){const s=t[i[r]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function MB(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function $5(t,e){const n=t&&t.options||{},i=n.reverse,r=n.min===void 0?e:0,s=n.max===void 0?e:0;return{start:i?s:r,end:i?r:s}}function DB(t,e,n){if(n===!1)return!1;const i=$5(t,n),r=$5(e,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function VB(t){let e,n,i,r;return be(t)?(e=t.top,n=t.right,i=t.bottom,r=t.left):e=n=i=r=t,{top:e,right:n,bottom:i,left:r,disabled:t===!1}}function v6(t,e){const n=[],i=t._getSortedDatasetMetas(e);let r,s;for(r=0,s=i.length;r<s;++r)n.push(i[r].index);return n}function U5(t,e,n,i={}){const r=t.keys,s=i.mode==="single";let o,a,l,c;if(e===null)return;let d=!1;for(o=0,a=r.length;o<a;++o){if(l=+r[o],l===n){if(d=!0,i.all)continue;break}c=t.values[l],Tn(c)&&(s||e===0||_o(e)===_o(c))&&(e+=c)}return!d&&!i.all?0:e}function LB(t,e){const{iScale:n,vScale:i}=e,r=n.axis==="x"?"x":"y",s=i.axis==="x"?"x":"y",o=Object.keys(t),a=new Array(o.length);let l,c,d;for(l=0,c=o.length;l<c;++l)d=o[l],a[l]={[r]:d,[s]:t[d]};return a}function Gp(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function OB(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function NB(t){const{min:e,max:n,minDefined:i,maxDefined:r}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function zB(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function H5(t,e,n,i){for(const r of e.getMatchingVisibleMetas(i).reverse()){const s=t[r.index];if(n&&s>0||!n&&s<0)return r.index}return null}function W5(t,e){const{chart:n,_cachedMeta:i}=t,r=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=i,l=s.axis,c=o.axis,d=OB(s,o,i),f=e.length;let p;for(let g=0;g<f;++g){const y=e[g],{[l]:x,[c]:w}=y,_=y._stacks||(y._stacks={});p=_[c]=zB(r,d,x),p[a]=w,p._top=H5(p,o,!0,i.type),p._bottom=H5(p,o,!1,i.type);const b=p._visualValues||(p._visualValues={});b[a]=w}}function qp(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function FB(t,e){return ps(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function BB(t,e,n){return ps(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function aa(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const r of e){const s=r._stacks;if(!s||s[i]===void 0||s[i][n]===void 0)return;delete s[i][n],s[i]._visualValues!==void 0&&s[i]._visualValues[n]!==void 0&&delete s[i]._visualValues[n]}}}const Qp=t=>t==="reset"||t==="none",K5=(t,e)=>e?t:Object.assign({},t),$B=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:v6(n,!0),values:null};class Qa{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Gp(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&aa(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),r=(f,p,g,y)=>f==="x"?p:f==="r"?y:g,s=n.xAxisID=pe(i.xAxisID,qp(e,"x")),o=n.yAxisID=pe(i.yAxisID,qp(e,"y")),a=n.rAxisID=pe(i.rAxisID,qp(e,"r")),l=n.indexAxis,c=n.iAxisID=r(l,s,o,a),d=n.vAxisID=r(l,o,s,a);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&C5(this._data,this),e._stacked&&aa(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(be(n)){const r=this._cachedMeta;this._data=LB(n,r)}else if(i!==n){if(i){C5(i,this);const r=this._cachedMeta;aa(r),r._parsed=[]}n&&Object.isExtensible(n)&&wF(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let r=!1;this._dataCheck();const s=n._stacked;n._stacked=Gp(n.vScale,n),n.stack!==i.stack&&(r=!0,aa(n),n.stack=i.stack),this._resyncElements(e),(r||s!==n._stacked)&&(W5(this,n._parsed),n._stacked=Gp(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:r}=this,{iScale:s,_stacked:o}=i,a=s.axis;let l=e===0&&n===r.length?!0:i._sorted,c=e>0&&i._parsed[e-1],d,f,p;if(this._parsing===!1)i._parsed=r,i._sorted=!0,p=r;else{at(r[e])?p=this.parseArrayData(i,r,e,n):be(r[e])?p=this.parseObjectData(i,r,e,n):p=this.parsePrimitiveData(i,r,e,n);const g=()=>f[a]===null||c&&f[a]<c[a];for(d=0;d<n;++d)i._parsed[d+e]=f=p[d],l&&(g()&&(l=!1),c=f);i._sorted=l}o&&W5(this,p)}parsePrimitiveData(e,n,i,r){const{iScale:s,vScale:o}=e,a=s.axis,l=o.axis,c=s.getLabels(),d=s===o,f=new Array(r);let p,g,y;for(p=0,g=r;p<g;++p)y=p+i,f[p]={[a]:d||s.parse(c[y],y),[l]:o.parse(n[y],y)};return f}parseArrayData(e,n,i,r){const{xScale:s,yScale:o}=e,a=new Array(r);let l,c,d,f;for(l=0,c=r;l<c;++l)d=l+i,f=n[d],a[l]={x:s.parse(f[0],d),y:o.parse(f[1],d)};return a}parseObjectData(e,n,i,r){const{xScale:s,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(r);let d,f,p,g;for(d=0,f=r;d<f;++d)p=d+i,g=n[p],c[d]={x:s.parse(gd(g,a),p),y:o.parse(gd(g,l),p)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const r=this.chart,s=this._cachedMeta,o=n[e.axis],a={keys:v6(r,!0),values:n._stacks[e.axis]._visualValues};return U5(a,o,s.index,{mode:i})}updateRangeFromParsed(e,n,i,r){const s=i[n.axis];let o=s===null?NaN:s;const a=r&&i._stacks[n.axis];r&&a&&(r.values=a,o=U5(r,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,r=i._parsed,s=i._sorted&&e===i.iScale,o=r.length,a=this._getOtherScale(e),l=$B(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:f}=NB(a);let p,g;function y(){g=r[p];const x=g[a.axis];return!Tn(g[e.axis])||d>x||f<x}for(p=0;p<o&&!(!y()&&(this.updateRangeFromParsed(c,e,g,l),s));++p);if(s){for(p=o-1;p>=0;--p)if(!y()){this.updateRangeFromParsed(c,e,g,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let r,s,o;for(r=0,s=n.length;r<s;++r)o=n[r][e.axis],Tn(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,r=n.vScale,s=this.getParsed(e);return{label:i?""+i.getLabelForValue(s[i.axis]):"",value:r?""+r.getLabelForValue(s[r.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=VB(pe(this.options.clip,DB(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,r=i.data||[],s=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||r.length-a,c=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(e,s,a,l),d=a;d<a+l;++d){const f=r[d];f.hidden||(f.active&&c?o.push(f):f.draw(e,s))}for(d=0;d<o.length;++d)o[d].draw(e,s)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const r=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=BB(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=r.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=FB(this.chart.getContext(),this.index)),s.dataset=r,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=i,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const r=n==="active",s=this._cachedDataOpts,o=e+"-"+n,a=s[o],l=this.enableOptionSharing&&yd(i);if(a)return K5(a,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,e),f=r?[`${e}Hover`,"hover",e,""]:[e,""],p=c.getOptionScopes(this.getDataset(),d),g=Object.keys(qe.elements[e]),y=()=>this.getContext(i,r,n),x=c.resolveNamedOptions(p,g,y,f);return x.$shared&&(x.$shared=l,s[o]=Object.freeze(K5(x,l))),x}_resolveAnimations(e,n,i){const r=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,a=s[o];if(a)return a;let l;if(r.options.animation!==!1){const d=this.chart.config,f=d.datasetAnimationScopeKeys(this._type,n),p=d.getOptionScopes(this.getDataset(),f);l=d.createResolver(p,this.getContext(e,i,n))}const c=new y6(r,l&&l.animations);return l&&l._cacheable&&(s[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Qp(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),r=this._sharedOptions,s=this.getSharedOptions(i),o=this.includeOptions(n,s)||s!==r;return this.updateSharedOptions(s,n,i),{sharedOptions:s,includeOptions:o}}updateElement(e,n,i,r){Qp(r)?Object.assign(e,i):this._resolveAnimations(n,r).update(e,i)}updateSharedOptions(e,n,i){e&&!Qp(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,r){e.active=r;const s=this.getStyle(n,r);this._resolveAnimations(n,i,r).update(e,{options:!r&&this.getSharedOptions(s)||s})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const r=i.length,s=n.length,o=Math.min(s,r);o&&this.parse(0,o),s>r?this._insertElements(r,s-r,e):s<r&&this._removeElements(s,r-s)}_insertElements(e,n,i=!0){const r=this._cachedMeta,s=r.data,o=e+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(s),a=e;a<o;++a)s[a]=new this.dataElementType;this._parsing&&l(r._parsed),this.parse(e,n),i&&this.updateElements(s,e,n,"reset")}updateElements(e,n,i,r){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const r=i._parsed.splice(e,n);i._stacked&&aa(i,r)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,r]=e;this[n](i,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}oe(Qa,"defaults",{}),oe(Qa,"datasetElementType",null),oe(Qa,"dataElementType",null);class uh extends Qa{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:r=[],_dataset:s}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=EF(n,r,o);this._drawStart=a,this._drawCount=l,CF(n)&&(a=0,l=r.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!s._decimated,i.points=r;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},e),this.updateElements(r,a,l,e)}updateElements(e,n,i,r){const s=r==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:f}=this._getSharedOptions(n,r),p=o.axis,g=a.axis,{spanGaps:y,segment:x}=this.options,w=Vl(y)?y:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||s||r==="none",b=n+i,k=e.length;let A=n>0&&this.getParsed(n-1);for(let M=0;M<k;++M){const L=e[M],E=_?L:{};if(M<n||M>=b){E.skip=!0;continue}const S=this.getParsed(M),C=Ue(S[g]),j=E[p]=o.getPixelForValue(S[p],M),R=E[g]=s||C?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,S,l):S[g],M);E.skip=isNaN(j)||isNaN(R)||C,E.stop=M>0&&Math.abs(S[p]-A[p])>w,x&&(E.parsed=S,E.raw=c.data[M]),f&&(E.options=d||this.resolveDataElementOptions(M,L.active?"active":r)),_||this.updateElement(L,M,E,r),A=S}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,r=e.data||[];if(!r.length)return i;const s=r[0].size(this.resolveDataElementOptions(0)),o=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(i,s,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}oe(uh,"id","line"),oe(uh,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),oe(uh,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Ar(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class My{constructor(e){oe(this,"options");this.options=e||{}}static override(e){Object.assign(My.prototype,e)}init(){}formats(){return Ar()}parse(){return Ar()}format(){return Ar()}add(){return Ar()}diff(){return Ar()}startOf(){return Ar()}endOf(){return Ar()}}var UB={_date:My};function HB(t,e,n,i){const{controller:r,data:s,_sorted:o}=t,a=r._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&s.length){const l=a._reversePixels?bF:Wr;if(i){if(r._sharedOptions){const c=s[0],d=typeof c.getRange=="function"&&c.getRange(e);if(d){const f=l(s,e,n-d),p=l(s,e,n+d);return{lo:f.lo,hi:p.hi}}}}else return l(s,e,n)}return{lo:0,hi:s.length-1}}function rc(t,e,n,i,r){const s=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=s.length;a<l;++a){const{index:c,data:d}=s[a],{lo:f,hi:p}=HB(s[a],e,o,r);for(let g=f;g<=p;++g){const y=d[g];y.skip||i(y,c,g)}}}function WB(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,r){const s=e?Math.abs(i.x-r.x):0,o=n?Math.abs(i.y-r.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function Yp(t,e,n,i,r){const s=[];return!r&&!t.isPointInArea(e)||rc(t,n,e,function(a,l,c){!r&&!Ll(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&s.push({element:a,datasetIndex:l,index:c})},!0),s}function KB(t,e,n,i){let r=[];function s(o,a,l){const{startAngle:c,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:f}=yF(o,{x:e.x,y:e.y});e6(f,c,d)&&r.push({element:o,datasetIndex:a,index:l})}return rc(t,n,e,s),r}function GB(t,e,n,i,r,s){let o=[];const a=WB(n);let l=Number.POSITIVE_INFINITY;function c(d,f,p){const g=d.inRange(e.x,e.y,r);if(i&&!g)return;const y=d.getCenterPoint(r);if(!(!!s||t.isPointInArea(y))&&!g)return;const w=a(e,y);w<l?(o=[{element:d,datasetIndex:f,index:p}],l=w):w===l&&o.push({element:d,datasetIndex:f,index:p})}return rc(t,n,e,c),o}function Xp(t,e,n,i,r,s){return!s&&!t.isPointInArea(e)?[]:n==="r"&&!i?KB(t,e,n,r):GB(t,e,n,i,r,s)}function G5(t,e,n,i,r){const s=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return rc(t,n,e,(l,c,d)=>{l[o]&&l[o](e[n],r)&&(s.push({element:l,datasetIndex:c,index:d}),a=a||l.inRange(e.x,e.y,r))}),i&&!a?[]:s}var qB={evaluateInteractionItems:rc,modes:{index(t,e,n,i){const r=Or(e,t),s=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?Yp(t,r,s,i,o):Xp(t,r,s,!1,i,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const d=a[0].index,f=c.data[d];f&&!f.skip&&l.push({element:f,datasetIndex:c.index,index:d})}),l):[]},dataset(t,e,n,i){const r=Or(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?Yp(t,r,s,i,o):Xp(t,r,s,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let d=0;d<c.length;++d)a.push({element:c[d],datasetIndex:l,index:d})}return a},point(t,e,n,i){const r=Or(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return Yp(t,r,s,i,o)},nearest(t,e,n,i){const r=Or(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return Xp(t,r,s,n.intersect,i,o)},x(t,e,n,i){const r=Or(e,t);return G5(t,r,"x",n.intersect,i)},y(t,e,n,i){const r=Or(e,t);return G5(t,r,"y",n.intersect,i)}}};const x6=["left","top","right","bottom"];function la(t,e){return t.filter(n=>n.pos===e)}function q5(t,e){return t.filter(n=>x6.indexOf(n.pos)===-1&&n.box.axis===e)}function ca(t,e){return t.sort((n,i)=>{const r=e?i:n,s=e?n:i;return r.weight===s.weight?r.index-s.index:r.weight-s.weight})}function QB(t){const e=[];let n,i,r,s,o,a;for(n=0,i=(t||[]).length;n<i;++n)r=t[n],{position:s,options:{stack:o,stackWeight:a=1}}=r,e.push({index:n,box:r,pos:s,horizontal:r.isHorizontal(),weight:r.weight,stack:o&&s+o,stackWeight:a});return e}function YB(t){const e={};for(const n of t){const{stack:i,pos:r,stackWeight:s}=n;if(!i||!x6.includes(r))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function XB(t,e){const n=YB(t),{vBoxMaxWidth:i,hBoxMaxHeight:r}=e;let s,o,a;for(s=0,o=t.length;s<o;++s){a=t[s];const{fullSize:l}=a.box,c=n[a.stack],d=c&&a.stackWeight/c.weight;a.horizontal?(a.width=d?d*i:l&&e.availableWidth,a.height=r):(a.width=i,a.height=d?d*r:l&&e.availableHeight)}return n}function JB(t){const e=QB(t),n=ca(e.filter(c=>c.box.fullSize),!0),i=ca(la(e,"left"),!0),r=ca(la(e,"right")),s=ca(la(e,"top"),!0),o=ca(la(e,"bottom")),a=q5(e,"x"),l=q5(e,"y");return{fullSize:n,leftAndTop:i.concat(s),rightAndBottom:r.concat(l).concat(o).concat(a),chartArea:la(e,"chartArea"),vertical:i.concat(r).concat(l),horizontal:s.concat(o).concat(a)}}function Q5(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function b6(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function ZB(t,e,n,i){const{pos:r,box:s}=n,o=t.maxPadding;if(!be(r)){n.size&&(t[r]-=n.size);const f=i[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?s.height:s.width),n.size=f.size/f.count,t[r]+=n.size}s.getPadding&&b6(o,s.getPadding());const a=Math.max(0,e.outerWidth-Q5(o,t,"left","right")),l=Math.max(0,e.outerHeight-Q5(o,t,"top","bottom")),c=a!==t.w,d=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:c,other:d}:{same:d,other:c}}function e$(t){const e=t.maxPadding;function n(i){const r=Math.max(e[i]-t[i],0);return t[i]+=r,r}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function t$(t,e){const n=e.maxPadding;function i(r){const s={left:0,top:0,right:0,bottom:0};return r.forEach(o=>{s[o]=Math.max(e[o],n[o])}),s}return i(t?["left","right"]:["top","bottom"])}function Sa(t,e,n,i){const r=[];let s,o,a,l,c,d;for(s=0,o=t.length,c=0;s<o;++s){a=t[s],l=a.box,l.update(a.width||e.w,a.height||e.h,t$(a.horizontal,e));const{same:f,other:p}=ZB(e,n,a,i);c|=f&&r.length,d=d||p,l.fullSize||r.push(a)}return c&&Sa(r,e,n,i)||d}function iu(t,e,n,i,r){t.top=n,t.left=e,t.right=e+i,t.bottom=n+r,t.width=i,t.height=r}function Y5(t,e,n,i){const r=n.padding;let{x:s,y:o}=e;for(const a of t){const l=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},d=a.stackWeight/c.weight||1;if(a.horizontal){const f=e.w*d,p=c.size||l.height;yd(c.start)&&(o=c.start),l.fullSize?iu(l,r.left,o,n.outerWidth-r.right-r.left,p):iu(l,e.left+c.placed,o,f,p),c.start=o,c.placed+=f,o=l.bottom}else{const f=e.h*d,p=c.size||l.width;yd(c.start)&&(s=c.start),l.fullSize?iu(l,s,r.top,p,n.outerHeight-r.bottom-r.top):iu(l,s,e.top+c.placed,p,f),c.start=s,c.placed+=f,s=l.right}}e.x=s,e.y=o}var _n={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const r=En(t.options.layout.padding),s=Math.max(e-r.width,0),o=Math.max(n-r.height,0),a=JB(t.boxes),l=a.vertical,c=a.horizontal;ke(t.boxes,x=>{typeof x.beforeLayout=="function"&&x.beforeLayout()});const d=l.reduce((x,w)=>w.box.options&&w.box.options.display===!1?x:x+1,0)||1,f=Object.freeze({outerWidth:e,outerHeight:n,padding:r,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/d,hBoxMaxHeight:o/2}),p=Object.assign({},r);b6(p,En(i));const g=Object.assign({maxPadding:p,w:s,h:o,x:r.left,y:r.top},r),y=XB(l.concat(c),f);Sa(a.fullSize,g,f,y),Sa(l,g,f,y),Sa(c,g,f,y)&&Sa(l,g,f,y),e$(g),Y5(a.leftAndTop,g,f,y),g.x+=g.w,g.y+=g.h,Y5(a.rightAndBottom,g,f,y),t.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},ke(a.chartArea,x=>{const w=x.box;Object.assign(w,t.chartArea),w.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class _6{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,r){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,r?Math.floor(n/r):i)}}isAttached(e){return!0}updateConfig(e){}}class n$ extends _6{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const hh="$chartjs",i$={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},X5=t=>t===null||t==="";function r$(t,e){const n=t.style,i=t.getAttribute("height"),r=t.getAttribute("width");if(t[hh]={initial:{height:i,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",X5(r)){const s=O5(t,"width");s!==void 0&&(t.width=s)}if(X5(i))if(t.style.height==="")t.height=t.width/(e||2);else{const s=O5(t,"height");s!==void 0&&(t.height=s)}return t}const w6=gB?{passive:!0}:!1;function s$(t,e,n){t&&t.addEventListener(e,n,w6)}function o$(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,w6)}function a$(t,e){const n=i$[t.type]||t.type,{x:i,y:r}=Or(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:r!==void 0?r:null}}function bd(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function l$(t,e,n){const i=t.canvas,r=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||bd(a.addedNodes,i),o=o&&!bd(a.removedNodes,i);o&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}function c$(t,e,n){const i=t.canvas,r=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||bd(a.removedNodes,i),o=o&&!bd(a.addedNodes,i);o&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}const Nl=new Map;let J5=0;function k6(){const t=window.devicePixelRatio;t!==J5&&(J5=t,Nl.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function u$(t,e){Nl.size||window.addEventListener("resize",k6),Nl.set(t,e)}function h$(t){Nl.delete(t),Nl.size||window.removeEventListener("resize",k6)}function d$(t,e,n){const i=t.canvas,r=i&&Ry(i);if(!r)return;const s=i6((a,l)=>{const c=r.clientWidth;n(a,l),c<r.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||s(c,d)});return o.observe(r),u$(t,s),o}function Jp(t,e,n){n&&n.disconnect(),e==="resize"&&h$(t)}function f$(t,e,n){const i=t.canvas,r=i6(s=>{t.ctx!==null&&n(a$(s,t))},t);return s$(i,e,r),r}class p$ extends _6{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(r$(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[hh])return!1;const i=n[hh].initial;["height","width"].forEach(s=>{const o=i[s];Ue(o)?n.removeAttribute(s):n.setAttribute(s,o)});const r=i.style||{};return Object.keys(r).forEach(s=>{n.style[s]=r[s]}),n.width=n.width,delete n[hh],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const r=e.$proxies||(e.$proxies={}),o={attach:l$,detach:c$,resize:d$}[n]||f$;r[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),r=i[n];if(!r)return;({attach:Jp,detach:Jp,resize:Jp}[n]||o$)(e,n,r),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,r){return mB(e,n,i,r)}isAttached(e){const n=e&&Ry(e);return!!(n&&n.isConnected)}}function m$(t){return!Iy()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?n$:p$}var zu;let ms=(zu=class{constructor(){oe(this,"x");oe(this,"y");oe(this,"active",!1);oe(this,"options");oe(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Vl(this.x)&&Vl(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const r={};return e.forEach(s=>{r[s]=i[s]&&i[s].active()?i[s]._to:this[s]}),r}},oe(zu,"defaults",{}),oe(zu,"defaultRoutes"),zu);function g$(t,e){const n=t.options.ticks,i=y$(t),r=Math.min(n.maxTicksLimit||i,i),s=n.major.enabled?x$(e):[],o=s.length,a=s[0],l=s[o-1],c=[];if(o>r)return b$(e,c,s,o/r),c;const d=v$(s,e,r);if(o>0){let f,p;const g=o>1?Math.round((l-a)/(o-1)):null;for(ru(e,c,d,Ue(g)?0:a-g,a),f=0,p=o-1;f<p;f++)ru(e,c,d,s[f],s[f+1]);return ru(e,c,d,l,Ue(g)?e.length:l+g),c}return ru(e,c,d),c}function y$(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),r=t._maxLength/n;return Math.floor(Math.min(i,r))}function v$(t,e,n){const i=_$(t),r=e.length/n;if(!i)return Math.max(r,1);const s=fF(i);for(let o=0,a=s.length-1;o<a;o++){const l=s[o];if(l>r)return l}return Math.max(r,1)}function x$(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function b$(t,e,n,i){let r=0,s=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===s&&(e.push(t[o]),r++,s=n[r*i])}function ru(t,e,n,i,r){const s=pe(i,0),o=Math.min(pe(r,t.length),t.length);let a=0,l,c,d;for(n=Math.ceil(n),r&&(l=r-i,n=l/Math.floor(l/n)),d=s;d<0;)a++,d=Math.round(s+a*n);for(c=Math.max(s,0);c<o;c++)c===d&&(e.push(t[c]),a++,d=Math.round(s+a*n))}function _$(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const w$=t=>t==="left"?"right":t==="right"?"left":t,Z5=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,e_=(t,e)=>Math.min(e||t,t);function t_(t,e){const n=[],i=t.length/e,r=t.length;let s=0;for(;s<r;s+=i)n.push(t[Math.floor(s)]);return n}function k$(t,e,n){const i=t.ticks.length,r=Math.min(e,i-1),s=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(r),c;if(!(n&&(i===1?c=Math.max(l-s,o-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(r-1))/2,l+=r<e?c:-c,l<s-a||l>o+a)))return l}function S$(t,e){ke(t,n=>{const i=n.gc,r=i.length/2;let s;if(r>e){for(s=0;s<r;++s)delete n.data[i[s]];i.splice(0,r)}})}function ua(t){return t.drawTicks?t.tickLength:0}function n_(t,e){if(!t.display)return 0;const n=Mt(t.font,e),i=En(t.padding);return(at(t.text)?t.text.length:1)*n.lineHeight+i.height}function T$(t,e){return ps(t,{scale:e,type:"scale"})}function E$(t,e,n){return ps(t,{tick:n,index:e,type:"tick"})}function C$(t,e,n){let i=Sy(t);return(n&&e!=="right"||!n&&e==="right")&&(i=w$(i)),i}function P$(t,e,n,i){const{top:r,left:s,bottom:o,right:a,chart:l}=t,{chartArea:c,scales:d}=l;let f=0,p,g,y;const x=o-r,w=a-s;if(t.isHorizontal()){if(g=jt(i,s,a),be(n)){const _=Object.keys(n)[0],b=n[_];y=d[_].getPixelForValue(b)+x-e}else n==="center"?y=(c.bottom+c.top)/2+x-e:y=Z5(t,n,e);p=a-s}else{if(be(n)){const _=Object.keys(n)[0],b=n[_];g=d[_].getPixelForValue(b)-w+e}else n==="center"?g=(c.left+c.right)/2-w+e:g=Z5(t,n,e);y=jt(i,o,r),f=n==="left"?-Mn:Mn}return{titleX:g,titleY:y,maxWidth:p,rotation:f}}class Do extends ms{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:r}=this;return e=Fn(e,Number.POSITIVE_INFINITY),n=Fn(n,Number.NEGATIVE_INFINITY),i=Fn(i,Number.POSITIVE_INFINITY),r=Fn(r,Number.NEGATIVE_INFINITY),{min:Fn(e,i),max:Fn(n,r),minDefined:Tn(e),maxDefined:Tn(n)}}getMinMax(e){let{min:n,max:i,minDefined:r,maxDefined:s}=this.getUserBounds(),o;if(r&&s)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),r||(n=Math.min(n,o.min)),s||(i=Math.max(i,o.max));return n=s&&n>i?i:n,i=r&&n>i?n:i,{min:Fn(n,Fn(i,n)),max:Fn(i,Fn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Ae(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:r,grace:s,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=GF(this,s,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?t_(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=g$(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Ae(this.options.afterUpdate,[this])}beforeSetDimensions(){Ae(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Ae(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Ae(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Ae(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,r,s;for(i=0,r=e.length;i<r;i++)s=e[i],s.label=Ae(n.callback,[s.value,i,e],this)}afterTickToLabelConversion(){Ae(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Ae(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=e_(this.ticks.length,e.ticks.maxTicksLimit),r=n.minRotation||0,s=n.maxRotation;let o=r,a,l,c;if(!this._isVisible()||!n.display||r>=s||i<=1||!this.isHorizontal()){this.labelRotation=r;return}const d=this._getLabelSizes(),f=d.widest.width,p=d.highest.height,g=bn(this.chart.width-f,0,this.maxWidth);a=e.offset?this.maxWidth/i:g/(i-1),f+6>a&&(a=g/(i-(e.offset?.5:1)),l=this.maxHeight-ua(e.grid)-n.padding-n_(e.title,this.chart.options.font),c=Math.sqrt(f*f+p*p),o=gF(Math.min(Math.asin(bn((d.highest.height+6)/a,-1,1)),Math.asin(bn(l/c,-1,1))-Math.asin(bn(p/c,-1,1)))),o=Math.max(r,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){Ae(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Ae(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:s}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=n_(r,n.options.font);if(a?(e.width=this.maxWidth,e.height=ua(s)+l):(e.height=this.maxHeight,e.width=ua(s)+l),i.display&&this.ticks.length){const{first:c,last:d,widest:f,highest:p}=this._getLabelSizes(),g=i.padding*2,y=Hr(this.labelRotation),x=Math.cos(y),w=Math.sin(y);if(a){const _=i.mirror?0:w*f.width+x*p.height;e.height=Math.min(this.maxHeight,e.height+_+g)}else{const _=i.mirror?0:x*f.width+w*p.height;e.width=Math.min(this.maxWidth,e.width+_+g)}this._calculatePadding(c,d,w,x)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,r){const{ticks:{align:s,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,g=0;l?c?(p=r*e.width,g=i*n.height):(p=i*e.height,g=r*n.width):s==="start"?g=n.width:s==="end"?p=e.width:s!=="inner"&&(p=e.width/2,g=n.width/2),this.paddingLeft=Math.max((p-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((g-f+o)*this.width/(this.width-f),0)}else{let d=n.height/2,f=e.height/2;s==="start"?(d=0,f=e.height):s==="end"&&(d=n.height,f=0),this.paddingTop=d+o,this.paddingBottom=f+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Ae(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)Ue(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=t_(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:r,_longestTextCache:s}=this,o=[],a=[],l=Math.floor(n/e_(n,i));let c=0,d=0,f,p,g,y,x,w,_,b,k,A,M;for(f=0;f<n;f+=l){if(y=e[f].label,x=this._resolveTickFontOptions(f),r.font=w=x.string,_=s[w]=s[w]||{data:{},gc:[]},b=x.lineHeight,k=A=0,!Ue(y)&&!at(y))k=R5(r,_.data,_.gc,k,y),A=b;else if(at(y))for(p=0,g=y.length;p<g;++p)M=y[p],!Ue(M)&&!at(M)&&(k=R5(r,_.data,_.gc,k,M),A+=b);o.push(k),a.push(A),c=Math.max(k,c),d=Math.max(A,d)}S$(s,n);const L=o.indexOf(c),E=a.indexOf(d),S=C=>({width:o[C]||0,height:a[C]||0});return{first:S(0),last:S(n-1),widest:S(L),highest:S(E),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return xF(this._alignToPixels?jr(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=E$(this.getContext(),e,i))}return this.$context||(this.$context=T$(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Hr(this.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,a=s?s.widest.width+o:0,l=s?s.highest.height+o:0;return this.isHorizontal()?l*i>a*r?a/i:l/r:l*r<a*i?l/i:a/r}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,r=this.options,{grid:s,position:o,border:a}=r,l=s.offset,c=this.isHorizontal(),f=this.ticks.length+(l?1:0),p=ua(s),g=[],y=a.setContext(this.getContext()),x=y.display?y.width:0,w=x/2,_=function(ne){return jr(i,ne,x)};let b,k,A,M,L,E,S,C,j,R,D,I;if(o==="top")b=_(this.bottom),E=this.bottom-p,C=b-w,R=_(e.top)+w,I=e.bottom;else if(o==="bottom")b=_(this.top),R=e.top,I=_(e.bottom)-w,E=b+w,C=this.top+p;else if(o==="left")b=_(this.right),L=this.right-p,S=b-w,j=_(e.left)+w,D=e.right;else if(o==="right")b=_(this.left),j=e.left,D=_(e.right)-w,L=b+w,S=this.left+p;else if(n==="x"){if(o==="center")b=_((e.top+e.bottom)/2+.5);else if(be(o)){const ne=Object.keys(o)[0],me=o[ne];b=_(this.chart.scales[ne].getPixelForValue(me))}R=e.top,I=e.bottom,E=b+w,C=E+p}else if(n==="y"){if(o==="center")b=_((e.left+e.right)/2);else if(be(o)){const ne=Object.keys(o)[0],me=o[ne];b=_(this.chart.scales[ne].getPixelForValue(me))}L=b-w,S=L-p,j=e.left,D=e.right}const re=pe(r.ticks.maxTicksLimit,f),ae=Math.max(1,Math.ceil(f/re));for(k=0;k<f;k+=ae){const ne=this.getContext(k),me=s.setContext(ne),U=a.setContext(ne),q=me.lineWidth,Y=me.color,J=U.dash||[],se=U.dashOffset,_e=me.tickWidth,Qe=me.tickColor,rt=me.tickBorderDash||[],Ve=me.tickBorderDashOffset;A=k$(this,k,l),A!==void 0&&(M=jr(i,A,q),c?L=S=j=D=M:E=C=R=I=M,g.push({tx1:L,ty1:E,tx2:S,ty2:C,x1:j,y1:R,x2:D,y2:I,width:q,color:Y,borderDash:J,borderDashOffset:se,tickWidth:_e,tickColor:Qe,tickBorderDash:rt,tickBorderDashOffset:Ve}))}return this._ticksLength=f,this._borderValue=b,g}_computeLabelItems(e){const n=this.axis,i=this.options,{position:r,ticks:s}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:d,mirror:f}=s,p=ua(i.grid),g=p+d,y=f?-d:g,x=-Hr(this.labelRotation),w=[];let _,b,k,A,M,L,E,S,C,j,R,D,I="middle";if(r==="top")L=this.bottom-y,E=this._getXAxisLabelAlignment();else if(r==="bottom")L=this.top+y,E=this._getXAxisLabelAlignment();else if(r==="left"){const ae=this._getYAxisLabelAlignment(p);E=ae.textAlign,M=ae.x}else if(r==="right"){const ae=this._getYAxisLabelAlignment(p);E=ae.textAlign,M=ae.x}else if(n==="x"){if(r==="center")L=(e.top+e.bottom)/2+g;else if(be(r)){const ae=Object.keys(r)[0],ne=r[ae];L=this.chart.scales[ae].getPixelForValue(ne)+g}E=this._getXAxisLabelAlignment()}else if(n==="y"){if(r==="center")M=(e.left+e.right)/2-g;else if(be(r)){const ae=Object.keys(r)[0],ne=r[ae];M=this.chart.scales[ae].getPixelForValue(ne)}E=this._getYAxisLabelAlignment(p).textAlign}n==="y"&&(l==="start"?I="top":l==="end"&&(I="bottom"));const re=this._getLabelSizes();for(_=0,b=a.length;_<b;++_){k=a[_],A=k.label;const ae=s.setContext(this.getContext(_));S=this.getPixelForTick(_)+s.labelOffset,C=this._resolveTickFontOptions(_),j=C.lineHeight,R=at(A)?A.length:1;const ne=R/2,me=ae.color,U=ae.textStrokeColor,q=ae.textStrokeWidth;let Y=E;o?(M=S,E==="inner"&&(_===b-1?Y=this.options.reverse?"left":"right":_===0?Y=this.options.reverse?"right":"left":Y="center"),r==="top"?c==="near"||x!==0?D=-R*j+j/2:c==="center"?D=-re.highest.height/2-ne*j+j:D=-re.highest.height+j/2:c==="near"||x!==0?D=j/2:c==="center"?D=re.highest.height/2-ne*j:D=re.highest.height-R*j,f&&(D*=-1),x!==0&&!ae.showLabelBackdrop&&(M+=j/2*Math.sin(x))):(L=S,D=(1-R)*j/2);let J;if(ae.showLabelBackdrop){const se=En(ae.backdropPadding),_e=re.heights[_],Qe=re.widths[_];let rt=D-se.top,Ve=0-se.left;switch(I){case"middle":rt-=_e/2;break;case"bottom":rt-=_e;break}switch(E){case"center":Ve-=Qe/2;break;case"right":Ve-=Qe;break;case"inner":_===b-1?Ve-=Qe:_>0&&(Ve-=Qe/2);break}J={left:Ve,top:rt,width:Qe+se.width,height:_e+se.height,color:ae.backdropColor}}w.push({label:A,font:C,textOffset:D,options:{rotation:x,color:me,strokeColor:U,strokeWidth:q,textAlign:Y,textBaseline:I,translation:[M,L],backdrop:J}})}return w}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Hr(this.labelRotation))return e==="top"?"left":"right";let r="center";return n.align==="start"?r="left":n.align==="end"?r="right":n.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:r,padding:s}}=this.options,o=this._getLabelSizes(),a=e+s,l=o.widest.width;let c,d;return n==="left"?r?(d=this.right+s,i==="near"?c="left":i==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-a,i==="near"?c="right":i==="center"?(c="center",d-=l/2):(c="left",d=this.left)):n==="right"?r?(d=this.left+s,i==="near"?c="right":i==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+a,i==="near"?c="left":i==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:r,width:s,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,r,s,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const r=this.ticks.findIndex(s=>s.value===e);return r>=0?n.setContext(this.getContext(r)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const a=(l,c,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(s=0,o=r.length;s<o;++s){const l=r[s];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:r}}=this,s=i.setContext(this.getContext()),o=i.display?s.width:0;if(!o)return;const a=r.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,f,p;this.isHorizontal()?(c=jr(e,this.left,o)-o/2,d=jr(e,this.right,a)+a/2,f=p=l):(f=jr(e,this.top,o)-o/2,p=jr(e,this.bottom,a)+a/2,c=d=l),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(c,f),n.lineTo(d,p),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,r=this._computeLabelArea();r&&Ey(i,r);const s=this.getLabelItems(e);for(const o of s){const a=o.options,l=o.font,c=o.label,d=o.textOffset;Ol(i,c,0,d,l,a)}r&&Cy(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:r}}=this;if(!i.display)return;const s=Mt(i.font),o=En(i.padding),a=i.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||be(n)?(l+=o.bottom,at(i.text)&&(l+=s.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:d,maxWidth:f,rotation:p}=P$(this,l,n,a);Ol(e,i.text,0,0,s,{color:i.color,maxWidth:f,rotation:p,textAlign:C$(a,n,r),textBaseline:"middle",translation:[c,d]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=pe(e.grid&&e.grid.z,-1),r=pe(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Do.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:i,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",r=[];let s,o;for(s=0,o=n.length;s<o;++s){const a=n[s];a[i]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return Mt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class su{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;I$(n)&&(i=this.register(n));const r=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in r||(r[s]=e,j$(e,o,i),this.override&&qe.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,r=this.scope;i in n&&delete n[i],r&&i in qe[r]&&(delete qe[r][i],this.override&&delete rs[i])}}function j$(t,e,n){const i=Dl(Object.create(null),[n?qe.get(n):{},qe.get(e),t.defaults]);qe.set(e,i),t.defaultRoutes&&A$(e,t.defaultRoutes),t.descriptors&&qe.describe(e,t.descriptors)}function A$(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),r=i.pop(),s=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");qe.route(s,r,l,a)})}function I$(t){return"id"in t&&"defaults"in t}class R${constructor(){this.controllers=new su(Qa,"datasets",!0),this.elements=new su(ms,"elements"),this.plugins=new su(Object,"plugins"),this.scales=new su(Do,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(r=>{const s=i||this._getRegistryForType(r);i||s.isForType(r)||s===this.plugins&&r.id?this._exec(e,s,r):ke(r,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const r=wy(e);Ae(i["before"+r],[],i),n[e](i),Ae(i["after"+r],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const r=n.get(e);if(r===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return r}}var Un=new R$;class M${constructor(){this._init=[]}notify(e,n,i,r){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=r?this._descriptors(e).filter(r):this._descriptors(e),o=this._notify(s,e,n,i);return n==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,r){r=r||{};for(const s of e){const o=s.plugin,a=o[i],l=[n,r,s.options];if(Ae(a,l,o)===!1&&r.cancelable)return!1}return!0}invalidate(){Ue(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,r=pe(i.options&&i.options.plugins,{}),s=D$(i);return r===!1&&!n?[]:L$(e,s,r,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,r=(s,o)=>s.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(r(n,i),e,"stop"),this._notify(r(i,n),e,"start")}}function D$(t){const e={},n=[],i=Object.keys(Un.plugins.items);for(let s=0;s<i.length;s++)n.push(Un.getPlugin(i[s]));const r=t.plugins||[];for(let s=0;s<r.length;s++){const o=r[s];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function V$(t,e){return!e&&t===!1?null:t===!0?{}:t}function L$(t,{plugins:e,localIds:n},i,r){const s=[],o=t.getContext();for(const a of e){const l=a.id,c=V$(i[l],r);c!==null&&s.push({plugin:a,options:O$(t.config,{plugin:a,local:n[l]},c,o)})}return s}function O$(t,{plugin:e,local:n},i,r){const s=t.pluginScopeKeys(e),o=t.getOptionScopes(i,s);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function d0(t,e){const n=qe.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function N$(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function z$(t,e){return t===e?"_index_":"_value_"}function i_(t){if(t==="x"||t==="y"||t==="r")return t}function F$(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function f0(t,...e){if(i_(t))return t;for(const n of e){const i=n.axis||F$(n.position)||t.length>1&&i_(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function r_(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function B$(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return r_(t,"x",n[0])||r_(t,"y",n[0])}return{}}function $$(t,e){const n=rs[t.type]||{scales:{}},i=e.scales||{},r=d0(t.type,e),s=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!be(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=f0(o,a,B$(o,t),qe.scales[a.type]),c=z$(l,r),d=n.scales||{};s[o]=Ha(Object.create(null),[{axis:l},a,d[l],d[c]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||d0(a,e),d=(rs[a]||{}).scales||{};Object.keys(d).forEach(f=>{const p=N$(f,l),g=o[p+"AxisID"]||p;s[g]=s[g]||Object.create(null),Ha(s[g],[{axis:p},i[g],d[f]])})}),Object.keys(s).forEach(o=>{const a=s[o];Ha(a,[qe.scales[a.type],qe.scale])}),s}function S6(t){const e=t.options||(t.options={});e.plugins=pe(e.plugins,{}),e.scales=$$(t,e)}function T6(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function U$(t){return t=t||{},t.data=T6(t.data),S6(t),t}const s_=new Map,E6=new Set;function ou(t,e){let n=s_.get(t);return n||(n=e(),s_.set(t,n),E6.add(n)),n}const ha=(t,e,n)=>{const i=gd(e,n);i!==void 0&&t.add(i)};class H${constructor(e){this._config=U$(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=T6(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),S6(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return ou(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return ou(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return ou(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return ou(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let r=i.get(e);return(!r||n)&&(r=new Map,i.set(e,r)),r}getOptionScopes(e,n,i){const{options:r,type:s}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const l=new Set;n.forEach(d=>{e&&(l.add(e),d.forEach(f=>ha(l,e,f))),d.forEach(f=>ha(l,r,f)),d.forEach(f=>ha(l,rs[s]||{},f)),d.forEach(f=>ha(l,qe,f)),d.forEach(f=>ha(l,c0,f))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),E6.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,rs[n]||{},qe.datasets[n]||{},{type:n},qe,c0]}resolveNamedOptions(e,n,i,r=[""]){const s={$shared:!0},{resolver:o,subPrefixes:a}=o_(this._resolverCache,e,r);let l=o;if(K$(o,n)){s.$shared=!1,i=mr(i)?i():i;const c=this.createResolver(e,i,a);l=wo(o,i,c)}for(const c of n)s[c]=l[c];return s}createResolver(e,n,i=[""],r){const{resolver:s}=o_(this._resolverCache,e,i);return be(n)?wo(s,n,void 0,r):s}}function o_(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const r=n.join();let s=i.get(r);return s||(s={resolver:Py(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(r,s)),s}const W$=t=>be(t)&&Object.getOwnPropertyNames(t).some(e=>mr(t[e]));function K$(t,e){const{isScriptable:n,isIndexable:i}=c6(t);for(const r of e){const s=n(r),o=i(r),a=(o||s)&&t[r];if(s&&(mr(a)||W$(a))||o&&at(a))return!0}return!1}var G$="4.4.6";const q$=["top","bottom","left","right","chartArea"];function a_(t,e){return t==="top"||t==="bottom"||q$.indexOf(t)===-1&&e==="x"}function l_(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function c_(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Ae(n&&n.onComplete,[t],e)}function Q$(t){const e=t.chart,n=e.options.animation;Ae(n&&n.onProgress,[t],e)}function C6(t){return Iy()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const dh={},u_=t=>{const e=C6(t);return Object.values(dh).filter(n=>n.canvas===e).pop()};function Y$(t,e,n){const i=Object.keys(t);for(const r of i){const s=+r;if(s>=e){const o=t[r];delete t[r],(n>0||s>e)&&(t[s+n]=o)}}}function X$(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function au(t,e,n){return t.options.clip?t[n]:e[n]}function J$(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:au(n,e,"left"),right:au(n,e,"right"),top:au(i,e,"top"),bottom:au(i,e,"bottom")}:e}var Ri;let _f=(Ri=class{static register(...e){Un.add(...e),h_()}static unregister(...e){Un.remove(...e),h_()}constructor(e,n){const i=this.config=new H$(n),r=C6(e),s=u_(r);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||m$(r)),this.platform.updateConfig(i);const a=this.platform.acquireContext(r,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,d=l&&l.width;if(this.id=rF(),this.ctx=a,this.canvas=l,this.width=d,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new M$,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=SF(f=>this.update(f),o.resizeDelay||0),this._dataChanges=[],dh[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}si.listen(this,"complete",c_),si.listen(this,"progress",Q$),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:r,_aspectRatio:s}=this;return Ue(e)?n&&s?s:r?i/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Un}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():L5(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return M5(this.canvas,this.ctx),this}stop(){return si.stop(this),this}resize(e,n){si.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,r=this.canvas,s=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(r,e,n,s),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,L5(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Ae(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};ke(n,(i,r)=>{i.id=r})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,r=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let s=[];n&&(s=s.concat(Object.keys(n).map(o=>{const a=n[o],l=f0(o,a),c=l==="r",d=l==="x";return{options:a,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),ke(s,o=>{const a=o.options,l=a.id,c=f0(l,a),d=pe(a.type,o.dtype);(a.position===void 0||a_(a.position,c)!==a_(o.dposition))&&(a.position=o.dposition),r[l]=!0;let f=null;if(l in i&&i[l].type===d)f=i[l];else{const p=Un.getScale(d);f=new p({id:l,type:d,ctx:this.ctx,chart:this}),i[f.id]=f}f.init(a,e)}),ke(r,(o,a)=>{o||delete i[a]}),ke(i,o=>{_n.configure(this,o,o.options),_n.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((r,s)=>r.index-s.index),i>n){for(let r=n;r<i;++r)this._destroyDatasetMeta(r);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(l_("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,r)=>{n.filter(s=>s===i._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,r;for(this._removeUnreferencedMetasets(),i=0,r=n.length;i<r;i++){const s=n[i];let o=this.getDatasetMeta(i);const a=s.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=s.indexAxis||d0(a,this.options),o.order=s.order||0,o.index=i,o.label=""+s.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=Un.getController(a),{datasetElementType:c,dataElementType:d}=qe.datasets[a];Object.assign(l,{dataElementType:Un.getElement(d),datasetElementType:c&&Un.getElement(c)}),o.controller=new l(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){ke(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:f}=this.getDatasetMeta(c),p=!r&&s.indexOf(f)===-1;f.buildOrUpdateElements(p),o=Math.max(+f.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),r||ke(s,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(l_("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){ke(this.scales,e=>{_n.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!k5(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:r,count:s}of n){const o=i==="_removeElements"?-s:s;Y$(e,r,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=s=>new Set(e.filter(o=>o[0]===s).map((o,a)=>a+","+o.splice(1).join(","))),r=i(0);for(let s=1;s<n;s++)if(!k5(r,i(s)))return;return Array.from(r).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;_n.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],ke(this.boxes,r=>{i&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,s)=>{r._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,mr(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),r={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(i.controller._update(n),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(si.has(this)?this.attached&&!si.running(this)&&si.start(this):(this.draw(),c_({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let r,s;for(r=0,s=n.length;r<s;++r){const o=n[r];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,r=!i.disabled,s=J$(e,this.chartArea),o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(r&&Ey(n,{left:i.left===!1?0:s.left-i.left,right:i.right===!1?this.width:s.right+i.right,top:i.top===!1?0:s.top-i.top,bottom:i.bottom===!1?this.height:s.bottom+i.bottom}),e.controller.draw(),r&&Cy(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Ll(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,r){const s=qB.modes[n];return typeof s=="function"?s(this,e,i,r):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let r=i.filter(s=>s&&s._dataset===n).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(r)),r}getContext(){return this.$context||(this.$context=ps(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const r=i?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,r);yd(n)?(s.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(s,{visible:i}),this.update(a=>a.datasetIndex===e?r:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),si.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),M5(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete dh[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(s,o)=>{n.addEventListener(this,s,o),e[s]=o},r=(s,o,a)=>{s.offsetX=o,s.offsetY=a,this._eventHandler(s)};ke(this.options.events,s=>i(s,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},r=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},s=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{r("attach",a),this.attached=!0,this.resize(),i("resize",s),i("detach",o)};o=()=>{this.attached=!1,r("resize",s),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){ke(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},ke(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const r=i?"set":"remove";let s,o,a,l;for(n==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+r+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[r+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:s,index:o})=>{const a=this.getDatasetMeta(s);if(!a)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:a.data[o],index:o}});!pd(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const r=this.options.hover,s=(l,c)=>l.filter(d=>!c.some(f=>d.datasetIndex===f.datasetIndex&&d.index===f.index)),o=s(n,e),a=i?e:s(e,n);o.length&&this.updateHoverStyle(o,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},r=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,r)===!1)return;const s=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,r),(s||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:r=[],options:s}=this,o=n,a=this._getActiveElements(e,r,i,o),l=uF(e),c=X$(e,this._lastEvent,i,l);i&&(this._lastEvent=null,Ae(s.onHover,[e,a,this],this),l&&Ae(s.onClick,[e,a,this],this));const d=!pd(a,r);return(d||n)&&(this._active=a,this._updateHoverStyles(a,r,n)),this._lastEvent=c,d}_getActiveElements(e,n,i,r){if(e.type==="mouseout")return[];if(!i)return n;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,r)}},oe(Ri,"defaults",qe),oe(Ri,"instances",dh),oe(Ri,"overrides",rs),oe(Ri,"registry",Un),oe(Ri,"version",G$),oe(Ri,"getChart",u_),Ri);function h_(){return ke(_f.instances,t=>t._plugins.invalidate())}function P6(t,e,n=e){t.lineCap=pe(n.borderCapStyle,e.borderCapStyle),t.setLineDash(pe(n.borderDash,e.borderDash)),t.lineDashOffset=pe(n.borderDashOffset,e.borderDashOffset),t.lineJoin=pe(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=pe(n.borderWidth,e.borderWidth),t.strokeStyle=pe(n.borderColor,e.borderColor)}function Z$(t,e,n){t.lineTo(n.x,n.y)}function eU(t){return t.stepped?OF:t.tension||t.cubicInterpolationMode==="monotone"?NF:Z$}function j6(t,e,n={}){const i=t.length,{start:r=0,end:s=i-1}=n,{start:o,end:a}=e,l=Math.max(r,o),c=Math.min(s,a),d=r<o&&s<o||r>a&&s>a;return{count:i,start:l,loop:e.loop,ilen:c<l&&!d?i+c-l:c-l}}function tU(t,e,n,i){const{points:r,options:s}=e,{count:o,start:a,loop:l,ilen:c}=j6(r,n,i),d=eU(s);let{move:f=!0,reverse:p}=i||{},g,y,x;for(g=0;g<=c;++g)y=r[(a+(p?c-g:g))%o],!y.skip&&(f?(t.moveTo(y.x,y.y),f=!1):d(t,x,y,p,s.stepped),x=y);return l&&(y=r[(a+(p?c:0))%o],d(t,x,y,p,s.stepped)),!!l}function nU(t,e,n,i){const r=e.points,{count:s,start:o,ilen:a}=j6(r,n,i),{move:l=!0,reverse:c}=i||{};let d=0,f=0,p,g,y,x,w,_;const b=A=>(o+(c?a-A:A))%s,k=()=>{x!==w&&(t.lineTo(d,w),t.lineTo(d,x),t.lineTo(d,_))};for(l&&(g=r[b(0)],t.moveTo(g.x,g.y)),p=0;p<=a;++p){if(g=r[b(p)],g.skip)continue;const A=g.x,M=g.y,L=A|0;L===y?(M<x?x=M:M>w&&(w=M),d=(f*d+A)/++f):(k(),t.lineTo(A,M),y=L,f=0,x=w=M),_=M}k()}function p0(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?nU:tU}function iU(t){return t.stepped?yB:t.tension||t.cubicInterpolationMode==="monotone"?vB:Nr}function rU(t,e,n,i){let r=e._path;r||(r=e._path=new Path2D,e.path(r,n,i)&&r.closePath()),P6(t,e.options),t.stroke(r)}function sU(t,e,n,i){const{segments:r,options:s}=e,o=p0(e);for(const a of r)P6(t,s,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const oU=typeof Path2D=="function";function aU(t,e,n,i){oU&&!e.options.segment?rU(t,e,n,i):sU(t,e,n,i)}class Ta extends ms{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const r=i.spanGaps?this._loop:this._fullLoop;cB(this._points,i,e,r,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=EB(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,r=e[n],s=this.points,o=kB(this,{property:n,start:r,end:r});if(!o.length)return;const a=[],l=iU(i);let c,d;for(c=0,d=o.length;c<d;++c){const{start:f,end:p}=o[c],g=s[f],y=s[p];if(g===y){a.push(g);continue}const x=Math.abs((r-g[n])/(y[n]-g[n])),w=l(g,y,x,i.stepped);w[n]=e[n],a.push(w)}return a.length===1?a[0]:a}pathSegment(e,n,i){return p0(this)(e,this,n,i)}path(e,n,i){const r=this.segments,s=p0(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of r)o&=s(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,r){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),aU(e,this,i,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}oe(Ta,"id","line"),oe(Ta,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),oe(Ta,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),oe(Ta,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function d_(t,e,n,i){const r=t.options,{[n]:s}=t.getProps([n],i);return Math.abs(e-s)<r.radius+r.hitRadius}class fh extends ms{constructor(n){super();oe(this,"parsed");oe(this,"skip");oe(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,r){const s=this.options,{x:o,y:a}=this.getProps(["x","y"],r);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,i){return d_(this,n,"x",i)}inYRange(n,i){return d_(this,n,"y",i)}getCenterPoint(n){const{x:i,y:r}=this.getProps(["x","y"],n);return{x:i,y:r}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const r=i&&n.borderWidth||0;return(i+r)*2}draw(n,i){const r=this.options;this.skip||r.radius<.1||!Ll(this,i,this.size(r)/2)||(n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.fillStyle=r.backgroundColor,u0(n,r,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}oe(fh,"id","point"),oe(fh,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),oe(fh,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const f_=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},lU=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class p_ extends ms{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Ae(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,r)=>e.sort(i,r,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,r=Mt(i.font),s=r.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=f_(i,s);let c,d;n.font=r.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(o,s,a,l)+10):(d=this.maxHeight,c=this._fitCols(o,r,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(d,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,r){const{ctx:s,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=r+a;let f=e;s.textAlign="left",s.textBaseline="middle";let p=-1,g=-d;return this.legendItems.forEach((y,x)=>{const w=i+n/2+s.measureText(y.text).width;(x===0||c[c.length-1]+w+2*a>o)&&(f+=d,c[c.length-(x>0?0:1)]=0,g+=d,p++),l[x]={left:0,top:g,row:p,width:w,height:r},c[c.length-1]+=w+a}),f}_fitCols(e,n,i,r){const{ctx:s,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=o-e;let f=a,p=0,g=0,y=0,x=0;return this.legendItems.forEach((w,_)=>{const{itemWidth:b,itemHeight:k}=cU(i,n,s,w,r);_>0&&g+k+2*a>d&&(f+=p+a,c.push({width:p,height:g}),y+=p+a,x++,p=g=0),l[_]={left:y,top:g,col:x,width:b,height:k},p=Math.max(p,b),g+=k+a}),f+=p,c.push({width:p,height:g}),f}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:r},rtl:s}}=this,o=to(s,this.left,this.width);if(this.isHorizontal()){let a=0,l=jt(i,this.left+r,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=jt(i,this.left+r,this.right-this.lineWidths[a])),c.top+=this.top+e+r,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+r}else{let a=0,l=jt(i,this.top+e+r,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=jt(i,this.top+e+r,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+r,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;Ey(e,this),this._draw(),Cy(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:r}=this,{align:s,labels:o}=e,a=qe.color,l=to(e.rtl,this.left,this.width),c=Mt(o.font),{padding:d}=o,f=c.size,p=f/2;let g;this.drawTitle(),r.textAlign=l.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=c.string;const{boxWidth:y,boxHeight:x,itemHeight:w}=f_(o,f),_=function(L,E,S){if(isNaN(y)||y<=0||isNaN(x)||x<0)return;r.save();const C=pe(S.lineWidth,1);if(r.fillStyle=pe(S.fillStyle,a),r.lineCap=pe(S.lineCap,"butt"),r.lineDashOffset=pe(S.lineDashOffset,0),r.lineJoin=pe(S.lineJoin,"miter"),r.lineWidth=C,r.strokeStyle=pe(S.strokeStyle,a),r.setLineDash(pe(S.lineDash,[])),o.usePointStyle){const j={radius:x*Math.SQRT2/2,pointStyle:S.pointStyle,rotation:S.rotation,borderWidth:C},R=l.xPlus(L,y/2),D=E+p;a6(r,j,R,D,o.pointStyleWidth&&y)}else{const j=E+Math.max((f-x)/2,0),R=l.leftForLtr(L,y),D=qa(S.borderRadius);r.beginPath(),Object.values(D).some(I=>I!==0)?h0(r,{x:R,y:j,w:y,h:x,radius:D}):r.rect(R,j,y,x),r.fill(),C!==0&&r.stroke()}r.restore()},b=function(L,E,S){Ol(r,S.text,L,E+w/2,c,{strikethrough:S.hidden,textAlign:l.textAlign(S.textAlign)})},k=this.isHorizontal(),A=this._computeTitleHeight();k?g={x:jt(s,this.left+d,this.right-i[0]),y:this.top+d+A,line:0}:g={x:this.left+d,y:jt(s,this.top+A+d,this.bottom-n[0].height),line:0},p6(this.ctx,e.textDirection);const M=w+d;this.legendItems.forEach((L,E)=>{r.strokeStyle=L.fontColor,r.fillStyle=L.fontColor;const S=r.measureText(L.text).width,C=l.textAlign(L.textAlign||(L.textAlign=o.textAlign)),j=y+p+S;let R=g.x,D=g.y;l.setWidth(this.width),k?E>0&&R+j+d>this.right&&(D=g.y+=M,g.line++,R=g.x=jt(s,this.left+d,this.right-i[g.line])):E>0&&D+M>this.bottom&&(R=g.x=R+n[g.line].width+d,g.line++,D=g.y=jt(s,this.top+A+d,this.bottom-n[g.line].height));const I=l.x(R);if(_(I,D,L),R=TF(C,R+y+p,k?R+j:this.right,e.rtl),b(l.x(R),D,L),k)g.x+=j+d;else if(typeof L.text!="string"){const re=c.lineHeight;g.y+=A6(L,re)+d}else g.y+=M}),m6(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=Mt(n.font),r=En(n.padding);if(!n.display)return;const s=to(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=i.size/2,c=r.top+l;let d,f=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),d=this.top+c,f=jt(e.align,f,this.right-p);else{const y=this.columnSizes.reduce((x,w)=>Math.max(x,w.height),0);d=c+jt(e.align,this.top,this.bottom-y-e.labels.padding-this._computeTitleHeight())}const g=jt(a,f,f+p);o.textAlign=s.textAlign(Sy(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,Ol(o,n.text,g,d,i)}_computeTitleHeight(){const e=this.options.title,n=Mt(e.font),i=En(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,r,s;if(ka(e,this.left,this.right)&&ka(n,this.top,this.bottom)){for(s=this.legendHitBoxes,i=0;i<s.length;++i)if(r=s[i],ka(e,r.left,r.left+r.width)&&ka(n,r.top,r.top+r.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!dU(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const r=this._hoveredItem,s=lU(r,i);r&&!s&&Ae(n.onLeave,[e,r,this],this),this._hoveredItem=i,i&&!s&&Ae(n.onHover,[e,i,this],this)}else i&&Ae(n.onClick,[e,i,this],this)}}function cU(t,e,n,i,r){const s=uU(i,t,e,n),o=hU(r,i,e.lineHeight);return{itemWidth:s,itemHeight:o}}function uU(t,e,n,i){let r=t.text;return r&&typeof r!="string"&&(r=r.reduce((s,o)=>s.length>o.length?s:o)),e+n.size/2+i.measureText(r).width}function hU(t,e,n){let i=t;return typeof e.text!="string"&&(i=A6(e,n)),i}function A6(t,e){const n=t.text?t.text.length:0;return e*n}function dU(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var fU={id:"legend",_element:p_,start(t,e,n){const i=t.legend=new p_({ctx:t.ctx,options:n,chart:t});_n.configure(t,i,n),_n.addBox(t,i)},stop(t){_n.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;_n.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,r=n.chart;r.isDatasetVisible(i)?(r.hide(i),e.hidden=!0):(r.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:r,color:s,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),d=En(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:s,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:r||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};let I6=class extends ms{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const r=at(i.text)?i.text.length:1;this._padding=En(i.padding);const s=r*Mt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:r,right:s,options:o}=this,a=o.align;let l=0,c,d,f;return this.isHorizontal()?(d=jt(a,i,s),f=n+e,c=s-i):(o.position==="left"?(d=i+e,f=jt(a,r,n),l=ht*-.5):(d=s-e,f=jt(a,n,r),l=ht*.5),c=r-n),{titleX:d,titleY:f,maxWidth:c,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=Mt(n.font),s=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(s);Ol(e,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:Sy(n.align),textBaseline:"middle",translation:[o,a]})}};function pU(t,e){const n=new I6({ctx:t.ctx,options:e,chart:t});_n.configure(t,n,e),_n.addBox(t,n),t.titleBlock=n}var mU={id:"title",_element:I6,start(t,e,n){pU(t,n)},stop(t){const e=t.titleBlock;_n.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;_n.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ea={average(t){if(!t.length)return!1;let e,n,i=new Set,r=0,s=0;for(e=0,n=t.length;e<n;++e){const a=t[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();i.add(l.x),r+=l.y,++s}}return s===0||i.size===0?!1:{x:[...i].reduce((a,l)=>a+l)/i.size,y:r/s}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,r=Number.POSITIVE_INFINITY,s,o,a;for(s=0,o=t.length;s<o;++s){const l=t[s].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=l0(e,c);d<r&&(r=d,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function Bn(t,e){return e&&(at(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function oi(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function gU(t,e){const{element:n,datasetIndex:i,index:r}=e,s=t.getDatasetMeta(i).controller,{label:o,value:a}=s.getLabelAndValue(r);return{chart:t,label:o,parsed:s.getParsed(r),raw:t.data.datasets[i].data[r],formattedValue:a,dataset:s.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function m_(t,e){const n=t.chart.ctx,{body:i,footer:r,title:s}=t,{boxWidth:o,boxHeight:a}=e,l=Mt(e.bodyFont),c=Mt(e.titleFont),d=Mt(e.footerFont),f=s.length,p=r.length,g=i.length,y=En(e.padding);let x=y.height,w=0,_=i.reduce((A,M)=>A+M.before.length+M.lines.length+M.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,f&&(x+=f*c.lineHeight+(f-1)*e.titleSpacing+e.titleMarginBottom),_){const A=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;x+=g*A+(_-g)*l.lineHeight+(_-1)*e.bodySpacing}p&&(x+=e.footerMarginTop+p*d.lineHeight+(p-1)*e.footerSpacing);let b=0;const k=function(A){w=Math.max(w,n.measureText(A).width+b)};return n.save(),n.font=c.string,ke(t.title,k),n.font=l.string,ke(t.beforeBody.concat(t.afterBody),k),b=e.displayColors?o+2+e.boxPadding:0,ke(i,A=>{ke(A.before,k),ke(A.lines,k),ke(A.after,k)}),b=0,n.font=d.string,ke(t.footer,k),n.restore(),w+=y.width,{width:w,height:x}}function yU(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function vU(t,e,n,i){const{x:r,width:s}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&r+s+o>e.width||t==="right"&&r-s-o<0)return!0}function xU(t,e,n,i){const{x:r,width:s}=n,{width:o,chartArea:{left:a,right:l}}=t;let c="center";return i==="center"?c=r<=(a+l)/2?"left":"right":r<=s/2?c="left":r>=o-s/2&&(c="right"),vU(c,t,e,n)&&(c="center"),c}function g_(t,e,n){const i=n.yAlign||e.yAlign||yU(t,n);return{xAlign:n.xAlign||e.xAlign||xU(t,e,n,i),yAlign:i}}function bU(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function _U(t,e,n){let{y:i,height:r}=t;return e==="top"?i+=n:e==="bottom"?i-=r+n:i-=r/2,i}function y_(t,e,n,i){const{caretSize:r,caretPadding:s,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,c=r+s,{topLeft:d,topRight:f,bottomLeft:p,bottomRight:g}=qa(o);let y=bU(e,a);const x=_U(e,l,c);return l==="center"?a==="left"?y+=c:a==="right"&&(y-=c):a==="left"?y-=Math.max(d,p)+r:a==="right"&&(y+=Math.max(f,g)+r),{x:bn(y,0,i.width-e.width),y:bn(x,0,i.height-e.height)}}function lu(t,e,n){const i=En(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function v_(t){return Bn([],oi(t))}function wU(t,e,n){return ps(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function x_(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const R6={beforeTitle:ri,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:ri,beforeBody:ri,beforeLabel:ri,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return Ue(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:ri,afterBody:ri,beforeFooter:ri,footer:ri,afterFooter:ri};function Ut(t,e,n,i){const r=t[e].call(n,i);return typeof r>"u"?R6[e].call(n,i):r}class m0 extends ms{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&n.options.animation&&i.animations,s=new y6(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=wU(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,r=Ut(i,"beforeTitle",this,e),s=Ut(i,"title",this,e),o=Ut(i,"afterTitle",this,e);let a=[];return a=Bn(a,oi(r)),a=Bn(a,oi(s)),a=Bn(a,oi(o)),a}getBeforeBody(e,n){return v_(Ut(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,r=[];return ke(e,s=>{const o={before:[],lines:[],after:[]},a=x_(i,s);Bn(o.before,oi(Ut(a,"beforeLabel",this,s))),Bn(o.lines,Ut(a,"label",this,s)),Bn(o.after,oi(Ut(a,"afterLabel",this,s))),r.push(o)}),r}getAfterBody(e,n){return v_(Ut(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,r=Ut(i,"beforeFooter",this,e),s=Ut(i,"footer",this,e),o=Ut(i,"afterFooter",this,e);let a=[];return a=Bn(a,oi(r)),a=Bn(a,oi(s)),a=Bn(a,oi(o)),a}_createItems(e){const n=this._active,i=this.chart.data,r=[],s=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(gU(this.chart,n[l]));return e.filter&&(a=a.filter((d,f,p)=>e.filter(d,f,p,i))),e.itemSort&&(a=a.sort((d,f)=>e.itemSort(d,f,i))),ke(a,d=>{const f=x_(e.callbacks,d);r.push(Ut(f,"labelColor",this,d)),s.push(Ut(f,"labelPointStyle",this,d)),o.push(Ut(f,"labelTextColor",this,d))}),this.labelColors=r,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),r=this._active;let s,o=[];if(!r.length)this.opacity!==0&&(s={opacity:0});else{const a=Ea[i.position].call(this,r,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=m_(this,i),c=Object.assign({},a,l),d=g_(this.chart,i,c),f=y_(i,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,s={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,r){const s=this.getCaretPosition(e,i,r);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(e,n,i){const{xAlign:r,yAlign:s}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:f}=qa(a),{x:p,y:g}=e,{width:y,height:x}=n;let w,_,b,k,A,M;return s==="center"?(A=g+x/2,r==="left"?(w=p,_=w-o,k=A+o,M=A-o):(w=p+y,_=w+o,k=A-o,M=A+o),b=w):(r==="left"?_=p+Math.max(l,d)+o:r==="right"?_=p+y-Math.max(c,f)-o:_=this.caretX,s==="top"?(k=g,A=k-o,w=_-o,b=_+o):(k=g+x,A=k+o,w=_+o,b=_-o),M=k),{x1:w,x2:_,x3:b,y1:k,y2:A,y3:M}}drawTitle(e,n,i){const r=this.title,s=r.length;let o,a,l;if(s){const c=to(i.rtl,this.x,this.width);for(e.x=lu(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",o=Mt(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,l=0;l<s;++l)n.fillText(r[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===s&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,r,s){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=s,d=Mt(s.bodyFont),f=lu(this,"left",s),p=r.x(f),g=l<d.lineHeight?(d.lineHeight-l)/2:0,y=n.y+g;if(s.usePointStyle){const x={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},w=r.leftForLtr(p,c)+c/2,_=y+l/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,u0(e,x,w,_),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,u0(e,x,w,_)}else{e.lineWidth=be(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const x=r.leftForLtr(p,c),w=r.leftForLtr(r.xPlus(p,1),c-2),_=qa(o.borderRadius);Object.values(_).some(b=>b!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,h0(e,{x,y,w:c,h:l,radius:_}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),h0(e,{x:w,y:y+1,w:c-2,h:l-2,radius:_}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(x,y,c,l),e.strokeRect(x,y,c,l),e.fillStyle=o.backgroundColor,e.fillRect(w,y+1,c-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:r}=this,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:d}=i,f=Mt(i.bodyFont);let p=f.lineHeight,g=0;const y=to(i.rtl,this.x,this.width),x=function(S){n.fillText(S,y.x(e.x+g),e.y+p/2),e.y+=p+s},w=y.textAlign(o);let _,b,k,A,M,L,E;for(n.textAlign=o,n.textBaseline="middle",n.font=f.string,e.x=lu(this,w,i),n.fillStyle=i.bodyColor,ke(this.beforeBody,x),g=a&&w!=="right"?o==="center"?c/2+d:c+2+d:0,A=0,L=r.length;A<L;++A){for(_=r[A],b=this.labelTextColors[A],n.fillStyle=b,ke(_.before,x),k=_.lines,a&&k.length&&(this._drawColorBox(n,e,A,y,i),p=Math.max(f.lineHeight,l)),M=0,E=k.length;M<E;++M)x(k[M]),p=f.lineHeight;ke(_.after,x)}g=0,p=f.lineHeight,ke(this.afterBody,x),e.y-=s}drawFooter(e,n,i){const r=this.footer,s=r.length;let o,a;if(s){const l=to(i.rtl,this.x,this.width);for(e.x=lu(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",o=Mt(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<s;++a)n.fillText(r[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,r){const{xAlign:s,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:d}=i,{topLeft:f,topRight:p,bottomLeft:g,bottomRight:y}=qa(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(a+f,l),o==="top"&&this.drawCaret(e,n,i,r),n.lineTo(a+c-p,l),n.quadraticCurveTo(a+c,l,a+c,l+p),o==="center"&&s==="right"&&this.drawCaret(e,n,i,r),n.lineTo(a+c,l+d-y),n.quadraticCurveTo(a+c,l+d,a+c-y,l+d),o==="bottom"&&this.drawCaret(e,n,i,r),n.lineTo(a+g,l+d),n.quadraticCurveTo(a,l+d,a,l+d-g),o==="center"&&s==="left"&&this.drawCaret(e,n,i,r),n.lineTo(a,l+f),n.quadraticCurveTo(a,l,a+f,l),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,r=i&&i.x,s=i&&i.y;if(r||s){const o=Ea[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=m_(this,e),l=Object.assign({},o,this._size),c=g_(n,e,l),d=y_(e,l,c,n);(r._to!==d.x||s._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const r={width:this.width,height:this.height},s={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=En(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(s,e,r,n),p6(e,n.textDirection),s.y+=o.top,this.drawTitle(s,e,n),this.drawBody(s,e,n),this.drawFooter(s,e,n),m6(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,r=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),s=!pd(i,r),o=this._positionChanged(r,n);(s||o)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,s=this._active||[],o=this._getActiveElements(e,s,n,i),a=this._positionChanged(o,e),l=n||!pd(o,s)||a;return l&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,r){const s=this.options;if(e.type==="mouseout")return[];if(!r)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,s.mode,s,i);return s.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:r,options:s}=this,o=Ea[s.position].call(this,e,n);return o!==!1&&(i!==o.x||r!==o.y)}}oe(m0,"positioners",Ea);var kU={id:"tooltip",_element:m0,positioners:Ea,afterInit(t,e,n){n&&(t.tooltip=new m0({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:R6},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const SU=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function TU(t,e,n,i){const r=t.indexOf(e);if(r===-1)return SU(t,e,n,i);const s=t.lastIndexOf(e);return r!==s?n:r}const EU=(t,e)=>t===null?null:bn(Math.round(t),0,e);function b_(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class g0 extends Do{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:r,label:s}of n)i[r]===s&&i.splice(r,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(Ue(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:TU(i,e,pe(n,e),this._addedLabels),EU(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(r=this.getLabels().length-1)),this.min=i,this.max=r}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,r=[];let s=this.getLabels();s=e===0&&n===s.length-1?s:s.slice(e,n+1),this._valueRange=Math.max(s.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=e;o<=n;o++)r.push({value:o});return r}getLabelForValue(e){return b_.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}oe(g0,"id","category"),oe(g0,"defaults",{ticks:{callback:b_}});function CU(t,e){const n=[],{bounds:r,step:s,min:o,max:a,precision:l,count:c,maxTicks:d,maxDigits:f,includeBounds:p}=t,g=s||1,y=d-1,{min:x,max:w}=e,_=!Ue(o),b=!Ue(a),k=!Ue(c),A=(w-x)/(f+1);let M=T5((w-x)/y/g)*g,L,E,S,C;if(M<1e-14&&!_&&!b)return[{value:x},{value:w}];C=Math.ceil(w/M)-Math.floor(x/M),C>y&&(M=T5(C*M/y/g)*g),Ue(l)||(L=Math.pow(10,l),M=Math.ceil(M*L)/L),r==="ticks"?(E=Math.floor(x/M)*M,S=Math.ceil(w/M)*M):(E=x,S=w),_&&b&&s&&pF((a-o)/s,M/1e3)?(C=Math.round(Math.min((a-o)/M,d)),M=(a-o)/C,E=o,S=a):k?(E=_?o:E,S=b?a:S,C=c-1,M=(S-E)/C):(C=(S-E)/M,Wa(C,Math.round(C),M/1e3)?C=Math.round(C):C=Math.ceil(C));const j=Math.max(E5(M),E5(E));L=Math.pow(10,Ue(l)?j:l),E=Math.round(E*L)/L,S=Math.round(S*L)/L;let R=0;for(_&&(p&&E!==o?(n.push({value:o}),E<o&&R++,Wa(Math.round((E+R*M)*L)/L,o,__(o,A,t))&&R++):E<o&&R++);R<C;++R){const D=Math.round((E+R*M)*L)/L;if(b&&D>a)break;n.push({value:D})}return b&&p&&S!==a?n.length&&Wa(n[n.length-1].value,a,__(a,A,t))?n[n.length-1].value=a:n.push({value:a}):(!b||S===a)&&n.push({value:S}),n}function __(t,e,{horizontal:n,minRotation:i}){const r=Hr(i),s=(n?Math.sin(r):Math.cos(r))||.001,o=.75*e*(""+t).length;return Math.min(e/s,o)}class PU extends Do{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return Ue(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:r,max:s}=this;const o=l=>r=n?r:l,a=l=>s=i?s:l;if(e){const l=_o(r),c=_o(s);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(r===s){let l=s===0?1:Math.abs(s*.05);a(s+l),e||o(r-l)}this.min=r,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,r;return i?(r=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),n=n||11),n&&(r=Math.min(n,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=CU(r,s);return e.bounds==="ticks"&&mF(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const r=(i-n)/Math.max(e.length-1,1)/2;n-=r,i+=r}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return r6(e,this.chart.options.locale,this.options.ticks.format)}}class y0 extends PU{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Tn(e)?e:0,this.max=Tn(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=Hr(this.options.ticks.minRotation),r=(e?Math.sin(i):Math.cos(i))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}oe(y0,"id","linear"),oe(y0,"defaults",{ticks:{callback:o6.formatters.numeric}});const wf={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Kt=Object.keys(wf);function w_(t,e){return t-e}function k_(t,e){if(Ue(e))return null;const n=t._adapter,{parser:i,round:r,isoWeekday:s}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),Tn(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(r&&(o=r==="week"&&(Vl(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,r)),+o)}function S_(t,e,n,i){const r=Kt.length;for(let s=Kt.indexOf(t);s<r-1;++s){const o=wf[Kt[s]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return Kt[s]}return Kt[r-1]}function jU(t,e,n,i,r){for(let s=Kt.length-1;s>=Kt.indexOf(n);s--){const o=Kt[s];if(wf[o].common&&t._adapter.diff(r,i,o)>=e-1)return o}return Kt[n?Kt.indexOf(n):0]}function AU(t){for(let e=Kt.indexOf(t)+1,n=Kt.length;e<n;++e)if(wf[Kt[e]].common)return Kt[e]}function T_(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:r}=ky(n,e),s=n[i]>=e?n[i]:n[r];t[s]=!0}}function IU(t,e,n,i){const r=t._adapter,s=+r.startOf(e[0].value,i),o=e[e.length-1].value;let a,l;for(a=s;a<=o;a=+r.add(a,1,i))l=n[a],l>=0&&(e[l].major=!0);return e}function E_(t,e,n){const i=[],r={},s=e.length;let o,a;for(o=0;o<s;++o)a=e[o],r[a]=o,i.push({value:a,major:!1});return s===0||!n?i:IU(t,i,r,n)}class _d extends Do{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),r=this._adapter=new UB._date(e.adapters.date);r.init(n),Ha(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:k_(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:r,max:s,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(r=Math.min(r,c.min)),!a&&!isNaN(c.max)&&(s=Math.max(s,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),r=Tn(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),s=Tn(s)&&!isNaN(s)?s:+n.endOf(Date.now(),i)+1,this.min=Math.min(r,s-1),this.max=Math.max(r+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,r=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const s=this.min,o=this.max,a=_F(r,s,o);return this._unit=n.unit||(i.autoSkip?S_(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):jU(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:AU(this._unit),this.initOffsets(r),e.reverse&&a.reverse(),E_(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,r,s;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),e.length===1?n=1-r:n=(this.getDecimalForValue(e[1])-r)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?i=s:i=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=bn(n,0,o),i=bn(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,r=this.options,s=r.time,o=s.unit||S_(s.minUnit,n,i,this._getLabelCapacity(n)),a=pe(r.ticks.stepSize,1),l=o==="week"?s.isoWeekday:!1,c=Vl(l)||l===!0,d={};let f=n,p,g;if(c&&(f=+e.startOf(f,"isoWeek",l)),f=+e.startOf(f,c?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const y=r.ticks.source==="data"&&this.getDataTimestamps();for(p=f,g=0;p<i;p=+e.add(p,a,o),g++)T_(d,p,y);return(p===i||r.bounds==="ticks"||g===1)&&T_(d,p,y),Object.keys(d).sort(w_).map(x=>+x)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const r=this.options.time.displayFormats,s=this._unit,o=n||r[s];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,r){const s=this.options,o=s.ticks.callback;if(o)return Ae(o,[e,n,i],this);const a=s.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&a[l],f=c&&a[c],p=i[n],g=c&&f&&p&&p.major;return this._adapter.format(e,r||(g?f:d))}generateTickLabels(e){let n,i,r;for(n=0,i=e.length;n<i;++n)r=e[n],r.label=this._tickFormatFunction(r.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,r=Hr(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:i*s+a*o,h:i*o+a*s}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,s=this._tickFormatFunction(e,0,E_(this,[e],this._majorUnit),r),o=this._getLabelSize(s),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,i=r.length;n<i;++n)e=e.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const r=this.getLabels();for(n=0,i=r.length;n<i;++n)e.push(k_(this,r[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return kF(e.sort(w_))}}oe(_d,"id","time"),oe(_d,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function cu(t,e,n){let i=0,r=t.length-1,s,o,a,l;n?(e>=t[i].pos&&e<=t[r].pos&&({lo:i,hi:r}=Wr(t,"pos",e)),{pos:s,time:a}=t[i],{pos:o,time:l}=t[r]):(e>=t[i].time&&e<=t[r].time&&({lo:i,hi:r}=Wr(t,"time",e)),{time:s,pos:a}=t[i],{time:o,pos:l}=t[r]);const c=o-s;return c?a+(l-a)*(e-s)/c:a}class C_ extends _d{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=cu(n,this.min),this._tableRange=cu(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,r=[],s=[];let o,a,l,c,d;for(o=0,a=e.length;o<a;++o)c=e[o],c>=n&&c<=i&&r.push(c);if(r.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=r.length;o<a;++o)d=r[o+1],l=r[o-1],c=r[o],Math.round((d+l)/2)!==c&&s.push({time:c,pos:o/(a-1)});return s}_generate(){const e=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((r,s)=>r-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(cu(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return cu(this._table,i*this._tableRange+this._minPos,!0)}}oe(C_,"id","timeseries"),oe(C_,"defaults",_d.defaults);const M6="label";function P_(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function RU(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function D6(t,e){t.labels=e}function V6(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M6;const i=[];t.datasets=e.map(r=>{const s=t.datasets.find(o=>o[n]===r[n]);return!s||!r.data||i.includes(s)?{...r}:(i.push(s),Object.assign(s,r),s)})}function MU(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M6;const n={labels:[],datasets:[]};return D6(n,t.labels),V6(n,t.datasets,e),n}function DU(t,e){const{height:n=150,width:i=300,redraw:r=!1,datasetIdKey:s,type:o,data:a,options:l,plugins:c=[],fallbackContent:d,updateMode:f,...p}=t,g=V.useRef(null),y=V.useRef(),x=()=>{g.current&&(y.current=new _f(g.current,{type:o,data:MU(a,s),options:l&&{...l},plugins:c}),P_(e,y.current))},w=()=>{P_(e,null),y.current&&(y.current.destroy(),y.current=null)};return V.useEffect(()=>{!r&&y.current&&l&&RU(y.current,l)},[r,l]),V.useEffect(()=>{!r&&y.current&&D6(y.current.config.data,a.labels)},[r,a.labels]),V.useEffect(()=>{!r&&y.current&&a.datasets&&V6(y.current.config.data,a.datasets,s)},[r,a.datasets]),V.useEffect(()=>{y.current&&(r?(w(),setTimeout(x)):y.current.update(f))},[r,l,a.labels,a.datasets,f]),V.useEffect(()=>{y.current&&(w(),setTimeout(x))},[o]),V.useEffect(()=>(x(),()=>w()),[]),lt.createElement("canvas",Object.assign({ref:g,role:"img",height:n,width:i},p),d)}const VU=V.forwardRef(DU);function LU(t,e){return _f.register(e),V.forwardRef((n,i)=>lt.createElement(VU,Object.assign({},n,{ref:i,type:t})))}const OU=LU("line",uh),Vo=T.h2`
  color: white;
  margin: 0 0 2rem 0;
  font-size: 1.8rem;
  font-weight: 600;
`;_f.register(g0,y0,fh,Ta,mU,kU,fU);const NU=T.div`
  padding: 1rem 2rem 2rem 2rem;
  color: white;
`,zU=T.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,ks=T.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`,FU=T.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: calc(100vh - 300px); // Mengambil sisa tinggi viewport
`,BU=T.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,j_=T.select`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;

  option {
    background: #1a1a2e;
    color: white;
  }
`,$U=T.div`
  margin-top: 2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,UU=T.h3`
  color: #00ff87;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`,HU=T(F.div)`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
`,WU=T(F.div)`
  min-width: 250px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  h4 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }

  .members {
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8rem;
  }
`;function KU(){const[t,e]=V.useState("2024"),[n,i]=V.useState("all"),r={2024:{Jan:1200,Feb:1900,Mar:3e3,Apr:5e3,Mei:4e3,Jun:3e3,Jul:6e3,Agu:7e3,Sep:4500,Okt:5500,Nov:6500,Des:8e3},2023:{Jan:800,Feb:1200,Mar:2e3,Apr:3e3,Mei:3500,Jun:2500,Jul:4e3,Agu:5e3,Sep:3500,Okt:4e3,Nov:4500,Des:5e3}},s=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],o=["2023","2024"],l=(()=>{const p=r[t];return n==="all"?{labels:s,data:s.map(g=>p[g])}:{labels:[n],data:[p[n]]}})(),c={labels:l.labels,datasets:[{label:"Pengunjung Website",data:l.data,borderColor:"#00ff87",backgroundColor:"rgba(0, 255, 135, 0.1)",tension:.4,fill:!0}]},d={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"white"}},title:{display:!0,text:`Statistik Pengunjung Website Tahun ${t}${n!=="all"?` - Bulan ${n}`:""}`,color:"white",font:{size:16}}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255, 255, 255, 0.1)"},ticks:{color:"white"}},x:{grid:{color:"rgba(255, 255, 255, 0.1)"},ticks:{color:"white"}}}},f=[{name:"Robotika",description:"Pengembangan dan pemrograman robot",members:25},{name:"English Club",description:"Peningkatan kemampuan bahasa Inggris",members:30},{name:"Pramuka",description:"Pembentukan karakter dan kepemimpinan",members:45},{name:"Futsal",description:"Olahraga tim dan kompetisi",members:20},{name:"Seni Musik",description:"Pengembangan bakat musik dan vokal",members:15},{name:"Fotografi",description:"Teknik fotografi dan editing",members:18},{name:"PMR",description:"Palang Merah Remaja",members:22},{name:"Basket",description:"Olahraga tim dan strategi",members:24},{name:"Teater",description:"Seni peran dan drama",members:16},{name:"Jurnalistik",description:"Penulisan dan media sekolah",members:20}];return u.jsxs(NU,{children:[u.jsx(Vo,{children:"Dashboard"}),u.jsxs(zU,{children:[u.jsxs(ks,{children:[u.jsx("h3",{children:"Total Moderator"}),u.jsx("p",{children:"25"})]}),u.jsxs(ks,{children:[u.jsx("h3",{children:"Total Guru"}),u.jsx("p",{children:"45"})]}),u.jsxs(ks,{children:[u.jsx("h3",{children:"Total Siswa"}),u.jsx("p",{children:"520"})]}),u.jsxs(ks,{children:[u.jsx("h3",{children:"Berita Sekolah"}),u.jsx("p",{children:"12"})]}),u.jsxs(ks,{children:[u.jsx("h3",{children:"Berita Program Keahlian"}),u.jsx("p",{children:"4"})]}),u.jsxs(ks,{children:[u.jsx("h3",{children:"Berita Ekstrakurikuler"}),u.jsx("p",{children:"3"})]})]}),u.jsxs($U,{children:[u.jsx(UU,{children:"Ekstrakurikuler Aktif"}),u.jsx(HU,{animate:{x:[0,-1500]},transition:{x:{repeat:1/0,repeatType:"loop",duration:30,ease:"linear"}},children:[...f,...f].map((p,g)=>u.jsxs(WU,{children:[u.jsx("h4",{children:p.name}),u.jsx("p",{children:p.description}),u.jsxs("div",{className:"members",children:[p.members," Anggota Aktif"]})]},g))})]}),u.jsxs(FU,{children:[u.jsxs(BU,{children:[u.jsx(j_,{value:t,onChange:p=>e(p.target.value),children:o.map(p=>u.jsxs("option",{value:p,children:["Tahun ",p]},p))}),u.jsxs(j_,{value:n,onChange:p=>i(p.target.value),children:[u.jsx("option",{value:"all",children:"Semua Bulan"}),s.map(p=>u.jsx("option",{value:p,children:p},p))]})]}),u.jsx(OU,{data:c,options:d})]})]})}const GU=T.div`
  padding: 2rem;
  color: white;
`;T.h2`
  color: #00ff87;
  margin-bottom: 2rem;
`;const qU=T.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
`,QU=T(F.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`,A_=T(F.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 0.5rem;
  background: ${t=>t.delete?"#ff4444":"#00ff87"};
  color: white;
`,YU=T(F.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
`;function XU(){const[t,e]=V.useState([{id:1,username:"admin",role:"Administrator"},{id:2,username:"moderator",role:"Moderator"},{id:3,username:"user1",role:"User"}]);return u.jsxs(GU,{children:[u.jsx(Vo,{children:"Manajemen Moderator"}),u.jsx(YU,{whileHover:{scale:1.02},whileTap:{scale:.98},children:"Add New Moderator"}),u.jsx(qU,{children:t.map(n=>u.jsxs(QU,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[u.jsxs("div",{children:[u.jsx("h3",{children:n.username}),u.jsx("p",{children:n.role})]}),u.jsxs("div",{children:[u.jsx(A_,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Edit"}),u.jsx(A_,{delete:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Delete"})]})]},n.id))})]})}const JU=T.div`
  padding: 1rem 2rem 2rem 2rem;
  color: white;
`,ZU=T.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`,I_=T.button`
  padding: 0.8rem 1.5rem;
  background: ${t=>t.active?"rgba(0, 255, 135, 0.2)":"rgba(255, 255, 255, 0.1)"};
  color: ${t=>t.active?"#00ff87":"white"};
  border: 1px solid ${t=>t.active?"#00ff87":"rgba(255, 255, 255, 0.1)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }
`,eH=T.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,tH=T.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`,nH=T(F.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  .status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-top: 1rem;
    background: ${t=>t.status==="Aktif"?"rgba(0, 255, 135, 0.2)":"rgba(255, 59, 48, 0.2)"};
    color: ${t=>t.status==="Aktif"?"#00ff87":"#ff3b30"};
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  .card-content {
    flex: 1;
  }

  .card-status {
    margin-left: 2rem;
  }
`,iH=T.input`
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  width: 300px;
  margin-bottom: 1.5rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,rH=T.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`,R_=T.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 200px;

  h4 {
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
  }

  .sub-text {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.5rem;
  }
`,sH=T(F.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;function oH(){const[t,e]=lt.useState("students"),[n,i]=lt.useState(""),r=[{id:1,name:"Ahmad Rizki",kelas:"XII RPL 1",nis:"12345",status:"Aktif"},{id:2,name:"Siti Nurhaliza",kelas:"XII RPL 1",nis:"12346",status:"Aktif"},{id:3,name:"Budi Santoso",kelas:"XII RPL 2",nis:"12347",status:"Aktif"},{id:4,name:"Dewi Putri",kelas:"XII RPL 2",nis:"12348",status:"Tidak Aktif"},{id:5,name:"Eko Prasetyo",kelas:"XII RPL 3",nis:"12349",status:"Aktif"},{id:6,name:"Fitri Handayani",kelas:"XII RPL 3",nis:"12350",status:"Aktif"}],s=[{id:1,name:"Drs. Suryanto",mapel:"Matematika",nip:"198501012010011001",status:"Aktif"},{id:2,name:"Sri Wahyuni, S.Pd",mapel:"Bahasa Indonesia",nip:"198601022010012002",status:"Aktif"},{id:3,name:"Ahmad Hidayat, M.Pd",mapel:"Pemrograman Web",nip:"198701032010013003",status:"Aktif"},{id:4,name:"Rina Susanti, S.Kom",mapel:"Basis Data",nip:"198801042010014004",status:"Tidak Aktif"},{id:5,name:"Dr. Bambang Kusuma",mapel:"Sistem Operasi",nip:"198901052010015005",status:"Aktif"}],o=r.filter(c=>c.status==="Aktif").length,a=s.filter(c=>c.status==="Aktif").length,l=t==="students"?r.filter(c=>c.name.toLowerCase().includes(n.toLowerCase())||c.nis.includes(n)):s.filter(c=>c.name.toLowerCase().includes(n.toLowerCase())||c.nip.includes(n));return u.jsxs(JU,{children:[u.jsx(Vo,{children:"Manajemen Siswa & Guru"}),u.jsxs(rH,{children:[u.jsxs(R_,{children:[u.jsx("h4",{children:"Total Siswa"}),u.jsx("p",{children:r.length}),u.jsxs("div",{className:"sub-text",children:["Aktif: ",o]})]}),u.jsxs(R_,{children:[u.jsx("h4",{children:"Total Guru"}),u.jsx("p",{children:s.length}),u.jsxs("div",{className:"sub-text",children:["Aktif: ",a]})]})]}),u.jsxs(ZU,{children:[u.jsx(I_,{active:t==="students",onClick:()=>e("students"),children:"Data Siswa"}),u.jsx(I_,{active:t==="teachers",onClick:()=>e("teachers"),children:"Data Guru"})]}),u.jsxs(sH,{whileHover:{scale:1.02},whileTap:{scale:.98},children:["Add New ",t==="students"?"Siswa":"Guru"]}),u.jsxs(eH,{children:[u.jsx(iH,{type:"text",placeholder:`Cari ${t==="students"?"siswa":"guru"}...`,value:n,onChange:c=>i(c.target.value)}),u.jsx(tH,{children:l.map(c=>u.jsxs(nH,{status:c.status,whileHover:{scale:1.01},whileTap:{scale:.99},children:[u.jsxs("div",{className:"card-content",children:[u.jsx("h3",{children:c.name}),t==="students"?u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:["Kelas: ",c.kelas]}),u.jsxs("p",{children:["NIS: ",c.nis]})]}):u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:["Mata Pelajaran: ",c.mapel]}),u.jsxs("p",{children:["NIP: ",c.nip]})]})]}),u.jsx("div",{className:"card-status",children:u.jsx("div",{className:"status",children:c.status})})]},c.id))})]})]})}const aH=T.div`
  padding: 2rem;
  color: white;
`,lH=T.div`
  display: grid;
  gap: 1rem;
`,cH=T(F.div)`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`,uH=T.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`,hH=T.div`
  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  .date {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }
`,dH=T.div`
  display: flex;
  gap: 0.5rem;
`,M_=T(F.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${t=>t.delete?"#ff4444":t.edit?"#ffbb33":"#00ff87"};
  color: white;
`,fH=T(F.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
`;function pH(){const[t,e]=V.useState([{id:1,title:"Prestasi Gemilang di Olimpiade Sains",date:"15 Februari 2024",image:"/images/berita/berita1.jpg",excerpt:"Siswa SMKN 1 Bulan meraih medali emas..."}]);return u.jsxs(aH,{children:[u.jsx(Vo,{children:"Berita Sekolah"}),u.jsx(fH,{whileHover:{scale:1.02},whileTap:{scale:.98},children:"Add New Article"}),u.jsx(lH,{children:t.map(n=>u.jsxs(cH,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[u.jsx(uH,{src:n.image,alt:n.title}),u.jsxs(hH,{children:[u.jsx("h3",{children:n.title}),u.jsx("div",{className:"date",children:n.date}),u.jsx("p",{children:n.excerpt})]}),u.jsxs(dH,{children:[u.jsx(M_,{edit:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Edit"}),u.jsx(M_,{delete:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Delete"})]})]},n.id))})]})}const mH=T.div`
  padding: 2rem;
  color: white;
`,gH=T.div`
  display: grid;
  gap: 1rem;
`,yH=T(F.div)`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`,vH=T.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`,xH=T.div`
  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  .status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    background: ${t=>t.status==="pending"?"#ffd700":t.status==="approved"?"#00ff87":"#ff4444"};
    color: #1a1a2e;
  }

  .author {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }

  .category {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`,bH=T.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Zp=T(F.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${t=>t.approve?"#00ff87":t.reject?"#ff4444":t.view?"#60efff":"rgba(255, 255, 255, 0.1)"};
  color: white;
  width: 100px;
`;function _H(){const[t]=V.useState([{id:1,title:"Prestasi RPL di Lomba Coding",author:"Moderator RPL",status:"pending",category:"Rekayasa Perangkat Lunak",image:"/images/program/rpl.jpg",description:"Tim RPL berhasil meraih juara dalam kompetisi coding tingkat nasional."},{id:2,title:"Workshop Jaringan Cisco",author:"Moderator TKJ",status:"approved",category:"Teknik Komputer dan Jaringan",image:"/images/program/tkj.jpg",description:"Siswa TKJ mengikuti workshop sertifikasi Cisco."},{id:3,title:"Proyek Multimedia Interaktif",author:"Moderator MM",status:"pending",category:"Multimedia",image:"/images/program/mm.jpg",description:"Karya siswa MM dipamerkan dalam expo teknologi."}]);return u.jsxs(mH,{children:[u.jsx(Vo,{children:"Berita Program Keahlian"}),u.jsx(gH,{children:t.map(e=>u.jsxs(yH,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[u.jsx(vH,{src:e.image,alt:e.title}),u.jsxs(xH,{status:e.status,children:[u.jsx("h3",{children:e.title}),u.jsx("div",{className:"status",children:e.status.toUpperCase()}),u.jsxs("div",{className:"author",children:["By: ",e.author]}),u.jsx("div",{className:"category",children:e.category}),u.jsx("p",{children:e.description})]}),u.jsxs(bH,{children:[u.jsx(Zp,{view:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View"}),e.status==="pending"&&u.jsxs(u.Fragment,{children:[u.jsx(Zp,{approve:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Approve"}),u.jsx(Zp,{reject:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Reject"})]})]})]},e.id))})]})}const wH=T.div`
  padding: 2rem;
  color: white;
`;T.h2`
  color: #00ff87;
  margin-bottom: 2rem;
`;const kH=T.div`
  display: grid;
  gap: 1rem;
`,SH=T(F.div)`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`,TH=T.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`,EH=T.div`
  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  .status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    background: ${t=>t.status==="pending"?"#ffd700":t.status==="approved"?"#00ff87":"#ff4444"};
    color: #1a1a2e;
  }

  .author {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }
`,CH=T.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,em=T(F.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${t=>t.approve?"#00ff87":t.reject?"#ff4444":t.view?"#60efff":"rgba(255, 255, 255, 0.1)"};
  color: white;
  width: 100px;
`;function PH(){const[t]=V.useState([{id:1,title:"Lomba Futsal Antar Sekolah",author:"Moderator Olahraga",status:"pending",image:"/images/extra/futsal.jpg",description:"Tim futsal sekolah akan mengikuti turnamen antar SMK se-Kota."},{id:2,title:"Festival Seni Tahunan",author:"Moderator Seni",status:"approved",image:"/images/extra/seni.jpg",description:"Penampilan spektakuler dari klub seni dalam festival tahunan."},{id:3,title:"Kompetisi Robotik",author:"Moderator Robotik",status:"rejected",image:"/images/extra/robotik.jpg",description:"Persiapan tim robotik menghadapi kompetisi nasional."}]);return u.jsxs(wH,{children:[u.jsx(Vo,{children:"Berita Ekstrakurikuler"}),u.jsx(kH,{children:t.map((e,n)=>u.jsxs(SH,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[u.jsx(TH,{src:e.image,alt:e.title}),u.jsxs(EH,{status:e.status,children:[u.jsx("h3",{children:e.title}),u.jsx("div",{className:"status",children:e.status.toUpperCase()}),u.jsxs("div",{className:"author",children:["By: ",e.author]}),u.jsx("p",{children:e.description})]}),u.jsxs(CH,{children:[u.jsx(em,{view:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View"}),e.status==="pending"&&u.jsxs(u.Fragment,{children:[u.jsx(em,{approve:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Approve"}),u.jsx(em,{reject:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Reject"})]})]})]},e.id))})]})}const jH=T.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
`,AH=T.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  margin-bottom: 3rem;

  img {
    width: 40px;
    height: auto;
  }

  h1 {
    color: #00ff87;
    font-size: 1.2rem;
  }
`,IH=T.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  height: calc(100% - 120px);
`,Ss=T(c4)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
    font-weight: 600;
  }
`,RH=T.button`
  background-color: #ff4444;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;function MH(){De();const{handleLogout:t}=fs();return u.jsxs(jH,{children:[u.jsxs(AH,{children:[u.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo"}),u.jsx("h1",{children:"SMKN 1 Bulan"})]}),u.jsxs(IH,{children:[u.jsxs(Ss,{to:"/user",end:!0,children:[u.jsx(XN,{})," Beranda"]}),u.jsxs(Ss,{to:"/user/profil",children:[u.jsx(fd,{})," Profil"]}),u.jsxs(Ss,{to:"/user/nilai",children:[u.jsx(RT,{})," Nilai"]}),u.jsxs(Ss,{to:"/user/absensi",children:[u.jsx(WN,{})," Absensi"]}),u.jsxs(Ss,{to:"/user/jadwal",children:[u.jsx(MT,{})," Jadwal"]}),u.jsxs(Ss,{to:"/user/posting",children:[u.jsx(DT,{})," Posting Foto"]}),u.jsxs(RH,{onClick:t,children:[u.jsx(KT,{})," Logout"]})]})]})}const DH=T.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
`,VH=T.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
  background: #1a1a2e;
  min-height: 100vh;
  color: white;
`;function LH(){return u.jsxs(DH,{children:[u.jsx(MH,{}),u.jsx(VH,{children:u.jsx(f1,{})})]})}const OH=T.div`
  color: white;
  max-width: 800px;
  margin: 0 auto;
`,NH=T.h1`
  color: #00ff87;
  margin-bottom: 2rem;
  font-size: 2rem;
`,zH=T.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,FH=T(F.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`,BH=T.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-info {
    flex: 1;
    
    .username {
      font-weight: 600;
      color: #00ff87;
    }
    
    .timestamp {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`,$H=T.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,UH=T.div`
  padding: 1rem;
  display: flex;
  gap: 1.5rem;

  button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    span {
      font-size: 0.9rem;
    }

    &:hover {
      color: #00ff87;
    }
  }
`,HH=T.div`
  padding: 0 1rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  
  .username {
    color: #00ff87;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;function WH(){const t=[{id:1,username:"john_doe",avatar:"https://raw.githubusercontent.com/hfzt07/dbweb/main/profile.jpg",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan1.jpg",caption:"Kegiatan praktek di lab komputer 🖥️",likes:124,comments:8,timestamp:"2 jam yang lalu"},{id:2,username:"jane_smith",avatar:"https://raw.githubusercontent.com/hfzt07/dbweb/main/profile2.jpg",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan2.jpg",caption:"Workshop UI/UX Design bersama praktisi industri 🎨",likes:89,comments:5,timestamp:"5 jam yang lalu"},{id:3,username:"mike_wilson",avatar:"https://raw.githubusercontent.com/hfzt07/dbweb/main/profile3.jpg",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan3.jpg",caption:"Presentasi project akhir semester 📊",likes:156,comments:12,timestamp:"8 jam yang lalu"}];return u.jsxs(OH,{children:[u.jsx(NH,{children:"Beranda"}),u.jsx(zH,{children:t.map(e=>u.jsxs(FH,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},children:[u.jsxs(BH,{children:[u.jsx("div",{className:"avatar",children:u.jsx("img",{src:e.avatar,alt:e.username})}),u.jsxs("div",{className:"user-info",children:[u.jsx("div",{className:"username",children:e.username}),u.jsx("div",{className:"timestamp",children:e.timestamp})]})]}),u.jsx($H,{children:u.jsx("img",{src:e.image,alt:"Post"})}),u.jsxs(UH,{children:[u.jsxs("button",{children:[u.jsx(NT,{})," ",u.jsx("span",{children:e.likes})]}),u.jsxs("button",{children:[u.jsx(GN,{})," ",u.jsx("span",{children:e.comments})]}),u.jsx("button",{children:u.jsx(cz,{})})]}),u.jsxs(HH,{children:[u.jsx("span",{className:"username",children:e.username}),e.caption]})]},e.id))})]})}const KH=T.div`
  max-width: 800px;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
`,GH=T.div`
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  h2 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`,qH=T(F.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.2);
  }
`,QH=T.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,YH=T.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`,XH=T.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #00ff87;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,JH=T.div`
  flex: 1;
`,ZH=T.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

  h1 {
    color: white;
    font-size: 1.8rem;
  }
`,eW=T(F.button)`
  background: transparent;
  border: 1px solid #00ff87;
  color: #00ff87;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
  }
`,tW=T.div`
  display: flex;
  gap: 2.5rem;
  margin: 1.5rem 0;
  color: white;

  div {
    text-align: center;

    span {
      display: block;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }
  }
`,nW=T.div`
  color: white;
  margin-bottom: 1rem;

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
  }
`,iW=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
`,tm=T.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  svg {
    color: #00ff87;
  }
`;function rW(){const t=De(),{user:e}=fs(),[n,i]=V.useState(!0),[r,s]=V.useState(null);return V.useEffect(()=>{(async()=>{if(e!=null&&e.id)try{const a=pT(gy,"akun",e.id),l=await KL(a);if(l.exists()){const c=l.data();s(c)}}catch(a){console.error("Error fetching profile:",a)}i(!1)})()},[e]),n?u.jsx("div",{style:{color:"white"},children:"Loading..."}):!(r!=null&&r.namaLengkap)||!(r!=null&&r.kelasAkun)?u.jsx(KH,{children:u.jsxs(GH,{children:[u.jsx("h2",{children:"Anda Belum Atur Profil"}),u.jsx("p",{children:"Atur profil Anda untuk mulai berbagi momen"}),u.jsxs(qH,{onClick:()=>t("/user/profil/settings"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[u.jsx(fd,{})," Atur Profil Sekarang"]})]})}):u.jsx(QH,{children:u.jsxs(YH,{children:[u.jsx(XH,{children:u.jsx("img",{src:r.profileImage||"default-avatar.jpg",alt:"Profile"})}),u.jsxs(JH,{children:[u.jsxs(ZH,{children:[u.jsx("h1",{children:r.namaLengkap}),u.jsxs(eW,{onClick:()=>t("/user/profil/settings"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[u.jsx(fd,{})," Edit Profile"]})]}),u.jsxs(tW,{children:[u.jsxs("div",{children:[u.jsx("span",{children:"15"}),u.jsx("p",{children:"Posts"})]}),u.jsxs("div",{children:[u.jsx("span",{children:"258"}),u.jsx("p",{children:"Following"})]}),u.jsxs("div",{children:[u.jsx("span",{children:"429"}),u.jsx("p",{children:"Followers"})]})]}),u.jsxs(nW,{children:[u.jsx("h2",{children:r.kelasAkun}),u.jsx("p",{children:r.bio})]}),u.jsxs(iW,{children:[r.alamat&&u.jsxs(tm,{children:[u.jsx(tz,{}),u.jsx("span",{children:r.alamat})]}),r.email&&u.jsxs(tm,{children:[u.jsx(qN,{}),u.jsx("span",{children:r.email})]}),r.noTelp&&u.jsxs(tm,{children:[u.jsx(rz,{}),u.jsx("span",{children:r.noTelp})]})]})]})]})})}const sW=T(F.form)`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,oW=T.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Ts=T.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
`,da=T.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,aW=T.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,lW=T(F.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,D_=T.label`
  display: block;
  color: #00ff87;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  &::after {
    content: ' *';
    color: #ff4444;
  }
`,V_=T.span`
  color: #ff4444;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: block;
`;function cW(){const t=De(),{user:e}=fs(),[n,i]=V.useState(!1),[r,s]=V.useState({namaLengkap:"",kelasAkun:"",bioAkun:"",emailAkun:"",noTelpAkun:"",alamatAkun:""}),[o,a]=V.useState({}),l=async c=>{c.preventDefault();const d={};if(r.namaLengkap.trim()||(d.namaLengkap="Nama lengkap wajib diisi"),r.kelas.trim()||(d.kelas="Kelas wajib diisi"),Object.keys(d).length>0){a(d);return}i(!0);try{if(!(e!=null&&e.id))throw new Error("Silakan login terlebih dahulu");const f=pT(gy,"akun",e.id),p={namaLengkap:r.namaLengkap,kelasAkun:r.kelas,bioAkun:r.bio||"",emailAkun:r.email||"",noTelpAkun:r.noTelp||"",alamatAkun:r.alamat||"",updatedAt:new Date().toISOString()};await qL(f,p),alert("Profil berhasil disimpan!"),t("/user/profil")}catch(f){console.error("Error detail:",f),alert(`Terjadi kesalahan: ${f.message}`)}finally{i(!1)}};return u.jsxs(sW,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},onSubmit:l,children:[u.jsx(oW,{children:"Atur Profil"}),u.jsxs(Ts,{children:[u.jsx(D_,{children:"Nama Lengkap"}),u.jsx(da,{type:"text",value:r.namaLengkap,onChange:c=>{s({...r,namaLengkap:c.target.value}),o.namaLengkap&&a({...o,namaLengkap:""})},placeholder:"Masukkan nama lengkap"}),o.namaLengkap&&u.jsx(V_,{children:o.namaLengkap})]}),u.jsxs(Ts,{children:[u.jsx(D_,{children:"Kelas"}),u.jsx(da,{type:"text",value:r.kelas,onChange:c=>{s({...r,kelas:c.target.value}),o.kelas&&a({...o,kelas:""})},placeholder:"Contoh: XII RPL 1"}),o.kelas&&u.jsx(V_,{children:o.kelas})]}),u.jsxs(Ts,{children:[u.jsx("label",{children:"Bio"}),u.jsx(aW,{value:r.bio,onChange:c=>s({...r,bio:c.target.value}),placeholder:"Ceritakan tentang dirimu... (opsional)"})]}),u.jsxs(Ts,{children:[u.jsx("label",{children:"Email"}),u.jsx(da,{type:"email",value:r.email,onChange:c=>s({...r,email:c.target.value}),placeholder:"Masukkan email (opsional)"})]}),u.jsxs(Ts,{children:[u.jsx("label",{children:"Nomor Telepon"}),u.jsx(da,{type:"tel",value:r.noTelp,onChange:c=>s({...r,noTelp:c.target.value}),placeholder:"Masukkan nomor telepon (opsional)"})]}),u.jsxs(Ts,{children:[u.jsx("label",{children:"Alamat"}),u.jsx(da,{type:"text",value:r.alamat,onChange:c=>s({...r,alamat:c.target.value}),placeholder:"Masukkan alamat (opsional)"})]}),u.jsxs(lW,{type:"submit",disabled:n,whileHover:{scale:n?1:1.02},whileTap:{scale:n?1:.98},children:[u.jsx(oz,{}),n?"Menyimpan...":"Simpan Profil"]})]})}const uW=T.div`
  color: white;
`,hW=T.h1`
  color: #00ff87;
  margin-bottom: 2rem;
  font-size: 2rem;
`,dW=T.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`,fW=T.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  th {
    color: #00ff87;
    font-weight: 600;
  }

  td {
    color: rgba(255, 255, 255, 0.8);
  }

  tbody tr:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,pW=T.h2`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;function mW(){const t=[{mapel:"Pemrograman Web",tugas:85,uts:88,uas:90,nilai_akhir:88},{mapel:"Basis Data",tugas:90,uts:85,uas:88,nilai_akhir:87},{mapel:"Pemrograman Mobile",tugas:88,uts:90,uas:92,nilai_akhir:90}];return u.jsxs(uW,{children:[u.jsx(hW,{children:"Nilai Akademik"}),u.jsxs(dW,{children:[u.jsx(pW,{children:"Semester Genap 2023/2024"}),u.jsxs(fW,{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Mata Pelajaran"}),u.jsx("th",{children:"Nilai Tugas"}),u.jsx("th",{children:"Nilai UTS"}),u.jsx("th",{children:"Nilai UAS"}),u.jsx("th",{children:"Nilai Akhir"})]})}),u.jsx("tbody",{children:t.map((e,n)=>u.jsxs("tr",{children:[u.jsx("td",{children:e.mapel}),u.jsx("td",{children:e.tugas}),u.jsx("td",{children:e.uts}),u.jsx("td",{children:e.uas}),u.jsx("td",{children:e.nilai_akhir})]},n))})]})]})]})}const gW=T.div`
  color: white;
`,yW=T.h1`
  color: #00ff87;
  margin-bottom: 2rem;
  font-size: 2rem;
`,vW=T.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`,xW=T.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  th {
    color: #00ff87;
    font-weight: 600;
  }

  td {
    color: rgba(255, 255, 255, 0.8);
  }

  tbody tr:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .hadir { color: #00ff87; }
  .izin { color: #ffd700; }
  .sakit { color: #ff9800; }
  .alpha { color: #ff4444; }
`;function bW(){const t=[{tanggal:"2024-02-01",status:"Hadir",keterangan:"-"},{tanggal:"2024-02-02",status:"Hadir",keterangan:"-"},{tanggal:"2024-02-03",status:"Izin",keterangan:"Acara Keluarga"},{tanggal:"2024-02-04",status:"Hadir",keterangan:"-"},{tanggal:"2024-02-05",status:"Sakit",keterangan:"Demam"}],e=n=>{switch(n.toLowerCase()){case"hadir":return"hadir";case"izin":return"izin";case"sakit":return"sakit";case"alpha":return"alpha";default:return""}};return u.jsxs(gW,{children:[u.jsx(yW,{children:"Rekap Absensi"}),u.jsx(vW,{children:u.jsxs(xW,{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Tanggal"}),u.jsx("th",{children:"Status"}),u.jsx("th",{children:"Keterangan"})]})}),u.jsx("tbody",{children:t.map((n,i)=>u.jsxs("tr",{children:[u.jsx("td",{children:n.tanggal}),u.jsx("td",{className:e(n.status),children:n.status}),u.jsx("td",{children:n.keterangan})]},i))})]})})]})}const _W=T.div`
  color: white;
`,wW=T.h1`
  color: #00ff87;
  margin-bottom: 2rem;
  font-size: 2rem;
`,kW=T.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`,SW=T.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  th {
    color: #00ff87;
    font-weight: 600;
  }

  td {
    color: rgba(255, 255, 255, 0.8);
  }

  tbody tr:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;function TW(){const t=[{jam:"07:00 - 08:30",senin:"Matematika",selasa:"B. Indonesia",rabu:"Pemrograman Web",kamis:"Basis Data",jumat:"PKN"},{jam:"08:30 - 10:00",senin:"B. Inggris",selasa:"Pemrograman Web",rabu:"Basis Data",kamis:"Matematika",jumat:"Agama"},{jam:"10:15 - 11:45",senin:"Pemrograman Web",selasa:"Basis Data",rabu:"B. Indonesia",kamis:"B. Inggris",jumat:"Olahraga"},{jam:"12:30 - 14:00",senin:"Basis Data",selasa:"PKN",rabu:"Matematika",kamis:"Pemrograman Web",jumat:"-"},{jam:"14:00 - 15:30",senin:"PKN",selasa:"Matematika",rabu:"B. Inggris",kamis:"Agama",jumat:"-"}];return u.jsxs(_W,{children:[u.jsx(wW,{children:"Jadwal Pelajaran"}),u.jsx(kW,{children:u.jsxs(SW,{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Jam"}),u.jsx("th",{children:"Senin"}),u.jsx("th",{children:"Selasa"}),u.jsx("th",{children:"Rabu"}),u.jsx("th",{children:"Kamis"}),u.jsx("th",{children:"Jumat"})]})}),u.jsx("tbody",{children:t.map((e,n)=>u.jsxs("tr",{children:[u.jsx("td",{children:e.jam}),u.jsx("td",{children:e.senin}),u.jsx("td",{children:e.selasa}),u.jsx("td",{children:e.rabu}),u.jsx("td",{children:e.kamis}),u.jsx("td",{children:e.jumat})]},n))})]})})]})}const EW=T.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`,CW=T(F.h2)`
  color: #00ff87;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,PW=T(F.form)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,jW=T(F.div)`
  border: 2px dashed rgba(0, 255, 135, 0.3);
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #00ff87;
    background: rgba(0, 255, 135, 0.05);
  }

  input {
    display: none;
  }
`,AW=T(F.div)`
  position: relative;
`,IW=T.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 15px;
  margin-top: 1rem;
`,RW=T(F.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 68, 68, 0.9);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff4444;
    transform: rotate(90deg);
  }
`,L_=T.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.5);
  }
`,L6=T.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ff87;
    box-shadow: 0 0 0 2px rgba(0, 255, 135, 0.2);
  }
`,MW=T.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  min-height: 120px;
  resize: vertical;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ff87;
    box-shadow: 0 0 0 2px rgba(0, 255, 135, 0.2);
  }
`,DW=T.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
`,O_=T(F.button)`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: ${t=>t.isSelected?"rgba(0, 255, 135, 0.1)":"transparent"};
  color: ${t=>t.isSelected?"#00ff87":"white"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }
`,VW=T(F.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 1.2rem;
  border-radius: 12px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.3);
  }

  ${t=>t.isLoading&&`
    cursor: not-allowed;
    opacity: 0.7;
  `}
`,LW=T(L6)`
  margin-top: 0.5rem;
`;function OW(){const[t,e]=V.useState(null),[n,i]=V.useState(null),[r,s]=V.useState(""),[o,a]=V.useState(""),[l,c]=V.useState(""),[d,f]=V.useState(!0),[p,g]=V.useState(!1),y=_=>{const b=_.target.files[0];if(b){if(b.size>5*1024*1024){alert("File terlalu besar! Maksimal 5MB");return}e(b);const k=new FileReader;k.onloadend=()=>{i(k.result)},k.readAsDataURL(b)}},x=()=>{e(null),i(null)},w=async _=>{_.preventDefault(),g(!0);try{await new Promise(b=>setTimeout(b,1500)),console.log("Form Data:",{image:t,title:r,caption:o,hashtags:l.split(" ").filter(b=>b.startsWith("#")),isPublic:d}),e(null),i(null),s(""),a(""),c(""),alert("Foto berhasil diupload! (simulasi)")}catch(b){console.error("Error:",b),alert("Gagal mengupload foto. Silakan coba lagi.")}finally{g(!1)}};return u.jsxs(EW,{children:[u.jsx(CW,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Bagikan Momen Anda"}),u.jsxs(PW,{onSubmit:w,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},children:[u.jsx(U3,{children:u.jsxs(jW,{onClick:()=>document.getElementById("fileInput").click(),whileHover:{scale:1.01},whileTap:{scale:.99},children:[u.jsx("input",{type:"file",id:"fileInput",accept:"image/*",onChange:y,hidden:!0}),n?u.jsxs(AW,{children:[u.jsx(IW,{src:n,alt:"Preview"}),u.jsx(RW,{onClick:_=>{_.stopPropagation(),x()},whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(GT,{})})]}):u.jsxs(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[u.jsx(zT,{style:{fontSize:"3.5rem",color:"#00ff87",marginBottom:"1rem"}}),u.jsx("p",{style:{color:"white",fontSize:"1.2rem",marginBottom:"0.5rem"},children:"Klik untuk upload foto"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:"Format: JPG, PNG, GIF (Max. 5MB)"})]})]})}),u.jsxs(L_,{children:[u.jsx(uz,{}),u.jsx(L6,{type:"text",placeholder:"Judul foto...",value:r,onChange:_=>s(_.target.value)})]}),u.jsx(MW,{placeholder:"Ceritakan tentang foto ini...",value:o,onChange:_=>a(_.target.value)}),u.jsxs(L_,{children:[u.jsx(YN,{}),u.jsx(LW,{type:"text",placeholder:"Tambahkan hashtag... (contoh: #sekolah #pembelajaran)",value:l,onChange:_=>c(_.target.value)})]}),u.jsxs(DW,{children:[u.jsxs(O_,{type:"button",isSelected:d,onClick:()=>f(!0),whileHover:{scale:1.02},whileTap:{scale:.98},children:[u.jsx(LT,{})," Publik"]}),u.jsxs(O_,{type:"button",isSelected:!d,onClick:()=>f(!1),whileHover:{scale:1.02},whileTap:{scale:.98},children:[u.jsx(ez,{})," Pribadi"]})]}),u.jsx(VW,{type:"submit",disabled:!t||!r||p,isLoading:p,whileHover:!(!t||!r||p)&&{scale:1.02},whileTap:!(!t||!r||p)&&{scale:.98},children:p?"Mengupload...":"Bagikan Foto"})]})]})}const NW=T.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
`,zW=T.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  margin-bottom: 3rem;

  img {
    width: 40px;
    height: auto;
  }

  h1 {
    color: #00ff87;
    font-size: 1.2rem;
  }
`,FW=T.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  height: calc(100% - 120px);
`,N_=T(c4)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
    font-weight: 600;
  }
`,BW=T.button`
  background-color: #ff4444;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: calc(100% - 2rem);
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;function $W(){const{handleLogout:t}=fs();return u.jsxs(NW,{children:[u.jsxs(zW,{children:[u.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo"}),u.jsx("h1",{children:"SMKN 1 Bulan"})]}),u.jsxs(FW,{children:[u.jsxs(N_,{to:"/moderator/profile",children:[u.jsx(fd,{})," Profil"]}),u.jsxs(N_,{to:"/moderator/posting-berita",children:[u.jsx(UT,{})," Posting Berita"]}),u.jsxs(BW,{onClick:t,children:[u.jsx(KT,{})," Logout"]})]})]})}const UW=T.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
`,HW=T.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
`;function WW(){return u.jsxs(UW,{children:[u.jsx($W,{}),u.jsx(HW,{children:u.jsx(f1,{})})]})}const KW=T.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,GW=T(F.h2)`
  color: #00ff87;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,qW=T(F.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,QW=T.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
`,uu=T.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
  }

  p {
    font-size: 1.1rem;
    color: #00ff87;
  }
`,YW=T.span`
  background: rgba(0, 255, 135, 0.1);
  color: #00ff87;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;function XW(){const{user:t}=fs();return u.jsxs(KW,{children:[u.jsx(GW,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Profil Moderator"}),u.jsx(qW,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},children:u.jsxs(QW,{children:[u.jsxs(uu,{children:[u.jsx("label",{children:"Username"}),u.jsx("p",{children:(t==null?void 0:t.username)||"Tidak tersedia"})]}),u.jsxs(uu,{children:[u.jsx("label",{children:"Role"}),u.jsx(YW,{children:(t==null?void 0:t.role)||"Moderator"})]}),u.jsxs(uu,{children:[u.jsx("label",{children:"Status"}),u.jsx("p",{children:"Aktif"})]}),u.jsxs(uu,{children:[u.jsx("label",{children:"Bergabung Sejak"}),u.jsx("p",{children:"Januari 2024"})]})]})})]})}const JW=T.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,ZW=T(F.h2)`
  color: #00ff87;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,eK=T.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,nm=T.div`
  margin-bottom: 1.5rem;
`,im=T.label`
  display: block;
  color: white;
  margin-bottom: 0.5rem;
`,tK=T.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,nK=T.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  min-height: 200px;
  resize: vertical;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,iK=T.div`
  border: 2px dashed rgba(0, 255, 135, 0.3);
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    border-color: #00ff87;
    background: rgba(0, 255, 135, 0.05);
  }
`,rK=T.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 8px;
  margin-top: 1rem;
`,sK=T(F.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;function oK(){const[t,e]=V.useState(""),[n,i]=V.useState(""),[r,s]=V.useState(null),[o,a]=V.useState(null),[l,c]=V.useState(!1),d=p=>{const g=p.target.files[0];if(g){if(g.size>5*1024*1024){alert("File terlalu besar! Maksimal 5MB");return}s(g);const y=new FileReader;y.onloadend=()=>{a(y.result)},y.readAsDataURL(g)}},f=async p=>{p.preventDefault(),c(!0);try{await new Promise(g=>setTimeout(g,1500)),console.log("Berita Data:",{title:t,content:n,image:r}),e(""),i(""),s(null),a(null),alert("Berita berhasil diposting! (simulasi)")}catch(g){console.error("Error:",g),alert("Gagal memposting berita. Silakan coba lagi.")}finally{c(!1)}};return u.jsxs(JW,{children:[u.jsx(ZW,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Posting Berita"}),u.jsxs(eK,{onSubmit:f,children:[u.jsxs(nm,{children:[u.jsx(im,{children:"Judul Berita"}),u.jsx(tK,{type:"text",value:t,onChange:p=>e(p.target.value),required:!0,placeholder:"Masukkan judul berita..."})]}),u.jsxs(nm,{children:[u.jsx(im,{children:"Gambar Berita"}),u.jsxs(iK,{onClick:()=>document.getElementById("imageInput").click(),children:[u.jsx("input",{type:"file",id:"imageInput",accept:"image/*",onChange:d,style:{display:"none"}}),o?u.jsx(rK,{src:o,alt:"Preview"}):u.jsxs(u.Fragment,{children:[u.jsx(zT,{style:{fontSize:"2rem",color:"#00ff87",marginBottom:"1rem"}}),u.jsx("p",{style:{color:"white"},children:"Klik untuk upload gambar"})]})]})]}),u.jsxs(nm,{children:[u.jsx(im,{children:"Isi Berita"}),u.jsx(nK,{value:n,onChange:p=>i(p.target.value),required:!0,placeholder:"Tulis isi berita..."})]}),u.jsx(sK,{type:"submit",disabled:l||!t||!n,whileHover:{scale:1.02},whileTap:{scale:.98},children:l?"Memposting...":"Posting Berita"})]})]})}const aK=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,lK=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,cK=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,uK=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,hK=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,dK=T.h2`
  color: #00ff87;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`,hu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
`,fK=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,du=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,pK=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,mK=T.img`
  width: 150px;
  height: 150px;
  margin: 2rem auto;
  display: block;
  border-radius: 20px;
`;function gK(){const t=De();return u.jsxs(aK,{children:[u.jsx(pK,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(lK,{children:[u.jsxs(cK,{children:[u.jsx(uK,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"SMKN 1 Bulan"}),u.jsx(mK,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo SMKN 1 Bulan"})]}),u.jsxs(fK,{children:[u.jsxs(du,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(nc,{}),u.jsx("h3",{children:"1000+"}),u.jsx("p",{children:"Lulusan"})]}),u.jsxs(du,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(pr,{}),u.jsx("h3",{children:"50+"}),u.jsx("p",{children:"Guru & Staff"})]}),u.jsxs(du,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(dz,{}),u.jsx("h3",{children:"100+"}),u.jsx("p",{children:"Prestasi"})]}),u.jsxs(du,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(OT,{}),u.jsx("h3",{children:"25+"}),u.jsx("p",{children:"Mitra Industri"})]})]}),u.jsxs(hK,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[u.jsx(dK,{children:"Sejarah"}),u.jsx(hu,{children:"SMKN 1 Bulan didirikan pada tahun 2005 sebagai respons terhadap kebutuhan akan tenaga kerja terampil di bidang teknologi informasi dan komunikasi. Berawal dari visi untuk menciptakan generasi yang kompeten dan berakhlak mulia, sekolah ini dibangun di atas lahan seluas 2 hektar yang sebelumnya merupakan area perkebunan. Dengan dukungan penuh dari pemerintah daerah dan masyarakat sekitar, pembangunan fasilitas pendidikan dimulai dengan tiga program keahlian utama: Rekayasa Perangkat Lunak, Teknik Komputer dan Jaringan, serta Multimedia."}),u.jsx(hu,{children:"Dalam perjalanannya selama lima tahun pertama, SMKN 1 Bulan terus mengembangkan infrastruktur dan kualitas pendidikannya. Laboratorium komputer dilengkapi dengan perangkat terkini, perpustakaan digital dibangun untuk mendukung pembelajaran, dan kerjasama dengan berbagai perusahaan teknologi mulai dijalin. Prestasi demi prestasi mulai diraih oleh para siswa dalam berbagai kompetisi tingkat kabupaten, provinsi, hingga nasional. Hal ini semakin memantapkan posisi SMKN 1 Bulan sebagai salah satu sekolah kejuruan unggulan di bidang teknologi informasi."}),u.jsx(hu,{children:"Memasuki dekade kedua, SMKN 1 Bulan mengembangkan sayapnya dengan membuka program keahlian baru yaitu Bisnis Digital, merespons perkembangan era digital dan e-commerce. Inovasi pembelajaran terus dilakukan dengan mengadopsi teknologi terbaru dan metode pengajaran yang lebih interaktif. Program magang dan sertifikasi kompetensi diperkuat melalui kerjasama dengan lebih dari 25 mitra industri, memberikan kesempatan bagi siswa untuk mendapatkan pengalaman kerja nyata dan meningkatkan prospek karir mereka setelah lulus."}),u.jsx(hu,{children:"Hingga saat ini, SMKN 1 Bulan telah menghasilkan lebih dari 1000 lulusan yang tersebar di berbagai perusahaan teknologi terkemuka, baik di dalam maupun luar negeri. Beberapa alumni bahkan telah sukses mendirikan startup teknologi mereka sendiri. Dengan dukungan lebih dari 50 tenaga pendidik dan staff yang berkualitas, SMKN 1 Bulan terus berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam kompetensi teknis, tetapi juga memiliki karakter yang kuat dan siap menghadapi tantangan di era digital."})]})]})]})}const yK=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,vK=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,xK=T.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,bK=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,_K=T.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 2rem 0;
  border: 3px solid #00ff87;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.3);
`,wK=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,fu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,kK=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,rm=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,SK=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function TK(){const t=De();return u.jsxs(yK,{children:[u.jsx(SK,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(vK,{children:[u.jsxs(xK,{children:[u.jsx(bK,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Kepala Sekolah"}),u.jsx(_K,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kepsek.jpg",alt:"Kepala Sekolah"}),u.jsx("h2",{style:{color:"#00ff87",marginTop:"1rem"},children:"Dr. Ahmad Sulaiman, M.Pd"})]}),u.jsxs(kK,{children:[u.jsxs(rm,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(nc,{}),u.jsx("h3",{children:"25+"}),u.jsx("p",{children:"Tahun Pengalaman"})]}),u.jsxs(rm,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(IT,{}),u.jsx("h3",{children:"15+"}),u.jsx("p",{children:"Penghargaan"})]}),u.jsxs(rm,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx($N,{}),u.jsx("h3",{children:"10+"}),u.jsx("p",{children:"Program Inovasi"})]})]}),u.jsxs(wK,{children:[u.jsx(fu,{children:"Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan kehadirat Allah SWT yang telah melimpahkan rahmat dan karunia-Nya kepada kita semua. Sebagai Kepala SMKN 1 Bulan, saya menyambut baik dan merasa bangga atas kepercayaan yang diberikan untuk memimpin lembaga pendidikan yang fokus pada pengembangan teknologi dan keterampilan digital ini."}),u.jsx(fu,{children:"SMKN 1 Bulan hadir sebagai solusi atas kebutuhan tenaga kerja terampil di bidang teknologi informasi dan komunikasi. Kami berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam kompetensi teknis, tetapi juga memiliki karakter yang kuat dan berakhlak mulia. Melalui berbagai program inovatif dan kerjasama dengan industri, kami terus berupaya meningkatkan kualitas pembelajaran dan pengembangan siswa."}),u.jsx(fu,{children:"Kepada seluruh siswa, saya mengajak untuk terus semangat dalam menuntut ilmu dan mengembangkan diri. Jadikan masa sekolah ini sebagai kesempatan emas untuk mempersiapkan diri menghadapi tantangan di era digital. Kepada para guru dan staff, mari kita bersama-sama menciptakan lingkungan belajar yang kondusif dan inspiratif bagi seluruh warga sekolah."}),u.jsx(fu,{children:"Akhir kata, saya mengucapkan terima kasih atas dukungan semua pihak dalam memajukan SMKN 1 Bulan. Mari kita bersama-sama mewujudkan visi sekolah untuk menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia. Wassalamu'alaikum Warahmatullahi Wabarakatuh."})]})]})]})}const EK=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,CK=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,PK=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,jK=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,AK=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,pu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,IK=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,sm=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,RK=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function MK(){const t=De();return u.jsxs(EK,{children:[u.jsx(RK,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(CK,{children:[u.jsx(PK,{children:u.jsx(jK,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Visi & Misi"})}),u.jsxs(IK,{children:[u.jsxs(sm,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(ZN,{}),u.jsx("h3",{children:"Visi"}),u.jsx("p",{children:"Terdepan dalam Inovasi"})]}),u.jsxs(sm,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(UN,{}),u.jsx("h3",{children:"Misi"}),u.jsx("p",{children:"Pengembangan Berkelanjutan"})]}),u.jsxs(sm,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(OT,{}),u.jsx("h3",{children:"Nilai"}),u.jsx("p",{children:"Integritas & Profesional"})]})]}),u.jsxs(AK,{children:[u.jsx(pu,{children:"Visi SMKN 1 Bulan adalah menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia. Kami berkomitmen untuk menciptakan lingkungan pembelajaran yang mendukung pengembangan potensi setiap siswa, baik dalam aspek akademik maupun karakter."}),u.jsx(pu,{children:"Dalam mewujudkan visi tersebut, kami menjalankan misi untuk menyelenggarakan pendidikan berkualitas berbasis teknologi yang relevan dengan kebutuhan industri. Kami juga fokus pada pengembangan karakter dan kepribadian siswa melalui berbagai program pembinaan dan kegiatan ekstrakurikuler yang terarah."}),u.jsx(pu,{children:"Misi kami juga mencakup upaya membangun kerjasama yang kuat dengan industri dan masyarakat. Hal ini penting untuk memastikan bahwa kurikulum dan program pembelajaran kami selalu sejalan dengan perkembangan teknologi dan kebutuhan dunia kerja. Selain itu, kami terus meningkatkan kompetensi guru dan staff melalui berbagai program pengembangan profesional."}),u.jsx(pu,{children:"Dengan visi dan misi yang jelas ini, SMKN 1 Bulan berkomitmen untuk terus berkembang dan berinovasi dalam menghadapi tantangan pendidikan di era digital. Kami percaya bahwa dengan fondasi yang kuat dalam nilai-nilai integritas, profesionalisme, dan inovasi, kami dapat menghasilkan lulusan yang siap berkontribusi positif bagi masyarakat dan industri."})]})]})]})}const DK=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,VK=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,LK=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,OK=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,NK=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,zK=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,mu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,FK=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,gu=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,BK=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function $K(){const t=De();return u.jsxs(DK,{children:[u.jsx(BK,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(VK,{children:[u.jsxs(LK,{children:[u.jsx(OK,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Akademik"}),u.jsx(NK,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/akademik.jpg",alt:"Program Akademik"})]}),u.jsxs(FK,{children:[u.jsxs(gu,{children:[u.jsx(JN,{}),u.jsx("h3",{children:"Praktik Industri"}),u.jsx("p",{children:"Pengalaman Kerja Nyata"})]}),u.jsxs(gu,{children:[u.jsx(HN,{}),u.jsx("h3",{children:"Teaching Factory"}),u.jsx("p",{children:"Pembelajaran Berbasis Produk"})]}),u.jsxs(gu,{children:[u.jsx(nc,{}),u.jsx("h3",{children:"Sertifikasi"}),u.jsx("p",{children:"Kompetensi Terstandar"})]}),u.jsxs(gu,{children:[u.jsx(IT,{}),u.jsx("h3",{children:"Kompetisi"}),u.jsx("p",{children:"Prestasi Nasional"})]})]}),u.jsxs(zK,{children:[u.jsx(mu,{children:"Program akademik di SMKN 1 Bulan dirancang untuk mempersiapkan siswa menghadapi tantangan industri digital. Melalui kurikulum yang terintegrasi dengan kebutuhan industri, siswa tidak hanya belajar teori tetapi juga praktik langsung menggunakan teknologi terkini."}),u.jsx(mu,{children:"Teaching Factory menjadi salah satu program unggulan dimana siswa belajar dalam lingkungan yang menyerupai industri sesungguhnya. Mereka mengerjakan proyek nyata dari klien dan belajar mengelola proyek dari awal hingga akhir."}),u.jsx(mu,{children:"Program sertifikasi kompetensi memastikan lulusan memiliki kualifikasi yang diakui industri. Kami bekerjasama dengan berbagai lembaga sertifikasi untuk memberikan kesempatan siswa mendapatkan sertifikat kompetensi di bidangnya."}),u.jsx(mu,{children:"Siswa juga didorong untuk aktif mengikuti berbagai kompetisi tingkat daerah hingga nasional. Hal ini membantu mengasah kemampuan teknis dan soft skill mereka, serta membuka peluang networking dengan industri."})]})]})]})}const UK=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,HK=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,WK=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,KK=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,GK=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,qK=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,yu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,QK=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,vu=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,YK=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function XK(){const t=De();return u.jsxs(UK,{children:[u.jsx(YK,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(HK,{children:[u.jsxs(WK,{children:[u.jsx(KK,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Penguatan Karakter"}),u.jsx(GK,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/karakter.jpg",alt:"Penguatan Karakter"})]}),u.jsxs(QK,{children:[u.jsxs(vu,{children:[u.jsx(sz,{}),u.jsx("h3",{children:"Religius"}),u.jsx("p",{children:"Penguatan Nilai Agama"})]}),u.jsxs(vu,{children:[u.jsx(NT,{}),u.jsx("h3",{children:"Integritas"}),u.jsx("p",{children:"Pembentukan Karakter"})]}),u.jsxs(vu,{children:[u.jsx(QN,{}),u.jsx("h3",{children:"Gotong Royong"}),u.jsx("p",{children:"Kerjasama Tim"})]}),u.jsxs(vu,{children:[u.jsx(pr,{}),u.jsx("h3",{children:"Sosial"}),u.jsx("p",{children:"Kepedulian Masyarakat"})]})]}),u.jsxs(qK,{children:[u.jsx(yu,{children:"Program penguatan karakter di SMKN 1 Bulan berfokus pada pembentukan kepribadian siswa yang berakhlak mulia. Melalui berbagai kegiatan keagamaan, siswa diajak untuk mendalami dan mengamalkan nilai-nilai spiritual dalam kehidupan sehari-hari."}),u.jsx(yu,{children:"Pembentukan integritas menjadi fokus utama melalui program-program seperti leadership camp, outbound training, dan mentoring karakter. Siswa dilatih untuk menjadi pribadi yang jujur, bertanggung jawab, dan memiliki etika yang baik."}),u.jsx(yu,{children:"Nilai gotong royong dan kerjasama tim ditanamkan melalui berbagai kegiatan kelompok dan proyek sosial. Siswa belajar untuk bekerja dalam tim, menghargai perbedaan, dan berkontribusi untuk kepentingan bersama."}),u.jsx(yu,{children:"Kepedulian sosial dikembangkan melalui program bakti sosial, kunjungan ke panti asuhan, dan berbagai kegiatan kemasyarakatan lainnya. Hal ini membantu siswa memahami pentingnya empati dan kontribusi positif kepada masyarakat."})]})]})]})}const JK=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,ZK=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,eG=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,tG=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,nG=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,iG=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,xu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,rG=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,bu=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,sG=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function oG(){const t=De();return u.jsxs(JK,{children:[u.jsx(sG,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(ZK,{children:[u.jsxs(eG,{children:[u.jsx(tG,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Ekstrakurikuler"}),u.jsx(nG,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/program-ekstrakurikuler.jpg",alt:"Program Ekstrakurikuler"})]}),u.jsxs(rG,{children:[u.jsxs(bu,{children:[u.jsx(VT,{}),u.jsx("h3",{children:"Olahraga"}),u.jsx("p",{children:"Pengembangan Fisik"})]}),u.jsxs(bu,{children:[u.jsx(BT,{}),u.jsx("h3",{children:"Seni"}),u.jsx("p",{children:"Kreativitas & Budaya"})]}),u.jsxs(bu,{children:[u.jsx(iz,{}),u.jsx("h3",{children:"Jurnalistik"}),u.jsx("p",{children:"Media & Komunikasi"})]}),u.jsxs(bu,{children:[u.jsx(KN,{}),u.jsx("h3",{children:"Coding Club"}),u.jsx("p",{children:"Pemrograman"})]})]}),u.jsxs(iG,{children:[u.jsx(xu,{children:"Program ekstrakurikuler di SMKN 1 Bulan dirancang untuk mengembangkan bakat dan minat siswa di luar jam pelajaran. Melalui berbagai kegiatan ekstrakurikuler, siswa dapat mengeksplorasi dan mengembangkan potensi diri dalam bidang yang mereka minati."}),u.jsx(xu,{children:"Dalam bidang olahraga, kami memiliki berbagai cabang seperti futsal, basket, dan bulu tangkis. Kegiatan ini tidak hanya melatih fisik tetapi juga mengajarkan nilai-nilai sportivitas, kerjasama tim, dan disiplin."}),u.jsx(xu,{children:"Bidang seni dan budaya diwadahi melalui ekstrakurikuler musik, tari, dan teater. Siswa dapat mengekspresikan kreativitas mereka sekaligus melestarikan budaya lokal melalui berbagai pertunjukan dan festival seni."}),u.jsx(xu,{children:"Untuk mengembangkan kemampuan di bidang teknologi, Coding Club menjadi wadah bagi siswa yang tertarik dengan pemrograman dan pengembangan software. Mereka dapat berkolaborasi dalam berbagai proyek dan mengikuti kompetisi programming."})]})]})]})}const aG=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,lG=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,cG=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,uG=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,hG=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,dG=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,_u=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,fG=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,wu=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,pG=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,om=T.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,mG=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function gG(){const t=De();return u.jsxs(aG,{children:[u.jsx(mG,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(lG,{children:[u.jsxs(cG,{children:[u.jsx(uG,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Perpustakaan Digital"}),u.jsx(hG,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus1.jpg",alt:"Perpustakaan Digital"})]}),u.jsxs(fG,{children:[u.jsxs(wu,{children:[u.jsx(RT,{}),u.jsx("h3",{children:"10.000+"}),u.jsx("p",{children:"Koleksi Digital"})]}),u.jsxs(wu,{children:[u.jsx(yy,{}),u.jsx("h3",{children:"24/7"}),u.jsx("p",{children:"Akses Online"})]}),u.jsxs(wu,{children:[u.jsx(az,{}),u.jsx("h3",{children:"Mudah"}),u.jsx("p",{children:"Pencarian Cepat"})]}),u.jsxs(wu,{children:[u.jsx(pr,{}),u.jsx("h3",{children:"1000+"}),u.jsx("p",{children:"Pengguna Aktif"})]})]}),u.jsxs(dG,{children:[u.jsx(_u,{children:"Perpustakaan Digital SMKN 1 Bulan merupakan inovasi dalam penyediaan sumber belajar yang dapat diakses kapan saja dan dimana saja. Dengan koleksi digital yang komprehensif, siswa dapat dengan mudah mengakses berbagai referensi untuk mendukung pembelajaran mereka."}),u.jsx(_u,{children:"Sistem perpustakaan digital kami dilengkapi dengan fitur pencarian canggih yang memudahkan siswa menemukan materi yang mereka butuhkan. Koleksi digital mencakup buku teks, jurnal, majalah, dan berbagai sumber belajar digital lainnya yang relevan dengan kurikulum."}),u.jsx(_u,{children:"Selain itu, perpustakaan digital juga terintegrasi dengan sistem pembelajaran online sekolah, memungkinkan guru untuk membuat referensi digital dan membagikannya kepada siswa. Hal ini mendukung proses pembelajaran yang lebih efektif dan interaktif."}),u.jsx(_u,{children:"Kami terus mengembangkan koleksi dan layanan perpustakaan digital untuk memastikan siswa memiliki akses ke sumber belajar terkini yang mendukung pengembangan kompetensi mereka di era digital."}),u.jsxs(pG,{children:[u.jsx(om,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus2.jpg",alt:"Area Baca"}),u.jsx(om,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus3.jpg",alt:"Ruang Komputer"}),u.jsx(om,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus4.jpg",alt:"Koleksi Digital"})]})]})]})]})}const yG=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,vG=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,xG=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,bG=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,_G=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,wG=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ku=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,kG=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Su=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,SG=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,am=T.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,TG=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function EG(){const t=De();return u.jsxs(yG,{children:[u.jsx(TG,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(vG,{children:[u.jsxs(xG,{children:[u.jsx(bG,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Laboratorium Komputer"}),u.jsx(_G,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab1.jpg",alt:"Lab Komputer"})]}),u.jsxs(kG,{children:[u.jsxs(Su,{children:[u.jsx(yy,{}),u.jsx("h3",{children:"100+"}),u.jsx("p",{children:"Unit Komputer"})]}),u.jsxs(Su,{children:[u.jsx($T,{}),u.jsx("h3",{children:"1 Gbps"}),u.jsx("p",{children:"Koneksi Internet"})]}),u.jsxs(Su,{children:[u.jsx(qT,{}),u.jsx("h3",{children:"Modern"}),u.jsx("p",{children:"Perangkat Terkini"})]}),u.jsxs(Su,{children:[u.jsx(QT,{}),u.jsx("h3",{children:"40"}),u.jsx("p",{children:"Kapasitas/Lab"})]})]}),u.jsxs(wG,{children:[u.jsx(ku,{children:"Laboratorium Komputer SMKN 1 Bulan dilengkapi dengan perangkat keras dan lunak terkini untuk mendukung pembelajaran praktik siswa. Setiap komputer dilengkapi dengan spesifikasi yang memadai untuk menjalankan berbagai software pengembangan dan desain."}),u.jsx(ku,{children:"Fasilitas ini terdiri dari tiga ruang laboratorium yang masing-masing memiliki kapasitas 40 siswa. Setiap lab dilengkapi dengan proyektor, AC, dan jaringan internet berkecepatan tinggi untuk mendukung pembelajaran online dan praktik pemrograman."}),u.jsx(ku,{children:"Software yang tersedia mencakup berbagai IDE untuk pemrograman, tools desain grafis, aplikasi office, dan software khusus sesuai kebutuhan jurusan. Semua komputer terhubung dalam jaringan lokal yang memungkinkan sharing resource dan praktik jaringan."}),u.jsx(ku,{children:"Laboratorium juga dilengkapi dengan sistem monitoring yang memungkinkan guru untuk memantau dan mengendalikan aktivitas siswa selama pembelajaran praktik. Hal ini memastikan efektivitas pembelajaran dan penggunaan fasilitas yang optimal."}),u.jsxs(SG,{children:[u.jsx(am,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab2.jpg",alt:"Ruang Praktik"}),u.jsx(am,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab3.jpg",alt:"Area Diskusi"}),u.jsx(am,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab4.jpg",alt:"Peralatan Lab"})]})]})]})]})}const CG=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,PG=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,jG=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,AG=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,IG=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,RG=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Tu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,MG=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Eu=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,DG=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,lm=T.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,VG=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function LG(){const t=De();return u.jsxs(CG,{children:[u.jsx(VG,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(PG,{children:[u.jsxs(jG,{children:[u.jsx(AG,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Studio Multimedia"}),u.jsx(IG,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio1.jpg",alt:"Studio Multimedia"})]}),u.jsxs(MG,{children:[u.jsxs(Eu,{children:[u.jsx(DT,{}),u.jsx("h3",{children:"Pro"}),u.jsx("p",{children:"Peralatan Fotografi"})]}),u.jsxs(Eu,{children:[u.jsx(pz,{}),u.jsx("h3",{children:"4K"}),u.jsx("p",{children:"Kualitas Video"})]}),u.jsxs(Eu,{children:[u.jsx(nz,{}),u.jsx("h3",{children:"Studio"}),u.jsx("p",{children:"Recording Audio"})]}),u.jsxs(Eu,{children:[u.jsx(yy,{}),u.jsx("h3",{children:"Editing"}),u.jsx("p",{children:"Workstation"})]})]}),u.jsxs(RG,{children:[u.jsx(Tu,{children:"Studio Multimedia SMKN 1 Bulan dilengkapi dengan peralatan profesional untuk mendukung pembelajaran praktik siswa jurusan Multimedia. Studio ini dirancang untuk memberikan pengalaman produksi konten digital yang setara dengan standar industri kreatif."}),u.jsx(Tu,{children:"Area fotografi dilengkapi dengan berbagai peralatan lighting, backdrop, dan kamera DSLR profesional. Siswa dapat belajar teknik fotografi studio, product photography, dan portrait photography dalam lingkungan yang ideal untuk menghasilkan karya berkualitas tinggi."}),u.jsx(Tu,{children:"Studio video production kami memiliki green screen, lighting setup profesional, dan peralatan videografi 4K. Ruang recording audio yang kedap suara memungkinkan siswa untuk memproduksi konten audio berkualitas, mulai dari voice over hingga podcast."}),u.jsx(Tu,{children:"Untuk post-production, tersedia workstation editing yang dilengkapi dengan software industri terkini seperti Adobe Creative Suite, DaVinci Resolve, dan berbagai tools profesional lainnya. Siswa dapat mengedit foto, video, dan audio dalam lingkungan yang optimal."}),u.jsxs(DG,{children:[u.jsx(lm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio2.jpg",alt:"Area Fotografi"}),u.jsx(lm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio3.jpg",alt:"Video Production"}),u.jsx(lm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio4.jpg",alt:"Editing Room"})]})]})]})]})}const OG=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,NG=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,zG=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,FG=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,BG=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,$G=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Cu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,UG=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Pu=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,HG=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,cm=T.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,WG=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function KG(){const t=De();return u.jsxs(OG,{children:[u.jsx(WG,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(NG,{children:[u.jsxs(zG,{children:[u.jsx(FG,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Ruang Praktik Jaringan"}),u.jsx(BG,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan1.jpg",alt:"Ruang Praktik Jaringan"})]}),u.jsxs(UG,{children:[u.jsxs(Pu,{children:[u.jsx($T,{}),u.jsx("h3",{children:"50+"}),u.jsx("p",{children:"Unit Perangkat"})]}),u.jsxs(Pu,{children:[u.jsx(lz,{}),u.jsx("h3",{children:"10+"}),u.jsx("p",{children:"Server Praktik"})]}),u.jsxs(Pu,{children:[u.jsx(vy,{}),u.jsx("h3",{children:"Gigabit"}),u.jsx("p",{children:"Koneksi Jaringan"})]}),u.jsxs(Pu,{children:[u.jsx(qT,{}),u.jsx("h3",{children:"Lengkap"}),u.jsx("p",{children:"Tools Jaringan"})]})]}),u.jsxs($G,{children:[u.jsx(Cu,{children:"Ruang Praktik Jaringan SMKN 1 Bulan dilengkapi dengan berbagai perangkat jaringan modern untuk mendukung pembelajaran praktis siswa jurusan Teknik Komputer dan Jaringan. Fasilitas ini dirancang untuk memberikan pengalaman hands-on dalam mengelola dan mengkonfigurasi infrastruktur jaringan."}),u.jsx(Cu,{children:"Lab ini dilengkapi dengan berbagai perangkat jaringan seperti router, switch, access point, dan server yang memungkinkan siswa untuk mempelajari dan mempraktikkan konfigurasi jaringan secara langsung. Setiap workstation dilengkapi dengan tools dan software jaringan terkini untuk simulasi dan monitoring jaringan."}),u.jsx(Cu,{children:"Siswa dapat melakukan praktik instalasi dan konfigurasi berbagai jenis jaringan, mulai dari LAN, WLAN, hingga WAN. Mereka juga belajar tentang keamanan jaringan, manajemen server, dan troubleshooting melalui proyek-proyek praktis yang mensimulasikan skenario dunia nyata."}),u.jsx(Cu,{children:"Dengan fasilitas yang lengkap ini, siswa dapat mengembangkan keterampilan teknis yang dibutuhkan industri, seperti administrasi jaringan, cloud computing, dan cybersecurity. Pengalaman praktis ini sangat berharga untuk mempersiapkan mereka memasuki dunia kerja di bidang IT."}),u.jsxs(HG,{children:[u.jsx(cm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan2.jpg",alt:"Area Server"}),u.jsx(cm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan3.jpg",alt:"Workstation"}),u.jsx(cm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan4.jpg",alt:"Peralatan Jaringan"})]})]})]})]})}const GG=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,qG=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,QG=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,YG=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,XG=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,JG=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ju=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,ZG=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Au=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,eq=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,um=T.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,tq=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function nq(){const t=De();return u.jsxs(GG,{children:[u.jsx(tq,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(qG,{children:[u.jsxs(QG,{children:[u.jsx(YG,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Aula Serbaguna"}),u.jsx(XG,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula1.jpg",alt:"Aula Serbaguna"})]}),u.jsxs(ZG,{children:[u.jsxs(Au,{children:[u.jsx(pr,{}),u.jsx("h3",{children:"1000+"}),u.jsx("p",{children:"Kapasitas"})]}),u.jsxs(Au,{children:[u.jsx(BT,{}),u.jsx("h3",{children:"Modern"}),u.jsx("p",{children:"Sound System"})]}),u.jsxs(Au,{children:[u.jsx(nc,{}),u.jsx("h3",{children:"Multi"}),u.jsx("p",{children:"Fungsi"})]}),u.jsxs(Au,{children:[u.jsx(MT,{}),u.jsx("h3",{children:"100+"}),u.jsx("p",{children:"Event per Tahun"})]})]}),u.jsxs(JG,{children:[u.jsx(ju,{children:"Aula Serbaguna SMKN 1 Bulan merupakan fasilitas modern yang dirancang untuk mendukung berbagai kegiatan sekolah dan event berskala besar. Dengan kapasitas lebih dari 1000 orang, aula ini dilengkapi dengan sistem tata suara dan pencahayaan profesional untuk mendukung berbagai jenis acara."}),u.jsx(ju,{children:"Ruangan ini dilengkapi dengan panggung permanen yang luas, layar proyeksi berukuran besar, dan sistem audio visual terkini. Area backstage dan ruang persiapan yang nyaman memastikan kelancaran setiap acara yang diselenggarakan, mulai dari upacara hingga pertunjukan seni."}),u.jsx(ju,{children:"Sistem pendingin udara yang optimal dan tata akustik yang dirancang khusus menciptakan kenyamanan maksimal bagi peserta acara. Aula ini juga dilengkapi dengan area lobby yang luas untuk registrasi dan area pameran temporer, serta toilet yang memadai untuk mendukung acara berskala besar."}),u.jsx(ju,{children:"Setiap tahun, aula ini menjadi tempat penyelenggaraan berbagai event penting seperti wisuda, seminar, workshop, pentas seni, dan berbagai kompetisi tingkat sekolah hingga nasional. Fleksibilitas ruangan memungkinkan konfigurasi yang berbeda-beda sesuai kebutuhan acara."}),u.jsxs(eq,{children:[u.jsx(um,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula2.jpg",alt:"Panggung Utama"}),u.jsx(um,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula3.jpg",alt:"Area Duduk"}),u.jsx(um,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula4.jpg",alt:"Lobby Aula"})]})]})]})]})}const iq=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,rq=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,sq=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,oq=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,aq=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,lq=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Iu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,cq=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Ru=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,uq=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,hm=T.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,hq=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function dq(){const t=De();return u.jsxs(iq,{children:[u.jsx(hq,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(rq,{children:[u.jsxs(sq,{children:[u.jsx(oq,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Lapangan Olahraga"}),u.jsx(aq,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan1.jpg",alt:"Lapangan Olahraga"})]}),u.jsxs(cq,{children:[u.jsxs(Ru,{children:[u.jsx(VT,{}),u.jsx("h3",{children:"Futsal"}),u.jsx("p",{children:"Lapangan Indoor"})]}),u.jsxs(Ru,{children:[u.jsx(mz,{}),u.jsx("h3",{children:"Voli"}),u.jsx("p",{children:"Standar Nasional"})]}),u.jsxs(Ru,{children:[u.jsx(FN,{}),u.jsx("h3",{children:"Basket"}),u.jsx("p",{children:"Full Court"})]}),u.jsxs(Ru,{children:[u.jsx(HT,{}),u.jsx("h3",{children:"Atletik"}),u.jsx("p",{children:"Lintasan Lari"})]})]}),u.jsxs(lq,{children:[u.jsx(Iu,{children:"Fasilitas olahraga SMKN 1 Bulan dirancang untuk mendukung pengembangan fisik dan bakat olahraga siswa. Dengan area yang luas dan peralatan standar nasional, siswa dapat berlatih dan berkompetisi dalam berbagai cabang olahraga dengan optimal."}),u.jsx(Iu,{children:"Lapangan indoor multifungsi dapat digunakan untuk berbagai aktivitas seperti futsal, badminton, dan kegiatan indoor lainnya. Dilengkapi dengan sistem pencahayaan dan ventilasi yang baik, lapangan ini dapat digunakan dalam berbagai kondisi cuaca."}),u.jsx(Iu,{children:"Area outdoor terdiri dari lapangan basket full-court dan lapangan voli yang memenuhi standar kompetisi. Lintasan atletik yang mengelilingi lapangan utama memungkinkan siswa untuk berlatih berbagai nomor atletik seperti lari jarak pendek, menengah, dan jauh."}),u.jsx(Iu,{children:"Seluruh fasilitas olahraga dilengkapi dengan ruang ganti, toilet, dan area penyimpanan peralatan yang memadai. Perawatan rutin dilakukan untuk memastikan keamanan dan kenyamanan pengguna, serta menjaga kualitas fasilitas tetap optimal."}),u.jsxs(uq,{children:[u.jsx(hm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan2.jpg",alt:"Lapangan Basket"}),u.jsx(hm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan3.jpg",alt:"Lapangan Voli"}),u.jsx(hm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan4.jpg",alt:"Lintasan Atletik"})]})]})]})]})}const fq=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,pq=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,mq=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,gq=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,yq=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,vq=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Mu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,xq=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Du=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,bq=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,dm=T.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,_q=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function wq(){const t=De();return u.jsxs(fq,{children:[u.jsx(_q,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(pq,{children:[u.jsxs(mq,{children:[u.jsx(gq,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Kantin Sehat"}),u.jsx(yq,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin1.jpg",alt:"Kantin Sehat"})]}),u.jsxs(xq,{children:[u.jsxs(Du,{children:[u.jsx(fz,{}),u.jsx("h3",{children:"Bersih"}),u.jsx("p",{children:"Standar Higenis"})]}),u.jsxs(Du,{children:[u.jsx(FT,{}),u.jsx("h3",{children:"Sehat"}),u.jsx("p",{children:"Menu Bergizi"})]}),u.jsxs(Du,{children:[u.jsx(WT,{}),u.jsx("h3",{children:"Aman"}),u.jsx("p",{children:"Terjamin Mutunya"})]}),u.jsxs(Du,{children:[u.jsx(pr,{}),u.jsx("h3",{children:"200+"}),u.jsx("p",{children:"Kapasitas"})]})]}),u.jsxs(vq,{children:[u.jsx(Mu,{children:"Kantin Sehat SMKN 1 Bulan merupakan fasilitas yang dirancang untuk menyediakan makanan dan minuman yang sehat, bersih, dan bergizi bagi seluruh warga sekolah. Dengan menerapkan standar kebersihan yang ketat, kami memastikan setiap makanan yang disajikan aman untuk dikonsumsi."}),u.jsx(Mu,{children:"Area makan yang nyaman dan bersih dilengkapi dengan ventilasi yang baik dan pencahayaan yang memadai. Meja dan kursi ditata dengan rapi untuk menciptakan suasana yang kondusif bagi siswa dan guru untuk menikmati makanan mereka."}),u.jsx(Mu,{children:"Menu yang disediakan bervariasi dan memenuhi standar gizi seimbang. Setiap penjual di kantin harus mengikuti pelatihan penanganan makanan dan mendapatkan sertifikasi dari Dinas Kesehatan. Hal ini untuk memastikan kualitas dan keamanan makanan yang dijual."}),u.jsx(Mu,{children:"Kantin juga dilengkapi dengan fasilitas cuci tangan dan tempat sampah yang memadai untuk mendukung kebersihan lingkungan. Pemantauan rutin dilakukan untuk memastikan standar kebersihan dan kualitas makanan tetap terjaga."}),u.jsxs(bq,{children:[u.jsx(dm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin2.jpg",alt:"Area Makan"}),u.jsx(dm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin3.jpg",alt:"Counter Makanan"}),u.jsx(dm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin4.jpg",alt:"Menu Sehat"})]})]})]})]})}const kq=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,Sq=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,Tq=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,Eq=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Cq=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,Pq=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Vu=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,jq=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Lu=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,Aq=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,fm=T.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Iq=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function Rq(){const t=De();return u.jsxs(kq,{children:[u.jsx(Iq,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(Sq,{children:[u.jsxs(Tq,{children:[u.jsx(Eq,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Taman Sosial"}),u.jsx(Cq,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman1.jpg",alt:"Taman Sosial"})]}),u.jsxs(jq,{children:[u.jsxs(Lu,{children:[u.jsx(hz,{}),u.jsx("h3",{children:"Hijau"}),u.jsx("p",{children:"Area Terbuka"})]}),u.jsxs(Lu,{children:[u.jsx(vy,{}),u.jsx("h3",{children:"Free"}),u.jsx("p",{children:"Wifi Area"})]}),u.jsxs(Lu,{children:[u.jsx(pr,{}),u.jsx("h3",{children:"Nyaman"}),u.jsx("p",{children:"Area Diskusi"})]}),u.jsxs(Lu,{children:[u.jsx(FT,{}),u.jsx("h3",{children:"Asri"}),u.jsx("p",{children:"Taman Edukasi"})]})]}),u.jsxs(Pq,{children:[u.jsx(Vu,{children:"Taman Sosial SMKN 1 Bulan merupakan ruang terbuka hijau yang dirancang sebagai area interaksi dan pembelajaran outdoor bagi seluruh warga sekolah. Dengan konsep eco-friendly, taman ini dilengkapi dengan berbagai fasilitas yang mendukung kegiatan belajar dan bersosialisasi."}),u.jsx(Vu,{children:"Area ini dilengkapi dengan gazebo dan bangku taman yang nyaman untuk kegiatan diskusi kelompok atau sekedar bersantai di waktu istirahat. Koneksi wifi yang tersedia memungkinkan siswa untuk mengakses materi pembelajaran digital sambil menikmati suasana alam yang asri."}),u.jsx(Vu,{children:"Taman ini juga berfungsi sebagai laboratorium alam, dengan berbagai jenis tanaman yang diberi label nama ilmiah untuk pembelajaran biologi. Desain taman yang artistik menjadikannya lokasi favorit untuk kegiatan fotografi dan pembuatan konten kreatif siswa."}),u.jsx(Vu,{children:"Sebagai bagian dari program sekolah adiwiyata, taman ini juga menjadi contoh penerapan konsep sekolah hijau dan pelestarian lingkungan. Siswa terlibat aktif dalam pemeliharaan taman melalui program piket dan kegiatan ekstrakurikuler pecinta alam."}),u.jsxs(Aq,{children:[u.jsx(fm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman2.jpg",alt:"Area Gazebo"}),u.jsx(fm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman3.jpg",alt:"Taman Edukasi"}),u.jsx(fm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman4.jpg",alt:"Area Diskusi"})]})]})]})]})}const Mq=T.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,Dq=T.div`
  max-width: 1200px;
  margin: 0 auto;
`,Vq=T.div`
  text-align: center;
  margin-bottom: 4rem;
`,Lq=T(F.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Oq=T.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,Nq=T(F.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Ou=T.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,zq=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Nu=T(F.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,Fq=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,pm=T.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Bq=T(F.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function $q(){const t=De();return u.jsxs(Mq,{children:[u.jsx(Bq,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx($t,{})}),u.jsxs(Dq,{children:[u.jsxs(Vq,{children:[u.jsx(Lq,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Titik Internet"}),u.jsx(Oq,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi1.jpg",alt:"Titik Internet"})]}),u.jsxs(zq,{children:[u.jsxs(Nu,{children:[u.jsx(vy,{}),u.jsx("h3",{children:"100+"}),u.jsx("p",{children:"Titik Akses"})]}),u.jsxs(Nu,{children:[u.jsx(BN,{}),u.jsx("h3",{children:"1 Gbps"}),u.jsx("p",{children:"Kecepatan"})]}),u.jsxs(Nu,{children:[u.jsx(LT,{}),u.jsx("h3",{children:"24/7"}),u.jsx("p",{children:"Akses Internet"})]}),u.jsxs(Nu,{children:[u.jsx(WT,{}),u.jsx("h3",{children:"Aman"}),u.jsx("p",{children:"Koneksi Terlindungi"})]})]}),u.jsxs(Nq,{children:[u.jsx(Ou,{children:"Fasilitas internet di SMKN 1 Bulan dirancang untuk memberikan akses internet berkecepatan tinggi yang dapat diandalkan di seluruh area sekolah. Dengan lebih dari 100 titik akses yang strategis, siswa dan guru dapat terhubung ke internet kapan saja dan di mana saja dalam lingkungan sekolah."}),u.jsx(Ou,{children:"Setiap titik akses dilengkapi dengan teknologi terkini yang mendukung koneksi gigabit, memastikan kecepatan dan stabilitas yang optimal untuk berbagai kebutuhan pembelajaran digital. Sistem load balancing memastikan distribusi bandwidth yang merata ke seluruh pengguna."}),u.jsx(Ou,{children:"Keamanan jaringan menjadi prioritas utama dengan implementasi sistem autentikasi terpusat dan enkripsi data. Setiap pengguna memiliki akun pribadi dengan kuota yang dapat dipantau, serta akses ke layanan dan konten yang sesuai dengan kebijakan sekolah."}),u.jsx(Ou,{children:"Infrastruktur internet ini mendukung berbagai kegiatan pembelajaran digital, mulai dari akses ke perpustakaan digital, pembelajaran online, hingga praktik pemrograman dan pengembangan aplikasi. Tim IT support kami siap memberikan bantuan teknis untuk memastikan konektivitas yang lancar."}),u.jsxs(Fq,{children:[u.jsx(pm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi2.jpg",alt:"Area Hotspot"}),u.jsx(pm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi3.jpg",alt:"Ruang Server"}),u.jsx(pm,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi4.jpg",alt:"Monitoring System"})]})]})]})]})}function Uq(){return u.jsx(l4,{children:u.jsx(ZL,{children:u.jsxs("div",{className:"App",style:{background:"#1a1a2e"},children:[u.jsxs(IP,{children:[u.jsx(ue,{path:"/",element:u.jsxs(u.Fragment,{children:[u.jsx(lO,{}),u.jsx(YO,{}),u.jsx(fN,{}),u.jsx(wN,{}),u.jsx(PN,{}),u.jsx(_z,{})]})}),u.jsxs(ue,{path:"/admin/*",element:u.jsx(Vz,{}),children:[u.jsx(ue,{index:!0,element:u.jsx(KU,{})}),u.jsx(ue,{path:"users",element:u.jsx(XU,{})}),u.jsx(ue,{path:"students-teachers",element:u.jsx(oH,{})}),u.jsx(ue,{path:"news",element:u.jsx(pH,{})}),u.jsx(ue,{path:"program-news",element:u.jsx(_H,{})}),u.jsx(ue,{path:"extra-news",element:u.jsx(PH,{})})]}),u.jsxs(ue,{path:"/user/*",element:u.jsx(LH,{}),children:[u.jsx(ue,{index:!0,element:u.jsx(WH,{})}),u.jsx(ue,{path:"profil",element:u.jsx(rW,{})}),u.jsx(ue,{path:"profil/settings",element:u.jsx(cW,{})}),u.jsx(ue,{path:"nilai",element:u.jsx(mW,{})}),u.jsx(ue,{path:"absensi",element:u.jsx(bW,{})}),u.jsx(ue,{path:"jadwal",element:u.jsx(TW,{})}),u.jsx(ue,{path:"posting",element:u.jsx(OW,{})})]}),u.jsxs(ue,{path:"/moderator/*",element:u.jsx(WW,{}),children:[u.jsx(ue,{path:"profile",element:u.jsx(XW,{})}),u.jsx(ue,{path:"posting-berita",element:u.jsx(oK,{})})]}),u.jsx(ue,{path:"/school-detail",element:u.jsx(gK,{})}),u.jsx(ue,{path:"/kepsek-detail",element:u.jsx(TK,{})}),u.jsx(ue,{path:"/visi-misi",element:u.jsx(MK,{})}),u.jsx(ue,{path:"/akademik-detail",element:u.jsx($K,{})}),u.jsx(ue,{path:"/karakter-detail",element:u.jsx(XK,{})}),u.jsx(ue,{path:"/ekstrakurikuler-detail",element:u.jsx(oG,{})}),u.jsx(ue,{path:"/perpus-detail",element:u.jsx(gG,{})}),u.jsx(ue,{path:"/lab-komputer-detail",element:u.jsx(EG,{})}),u.jsx(ue,{path:"/studio-detail",element:u.jsx(LG,{})}),u.jsx(ue,{path:"/jaringan-detail",element:u.jsx(KG,{})}),u.jsx(ue,{path:"/aula-detail",element:u.jsx(nq,{})}),u.jsx(ue,{path:"/lapangan-detail",element:u.jsx(dq,{})}),u.jsx(ue,{path:"/kantin-detail",element:u.jsx(wq,{})}),u.jsx(ue,{path:"/taman-detail",element:u.jsx(Rq,{})}),u.jsx(ue,{path:"/internet-detail",element:u.jsx($q,{})})]}),u.jsx(jz,{})]})})})}gm.createRoot(document.getElementById("root")).render(u.jsx(lt.StrictMode,{children:u.jsx(l4,{children:u.jsx(Uq,{})})}));
