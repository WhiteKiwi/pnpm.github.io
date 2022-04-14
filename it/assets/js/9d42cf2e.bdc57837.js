"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3691],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(v,l(l({ref:t},s),{},{components:n})):i.createElement(v,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=n(2182),r=n(9028),o=(n(9496),n(9613)),l=["components"],a={id:"exec",title:"pnpm exec"},p=void 0,c={unversionedId:"cli/exec",id:"version-7.x/cli/exec",title:"pnpm exec",description:"Esegue un comando di shell nell'ambito di un progetto.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/it/cli/exec",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-7.x/docs",previous:{title:"pnpm test",permalink:"/it/cli/test"},next:{title:"pnpm dlx",permalink:"/it/cli/dlx"}},s={},u=[{value:"Esempi",id:"esempi",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Esempi",id:"esempi-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Esegue un comando di shell nell'ambito di un progetto."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," viene aggiunto a ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", quindi ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec")," consente l'esecuzione dei comandi delle dipendenze."),(0,o.kt)("h2",{id:"esempi"},"Esempi"),(0,o.kt)("p",null,"Se hai Jest come dipendenza del tuo progetto, non \xe8 necessario installare Jest a livello globale, basta eseguirlo con ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,o.kt)("p",null,"La parte ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," \xe8 in realt\xe0 facoltativa quando il comando non \xe8 in conflitto con un comando pnpm integrato, quindi puoi anche eseguire:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("p",null,"Qualsiasi opzione per il comando ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," dovrebbe essere elencata prima della parola chiave ",(0,o.kt)("inlineCode",{parentName:"p"},"exec"),". Le opzioni elencate dopo la parola chiave ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," vengono passate al comando eseguito."),(0,o.kt)("p",null,"Bene. pnpm verr\xe0 eseguito in modo ricorsivo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,o.kt)("p",null,"Male, pnpm non verr\xe0 eseguito in modo ricorsivo ma ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," verr\xe0 eseguito con l'opzione ",(0,o.kt)("inlineCode",{parentName:"p"},"-r"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Esegue il comando shell in ogni progetto dello spazio di lavoro."),(0,o.kt)("p",null,"Il nome del pacchetto corrente \xe8 disponibile tramite la variabile di ambiente ",(0,o.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"."),(0,o.kt)("h4",{id:"esempi-1"},"Esempi"),(0,o.kt)("p",null,"Elimina le installazioni ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," per tutti i pacchetti:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,o.kt)("p",null,"Visualizza le informazioni sui pacchetti per tutti i pacchetti. Questo dovrebbe essere usato con l'opzione ",(0,o.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (o ",(0,o.kt)("inlineCode",{parentName:"p"},"-c"),") affinch\xe9 la variabile di ambiente funzioni."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,o.kt)("h3",{id:"--parallel"},"--parallel"),(0,o.kt)("p",null,"Ignora completamente la convaluta e l'ordinamento topologico, eseguendo un dato script immediatamente in tutti i pacchetti corrispondenti con output di streaming prefissato. Questo \xe8 il flag preferito per i processi a lungo termine su molti pacchetti, per esempio, un lungo processo di compilazione."),(0,o.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,o.kt)("p",null,"Esegue il comando all'interno di una shell. Utilizza ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh")," su UNIX e ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," su Windows."),(0,o.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);