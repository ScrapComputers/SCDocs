"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[616],{8086:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=r(4848),t=r(8453);const a={title:"SyntaxManager",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0443 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u0432 lua \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."},i=void 0,o={id:"Addon API/managers/syntax-manager",title:"SyntaxManager",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0443 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u0432 lua \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Addon API/managers/syntax-manager.md",sourceDirName:"Addon API/managers",slug:"/Addon API/managers/syntax-manager",permalink:"/ru/docs/Addon API/managers/syntax-manager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SyntaxManager",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0443 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u0432 lua \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."},sidebar:"sidebar",previous:{title:"LanguageManager",permalink:"/ru/docs/Addon API/managers/language-manager"},next:{title:"Modules",permalink:"/ru/docs/category/modules"}},c={},d=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"highlightCode",id:"highlightcode",level:3}];function l(n){const e={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0443 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u0432 lua \u043a\u043e\u0434\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u043f\u043e\u043b\u0435/\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 MyGUI"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,s.jsx)(e.h3,{id:"highlightcode",children:"highlightCode"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.syntaxManager.highlightCode( source, exceptionLines )\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0443 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u043a \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u043a\u043e\u0434\u0443 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0433\u043e. \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439, \u043f\u0435\u0440\u0432\u0430\u044f \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 - \u044d\u0442\u043e \u0442\u0430, \u0433\u0434\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430, \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 - \u044d\u0442\u043e \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u044d\u0442\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0435. \u0415\u0441\u043b\u0438 \u0432\u044b \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435, \u0442\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u043f\u0443\u0441\u0442\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["source [ ",(0,s.jsx)(e.strong,{children:"string"})," ] \u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u0434\u043b\u044f \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430."]}),"\n",(0,s.jsxs)(e.li,{children:["exceptionLines [ ",(0,s.jsx)(e.strong,{children:"integer[]"})," ] \u0421\u0442\u0440\u043e\u043a\u0438, \u0433\u0434\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["[ ",(0,s.jsx)(e.strong,{children:"string"})," ] \u041f\u043e\u0434\u0441\u0432\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434."]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>o});var s=r(6540);const t={},a=s.createContext(t);function i(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);