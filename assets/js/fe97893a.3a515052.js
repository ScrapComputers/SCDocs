"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[4025],{3990:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var r=s(4848),c=s(8453);const t={title:"Laser",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043b\u0430\u0437\u0435\u0440\u0430"},i=void 0,a={id:"Lua API/components/laser",title:"Laser",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043b\u0430\u0437\u0435\u0440\u0430",source:"@site/docs/Lua API/components/laser.md",sourceDirName:"Lua API/components",slug:"/Lua API/components/laser",permalink:"/docs/Lua API/components/laser",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Laser",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043b\u0430\u0437\u0435\u0440\u0430"},sidebar:"sidebar",previous:{title:"Keyboard",permalink:"/docs/Lua API/components/keyboard"},next:{title:"Motor",permalink:"/docs/Lua API/components/motor"}},d={},o=[{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",level:2},{value:"LaserData",id:"laserdata",level:3},{value:"\u041f\u043e\u043b\u044f",id:"\u043f\u043e\u043b\u044f",level:4},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"setDistance",id:"setdistance",level:3},{value:"getLaserData",id:"getlaserdata",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u041b\u0430\u0437\u0435\u0440 \u043f\u043e\u0445\u043e\u0436 \u043d\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0441\u0435\u043d\u0441\u043e\u0440 \u0438\u0437 Scrap Mechanic, \u043d\u043e \u0432\u043c\u0435\u0441\u0442\u043e \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u0438\u0433\u043d\u0430\u043b\u0430 \u043e\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u0430 \u0434\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u0432\u0435\u0449\u0435\u0439, \u043a\u0430\u043a [\u043a\u0438\u043d\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u0440\u043e\u0431\u043e\u0442\u0430] (",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Robot_kinematics",children:"https://en.wikipedia.org/wiki/Robot_kinematics"}),") (\u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u043e\u0445\u043e\u0436\u0435 \u043d\u0430 ",(0,r.jsx)(n.strong,{children:"\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u043d\u0441\u043e\u0440 \u043a\u0438\u043d\u0435\u043c\u0430\u0442\u0438\u043a\u0438"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u043b\u044f \u043e\u043f\u044b\u0442\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: \u0434\u043b\u044f \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434 raycast. \u041d\u043e \u044d\u0442\u043e \u0442\u0430\u043a\u0436\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u043e\u0439 raycast \u0438 \u0441\u0430\u043c\u0438\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c. \u043e\u043d \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439, \u043d\u043e \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u043e\u0439!"}),"\n",(0,r.jsx)(n.h2,{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"laserdata",children:"LaserData"}),"\n",(0,r.jsx)(n.p,{children:"\u042d\u0442\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u043c \u043e\u0442\u0432\u0435\u0442\u0435 \u043b\u0430\u0437\u0435\u0440\u0430"}),"\n",(0,r.jsx)(n.h4,{id:"\u043f\u043e\u043b\u044f",children:"\u041f\u043e\u043b\u044f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"directionWorld"})," [ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 raycast"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fraction"})," [ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u0414\u043e\u043b\u044f \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f (0-1), \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u0434\u043e \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u044f, \u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043d\u0430 \u0434\u043b\u0438\u043d\u0443 \u043b\u0443\u0447\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"normalLocal"})," [ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u0412\u0435\u043a\u0442\u043e\u0440 \u043d\u043e\u0440\u043c\u0430\u043b\u0438 \u043a \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u0430 \u0446\u0435\u043b\u0438."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"normalWorld"})," [ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u0412\u0435\u043a\u0442\u043e\u0440 \u043d\u043e\u0440\u043c\u0430\u043b\u0438 \u043a \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"originWorld"})," [ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u0422\u043e\u0447\u043a\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 raycast."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pointLocal"})," [ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u0422\u043e\u0447\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043b\u0430\u0437\u0435\u0440\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pointWorld"})," [ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3",children:"Vec3"})})," ] \u0422\u043e\u0447\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"})," [ ",(0,r.jsx)(n.strong,{children:"string"})," ] \u0422\u0438\u043f \u0446\u0435\u043b\u0438 (\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,r.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Constants#smphysicsfilter",children:"sm.physics.types"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"valid"})," [ ",(0,r.jsx)(n.strong,{children:"boolean"})," ] True, raycast \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u0435\u043d."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,r.jsx)(n.h3,{id:"setdistance",children:"setDistance"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Laser.setDistance( distance )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044e (\u0432 \u043c\u0435\u0442\u0440\u0430\u0445!)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["distance [ ",(0,r.jsx)(n.strong,{children:"number"})," ] \u041d\u043e\u0432\u0430\u044f \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getlaserdata",children:"getLaserData"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Laser.getLaserData()\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0441 \u043b\u0430\u0437\u0435\u0440\u0430 (\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 raycast!)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:"boolean"})," ] True, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e-\u0442\u043e \u043d\u0430\u0448\u0451\u043b."]}),"\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#laserdata",children:"LaserData"})})," ] \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441 \u043b\u0430\u0437\u0435\u0440\u0430"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(6540);const c={},t=r.createContext(c);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);