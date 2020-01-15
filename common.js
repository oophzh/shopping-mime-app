(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5EEq":function(t,e,n){"use strict";n.r(e),n.d(e,"createGesture",function(){return f}),n.d(e,"GESTURE_CONTROLLER",function(){return u});var r,i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===n){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(s)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(s)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,e,n,r,i){this.id=e,this.name=n,this.disableScroll=i,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),a=function(){function t(t,e,n,r){this.id=e,this.disable=n,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),s="backdrop-no-scroll",u=new i(document);function c(t,e,n,i){var o,a,s=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(o="addEventListener",a="removeEventListener"),t[o](e,n,s),function(){t[a](e,n,s)}}var l=2e3;function d(t){return t instanceof Document?t:t.ownerDocument}function f(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,r=e.onWillStart,i=e.onStart,o=e.onEnd,a=e.notCaptured,s=e.onMove,f=e.threshold,m=e.queue,y={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},g=function(t,e,n,r,i){var o,a,s,u,f,v,h,p=0;function m(r){p=Date.now()+l,e(r)&&(!a&&n&&(a=c(t,"touchmove",n,i)),s||(s=c(t,"touchend",g,i)),u||(u=c(t,"touchcancel",g,i)))}function y(r){p>Date.now()||e(r)&&(!v&&n&&(v=c(d(t),"mousemove",n,i)),h||(h=c(d(t),"mouseup",b,i)))}function g(t){w(),r&&r(t)}function b(t){S(),r&&r(t)}function w(){a&&a(),s&&s(),u&&u(),a=s=u=void 0}function S(){v&&v(),h&&h(),v=h=void 0}function _(){w(),S()}function E(e){e?(o&&o(),f&&f(),o=f=void 0,_()):(o||(o=c(t,"touchstart",m,i)),f||(f=c(t,"mousedown",y,i)))}return{setDisabled:E,stop:_,destroy:function(){E(!0),r=n=e=void 0}}}(e.el,function(t){var e=p(t);return!(_||!E)&&(h(t,y),y.startX=y.currentX,y.startY=y.currentY,y.startTimeStamp=y.timeStamp=e,y.velocityX=y.velocityY=y.deltaX=y.deltaY=0,y.event=t,(!n||!1!==n(y))&&(w.release(),!!w.start()&&(_=!0,0===f?C():(b.start(y.startX,y.startY),!0))))},function(t){S?!L&&E&&(L=!0,v(y,t),m.write(x)):(v(y,t),b.detect(y.currentX,y.currentY)&&(b.isGesture()&&C()||(A(),g.stop(),a&&a(y))))},I,{capture:!1}),b=function(t,e,n){var r=n*(Math.PI/180),i="x"===t,o=Math.cos(r),a=e*e,s=0,u=0,c=!1,l=0;return{start:function(t,e){s=t,u=e,l=0,c=!0},detect:function(t,e){if(!c)return!1;var n=t-s,r=e-u,d=n*n+r*r;if(d<a)return!1;var f=Math.sqrt(d),v=(i?n:r)/f;return l=v>o?1:v<-o?-1:0,c=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(e.direction,e.threshold,e.maxAngle),w=u.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=!1,_=!1,E=!0,L=!1;function x(){S&&(L=!1,s&&s(y))}function C(){return!(w&&!w.capture()||(S=!0,E=!1,y.startX=y.currentX,y.startY=y.currentY,y.startTimeStamp=y.timeStamp,r?r(y).then(D):D(),0))}function D(){i&&i(y),E=!0}function A(){S=!1,_=!1,L=!1,E=!0,w.release()}function I(t){var e=S,n=E;A(),n&&(v(y,t),e?o&&o(y):a&&a(y))}return{setDisabled:function(t){t&&S&&I(void 0),g.setDisabled(t)},destroy:function(){w.destroy(),g.destroy()}}}function v(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.timeStamp;h(e,t);var o=t.currentX,a=t.currentY,s=(t.timeStamp=p(e))-i;if(s>0&&s<100){var u=(a-r)/s;t.velocityX=(o-n)/s*.7+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=e}}function h(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r}function p(t){return t.timeStamp||Date.now()}},CP2w:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return a});var r=n("ex8o");function i(t,e){return null!==e.closest(t)}function o(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function a(t,e){var n;return(n={})[e]=!0,n[e+"-"+t]=void 0!==t,n}function s(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var u=/^[a-z][a-z0-9+\-.]*:/;function c(t,e,n,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==e||"#"===e[0]||u.test(e)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(e,i)];case 2:return[2,!1]}})})}},IUrV:function(t,e,n){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r})},JbCa:function(t,e,n){"use strict";var r;n("mrSG"),n("Ip0R"),n("CcnG"),n("K9Ia"),n("6blF"),n("F/XL"),n("h9Dq"),n("pugT"),n("FFOo"),n("G5J1"),n("XlPw"),r||(r={}),n("8g8A"),n("uMaO"),n("VnD/"),n("t9fZ"),n("psW0"),n("xMyE"),n("67Y/"),n("9Z1F"),n("15JJ"),n("T1DM"),n("S1nX"),n("p0Sj"),n.d(e,"a",function(){return i});var i=function(){function t(){}var e;return e=t,t.forRoot=function(t){return{ngModule:e,providers:[{provide:"options",useValue:t}]}},t}()},"Ky+G":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){return function(t){return i(t)}(t).includes(e)},i=function(t){t.Ionic=t.Ionic||{};var e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=o(t)).forEach(function(e){return t.document.documentElement.classList.add("plt-"+e)}),e},o=function(t){return Object.keys(f).filter(function(e){return f[e](t)})},a=function(t){return d(t,"(any-pointer:coarse)")},s=function(t){return u(t)||c(t)},u=function(t){return!!(t.cordova||t.phonegap||t.PhoneGap)},c=function(t){var e=t.Capacitor;return!(!e||!e.isNative)},l=function(t,e){return!(!t.navigator||!t.navigator.userAgent)&&e.test(t.navigator.userAgent)},d=function(t,e){return!!t.matchMedia&&t.matchMedia(e).matches},f={ipad:function(t){return l(t,/iPad/i)},iphone:function(t){return l(t,/iPhone/i)},ios:function(t){return l(t,/iPad|iPhone|iPod/i)},android:function(t){return l(t,/android|sink/i)},phablet:function(t){var e=t.innerWidth,n=t.innerHeight,r=Math.min(e,n),i=Math.max(e,n);return r>390&&r<520&&i>620&&i<800},tablet:function(t){var e=t.innerWidth,n=t.innerHeight,r=Math.min(e,n),i=Math.max(e,n);return r>460&&r<820&&i>780&&i<1400},cordova:u,capacitor:c,electron:function(t){return l(t,/electron/)},pwa:function(t){return!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)},mobile:a,mobileweb:function(t){return a(t)&&!s(t)},desktop:function(t){return!a(t)},hybrid:s}},RMak:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return s});var r="ionViewWillEnter",i="ionViewDidEnter",o="ionViewWillLeave",a="ionViewDidLeave",s="ionViewWillUnload"},YYGB:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return v}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return a}),n.d(e,"h",function(){return s});var r=n("ex8o"),i=0;function o(t,e){var n=t.ownerDocument;(function(t){0===i&&(i=1,t.addEventListener("focusin",function(e){var n=s(t);if(n&&n.backdropDismiss&&!function(t,e){for(;e;){if(e===t)return!0;e=e.parentElement}return!1}(n,e.target)){var r=n.querySelector("input,button");r&&r.focus()}}),t.addEventListener("ionBackButton",function(e){var n=s(t);n&&n.backdropDismiss&&e.detail.register(100,function(){return n.dismiss(void 0,h)})}),t.addEventListener("keyup",function(e){if("Escape"===e.key){var n=s(t);n&&n.backdropDismiss&&n.dismiss(void 0,h)}}))})(n),Object.assign(t,e),t.classList.add("overlay-hidden");var r=i++;return t.overlayIndex=r,t.hasAttribute("id")||(t.id="ion-overlay-"+r),l(n).appendChild(t),t.componentOnReady()}function a(t,e,n,r,i){var o=s(t,r,i);return o?o.dismiss(e,n):Promise.reject("overlay does not exist")}function s(t,e,n){var r=function(t,e){var n=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===e?n:(e=e.toUpperCase(),n.filter(function(t){return t.tagName===e}))}(t,e);return void 0===n?r[r.length-1]:r.find(function(t){return t.id===n})}function u(t,e,n,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),a=t.enterAnimation?t.enterAnimation:t.config.get(e,"ios"===t.mode?n:i),[4,d(t,a,t.el,o)]);case 1:return r.sent()&&t.didPresent.emit(),[2]}})})}function c(t,e,n,i,o,a,s){return r.a(this,void 0,void 0,function(){var u,c;return r.c(this,function(r){switch(r.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),t.willDismiss.emit({data:e,role:n}),u=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?o:a),[4,d(t,u,t.el,s)];case 2:return r.sent(),t.didDismiss.emit({data:e,role:n}),[3,4];case 3:return c=r.sent(),console.error(c),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,e,i,o){return r.a(this,void 0,void 0,function(){var a,s,u,c;return r.c(this,function(r){switch(r.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),a=i.shadowRoot||t.el,u=t,[4,n.e(1).then(n.bind(null,"ebo4")).then(function(t){return t.create(e,a,o)})]);case 1:return s=u.animation=r.sent(),t.animation=s,t.animated&&t.config.getBoolean("animated",!0)||s.duration(0),t.keyboardClose&&s.beforeAddWrite(function(){var t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,s.playAsync()];case 2:return r.sent(),c=s.hasCompleted,s.destroy(),t.animation=void 0,[2,c]}})})}function f(t,e){var n,r=new Promise(function(t){return n=t});return function(t,e,n){var r=function(i){t.removeEventListener(e,r),n(i)};t.addEventListener(e,r)}(t,e,function(t){n(t.detail)}),r}function v(t){return"cancel"===t||t===h}var h="backdrop"},dtyn:function(t,e,n){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function a(t,e,n,r,o){if(t||i(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=o,a.name=n,a.value=r||""}}function s(t,e,n){return Math.max(t,Math.min(e,n))}function u(t){return t.timeStamp||Date.now()}function c(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,e){var n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),e)}}function f(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return a}),n.d(e,"f",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return s}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return c})},ex8o:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return a});var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(e){o(e)}}function s(t){try{u(r.throw(t))}catch(e){o(e)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function a(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}},"hsj+":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n("AwSQ"),n("8cFx"),n("ZZ/e"),n("9B/o");var r=function(){function t(t,e,n,r,i,o,a){this.dataService=t,this.commonService=e,this.translate=n,this.router=r,this.nav=i,this.inAppBrowser=o,this.events=a,this.logoPath="",this.topAdvert="",this.showAdv=!1,this.slidesList=[],this.advsTextList=[],this.advsList=[],this.newArrivalsList=[],this.bestSellersList=[],this.messageCount=0,this.slideOpts={effect:"flip",autoplay:{autoplay:!0,delay:3e3}},this.advTextSlideOpts={effect:"flip",autoplay:{autoplay:!0,delay:1500},pagination:{el:null}},this.defaultImage="/assets/images/default_loading.gif",this.logoPath=this.commonService.picUrl+"logo.gif"}return t.prototype.ngOnInit=function(){},t.prototype.ionViewDidEnter=function(){var t=this;setTimeout(function(){t.slider&&t.slidesList&&t.slidesList.length>1&&t.slider&&t.slider.startAutoplay(),t.advSlider&&t.advsTextList&&t.advsTextList.length>1&&t.advSlider.startAutoplay()},2e3),this.listenEvents()},t.prototype.ionViewWillLeave=function(){console.log("ionViewWillLeave"),this.slidesList&&this.slidesList.length>1&&this.slider.stopAutoplay(),this.advsTextList&&this.advsTextList.length>1&&this.advSlider.stopAutoplay()},t.prototype.ngDoCheck=function(){var t=this.commonService.getCurrencySymbol(localStorage.selectedCurrencyConf);(!this.currentCurrency||this.currentCurrency&&t.currencyCode!==this.currentCurrency.currencyCode)&&(this.currentCurrency=t,this.getHomePageData(),this.initAdv())},t.prototype.listenEvents=function(){var t=this;t.events.subscribe("changeCountry",function(e){t.countryIcon="/assets/images/country/"+e.code+".png"})},t.prototype.ngOnDestroy=function(){console.log("setting ngOnDestroy"),this.events.unsubscribe("changeCountry")},t.prototype.initAdv=function(){var t=0,e=this,n=setInterval(function(){if(sessionStorage.systemConf){clearInterval(n);var r=JSON.parse(sessionStorage.systemConf);e.topAdvert=r.top_advert_img,e.showAdv=!0,e.countryIcon="/assets/images/country/"+r.country_belong+".png",e.slidesList=r.big_advert.lb;for(var i=0;i<e.slidesList.length;i++)(o=e.slidesList[i]).img=e.commonService.picUrl+o.img;for(e.advsList=r.big_advert.smadv,i=0;i<e.advsList.length;i++){var o;(o=e.advsList[i]).img=e.commonService.picUrl+"app-adv-"+(i+1)+".jpg"}e.advsTextList=[],r.top_advert_img&&e.advsTextList.push(r.top_advert_img),r.next_advert_txt&&r.next_advert_txt[0]&&e.advsTextList.push(r.next_advert_txt[0]),r.next_advert_txt&&r.next_advert_txt[1]&&e.advsTextList.push(r.next_advert_txt[1])}else(t+=1)>5&&(e.showAdv=!0,clearInterval(n))},200)},t.prototype.initSlider=function(){console.log("initSlider");var t=this;t.slider&&t.slider.length().then(function(e){return function(){console.log("number = "+e),e>0&&(t.slider.stopAutoplay(),t.slider.startAutoplay())}}),t.advSlider&&t.advSlider.length().then(function(e){return function(){console.log("number = "+e),e>0&&(t.advSlider.stopAutoplay(),t.advSlider.startAutoplay())}})},t.prototype.slideDidChange=function(){this.slider.startAutoplay(),this.advSlider.startAutoplay()},t.prototype.slideChange=function(){},t.prototype.getHomePageData=function(){var t=this;this.requestHomeData(function(e){if(e.data.new_arrivals){t.newArrivalsList=e.data.new_arrivals;for(var n=0;n<t.newArrivalsList.length;n++)for(var r=t.newArrivalsList[n],i=0;i<r.display_data.length;i++)(o=r.display_data[i]).img_display=t.commonService.picUrl+o.img_display,o.current_price=t.commonService.formatProductPrice(o.current_price,null),o.original_price=t.commonService.formatProductPrice(o.original_price,null)}if(e.data.best_sellers)for(t.bestSellersList=e.data.best_sellers,n=0;n<t.bestSellersList.length;n++)for(r=t.bestSellersList[n],i=0;i<r.display_data.length;i++){var o;(o=r.display_data[i]).img_display=t.commonService.picUrl+o.img_display,o.current_price=t.commonService.formatProductPrice(o.current_price,null),o.original_price=t.commonService.formatProductPrice(o.original_price,null)}})},t.prototype.requestHomeData=function(t){var e=this,n=0,r=setInterval(function(){localStorage.selectedCurrencyConf?(clearInterval(r),e.dataService.getHomePageData(t,null)):(n+=1)>5&&clearInterval(r)},200)},t.prototype.gotoSearch=function(){this.nav.navigateForward(["/search"])},t.prototype.gotoCategory=function(){this.nav.navigateRoot("/tabs/category")},t.prototype.changeCurrency=function(){this.nav.navigateForward(["/mine/setting/change-currency"])},t.prototype.advClick=function(t){var e=t.linkID,n=t.linkDes,r=t.colorID;r&&e&&n?this.nav.navigateForward(["/product/detail"],{queryParams:{productId:e,productColorId:r}}):e&&n&&this.nav.navigateForward(["/product"],{queryParams:{categoryId:e,categoryName:n}})},t}()},k9dv:function(t,e,n){"use strict";n.d(e,"a",function(){return b}),n.d(e,"b",function(){return y}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return w});var r=n("ex8o"),i=n("RMak"),o=function(){return n.e(97).then(n.bind(null,"7KUx"))},a=function(){return n.e(98).then(n.bind(null,"+hje"))};function s(t){return new Promise(function(e,n){t.queue.write(function(){(function(t){var e=t.enteringEl,n=t.leavingEl;(function(t,e,n){void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")})(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)})(t),function(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return[4,c(t)];case 1:return[2,(e=n.sent())?l(e,t):d(t)]}})})}(t).then(function(n){n.animation&&n.animation.destroy(),u(t),e(n)},function(e){u(t),n(e)})})})}function u(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function c(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return e=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,a()];case 3:e=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,e]}})})}function l(t,e){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,f(e,!0)];case 1:return r.sent(),[4,n.e(1).then(n.bind(null,"ebo4")).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return i=r.sent(),p(e.enteringEl,e.leavingEl),[4,h(i,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&m(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function d(t){return r.a(this,void 0,void 0,function(){var e,n;return r.c(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,f(t,!1)];case 1:return r.sent(),p(e,n),m(e,n),[2,{hasCompleted:!0}]}})})}function f(t,e){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[b(t.enteringEl),b(t.leavingEl)]:[g(t.enteringEl),g(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,v(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function v(t,e){return r.a(this,void 0,void 0,function(){return r.c(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function h(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r}function p(t,e){y(e,i.a),y(t,i.b)}function m(t,e){y(t,i.c),y(e,i.d)}function y(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}}function g(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function b(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(b))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function w(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},rh2P:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("ex8o");function i(t,e,n,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),e.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})}function o(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}}}]);