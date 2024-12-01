"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[5993],{6429:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var t=o(2732),a=o(4848),s=o(8453);const i={slug:"mod-expansion-and-optimization",title:"Further Mod Expansion, Fixes and Optimization Update",authors:["benBingo"],tags:["updates","bugfix"]},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"The New Stuff:",id:"the-new-stuff",level:2},{value:"New font manager",id:"new-font-manager",level:3},{value:"New LED light component",id:"new-led-light-component",level:3},{value:"More Python Tools",id:"more-python-tools",level:3},{value:"The New Models",id:"the-new-models",level:3},{value:"Bigger Environment",id:"bigger-environment",level:3},{value:"New Examples",id:"new-examples",level:3},{value:"Fixes, Imporvements and Optimizations:",id:"fixes-imporvements-and-optimizations",level:2},{value:"Display",id:"display",level:3},{value:"GPS",id:"gps",level:3},{value:"Translation manager",id:"translation-manager",level:3},{value:"Syntax manager",id:"syntax-manager",level:3},{value:"LuaVM",id:"luavm",level:3},{value:"Component Ratings",id:"component-ratings",level:3},{value:"Error Messages",id:"error-messages",level:3},{value:"Mod GUI&#39;s",id:"mod-guis",level:3}];function h(e){const n={h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"A smaller precursor update to a larger once coming soon. We felt like these features would be too useful to keep out of the hands of our talanted community, for more information on new functions / renames, please see the code documentation, here is what has changed:"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"the-new-stuff",children:"The New Stuff:"}),"\n",(0,a.jsx)(n.h3,{id:"new-font-manager",children:"New font manager"}),"\n",(0,a.jsx)(n.p,{children:"The new font manager allows for a wide range of use cases including our new TTF font rendering system, this allows for any TTF font to be imported into ScrapComputers. The new font manager also hosts the ability to do live text scaling, rotation and coloring. Along side this we have a much larger lists of fonts to choose from!"}),"\n",(0,a.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"TTF Font Renderer",src:o(7494).A+"",title:"Custom TTF font with dynamic scale and rotation",width:"1427",height:"1001"})}),"\n",(0,a.jsx)(n.h3,{id:"new-led-light-component",children:"New LED light component"}),"\n",(0,a.jsx)(n.p,{children:"A simple component which allows you to control the color of a block sized LED light, useful for those moments where you need some sick computer controller mood lighting."}),"\n",(0,a.jsx)(n.h3,{id:"more-python-tools",children:"More Python Tools"}),"\n",(0,a.jsx)(n.p,{children:"More python tools, such as: TTF font conversion, an obj model converter and more!"}),"\n",(0,a.jsx)(n.h3,{id:"the-new-models",children:"The New Models"}),"\n",(0,a.jsx)(n.p,{children:"VeraDev has been slowly dying in blender once again, he has returned with a new GPS and Laser model, they look very nice!"}),"\n",(0,a.jsx)(n.p,{children:"Here they are"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"New GPS Model Image",src:o(9707).A+"",title:"New GPS model",width:"1428",height:"495"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"New Laser Model Image",src:o(838).A+"",title:"New laser model",width:"1005",height:"537"})}),"\n",(0,a.jsx)(n.h3,{id:"bigger-environment",children:"Bigger Environment"}),"\n",(0,a.jsx)(n.p,{children:"Because of these new modules added, we have made our environment a bit bigger to accomodate everything, we have also decided to unlock sm.json.open from the unsafe environment for more choices when it comes to relying on files stored in blueprints."}),"\n",(0,a.jsx)(n.h3,{id:"new-examples",children:"New Examples"}),"\n",(0,a.jsx)(n.p,{children:"The PONG! and the whiteboard example have been added so you can see how some of the new modules are implemented."}),"\n",(0,a.jsx)(n.p,{children:"Here is pong in action (with debug mode enabled):"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"PONG! Example Image",src:o(4483).A+"",title:"Pong doing some sick pong things",width:"2253",height:"1132"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"fixes-imporvements-and-optimizations",children:"Fixes, Imporvements and Optimizations:"}),"\n",(0,a.jsx)(n.h3,{id:"display",children:"Display"}),"\n",(0,a.jsx)(n.p,{children:"A lot more display optimization has taken place greatly improving the display over a lot more drawing scenarios especially large clear and redraw scenarios. There has also been some improvements to the touch screen system and culling system, find the new functions in the docs."}),"\n",(0,a.jsx)(n.h3,{id:"gps",children:"GPS"}),"\n",(0,a.jsx)(n.p,{children:"An extra point of data has been added to the GPS called degreeRotation which is a euler representation of the GPS's rotation."}),"\n",(0,a.jsx)(n.h3,{id:"translation-manager",children:"Translation manager"}),"\n",(0,a.jsx)(n.p,{children:"Missing and mispelled translations have been rectified, and improvements have been made to the Dutch translation."}),"\n",(0,a.jsx)(n.h3,{id:"syntax-manager",children:"Syntax manager"}),"\n",(0,a.jsx)(n.p,{children:"More optimisation and color correction has been done to the syntax manager, making the time it takes to format a lot of text very small while making it look as beautiful as VSCode!"}),"\n",(0,a.jsx)(n.h3,{id:"luavm",children:"LuaVM"}),"\n",(0,a.jsx)(n.p,{children:"More LuaVM optimisation has been done lowering the benchmark time scores by a few miliseconds."}),"\n",(0,a.jsx)(n.h3,{id:"component-ratings",children:"Component Ratings"}),"\n",(0,a.jsx)(n.p,{children:"Components now have the non default ratings for a bit of realism."}),"\n",(0,a.jsx)(n.h3,{id:"error-messages",children:"Error Messages"}),"\n",(0,a.jsx)(n.p,{children:"More error management has been added incase something goes wrong with our end, also better error formatting."}),"\n",(0,a.jsx)(n.h3,{id:"mod-guis",children:"Mod GUI's"}),"\n",(0,a.jsx)(n.p,{children:"Components with a GUI will now play audio when you open it."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"That's all for this update! We\u2019re always working on more behind-the-scenes improvements, so stay tuned for what's next!"})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9707:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/gps-model-example-28f004e626c0096499ee1caa3354e4e3.png"},838:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/laser-model-example-44e7fff73aa88260d277c7429153d09d.png"},4483:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/pong-example-42b343790d7133cc77d0104e31909af5.png"},7494:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/ttf-helloworld-example-553e0d7150ef7a6a151e820cf6777dc3.png"},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},2732:e=>{e.exports=JSON.parse('{"permalink":"/blog/mod-expansion-and-optimization","source":"@site/blog/2024-11-24-mod-expansion-and-optimization.md","title":"Further Mod Expansion, Fixes and Optimization Update","description":"A smaller precursor update to a larger once coming soon. We felt like these features would be too useful to keep out of the hands of our talanted community, for more information on new functions / renames, please see the code documentation, here is what has changed:","date":"2024-11-24T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"},{"inline":false,"label":"Bugfix/Hotfix","permalink":"/blog/tags/bugfix","description":"ScrapComputer fixes"}],"readingTime":2.66,"hasTruncateMarker":true,"authors":[{"name":"Ben Bingo","title":"ScrapComputers Developer","url":"https://github.com/Ben-Bingo","imageURL":"https://avatars.githubusercontent.com/u/99429191?v=4","key":"benBingo","page":null}],"frontMatter":{"slug":"mod-expansion-and-optimization","title":"Further Mod Expansion, Fixes and Optimization Update","authors":["benBingo"],"tags":["updates","bugfix"]},"unlisted":false,"nextItem":{"title":"Better Images & Speaker Bugfix Update","permalink":"/blog/speaker-fix-and-images-added"}}')}}]);