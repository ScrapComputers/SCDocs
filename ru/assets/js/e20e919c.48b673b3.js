"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[2121],{6846:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=s(4848),t=s(8453);const l={title:"Motor",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u043e\u0442\u043e\u0440\u0430"},o=void 0,i={id:"Lua API/components/motor",title:"Motor",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u043e\u0442\u043e\u0440\u0430",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Lua API/components/motor.md",sourceDirName:"Lua API/components",slug:"/Lua API/components/motor",permalink:"/ru/docs/Lua API/components/motor",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Motor",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u043e\u0442\u043e\u0440\u0430"},sidebar:"sidebar",previous:{title:"Laser",permalink:"/ru/docs/Lua API/components/laser"},next:{title:"Network Port",permalink:"/ru/docs/Lua API/components/networkport"}},c={},d=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"setBearingSpeed",id:"setbearingspeed",level:3},{value:"setBearingAngle",id:"setbearingangle",level:3},{value:"setPistonSpeed",id:"setpistonspeed",level:3},{value:"setTorque",id:"settorque",level:3},{value:"setLength",id:"setlength",level:3},{value:"setForce",id:"setforce",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u041c\u043e\u0442\u043e\u0440 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u043e\u0434\u0448\u0438\u043f\u043d\u0438\u043a\u0430\u043c\u0438 \u0438 \u043f\u043e\u0440\u0448\u043d\u044f\u043c\u0438."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,r.jsx)(n.h3,{id:"setbearingspeed",children:"setBearingSpeed"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setBearingSpeed( speed )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0448\u0438\u043f\u043d\u0438\u043a\u0430(\u043e\u0432)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["speed [ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u041d\u043e\u0432\u0430\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setbearingangle",children:"setBearingAngle"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setBearingAngle( angle )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0443\u0433\u043e\u043b \u043f\u043e\u0434\u0448\u0438\u043f\u043d\u0438\u043a\u0430. \u0422\u0430\u043a\u0436\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0440\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u043e\u0442\u043e\u0440\u0430, nil - \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0440\u0435\u0436\u0438\u043c \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044f, \u043b\u044e\u0431\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0442 0 \u0434\u043e 360 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0440\u0435\u0436\u0438\u043c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430 \u0438 \u043f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u0434\u0448\u0438\u043f\u043d\u0438\u043a \u043d\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u0443\u0433\u043e\u043b."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["angle [ ",(0,r.jsx)(n.strong,{children:"number?"})," ] \u0423\u0433\u043e\u043b \u043f\u043e\u0434\u0448\u0438\u043f\u043d\u0438\u043a\u0430."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setpistonspeed",children:"setPistonSpeed"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setPistonSpeed( speed )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043f\u043e\u0440\u0448\u043d\u044f(\u0435\u0439)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["speed [ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u041d\u043e\u0432\u0430\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"settorque",children:"setTorque"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setTorque( torque )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u0438\u043b\u0443 \u043a\u0440\u0443\u0442\u044f\u0449\u0435\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u0434\u0448\u0438\u043f\u043d\u0438\u043a\u0430(\u043e\u0432)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["torque [ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u041d\u043e\u0432\u0430\u044f \u0441\u0438\u043b\u0430 \u043a\u0440\u0443\u0442\u044f\u0449\u0435\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setlength",children:"setLength"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setLength( length )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0434\u043b\u0438\u043d\u0443 \u043f\u043e\u0440\u0448\u043d\u044f(\u0435\u0439)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["length [ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u041d\u043e\u0432\u0430\u044f \u0434\u043b\u0438\u043d\u0430."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setforce",children:"setForce"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setForce( force )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u0438\u043b\u0443 \u043f\u043e\u0440\u0448\u043d\u044f."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["force [ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u041d\u043e\u0432\u0430\u044f \u0441\u0438\u043b\u0430."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(6540);const t={},l=r.createContext(t);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);