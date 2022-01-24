"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1061],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>m,default:()=>u});var r=n(9518),l=n(7344),o=(n(9496),n(9613)),a=["components"],i={id:"uninstall",title:"pnpm'i kald\u0131rma"},p=void 0,s={unversionedId:"uninstall",id:"version-6.x/uninstall",title:"pnpm'i kald\u0131rma",description:"Removing the globally installed packages",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/tr/uninstall",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"uninstall",title:"pnpm'i kald\u0131rma"},sidebar:"version-6.x/docs",previous:{title:"How peers are resolved",permalink:"/tr/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/tr/pnpm-vs-npm"}},m=[{value:"Removing the globally installed packages",id:"removing-the-globally-installed-packages",children:[],level:2},{value:"Removing the pnpm CLI",id:"removing-the-pnpm-cli",children:[],level:2},{value:"Removing the global content-addressable store",id:"removing-the-global-content-addressable-store",children:[],level:2},{value:"Removing the state file",id:"removing-the-state-file",children:[],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"removing-the-globally-installed-packages"},"Removing the globally installed packages"),(0,o.kt)("p",null,"Before removing the pnpm CLI, it might make sense to remove all globall packages that were installed by pnpm."),(0,o.kt)("p",null,"To list all the global packages, run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". There are two ways to remove the global packages:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," with each global package listed."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," to find the location of the global directory and remove it manually.")),(0,o.kt)("h2",{id:"removing-the-pnpm-cli"},"Removing the pnpm CLI"),(0,o.kt)("p",null,"If you used the standalone script to install pnpm (or npx), then you should be able to uninstall the pnpm CLI using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,o.kt)("p",null,"If you used npm to install pnpm, then you should use npm to uninstall pnpm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,o.kt)("h2",{id:"removing-the-global-content-addressable-store"},"Removing the global content-addressable store"),(0,o.kt)("p",null,"If you used pnpm only in the primary disk, then you will have a global store in the home directory. So just remove it via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,o.kt)("p",null,"If you used pnpm in non-primary disks, then the store is in the root of that disk. For instance, if you used pnpm on disk ",(0,o.kt)("inlineCode",{parentName:"p"},"D:")," on Windows, remove the store from ",(0,o.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,o.kt)("h2",{id:"removing-the-state-file"},"Removing the state file"),(0,o.kt)("p",null,"pnpm also saves some state in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". You may remove this file."))}u.isMDXComponent=!0}}]);