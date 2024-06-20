import { type Component, Setter, Show } from "solid-js";
import { TextField } from "@kobalte/core/text-field";

import style from "./TextInput.module.css";

const TextInputArray: Component = (props: {
  index: number;
  value: string;
  setter: Setter<string>;
  getterKey: string;
  label: string;
  type: "singleline" | "multiline";
}) => {
  const parsedArr = () => JSON.parse(props.value);
  const i = () => props.index - 1;
  console.log(parsedArr());
  return (
    <TextField
      class={style.textField}
      value={parsedArr()[i()]}
      onChange={(e) => {
        const newArr = parsedArr();
        newArr[i()] = e;
        props.setter(props.getterKey, JSON.stringify(newArr));
      }}
    >
      <TextField.Label class={style.textField__label}>
        {props.label}
      </TextField.Label>
      <Show when={props.type === "singleline"}>
        <div class={style.textField__inputContainer}>
          <TextField.Input class={style.textField__input} />
        </div>
      </Show>
      <Show when={props.type === "multiline"}>
        <TextField.TextArea class={style.textField__input} autoResize />
      </Show>
    </TextField>
  );
};

export default TextInputArray;
