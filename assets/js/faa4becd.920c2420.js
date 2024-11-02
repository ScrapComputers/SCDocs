"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[8045],{5418:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var s=r(4848),o=r(8453);const c={title:"sc.color",description:"The Color Module (Computer API)"},t=void 0,l={id:"Lua API/static-functions-namespaces/sc_color",title:"sc.color",description:"The Color Module (Computer API)",source:"@site/docs/Lua API/static-functions-namespaces/sc_color.md",sourceDirName:"Lua API/static-functions-namespaces",slug:"/Lua API/static-functions-namespaces/sc_color",permalink:"/SCDocs/docs/Lua API/static-functions-namespaces/sc_color",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"sc.color",description:"The Color Module (Computer API)"},sidebar:"sidebar",previous:{title:"sc.bitstream",permalink:"/SCDocs/docs/Lua API/static-functions-namespaces/sc_bitstream"},next:{title:"sc.fontmanager",permalink:"/SCDocs/docs/Lua API/static-functions-namespaces/sc_fontmanager"}},a={},i=[{value:"Functions",id:"functions",level:2},{value:"newSingluar",id:"newsingluar",level:3},{value:"random",id:"random",level:3},{value:"random0to1",id:"random0to1",level:3},{value:"generateGradient",id:"generategradient",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Color Module for the computer API!"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.h3,{id:"newsingluar",children:"newSingluar"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"sc.color.newSingluar( rgbNum )\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a new color from 1 value. Whatever ",(0,s.jsx)(n.strong,{children:"rgbNum"}),"'s value has will be set on R, G, and B."]}),"\n",(0,s.jsx)(n.p,{children:"This means it's grayscale only!"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["rgbNum [ ",(0,s.jsx)(n.strong,{children:"number"})," ] The color value that will be set on R, G, and B."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color",children:"Color"})})," ] The generated color."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"random",children:"random"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"sc.color.random( from, to )\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generates a random color from whatever range you want."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["from [ ",(0,s.jsx)(n.strong,{children:"number"})," ] The starting range."]}),"\n",(0,s.jsxs)(n.li,{children:["to [ ",(0,s.jsx)(n.strong,{children:"number"})," ] The ending range."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color",children:"Color"})})," ] The generated color."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"random0to1",children:"random0to1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"sc.color.random0to1()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generates a random color from 0 to 1."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color",children:"Color"})})," ] The generated color."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"generategradient",children:"generateGradient"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"sc.color.generateGradient( colors, numColors )\n"})}),"\n",(0,s.jsx)(n.p,{children:"This generates an interpolated gradient between the colors provided and is dependent on the ammount of gradient specified."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["colors [ ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color",children:"Color"}),"[]"]})," ] The table of colors to generate the gradient from."]}),"\n",(0,s.jsxs)(n.li,{children:["numColors [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] The ammount of blending each color gets in the gradient table."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color",children:"Color"}),"[]"]})," ] The generated gradient table."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(6540);const o={},c=s.createContext(o);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);