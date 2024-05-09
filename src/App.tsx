import { type Component, createSignal, createEffect, batch } from "solid-js";
import CardDetailed from "./CardDetailed";
import { animateProgress } from "./functions/animateProgress";
import styles from "./App.module.css";

const cards = [
  {
    title: "Politiikka",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Ympäristö",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Teknologia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Talous",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Sosiaaliset tekijät",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Etiikka",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
];

const App: Component = () => {
  let cardsContainer: HTMLDivElement | undefined;
  const [selected, setSelected] = createSignal(0);
  const [transitioning, setTransitioning] = createSignal(true);
  const [cardPage, setCardPage] = createSignal(false);
  const handleToggle = (index: number, event: Event) => {
    event.preventDefault();
    if ((event.target as HTMLElement).tagName !== "BUTTON") {
      batch(() => {
        setTransitioning(false);
        setSelected(index);
        setCardPage(false);
      });
    }
  };

  createEffect(() => {
    const timeToAnimate = "10s";
    animateProgress(
      transitioning,
      timeToAnimate,
      cardsContainer,
      selected,
      setSelected,
      cards
    );
  });

  return (
    <figure class={styles.Figure}>
      {/* <figcaption class={styles.Figcaption}>
        <h2>Kokeile myytinmurskainta</h2>
      </figcaption> */}
      <h3>Oletus: Tekoäly tehostaa sote-alan työskentelyä</h3>
      <p class={styles.Down}>»</p>
      <div
        ref={cardsContainer}
        classList={{
          [styles.CardsContainer]: true,
          [styles.CardsContainerAnimate]: cardPage(),
        }}
      >
        <For each={cards}>
          {(card, i) => (
            <details
              open={i() === selected()}
              onClick={(e) => handleToggle(i(), e)}
              style={{
                "z-index":
                  i() > selected() && cardPage() ? selected() - 1 : i(),
                top: i() === selected() && cardPage() ? `-250px` : 0,
                "max-height":
                  i() === selected() && cardPage()
                    ? "2500px"
                    : i() === selected()
                      ? `225px`
                      : `50px`,
              }}
              classList={{
                [styles.Card]: true,
                [styles.CardSelectionPage]: i() === selected() && cardPage(),
                [styles.CardLast]: i() === cards.length - 1,
                [styles.CardSelected]: i() === selected(),
              }}
            >
              <summary>{card.title}</summary>
              <Show when={transitioning()}>
                <div
                  classList={{
                    ["ProgressBar"]: true,
                    [styles.ProgressBar]: true,
                    [styles.ProgressBarAnimate]: i() === selected(),
                  }}
                />
              </Show>

              <Show
                when={i() === selected() && cardPage()}
                fallback={<p>{card.description.slice(0, 120)}...</p>}
              >
                <p>{card.description}</p>
              </Show>

              <CardDetailed
                shouldShow={i() === selected() && cardPage()}
                setCardPage={setCardPage}
              />
              <button
                onClick={() => {
                  if (i() === selected() && !cardPage()) {
                    batch(() => {
                      setCardPage(true);
                      setTransitioning(false);
                    });
                  } else {
                    setCardPage(false);
                  }
                }}
              >
                {!cardPage() ? "Lue lisää »" : "Palaa alkuun »"}
              </button>
            </details>
          )}
        </For>
      </div>
      <p class={styles.Down}>»</p>
      <h3>Seuraus: Työvoiman tarve vähenee</h3>
    </figure>
  );
};

export default App;
