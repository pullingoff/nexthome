(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[401],{6150:function(e,t,a){"use strict";a.d(t,{Z:function(){return w}});var n=a(8582),r=a(7108),o=a(4719),i=a(5893),d=function(e){var t=e.text;return(0,i.jsx)(s,{href:"/tags/".concat(t,"/pages/1"),children:t.split(" ").join("-")})},s=(0,r.ZP)(o.Z).withConfig({displayName:"Tag__StyledTag",componentId:"sc-l3k1s7-0"})(["color:var(--color-white);text-transform:uppercase;font-weight:var(--fw-bold);padding:var(--xs) var(--lg);background-color:var(--color-deep-navy);border-radius:var(--border-radius-sm);margin-right:var(--md);"]),c=r.ZP.div.withConfig({displayName:"PostCard__CardContainer",componentId:"sc-1j9wrda-1"})(["position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;border-radius:8px;background-color:white;border:1px solid var(--theme2-color);z-index:0;"]),l=r.ZP.div.withConfig({displayName:"PostCard__StyledText",componentId:"sc-1j9wrda-2"})(["display:flex;flex-direction:column;padding:var(--2xl);padding-bottom:10px;&:hover h1{color:var(--hover-color);}& > *{display:block;}"]),p=r.ZP.h2.withConfig({displayName:"PostCard__Title",componentId:"sc-1j9wrda-3"})(["margin-top:3px;font-weight:700;line-height:1.3;"]),g=r.ZP.p.withConfig({displayName:"PostCard__Desc",componentId:"sc-1j9wrda-4"})(["line-height:1.5;margin:8px 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;overflow:hidden;text-overflow:ellipsis;"]),h=r.ZP.p.withConfig({displayName:"PostCard__StyledDateTime",componentId:"sc-1j9wrda-5"})(["margin:10px 0;"]),m=r.ZP.div.withConfig({displayName:"PostCard__TagContainer",componentId:"sc-1j9wrda-6"})(["display:flex;flex-wrap:wrap;margin:0 auto var(--2xl) var(--2xl);"]),f=function(e){var t=e.href,a=e.korDate,n=e.post.frontmatter,r=n.title,s=n.description,f=n.date,u=n.tags;return(0,i.jsxs)(c,{children:[(0,i.jsx)(o.Z,{href:t,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(p,{children:r}),(0,i.jsx)(g,{children:s}),(0,i.jsx)(h,{dateTime:f,children:a})]})}),(0,i.jsx)(m,{children:null!=u&&u.map((function(e){return(0,i.jsx)(d,{text:e},e)}))})]})},u=function(e){var t=e.category,a=e.post,r=a.frontmatter.date,o=a.slug,d=(0,n.Z)(new Date(r),"yyyy\ub144 MM\uc6d4 dd\uc77c");return(0,i.jsx)(x,{children:(0,i.jsx)(f,{korDate:d,href:"/".concat(t,"/").concat(o),post:a})})},x=r.ZP.li.withConfig({displayName:"ListRow__StyledPostList",componentId:"sc-p8fg4v-0"})([""]),w=function(e){var t=e.posts,a=e.category,n=(e.prevPath,e.nextPath,a.toLowerCase());return(0,i.jsx)(v,{children:(0,i.jsx)(y,{children:t.map((function(e){return(0,i.jsx)(u,{category:n,post:e},e.slug)}))})})},v=r.ZP.main.withConfig({displayName:"ListLayout__StyledMain",componentId:"sc-272lnf-0"})([""]),y=r.ZP.ul.withConfig({displayName:"ListLayout__PostUl",componentId:"sc-272lnf-1"})(["margin:30px auto;display:grid;grid-gap:24px;list-style:none;@media (min-width:","){grid-template-columns:repeat(2,1fr);}"],(function(e){return e.theme.device.sm}))},8438:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return p},default:function(){return g}});var n=a(6150),r=a(348),o=a(7108),i=a(5893),d=function(e){var t=e.pageNm,a=e.desc;return(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{children:t}),(0,i.jsx)(l,{children:a})]})},s=o.ZP.div.withConfig({displayName:"PageHeader__StyledPageHeader",componentId:"sc-1yqhkxn-0"})(["padding:var(--md) 0;"]),c=o.ZP.h1.withConfig({displayName:"PageHeader__PageName",componentId:"sc-1yqhkxn-1"})(["font-size:var(--5xl);font-weight:800;@media (max-width:","){margin:var(--md) 0;}"],(function(e){return e.theme.device.md})),l=o.ZP.h3.withConfig({displayName:"PageHeader__PageDesc",componentId:"sc-1yqhkxn-2"})(["color:var(--hover-color);@media (max-width:","){margin:var(--md) 0;}"],(function(e){return e.theme.device.md})),p=!0,g=function(e){var t=e.posts,a=e.tag,o=e.pageNo,s=(e.hasNextPage,a.toUpperCase()),c={title:"".concat(s," : \uac1c\ubc1c\uc790 \ubc15\ud558\uc740")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{customMeta:c}),(0,i.jsx)(d,{pageNm:s,desc:"'".concat(s,"'\uc5d0 \uad00\ud55c \uae00\ub4e4\uc744 \ubaa8\uc544\ubd24\uc5b4\uc694.")}),(0,i.jsx)(n.Z,{posts:t,category:"blog",pageNo:o,nextPath:"/tags/".concat(a,"/pages/").concat(o+1),prevPath:"/tags/".concat(a,"/pages/").concat(o-1)})]})}},9191:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]/pages/[keyword]",function(){return a(8438)}])}},function(e){e.O(0,[582,774,888,179],(function(){return t=9191,e(e.s=t);var t}));var t=e.O();_N_E=t}]);