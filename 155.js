(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{AoBC:function(e,t,r){"use strict";r.r(t),r.d(t,"IonAlert",function(){return p}),r.d(t,"IonAlertController",function(){return u});var i=r("ex8o"),n=r("tAAV"),o=r("YYGB"),a=r("CP2w");function l(e,t){var r=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));var n=new e;n.addElement(t.querySelector(".alert-wrapper")),i.fromTo("opacity",.01,.3),n.fromTo("opacity",.01,1).fromTo("scale",1.1,1);var o=r.addElement(t).easing("ease-in-out").duration(200).add(i).add(n);return Promise.resolve(o)}function d(e,t){var r=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));var n=new e;n.addElement(t.querySelector(".alert-wrapper")),i.fromTo("opacity",.3,0),n.fromTo("opacity",.99,0).fromTo("scale",1,.9);var o=r.addElement(t).easing("ease-in-out").duration(200).add(i).add(n);return Promise.resolve(o)}function s(e,t){var r=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));var n=new e;return n.addElement(t.querySelector(".alert-wrapper")),i.fromTo("opacity",.01,.32),n.fromTo("opacity",.01,1).fromTo("scale",.9,1),Promise.resolve(r.addElement(t).easing("ease-in-out").duration(150).add(i).add(n))}function c(e,t){var r=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));var n=new e;return n.addElement(t.querySelector(".alert-wrapper")),i.fromTo("opacity",.32,0),n.fromTo("opacity",.99,0),Promise.resolve(r.addElement(t).easing("ease-in-out").duration(150).add(i).add(n))}var p=function(){function e(){this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}return e.prototype.buttonsChanged=function(){this.processedButtons=this.buttons.map(function(e){return"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e})},e.prototype.inputsChanged=function(){var e=this,t=this.inputs,r=new Set(t.map(function(e){return e.type}));r.has("checkbox")&&r.has("radio")&&console.warn("Alert cannot mix input types: "+Array.from(r.values()).join("/")+". Please see alert docs for more info."),this.inputType=r.values().next().value,this.processedInputs=t.map(function(t,r){return{type:t.type||"text",name:t.name||""+r,placeholder:t.placeholder||"",value:t.value,label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id||"alert-input-"+e.overlayIndex+"-"+r,handler:t.handler,min:t.min,max:t.max}})},e.prototype.componentWillLoad=function(){this.inputsChanged(),this.buttonsChanged()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,o.a)},e.prototype.dispatchCancelHandler=function(e){if(Object(o.b)(e.detail.role)){var t=this.processedButtons.find(function(e){return"cancel"===e.role});this.callButtonHandler(t)}},e.prototype.present=function(){return Object(o.c)(this,"alertEnter",l,s)},e.prototype.dismiss=function(e,t){return Object(o.d)(this,e,t,"alertLeave",d,c)},e.prototype.onDidDismiss=function(){return Object(o.e)(this.el,"ionAlertDidDismiss")},e.prototype.onWillDismiss=function(){return Object(o.e)(this.el,"ionAlertWillDismiss")},e.prototype.rbClick=function(e){for(var t=0,r=this.processedInputs;t<r.length;t++){var i=r[t];i.checked=i===e}this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.cbClick=function(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.buttonClick=function(e){var t=e.role,r=this.getValues();if(Object(o.b)(t))return this.dismiss({values:r},t);var i=this.callButtonHandler(e,r);return!1!==i?this.dismiss(Object.assign({values:r},i),e.role):Promise.resolve(!1)},e.prototype.callButtonHandler=function(e,t){if(e&&e.handler){var r=e.handler(t);if(!1===r)return!1;if("object"==typeof r)return r}return{}},e.prototype.getValues=function(){if(0!==this.processedInputs.length){if("radio"===this.inputType){var e=this.processedInputs.find(function(e){return!!e.checked});return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(function(e){return e.checked}).map(function(e){return e.value});var t={};return this.processedInputs.forEach(function(e){t[e.name]=e.value||""}),t}},e.prototype.renderAlertInputs=function(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}},e.prototype.renderCheckbox=function(e){var t=this,r=this.processedInputs;return 0===r.length?null:Object(n.b)("div",{class:"alert-checkbox-group","aria-labelledby":e},r.map(function(e){return Object(n.b)("button",{type:"button",onClick:function(){return t.cbClick(e)},"aria-checked":""+e.checked,id:e.id,disabled:e.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button ion-focusable"},Object(n.b)("div",{class:"alert-button-inner"},Object(n.b)("div",{class:"alert-checkbox-icon"},Object(n.b)("div",{class:"alert-checkbox-inner"})),Object(n.b)("div",{class:"alert-checkbox-label"},e.label)),"md"===t.mode&&Object(n.b)("ion-ripple-effect",null))}))},e.prototype.renderRadio=function(e){var t=this,r=this.processedInputs;return 0===r.length?null:Object(n.b)("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":e,"aria-activedescendant":this.activeId},r.map(function(e){return Object(n.b)("button",{type:"button",onClick:function(){return t.rbClick(e)},"aria-checked":""+e.checked,disabled:e.disabled,id:e.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio ion-focusable",role:"radio"},Object(n.b)("div",{class:"alert-button-inner"},Object(n.b)("div",{class:"alert-radio-icon"},Object(n.b)("div",{class:"alert-radio-inner"})),Object(n.b)("div",{class:"alert-radio-label"},e.label)))}))},e.prototype.renderInput=function(e){var t=this.processedInputs;return 0===t.length?null:Object(n.b)("div",{class:"alert-input-group","aria-labelledby":e},t.map(function(e){return Object(n.b)("div",{class:"alert-input-wrapper"},Object(n.b)("input",{placeholder:e.placeholder,value:e.value,type:e.type,min:e.min,max:e.max,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:"alert-input"}))}))},e.prototype.hostData=function(){return{role:"dialog","aria-modal":"true",style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(a.a)(this.cssClass),{"alert-translucent":this.translucent})}},e.prototype.renderAlertButtons=function(){var e=this,t=this.processedButtons;return Object(n.b)("div",{class:{"alert-button-group":!0,"alert-button-group-vertical":t.length>2}},t.map(function(t){return Object(n.b)("button",{type:"button",class:b(t),tabIndex:0,onClick:function(){return e.buttonClick(t)}},Object(n.b)("span",{class:"alert-button-inner"},t.text),"md"===e.mode&&Object(n.b)("ion-ripple-effect",null))}))},e.prototype.render=function(){var e,t="alert-"+this.overlayIndex+"-hdr",r="alert-"+this.overlayIndex+"-sub-hdr",i="alert-"+this.overlayIndex+"-msg";return void 0!==this.header?e=t:void 0!==this.subHeader&&(e=r),[Object(n.b)("ion-backdrop",{tappable:this.backdropDismiss}),Object(n.b)("div",{class:"alert-wrapper"},Object(n.b)("div",{class:"alert-head"},this.header&&Object(n.b)("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&Object(n.b)("h2",{id:r,class:"alert-sub-title"},this.subHeader)),Object(n.b)("div",{id:i,class:"alert-message",innerHTML:this.message}),this.renderAlertInputs(e),this.renderAlertButtons())]},Object.defineProperty(e,"is",{get:function(){return"ion-alert"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons",watchCallbacks:["buttonsChanged"]},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-top:0}.alert-sub-title.sc-ion-alert-md, .alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar, .alert-message.sc-ion-alert-md::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-right:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md, .alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-md{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.alert-button-inner.sc-ion-alert-md, .alert-tappable.sc-ion-alert-md{display:-ms-flexbox;display:flex;width:100%}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-md, .alert-checkbox.sc-ion-alert-md, .alert-input.sc-ion-alert-md, .alert-radio.sc-ion-alert-md{outline:none}.alert-checkbox-icon.sc-ion-alert-md, .alert-checkbox-inner.sc-ion-alert-md, .alert-radio-icon.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color,#fff);--max-width:280px;font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.alert-head.sc-ion-alert-md{padding-left:23px;padding-right:23px;padding-top:20px;padding-bottom:15px;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px}}.alert-title.sc-ion-alert-md{font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md, .alert-title.sc-ion-alert-md{color:var(--ion-text-color,#000)}.alert-sub-title.sc-ion-alert-md{font-size:16px}.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding-left:24px;padding-right:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550,#737373)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.alert-message.sc-ion-alert-md{max-height:240px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md + .alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150,#d9d9d9);color:var(--ion-text-color,#000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary,#3880ff)}.alert-checkbox-group.sc-ion-alert-md, .alert-radio-group.sc-ion-alert-md{position:relative;max-height:240px;border-top:1px solid var(--ion-color-step-150,#d9d9d9);border-bottom:1px solid var(--ion-color-step-150,#d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;height:48px;overflow:hidden}.alert-radio-label.sc-ion-alert-md{padding-left:52px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-radio-icon.sc-ion-alert-md{left:26px;top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550,#737373)}[dir=rtl].sc-ion-alert-md-h   .alert-radio-icon.sc-ion-alert-md, [dir=rtl]   .sc-ion-alert-md-h   .alert-radio-icon.sc-ion-alert-md{right:26px}.alert-radio-inner.sc-ion-alert-md{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-md-h   .alert-radio-inner.sc-ion-alert-md, [dir=rtl]   .sc-ion-alert-md-h   .alert-radio-inner.sc-ion-alert-md{right:3px}[aria-checked=true].sc-ion-alert-md   .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850,#262626)}[aria-checked=true].sc-ion-alert-md   .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md   .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scaleX(1);transform:scaleX(1)}.alert-checkbox-label.sc-ion-alert-md{padding-left:53px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-checkbox-icon.sc-ion-alert-md{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550,#737373);contain:strict}[dir=rtl].sc-ion-alert-md-h   .alert-checkbox-icon.sc-ion-alert-md, [dir=rtl]   .sc-ion-alert-md-h   .alert-checkbox-icon.sc-ion-alert-md{right:26px}[aria-checked=true].sc-ion-alert-md   .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md   .alert-checkbox-inner.sc-ion-alert-md{left:3px;top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast,#fff)}[dir=rtl].sc-ion-alert-md-h   [aria-checked=true].sc-ion-alert-md   .alert-checkbox-inner.sc-ion-alert-md, [dir=rtl]   .sc-ion-alert-md-h   [aria-checked=true].sc-ion-alert-md   .alert-checkbox-inner.sc-ion-alert-md{right:3px}.alert-button-group.sc-ion-alert-md{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.alert-button.sc-ion-alert-md{border-radius:2px;margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary,#3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button.sc-ion-alert-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function b(e){return Object.assign({"alert-button":!0,"ion-focusable":!0,"ion-activatable":!0},Object(a.a)(e.cssClass))}var u=function(){function e(){}return e.prototype.create=function(e){return Object(o.f)(this.doc.createElement("ion-alert"),e)},e.prototype.dismiss=function(e,t,r){return Object(o.g)(this.doc,e,t,"ion-alert",r)},e.prototype.getTop=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(e){return[2,Object(o.h)(this.doc,"ion-alert")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-alert-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);