import { Select } from "@kobalte/core/select";
import style from "./SelectNumber.module.css";
import { type Setter, createEffect } from "solid-js";
import CaretSortIcon from "./CaretSortIcon";

export default function SelectColor(props: {
  index: number;
  value: string;
  store: { [key: string]: string };
  setter: Setter<string>;
  getterKey: string;
  getterKeyText: string;
  label: string;
}) {
  const parsedArrBg = () => JSON.parse(props.store[props.getterKey]);
  const parsedArrText = () => JSON.parse(props.store[props.getterKeyText]);
  const i = () => props.index - 1;
  const thisBg = () => parsedArrBg()[i()];
  const thisText = () => parsedArrText()[i()];

  const colors = [
    {
      value: "var(--main-color)",
      label: "Keltainen",
      textcolor: "var(--main-text-color)",
    },
    {
      value: "var(--secondary-color)",
      label: "Vaaleanvihreä",
      textcolor: "var(--secondary-text-color)",
    },
    {
      value: "var(--tertiary-color)",
      label: "Tummankeltainen",
      textcolor: "var(--tertiary-text-color)",
    },
    {
      value: "var(--quaternary-color)",
      label: "Tummanvihreä",
      textcolor: "var(--quaternary-text-color)",
    },
    {
      value: "var(--quinary-color)",
      label: "Vaaleanpunainen",
      textcolor: "var(--quinary-text-color)",
    },
    {
      value: "var(--senary-color)",
      label: "Oranssi",
      textcolor: "var(--senary-text-color)",
    },
  ];

  createEffect(() => {
    console.log(colors.find((d) => d.value === thisBg()));
  });

  return (
    <Select
      class={style.select}
      optionValue="value"
      optionTextValue="label"
      onChange={(e) => {
        const newBg = e?.value;
        const newText = e?.textcolor;

        if (newBg) {
          const updatedArrBg = parsedArrBg();
          updatedArrBg[i()] = newBg;
          console.log(updatedArrBg);
          props.setter(props.getterKey, JSON.stringify(updatedArrBg));
        }

        if (newText) {
          const updatedArrText = parsedArrText();
          updatedArrText[i()] = newText;
          props.setter(props.getterKeyText, JSON.stringify(updatedArrText));
        }

        //props.setter(props.e.value);
      }}
      value={colors.find((d) => d.value === thisBg())}
      options={colors}
      placeholder="Valitse näkökulma"
      itemComponent={(props) => {
        return (
          <Select.Item item={props.item} class={style.select__item}>
            <Select.ItemLabel>{props.item.rawValue.label}</Select.ItemLabel>
            <Select.ItemIndicator
              class={style.select__item_indicator}
            ></Select.ItemIndicator>
          </Select.Item>
        );
      }}
    >
      <Select.Description>{props.label}</Select.Description>
      <Select.Trigger class={style.select__trigger} aria-label="Fruit">
        <Select.Value class={style.select__value}>
          {colors.find((d) => d.value === thisBg())?.label}
        </Select.Value>
        <Select.Icon class={style.select__icon}>
          <CaretSortIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content class={style.select__content}>
          <Select.Listbox class={style.select__listbox} />
        </Select.Content>
      </Select.Portal>
    </Select>
  );
}
