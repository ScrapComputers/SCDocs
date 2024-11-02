"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[9348],{1332:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(4848),t=a(8453);const r={title:"sm.scrapcomputers",description:'Functions and variables inside the "sm.scrapcomputers" namespace.',slug:"sm.scrapcomputers"},i=void 0,o={id:"Addon API/static-function-namespaces/main",title:"sm.scrapcomputers",description:'Functions and variables inside the "sm.scrapcomputers" namespace.',source:"@site/docs/Addon API/static-function-namespaces/main.md",sourceDirName:"Addon API/static-function-namespaces",slug:"/Addon API/static-function-namespaces/sm.scrapcomputers",permalink:"/SCDocs/docs/Addon API/static-function-namespaces/sm.scrapcomputers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"sm.scrapcomputers",description:'Functions and variables inside the "sm.scrapcomputers" namespace.',slug:"sm.scrapcomputers"},sidebar:"sidebar",previous:{title:"sm.interactable.connectionType",permalink:"/SCDocs/docs/Addon API/static-function-namespaces/connectionTypes"},next:{title:"Userdata",permalink:"/SCDocs/docs/category/userdata"}},c={},l=[{value:"Variables",id:"variables",level:2},{value:"sm.scrapcomputers.backend",id:"smscrapcomputersbackend",level:3},{value:"sm.scrapcomputers.dataList",id:"smscrapcomputersdatalist",level:3},{value:"sm.scrapcomputers.layoutFiles",id:"smscrapcomputerslayoutfiles",level:3},{value:"sm.scrapcomputers.jsonFiles",id:"smscrapcomputersjsonfiles",level:3},{value:"sm.scrapcomputers.privateDataPrefix",id:"smscrapcomputersprivatedataprefix",level:3},{value:"Functions",id:"functions",level:2},{value:"toString",id:"tostring",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["All data inside the ",(0,n.jsx)(s.code,{children:"sm.scrapcomputers"})," namespace!"]}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsxs)(s.p,{children:["You don't have to load this at all, The ",(0,n.jsx)(s.code,{children:"sm"})," table is globably shared across mods, this means once its loaded. you can access it in any mod, even if you didnt load it."]}),(0,n.jsxs)(s.p,{children:["It's suggested to still load the config file in the ",(0,n.jsx)(s.strong,{children:"AutoTool scripts"})," so it can load as soon as possible as Scrap Mechanic loads the mods from newest to oldest."]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"variables",children:"Variables"}),"\n",(0,n.jsx)(s.h3,{id:"smscrapcomputersbackend",children:"sm.scrapcomputers.backend"}),"\n",(0,n.jsx)(s.p,{children:"A table relating to special backend activities that need to happen between components"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:"sm.scrapcomputers.backend = {}\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"smscrapcomputersdatalist",children:"sm.scrapcomputers.dataList"}),"\n",(0,n.jsx)(s.p,{children:"Contains all functions, data (or whatever). Eg: Displays is a list of all displays in ScrapComputers."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'sm.scrapcomputers.dataList = {\r\n    ["Displays"] = {},\r\n    ["Harddrives"] = {},\r\n    ["Holograms"] = {},\r\n    ["Terminals"] = {},\r\n    ["Radars"] = {},\r\n    ["InputRegisters"] = {},\r\n    ["OutputRegisters"] = {},\r\n    ["NetworkPorts"] = {},\r\n    ["Antennas"] = {},\r\n    ["Cameras"] = {},\r\n    ["Speakers"] = {},\r\n    ["Keyboards"] = {},\r\n    ["Motors"] = {},\r\n    ["Lasers"] = {},\r\n    ["GPSs"] = {},\r\n    ["SeatControllers"] = {},\r\n    \r\n    ["NetworkInterfaces"] = {}\r\n}\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"smscrapcomputerslayoutfiles",children:"sm.scrapcomputers.layoutFiles"}),"\n",(0,n.jsx)(s.p,{children:"Paths to layout files"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'sm.scrapcomputers.layoutFiles = {\r\n    Computer = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Computer.layout",\r\n    Terminal = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Terminal.layout",\r\n    Register = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Register.layout",\r\n    Configurator = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Configurator.layout",\r\n    Harddrive = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Harddrive.layout",\r\n    Keyboard = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Keyboard.layout",\r\n    Banned = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Banned.layout",\r\n}\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"smscrapcomputersjsonfiles",children:"sm.scrapcomputers.jsonFiles"}),"\n",(0,n.jsx)(s.p,{children:"Paths to json files"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'sm.scrapcomputers.jsonFiles = {\r\n    ExamplesList = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/JSON/examples.json",\r\n    HarddriveExamples = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/JSON/hdd_examples.json",\r\n    AudioList = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/JSON/audio.json",\r\n    BuiltInFonts = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/JSON/fonts.json"\r\n}\n'})}),"\n",(0,n.jsx)(s.h3,{id:"smscrapcomputersprivatedataprefix",children:"sm.scrapcomputers.privateDataPrefix"}),"\n",(0,n.jsxs)(s.p,{children:["Prefix used to hide variables and tables inside component's computer api. If you put any variable or function in a compoonent that starts with this, ",(0,n.jsx)(s.strong,{children:"it will not show in the computer api"}),", BUT you can stil access it via ",(0,n.jsx)(s.a,{href:"../managers/component-manager#getcomponents",children:"getComponents"})," ",(0,n.jsx)(s.strong,{children:"ASLONG"})," if getPrivateData is ",(0,n.jsx)(s.code,{children:"true"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'sm.scrapcomputers.privateDataPrefix = "SC_PRIVATE_"\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(s.h3,{id:"tostring",children:"toString"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:"sm.scrapcomputers.toString(value)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Converts a value to a string, Better than lua's tostring"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["value [ ",(0,n.jsx)(s.strong,{children:"any"})," ] the value to convert"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["[ ",(0,n.jsx)(s.strong,{children:"string"})," ] The converted value as a string"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>o});var n=a(6540);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);