"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3894],{9613:(t,n,e)=>{e.d(n,{Zo:()=>m,kt:()=>c});var a=e(9496);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=a.createContext({}),d=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m=function(t){var n=d(t.components);return a.createElement(o.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(e),c=l,g=s["".concat(o,".").concat(c)]||s[c]||u[c]||r;return e?a.createElement(g,i(i({ref:n},m),{},{components:e})):a.createElement(g,i({ref:n},m))}));function c(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=e[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},7016:(t,n,e)=>{e.r(n),e.d(n,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>d,toc:()=>m,default:()=>s});var a=e(9518),l=e(7344),r=(e(9496),e(9613)),i=["components"],p={id:"installation",title:"Instalaci\xf3n"},o=void 0,d={unversionedId:"installation",id:"version-5.x/installation",title:"Instalaci\xf3n",description:"Usando la instalaci\xf3n autonoma",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/es/5.x/installation",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"5.x",frontMatter:{id:"installation",title:"Instalaci\xf3n"},sidebar:"version-5.x/docs",previous:{title:"Motivaci\xf3n",permalink:"/es/5.x/motivation"},next:{title:"pnpm CLI",permalink:"/es/5.x/pnpm-cli"}},m=[{value:"Usando la instalaci\xf3n autonoma",id:"usando-la-instalaci\xf3n-autonoma",children:[],level:2},{value:"Usando pnpm",id:"usando-pnpm",children:[],level:2},{value:"Via commando npx",id:"via-commando-npx",children:[],level:2},{value:"Actualizando",id:"actualizando",children:[],level:2},{value:"Compatibilidad",id:"compatibilidad",children:[],level:2}],u={toc:m};function s(t){var n=t.components,e=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usando-la-instalaci\xf3n-autonoma"},"Usando la instalaci\xf3n autonoma"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -f https://get.pnpm.io/v5.js | node - add --global pnpm\n")),(0,r.kt)("p",null,"En Windows (PowerShell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://get.pnpm.io/v5.js' -UseBasicParsing).Content | node - add --global pnpm\n")),(0,r.kt)("h2",{id:"usando-pnpm"},"Usando pnpm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"via-commando-npx"},"Via commando npx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"actualizando"},"Actualizando"),(0,r.kt)("p",null,"Once you have installed pnpm, there is no need to use other package managers to update it. You can upgrade pnpm using itself, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/es/5.x/continuous-integration"},"Continuous Integration"),"."))),(0,r.kt)("h2",{id:"compatibilidad"},"Compatibilidad"),(0,r.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);