import { TextField } from "@kobalte/core/text-field";
import { Accessor, Setter, createSignal, createEffect } from "solid-js";
import style from "./TextAreaWordpress.module.css";

export default function TextAreaWordpress(props: {
  store: Accessor<string>;
  label: string;
  keys: string[];
  setter: Setter<string>;
}) {
  const componentTextValue = (keys: string[]) => {
    let value = "<myytin-murskain ";
    keys.forEach((key) => {
      value += `${key}='${props.store[key]}' `;
    });
    value += "></myytin-murskain>";
    return value;
  };

  const [localValue, setLocalValue] = createSignal(
    componentTextValue(props.keys)
  );

  // React to changes in the store and update localValue accordingly
  createEffect(() => {
    setLocalValue(componentTextValue(props.keys));
  });

  const handleOnChange = (e: Event) => {
    setLocalValue((e.target as HTMLTextAreaElement).value);
  };

  const handleOnSubmit = (e: Event) => {
    e.preventDefault();
    const newValue = localValue();
    const regex = /(\w+)='([^']+)'/g;
    let match;
    let updates = {};
    while ((match = regex.exec(newValue))) {
      const [_, key, val] = match;
      if (props.keys.includes(key)) {
        updates[key] = val; // Prepare updates
      }
    }
    // Apply all updates to the store
    Object.entries(updates).forEach(([key, val]) => {
      props.setter(key, val);
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <TextField class={style.textField}>
        <TextField.Label class={style.textField__label}>
          {props.label}
        </TextField.Label>
        <div class={style.textField__inputContainer}>
          <TextField.TextArea
            autoResize
            class={style.textField__input}
            value={localValue()}
            onInput={handleOnChange}
          />
        </div>
      </TextField>
      <button class={style.button} type="submit">
        Tallenna muutokset
      </button>
    </form>
  );
}
