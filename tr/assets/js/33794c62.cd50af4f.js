"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6749],{9613:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>k});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),k=a,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6462:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var n=t(9518),a=t(7344),l=(t(9496),t(9613)),i=["components"],o={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"cli/remove",title:"pnpm remove",description:"Ayr\u0131ca: rm, uninstall, un",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/tr/next/cli/remove",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"docs",previous:{title:"pnpm update",permalink:"/tr/next/cli/update"},next:{title:"pnpm link",permalink:"/tr/next/cli/link"}},d=[{value:"Ayarlar",id:"ayarlar",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--save-dev, -D",id:"--save-dev--d",children:[],level:3},{value:"--save-optional, -O",id:"--save-optional--o",children:[],level:3},{value:"--save-prod, -P",id:"--save-prod--p",children:[],level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[],level:3}],level:2}],s={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ayr\u0131ca: rm, uninstall, un"),(0,l.kt)("p",null,"Belirtilen paketleri/k\xfct\xfcphaneleri, projenin ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," dosyas\u0131ndan ve ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r\xfcnden kald\u0131r\u0131r."),(0,l.kt)("h2",{id:"ayarlar"},"Ayarlar"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Belirtilen paketleri/k\xfct\xfcphaneleri, ",(0,l.kt)("a",{parentName:"p",href:"/tr/next/workspaces"},"workspace (\xe7al\u0131\u015fma alan\u0131)")," i\xe7erisindeki projelerden/paketlerden kald\u0131r\u0131r."),(0,l.kt)("p",null,"Workspace i\xe7erisinde kullan\u0131lmad\u0131\u011f\u0131 takdirde belirtilen paketi/k\xfct\xfcphaneyi (birden fazla da olabilir), alt klas\xf6rlerdeki t\xfcm projelerden kald\u0131r\u0131r."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Global olarak y\xfcklenen paketi/k\xfct\xfcphaneyi (birden fazla da olabilir) kald\u0131r\u0131r."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"Belirtilen paket/k\xfct\xfcphane ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131nda tan\u0131ml\u0131ysa kald\u0131r\u0131r."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"Belirtilen paket/k\xfct\xfcphane ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131nda tan\u0131ml\u0131ysa kald\u0131r\u0131r."),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"Belirtilen paket/k\xfct\xfcphane ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," k\u0131sm\u0131nda tan\u0131ml\u0131ysa kald\u0131r\u0131r."),(0,l.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/tr/next/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}u.isMDXComponent=!0}}]);