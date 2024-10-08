import { type Component, createEffect, Show, For } from "solid-js";
import { Dialog } from "@kobalte/core/dialog";
import style from "./Popup.module.css";
import * as cssStyle from "./Popup.module.css?inline";
import StylesForWebcomponent from "../utils/stylesWebcomponent";

import Close from "../icons/Close";
import { useDataContext } from "../DataContext";

import customSnarkdown from "../utils/snarkdownCustomizer";
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
        <p innerHTML={customSnarkdown(props.description)} />
      </details>
    </Show>
  );
};

const Popup: Component<DialogProps> = (props) => {
  const { state, actions, memos } = useDataContext();

  const isAndroid = () =>
    navigator.userAgent.match(/android/i) === null ? false : true;

  return (
    <div>
      <Dialog
        open={state.popupOpen}
        preventScroll={true}
        onOpenChange={(e) => {
          actions.setPopupOpen(false);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay class={style.dialog__overlay} />
          <div
            classList={{
              [style.dialog__positioner]: true,
              //seem to work on android on wordpress site
              //[style.android_device_dialog__positioner]: isAndroid(),
            }}
          >
            <Dialog.Content
              classList={{
                [style.dialog__content]: true,
                //seem to work on android on wordpress site
                //[style.android_device_dialog__content]: isAndroid(),
              }}
            >
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
                <p
                  class={style.details__description}
                  innerHTML={customSnarkdown(
                    memos.cardDetails()?.["teema-kuvaus"]
                  )}
                />

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
                              "teema-mahdollisuudet-otsikko" + el
                            ]
                          }
                          description={
                            memos.cardDetails()?.[
                              "teema-mahdollisuudet-teksti" + el
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
                            memos.cardDetails()?.["teema-haasteet-otsikko" + el]
                          }
                          description={
                            memos.cardDetails()?.["teema-haasteet-teksti" + el]
                          }
                          index={el}
                        />
                      );
                    }}
                  </For>
                </div>
                {/* ESIMERKIT */}
                <h3 class={style.title}>Esimerkkejä</h3>
                <div class={style.contentcontainer}>
                  <For
                    each={memos
                      .cardDetails()
                      ?.["teema-esimerkit"].split("\n\n")}
                  >
                    {(paragraph) => (
                      <div
                        class={style.content}
                        innerHTML={customSnarkdown(paragraph)}
                      />
                    )}
                  </For>
                </div>
                {/* KYSYMYKSET */}
                <h3 class={style.title}>Pohdittavia kysymyksiä</h3>
                <For
                  each={memos.cardDetails()?.["teema-kysymykset"].split("\n\n")}
                >
                  {(paragraph) => (
                    <div
                      class={style.content}
                      innerHTML={customSnarkdown(paragraph)}
                    />
                  )}
                </For>

                {/* Linkit */}
                <Show when={memos.cardDetails()?.["teema-linkit"].length > 0}>
                  <h3 class={style.title}>Lähteet</h3>
                  <For
                    each={memos.cardDetails()?.["teema-linkit"].split("\n\n")}
                  >
                    {(paragraph) => (
                      <div
                        class={style.content}
                        innerHTML={customSnarkdown(paragraph)}
                      />
                    )}
                  </For>
                </Show>
              </Dialog.Description>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      </Dialog>
      <Show when={state?.iswebcomponent}>
        <StylesForWebcomponent css={cssStyle} />
      </Show>
    </div>
  );
};

export default Popup;
