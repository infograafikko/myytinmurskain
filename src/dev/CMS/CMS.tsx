import Myytinmurskain from "../../App";
import { type Component, createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import "../../webcomponent/Myytinmurskain-webcomponent";
import TextInput from "./TextInput/TextInput";
import TextInputArray from "./TextInput/TextInputArray";
import SelectNumber from "./SelectNumber/SelectNumber";
import TextAreaWordpress from "./TextAreaWordpress/TextAreaWordpress";
const Root: Component = () => {
  const props = {
    otsikko:
      "Tekoäly yleistyy diagnostiikassa: tehostuuko sairaaloiden toiminta sen seurauksena?",
    oletus: "Oletus: Tekoäly yleistyy diagnostiikassa",
    seuraus: "Seuraus: Sairaaloiden toiminta tehostuu",
    painike: "Tutki näkökulmia interaktiivisella työkalulla",
    opasteotsikko: "Näin käytät työkalua",
    opasteteksti: "Voit valita haluamasi näkökulman klikkaamalla sitä.",
    teemat:
      '["Etiikka", "Sosiaaliset tekijät", "Talous", "Teknologia", "Regulaatio"]',
    teema_tekstivari:
      '["var(--main-text-color)", "var(--secondary-text-color)", "var(--tertiary-text-color)", "var(--quaternary-text-color)", "var(--quinary-text-color)", "var(--senary-text-color)"]',
    teema_taustavari:
      '["var(--main-color)", "var(--secondary-color)", "var(--tertiary-color)", "var(--quaternary-color)", "var(--quinary-color)", "var(--senary-color)"]',
    teema_tekstikoko: '["7px", "4.6px", "7px", "7px", "7px"]',
    teema_kuvaus:
      '["Potilasturvallisuus, yksityisyys sekä lääkärin ammattitaito ja vastuu päätöksenteosta ovat keskeisiä asioita, kun arvioidaan tekoälyn eettistä hyväksyttävyyttä ja turvallisuutta diagnostiikkaprosessissa.", "Sosiaaliset tekijät liittyvät potilaan ja lääkärin väliseen vuorovaikutukseen, ihmisten asenteisiin sekä lääkärien ammattitaitoon ja työympäristöön. On tärkeää ymmärtää, miten sosiaaliset tekijät voivat tukea tai rajoittaa tekoälyn tehokasta integrointia terveydenhuollon prosesseihin.", "Tekoälyllä on terveydenhuollossa potentiaalia vähentää kustannuksia, tehostaa prosesseja ja siten vähentää tarvetta työvoimalle. Tekoälyn läpimurto terveydenhuollossa edellyttää vakuuttavia näyttöjä investointien kannattavuudesta ja konkreettisista kustannussäästöistä.", "Teknologinen kehitys voi parantaa diagnostiikan tarkkuutta ja nopeutta. Tekoälyn hyödyntäminen diagnostiikassa on edennyt erityisesti kuvantunnistuksessa, data-analyysissa, ennusteiden tekemisessä ja kielimalleissa. Merkittävimmät haasteet liittyvät tekoälyn luotettavuuteen ja läpinäkyvyyteen.", "Regulaatio vaikuttaa merkittävästi siihen, miten terveydenhuollon tekoälyteknologiat voidaan ottaa käyttöön. Tekniset validoinnit, kliiniset jatkotutkimukset ja potilasdataa koskeva yksityisyydensuojalainsäädäntö saattavat rajoittaa tekoälyn laajamittaista käyttöönottoa."]',
    teema_mahdollisuudet_otsikko1:
      '["Tekoäly on vain lääkärin tukiäly", "Lisää aikaa vuorovaikutukselle", "Säästetty aika on säästettyä rahaa", "Kuvantunnistuksen kehitys", "Hyväksynnät ja merkinnät lisäävät luottamusta"]',
    teema_mahdollisuudet_teksti1:
      '["Vastuu diagnostisista päätöksistä säilyy lääkärillä, jolloin tekoäly itsessään ei voi aiheuttaa vahinkoa potilaille. Tekoälysovellukset, jotka antavat lääkärille lisätietoa ja tukevat tämän päätöksentekoa, voivat yleistyä lähivuosina.", "Hoitotyö perustuu luottamukselle, joka syntyy hyvästä vuorovaikutuksesta. Rutiinitehtävien ulkoistaminen tekoälylle säästää aikaa lääkärin ja potilaan väliselle vuorovaikutukselle.", "Rutiininomaisessa näytteiden tulkinnassa tekoäly voisi tunnistaa automaattisesti selvät sairaudet. Kasvainten sädehoidoissa tekoäly osaa jo nyt automaattisesti rajata säteen kohdealueen tarkasti siten, etteivät säteet osu terveeseen kudokseen.", "Röntgenkuvia analysoidaan jo nyt kuvantunnistusmalleilla. Toinen nouseva ala on digitaalinen patologia, jossa tekoäly tulkitsee kudosnäytteistä otettuja kuvia. Tekoäly voi tarkistaa kuvia paljon tehokkaammin kuin ihminen.", "Terveydenhuollon teknologiaa koskeva tiukka sääntely takaa, että sairaalakäyttöön hyväksytään vain turvallisiksi ja toimiviksi testattuja laitteita."]',
    teema_mahdollisuudet_otsikko2:
      '["","Raportointi paranee", "Kustannussäästöt datan hallinnassa", "Kielimallit lääkärin apuna", "Lääkintälaitteiden luokittelu ratkaisee vastuukysymyksiä"]',
    teema_mahdollisuudet_teksti2:
      '["", "Tekoälyn laatiessa raportin lääkäri voi keskittyä keskustelemaan potilaan kanssa. Lääkärien raporttien tiivistäminen tekoälyllä voi myös helpottaa yhteisen tietopohjan saavuttamista lääkärien välisissä palavereissa.", "Terveystiedoissa on paljon päällekkäisiä tietoja. Datan säilyttäminen vaatii maksullista palvelinkapasiteettia. Tekoälyn avulla voidaan poistaa turhia kopioita, mikä säästää palvelinkustannuksissa.", "Kielimalleista odotetaan kehittyvän lääkärin apulaisia, joita käytetään esimerkiksi perinteisen hakukoneen sijasta. Kielimalli pystyy kiteyttämään lääkärille tietoa suuresta lähdeaineistosta.", "Tekoälysovellukset voidaan juridisin perustein luokitella CE 2 -luokkaan, mikä tarkoittaa päätöksenteon tukena toimivaa laitetta. Näin vastuu diagnostisista päätöksistä säilyy lääkärillä."]',
    teema_mahdollisuudet_otsikko3:
      '["","", "Ennaltaehkäisy on hoitamista halvempaa", "Valtava kapasiteetti data-analyysissa", ""]',
    teema_mahdollisuudet_teksti3:
      '["", "", "Tekoälyn avulla voidaan analysoida laajoja, olemassa olevia datamassoja sairauksien ennalta ehkäisemiseksi. Ennaltaehkäiseminen on halvempaa kuin hoitaminen.", "Tekoäly voi tehdä potilasdataan perustuvia suosituksia sekä ennusteita sairauksien kehittymisestä. Tekoäly saattaa tehdä mys yllättäviä havaintoja, joita ei aiemmin ole osattu etsiä.", ""]',
    teema_mahdollisuudet_otsikko4: '["", "", "", "", ""]',
    teema_mahdollisuudet_teksti4: '["", "", "", "", ""]',
    teema_mahdollisuudet_otsikko5: '["", "", "", "", ""]',
    teema_mahdollisuudet_teksti5: '["", "", "", "", ""]',
    teema_mahdollisuudet_otsikko6: '["", "", "", "", ""]',
    teema_mahdollisuudet_teksti6: '["", "", "", "", ""]',
    teema_haasteet_otsikko1:
      '["Koulutusdata on arkaluontoista potilasdataa", "Sopeutuminen vaatii aikaa", "Alkuinvestointien korkeus", "Luotettavuus ja virheiden hallinta", "Luokituksen saaminen rajoittaa tekoälyn oppimista"]',
    teema_haasteet_teksti1:
      '["Diagnostinen tekoäly toimii sitä paremmin, mitä suuremmalla määrällä potilasdataa se on koulutettu. Potilasdata on hyvin arkaluontoista dataa, joten yksityisyydensuojasta ja tietoturvasta on huolehdittava erityisen hyvin.", "Suurin osa nykylääkäreistä ei käytä työssään tekoälyä. Uuden tekniikan omaksuminen osaksi päivittäistä työtä vaatii työntekijöiltä sopeutumista, uuden opettelua ja aikaa.", "Sairaaloiden taloustilanne ei ole kovin hyvä ja terveydenhuollon kustannukset ovat nousussa. Uuteen teknologiaan tehtävän sijoituksen pitäisi tuottaa säästöjä, mikä on toistaiseksi epävarmaa.", "Tekoälyn suurin teknologinen ongelma on epäluotettavuus. Potentiaalisimpia ovat sovelluskohteet, joissa lääkärin on helppoa varmentaa tai hylätä tekoälyn havainnot.", "CE-luokittelun saaminen on edellytys tekoälyn kliiniselle käytölle, mutta luokituksen saaminen edellyttää koulutuksen keskeyttämistä testin aikaiselle tasolle. Tämä rajoittaa tekoälyn potentiaalia."]',
    teema_haasteet_otsikko2:
      '["Vinoutunut tekoäly voi syrjiä vähemmistöjä", "Nonverbaalinen kommunikaatio", "Markkina kehittyy hitaasti", "Koulutusdataan liittyvät ongelmat", "Tietosuojalaki aiheuttaa haasteita tekoälykehitykselle"]',
    teema_haasteet_teksti2:
      '["Tekoäly toistaa koulutusdatassa olevia vinoumia. Jos esimerkiksi ihosyöpää tunnistavan tekoälyn koulutusdatassa on ollut vain vähän näytteitä tummaihoisilta, tekoälyn toimintavarmuus tummaihoisten potilaiden kohdalla voi jäädä heikoksi.", "Suuri osa potilaan ja lääkärin välisestä kommunikaatiosta on nonverbaalista. Tekoäly ei esimerkiksi havaitse kehonkieltä, mikä on haaste automaattiselle raportoinnille.","Maailmassa ei ole montaa terveydenhuollon tekoälyä kehittävää kannattavaa yritystä. Ei ole selvää, millaiset tekoälysovellukset osoittautuvat taloudellisesti kannattaviksi terveydenhuollossa.","Yksipuolisella datalla koulutettu malli toiminta ei välttämättä toimi hyvin, jos sille syötetään koulutusdatasta poikkeavaa aineistoa. Koulutusdatan tulisi olla laadukasta ja monipuolista.","Tekoälyn koulutusdata on potilasdataa, joka on hyvin arkaluontoista. Pääsy potilasdataan on rajattua. Tiukka tietosuojalainsäädäntö suojelee potilaiden yksityisyyttä, mutta tekee samalla tekoälyn kehittämisestä haastavaa."]',
    teema_haasteet_otsikko3:
      '["Uhkana lääkärien laiskistuminen", "Eri sairaaloiden prosessit eroavat toisistaan", "", "Mustan laatikon ongelma", ""]',
    teema_haasteet_teksti3:
      '["Jos tekoälylle annettaisiin voimakas ja itsenäinen rooli terveydenhuollossa, ammattilaiset saattaisivat laiskistua tai heidän suoritustasonsa heikentyä. Tästä syystä tekoälyä tulisi käyttää harkiten ja tiukkojen kriteerien alaisena.", "Diagnostisen prosessin automatisointi on hankalaa, sillä johtopäätökset ja päättelyketjut etenevät joka kerta hieman eri tavoin. Eri sairaaloiden prosessit toimivat hieman eri tavoin.", "", "Suurin osa tekoälymalleista on ns. mustia laatikoita eli niiden toimintaperiaate on epäselvä. Lääkärin tulisi kuitenkin pystyä tarkastelemaan tekoälyn päättelyketjua arvioidakseen tuloksen luotettavuutta. Tämä ei ole yleensä mahdollista.", ""]',
    teema_haasteet_otsikko4: '["", "", "", "", ""]',
    teema_haasteet_teksti4: '["", "", "", "", ""]',
    teema_haasteet_otsikko5: '["", "", "", "", ""]',
    teema_haasteet_teksti5: '["", "", "", "", ""]',
    teema_haasteet_otsikko6: '["", "", "", "", ""]',
    teema_haasteet_teksti6: '["", "", "", "", ""]',
    teema_esimerkit:
      '["Syöpänäytteitä tulkitseva tekoälysovellus ei havaitse näytteessä syöpää. Eettisesti toimiva lääkäri varmistaa itse, ettei näytteessä todella ole syöpää.", "Hermostuneen oloinen potilas naputtaa jalkaansa lattiaan lääkärin vastaanotolla. Raporttia laativa tekoäly poimii kuitenkin vain potilaan puhumat sanat.", "Kudosnäytteitä tulkitseva tekoäly pystyy poimimaan lukuisten näytteiden joukosta selkeät tapaukset, joiden diagnosointi on helppoa. Näin patologi ehtii tarkastaa päivän aikana aiempaa suuremman määrän näytteitä ja kustannus yhtä näytettä kohden pienenee.", "Silmänpohjakuvista, joilla diagnosoidaan diabetesta, on pystytty ennustamaan potilaan verenpainetta tai tunnistaa tupakoivia potilaita.", "Tekoälymalli saataisiin toimimaan parhaiten siten, että se koulutettaisiin tulevan käyttökohteensa tyypillisellä datalla. Esimerkiksi HUS:n käyttämä tekoälymalli koulutettaisiin HUS:n datalla. Lääkinnälliseksi laitteeksi hyväksyttyä tekoälymallia ei kuitenkaan saa jatkokouluttaa."]',
    teema_kysymykset:
      '["Miten voidaan huolehtia siitä, etteivät lääkärit ulkoista päätöksentekoa tekoälylle vaan käyttävät sitä nimenomaan oman ajattelunsa tukena? Miten tekoälyn vinoumia voidaan ehkäistä?", "Miten potilaat suhtautuvat tekoälyyn? Mikä merkitys sillä on hoidon kannalta? Sairaaloiden prosessit ja toimintamallit eroavat toisistaan. Miten tämä vaikuttaa tekoälyn käyttöönottoon sairaaloissa?", "Miten pystytään osoittamaan, tuottaako tekoälyn käyttö kustannussäästöjä? Miten voidaan tunnistaa taloudellisesti kannattavimmat diagnostiset tekoälysovellukset?", "Mille diagnostiikan alueille tekoäly sopii erityisen hyvin? Mihin se sopii huonosti? Miten voitaisiin parantaa tekoälyn läpinäkyvyyttä ja selitettävyyttä, jotta lääkärit pystyisivät paremmin arvioimaan havaintojen luotettavuutta?", "Miten sääntelyä voitaisiin kehittää niin, että tekoälymallin jatkokoulutus onnistuisi?", "Millaisella sääntelyllä voitaisiin samalla huolehtia potilaiden yksityisyydestä ja laadukkaan koulutusdatan saamisesta?"]',
  };

  const [store, setStore] = createStore({
    ...props,
  });

  const [value, setValue] = createSignal("1");

  createEffect(() => {
    console.log(store.otsikko);
  });

  return (
    <>
      <figcaption>
        <h2>Myytinmurskaimen editointityökalu</h2>
        <p>
          Oheisilla valinnoilla voit reaaliaikaisesti muokata Myytinmurskainta.
        </p>
      </figcaption>
      <fieldset>
        <legend>Yleiset tekstit</legend>
        <details>
          <summary>Muokkaa yleisiä tekstejä</summary>
          <TextInput
            value={store.otsikko}
            setter={setStore}
            getterKey="otsikko"
            label="Otsikko"
          />
          <TextInput
            value={store.oletus}
            setter={setStore}
            getterKey="oletus"
            label="Oletus"
          />
          <TextInput
            value={store.seuraus}
            setter={setStore}
            getterKey="seuraus"
            label="Seuraus"
          />
          <TextInput
            value={store.painike}
            setter={setStore}
            getterKey="painike"
            label="Painike"
          />
          <TextInput
            value={store.opasteotsikko}
            setter={setStore}
            getterKey="opasteotsikko"
            label="Opasteen otsikko"
          />
          <TextInput
            value={store.opasteteksti}
            setter={setStore}
            getterKey="opasteteksti"
            label="Opasteen teksti"
          />
        </details>
      </fieldset>
      <fieldset>
        <legend>Näkökulmakohtaiset tekstit</legend>
        <details>
          <summary>Muokkaa näkökulmien tekstejä</summary>
          <SelectNumber value={value()} setValue={setValue} />
          <TextInputArray
            index={value()}
            value={store.teemat}
            setter={setStore}
            getterKey="teemat"
            label="Teeman otsikko"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_kuvaus}
            setter={setStore}
            getterKey="teema_kuvaus"
            label="Teeman kuvaus"
            type="multiline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_esimerkit}
            setter={setStore}
            getterKey="teema_esimerkit"
            label="Teeman esimerkit (tämä teksti 'esimerkkejä' otsikon alla)"
            type="multiline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_kysymykset}
            setter={setStore}
            getterKey="teema_kysymykset"
            label="Teeman kysymykset (tämä teksti 'Pohdittavia kysymyksiä' otsikon alla)"
            type="multiline"
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
            type="multiline"
          />
          <p>Lisäasetukset</p>
          <TextInputArray
            index={value()}
            value={store.teema_taustavari}
            setter={setStore}
            getterKey="teema_taustavari"
            label="Teeman taustaväri (laatikko)"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_tekstivari}
            setter={setStore}
            getterKey="teema_tekstivari"
            label="Teeman tekstiväri"
            type="singleline"
          />
          <TextInputArray
            index={value()}
            value={store.teema_tekstikoko}
            setter={setStore}
            getterKey="teema_tekstikoko"
            label="Teeman tekstikoko (pienennä otsikkoa jos ei mahdu)"
            type="singleline"
          />
        </details>
      </fieldset>
      <fieldset>
        <legend>Wordpress-koodi</legend>
        <details>
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
            keys={Object.keys(props)}
            store={store}
            setter={setStore}
            label="Valitse kaikki teksti ja kopioi se. Liitä Wordpressiin."
          />
        </details>
      </fieldset>
      <Myytinmurskain {...store} />
    </>
  );
};

export default Root;
