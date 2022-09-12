---
sidebar_position: 3
---

# Opdrachten

## Opdracht 1 - Oefening
Maak lokaal een testscript aan op je laptop dat 1 http call naar google.nl doet. Als je klaar bent met het script voer het script uit via de command line.

[Hoe zat het ook alweer?](https://danielvanbavel.github.io/k6-workshop-api-docs/docs/k6)

## Opdracht 2 - Vusers & Duration
Nu gaan we een test uitvoeren op de RPi. gebruik hiervoor het ip-adres op het informatieblad bij de RPi.

Dit keer gebruiken we de options function om de parameter 'vu' en 'duration' aan mee te geven. 
- VU staat voor virtual users. Oftewel het aantal virtuele gebruikers dat je tijdens de performancetest wilt simuleren.
- Duration wordt gebruikt om de testduur aan te geven.

Deze parameters kan je meegeven in de command line of in het script via de options function. Voer verschillende testruns uit waarbij je de waardes van het aantal vusers en de duration iedere testrun verandert. Blijf goed monitoren tijdens de test om te kijken wat er gebeurt. 

Client-side kun je monitoren in je terminal, server-side kun je monitoren via het Grafana-dashboard wat is [uitgelegd in de introductie](https://danielvanbavel.github.io/k6-workshop-api-docs/docs/intro).

De client-side monitor je om het verloop van je test in de gaten te houden. Het geeft antwoord op de vraag ‘doet mijn performancetest wat ik bedoeld had’ Server-side monitor je om te zien hoe het SUT (System Under Test) zich houdt tijdens de performancetest. Het geeft antwoord op de vraag ‘hoe houdt het testobject zich tijdens deze performancetest?’.

## Opdracht 3 - dashboard maken
Zoals je wellicht is opgevallen, worden de testresultaten van K6 gelogd in de terminal. Dit is niet ideaal, omdat resultaten in de terminal niet opgeslagen worden. Daarom wil je dit het liefst in een testrapport opslaan, zodat je de resultaten later nog eens kunt terugkijken. Volg de stappen in de [GitHub repository](https://github.com/benc-uk/k6-reporter) voor het implementeren van een testrapport.

## Opdracht 4 - itereren
Voer drie keer een performancetest uit met 15 vusers en een duration van 2 minuten. Noteer na elke test het totaal aantal http_requests, wat valt je op?

Als het goed is, is het opgevallen dat het aantal http_requests bij elke testrun verschillend is. Dit heeft te maken met de responstijd van de RPi. Hoe sneller de RPi een response terug geeft, hoe meer http requests verwerkt kunnen worden. Door verschillende factoren, zoals verbindingssnelheid varieert de doorvoersnelheid (throughput).

Hoe de performancetest zich precies gedraagt in een omgeving valt niet te voorspellen. Dit is omgevingsafhankelijk door verschillende factoren zoals; het netwerk, de database, webservers en nog een aantal zaken. Wat je wel kan voorspellen is het aantal http_request dat wordt uitgevoerd tijdens de test doordat je dit van te voren kan berekenen.

Het probleem dat je bent tegengekomen, is dat het totaal aantal http request verschilt per testrun. Dat gaan we in deze opdracht oplossen door "iterations" toe te voegen aan de options function.

## Opdracht 5 - checks​
Een performancetest heeft, net zoals andere testen, validatie nodig. De validatie zorgt ervoor dat je als tester met overtuiging en vertrouwen kan zeggen dat de performancetest heeft gedaan wat je bedoeld hebt. Door bijvoorbeeld het verwerken van "checks" in de performancetest voor het inloggen, weet je zeker dat de gesimuleerde gebruiker ook daadwerkelijk is ingelogd.

Het valideren van het testresultaat zorgt er dus voor dat je zeker weet dat je het juiste response terug krijgt. K6 heeft verschillende validaties beschikbaar, ook wel checks genoemd. Daarnaast is het ook mogelijk om je eigen check te maken. In deze opdracht gebruiken we alleen de standaard validatie-technieken van K6.

Kies 2 of 3 validaties en verwerk deze in je test. Voer daarna de test een aantal keren opnieuw uit om te zien of de validaties werken.

Probeer ook eens je test te laten falen door de validatie. Verander bijvoorbeeld je testopzet eens.

[Hulp nodig?](https://k6.io/docs/using-k6/checks)

## Opdracht 6 - thresholds​
Naast checks zijn er ook thresholds (grenswaarden) in te stellen in K6. Het verschil is dat een check een true/false output heeft en werkt op request basis. Bijvoorbeeld "gaf dit request een "HTTP status code 200" terug?" Zo ja dan genereert de check een TRUE, zo nee dan wordt dit als FALSE geteld.

Een threshold is een pass/fail criteria die test overkoepelend werkt. Een threshold controleert bijvoorbeeld of in 99% van de gevallen de responsetijd lager was dan 0.5 seconden.

Implementeer 2 of meer verschillende thresholds in je test


[Hulp nodig?](https://k6.io/docs/using-k6/thresholds)

## Opdracht 7 - trend
Een trend is een object dat beschikbaar is in K6 en het mogelijk maakt om berekeningen te maken van requests zoals (min, max, gemiddelde of percentielen).

De waardes min en max geven, zoals je al kan voorspellen, de minimale en maximale waardes over de test. Hierbij is het goed om te kijken naar eventuele uitschieters. Welk request heeft hoge responsetijden gehad? Dit kan een indicatie geven van een mogelijk incident. Maar, beter is het om gebruik te maken van percentielen. Het gebruiken van percentielen is beter omdat, de waardes representatiever zijn dan de uitschieters min en max. Percentielen kan je lezen als in 90 procent van de gevallen was de responstijd voor request A 0,124 seconden.

Implementeer een trend in de test.

[Hulp nodig?](https://k6.io/docs/javascript-api/k6-metrics/trend)

## Opdracht 8 - configuratie
Wanneer het testscript com groter wordt krijg je meer te maken met variabelen. Om te zorgen dat het testscript onderhoudbaar blijft is het een goede gewoonte de variabele waarden te parametriseren. Daarom is het handig om een configuratiebestand te maken dat deze waardes bevat en ook gelijk op een plek staat.

Maak een configuratiebestand: <b>env.</b> Voeg alle hardcoded variabelen toe aan het env bestand en implementeer het env bestand in de test via een import statement. Voer de test opnieuw uit. Als je de variabelen goed hebt geparametriseerd, functioneert de test zoals daarvoor.

[Hulp nodig?](https://k6.io/docs/using-k6/environment-variables)

## Opdracht 9 - modules
Wanneer je bepaalde functionaliteiten herhaaldelijk moet uitvoeren, bijvoorbeeld wanneer je in een scriptrun een API moet aanspreken met verschillende parameters, is het handig om het script modulair op te bouwen met functions en die vervolgens te importeren in je hoofdscript.

Bepaal welke onderdelen geschikt zijn om los te trekken die je later kan aanroepen in je hoofdscript en verplaats deze naar een los script. Voor je hoofdscript uit om te kijken of het nog werkt.