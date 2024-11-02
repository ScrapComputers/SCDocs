"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[3533],{6576:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var c=r(4848),s=r(8453);const o={title:"Hologram",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0433\u043e\u043b\u043e\u0433\u0440\u0430\u043c\u043c\u044b"},t=void 0,i={id:"Lua API/components/hologram",title:"Hologram",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0433\u043e\u043b\u043e\u0433\u0440\u0430\u043c\u043c\u044b",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Lua API/components/hologram.md",sourceDirName:"Lua API/components",slug:"/Lua API/components/hologram",permalink:"/SCDocs/ru/docs/Lua API/components/hologram",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Hologram",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0433\u043e\u043b\u043e\u0433\u0440\u0430\u043c\u043c\u044b"},sidebar:"sidebar",previous:{title:"GPS",permalink:"/SCDocs/ru/docs/Lua API/components/gps"},next:{title:"Keyboard",permalink:"/SCDocs/ru/docs/Lua API/components/keyboard"}},l={},d=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"createCube",id:"createcube",level:3},{value:"createSphere",id:"createsphere",level:3},{value:"createCustomObject",id:"createcustomobject",level:3},{value:"getObject",id:"getobject",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u0413\u043e\u043b\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043f\u043e\u0445\u043e\u0436\u0438 \u043d\u0430 ",(0,c.jsx)(n.a,{href:"./display/",children:"\u0414\u0438\u0441\u043f\u043b\u0435\u0438"}),", \u043d\u043e \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c 3D."]}),"\n",(0,c.jsx)(n.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"createcube",children:"createCube"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"Hologram.createCube( position, rotation, scale, color )\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u043a\u0443\u0431."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["position [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["rotation [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u041f\u043e\u0432\u043e\u0440\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["scale [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["color [ ",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] \u0426\u0432\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["[ ",(0,c.jsx)(n.strong,{children:"integer"})," ] Id \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"createsphere",children:"createSphere"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"Hologram.createSphere( position, rotation, scale, color )\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u0441\u0444\u0435\u0440\u0443."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["position [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["rotation [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u041f\u043e\u0432\u043e\u0440\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["scale [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["color [ ",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] \u0426\u0432\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["[ ",(0,c.jsx)(n.strong,{children:"integer"})," ] Id \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"createcustomobject",children:"createCustomObject"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"Hologram.createCustomObject( uuid, position, rotation, scale, color )\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u0427\u0442\u043e-\u0442\u043e \u0432\u0440\u043e\u0434\u0435 ",(0,c.jsx)(n.code,{children:"createCube"})," \u0438\u043b\u0438 ",(0,c.jsx)(n.code,{children:"createSphere"}),", \u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0438\u0437 \u043b\u044e\u0431\u043e\u0433\u043e \u043c\u043e\u0434\u0430! (\u043f\u043e UUID)."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["uuid [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Uuid",children:"Uuid"})})," ] UUID \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["position [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["rotation [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u041f\u043e\u0432\u043e\u0440\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["scale [ ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:["color [ ",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] \u0426\u0432\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["[ ",(0,c.jsx)(n.strong,{children:"integer"})," ] Id \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"getobject",children:"getObject"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"Hologram.getObject( index )\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043f\u043e \u0435\u0433\u043e Id, \u0432\u0435\u0440\u043d\u0451\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u0438\u043b\u0438 \u0436\u0435 nil, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043d\u0430\u0448\u0451\u043b \u043d\u0443\u0436\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["index [ ",(0,c.jsx)(n.strong,{children:"number"})," ] Id \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["[ ",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.a,{href:"/SCDocs/ru/docs/Lua%20API/user-data/hologram-object",children:"HologramObject"}),"?"]})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043e\u0431 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u0438\u043b\u0438 \u0436\u0435 nil, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043d\u0430\u0448\u0451\u043b \u043d\u0443\u0436\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var c=r(6540);const s={},o=c.createContext(s);function t(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);