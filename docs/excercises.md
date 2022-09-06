---
sidebar_position: 2
---

# Excercises

## Opdracht 1
Mocht je nog niet gecheckt hebben of K6 goed geinstalleerd is? Voer dan deze opdracht uit, anders ga door naar opdracht 2. 

- Maak een nieuwe project map aan
- Maak een nieuw bestand aan <b>Oefeningen.js</b>
- Voeg het import statement toe om gebruik te maken van de k6/http library.
- Maak een http call naar google
- Run het script

## Opdracht 2
Nu gaan we load daadwerkelijk load op de Raspberry PI zetten. Volg hiervoor de volgende stappen:
- Gebruik de options function in je performance script en speel met de aantallen: vu & duration. 
- Blijf goed monitoren tijdens de test om te kijken wat het doet met de applicatie en de Raspberry PI.

## Opdracht 3
Voeg verschillende validaties toe aan de performance test door middel van thresholds

## Opdracht 4
Implementeer nu een trend en voeg deze toe aan de thresholds.
- Voeg de k6 metrics library toe
- Maak een nieuwe trend aan
- Gebruik de add functie op de variable waarbij er een nieuwe trend instantie is aangemaakt.

## Opdracht 5
Voeg een <b>.env</b> file toe aan je project om configuratie en test te scheiden van elkaar. Implementeer onderstaande variabelen

- URL Environment
- Vusers
- Duration

## Opdracht 6
Om de logica te scheiden van de implementatie gaan we een service bouwen die vervolgens gebruikt kan worden in het test script.

- Maak een nieuwe map <b>Services</b> en voeg daar een bestand aan toe <b>apiService.js</b>
- Creeer een functie in de apiService.js die een getRequest afhandelt.
- Implementeer de service in het testscript

<b>Voer het script uit via de commandline</b>

```bash
k6 run script oefeningen.js
```
