import {
  type Component,
  Setter,
  Switch,
  Match,
  createEffect,
  Show,
} from "solid-js";
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
  const val = () => parsedArr()[i()];
  let ref;

  createEffect(() => {
    const textarea = ref.querySelector("textarea");
    if (textarea) {
      textarea.focus();

      setTimeout(() => {
        // Add a newline at the end
        const currentValue = textarea.value;
        textarea.value = currentValue + "\n";

        // Trigger input event
        textarea.dispatchEvent(new Event("input", { bubbles: true }));

        // Move cursor to the end
        textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
      }, 10);
    }
  });

  return (
    <div ref={ref}>
      <TextField
        class={style.textField}
        value={val()}
        onChange={(e) => {
          const newArr = parsedArr();
          newArr[i()] = e;
          props.setter(props.getterKey, JSON.stringify(newArr));
        }}
        name={props.label}
      >
        <TextField.Label class={style.textField__label}>
          {props.label}
          <Show when={props.mdSupport}>
            <span class={style.textField__label__mdSupport}> [MD-tuki]</span>
          </Show>
        </TextField.Label>
        <Switch>
          <Match when={props.type === "singleline"}>
            <div class={style.textField__inputContainer}>
              <TextField.Input class={style.textField__input} />
            </div>
          </Match>
          <Match when={props.type === "multiline"}>
            <TextField.TextArea class={style.textField__input} autoResize />
          </Match>
        </Switch>
      </TextField>
    </div>
  );
};

export default TextInputArray;
