(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var l=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,n=null; 
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null"; 
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}var p="closure_uid_"+(1E9*Math.random()>>>0),ea=0,fa=Date.now||function(){return+new Date};function ha(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};function q(a,b){this.h=a===ia&&b||"";this.g=ja}var ja={},ia={};function r(a){r[" "](a);return a}r[" "]=function(){};function ka(){}var la="function"==typeof Uint8Array;function ma(a,b,c){a.i=null;b||(b=[]);a.o=void 0;a.j=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||la&&d instanceof Uint8Array)){a.l=b-a.j;a.h=d;break a}}a.l=Number.MAX_VALUE}a.m={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.l)d+=a.j,a.g[d]=a.g[d]||t;else{var e=a.l+a.j;a.g[e]||(a.h=a.g[e]={});a.h[d]=a.h[d]||t}}var t=[]; 
function v(a,b){if(b<a.l){b+=a.j;var c=a.g[b];return c===t?a.g[b]=[]:c}if(a.h)return c=a.h[b],c===t?a.h[b]=[]:c}function y(a,b,c){a=v(a,b);return null==a?c:a}function z(a,b){a=v(a,b);a=null==a?a:!!a;return null==a?!1:a}function na(a){var b=oa;a.i||(a.i={});if(!a.i[1]){var c=v(a,1);c&&(a.i[1]=new b(c))}return a.i[1]};function oa(a){ma(this,a,pa)}ha(oa,ka);var pa=[28];function qa(a){ma(this,a,ra)}ha(qa,ka);var ra=[21];function A(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function B(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function C(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):sa(b,a)[0]||null);return a||null} 
function sa(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var g={};for(c=d=0;a=e[c];c++){var f=a.className,h;if(h="function"==typeof f.split)h=0<=Array.prototype.indexOf.call(f.split(/\s+/),b,void 0);h&&(g[d++]=a)}g.length=d;return g}return e}function ta(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function D(a,b){a.google_image_requests||(a.google_image_requests=[]);const c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};let E=0;var ua=(a=null)=>a&&60==a.getAttribute("data-jc")?a:document.querySelector('[data-jc="60"]'),va=()=>{if(!(.01<Math.random())){var a=(a=ua(document.currentScript))&&a.getAttribute("data-jc-version")||"unknown";a=`https://${"pagead2.googleadservices.com"}/pagead/gen_204?id=jca&jc=${60}&version=${a}&sample=${.01}`;var b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):D(b,a)}};var F=document,H=window;function wa(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function xa(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:wa(a).match(/\S+/g)||[],b=0<=Array.prototype.indexOf.call(a,b,void 0));return b}function I(a,b){if(a.classList)a.classList.add(b);else if(!xa(a,b)){var c=wa(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};class ya{constructor(a){this.g=(this.serializedAttributionData=a)?new qa(a):null;this.isMutableImpression=null!=v(this.g,1)&&!!z(na(this.g),33);y(this.g,30,"");this.R=!!z(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=v(this.g,1);this.J=!!z(this.g,4);this.M=!!z(this.g,6);this.I=!!z(this.g,13);y(this.g,8,0);this.creativeIndexSuffix=1<y(this.g,8,0)?y(this.g,7,0).toString():"";this.S=!!z(this.g,17);this.O=!!z(this.g,18);this.H=!!z(this.g,14);this.w=!!z(this.g,15);this.N=1==z(this.g,9);this.openAttributionInline= 
1==z(this.g,10);this.isMobileDevice=!!z(this.g,12);this.P=null;this.L=(a=F.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.B=""!==this.creativeIndexSuffix)&&void 0===H.goog_multislot_cache&&(H.goog_multislot_cache={});if(this.B&&!this.L){if(a=H.goog_multislot_cache.hd,void 0===a){a=!1;var b=F.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left- 
b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.A=a;this.u=B("abgcp"+this.creativeIndexSuffix);this.s=B("abgc"+this.creativeIndexSuffix);this.h=B("abgs"+this.creativeIndexSuffix);B("abgl"+this.creativeIndexSuffix);this.o=B("abgb"+this.creativeIndexSuffix);this.F=B("abgac"+this.creativeIndexSuffix);B("mute_panel"+this.creativeIndexSuffix);this.v=C("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive= 
!!this.v&&!!this.H&&!C("goog_delegate_disabled")&&!this.w;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(let d=0;d<c.length;d++){const e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.j=a;this.l=this.isDelegateAttributionActive?this.v:B("cbb"+this.creativeIndexSuffix);this.K=this.A?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.l&&xa(this.l,"goog_dismissable_menu");this.m=null;this.C=0;this.i=this.isDelegateAttributionActive? 
this.v:this.M&&this.u?this.u:this.s;this.G=!!z(this.g,19);this.adbadgeEnabled=!!z(this.g,24);this.enableNativeJakeUi=!!z(this.g,27)}};class za{constructor(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c}};function J(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{r(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Aa(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var Ba=/^true$/.test("false"),Ca=/^true$/.test("false"),Da=/^true$/.test("true");let Ea=Da||!Ca;var Ga=(a,b)=>{if(a)for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Ha=!!window.google_async_iframe_id;let L=Ha&&window.parent||window;var M=(a,b)=>{a&&Ga(b,(c,d)=>{a.style[d]=c})};class Ia{constructor(a,b,c={}){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}};const Ja=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Ka=class{constructor(a,b){this.g=a;this.h=b}},La=class{constructor(a,b,c,d,e){this.url=a;this.D=!!d;this.depth="number"===typeof e?e:null}};function Ma(a,b){const c={};c[a]=b;return[c]}function Na(a,b,c,d,e){const g=[];Aa(a,function(f,h){(f=Oa(f,b,c,d,e))&&g.push(h+"="+f)});return g.join(b)} 
function Oa(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const g=[];for(let f=0;f<a.length;f++)g.push(Oa(a[f],b,c,d+1,e));return g.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Na(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function N(a,b,c,d){a.g.push(b);a.h[b]=Ma(c,d)} 
function Pa(a){if(!a.j)return a.m;let b=1;for(const c in a.h)b=c.length>b?c.length:b;return a.m-a.j.length-b-a.i.length-1} 
function Qa(a,b,c,d){b=b+"//"+c+d;let e=Pa(a)-d.length;if(0>e)return"";a.g.sort(function(f,h){return f-h});d=null;c="";for(var g=0;g<a.g.length;g++){const f=a.g[g],h=a.h[f];for(let m=0;m<h.length;m++){if(!e){d=null==d?f:d;break}let k=Na(h[m],a.i,a.o);if(k){k=c+k;if(e>=k.length){e-=k.length;b+=k;c=a.i;break}a.l&&(c=e,k[c-1]==a.i&&--c,b+=k.substr(0,c),c=a.i,e=0);d=null==d?f:d}}}g="";a.j&&null!=d&&(g=c+a.j+"="+(a.u||d));return b+g} 
class O{constructor(a,b,c,d,e){this.m=c||4E3;this.i=a||"&";this.o=b||",$";this.j=void 0!==d?d:"trn";this.u=e||null;this.l=!1;this.h={};this.s=0;this.g=[]}};function Ra(a,b,c,d,e){if((d?a.g:Math.random())<(e||a.h))try{let g;c instanceof O?g=c:(g=new O,Aa(c,(h,m)=>{var k=g,w=k.s++;h=Ma(m,h);k.g.push(w);k.h[w]=h}));const f=Qa(g,a.l,a.i,a.j+b+"&");f&&D(l,f)}catch(g){}}class Sa{constructor(a,b,c,d){this.l=a;this.i=b;this.j=c;this.h=d;this.g=Math.random()}};let P=null;var Ta=()=>{const a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):fa()},Ua=()=>{const a=l.performance;return a&&a.now?a.now():null};class Va{constructor(a,b,c,d=0,e){this.label=a;this.type=b;this.value=c;this.duration=d;this.uniqueId=Math.random();this.slotId=e}};const Q=l.performance,Wa=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=Wa){var b;if(null===P){P="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Xa(a){a&&Q&&R()&&(Q.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),Q.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class Ya{constructor(a,b){this.h=[];this.i=b||l;let c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.h=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.g=R()||(null!=c?c:Math.random()<a)}start(a,b){if(!this.g)return null;const c=Ua()||Ta();a=new Va(a,b,c);b=`goog_${a.label}_${a.uniqueId}_start`;Q&&R()&&Q.mark(b);return a}};function S(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function Za(a,b,c){let d,e;try{if(a.g&&a.g.g){e=a.g.start(b.toString(),3);d=c();var g=a.g;c=e;if(g.g&&"number"===typeof c.value){var f=Ua()||Ta();c.duration=f-c.value;var h=`goog_${c.label}_${c.uniqueId}_end`;Q&&R()&&Q.mark(h);!g.g||2048<g.h.length||g.h.push(c)}}else d=c()}catch(m){g=a.m;try{Xa(e),g=a.o(b,new Ia(m,{message:S(m)}),void 0,void 0)}catch(k){a.j(217,k)}if(!g)throw m;}return d}function $a(a,b){var c=T;return(...d)=>Za(c,a,()=>b.apply(void 0,d))} 
class ab{constructor(a,b,c,d=null){this.l=a;this.s=b;this.m=c;this.h=null;this.o=this.j;this.g=d;this.i=!1}j(a,b,c,d,e){e=e||this.s;let g;try{const u=new O;u.l=!0;N(u,1,"context",a);b.error&&b.meta&&b.id||(b=new Ia(b,{message:S(b)}));b.msg&&N(u,2,"msg",b.msg.substring(0,512));var f=b.meta||{};b=f;if(this.h)try{this.h(b)}catch(G){}if(d)try{d(b)}catch(G){}d=u;f=[f];d.g.push(3);d.h[3]=f;{{d=l;f=[];b=null;let aa;do{var h=d;if(J(h)){var m=h.location.href;b=h.document&&h.document.referrer||null;aa=!0}else m= 
b,b=null,aa=!1;f.push(new La(m||"",h,aa));try{d=h.parent}catch(K){d=null}}while(d&&h!=d);for(let K=0,Fa=f.length-1;K<=Fa;++K)f[K].depth=Fa-K;h=l;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==f.length-1)for(m=1;m<f.length;++m){var k=f[m];k.url||(k.url=h.location.ancestorOrigins[m-1]||"",k.D=!0)}var w=f}let G=new La(l.location.href,l,!0,!1);h=null;const ba=w.length-1;for(k=ba;0<=k;--k){var x=w[k];!h&&Ja.test(x.url)&&(h=x);if(x.url&&!x.D){G=x;break}}x=null;const jb=w.length&& 
w[ba].url;0!=G.depth&&jb&&(x=w[ba]);g=new Ka(G,x,h)}g.h&&N(u,4,"top",g.h.url||"");N(u,5,"url",g.g.url||"");Ra(this.l,e,u,this.i,c)}catch(u){try{Ra(this.l,e,{context:"ecmserr",rctx:a,msg:S(u),url:g&&g.g.url},this.i,c)}catch(G){}}return this.m}};let bb,T;if(Ha&&!J(L)){let a="."+F.domain;try{for(;2<a.split(".").length&&!J(L);)F.domain=a=a.substr(a.indexOf(".")+1),L=window.parent}catch(b){}J(L)||(L=window)}const U=L,V=new Ya(1,U);var cb=()=>{U.google_measure_js_timing||(V.g=!1,V.h!=V.i.google_js_reporting_queue&&(R()&&Array.prototype.forEach.call(V.h,Xa,void 0),V.h.length=0))};bb=new Sa("http:"===H.location.protocol?"http:":"https:","pagead2.googlesyndication.com","/pagead/gen_204?id=",.01);"number"!==typeof U.google_srt&&(U.google_srt=Math.random()); 
var db=U.google_srt;0<=db&&1>=db&&(bb.g=db);T=new ab(bb,"jserror",!0,V); 
T.h=a=>{var b=H.jerExpIds;if("array"==da(b)&&0!==b.length){var c=a.eid;if(c){c=[...c.split(","),...b];b={};for(var d=0,e=0;e<c.length;){var g=c[e++];var f=g;var h=typeof f;f="object"==h&&null!=f||"function"==h?"o"+(Object.prototype.hasOwnProperty.call(f,p)&&f[p]||(f[p]=++ea)):(typeof f).charAt(0)+f;Object.prototype.hasOwnProperty.call(b,f)||(b[f]=!0,c[d++]=g)}c.length=d;a.eid=c.join(",")}else a.eid=b.join(",")}0!==E&&(a.jc=String(E));(c=H.jerUserAgent)&&(a.useragent=c)};T.i=!0; 
"complete"==U.document.readyState?cb():V.g&&A(U,"load",()=>{cb()});var W=(a,b)=>$a(a,b);function eb(a){if(a.g.j&&a.g.O){const b=na(a.g.g);b&&null!=v(b,5)&&null!=v(b,6)&&(a.i=new za(y(b,5,""),y(b,6,""),y(b,19,"")));A(a.g.j,"click",W(452,()=>{if(!a.j&&(a.j=!0,a.i)){{var c=a.i;let d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);D(window,d)}}}))}} 
function fb(a){if(a.g.R)A(a.g.i,"click",W(365,b=>{const c=H.goog_interstitial_display;c&&(c(b),b&&(b.stopPropagation(),b.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)A(a.g.i,"click",()=>a.h());else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&a.g.l&&A(a.g.l,"click",()=>a.h()),a.g.J)gb(a);else{A(a.g.i,"mouseover",W(367,()=>gb(a)));A(a.g.i,"mouseout",W(369,()=>hb(a,500)));A(a.g.i,"touchstart",W(368,()=>gb(a)));const b=W(370,()=>hb(a,4E3));A(a.g.i,"mouseup",b);A(a.g.i, 
"touchend",b);A(a.g.i,"touchcancel",b);a.g.j&&A(a.g.j,"click",W(371,c=>a.preventDefault(c)))}}function gb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.C=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function hb(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(()=>ib(a),b)}function kb(a){const b=a.g.F;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(()=>{I(b,"abgacfo")})} 
function ib(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
class lb{constructor(a,b){this.g=a;this.h=b;this.g.S||(this.j=!1,this.i=null,!this.g.A||this.g.adbadgeEnabled||this.g.K?eb(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(M(this.g.o,a),M(this.g.h,a),M(this.g.u,b),M(this.g.s,b)):M(this.g.s,a)),fb(this),this.g.enableNativeJakeUi&&I(this.g.F,"abgnac"),this.g.isDelegateAttributionActive?(I(document.body,"goog_delegate_active"),I(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.l&&ta(this.g.l),setTimeout(()=>{I(document.body, 
"jar")},this.g.I?750:100)),this.g.w&&I(document.body,"goog_delegate_disabled"),this.g.G&&H.addEventListener("load",()=>this.h()))}preventDefault(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.C)a.preventDefault?a.preventDefault():a.returnValue=!1;else if(this.g.openAttributionInline){var b=this.g.j.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openAttribution&&(window.openAttribution(b),a.preventDefault? 
a.preventDefault():a.returnValue=!1)}else this.g.N&&(b=this.g.j.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openSystemBrowser&&(window.openSystemBrowser(b),a.preventDefault?a.preventDefault():a.returnValue=!1))}};function mb(a){if(!a.g&&(a.g=!0,H.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new ya(a);new b(a)}}class nb{constructor(a,b){if(!a)throw Error("bad ctor");this.i=a;this.h=b;this.g=!1;C("goog_delegate_deferred")?void 0!==H.goog_delegate_deferred_token?mb(this):(a=()=>{mb(this)},H.goog_delegate_deferred_token=a,setTimeout(a,5E3)):mb(this)}};var ob=()=>{a:{if(Ba)try{var a=H.google_cafe_host||H.top.google_cafe_host;if(a){var b=a;break a}}catch(c){}b="pagead2.googlesyndication.com"}a=Da?"https":"http";if("relative"===b)return"/pagead/js/r20200422/r20110914/abg_survey.js";a||(a=Ea?"https":"http");l.location&&"https:"==l.location.protocol&&"http"==a&&(a="https");return[a,"://",b,"/pagead/js/r20200422/r20110914/abg_survey.js"].join("")};var pb=(a=[])=>{l.google_logging_queue||(l.google_logging_queue=[]);l.google_logging_queue.push([11,a])};class qb{constructor(){this.g=new Promise(a=>{this.h=a})}};var rb=class{constructor(){const a=new qb;this.promise=a.g;this.resolve=a.h}};function sb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new rb,b&&b());return a[5]} 
function tb(){var a=window,b=ob();return sb(a,function(){{var c=a.document;const e=c.createElement("script");var d=new q(ia,b);d instanceof q&&d.constructor===q&&d.g===ja?d=d.h:(da(d),d="type_error:TrustedResourceUrl");e.src=d;if(null===n)a:{d=l.document;if((d=d.querySelector&&d.querySelector("script[nonce]"))&&(d=d.nonce||d.getAttribute("nonce"))&&ca.test(d)){n=d;break a}n=""}(d=n)&&e.setAttribute("nonce",d);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(e,c)}}).promise} 
;function ub(a){Za(T,373,()=>{ib(a.h);kb(a.h)});tb().then(b=>{b.createAttributionCard(a.g);a.g.P=b;b.expandAttributionCard()});va()}class vb{constructor(a){this.g=a;this.h=new lb(this.g,W(359,()=>ub(this)))}};E=60;function wb(a){pb([a]);new nb(vb,a)}var X=["buildAttribution"],Y=l;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===wb?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=wb;}).call(this);