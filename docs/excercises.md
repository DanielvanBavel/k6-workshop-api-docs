---
sidebar_position: 2
---

# Opdrachten

## Opdracht 1
We gaan K6 uitproberen. Maak lokaal een testscript aan op je laptop dat 1 http call naar google.nl doet. Als je klaar bent met het script voer het script uit via de commandline met het onderstaande commando.

```bash
k6 run script scriptnaam.js
```

## Opdracht 2
Nu gaan we een test uitvoeren op de Raspberry Pi. Dit keer gebruiken we de options function om de parameter 'vu' en 'duration' aan mee te geven. 
- VU staat voor virtual users. Oftewel het aantal virtuele gebruikers dat je tijdens de performancetest wilt simuleren.
- Duration wordt gebruikt om de testduur aan te geven.

Deze parameters kan je meegeven in de commandline of in het script via de options function. Voer verschillende testruns uit waarbij je de waardes van het aantal vusers en de duration iedere testrun verandert. Blijf goed monitoren tijdens de test om te kijken wat er gebeurt. 

Client-side kun je monitoren in je terminal, server-side kun je monitoren via het Grafana-dashboard wat is uitgelegd in de introductie [Link naar introductie](http://localhost:3001/k6-workshop-api-docs/docs/intro).

De client-side monitor je om het verloop van je test in de gaten te houden. Server-side monitor je om te zien hoe het SUT (System Under Test) zich houdt tijdens de performancetest.

## Opdracht 3
Zoals je wellicht is opgevallen worden de testresultaten van K6 gelogd in de terminal. Dit is niet optimaal, omdat resultaten in de terminal niet opgeslagen worden. Daarom wil je dit het liefst in een testrapport opslaan, zodat je de resultaten later nog eens kunt terugkijken. Volg de stappen in de GitHub repository voor het implementeren van een testrapport.

[K6 report implementeren](https://github.com/benc-uk/k6-reporter)

## Opdracht 4
Voer drie keer een performancetest uit met 15 vusers en een duration van 2 minuten. Noteer na elke test het totaal aantal http_requests, wat valt je op?

Als het goed is, is het opgevallen dat het aantal http_requests bij elke testrun verschillend is. Dit heeft te maken met de responstijd van de Raspberry Pi. Hoe sneller de Raspberry Pi een response terug geeft, hoe meer http requests verwerkt kunnen worden. Door verschillende factoren, zoals verbindingssnelheid varieert de doorvoersnelheid (throughput).

Hoe de performancetest zich precies gedraagt in een omgeving valt niet te voorspellen omdat dit afhangt van verschillende factoren zoals; het netwerk, de database, de webservers en nog een aantal zaken. Wat je wel wilt weten is wat de aantallen http requests zijn, hoe lang de test moet duren, hoeveel actieve gebruikers je simuleert.

Het probleem dat je nu bent tegengekomen, dat het totaal aantal http request verschilt. Gaan we in deze opdracht oplossen door "iteration" toe te voegen aan de options function.

## Opdracht 5
Een performancetest heeft, net zoals andere testen, validatie nodig. De validatie zorgt ervoor dat je als tester met overtuiging en vertrouwen kan zeggen dat de performancetest heeft gedaan wat je verwachtte wat de performancetest zou doen. Door het verwerken van "checks" in de performancetest voor het inloggen weet je zeker dat de gesimuleerde gebruiker ook daadwerlijk is ingelogd. 

Het valideren van het testresultaat zorgt er dus voor dat je zeker weet dat je het juiste response terug krijgt. K6 heeft verschillende validaties beschikbaar, ook wel checks genoemd. Daarnaast is het ook mogelijk om je eigen check te maken. In deze opdracht gebruiken we alleen de standaard validatie-technieken van K6.

Kies 2 of 3 validaties en verwerk deze in je test. Voer daarna de test een aantal keren opnieuw uit om te zien of de validaties werken.

Probeer ook eens je test te laten falen door de validatie. Verander bijvoorbeeld je testopzet eens.

[Hulp nodig?](https://k6.io/docs/using-k6/checks)

## Opdracht 6
Naast checks zijn er ook thresholds (grenswaarden) in te stellen in K6. Het verschil is dat een check een true/false output heeft en werkt op request basis. Bijvoorbeeld "gaf dit request een "HTTP status code 200" terug?"

Thresholds is een pass/fail criteria die test overkoepelend werkt. Een threshold controleert bijvoorbeeld of in 99% van de gevallen de responsetijd lager was dan 0.5 seconden.

Implementeer 2 of meer verschillende thresholds in je test

[Hulp nodig?](https://k6.io/docs/using-k6/thresholds)

## Opdracht 7
Een trend is een object dat beschikbaar is in K6 en het mogelijk maakt om berekeningen te maken van requests zoals (min, max, gemiddelde of percentielen). 

De waardes min en max geven zoals je al kan voorspellen de minimale en maximale waardes over de test. Hierbij is het goed om te kijken naar eventuele uitschieters. Welk request heeft ontzettende hoge responsetijden gehad? Dit zijn in veel gevallen aanknopingspunten om verder te onderzoeken. Maar, beter is het om gebruik te maken van percentielen. Deze kan je lezen als in 90 procent van de gevallen was de responstijd voor request A 0,124 seconden.

Implementeer een trend in de test.

[Hulp nodig?](https://k6.io/docs/javascript-aPi/k6-metrics/trend)

## Opdracht 8
Wanneer de test steeds groter wordt krijg je meer te maken met variabelen. Het beste is om deze variabelen in je test te parametriseren. Daarom is het handig om een configuratiebestand te maken dat deze waardes bevat en ook gelijk op 1 plek staat.

Maak een configuratiebestand: <b>.env</b>. Voeg alle hardcoded variabelen toe aan het env bestand en implementeer het env bestand in de test via een import statement. Voer de test opnieuw uit. Als je de variabelen goed hebt geparametriseerd, functioneert de test zoals daarvoor.

## Opdracht 9
Wanneer je bepaalde functionaliteiten herhaaldelijk moet uitvoeren, bijvoorbeeld wanneer je in 1 scriptrun een API moet aanspreken met verschillende parameters, is het handig om het script modulair op te bouwen met functions en die vervolgens te importeren in je hoofdscript.

Bepaal welke onderdelen geschikt om los te trekken die je later kan aanroepen in je hoofdscript.