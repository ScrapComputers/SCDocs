"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[962],{9176:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=r(4848),t=r(8453);const o={title:"EnvironmentManager",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0418 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0440\u0435\u0434\u0443!"},a=void 0,c={id:"Addon API/managers/environment-manager",title:"EnvironmentManager",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0418 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0440\u0435\u0434\u0443!",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Addon API/managers/environment-manager.md",sourceDirName:"Addon API/managers",slug:"/Addon API/managers/environment-manager",permalink:"/SCDocs/ru/docs/Addon API/managers/environment-manager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"EnvironmentManager",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0418 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0440\u0435\u0434\u0443!"},sidebar:"sidebar",previous:{title:"ComponentManager",permalink:"/SCDocs/ru/docs/Addon API/managers/component-manager"},next:{title:"FontManager",permalink:"/SCDocs/ru/docs/Addon API/managers/font-manager"}},i={},l=[{value:"\u041f\u043e\u043b\u044f",id:"\u043f\u043e\u043b\u044f",level:2},{value:"enviromentHooks",id:"enviromenthooks",level:3},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"createEnv",id:"createenv",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c env API \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0435\u0433\u043e!"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u043f\u043e\u043b\u044f",children:"\u041f\u043e\u043b\u044f"}),"\n",(0,s.jsx)(e.h3,{id:"enviromenthooks",children:"enviromentHooks"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.enviromentManager.enviromentHooks = {}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["\u0422\u0438\u043f: ",(0,s.jsx)(e.code,{children:"function[]"})]})}),"\n",(0,s.jsx)(e.p,{children:"\u042d\u0442\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0447\u0442\u043e-\u043b\u0438\u0431\u043e \u043a \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u043e\u043c\u0443 API \u0438 \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c, \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u043d\u0451\u043c."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",metastring:'title="\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430" ',children:'-- \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0434\u043b\u044f \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f\r\n---@param self ShapeClass\r\nlocal function enviromentHook(self)\r\n    return {\r\n        -- \u0412\u044b\u0432\u043e\u0434 hello world\r\n        helloWorld = function()\r\n            print("Hello World!")\r\n        end,\r\n\r\n        -- \u042d\u0442\u043e \u043d\u0435 \u043f\u0435\u0440\u0435\u043f\u0438\u0448\u0435\u0442 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 sc!\r\n        sc = {\r\n            -- \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 myComponent \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0445\r\n            getMyComponent = function ()\r\n                return sm.scrapcomputers.componentManager.getComponents("SeatControllers", self.interactable, true)\r\n            end\r\n        }\r\n    }\r\nend\r\n\r\n-- \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0432 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435\r\n--highlight-next-line\r\ntable.insert(sm.scrapcomputers.enviromentManager.enviromentHooks, enviromentHook)\n'})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,s.jsx)(e.h3,{id:"createenv",children:"createEnv"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.enviromentManager.createEnv( self )\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0451."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["self [ ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Classes/ShapeClass",children:"ShapeClass"})})," ] \u042d\u0442\u043e \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u0430\u0448 \u043a\u043b\u0430\u0441\u0441."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["[ ",(0,s.jsx)(e.strong,{children:"[ComputerAPI](../../Lua API)"})," ] \u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u044b!"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>c});var s=r(6540);const t={},o=s.createContext(t);function a(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);