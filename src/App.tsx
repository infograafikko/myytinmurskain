import { type Component, createSignal, createEffect, batch } from "solid-js";
import Layers from "./Layers";
import Popup from "./Popup/Popup";
import styles from "./App.module.css";

const cards = [
  {
    title: "Politiikka",
    textcolor: "var(--main-text-color)",
    bgcolor: "var(--main-color)",
    fontsize: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Ympäristö",
    textcolor: "var(--secondary-text-color)",
    bgcolor: "var(--secondary-color)",
    fontsize: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Teknologia",
    textcolor: "var(--tertiary-text-color)",
    bgcolor: "var(--tertiary-color)",
    fontsize: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Talous",
    textcolor: "var(--quaternary-text-color)",
    bgcolor: "var(--quaternary-color)",
    fontsize: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Sosiaaliset tekijät",
    textcolor: "var(--quinary-text-color)",
    bgcolor: "var(--quinary-color)",
    fontsize: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    title: "Etiikka",
    textcolor: "var(--senary-text-color)",
    bgcolor: "var(--senary-color)",
    fontsize: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
];

const App: Component = () => {
  const [open, setOpen] = createSignal(false);

  return (
    <figure class={styles.Figure}>
      <button onClick={() => setOpen(true)}>Avaa popup</button>
      <Popup open={open()} />
      <Layers cards={cards} />
    </figure>
  );
};

export default App;
