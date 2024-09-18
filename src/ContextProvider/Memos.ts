import { type TextType } from "../types/ContextType";

export const cardTextProvider = (texts: TextType, selectedCard: number) => {
  const teema = texts.teemat?.[selectedCard];
  if(teema) {
    const keys = [
        'teemat',
        'teema-kuvaus',
        'teema-mahdollisuudet-otsikko1',
        'teema-mahdollisuudet-teksti1',
        'teema-mahdollisuudet-otsikko2',
        'teema-mahdollisuudet-teksti2',
        'teema-mahdollisuudet-otsikko3',
        'teema-mahdollisuudet-teksti3',
        'teema-mahdollisuudet-otsikko4',
        'teema-mahdollisuudet-teksti4',
        'teema-mahdollisuudet-otsikko5',
        'teema-mahdollisuudet-teksti5',
        'teema-mahdollisuudet-otsikko6',
        'teema-mahdollisuudet-teksti6',
        'teema-haasteet-otsikko1',
        'teema-haasteet-teksti1',
        'teema-haasteet-otsikko2',
        'teema-haasteet-teksti2',
        'teema-haasteet-otsikko3',
        'teema-haasteet-teksti3',
        'teema-haasteet-otsikko4',
        'teema-haasteet-teksti4',
        'teema-haasteet-otsikko5',
        'teema-haasteet-teksti5',
        'teema-haasteet-otsikko6',
        'teema-haasteet-teksti6',
        'teema-esimerkit',
        'teema-kysymykset',
        'teema-linkit',
    ]
    return keys.reduce((acc, key) => {
        acc[key] = texts[key]?.[selectedCard];
        return acc;
      }, {});
  }
  return "NO";
};