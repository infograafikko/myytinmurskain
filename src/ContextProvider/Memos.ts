import { type TextType } from "../types/ContextType";

export const cardTextProvider = (texts: TextType, selectedCard: number) => {
  const teema = texts.teemat?.[selectedCard];
  if(teema) {
    const keys = [
        'teemat',
        'teema_kuvaus',
        'teema_mahdollisuudet_otsikko1',
        'teema_mahdollisuudet_teksti1',
        'teema_mahdollisuudet_otsikko2',
        'teema_mahdollisuudet_teksti2',
        'teema_mahdollisuudet_otsikko3',
        'teema_mahdollisuudet_teksti3',
        'teema_mahdollisuudet_otsikko4',
        'teema_mahdollisuudet_teksti4',
        'teema_mahdollisuudet_otsikko5',
        'teema_mahdollisuudet_teksti5',
        'teema_mahdollisuudet_otsikko6',
        'teema_mahdollisuudet_teksti6',
        'teema_haasteet_otsikko1',
        'teema_haasteet_teksti1',
        'teema_haasteet_otsikko2',
        'teema_haasteet_teksti2',
        'teema_haasteet_otsikko3',
        'teema_haasteet_teksti3',
        'teema_haasteet_otsikko4',
        'teema_haasteet_teksti4',
        'teema_haasteet_otsikko5',
        'teema_haasteet_teksti5',
        'teema_haasteet_otsikko6',
        'teema_haasteet_teksti6',
        'teema_esimerkit',
        'teema_kysymykset',
        'teemalinkit',
    ]
    return keys.reduce((acc, key) => {
        acc[key] = texts[key]?.[selectedCard];
        return acc;
      }, {});
  }
  return "NO";
};