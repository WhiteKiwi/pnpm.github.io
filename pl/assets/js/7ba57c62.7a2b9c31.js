"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1575],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=c(n),v=i,m=s["".concat(p,".").concat(v)]||s[v]||u[v]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4010:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>s});var r=n(9518),i=n(7344),l=(n(9496),n(9613)),o=["components"],a={id:"audit",title:"pnpm audit"},p=void 0,c={unversionedId:"cli/audit",id:"version-5.x/cli/audit",title:"pnpm audit",description:"Added in: 4.3.0",source:"@site/i18n/pl/docusaurus-plugin-content-docs/version-5.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/pl/5.x/cli/audit",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"5.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-5.x/docs",previous:{title:"pnpm install-test",permalink:"/pl/5.x/cli/install-test"},next:{title:"pnpm list",permalink:"/pl/5.x/cli/list"}},d=[{value:"Opcje",id:"opcje",children:[{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Added in: 4.3.0"),(0,l.kt)("p",null,"Sprawdza znane problemy z zabezpieczeniami zainstalowanych pakiet\xf3w."),(0,l.kt)("h2",{id:"opcje"},"Opcje"),(0,l.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"low"),", ",(0,l.kt)("strong",{parentName:"li"},"moderate"),", ",(0,l.kt)("strong",{parentName:"li"},"high"),", ",(0,l.kt)("strong",{parentName:"li"},"critical")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"low"))),(0,l.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Output audit report in JSON format."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Only audit dev dependencies."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Only audit production dependencies."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Don't audit ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}s.isMDXComponent=!0}}]);