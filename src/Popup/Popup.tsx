import { type Component, mergeProps } from "solid-js";
import { Dialog } from "@kobalte/core/dialog";
import style from "./Popup.module.css";

type DialogProps = {
  open: boolean;
};

const Popup: Component<DialogProps> = (props) => {
  props = mergeProps({ open: false }, props);
  return (
    <Dialog open={props.open}>
      {/* <Dialog.Trigger class={style.dialog__trigger}>Open</Dialog.Trigger> */}
      <Dialog.Portal>
        <Dialog.Overlay class={style.dialog__overlay} />
        <div class={style.dialog__positioner}>
          <Dialog.Content class={style.dialog__content}>
            <div class={style.dialog__header}>
              <Dialog.Title class={style.dialog__title}>
                About Kobalte
              </Dialog.Title>
              <Dialog.CloseButton class="style.dialog__close-button">
                {/* <CrossIcon /> */}
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class="style.dialog__description">
              Kobalte is a UI toolkit for building accessible web apps and
              design systems with SolidJS. It provides a set of low-level UI
              components and primitives which can be the foundation for your
              design system implementation.
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog>
  );
};

export default Popup;
