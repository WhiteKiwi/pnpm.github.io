"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2678],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9636:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>m});var r=n(9518),o=n(7344),i=(n(9496),n(9613)),l=["components"],a={id:"git",title:"Travailler avec Git"},s=void 0,c={unversionedId:"git",id:"version-6.x/git",title:"Travailler avec Git",description:"Lockfiles",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/git.md",sourceDirName:".",slug:"/git",permalink:"/fr/git",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"git",title:"Travailler avec Git"},sidebar:"version-6.x/docs",previous:{title:"Only allow pnpm",permalink:"/fr/only-allow-pnpm"},next:{title:"Feature Comparison",permalink:"/fr/feature-comparison"}},p=[{value:"Lockfiles",id:"lockfiles",children:[{value:"Fusionner les conflits",id:"fusionner-les-conflits",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lockfiles"},"Lockfiles"),(0,i.kt)("p",null,"Vous devez toujours commit le lockfile (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). Ceci pour une multitude de raisons, la principale \xe9tant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"il permet une installation plus rapide pour les environnements CI et de production, en raison de sa capacit\xe9 de passer la r\xe9solution du package"),(0,i.kt)("li",{parentName:"ul"},"il impose des installations et des r\xe9solutions coh\xe9rentes entre les environnements de d\xe9veloppement, de test et de production, ce qui signifie que les packages utilis\xe9s dans les tests et en production seront exactement les m\xeames lors du d\xe9veloppement du projet")),(0,i.kt)("h3",{id:"fusionner-les-conflits"},"Fusionner les conflits"),(0,i.kt)("p",null,"pnpm peut r\xe9soudre automatiquement les conflits de fusion dans ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Si vous avez des conflits, ex\xe9cutez simplement ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," et commitez les modifications."),(0,i.kt)("p",null,"Soyez toutefois averti. Il est conseill\xe9 de v\xe9rifier les modifications avant d'effectuer un commit, parce que nous ne pouvons pas garantir que pnpm choisira la bonne base - elle se construit avec les lockfiles les plus \xe0 jour, ce qui est id\xe9al dans la plupart des cas."))}m.isMDXComponent=!0}}]);