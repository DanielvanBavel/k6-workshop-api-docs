---
sidebar_position: 8
---

# Opdracht 7:
Om de logica te scheiden van de implementatie gaan we een service bouwen die vervolgens gebruikt kan worden in het test script.

- Maak een nieuwe map <b>Services</b> en voeg daar een bestand aan toe <b>apiService.js</b>
- Creeer een functie in de apiService.js die een getRequest afhandelt.
- Implementeer de service in het testscript

<b>apiService.js</b>
```javascript
import http from "k6/http";

export function getAll(endpoint) {
    http.get(endpoint)
}
```

<b>opdracht6.js</b>
```javascript
import * as apiService from '../services/apiService.js'

export default function() {
    http.getAll(`${env.devEnvironment}`)
}
```


<b>Voer het script uit via de commandline</b>
```bash
k6 run script opdracht6.js
```

[Ga naar opdracht 7](https://danielvanbavel.github.io/k6-workshop-api-docs/step7)