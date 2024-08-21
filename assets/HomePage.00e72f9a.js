import{f as te,j as D,n as ne,k as ae,m as E,p as O,t as U,v as Q,u as R,r as L,a as v,w as z,e as oe,g as Z,h as m,T as ie,$ as re,c as ee,a0 as le,o as se,d as ue,I as W,Q as X,M as ce,K as Y,a1 as de,a2 as ve,J as me,L as h,a3 as M}from"./index.89b935f1.js";import{g as H,s as J}from"./touch.9135741d.js";import{c as pe,u as fe,a as ge}from"./selection.07dcec66.js";import{f as he,h as K,b as ye,a as _e}from"./QSpinner.d4163d15.js";import{Q as F}from"./QBtn.0511f289.js";import{u as xe,a as be,b as Ce,i as Pe,c as qe,d as Se,e as we,f as ke}from"./5.17147946.js";function Te(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,p)=>{const i=parseFloat(r);i&&(a[p]=i)}),a}var Ie=te({name:"touch-swipe",beforeMount(e,{value:a,arg:r,modifiers:p}){if(p.mouse!==!0&&D.has.touch!==!0)return;const i=p.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:Te(r),direction:H(p),noop:ne,mouseStart(o){J(o,t)&&ae(o)&&(E(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(J(o,t)){const d=o.target;E(t,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,d){D.is.firefox===!0&&O(e,!0);const y=U(o);t.event={x:y.left,y:y.top,time:Date.now(),mouse:d===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){Q(o);return}const d=Date.now()-t.event.time;if(d===0)return;const y=U(o),_=y.left-t.event.x,s=Math.abs(_),x=y.top-t.event.y,u=Math.abs(x);if(t.event.mouse!==!0){if(s<t.sensitivity[1]&&u<t.sensitivity[1]){t.end(o);return}}else if(window.getSelection().toString()!==""){t.end(o);return}else if(s<t.sensitivity[2]&&u<t.sensitivity[2])return;const f=s/d,b=u/d;t.direction.vertical===!0&&s<u&&s<100&&b>t.sensitivity[0]&&(t.event.dir=x<0?"up":"down"),t.direction.horizontal===!0&&s>u&&u<100&&f>t.sensitivity[0]&&(t.event.dir=_<0?"left":"right"),t.direction.up===!0&&s<u&&x<0&&s<100&&b>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&s<u&&x>0&&s<100&&b>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&s>u&&_<0&&u<100&&f>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&s>u&&_>0&&u<100&&f>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(Q(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pe(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(C,50):C()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:d,distance:{x:s,y:u}})):t.end(o)},end(o){t.event!==void 0&&(R(t,"temp"),D.is.firefox===!0&&O(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&Q(o),t.event=void 0)}};if(e.__qtouchswipe=t,p.mouse===!0){const o=p.mouseCapture===!0||p.mousecapture===!0?"Capture":"";E(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}D.has.touch===!0&&E(t,"main",[[e,"touchstart","touchStart",`passive${p.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const r=e.__qtouchswipe;r!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&r.end(),r.handler=a.value),r.direction=H(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(R(a,"main"),R(a,"temp"),D.is.firefox===!0&&O(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});function $e(){let e=Object.create(null);return{getCache:(a,r)=>e[a]===void 0?e[a]=typeof r=="function"?r():r:e[a],setCache(a,r){e[a]=r},hasCache(a){return Object.hasOwnProperty.call(e,a)},clearCache(a){a!==void 0?delete e[a]:e=Object.create(null)}}}const Ae={name:{required:!0},disable:Boolean},G={setup(e,{slots:a}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},K(a.default))}},Be={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},De=["update:modelValue","beforeTransition","transition"];function Ne(){const{props:e,emit:a,proxy:r}=Z(),{getCache:p}=$e();let i,t;const o=L(null),d=L(null);function y(n){const l=e.vertical===!0?"up":"left";P((r.$q.lang.rtl===!0?-1:1)*(n.direction===l?1:-1))}const _=v(()=>[[Ie,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),s=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),u=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),f=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);z(()=>e.modelValue,(n,l)=>{const g=q(n)===!0?T(n):-1;t!==!0&&I(g===-1?0:g<T(l)?-1:1),o.value!==g&&(o.value=g,a("beforeTransition",n,l),oe(()=>{a("transition",n,l)}))});function C(){P(1)}function $(){P(-1)}function N(n){a("update:modelValue",n)}function q(n){return n!=null&&n!==""}function T(n){return i.findIndex(l=>l.props.name===n&&l.props.disable!==""&&l.props.disable!==!0)}function j(){return i.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function I(n){const l=n!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(n===-1?s.value:x.value):null;d.value!==l&&(d.value=l)}function P(n,l=o.value){let g=l+n;for(;g!==-1&&g<i.length;){const w=i[g];if(w!==void 0&&w.props.disable!==""&&w.props.disable!==!0){I(n),t=!0,a("update:modelValue",w.props.name),setTimeout(()=>{t=!1});return}g+=n}e.infinite===!0&&i.length!==0&&l!==-1&&l!==i.length&&P(n,n===-1?i.length:-1)}function A(){const n=T(e.modelValue);return o.value!==n&&(o.value=n),!0}function V(){const n=q(e.modelValue)===!0&&A()&&i[o.value];return e.keepAlive===!0?[m(re,b.value,[m(k.value===!0?p(f.value,()=>({...G,name:f.value})):G,{key:f.value,style:u.value},()=>n)])]:[m("div",{class:"q-panel scroll",style:u.value,key:f.value,role:"tabpanel"},[n])]}function c(){if(i.length!==0)return e.animated===!0?[m(ie,{name:d.value},V)]:V()}function S(n){return i=he(K(n.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&q(l.props.name)===!0),i.length}function B(){return i}return Object.assign(r,{next:C,previous:$,goTo:N}),{panelIndex:o,panelDirectives:_,updatePanelsList:S,updatePanelIndex:A,getPanelContent:c,getEnabledPanels:j,getPanels:B,isValidPanelName:q,keepAliveProps:b,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:P,goToPanel:N,nextPanel:C,previousPanel:$}}var Ve=ee({name:"QCarouselSlide",props:{...Ae,imgSrc:String},setup(e,{slots:a}){const r=v(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:r.value},K(a.default))}});const Ee=["top","right","bottom","left"],Me=["regular","flat","outline","push","unelevated"];var Le=ee({name:"QCarousel",props:{...fe,...Be,...xe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Me.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ee.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...be,...De],setup(e,{slots:a}){const{proxy:{$q:r}}=Z(),p=ge(e,r);let i=null,t;const{updatePanelsList:o,getPanelContent:d,panelDirectives:y,goToPanel:_,previousPanel:s,nextPanel:x,getEnabledPanels:u,panelIndex:f}=Ne(),{inFullscreen:b}=Ce(),k=v(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=v(()=>e.vertical===!0?"vertical":"horizontal"),$=v(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),N=v(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(p.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${$.value}`:"")),q=v(()=>{const c=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?c.reverse():c}),T=v(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),j=v(()=>e.navigationActiveIcon||T.value),I=v(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));z(()=>e.modelValue,()=>{e.autoplay&&P()}),z(()=>e.autoplay,c=>{c?P():i!==null&&(clearTimeout(i),i=null)});function P(){const c=le(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,c>=0?x():s()},c)}se(()=>{e.autoplay&&P()}),ue(()=>{i!==null&&clearTimeout(i)});function A(c,S){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${c} q-carousel__navigation--${$.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},u().map(S))])}function V(){const c=[];if(e.navigation===!0){const S=a["navigation-icon"]!==void 0?a["navigation-icon"]:n=>m(F,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),B=t-1;c.push(A("buttons",(n,l)=>{const g=n.props.name,w=f.value===l;return S({index:l,maxIndex:B,name:g,active:w,btnProps:{icon:w===!0?j.value:T.value,size:"sm",...I.value},onClick:()=>{_(g)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";c.push(A("thumbnails",B=>{const n=B.props;return m("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+S,src:n.imgSrc||n["img-src"],onClick:()=>{_(n.name)}})}))}return e.arrows===!0&&f.value>=0&&((e.infinite===!0||f.value>0)&&c.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[m(F,{icon:q.value[0],...I.value,onClick:s})])),(e.infinite===!0||f.value<t-1)&&c.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[m(F,{icon:q.value[1],...I.value,onClick:x})]))),_e(a.control,c)}return()=>(t=o(a),m("div",{class:N.value,style:k.value},[ye("div",{class:"q-carousel__slides-container"},d(),"sl-cont",e.swipeable,()=>y.value)].concat(V())))}});const je={class:"absolute-bottom-right transparent text-white q-ma-xl"},Oe={class:"row justify-end"},Qe={class:"col-md-8 col-12"},Re={class:"text-h5 q-mb-xl"},We={class:"flex justify-between text-body cursor-pointer"},Fe={class:""},ze={class:"flex items-center q-gutter-md"},Ke={class:""},Ue={class:""},Xe=h("span",null,"\u2192",-1),tt={__name:"HomePage",setup(e){const a=L(0),r=L([{title:"We recognise the importance of people and the human experience in architecture.",year:2022,typology:"Hospitality",location:"Singapore",image:Pe},{title:"We recognise the importance of people and the human experience in architecture.",year:2023,typology:"Residential",location:"Thailand",image:qe},{title:"We recognise the importance of people and the human experience in architecture.",year:2023,typology:"Residential",location:"Thailand",image:Se},{title:"We recognise the importance of people and the human experience in architecture.",year:2023,typology:"Residential",location:"Thailand",image:we},{title:"We recognise the importance of people and the human experience in architecture.",year:2023,typology:"Residential",location:"Thailand",image:ke}]);return(p,i)=>(W(),X("div",null,[ce(Le,{"transition-prev":"slide-left","transition-next":"slide-left","transition-duration":"2000",autoplay:"",infinite:"",animated:"",modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=t=>a.value=t),height:"100vh"},{default:Y(()=>[(W(!0),X(de,null,ve(r.value,(t,o)=>(W(),me(Ve,{key:o,name:o,"img-src":t.image},{default:Y(()=>[h("div",je,[h("div",Oe,[h("div",Qe,[h("div",Re,M(t.title),1),h("div",We,[h("div",Fe,M(t.typology),1),h("div",ze,[h("div",Ke,M(t.year),1),h("div",Ue,M(t.location),1),Xe])])])])])]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["modelValue"])]))}};export{tt as default};
