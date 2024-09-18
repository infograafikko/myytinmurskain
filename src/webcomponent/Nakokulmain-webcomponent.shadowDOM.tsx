import NakokulmainApp from "../App";
import { customElement } from "solid-element";

const webComponent = customElement(
  "nakokulmain-infograafi",
  {
    oletus: "lorem ipsum",
    seuraus: "lorem ipsum",
    otsikko: "lorem ipsum",
    painike: "lorem ipsum",
    opasteotsikko1: "Näin käytät työkalua 1/3",
    opasteteksti1: "Ylhäällä näet skenaarion oletuksen",
    opasteotsikko2: "Näin käytät työkalua 2/3",
    opasteteksti2: "Alhaalla näet oletuksen seurauksen.",
    opasteotsikko3: "Näin käytät työkalua 3/3",
    opasteteksti3:
      "Keskellä näet teemat, jotka vaikuttavat skenaarioon. **Klikkaa näkökulmia lukeaksesi niistä lisää.**",
    teemat:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-tekstivari":
      '["var(--tertiary-text-color)", "var(--secondary-text-color)", "var(--main-text-color)", "var(--quaternary-text-color)", "var(--quinary-text-color)", "var(--senary-text-color)"]',
    "teema-taustavari":
      '["var(--tertiary-color)", "var(--secondary-color)", "var(--main-color)", "var(--quaternary-color)", "var(--quinary-color)", "var(--senary-color)"]',
    "teema-tekstikoko": '["6px", "4px", "6px", "6px", "6px", "6px"]',
    "teema-kuvaus":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-otsikko1":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-teksti1":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-otsikko2":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-teksti2":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-otsikko3":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-teksti3":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-otsikko4":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-teksti4":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-otsikko5":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-teksti5":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-otsikko6":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-mahdollisuudet-teksti6":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-otsikko1":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-teksti1":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-otsikko2":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-teksti2":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-otsikko3":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-teksti3":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-otsikko4":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-teksti4":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-otsikko5":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-teksti5":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-otsikko6":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-haasteet-teksti6":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-esimerkit":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-kysymykset":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    "teema-linkit":
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    tekstiversio: "[Lorem ipsum](https://www.google.fi)",
  },
  NakokulmainApp
);

export { webComponent };
