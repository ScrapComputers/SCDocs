"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[8980],{71:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Lua API/components/camera","title":"Camera","description":"The camera component","source":"@site/docs/Lua API/components/camera.md","sourceDirName":"Lua API/components","slug":"/Lua API/components/camera","permalink":"/docs/Lua API/components/camera","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Camera","description":"The camera component"},"sidebar":"sidebar","previous":{"title":"Antenna","permalink":"/docs/Lua API/components/antenna"},"next":{"title":"Display","permalink":"/docs/Lua API/components/display"}}');var t=s(4848),i=s(8453);const a={title:"Camera",description:"The camera component"},l=void 0,h={},d=[{value:"Structures",id:"structures",level:2},{value:"PixelRayResult",id:"pixelrayresult",level:3},{value:"DrawerFunction",id:"drawerfunction",level:3},{value:"Functions",id:"functions",level:2},{value:"frame",id:"frame",level:3},{value:"depthFrame",id:"depthframe",level:3},{value:"maskedFrame",id:"maskedframe",level:3},{value:"video",id:"video",level:3},{value:"advancedFrame",id:"advancedframe",level:3},{value:"advancedVideo",id:"advancedvideo",level:3},{value:"customFrame",id:"customframe",level:3},{value:"customVideo",id:"customvideo",level:3},{value:"setRange",id:"setrange",level:3},{value:"setShadowRange",id:"setshadowrange",level:3},{value:"setFov",id:"setfov",level:3},{value:"setOffsetX",id:"setoffsetx",level:3},{value:"setOffsetY",id:"setoffsety",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The camera allows you to take screenshots or even render video from the world to your display! Our camera looks great while not even touching the ",(0,t.jsx)(n.strong,{children:"raytracing"}),". There's no raytracing happening! just rays going everywhere as a ",(0,t.jsx)(n.strong,{children:"multicast"}),"!"]}),"\n",(0,t.jsx)(n.p,{children:"This doesn't even touch the complicated math! Just addition, subtraction, division, and multiplication."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"structures",children:"Structures"}),"\n",(0,t.jsx)(n.h3,{id:"pixelrayresult",children:"PixelRayResult"}),"\n",(0,t.jsxs)(n.p,{children:["This is either the raw raycast result of the pixel or a modified safe version if the environment is in safe mode. In the unsafe environment mode, you will recieve the raycastResult as userdata, please see ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/RaycastResult#raycastresult",children:"raycastResult"})})," for more information."]}),"\n",(0,t.jsx)(n.p,{children:"If you are in the safe environemnt the raw game raycastResult is made safe and important data is returned as a table:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"{\r\n    directionWorld = raycastResult.directionWorld, -- The direction world\r\n    fraction       = raycastResult.fraction      , -- The fraction\r\n    normalLocal    = raycastResult.normalLocal   , -- The normal local\r\n    normalWorld    = raycastResult.normalWorld   , -- The normal world\r\n    originWorld    = raycastResult.originWorld   , -- The origin world\r\n    pointLocal     = raycastResult.pointLocal    , -- The point local\r\n    pointWorld     = raycastResult.pointWorld    , -- The point world\r\n    type           = raycastResult.type          , -- The type\r\n    valid          = raycastResult.valid         , -- If its valid\r\n    material       = material                    , -- The ground material if hit terrainSurface or terrainAsset\r\n    color          = color                         -- The color of the userdata object (if it exists)\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"drawerfunction",children:"DrawerFunction"}),"\n",(0,t.jsx)(n.p,{children:"The drawer function is a function that recieves data from the raw raycasts of the camera, this allows you to fully customise how the camera draws a pixel based on the raycasts information."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["hit [ ",(0,t.jsx)(n.strong,{children:"boolean"})," ] If the raycast has hit anything or not."]}),"\n",(0,t.jsxs)(n.li,{children:["raycastResult [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#pixelrayresult",children:"PixelRayResult"})})," ] The raycast result of the ray."]}),"\n",(0,t.jsxs)(n.li,{children:["x [ ",(0,t.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the current pixel."]}),"\n",(0,t.jsxs)(n.li,{children:["y [ ",(0,t.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the current pixel."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The drawer function should be formatted as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local function DrawerFunction(hit, raycastResult, x, y)\r\n    --[[your code here]]\r\n\r\n    return color -- can either be color userdata or a hex string\r\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of a drawer function that makes an image similar to the depthFrame function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local function DrawerFunction(hit, raycastResult, x, y)\r\n    local color = sm.color.new(0, 0, 0)\r\n\r\n    if hit then\r\n        color = sm.color.new(1, 1, 1) * (1 - result.fraction)\r\n    end\r\n\r\n    return color\r\nend\n"})}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"frame",children:"frame"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.frame( display, width, height )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Takes a frame (aka a screenshot)."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments:"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["display [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./display",children:"Display"})})," ] The display to draw the frame to."]}),"\n",(0,t.jsxs)(n.li,{children:["width [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The width of the frame (Defaults to display width)."]}),"\n",(0,t.jsxs)(n.li,{children:["height [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The height of the frame (Defaults to display height)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"depthframe",children:"depthFrame"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.depthFrame( display, focalLength, width, height )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Takes a depth map frame (aka a screenshot)."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments:"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["display [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./display",children:"Display"})})," ] The display to draw the frame to."]}),"\n",(0,t.jsxs)(n.li,{children:["focalLength [ ",(0,t.jsx)(n.strong,{children:"number"})," ] The focal length to focus the camera on, in meters."]}),"\n",(0,t.jsxs)(n.li,{children:["width [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The width of the frame (Defaults to display width)."]}),"\n",(0,t.jsxs)(n.li,{children:["height [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The height of the frame (Defaults to display height)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"maskedframe",children:"maskedFrame"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.maskedFrame( display, mask, width, height )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Takes a masked map frame (aka a screenshot)."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["In case ",(0,t.jsx)(n.code,{children:"mask"})," is a ",(0,t.jsx)(n.code,{children:"string[]"})]}),": Each string is a raycast result type. If a raycast's type matches the pixel, it will be white or else black.\r\n",(0,t.jsxs)(n.strong,{children:["In case ",(0,t.jsx)(n.code,{children:"mask"})," is a ",(0,t.jsx)(n.code,{children:"string"})]}),": If a raycast's type matches with the mask, the pixel's color would be white and else black."]}),"\n",(0,t.jsxs)(n.p,{children:["If you do not know what the value(s) for the mask should be, (Find them by ",(0,t.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Constants#smphysicstypes",children:"clicking this"}),") URL."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["display [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./display",children:"Display"})})," ] The display to draw the frame to."]}),"\n",(0,t.jsxs)(n.li,{children:["mask [ ",(0,t.jsx)(n.strong,{children:"string|string[]"})," ] The mask for the raycast's to set."]}),"\n",(0,t.jsxs)(n.li,{children:["width [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The width of the frame (Defaults to display width)."]}),"\n",(0,t.jsxs)(n.li,{children:["height [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The height of the frame (Defaults to display height)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"video",children:"video"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.video( display, sliceWidth, width, height )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Like the frame function but it's as slices meaning you could make CCTV cameras without lagging a lot! It's just that the refresh rate would be lower."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["display [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./display",children:"Display"})})," ] The display to draw the frame to."]}),"\n",(0,t.jsxs)(n.li,{children:["sliceWidth [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The ammount of slices the camera does per tick."]}),"\n",(0,t.jsxs)(n.li,{children:["width [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The width of the frame (Defaults to display width)."]}),"\n",(0,t.jsxs)(n.li,{children:["height [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The height of the frame (Defaults to display height)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"advancedframe",children:"advancedFrame"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.advancedFrame( display, width, height )\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Performance note!",type:"warning",children:(0,t.jsxs)(n.p,{children:["The advanced functions use ",(0,t.jsx)(n.strong,{children:"CPU-Based Raytracing (Via Raycasting)"})," to render your frame(s). So this will use a ton of your CPU!"]})}),"\n",(0,t.jsx)(n.p,{children:"Takes a frame (aka a screenshot)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["display [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./display",children:"Display"})})," ] The display to draw the frame to."]}),"\n",(0,t.jsxs)(n.li,{children:["width [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The width of the frame (Defaults to display width)."]}),"\n",(0,t.jsxs)(n.li,{children:["height [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The height of the frame (Defaults to display height)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"advancedvideo",children:"advancedVideo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.advancedVideo( display, sliceWidth, width, height )\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Performance note!",type:"warning",children:(0,t.jsxs)(n.p,{children:["The advanced functions use ",(0,t.jsx)(n.strong,{children:"CPU-Based Raytracing (Via Raycasting)"})," to render your frame(s). So this will use a ton of your CPU!"]})}),"\n",(0,t.jsx)(n.p,{children:"Like the advancedFrame function but it's as slices meaning you could make CCTV cameras without lagging a lot! It's just that the refresh rate would be lower."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["display [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./display",children:"Display"})})," ] The display to draw the frame to."]}),"\n",(0,t.jsxs)(n.li,{children:["sliceWidth [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The ammount of slices the camera does per tick."]}),"\n",(0,t.jsxs)(n.li,{children:["width [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The width of the frame (Defaults to display width)."]}),"\n",(0,t.jsxs)(n.li,{children:["height [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The height of the frame (Defaults to display height)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"customframe",children:"customFrame"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.customFrame( display, drawer, width, height )\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is a function which allows you to use your own drawer function to create images."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["display [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./display",children:"Display"})})," ] The display to draw the frame to."]}),"\n",(0,t.jsxs)(n.li,{children:["drawer [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#drawerfunction",children:"DrawerFunction"})})," ] The drawer function."]}),"\n",(0,t.jsxs)(n.li,{children:["width [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The width of the frame (Defaults to display width)."]}),"\n",(0,t.jsxs)(n.li,{children:["height [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The height of the frame (Defaults to display height)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"customvideo",children:"customVideo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.customVideo( display, drawer, sliceWidth, width, height )\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is a function which allows you to use your own drawer function to create video."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["display [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./display",children:"Display"})})," ] The display to draw the frame to."]}),"\n",(0,t.jsxs)(n.li,{children:["drawer [ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#drawerfunction",children:"DrawerFunction"})})," ] The drawer function."]}),"\n",(0,t.jsxs)(n.li,{children:["sliceWidth [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The ammount of slices the camera does per tick."]}),"\n",(0,t.jsxs)(n.li,{children:["width [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The width of the frame (Defaults to display width)."]}),"\n",(0,t.jsxs)(n.li,{children:["height [ ",(0,t.jsx)(n.strong,{children:"integer?"})," ] The height of the frame (Defaults to display height)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setrange",children:"setRange"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.setRange( int )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the cameras range in meters."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["int [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The range in meters."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setshadowrange",children:"setShadowRange"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.setShadowRange( int )\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Performance note!",type:"warning",children:(0,t.jsx)(n.p,{children:"The higher this is, the better shadows you can get as the raytracing is able to cast a shadow from further away, but longer raycasts are more computationally expensive."})}),"\n",(0,t.jsx)(n.p,{children:"Sets the range that shadows are able to cast from."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["int [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The range in meters."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setfov",children:"setFov"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.setFov( int )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the cameras fov in degrees."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["int [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The fov in degrees."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setoffsetx",children:"setOffsetX"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.setOffsetX( int )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the cameras x offset, this is the number that gets added to its respective coordinate as the camera draws to the display at (1, 1) by default."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["int [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The x offset."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setoffsety",children:"setOffsetY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Camera.setOffsetY( int )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the cameras y offset, this is the number that gets added to its respective coordinate as the camera draws to the display at (1, 1) by default."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["int [ ",(0,t.jsx)(n.strong,{children:"integer"})," ] The y offset."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);