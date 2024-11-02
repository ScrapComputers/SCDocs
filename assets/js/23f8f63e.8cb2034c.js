"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[8980],{3314:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var r=s(4848),i=s(8453);const l={title:"Camera",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u0430\u043c\u0435\u0440\u044b"},d=void 0,t={id:"Lua API/components/camera",title:"Camera",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u0430\u043c\u0435\u0440\u044b",source:"@site/docs/Lua API/components/camera.md",sourceDirName:"Lua API/components",slug:"/Lua API/components/camera",permalink:"/docs/Lua API/components/camera",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Camera",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u0430\u043c\u0435\u0440\u044b"},sidebar:"sidebar",previous:{title:"Antenna",permalink:"/docs/Lua API/components/antenna"},next:{title:"Display",permalink:"/docs/Lua API/components/display"}},c={},h=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"getFrame",id:"getframe",level:3},{value:"getDepthFrame",id:"getdepthframe",level:3},{value:"getMaskedFrame",id:"getmaskedframe",level:3},{value:"getVideo",id:"getvideo",level:3},{value:"getAdvancedFrame",id:"getadvancedframe",level:3},{value:"getAdvancedVideo",id:"getadvancedvideo",level:3},{value:"toggleRandom",id:"togglerandom",level:3}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u041a\u0430\u043c\u0435\u0440\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043d\u0438\u043c\u043a\u0438 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0432\u0438\u0434\u0435\u043e \u0441 \u043c\u0438\u0440\u0430 \u043d\u0430 \u0434\u0438\u0441\u043f\u043b\u0435\u0435! \u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0441 \u043d\u0430\u0448\u0435\u0439 \u043a\u0430\u043c\u0435\u0440\u044b \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0432\u0435\u043b\u0438\u043a\u043e\u043b\u0435\u043f\u043d\u043e, \u0434\u0430\u0436\u0435 \u043d\u0435 \u043f\u0440\u0438\u0431\u0435\u0433\u0430\u044f \u043a ",(0,r.jsx)(n.strong,{children:"\u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0435 \u043b\u0443\u0447\u0435\u0439"}),". \u0422\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0438 \u043b\u0443\u0447\u0435\u0439 \u043d\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442! \u041f\u0440\u043e\u0441\u0442\u043e \u043b\u0443\u0447\u0438, \u0438\u0434\u0443\u0449\u0438\u0435 \u043f\u043e\u0432\u0441\u044e\u0434\u0443, \u043a\u0430\u043a ",(0,r.jsx)(n.strong,{children:"\u043c\u0443\u043b\u044c\u0442\u0438\u043a\u0430\u0441\u0442"}),"!"]}),"\n",(0,r.jsx)(n.p,{children:"\u042d\u0442\u043e \u0434\u0430\u0436\u0435 \u043d\u0435 \u0441\u043b\u043e\u0436\u043d\u0430\u044f \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430! \u041f\u0440\u043e\u0441\u0442\u043e \u0441\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0432\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435, \u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435."}),"\n",(0,r.jsxs)(n.admonition,{title:"\u041d\u0430 \u0437\u0430\u043c\u0435\u0442\u043e\u0447\u043a\u0443",type:"warning",children:[(0,r.jsx)(n.p,{children:"\u041a\u0430\u043c\u0435\u0440\u044b \u0432 ScrapComputers \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043c\u043d\u043e\u0433\u043e\u0430\u0434\u0440\u0435\u0441\u043d\u0443\u044e \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0430\u0434\u0440\u0430 \u0438\u043b\u0438 \u0432\u0438\u0434\u0435\u043e. \u041e\u0434\u043d\u0430\u043a\u043e raycast \u0432 Scrap Mechanic, \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0443 \u043d\u0430\u0441 (\u043c\u043e\u0434\u0434\u0435\u0440\u043e\u0432) \u0435\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f, \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e. \u042d\u0442\u043e \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e (\u0435\u0441\u043b\u0438 \u0432\u0435\u0440\u0438\u0442\u044c VeraDev) raycast \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u043e\u043c. \u0415\u0441\u043b\u0438 \u0431\u044b \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u043b\u0430 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430, \u044d\u0442\u043e \u043d\u0435 \u0437\u0430\u043d\u044f\u043b\u043e \u0431\u044b \u043c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438."}),(0,r.jsxs)(n.p,{children:["\u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435, \u0442\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043a\u0430\u0434\u0440. \u0422\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u044d\u0442\u0438 \u043b\u0443\u0447\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0443\u0447\u0435\u0439 \u0432\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f. \u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430: ",(0,r.jsx)(n.code,{children:"\u0448\u0438\u0440\u0438\u043d\u0430\u041a\u0430\u0434\u0440\u0430*\u0432\u044b\u0441\u043e\u0442\u0430\u041a\u0430\u0434\u0440\u0430"}),"."]}),(0,r.jsx)(n.p,{children:"\u041d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u0430\u0434\u0440\u0435\u0441\u043d\u0443\u044e \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043d\u0435\u0442. \u0418\u0442\u0430\u043a, \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u0443 \u0438 \u0432\u0430\u0448\u0430 \u0438\u0433\u0440\u0430 \u0437\u0430\u0432\u0438\u0441\u0430\u0435\u0442 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043a\u0430\u0434\u0440\u0430/\u0432\u0438\u0434\u0435\u043e, \u0437\u043d\u0430\u0447\u0438\u0442, \u0432\u0430\u0448 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440 \u0437\u0430\u043d\u044f\u0442 \u0440\u0430\u0441\u0447\u0451\u0442\u0430\u043c\u0438."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,r.jsx)(n.h3,{id:"getframe",children:"getFrame"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Camera.getFrame( width, height, fovX, fovY, xOffset, yOffset )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u0435\u043b\u0430\u0435\u0442 \u043a\u0430\u0434\u0440 (\u043a\u0430\u043a \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442)"}),"\n",(0,r.jsxs)(n.p,{children:["****\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:",(0,r.jsx)(n.strong,{children:":"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["width [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["height [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["fovX [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e x-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["fovY [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e y-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["xOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 X \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432\u0432\u0435\u0440\u0445\u0443"]}),"\n",(0,r.jsxs)(n.li,{children:["yOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 Y \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0432\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/Lua%20API/components/display#pixeltable",children:"DisplayPixelTable"})})," ] \u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u043a\u0430\u0434\u0440\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getdepthframe",children:"getDepthFrame"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Camera.getDepthFrame( width, height, fovX, fovY, focalLength, xOffset, yOffset )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u0435\u043b\u0430\u0435\u0442 \u043a\u0430\u0440\u0442\u0443 \u0433\u043b\u0443\u0431\u0438\u043d\u044b (\u043a\u0430\u043a \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442) \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0451"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["width [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["height [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["fovX [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e x-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["fovY [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e y-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["focalLength [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0424\u043e\u043a\u0443\u0441\u043d\u043e\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"]}),"\n",(0,r.jsxs)(n.li,{children:["xOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 X \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432\u0432\u0435\u0440\u0445\u0443"]}),"\n",(0,r.jsxs)(n.li,{children:["yOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 Y \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0432\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/Lua%20API/components/display#pixeltable",children:"DisplayPixelTable"})})," ] \u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u043a\u0430\u0434\u0440\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getmaskedframe",children:"getMaskedFrame"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Camera.getMaskedFrame( width, height, fovX, fovY, mask, xOffset, yOffset )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u0435\u043b\u0430\u0435\u0442 \u0441\u043d\u0438\u043c\u043e\u043a \u0441 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u043c \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u0442\u0438\u043f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 Raycast."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"mask"})," \u044d\u0442\u043e ",(0,r.jsx)(n.code,{children:"string[]"})]}),": \u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0442\u0438\u043f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 raycast. \u0415\u0441\u043b\u0438 \u0442\u0438\u043f raycasts \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0438\u043a\u0441\u0435\u043b\u044e, \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0431\u0435\u043b\u044b\u043c \u0438\u043b\u0438 \u0447\u0435\u0440\u043d\u044b\u043c.\r\n",(0,r.jsxs)(n.strong,{children:["\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"mask"})," \u044d\u0442\u043e ",(0,r.jsx)(n.code,{children:"string"})]}),": \u0415\u0441\u043b\u0438 \u0442\u0438\u043f raycasts \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043c\u0430\u0441\u043a\u043e\u0439, \u0446\u0432\u0435\u0442 \u043f\u0438\u043a\u0441\u0435\u043b\u044f \u0431\u0443\u0434\u0435\u0442 \u0431\u0435\u043b\u044b\u043c, \u0430 \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 - \u0447\u0435\u0440\u043d\u044b\u043c."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u043f\u0440\u043e\u0441\u0442\u043e ",(0,r.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Constants#smphysicstypes",children:"\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u044e\u0434\u0430"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["width [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["height [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["fovX [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e x-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["fovY [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e y-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["mask [ ",(0,r.jsx)(n.strong,{children:"string|string[]"})," ] \u0424\u0438\u043b\u044c\u0442\u0440 \u0434\u043b\u044f raycast."]}),"\n",(0,r.jsxs)(n.li,{children:["xOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 X \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432\u0432\u0435\u0440\u0445\u0443"]}),"\n",(0,r.jsxs)(n.li,{children:["yOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 Y \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0432\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/Lua%20API/components/display#pixeltable",children:"DisplayPixelTable"})})," ] \u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u043a\u0430\u0434\u0440\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getvideo",children:"getVideo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Camera.getVideo( width, height, fovX, fovY, sliceWidth, xOffset, yOffset )\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u043e\u0445\u043e\u0436\u0435 \u043d\u0430 ",(0,r.jsx)(n.code,{children:"getFrame"}),", \u043d\u043e \u0432 \u0432\u0438\u0434\u0435 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432, \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0432\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043b\u0430\u0433\u043e\u0432! \u041f\u0440\u043e\u0441\u0442\u043e \u0447\u0430\u0441\u0442\u043e\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u044b\u043b\u0430 \u0431\u044b \u043d\u0438\u0436\u0435."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["width [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["height [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["fovX [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e x-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["fovY [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e y-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["sliceWidth [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0440\u0435\u0437\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["xOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 X \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432\u0432\u0435\u0440\u0445\u0443"]}),"\n",(0,r.jsxs)(n.li,{children:["yOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 Y \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0432\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/Lua%20API/components/display#pixeltable",children:"DisplayPixelTable"})})," ] \u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u043a\u0430\u0434\u0440\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getadvancedframe",children:"getAdvancedFrame"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Camera.getAdvancedFrame( width, height, fovX, fovY, xOffset, yOffset )\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u041f\u043e \u043f\u043e\u0432\u043e\u0434\u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",type:"info",children:(0,r.jsxs)(n.p,{children:["\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 ",(0,r.jsx)(n.strong,{children:"\u0422\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u043d\u0430 CPU (\u0447\u0435\u0440\u0435\u0437 Raycasting)"}),", \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0448 \u043a\u0430\u0434\u0440(\u044b). \u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0432\u0430\u0448 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440!"]})}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u0435\u043b\u0430\u0435\u0442 \u043a\u0430\u0434\u0440 (\u043a\u0430\u043a \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["width [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["height [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["fovX [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e x-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["fovY [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e y-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["xOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 X \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432\u0432\u0435\u0440\u0445\u0443"]}),"\n",(0,r.jsxs)(n.li,{children:["yOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 Y \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0432\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/Lua%20API/components/display#pixeltable",children:"DisplayPixelTable"})})," ] \u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u043a\u0430\u0434\u0440\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getadvancedvideo",children:"getAdvancedVideo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Camera.getAdvancedVideo( width, height, fovX, fovY, sliceWidth, xOffset, yOffset )\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u041f\u043e \u043f\u043e\u0432\u043e\u0434\u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",type:"info",children:(0,r.jsxs)(n.p,{children:["\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 ",(0,r.jsx)(n.strong,{children:"\u0422\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u043d\u0430 CPU (\u0447\u0435\u0440\u0435\u0437 Raycasting)"}),", \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0448 \u043a\u0430\u0434\u0440(\u044b). \u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0432\u0430\u0448 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440!"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u043e\u0445\u043e\u0436\u0435 \u043d\u0430 ",(0,r.jsx)(n.code,{children:"getFrame"}),", \u043d\u043e \u0432 \u0432\u0438\u0434\u0435 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432, \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0432\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043b\u0430\u0433\u043e\u0432! \u041f\u0440\u043e\u0441\u0442\u043e \u0447\u0430\u0441\u0442\u043e\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u044b\u043b\u0430 \u0431\u044b \u043d\u0438\u0436\u0435."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["width [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["height [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0434\u0440\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["fovX [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e x-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["fovY [ ",(0,r.jsx)(n.strong,{children:"number"})," ] FOV \u043f\u043e y-\u043e\u0441\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["sliceWidth [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0440\u0435\u0437\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["xOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 X \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432\u0432\u0435\u0440\u0445\u0443"]}),"\n",(0,r.jsxs)(n.li,{children:["yOffset [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043e\u0441\u0438 Y \u0434\u043b\u044f \u043a\u0430\u0434\u0440\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0440\u0430\u0432\u0435\u043d 0, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0434\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0432\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/Lua%20API/components/display#pixeltable",children:"DisplayPixelTable"})})," ] \u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u043a\u0430\u0434\u0440\u0430"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"togglerandom",children:"toggleRandom"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Camera.toggleRandom( toggle )\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0448\u0435\u0439\u0434\u0435\u0440 \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u0438. \u042d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0442\u043e, \u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u043d\u043e\u0433\u043e \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043a \u043a\u0430\u0434\u0440\u0443, \u0441\u043d\u0438\u0436\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0432 \u0434\u0438\u0441\u043f\u043b\u0435\u044f\u0445, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u0431\u044b \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430."}),"\n",(0,r.jsx)(n.p,{children:"\u042d\u0442\u0430 \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0446\u0432\u0435\u0442\u043e\u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043a\u0430\u0434\u0440\u0430 \u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u0430."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["toggle [ ",(0,r.jsx)(n.strong,{children:"boolean"})," ] \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u043b\u0438 \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044e"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var r=s(6540);const i={},l=r.createContext(i);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);