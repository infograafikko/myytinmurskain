import MyytinmurskainApp from "../App";
import { customElement, noShadowDOM } from "solid-element";
import { render } from "solid-js/web";

const webComponent = customElement(
  "myytin-murskain",
  {
    oletus: "lorem ipsum",
    seuraus: "lorem ipsum",
    otsikko: "lorem ipsum",
    painike: "lorem ipsum",
    opasteotsikko: "lorem ipsum",
    opasteteksti: "lorem ipsum",
    teemat:
      '["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]',
    teema_tekstivari:
      '["var(--main-text-color)", "var(--secondary-text-color)", "var(--tertiary-text-color)", "var(--quaternary-text-color)", "var(--quinary-text-color)", "var(--senary-text-color)"]',
    teema_taustavari:
      '["var(--main-color)", "var(--secondary-color)", "var(--tertiary-color)", "var(--quaternary-color)", "var(--quinary-color)", "var(--senary-color)"]',
    teema_tekstikoko: '["7px", "4.6px", "7px", "7px", "7px"]',
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
  },
  (props, { element }) => {
    noShadowDOM();
    return <MyytinmurskainApp {...props} />;
  }
);

export { webComponent };
