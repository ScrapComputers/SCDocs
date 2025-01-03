"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[1038],{2744:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Lua API/user-data/bitstream","title":"BitStream","description":"Bitstream \u044d\u0442\u043e \u043f\u043e\u0442\u043e\u043a \u0431\u0438\u0442\u043e\u0432!","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/Lua API/user-data/bitstream.md","sourceDirName":"Lua API/user-data","slug":"/Lua API/user-data/bitstream","permalink":"/ru/docs/Lua API/user-data/bitstream","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BitStream","description":"Bitstream \u044d\u0442\u043e \u043f\u043e\u0442\u043e\u043a \u0431\u0438\u0442\u043e\u0432!"},"sidebar":"sidebar","previous":{"title":"Userdata","permalink":"/ru/docs/category/userdata-1"},"next":{"title":"HologramObject","permalink":"/ru/docs/Lua API/user-data/hologram-object"}}');var s=r(4848),l=r(8453);const t={title:"BitStream",description:"Bitstream \u044d\u0442\u043e \u043f\u043e\u0442\u043e\u043a \u0431\u0438\u0442\u043e\u0432!"},d=void 0,c={},a=[{value:"\u041f\u043e\u043b\u044f",id:"\u043f\u043e\u043b\u044f",level:2},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"dumpString",id:"dumpstring",level:3},{value:"dumpBase64",id:"dumpbase64",level:3},{value:"dumpHex",id:"dumphex",level:3},{value:"writeBit",id:"writebit",level:3},{value:"readBit",id:"readbit",level:3},{value:"writeByte",id:"writebyte",level:3},{value:"readByte",id:"readbyte",level:3},{value:"writeInt8",id:"writeint8",level:3},{value:"readInt8",id:"readint8",level:3},{value:"writeUInt8",id:"writeuint8",level:3},{value:"readUInt8",id:"readuint8",level:3},{value:"writeInt16",id:"writeint16",level:3},{value:"readInt16",id:"readint16",level:3},{value:"writeUInt16",id:"writeuint16",level:3},{value:"readUInt16",id:"readuint16",level:3},{value:"writeInt24",id:"writeint24",level:3},{value:"readInt24",id:"readint24",level:3},{value:"writeUInt24",id:"writeuint24",level:3},{value:"readUInt24",id:"readuint24",level:3},{value:"writeInt32",id:"writeint32",level:3},{value:"readInt32",id:"readint32",level:3},{value:"writeUInt32",id:"writeuint32",level:3},{value:"readUInt32",id:"readuint32",level:3},{value:"writeString",id:"writestring",level:3},{value:"readString",id:"readstring",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Bitstream \u2014 \u044d\u0442\u043e \u043f\u043e\u0442\u043e\u043a \u0431\u0438\u0442\u043e\u0432! (\u0410 \u0447\u0442\u043e \u0442\u044b \u0435\u0449\u0451 \u043e\u0436\u0438\u0434\u0430\u043b!)"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u043e\u043b\u044f",children:"\u041f\u043e\u043b\u044f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pos"})," [ ",(0,s.jsx)(n.strong,{children:"number"})," ] \u041f\u043e\u0437\u0438\u0446\u0438\u044f \u0432 \u0441\u0430\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 (\u0431\u0438\u0442 \u0437\u0430 \u0431\u0438\u0442\u043e\u043c!)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bytePos"})," [ ",(0,s.jsx)(n.strong,{children:"number"})," ] \u0415\u0433\u043e \u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0432 \u0441\u0430\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 (\u0431\u0430\u0439\u0442 \u0437\u0430 \u0431\u0430\u0439\u0442\u043e\u043c!)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"size"})," [ ",(0,s.jsx)(n.strong,{children:"number"})," ] \u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u043e\u0442\u043e\u043a\u0430."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,s.jsx)(n.h3,{id:"dumpstring",children:"dumpString"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:dumpString()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"string"})," ] dumpedString BitStream, \u043d\u043e \u0441\u0442\u0440\u043e\u043a\u0430"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"dumpbase64",children:"dumpBase64"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:dumpBase64()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 (\u043a\u0430\u043a base64)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"string"})," ] dumpedString BitStream, \u043d\u043e \u0441\u0442\u0440\u043e\u043a\u0430 \u0432 \u0432\u0438\u0434\u0435 base64"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"dumphex",children:"dumpHex"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:dumpHex()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 (\u043a\u0430\u043a hex)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"string"})," ] dumpedString BitStream, \u043d\u043e \u0441\u0442\u0440\u043e\u043a\u0430 \u0432 \u0432\u0438\u0434\u0435 hex"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writebit",children:"writeBit"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeBit( bit )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0431\u0438\u0442"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["bit [ ",(0,s.jsx)(n.strong,{children:"boolean|integer"})," ] \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u0438\u0442\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readbit",children:"readBit"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readBit()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0427\u0438\u0442\u0430\u0435\u0442 \u0431\u0438\u0442"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer?"})," ] 0 \u0438\u043b\u0438 1 \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0431\u0438\u0442\u0430. \u041d\u043e\u043b\u044c, \u0435\u0441\u043b\u0438 \u043e\u043d \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writebyte",children:"writeByte"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeByte( byte )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0431\u0430\u0439\u0442"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["byte [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u0411\u0430\u0439\u0442 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438 (\u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432 \u0432\u0438\u0434\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 ASCII)"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readbyte",children:"readByte"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readByte()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Reads a byte"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"string?"})," ] \u0427\u0438\u0442\u0430\u0435\u0442 \u0431\u0430\u0439\u0442"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writeint8",children:"writeInt8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeInt8( integer )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 8-\u0431\u0438\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["integer [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u0427\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readint8",children:"readInt8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readInt8()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0427\u0438\u0442\u0430\u0435\u0442 8-\u0431\u0438\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer?"})," ] \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 8-\u0431\u0438\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writeuint8",children:"writeUInt8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeUInt8( uinteger )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 8-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["uinteger [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u0426\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readuint8",children:"readUInt8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readUInt8()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 8-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer?"})," ] \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 8-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writeint16",children:"writeInt16"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeInt16( integer )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 16-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["integer [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u0426\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readint16",children:"readInt16"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readInt16()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 16-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer?"})," ] \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 16-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writeuint16",children:"writeUInt16"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeUInt16( uinteger )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 16-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["uinteger [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u0426\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readuint16",children:"readUInt16"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readUInt16()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 16-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer?"})," ] \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 16-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writeint24",children:"writeInt24"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeInt24( integer )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 24-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["integer [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u0426\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readint24",children:"readInt24"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readInt24()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0427\u0438\u0442\u0430\u0435\u0442 24-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer?"})," ] \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 24-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writeuint24",children:"writeUInt24"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeUInt24( uinteger )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 24-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["uinteger [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u0426\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readuint24",children:"readUInt24"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readUInt24()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0427\u0438\u0442\u0430\u0435\u0442 24-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer?"})," ] \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 24-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writeint32",children:"writeInt32"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeInt32( integer )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 32-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["integer [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u0426\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readint32",children:"readInt32"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readInt32()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0427\u0438\u0442\u0430\u0435\u0442 32-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer?"})," ] \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 32-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writeuint32",children:"writeUInt32"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeUInt32( uinteger )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 32-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["uinteger [ ",(0,s.jsx)(n.strong,{children:"integer"})," ] \u0426\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readuint32",children:"readUInt32"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readUInt32()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0427\u0438\u0442\u0430\u0435\u0442 32-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"integer?"})," ] \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 32-\u0431\u0438\u0442\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437 \u0437\u043d\u0430\u043a\u0430."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"writestring",children:"writeString"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:writeString( str )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["str [ ",(0,s.jsx)(n.strong,{children:"string"})," ] \u0421\u0442\u0440\u043e\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"readstring",children:"readString"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"BitStream:readString()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0427\u0438\u0442\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[ ",(0,s.jsx)(n.strong,{children:"string?"})," ] \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var i=r(6540);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);