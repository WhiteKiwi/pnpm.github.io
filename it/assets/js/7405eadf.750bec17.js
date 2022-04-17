"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1295],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=t(2182),o=t(9028),r=(t(9496),t(9613)),i=["components"],l={title:"La node_modules flat non \xe8 l'unico modo",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},p=void 0,s={permalink:"/it/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/it",source:"@site/i18n/it/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"La node_modules flat non \xe8 l'unico modo",description:"I nuovi utenti di pnpm mi chiedono spesso della strana struttura di node_modules che crea pnpm. Perch\xe9 non \xe8 piatta? Dove sono tutte le dipendenze secondarie?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 maggio 2020",tags:[],readingTime:2.73,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"La node_modules flat non \xe8 l'unico modo",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"Opzioni di configurazione di Node-Modules con pnpm",permalink:"/it/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},d={authorsImageUrls:[void 0]},m=[],c={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I nuovi utenti di pnpm mi chiedono spesso della strana struttura di ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," che crea pnpm. Perch\xe9 non \xe8 piatta? Dove sono tutte le dipendenze secondarie?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Presumo che i lettori dell'articolo abbiano gi\xe0 familiarit\xe0 con la cartella ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," piatta creata da npm e Yarn. Se non capisci perch\xe9 npm 3 ha dovuto iniziare a utilizzare ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," flat nella v3, puoi trovare un po' di preistoria in ",(0,r.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Perch\xe9 dovremmo usare pnpm?"),".")),(0,r.kt)("p",null,"Perch\xe9 allora ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," di pnpm \xe8 insolito? Creiamo due cartelle ed eseguiamo ",(0,r.kt)("inlineCode",{parentName:"p"},"npm add express")," in una di esse e ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add express")," nell'altra. Ecco la parte superiore di ci\xf2 che si ottiene in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," della prima cartella:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,r.kt)("p",null,"Puoi vedere l'intera cartella ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"qui"),"."),(0,r.kt)("p",null,"E questo \xe8 ci\xf2 che ottieni in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," creato da pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,r.kt)("p",null,"Puoi controllarlo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"qui"),"."),(0,r.kt)("p",null,"Allora, dove sono tutte le dipendenze? C'\xe8 solo una cartella in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," chiamata ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm")," e un collegamento simbolico chiamato ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),". Bene, abbiamo installato solo ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", quindi questo \xe8 l'unico pacchetto a cui la tua applicazione deve avere accesso"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Leggi di pi\xf9 sul perch\xe9 la severit\xe0 di pnpm \xe8 una buona cosa ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"qui"))),(0,r.kt)("p",null,"Vediamo cosa c'\xe8 dentro ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n    .modules.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"express")," non ha ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"? Dove sono tutte le dipendenze di ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),"?"),(0,r.kt)("p",null,"Il trucco \xe8 che ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \xe8 solo un collegamento simbolico. Quando Node.js risolve le dipendenze, utilizza le loro posizioni reali, quindi non conserva i collegamenti simbolici. Ma dov'\xe8 la vera posizione di ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", si potrebbe chiedere?"),(0,r.kt)("p",null,"Qui: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),(0,r.kt)("p",null,"OK, ora conosciamo lo scopo della cartella ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/"),". ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/")," memorizza tutti i pacchetti in una struttura di cartelle piatte, quindi ogni pacchetto pu\xf2 essere trovato in una cartella denominata con questo modello:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),(0,r.kt)("p",null,"La chiamiamo cartella dell'archivio virtuale."),(0,r.kt)("p",null,"Questa struttura piatta evita i problemi di percorso lunghi che sono stati causati dai ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," annidati creati da npm v2 ma mantiene i pacchetti isolati a differenza dei ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," piatti creati da npm v3,4,5,6 o yarn v1."),(0,r.kt)("p",null,"Ora diamo un'occhiata alla vera posizione di ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,r.kt)("p",null,"\xc8 una truffa? Manca ancora la cartella ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"! Il secondo trucco della struttura ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," di pnpm \xe8 che le dipendenze dei pacchetti sono sullo stesso livello di cartella su cui si trova la posizione reale del pacchetto dipendente. Quindi le dipendenze di ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," non sono in ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," ma in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,r.kt)("p",null,"Tutte le dipendenze di ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," sono collegamenti simbolici a cartelle appropriate in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/"),". Posizionare le dipendenze di ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," un livello in alto permette di evitare i collegamenti simbolici circolari."),(0,r.kt)("p",null,"Quindi, come puoi vedere, anche se la struttura ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," di pnpm sembra inizialmente inusuale:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\xe8 completamente compatibile con Node.js"),(0,r.kt)("li",{parentName:"ol"},"i pacchetti sono ben raggruppati con le loro dipendenze")),(0,r.kt)("p",null,"La struttura \xe8 un po' ",(0,r.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"pi\xf9 complessa")," per i pacchetti con dipendenze peer ma l'idea \xe8 la stessa: usare collegamenti simbolici per creare un annidamento con una struttura di cartelle piatta."))}u.isMDXComponent=!0}}]);