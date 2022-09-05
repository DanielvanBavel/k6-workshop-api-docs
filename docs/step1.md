---
sidebar_position: 2
---

# Opdracht 1
Mocht je nog niet gecheckt hebben of K6 goed geinstalleerd is? Voer dan deze opdracht uit, anders ga door naar opdracht 2. 

- Maak een nieuwe project map aan
- Maak een nieuw bestand aan <b>opdracht1.js</b>
- Voeg het import statement toe om gebruik te maken van de k6/http library.
- Maak een http call naar google
- Run het script

<b>Opdracht1.js</b>

```javascript
export default function() {
    http.get('http://www.google.nl')
}
```


<b>Voer het script uit via de commandline</b>

```bash
k6 run script opdracht1.js
```
