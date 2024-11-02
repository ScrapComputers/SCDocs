"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[220],{7338:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=s(4848),t=s(8453);const o={title:"ComponentManager",description:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438!"},c=void 0,a={id:"Addon API/managers/component-manager",title:"ComponentManager",description:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438!",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Addon API/managers/component-manager.md",sourceDirName:"Addon API/managers",slug:"/Addon API/managers/component-manager",permalink:"/ru/docs/Addon API/managers/component-manager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ComponentManager",description:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438!"},sidebar:"sidebar",previous:{title:"Managers",permalink:"/ru/docs/category/managers"},next:{title:"EnvironmentManager",permalink:"/ru/docs/Addon API/managers/environment-manager"}},i={},l=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"toComponent",id:"tocomponent",level:3},{value:"getComponents",id:"getcomponents",level:3}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b."}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u041f\u0420\u0418\u041c\u0415\u0427\u0410\u041d\u0418\u0415:"})," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043e\u043c, \u0430 interactable \u2014 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u043c \u0432 \u0432\u0430\u0448\u0435\u043c \u0430\u0434\u0434\u043e\u043d\u0435."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,r.jsx)(e.h3,{id:"tocomponent",children:"toComponent"}),"\n",(0,r.jsx)(e.p,{children:":::danger[\u042d\u0442\u043e \u0432\u0430\u0436\u043d\u043e!] \u0423 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0431\u0430\u043d\u043e\u0432 \u0432 \u043d\u0430\u0448\u0435\u043c \u043c\u043e\u0434\u0435. \u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0430\u0434\u0434\u043e\u043d\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438 \u0441 \u043d\u0435\u0439, \u0432\u0441\u0435 interactables \u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0414\u041e\u041b\u0416\u041d\u042b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e."}),"\n",(0,r.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u044b \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u0441\u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u0438 \u043c\u044b \u044d\u0442\u043e \u0437\u0430\u043c\u0435\u0442\u0438\u043c, \u043c\u044b \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u043c \u0432\u0430\u0441 \u043e\u0431 \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435. \u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u0411\u0410\u041d\u0423 \u0430\u0434\u0434\u043e\u043d\u0430. :::"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.componentManager.toComponent( classData, componentType, isAComponent, automaticRefreshGen )\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432\u0430\u0448 \u043a\u043b\u0430\u0441\u0441, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u043c\u043e\u0433\u043b\u0438 \u043b\u0435\u0433\u043a\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b. \u0414\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0430\u0434\u0434\u043e\u043d\u043e\u0432 \u044d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u0414\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),": \u0412\u0441\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f, \u0430 ",(0,r.jsx)(e.code,{children:"isAComponent"})," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c true."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u0414\u043b\u044f interactables"}),": \u0422\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u0447\u0442\u043e \u0438 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u043e ",(0,r.jsx)(e.code,{children:"componentType"})," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c nil, \u0430 ",(0,r.jsx)(e.code,{children:"isAComponent"})," \u2014 false."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["classData [ ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Classes/ShapeClass",children:"ShapeClass"})})," ] \u041a\u043b\u0430\u0441\u0441 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0438\u043b\u0438 interactable."]}),"\n",(0,r.jsxs)(e.li,{children:["componentType [ ",(0,r.jsx)(e.strong,{children:"string"})," ] \u0422\u0438\u043f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043e\u043d \u043d\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u0443\u0435\u0442 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0430\u0434\u0434\u043e\u043d\u0430\u043c\u0438 \u0438\u043b\u0438 \u0441\u0430\u043c\u0438\u043c \u043c\u043e\u0434\u043e\u043c."]}),"\n",(0,r.jsxs)(e.li,{children:["isAComponent [ ",(0,r.jsx)(e.strong,{children:"boolean"})," ] \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 true, \u0435\u0441\u043b\u0438 \u0432\u0430\u0448 interactable \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c!"]}),"\n",(0,r.jsxs)(e.li,{children:["automaticRefreshGen [ ",(0,r.jsx)(e.strong,{children:"boolean?"})," ] \u0415\u0441\u043b\u0438 true \u0438\u043b\u0438 nil, \u0442\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Classes/CommonCallbacks#onrefresh",children:"\u0444\u0443\u043d\u043a\u0446\u0438\u044f onRefresh"})})," (\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e true)."]}),"\n"]}),"\n",(0,r.jsxs)(e.admonition,{title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:",type:"info",children:[(0,r.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439, \u0442\u043e \u044d\u0442\u043e \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c."}),(0,r.jsx)(e.p,{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u044d\u0442\u0438 \u0441\u0442\u0440\u043e\u0447\u043a\u0438:"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:'-- \u0414\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432\r\nsm.scrapcomputers.componentManager.toComponent( yourClass, "YourComponentType", true )\r\n\r\n-- \u0414\u043b\u044f interactables\r\nsm.scrapcomputers.componentManager.toComponent( yourClass, "YourComponentType", false )\r\n\r\n-- \u041d\u0415 \u041f\u0418\u0428\u0418\u0422\u0415 \u041d\u0418\u041a\u0410\u041a\u041e\u0419 \u041a\u041e\u0414 \u041d\u0418\u0416\u0415!!!\n'})})]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getcomponents",children:"getComponents"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.componentManager.getComponents( componentType, interactable, viaChildren, flags, getPrivateData )\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["componentType [ ",(0,r.jsx)(e.strong,{children:"string"})," ] \u0422\u0438\u043f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."]}),"\n",(0,r.jsxs)(e.li,{children:["interactable [ ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/interactable",children:"interactable"})})," ] Interactable ??."]}),"\n",(0,r.jsxs)(e.li,{children:["viaChildren [ ",(0,r.jsx)(e.strong,{children:"boolean"})," ] \u041d\u0443\u0436\u043d\u043e \u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0447\u0435\u0440\u0435\u0437 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u0438\u043b\u0438 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b."]}),"\n",(0,r.jsxs)(e.li,{children:["flags [ ",(0,r.jsx)(e.strong,{children:"integer?"})," ] \u0424\u043b\u0430\u0433\u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432."]}),"\n",(0,r.jsxs)(e.li,{children:["getPrivateData [ ",(0,r.jsx)(e.strong,{children:"boolean?"})," ] \u0415\u0441\u043b\u0438 \u0432\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 true, \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u044b\u0447\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 API \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsx)(e.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432\u0441\u0435\u0445 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432."]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>a});var r=s(6540);const t={},o=r.createContext(t);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);