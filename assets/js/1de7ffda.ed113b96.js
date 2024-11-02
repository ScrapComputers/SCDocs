"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[4545],{7911:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(4848),r=i(8453);const t={title:"sm.scrapcomputers.config",description:"The configurator manager itself!"},c=void 0,o={id:"Addon API/static-function-namespaces/config",title:"sm.scrapcomputers.config",description:"The configurator manager itself!",source:"@site/docs/Addon API/static-function-namespaces/config.md",sourceDirName:"Addon API/static-function-namespaces",slug:"/Addon API/static-function-namespaces/config",permalink:"/docs/Addon API/static-function-namespaces/config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"sm.scrapcomputers.config",description:"The configurator manager itself!"},sidebar:"sidebar",previous:{title:"Static Function Namespace",permalink:"/docs/static-functions-namespaces"},next:{title:"sm.interactable.connectionType",permalink:"/docs/Addon API/static-function-namespaces/connectionTypes"}},l={},d=[{value:"Structures",id:"structures",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Fields:",id:"fields",level:4},{value:"Functions",id:"functions",level:2},{value:"createDefaultConfigs",id:"createdefaultconfigs",level:3},{value:"initConfig",id:"initconfig",level:3},{value:"nameToId",id:"nametoid",level:3},{value:"getConfigByIndex",id:"getconfigbyindex",level:3},{value:"getTotalConfigurations",id:"gettotalconfigurations",level:3},{value:"setConfig",id:"setconfig",level:3},{value:"resetConfiguration",id:"resetconfiguration",level:3},{value:"saveConfig",id:"saveconfig",level:3},{value:"createConfig",id:"createconfig",level:3},{value:"getConfig",id:"getconfig",level:3},{value:"configExists",id:"configexists",level:3}];function a(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"sm.scrapcomputers.config"})," Lets you configure the mod's world settings. Like setting config values or creating new configurations."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Fields"})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"string"}),(0,s.jsx)(e.td,{children:"key"}),(0,s.jsxs)(e.td,{children:["The key used in ",(0,s.jsx)(e.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Static-Functions/sm.storage#smstorage",children:"sm.storage"}),". Use this if you want to access ",(0,s.jsx)(e.strong,{children:"ScrapComputer's Configuration Data"})," directly."]})]})})]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"structures",children:"Structures"}),"\n",(0,s.jsx)(e.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(e.p,{children:"A configuration for ScrapComputers."}),"\n",(0,s.jsx)(e.h4,{id:"fields",children:"Fields:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["id [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The id of the config. Reccommended to be in this format to not cause any conflicts: ",(0,s.jsx)(e.code,{children:"[MOD_NAME].[COMPONENT_NAME].[CONFIG_NAME]"})]}),"\n",(0,s.jsxs)(e.li,{children:["name [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The name of the config"]}),"\n",(0,s.jsxs)(e.li,{children:["description [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The description of the config"]}),"\n",(0,s.jsxs)(e.li,{children:["selectedOption [ ",(0,s.jsx)(e.strong,{children:"integer"})," ] The current config's selected option"]}),"\n",(0,s.jsxs)(e.li,{children:["hostOnly [ ",(0,s.jsx)(e.strong,{children:"boolean"})," ] If the configuration is host only accessable"]}),"\n",(0,s.jsxs)(e.li,{children:["options [ ",(0,s.jsx)(e.strong,{children:"string[]"})," ] List of usable options for the config."]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(e.h3,{id:"createdefaultconfigs",children:"createDefaultConfigs"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.createDefaultConfigs( onlyDefaultConfigs )\n"})}),"\n",(0,s.jsx)(e.p,{children:"Creates default configurations and returns it"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["onlyDefaultConfigs [ ",(0,s.jsx)(e.strong,{children:"boolean?"})," ] If true, it will only return default configs without the addon parts. Default is false"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["[ ",(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(e.a,{href:"#configuration",children:"Configuration"}),"[]"]})," ] The generated configurations"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"initconfig",children:"initConfig"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.initConfig()\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"Server-Only"})}),"\n",(0,s.jsxs)(e.p,{children:["Initalizes the Config system. ",(0,s.jsx)(e.strong,{children:"You generally don't have to call this as it gets called when ScrapComputers loads"})]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"nametoid",children:"nameToId"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.nameToId( name )\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Server-Only"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(e.code,{children:"Configuration Initalization Required"})]}),"\n",(0,s.jsx)(e.p,{children:"Converts a name to a id"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["name [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The name of the config"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["[ ",(0,s.jsx)(e.strong,{children:"string?"})," ] The id of the config"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"getconfigbyindex",children:"getConfigByIndex"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.getConfigByIndex( index )\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Server-Only"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(e.code,{children:"Configuration Initalization Required"})]}),"\n",(0,s.jsx)(e.p,{children:"Gets a configuration by index (not id!)\r\nWill error if not found."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["index [ ",(0,s.jsx)(e.strong,{children:"integer"})," ] The index to search"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["[ ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"#configuration",children:"Configuration"})})," ] The configuration it has found."]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"gettotalconfigurations",children:"getTotalConfigurations"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.getTotalConfigurations()\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Server-Only"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(e.code,{children:"Configuration Initalization Required"})]}),"\n",(0,s.jsx)(e.p,{children:"Gets the total configurations and returns it"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["[ ",(0,s.jsx)(e.strong,{children:"integer"})," ] The amount of configurations"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"setconfig",children:"setConfig"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.setConfig( id, selectedOption )\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Server-Only"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(e.code,{children:"Configuration Initalization Required"})]}),"\n",(0,s.jsx)(e.p,{children:"Sets a config's current selected option"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["id [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The id of the config"]}),"\n",(0,s.jsxs)(e.li,{children:["selectedOption [ ",(0,s.jsx)(e.strong,{children:"integer"})," ] The new selected option"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"resetconfiguration",children:"resetConfiguration"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.resetConfiguration()\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Server-Only"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(e.code,{children:"Configuration Initalization Required"})]}),"\n",(0,s.jsx)(e.p,{children:"Resets the configurations to its defaults"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"saveconfig",children:"saveConfig"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.saveConfig()\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Server-Only"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(e.code,{children:"Configuration Initalization Required"})]}),"\n",(0,s.jsx)(e.p,{children:"Saves the current configurations to the world"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"createconfig",children:"createConfig"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.createConfig( id, name, description, hostOnly, options )\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Server-Only"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(e.code,{children:"Configuration Initalization Required"})]}),"\n",(0,s.jsx)(e.p,{children:"Creates a new config."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["id [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The id of the config. Reccommended to be in this format to not cause any conflicts: ",(0,s.jsx)(e.code,{children:"[MOD_NAME].[COMPONENT_NAME].[CONFIG_NAME]"})]}),"\n",(0,s.jsxs)(e.li,{children:["name [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The name of the configuration"]}),"\n",(0,s.jsxs)(e.li,{children:["description [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The description of the config"]}),"\n",(0,s.jsxs)(e.li,{children:["hostOnly [ ",(0,s.jsx)(e.strong,{children:"boolean"})," ] If it is only acceessable by the host or not"]}),"\n",(0,s.jsxs)(e.li,{children:["options [ ",(0,s.jsx)(e.strong,{children:"string[]"})," ] The options the configuration has"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"getconfig",children:"getConfig"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.getConfig( id )\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Server-Only"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(e.code,{children:"Configuration Initalization Required"})]}),"\n",(0,s.jsx)(e.p,{children:"Gets a configuration by id\r\nWill error if not found."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["id [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The ID of the config"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["[ ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"#configuration",children:"Configuration"})})," ] The configuration it has found."]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"configexists",children:"configExists"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"sm.scrapcomputers.config.configExists( id )\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Server-Only"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(e.code,{children:"Configuration Initalization Required"})]}),"\n",(0,s.jsx)(e.p,{children:"Returns true if a configuration existed via ID"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["id [ ",(0,s.jsx)(e.strong,{children:"string"})," ] The ID of the configuration"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["[ ",(0,s.jsx)(e.strong,{children:"boolean"})," ] If the configuration existed or not"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function c(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);