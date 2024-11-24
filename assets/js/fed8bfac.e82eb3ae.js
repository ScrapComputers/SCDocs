"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[1192],{296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var i=n(3526),s=n(4848),a=n(8453);const o={slug:"qol-improvement-update",title:"Quality of Life Improvement Update",authors:["veradev"],tags:["updates","bugfix"]},r=void 0,d={authorsImageUrls:[void 0]},h=[{value:"General Optimizations",id:"general-optimizations",level:2},{value:"LuaVM Optimizations",id:"luavm-optimizations",level:2},{value:"Semi-Live Syntax Highlighting",id:"semi-live-syntax-highlighting",level:2},{value:"Translation Support",id:"translation-support",level:2},{value:"Addons Can Now Add Examples",id:"addons-can-now-add-examples",level:2},{value:"New Fonts",id:"new-fonts",level:2},{value:"Display Optimization",id:"display-optimization",level:2},{value:"Image Generator",id:"image-generator",level:2},{value:"Thats it!",id:"thats-it",level:2}];function l(e){const t={a:"a",br:"br",em:"em",h2:"h2",hr:"hr",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This update isn't huge, but it improves how you use the mod and fixes some bugs along the way. We\u2019ve also made several optimizations to make things run smoother."}),"\n",(0,s.jsx)(t.h2,{id:"general-optimizations",children:"General Optimizations"}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019ve worked on making the mod faster and more efficient. One big change is that we\u2019ve now optimized the ",(0,s.jsx)(t.strong,{children:"LuaVM"})," for the first time. These changes may not be obvious right away, but you should notice things running more smoothly, especially when doing more complex tasks."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"luavm-optimizations",children:"LuaVM Optimizations"}),"\n",(0,s.jsxs)(t.p,{children:["While adding image support, we were using ",(0,s.jsx)(t.strong,{children:"one long string"})," to handle image data. This caused a lot of slowdown, especially with larger images (like 256x256). The problem was with the LuaVM\u2019s interpreter, ",(0,s.jsx)(t.strong,{children:"Yueliang"}),", which wasn\u2019t good at handling long strings."]}),"\n",(0,s.jsx)(t.p,{children:"After VeraDev optimized it, the difference was huge. Check out the performance graph below:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"LuaX String Reading Optimization Graph",src:n(1145).A+"",title:"Graph of the LuaVM reading string&#39;s in performance.",width:"3531",height:"1482"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Each dot shows a test of reading a 100 KiB string."})]}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, this is a ",(0,s.jsx)(t.strong,{children:"massive improvement"}),". Now, large data can be stored and processed without slowing down the computer. (At least until Scrap Mechanic corrupts it!)"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"semi-live-syntax-highlighting",children:"Semi-Live Syntax Highlighting"}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019ve added ",(0,s.jsx)(t.strong,{children:"Semi-Live Syntax Highlighting"})," for the in-game computer. This makes your code much easier to read and understand."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Syntax Highlighting Image",src:n(8685).A+"",title:"Syntax Highlighting in action",width:"2343",height:"1269"})}),"\n",(0,s.jsx)(t.p,{children:"It automatically highlights code as you type, but due to game limitations, it only works when typing at the end of the entire code. You can press a button to manually refresh the highlighting when needed."}),"\n",(0,s.jsx)(t.p,{children:"Syntax highlighting also helps you find errors faster. Look at this example:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Syntax Highlighting Error Image",src:n(2896).A+"",title:"Error detection with syntax highlighting",width:"770",height:"621"})}),"\n",(0,s.jsxs)(t.p,{children:["The line with the error turns ",(0,s.jsx)(t.strong,{children:"red"}),", and related functions show up as ",(0,s.jsx)(t.strong,{children:"dark red"}),". This makes finding and fixing mistakes much easier!"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"translation-support",children:"Translation Support"}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019ve added a ",(0,s.jsx)(t.strong,{children:"LanguageManager"})," so you can now add translations to the mod. You can include any language, even those not supported by Scrap Mechanic. However, some fonts might not work if the game doesn\u2019t support them, especially for non-Latin languages."]}),"\n",(0,s.jsx)(t.p,{children:"Note: This doesn\u2019t work for inventory descriptions. because those are stored in json, where we cant modify them via Lua."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"addons-can-now-add-examples",children:"Addons Can Now Add Examples"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"(For addon developers)"})}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019ve added an ",(0,s.jsx)(t.strong,{children:"ExampleManager"}),", which allows addon developers to include code examples for the computer. This is a simple feature to make it easier for users to learn how to use your addons."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"new-fonts",children:"New Fonts"}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019ve added new fonts in this update. Although 4 old fonts were removed, we\u2019ve added 5 new ones. 4 of these come from ",(0,s.jsx)(t.em,{children:"Minecraft"}),", and the last one is a custom font created by ",(0,s.jsx)(t.strong,{children:"VeraDev"}),", designed for smaller screens."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"display-optimization",children:"Display Optimization"}),"\n",(0,s.jsx)(t.p,{children:"Ben Bingo has optimized the display even more. He\u2019s always looking for ways to make things faster, and VeraDev (the writer of this blog) is trying to tell him to stop optimizing as he is going too far."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"image-generator",children:"Image Generator"}),"\n",(0,s.jsxs)(t.p,{children:["You can now convert PNG images to a special format that works with our ",(0,s.jsx)(t.strong,{children:"Image Renderer Example"}),". Once converted, you can display these images directly on the computer screen, giving you new ways to add visuals in the game."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"thats-it",children:"Thats it!"}),"\n",(0,s.jsxs)(t.p,{children:["Thats the entire update, we will warn you tho, the next update will be a ",(0,s.jsx)(t.strong,{children:"majour"})," update so expect no updates for the following weeks! If you want to get teased on what the next update would contain, ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://discord.gg/6r46PkYr9s",children:"Check our discord!"})})," thats where you can get the latest teasers and talk to the team!"]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1145:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/luax-string-reading-optimization-graph-20d67cd73b1b83ff294ff00b758c6c28.png"},2896:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/syntax-highlighting-showcase-error-d248f887ba0762917913d6cac2215ded.png"},8685:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/syntax-highlighting-showcase-cdf0c1736b3c0f5b105eccd6f9fbcf39.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}},3526:e=>{e.exports=JSON.parse('{"permalink":"/blog/qol-improvement-update","source":"@site/blog/2024-10-02-quality-of-life-improvements.md","title":"Quality of Life Improvement Update","description":"This update isn\'t huge, but it improves how you use the mod and fixes some bugs along the way. We\u2019ve also made several optimizations to make things run smoother.","date":"2024-10-02T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"},{"inline":false,"label":"Bugfix/Hotfix","permalink":"/blog/tags/bugfix","description":"ScrapComputer fixes"}],"readingTime":2.98,"hasTruncateMarker":true,"authors":[{"name":"VeraDev","title":"ScrapComputers Owner","url":"https://github.com/VeraDev0","imageURL":"https://avatars.githubusercontent.com/u/159570832?v=4","key":"veradev","page":null}],"frontMatter":{"slug":"qol-improvement-update","title":"Quality of Life Improvement Update","authors":["veradev"],"tags":["updates","bugfix"]},"unlisted":false,"prevItem":{"title":"Better Images & Speaker Bugfix Update","permalink":"/blog/speaker-fix-and-images-added"},"nextItem":{"title":"The long awaited ScrapComputers V2.0 update","permalink":"/blog/ScrapComputers-2.0"}}')}}]);