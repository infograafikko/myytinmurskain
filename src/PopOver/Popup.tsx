import { type Component, createEffect } from "solid-js";
import { Dialog } from "@kobalte/core/dialog";
import style from "./Popup.module.css";
import Close from "../icons/Close";
import { useDataContext } from "../DataContext";
import snarkdown from "snarkdown";

type DialogProps = {
  open: boolean;
};

const Popup: Component<DialogProps> = (props) => {
  const { state, actions, memos } = useDataContext();
  const snarked = (t: string) => t.split("\n").map((line) => snarkdown(line));
  const trimmed = (data: any) =>
    data.description
      .split("\n")
      .map((line: string) => line.trim())
      .filter((line: string) => line.trim() !== "");
  createEffect(() => {
    const desc = memos
      .cardDetails()
      .description.split("\n")
      .map((line: string) => line.trim())
      .filter((line: string) => line.trim() !== "");
  });
  return (
    <Dialog
      open={state.popupOpen}
      preventScroll={true}
      onOpenChange={() => actions.setPopupOpen(false)}
    >
      {/* <Dialog.Trigger class={style.dialog__trigger}>Open</Dialog.Trigger> */}
      <Dialog.Portal>
        <Dialog.Overlay class={style.dialog__overlay} />
        <div class={style.dialog__positioner}>
          <Dialog.Content class={style.dialog__content}>
            <div class={style.dialog__header}>
              <Dialog.Title class={style.dialog__title}>
                {memos.cardDetails().title}
              </Dialog.Title>
              <Dialog.CloseButton
                onClick={() => actions.setPopupOpen(false)}
                class="style.dialog__close-button"
              >
                <Close size={16} />
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class={style.dialog__description}>
              {trimmed(memos.cardDetails()).map((line: string) => (
                <div innerHTML={snarked(line)} />
              ))}
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog>
  );
};

export default Popup;
