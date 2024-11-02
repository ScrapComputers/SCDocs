"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[4135],{5940:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(4848),t=s(8453);const i={title:"Util",description:"\u041c\u043e\u0434\u0443\u043b\u044c \u0443\u0442\u0438\u043b\u0438\u0442 (Computer API)"},o=void 0,l={id:"Addon API/modules/util",title:"Util",description:"\u041c\u043e\u0434\u0443\u043b\u044c \u0443\u0442\u0438\u043b\u0438\u0442 (Computer API)",source:"@site/docs/Addon API/modules/util.md",sourceDirName:"Addon API/modules",slug:"/Addon API/modules/util",permalink:"/SCDocs/docs/Addon API/modules/util",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Util",description:"\u041c\u043e\u0434\u0443\u043b\u044c \u0443\u0442\u0438\u043b\u0438\u0442 (Computer API)"},sidebar:"sidebar",previous:{title:"Table",permalink:"/SCDocs/docs/Addon API/modules/table"},next:{title:"Vec3",permalink:"/SCDocs/docs/Addon API/modules/vec3"}},d={},c=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"positiveModulo",id:"positivemodulo",level:3}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u041c\u043e\u0434\u0443\u043b\u044c \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u0430\u043c\u0438 \u0434\u043b\u044f API \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430!"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,r.jsx)(n.h3,{id:"positivemodulo",children:"positiveModulo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.util.positiveModulo( a, b )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u0434\u0435\u043b\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsxs)(n.admonition,{title:"\u0410 \u0432\u044b \u0437\u043d\u0430\u043b\u0438?",type:"tip",children:[(0,r.jsx)(n.p,{children:"\u042d\u0442\u043e \u0431\u0435\u0441\u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u0438 \u044f \u043d\u0435 \u0437\u043d\u0430\u044e, \u0437\u0430\u0447\u0435\u043c \u0432\u0430\u043c \u044d\u0442\u043e \u043d\u0443\u0436\u043d\u043e. \u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430, \u0447\u0442\u043e \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u043d\u0435 0!"}),(0,r.jsx)(n.p,{children:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 sm.scrapcomputers.util.positiveModulo \u2014 \u044d\u0442\u043e \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u0447\u0442\u043e sm.util.positiveModulo. \u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 1:1!"}),(0,r.jsxs)(n.p,{children:["\u042d\u0442\u043e \u043d\u0435 \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e \u043c\u044b \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043b\u0438. \u0423 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u043d\u0435 \u043c\u043e\u0433\u043b\u0438 \u0441\u043b\u043e\u043c\u0430\u0442\u044c \u0438\u0433\u0440\u0443! \u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c SM \u0437\u0430 \u0442\u043e, \u0447\u0442\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 ",(0,r.jsx)(n.strong,{children:"1 \u041e\u0428\u0418\u0411\u041a\u0410 \u041f\u0420\u041e\u0412\u0415\u0420\u042c\u0422\u0415 \u0414\u0415\u041b\u0415\u041d\u0418\u0415 \u041d\u0410 \u041d\u041e\u041b\u042c \u041e\u0428\u0418\u0411\u041a\u0410"}),"."]}),(0,r.jsx)(n.p,{children:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u0437\u0433\u043b\u044f\u043d\u0435\u043c \u043d\u0430 \u043d\u0430\u0448 \u043a\u043e\u0434 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0441\u0431\u043e\u0435\u0432:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'---\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043e\u0442 \u0434\u0435\u043b\u0435\u043d\u0438\u044f. \u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u043e\u043b\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430, \u0447\u0435\u043c sm.util.postiveModule, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 Scrap Mechanic\r\n---\u043d\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 0 \u0434\u043b\u044f sm.util.postiveModule, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d \u043a\u0440\u0430\u0448\u0438\u0442 \u0438\u0433\u0440\u0443.\r\n---@param a number \u0427\u0438\u0441\u043b\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043e\u043a\r\n---@param b number \u0414\u0435\u043b\u0438\u0442\u0435\u043b\u044c\r\n---@return number remainder \u041e\u0441\u0442\u0430\u0442\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c\r\nsm.scrapcomputers.util.postiveModulo = function (a, b)\r\n\xa0 \xa0 if b == 0 then\r\n\xa0 \xa0 \xa0 \xa0 error("\u041d\u0435\u043b\u044c\u0437\u044f \u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 0!")\r\n\xa0 \xa0 else\r\n\xa0 \xa0 \xa0 \xa0 return sm.util.positiveModulo(a, b)\r\n\xa0 \xa0 end\r\nend\n'})}),(0,r.jsx)(n.p,{children:"\u042d\u0442\u043e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u043d\u0435 \u043c\u043e\u0433\u043b\u0438 \u0430\u0432\u0430\u0440\u0438\u0439\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0438\u0433\u0440\u0443. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0434\u0443\u043c\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043b\u043e\u043c\u0430\u0442\u044c \u0438\u0433\u0440\u0443, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043d\u0435\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c, \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u044d\u0442\u043e \u0432 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.util.positiveModulo(0, 0) -- \u041f\u0435\u0440\u0432\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c\n"})}),(0,r.jsx)(n.p,{children:"\u0418 \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0435\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435. Scrap Mechanic \u0432\u0437\u043e\u0440\u0432\u0435\u0442\u0441\u044f \u0441\u0430\u043c, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043e\u0448\u0438\u0431\u043a\u0443 \xab\u0414\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043d\u043e\u043b\u044c\xbb, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0435 \u0431\u044b\u043b\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u0430, \u0438 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435!"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0422\u0410\u041a \u0427\u0422\u041e \u041a \u0427\u0415\u0420\u0422\u0423 \u0412\u0410\u0421, \u0420\u0410\u0417\u0420\u0410\u0411\u041e\u0422\u0427\u0418\u041a\u041e\u0412 SCRAP MECHANIC, \u0417\u0410 \u0422\u041e, \u0427\u0422\u041e \u0412\u042b \u041d\u0415 \u0421\u041c\u041e\u0413\u041b\u0418 \u0412\u042b\u041f\u041e\u041b\u041d\u0418\u0422\u042c 1 \u041f\u0420\u041e\u0412\u0415\u0420\u041a\u0423 \u041e\u0411\u0420\u0410\u0411\u041e\u0422\u041a\u0418 \u041e\u0428\u0418\u0411\u041e\u041a, \u041a\u041e\u0422\u041e\u0420\u0410\u042f \u041c\u041e\u0413\u041b\u0410 \u0417\u0410\u041d\u042f\u0422\u042c \u0412\u0421\u0415\u0413\u041e \u041f\u0410\u0420\u0423 \u0421\u0415\u041a\u0423\u041d\u0414!"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["a [ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u0427\u0438\u0441\u043b\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043e\u043a"]}),"\n",(0,r.jsxs)(n.li,{children:["b [ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u0414\u0435\u043b\u0438\u0442\u0435\u043b\u044c"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043e\u0442 \u0434\u0435\u043b\u0435\u043d\u0438\u044f."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);