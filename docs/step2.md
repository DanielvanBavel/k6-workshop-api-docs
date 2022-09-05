---
sidebar_position: 3
---

# Opdracht 2
In opdracht 2 gaan we beginnen met het uitvoeren van een test op de Raspberry PI. Verander de URL van het vorige script naar de URL van de applicatie op de Raspberry PI.

<i>Bekijk het grafana dashboard om te zien of er de data binnenkomt.<i>

```javascript
import http from 'k6/http'

export default function() {
    http.get('10.0.0.242:8888/demo')
}
```

[Ga naar opdracht 3](https://danielvanbavel.github.io/k6-workshop-api-docs/step3)