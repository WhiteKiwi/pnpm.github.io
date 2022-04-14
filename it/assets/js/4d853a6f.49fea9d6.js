"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3907],{9613:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=t(2182),i=t(9028),o=(t(9496),t(9613)),a=["components"],p={id:"configuring",title:"Configurazione"},c=void 0,s={unversionedId:"configuring",id:"configuring",title:"Configurazione",description:"pnpm usa i formati di configurazione di npm. Quindi, dovresti impostare la configurazione nello stesso modo in cui faresti per npm. Ad esempio,",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/it/next/configuring",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"configuring",title:"Configurazione"},sidebar:"docs",previous:{title:"CLI di pnpm",permalink:"/it/next/pnpm-cli"},next:{title:"Filtraggio",permalink:"/it/next/filtering"}},l={},u=[],m={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm usa ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"i formati di configurazione di npm"),". Quindi, dovresti impostare la configurazione nello stesso modo in cui faresti per npm. Ad esempio,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,o.kt)("p",null,"Se non \xe8 configurato nessun archivio, pnpm creer\xe0 automaticamente un archivio sulla stessa unit\xe0. Se hai bisogno di pnpm per lavorare su pi\xf9 dischi rigidi o filesystem, leggi ",(0,o.kt)("a",{parentName:"p",href:"/it/next/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"le FAQ"),"."),(0,o.kt)("p",null,"Inoltre, pnpm utilizza la stessa configurazione utilizzata da npm per eseguire installazioni. Se si dispone di un registro privato e npm \xe8 configurato per funzionare con esso, pnpm dovrebbe essere in grado di autorizzare anche le richieste, senza nessuna configurazione aggiuntiva."),(0,o.kt)("p",null,"Oltre a queste opzioni, pnpm ti consente anche di utilizzare tutti i parametri che sono flag (ad esempio ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter")," o ",(0,o.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") come opzioni:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,o.kt)("p",null,"Vedi il comando ",(0,o.kt)("a",{parentName:"p",href:"/it/next/cli/config"},(0,o.kt)("inlineCode",{parentName:"a"},"config"))," per maggiori informazioni."))}f.isMDXComponent=!0}}]);