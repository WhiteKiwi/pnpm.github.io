"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4102],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=i,v=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2324:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>s});var r=t(9518),i=t(7344),o=(t(9496),t(9613)),a=["components"],p={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"version-6.x/cli/prune",title:"pnpm prune",description:"Rimuove i pacchetti non necessari.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/it/cli/prune",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-6.x/docs",previous:{title:"pnpm rebuild",permalink:"/it/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/it/cli/fetch"}},u=[{value:"Opzioni",id:"opzioni",children:[{value:"--prod",id:"--prod",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3}],level:2}],d={toc:u};function s(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rimuove i pacchetti non necessari."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--prod"},"--prod"),(0,o.kt)("p",null,"Rimuove i pacchetti specificati nelle dipendenze di sviluppo (",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Rimuove i pacchetti specificati nelle dipendenze facoltative (",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Il comando prune non supporta attualmente l'esecuzione ricorsiva su un monorepo. Per installare solo le dipendenze di produzione in un monorepo le cartelle ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," possono essere eliminate e poi reinstallate con ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),"."))))}s.isMDXComponent=!0}}]);