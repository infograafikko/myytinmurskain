import { Show, Index, For } from "solid-js";

import StylesForWebcomponent from "../utils/stylesWebcomponent";
import styles from "./Layers.module.css";
import * as cssStyle from "./Layers.module.css?inline";

import { useDataContext } from "../DataContext";
import SingleLayer from "./SingleLayer";
import Cursor from "../icons/Cursor";

const Layers = (props) => {
  const { state, actions } = useDataContext();
  return (
    <div
      classList={{
        [styles.layersContainer]: true,
        [styles.endTutorial]: state.showLayers && state.tutorialStage >= 2,
      }}
      class={styles.layersContainer}
      style={{
        height: state.showLayers ? "100%" : "0",
      }}
    >
      <p class={styles.tutorialText}>
        Paina otsikoita lukeaksesi näkökulmien vaikutuksista
      </p>
      <svg
        class={styles.layers}
        viewBox="0 0 100 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g ref={actions.setCardsRef}>{props.children}</g>
      </svg>
      <Show when={state.tutorialStage >= 2}>
        <div
          classList={{
            [styles.cursorContainer]: true,
          }}
          style={{
            opacity: state.tutorialStage === 2 ? 1 : 0,
          }}
        >
          <Cursor size={64} />
        </div>
      </Show>
      <Show when={state?.iswebcomponent}>
        <StylesForWebcomponent css={cssStyle} />
      </Show>
    </div>
  );
};

const LayersContainer = () => {
  const { state } = useDataContext();
  return (
    <Show when={state.texts.teemat}>
      <Layers showLayers={state.showLayers}>
        {state.texts.teemat.map((el, i) => {
          const totalElements = state.texts.teemat.length;
          const invertedIndex = totalElements - 1 - i;
          const offset = invertedIndex * 15 + 20; // Invert the offset
          const middle = (totalElements / 2) * 15;
          return (
            <SingleLayer
              index={i}
              text={el}
              textcolor={state.texts["teema-tekstivari"]?.[i]}
              gradient={[
                state.texts["teema-taustavari"]?.[i],
                state.texts["teema-taustavari"]?.[i],
              ]}
              offset={[0, offset, 0]}
              middle={[0, middle, 0]}
              classList={{}}
              class={styles.Spread}
              showPointer={state.showLayers && state.tutorialStage >= 2}
              fontsize={state.texts["teema-tekstikoko"]?.[i]}
            />
          );
        })}
      </Layers>
    </Show>
  );
};

export default LayersContainer;
