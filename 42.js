(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{siWO:function(t,n,l){"use strict";l.r(n);var e=l("CcnG"),o=l("mrSG"),r=l("ZZ/e"),u=l("AwSQ"),c=l("8cFx"),i=l("TMng"),a=function(){function t(t,n,l,e,o,r,u,c,i,a){var d=this;this.route=t,this.dataService=n,this.commonService=l,this.translate=e,this.el=o,this.router=r,this.modalController=u,this.platform=c,this.events=i,this.nav=a,this.productId="",this.productColorId="",this.productDetail="",this.slideOpts={effect:"flip",autoplay:!1},this.currentSliderIndex=1,this.currentProduct={},this.selectedColorIndex=0,this.selectedProduct={},this.productNumber=0,this.accordionItems=[],this.showAnimate=!1,this.defaultImage="/assets/images/default_loading.gif",this.disCountList=[],this.route.queryParams.subscribe(function(t){d.productId=t.productId,d.productColorId=t.productColorId,d.getProductDetail(d.productId),d.selectedProduct.productId=t.productId,d.selectedProduct.productColorId=t.productColorId,d.selectedProduct.productNum=1})}return t.prototype.ngOnInit=function(){var t=this;if(this.selectedProduct.attrDesObject={},this.platform.backButton.subscribe(function(){t.androidBackButtonHandle()}),sessionStorage.systemConf){var n=JSON.parse(sessionStorage.systemConf);n.top_advert_img&&this.disCountList.push(n.top_advert_img),n.next_advert_txt&&n.next_advert_txt[0]&&this.disCountList.push(n.next_advert_txt[0]),n.next_advert_txt&&n.next_advert_txt[1]&&this.disCountList.push(n.next_advert_txt[1])}},t.prototype.androidBackButtonHandle=function(){return o.b(this,void 0,void 0,function(){var t;return o.e(this,function(n){switch(n.label){case 0:return[4,this.modalController.getTop()];case 1:return(t=n.sent())?(t.dismiss(),[2]):[2]}})})},t.prototype.ionViewDidEnter=function(){this.getCartProductNumber()},t.prototype.getProductDetail=function(t){var n=this;this.dataService.getProductDetail(t,function(t){if(t.data){for(var l=t.data.color_data,e=0;e<l.length;e++){var o=l[e];o.color_img=n.commonService.picUrl+o.color_img,o.original_price=n.commonService.formatProductPrice(o.original_price,null),o.current_price=n.commonService.formatProductPrice(o.current_price,null);for(var r=0;r<o.dyn_attrs.length;r++){var u=o.dyn_attrs[r];u.selectedAttrIndex=0,n.selectedProduct.attrDesObject[u.attr_name]=u.domain_list[u.selectedAttrIndex]}for(r=0;r<o.img_groups.length;r++){var c=o.img_groups[r];c.big_img=n.commonService.picUrl+c.big_img,c.small_img=n.commonService.picUrl+c.small_img}n.productColorId==o.color_id&&(n.selectedColorIndex=e)}n.productDetail=t.data,n.currentProduct=n.productDetail.color_data[n.selectedColorIndex],n.selectedProduct.productColorId=n.productDetail.color_data[n.selectedColorIndex].color_id,n.translate.get(["DetailDescFeatures","DetailShippingReture","DetailWhenShipTitle","DetailWhenShipContent1","DetailWhenShipContent2","DetailCanShipTitle","DetailCanShipContent","DetailEasyReturnsTitle","DetailEasyReturnsContent"]).subscribe(function(t){var l={name:t.DetailDescFeatures.toUpperCase(),description:n.productDetail.product_des,showDetails:!0};n.accordionItems.push(l),l={name:t.DetailShippingReture.toUpperCase(),description:"<div style='font-weight: bold;padding-bottom: 0.25rem;font-size: 0.7rem;'>"+t.DetailWhenShipTitle+"</div><div style='font-normal: bold;padding-bottom: 0.5rem;'><span>"+t.DetailWhenShipContent1+"</span><br><span>"+t.DetailWhenShipContent2+"</span></div><div style='font-weight: bold;padding-bottom: 0.25rem;font-size: 0.7rem;'>"+t.DetailCanShipTitle+"</div><div style='font-normal: bold;padding-bottom: 0.5rem;'><span>"+t.DetailCanShipContent+"</span></div><div style='font-weight: bold;padding-bottom: 0.25rem;font-size: 0.7rem;'>"+t.DetailEasyReturnsTitle+"</div><div style='font-normal: bold;padding-bottom: 0.5rem;'><span>"+t.DetailEasyReturnsContent+"</span></div>",showDetails:!0},n.accordionItems.push(l)}),n.addRecentlyBrowse()}},null)},t.prototype.addRecentlyBrowse=function(){var t=localStorage.currentBrowseList;t=t?JSON.parse(t):[];for(var n=0;n<t.length;n++){var l=t[n];if(l.productId===this.selectedProduct.productId&&l.productColorId===this.selectedProduct.productColorId){t.splice(n,1);break}}t.push({productId:this.selectedProduct.productId,productColorId:this.selectedProduct.productColorId}),t.length>10&&(t=t.splice(1,t.length-1)),localStorage.setItem("currentBrowseList",JSON.stringify(t))},t.prototype.slideChange=function(){var t=this;this.slider.getActiveIndex().then(function(n){t.currentSliderIndex=n+1})},t.prototype.back=function(){this.commonService.back()},t.prototype.selectedColorItem=function(t){this.selectedColorIndex=t,this.currentProduct=this.productDetail.color_data[t],this.selectedProduct.productColorId=this.productDetail.color_data[t].color_id,this.selectedProduct.attrDesObject={};for(var n=0;n<this.currentProduct.dyn_attrs.length;n++){var l=this.currentProduct.dyn_attrs[n];l.selectedAttrIndex&&l.selectedAttrIndex>=0&&(this.selectedProduct.attrDesObject[l.attr_name]=l.domain_list[l.selectedAttrIndex])}this.getAttrDes()},t.prototype.getAttrDes=function(){for(var t in this.selectedProduct.attrOpts=[],this.selectedProduct.attrDesObject)this.selectedProduct.attrOpts.push({attrType:t,attrOptId:this.selectedProduct.attrDesObject[t]}),this.selectedProduct.attrDes=t+":"+this.selectedProduct.attrDesObject[t]+",";this.selectedProduct.attrDes=this.selectedProduct.attrDes?this.selectedProduct.attrDes.slice(0,this.selectedProduct.attrDes.length-1):""},t.prototype.selectedAttrItem=function(t,n){this.currentProduct.dyn_attrs[t].selectedAttrIndex=n;for(var l=this.currentProduct.dyn_attrs[t].attr_name,e=this.currentProduct.dyn_attrs[t].domain_list[n],o=!1,r=0;r<this.selectedProduct.attrDesObject.length;r++){var u=this.selectedProduct.attrDesObject[r];u[l]&&(u[l]=e,o=!0)}o||(this.selectedProduct.attrDesObject[l]=e)},t.prototype.addToCart=function(t){var n=0;for(var l in this.selectedProduct.attrDesObject)n++;if(this.selectedProduct.productId&&this.selectedProduct.productColorId&&n==this.currentProduct.dyn_attrs.length)this.commonService.showLoading(""),localStorage.userId?this.addToCarForUser():this.addToCarForLocal();else for(var e=0;e<this.currentProduct.dyn_attrs.length;e++){var o=this.currentProduct.dyn_attrs[e];if(!this.selectedProduct.attrDesObject[o.attr_name]){var r=this;return void r.translate.get("DetailNoSelectedAttr").subscribe(function(t){r.commonService.presentToast(t+o.attr_name)})}}},t.prototype.addToCarForLocal=function(){var t=localStorage.productList;t=t?JSON.parse(t):[];for(var n=!1,l=0,e=0;e<t.length;e++){var o=t[e];this.selectedProduct.productId==o.productId&&this.selectedProduct.productColorId==o.productColorId&&this.isSameProductAttr(this.selectedProduct.attrDesObject,o.attrDesObject)&&(n=!0,o.productNum=o.productNum+this.selectedProduct.productNum),l+=o.productNum}n||(this.getAttrDes(),t.push(this.selectedProduct),l+=this.selectedProduct.productNum),localStorage.productList=JSON.stringify(t),this.productNumber=l,this.commonService.dismissLoading(),this.showAddCartAnimate()},t.prototype.addToCarForUser=function(){this.selectedProduct.userId=localStorage.userId,this.getAttrDes();var t=[];t.push(this.selectedProduct);var n=this;this.dataService.merge2cart(JSON.stringify(t),function(t){n.productNumber=n.productNumber+n.selectedProduct.productNum,n.commonService.dismissLoading(),n.showAddCartAnimate()},null)},t.prototype.showAddCartAnimate=function(){var t=this;t.showAnimate=!0,setTimeout(function(){t.showAnimate=!1},2e3)},t.prototype.getCartProductNumber=function(){this.commonService.isLogin()?this.getUserCartProductNumber():this.getLocalCartProductNumber()},t.prototype.getLocalCartProductNumber=function(){var t=localStorage.productList,n=0;if(t){t=JSON.parse(t);for(var l=0;l<t.length;l++)n+=t[l].productNum}this.productNumber=n,this.showAddCartAnimate()},t.prototype.getUserCartProductNumber=function(){var t={currencyId:localStorage.selectedCurrencyConf,userId:localStorage.userId,cart:[],applyCpNo:""},n=this;this.dataService.shoppingCart(JSON.stringify(t),function(t){t.data&&t.data.cart&&t.data.cart.length>0?(n.productNumber=t.data.prdTotalNum,n.showAddCartAnimate()):n.productNumber=0},null,!1)},t.prototype.isSameProductAttr=function(t,n){for(var l=0;l<this.currentProduct.dyn_attrs.length;l++)if(t[this.currentProduct.dyn_attrs[l].attr_name]!==n[this.currentProduct.dyn_attrs[l].attr_name])return!1;return!0},t.prototype.openPreview=function(t,n){this.modalController.create({component:i.a,componentProps:{img:t,index:n}}).then(function(t){t.present()})},t.prototype.gotoHome=function(){this.events.publish("gotoHome"),this.nav.navigateRoot("/")},t.prototype.updateNumber=function(t){-1==t&&1==this.selectedProduct.productNum||(this.selectedProduct.productNum=this.selectedProduct.productNum+t)},t}(),d=function(){return function(){}}(),s=l("pMnS"),p=l("oBZk"),g=l("JbCa"),m=l("Ip0R"),b=l("A7o+"),h=l("nhxv"),f=l("ZYjt"),P=e.ob({encapsulation:0,styles:[[".accordion-list[_ngcontent-%COMP%]{margin:0 .5rem!important;border-bottom:1px solid #c8c7cc}.accordion-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#333;font-size:.7rem;font-weight:700;padding:.5rem 0;display:flex;justify-content:space-between;align-items:center}.accordion-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1rem;color:#999}.accordion-list[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{padding:0 0 .5rem .5rem;color:#666;font-size:.6rem}"]],data:{}});function C(t){return e.Kb(0,[e.Gb(402653184,1,{elementView:0}),(t()(),e.qb(1,0,null,null,6,"ion-list",[["class","accordion-list nomargin"]],null,null,null,p.X,p.r)),e.pb(2,49152,null,0,r.P,[e.h,e.k],null,null),(t()(),e.qb(3,0,null,0,3,"div",[["class","title"]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.toggleAccordion()&&e),e},null,null)),(t()(),e.Ib(4,null,[" "," "])),(t()(),e.qb(5,0,null,null,1,"ion-icon",[],null,null,null,p.P,p.j)),e.pb(6,49152,null,0,r.D,[e.h,e.k],{name:[0,"name"]},null),(t()(),e.qb(7,0,[[1,0],["accordionContent",1]],0,0,"div",[["class","detail"]],[[8,"innerHTML",1]],null,null,null,null))],function(t,n){t(n,6,0,n.component.icon)},function(t,n){var l=n.component;t(n,4,0,l.title),t(n,7,0,l.assembleHTML(l.details))})}var _=l("ZYCi"),O=e.ob({encapsulation:0,styles:[[".product-detail-wrap[_ngcontent-%COMP%]{overflow-y:auto}.product-detail-wrap[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]{position:relative}.product-detail-wrap[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .product-image-slider[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]{border-bottom:1px solid #eee;width:100%;height:auto;overflow:hidden;min-height:12rem}.product-detail-wrap[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .product-image-slider[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;min-height:10rem;height:auto}.product-detail-wrap[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .image-number[_ngcontent-%COMP%]{position:absolute;right:.8rem;bottom:.8rem;z-index:2;background:rgba(0,0,0,.3);color:#fff;font-size:.6rem;line-height:1rem;height:1rem;padding:0 .5rem;border-radius:.5rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{padding:.3rem;color:#fff;font-size:1rem;font-weight:700;background:#ea5455}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{color:#fff;font-size:.6rem;font-weight:400;text-decoration:line-through;margin-left:.5rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .name-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:.5rem solid #f5f5f5;padding:.3rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .name-wrap[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{flex:1;color:#333;font-size:.8rem;font-weight:700}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .name-wrap[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{color:#ea5455}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]{padding:0 .5rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#333;font-size:.7rem;height:1.5rem;line-height:1.5rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{color:#999;font-size:.6rem;height:1.5rem;line-height:1.5rem;margin-left:.25rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .color-item[_ngcontent-%COMP%]{display:inline-block;padding-right:.5rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .color-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #c8c7cc}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .color-wrap[_ngcontent-%COMP%]   .color-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border:1px solid #ea5455}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .attr-wrap[_ngcontent-%COMP%]{padding:0 .5rem .2rem;border-bottom:.5rem solid #f5f5f5}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .attr-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#999;font-size:.7rem;height:1.5rem;line-height:1.5rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .attr-wrap[_ngcontent-%COMP%]   .attr-item[_ngcontent-%COMP%]{display:inline-block;padding-right:.5rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .attr-wrap[_ngcontent-%COMP%]   .attr-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#333;font-size:.6rem;border:1px solid #c8c7cc;padding:0 .8rem;margin-bottom:.25rem;height:1.2rem;line-height:1.2rem;border-radius:1.2rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .attr-wrap[_ngcontent-%COMP%]   .attr-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border:1px solid #ea5455}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .qty-wrap[_ngcontent-%COMP%]{border-bottom:.5rem solid #f5f5f5;display:flex;justify-content:space-between;align-items:center;padding:.5rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .qty-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#999;font-size:.7rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .qty-wrap[_ngcontent-%COMP%]   .number-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:4rem;border:1px solid #c8c7cc;border-radius:3px;height:1rem;font-size:.6rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .qty-wrap[_ngcontent-%COMP%]   .number-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0 .25rem;font-size:1rem;width:1rem;text-align:center;height:1rem;line-height:1rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .qty-wrap[_ngcontent-%COMP%]   .number-wrap[_ngcontent-%COMP%]   .number-input[_ngcontent-%COMP%]{width:1.75rem;text-align:center;height:1rem;line-height:1rem;border:1px solid #c8c7cc;border-width:0 1px}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .discount-wrap[_ngcontent-%COMP%]{border-bottom:.5rem solid #f5f5f5;display:flex;padding:.5rem;line-height:1rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .discount-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#999;font-size:.7rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .discount-wrap[_ngcontent-%COMP%]   .discount-info-wrap[_ngcontent-%COMP%]{margin-left:1rem;flex:1;color:#333;font-size:.6rem}.product-detail-wrap[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .desc-wrap[_ngcontent-%COMP%]{margin-bottom:.5rem}.bottom-btn-wrap[_ngcontent-%COMP%]{padding-bottom:var(--ion-safe-area-bottom,0);border-top:1px solid #eee;display:flex;align-items:center;justify-content:center;background:#f5f5f5}.bottom-btn-wrap[_ngcontent-%COMP%]   .cart-number-wrap[_ngcontent-%COMP%]{flex:1;text-align:center;font-size:1rem;display:flex;align-items:center;justify-content:center}.bottom-btn-wrap[_ngcontent-%COMP%]   .cart-number-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:2rem;line-height:2.6rem}.bottom-btn-wrap[_ngcontent-%COMP%]   .cart-number-wrap[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{font-size:.6rem}@-webkit-keyframes scaleDraw{0%,50%{transform:scale(.8)}25%,75%{transform:scale(1.3)}}@keyframes scaleDraw{0%,50%{transform:scale(.8)}25%,75%{transform:scale(1.3)}}.bottom-btn-wrap[_ngcontent-%COMP%]   .cart-number-wrap[_ngcontent-%COMP%]   .scale[_ngcontent-%COMP%]{-webkit-animation:4s ease-in-out infinite scaleDraw}.bottom-btn-wrap[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]{flex:3;text-align:center;height:2rem;line-height:2rem;background:#ea5455;color:#fff;font-size:.7rem}"]],data:{}});function M(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,3,"ion-slide",[],null,null,null,p.db,p.x)),e.pb(1,49152,null,0,r.qb,[e.h,e.k],null,null),(t()(),e.qb(2,0,null,0,1,"img",[["class","product-image"],["tappable",""]],null,[[null,"click"]],function(t,n,l){var e=!0,o=t.component;return"click"===n&&(e=!1!==o.openPreview(o.currentProduct.img_groups,t.context.index)&&e),e},null,null)),e.pb(3,1720320,null,0,g.a,[e.k,e.z,e.B,[2,"options"]],{lazyImage:[0,"lazyImage"],defaultImage:[1,"defaultImage"],errorImage:[2,"errorImage"]},null)],function(t,n){var l=n.component;t(n,3,0,n.context.$implicit.big_img,l.defaultImage,l.defaultImage)},null)}function v(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,6,"div",[["class","slider-wrap"]],null,null,null,null,null)),(t()(),e.qb(1,0,null,null,3,"ion-slides",[["class","product-image-slider"],["pager","true"]],null,[[null,"ionSlideDidChange"]],function(t,n,l){var e=!0;return"ionSlideDidChange"===n&&(e=!1!==t.component.slideChange()&&e),e},p.eb,p.y)),e.pb(2,49152,[[1,4],["detail_slides",4]],0,r.rb,[e.h,e.k],{options:[0,"options"],pager:[1,"pager"]},null),(t()(),e.hb(16777216,null,0,1,null,M)),e.pb(4,278528,null,0,m.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(t()(),e.qb(5,0,null,null,1,"div",[["class","image-number"]],null,null,null,null,null)),(t()(),e.Ib(6,null,[" ","/"," "]))],function(t,n){var l=n.component;t(n,2,0,l.slideOpts,"true"),t(n,4,0,l.currentProduct.img_groups)},function(t,n){var l=n.component;t(n,6,0,l.currentSliderIndex,l.currentProduct.img_groups.length)})}function w(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,1,"ion-icon",[["class","red"],["name","heart"]],null,null,null,p.P,p.j)),e.pb(1,49152,null,0,r.D,[e.h,e.k],{name:[0,"name"]},null)],function(t,n){t(n,1,0,"heart")},null)}function y(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,1,"ion-icon",[["name","heart-empty"]],null,null,null,p.P,p.j)),e.pb(1,49152,null,0,r.D,[e.h,e.k],{name:[0,"name"]},null)],function(t,n){t(n,1,0,"heart-empty")},null)}function I(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,1,"span",[["class","desc"]],null,null,null,null,null)),(t()(),e.Ib(1,null,["(",")"]))],null,function(t,n){var l=n.component;t(n,1,0,l.productDetail.color_data[l.selectedColorIndex].color_des)})}function x(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,3,"div",[["class","color-item"]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.selectedColorItem(t.context.index)&&e),e},null,null)),(t()(),e.qb(1,0,null,null,2,"img",[],[[8,"src",4]],null,null,null,null)),e.pb(2,278528,null,0,m.h,[e.s,e.t,e.k,e.E],{ngClass:[0,"ngClass"]},null),e.Db(3,{active:0})],function(t,n){var l=t(n,3,0,n.component.selectedColorIndex===n.context.index);t(n,2,0,l)},function(t,n){t(n,1,0,n.context.$implicit.color_img)})}function D(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,9,"div",[["class","color-wrap"]],null,null,null,null,null)),(t()(),e.qb(1,0,null,null,5,"div",[],null,null,null,null,null)),(t()(),e.qb(2,0,null,null,2,"span",[["class","title"]],null,null,null,null,null)),(t()(),e.Ib(3,null,["",""])),e.Cb(131072,b.i,[b.j,e.h]),(t()(),e.hb(16777216,null,null,1,null,I)),e.pb(6,16384,null,0,m.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(t()(),e.qb(7,0,null,null,2,"div",[],null,null,null,null,null)),(t()(),e.hb(16777216,null,null,1,null,x)),e.pb(9,278528,null,0,m.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var l=n.component;t(n,6,0,l.productDetail.color_data[l.selectedColorIndex].color_des),t(n,9,0,l.productDetail.color_data)},function(t,n){t(n,3,0,e.Jb(n,3,0,e.Ab(n,4).transform("DetailColorTitle")))})}function k(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,4,"div",[["class","attr-item"]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.selectedAttrItem(t.parent.context.index,t.context.index)&&e),e},null,null)),(t()(),e.qb(1,0,null,null,3,"div",[],null,null,null,null,null)),e.pb(2,278528,null,0,m.h,[e.s,e.t,e.k,e.E],{ngClass:[0,"ngClass"]},null),e.Db(3,{active:0}),(t()(),e.Ib(4,null,["",""]))],function(t,n){var l=t(n,3,0,n.parent.context.$implicit.selectedAttrIndex===n.context.index);t(n,2,0,l)},function(t,n){t(n,4,0,n.context.$implicit)})}function q(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,6,"div",[["class","attr-wrap"]],null,null,null,null,null)),(t()(),e.qb(1,0,null,null,2,"div",[],null,null,null,null,null)),(t()(),e.qb(2,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(t()(),e.Ib(3,null,["",""])),(t()(),e.qb(4,0,null,null,2,"div",[],null,null,null,null,null)),(t()(),e.hb(16777216,null,null,1,null,k)),e.pb(6,278528,null,0,m.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,6,0,n.context.$implicit.domain_list)},function(t,n){t(n,3,0,n.context.$implicit.attr_name)})}function S(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),e.Ib(1,null,["",""]))],null,function(t,n){t(n,1,0,n.context.$implicit)})}function N(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,1,"accordion-list",[],null,null,null,C,P)),e.pb(1,4308992,null,0,h.a,[e.D,f.b],{title:[0,"title"],details:[1,"details"],showDetails:[2,"showDetails"]},null)],function(t,n){t(n,1,0,n.context.$implicit.name,n.context.$implicit.description,n.context.$implicit.showDetails)},null)}function A(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,4,"ion-badge",[["color","danger"],["item-end",""]],null,null,null,p.J,p.d)),e.pb(1,278528,null,0,m.h,[e.s,e.t,e.k,e.E],{ngClass:[0,"ngClass"]},null),e.Db(2,{scale:0}),e.pb(3,49152,null,0,r.k,[e.h,e.k],{color:[0,"color"]},null),(t()(),e.Ib(4,0,[""," "]))],function(t,n){var l=t(n,2,0,n.component.showAnimate);t(n,1,0,l),t(n,3,0,"danger")},function(t,n){t(n,4,0,n.component.productNumber)})}function j(t){return e.Kb(0,[e.Gb(671088640,1,{slider:0}),e.Gb(402653184,2,{content:0}),(t()(),e.qb(2,0,null,null,15,"ion-header",[],null,null,null,p.O,p.i)),e.pb(3,49152,null,0,r.C,[e.h,e.k],null,null),(t()(),e.qb(4,0,null,0,13,"ion-toolbar",[],null,null,null,p.lb,p.F)),e.pb(5,49152,null,0,r.Cb,[e.h,e.k],null,null),(t()(),e.qb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.K,p.e)),e.pb(7,49152,null,0,r.m,[e.h,e.k],null,null),(t()(),e.qb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(t,n,l){var o=!0;return"click"===n&&(o=!1!==e.Ab(t,10).onClick(l)&&o),o},p.I,p.c)),e.pb(9,49152,null,0,r.h,[e.h,e.k],null,null),e.pb(10,16384,null,0,r.i,[[2,r.ib],r.Ib],null,null),(t()(),e.qb(11,0,null,0,2,"ion-title",[],null,null,null,p.kb,p.E)),e.pb(12,49152,null,0,r.Ab,[e.h,e.k],null,null),(t()(),e.Ib(13,0,["",""])),(t()(),e.qb(14,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,p.K,p.e)),e.pb(15,49152,null,0,r.m,[e.h,e.k],null,null),(t()(),e.qb(16,0,null,0,1,"ion-icon",[["name","home"]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.gotoHome()&&e),e},p.P,p.j)),e.pb(17,49152,null,0,r.D,[e.h,e.k],{name:[0,"name"]},null),(t()(),e.qb(18,0,null,null,42,"ion-content",[],null,null,null,p.L,p.f)),e.pb(19,49152,[[2,4]],0,r.v,[e.h,e.k],null,null),(t()(),e.qb(20,0,null,0,40,"div",[["class","product-detail-wrap"]],null,null,null,null,null)),(t()(),e.hb(16777216,null,null,1,null,v)),e.pb(22,16384,null,0,m.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(t()(),e.qb(23,0,null,null,37,"div",[["class","product-detail-info"]],null,null,null,null,null)),(t()(),e.qb(24,0,null,null,4,"div",[["class","price"]],null,null,null,null,null)),(t()(),e.qb(25,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),e.Ib(26,null,["",""])),(t()(),e.qb(27,0,null,null,1,"span",[["class","original"]],null,null,null,null,null)),(t()(),e.Ib(28,null,["",""])),(t()(),e.qb(29,0,null,null,6,"div",[["class","name-wrap"]],null,null,null,null,null)),(t()(),e.qb(30,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(t()(),e.Ib(31,null,["",""])),(t()(),e.hb(16777216,null,null,1,null,w)),e.pb(33,16384,null,0,m.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(t()(),e.hb(16777216,null,null,1,null,y)),e.pb(35,16384,null,0,m.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(t()(),e.hb(16777216,null,null,1,null,D)),e.pb(37,16384,null,0,m.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(t()(),e.hb(16777216,null,null,1,null,q)),e.pb(39,278528,null,0,m.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(t()(),e.qb(40,0,null,null,10,"div",[["class","qty-wrap"]],null,null,null,null,null)),(t()(),e.qb(41,0,null,null,2,"span",[["class","title"]],null,null,null,null,null)),(t()(),e.Ib(42,null,["",""])),e.Cb(131072,b.i,[b.j,e.h]),(t()(),e.qb(44,0,null,null,6,"div",[["class","number-wrap"]],null,null,null,null,null)),(t()(),e.qb(45,0,null,null,1,"span",[["class","btn"]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.updateNumber(-1)&&e),e},null,null)),(t()(),e.Ib(-1,null,["-"])),(t()(),e.qb(47,0,null,null,1,"span",[["class","number-input"]],null,null,null,null,null)),(t()(),e.Ib(48,null,["",""])),(t()(),e.qb(49,0,null,null,1,"span",[["class","btn"]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.updateNumber(1)&&e),e},null,null)),(t()(),e.Ib(-1,null,["+"])),(t()(),e.qb(51,0,null,null,6,"div",[["class","discount-wrap"]],null,null,null,null,null)),(t()(),e.qb(52,0,null,null,2,"span",[["class","title"]],null,null,null,null,null)),(t()(),e.Ib(53,null,["",""])),e.Cb(131072,b.i,[b.j,e.h]),(t()(),e.qb(55,0,null,null,2,"div",[["class","discount-info-wrap"]],null,null,null,null,null)),(t()(),e.hb(16777216,null,null,1,null,S)),e.pb(57,278528,null,0,m.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(t()(),e.qb(58,0,null,null,2,"div",[["class","desc-wrap"]],null,null,null,null,null)),(t()(),e.hb(16777216,null,null,1,null,N)),e.pb(60,278528,null,0,m.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(t()(),e.qb(61,0,null,null,14,"ion-footer",[],null,null,null,p.N,p.h)),e.pb(62,49152,null,0,r.A,[e.h,e.k],null,null),(t()(),e.qb(63,0,null,0,12,"div",[["class","bottom-btn-wrap"]],null,null,null,null,null)),(t()(),e.qb(64,0,null,null,8,"div",[["class","cart-number-wrap"]],null,[[null,"click"]],function(t,n,l){var o=!0;return"click"===n&&(o=!1!==e.Ab(t,65).onClick()&&o),"click"===n&&(o=!1!==e.Ab(t,68).onClick(l)&&o),o},null,null)),e.pb(65,16384,null,0,_.n,[_.m,_.a,[8,null],e.E,e.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(66,{needBack:0}),e.Bb(67,1),e.pb(68,737280,null,0,r.Nb,[m.g,r.Ib,e.k,_.m,[2,_.n]],null,null),(t()(),e.qb(69,0,null,null,1,"ion-icon",[["item-start",""],["name","cart"]],null,null,null,p.P,p.j)),e.pb(70,49152,null,0,r.D,[e.h,e.k],{name:[0,"name"]},null),(t()(),e.hb(16777216,null,null,1,null,A)),e.pb(72,16384,null,0,m.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(t()(),e.qb(73,0,null,null,2,"div",[["class","add-to-cart-btn"]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.addToCart(l)&&e),e},null,null)),(t()(),e.Ib(74,null,["",""])),e.Cb(131072,b.i,[b.j,e.h])],function(t,n){var l=n.component;t(n,17,0,"home"),t(n,22,0,l.currentProduct.img_groups&&l.currentProduct.img_groups.length>0),t(n,33,0,1==l.currentProduct.isattention),t(n,35,0,0==l.currentProduct.isattention),t(n,37,0,l.productDetail.color_data&&l.productDetail.color_data.length>1),t(n,39,0,l.currentProduct.dyn_attrs),t(n,57,0,l.disCountList),t(n,60,0,l.accordionItems);var e=t(n,66,0,!0),o=t(n,67,0,"/cart");t(n,65,0,e,o),t(n,68,0),t(n,70,0,"cart"),t(n,72,0,l.productNumber>0)},function(t,n){var l=n.component;t(n,13,0,l.currentProduct.pcName),t(n,26,0,l.currentProduct.current_price),t(n,28,0,l.currentProduct.original_price),t(n,31,0,l.currentProduct.pcName),t(n,42,0,e.Jb(n,42,0,e.Ab(n,43).transform("DetailQty"))),t(n,48,0,l.selectedProduct.productNum),t(n,53,0,e.Jb(n,53,0,e.Ab(n,54).transform("DetailDiscount"))),t(n,74,0,e.Jb(n,74,0,e.Ab(n,75).transform("DetailAddToCart")))})}function z(t){return e.Kb(0,[(t()(),e.qb(0,0,null,null,1,"app-detail",[],null,null,null,j,O)),e.pb(1,114688,null,0,a,[_.a,u.a,c.a,b.j,e.k,_.m,r.Hb,r.Lb,r.e,r.Ib],null,null)],function(t,n){t(n,1,0)},null)}var L=e.mb("app-detail",a,z,{},{},[]),T=l("gIcY"),F=l("j1ZV");l.d(n,"DetailPageModuleNgFactory",function(){return K});var K=e.nb(d,[],function(t){return e.xb([e.yb(512,e.j,e.cb,[[8,[s.a,L]],[3,e.j],e.x]),e.yb(4608,m.l,m.k,[e.u,[2,m.r]]),e.yb(4608,T.m,T.m,[]),e.yb(4608,r.c,r.c,[e.z,e.g]),e.yb(4608,r.Hb,r.Hb,[r.c,e.j,e.q,m.c]),e.yb(4608,r.Mb,r.Mb,[r.c,e.j,e.q,m.c]),e.yb(1073742336,m.b,m.b,[]),e.yb(1073742336,T.l,T.l,[]),e.yb(1073742336,T.c,T.c,[]),e.yb(1073742336,r.Eb,r.Eb,[]),e.yb(1073742336,_.o,_.o,[[2,_.u],[2,_.m]]),e.yb(1073742336,F.a,F.a,[]),e.yb(1073742336,b.g,b.g,[]),e.yb(1073742336,g.b,g.b,[]),e.yb(1073742336,d,d,[]),e.yb(1024,_.k,function(){return[[{path:"",component:a}]]},[])])})}}]);