import{v as u}from"./QBtn.1a74cb8b.js";import{y as i,d as m,g as s}from"./index.7fe4c94e.js";function f(){let e=null;const o=s();function t(){e!==null&&(clearTimeout(e),e=null)}return i(t),m(t),{removeTimeout:t,registerTimeout(n,r){t(),u(o)===!1&&(e=setTimeout(()=>{e=null,n()},r))}}}export{f as u};
