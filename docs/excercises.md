---
sidebar_position: 2
---

# Excercises

## Opdracht 1
Om te valideren of K6 goed functioneert, maak een test die een get request doet naar google.nl. Weet je zeker dat K6 goed geinstalleerd is, ga dan door naar opdracht 2.

## Opdracht 2
Nu gaan we daadwerkelijk een test uitvoeren op de Raspberry PI.
Gebruik de options function en voeg daar vu & duration aan toe. Wijzig de aantallen, blijf goed monitoren tijdens de test om te kijken wat het doet met de applicatie en de Raspberry PI.

## Opdracht 3
Als je de resultaten van de test in de gaten hebt gehouden, heb je gemerkt dat het aantal request heel erg wisselt en je dus niet kan voorspellen wat de load zal zijn. Los dat probleem in deze opdracht op.

## Opdracht 4
Voeg validaties toe aan de performance test door middel van thresholds.

## Opdracht 5
Implementeer nu een trend en voeg deze toe aan de thresholds.

## Opdracht 6
Maak een configuratie bestand: <b>.env</b>. implementeer deze vervolgens in je test bestand en vervang alle hardcoded configuratie door de waardes uit het .env bestand.

## Opdracht 7
Om logica te scheiden van implementatie maken we een service die gebruikt wordt in het test script. Creëer een functie in service.js die een getRequest afhandelt. Verwerk de implementaties uit de vorige opdrachten ook in service.js

<b>Voer het script uit via de commandline</b>

```bash
k6 run script oefeningen.js
```
