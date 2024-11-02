"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[9971],{2888:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var l=s(4848),r=s(8453);const t={title:"Table",description:"Table \u043c\u043e\u0434\u0443\u043b\u044c (Computer API)"},i=void 0,c={id:"Addon API/modules/table",title:"Table",description:"Table \u043c\u043e\u0434\u0443\u043b\u044c (Computer API)",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Addon API/modules/table.md",sourceDirName:"Addon API/modules",slug:"/Addon API/modules/table",permalink:"/SCDocs/ru/docs/Addon API/modules/table",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Table",description:"Table \u043c\u043e\u0434\u0443\u043b\u044c (Computer API)"},sidebar:"sidebar",previous:{title:"SHA256",permalink:"/SCDocs/ru/docs/Addon API/modules/sha256"},next:{title:"Util",permalink:"/SCDocs/ru/docs/Addon API/modules/util"}},d={},o=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"merge",id:"merge",level:3},{value:"clone",id:"clone",level:3},{value:"getItemAt",id:"getitemat",level:3},{value:"getTotalItems",id:"gettotalitems",level:3},{value:"getTotalItemsDict",id:"gettotalitemsdict",level:3},{value:"isDictonary",id:"isdictonary",level:3},{value:"itemExistsInList",id:"itemexistsinlist",level:3},{value:"numberlyOrderTable",id:"numberlyordertable",level:3},{value:"shiftTableIndexes",id:"shifttableindexes",level:3},{value:"toString",id:"tostring",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Table \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f API \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430!"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,l.jsx)(n.h3,{id:"merge",children:"merge"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.merge( tbl1, tbl2, fullOverwrite )\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0421\u043e\u0432\u043c\u0435\u0449\u0430\u0435\u0442 2 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 1."}),"\n",(0,l.jsx)(n.admonition,{title:"\u0412\u0430\u0436\u043d\u043e!",type:"warning",children:(0,l.jsxs)(n.p,{children:["\u041f\u043e\u0440\u044f\u0434\u043e\u043a, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u044b \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 sm.scrapcomputers.table.merge, \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435! ",(0,l.jsx)(n.code,{children:"tbl2"})," \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442/\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0448\u0435\u0442 \u0432\u0441\u0435, \u0447\u0442\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,l.jsx)(n.code,{children:"tbl1"}),"!"]})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl1 [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u041f\u0435\u0440\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n",(0,l.jsxs)(n.li,{children:["tbl2 [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0412\u0442\u043e\u0440\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n",(0,l.jsxs)(n.li,{children:["fullOverwrite [ ",(0,l.jsx)(n.strong,{children:"boolean?"})," ] \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b 2. \u041d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u044c\u0441\u044f \u043d\u0438 \u043e \u0447\u0435\u043c \u0434\u0440\u0443\u0433\u043e\u043c. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e ",(0,l.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0421\u043e\u0432\u043c\u0435\u0449\u0451\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"clone",children:"clone"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.clone( tbl )\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u041a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443."}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c"}),(0,l.jsx)(n.p,{children:"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u043d\u0435 \u043d\u0443\u0436\u043d\u0430, \u043d\u043e \u0432 \u041d\u0415\u041a\u041e\u0422\u041e\u0420\u042b\u0425 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f\u0445 \u043f\u043e\u043b\u0435\u0437\u043d\u0430. \u041e\u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u043d\u043e \u0435\u0451 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0435\u0433\u043a\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u044f \u043d\u0435 \u0434\u0443\u043c\u0430\u044e, \u0447\u0442\u043e \u043e\u043d\u0430 \u0437\u0430\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u043c\u0435\u0442\u044c \u0441\u0432\u043e\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e."}),(0,l.jsx)(n.p,{children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0431\u044b \u0438 \u043d\u0435\u0442"}),(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0440\u0430\u0441\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0438\u0439\u0441\u044f \u0441\u043f\u0438\u0441\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043d\u044f\u0442\u044c, \u043f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u043d\u0435\u0441\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u043e."}),(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u042d\u0442\u043e \u0432\u0435\u0441\u044c \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044f..."})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'---\u041a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443\r\n---@param tbl table \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043b\u044f \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f\r\n---@return table clonedTable \u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430\r\nsm.scrapcomputers.table.clone = function (tbl)\r\n\xa0 \xa0 assert(type(tbl) == "table", "Expected table, got "..type(tbl).." instead.") -- \u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438\r\n\r\n\xa0 \xa0 return unpack({tbl})\r\nend\n'})}),(0,l.jsx)(n.p,{children:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0430\u043b\u043e \u043a\u043e\u0434\u0430! \u042f \u043c\u043e\u0433 \u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043f\u043e-\u0434\u0440\u0443\u0433\u043e\u043c\u0443, \u043d\u043e \u0443 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438! \u0418\u0442\u0430\u043a, \u044d\u0442\u043e \u0441\u0430\u043c\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u043e\u0435, \u0447\u0442\u043e \u044f \u043c\u043e\u0433\u0443 \u0441\u0434\u0435\u043b\u0430\u0442\u044c."})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043b\u044f \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"getitemat",children:"getItemAt"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.getItemAt( tbl, index )\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0434\u0435\u043a\u0441. \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 ",(0,l.jsx)(n.code,{children:"tbl[index]"}),". \u042d\u0442\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u043d\u043e\u043c\u0435\u0440\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432 \u043d\u0435 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u042d\u0442\u043e \u043d\u0430\u0448\u0438 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438\r\nlocal todo = {\r\n [25] = "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u0441\u0442\u0435\u043a\u043b\u0430 \u0434\u043b\u044f \u043a\u0430\u043c\u0435\u0440\u044b"\r\n [69] = "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0434\u043b\u044f \u0434\u0438\u043d\u0430\u043c\u0438\u043a\u043e\u0432. \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \\"wind\\" \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043a \u0437\u0432\u0443\u043a\u0443"\r\n [4825] = "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0438\u0441\u043f\u043b\u0435\u0438 512x512 \u0438 1024x1024 \u0434\u043b\u044f 3x3, 2x2 \u0438 1x1 (\u044f \u0441\u043e\u0431\u0438\u0440\u0430\u044e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0438 \u043d\u0430 \u0447\u0442\u043e :) )"\r\n}\r\n\r\nlocal lastTodoGood = sm.scrapcomputers.table.getItemAt(todo, 3) -- \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442! \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c 4825. \u0422\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e \u0442\u0440\u0435\u0442\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\r\nlocal lastTodoBad = todo[3] \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0-- \u041d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442! \u041f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c 3, \u043d\u043e \u0435\u0433\u043e \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442! \u0442\u0430\u043a \u044d\u0442\u043e nil!\r\n\r\nprint("lastTodoGood: "..tostring(lastTodoGood))\r\nprint("lastTodoBad: " ..tostring(lastTodoBad ))\r\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u0412\u044b \u0432\u0438\u0434\u0438\u0442\u0435, \u0447\u0442\u043e tbl[index] \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443, \u043d\u043e \u043d\u0435 ",(0,l.jsx)(n.strong,{children:"sm.scrapcomputers.table.getItemAt"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n",(0,l.jsxs)(n.li,{children:["index [ ",(0,l.jsx)(n.strong,{children:"integer"})," ] \u0418\u043d\u0434\u0435\u043a\u0441 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"any"})," ] \u041b\u044e\u0431\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u0438\u043d\u0434\u0435\u043a\u0441\u0443 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"gettotalitems",children:"getTotalItems"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.getTotalItems( tbl )\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0447\u0435\u0440\u0435\u0437 \u0446\u0438\u043a\u043b ",(0,l.jsx)(n.strong,{children:"ipairs"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 #tbl, \u0435\u0441\u043b\u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439, #tbl \u0432\u0435\u0440\u043d\u0435\u0442 0. \u042d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043d\u0435 \u0432\u043e\u043b\u043d\u0443\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u0438 \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439. \u0414\u0430\u0441\u0442 \u0442\u043e\u0442 \u0436\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u0438 \u0431\u044b\u043b\u0430 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0439."}),"\n",(0,l.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,l.jsx)(n.a,{href:"#gettotalitemsdict",children:"sm.scrapcomputers.table.getTotalItemsDict"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"integer"})," ] \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"gettotalitemsdict",children:"getTotalItemsDict"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.getTotalItemsDict( tbl )\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0446\u0438\u043a\u043b\u0430 ",(0,l.jsx)(n.strong,{children:"pairs"}),". \u042d\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439. \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,l.jsx)(n.a,{href:"#gettotalitems",children:"sm.scrapcomputers.table.getTotalItems"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 #tbl, \u0435\u0441\u043b\u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439, #tbl \u0432\u0435\u0440\u043d\u0435\u0442 0. \u042d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043d\u0435 \u0432\u043e\u043b\u043d\u0443\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u0438 \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439. \u0414\u0430\u0441\u0442 \u0442\u043e\u0442 \u0436\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u0438 \u0431\u044b\u043b\u0430 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0439."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"integer"})," ] \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"isdictonary",children:"isDictonary"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.isDictonary( tbl )\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 true, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044c."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"boolean"})," ] true, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044c."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"itemexistsinlist",children:"itemExistsInList"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.itemExistsInList( tbl, item )\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 true, \u0435\u0441\u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0430\u0439\u0434\u0435\u043d \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438."]}),"\n",(0,l.jsxs)(n.li,{children:["item [ ",(0,l.jsx)(n.strong,{children:"any"})," ] \u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430. (\u041d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c nil!)."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"boolean"})," ] true, \u0435\u0441\u043b\u0438 \u043d\u0430\u0439\u0434\u0435\u043d, false, \u0435\u0441\u043b\u0438 \u043d\u0435\u0442."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"numberlyordertable",children:"numberlyOrderTable"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.numberlyOrderTable( tbl )\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043e\u0442 1 \u0434\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043b\u044f \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"shifttableindexes",children:"shiftTableIndexes"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.shiftTableIndexes( tbl, shiftAmount )\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0421\u043c\u0435\u0449\u0430\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0441\u043f\u0438\u0441\u043a\u0430."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n",(0,l.jsxs)(n.li,{children:["shiftAmount [ ",(0,l.jsx)(n.strong,{children:"integer"})," ] \u0421\u0443\u043c\u043c\u0430 \u0434\u043b\u044f \u0441\u0434\u0432\u0438\u0433\u0430."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0421\u0434\u0432\u0438\u043d\u0443\u0442\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"tostring",children:"toString"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.table.toString( tbl )\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0432 \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u043d\u043e \u0432 \u0441\u0442\u0440\u043e\u043a\u0443. \u0415\u0441\u043b\u0438 \u0431\u044b \u0432\u044b \u043f\u043e\u043f\u044b\u0442\u0430\u043b\u0438\u0441\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e tostring Lua, \u0442\u043e \u0432\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \xabtable: 00A59928\xbb. \u041d\u0435 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0441\u0430\u043c\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b!"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] \u0422\u0430\u0431\u043b\u0438\u0446\u0430."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"string"})," ] Lua \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var l=s(6540);const r={},t=l.createContext(r);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);