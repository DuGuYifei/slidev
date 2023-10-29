import{d,u as _,a as u,c as m,b as p,r as h,e as s,f as t,t as o,g as l,F as f,h as g,n as v,i as y,o as r,j as x,k as b,l as N,m as k,_ as P}from"./index-035a077c.js";import{N as w}from"./NoteDisplay-081de424.js";const D={class:"m-4"},V={class:"mb-10"},C={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},S={class:"text-lg"},T={class:"font-bold flex gap-2"},j={class:"opacity-50"},B=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},H=d({__name:"PresenterPrint",setup(z){_(`
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
`),u({title:`Notes - ${m.title}`});const i=p(()=>h.map(a=>{var n;return(n=a.meta)==null?void 0:n.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,n)=>(r(),s("div",{id:"page-root",style:v(l(y))},[t("div",D,[t("div",V,[t("h1",C,o(l(m).title),1),t("div",L,o(new Date().toLocaleString()),1)]),(r(!0),s(f,null,g(i.value,(e,c)=>(r(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",S,[t("div",T,[t("div",j,o(e==null?void 0:e.no)+"/"+o(l(x)),1),b(" "+o(e==null?void 0:e.title)+" ",1),B])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(r(),s("hr",F)):k("v-if",!0)]))),128))])],4))}}),E=P(H,[["__file","D:/duguyifei/university/DeepNeuralNetworksForDataAnalysis/Project/phase1/slidev/Character detection for a video game from PC/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
