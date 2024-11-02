"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[2737],{7015:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=r(4848),s=r(8453);const l={title:"Display",description:"The display component"},t=void 0,c={id:"Lua API/components/display",title:"Display",description:"The display component",source:"@site/docs/Lua API/components/display.md",sourceDirName:"Lua API/components",slug:"/Lua API/components/display",permalink:"/SCDocs/docs/Lua API/components/display",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Display",description:"The display component"},sidebar:"sidebar",previous:{title:"Camera",permalink:"/SCDocs/docs/Lua API/components/camera"},next:{title:"Drive",permalink:"/SCDocs/docs/Lua API/components/drive"}},o={},d=[{value:"Structures",id:"structures",level:2},{value:"TouchData",id:"touchdata",level:3},{value:"Fields",id:"fields",level:4},{value:"PixelTable",id:"pixeltable",level:3},{value:"Functions",id:"functions",level:2},{value:"drawPixel",id:"drawpixel",level:3},{value:"drawFromTable",id:"drawfromtable",level:3},{value:"clear",id:"clear",level:3},{value:"drawLine",id:"drawline",level:3},{value:"drawCircle",id:"drawcircle",level:3},{value:"drawFilledCircle",id:"drawfilledcircle",level:3},{value:"drawTriangle",id:"drawtriangle",level:3},{value:"drawFilledTriangle",id:"drawfilledtriangle",level:3},{value:"drawRect",id:"drawrect",level:3},{value:"drawFilledRect",id:"drawfilledrect",level:3},{value:"drawText",id:"drawtext",level:3},{value:"optimize",id:"optimize",level:3},{value:"getDimensions",id:"getdimensions",level:3},{value:"hide",id:"hide",level:3},{value:"show",id:"show",level:3},{value:"setRenderDistance",id:"setrenderdistance",level:3},{value:"enableTouchScreen",id:"enabletouchscreen",level:3},{value:"getTouchData",id:"gettouchdata",level:3},{value:"update",id:"update",level:3},{value:"autoUpdate",id:"autoupdate",level:3},{value:"setOptimizationThreshold",id:"setoptimizationthreshold",level:3},{value:"calcTextSize",id:"calctextsize",level:3},{value:"setMaxBuffer",id:"setmaxbuffer",level:3},{value:"getId",id:"getid",level:3},{value:"getOptimizationThreshold",id:"getoptimizationthreshold",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The display is like a monitor but in Scrap Mechanic. Allows you to draw anything on it with a computer."}),"\n",(0,i.jsxs)(n.admonition,{title:"Performance note!",type:"warning",children:[(0,i.jsx)(n.p,{children:"Displays are the only component where you can cause a ton of lag! Since the only way to render pixels is via effects, Too many effects mean a lot of lag. Although our optimization is very good. We suggest making any graphics on our display simple or not using a ton of colors."}),(0,i.jsx)(n.p,{children:"Using a ton of colors would decrease your game's performance even after optimizations!"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"structures",children:"Structures"}),"\n",(0,i.jsx)(n.h3,{id:"touchdata",children:"TouchData"}),"\n",(0,i.jsx)(n.p,{children:'This contains touch data when the user interacts with the display AKA "touches the display"'}),"\n",(0,i.jsx)(n.h4,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"})," [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The position on the x-axis."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"y"})," [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The position on the y-axis."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"state"})," [ ",(0,i.jsx)(n.strong,{children:"1|2|3"})," ] The state that it has been pressed. 1 is Pressed, 2 is Hold, 3 is Released."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pixeltable",children:"PixelTable"}),"\n",(0,i.jsx)(n.p,{children:"Pixel table's are tables of pixel information used for drawing on the display, they are in a format that the display can understand."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'{\r\n    x = 1, -- The position of the pixel on the X-axis\r\n    y = 1, -- The position of the pixel on the Y-axis\r\n    color = sm.color.new("ff0000") -- The color of the pixel\r\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This one above draws a singular red pixel on coordinates ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"(1, 1)"})}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"drawpixel",children:"drawPixel"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawPixel( x, y, color )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Draws a single pixel at the specified coordinates with the given color."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["x [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the pixel."]}),"\n",(0,i.jsxs)(n.li,{children:["y [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the pixel."]}),"\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] The color of the pixel in hexadecimal format."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"drawfromtable",children:"drawFromTable"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawFromTable( tbl )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Draws shapes and text based on data provided in a table."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["tbl [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"#pixeltable",children:"PixelTable"}),"[]"]})," ] All instructions to run through"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"clear",children:"clear"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.clear( color )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Clears the display with the specified color."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string?"]})," ] The color to clear the display with, in hexadecimal format (If nil, It will clear the screen with the default color)."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"drawline",children:"drawLine"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawLine( x, y, x1, y1, color )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Draw a line between two points with the specified color."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["x [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the starting point."]}),"\n",(0,i.jsxs)(n.li,{children:["y [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the starting point."]}),"\n",(0,i.jsxs)(n.li,{children:["x1 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the ending point."]}),"\n",(0,i.jsxs)(n.li,{children:["y1 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the ending point."]}),"\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] The color of the line in hexadecimal format."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"drawcircle",children:"drawCircle"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawCircle( x, y, radius, color )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Draws a circle with the specified center coordinates, radius, and color."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["x [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the center of the circle."]}),"\n",(0,i.jsxs)(n.li,{children:["y [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the center of the circle."]}),"\n",(0,i.jsxs)(n.li,{children:["radius [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The radius of the circle."]}),"\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] The color of the circle in hexadecimal format."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"drawfilledcircle",children:"drawFilledCircle"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawFilledCircle( x, y, radius, color )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Draws a filled circle with the specified center coordinates, radius, and color."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["x [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the center of the circle."]}),"\n",(0,i.jsxs)(n.li,{children:["y [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the center of the circle."]}),"\n",(0,i.jsxs)(n.li,{children:["radius [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The radius of the circle."]}),"\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] The color of the circle in hexadecimal format."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"drawtriangle",children:"drawTriangle"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawTriangle( x1, y1, x2, y2, x3, y3, color )\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Draws a triangle with the specified vertices and color.\r\n",(0,i.jsx)(n.strong,{children:"Arguments:"})]}),"\n",(0,i.jsx)(n.p,{children:'Arguments"'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["x1 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the first vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["y1 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the first vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["x2 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the second vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["y2 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the second vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["x3 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the third vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["y3 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the third vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] The color of the triangle in hexadecimal format."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"drawfilledtriangle",children:"drawFilledTriangle"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawFilledTriangle( x1, y1, x2, y2, x3, y3, color )\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Draws a filled triangle with the specified vertices and color.\r\n",(0,i.jsx)(n.strong,{children:"Arguments:"})]}),"\n",(0,i.jsx)(n.p,{children:'Arguments"'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["x1 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the first vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["y1 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the first vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["x2 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the second vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["y2 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the second vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["x3 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the third vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["y3 [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the third vertex."]}),"\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] The color of the triangle in hexadecimal format."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"drawrect",children:"drawRect"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawRect( x, y, width, height, color )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Draws a rectangle with the specified position, width, height, and color."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["x [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the top-left corner of the rectangle."]}),"\n",(0,i.jsxs)(n.li,{children:["y [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the top-left corner of the rectangle."]}),"\n",(0,i.jsxs)(n.li,{children:["width [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The width of the rectangle."]}),"\n",(0,i.jsxs)(n.li,{children:["height [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The height of the rectangle."]}),"\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] The color of the rectangle in hexadecimal format."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"drawfilledrect",children:"drawFilledRect"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawFilledRect( x, y, width, height, color )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Draws a filled rectangle with the specified position, width, height, and color."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["x [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the top-left corner of the rectangle."]}),"\n",(0,i.jsxs)(n.li,{children:["y [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the top-left corner of the rectangle."]}),"\n",(0,i.jsxs)(n.li,{children:["width [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The width of the rectangle."]}),"\n",(0,i.jsxs)(n.li,{children:["height [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The height of the rectangle."]}),"\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] The color of the rectangle in hexadecimal format."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"drawtext",children:"drawText"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.drawText( x, y, string, color, fontName )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Draws text at the specified position with the specified color."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["x [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The x-coordinate of the text."]}),"\n",(0,i.jsxs)(n.li,{children:["y [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The y-coordinate of the text."]}),"\n",(0,i.jsxs)(n.li,{children:["string [ ",(0,i.jsx)(n.strong,{children:"string"})," ] The text to draw."]}),"\n",(0,i.jsxs)(n.li,{children:["color [ ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/",children:"Color"}),"|string"]})," ] The color of the text in hexadecimal format."]}),"\n",(0,i.jsxs)(n.li,{children:["fontName [ ",(0,i.jsx)(n.strong,{children:"string?"})," ] The font to use. (defaults to whatever the default font the font manager is using)"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"optimize",children:"optimize"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.optimize()\n"})}),"\n",(0,i.jsx)(n.p,{children:"This optimizes the display but more at the extreme bound."}),"\n",(0,i.jsx)(n.admonition,{title:"Performance note!",type:"warning",children:(0,i.jsx)(n.p,{children:"This is only meant to be called when you're not planning to update the display for a long time. Use it when it's generally going to be static."})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getdimensions",children:"getDimensions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.getDimensions()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Retrieves the dimensions of the display."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[ ",(0,i.jsx)(n.strong,{children:"number"})," ] The width of the display."]}),"\n",(0,i.jsxs)(n.li,{children:["[ ",(0,i.jsx)(n.strong,{children:"number"})," ] The height of the display."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hide",children:"hide"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.hide()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Hides the display."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"show",children:"show"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.show()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Shows the display."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"setrenderdistance",children:"setRenderDistance"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.setRenderDistance( distance )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sets the render distance of the display."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["distance [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The render distance to set."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"enabletouchscreen",children:"enableTouchScreen"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.enableTouchScreen( bool )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Enables or disables the touchscreen functionality."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["bool [ ",(0,i.jsx)(n.strong,{children:"boolean"})," ] True to enable touch screen, false to disable."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"gettouchdata",children:"getTouchData"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.getTouchData()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Retrieves touch data from the touch screen."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[ ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#touchdata",children:"TouchData"})})," ] A table containing touch data such as coordinates and touch state."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"update",children:"update"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.update()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Updates the display."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"autoupdate",children:"autoUpdate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.autoUpdate( bool )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sets whether the display should automatically update."}),"\n",(0,i.jsxs)(n.admonition,{title:"Peformance note!",type:"warning",children:[(0,i.jsx)(n.p,{children:"If you let's say draw a lot of things like rectangles, text, etc with this enabled. Your game would lag a LOT! And the network would be spammed with network requests!"}),(0,i.jsx)(n.p,{children:"So please only use this when you're not going to draw a lot and your display doesn't get updated a lot!"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["bool [ ",(0,i.jsx)(n.strong,{children:"boolean"})," ] True to enable auto-update, false to disable."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"setoptimizationthreshold",children:"setOptimizationThreshold"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.setOptimizationThreshold( int )\n"})}),"\n",(0,i.jsx)(n.p,{children:"This function sets the optimization threshold of the display. Our displays optimize the effect count by grouping similar-colored pixels together into one larger effect. The integer (ranging between 0 and 1) dictates how similar the neighboring pixels' colors have to be, with 0 requiring them to be exactly the same RGB value and 1 allowing any RGB value."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["int [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The optimization threshold to set."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"calctextsize",children:"calcTextSize"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.calcTextSize( text )\n"})}),"\n",(0,i.jsx)(n.p,{children:"Calculate the text's bounding box."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["text [ ",(0,i.jsx)(n.strong,{children:"string"})," ] The text to calculate its size."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[ ",(0,i.jsx)(n.strong,{children:"number"})," ] The width that the text would consume."]}),"\n",(0,i.jsxs)(n.li,{children:["[ ",(0,i.jsx)(n.strong,{children:"number"})," ] The height that the text would consume."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)("s",{children:[(0,i.jsx)(n.h3,{id:"setmaxbuffer",children:"setMaxBuffer"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.setMaxBuffer( int )\n"})}),(0,i.jsx)(n.p,{children:"Sets the maximum ammount of itterations the displays draw buffer can do per tick."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["int [ ",(0,i.jsx)(n.strong,{children:"number"})," ] The buffer size to be set."]}),"\n"]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Note!",type:"info",children:(0,i.jsx)(n.p,{children:"Function depreciated"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getid",children:"getId"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.getId()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the displays shape ID."}),"\n",(0,i.jsx)(n.h3,{id:"getoptimizationthreshold",children:"getOptimizationThreshold"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"Display.getOptimizationThreshold()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the displays optimization threshold."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[ ",(0,i.jsx)(n.strong,{children:"number"})," ] The displays optimization threshold."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var i=r(6540);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);