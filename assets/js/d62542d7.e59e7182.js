"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[6743],{8853:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Lua API/static-functions-namespaces/sc_table","title":"sc.table","description":"The Table Module (Computer API)","source":"@site/docs/Lua API/static-functions-namespaces/sc_table.md","sourceDirName":"Lua API/static-functions-namespaces","slug":"/Lua API/static-functions-namespaces/sc_table","permalink":"/docs/Lua API/static-functions-namespaces/sc_table","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"sc.table","description":"The Table Module (Computer API)"},"sidebar":"sidebar","previous":{"title":"sc.syntax","permalink":"/docs/Lua API/static-functions-namespaces/sc_syntax"},"next":{"title":"sc.util","permalink":"/docs/Lua API/static-functions-namespaces/sc_util"}}');var l=s(4848),i=s(8453);const r={title:"sc.table",description:"The Table Module (Computer API)"},a=void 0,d={},c=[{value:"Functions",id:"functions",level:2},{value:"merge",id:"merge",level:3},{value:"clone",id:"clone",level:3},{value:"toString",id:"tostring",level:3},{value:"getItemAt",id:"getitemat",level:3},{value:"getTableSize",id:"gettablesize",level:3},{value:"shiftTableIndexes",id:"shifttableindexes",level:3},{value:"isDictionary",id:"isdictionary",level:3},{value:"numberlyOrderTable",id:"numberlyordertable",level:3},{value:"valueExistsInList",id:"valueexistsinlist",level:3}];function o(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"The Table Module for the computer API!"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,l.jsx)(n.h3,{id:"merge",children:"merge"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sc.table.merge( tbl1, tbl2, fullOverwrite )\n"})}),"\n",(0,l.jsx)(n.p,{children:"Merges 2 tables in 1."}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["The order that you put the sc.table.merge matters! ",(0,l.jsx)(n.code,{children:"tbl2"})," will override/overwrite anything inside ",(0,l.jsx)(n.code,{children:"tbl1"}),"!"]})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl1 [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The 1st table"]}),"\n",(0,l.jsxs)(n.li,{children:["tbl2 [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The 2nd table"]}),"\n",(0,l.jsxs)(n.li,{children:["fullOverwrite [ ",(0,l.jsx)(n.strong,{children:"boolean?"})," ] This will make it so the merged value will be always from tbl2. Will not care about anything else. The default is ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The merged table."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"clone",children:"clone"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sc.table.clone( tbl )\n"})}),"\n",(0,l.jsx)(n.p,{children:"Clones a table"}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"This function doesn't really need to exist"}),(0,l.jsx)(n.p,{children:"This function is utterly unnecessary but in SOME situations is useful. It does create a new table but it's so easy to implement that I don't think it should deserve to have its function."}),(0,l.jsx)(n.p,{children:"Guess why"}),(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Click this dropdown to see why its unnessorary"}),(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"This is all the code the function uses..."})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'---Clones a table\r\n---@param tbl table The table to clone\r\n---@return table clonedTable The cloned table\r\nsc.table.clone = function (tbl)\r\n\xa0 \xa0 assert(type(tbl) == "table", "Expected table, got "..type(tbl).." instead.") -- \u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438\r\n\r\n\xa0 \xa0 return unpack({tbl})\r\nend\n'})}),(0,l.jsx)(n.p,{children:"It's too little amount of code! I could do it in different ways but those have downsides! So this is the easiest thing we can do."})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The table to clone."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"table"})," ] The cloned table."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"tostring",children:"toString"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sc.table.toString( tbl )\n"})}),"\n",(0,l.jsx)(n.p,{children:'Converts a table to the same thing but as a string. If you were to try doing this with Lua\'s tostring. You would just get "table: 00A59928". Not the actual contents of the table itself!'}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The table."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"string"})," ] The converted lua table is a string."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"getitemat",children:"getItemAt"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sc.table.getItemAt( tbl, index )\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Gets an item from a table via the index. Unlike doing ",(0,l.jsx)(n.code,{children:"tbl[index]"}),". This will not care if the index numbers aren't in order."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- This is in our actual todo\r\nlocal todo = {\r\n [25] = "Add glass support for camera"\r\n [69] = "Add another parameter for speakers. Allows you to add such as the \\"wind\\" parameter to the sound effect"\r\n [4825] = "Add 512x512 and 1024x1024 displays for 3x3, 2x2 and 1x1 (Im going to add this no matter what :) )"\r\n}\r\n\r\nlocal lastTodoGood = sc.table.getItemAt(todo, 3) -- Works! Returns item of the index of 4825. Since it\'s the 3rd element in the table\r\nlocal lastTodoBad = todo[3]                      -- Doesn\'t Work! Tries grabbing an element at index 3 but that doesn\'t exist! so this is nil!\r\n\r\nprint("lastTodoGood: "..tostring(lastTodoGood))\r\nprint("lastTodoBad: " ..tostring(lastTodoBad ))\r\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["You see that tbl[index] would error out but not ",(0,l.jsx)(n.strong,{children:"sc.table.getItemAt"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The table"]}),"\n",(0,l.jsxs)(n.li,{children:["index [ ",(0,l.jsx)(n.strong,{children:"integer"})," ] The item to get."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"any"})," ] Whatever data it has received from the index."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"gettablesize",children:"getTableSize"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sc.table.getTableSize( tbl )\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Gets all items via a ",(0,l.jsx)(n.strong,{children:"ipairs"})," loop."]}),"\n",(0,l.jsx)(n.p,{children:"Unlike doing #tbl, If the indexing was weird, #tbl would return 0. This function does not care if the indexing system is weird. Will give you the same result as if the indexing system was normal."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The table."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"integer"})," ] The total items in the table."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"shifttableindexes",children:"shiftTableIndexes"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sc.table.shiftTableIndexes( tbl, shiftAmount )\n"})}),"\n",(0,l.jsx)(n.p,{children:"Shifts list's indexes."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] table The table."]}),"\n",(0,l.jsxs)(n.li,{children:["shiftAmount [ ",(0,l.jsx)(n.strong,{children:"integer"})," ] integer The amount to shift."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"table"})," ] The shifted table."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"isdictionary",children:"isDictionary"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sc.table.isDictionary( tbl )\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns true if your table is a dictionary."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The table."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"boolean"})," ] Whether your table is a dictionary or not."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"numberlyordertable",children:"numberlyOrderTable"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sc.table.numberlyOrderTable( tbl )\n"})}),"\n",(0,l.jsx)(n.p,{children:"Orders the list to be 1 to table size."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The table to check."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"table"})," ] The organized table."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"valueexistsinlist",children:"valueExistsInList"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"sc.table.valueExistsInList( tbl, item )\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns true if an item is found in a list."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["tbl [ ",(0,l.jsx)(n.strong,{children:"table"})," ] The table to check."]}),"\n",(0,l.jsxs)(n.li,{children:["item [ ",(0,l.jsx)(n.strong,{children:"any"})," ] The item to try finding the table. (Cannot be nil!)."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["[ ",(0,l.jsx)(n.strong,{children:"boolean"})," ] If it was found or not."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);