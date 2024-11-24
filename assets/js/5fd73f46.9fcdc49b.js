"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[9408],{9329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"Lua API/static-functions-namespaces/sc_fontmanager","title":"sc.fontmanager","description":"The Font manager that allows you to access fonts.","source":"@site/docs/Lua API/static-functions-namespaces/sc_fontmanager.md","sourceDirName":"Lua API/static-functions-namespaces","slug":"/Lua API/static-functions-namespaces/sc_fontmanager","permalink":"/docs/Lua API/static-functions-namespaces/sc_fontmanager","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"sc.fontmanager","description":"The Font manager that allows you to access fonts."},"sidebar":"sidebar","previous":{"title":"sc.example","permalink":"/docs/Lua API/static-functions-namespaces/sc_example"},"next":{"title":"sc.json","permalink":"/docs/Lua API/static-functions-namespaces/sc_json"}}');var r=t(4848),a=t(8453);const o={title:"sc.fontmanager",description:"The Font manager that allows you to access fonts."},c=void 0,l={},i=[{value:"Structures",id:"structures",level:2},{value:"SCFont",id:"scfont",level:3},{value:"Functions",id:"functions",level:2},{value:"getFont",id:"getfont",level:3},{value:"getFontNames",id:"getfontnames",level:3},{value:"getDefaultFontName",id:"getdefaultfontname",level:3},{value:"getDefaultFont",id:"getdefaultfont",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The font manager lets youi manage fonts and get them."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"structures",children:"Structures"}),"\n",(0,r.jsx)(n.h3,{id:"scfont",children:"SCFont"}),"\n",(0,r.jsxs)(n.p,{children:["A SCFont (",(0,r.jsx)(n.code,{children:"SCF"})," in short, ",(0,r.jsx)(n.code,{children:"ScrapComputers Font"})," for full name) is a font that has a fixed with and height for EVERY singular character."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["fontWidth [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] The width of the font"]}),"\n",(0,r.jsxs)(n.li,{children:["fontHeight [ ",(0,r.jsx)(n.strong,{children:"integer"})," ] The height of the font"]}),"\n",(0,r.jsxs)(n.li,{children:["characters [ ",(0,r.jsx)(n.strong,{children:"string"})," ] All characters that are usable in the font"]}),"\n",(0,r.jsxs)(n.li,{children:["errorChar [ ",(0,r.jsx)(n.strong,{children:"string[]"})," ] The character used for a gylph that doesn't exist."]}),"\n",(0,r.jsxs)(n.li,{children:["charset [ ",(0,r.jsx)(n.strong,{children:"table<string, string[]>"})," ] Contains all gylph data for all characters."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"getfont",children:"getFont"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sc.fontmanager.getFont( fontName )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves a font by name."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["fontName [ ",(0,r.jsx)(n.strong,{children:"string"})," ] The name of the font to retrieve."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"#scfont",children:"SCFont"}),"?"]})," ] The requested font, or nil if not found."]}),"\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:"string?"})," ] The error message, or nil if the font was found successfully."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getfontnames",children:"getFontNames"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sc.fontmanager.getFontNames()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all font names currently loaded."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:"string[]"})," ] A list of all font names currently loaded."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getdefaultfontname",children:"getDefaultFontName"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sc.fontmanager.getDefaultFontName()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the name of the default font."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:"string"})," ] The name of the default font."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getdefaultfont",children:"getDefaultFont"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sc.fontmanager.getDefaultFont()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the default font used by ScrapComputers."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#scfont",children:"SCFont"})})," ] The default font."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);