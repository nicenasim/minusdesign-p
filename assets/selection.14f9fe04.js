import{a as t,Z as n}from"./index.6af0a87b.js";const i={dark:{type:Boolean,default:null}};function l(e,o){return t(()=>e.dark===null?o.dark.isActive:e.dark)}function c(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),n.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{l as a,c,i as u};
