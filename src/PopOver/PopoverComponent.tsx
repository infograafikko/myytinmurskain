import { type Component, Match, Switch, Show, createSignal } from "solid-js";
import { Popover } from "@kobalte/core/popover";
import styles from "./PopoverComponent.module.css";
import { useDataContext } from "../DataContext";
import customSnarkdown from "../utils/snarkdownCustomizer";
const PopoverBuilder: Component = (props) => {
  //if no seuraus title then add 2 steps
  const addSteps = () => (props.seurausExist ? 1 : 2);

  return (
    <div class={styles.container}>
      <Popover
        defaultOpen={true}
        anchorRef={props.ref}
        placement={props.placement}
        sameWidth={true}
        fitViewport={false}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            props.setTutorialStage(props.tutorialStage + addSteps());
          }
        }}
      >
        <Popover.Content class={styles.content}>
          <Popover.Arrow class={styles.arrow} />
          <div class={styles.header}>
            <Popover.Title class={styles.title}>{props.title}</Popover.Title>
          </div>
          <Popover.Description class={styles.description}>
            <p innerHTML={customSnarkdown(props.description)} />
            <div class={styles.buttonsContainer}>
              <button
                classList={{
                  [styles.buttonPrimary]: true,
                  [styles.button]: true,
                }}
                onClick={() => {
                  props.setTutorialStage(props.tutorialStage + addSteps());
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
                  title="Ohita käyttöopas ja siirry työkaluun"
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

const PopoverComponent: Component = (props) => {
  const { state, actions } = useDataContext();

  const seurausExist = () => state.texts.seuraus.length > 0;
  console.log(state.texts.seuraus.length);

  const ref = () => {
    if (state.tutorialStage === 0) {
      return document.querySelector(".oletusotsikko");
    } else if (state.tutorialStage === 1 && seurausExist()) {
      return document.querySelector(".seurausotsikko");
    } else {
      const cards = state.cardsRef.querySelectorAll("g");
      const middleIndex = Math.ceil(cards.length / 2); // Calculate the middle index
      actions.setMiddleCard(middleIndex);
      return cards[middleIndex]; // Select the center card
    }
  };

  console.log(state.texts);

  const currentCard = () => state.texts;

  return (
    <Switch>
      <Match when={state.tutorialStage === 0}>
        <PopoverBuilder
          ref={ref}
          placement={"bottom-start"}
          title={currentCard()?.["opasteotsikko1"]}
          description={currentCard()?.["opasteteksti1"]}
          setTutorialStage={actions.setTutorialStage}
          tutorialStage={state.tutorialStage}
          seurausExist={seurausExist()}
        />
      </Match>
      <Match when={state.tutorialStage === 1}>
        <PopoverBuilder
          ref={ref}
          placement={"top-start"}
          title={currentCard()?.["opasteotsikko2"]}
          description={currentCard()?.["opasteteksti2"]}
          setTutorialStage={actions.setTutorialStage}
          tutorialStage={state.tutorialStage}
          seurausExist={seurausExist()}
        />
      </Match>
      <Match when={state.tutorialStage === 2}>
        <PopoverBuilder
          ref={ref}
          placement={"bottom-start"}
          title={currentCard()?.["opasteotsikko3"]}
          description={currentCard()?.["opasteteksti3"]}
          setTutorialStage={actions.setTutorialStage}
          tutorialStage={state.tutorialStage}
          seurausExist={seurausExist()}
        />
      </Match>
    </Switch>
  );
};

export default PopoverComponent;
