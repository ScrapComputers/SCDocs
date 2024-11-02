"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[9355],{804:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=e(4848),r=e(8453);const i={title:"sc.vpbs",description:"The VPBS Module (Computer API)"},c=void 0,l={id:"Lua API/static-functions-namespaces/sc_vpbs",title:"sc.vpbs",description:"The VPBS Module (Computer API)",source:"@site/docs/Lua API/static-functions-namespaces/sc_vpbs.md",sourceDirName:"Lua API/static-functions-namespaces",slug:"/Lua API/static-functions-namespaces/sc_vpbs",permalink:"/docs/Lua API/static-functions-namespaces/sc_vpbs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"sc.vpbs",description:"The VPBS Module (Computer API)"},sidebar:"sidebar",previous:{title:"sc.vec3",permalink:"/docs/Lua API/static-functions-namespaces/sc_vec3"},next:{title:"Userdata",permalink:"/docs/category/userdata-1"}},a={},o=[{value:"Functions",id:"functions",level:2},{value:"tostring",id:"tostring",level:3},{value:"totable",id:"totable",level:3},{value:"isVPBSstring",id:"isvpbsstring",level:3}];function d(n){const s={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"VPBS allows you to convert a lua table to a packet buffer. Use this if you do NOT wanna deal with BitStreams and want to do every packet as a string."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"tostring",children:"tostring"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:"sc.vpbs.toString( data )\n"})}),"\n",(0,t.jsx)(s.p,{children:"Converts a table to a VPBS string."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["tbl [ ",(0,t.jsx)(s.strong,{children:"table"})," ] The table to convert."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["[ ",(0,t.jsx)(s.strong,{children:"string"})," ] vpbsStr The converted string."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"totable",children:"totable"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:"sc.vpbs.toTable( data )\n"})}),"\n",(0,t.jsx)(s.p,{children:"Converts a VPBS string to a table."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["data [ ",(0,t.jsx)(s.strong,{children:"string"})," ] The VPBS string."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["[ ",(0,t.jsx)(s.strong,{children:"table"})," ] The table from the string."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"isvpbsstring",children:"isVPBSstring"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:"sc.vpbs.isVPBSstring( data )\n"})}),"\n",(0,t.jsx)(s.p,{children:"Returns true if the string is a VPBS-formatted string."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["data [ ",(0,t.jsx)(s.strong,{children:"string"})," ] The data to check."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["[ ",(0,t.jsx)(s.strong,{children:"boolean"})," ] True if it's a VPBS string, else not."]}),"\n"]})]})}function u(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>l});var t=e(6540);const r={},i=t.createContext(r);function c(n){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:s},n.children)}}}]);