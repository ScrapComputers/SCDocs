"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[2384],{5029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(4848),r=n(8453);const s={title:"How to use our script template",description:"Learn how you can use our script template"},i=void 0,c={id:"guides/how_to_use_our_script_template",title:"How to use our script template",description:"Learn how you can use our script template",source:"@site/docs/guides/how_to_use_our_script_template.md",sourceDirName:"guides",slug:"/guides/how_to_use_our_script_template",permalink:"/docs/guides/how_to_use_our_script_template",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"How to use our script template",description:"Learn how you can use our script template"},sidebar:"sidebar",previous:{title:"How to create a language mod",permalink:"/docs/guides/how_to_create_a_language_mod"},next:{title:"Projects",permalink:"/docs/category/projects"}},l={},a=[{value:"What the functions do",id:"what-the-functions-do",level:2},{value:"Code outside the functions",id:"code-outside-the-functions",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This will provide you additional information of how you can use our Script Template."}),"\n",(0,o.jsxs)(t.p,{children:["When you load up our Script Template example or use the ",(0,o.jsx)(t.code,{children:"Main.lua.template"})," file of the Computer Template. You will see something like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:"-- Any variables outside the main functions are global! (As programmer perspective) The code only gets ran once!\r\n\r\n-- Gets called when the computer starts up\r\nfunction onLoad()\r\n\r\nend\r\n\r\n-- Gets called every tick\r\nfunction onUpdate()\r\n\r\nend\r\n\r\n-- Gets called when the computer error's out.\r\nfunction onError(err)\r\n\r\nend\r\n\r\n-- Gets called when the computer shuts down.\r\nfunction onDestroy()\r\n\r\nend\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"what-the-functions-do",children:"What the functions do"}),"\n",(0,o.jsx)(t.p,{children:"We will tell you what these functions do"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"onLoad()"})," This function gets called when the computer starts up"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"onUpdate( deltaTime )"})," This function gets called every tick when the computer is running. deltaTime is ofcourse, deltaTime!"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"onError( err )"})," This gets called when the computer error's. The ",(0,o.jsx)(t.code,{children:"err"})," parameter is the error message itself."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"onDestroy"})," Called when the computer turns off"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"code-outside-the-functions",children:"Code outside the functions"}),"\n",(0,o.jsx)(t.p,{children:"You might need global variables or functions. You can define them outside the functions."}),"\n",(0,o.jsx)(t.p,{children:"Let's say you want to access the display globaly. You can add this at the top of your code!"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:"local display = sc.getDisplays()[1]\n"})}),"\n",(0,o.jsx)(t.p,{children:"What about a function?"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'local function PrintHelloWorld()\r\n    print("Hello world!")\r\nend\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);