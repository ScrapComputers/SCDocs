"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[6104],{5890:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(4848),t=s(8453);const i={title:"MD5",description:"The MD5 Module (Computer API)"},d=void 0,o={id:"Addon API/modules/md5",title:"MD5",description:"The MD5 Module (Computer API)",source:"@site/docs/Addon API/modules/md5.md",sourceDirName:"Addon API/modules",slug:"/Addon API/modules/md5",permalink:"/docs/Addon API/modules/md5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MD5",description:"The MD5 Module (Computer API)"},sidebar:"sidebar",previous:{title:"Json",permalink:"/docs/Addon API/modules/json"},next:{title:"SHA256",permalink:"/docs/Addon API/modules/sha256"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"new",id:"new",level:3},{value:"sum",id:"sum",level:3},{value:"sumhexa",id:"sumhexa",level:3},{value:"tohex",id:"tohex",level:3}];function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"An encryption module for MD5 only! (Even tho it's no longer recommended to use this for encryption!)."}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(e.h3,{id:"new",children:"new"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.md5.new()\n"})}),"\n",(0,r.jsx)(e.p,{children:"Creates a new MD5 Stream."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"/docs/Addon%20API/user-data/md5stream",children:"MD5Stream"})})," ] The new MD5 stream."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"sum",children:"sum"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.md5.sum( str )\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Converts a string to a MD5 string ",(0,r.jsx)(e.strong,{children:"(NOTE: Pure raw bytes!)"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["str [ ",(0,r.jsx)(e.strong,{children:"string"})," ] The string to convert."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsx)(e.strong,{children:"string"})," ] The string in a MD5 string in raw bytes format."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"sumhexa",children:"sumhexa"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.md5.sumhexa( str )\n"})}),"\n",(0,r.jsx)(e.p,{children:"Converts a string to an MD5-encrypted string."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["str [ ",(0,r.jsx)(e.strong,{children:"string"})," ] The string to convert."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsx)(e.strong,{children:"string"})," ] The MD5-Encrypted string."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"tohex",children:"tohex"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.md5.tohex( str )\n"})}),"\n",(0,r.jsx)(e.p,{children:"Converts an MD5 Raw bytes string to a Proper MD5 string that is readable."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["str [ ",(0,r.jsx)(e.strong,{children:"string"})," ] The string to convert."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[ ",(0,r.jsx)(e.strong,{children:"string"})," ] The MD5-Encrypted string."]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function d(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);