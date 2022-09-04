---
sidebar_position: 2
---

# Intro opdracht 1
Mocht je nog niet gecheckt hebben of K6 goed geinstalleerd is? Voer dan deze opdracht uit, anders ga door naar opdracht 2. 

## Opdracht 1
Maak een simpel script dat een request doet naar een willekeurige URL om te testen of K6 werkt.

```javascript
import http from 'k6/http'

export default function() {
    http.get('http://www.google.nl')
}
```

[Ga naar opdracht 2:](https://danielvanbavel.github.io/k6-workshop-api-docs/step3)