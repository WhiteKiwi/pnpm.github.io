"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8415],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),y=a,f=u["".concat(l,".").concat(y)]||u[y]||m[y]||p;return t?n.createElement(f,o(o({ref:r},s),{},{components:t})):n.createElement(f,o({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},858:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>i,toc:()=>s,default:()=>u});var n=t(9518),a=t(7344),p=(t(9496),t(9613)),o=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},l=void 0,i={unversionedId:"pnpm-workspace_yaml",id:"version-5.x/pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml \u5b9a\u4e49\u4e86 \u5de5\u4f5c\u7a7a\u95f4 \u7684\u6839\u76ee\u5f55\uff0c\u5e76\u80fd\u591f\u4f7f\u60a8\u4ece\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5305\u542b / \u6392\u9664\u76ee\u5f55 \u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5b50\u76ee\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/zh/5.x/pnpm-workspace_yaml",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-5.x/docs",previous:{title:".npmrc",permalink:"/zh/5.x/npmrc"},next:{title:"pnpmfile.js",permalink:"/zh/5.x/pnpmfile"}},s=[],m={toc:s};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," \u5b9a\u4e49\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"/zh/5.x/workspaces"},"\u5de5\u4f5c\u7a7a\u95f4")," \u7684\u6839\u76ee\u5f55\uff0c\u5e76\u80fd\u591f\u4f7f\u60a8\u4ece\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5305\u542b / \u6392\u9664\u76ee\u5f55 \u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5b50\u76ee\u5f55\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),(0,p.kt)("p",null,"\u5373\u4f7f\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u76ee\u5f55\u4f4d\u7f6e\u901a\u914d\u7b26\uff0c\u6839\u76ee\u5f55\u4e0b\u7684package\u76ee\u5f55\u4e5f\u603b\u662f\u88ab\u5305\u542b."))}u.isMDXComponent=!0}}]);