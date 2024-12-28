"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[6303],{3568:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Lua API/static-functions-namespaces/sc_ascf","title":"sc.ascfont","description":"True TTF Font Manager","source":"@site/docs/Lua API/static-functions-namespaces/sc_ascf.md","sourceDirName":"Lua API/static-functions-namespaces","slug":"/Lua API/static-functions-namespaces/sc_ascf","permalink":"/ru/docs/Lua API/static-functions-namespaces/sc_ascf","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"sc.ascfont","description":"True TTF Font Manager"},"sidebar":"sidebar","previous":{"title":"sc","permalink":"/ru/docs/Lua API/static-functions-namespaces/sc"},"next":{"title":"sc.audio","permalink":"/ru/docs/Lua API/static-functions-namespaces/sc_audio"}}');var t=s(4848),r=s(8453);const o={title:"sc.ascfont",description:"True TTF Font Manager"},c=void 0,l={},d=[{value:"Structures",id:"structures",level:2},{value:"ASCFont",id:"ascfont",level:3},{value:"ASCFont.Metadata",id:"ascfontmetadata",level:3},{value:"ASCFont.BoundingBox",id:"ascfontboundingbox",level:3},{value:"ASCFont.Glyph",id:"ascfontglyph",level:3},{value:"ASCFont.Metrics",id:"ascfontmetrics",level:3},{value:"ASCFont.Triangle",id:"ascfonttriangle",level:3},{value:"ASCFont.Coordinate",id:"ascfontcoordinate",level:3},{value:"Functions",id:"functions",level:2},{value:"getFontInfo",id:"getfontinfo",level:3},{value:"calcTextSize",id:"calctextsize",level:3},{value:"drawTextSafe",id:"drawtextsafe",level:3},{value:"getFontNames",id:"getfontnames",level:3}];function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["Like the ",(0,t.jsx)(e.a,{href:"./sc_fontmanager",children:"FontManager"})," but instead of drawing ",(0,t.jsx)(e.strong,{children:"Bitmap"})," fonts, it draws ",(0,t.jsx)(e.strong,{children:"Outline fonts"})," (eg, TTF, OTF and etc). This means it can draw with rotation, any font scale and etc!"]}),"\n",(0,t.jsxs)(e.p,{children:["And unlike the ",(0,t.jsx)(e.a,{href:"./sc_fontmanager",children:"FontManager"}),", It also lets you convert colors inside text into actual colors!"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"structures",children:"Structures"}),"\n",(0,t.jsx)(e.h3,{id:"ascfont",children:"ASCFont"}),"\n",(0,t.jsx)(e.p,{children:"Represents a font and its associated metadata, glyphs, and other properties."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Fields:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"metadata"})," [ ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"#ascfontmetadata",children:"ASCFont.Metadata"})})," ]"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"glyphs"})," [ ",(0,t.jsx)(e.strong,{children:"table"})," ]: A table mapping glyph names to their corresponding glyph data.","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Key"})," [ ",(0,t.jsx)(e.strong,{children:"string"})," ] The glyph name."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Value"})," [ ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"#ascfontglyph",children:"ASCFont.Glyph"})})," ] All glyphs in the font."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"ascfontmetadata",children:"ASCFont.Metadata"}),"\n",(0,t.jsx)(e.p,{children:"Metadata related to the font, such as its names, ascender/descender values, and bounding box."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Fields:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"names"})," [ ",(0,t.jsx)(e.strong,{children:"table"}),' ] A table containing font names, like "PostScript" or "Full Name".',"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Key"})," [ ",(0,t.jsx)(e.strong,{children:"string"})," ] The index (eg, fullname)"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Value"})," [ ",(0,t.jsx)(e.strong,{children:"string"})," ] The value"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"ascender"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The ascender value for the font, which is the height of the highest point of any character."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"descender"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The descender value for the font, which is the depth of the lowest point of any character."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"underLinePosition"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The vertical position where the underline is drawn."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"underLineThickness"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The thickness of the underline."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"boundingBox"})," [ ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"#ascfontboundingbox",children:"ASCFont.BoundingBox"})})," ] The overall bounding box for the font, containing the maximum and minimum coordinates."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"resolution"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The resolution (typically in DPI) for the font."]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"ascfontboundingbox",children:"ASCFont.BoundingBox"}),"\n",(0,t.jsx)(e.p,{children:"Represents the bounding box for a font, which defines the minimum and maximum x and y coordinates."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Fields:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"xMin"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The minimum x-coordinate of the font's bounding box."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"xMax"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The maximum x-coordinate of the font's bounding box."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"yMin"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The minimum y-coordinate of the font's bounding box."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"yMax"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The maximum y-coordinate of the font's bounding box."]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"ascfontglyph",children:"ASCFont.Glyph"}),"\n",(0,t.jsx)(e.p,{children:"Represents a single glyph in the font, which includes its width, metrics, and triangle data."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Fields:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"advanceWidth"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The width of the glyph, which determines the spacing between it and the next character."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"metrics"})," [ ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"#ascfontmetrics",children:"ASCFont.Metrics"})})," ] The metrics associated with the glyph, including its bounding box and left bearing."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"triangles"})," [ ",(0,t.jsxs)(e.strong,{children:[(0,t.jsx)(e.a,{href:"#ascfonttriangle",children:"ASCFont.Triangle"}),"[]"]})," ] A table of triangles that define the shape of the glyph."]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"ascfontmetrics",children:"ASCFont.Metrics"}),"\n",(0,t.jsx)(e.p,{children:"Represents the metrics for a glyph, extending from the bounding box with additional properties such as left bearing."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.strong,{children:["Based on: ",(0,t.jsx)(e.a,{href:"#ascfontboundingbox",children:"ASCFont.BoundingBox"})]})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Fields:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"leftBearing"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The horizontal distance from the origin to the leftmost edge of the glyph's bounding box."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"xMin"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] (From ",(0,t.jsx)(e.a,{href:"#ascfontboundingbox",children:"ASCFont.BoundingBox"}),") The minimum x-coordinate of the font's bounding box."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"xMax"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] (From ",(0,t.jsx)(e.a,{href:"#ascfontboundingbox",children:"ASCFont.BoundingBox"}),") The maximum x-coordinate of the font's bounding box."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"yMin"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] (From ",(0,t.jsx)(e.a,{href:"#ascfontboundingbox",children:"ASCFont.BoundingBox"}),") The minimum y-coordinate of the font's bounding box."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"yMax"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] (From ",(0,t.jsx)(e.a,{href:"#ascfontboundingbox",children:"ASCFont.BoundingBox"}),") The maximum y-coordinate of the font's bounding box."]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"ascfonttriangle",children:"ASCFont.Triangle"}),"\n",(0,t.jsx)(e.p,{children:"Represents a triangle used to define the geometry of a glyph."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Fields:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"v1"})," [ ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"#ascfontcoordinate",children:"ASCFont.Coordinate"})})," ] The first vertex of the triangle."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"v2"})," [ ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"#ascfontcoordinate",children:"ASCFont.Coordinate"})})," ] The second vertex of the triangle."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"v3"})," [ ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"#ascfontcoordinate",children:"ASCFont.Coordinate"})})," ] The third vertex of the triangle."]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"ascfontcoordinate",children:"ASCFont.Coordinate"}),"\n",(0,t.jsx)(e.p,{children:"Represents a coordinate in 2D space, typically used for defining the vertices of a triangle."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Fields:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"[1]"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The x-coordinate of the point."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"[2]"})," [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The y-coordinate of the point."]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(e.h3,{id:"getfontinfo",children:"getFontInfo"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lua",children:"sc.ascfont.getFontInfo( fontName )\n"})}),"\n",(0,t.jsx)(e.p,{children:"Gets information/data about the font"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["fontName [ ",(0,t.jsx)(e.strong,{children:"string"})," ] Name of the font"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["[ ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"#ascfont",children:"ASCFont"})})," ] The font data."]}),"\n",(0,t.jsxs)(e.li,{children:["[ ",(0,t.jsx)(e.strong,{children:"string?"})," ] The error message (if any)"]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"calctextsize",children:"calcTextSize"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lua",children:"sc.ascfont.calcTextSize( fontName, text, fontSize, rotation )\n"})}),"\n",(0,t.jsx)(e.p,{children:"Calculates text size, No error handling provided."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["fontName [ ",(0,t.jsx)(e.strong,{children:"string"})," ] The name of the font"]}),"\n",(0,t.jsxs)(e.li,{children:["text [ ",(0,t.jsx)(e.strong,{children:"string"})," ] The text"]}),"\n",(0,t.jsxs)(e.li,{children:["fontSize [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The size of the font"]}),"\n",(0,t.jsxs)(e.li,{children:["rotation [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The rotation"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["[ ",(0,t.jsx)(e.strong,{children:"number"})," ] width The width the font consumes"]}),"\n",(0,t.jsxs)(e.li,{children:["[ ",(0,t.jsx)(e.strong,{children:"number"})," ] hegiht The height the font consumes"]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"drawtextsafe",children:"drawTextSafe"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lua",children:"sc.ascfont.drawText( display, xOffset, yOffset, text, fontName, color, rotation, fontSize, colorToggled )\n"})}),"\n",(0,t.jsx)(e.p,{children:"Draws text to a display"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Arguments:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["display [ ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"../components/display",children:"Display"})})," ] The display"]}),"\n",(0,t.jsxs)(e.li,{children:["xOffset [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The x-coordinate"]}),"\n",(0,t.jsxs)(e.li,{children:["yOffset [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The y-coordinate"]}),"\n",(0,t.jsxs)(e.li,{children:["text [ ",(0,t.jsx)(e.strong,{children:"string"})," ] The text to draw"]}),"\n",(0,t.jsxs)(e.li,{children:["fontName [ ",(0,t.jsx)(e.strong,{children:"string"})," ] The name of the font"]}),"\n",(0,t.jsxs)(e.li,{children:["color [ ",(0,t.jsx)(e.strong,{children:"string|Color"})," ] The color of the text to set"]}),"\n",(0,t.jsxs)(e.li,{children:["rotation [ ",(0,t.jsx)(e.strong,{children:"number?"})," ] The rotation"]}),"\n",(0,t.jsxs)(e.li,{children:["fontSize [ ",(0,t.jsx)(e.strong,{children:"number"})," ] The size of the font to use"]}),"\n",(0,t.jsxs)(e.li,{children:["colorToggled [ ",(0,t.jsx)(e.strong,{children:"boolean?"})," ] If it should support colors or not in text."]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"getfontnames",children:"getFontNames"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lua",children:"sc.ascfont.getFontNames()\n"})}),"\n",(0,t.jsx)(e.p,{children:"Gets all loaded font names."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["[ ",(0,t.jsx)(e.strong,{children:"string[]"})," ] All font names."]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>c});var i=s(6540);const t={},r=i.createContext(t);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);