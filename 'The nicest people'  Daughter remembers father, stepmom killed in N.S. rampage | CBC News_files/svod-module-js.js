(window._vfP=window._vfP||[]).push([[118],{420:function(n,e,t){"use strict";t.r(e);t(40),t(13),t(6),t(8),t(17),t(10),t(4);var r,i=t(0),o=t(3),a=t(1),c=t(11),u=t(29),s=t(16),f="/identity/v2/auth/account",l=t(105),d=t(52),p=t(2);function m(n){if(null==n)throw new TypeError("Cannot destructure undefined")}function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(t,!0).forEach((function(e){v(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function v(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var w,P="ssoLogin",b="logout",y={},O=(v(r={},o.Pc,(function(n){var e=n.dispatch,t=n.getters;return e(o.Qc).then((function(n){(y=n).$hooks.register("socialLoginFormRender",(function(){y.$hooks.call("setButtonsName",{socialregistration:t[i.sb]("feed.additionalInfo.nav.finish")}),c.a.getInstance().$publish("svod-authentication","additional-information")})),e(o.Mc),c.a.getInstance().$subscribe(p.o.CHANNEL,p.o.EVENTS.FAILURE,(function(){return e(o.Zc)}))}))})),v(r,o.Qc,(function(n){var e=n.getters,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new window.LoginRadiusV2(h({},e[i.Kc](),{},t))})),v(r,o.Tc,(function(n){var e=n.commit;return y.init("socialLogin",{container:"vf-svod-thirdparty",onSuccess:E("login","failure",e),onError:S("login","failure")}),Promise.resolve()})),v(r,o.Uc,(function(n,e){return m(n),y.util.openWindow(e)})),v(r,o.Rc,(function(){return y.customInterface(".vf-svod-thirdparty",{templateName:"loginradiuscustom_tmpl"}),Promise.resolve()})),v(r,o.ad,(function(n,e){m(n);var t=e.email,r=e.password;return new Promise((function(n,e){return y.api.login({email:t,password:r},n,e)}))})),v(r,o.Sc,(function(n,e){var t=n.dispatch,r=n.commit;return t(o.ad,e).then(E("login","failure",r)).catch(S("login","failure",e.email))})),v(r,o.Yc,(function(n){var e=n.dispatch;return new Promise((function(n,e){y.init(P,{onSuccess:n,onError:e})})).then((function(n){return e(o.Lc,n)})).then((function(n){var e=n.access_token;return _("login","failure",e)})).catch(S("login","failure"))})),v(r,o.Zc,(function(){return new Promise((function(n,e){y.init(b,{onSuccess:n,onError:e})}))})),v(r,o.Nc,(function(n){var e=n.getters[i.Dc].authprovider_loginradius_api_key;return Object(u.n)(e).then((function(n){y.options.sott=n.data.token}))})),v(r,o.Vc,(function(n,e){var t=n.dispatch,r=n.commit;return t(o.Nc).then((function(){t(o.Mc).then((function(n){return new Promise((function(t,r){return y.api.registration(n,e,t,r)}))})).then(E("authentication","signup/failure",r)).catch(S("authentication","signup/failure"))}))})),v(r,o.Oc,(function(n,e){m(n);var t=c.a.getInstance();return new Promise((function(n,t){return y.api.forgotPassword({email:e},n,t)})).then((function(){return t.$publish("account","reset/success",e)})).catch((function(n){return t.$publish("account","reset/failure",n)}))})),v(r,o.Wc,(function(n){var e=n.dispatch,t=n.getters[i.eb],r=t.email_pending;return"pending_update"===t.email_verification_status?e(o.Jc,{email:r}):new Promise((function(n,e){return y.api.resendEmailVerification({email:r},n,e)}))})),v(r,o.Jc,(function(n,e){m(n);var t=e.email;return new Promise((function(n,e){y.api.addEmail({email:t,type:"Primary"},n,e)}))})),v(r,o.Kc,(function(n,e){m(n);var t=e.oldPassword,r=e.newPassword,i=e.currentPassword;return new Promise((function(n,e){y.api.changePassword({oldPassword:t,newPassword:r,currentPassword:i},n,e)}))})),v(r,o.cd,(function(n,e){var t=n.commit,r=e.vtoken;return new Promise((function(n,e){y.api.emailVerification({vtoken:r},n,e)})).then(E("authentication","signup/failure",t))})),v(r,o.bd,(function(n,e){m(n);var t=e.access_token,r=e.updates;return new Promise((function(n,e){y.api.updateData("",r,t,n,e)}))})),v(r,o.Lc,(function(n,e){var t=n.getters,r=n.commit;return function(n,e){return Object(s.d)().get(f,{apiKey:n,access_token:e})}(t[i.Dc].authprovider_loginradius_api_key,e).then((function(n){var t=n.data;return r(a.Tc,t),{access_token:e,data:t}}))})),v(r,o.Xc,(function(n,e){m(n);var t=e.resettoken,r=e.password,i=e.confirmpassword;return new Promise((function(n,e){y.api.resetPassword({resettoken:t,password:r,confirmpassword:i},n,e)}))})),v(r,o.Mc,(function(n){var e=n.getters,t=n.commit;return e[i.Mc]()||(y.$hooks.register("registrationSchemaFilter",(function(n){delete y.$hooks.hooks.registrationSchemaFilter,t(a.Uc,n.slice(0,n.length))})),y.init("registration",{})),e[i.Mc]()})),r),E=function(n,e,t){return function(r){var i=r.Profile,o=r.Data,c=r.access_token,u=i||o||{};return t(a.Sc,c),t(a.Tc,u),_(n,e,c)}},S=function(n,e,t){var r=c.a.getInstance();return function(i){r.$publish(n,e,{reason:i[0]&&i[0].Message},{login_type:d.c,email:t})}},_=function(n,e,t){var r=c.a.getInstance();return Object(u.l)(t).then(u.c).then((function(n){r.$publish(p.C.CHANNEL,p.C.EVENTS.LOADED,n),r.$publish(p.A.CHANNEL,p.A.EVENTS.CLOSE),r.$publish(p.o.CHANNEL,p.o.EVENTS.SUCCESS,n,d.c)})).catch((function(t){t.response&&t.response.data&&t.response.data.error&&(t=Object(l.a)(t.response.data)),r.$publish(n,e,t)}))};function k(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var L,N=(k(w={},i.Kc,(function(n,e){return function(){var n=new URL(e[i.zc].url);n.searchParams.delete("vtype"),n.searchParams.delete("vtoken"),n.hash="";var t=e[i.Dc];return{apiKey:t.authprovider_loginradius_api_key,appName:t.authprovider_loginradius_app_name,forgotPasswordUrl:n,resetPasswordUrl:n,verificationUrl:n,hashTemplate:!0,formValidationMessage:!0,optionalEmailVerification:!0,askEmailForUnverifiedProfileAlways:!0,loginOnEmailVerification:!0,customizeSocialPopup:"width=650,height=450,resizable=1,scrollbars=1,status=1"}}})),k(w,i.Mc,(function(n){return function(){return n.registrationSchema}})),k(w,i.Jc,(function(n){return function(){return n.accessToken||window.localStorage.getItem("LRTokenKey")}})),k(w,i.Lc,(function(n){return function(){return n.profile||JSON.parse(window.localStorage.getItem("LoginRadiusUser"))||{}}})),k(w,i.Oc,(function(n,e){return function(){var n=e[i.Lc]();return Boolean(n.ID&&"Email"!==n.RegistrationProvider)}})),w);function j(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var T=(j(L={},a.Uc,(function(n,e){n.registrationSchema=e})),j(L,a.Sc,(function(n,e){n.accessToken=e})),j(L,a.Tc,(function(n,e){n.profile=e,window.localStorage.setItem("LoginRadiusUser",JSON.stringify(e))})),L);t.d(e,"storeModule",(function(){return $}));var $=function(){return{getters:N,mutations:T,actions:O}}}}]);