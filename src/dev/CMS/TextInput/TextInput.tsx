import { TextField } from "@kobalte/core/text-field";
import { Accessor, Setter, Show } from "solid-js";
import style from "./TextInput.module.css";
export default function TextInput(props: {
  label: string;
  description: string;
  value: string;
  setter: Setter<string>;
  getterKey: string;
  type: string;
}) {
  const value = () => props.value;
  return (
    <TextField
      class={style.textField}
      onChange={(e) => props.setter(props.getterKey, e)}
      value={value()}
    >
      <TextField.Label class={style.textField__label}>
        {props.label}
      </TextField.Label>
      <div class={style.textField__inputContainer}>
        <TextField.Input class={style.textField__input} />
      </div>
    </TextField>
  );
}
