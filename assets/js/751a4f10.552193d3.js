"use strict";(self.webpackChunkk_6_workshop_api_docs=self.webpackChunkk_6_workshop_api_docs||[]).push([[919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,k=u["".concat(d,".").concat(h)]||u[h]||c[h]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="Opdrachten",s={unversionedId:"excercises",id:"excercises",title:"Opdrachten",description:"Opdracht 1",source:"@site/docs/excercises.md",sourceDirName:".",slug:"/excercises",permalink:"/k6-workshop-api-docs/docs/excercises",draft:!1,editUrl:"https://github.com/DanielvanBavel/k6-workshop-api-docs/docs/excercises.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introductie",permalink:"/k6-workshop-api-docs/docs/intro"},next:{title:"Usecases",permalink:"/k6-workshop-api-docs/docs/usecase"}},d={},l=[{value:"Opdracht 1",id:"opdracht-1",level:2},{value:"Opdracht 2",id:"opdracht-2",level:2},{value:"Opdracht 3",id:"opdracht-3",level:2},{value:"Opdracht 4",id:"opdracht-4",level:2},{value:"Opdracht 5",id:"opdracht-5",level:2},{value:"Opdracht 6",id:"opdracht-6",level:2},{value:"Opdracht 7",id:"opdracht-7",level:2},{value:"Opdracht 8",id:"opdracht-8",level:2},{value:"Opdracht 9",id:"opdracht-9",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opdrachten"},"Opdrachten"),(0,a.kt)("h2",{id:"opdracht-1"},"Opdracht 1"),(0,a.kt)("p",null,"We gaan K6 uitproberen, maak lokaal een testscript aan op je laptop dat 1 http call naar google.nl doet. Als je klaar bent met het script voer het script uit via de commandline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k6 run script scriptnaam.js\n")),(0,a.kt)("h2",{id:"opdracht-2"},"Opdracht 2"),(0,a.kt)("p",null,"Nu gaan we daadwerkelijk een test uitvoeren op de Raspberry PI. Dit keer gebruiken we de options function om de parameter vu en duration aan me te teven. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VU staat voor virtual users. Oftewel het aantal virtuele gebruikers dat je tijdens de performance test wilt simuleren."),(0,a.kt)("li",{parentName:"ul"},"Duration wordt gebruikt om de testduur aan te geven.")),(0,a.kt)("p",null,"Deze parameters kan je meegeven in de commandline of in het script via de options function. Voer verschillende testen uit waarbij je de waardes van het aantal vusers en de duration wisselt. Blijf goed monitoren tijdens de test om te kijken wat er gebeurt. Client-side kun je monitoren in je terminal, server-side kun je monitoren via het grafana dashboard wat is uitgelegd in de introductie. De client-side monitor je om het verloop van je test in de gaten te houden. Server-side monitor je om te zien hoe het SUT (System Under Test) zich houdt tijdens de performancetest."),(0,a.kt)("h2",{id:"opdracht-3"},"Opdracht 3"),(0,a.kt)("p",null,"Zoals je wellicht is opgevallen worden de testresultaten van K6 gelogd in de terminal. Dit is niet optimaal, omdat resultaten in de terminal niet opgeslagen worden. Daarom wil je dit het liefst in een testrapport opslaan, zodat je de resultaten later nog eens kunt terugkijken. Volg de stappen in de github repository voor het implemeteren van een testrapport."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/benc-uk/k6-reporter"},"K6 report implementeren")),(0,a.kt)("h2",{id:"opdracht-4"},"Opdracht 4"),(0,a.kt)("p",null,"Voer een drie keer een performancetest uit met 15 vusers en een duration van 2 minuten. Noteer na elke test het aantal http_requests, wat valt je op?"),(0,a.kt)("p",null,"Als je de resultaten van de testuitvoer vergelijkt, valt je als het goed is op dat het aantal http_requests bij elke testrun verschillend is. Dit heeft te maken met de responsetijd van de Raspberry PI. Hoe sneller de Raspberry PI een response terug geeft, hoe meer http requests verwerkt kunnen worden. Helaas, is dit geen gewenst gedrag. Hierdoor kan je niet vaststellen wat de test doet en weet je dus niet precies met welke load de test wordt uitgevoerd."),(0,a.kt)("p",null,"Los dat probleem in deze opdracht op."),(0,a.kt)("h2",{id:"opdracht-5"},"Opdracht 5"),(0,a.kt)("p",null,"Een performancetest heeft net zoals bij andere soorten testen validatie nodig. Het valideren van het test resultaat zorgt ervoor dat je zeker weet dat je bijvoorbeeld het juiste response terug krijgt. K6 heeft verschillende validaties beschikbaar, daarnaast is het ook mogelijk om je eigen validatie te maken. In deze opdracht gebruiken we alleen de standaard validatie technieken van K6."),(0,a.kt)("p",null,"Kies 2 of 3 validaties en verwerk deze in je test. Voer daarna de test een aantal keer opnieuw uit om te zien of de validaties werken."),(0,a.kt)("p",null,"Probeer ook eens je test te laten falen door de validatie. Verander bijvoorbeeld je testopzet eens."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://k6.io/docs/using-k6/checks"},"Hulp nodig?")),(0,a.kt)("h2",{id:"opdracht-6"},"Opdracht 6"),(0,a.kt)("p",null,'Naast checks zijn er ook thresholds beschikbaar in K6. Het verschil is dat een check een true/false output heeft en werkt op request basis. Bijvoorbeeld gaf dit request een "http 200" terug?\nThresholds zijn pass/fail criteria en functioneren over de hele test. Een threshold controleert bijvoorbeeld of de gemiddelde responsetijd lager was dan 0.2 seconden.'),(0,a.kt)("p",null,"Implementeer 2 of meer verschillende thresholds in je test"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://k6.io/docs/using-k6/thresholds"},"Hulp nodig?")),(0,a.kt)("h2",{id:"opdracht-7"},"Opdracht 7"),(0,a.kt)("p",null,"Een trend is een object die beschikbaar is in K6 en het mogelijk maakt om berekeningen te maken van requests zoals (min, max, gemiddelde of percentielen). De waardes min en max wil je zo min mogelijk gebruiken, dit geeft namelijk een vertekend beeld van de test. Beter is om percentielen te gebruiken. Deze kan je lezen als in 90 procent van de gevallen was de responsetijd voor request A 0,124 seconden."),(0,a.kt)("p",null,"Implementeer een Trend in de test."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://k6.io/docs/javascript-api/k6-metrics/trend"},"Hulp nodig?")),(0,a.kt)("h2",{id:"opdracht-8"},"Opdracht 8"),(0,a.kt)("p",null,"Wanneer de test steeds groter wordt krijg je meer te maken met variabelen. Het beste is om deze variabelen in je test te parametriseren. Daarom is het handig om een configuratie bestand te maken die deze waardes bevat en ook gelijk op 1 plek staat."),(0,a.kt)("p",null,"Maak een configuratie bestand: ",(0,a.kt)("b",null,".env"),". Voeg alle hardcoded variabelen toe aan het env bestand en implenteer het env bestand in de test via een import statement. Voer de test opnieuw uit, als je de variabelen goed hebt geparametriseerd, functioneert de test zoals daarvoor. hebt gedaan functioneert je test zoals ervoor."),(0,a.kt)("h2",{id:"opdracht-9"},"Opdracht 9"),(0,a.kt)("p",null,"Om logica te scheiden van implementatie maken we een service die gebruikt wordt in het test script. Cre\xeber een functie in service.js die een getRequest afhandelt. Verwerk de implementaties uit de vorige opdrachten ook in de service"))}c.isMDXComponent=!0}}]);