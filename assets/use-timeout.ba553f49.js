import{v as u}from"./QBtn.ddcc3c6d.js";import{y as i,d as m,g as s}from"./index.10f0ddd1.js";function f(){let e=null;const o=s();function t(){e!==null&&(clearTimeout(e),e=null)}return i(t),m(t),{removeTimeout:t,registerTimeout(n,r){t(),u(o)===!1&&(e=setTimeout(()=>{e=null,n()},r))}}}export{f as u};
