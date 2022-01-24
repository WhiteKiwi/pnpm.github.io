"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7349],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4423:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,toc:()=>u,default:()=>d});var a=n(9518),l=n(7344),r=(n(9496),n(9613)),i=["components"],p={id:"installation",title:"Installation"},o=void 0,s={unversionedId:"installation",id:"version-6.x/installation",title:"Installation",description:"Utilisation d'un script autonome",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/fr/installation",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-6.x/docs",previous:{title:"Motivation",permalink:"/fr/motivation"},next:{title:"pnpm CLI",permalink:"/fr/pnpm-cli"}},u=[{value:"Utilisation d&#39;un script autonome",id:"utilisation-dun-script-autonome",children:[{value:"Node.js n&#39;est pas pr\xe9 installer",id:"nodejs-nest-pas-pr\xe9-installer",children:[],level:3},{value:"Node.js est pr\xe9install\xe9",id:"nodejs-est-pr\xe9install\xe9",children:[],level:3}],level:2},{value:"En utilisant Homebrew",id:"en-utilisant-homebrew",children:[],level:2},{value:"Installation avec Corepack",id:"installation-avec-corepack",children:[],level:2},{value:"Using npm",id:"using-npm",children:[],level:2},{value:"Via npx resolution",id:"via-npx-resolution",children:[],level:2},{value:"Upgrading",id:"upgrading",children:[],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2},{value:"D\xe9sinstaller pnpm",id:"d\xe9sinstaller-pnpm",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"utilisation-dun-script-autonome"},"Utilisation d'un script autonome"),(0,r.kt)("h3",{id:"nodejs-nest-pas-pr\xe9-installer"},"Node.js n'est pas pr\xe9 installer"),(0,r.kt)("p",null,"Sur les syst\xe8mes POXIS, vous pouvez installer pnpm m\xeame si vous n'avez pas Node.js d'install\xe9 sur votre machine, en utilisant ce script :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"Si curl n'est pas install\xe9 sur votre machine, utiliser wget :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"On Windows (PowerShell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("p",null,"Vous pouvez utiliser la commande ",(0,r.kt)("a",{parentName:"p",href:"/fr/cli/env"},"pnpm env")," pour installer Node.js."),(0,r.kt)("h3",{id:"nodejs-est-pr\xe9install\xe9"},"Node.js est pr\xe9install\xe9"),(0,r.kt)("p",null,"Sur Linux ou macOS :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n")),(0,r.kt)("p",null,"On Windows (PowerShell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing -o pnpm.js; node pnpm.js add --global pnpm; Remove-Item pnpm.js\n")),(0,r.kt)("p",null,"Le script autonome est sign\xe9. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"Voici comment le v\xe9rifier"),"."),(0,r.kt)("h2",{id:"en-utilisant-homebrew"},"En utilisant Homebrew"),(0,r.kt)("p",null,"Si vous avez le gestionnaire de paquets install\xe9, vous pouvez installer pnpm en utilisant la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"installation-avec-corepack"},"Installation avec Corepack"),(0,r.kt)("p",null,"Depuis la v16.13, Node.js propose ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," pour la gestion des gestionnaires de packages. Il s'agit d'une fonctionnalit\xe9 exp\xe9rimentale, vous devez donc l'activer en ex\xe9cutant\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"Cela installera automatiquement pnpm sur votre syst\xe8me. Cependant, ce ne sera probablement pas la derni\xe8re version de pnpm. Pour le mettre \xe0 niveau, v\xe9rifiez quelle est la derni\xe8re version de pnpm et ex\xe9cutez\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@6.22.2 --activate\n")),(0,r.kt)("h2",{id:"using-npm"},"Using npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"via-npx-resolution"},"Via npx resolution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"upgrading"},"Upgrading"),(0,r.kt)("p",null,"Once you have installed pnpm, there is no need to use other package managers to update it. You can upgrade pnpm using itself, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/fr/continuous-integration"},"Continuous Integration"),"."))),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Si pnpm est cass\xe9 et que vous ne pouvez pas le r\xe9parer en le r\xe9installant, vous devrez peut-\xeatre le supprimer manuellement du PATH."),(0,r.kt)("p",null,"Supposons que vous ayez l'erreur suivante lors de l'ex\xe9cution de ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"Tout d'abord, essayez de trouver l'emplacement de pnpm en ex\xe9cutant: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Si vous \xeates sur Windows, ex\xe9cutez la commande dans Git Bash. Vous obtiendrez l'emplacement de la commande pnpm, par exemple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"Maintenant que vous savez o\xf9 se trouve l'interface de ligne de commande pnpm, ouvrez ce r\xe9pertoire et supprimez tous les fichiers li\xe9s \xe0 pnpm (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Une fois cela fait, installez \xe0 nouveau pnpm et cela devrait fonctionner comme pr\xe9vu."),(0,r.kt)("h2",{id:"d\xe9sinstaller-pnpm"},"D\xe9sinstaller pnpm"),(0,r.kt)("p",null,"Si vous souhaitez supprimer pnpm CLI de votre syst\xe8me ainsi que tous les fichiers \xe9crit sur votre disque dur, reportez vous \xe0 ce lien ",(0,r.kt)("a",{parentName:"p",href:"/fr/uninstall"},"D\xe9sinstaller pnpm"),"."))}d.isMDXComponent=!0}}]);