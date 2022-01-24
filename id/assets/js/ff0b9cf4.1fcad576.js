"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3554],{9613:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>c});var n=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),o=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(t),c=r,u=m["".concat(d,".").concat(c)]||m[c]||k[c]||i;return t?n.createElement(u,l(l({ref:a},s),{},{components:t})):n.createElement(u,l({ref:a},s))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5584:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>o,toc:()=>s,default:()=>m});var n=t(9518),r=t(7344),i=(t(9496),t(9613)),l=["components"],p={id:"add",title:"pnpm add <pkg>"},d=void 0,o={unversionedId:"cli/add",id:"version-5.x/cli/add",title:"pnpm add <pkg>",description:"Memasang sebuah paket dan paket apapun yang bergantung padanya. Secara default, paket baru apa pun diinstal sebagai dependensi produksi.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-5.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/id/5.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"5.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-5.x/docs",previous:{title:"Filtering",permalink:"/id/5.x/filtering"},next:{title:"pnpm install",permalink:"/id/5.x/cli/install"}},s=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Lokasi paket yang didukung",id:"lokasi-paket-yang-didukung",children:[{value:"Pasang dari registri npm",id:"pasang-dari-registri-npm",children:[],level:3},{value:"Menginstal dari ruang kerja",id:"menginstal-dari-ruang-kerja",children:[],level:3},{value:"Instal dari file lokal sistem",id:"instal-dari-file-lokal-sistem",children:[],level:3},{value:"Instal dari remote tarball",id:"instal-dari-remote-tarball",children:[],level:3},{value:"Instal dari repositori Git",id:"instal-dari-repositori-git",children:[],level:3}],level:2},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[],level:3},{value:"--save-dev, -D",id:"--save-dev--d",children:[],level:3},{value:"--save-optional, -O",id:"--save-optional--o",children:[],level:3},{value:"--save-exact, -E",id:"--save-exact--e",children:[],level:3},{value:"--save-peer",id:"--save-peer",children:[],level:3},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--workspace",id:"--workspace",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],k={toc:s};function m(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Memasang sebuah paket dan paket apapun yang bergantung padanya. Secara default, paket baru apa pun diinstal sebagai dependensi produksi."),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,i.kt)("td",{parentName:"tr",align:null},"Simpan ke ",(0,i.kt)("inlineCode",{parentName:"td"},"dependensi"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,i.kt)("td",{parentName:"tr",align:null},"Simpan ke ",(0,i.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,i.kt)("td",{parentName:"tr",align:null},"Simpan ke ",(0,i.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,i.kt)("td",{parentName:"tr",align:null},"Menginstal dari tag ",(0,i.kt)("inlineCode",{parentName:"td"},"berikutnya"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Tentukan versi ",(0,i.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,i.kt)("h2",{id:"lokasi-paket-yang-didukung"},"Lokasi paket yang didukung"),(0,i.kt)("h3",{id:"pasang-dari-registri-npm"},"Pasang dari registri npm"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm menambahkan nama-paket")," akan menginstal versi terbaru ",(0,i.kt)("inlineCode",{parentName:"p"},"nama-paket")," dari ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," secara default. Untuk menginstal paket dari registri lain, Anda dapat menggunakan tautan tarball (lihat ",(0,i.kt)("a",{parentName:"p",href:"#install-from-remote-tarball"},"panduan terkait"),")."),(0,i.kt)("p",null,"Anda juga dapat memasang paket dengan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tag: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,i.kt)("li",{parentName:"ul"},"version: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,i.kt)("li",{parentName:"ul"},"rentang versi: ",(0,i.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">= 0.1.0 <0.2.0"'))),(0,i.kt)("h3",{id:"menginstal-dari-ruang-kerja"},"Menginstal dari ruang kerja"),(0,i.kt)("p",null,"Note that when adding dependencies and working within a ",(0,i.kt)("a",{parentName:"p",href:"/id/5.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,i.kt)("a",{parentName:"p",href:"/id/5.x/workspaces#link-workspace-packages"},(0,i.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,i.kt)("a",{parentName:"p",href:"/id/5.x/workspaces#workspace-ranges-workspace"},(0,i.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,i.kt)("h3",{id:"instal-dari-file-lokal-sistem"},"Instal dari file lokal sistem"),(0,i.kt)("p",null,"There are two ways to install from the local file system:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"dari berkas tarball (",(0,i.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".tar.gz"),", atau ",(0,i.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,i.kt)("li",{parentName:"ol"},"dari direktori")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,i.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,i.kt)("h3",{id:"instal-dari-remote-tarball"},"Instal dari remote tarball"),(0,i.kt)("p",null,'The argument must be a fetchable URL starting with "http://" or "https://".'),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,i.kt)("h3",{id:"instal-dari-repositori-git"},"Instal dari repositori Git"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,i.kt)("p",null,"Installs the package from the hosted Git provider, cloning it with Git. You can use a protocol for certain Git providers. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,i.kt)("p",null,"You may install from Git by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"komit terbaru dari master: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,i.kt)("li",{parentName:"ul"},"komit: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,i.kt)("li",{parentName:"ul"},"branch: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positif#master")),(0,i.kt)("li",{parentName:"ul"},"rentang versi: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Install the specified packages as regular ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Install the specified packages as ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Install the specified packages as ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,i.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,i.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,i.kt)("p",null,"Added in: v3.2.0"),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,i.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,i.kt)("p",null,"Added in: v3.6.0"),(0,i.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-W")," flag is used."),(0,i.kt)("p",null,"For instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Install a package globally."),(0,i.kt)("h3",{id:"--workspace"},"--workspace"),(0,i.kt)("p",null,"Added in: v4.4.0"),(0,i.kt)("p",null,"Only adds the new dependency if it is found in the workspace."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/5.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);