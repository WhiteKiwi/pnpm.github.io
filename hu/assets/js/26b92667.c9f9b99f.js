"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1135],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=c(r),h=l,f=s["".concat(p,".").concat(h)]||s[h]||u[h]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6321:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>s});var n=r(9518),l=r(7344),i=(r(9496),r(9613)),o=["components"],a={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"version-6.x/cli/why",title:"pnpm why",description:"Shows all packages that depend on the specified package.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-6.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/hu/cli/why",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"6.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-6.x/docs",previous:{title:"pnpm outdated",permalink:"/hu/cli/outdated"},next:{title:"pnpm run",permalink:"/hu/cli/run"}},d=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--long",id:"--long",children:[],level:3},{value:"--parseable",id:"--parseable",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Shows all packages that depend on the specified package."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Added in: 3.7.0"),(0,i.kt)("p",null,"Show information in JSON format."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Show verbose output."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"Show parseable output instead of tree view."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Only display the dependency tree for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only display the dependency tree for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/hu/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);