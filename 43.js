(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{ypEY:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=t("mrSG"),r=t("AwSQ"),u=t("8cFx"),i=t("ZZ/e"),c=function(){function n(n,l,t,o,e,r,u){var i=this;this.route=n,this.dataService=l,this.commonService=t,this.translate=o,this.router=e,this.changeDetectorRef=r,this.nav=u,this.categoryId="",this.queryCategoryId="",this.categoryName="",this.categoryList=[],this.productList=[],this.productTotal=0,this.page={amount:0,curPage:1,pageSize:10},this.currentSort=1,this.showSort=!1,this.showCategory=!1,this.isList=!1,this.defaultImage="/assets/images/default_loading.gif",this.systemColorShow=!0,this.route.queryParams.subscribe(function(n){i.categoryId=n.categoryId,i.queryCategoryId=i.categoryId,i.categoryName=n.categoryName;var l=i;i.translate.get("CategoryViewAll").subscribe(function(n){(sessionStorage.systemConf?JSON.parse(sessionStorage.systemConf).menu.menu_ref:"").forEach(function(t){if(t.menu_type==l.categoryId){if(""!==t.next_menu&&t.next_menu.length>0){l.categoryList=JSON.parse(JSON.stringify(t.next_menu));var o=JSON.parse(JSON.stringify(t));return o.menu_name=n,o.next_menu="",void l.categoryList.unshift(o)}}else""!==t.next_menu&&t.next_menu.length>0&&t.next_menu.forEach(function(t){if(t.menu_type==l.categoryId&&""!==t.next_menu&&t.next_menu.length>0){l.categoryList=JSON.parse(JSON.stringify(t.next_menu));var o=JSON.parse(JSON.stringify(t));return o.menu_name=n,o.next_menu="",void l.categoryList.unshift(o)}})})})})}return n.prototype.ngOnInit=function(){if(this.content.scrollByPoint(0,1,0),sessionStorage.systemConf){var n=JSON.parse(sessionStorage.systemConf);this.systemColorShow="1"==n.img_block}this.getCategoryProducts(null)},n.prototype.overrideHardwareBackAction=function(n){var l=this;console.log("overrideHardwareBackAction"),n.detail.register(100,function(){return e.b(l,void 0,void 0,function(){return e.e(this,function(n){return console.log("$event.detail.register"),console.log("this.showCategory = "+this.showCategory),this.showCategory?(this.showCategory=!1,this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges(),[2]):(console.log("this.showSort = "+this.showSort),this.showSort?(this.showSort=!1,this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges(),[2]):(this.commonService.back(),[2]))})})})},n.prototype.getCategoryProducts=function(n){n||this.content.scrollToTop();var l=this;this.dataService.getCategoryProducts(this.queryCategoryId,this.page.curPage,this.currentSort,function(t){if(t.data){if(t.data.page&&(l.productTotal=t.data.page.amount),t.data.products){for(var o=t.data.products,e=0;e<o.length;e++){for(var r=o[e],u=0;u<r.display_data.length;u++){var i=r.display_data[u];i.img_display=l.commonService.picUrl+i.img_display,i.color_img=l.commonService.picUrl+i.color_img,i.current_price=l.commonService.formatProductPrice(i.current_price,null),i.original_price=l.commonService.formatProductPrice(i.original_price,null)}r.selectedIndex=0}l.productList=1==l.page.curPage?o:l.productList.concat(o)}n&&n.target.complete(),l.productList.length==l.productTotal&&(l.infiniteScroll.disabled=!0)}},null)},n.prototype.doRefresh=function(n){this.page.curPage=1,this.productList=[],this.infiniteScroll.disabled=!1,this.getCategoryProducts(n)},n.prototype.loadData=function(n){this.page.curPage=this.page.curPage+1,this.getCategoryProducts(n)},n.prototype.showSortMask=function(){this.showSort=!this.showSort,this.showCategory=!1},n.prototype.chooseSort=function(n,l){l.stopPropagation(),this.currentSort=n,this.page.curPage=1,this.productList=[],this.infiniteScroll.disabled=!1,this.getCategoryProducts(null),this.showSort=!this.showSort},n.prototype.showCategoryMask=function(){this.showCategory=!this.showCategory,this.showSort=!1},n.prototype.chooseCategory=function(n,l){l.stopPropagation(),this.queryCategoryId=n,this.page.curPage=1,this.productList=[],this.infiniteScroll.disabled=!1,this.getCategoryProducts(null),this.showCategory=!this.showCategory},n.prototype.changeLayout=function(){console.log("changeLayout"),this.isList=!this.isList},n.prototype.colorImageClick=function(n,l){event.stopPropagation(),this.productList[n].selectedIndex=l},n.prototype.gotoHome=function(){this.nav.navigateRoot("/")},n.prototype.logScrollEnd=function(){var n=this;this.commonService.isIos()&&this.content.getScrollElement().then(function(l){0===l.scrollTop&&n.content.scrollByPoint(0,1,0),l.scrollTop+l.clientHeight===l.scrollHeight&&n.content.scrollByPoint(0,-1,0)})},n}(),a=function(){return function(){}}(),s=t("pMnS"),p=t("Ip0R"),d=t("A7o+"),g=t("oBZk"),m=t("ZYCi"),b=o.ob({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:$bgColor}.search-icon[_ngcontent-%COMP%]{color:#333;font-size:1.3rem;margin-right:.5rem}.cart-icon[_ngcontent-%COMP%]{color:#333;font-size:1.3rem}.layout-icon[_ngcontent-%COMP%]{margin-left:.5rem}.title-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.title-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:1.2rem}.sort-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background:#fff;border-bottom:1px solid #f3f3f3;height:1.75rem;line-height:1.75rem}.sort-header[_ngcontent-%COMP%]   .total-wrap[_ngcontent-%COMP%]{color:#333;font-size:.6rem;padding:0 .5rem}.sort-header[_ngcontent-%COMP%]   .sort-wrap[_ngcontent-%COMP%]{color:#333;font-size:.6rem;padding:0 .5rem;display:flex;align-items:center;font-weight:700}.sort-header[_ngcontent-%COMP%]   .sort-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:.25rem;height:1.75rem;line-height:2rem}.sort-header[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:rotate(180deg);margin-left:.25rem}.sort-mask[_ngcontent-%COMP%]{position:fixed;left:0;top:4rem;width:100%;height:100%;z-index:10;background:rgba(0,0,0,.3)}.sort-mask[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;background:#fff;font-size:.6rem;color:#333}.sort-mask[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%]{border-bottom:1px solid #f3f3f3;padding:0 .5rem;height:2rem;line-height:2rem;display:flex;align-items:center;justify-content:space-between}.sort-mask[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;color:#ea5455}.product-list-wrap[_ngcontent-%COMP%]{width:100%;display:flex;padding-bottom:.5rem}.product-list-wrap[_ngcontent-%COMP%]   .left-product-list-wrap[_ngcontent-%COMP%]{width:calc(50% - .15rem);margin-right:.15rem}.product-list-wrap[_ngcontent-%COMP%]   .right-product-list-wrap[_ngcontent-%COMP%]{width:calc(50% - .15rem);margin-left:.15rem}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]{position:relative;width:100%;font-size:.6rem;color:#333;box-sizing:border-box;background:#f5f5f5}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;display:inline-block;background:#fff;margin-top:.3rem;border-radius:.5rem}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]{position:relative;width:100%;box-sizing:border-box}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;min-height:5rem;border-radius:.5rem .5rem 0 0}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:.65rem;color:#333;padding:0 .3rem;line-height:1rem}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]{padding:0 .3rem .3rem}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]{color:#ea5455;font-size:.8rem;font-weight:700}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]{font-size:.6rem;color:#999;text-decoration:line-through;margin-left:.5rem}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]{padding:0 .3rem;margin-bottom:.3rem}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .color-image-wrap[_ngcontent-%COMP%]{display:inline-block;width:1.5rem;height:auto;overflow:hidden;position:relative;border:1px solid #fff}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .color-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;padding:0}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{border:1px dotted #ccc}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .off-wrap[_ngcontent-%COMP%]{background:#ea5455;border-radius:3px;padding:.1rem;color:#fff;font-size:.5rem;display:inline-block;margin-top:.25rem;margin-left:.5rem;margin-bottom:.5rem}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]:nth-child(2n+1){margin-right:.15rem}.product-list-wrap[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]:nth-child(2n){margin-left:.15rem}.product-list[_ngcontent-%COMP%]{position:relative;width:100%;font-size:.6rem;color:#333}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]{padding:.3rem;border-bottom:1px solid #f3f3f3;display:flex}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]{width:8rem;margin-right:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;min-height:5rem;background:#f5f5f5}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]{flex:1;padding-bottom:.1rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#333;font-size:.65rem;line-height:1rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:#ea5455}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]{font-size:.6rem;color:#999;text-decoration:line-through;margin-left:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]{margin-top:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .color-image-wrap[_ngcontent-%COMP%]{display:inline-block;width:1.5rem;height:auto;overflow:hidden;position:relative;border:1px solid #fff}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .color-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;padding:0}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{border:1px dotted #ccc}"]],data:{}});function h(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,7,"div",[["class","sort-wrap"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.showCategoryMask()&&o),o},null,null)),o.pb(1,278528,null,0,p.h,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Db(2,{selected:0}),(n()(),o.qb(3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Ib(4,null,["",""])),o.Cb(131072,d.i,[d.j,o.h]),(n()(),o.qb(6,0,null,null,1,"ion-icon",[["class","sort-icon"],["name","arrow-down"]],null,null,null,g.P,g.j)),o.pb(7,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null)],function(n,l){var t=n(l,2,0,l.component.showCategory);n(l,1,0,"sort-wrap",t),n(l,7,0,"arrow-down")},function(n,l){n(l,4,0,o.Jb(l,4,0,o.Ab(l,5).transform("TabCategory")))})}function f(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,3,"div",[["class","color-image-wrap"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.colorImageClick(n.parent.parent.context.index,n.context.index)&&o),o},null,null)),o.pb(1,278528,null,0,p.h,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Db(2,{selected:0}),(n()(),o.qb(3,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],function(n,l){var t=n(l,2,0,l.parent.parent.context.$implicit.selectedIndex==l.context.index);n(l,1,0,"color-image-wrap",t)},function(n,l){n(l,3,0,l.context.$implicit.color_img)})}function C(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,2,"div",[["class","color-wrap"]],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,f)),o.pb(2,278528,null,0,p.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.parent.context.$implicit.display_data)},null)}function P(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,15,"div",[["class","product-item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Ab(n,1).onClick()&&e),"click"===l&&(e=!1!==o.Ab(n,4).onClick(t)&&e),e},null,null)),o.pb(1,16384,null,0,m.n,[m.m,m.a,[8,null],o.E,o.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),o.Db(2,{productId:0,productColorId:1}),o.Bb(3,1),o.pb(4,737280,null,0,i.Nb,[p.g,i.Ib,o.k,m.m,[2,m.n]],null,null),(n()(),o.qb(5,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,1,"div",[["class","image-wrap"]],null,null,null,null,null)),(n()(),o.qb(7,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.qb(8,0,null,null,7,"div",[["class","product-info-wrap"]],null,null,null,null,null)),(n()(),o.qb(9,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),o.Ib(10,null,["",""])),(n()(),o.qb(11,0,null,null,2,"div",[["class","product-price-wrap"]],null,null,null,null,null)),(n()(),o.qb(12,0,null,null,0,"span",[["class","current-price"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o.qb(13,0,null,null,0,"span",[["class","original-price"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,C)),o.pb(15,16384,null,0,p.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component,o=n(l,2,0,l.context.$implicit.product_id,l.context.$implicit.display_data[l.context.$implicit.selectedIndex].color_id),e=n(l,3,0,"/product/detail");n(l,1,0,o,e),n(l,4,0),n(l,15,0,t.systemColorShow)},function(n,l){n(l,7,0,l.context.$implicit.display_data[l.context.$implicit.selectedIndex].img_display),n(l,10,0,l.context.$implicit.product_name),n(l,12,0,l.context.$implicit.display_data[l.context.$implicit.selectedIndex].current_price),n(l,13,0,l.context.$implicit.display_data[l.context.$implicit.selectedIndex].original_price)})}function _(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,3,"ion-list",[["class","product-list"]],null,null,null,g.X,g.r)),o.pb(1,49152,null,0,i.P,[o.h,o.k],null,null),(n()(),o.hb(16777216,null,0,1,null,P)),o.pb(3,278528,null,0,p.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.productList)},null)}function M(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,3,"div",[["class","color-image-wrap"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.colorImageClick(n.parent.parent.parent.context.index,n.context.index)&&o),o},null,null)),o.pb(1,278528,null,0,p.h,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Db(2,{selected:0}),(n()(),o.qb(3,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],function(n,l){var t=n(l,2,0,l.parent.parent.parent.context.$implicit.selectedIndex==l.context.index);n(l,1,0,"color-image-wrap",t)},function(n,l){n(l,3,0,l.context.$implicit.color_img)})}function O(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,2,"div",[["class","color-wrap"]],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,M)),o.pb(2,278528,null,0,p.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.parent.parent.context.$implicit.display_data)},null)}function k(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,13,"div",[["class","product-item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Ab(n,1).onClick()&&e),"click"===l&&(e=!1!==o.Ab(n,4).onClick(t)&&e),e},null,null)),o.pb(1,16384,null,0,m.n,[m.m,m.a,[8,null],o.E,o.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),o.Db(2,{productId:0,productColorId:1}),o.Bb(3,1),o.pb(4,737280,null,0,i.Nb,[p.g,i.Ib,o.k,m.m,[2,m.n]],null,null),(n()(),o.qb(5,0,null,null,1,"div",[["class","image-wrap"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.qb(7,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),o.Ib(8,null,["",""])),(n()(),o.qb(9,0,null,null,2,"div",[["class","product-price-wrap"]],null,null,null,null,null)),(n()(),o.qb(10,0,null,null,0,"span",[["class","current-price"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o.qb(11,0,null,null,0,"span",[["class","original-price"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,O)),o.pb(13,16384,null,0,p.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component,o=n(l,2,0,l.parent.context.$implicit.product_id,l.parent.context.$implicit.display_data[l.parent.context.$implicit.selectedIndex].color_id),e=n(l,3,0,"/product/detail");n(l,1,0,o,e),n(l,4,0),n(l,13,0,t.systemColorShow)},function(n,l){n(l,6,0,l.parent.context.$implicit.display_data[l.parent.context.$implicit.selectedIndex].img_display),n(l,8,0,l.parent.context.$implicit.product_name),n(l,10,0,l.parent.context.$implicit.display_data[l.parent.context.$implicit.selectedIndex].current_price),n(l,11,0,l.parent.context.$implicit.display_data[l.parent.context.$implicit.selectedIndex].original_price)})}function w(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,k)),o.pb(2,16384,null,0,p.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.context.index%2==0)},null)}function y(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,3,"div",[["class","color-image-wrap"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.colorImageClick(n.parent.parent.parent.context.index,n.context.index)&&o),o},null,null)),o.pb(1,278528,null,0,p.h,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Db(2,{selected:0}),(n()(),o.qb(3,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],function(n,l){var t=n(l,2,0,l.parent.parent.parent.context.$implicit.selectedIndex==l.context.index);n(l,1,0,"color-image-wrap",t)},function(n,l){n(l,3,0,l.context.$implicit.color_img)})}function x(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,2,"div",[["class","color-wrap"]],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,y)),o.pb(2,278528,null,0,p.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.parent.parent.context.$implicit.display_data)},null)}function v(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,13,"div",[["class","product-item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Ab(n,1).onClick()&&e),"click"===l&&(e=!1!==o.Ab(n,4).onClick(t)&&e),e},null,null)),o.pb(1,16384,null,0,m.n,[m.m,m.a,[8,null],o.E,o.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),o.Db(2,{productId:0,productColorId:1}),o.Bb(3,1),o.pb(4,737280,null,0,i.Nb,[p.g,i.Ib,o.k,m.m,[2,m.n]],null,null),(n()(),o.qb(5,0,null,null,1,"div",[["class","image-wrap"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.qb(7,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),o.Ib(8,null,["",""])),(n()(),o.qb(9,0,null,null,2,"div",[["class","product-price-wrap"]],null,null,null,null,null)),(n()(),o.qb(10,0,null,null,0,"span",[["class","current-price"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o.qb(11,0,null,null,0,"span",[["class","original-price"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,x)),o.pb(13,16384,null,0,p.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component,o=n(l,2,0,l.parent.context.$implicit.product_id,l.parent.context.$implicit.display_data[l.parent.context.$implicit.selectedIndex].color_id),e=n(l,3,0,"/product/detail");n(l,1,0,o,e),n(l,4,0),n(l,13,0,t.systemColorShow)},function(n,l){n(l,6,0,l.parent.context.$implicit.display_data[l.parent.context.$implicit.selectedIndex].img_display),n(l,8,0,l.parent.context.$implicit.product_name),n(l,10,0,l.parent.context.$implicit.display_data[l.parent.context.$implicit.selectedIndex].current_price),n(l,11,0,l.parent.context.$implicit.display_data[l.parent.context.$implicit.selectedIndex].original_price)})}function q(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,v)),o.pb(2,16384,null,0,p.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.context.index%2==1)},null)}function I(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,10,"div",[["class","product-list-wrap"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,4,"div",[["class","left-product-list-wrap"]],null,null,null,null,null)),(n()(),o.qb(2,0,null,null,3,"ion-list",[["class","product-grid"]],null,null,null,g.X,g.r)),o.pb(3,49152,null,0,i.P,[o.h,o.k],null,null),(n()(),o.hb(16777216,null,0,1,null,w)),o.pb(5,278528,null,0,p.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null),(n()(),o.qb(6,0,null,null,4,"div",[["class","right-product-list-wrap"]],null,null,null,null,null)),(n()(),o.qb(7,0,null,null,3,"ion-list",[["class","product-grid"]],null,null,null,g.X,g.r)),o.pb(8,49152,null,0,i.P,[o.h,o.k],null,null),(n()(),o.hb(16777216,null,0,1,null,q)),o.pb(10,278528,null,0,p.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,5,0,t.productList),n(l,10,0,t.productList)},null)}function S(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,5,"div",[["class","sort-item"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.chooseCategory(n.context.$implicit.menu_type,t)&&o),o},null,null)),(n()(),o.qb(1,0,null,null,2,"ion-label",[],null,null,null,g.W,g.q)),o.pb(2,49152,null,0,i.O,[o.h,o.k],null,null),(n()(),o.Ib(3,0,["",""])),(n()(),o.qb(4,0,null,null,1,"ion-icon",[["name","checkmark"]],[[8,"hidden",0]],null,null,g.P,g.j)),o.pb(5,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null)],function(n,l){n(l,5,0,"checkmark")},function(n,l){var t=l.component;n(l,3,0,l.context.$implicit.menu_name),n(l,4,0,t.queryCategoryId!==l.context.$implicit.menu_type)})}function $(n){return o.Kb(0,[o.Gb(402653184,1,{infiniteScroll:0}),o.Gb(402653184,2,{content:0}),(n()(),o.qb(2,0,null,null,23,"ion-header",[],null,null,null,g.O,g.i)),o.pb(3,49152,null,0,i.C,[o.h,o.k],null,null),(n()(),o.qb(4,0,null,0,21,"ion-toolbar",[],null,null,null,g.lb,g.F)),o.pb(5,49152,null,0,i.Cb,[o.h,o.k],null,null),(n()(),o.qb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,g.K,g.e)),o.pb(7,49152,null,0,i.m,[o.h,o.k],null,null),(n()(),o.qb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Ab(n,10).onClick(t)&&e),e},g.I,g.c)),o.pb(9,49152,null,0,i.h,[o.h,o.k],null,null),o.pb(10,16384,null,0,i.i,[[2,i.ib],i.Ib],null,null),(n()(),o.qb(11,0,null,0,2,"ion-title",[],null,null,null,g.kb,g.E)),o.pb(12,49152,null,0,i.Ab,[o.h,o.k],null,null),(n()(),o.Ib(13,0,["",""])),(n()(),o.qb(14,0,null,0,11,"ion-buttons",[["slot","end"]],null,null,null,g.K,g.e)),o.pb(15,49152,null,0,i.m,[o.h,o.k],null,null),(n()(),o.qb(16,0,null,0,1,"ion-icon",[["class","search-icon"],["name","home"],["slot","end"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.gotoHome()&&o),o},g.P,g.j)),o.pb(17,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.qb(18,0,null,0,5,"ion-icon",[["class","cart-icon"],["name","cart"],["slot","end"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Ab(n,20).onClick()&&e),"click"===l&&(e=!1!==o.Ab(n,23).onClick(t)&&e),e},g.P,g.j)),o.pb(19,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),o.pb(20,16384,null,0,m.n,[m.m,m.a,[8,null],o.E,o.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),o.Db(21,{needBack:0}),o.Bb(22,1),o.pb(23,737280,null,0,i.Nb,[p.g,i.Ib,o.k,m.m,[2,m.n]],null,null),(n()(),o.qb(24,0,null,0,1,"ion-icon",[["class","layout-icon"],["name","logo-windows"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.changeLayout()&&o),o},g.P,g.j)),o.pb(25,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.qb(26,0,null,null,15,"ion-header",[],null,null,null,g.O,g.i)),o.pb(27,49152,null,0,i.C,[o.h,o.k],null,null),(n()(),o.qb(28,0,null,0,13,"div",[["class","sort-header"]],null,null,null,null,null)),(n()(),o.qb(29,0,null,null,2,"div",[["class","total-wrap"]],null,null,null,null,null)),(n()(),o.Ib(30,null,[" "," "," "])),o.Cb(131072,d.i,[d.j,o.h]),(n()(),o.hb(16777216,null,null,1,null,h)),o.pb(33,16384,null,0,p.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(34,0,null,null,7,"div",[["class","sort-wrap"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.showSortMask()&&o),o},null,null)),o.pb(35,278528,null,0,p.h,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Db(36,{selected:0}),(n()(),o.qb(37,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Ib(38,null,["",""])),o.Cb(131072,d.i,[d.j,o.h]),(n()(),o.qb(40,0,null,null,1,"ion-icon",[["class","sort-icon"],["name","arrow-down"]],null,null,null,g.P,g.j)),o.pb(41,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.qb(42,0,null,null,10,"ion-content",[],null,[[null,"ionScrollEnd"]],function(n,l,t){var o=!0;return"ionScrollEnd"===l&&(o=!1!==n.component.logScrollEnd()&&o),o},g.L,g.f)),o.pb(43,49152,[[2,4],["content",4]],0,i.v,[o.h,o.k],{scrollEvents:[0,"scrollEvents"]},null),(n()(),o.hb(16777216,null,0,1,null,_)),o.pb(45,16384,null,0,p.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.hb(16777216,null,0,1,null,I)),o.pb(47,16384,null,0,p.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(48,0,null,0,4,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],function(n,l,t){var o=!0;return"ionInfinite"===l&&(o=!1!==n.component.loadData(t)&&o),o},g.R,g.k)),o.pb(49,49152,[[1,4],["infiniteScroll",4]],0,i.F,[o.h,o.k],{threshold:[0,"threshold"]},null),(n()(),o.qb(50,0,null,0,2,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"]],null,null,null,g.Q,g.l)),o.pb(51,49152,null,0,i.G,[o.h,o.k],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),o.Cb(131072,d.i,[d.j,o.h]),(n()(),o.qb(53,0,null,null,22,"section",[["class","sort-mask"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.showSortMask()&&o),o},null,null)),(n()(),o.qb(54,0,null,null,21,"div",[["class","sort-list"]],null,null,null,null,null)),(n()(),o.qb(55,0,null,null,6,"div",[["class","sort-item"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.chooseSort(1,t)&&o),o},null,null)),(n()(),o.qb(56,0,null,null,3,"ion-label",[],null,null,null,g.W,g.q)),o.pb(57,49152,null,0,i.O,[o.h,o.k],null,null),(n()(),o.Ib(58,0,["",""])),o.Cb(131072,d.i,[d.j,o.h]),(n()(),o.qb(60,0,null,null,1,"ion-icon",[["name","checkmark"]],[[8,"hidden",0]],null,null,g.P,g.j)),o.pb(61,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.qb(62,0,null,null,6,"div",[["class","sort-item"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.chooseSort(2,t)&&o),o},null,null)),(n()(),o.qb(63,0,null,null,3,"ion-label",[],null,null,null,g.W,g.q)),o.pb(64,49152,null,0,i.O,[o.h,o.k],null,null),(n()(),o.Ib(65,0,["",""])),o.Cb(131072,d.i,[d.j,o.h]),(n()(),o.qb(67,0,null,null,1,"ion-icon",[["name","checkmark"]],[[8,"hidden",0]],null,null,g.P,g.j)),o.pb(68,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.qb(69,0,null,null,6,"div",[["class","sort-item"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.chooseSort(3,t)&&o),o},null,null)),(n()(),o.qb(70,0,null,null,3,"ion-label",[],null,null,null,g.W,g.q)),o.pb(71,49152,null,0,i.O,[o.h,o.k],null,null),(n()(),o.Ib(72,0,["",""])),o.Cb(131072,d.i,[d.j,o.h]),(n()(),o.qb(74,0,null,null,1,"ion-icon",[["name","checkmark"]],[[8,"hidden",0]],null,null,g.P,g.j)),o.pb(75,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.qb(76,0,null,null,3,"section",[["class","sort-mask"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.showCategoryMask()&&o),o},null,null)),(n()(),o.qb(77,0,null,null,2,"div",[["class","sort-list"]],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,S)),o.pb(79,278528,null,0,p.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,17,0,"home"),n(l,19,0,"cart");var e=n(l,21,0,!0),r=n(l,22,0,"/cart");n(l,20,0,e,r),n(l,23,0),n(l,25,0,"logo-windows"),n(l,33,0,t.categoryList&&t.categoryList.length>0);var u=n(l,36,0,t.showSort);n(l,35,0,"sort-wrap",u),n(l,41,0,"arrow-down"),n(l,43,0,!0),n(l,45,0,t.isList),n(l,47,0,!t.isList),n(l,49,0,"100px"),n(l,51,0,"bubbles",o.sb(1,"",o.Jb(l,51,1,o.Ab(l,52).transform("CommonLoadingText")),"")),n(l,61,0,"checkmark"),n(l,68,0,"checkmark"),n(l,75,0,"checkmark"),n(l,79,0,t.categoryList)},function(n,l){var t=l.component;n(l,13,0,t.categoryName),n(l,30,0,t.productTotal,o.Jb(l,30,1,o.Ab(l,31).transform("ProductTotalTitle"))),n(l,38,0,o.Jb(l,38,0,o.Ab(l,39).transform("ProductSortTitle"))),n(l,53,0,!t.showSort),n(l,58,0,o.Jb(l,58,0,o.Ab(l,59).transform("ProductSortType1"))),n(l,60,0,1!==t.currentSort),n(l,65,0,o.Jb(l,65,0,o.Ab(l,66).transform("ProductSortType2"))),n(l,67,0,2!==t.currentSort),n(l,72,0,o.Jb(l,72,0,o.Ab(l,73).transform("ProductSortType3"))),n(l,74,0,3!==t.currentSort),n(l,76,0,!t.showCategory)})}function L(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,1,"app-product",[],null,[["document","ionBackButton"]],function(n,l,t){var e=!0;return"document:ionBackButton"===l&&(e=!1!==o.Ab(n,1).overrideHardwareBackAction(t)&&e),e},$,b)),o.pb(1,114688,null,0,c,[m.a,r.a,u.a,d.j,m.m,o.h,i.Ib],null,null)],function(n,l){n(l,1,0)},null)}var j=o.mb("app-product",c,L,{},{},[]),D=t("gIcY"),A=t("JbCa");t.d(l,"ProductPageModuleNgFactory",function(){return T});var T=o.nb(a,[],function(n){return o.xb([o.yb(512,o.j,o.cb,[[8,[s.a,j]],[3,o.j],o.x]),o.yb(4608,p.l,p.k,[o.u,[2,p.r]]),o.yb(4608,D.m,D.m,[]),o.yb(4608,i.c,i.c,[o.z,o.g]),o.yb(4608,i.Hb,i.Hb,[i.c,o.j,o.q,p.c]),o.yb(4608,i.Mb,i.Mb,[i.c,o.j,o.q,p.c]),o.yb(1073742336,p.b,p.b,[]),o.yb(1073742336,D.l,D.l,[]),o.yb(1073742336,D.c,D.c,[]),o.yb(1073742336,i.Eb,i.Eb,[]),o.yb(1073742336,m.o,m.o,[[2,m.u],[2,m.m]]),o.yb(1073742336,d.g,d.g,[]),o.yb(1073742336,A.a,A.a,[]),o.yb(1073742336,a,a,[]),o.yb(1024,m.k,function(){return[[{path:"",component:c}]]},[]),o.yb(256,"options",{},[])])})}}]);