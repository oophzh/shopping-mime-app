(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4FVb":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=t("AwSQ"),o=t("8cFx"),r=function(){function n(n,l,t,e){this.dataService=n,this.commonService=l,this.translate=t,this.router=e,this.priceRangeList=[],this.seletedTabIndex=0,this.productList=[],this.productTotal=0,this.page={amount:0,curPage:1,pageSize:10},this.defaultImage="/assets/images/default_loading.gif"}return n.prototype.ngOnInit=function(){sessionStorage.systemConf&&(this.priceRangeList=JSON.parse(sessionStorage.systemConf).priceRange,this.priceRangeList[this.seletedTabIndex].selected=!0,this.getProductsByPriceRange(null))},n.prototype.clickTab=function(n){this.seletedTabIndex=n,this.page.curPage=1,this.productList=[],this.infiniteScroll.disabled=!1,this.getProductsByPriceRange(null);for(var l=0;l<this.priceRangeList.length;l++)this.priceRangeList[l].selected=n==l},n.prototype.getProductsByPriceRange=function(n){n||this.content.scrollToTop();var l=this;l.dataService.productsByPriceRange(this.page.curPage,this.priceRangeList[this.seletedTabIndex].from,this.priceRangeList[this.seletedTabIndex].to,function(t){if(t.data.page&&(l.productTotal=t.data.page.amount),t.data.products){for(var e=t.data.products,i=0;i<e.length;i++){var o=e[i];o.img_display=l.commonService.picUrl+o.img_display,o.current_price=l.commonService.formatProductPrice(o.current_price,null),o.original_price=l.commonService.formatProductPrice(o.original_price,null)}l.productList=1==l.page.curPage?e:l.productList.concat(e)}n&&n.target.complete(),l.productList.length==l.productTotal&&(l.infiniteScroll.disabled=!0)},null)},n.prototype.doRefresh=function(n){this.page.curPage=1,this.productList=[],this.infiniteScroll.disabled=!1,this.getProductsByPriceRange(n)},n.prototype.loadData=function(n){this.page.curPage=this.page.curPage+1,this.getProductsByPriceRange(n)},n}(),u=function(){return function(){}}(),c=t("pMnS"),a=t("Ip0R"),p=t("ZYCi"),s=t("ZZ/e"),d=t("JbCa"),g=t("oBZk"),b=t("A7o+"),m=e.ob({encapsulation:0,styles:[[".header-tabs-wrap[_ngcontent-%COMP%]{display:flex;background:#fff}.header-tabs-wrap[_ngcontent-%COMP%]   .header-tab-wrap[_ngcontent-%COMP%]{flex:1;text-align:center;color:#333;font-size:.6rem;height:2rem;line-height:2rem;border-bottom:1px solid #c8c7cc}.header-tabs-wrap[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{border-bottom:2px solid #ea5455}.product-list[_ngcontent-%COMP%]{position:relative;width:100%;font-size:.6rem;color:#333;box-sizing:border-box;background:#f5f5f5}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]{width:calc(50% - .15rem);box-sizing:border-box;display:inline-block;background:#fff;margin-top:.3rem;border-radius:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]{position:relative;width:100%;box-sizing:border-box}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;min-height:5rem;border-radius:.5rem .5rem 0 0}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:.6rem;color:#333;padding:0 .3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.5rem;line-height:1.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]{padding:0 .3rem .3rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]{color:#ea5455;font-size:.8rem;font-weight:700}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]{font-size:.6rem;color:#999;text-decoration:line-through;margin-left:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]{padding:0 .3rem;margin-bottom:.3rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .color-image-wrap[_ngcontent-%COMP%]{display:inline-block;width:1.5rem;height:auto;overflow:hidden;position:relative;border:1px solid #fff}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .color-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;padding:0}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{border:1px solid #ea5455}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .off-wrap[_ngcontent-%COMP%]{background:#ea5455;border-radius:3px;padding:.1rem;color:#fff;font-size:.5rem;display:inline-block;margin-top:.25rem;margin-left:.5rem;margin-bottom:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]:nth-child(2n+1){margin-right:.15rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]:nth-child(2n){margin-left:.15rem}"]],data:{}});function h(n){return e.Kb(0,[(n()(),e.qb(0,0,null,null,3,"div",[["class","header-tab-wrap"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.clickTab(n.context.index)&&e),e},null,null)),e.pb(1,278528,null,0,a.h,[e.s,e.t,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Db(2,{selected:0}),(n()(),e.Ib(3,null,[" "," "]))],function(n,l){var t=n(l,2,0,l.context.$implicit.selected);n(l,1,0,"header-tab-wrap",t)},function(n,l){n(l,3,0,l.context.$implicit.disp)})}function f(n){return e.Kb(0,[(n()(),e.qb(0,0,null,null,12,"div",[["class","product-item"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Ab(n,1).onClick()&&i),"click"===l&&(i=!1!==e.Ab(n,4).onClick(t)&&i),i},null,null)),e.pb(1,16384,null,0,p.n,[p.m,p.a,[8,null],e.E,e.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(2,{productId:0,productColorId:1}),e.Bb(3,1),e.pb(4,737280,null,0,s.Nb,[a.g,s.Ib,e.k,p.m,[2,p.n]],null,null),(n()(),e.qb(5,0,null,null,2,"div",[["class","image-wrap"]],null,null,null,null,null)),(n()(),e.qb(6,0,null,null,1,"img",[],null,null,null,null,null)),e.pb(7,1720320,null,0,d.a,[e.k,e.z,e.B,[2,"options"]],{lazyImage:[0,"lazyImage"],defaultImage:[1,"defaultImage"],errorImage:[2,"errorImage"]},null),(n()(),e.qb(8,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),e.Ib(9,null,["",""])),(n()(),e.qb(10,0,null,null,2,"div",[["class","product-price-wrap"]],null,null,null,null,null)),(n()(),e.qb(11,0,null,null,0,"span",[["class","current-price"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.qb(12,0,null,null,0,"span",[["class","original-price"]],[[8,"innerHTML",1]],null,null,null,null))],function(n,l){var t=l.component,e=n(l,2,0,l.context.$implicit.product_id,l.context.$implicit.color_id),i=n(l,3,0,"/product/detail");n(l,1,0,e,i),n(l,4,0),n(l,7,0,l.context.$implicit.img_display,t.defaultImage,t.defaultImage)},function(n,l){n(l,9,0,l.context.$implicit.pcName),n(l,11,0,l.context.$implicit.current_price),n(l,12,0,l.context.$implicit.original_price)})}function P(n){return e.Kb(0,[(n()(),e.qb(0,0,null,null,3,"ion-list",[["class","product-list"]],null,null,null,g.X,g.r)),e.pb(1,49152,null,0,s.P,[e.h,e.k],null,null),(n()(),e.hb(16777216,null,0,1,null,f)),e.pb(3,278528,null,0,a.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.productList)},null)}function C(n){return e.Kb(0,[(n()(),e.qb(0,0,null,null,4,"div",[["class","empty-view"]],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,0,"img",[["src","../../assets/images/no_data.png"]],null,null,null,null,null)),(n()(),e.qb(2,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.Ib(3,null,["",""])),e.Cb(131072,b.i,[b.j,e.h])],null,function(n,l){n(l,3,0,e.Jb(l,3,0,e.Ab(l,4).transform("CommonNoData")))})}function _(n){return e.Kb(0,[e.Gb(402653184,1,{infiniteScroll:0}),e.Gb(402653184,2,{content:0}),(n()(),e.qb(2,0,null,null,11,"ion-header",[],null,null,null,g.O,g.i)),e.pb(3,49152,null,0,s.C,[e.h,e.k],null,null),(n()(),e.qb(4,0,null,0,9,"ion-toolbar",[],null,null,null,g.lb,g.F)),e.pb(5,49152,null,0,s.Cb,[e.h,e.k],null,null),(n()(),e.qb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,g.K,g.e)),e.pb(7,49152,null,0,s.m,[e.h,e.k],null,null),(n()(),e.qb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Ab(n,10).onClick(t)&&i),i},g.I,g.c)),e.pb(9,49152,null,0,s.h,[e.h,e.k],null,null),e.pb(10,16384,null,0,s.i,[[2,s.ib],s.Ib],null,null),(n()(),e.qb(11,0,null,0,2,"ion-title",[],null,null,null,g.kb,g.E)),e.pb(12,49152,null,0,s.Ab,[e.h,e.k],null,null),(n()(),e.Ib(-1,0,["Add Items"])),(n()(),e.qb(14,0,null,null,3,"ion-header",[["class","header-tabs-wrap"]],null,null,null,g.O,g.i)),e.pb(15,49152,null,0,s.C,[e.h,e.k],null,null),(n()(),e.hb(16777216,null,0,1,null,h)),e.pb(17,278528,null,0,a.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(18,0,null,null,10,"ion-content",[],null,null,null,g.L,g.f)),e.pb(19,49152,[[2,4],["content",4]],0,s.v,[e.h,e.k],null,null),(n()(),e.hb(16777216,null,0,1,null,P)),e.pb(21,16384,null,0,a.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.hb(16777216,null,0,1,null,C)),e.pb(23,16384,null,0,a.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(24,0,null,0,4,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],function(n,l,t){var e=!0;return"ionInfinite"===l&&(e=!1!==n.component.loadData(t)&&e),e},g.R,g.k)),e.pb(25,49152,[[1,4],["infiniteScroll",4]],0,s.F,[e.h,e.k],{threshold:[0,"threshold"]},null),(n()(),e.qb(26,0,null,0,2,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"]],null,null,null,g.Q,g.l)),e.pb(27,49152,null,0,s.G,[e.h,e.k],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),e.Cb(131072,b.i,[b.j,e.h])],function(n,l){var t=l.component;n(l,17,0,t.priceRangeList),n(l,21,0,t.productList&&t.productList.length>0),n(l,23,0,!t.productList||0==t.productList.length),n(l,25,0,"100px"),n(l,27,0,"bubbles",e.sb(1,"",e.Jb(l,27,1,e.Ab(l,28).transform("CommonLoadingText")),""))},null)}function M(n){return e.Kb(0,[(n()(),e.qb(0,0,null,null,1,"app-price-range",[],null,null,null,_,m)),e.pb(1,114688,null,0,r,[i.a,o.a,b.j,p.m],null,null)],function(n,l){n(l,1,0)},null)}var O=e.mb("app-price-range",r,M,{},{},[]),k=t("gIcY");t.d(l,"PriceRangePageModuleNgFactory",function(){return y});var y=e.nb(u,[],function(n){return e.xb([e.yb(512,e.j,e.cb,[[8,[c.a,O]],[3,e.j],e.x]),e.yb(4608,a.l,a.k,[e.u,[2,a.r]]),e.yb(4608,k.m,k.m,[]),e.yb(4608,s.c,s.c,[e.z,e.g]),e.yb(4608,s.Hb,s.Hb,[s.c,e.j,e.q,a.c]),e.yb(4608,s.Mb,s.Mb,[s.c,e.j,e.q,a.c]),e.yb(1073742336,a.b,a.b,[]),e.yb(1073742336,k.l,k.l,[]),e.yb(1073742336,k.c,k.c,[]),e.yb(1073742336,s.Eb,s.Eb,[]),e.yb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),e.yb(1073742336,b.g,b.g,[]),e.yb(1073742336,d.b,d.b,[]),e.yb(1073742336,u,u,[]),e.yb(1024,p.k,function(){return[[{path:"",component:r}]]},[])])})}}]);