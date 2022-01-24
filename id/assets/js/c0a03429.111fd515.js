"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[697],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var r=n(9518),o=n(7344),i=(n(9496),n(9613)),a=["components"],l={id:"completion",title:"Command line tab-completion"},p=void 0,c={unversionedId:"completion",id:"version-5.x/completion",title:"Command line tab-completion",description:"Added in: v4.9.0",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-5.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/id/5.x/completion",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"5.x",frontMatter:{id:"completion",title:"Command line tab-completion"},sidebar:"version-5.x/docs",previous:{title:"Aliases",permalink:"/id/5.x/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/id/5.x/using-changesets"}},s=[],m={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v4.9.0"),(0,i.kt)("p",null,"Unlike other popular package managers, which usually require plugins, pnpm supports command line tab-completion for Bash, Zsh, Fish, and similar shells."),(0,i.kt)("p",null,"To setup autocompletion, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,i.kt)("p",null,"The CLI will ask for which shell to generate the autocompletion script. Alternatively, the target shell may be specified in the command line (since v5.15.0):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,i.kt)("p",null,"To see examples of completion, read ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"this article"),"."))}u.isMDXComponent=!0}}]);