"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[291],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,l=new Array(p);l[0]=u;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<p;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=t(2182),o=t(9028),p=(t(9496),t(9613)),l=["components"],a={id:"uninstall",title:"pnpm \uc0ad\uc81c"},i=void 0,s={unversionedId:"uninstall",id:"version-7.x/uninstall",title:"pnpm \uc0ad\uc81c",description:"\uc804\uc5ed\uc73c\ub85c \uc124\uce58\ub41c \ud328\ud0a4\uc9c0 \uc0ad\uc81c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/ko/uninstall",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"uninstall",title:"pnpm \uc0ad\uc81c"},sidebar:"version-7.x/docs",previous:{title:"How peers are resolved",permalink:"/ko/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/ko/pnpm-vs-npm"}},c={},m=[{value:"\uc804\uc5ed\uc73c\ub85c \uc124\uce58\ub41c \ud328\ud0a4\uc9c0 \uc0ad\uc81c",id:"\uc804\uc5ed\uc73c\ub85c-\uc124\uce58\ub41c-\ud328\ud0a4\uc9c0-\uc0ad\uc81c",level:2},{value:"pnpm CLI \uc0ad\uc81c",id:"pnpm-cli-\uc0ad\uc81c",level:2},{value:"\uc804\uc5ed content-addressable store \uc0ad\uc81c",id:"\uc804\uc5ed-content-addressable-store-\uc0ad\uc81c",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\uc804\uc5ed\uc73c\ub85c-\uc124\uce58\ub41c-\ud328\ud0a4\uc9c0-\uc0ad\uc81c"},"\uc804\uc5ed\uc73c\ub85c \uc124\uce58\ub41c \ud328\ud0a4\uc9c0 \uc0ad\uc81c"),(0,p.kt)("p",null,"Before removing the pnpm CLI, it might make sense to remove all global packages that were installed by pnpm."),(0,p.kt)("p",null,"\uc804\uc5ed\uc73c\ub85c \uc124\uce58 \ub41c \ud328\ud0a4\uc9c0 \ubaa9\ub85d\uc744 \ud655\uc778 \ud558\uae30 \uc704\ud574\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),"\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc804\uc5ed \ud328\ud0a4\uc9c0\ub97c \uc0ad\uc81c\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\uac01 \ud328\ud0a4\uc9c0\ub9c8\ub2e4 ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>..."),"\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"pnpm root -g"),"\ub97c \uc2e4\ud589\ud558\uc5ec \uc804\uc5ed \ub514\ub809\ud1a0\ub9ac\uc758 \uc704\uce58\ub97c \ucc3e\uace0, \uc9c1\uc811 \uc0ad\uc81c\ud569\ub2c8\ub2e4.")),(0,p.kt)("h2",{id:"pnpm-cli-\uc0ad\uc81c"},"pnpm CLI \uc0ad\uc81c"),(0,p.kt)("p",null,"If you used the standalone script to install pnpm, then you should be able to uninstall the pnpm CLI by removing the pnpm home directory:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,p.kt)("p",null,"\uc258 \uc124\uc815\ud30c\uc77c (",(0,p.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," \ud658\uacbd\ubcc0\uc218\ub97c \uc0ad\uc81c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"npm\uc744 \ud1b5\ud574 pnpm\uc744 \uc124\uce58\ud588\ub2e4\uba74 \ub2e4\uc74c \uba85\ub839\uc73c\ub85c pnpm\uc744 \uc0ad\uc81c\ud569\ub2c8\ub2e4:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,p.kt)("h2",{id:"\uc804\uc5ed-content-addressable-store-\uc0ad\uc81c"},"\uc804\uc5ed content-addressable store \uc0ad\uc81c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,p.kt)("p",null,"If you used pnpm in non-primary disks, then you must run the above command in every disk, where pnpm was used. pnpm creates one store per disk."))}d.isMDXComponent=!0}}]);