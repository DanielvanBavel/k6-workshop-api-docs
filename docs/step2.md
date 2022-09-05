---
sidebar_position: 2
---

# Intro opdracht 1
Mocht je nog niet gecheckt hebben of K6 goed geinstalleerd is? Voer dan deze opdracht uit, anders ga door naar opdracht 2. 

## Opdracht 1
- Maak een nieuwe project map aan
- Maak een nieuw bestand aan <b>opdracht1.js</b>
- voeg het import statement toe om gebruik te maken van de k6/http library.
- Maak een http call naar google
- Run je script

```javascript
import http from 'k6/http'

export default function() {
    http.get('http://www.google.nl')
}
```

```bash
k6 run script opdracht1.js
```

[Ga naar opdracht 2](https://danielvanbavel.github.io/k6-workshop-api-docs/step3)