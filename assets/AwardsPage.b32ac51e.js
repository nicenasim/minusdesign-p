import{Q as p}from"./QBtn.5ac9d7f3.js";import{i as B,a as L,b as Q,c as A,d as C,e as P,f as D,g as F,h as G,Q as H}from"./QTable.15b36857.js";import{i as n,c as m,d as u,e as g,f as _}from"./5.a5849a79.js";import{i as T}from"./15.25c8a0cf.js";import{r as s,I as i,Q as a,L as e,M as v,P as t,a3 as b,a1 as h,a2 as w}from"./index.13770dd1.js";import"./selection.9fef939c.js";import"./QItemLabel.40b1828f.js";import"./use-timeout.aa5578d3.js";const M={class:"bg-dark text-white"},N={class:"container-md q-px-md-none q-px-sm projects"},V=e("div",{class:"flex justify-center q-py-xl"},[e("div",{class:"text-h4"},"Awards")],-1),E={class:"flex q-gutter-md items-center justify-md-between justify-center q-py-xl"},I={class:"flex justify-center q-gutter-xs"},K={class:"row justify-center"},S={class:"col-md-12 col-12"},J={class:"row q-my-md text-body text-line"},O={class:"col-md-6 flex"},R={class:"q-mr-xl"},U=e("div",{class:"q-mr-xl"},[e("span",null,"\u2192")],-1),W={class:"col-md-6 flex"},X={class:"q-mr-xl"},Y={class:"grid-wrapper"},Z=["src"],ne={__name:"AwardsPage",setup($){const l=s(!0),r=s(!1),c=s("d-block"),o=s("d-none"),x=[{name:"name",label:"Title",align:"left",field:"title",sortable:!0},{name:"date",label:"Date",align:"left",field:"date",sortable:!0}],f=s([{title:"Taiga Dining and House Bar",date:"15/12/2024",image:[{src:n,size:"tall"},{src:m,size:"big"},{src:u,size:"wide"},{src:g,size:"big"},{src:_,size:"wide"}]},{title:"Parc Komo",date:"10/05/2024",image:[{src:B,size:"wide"},{src:L,size:"tall"},{src:Q,size:"big"},{src:A,size:"wide"},{src:C,size:"big"}]},{title:"Mandai Bird Paradise",date:"15/12/2024",image:[{src:P,size:"tall"},{src:D,size:"big"},{src:F,size:"wide"},{src:G,size:"big"},{src:T,size:"wide"}]},{title:"House 28",date:"15/12/2024",image:[{src:n,size:"tall"},{src:m,size:"big"},{src:u,size:"wide"},{src:g,size:"big"},{src:_,size:"wide"}]},{title:"House in Contours",date:"15/12/2024",image:[{src:n,size:"tall"},{src:m,size:"big"},{src:u,size:"wide"},{src:g,size:"big"},{src:_,size:"wide"}]}]);function y(){o.value="d-block",c.value="d-none",l.value=!1,r.value=!0}function k(){o.value="d-none",c.value="d-block",l.value=!0,r.value=!1}return(ee,se)=>(i(),a("div",M,[e("div",N,[V,e("div",E,[e("div",I,[v(p,{onClick:k,color:"text-white",icon:"grid_view",class:t([[l.value?"text-primary":""],"q q-mr-sm"]),size:"md",unelevated:"",outline:""},null,8,["class"]),v(p,{onClick:y,color:"text-white",icon:"density_small",class:t([r.value?"text-primary":""]),size:"md",unelevated:"",outline:""},null,8,["class"])])]),e("div",null,[e("div",K,[e("div",S,[v(H,{rows:f.value,columns:x,"row-key":"name",dark:"",flat:"","hide-pagination":!0,class:t(o.value),bordered:""},null,8,["rows","class"])])]),(i(!0),a(b,null,h(f.value,(d,q)=>(i(),a("div",{class:t([c.value,"image-body"]),key:q},[e("div",J,[e("div",O,[e("div",R,w(d.title),1),U]),e("div",W,[e("div",X,w(d.date),1)])]),e("div",null,[e("div",Y,[(i(!0),a(b,null,h(d.image,(z,j)=>(i(),a("div",{key:j,class:t([z.size,"cursor-pointer"])},[e("img",{src:z.src},null,8,Z)],2))),128))])])],2))),128))])])]))}};export{ne as default};
