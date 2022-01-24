"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1116],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),k=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=k(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=k(t),u=r,d=m["".concat(i,".").concat(u)]||m[u]||c[u]||p;return t?a.createElement(d,l(l({ref:n},s),{},{components:t})):a.createElement(d,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var k=2;k<p;k++)l[k]=t[k];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7577:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>k,toc:()=>s,default:()=>m});var a=t(9518),r=t(7344),p=(t(9496),t(9613)),l=["components"],o={id:"workspaces",title:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"},i=void 0,k={unversionedId:"workspaces",id:"version-5.x/workspaces",title:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9",description:"pnpm \u306b\u306f\u3001\u30e2\u30ce\u30ea\u30dd\u30b8\u30c8\u30ea\uff08\u5225\u540d\u3001\u30de\u30eb\u30c1\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30dd\u30b8\u30c8\u30ea\u3001\u307e\u305f\u306f\u30e2\u30ce\u30ea\u30b7\u30c3\u30af\u30ea\u30dd\u30b8\u30c8\u30ea\uff09\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u3066\u3001\u5358\u4e00\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u5185\u3067\u8907\u6570\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7d71\u5408\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-5.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/ja/5.x/workspaces",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",frontMatter:{id:"workspaces",title:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"},sidebar:"version-5.x/docs",previous:{title:"pnpmfile.js",permalink:"/ja/5.x/pnpmfile"},next:{title:"\u30a8\u30a4\u30ea\u30a2\u30b9",permalink:"/ja/5.x/aliases"}},s=[{value:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb (workspace:)",id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb-workspace",children:[{value:"\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4ecb\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53c2\u7167",id:"\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4ecb\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53c2\u7167",children:[],level:3},{value:"\u76f8\u5bfe\u30d1\u30b9\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53c2\u7167\u3059\u308b",id:"\u76f8\u5bfe\u30d1\u30b9\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53c2\u7167\u3059\u308b",children:[],level:3},{value:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b",id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b",children:[],level:3}],level:2},{value:"\u30ea\u30ea\u30fc\u30b9\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",id:"\u30ea\u30ea\u30fc\u30b9\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",children:[],level:2},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[],level:3},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[],level:3},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[],level:3},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[],level:3}],level:2}],c={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm \u306b\u306f\u3001\u30e2\u30ce\u30ea\u30dd\u30b8\u30c8\u30ea\uff08\u5225\u540d\u3001\u30de\u30eb\u30c1\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30dd\u30b8\u30c8\u30ea\u3001\u307e\u305f\u306f\u30e2\u30ce\u30ea\u30b7\u30c3\u30af\u30ea\u30dd\u30b8\u30c8\u30ea\uff09\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u3066\u3001\u5358\u4e00\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u5185\u3067\u8907\u6570\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7d71\u5408\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30eb\u30fc\u30c8\u306b ",(0,p.kt)("a",{parentName:"p",href:"/ja/5.x/pnpm-workspace_yaml"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u307e\u305f\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u306f\u30eb\u30fc\u30c8\u306b ",(0,p.kt)("a",{parentName:"p",href:"/ja/5.x/npmrc"},(0,p.kt)("inlineCode",{parentName:"a"},".npmrc"))," \u3092\u7f6e\u304f\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb-workspace"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb (workspace:)"),(0,p.kt)("p",null,"Supported since v3.7.0."),(0,p.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u5ba3\u8a00\u3055\u308c\u305f\u7bc4\u56f2\u3068\u4e00\u81f4\u3059\u308b\u5834\u5408\u3001 pnpm \u306f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30ea\u30f3\u30af\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u306f\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," \u3092\u4f9d\u5b58\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u3066\u3044\u308b ",(0,p.kt)("inlineCode",{parentName:"p"},"bar")," \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"bar")," \u304c\u4f9d\u5b58\u3068\u3057\u3066 ",(0,p.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," \u3092\u5b9a\u7fa9\u3057\u3066\u3082\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5074\u306b\u306a\u3051\u308c\u3070\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u52d5\u4f5c\u306f\u3044\u304f\u3064\u304b\u306e\u4e0d\u78ba\u5b9f\u6027\u3092\u3082\u305f\u3089\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,"Luckily, pnpm supports the ",(0,p.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol (the same as in Yarn v2). \u3053\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001 pnpm \u306f \u30ed\u30fc\u30ab\u30eb\u306b\u3042\u308b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u4ee5\u5916\u306e\u3082\u306e\u306b\u89e3\u6c7a\u3055\u308c\u308b\u3053\u3068\u3092\u7981\u6b62\u3057\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),"\u3092\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u4eca\u56de\u306f ",(0,p.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," \u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u5931\u6557\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u306f\u3001 ",(0,p.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u7279\u306b\u4fbf\u5229\u3067\u3059\u3002 \u3053\u306e\u5834\u5408\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"workspace:")," \u30d7\u30ed\u30c8\u30b3\u30eb\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u3001pnpm \u306f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30ea\u30f3\u30af\u3057\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4ecb\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53c2\u7167"},"\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4ecb\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53c2\u7167"),(0,p.kt)("p",null,"Added in 5.12.0"),(0,p.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," \u3068\u3044\u3046\u540d\u524d\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u3042\u308b\u3068\u3057\u307e\u3059\u3002 \u901a\u5e38\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"')," \u3068\u3057\u3066\u53c2\u7167\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u5225\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u69cb\u6587\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059: ",(0,p.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,p.kt)("p",null,"\u516c\u958b\u3059\u308b\u524d\u306b\u3001\u30a8\u30a4\u30ea\u30a2\u30b9\u306f\u901a\u5e38\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3055\u308c\u305f\u4f9d\u5b58\u95a2\u4fc2\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002 \u4e0a\u8a18\u306e\u4f8b\u306f ",(0,p.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"')," \u306b\u306a\u308a\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"\u76f8\u5bfe\u30d1\u30b9\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53c2\u7167\u3059\u308b"},"\u76f8\u5bfe\u30d1\u30b9\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53c2\u7167\u3059\u308b"),(0,p.kt)("p",null,"Added in 5.12.0"),(0,p.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b 2 \u3064\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u3042\u308b\u3068\u3057\u307e\u3059:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"bar")," \u306f ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," \u3092\u4f9d\u5b58\u3068\u3057\u3066 ",(0,p.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"')," \u3068\u5ba3\u8a00\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u516c\u958b\u3059\u308b\u524d\u306b\u3001\u3053\u308c\u3089\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u306f\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u901a\u5e38\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b"),(0,p.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c (",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm pack")," \u3084 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u306a\u3069\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066) \u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u306b\u30d1\u30c3\u30af\u3055\u308c\u308b\u969b\u306b\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"workspace:")," \u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u66f8\u304b\u308c\u305f\u4f9d\u5b58\u95a2\u4fc2\u3092\u6b21\u306e\u3088\u3046\u306b\u5909\u63db\u3057\u307e\u3059\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,p.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,p.kt)("li",{parentName:"ul"},"\u5bfe\u5fdc\u3059\u308b semver \u306e\u7bc4\u56f2\u6307\u5b9a (\u305d\u306e\u4ed6\u306e\u7bc4\u56f2\u6307\u5b9a\u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408)")),(0,p.kt)("p",null,"So for example, if we have a workspace package at version ",(0,p.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:^1.2.3"\n    }\n}\n')),(0,p.kt)("p",null,"\u3053\u308c\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "^1.2.3"\n    }\n}\n')),(0,p.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u306b\u3088\u308a\u3001\u30ed\u30fc\u30ab\u30eb\u306b\u3042\u308b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u4f9d\u5b58\u3059\u308b\u6307\u5b9a\u3092\u4f7f\u7528\u3057\u306a\u304c\u3089\u3001\u6700\u7d42\u7684\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u516c\u958b\u3059\u308b\u969b\u306b\u8ffd\u52a0\u306e\u5909\u63db\u30b9\u30c6\u30c3\u30d7\u3092\u631f\u3080\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3059\u3002\u3042\u306a\u305f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f7f\u7528\u8005\u306f\u3001\u516c\u958b\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u306a\u3093\u3089\u5909\u308f\u3089\u306a\u3044\u3088\u3046\u306b\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u3001semver \u306e\u6307\u5b9a\u306b\u3088\u308b\u4fdd\u8a3c\u3092\u53d7\u3051\u7d9a\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"\u30ea\u30ea\u30fc\u30b9\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"},"\u30ea\u30ea\u30fc\u30b9\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"),(0,p.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0\u306f\u8907\u96d1\u306a\u30bf\u30b9\u30af\u3067\u3042\u308a\u3001\u73fe\u6642\u70b9\u3067\u306f pnpm \u306f\u7d44\u307f\u8fbc\u307f\u306e\u89e3\u6c7a\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u305b\u3093\u3002 \u3057\u304b\u3057\u3001\u6b21\u306e 2 \u3064\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0\u3092\u6271\u3046 pnpm \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u305f\u3001\u3088\u304f\u30c6\u30b9\u30c8\u3055\u308c\u305f\u30c4\u30fc\u30eb\u3067\u3059\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,p.kt)("p",null,"Rush \u3092\u4f7f\u7528\u3057\u3066\u30ec\u30dd\u30b8\u30c8\u30ea\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,p.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"\u3053\u3061\u3089\u306e\u30da\u30fc\u30b8 (\u82f1\u8a9e)")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,p.kt)("p",null,"Changeset \u3092 pnpm \u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,p.kt)("a",{parentName:"p",href:"/ja/5.x/using-changesets"},"\u3053\u3061\u3089\u306e\u30ac\u30a4\u30c9")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,p.kt)("p",null,"Added in: v2.14.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},"true")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"true"),", ",(0,p.kt)("strong",{parentName:"li"},"false"),", ",(0,p.kt)("strong",{parentName:"li"},"deep"))),(0,p.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30ed\u30fc\u30ab\u30eb\u3067\u5229\u7528\u53ef\u80fd\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u305b\u305a\u306b ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u3078\u3068\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306f\u30e2\u30ce\u30ec\u30dd\u3067\u975e\u5e38\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002 \u9593\u63a5\u7684\u306a\u4f9d\u5b58\u95a2\u4fc2\u306b\u3082\u30ed\u30fc\u30ab\u30eb\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30ea\u30f3\u30af\u3059\u308b\u5834\u5408\u306f\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"deep")," \u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 (v5\u4ee5\u964d)"),(0,p.kt)("p",null,"\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306b\u306f\u3001\u4f9d\u5b58\u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306f ",(0,p.kt)("inlineCode",{parentName:"p"},"workspace:")," \u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u7bc4\u56f2\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u30ea\u30f3\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.13.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u3042\u308b\u5834\u5408\u3067\u3082\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306e\u30ed\u30fc\u30ab\u30eb\u306b\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u512a\u5148\u3055\u308c\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u306f\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3067 ",(0,p.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol")," \u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u306e\u307f\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.17.0 \u3067 ",(0,p.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")," \u3068\u3057\u3066\u8ffd\u52a0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},"true")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001pnpm \u306f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30eb\u30fc\u30c8\u306e ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u306e\u307f\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u3059\u3079\u3066\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u4f9d\u5b58\u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30eb\u30fc\u30c8\u306e  ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u3053\u306e\u4e00\u7b87\u6240\u306b\u96c6\u3081\u3089\u308c\u307e\u3059\u3002(\u305d\u3057\u3066\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u306e ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3078\u3068\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002)"),(0,p.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5229\u70b9:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5404\u4f9d\u5b58\u306e\u4e00\u7b87\u6240\u3078\u306e\u8a2d\u7f6e"),(0,p.kt)("li",{parentName:"ul"},"\u3088\u308a\u9ad8\u901f\u306a\u30e2\u30ce\u30ec\u30dd\u3067\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,p.kt)("li",{parentName:"ul"},"\u4e00\u7b87\u6240\u306b\u3059\u3079\u3066\u8a18\u8ff0\u3055\u308c\u3001\u3088\u308a\u5c11\u306a\u3044\u30b3\u30fc\u30c9\u30ec\u30d3\u30e5\u30fc\u6642\u306e\u5909\u66f4")),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u305f\u3068\u3048\u30eb\u30fc\u30c8\u306e ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306b\u3059\u3079\u3066\u306e\u4f9d\u5b58\u304c\u30cf\u30fc\u30c9\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u3066\u3082\u3001\u5404\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u305d\u306e ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u5b9a\u7fa9\u3055\u308c\u305f\u4f9d\u5b58\u306b\u3057\u304b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u308c\u306b\u3088\u308a\u3001 pnpm \u306e\u53b3\u5bc6\u6027\u306f\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306f\u524d\u8ff0\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u306b\u3088\u308b\u3082\u306e\u3067\u3059\u3002"))),(0,p.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},"true")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u65b0\u3057\u3044\u4f9d\u5b58\u306f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u5b58\u5728\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u89e3\u91c8\u3067\u304d\u306a\u3044\u5834\u5408\u306b\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092 ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," \u306b\u3057\u307e\u3059\u3002(\u307e\u305f\u3001\u5c06\u6765\u7684\u306b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u305d\u306e\u30c4\u30fc\u30eb\u306b PR \u3092\u9001\u308b\u3053\u3068\u3082\u7406\u60f3\u7684\u3067\u3059\u3002)"))}m.isMDXComponent=!0}}]);