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
    teema_tekstivari:
      '["var(--tertiary-text-color)", "var(--secondary-text-color)", "var(--main-text-color)", "var(--quaternary-text-color)", "var(--quinary-text-color)", "var(--senary-text-color)"]',
    teema_taustavari:
      '["var(--tertiary-color)", "var(--secondary-color)", "var(--main-color)", "var(--quaternary-color)", "var(--quinary-color)", "var(--senary-color)"]',
    teema_tekstikoko: '["6px", "4px", "6px", "6px", "6px", "6px"]',
    teema_kuvaus:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_otsikko1:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_teksti1:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_otsikko2:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_teksti2:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_otsikko3:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_teksti3:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_otsikko4:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_teksti4:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_otsikko5:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_teksti5:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_otsikko6:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_mahdollisuudet_teksti6:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_otsikko1:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_teksti1:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_otsikko2:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_teksti2:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_otsikko3:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_teksti3:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_otsikko4:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_teksti4:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_otsikko5:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_teksti5:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_otsikko6:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_haasteet_teksti6:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_esimerkit:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_kysymykset:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teemalinkit:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    tekstiversio: "[Lorem ipsum](https://www.google.fi)",
  },
  NakokulmainApp
);

export { webComponent };
