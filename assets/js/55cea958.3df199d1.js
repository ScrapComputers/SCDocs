"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[1376],{8860:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"Lua API/global_variables","title":"Global Variables","description":"All functions/variables globally accessible in the computer!","source":"@site/docs/Lua API/global_variables.md","sourceDirName":"Lua API","slug":"/Lua API/global_variables","permalink":"/docs/Lua API/global_variables","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Global Variables","description":"All functions/variables globally accessible in the computer!"},"sidebar":"sidebar","previous":{"title":"MD5Stream","permalink":"/docs/Lua API/user-data/md5stream"},"next":{"title":"Guides","permalink":"/docs/category/guides"}}');var i=s(4848),l=s(8453);const r={title:"Global Variables",description:"All functions/variables globally accessible in the computer!"},a=void 0,c={},o=[{value:"Functions",id:"functions",level:2},{value:"print",id:"print",level:3},{value:"alert",id:"alert",level:3},{value:"loadstring",id:"loadstring",level:3},{value:"tostring",id:"tostring",level:3},{value:"debug",id:"debug",level:3},{value:"sleep",id:"sleep",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Generally contains functions that were modified to do something different."}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"print",children:"print"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"print( ... )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Prints text to the chat. Will be always converted to a string so you can pass in anything."}),"\n",(0,i.jsx)(n.p,{children:"If it is a table. It will convert to be printable and you can see the contents inside."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["... [ ",(0,i.jsx)(n.strong,{children:"any[]"})," ] All arguments to send to the chat."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"alert",children:"alert"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"alert( message, duration, player )\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Same as the ",(0,i.jsx)(n.a,{href:"#print",children:"print"})," function but sends it as a alert message."]}),"\n",(0,i.jsx)(n.admonition,{title:"Note:",type:"info",children:(0,i.jsx)(n.p,{children:"Sending alert messages to a specific player requires unsafe-env!"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["message [ ",(0,i.jsx)(n.strong,{children:"any[]"})," ] The message to send"]}),"\n",(0,i.jsxs)(n.li,{children:["duration [ ",(0,i.jsx)(n.strong,{children:"any[]"})," ] The duration before the alert message fades-out"]}),"\n",(0,i.jsxs)(n.li,{children:["player [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Player/",children:"Player"}),"?"]})," ] The player to send to."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"loadstring",children:"loadstring"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"loadstring( code, env, bytecodeMode )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Excecutes code from a string, it can also load bytecode!"}),"\n",(0,i.jsx)(n.admonition,{title:"Note:",type:"info",children:(0,i.jsx)(n.p,{children:"Loading bytecode only works in the unsafe env!"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["code [ ",(0,i.jsx)(n.strong,{children:"string"})," ] The code to excecute."]}),"\n",(0,i.jsxs)(n.li,{children:["env [ ",(0,i.jsx)(n.strong,{children:"table"})," ] The code environment."]}),"\n",(0,i.jsxs)(n.li,{children:["bytecodeMode [ ",(0,i.jsx)(n.strong,{children:"boolean"})," ] Whether you are trying to excecute bytecode or not."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"tostring",children:"tostring"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"tostring( data )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Like the normal but modified to have additional features like printing lua tables!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["data [ ",(0,i.jsx)(n.strong,{children:"any"})," ] The variable to convert to be a string."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"debug",children:"debug"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"debug( ... )\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The debug function is basically Lua's implementation of the ",(0,i.jsx)(n.code,{children:"print"})," function in Scrap Mechanic."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["... [ ",(0,i.jsx)(n.strong,{children:"any[]"})," ] All arguments to send to the console."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"sleep",children:"sleep"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"sleep( time )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Makes the code pause for the specified time at that particular place, maximum wait is 5 seconds."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["time [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The time to sleep in seconds."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);