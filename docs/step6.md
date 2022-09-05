---
sidebar_position: 7
---

# Opdracht 6:
Voeg een <b>.env</b> file toe aan je project om configuratie en test te scheiden van elkaar. Implementeer onderstaande variablen

- URL Environment
- Vusers
- duration

<i>env.js</i>
```javascript

//Dev EnvironmentURI
export let devEnvironment = "https://test-api.k6.io"

//TG1
export let TG1_DURATION="20s"
export let TG1_VU=1
export let TG1_ITERATION=1
```


```javascript
export let options = {
    vus : `${env.TG1_VU}`,
    duration: `${env.TG1_DURATION}`
}

export default function() {
    const result = http.get(`${env.devEnvironment}`)
}
```

[Ga naar opdracht 7](https://danielvanbavel.github.io/k6-workshop-api-docs/step7)