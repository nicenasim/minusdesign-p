import{Q as p}from"./QBtn.6e74fcb3.js";import{i as B,a as A,b as L,c as P,d as Q,e as C,f as D,g as F,h as G,j as H,Q as T}from"./QTable.22426478.js";import{i as n,c as m,d as u,e as g,f as _}from"./5.e0ff4af7.js";import{r as s,I as i,Q as a,L as e,M as v,P as t,a0 as h,a1 as w,a2 as b}from"./index.4a54b43f.js";import"./QSpinner.464cd8b7.js";import"./selection.360d7a44.js";import"./QItemLabel.863ba05e.js";import"./use-timeout.a70c012e.js";const M={class:"bg-dark text-white q-pa-xl projects"},N=e("div",{class:"flex justify-center q-py-xl"},[e("div",{class:"text-h4"},"Awards")],-1),V={class:"flex q-gutter-md items-center justify-center q-py-xl"},E={class:"flex justify-center q-gutter-sm"},I={class:"row justify-center"},K={class:"col-md-12 col-12"},S={class:"row q-my-md text-h6 text-line"},J={class:"col-md-6 flex"},O={class:"q-mr-xl"},R=e("div",{class:"q-mr-xl"},[e("span",null,"\u2192")],-1),U={class:"col-md-6 flex"},W={class:"q-mr-xl"},X={class:"grid-wrapper"},Y=["src"],oe={__name:"AwardsPage",setup(Z){const l=s(!0),r=s(!1),c=s("d-block"),d=s("d-none"),x=[{name:"name",label:"Title",align:"left",field:"title",sortable:!0},{name:"date",label:"Date",align:"left",field:"date",sortable:!0}],f=s([{title:"Taiga Dining and House Bar",date:"15/12/2024",image:[{src:n,size:"tall"},{src:m,size:"big"},{src:u,size:"wide"},{src:g,size:"big"},{src:_,size:"wide"}]},{title:"Parc Komo",date:"10/05/2024",image:[{src:B,size:"wide"},{src:A,size:"tall"},{src:L,size:"big"},{src:P,size:"wide"},{src:Q,size:"big"}]},{title:"Mandai Bird Paradise",date:"15/12/2024",image:[{src:C,size:"tall"},{src:D,size:"big"},{src:F,size:"wide"},{src:G,size:"big"},{src:H,size:"wide"}]},{title:"House 28",date:"15/12/2024",image:[{src:n,size:"tall"},{src:m,size:"big"},{src:u,size:"wide"},{src:g,size:"big"},{src:_,size:"wide"}]},{title:"House in Contours",date:"15/12/2024",image:[{src:n,size:"tall"},{src:m,size:"big"},{src:u,size:"wide"},{src:g,size:"big"},{src:_,size:"wide"}]}]);function y(){d.value="d-block",c.value="d-none",l.value=!1,r.value=!0}function k(){d.value="d-none",c.value="d-block",l.value=!0,r.value=!1}return($,ee)=>(i(),a("div",M,[N,e("div",V,[e("div",E,[v(p,{onClick:k,color:"text-white",icon:"grid_view",class:t([[l.value?"text-primary":""],"q-mr-md-md q-mr-sm"]),size:"md",flat:""},null,8,["class"]),v(p,{onClick:y,color:"text-white",icon:"density_small",class:t([r.value?"text-primary":""]),size:"md",flat:""},null,8,["class"])])]),e("div",null,[e("div",I,[e("div",K,[v(T,{rows:f.value,columns:x,"row-key":"name",dark:"",flat:"","hide-pagination":!0,class:t(d.value),bordered:""},null,8,["rows","class"])])]),(i(!0),a(h,null,w(f.value,(o,q)=>(i(),a("div",{class:t([c.value,"image-body"]),key:q},[e("div",S,[e("div",J,[e("div",O,b(o.title),1),R]),e("div",U,[e("div",W,b(o.date),1)])]),e("div",null,[e("div",X,[(i(!0),a(h,null,w(o.image,(z,j)=>(i(),a("div",{key:j,class:t([z.size,"cursor-pointer"])},[e("img",{src:z.src},null,8,Y)],2))),128))])])],2))),128))])]))}};export{oe as default};
