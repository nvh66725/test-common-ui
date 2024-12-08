(function(b,O){typeof exports=="object"&&typeof module<"u"?O(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],O):(b=typeof globalThis<"u"?globalThis:b||self,O(b.MyCommonUI={},b.React))})(this,function(b,O){"use strict";var Y={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function je(){if(re)return x;re=1;var D=O,R=Symbol.for("react.element"),J=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,$=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function F(E,c,C){var p,h={},_=null,M=null;C!==void 0&&(_=""+C),c.key!==void 0&&(_=""+c.key),c.ref!==void 0&&(M=c.ref);for(p in c)S.call(c,p)&&!L.hasOwnProperty(p)&&(h[p]=c[p]);if(E&&E.defaultProps)for(p in c=E.defaultProps,c)h[p]===void 0&&(h[p]=c[p]);return{$$typeof:R,type:E,key:_,ref:M,props:h,_owner:$.current}}return x.Fragment=J,x.jsx=F,x.jsxs=F,x}var k={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function xe(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var D=O,R=Symbol.for("react.element"),J=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),E=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),ae=Symbol.iterator,Ae="@@iterator";function Ie(e){if(e===null||typeof e!="object")return null;var r=ae&&e[ae]||e[Ae];return typeof r=="function"?r:null}var P=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function l(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];We("error",e,t)}}function We(e,r,t){{var n=P.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ye=!1,$e=!1,Le=!1,Me=!1,Ue=!1,ie;ie=Symbol.for("react.module.reference");function Ve(e){return!!(typeof e=="string"||typeof e=="function"||e===S||e===L||Ue||e===$||e===C||e===p||Me||e===M||Ye||$e||Le||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===h||e.$$typeof===F||e.$$typeof===E||e.$$typeof===c||e.$$typeof===ie||e.getModuleId!==void 0))}function Ne(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function oe(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case J:return"Portal";case L:return"Profiler";case $:return"StrictMode";case C:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E:var r=e;return oe(r)+".Consumer";case F:var t=e;return oe(t._context)+".Provider";case c:return Ne(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case _:{var o=e,u=o._payload,i=o._init;try{return g(i(u))}catch{return null}}}return null}var m=Object.assign,A=0,ue,se,fe,le,ce,de,ve;function pe(){}pe.__reactDisabledLog=!0;function Be(){{if(A===0){ue=console.log,se=console.info,fe=console.warn,le=console.error,ce=console.group,de=console.groupCollapsed,ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function Je(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:m({},e,{value:ue}),info:m({},e,{value:se}),warn:m({},e,{value:fe}),error:m({},e,{value:le}),group:m({},e,{value:ce}),groupCollapsed:m({},e,{value:de}),groupEnd:m({},e,{value:ve})})}A<0&&l("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=P.ReactCurrentDispatcher,K;function U(e,r,t){{if(K===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);K=n&&n[1]||""}return`
`+K+e}}var G=!1,V;{var qe=typeof WeakMap=="function"?WeakMap:Map;V=new qe}function ye(e,r){if(!e||G)return"";{var t=V.get(e);if(t!==void 0)return t}var n;G=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Be();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(v){n=v}Reflect.construct(e,[],i)}else{try{i.call()}catch(v){n=v}e.call(i.prototype)}}else{try{throw Error()}catch(v){n=v}e()}}catch(v){if(v&&n&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var y=`
`+a[s].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),typeof e=="function"&&V.set(e,y),y}while(s>=1&&f>=0);break}}}finally{G=!1,q.current=u,Je(),Error.prepareStackTrace=o}var j=e?e.displayName||e.name:"",T=j?U(j):"";return typeof e=="function"&&V.set(e,T),T}function Ke(e,r,t){return ye(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return ye(e,Ge(e));if(typeof e=="string")return U(e);switch(e){case C:return U("Suspense");case p:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ke(e.render);case h:return N(e.type,r,t);case _:{var n=e,o=n._payload,u=n._init;try{return N(u(o),r,t)}catch{}}}return""}var I=Object.prototype.hasOwnProperty,ge={},he=P.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}function ze(e,r,t,n,o){{var u=Function.call.bind(I);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var d=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(B(o),l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),B(null)),a instanceof Error&&!(a.message in ge)&&(ge[a.message]=!0,B(o),l("Failed %s type: %s",t,a.message),B(null))}}}var Xe=Array.isArray;function z(e){return Xe(e)}function He(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ze(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function Re(e){if(Ze(e))return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",He(e)),be(e)}var W=P.ReactCurrentOwner,Qe={key:!0,ref:!0,__self:!0,__source:!0},Ee,_e,X;X={};function er(e){if(I.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function rr(e){if(I.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function tr(e,r){if(typeof e.ref=="string"&&W.current&&r&&W.current.stateNode!==r){var t=g(W.current.type);X[t]||(l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g(W.current.type),e.ref),X[t]=!0)}}function nr(e,r){{var t=function(){Ee||(Ee=!0,l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ar(e,r){{var t=function(){_e||(_e=!0,l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ir=function(e,r,t,n,o,u,i){var a={$$typeof:R,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,o){{var u,i={},a=null,d=null;t!==void 0&&(Re(t),a=""+t),rr(r)&&(Re(r.key),a=""+r.key),er(r)&&(d=r.ref,tr(r,o));for(u in r)I.call(r,u)&&!Qe.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&nr(i,f),d&&ar(i,f)}return ir(e,a,d,o,n,W.current,i)}}var H=P.ReactCurrentOwner,me=P.ReactDebugCurrentFrame;function w(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===R}function Te(){{if(H.current){var e=g(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ur(e){return""}var Oe={};function sr(e){{var r=Te();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=sr(r);if(Oe[t])return;Oe[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),w(e),l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),w(null)}}function Ce(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&Se(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var o=Ie(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)Q(i.value)&&Se(i.value,r)}}}function fr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=g(r);ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var o=g(r);l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){w(e),l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),w(null);break}}e.ref!==null&&(w(e),l("Invalid attribute `ref` supplied to `React.Fragment`."),w(null))}}var Pe={};function we(e,r,t,n,o,u){{var i=Ve(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=ur();d?a+=d:a+=Te();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===R?(s="<"+(g(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=or(e,r,t,o,u);if(f==null)return f;if(i){var y=r.children;if(y!==void 0)if(n)if(z(y)){for(var j=0;j<y.length;j++)Ce(y[j],e);Object.freeze&&Object.freeze(y)}else l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ce(y,e)}if(I.call(r,"key")){var T=g(e),v=Object.keys(r).filter(function(gr){return gr!=="key"}),ee=v.length>0?"{key: someKey, "+v.join(": ..., ")+": ...}":"{key: someKey}";if(!Pe[T+ee]){var yr=v.length>0?"{"+v.join(": ..., ")+": ...}":"{}";l(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ee,T,yr,T),Pe[T+ee]=!0}}return e===S?lr(f):fr(f),f}}function cr(e,r,t){return we(e,r,t,!0)}function dr(e,r,t){return we(e,r,t,!1)}var vr=dr,pr=cr;k.Fragment=S,k.jsx=vr,k.jsxs=pr}()),k}var ne;function ke(){return ne||(ne=1,process.env.NODE_ENV==="production"?Y.exports=je():Y.exports=xe()),Y.exports}var De=ke();function Fe({label:D,onClick:R}){return De.jsx("button",{onClick:R,children:D})}b.Button=Fe,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
