---
sidebar_position: 3
---

# Raspberry PI informatie

Straks gaan we Raspberry PI's (RPi's) gebruiken voor verschillende opdrachten. Op de RPi gaan we een performancetest uitvoeren. Hiervoor is het een en ander ingeregeld op de RPi.

Elke RPi is aangesloten op een monitor. Alle RPi's hebben een ander IP-adres. Er hangen notitieblaadjes bij de RPi met het bijbehorende IP-adres. Elk IP-adres begint met 10.0.0.X. Elke RPi heeft een grafana dashboard en twee applicatie endpoints. 

Het grafana dashboard is te bereiken op:
- http://10.0.0.X:3000/


De applicatie endpoints zijn te bereiken op 
- http://10.0.0.X:8888/demo/
- http://10.0.0.X:8888/load/

Het demo endpoint geeft als response "Hello world" terug. Het load endpoint geeft als response de uitkomst van een berekening terug.