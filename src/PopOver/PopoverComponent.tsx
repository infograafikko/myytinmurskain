import { type Component, Match, Switch, Show, createSignal } from "solid-js";
import { Popover } from "@kobalte/core/popover";
import styles from "./PopoverComponent.module.css";
import { useDataContext } from "../DataContext";
import snarkdown from "snarkdown";
import Cursor from "../icons/Cursor";

const infos = [
  {
    title: "Näin käytät työkalua 1/3",
    description: "Ylhäällä näet skenaarion oletuksen",
    placement: "bottom-start",
  },
  {
    title: "Näin käytät työkalua 2/3",
    description:
      "Alhaalla näet oletuksen seurauksen. Otsikon perässä oleva kysymysmerkki indikoi ennusteeseen liittyvää epävarmuutta.",
    placement: "top-start",
  },
  {
    title: "Näin käytät työkalua 3/3",
    description:
      "Keskellä näet teemat, jotka vaikuttavat skenaarioon. **Klikkaa näkökulmia lukeaksesi niistä lisää.**",
    placement: "bottom-start",
  },
];

const PopoverBuilder: Component = (props) => {
  return (
    <div class={styles.container}>
      <Popover
        defaultOpen={true}
        anchorRef={props.ref}
        placement={props.placement}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            props.setTutorialStage(props.tutorialStage + 1);
          }
        }}
      >
        <Popover.Content class={styles.content}>
          <Popover.Arrow class={styles.arrow} />
          <div class={styles.header}>
            <Popover.Title class={styles.title}>{props.title}</Popover.Title>
          </div>
          <Popover.Description class={styles.description}>
            <p innerHTML={snarkdown(props.description)} />
            <div class={styles.buttonsContainer}>
              <button
                classList={{
                  [styles.buttonPrimary]: true,
                  [styles.button]: true,
                }}
                onClick={() => {
                  props.setTutorialStage(props.tutorialStage + 1);
                }}
              >
                <Switch>
                  <Match when={props.tutorialStage < 2}>Seuraava</Match>
                  <Match when={props.tutorialStage >= 2}>
                    Siirry työkaluun
                  </Match>
                </Switch>
              </button>
              <Show when={props.tutorialStage < 2}>
                <button
                  classList={{
                    [styles.buttonSecondary]: true,
                    [styles.button]: true,
                  }}
                  onClick={() => {
                    props.setTutorialStage(3);
                  }}
                  title="Ohita käyttopas ja siirry työkaluun"
                >
                  Ohita käyttöopas
                </button>
              </Show>
            </div>
          </Popover.Description>
        </Popover.Content>
      </Popover>
    </div>
  );
};

const PopoverComponent: Component = () => {
  const { state, actions } = useDataContext();

  const ref = () => {
    if (state.tutorialStage === 0) {
      return document.querySelector(".oletusotsikko");
    } else if (state.tutorialStage === 1) {
      return document.querySelector(".seurausotsikko");
    } else if (state.cardsRef) {
      const cards = state.cardsRef.querySelectorAll("g");
      const middleIndex = Math.ceil(cards.length / 2); // Calculate the middle index
      actions.setMiddleCard(middleIndex);
      return cards[middleIndex]; // Select the center card
    }
  };

  const currentCard = () => infos[state.tutorialStage];

  return (
    <Switch>
      <Match when={state.tutorialStage === 0}>
        <PopoverBuilder
          ref={ref}
          placement={currentCard().placement}
          title={currentCard().title}
          description={currentCard().description}
          setTutorialStage={actions.setTutorialStage}
          tutorialStage={state.tutorialStage}
        />
      </Match>
      <Match when={state.tutorialStage === 1}>
        <PopoverBuilder
          ref={ref}
          placement={currentCard().placement}
          title={currentCard().title}
          description={currentCard().description}
          setTutorialStage={actions.setTutorialStage}
          tutorialStage={state.tutorialStage}
        />
      </Match>
      <Match when={state.tutorialStage === 2}>
        <PopoverBuilder
          ref={ref}
          placement={currentCard().placement}
          title={currentCard().title}
          description={currentCard().description}
          setTutorialStage={actions.setTutorialStage}
          tutorialStage={state.tutorialStage}
        />
      </Match>
    </Switch>
  );
};

export default PopoverComponent;
