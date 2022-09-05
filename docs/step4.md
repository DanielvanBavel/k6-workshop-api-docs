---
sidebar_position: 5
---

# Opdracht 4:
Voeg 2 verschillende validaties toe aan de performance test door middel van thresholds
- Wijzig de aantallen vus en duration eens om te zien of je de PI onderuit kan halen
- Dit zou je dan ook terug moeten zien in het aantal http_req_failed
- Blijf goed monitoren in grafana

<b>Opdracht4.js</b>

```javascript
thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
```

```bash
k6 run script opdracht4.js
```

[Ga naar opdracht 5](https://danielvanbavel.github.io/k6-workshop-api-docs/step5)