import{d as W,r as E,c as m,aM as X,bO as ue,aZ as he,w as fe,Z as be,bP as ge,G as P,H as U,a9 as l,bQ as me,bR as Y,bS as ve,bu as we,aT as pe,bz as _,bT as ye,b8 as R,bU as ze,bV as $e,bW as Se,aD as n,bX as C,aE as a,aF as f,b3 as B,bY as Be,bZ as Ee,aN as V,b7 as L,b6 as j,b_ as ke,aQ as xe,b$ as Re,c0 as Ce,c1 as Te,aG as N,c2 as Fe,bc as z}from"./index-181d502b.js";const Me=W({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const r=E(!!e.show),t=E(null),v=pe(_);let u=0,$="",d=null;const w=E(!1),b=E(!1),k=m(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:T,mergedRtlRef:F}=X(e),M=ue("Drawer",F,T),I=o=>{b.value=!0,u=k.value?o.clientY:o.clientX,$=document.body.style.cursor,document.body.style.cursor=k.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",S),document.body.addEventListener("mouseleave",h),document.body.addEventListener("mouseup",g)},O=()=>{d!==null&&(window.clearTimeout(d),d=null),b.value?w.value=!0:d=window.setTimeout(()=>{w.value=!0},300)},D=()=>{d!==null&&(window.clearTimeout(d),d=null),w.value=!1},{doUpdateHeight:H,doUpdateWidth:A}=v,S=o=>{var c,x;if(b.value)if(k.value){let p=((c=t.value)===null||c===void 0?void 0:c.offsetHeight)||0;const y=u-o.clientY;p+=e.placement==="bottom"?y:-y,H(p),u=o.clientY}else{let p=((x=t.value)===null||x===void 0?void 0:x.offsetWidth)||0;const y=u-o.clientX;p+=e.placement==="right"?y:-y,A(p),u=o.clientX}},g=()=>{b.value&&(u=0,b.value=!1,document.body.style.cursor=$,document.body.removeEventListener("mousemove",S),document.body.removeEventListener("mouseup",g),document.body.removeEventListener("mouseleave",h))},h=g;he(()=>{e.show&&(r.value=!0)}),fe(()=>e.show,o=>{o||g()}),be(()=>{g()});const i=m(()=>{const{show:o}=e,c=[[U,o]];return e.showMask||c.push([ye,e.onClickoutside,void 0,{capture:!0}]),c});function s(){var o;r.value=!1,(o=e.onAfterLeave)===null||o===void 0||o.call(e)}return ge(m(()=>e.blockScroll&&r.value)),R(ze,t),R($e,null),R(Se,null),{bodyRef:t,rtlEnabled:M,mergedClsPrefix:v.mergedClsPrefixRef,isMounted:v.isMountedRef,mergedTheme:v.mergedThemeRef,displayed:r,transitionName:m(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:s,bodyDirectives:i,handleMousedownResizeTrigger:I,handleMouseenterResizeTrigger:O,handleMouseleaveResizeTrigger:D,isDragging:b,isHoverOnResizeTrigger:w}},render(){const{$slots:e,mergedClsPrefix:r}=this;return this.displayDirective==="show"||this.displayed||this.show?P(l("div",{role:"none"},l(me,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>l(Y,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>P(l("div",ve(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${r}-drawer`,this.rtlEnabled&&`${r}-drawer--rtl`,`${r}-drawer--${this.placement}-placement`,this.isDragging&&`${r}-drawer--unselectable`,this.nativeScrollbar&&`${r}-drawer--native-scrollbar`]}),[this.resizable?l("div",{class:[`${r}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${r}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?l("div",{class:`${r}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):l(we,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${r}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[U,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ie,cubicBezierEaseOut:Oe}=C;function De({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-right"}={}){return[n(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${Ie}`}),n(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${Oe}`}),n(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${t}-transition-enter-from`,{transform:"translateX(100%)"}),n(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${t}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:He,cubicBezierEaseOut:Ae}=C;function Pe({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-left"}={}){return[n(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${He}`}),n(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${Ae}`}),n(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${t}-transition-enter-from`,{transform:"translateX(-100%)"}),n(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${t}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Ue,cubicBezierEaseOut:Le}=C;function je({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-top"}={}){return[n(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${Ue}`}),n(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${Le}`}),n(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${t}-transition-enter-from`,{transform:"translateY(-100%)"}),n(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${t}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Ne,cubicBezierEaseOut:We}=C;function Xe({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-bottom"}={}){return[n(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${Ne}`}),n(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${We}`}),n(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${t}-transition-enter-from`,{transform:"translateY(100%)"}),n(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${t}-transition-leave-to`,{transform:"translateY(100%)"})]}const Ye=n([a("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[De(),Pe(),je(),Xe(),f("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),f("native-scrollbar",[a("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),B("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[f("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),a("drawer-content-wrapper",`
 box-sizing: border-box;
 `),a("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[f("native-scrollbar",[a("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),a("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),a("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),a("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[B("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),a("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),f("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[B("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),f("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[B("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),f("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[B("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),f("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[B("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),n("body",[n(">",[a("drawer-container",{position:"fixed"})])]),a("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[n("> *",{pointerEvents:"all"})]),a("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[f("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Be({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),_e=Object.assign(Object.assign({},V.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),qe=W({name:"Drawer",inheritAttrs:!1,props:_e,setup(e){const{mergedClsPrefixRef:r,namespaceRef:t,inlineThemeDisabled:v}=X(e),u=Ee(),$=V("Drawer","-drawer",Ye,Te,e,r),d=E(e.defaultWidth),w=E(e.defaultHeight),b=L(j(e,"width"),d),k=L(j(e,"height"),w),T=m(()=>{const{placement:i}=e;return i==="top"||i==="bottom"?"":N(b.value)}),F=m(()=>{const{placement:i}=e;return i==="left"||i==="right"?"":N(k.value)}),M=i=>{const{onUpdateWidth:s,"onUpdate:width":o}=e;s&&z(s,i),o&&z(o,i),d.value=i},I=i=>{const{onUpdateHeight:s,"onUpdate:width":o}=e;s&&z(s,i),o&&z(o,i),w.value=i},O=m(()=>[{width:T.value,height:F.value},e.drawerStyle||""]);function D(i){const{onMaskClick:s,maskClosable:o}=e;o&&S(!1),s&&s(i)}const H=ke();function A(i){var s;(s=e.onEsc)===null||s===void 0||s.call(e),e.show&&e.closeOnEsc&&Fe(i)&&!H.value&&S(!1)}function S(i){const{onHide:s,onUpdateShow:o,"onUpdate:show":c}=e;o&&z(o,i),c&&z(c,i),s&&!i&&z(s,i)}R(_,{isMountedRef:u,mergedThemeRef:$,mergedClsPrefixRef:r,doUpdateShow:S,doUpdateHeight:I,doUpdateWidth:M});const g=m(()=>{const{common:{cubicBezierEaseInOut:i,cubicBezierEaseIn:s,cubicBezierEaseOut:o},self:{color:c,textColor:x,boxShadow:p,lineHeight:y,headerPadding:q,footerPadding:K,bodyPadding:Z,titleFontSize:G,titleTextColor:Q,titleFontWeight:J,headerBorderBottom:ee,footerBorderTop:te,closeIconColor:re,closeIconColorHover:oe,closeIconColorPressed:ne,closeColorHover:ie,closeColorPressed:se,closeIconSize:ae,closeSize:le,closeBorderRadius:ce,resizableTriggerColorHover:de}}=$.value;return{"--n-line-height":y,"--n-color":c,"--n-text-color":x,"--n-box-shadow":p,"--n-bezier":i,"--n-bezier-out":o,"--n-bezier-in":s,"--n-header-padding":q,"--n-body-padding":Z,"--n-footer-padding":K,"--n-title-text-color":Q,"--n-title-font-size":G,"--n-title-font-weight":J,"--n-header-border-bottom":ee,"--n-footer-border-top":te,"--n-close-icon-color":re,"--n-close-icon-color-hover":oe,"--n-close-icon-color-pressed":ne,"--n-close-size":le,"--n-close-color-hover":ie,"--n-close-color-pressed":se,"--n-close-icon-size":ae,"--n-close-border-radius":ce,"--n-resize-trigger-color-hover":de}}),h=v?xe("drawer",void 0,g,e):void 0;return{mergedClsPrefix:r,namespace:t,mergedBodyStyle:O,handleMaskClick:D,handleEsc:A,mergedTheme:$,cssVars:v?void 0:g,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender,isMounted:u}},render(){const{mergedClsPrefix:e}=this;return l(Ce,{to:this.to,show:this.show},{default:()=>{var r;return(r=this.onRender)===null||r===void 0||r.call(this),P(l("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?l(Y,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?l("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,l(Me,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Re,{zIndex:this.zIndex,enabled:this.show}]])}})}});export{qe as N};
