import { type Component, createEffect, Show, For, batch } from "solid-js";
import { Dialog } from "@kobalte/core/dialog";
import style from "./ConfirmPopup.module.css";
import Close from "../../../icons/Close";
import buttonStyle from "./AddOrDeleteStandpoint.module.css";
import { rearrangeList, keyList } from "./rearrangeList";
import { produce } from "solid-js/store";

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
                {props.type === "add"
                  ? "Olet lisäämässä uuden näkökulman. Oletko varma, että haluat tehdä niin?"
                  : `Olet poistamassa valitsemasi näkökulman: ${JSON.parse(props.store.teemat)[props.value - 1]}. Oletko varma, että haluat tehdä niin?`}
              </p>
              <p>Jos olet varma, klikkaa "Vahvista"</p>
              <button class={buttonStyle.button} onClick={props.onClose}>
                Peruuta
              </button>
              <button
                classList={{
                  [buttonStyle.button]: true,
                  [buttonStyle.buttonAdd]: props.type === "add",
                  [buttonStyle.buttonDelete]: props.type === "delete",
                }}
                onClick={() => {
                  props.onClose();
                  const teematNow = JSON.parse(props.store.teemat);

                  if (props.type === "add") {
                    teematNow.push("Otsikko");
                    batch(() => {
                      props.setStore({
                        ...props.store,
                        teemat: JSON.stringify(teematNow),
                      });
                      props.setValue(teematNow.length);
                    });
                  } else {
                    const indexOfSelected = Number(props.value) - 1;
                    console.log(indexOfSelected, props.value, teematNow.length);

                    props.setValue(
                      Number(props.value) === teematNow.length
                        ? indexOfSelected
                        : props.value
                    );

                    //mutates data so that it matches the new order
                    const newList = rearrangeList(props.store, indexOfSelected);
                    //stringify the newList so that it matches the store
                    props.setStore(
                      produce((state) => {
                        keyList.forEach((key) => {
                          state[key] = JSON.stringify(newList[key]);
                        });
                      })
                    );
                  }
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
