import Nakokulmain from "../../App";
import { type Component, onMount, createSignal, createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import "../../webcomponent/Nakokulmain-webcomponent";
import TextInput from "./TextInput/TextInput";
import TextInputArray from "./TextInput/TextInputArray";
import SelectNumber from "./Select/SelectNumber";
import SelectColor from "./Select/SelectColor";
import TextAreaWordpress from "./TextAreaWordpress/TextAreaWordpress";
import AddOrDeleteStandpoint from "./AddOrDeleteStandpoint/AddOrDeleteStandpoint";
import defaultProps from "../data/defaultProps";

const CACHE_KEY = "nakokulmain_cache";

const Root: Component = () => {
  const getCachedProps = () => {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : defaultProps;
  };

  const [store, setStore] = createStore(getCachedProps());

  const [value, setValue] = createSignal("1");

  onMount(() => {
    // Add this new effect
    setTimeout(() => {
      document.querySelectorAll("details").forEach((detail) => {
        detail.open = false;
      });
    }, 0); // Short delay to ensure details are rendered
  });

  createEffect(() => {
    localStorage.setItem(CACHE_KEY, JSON.stringify(store));
  });

  return (
    <>
      <figcaption>
        <h2>Näkökulmaimen editointityökalu</h2>
        <p>
          Oheisilla valinnoilla voit reaaliaikaisesti muokata Näkökulmainta.
        </p>
      </figcaption>
      <fieldset>
        <legend>Yleiset tekstit</legend>
        <details open={true}>
          <summary>Muokkaa yleisiä tekstejä</summary>
          <TextInput
            value={store.otsikko}
            setter={setStore}
            getterKey="otsikko"
            label="Pääotsikko"
            type="singleline"
          />
          <TextInput
            value={store.painike}
            setter={setStore}
            getterKey="painike"
            label="Painike"
            type="singleline"
          />
          <TextInput
            value={store.oletus}
            setter={setStore}
            getterKey="oletus"
            label="Yläotsikko"
            type="singleline"
          />
          <TextInput
            value={store.seuraus}
            setter={setStore}
            getterKey="seuraus"
            label="Alaotsikko"
            type="singleline"
          />
          <TextInput
            value={store.opasteotsikko1}
            setter={setStore}
            getterKey="opasteotsikko1"
            label="Yläotsikon opasteotsikko"
            type="singleline"
          />
          <TextInput
            value={store.opasteteksti1}
            setter={setStore}
            getterKey="opasteteksti1"
            label="Yläotsikon opasteteksti"
            mdSupport={true}
            type="multiline"
          />
          <TextInput
            value={store.opasteotsikko2}
            setter={setStore}
            getterKey="opasteotsikko2"
            label="Alaotsikon opasteotsikko"
            type="singleline"
          />
          <TextInput
            value={store.opasteteksti2}
            setter={setStore}
            getterKey="opasteteksti2"
            label="Alaotsikon opasteteksti"
            mdSupport={true}
            type="multiline"
          />
          <TextInput
            value={store.opasteotsikko3}
            setter={setStore}
            getterKey="opasteotsikko3"
            label="Korttien opasteotsikko"
            type="singleline"
          />
          <TextInput
            value={store.opasteteksti3}
            setter={setStore}
            getterKey="opasteteksti3"
            label="Korttien opasteteksti"
            mdSupport={true}
            type="multiline"
          />
          <TextInput
            value={store.tekstiversio}
            setter={setStore}
            getterKey="tekstiversio"
            label="Tekstiversio"
            mdSupport={true}
            type="singleline"
          />
        </details>
      </fieldset>
      <fieldset>
        <legend>Näkökulmakohtaiset tekstit</legend>
        <details open={true}>
          <summary>Muokkaa näkökulmien tekstejä</summary>
          <SelectNumber
            themes={store.teemat}
            value={value()}
            setValue={setValue}
          />
          <Show when={JSON.parse(store.teemat).length < 6}>
            <AddOrDeleteStandpoint
              type="add"
              value={value()}
              setValue={setValue}
              store={store}
              setStore={setStore}
            />
          </Show>
          <Show when={JSON.parse(store.teemat).length > 3}>
            <AddOrDeleteStandpoint
              type="delete"
              value={value()}
              setValue={setValue}
              store={store}
              setStore={setStore}
            />
          </Show>
          <TextInputArray
            index={value()}
            value={store.teemat}
            setter={setStore}
            getterKey="teemat"
            label="Näkökulman otsikko"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_kuvaus}
            setter={setStore}
            getterKey="teema_kuvaus"
            label="Näkökulman kuvaus"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_esimerkit}
            setter={setStore}
            getterKey="teema_esimerkit"
            label="Näkökulman esimerkit (tämä teksti 'esimerkkejä' otsikon alla)"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_kysymykset}
            setter={setStore}
            getterKey="teema_kysymykset"
            label="Näkökulman kysymykset (tämä teksti 'Pohdittavia kysymyksiä' otsikon alla)"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_linkit}
            setter={setStore}
            getterKey="teema_linkit"
            label="Näkökulman lähteet (merkitse tähän 1) jne. ja tekstin sekaan <sup>1</sup>)"
            type="multiline"
            mdSupport={true}
          />
          <p>Mahdollisuudet</p>
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_otsikko1}
            setter={setStore}
            getterKey="teema_mahdollisuudet_otsikko1"
            label="Otsikko 1"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_teksti1}
            setter={setStore}
            getterKey="teema_mahdollisuudet_teksti1"
            label="Kuvaus 1"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_otsikko2}
            setter={setStore}
            getterKey="teema_mahdollisuudet_otsikko2"
            label="Otsikko 2"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_teksti2}
            setter={setStore}
            getterKey="teema_mahdollisuudet_teksti2"
            label="Kuvaus 2"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_otsikko3}
            setter={setStore}
            getterKey="teema_mahdollisuudet_otsikko3"
            label="Otsikko 3"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_teksti3}
            setter={setStore}
            getterKey="teema_mahdollisuudet_teksti3"
            label="Kuvaus 3"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_otsikko4}
            setter={setStore}
            getterKey="teema_mahdollisuudet_otsikko4"
            label="Otsikko 4"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_teksti4}
            setter={setStore}
            getterKey="teema_mahdollisuudet_teksti4"
            label="Kuvaus 4"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_otsikko5}
            setter={setStore}
            getterKey="teema_mahdollisuudet_otsikko5"
            label="Otsikko 5"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_teksti5}
            setter={setStore}
            getterKey="teema_mahdollisuudet_teksti5"
            label="Kuvaus 5"
            mdSupport={true}
            type="multiline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_otsikko6}
            setter={setStore}
            getterKey="teema_mahdollisuudet_otsikko6"
            label="Otsikko 6"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_mahdollisuudet_teksti6}
            setter={setStore}
            getterKey="teema_mahdollisuudet_teksti6"
            label="Kuvaus 6"
            mdSupport={true}
            type="multiline"
          />
          <p>Haasteet</p>
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_otsikko1}
            setter={setStore}
            getterKey="teema_haasteet_otsikko1"
            label="Otsikko 1"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_teksti1}
            setter={setStore}
            getterKey="teema_haasteet_teksti1"
            label="Kuvaus 1"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_otsikko2}
            setter={setStore}
            getterKey="teema_haasteet_otsikko2"
            label="Otsikko 2"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_teksti2}
            setter={setStore}
            getterKey="teema_haasteet_teksti2"
            label="Kuvaus 2"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_otsikko3}
            setter={setStore}
            getterKey="teema_haasteet_otsikko3"
            label="Otsikko 3"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_teksti3}
            setter={setStore}
            getterKey="teema_haasteet_teksti3"
            label="Kuvaus 3"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_otsikko4}
            setter={setStore}
            getterKey="teema_haasteet_otsikko4"
            label="Otsikko 4"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_teksti4}
            setter={setStore}
            getterKey="teema_haasteet_teksti4"
            label="Kuvaus 4"
            type="multiline"
            mdSupport={true}
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_otsikko5}
            setter={setStore}
            getterKey="teema_haasteet_otsikko5"
            label="Otsikko 5"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_teksti5}
            setter={setStore}
            getterKey="teema_haasteet_teksti5"
            label="Kuvaus 5"
            mdSupport={true}
            type="multiline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_otsikko6}
            setter={setStore}
            getterKey="teema_haasteet_otsikko6"
            label="Otsikko 6"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_haasteet_teksti6}
            setter={setStore}
            getterKey="teema_haasteet_teksti6"
            label="Kuvaus 6"
            mdSupport={true}
            type="multiline"
          />
          <p>Lisäasetukset</p>
          <SelectColor
            index={value()}
            store={store}
            setter={setStore}
            getterKey="teema_taustavari"
            getterKeyText="teema_tekstivari"
            label="Näkökulman taustaväri (laatikko)"
          />
          <TextInputArray
            index={value()}
            value={store.teema_tekstikoko}
            setter={setStore}
            getterKey="teema_tekstikoko"
            label="Näkökulman tekstikoko (pienennä otsikkoa jos ei mahdu)"
            type="singleline"
          />
        </details>
      </fieldset>
      <fieldset>
        <legend>Wordpress-koodi</legend>
        <details open={true}>
          <summary>
            Kopioi tästä valikosta koodi Wordpressiin, kun olet tehnyt haluamasi
            muutokset.
            <p>
              <i>
                Tätä valikkoa voi myös käyttää siten, että liität Wordpressistä
                koodin ja painat näkymän alalaidasta 'Tallenna muutokset'.
                Tällöin näkymään päivittyy liittämäsi tekstisisällöt.
              </i>
            </p>
          </summary>

          <TextAreaWordpress
            keys={Object.keys(defaultProps)}
            store={store}
            setter={setStore}
            label="Valitse kaikki teksti ja kopioi se. Liitä Wordpressiin."
          />
        </details>
      </fieldset>
      <Nakokulmain {...store} />
    </>
  );
};

export default Root;
