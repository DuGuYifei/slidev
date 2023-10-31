import{d as _,u as d,a as p,c as m,b as u,r as h,e as s,f as t,t as a,g as l,F as f,h as g,n as v,i as y,o as n,j as x,k as b,l as k,m as N,_ as P}from"./index-3965c1e6.js";import{N as w}from"./NoteDisplay-2867887a.js";const D={class:"m-4"},S={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const r=u(()=>h.map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(n(),s("div",{id:"page-root",style:v(l(y))},[t("div",D,[t("div",S,[t("h1",V,a(l(m).title),1),t("div",L,a(new Date().toLocaleString()),1)]),(n(!0),s(f,null,g(r.value,(e,c)=>(n(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",H,a(e==null?void 0:e.no)+"/"+a(l(x)),1),b(" "+a(e==null?void 0:e.title)+" ",1),j])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<r.value.length-1?(n(),s("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","D:/duguyifei/university/DiplomaSeminar/p1/Personal money-monitoring web-application - Pokemoney/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
