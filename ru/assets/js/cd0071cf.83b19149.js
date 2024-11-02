"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[4357],{1756:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=s(4848),t=s(8453);const l={title:"FontManager",description:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043d\u0438\u043c."},i=void 0,o={id:"Addon API/managers/font-manager",title:"FontManager",description:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043d\u0438\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Addon API/managers/font-manager.md",sourceDirName:"Addon API/managers",slug:"/Addon API/managers/font-manager",permalink:"/SCDocs/ru/docs/Addon API/managers/font-manager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FontManager",description:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043d\u0438\u043c."},sidebar:"sidebar",previous:{title:"EnvironmentManager",permalink:"/SCDocs/ru/docs/Addon API/managers/environment-manager"},next:{title:"Modules",permalink:"/SCDocs/ru/docs/category/modules"}},c={},a=[{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",level:2},{value:"SCFont",id:"scfont",level:3},{value:"\u041f\u043e\u043b\u044f:",id:"\u043f\u043e\u043b\u044f",level:4},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"getFont",id:"getfont",level:3},{value:"getFontNames",id:"getfontnames",level:3},{value:"getDefaultFontName",id:"getdefaultfontname",level:3},{value:"getDefaultFont",id:"getdefaultfont",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u043e\u0432 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0448\u0440\u0438\u0444\u0442\u0430\u043c\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0438\u0445."}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,r.jsx)(e.h3,{id:"scfont",children:"SCFont"}),"\n",(0,r.jsxs)(e.p,{children:["SCFont (\u043f\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u043c\u0443 ",(0,r.jsx)(e.code,{children:"SCF"}),", \u043d\u0443 \u0438\u043b\u0438 \u0436\u0435 ",(0,r.jsx)(e.code,{children:"ScrapComputers Font"}),") \u044d\u0442\u043e \u0448\u0440\u0438\u0444\u0442 \u0441 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0432\u044b\u0441\u043e\u0442\u043e\u0439 \u0438 \u0448\u0438\u0440\u0438\u043d\u043e\u0439 \u0434\u043b\u044f \u041a\u0410\u0416\u0414\u041e\u0413\u041e \u0441\u0438\u043c\u0432\u043e\u043b\u0430. \u0412\u0435\u0441\u044c \u0448\u0440\u0438\u0444\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 Lua \u0444\u0430\u0439\u043b\u0435, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435 \u043e\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u0444\u0430\u0439\u043b\u0430."]}),"\n",(0,r.jsx)(e.h4,{id:"\u043f\u043e\u043b\u044f",children:"\u041f\u043e\u043b\u044f:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["fontWidth [ ",(0,r.jsx)(e.strong,{children:"integer"})," ] \u0428\u0438\u0440\u0438\u043d\u0430 \u0448\u0440\u0438\u0444\u0442\u0430"]}),"\n",(0,r.jsxs)(e.li,{children:["fontHeight [ ",(0,r.jsx)(e.strong,{children:"integer"})," ] \u0412\u044b\u0441\u043e\u0442\u0430 \u0448\u0440\u0438\u0444\u0442\u0430"]}),"\n",(0,r.jsxs)(e.li,{children:["characters [ ",(0,r.jsx)(e.strong,{children:"string"})," ] \u0412\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0432 \u0448\u0440\u0438\u0444\u0442\u0435"]}),"\n",(0,r.jsxs)(e.li,{children:["errorChar [ ",(0,r.jsx)(e.strong,{children:"string[]"})," ] \u0421\u0438\u043c\u0432\u043e\u043b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0433\u043b\u0438\u0444\u0430."]}),"\n",(0,r.jsxs)(e.li,{children:["charset [ ",(0,r.jsx)(e.strong,{children:"table<string, string[]>"})," ] \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0433\u043b\u0438\u0444\u0430\u0445 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,r.jsx)(e.h3,{id:"getfont",children:"getFont"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.fontManager.getFont( fontName )\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0448\u0440\u0438\u0444\u0442 \u043f\u043e \u0435\u0433\u043e \u0438\u043c\u0435\u043d\u0438."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["fontName [ ",(0,r.jsx)(e.strong,{children:"string"})," ] \u0418\u043c\u044f \u0448\u0440\u0438\u0444\u0442\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsxs)(e.a,{href:"#scfont",children:[(0,r.jsx)(e.strong,{children:"SCFont?"})," "]})," ] \u0428\u0440\u0438\u0444\u0442. Nil, \u0435\u0441\u043b\u0438 \u0448\u0440\u0438\u0444\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d."]}),"\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsx)(e.strong,{children:"string?"})," ] \u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435. Nil, \u0435\u0441\u043b\u0438 \u0432\u0441\u0451 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getfontnames",children:"getFontNames"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.fontManager.getFontNames()\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u0448\u0440\u0438\u0444\u0442\u043e\u0432."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsx)(e.strong,{children:"string[]"})," ] \u0412\u0441\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u0448\u0440\u0438\u0444\u0442\u043e\u0432."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getdefaultfontname",children:"getDefaultFontName"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.fontManager.getDefaultFontName()\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u0448\u0440\u0438\u0444\u0442\u0430."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsx)(e.strong,{children:"string"})," ] \u0418\u043c\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u0448\u0440\u0438\u0444\u0442\u0430."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getdefaultfont",children:"getDefaultFont"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.fontManager.getDefaultFont()\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0448\u0440\u0438\u0444\u0442 ScrapComputers."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsxs)(e.a,{href:"#scfont",children:[(0,r.jsx)(e.strong,{children:"SCFont"})," "]})," ] \u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0448\u0440\u0438\u0444\u0442."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>o});var r=s(6540);const t={},l=r.createContext(t);function i(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);