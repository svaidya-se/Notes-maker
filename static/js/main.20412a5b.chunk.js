(this["webpackJsonpusing-pre-built-react-components"]=this["webpackJsonpusing-pre-built-react-components"]||[]).push([[0],{42:function(e,t,n){e.exports=n(52)},52:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),c=n.n(r),u=n(38),o=n(21),i=n(34),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"Note-Keeper"))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright Practice Project Saurav Vaidya \u24d2 ",e))},s=n(36),p=n.n(s);var v=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(p.a,null)))},d=n(25),b=n(32),h=n(37),j=n.n(h),O=n(70),g=n(69);var k=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],E=i[1];function f(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{name:"title",onChange:f,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{onClick:function(){c(!0)},name:"content",onChange:f,value:m.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(g.a,{in:r},l.a.createElement(O.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),t.preventDefault()}},l.a.createElement(j.a,null)))))};var C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(k,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(v,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(f,null))};c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.20412a5b.chunk.js.map