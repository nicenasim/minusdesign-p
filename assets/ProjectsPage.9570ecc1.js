import{Q as o}from"./QBtn.ddcc3c6d.js";import{i as j,a as T,b as L,c as B,d as C,e as P,f as R,g as H,h as Q,j as S,Q as A}from"./QTable.8a5512ff.js";import{i as r,c,d as n,e as d,f as m}from"./5.963ea4f6.js";import{r as _,I as s,Q as i,L as e,M as a,P as t,a1 as h,a2 as b,a3 as y}from"./index.10f0ddd1.js";import"./selection.2a278c63.js";import"./QItemLabel.9e71477a.js";import"./use-timeout.ba553f49.js";const F={class:"bg-dark text-white q-pa-md-xl q-pa-sm projects"},M=e("div",{class:"flex justify-center q-py-xl"},[e("div",{class:"text-h4"},"Projects")],-1),D={class:"flex q-gutter-md items-center justify-center q-py-xl"},E={class:"flex justify-center q-gutter-sm"},G={class:"flex justify-center q-gutter-sm"},K={key:0},N={class:"row q-my-md text-h6 text-line"},V={class:"col-md-6 flex"},I={class:"q-mr-xl"},Y=e("div",{class:"q-mr-xl"},[e("span",null,"\u2192")],-1),J={class:"col-md-6 flex"},O={class:"q-mr-xl"},U={class:"q-mr-xl"},W={class:"q-mr-xl"},X={class:"grid-wrapper"},Z=["src"],$={key:1,class:"row justify-center"},ee={class:"col-md-12 col-12"},de={__name:"ProjectsPage",setup(se){const g=_(!0),u=_(!1),v=[{name:"name",label:"name",align:"left",field:"title",sortable:!0},{name:"typology",label:"Typology",align:"left",field:"typology",sortable:!0},{name:"location",label:"Location",align:"left",field:"location",sortable:!0},{name:"year",label:"Year",align:"left",field:"year",sortable:!0}],f=_([{title:"Taiga Dining and House Bar",year:2022,typology:"Hospitality",location:"Singapore",image:[{src:r,size:"tall"},{src:c,size:"big"},{src:n,size:"wide"},{src:d,size:"big"},{src:m,size:"wide"}]},{title:"Parc Komo",year:2023,typology:"Residential",location:"Thailand",image:[{src:j,size:"wide"},{src:T,size:"tall"},{src:L,size:"big"},{src:B,size:"wide"},{src:C,size:"big"}]},{title:"Mandai Bird Paradise",year:2023,typology:"Residential",location:"Thailand",image:[{src:P,size:"tall"},{src:R,size:"big"},{src:H,size:"wide"},{src:Q,size:"big"},{src:S,size:"wide"}]},{title:"House 28",year:2023,typology:"Residential",location:"Thailand",image:[{src:r,size:"tall"},{src:c,size:"big"},{src:n,size:"wide"},{src:d,size:"big"},{src:m,size:"wide"}]},{title:"House in Contours",year:2023,typology:"Residential",location:"Thailand",image:[{src:r,size:"tall"},{src:c,size:"big"},{src:n,size:"wide"},{src:d,size:"big"},{src:m,size:"wide"}]},{title:"MAKE houSe",year:2023,typology:"Residential",location:"Singapore",image:[{src:r,size:"tall"},{src:c,size:"big"},{src:n,size:"wide"},{src:d,size:"big"},{src:m,size:"wide"}]},{title:"182 Clemenceau",year:2022,typology:"Hospitality",location:"Singapore",image:[{src:r,size:"tall"},{src:c,size:"big"},{src:n,size:"wide"},{src:d,size:"big"},{src:m,size:"wide"}]}]);function w(){g.value=!1,u.value=!0}function x(){g.value=!0,u.value=!1}return(p,ie)=>(s(),i("div",F,[M,e("div",D,[e("div",E,[a(o,{onClick:x,color:"text-white",icon:"grid_view",class:t([[g.value?"text-primary":""],"q-mr-md-md q-mr-sm"]),size:"md",flat:""},null,8,["class"]),a(o,{onClick:w,color:"text-white",icon:"density_small",class:t([u.value?"text-primary":""]),size:"md",flat:""},null,8,["class"])]),e("div",G,[a(o,{color:"text-white",label:"Commercial",class:t([[p.isTypology?"bg-grey":""],"q-mr-md-md q-mr-sm"]),flat:""},null,8,["class"]),a(o,{color:"text-white",label:"Residential",class:t([[p.isLocation?"bg-grey":""],"q-mr-md-md q-mr-sm"]),flat:""},null,8,["class"]),a(o,{color:"text-white",label:"concept",class:t([[p.isLocation?"bg-grey":""],"q-mr-md-md q-mr-md"]),flat:""},null,8,["class"])])]),e("div",null,[g.value?(s(),i("div",K,[(s(!0),i(h,null,b(f.value,(l,q)=>(s(),i("div",{class:"image-body",key:q},[e("div",N,[e("div",V,[e("div",I,y(l.title),1),Y]),e("div",J,[e("div",O,y(l.typology),1),e("div",U,y(l.location),1),e("div",W,y(l.year),1)])]),e("div",X,[(s(!0),i(h,null,b(l.image,(z,k)=>(s(),i("div",{key:k,class:t([z.size,"cursor-pointer"])},[e("img",{src:z.src},null,8,Z)],2))),128))])]))),128))])):(s(),i("div",$,[e("div",ee,[a(A,{rows:f.value,columns:v,"row-key":"name",dark:"",flat:"","hide-pagination":!0,bordered:""},null,8,["rows"])])]))])]))}};export{de as default};
