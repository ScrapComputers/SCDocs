"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[5694],{6796:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"Lua API/components/networkport","title":"Network Port","description":"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u0435\u0442\u0435\u0432\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0430","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/Lua API/components/networkport.md","sourceDirName":"Lua API/components","slug":"/Lua API/components/networkport","permalink":"/ru/docs/Lua API/components/networkport","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Network Port","description":"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u0435\u0442\u0435\u0432\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0430"},"sidebar":"sidebar","previous":{"title":"Motor","permalink":"/ru/docs/Lua API/components/motor"},"next":{"title":"Radar","permalink":"/ru/docs/Lua API/components/radar"}}');var s=r(4848),c=r(8453);const a={title:"Network Port",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u0435\u0442\u0435\u0432\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0430"},l=void 0,o={},i=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"getAntenna",id:"getantenna",level:3},{value:"hasConnection",id:"hasconnection",level:3},{value:"sendPacket",id:"sendpacket",level:3},{value:"sendPacketToAntenna",id:"sendpackettoantenna",level:3},{value:"getTotalPackets",id:"gettotalpackets",level:3},{value:"receivePacket",id:"receivepacket",level:3},{value:"clearPackets",id:"clearpackets",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u0421\u0435\u0442\u0435\u0432\u043e\u0439 \u043f\u043e\u0440\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043f\u043e\u0440\u0442\u044b."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,s.jsx)(n.h3,{id:"getantenna",children:"getAntenna"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"NetworkPort.getAntenna()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u0443\u044e \u0430\u043d\u0442\u0435\u043d\u043d\u0443."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/ru/docs/Lua%20API/components/antenna",children:"AntennaComponent"})}),"?] \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u0430\u044f \u0430\u043d\u0442\u0435\u043d\u043d\u0430, \u0438\u043b\u0438 nil, \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0432\u043e\u0439 \u043d\u0435 \u043d\u0430\u0448\u043b\u043e\u0441\u044c."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"hasconnection",children:"hasConnection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"NetworkPort.hasConnection()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0412\u0435\u0440\u043d\u0451\u0442 true, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043a \u0447\u0435\u043c\u0443-\u043b\u0438\u0431\u043e."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"boolean"})," ] True, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"sendpacket",children:"sendPacket"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"NetworkPort.sendPacket( data )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u043d\u0430 \u0430\u043d\u0442\u0435\u043d\u043d\u0443 \u0438\u043b\u0438 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u043f\u043e\u0440\u0442 (\u0415\u0441\u043b\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0430\u043d\u0442\u0435\u043d\u043d, \u043f\u0430\u043a\u0435\u0442 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u0447\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043d\u0443\u044e \u0430\u043d\u0442\u0435\u043d\u043d\u0443)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["data [ ",(0,s.jsx)(n.strong,{children:"any"})," ] \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u0430\u043a\u0435\u0442\u0430. \u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439!"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"sendpackettoantenna",children:"sendPacketToAntenna"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"NetworkPort.sendPacketToAntenna( name, data )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0443\u044e \u0430\u043d\u0442\u0435\u043d\u043d\u0443. (\u0410\u043d\u0442\u0435\u043d\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0430!)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["name [ ",(0,s.jsx)(n.strong,{children:"string"})," ] \u0418\u043c\u044f \u0430\u043d\u0442\u0435\u043d\u043d\u044b."]}),"\n",(0,s.jsxs)(n.li,{children:["data [ ",(0,s.jsx)(n.strong,{children:"any"})," ] \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u0430\u043a\u0435\u0442\u0430. \u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439!"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"gettotalpackets",children:"getTotalPackets"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"NetworkPort.getTotalPackets()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u043f\u043e\u0440\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"receivepacket",children:"receivePacket"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"NetworkPort.receivePacket()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0427\u0438\u0442\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 ",(0,s.jsx)(n.code,{children:"getTotalPackets"}),"! \u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u043e\u043f\u044b\u0442\u0430\u0435\u0442\u0435\u0441\u044c \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b, \u043d\u0435 \u0438\u043c\u0435\u044f \u0438\u0445, \u0442\u043e \u044d\u0442\u043e \u0432\u044b\u0437\u043e\u0432\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443!"]}),(0,s.jsx)(n.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"-- \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u0430\r\n---@param port NetworkPort \u0421\u0435\u0442\u0435\u0432\u043e\u0439 \u043f\u043e\u0440\u0442\r\n---@return any packet \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442\r\nfunction receivePacket(port)\r\n    if port.getTotalPackets() > 0 then\r\n        return port.receivePacket()\r\n    end\r\n    return nil\r\nend\n"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"any"})," ] \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u0430\u043a\u0435\u0442\u0430."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"clearpackets",children:"clearPackets"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"NetworkPort.clearPackets()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041e\u0447\u0438\u0449\u0430\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432."})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(6540);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);