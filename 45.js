(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{Y4VU:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),a=t("pMnS"),o=t("oBZk"),b=t("ZZ/e"),r=t("A7o+"),i=t("Ip0R"),c=t("hsj+"),h=t("rqSi"),s=t("AwSQ"),p=t("8cFx"),m=function(){function l(l,n,t,e){this.translate=l,this.events=n,this.dataService=t,this.commonService=e,this.homePage=c.a,this.cartPage=h.a,this.leaveTab="",this.cartNumber=0;var u=this;u.events.subscribe("gotoHome",function(){u.leaveTab=null}),u.events.subscribe("changeCartNumber",function(l){u.getCartList()})}return l.prototype.ionViewWillEnter=function(){console.log("tab ionViewWillEnter");var l=this.tabs.outlet.component;l instanceof c.a?l.ionViewWillEnter():l instanceof h.a&&l.ionViewDidEnter(),this.leaveTab&&this.tabs.select(this.leaveTab),this.getCartList()},l.prototype.ionViewDidLeave=function(){var l=this.tabs.getSelected();"home"==l&&this.events.publish("stopHomeSilider"),this.leaveTab=l},l.prototype.ngOnDestroy=function(){this.events.unsubscribe("gotoHome"),this.events.unsubscribe("changeCartNumber")},l.prototype.getCartList=function(){var l={currencyId:localStorage.selectedCurrencyConf,userId:"",cart:[],applyCpNo:""};if(this.commonService.isLogin())l.userId=localStorage.userId;else if(localStorage.productList&&(l.cart=JSON.parse(localStorage.productList),0==l.cart.length))return void(this.cartNumber=0);var n=this;this.dataService.shoppingCartNoShipping(JSON.stringify(l),function(l){n.cartNumber=l.data&&l.data.cart&&l.data.cart.length>0?l.data.prdTotalNum:0},null)},l}(),d=e.ob({encapsulation:0,styles:[[".number[_ngcontent-%COMP%]{position:absolute;top:10%;right:30%;color:#ea5455;border:1px solid #ea5455;background:#fff;min-width:.8rem;height:.8rem;line-height:.75rem;text-align:center;border-radius:.4rem}"]],data:{}});function g(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,2,"ion-label",[["class","number"]],null,null,null,o.W,o.q)),e.pb(1,49152,null,0,b.O,[e.h,e.k],null,null),(l()(),e.Ib(2,0,["",""]))],null,function(l,n){l(n,2,0,n.component.cartNumber)})}function f(l){return e.Kb(0,[e.Gb(402653184,1,{tabs:0}),(l()(),e.qb(1,0,null,null,38,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],function(l,n,t){var u=!0;return"ionTabButtonClick"===n&&(u=!1!==e.Ab(l,2).select(t.detail.tab)&&u),u},o.ib,o.C)),e.pb(2,49152,[[1,4],["tabs",4]],1,b.wb,[b.Ib],null,null),e.Gb(335544320,2,{tabBar:0}),(l()(),e.qb(4,0,null,1,35,"ion-tab-bar",[["color","tabs"],["slot","bottom"]],null,null,null,o.gb,o.A)),e.pb(5,49152,[[2,4]],0,b.ub,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.qb(6,0,null,0,7,"ion-tab-button",[["tab","home"]],null,null,null,o.hb,o.B)),e.pb(7,49152,null,0,b.vb,[e.h,e.k],{tab:[0,"tab"]},null),(l()(),e.qb(8,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,o.P,o.j)),e.pb(9,49152,null,0,b.D,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.qb(10,0,null,0,3,"ion-label",[],null,null,null,o.W,o.q)),e.pb(11,49152,null,0,b.O,[e.h,e.k],null,null),(l()(),e.Ib(12,0,["",""])),e.Cb(131072,r.i,[r.j,e.h]),(l()(),e.qb(14,0,null,0,7,"ion-tab-button",[["tab","category"]],null,null,null,o.hb,o.B)),e.pb(15,49152,null,0,b.vb,[e.h,e.k],{tab:[0,"tab"]},null),(l()(),e.qb(16,0,null,0,1,"ion-icon",[["name","menu"]],null,null,null,o.P,o.j)),e.pb(17,49152,null,0,b.D,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.qb(18,0,null,0,3,"ion-label",[],null,null,null,o.W,o.q)),e.pb(19,49152,null,0,b.O,[e.h,e.k],null,null),(l()(),e.Ib(20,0,["",""])),e.Cb(131072,r.i,[r.j,e.h]),(l()(),e.qb(22,0,null,0,9,"ion-tab-button",[["tab","cart"]],null,null,null,o.hb,o.B)),e.pb(23,49152,null,0,b.vb,[e.h,e.k],{tab:[0,"tab"]},null),(l()(),e.qb(24,0,null,0,1,"ion-icon",[["name","cart"]],null,null,null,o.P,o.j)),e.pb(25,49152,null,0,b.D,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.hb(16777216,null,0,1,null,g)),e.pb(27,16384,null,0,i.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(28,0,null,0,3,"ion-label",[],null,null,null,o.W,o.q)),e.pb(29,49152,null,0,b.O,[e.h,e.k],null,null),(l()(),e.Ib(30,0,["",""])),e.Cb(131072,r.i,[r.j,e.h]),(l()(),e.qb(32,0,null,0,7,"ion-tab-button",[["tab","mine"]],null,null,null,o.hb,o.B)),e.pb(33,49152,null,0,b.vb,[e.h,e.k],{tab:[0,"tab"]},null),(l()(),e.qb(34,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,o.P,o.j)),e.pb(35,49152,null,0,b.D,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.qb(36,0,null,0,3,"ion-label",[],null,null,null,o.W,o.q)),e.pb(37,49152,null,0,b.O,[e.h,e.k],null,null),(l()(),e.Ib(38,0,["",""])),e.Cb(131072,r.i,[r.j,e.h])],function(l,n){var t=n.component;l(n,5,0,"tabs"),l(n,7,0,"home"),l(n,9,0,"home"),l(n,15,0,"category"),l(n,17,0,"menu"),l(n,23,0,"cart"),l(n,25,0,"cart"),l(n,27,0,t.cartNumber>0),l(n,33,0,"mine"),l(n,35,0,"person")},function(l,n){l(n,12,0,e.Jb(n,12,0,e.Ab(n,13).transform("TabHome"))),l(n,20,0,e.Jb(n,20,0,e.Ab(n,21).transform("TabCategory"))),l(n,30,0,e.Jb(n,30,0,e.Ab(n,31).transform("TabCart"))),l(n,38,0,e.Jb(n,38,0,e.Ab(n,39).transform("TabMine")))})}function y(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-tabs",[],null,null,null,f,d)),e.pb(1,180224,null,0,m,[r.j,b.e,s.a,p.a],null,null)],null,null)}var v=e.mb("app-tabs",m,y,{},{},[]),C=t("gIcY"),q=t("ZYCi"),k=function(){return function(){}}();t.d(n,"TabsPageModuleNgFactory",function(){return S});var S=e.nb(u,[],function(l){return e.xb([e.yb(512,e.j,e.cb,[[8,[a.a,v]],[3,e.j],e.x]),e.yb(4608,i.l,i.k,[e.u,[2,i.r]]),e.yb(4608,b.c,b.c,[e.z,e.g]),e.yb(4608,b.Hb,b.Hb,[b.c,e.j,e.q,i.c]),e.yb(4608,b.Mb,b.Mb,[b.c,e.j,e.q,i.c]),e.yb(4608,C.m,C.m,[]),e.yb(1073742336,i.b,i.b,[]),e.yb(1073742336,b.Eb,b.Eb,[]),e.yb(1073742336,C.l,C.l,[]),e.yb(1073742336,C.c,C.c,[]),e.yb(1073742336,q.o,q.o,[[2,q.u],[2,q.m]]),e.yb(1073742336,k,k,[]),e.yb(1073742336,r.g,r.g,[]),e.yb(1073742336,u,u,[]),e.yb(1024,q.k,function(){return[[{path:"tabs",component:m,children:[{path:"home",children:[{path:"",loadChildren:"../home/home.module#HomePageModule"}]},{path:"category",children:[{path:"",loadChildren:"../category/category.module#CategoryPageModule"}]},{path:"cart",children:[{path:"",loadChildren:"../cart/cart.module#CartPageModule"}]},{path:"mine",children:[{path:"",loadChildren:"../mine/mine.module#MinePageModule"}]},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}]]},[])])})}}]);