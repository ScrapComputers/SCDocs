"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[9395],{9827:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(4848),i=n(8453);const a={title:"sc.audio",description:"\u0417\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c (Computer API)"},c=void 0,l={id:"Lua API/static-functions-namespaces/sc_audio",title:"sc.audio",description:"\u0417\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c (Computer API)",source:"@site/docs/Lua API/static-functions-namespaces/sc_audio.md",sourceDirName:"Lua API/static-functions-namespaces",slug:"/Lua API/static-functions-namespaces/sc_audio",permalink:"/docs/Lua API/static-functions-namespaces/sc_audio",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"sc.audio",description:"\u0417\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c (Computer API)"},sidebar:"sidebar",previous:{title:"sc",permalink:"/docs/Lua API/static-functions-namespaces/sc"},next:{title:"sc.base64",permalink:"/docs/Lua API/static-functions-namespaces/sc_base64"}},t={},d=[{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",level:2},{value:"AudioParameter",id:"audioparameter",level:3},{value:"\u041f\u043e\u043b\u044f:",id:"\u043f\u043e\u043b\u044f",level:4},{value:"ParamsIncorrectTable",id:"paramsincorrecttable",level:3},{value:"\u041f\u043e\u043b\u044f:",id:"\u043f\u043e\u043b\u044f-1",level:4},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"areParamsCorrect",id:"areparamscorrect",level:3},{value:"exists",id:"exists",level:3},{value:"getAudioNames",id:"getaudionames",level:3},{value:"getParams",id:"getparams",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u0417\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f API \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430!"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,r.jsx)(s.h3,{id:"audioparameter",children:"AudioParameter"}),"\n",(0,r.jsxs)(s.p,{children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u043b\u044f ",(0,r.jsx)(s.a,{href:"#getparams",children:"getParams"})]}),"\n",(0,r.jsx)(s.h4,{id:"\u043f\u043e\u043b\u044f",children:"\u041f\u043e\u043b\u044f:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"default"})," [ ",(0,r.jsx)(s.strong,{children:"number"})," ] \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"maximum"})," [ ",(0,r.jsx)(s.strong,{children:"number"})," ] \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"minimum"})," [ ",(0,r.jsx)(s.strong,{children:"number"})," ] \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"paramsincorrecttable",children:"ParamsIncorrectTable"}),"\n",(0,r.jsxs)(s.p,{children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u043b\u044f ",(0,r.jsx)(s.a,{href:"#areparamscorrect",children:"areParamsCorrect"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"\u0412\u0441\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438."}),"\n",(0,r.jsx)(s.h4,{id:"\u043f\u043e\u043b\u044f-1",children:"\u041f\u043e\u043b\u044f:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"hasNoParamsUsableIssue"})," [ ",(0,r.jsx)(s.strong,{children:"boolean"})," ] \u0415\u0441\u043b\u0438 true, \u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0437\u0432\u0443\u043a\u0430 \u043d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"issues"})," [ ",(0,r.jsx)(s.strong,{children:"string[][]"})," ] \u041c\u0430\u0442\u0440\u0438\u0446\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c. \u041f\u0435\u0440\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u044d\u0442\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u0430 \u0432\u0442\u043e\u0440\u043e\u0439, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0441\u0430\u043c\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u044d\u0442\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."]}),"\n"]}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"\u0415\u0441\u043b\u0438 \u043c\u0430\u0442\u0440\u0438\u0446\u0430 issues \u043f\u0443\u0441\u0442\u0430\u044f \u0438 hasNoParamsUsableIssue \u0440\u0430\u0432\u043d\u043e false, \u0442\u043e \u044d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u043d\u0435\u0442!"}),(0,r.jsx)(s.p,{children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432 \u044d\u0442\u043e"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",metastring:"{lineNos=true}",children:'if not issues.hasNoParamsUsableIssue and sc.table.getTotalItemsDict(issues.issues) == 0 then\r\n\xa0 \xa0 -- \u041f\u0440\u043e\u0431\u043b\u0435\u043c \u041d\u0415\u0422\r\n\r\n\xa0 \xa0 print("\u041f\u0440\u043e\u0431\u043b\u0435\u043c \u043d\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e")\r\nelse\r\n\xa0 \xa0 -- \u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0438 skill issue\r\n\r\n\xa0 \xa0 print("\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0431\u044b\u043b\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u044b")\r\nend\n'})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,r.jsx)(s.h3,{id:"areparamscorrect",children:"areParamsCorrect"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"sc.audio.areParamsCorrect( name, params )\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 \u0437\u0432\u0443\u043a\u0430, \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u044f \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["name [ ",(0,r.jsx)(s.strong,{children:"string"})," ] \u0418\u043c\u044f \u0437\u0432\u0443\u043a\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438."]}),"\n",(0,r.jsxs)(s.li,{children:["params [ ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"#audioparameter",children:"AudioParameter[]"})})," ] \u0418\u043c\u044f \u0437\u0432\u0443\u043a\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[ ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"#paramsincorrecttable",children:"ParamsIncorrectTable"})})," ] \u0412\u0441\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u044d\u0442\u0438\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"exists",children:"exists"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"sc.audio.exists( name )\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u0412\u0435\u0440\u043d\u0451\u0442 true, \u0435\u0441\u043b\u0438 \u0437\u0432\u0443\u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 Scrap Mechanic."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["name [ ",(0,r.jsx)(s.strong,{children:"string"})," ] \u0418\u043c\u044f \u0437\u0432\u0443\u043a\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[ ",(0,r.jsx)(s.strong,{children:"boolean"})," ] \u0415\u0441\u043b\u0438 true, \u0442\u043e \u0437\u0432\u0443\u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0438\u0433\u0440\u0435, \u0438\u043d\u0430\u0447\u0435 false."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getaudionames",children:"getAudioNames"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"sc.audio.getAudioNames()\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u0432\u0443\u043a\u0438 \u0432 Scrap Mechanic \u0438 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442 \u0438\u0445 \u0432\u0441\u0435 \u0432 ",(0,r.jsx)(s.strong,{children:"string[]"}),", \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[ ",(0,r.jsx)(s.strong,{children:"string[]"})," ] \u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0437\u0432\u0443\u043a"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getparams",children:"getParams"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"sc.audio.getParams( name )\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0437\u0432\u0443\u043a\u0430."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["name [ ",(0,r.jsx)(s.strong,{children:"string"})," ] \u0418\u043c\u044f \u0437\u0432\u0443\u043a\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[ ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"#audioparameter",children:"AudioParameter[]"})})," ] \u0412\u0441\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0437\u0432\u0443\u043a\u0430."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>l});var r=n(6540);const i={},a=r.createContext(i);function c(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);