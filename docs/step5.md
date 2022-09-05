---
sidebar_position: 6
---

# Opdracht 5:
Implementeer nu een trend en voeg deze toe aan de thresholds.
- Voeg de k6 metrics library toe
- Maak een nieuwe trend aan
- Gebruik de add functie op de variable waarbij er een nieuwe trend instantie is aangemaakt.
- Voer het script opnieuw uit.

<b>Opdracht5.js</b>

```javascript
import { Trend } from 'k6/metrics'

const WaitingTrend = new Trend('waiting_time')

export default function() {
    const response = http.get('some url');
    WaitingTrend.add(response.timings.waiting);
}
```

```bash
k6 run script opdracht5.js
```

[Ga naar opdracht 6](https://danielvanbavel.github.io/k6-workshop-api-docs/step6)