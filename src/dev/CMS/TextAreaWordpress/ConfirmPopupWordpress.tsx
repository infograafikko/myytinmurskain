import { type Component, createEffect, Show, For, batch } from "solid-js";
import { Dialog } from "@kobalte/core/dialog";
import style from "./ConfirmPopupWordpress.module.css";
import Close from "../../../icons/Close";
import buttonStyle from "./TextAreaWordpress.module.css";
import defaultProps from "../../data/defaultProps";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  type: "add" | "delete";
  store: any;
  setStore: any;
  value: any;
  setValue: any;
};

const ConfirmPopup: Component<DialogProps> = (props) => {
  //createEffect(() => console.log(memos.cardDetails()));
  return (
    <Dialog open={props.open} preventScroll={true} onOpenChange={props.onClose}>
      {/* <Dialog.Trigger class={style.dialog__trigger}>Open</Dialog.Trigger> */}
      <Dialog.Portal>
        <Dialog.Overlay class={style.dialog__overlay} />
        <div class={style.dialog__positioner}>
          <Dialog.Content class={style.dialog__content}>
            <div class={style.dialog__header}>
              <Dialog.Title class={style.dialog__title}>
                Vahvista valinta
              </Dialog.Title>
              <Dialog.CloseButton
                onClick={props.onClose}
                class={style["dialog__close-button"]}
                title="Sulje popup"
              >
                <Close size={16} />
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class={style.dialog__description}>
              <p>
                Oletko varma, että haluat poistaa tekemäsi sisällön ja palata
                alkuperäiseen dataan?
              </p>
              <p>Jos olet varma, klikkaa "Vahvista"</p>
              <button
                classList={{
                  [buttonStyle.button]: true,
                  [buttonStyle.buttonGray]: true,
                }}
                onClick={props.onClose}
              >
                Peruuta
              </button>
              <button
                classList={{
                  [buttonStyle.button]: true,
                  [buttonStyle.buttonBlack]: true,
                }}
                onClick={() => {
                  props.setStore(defaultProps);
                  props.onClose();
                }}
              >
                Vahvista
              </button>
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog>
  );
};

export default ConfirmPopup;
