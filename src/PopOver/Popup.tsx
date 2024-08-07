import { type Component, createEffect, Show, For } from "solid-js";
import { Dialog } from "@kobalte/core/dialog";
import style from "./Popup.module.css";
import Close from "../icons/Close";
import { useDataContext } from "../DataContext";
import snarkdown from "snarkdown";

type DialogProps = {
  open: boolean;
};

const Details = (props: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <Show when={props?.title?.length > 0}>
      <details class={style.details}>
        <summary>{props.title}</summary>
        <p innerHTML={snarkdown(props.description)} />
      </details>
    </Show>
  );
};

const Popup: Component<DialogProps> = (props) => {
  const { state, actions, memos } = useDataContext();

  createEffect(() => console.log(memos.cardDetails()));
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
                {memos.cardDetails()?.teemat}
              </Dialog.Title>
              <Dialog.CloseButton
                onClick={() => actions.setPopupOpen(false)}
                class={style["dialog__close-button"]}
                title="Sulje popup"
              >
                <Close size={16} />
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class={style.dialog__description}>
              <p class={style.details__description}>
                {memos.cardDetails()?.teema_kuvaus}
              </p>
              {/* MAHDOLLISUUDET */}
              <div class={style.details__container}>
                <h3 class={style.details__title}>Mahdollisuudet</h3>
                <p class={style.details__subtitle}>
                  Paina alla olevia otsikoita lukeaksesi lisää aiheesta.
                </p>
                <For each={[1, 2, 3, 4, 5, 6]}>
                  {(el) => {
                    return (
                      <Details
                        title={
                          memos.cardDetails()?.[
                            "teema_mahdollisuudet_otsikko" + el
                          ]
                        }
                        description={
                          memos.cardDetails()?.[
                            "teema_mahdollisuudet_teksti" + el
                          ]
                        }
                        index={el}
                      />
                    );
                  }}
                </For>
              </div>
              {/* HAASTEET */}
              <div class={style.details__container}>
                <h3 class={style.details__title}>Haasteet</h3>
                <p class={style.details__subtitle}>
                  Paina alla olevia otsikoita lukeaksesi lisää aiheesta.
                </p>
                <For each={[1, 2, 3, 4, 5, 6]}>
                  {(el) => {
                    return (
                      <Details
                        title={
                          memos.cardDetails()?.["teema_haasteet_otsikko" + el]
                        }
                        description={
                          memos.cardDetails()?.["teema_haasteet_teksti" + el]
                        }
                        index={el}
                      />
                    );
                  }}
                </For>
              </div>
              {/* ESIMERKIT */}
              <h3 class={style.title}>Esimerkkejä</h3>
              <div
                class={style.content}
                innerHTML={snarkdown(memos.cardDetails()?.teema_esimerkit)}
              />
              {/* KYSYMYKSET */}
              <h3 class={style.title}>Pohdittavia kysymyksiä</h3>
              <div
                class={style.content}
                innerHTML={snarkdown(memos.cardDetails()?.teema_kysymykset)}
              />
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog>
  );
};

export default Popup;
