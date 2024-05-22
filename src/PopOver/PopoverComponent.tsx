import { type Component } from "solid-js";
import { Popover } from "@kobalte/core/popover";
import styles from "./PopoverComponent.module.css";
import { useDataContext } from "../DataContext";
import { useWindowSize } from "@solid-primitives/resize-observer";
import Close from "../icons/Close";
import Finger from "../icons/Finger";

const PopoverComponent: Component = () => {
  const { state } = useDataContext();
  const ref = () =>
    state.cardsRef && state.cardsRef.querySelectorAll("g")[state.selectedCard];

  return (
    <div class={styles.container}>
      <Popover defaultOpen={true} anchorRef={ref} placement="bottom-start">
        <Popover.Content class={styles.content}>
          <Popover.Arrow class={styles.arrow} />
          <div class={styles.header}>
            <Popover.Title class={styles.title}>
              Tutki teemoja interaktiivisella työkalulla
            </Popover.Title>
            <Popover.CloseButton class={styles.closeButton}>
              <Close size={16} />
            </Popover.CloseButton>
          </div>
          <Popover.Description class={styles.description}>
            Voit valita haluamasi teeman klikkaamalla siitä.
          </Popover.Description>
          <div class={styles.finger}>
            <Finger size={64} />
          </div>
        </Popover.Content>
      </Popover>
    </div>
  );
};

export default PopoverComponent;
