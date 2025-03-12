"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[6020],{3409:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Addon API/user-data/bitstream","title":"BitStream","description":"A Bitstream that is a stream of bits!","source":"@site/docs/Addon API/user-data/bitstream.md","sourceDirName":"Addon API/user-data","slug":"/Addon API/user-data/bitstream","permalink":"/docs/Addon API/user-data/bitstream","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BitStream","description":"A Bitstream that is a stream of bits!"},"sidebar":"sidebar","previous":{"title":"Userdata","permalink":"/docs/category/userdata"},"next":{"title":"MD5Stream","permalink":"/docs/Addon API/user-data/md5stream"}}');var t=r(4848),i=r(8453);const l={title:"BitStream",description:"A Bitstream that is a stream of bits!"},a=void 0,d={},c=[{value:"Functions",id:"functions",level:2},{value:"writeBits",id:"writebits",level:3},{value:"readBits",id:"readbits",level:3},{value:"writeUInt",id:"writeuint",level:3},{value:"readUInt",id:"readuint",level:3},{value:"writeInt",id:"writeint",level:3},{value:"readInt",id:"readint",level:3},{value:"writeByte",id:"writebyte",level:3},{value:"readByte",id:"readbyte",level:3},{value:"writeBytes",id:"writebytes",level:3},{value:"readBytes",id:"readbytes",level:3},{value:"writeFloat",id:"writefloat",level:3},{value:"readFloat",id:"readfloat",level:3},{value:"reset",id:"reset",level:3},{value:"align",id:"align",level:3},{value:"tostring",id:"tostring",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A Bitstream that is a stream of bits! (What did you expect!)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"writebits",children:"writeBits"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:writeBits( value, numBits )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Writes a sequence of bits to the stream."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["value [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The value to write."]}),"\n",(0,t.jsxs)(n.li,{children:["numBits [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The number of bits to write from the value."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"readbits",children:"readBits"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:readBits( numBits )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Reads a sequence of bits from the stream."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["numBits [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The number of bits to read."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"}),"\r\n-[ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The extracted value."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"writeuint",children:"writeUInt"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:writeUInt( value, numBits )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Writes an unsigned integer in Bigian format."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["value [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The unsigned integer value to write."]}),"\n",(0,t.jsxs)(n.li,{children:["numBits [ ",(0,t.jsx)(n.strong,{children:"integer"})," ]  The number of bits to use for the value."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"readuint",children:"readUInt"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:readUInt( numBits )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Reads an unsigned integer in Bigian format."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["numBits [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The number of bits to read."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The extracted unsigned integer."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"writeint",children:"writeInt"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:writeInt( value, numBits )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Writes a signed integer in Bigian format."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["value [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The signed integer value to write."]}),"\n",(0,t.jsxs)(n.li,{children:["numBits [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The number of bits to use for the value."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"readint",children:"readInt"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:readInt( numBits )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Reads a signed integer in Bigian format."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["numBits [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The number of bits to read."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The extracted signed integer."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"writebyte",children:"writeByte"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:writeByte( value )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Writes a single byte (8 bits) to the stream."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["value [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The byte value to write (0-255)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"readbyte",children:"readByte"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:readByte()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Reads a single byte (8 bits) from the stream."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The extracted byte value."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"writebytes",children:"writeBytes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:writeBytes( bytes )\r\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Writes a sequence of bytes to the stream."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["bytes [ ",(0,t.jsx)(n.strong,{children:"string"})," ] The byte sequence to write."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"readbytes",children:"readBytes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:readBytes( numBytes )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Reads a sequence of bytes from the stream."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["numBytes ",(0,t.jsx)(n.strong,{children:"integer"})," The number of bytes to read."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[ ",(0,t.jsx)(n.strong,{children:"string"})," ] The extracted byte sequence."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"writefloat",children:"writeFloat"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:writeFloat( value )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Writes a floating-point number in Bigian format (32-bit IEEE 754)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["value [ ",(0,t.jsx)(n.strong,{children:"number"})," ] The float value to write."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"readfloat",children:"readFloat"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:readFloat()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Reads a floating-point number in Bigian format (32-bit IEEE 754)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[ ",(0,t.jsx)(n.strong,{children:"number"})," ] The extracted float value."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"reset",children:"reset"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:reset()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Resets the bit stream, clearing all data."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"align",children:"align"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:align()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Aligns the bit stream to the next byte boundary."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tostring",children:"tostring"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"BitStream:tostring()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Converts the bit stream to a string representation."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[ ",(0,t.jsx)(n.strong,{children:"string"})," ] The string representation of the bit stream."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);