"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[8520],{3730:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Lua API/components/motor","title":"Motor","description":"The motor component","source":"@site/docs/Lua API/components/motor.md","sourceDirName":"Lua API/components","slug":"/Lua API/components/motor","permalink":"/docs/Lua API/components/motor","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Motor","description":"The motor component"},"sidebar":"sidebar","previous":{"title":"Light","permalink":"/docs/Lua API/components/light"},"next":{"title":"Network Port","permalink":"/docs/Lua API/components/networkport"}}');var r=s(4848),o=s(8453);const l={title:"Motor",description:"The motor component"},i=void 0,c={},d=[{value:"Functions",id:"functions",level:2},{value:"setBearingSpeed",id:"setbearingspeed",level:3},{value:"setBearingAngle",id:"setbearingangle",level:3},{value:"setPistonSpeed",id:"setpistonspeed",level:3},{value:"setTorque",id:"settorque",level:3},{value:"setLength",id:"setlength",level:3},{value:"setForce",id:"setforce",level:3},{value:"getCurrentAngle",id:"getcurrentangle",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The motor allows you to control what the bearings and pistons should do."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"setbearingspeed",children:"setBearingSpeed"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setBearingSpeed( speed )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sets the bearing(s) speed"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["speed [ ",(0,r.jsx)(n.strong,{children:"number"})," ] The speed to set to bearing(s)."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setbearingangle",children:"setBearingAngle"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setBearingAngle( angle )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sets the bearing(s) angle. Set it to nil to turn into an engine, or else (a number) to a controller."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["angle [ ",(0,r.jsx)(n.strong,{children:"number?"})," ] The angle to set to bearing(s)."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setpistonspeed",children:"setPistonSpeed"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setPistonSpeed( speed )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sets the piston(s) speed."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["speed [ ",(0,r.jsx)(n.strong,{children:"number"})," ] The speed to set to piston(s)."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"settorque",children:"setTorque"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setTorque( torque )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sets the bearing(s) torque."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["torque [ ",(0,r.jsx)(n.strong,{children:"number"})," ] The torque to set to bearing(s)."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setlength",children:"setLength"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setLength( length )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sets the piston(s) length."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["length [ ",(0,r.jsx)(n.strong,{children:"number"})," ] The length to set to piston(s)."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setforce",children:"setForce"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.setForce( force )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sets the piston(s) force."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["force [ ",(0,r.jsx)(n.strong,{children:"number"})," ] The force to set."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getcurrentangle",children:"getCurrentAngle"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Motor.getCurrentAngle()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Gets the bearing's current angle. Note that only 1 bearing can be connected!"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[ ",(0,r.jsx)(n.strong,{children:"number"})," ] The current angle"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(6540);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);