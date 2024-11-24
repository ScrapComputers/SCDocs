"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[1613],{798:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"Lua API/static-functions-namespaces/sc_bitstream","title":"sc.bitstream","description":"BitStream \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440)","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/Lua API/static-functions-namespaces/sc_bitstream.md","sourceDirName":"Lua API/static-functions-namespaces","slug":"/Lua API/static-functions-namespaces/sc_bitstream","permalink":"/ru/docs/Lua API/static-functions-namespaces/sc_bitstream","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"sc.bitstream","description":"BitStream \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440)"},"sidebar":"sidebar","previous":{"title":"sc.base64","permalink":"/ru/docs/Lua API/static-functions-namespaces/sc_base64"},"next":{"title":"sc.color","permalink":"/ru/docs/Lua API/static-functions-namespaces/sc_color"}}');var r=s(4848),c=s(8453);const a={title:"sc.bitstream",description:"BitStream \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440)"},i=void 0,o={},u=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"new",id:"new",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"BitStream \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440)."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,r.jsx)(t.h3,{id:"new",children:"new"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"sc.bitstream.new( data )\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u043d\u043e\u0432\u044b\u0439 BitStream \u043f\u043e\u0442\u043e\u043a."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["data [ ",(0,r.jsx)(t.strong,{children:"string?"})," ] \u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["[ ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/ru/docs/Lua%20API/user-data/bitstream",children:"BitStream.Stream"})})," ] \u0421\u0430\u043c bitstream."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const r={},c=n.createContext(r);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);