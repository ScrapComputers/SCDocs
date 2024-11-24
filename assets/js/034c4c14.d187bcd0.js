"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[1003],{3217:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Addon API/managers/environment-manager","title":"EnvironmentManager","description":"Allows you to create AND modify environments!","source":"@site/docs/Addon API/managers/environment-manager.md","sourceDirName":"Addon API/managers","slug":"/Addon API/managers/environment-manager","permalink":"/docs/Addon API/managers/environment-manager","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EnvironmentManager","description":"Allows you to create AND modify environments!"},"sidebar":"sidebar","previous":{"title":"ComponentManager","permalink":"/docs/Addon API/managers/component-manager"},"next":{"title":"ExampleManager","permalink":"/docs/Addon API/managers/example-manager"}}');var t=r(4848),s=r(8453);const a={title:"EnvironmentManager",description:"Allows you to create AND modify environments!"},i=void 0,l={},c=[{value:"Fields",id:"fields",level:2},{value:"enviromentHooks",id:"enviromenthooks",level:3},{value:"Functions",id:"functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Manages the environment variables for the Computer! Also where you can hook the environment variables, so you can add your own functions to the addon api."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.h3,{id:"enviromenthooks",children:"enviromentHooks"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.enviromentManager.enviromentHooks = {}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Type: ",(0,t.jsx)(n.code,{children:"function[]"})]})}),"\n",(0,t.jsx)(n.p,{children:"This variable contains functions, where you can hook the Computer API and be able to add, remove or modify the functions in the Computer API."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",metastring:'title="Example Code" ',children:'-- A enviroment hook\r\n---@param self ShapeClass\r\nlocal function enviromentHook( self )\r\n    return {\r\n        -- Prints hello world\r\n        helloWorld = function()\r\n            print( "Hello World!" )\r\n        end,\r\n\r\n        -- This wont overwrite the sc table!\r\n        sc = {\r\n            -- Gets all of myComponent and returns it\r\n            getMyComponent = function ()\r\n                return sm.scrapcomputers.componentManager.getComponents( "SeatControllers", self.interactable, true )\r\n            end\r\n        }\r\n    }\r\nend\r\n\r\n-- Add the hook to the enviroment Hooks\r\n--highlight-next-line\r\ntable.insert( sm.scrapcomputers.enviromentManager.enviromentHooks, enviromentHook )\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"sm.scrapcomputers.enviromentManager.createEnv( self )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Creates a environment variables table and returns it."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["self [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Classes/ShapeClass",children:"ShapeClass"})})," ] This should be the ",(0,t.jsx)(n.code,{children:"self"})," keyword, aka your class."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs/category/lua-api",children:"ComputerAPI"})})," ] The created environment variables."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var o=r(6540);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);