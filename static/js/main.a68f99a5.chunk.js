(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),o=function(t,e){return t.find((function(t){return t.id===e}))||t[0]},r=c(0),l=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected,a=o(e,c),i=a.id,s=a.content;return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){var c=t.id,a=t.title;return Object(r.jsx)("li",{className:d()({"is-active":c===i}),"data-cy":"Tab",children:Object(r.jsx)("a",{href:"#".concat(c),"data-cy":"TabLink",onClick:function(){return function(t){t!==i&&n(o(e,t))}(c)},children:a})},c)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:s})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(s.useState)(j[0]),e=Object(i.a)(t,2),c=e[0],n=e[1],a=c.id,b=c.title;return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(b)}),Object(r.jsx)(l,{tabs:j,selectedTabId:a,onTabSelected:function(t){n(t)}})]})};a.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a68f99a5.chunk.js.map