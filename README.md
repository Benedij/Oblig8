# Oblig8

Jeg har delvis sett på denne oppgaven sammen med Jennie-Lovise og Lars Helland.

Fikk ikke react og sanity til å fungere samtidig (har greid begge separat). Etter å fikset ca. 4 forskjellige feilmeldinger, greide jeg ikke fikse “Error: listen EADDRINUSE:” og react localhost ville ikke åpne seg etter at jeg fikk åpnet sanity. Fikk sanity til å fungere en stund, men Schemas viste seg ikke der, og sist gang jeg prøvde å åpne det stod siden å lastet i mer enn 10 min men ingenting viste seg. 

Har prøvd å legge inn token og project ID, inne fra sanity manage, og fikk ikke en env.development mappe fram, så jeg lagde en selv. 

Fikk ikke til å teste ut noe særlig av koden siden jeg ikke greide å få både til å fungere på samme tid. 

client.js
const options = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID=5u2k8usb,
  dataset: process.env.REACT_APP_SANITY_DATASET_NAME=production,
  Token: process.env.REACT_APP_SANITY_TOKEN,
};

env.development
REACT_APP_SANITY_TOKEN=skAuzcpvQYuaR2wJBK8qPYjwnzzFoXPJur0Je8uGnKCwv4n80SCc73Dm9oDLVEdAWsn8rfnuvFpqkiXVWpnJvMwpKjUXTxPwKR9mstN2dP6xi1D2Vx2jU4dI5xusF1h04Mabvob6darXyxW53XCaIiSRspVRF2MZl4TtcgQKw12D4AA1g7pI
