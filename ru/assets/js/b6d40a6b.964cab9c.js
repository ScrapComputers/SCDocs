"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[6506],{6149:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"Addon API/modules/audio","title":"Audio","description":"\u0417\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c (Computer API)","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/Addon API/modules/audio.md","sourceDirName":"Addon API/modules","slug":"/Addon API/modules/audio","permalink":"/ru/docs/Addon API/modules/audio","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Audio","description":"\u0417\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c (Computer API)"},"sidebar":"sidebar","previous":{"title":"Modules","permalink":"/ru/docs/category/modules"},"next":{"title":"Base64","permalink":"/ru/docs/Addon API/modules/base64"}}');var i=n(4848),l=n(8453);const a={title:"Audio",description:"\u0417\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c (Computer API)"},d=void 0,c={},t=[{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",level:2},{value:"AudioParameter",id:"audioparameter",level:3},{value:"\u041f\u043e\u043b\u044f:",id:"\u043f\u043e\u043b\u044f",level:4},{value:"ParamsIncorrectTable",id:"paramsincorrecttable",level:3},{value:"\u041f\u043e\u043b\u044f:",id:"\u043f\u043e\u043b\u044f-1",level:4},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"getAudioNames",id:"getaudionames",level:3},{value:"audioExists",id:"audioexists",level:3},{value:"getAvailableParams",id:"getavailableparams",level:3},{value:"getIssuesWithParams",id:"getissueswithparams",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"\u0417\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f API \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430!"}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,i.jsx)(s.h3,{id:"audioparameter",children:"AudioParameter"}),"\n",(0,i.jsx)(s.p,{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 \u0430\u0443\u0434\u0438\u043e."}),"\n",(0,i.jsx)(s.h4,{id:"\u043f\u043e\u043b\u044f",children:"\u041f\u043e\u043b\u044f:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"default"})," [ ",(0,i.jsx)(s.strong,{children:"number"})," ] \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"maximum"})," [ ",(0,i.jsx)(s.strong,{children:"number"})," ] \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"minimum"})," [ ",(0,i.jsx)(s.strong,{children:"number"})," ] \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"paramsincorrecttable",children:"ParamsIncorrectTable"}),"\n",(0,i.jsx)(s.p,{children:"\u0412\u0441\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438."}),"\n",(0,i.jsx)(s.h4,{id:"\u043f\u043e\u043b\u044f-1",children:"\u041f\u043e\u043b\u044f:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"hasNoParamsUsableIssue"})," [ ",(0,i.jsx)(s.strong,{children:"boolean"})," ] \u0415\u0441\u043b\u0438 true, \u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0437\u0432\u0443\u043a\u0430 \u043d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"issues"})," [ ",(0,i.jsx)(s.strong,{children:"string[][]"})," ] \u041c\u0430\u0442\u0440\u0438\u0446\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c. \u041f\u0435\u0440\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u044d\u0442\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u0430 \u0432\u0442\u043e\u0440\u043e\u0439, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0441\u0430\u043c\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u044d\u0442\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."]}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"\u0415\u0441\u043b\u0438 \u043c\u0430\u0442\u0440\u0438\u0446\u0430 issues \u043f\u0443\u0441\u0442\u0430\u044f \u0438 hasNoParamsUsableIssue \u0440\u0430\u0432\u043d\u043e false, \u0442\u043e \u044d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u043d\u0435\u0442!"}),(0,i.jsx)(s.p,{children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432 \u044d\u0442\u043e"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lua",metastring:"{lineNos=true}",children:'if not issues.hasNoParamsUsableIssue and sm.scrapcomputers.table.getTotalItemsDict(issues.issues) == 0 then\r\n    -- \u041f\u0440\u043e\u0431\u043b\u0435\u043c \u041d\u0415\u0422\r\n\r\n    print("\u041f\u0440\u043e\u0431\u043b\u0435\u043c \u043d\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e.")\r\nelse\r\n    -- \u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0438 skill issue\r\n\r\n    print("\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0431\u044b\u043b\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u044b.")\r\nend\n'})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,i.jsx)(s.h3,{id:"getaudionames",children:"getAudioNames"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lua",children:"sm.scrapcomputers.audio.getAudioNames()\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u0432\u0443\u043a\u0438 \u0432 Scrap Mechanic \u0438 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442 \u0438\u0445 \u0432\u0441\u0435 \u0432 ",(0,i.jsx)(s.strong,{children:"string[]"}),", \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[ ",(0,i.jsx)(s.strong,{children:"string[]"})," ] \u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0437\u0432\u0443\u043a."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"audioexists",children:"audioExists"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lua",children:"sm.scrapcomputers.audio.audioExists( name )\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u0412\u0435\u0440\u043d\u0451\u0442 true, \u0435\u0441\u043b\u0438 \u0437\u0432\u0443\u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 Scrap Mechanic."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["name [ ",(0,i.jsx)(s.strong,{children:"string"})," ] \u0418\u043c\u044f \u0437\u0432\u0443\u043a\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[ ",(0,i.jsx)(s.strong,{children:"boolean"})," ] \u0415\u0441\u043b\u0438 true, \u0442\u043e \u0437\u0432\u0443\u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0438\u0433\u0440\u0435, \u0438\u043d\u0430\u0447\u0435 false."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getavailableparams",children:"getAvailableParams"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lua",children:"sm.scrapcomputers.audio.getAvailableParams( name )\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0437\u0432\u0443\u043a\u0430."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["name [ ",(0,i.jsx)(s.strong,{children:"string"})," ] \u0418\u043c\u044f \u0437\u0432\u0443\u043a\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[ ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"#audioparameter",children:"AudioParameter[]"})})," ] \u0412\u0441\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0437\u0432\u0443\u043a\u0430."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getissueswithparams",children:"getIssuesWithParams"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lua",children:"sm.scrapcomputers.audio.getIssuesWithParams( name, params )\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 \u0430\u0443\u0434\u0438\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u044f \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["name [ ",(0,i.jsx)(s.strong,{children:"string"})," ] \u0418\u043c\u044f \u0430\u0443\u0434\u0438\u043e."]}),"\n",(0,i.jsxs)(s.li,{children:["params [ ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"#audioparameter",children:"AudioParameter"})})," ] \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0430\u0443\u0434\u0438\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[ ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"#paramsincorrecttable",children:"ParamsIncorrectTable"})})," ] \u0412\u0441\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u044d\u0442\u0438\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>d});var r=n(6540);const i={},l=r.createContext(i);function a(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);