"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9157],{9613:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>u});var t=n(9496);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=t.createContext({}),o=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=o(e.components);return t.createElement(m.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},k=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=o(n),u=l,c=k["".concat(m,".").concat(u)]||k[u]||s[u]||i;return n?t.createElement(c,r(r({ref:a},d),{},{components:n})):t.createElement(c,r({ref:a},d))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var o=2;o<i;o++)r[o]=n[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},659:(e,a,n)=>{n.r(a),n.d(a,{frontMatter:()=>p,contentTitle:()=>m,metadata:()=>o,assets:()=>d,toc:()=>s,default:()=>u});var t=n(9518),l=n(7344),i=(n(9496),n(9613)),r=["components"],p={title:"pnpm g\xf6z\xfcnden 2021 y\u0131l\u0131",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},m=void 0,o={permalink:"/tr/blog/2021/12/29/yearly-update",editUrl:"https://crowdin.com/project/pnpm/tr",source:"@site/i18n/tr/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md",title:"pnpm g\xf6z\xfcnden 2021 y\u0131l\u0131",description:"Y\u0131l\u0131n sonuna geldik.. Ve, pnpm i\xe7in iyi bir y\u0131l oldu. Bakal\u0131m, nas\u0131l ge\xe7ti ?",date:"2021-12-29T00:00:00.000Z",formattedDate:"29 Aral\u0131k 2021",tags:[],readingTime:2.115,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],nextItem:{title:"pnpm ile Node Modules yap\u0131land\u0131rma se\xe7enekleri",permalink:"/tr/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},d={authorsImageUrls:[void 0]},s=[{value:"Kullan\u0131m",id:"kullan\u0131m",children:[{value:"\u0130ndirme \u0130statistikleri",id:"i\u0307ndirme-i\u0307statistikleri",children:[],level:3},{value:"Dok\xfcman ziyaretleri",id:"dok\xfcman-ziyaretleri",children:[],level:3},{value:"GitHub y\u0131ld\u0131zlar\u0131",id:"github-y\u0131ld\u0131zlar\u0131",children:[],level:3},{value:"Yeni kullan\u0131c\u0131lar",id:"yeni-kullan\u0131c\u0131lar",children:[],level:3}],level:2},{value:"\xd6ne \xe7\u0131kan \xf6zellikler:",id:"\xf6ne-\xe7\u0131kan-\xf6zellikler",children:[{value:"Yeni <code>lockfile</code> format\u0131 ( v6.0.0&#39;dan beri)",id:"yeni-lockfile-format\u0131--v600dan-beri",children:[],level:3},{value:"Node.js s\xfcr\xfcmlerini y\xf6netme ( v6.12.0&#39;dan beri)",id:"nodejs-s\xfcr\xfcmlerini-y\xf6netme--v6120dan-beri",children:[],level:3},{value:"Yerel ba\u011f\u0131ml\u0131l\u0131klar\u0131 enjekte etme ( v6.20.0&#39;dan beri)",id:"yerel-ba\u011f\u0131ml\u0131l\u0131klar\u0131-enjekte-etme--v6200dan-beri",children:[],level:3},{value:"E\u015f ba\u011f\u0131ml\u0131l\u0131k (peer-dependency) sorunlar\u0131n\u0131n iyile\u015ftirilmi\u015f raporlamas\u0131 ( v6.24.0&#39;dan beri)",id:"e\u015f-ba\u011f\u0131ml\u0131l\u0131k-peer-dependency-sorunlar\u0131n\u0131n-iyile\u015ftirilmi\u015f-raporlamas\u0131--v6240dan-beri",children:[],level:3}],level:2},{value:"Rekabet",id:"rekabet",children:[{value:"Yarn",id:"yarn",children:[],level:3},{value:"npm",id:"npm",children:[],level:3},{value:"Di\u011ferleri",id:"di\u011ferleri",children:[],level:3}],level:2},{value:"Gelecek planlar\u0131",id:"gelecek-planlar\u0131",children:[],level:2}],k={toc:s};function u(e){var a=e.components,p=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},k,p,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Y\u0131l\u0131n sonuna geldik.. Ve, pnpm i\xe7in iyi bir y\u0131l oldu. Bakal\u0131m, nas\u0131l ge\xe7ti ?"),(0,i.kt)("h2",{id:"kullan\u0131m"},"Kullan\u0131m"),(0,i.kt)("h3",{id:"i\u0307ndirme-i\u0307statistikleri"},"\u0130ndirme \u0130statistikleri"),(0,i.kt)("p",null,"Bu y\u0131lki hedefim Bower'\u0131 indirme say\u0131s\u0131yla ge\xe7mekti. Bu hedefe, ",(0,i.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29"},"Kas\u0131m'da")," ula\u015fabildik:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4636).Z})),(0,i.kt)("p",null,"pnpm, 2021'de 2020'ye g\xf6re ",(0,i.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29"},"3 kat daha fazla"),"  indirildi:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3995).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bu istatistikler, pnpm'nin kurulabilece\u011fi t\xfcm farkl\u0131 yollar\u0131 i\xe7ermiyor bile! Yaln\u0131zca ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pnpm"},"pnpm npm paketinin")," indirmelerini \xf6l\xe7\xfcyor. Bu y\u0131l, farkl\u0131 \u015fekilde g\xf6nderilen pnpm'in derlenmi\u015f binary s\xfcr\xfcmlerini de ekledik."))),(0,i.kt)("h3",{id:"dok\xfcman-ziyaretleri"},"Dok\xfcman ziyaretleri"),(0,i.kt)("p",null,"Google Analytics'i kullanarak belgelerimizden baz\u0131 ki\u015fiselle\u015ftirilmemi\u015f istatistikler topluyoruz. 2021'de bazen haftada 2.000'den fazla tekil ziyaret\xe7imiz oldu."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4587).Z})),(0,i.kt)("p",null,"Kullan\u0131c\u0131lar\u0131m\u0131z\u0131n \xe7o\u011fu Amerika Birle\u015fik Devletleri ve \xc7in'den."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2713).Z})),(0,i.kt)("h3",{id:"github-y\u0131ld\u0131zlar\u0131"},"GitHub y\u0131ld\u0131zlar\u0131"),(0,i.kt)("p",null,"Ana ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm"},"GitHub repomuz")," bu y\u0131l 5.000'in \xfczerinde y\u0131ld\u0131z ald\u0131."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6890).Z})),(0,i.kt)("h3",{id:"yeni-kullan\u0131c\u0131lar"},"Yeni kullan\u0131c\u0131lar"),(0,i.kt)("p",null,"Bu y\u0131lki en b\xfcy\xfck yeni kullan\u0131c\u0131m\u0131z ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/pull/89"},"Bytedance")," (TikTok'un arkas\u0131ndaki \u015firket)."),(0,i.kt)("p",null,"Ayr\u0131ca, bir\xe7ok harika a\xe7\u0131k kaynak projesi pnpm kullanmaya ba\u015flad\u0131. Baz\u0131lar\u0131, monorepolar'a olan deste\u011fi nedeniyle pnpm'e ge\xe7ti:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Vue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")),(0,i.kt)("li",{parentName:"ul"},"ve ",(0,i.kt)("a",{parentName:"li",href:"https://pnpm.io/workspaces#usage-examples"},"di\u011ferleri"))),(0,i.kt)("p",null,"Baz\u0131lar\u0131, pnpm'in verimli, h\u0131zl\u0131 ve g\xfczel olu\u015funu sevdikleri i\xe7in ge\xe7ti:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/Autoprefixer/status/1476226146488692736"},"Autoprefixer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/PostCSS/status/1470438664006258701"},"PostCSS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/Browserslist/status/1468264308308156419"},"Browserslist"))),(0,i.kt)("h2",{id:"\xf6ne-\xe7\u0131kan-\xf6zellikler"},"\xd6ne \xe7\u0131kan \xf6zellikler:"),(0,i.kt)("h3",{id:"yeni-lockfile-format\u0131--v600dan-beri"},"Yeni ",(0,i.kt)("inlineCode",{parentName:"h3"},"lockfile")," format\u0131 ( ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.0.0"},"v6.0.0"),"'dan beri)"),(0,i.kt)("p",null,"Bu y\u0131lki ilk ve en \xf6nemli de\u011fi\u015fikliklerden biri yeni ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," format\u0131yd\u0131. Bu son derece \xf6nemli bir de\u011fi\u015fiklikti, bu y\xfczden v6'y\u0131 yay\u0131nlamak zorunda kald\u0131k. Buna ra\u011fmen ba\u015far\u0131l\u0131 oldu. Eski lockfile Git'in s\u0131k s\u0131k \xe7ak\u0131\u015fmas\u0131na(conflicts) neden oluyordu. Yeni format kullan\u0131ma sunuldu\u011fundan beri Git \xe7ak\u0131\u015fmalar\u0131(conflicts) hakk\u0131nda herhangi bir \u015fikayet almad\u0131k."),(0,i.kt)("h3",{id:"nodejs-s\xfcr\xfcmlerini-y\xf6netme--v6120dan-beri"},"Node.js s\xfcr\xfcmlerini y\xf6netme ( ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.12.0"},"v6.12.0"),"'dan beri)"),(0,i.kt)("p",null,"Node.js s\xfcr\xfcmlerini y\xf6netmeye izin veren yeni bir komut (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm env"),") yay\u0131nlad\u0131k. Yani nvm veya Volta gibi Node.js s\xfcr\xfcm y\xf6neticileri yerine pnpm kullanabilirsiniz."),(0,i.kt)("p",null,"Ayr\u0131ca, pnpm ba\u011f\u0131ms\u0131z \xe7al\u0131\u015ft\u0131r\u0131labilir bir dosya olarak g\xf6nderilir, b\xf6ylece sistemde \xf6nceden kurulu Node.js olmasa bile onu \xe7al\u0131\u015ft\u0131rabilirsiniz."),(0,i.kt)("h3",{id:"yerel-ba\u011f\u0131ml\u0131l\u0131klar\u0131-enjekte-etme--v6200dan-beri"},"Yerel ba\u011f\u0131ml\u0131l\u0131klar\u0131 enjekte etme ( ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.20.0"},"v6.20.0"),"'dan beri)"),(0,i.kt)("p",null,'Yerel bir ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 "enjekte edebilirsiniz". Varsay\u0131lan olarak, yerel ba\u011f\u0131ml\u0131l\u0131klar ',(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," ile sembolik olarak ba\u011flant\u0131l\u0131d\u0131r, ancak bu yeni \xf6zellik ile pnpm'e bunun yerine paketin dosyalar\u0131n\u0131 direk ba\u011flama (hard-link) talimat\u0131 verebilirsiniz."),(0,i.kt)("h3",{id:"e\u015f-ba\u011f\u0131ml\u0131l\u0131k-peer-dependency-sorunlar\u0131n\u0131n-iyile\u015ftirilmi\u015f-raporlamas\u0131--v6240dan-beri"},"E\u015f ba\u011f\u0131ml\u0131l\u0131k (peer-dependency) sorunlar\u0131n\u0131n iyile\u015ftirilmi\u015f raporlamas\u0131 ( ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.24.0"},"v6.24.0"),"'dan beri)"),(0,i.kt)("p",null,"E\u015f ba\u011f\u0131ml\u0131l\u0131k sorunlar\u0131 d\xfcz metin olarak yazd\u0131r\u0131l\u0131rd\u0131 ve bunlar\u0131 anlamak zordu. Art\u0131k hepsi grupland\u0131r\u0131lm\u0131\u015f ve d\xfczenli bir hiyerar\u015fi yap\u0131s\u0131nda yazd\u0131r\u0131lm\u0131\u015ft\u0131r."),(0,i.kt)("h2",{id:"rekabet"},"Rekabet"),(0,i.kt)("h3",{id:"yarn"},"Yarn"),(0,i.kt)("p",null,"Yarn, ",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-"},"v3.1"),"'e bir pnpm linker ekledi. B\xf6ylece Yarn, pnpm'in olu\u015fturdu\u011funa benzer bir node-modules dizin yap\u0131s\u0131 olu\u015fturabilir."),(0,i.kt)("p",null,"Ayr\u0131ca Yarn ekibi, disk alan\u0131 a\xe7\u0131s\u0131ndan daha verimli olmak i\xe7in i\xe7erik adreslenebilir bir depolama uygulamay\u0131 planl\u0131yor."),(0,i.kt)("h3",{id:"npm"},"npm"),(0,i.kt)("p",null,"npm ekibi, pnpm'nin kulland\u0131\u011f\u0131 sembolik ba\u011flant\u0131l\u0131 d\xfc\u011f\xfcm mod\xfclleri dizin yap\u0131s\u0131n\u0131 da benimsemeye karar verdi (ilgili ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md"},"RFC"),")."),(0,i.kt)("h3",{id:"di\u011ferleri"},"Di\u011ferleri"),(0,i.kt)("p",null,"Zig ile yaz\u0131lm\u0131\u015f ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/jarredsumner/status/1473416431291174912/photo/1"},"Bun")," ve Rust ile yaz\u0131lm\u0131\u015f ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/voltpkg/volt"},"Volt"),"'tan her ikisi de, npm/Yarn/pnpm'den daha h\u0131zl\u0131 oldu\u011funu iddia ediyor. Bu yeni paket y\xf6neticilerini hen\xfcz kar\u015f\u0131la\u015ft\u0131rmad\u0131m."),(0,i.kt)("h2",{id:"gelecek-planlar\u0131"},"Gelecek planlar\u0131"),(0,i.kt)("p",null,"Daha h\u0131zl\u0131, daha iyi, en iyisi."))}u.isMDXComponent=!0},2713:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/countries-2021-8eb9625e1798649ee04451dfb10ac851.png"},3995:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/download-stats-2021-1418562cb03abd558c4a6b4b17155227.png"},4587:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/ga-unique-visits-2021-b8bc3649f680565127696c85bdd4b701.png"},4636:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/pnpm-vs-bower-stats-6ec69a7308f5fbc1433420b1b2f7457f.png"},6890:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/stars-2021-0061c16f424e33ba0db224d82bcb53f3.png"}}]);