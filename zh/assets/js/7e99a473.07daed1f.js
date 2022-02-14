"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3350],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=c(t),m=l,k=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return t?r.createElement(k,p(p({ref:n},d),{},{components:t})):r.createElement(k,p({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,p=new Array(i);p[0]=s;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,p[1]=a;for(var c=2;c<i;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9078:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>c,toc:()=>d,default:()=>s});var r=t(9518),l=t(7344),i=(t(9496),t(9613)),p=["components"],a={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"\u5728\u9879\u76ee\u8303\u56f4\u5185\u6267\u884c shell \u547d\u4ee4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/zh/cli/exec",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/zh/cli/test"},next:{title:"pnpm dlx",permalink:"/zh/cli/dlx"}},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"--recursive, -r",id:"--recursive--r",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",children:[],level:4}],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:d};function s(e){var n=e.components,t=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u8303\u56f4\u5185\u6267\u884c shell \u547d\u4ee4\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"\uff0c\u56e0\u6b64 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \u5141\u8bb8\u6267\u884c\u4f9d\u8d56\u9879\u7684\u547d\u4ee4\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5c06 Jest \u4f5c\u4e3a\u9879\u76ee\u7684\u4f9d\u8d56\u9879\uff0c\u5219\u65e0\u9700\u5168\u5c40\u5b89\u88c5 Jest\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u8fd0\u884c\u5b83\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,i.kt)("p",null,"\u5f53\u547d\u4ee4\u4e0e\u5185\u7f6e pnpm \u547d\u4ee4\u4e0d\u51b2\u7a81\u65f6\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," \u90e8\u5206\u5b9e\u9645\u4e0a\u662f\u53ef\u9009\u7684\uff0c\u56e0\u6b64\u60a8\u4e5f\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.9.0"),(0,i.kt)("p",null,"\u5728\u5de5\u4f5c\u533a\u7684\u6bcf\u4e2a\u9879\u76ee\u4e2d\u6267\u884c shell \u547d\u4ee4\u3002"),(0,i.kt)("p",null,"\u5f53\u524d\u8f6f\u4ef6\u5305\u7684\u540d\u79f0\u53ef\u901a\u8fc7\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (\u7531 pnpm v2.22.0 \u63d0\u4f9b\u652f\u6301)\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,i.kt)("p",null,"Prune ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,i.kt)("p",null,"View package information for all packages. This should be used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.1.0"),(0,i.kt)("p",null,"\u5b8c\u5168\u5ffd\u7565\u5e76\u53d1\u548c\u62d3\u6251\u6392\u5e8f\uff0c\u5728\u6240\u6709\u5339\u914d\u7684\u5305\u4e2d\u7acb\u5373\u8fd0\u884c\u7ed9\u5b9a\u7684\u811a\u672c \u4e0e\u524d\u7f00\u6d41\u8f93\u51fa\u3002 \u8fd9\u662f\u4e2a\u63a8\u8350\u7684\u6807\u5fd7\uff0c\u7528\u4e8e\u5728\u8bb8\u591a",(0,i.kt)("inlineCode",{parentName:"p"}," packages"),"\u4e0a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u4f8b\u5982\u5197\u957f\u7684\u6784\u5efa\u8fdb\u7a0b\u3002"),(0,i.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,i.kt)("p",null,"Added in: v6.31.0"),(0,i.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}s.isMDXComponent=!0}}]);