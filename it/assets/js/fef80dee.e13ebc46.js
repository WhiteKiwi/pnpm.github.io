"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1688],{9613:(e,i,a)=>{a.d(i,{Zo:()=>c,kt:()=>m});var o=a(9496);function t(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function n(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?n(Object(a),!0).forEach((function(i){t(e,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))}))}return e}function r(e,i){if(null==e)return{};var a,o,t=function(e,i){if(null==e)return{};var a,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],i.indexOf(a)>=0||(t[a]=e[a]);return t}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=o.createContext({}),s=function(e){var i=o.useContext(p),a=i;return e&&(a="function"==typeof e?e(i):l(l({},i),e)),a},c=function(e){var i=s(e.components);return o.createElement(p.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return o.createElement(o.Fragment,{},i)}},u=o.forwardRef((function(e,i){var a=e.components,t=e.mdxType,n=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(a),m=t,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return a?o.createElement(k,l(l({ref:i},c),{},{components:a})):o.createElement(k,l({ref:i},c))}));function m(e,i){var a=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var n=a.length,l=new Array(n);l[0]=u;var r={};for(var p in i)hasOwnProperty.call(i,p)&&(r[p]=i[p]);r.originalType=e,r.mdxType="string"==typeof e?e:t,l[1]=r;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8887:(e,i,a)=>{a.r(i),a.d(i,{frontMatter:()=>r,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var o=a(9518),t=a(7344),n=(a(9496),a(9613)),l=["components"],r={id:"workspaces",title:"Spazio di lavoro"},p=void 0,s={unversionedId:"workspaces",id:"workspaces",title:"Spazio di lavoro",description:"pnpm ha il supporto integrato per i monorepository (alias repository multi-pacchetto, repository multi-progetto o repository monolitici). Puoi creare uno spazio di lavoro per unire pi\xf9 progetti all'interno di un unico repository.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/it/next/workspaces",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"workspaces",title:"Spazio di lavoro"},sidebar:"docs",previous:{title:".pnpmfile.cjs",permalink:"/it/next/pnpmfile"},next:{title:"Alias",permalink:"/it/next/aliases"}},c=[{value:"Protocollo dello spazio di lavoro (workspace:)",id:"protocollo-dello-spazio-di-lavoro-workspace",children:[{value:"Riferimenti ai pacchetti dello spazio di lavoro tramite alias",id:"riferimenti-ai-pacchetti-dello-spazio-di-lavoro-tramite-alias",children:[],level:3},{value:"Riferimenti ai pacchetti dello spazio di lavoro attraverso il percorso relativo",id:"riferimenti-ai-pacchetti-dello-spazio-di-lavoro-attraverso-il-percorso-relativo",children:[],level:3},{value:"Pubblicazione di pacchetti dello spazio di lavoro",id:"pubblicazione-di-pacchetti-dello-spazio-di-lavoro",children:[],level:3}],level:2},{value:"Flusso di lavoro del rilascio",id:"flusso-di-lavoro-del-rilascio",children:[],level:2},{value:"Opzioni",id:"opzioni",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[],level:3},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[],level:3},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[],level:3},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[],level:3}],level:2},{value:"Risoluzione dei problemi",id:"risoluzione-dei-problemi",children:[],level:2},{value:"Esempi di utilizzo",id:"esempi-di-utilizzo",children:[],level:2}],d={toc:c};function u(e){var i=e.components,a=(0,t.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"pnpm ha il supporto integrato per i monorepository (alias repository multi-pacchetto, repository multi-progetto o repository monolitici). Puoi creare uno spazio di lavoro per unire pi\xf9 progetti all'interno di un unico repository."),(0,n.kt)("p",null,"Uno spazio di lavoro deve avere un file ",(0,n.kt)("a",{parentName:"p",href:"/it/next/pnpm-workspace_yaml"},(0,n.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," nella sua radice. Uno spazio di lavoro pu\xf2 anche avere un ",(0,n.kt)("a",{parentName:"p",href:"/it/next/npmrc"},(0,n.kt)("inlineCode",{parentName:"a"},".npmrc"))," nella sua radice."),(0,n.kt)("h2",{id:"protocollo-dello-spazio-di-lavoro-workspace"},"Protocollo dello spazio di lavoro (workspace:)"),(0,n.kt)("p",null,"Aggiunto nella versione: v3.7.0."),(0,n.kt)("p",null,"Per impostazione predefinita, pnpm collegher\xe0 i pacchetti dallo spazio di lavoro se i pacchetti disponibili corrispondono agli intervalli dichiarati. Ad esempio, ",(0,n.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \xe8 collegato a ",(0,n.kt)("inlineCode",{parentName:"p"},"bar")," se ",(0,n.kt)("inlineCode",{parentName:"p"},"bar")," ha ",(0,n.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," nelle sue dipendenze. Tuttavia, se ",(0,n.kt)("inlineCode",{parentName:"p"},"bar")," ha ",(0,n.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," nelle dipendenze e ",(0,n.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," non \xe8 nello spazio di lavoro, ",(0,n.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," verr\xe0 installato dal registro. Questo comportamento introduce qualche incertezza."),(0,n.kt)("p",null,"Fortunatamente, pnpm supporta il protocollo ",(0,n.kt)("inlineCode",{parentName:"p"},"workspace:"),". Quando viene utilizzato questo protocollo, pnpm si rifiuter\xe0 di risolvere qualsiasi altra cosa che non sia un pacchetto locale dello spazio di lavoro. Quindi, se imposti ",(0,n.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", questa volta l'installazione avr\xe0 esito negativo perch\xe9 ",(0,n.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," non \xe8 presente nello spazio di lavoro."),(0,n.kt)("p",null,"Questo protocollo \xe8 particolarmente utile quando l'opzione ",(0,n.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," \xe8 impostata su ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),". In tal caso, pnpm collegher\xe0 i pacchetti dallo spazio di lavoro solo se viene utilizzato il protocollo ",(0,n.kt)("inlineCode",{parentName:"p"},"workspace:"),"."),(0,n.kt)("h3",{id:"riferimenti-ai-pacchetti-dello-spazio-di-lavoro-tramite-alias"},"Riferimenti ai pacchetti dello spazio di lavoro tramite alias"),(0,n.kt)("p",null,"Aggiunto nella versione: v5.12.0"),(0,n.kt)("p",null,"Diciamo che hai un pacchetto nello spazio di lavoro chiamato ",(0,n.kt)("inlineCode",{parentName:"p"},"foo"),". Di solito, faresti riferimento ad esso tramite ",(0,n.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,n.kt)("p",null,"Se vuoi usare un alias diverso, funzioner\xe0 anche la seguente sintassi: ",(0,n.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,n.kt)("p",null,"Prima della pubblicazione, gli alias vengono convertiti in normali dipendenze con alias. L'esempio sopra diventer\xe0 ",(0,n.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,n.kt)("h3",{id:"riferimenti-ai-pacchetti-dello-spazio-di-lavoro-attraverso-il-percorso-relativo"},"Riferimenti ai pacchetti dello spazio di lavoro attraverso il percorso relativo"),(0,n.kt)("p",null,"Aggiunto nella versione: v5.12.0"),(0,n.kt)("p",null,"In uno spazio di lavoro con 2 pacchetti:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"bar")," pu\xf2 avere ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," nelle sue dipendenze dichiarate come ",(0,n.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Prima della pubblicazione, queste specifiche vengono convertite in specifiche della versione normale supportate da tutti i gestori di pacchetti."),(0,n.kt)("h3",{id:"pubblicazione-di-pacchetti-dello-spazio-di-lavoro"},"Pubblicazione di pacchetti dello spazio di lavoro"),(0,n.kt)("p",null,"Quando un pacchetto dello spazio di lavoro viene compresso in un archivio (che sia tramite ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm pack")," o uno dei comandi di pubblicazione come ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), sostituiamo dinamicamente qualsiasi dipendenza ",(0,n.kt)("inlineCode",{parentName:"p"},"workspace:")," con:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La versione corrispondente nello spazio di lavoro di destinazione (se si utilizza ",(0,n.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"workspace:~"),"o ",(0,n.kt)("inlineCode",{parentName:"li"},"workspace:^"),")"),(0,n.kt)("li",{parentName:"ul"},"L'intervallo semver associato (per qualsiasi altro tipo di intervallo)")),(0,n.kt)("p",null,"Quindi, ad esempio, se abbiamo ",(0,n.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"zoo"),"nello spazio di lavoro e sono tutti alla versione ",(0,n.kt)("inlineCode",{parentName:"p"},"1.5.0"),", quanto segue:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,n.kt)("p",null,"Verr\xe0 trasformato in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,n.kt)("p",null,"Questa funzione ti consente di dipendere dai tuoi pacchetti dello spazio di lavoro locale pur essendo ancora in grado di pubblicare i pacchetti risultanti nel registro remoto senza che necessiti di passaggi di pubblicazione intermedi: i tuoi consumatori saranno in grado di utilizzare i tuoi spazi di lavoro pubblicati come qualsiasi altro pacchetto, ancora beneficiando dalle garanzie semver offerte."),(0,n.kt)("h2",{id:"flusso-di-lavoro-del-rilascio"},"Flusso di lavoro del rilascio"),(0,n.kt)("p",null,"Il controllo delle versioni dei pacchetti all'interno di uno spazio di lavoro \xe8 un'attivit\xe0 complessa e attualmente pnpm non fornisce una soluzione integrata per esso. Tuttavia, ci sono 2 strumenti ben testati che gestiscono il controllo delle versioni e supportano pnpm:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,n.kt)("p",null,"Per informazioni su come configurare un repository utilizzando Rush, leggi ",(0,n.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"questa pagina"),"."),(0,n.kt)("p",null,"Per utilizzare i Changeset con pnpm, leggi ",(0,n.kt)("a",{parentName:"p",href:"/it/next/using-changesets"},"questa guida"),"."),(0,n.kt)("h2",{id:"opzioni"},"Opzioni"),(0,n.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,n.kt)("p",null,"Aggiunto nella versione: v2.14.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Predefinito: ",(0,n.kt)("strong",{parentName:"li"},"true")),(0,n.kt)("li",{parentName:"ul"},"Tipo: ",(0,n.kt)("strong",{parentName:"li"},"true"),", ",(0,n.kt)("strong",{parentName:"li"},"false"),", ",(0,n.kt)("strong",{parentName:"li"},"deep"))),(0,n.kt)("p",null,"Se \xe8 abilitato, i pacchetti disponibili localmente sono collegati a ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules")," invece di essere scaricati dal registro. Questo \xe8 molto conveniente in un monorepo. Se hai bisogno che i pacchetti locali siano collegati anche alle dipendenze secondarie, puoi usare l'impostazione ",(0,n.kt)("inlineCode",{parentName:"p"},"deep")," (dalla v5)."),(0,n.kt)("p",null,"Altrimenti, i pacchetti vengono scaricati e installati dal registro. Tuttavia, i pacchetti dello spazio di lavoro possono ancora essere collegati utilizzando il protocollo di intervallo ",(0,n.kt)("inlineCode",{parentName:"p"},"workspace:"),"."),(0,n.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,n.kt)("p",null,"Aggiunto nella versione: v5.13.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Predefinito: ",(0,n.kt)("strong",{parentName:"li"},"false")),(0,n.kt)("li",{parentName:"ul"},"Tipo: ",(0,n.kt)("strong",{parentName:"li"},"Booleano"))),(0,n.kt)("p",null,"Se questa opzione \xe8 abilitata, i pacchetti locali dello spazio di lavoro sono preferiti rispetto ai pacchetti del registro, anche se \xe8 presente una versione pi\xf9 recente del pacchetto nel registro."),(0,n.kt)("p",null,"Questa impostazione \xe8 utile solo se l'area di lavoro non utilizza ",(0,n.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,n.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,n.kt)("p",null,"Aggiunto in: v2.17.0 come ",(0,n.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Predefinito: ",(0,n.kt)("strong",{parentName:"li"},"true")),(0,n.kt)("li",{parentName:"ul"},"Tipo: ",(0,n.kt)("strong",{parentName:"li"},"Booleano"))),(0,n.kt)("p",null,"Se questa opzione \xe8 abilitata, pnpm crea un unico file ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," nella radice dello spazio di lavoro. Ci\xf2 significa anche che tutte le dipendenze dei pacchetti dello spazio di lavoro saranno in una singola cartella ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules")," (e saranno collegate simbolicamente alla loro ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules")," per la risoluzione del modulo di Node)."),(0,n.kt)("p",null,"Vantaggi di questa opzione:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ogni dipendenza \xe8 un elemento singolo"),(0,n.kt)("li",{parentName:"ul"},"installazioni pi\xf9 veloci in un monorepo"),(0,n.kt)("li",{parentName:"ul"},"meno modifiche nelle revisioni del codice poich\xe9 sono tutte in un unico file")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Anche se tutte le dipendenze saranno collegate fisicamente nella radice di ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules"),", i pacchetti avranno accesso solo a quelle dipendenze che sono dichiarate nel loro ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json"),", quindi la rigidit\xe0 di pnpm \xe8 preservata. Questo \xe8 il risultato del suddetto collegamento simbolico."))),(0,n.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Predefinito: ",(0,n.kt)("strong",{parentName:"li"},"true")),(0,n.kt)("li",{parentName:"ul"},"Tipo: ",(0,n.kt)("strong",{parentName:"li"},"Booleano"))),(0,n.kt)("p",null,"Se questo \xe8 abilitato, verranno aggiunte nuove dipendenze con il protocollo dello spazio di lavoro SE (e solo se) sono presenti nello spazio di lavoro."),(0,n.kt)("p",null,"Potresti voler modificare questa impostazione su ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," se gli strumenti nel tuo repository non comprendono il protocollo dello spazio di lavoro (e idealmente invia un PR ai tuoi strumenti per ottenerlo aggiunto in futuro)."),(0,n.kt)("h2",{id:"risoluzione-dei-problemi"},"Risoluzione dei problemi"),(0,n.kt)("p",null,"pnpm non pu\xf2 garantire che gli script verranno eseguiti in ordine topologico se sono presenti cicli tra le dipendenze dello spazio di lavoro. Se pnpm rileva dipendenze cicliche durante l'installazione, generer\xe0 un avviso. Se pnpm \xe8 in grado di scoprire quali dipendenze stanno causando i cicli, verrano mostrati anche loro."),(0,n.kt)("p",null,"Se viene visualizzato il messaggio ",(0,n.kt)("inlineCode",{parentName:"p"},"Sono presenti dipendenze cicliche"),", ispezionare le dipendenze dello spazio di lavoro dichiarate in ",(0,n.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,n.kt)("h2",{id:"esempi-di-utilizzo"},"Esempi di utilizzo"),(0,n.kt)("p",null,"Ecco alcuni progetti open source che utilizzano la funzione dello spazio di lavoro di pnpm:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ice-lab/icestark"},"icestark")," (dal 16/12/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"4862326a8de53d02f617e7b1986774fd7540fccd"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Versione 3.0")," (dal 9/10/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")," (dal 26/09/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")," (dal 21/09/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"f2187ab6688368edb904b649bd371a658f6a8637"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma"},"Prisma")," (dal 21/09/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")," (dal 21/09/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"Plugin di Rollup")," (dal 21/09/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"53fb18c0c2852598200c547a0b1d745d15b5b487"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")," (dal 26/09/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytedance/bytemd"},"ByteMD")," (dal 18/02/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vueuse/vueuse"},"VueUse")," (dal 25/09/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/slidevjs/slidev"},"Slidev")," (dal 4/12/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/kit"},"SvelteKit")," (dal 26/09/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/telecraft/telecraft"},"Telecraft")," (dal 26/09/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"73a9c48c9d4f160d758b8881f404cc52c20a7454"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hayes/giraphql"},"GiraphQL")," (a partire dal 4/8/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"3dd3ff148da382d6f406f20626a9a5c25707c0c8"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/msgbyte/tailchat"},"Tailchat")," (dal 27/12/2021, commit ",(0,n.kt)("inlineCode",{parentName:"li"},"298af71aa0619e0a8fa8717777afe2fb32739db4"),")")))}u.isMDXComponent=!0}}]);