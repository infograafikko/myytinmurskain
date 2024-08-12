export const keyList = [
  "teemat",
  "teema_tekstivari",
  "teema_taustavari",
  "teema_tekstikoko",
  "teema_kuvaus",
  "teema_mahdollisuudet_otsikko1",
  "teema_mahdollisuudet_otsikko2",
  "teema_mahdollisuudet_otsikko3",
  "teema_mahdollisuudet_otsikko4",
  "teema_mahdollisuudet_otsikko5",
  "teema_mahdollisuudet_otsikko6",
  "teema_mahdollisuudet_teksti1",
  "teema_mahdollisuudet_teksti2",
  "teema_mahdollisuudet_teksti3",
  "teema_mahdollisuudet_teksti4",
  "teema_mahdollisuudet_teksti5",
  "teema_mahdollisuudet_teksti6",
  "teema_haasteet_otsikko1",
  "teema_haasteet_otsikko2",
  "teema_haasteet_otsikko3",
  "teema_haasteet_otsikko4",
  "teema_haasteet_otsikko5",
  "teema_haasteet_otsikko6",
  "teema_haasteet_teksti1",
  "teema_haasteet_teksti2",
  "teema_haasteet_teksti3",
  "teema_haasteet_teksti4",
  "teema_haasteet_teksti5",
  "teema_haasteet_teksti6",
  "teema_esimerkit",
  "teema_kysymykset"
];

export const rearrangeList = (store, index) => {
  console.log(store, index)

  const newParsedStore = {...store};

  keyList.forEach(key => {
    if (newParsedStore[key]) {
      newParsedStore[key] = JSON.parse(newParsedStore[key]);

      //move item to the end of the list
      //if client requests we can also empty whole item
      
        const item = newParsedStore[key].splice(index, 1);
        key !== "teemat" && newParsedStore[key].push(item[0]);
      
    }
  });

  return newParsedStore;
};