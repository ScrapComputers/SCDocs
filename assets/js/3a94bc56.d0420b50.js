"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[3036],{6833:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=s(4848),n=s(8453);const r={slug:"hotfix-for-display-lag-issue",title:"\u0425\u043e\u0442\u0444\u0438\u043a\u0441 \u043b\u0430\u0433\u043e\u0432 \u0434\u0438\u0441\u043f\u043b\u0435\u044f",authors:["veradev"],tags:["updates","bugfix"]},o=void 0,i={permalink:"/blog/hotfix-for-display-lag-issue",source:"@site/blog/2024-06-26-hotfix-for-display-lag-issue.md",title:"\u0425\u043e\u0442\u0444\u0438\u043a\u0441 \u043b\u0430\u0433\u043e\u0432 \u0434\u0438\u0441\u043f\u043b\u0435\u044f",description:"\u041c\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0432\u044b\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u043d\u043e\u0432\u043e\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0434\u0438\u0441\u043f\u043b\u0435\u044f\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043b\u0430 \u043a \u043b\u0430\u0433\u0430\u043c.",date:"2024-06-26T00:00:00.000Z",tags:[{inline:!1,label:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f",permalink:"/blog/tags/updates",description:"ScrapComputers Updates"},{inline:!1,label:"\u0411\u0430\u0433\u0444\u0438\u043a\u0441\u044b/\u0425\u043e\u0442\u0444\u0438\u043a\u0441\u044b",permalink:"/blog/tags/bugfix",description:"ScrapComputer fixes"}],readingTime:.245,hasTruncateMarker:!0,authors:[{name:"VeraDev",title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a ScrapComputer",url:"https://github.com/VeraDev0",imageURL:"https://avatars.akamai.steamstatic.com/3d49f0bbdfe9f54b6058390fa728cc58b424d04f_full.jpg",key:"veradev"}],frontMatter:{slug:"hotfix-for-display-lag-issue",title:"\u0425\u043e\u0442\u0444\u0438\u043a\u0441 \u043b\u0430\u0433\u043e\u0432 \u0434\u0438\u0441\u043f\u043b\u0435\u044f",authors:["veradev"],tags:["updates","bugfix"]},unlisted:!1,prevItem:{title:"\u041e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u0439 \u0445\u043e\u0442\u0444\u0438\u043a\u0441 \u043b\u0430\u0433\u043e\u0432 \u0434\u0438\u0441\u043f\u043b\u0435\u044f!",permalink:"/blog/another-display-lag-bug-fixed"},nextItem:{title:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441 \u0431\u0430\u0433\u0444\u0438\u043a\u0441\u043e\u043c: \u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0431\u0430\u0433\u0444\u0438\u043a\u0441\u0430, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0431\u0430\u0433!",permalink:"/blog/remove-bugfix-to-fix-bug"}},l={authorsImageUrls:[void 0]},c=[];function u(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"\u041c\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0432\u044b\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u043d\u043e\u0432\u043e\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0434\u0438\u0441\u043f\u043b\u0435\u044f\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043b\u0430 \u043a \u043b\u0430\u0433\u0430\u043c."}),"\n",(0,a.jsx)(t.p,{children:"\u0425\u043e\u0442\u044f \u044d\u0442\u043e \u0431\u044b\u043b\u0430 \u043d\u0435 \u0441\u043e\u0432\u0441\u0435\u043c \u0443\u0442\u0435\u0447\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u0438, \u043e\u043d\u0430 \u043e\u043a\u0430\u0437\u0430\u043b\u0430 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\u0435 \u0432\u043e\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043f\u0440\u0438\u0432\u0435\u0434\u044f \u043a \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."}),"\n",(0,a.jsx)(t.p,{children:"\u042d\u0442\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043d\u043e\u0432\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u043d\u043e \u043c\u044b \u0440\u0430\u0434\u044b, \u0447\u0442\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u0431\u0430\u0433! \u0421\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438!"})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var a=s(6540);const n={},r=a.createContext(n);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);