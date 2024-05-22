import { mergeProps, createEffect, onCleanup, Show, For } from "solid-js";
import styles from "./Layers.module.css";
import { useDataContext } from "../DataContext";
import SingleLayer from "./SingleLayer";

const Layers = (props) => {
  const { state, actions } = useDataContext();

  return (
    <div
      class={styles.layersContainer}
      style={{
        height: state.showLayers ? "100%" : "0",
        opacity: state.showLayers ? "1" : "0",
      }}
    >
      <p class={styles.arrow}>»</p>
      <svg
        class={styles.layers}
        viewBox="0 0 100 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g ref={actions.setCardsRef}>{props.children}</g>
      </svg>
      <p class={styles.arrow}>»</p>
    </div>
  );
};

const LayersContainer = () => {
  const { state } = useDataContext();

  return (
    <Layers showLayers={state.showLayers}>
      <For each={state.cards}>
        {(el, i) => {
          const totalElements = state.cards.length;
          const invertedIndex = totalElements - 1 - i();
          const offset = invertedIndex * 15 + 20; // Invert the offset
          const middle = (totalElements / 2) * 15;
          return (
            <SingleLayer
              index={i()}
              text={el.title}
              textcolor={el.textcolor}
              gradient={[el.bgcolor, el.bgcolor]}
              offset={[0, offset, 0]}
              middle={[0, middle, 0]}
              class={state.showLayers ? styles.Spread : styles.Packed}
              fontsize={el.fontsize}
            />
          );
        }}
      </For>
    </Layers>
  );
};

export default LayersContainer;
