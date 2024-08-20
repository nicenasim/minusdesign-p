import{a as d,g as D,N as ce,c as te,h as g,f as de,S as z,m as fe,u as ve,s as ne,t as ge,r as F,v as P,q as me,d as be,Y as he,A as ye,l as ke}from"./index.4a54b43f.js";import{d as pe,u as ae,e as re,h as xe,a as K,Q as qe}from"./QSpinner.464cd8b7.js";function V(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function H(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ee(e,t){for(const a in t){const n=t[a],i=e[a];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,s)=>f!==i[s]))return!1}return!0}function U(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function $e(e,t){return Array.isArray(e)===!0?U(e,t):Array.isArray(t)===!0?U(t,e):e===t}function Re(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if($e(e[a],t[a])===!1)return!1;return!0}const ue={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Ye={...ue,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Le({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=D(),{props:n,proxy:i,emit:f}=a,s=pe(a),u=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>s===!0&&n.disable!==!0&&u.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>s===!0&&u.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=d(()=>q.value===!0?_(n.to):null),o=d(()=>h.value!==null),y=d(()=>u.value===!0||o.value===!0),l=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=d(()=>u.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:h.value.href,target:n.target}:{}),b=d(()=>{if(o.value===!1)return-1;const{matched:v}=h.value,{length:E}=v,R=v[E-1];if(R===void 0)return-1;const w=i.$route.matched;if(w.length===0)return-1;const S=w.findIndex(H.bind(null,R));if(S!==-1)return S;const I=V(v[E-2]);return E>1&&V(R)===I&&w[w.length-1].path!==I?w.findIndex(H.bind(null,v[E-2])):S}),p=d(()=>o.value===!0&&b.value!==-1&&Ee(i.$route.params,h.value.params)),c=d(()=>p.value===!0&&b.value===i.$route.matched.length-1&&Re(i.$route.params,h.value.params)),x=d(()=>o.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(v){try{return i.$router.resolve(v)}catch{}return null}function B(v,{returnRouterError:E,to:R=n.to,replace:w=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const S=i.$router[w===!0?"replace":"push"](R);return E===!0?S:S.then(()=>{}).catch(()=>{})}function C(v){if(o.value===!0){const E=R=>B(v,R);f("click",v,E),v.defaultPrevented!==!0&&E()}else f("click",v)}return{hasRouterLink:o,hasHrefLink:u,hasLink:y,linkTag:l,resolvedLink:h,linkIsActive:p,linkIsExactActive:c,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:C}}function we(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function Ge(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ce(e);if(t)return t.$el||t}function Je(e,t){if(e==null||e.contains(t)===!0)return!0;for(let a=e.nextElementSibling;a!==null;a=a.nextElementSibling)if(a.contains(t))return!0;return!1}const W="0 0 24 24",X=e=>e,Q=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":X,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Q,"ion-ios":Q,"ion-logo":Q,"iconfont ":X,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ie={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Se=new RegExp("^("+Object.keys(le).join("|")+")"),Be=new RegExp("^("+Object.keys(ie).join("|")+")"),Y=new RegExp("^("+Object.keys(oe).join("|")+")"),Ce=/^[Mm]\s?[-+]?\.?\d/,_e=/^img:/,Pe=/^svguse:/,Te=/^ion-/,Ae=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var G=te({name:"QIcon",props:{...ae,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=D(),n=re(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let s,u=e.name;if(u==="none"||!u)return{none:!0};if(a.iconMapFn!==null){const o=a.iconMapFn(u);if(o!==void 0)if(o.icon!==void 0){if(u=o.icon,u==="none"||!u)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(Ce.test(u)===!0){const[o,y=W]=u.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(l=>{const[k,b,p]=l.split("@@");return g("path",{style:b,d:k,transform:p})})}}if(_e.test(u)===!0)return{img:!0,src:u.substring(4)};if(Pe.test(u)===!0){const[o,y=W]=u.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const h=u.match(Se);if(h!==null)s=le[h[1]](u);else if(Ae.test(u)===!0)s=u;else if(Te.test(u)===!0)s=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${u.substring(3)}`;else if(Y.test(u)===!0){s="notranslate material-symbols";const o=u.match(Y);o!==null&&(u=u.substring(6),s+=oe[o[1]]),q=u}else{s="notranslate material-icons";const o=u.match(Be);o!==null&&(u=u.substring(2),s+=ie[o[1]]),q=u}return{cls:s,content:q}});return()=>{const s={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?g(e.tag,s,xe(t.default)):f.value.img===!0?g(e.tag,s,K(t.default,[g("img",{src:f.value.src})])):f.value.svg===!0?g(e.tag,s,K(t.default,[g("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?g(e.tag,s,K(t.default,[g("svg",{viewBox:f.value.viewBox},[g("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(s.class+=" "+f.value.cls),g(e.tag,s,K(t.default,[f.value.content])))}}});function Oe(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function J(e,t,a,n){a.modifiers.stop===!0&&ne(e);const i=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const s=document.createElement("span"),u=document.createElement("span"),q=ge(e),{left:h,top:o,width:y,height:l}=t.getBoundingClientRect(),k=Math.sqrt(y*y+l*l),b=k/2,p=`${(y-k)/2}px`,c=f?p:`${q.left-h-b}px`,x=`${(l-k)/2}px`,_=f?x:`${q.top-o-b}px`;u.className="q-ripple__inner",we(u,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${c},${_},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${i?" text-"+i:""}`,s.setAttribute("dir","ltr"),s.appendChild(u),t.appendChild(s);const B=()=>{s.remove(),clearTimeout(C)};a.abort.push(B);let C=setTimeout(()=>{u.classList.add("q-ripple__inner--enter"),u.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,u.style.opacity=.2,C=setTimeout(()=>{u.classList.remove("q-ripple__inner--enter"),u.classList.add("q-ripple__inner--leave"),u.style.opacity=0,C=setTimeout(()=>{s.remove(),a.abort.splice(a.abort.indexOf(B),1)},275)},250)},50)}function Z(e,{modifiers:t,value:a,arg:n}){const i=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var Me=de({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&J(i,e,n,i.qKeyEvent===!0)},keystart:Oe(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&z(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&J(i,e,n,!0)},300)};Z(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&Z(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),ve(t,"main"),delete e._qripple)}});const se={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},je=Object.keys(se),Ke={align:{type:String,validator:e=>je.includes(e)}};function Ie(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${se[t]}`})}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ne={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],ze=/[^\s]\/[^\s]/,De=["flat","outline","push","unelevated"];function Fe(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Ve={...ae,...ue,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...De.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ke.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},He={...Ve,round:Boolean};function Ue(e){const t=re(e,Ne),a=Ie(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:s,navigateOnClick:u}=Le({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),h=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>o.value===!0?e.tabindex||0:-1),l=d(()=>Fe(e,"standard")),k=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,s.value):Qe.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&ze.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),b=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=d(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:u,isActionable:o}}const{passiveCapture:$}=ke;let T=null,A=null,O=null;var Ze=te({name:"QBtn",props:{...He,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=D(),{classes:i,style:f,innerClasses:s,attributes:u,hasLink:q,linkTag:h,navigateOnClick:o,isActionable:y}=Ue(e),l=F(null),k=F(null);let b=null,p,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=d(()=>({center:e.round})),C=d(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const r={onClick:R,onKeydown:w,onMousedown:I};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${m}`]=S}return r}return{onClick:P}}),E=d(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...u.value,...v.value}));function R(r){if(l.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&l.value.contains(m)===!1&&m.contains(l.value)===!1){l.value.focus();const N=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",N,$),l.value!==null&&l.value.removeEventListener("blur",N,$)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",N,$),l.value.addEventListener("blur",N,$)}}o(r)}}function w(r){l.value!==null&&(a("keydown",r),z(r,[13,32])===!0&&A!==l.value&&(A!==null&&M(),r.defaultPrevented!==!0&&(l.value.focus(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",L,!0),l.value.addEventListener("blur",L,$)),P(r)))}function S(r){l.value!==null&&(a("touchstart",r),r.defaultPrevented!==!0&&(T!==l.value&&(T!==null&&M(),T=l.value,b=r.target,b.addEventListener("touchcancel",L,$),b.addEventListener("touchend",L,$)),p=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,p=!1},200)))}function I(r){l.value!==null&&(r.qSkipRipple=p===!0,a("mousedown",r),r.defaultPrevented!==!0&&O!==l.value&&(O!==null&&M(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",L,$)))}function L(r){if(l.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===l.value)){if(r!==void 0&&r.type==="keyup"){if(A===l.value&&z(r,[13,32])===!0){const m=new MouseEvent("click",r);m.qKeyEvent=!0,r.defaultPrevented===!0&&me(m),r.cancelBubble===!0&&ne(m),l.value.dispatchEvent(m),P(r),r.qKeyEvent=!0}a("keyup",r)}M()}}function M(r){const m=k.value;r!==!0&&(T===l.value||O===l.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===l.value&&(b!==null&&(b.removeEventListener("touchcancel",L,$),b.removeEventListener("touchend",L,$)),T=b=null),O===l.value&&(document.removeEventListener("mouseup",L,$),O=null),A===l.value&&(document.removeEventListener("keyup",L,!0),l.value!==null&&l.value.removeEventListener("blur",L,$),A=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(r){P(r),r.qSkipRipple=!0}return be(()=>{M(!0)}),Object.assign(n,{click:r=>{y.value===!0&&R(r)}}),()=>{let r=[];e.icon!==void 0&&r.push(g(G,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&r.push(g("span",{class:"block"},[e.label])),r=K(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(g(G,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const m=[g("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},r)),e.loading!==null&&m.push(g(he,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(qe)])]:null)),ye(g(h.value,E.value,m),[[Me,_.value,void 0,B.value]])}}});export{Ze as Q,Me as R,Le as a,Je as b,we as c,G as d,Ge as g,Ye as u};
