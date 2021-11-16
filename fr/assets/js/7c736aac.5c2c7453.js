"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6912],{9613:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(9496);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),o=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=o(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,p=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=o(n),d=l,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||p;return n?t.createElement(v,i(i({ref:r},u),{},{components:n})):t.createElement(v,i({ref:r},u))}));function d(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var p=n.length,i=new Array(p);i[0]=c;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var o=2;o<p;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3842:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>o,toc:()=>u,default:()=>c});var t=n(2245),l=n(5903),p=(n(9496),n(9613)),i=["components"],a={id:"uninstall",title:"D\xe9sinstaller pnpm"},s=void 0,o={unversionedId:"uninstall",id:"version-6.x/uninstall",isDocsHomePage:!1,title:"D\xe9sinstaller pnpm",description:"Supprimer globalement les paquets install\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/fr/uninstall",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"uninstall",title:"D\xe9sinstaller pnpm"},sidebar:"version-6.x/docs",previous:{title:"How peers are resolved",permalink:"/fr/how-peers-are-resolved"}},u=[{value:"Supprimer globalement les paquets install\xe9s",id:"supprimer-globalement-les-paquets-install\xe9s",children:[],level:2},{value:"Supprimer l&#39;interface de commande de pnpm",id:"supprimer-linterface-de-commande-de-pnpm",children:[],level:2},{value:"Supprimer la m\xe9moire d&#39;adressage globale",id:"supprimer-la-m\xe9moire-dadressage-globale",children:[],level:2},{value:"Supprimer le fichier d&#39;\xe9tat",id:"supprimer-le-fichier-d\xe9tat",children:[],level:2}],m={toc:u};function c(e){var r=e.components,n=(0,l.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"supprimer-globalement-les-paquets-install\xe9s"},"Supprimer globalement les paquets install\xe9s"),(0,p.kt)("p",null,"Avant de supprimer la CLI pnpm, il peut \xeatre judicieux de supprimer tous les packages globaux install\xe9s par pnpm."),(0,p.kt)("p",null,"Pour r\xe9pertorier tous les packages globaux, ex\xe9cutez ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Il existe deux mani\xe8res de supprimer les packages globaux\xa0:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," avec chaque package global r\xe9pertori\xe9."),(0,p.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," pour trouver l'emplacement du r\xe9pertoire global et supprimez-le manuellement.")),(0,p.kt)("h2",{id:"supprimer-linterface-de-commande-de-pnpm"},"Supprimer l'interface de commande de pnpm"),(0,p.kt)("p",null,"Si vous avez utilis\xe9 le script autonome pour installer pnpm (ou npx), vous devriez pouvoir d\xe9sinstaller la CLI pnpm en utilisant\xa0:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,p.kt)("p",null,"Si vous avez utilis\xe9 npm pour installer pnpm, vous devez utiliser npm pour d\xe9sinstaller pnpm\xa0:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,p.kt)("h2",{id:"supprimer-la-m\xe9moire-dadressage-globale"},"Supprimer la m\xe9moire d'adressage globale"),(0,p.kt)("p",null,"Si vous avez utilis\xe9 pnpm uniquement sur le disque principal, vous disposerez d'un magasin global dans le r\xe9pertoire de base. Alors supprimez-le simplement via:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,p.kt)("p",null,"Si vous avez utilis\xe9 pnpm sur des disques non principaux, le magasin se trouve \xe0 la racine de ce disque. Par exemple, si vous avez utilis\xe9 pnpm sur le disque ",(0,p.kt)("inlineCode",{parentName:"p"},"D:")," sous Windows, supprimez le magasin de ",(0,p.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,p.kt)("h2",{id:"supprimer-le-fichier-d\xe9tat"},"Supprimer le fichier d'\xe9tat"),(0,p.kt)("p",null,"pnpm sauvegarde quelques \xe9tats dans ",(0,p.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". Vous devez supprimer ce fichier."))}c.isMDXComponent=!0}}]);