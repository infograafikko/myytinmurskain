import {
  type Component,
  Switch,
  Match,
  createSignal,
  createEffect,
} from "solid-js";
import styles from "./AddOrDeleteStandpoint.module.css";
import ConfirmPopup from "./ConfirmPopup";

const AddOrDeleteStandpoint: Component<{
  type: "add" | "delete";
  store: any;
  setStore: any;
  value: any;
  setValue: any;
}> = (props) => {
  const type = () => props.type;
  const [open, setOpen] = createSignal(false);
  createEffect(() => {
    console.log(props.value);
  });
  return (
    <>
      <button
        classList={{
          [styles.button]: true,
          [styles.buttonAdd]: type() === "add",
          [styles.buttonDelete]: type() === "delete",
        }}
        onClick={() => setOpen(true)}
      >
        {type() === "add" ? "Lisää uusi" : "Poista tämä"} näkökulma
      </button>
      <ConfirmPopup
        type={type()}
        open={open()}
        onClose={() => setOpen(false)}
        store={props.store}
        setStore={props.setStore}
        value={props.value}
        setValue={props.setValue}
      />
    </>
  );
};

export default AddOrDeleteStandpoint;
