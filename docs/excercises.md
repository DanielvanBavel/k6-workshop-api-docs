---
sidebar_position: 2
---

# Opdrachten

## Opdracht 1
We gaan K6 uitproberen, hiervoor doen we een test op google.nl. Maak een opdracht1.js bestand aan op een locatie naar keuze. Als je klaar bent met het script voer het script uit via de commandline.

## Opdracht 2
Nu gaan we daadwerkelijk een test uitvoeren op de Raspberry PI. Dit keer gaan we gaan we de options function gebruiken om daar de vu en duration variable in mee te geven. 
- VU staat voor virtual users. Oftewel het aantal virtuele gebruikers dat je tijdens de performance test wilt simuleren.
- Duration wordt gebruikt om de testduur aan te geven.

Deze parameters kan je meegeven in de commandline of dus via de de options function. Wijzig de aantallen eens een paar keer. Blijf goed monitoren tijdens de test om te kijken wat het doet met de clientside en de Raspberry PI.

## Opdracht 3
Voer een performancetest 3 keer uit met 15 vusers voor 2 minuten. let hierbij goed op het aantal http_requests, wat valt je op?

Als je de testuitvoer goed hebt gemonitord (client-side), dan is als het goed is opgevallen dat het aantal http_requests elke testrun verschillend is. Dit heeft te maken met de responsetijd van de Raspberry PI. Hoe sneller de Raspberry PI een response terug geeft, hoe meer http requests verwerkt kunnen worden. Dit is geen gewenst gedrag. Hierdoor kan je niet vaststellen wat de test doet en weet je dus niet precies hoe zwaar de load zal zijn.

Los dat probleem in deze opdracht op.

## Opdracht 4
Een performancetest heeft net zoals een end-to-end test validatie nodig. Validatie zorgt ervoor dat je zeker weet dat je bijvoorbeeld de juiste response of bepaalde waarde terug krijgt. K6 heeft verschillende validaties beschikbaar, daarnaast is het ook mogelijk om je eigen validatie te maken. We beginnen in dit geval eerst met de standaard beschikbare validaties vanuit K6.


Kies 2 of 3 validaties en verwerk deze in je test, herhaal hierna je test een aantal keer om te kijken of de validaties werken.

Probeer ook eens je test te laten falen door de validatie. Veranderd bijvoorbeeld je testopzet eens.

[Hulp nodig?](https://k6.io/docs/using-k6/checks)

## Opdracht 5
Naast checks zijn er ook thresholds. Het verschil is dat een check een true/false output heeft en werkt op request basis. Thresholds zijn pass/fail criteria en functioneren over de hele test. Een threshold controleert bijvoorbeeld of de gemiddelde responsetijd lager was dan 0.2 seconden over de hele test.

Implementeer 2 of meer verschillende thresholds in je test

[Hulp nodig?](https://k6.io/docs/using-k6/thresholds)

## Opdracht 6
Trend is een object voor het weergeven van een aangepaste metriek waarmee verschillende statistieken over de toegevoegde waarden (min, max, gemiddelde of percentielen) kunnen worden berekend. Het is een van de vier custom metrics die beschikbaar zijn in K6.

Implementeer een Trend in de test.

[Hulp nodig?](https://k6.io/docs/javascript-api/k6-metrics/trend)

## Opdracht 7
Wanneer je test steeds groter wordt krijg je meer te maken met variabelen die je eigenlijk wil parametriseren, zoals vusers, duration, url. Daarom is het handig om een configuratie bestand te maken die deze waardes bezit en het op 1 centrale plek staat.

Maak een configuratie bestand: <b>.env</b>. Voeg alle hardcoded variabelen toe aan het env bestand en implenteer het env bestand in de test. Herhaal de test.

## Opdracht 8
Om logica te scheiden van implementatie maken we een service die gebruikt wordt in het test script. Creëer een functie in service.js die een getRequest afhandelt. Verwerk de implementaties uit de vorige opdrachten ook in service.js

<b>Voer het script uit via de commandline</b>

```bash
k6 run script oefeningen.js
```
