---
sidebar_position: 2
---

# Opdrachten

## Opdracht 1
We gaan K6 uitproberen, maak lokaal een testscript aan op je laptop dat 1 http call naar google.nl doet. Als je klaar bent met het script voer het script uit via de commandline.

```bash
k6 run script scriptnaam.js
```

## Opdracht 2
Nu gaan we daadwerkelijk een test uitvoeren op de Raspberry PI. Dit keer gebruiken we de options function om de parameter vu en duration aan me te teven. 
- VU staat voor virtual users. Oftewel het aantal virtuele gebruikers dat je tijdens de performance test wilt simuleren.
- Duration wordt gebruikt om de testduur aan te geven.

Deze parameters kan je meegeven in de commandline of in het script via de options function. Voer verschillende testen uit waarbij je de waardes van het aantal vusers en de duration wisselt. Blijf goed monitoren tijdens de test om te kijken wat er gebeurt. Client-side kun je monitoren in je terminal, server-side kun je monitoren via het grafana dashboard wat is uitgelegd in de introductie. De client-side monitor je om het verloop van je test in de gaten te houden. Server-side monitor je om te zien hoe het SUT (System Under Test) zich houdt tijdens de performancetest.

## Opdracht 3
Zoals je wellicht is opgevallen worden de testresultaten van K6 gelogd in de terminal. Dit is niet optimaal, omdat resultaten in de terminal niet opgeslagen worden. Daarom wil je dit het liefst in een testrapport opslaan, zodat je de resultaten later nog eens kunt terugkijken. Volg de stappen in de github repository voor het implemeteren van een testrapport.

[K6 report implementeren](https://github.com/benc-uk/k6-reporter)

## Opdracht 4
Voer een drie keer een performancetest uit met 15 vusers en een duration van 2 minuten. Noteer na elke test het aantal http_requests, wat valt je op?

Als je de resultaten van de testuitvoer vergelijkt, valt je als het goed is op dat het aantal http_requests bij elke testrun verschillend is. Dit heeft te maken met de responsetijd van de Raspberry PI. Hoe sneller de Raspberry PI een response terug geeft, hoe meer http requests verwerkt kunnen worden. Helaas, is dit geen gewenst gedrag. Hierdoor kan je niet vaststellen wat de test doet en weet je dus niet precies met welke load de test wordt uitgevoerd.

Los dat probleem in deze opdracht op.

## Opdracht 5
Een performancetest heeft net zoals bij andere soorten testen validatie nodig. Het valideren van het test resultaat zorgt ervoor dat je zeker weet dat je bijvoorbeeld het juiste response terug krijgt. K6 heeft verschillende validaties beschikbaar, daarnaast is het ook mogelijk om je eigen validatie te maken. In deze opdracht gebruiken we alleen de standaard validatie technieken van K6.

Kies 2 of 3 validaties en verwerk deze in je test. Voer daarna de test een aantal keer opnieuw uit om te zien of de validaties werken.

Probeer ook eens je test te laten falen door de validatie. Verander bijvoorbeeld je testopzet eens.

[Hulp nodig?](https://k6.io/docs/using-k6/checks)

## Opdracht 6
Naast checks zijn er ook thresholds beschikbaar in K6. Het verschil is dat een check een true/false output heeft en werkt op request basis. Bijvoorbeeld gaf dit request een "http 200" terug?
Thresholds zijn pass/fail criteria en functioneren over de hele test. Een threshold controleert bijvoorbeeld of de gemiddelde responsetijd lager was dan 0.2 seconden.

Implementeer 2 of meer verschillende thresholds in je test

[Hulp nodig?](https://k6.io/docs/using-k6/thresholds)

## Opdracht 7
Een trend is een object die beschikbaar is in K6 en het mogelijk maakt om berekeningen te maken van requests zoals (min, max, gemiddelde of percentielen). De waardes min en max wil je zo min mogelijk gebruiken, dit geeft namelijk een vertekend beeld van de test. Beter is om percentielen te gebruiken. Deze kan je lezen als in 90 procent van de gevallen was de responsetijd voor request A 0,124 seconden.

Implementeer een Trend in de test.

[Hulp nodig?](https://k6.io/docs/javascript-api/k6-metrics/trend)

## Opdracht 8
Wanneer de test steeds groter wordt krijg je meer te maken met variabelen. Het beste is om deze variabelen in je test te parametriseren. Daarom is het handig om een configuratie bestand te maken die deze waardes bevat en ook gelijk op 1 plek staat.

Maak een configuratie bestand: <b>.env</b>. Voeg alle hardcoded variabelen toe aan het env bestand en implenteer het env bestand in de test via een import statement. Voer de test opnieuw uit, als je de variabelen goed hebt geparametriseerd, functioneert de test zoals daarvoor. hebt gedaan functioneert je test zoals ervoor.

## Opdracht 9
Om logica te scheiden van implementatie maken we een service die gebruikt wordt in het test script. Creëer een functie in service.js die een getRequest afhandelt. Verwerk de implementaties uit de vorige opdrachten ook in de service
