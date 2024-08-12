import { Select } from "@kobalte/core/select";
import style from "./SelectNumber.module.css";
import { Setter } from "solid-js";
import CaretSortIcon from "./CaretSortIcon";

export default function SelectNumber(props: {
  value: string;
  setValue: Setter<string>;
  themes: string;
}) {
  const value = () => props.value;
  const teemat = () =>
    JSON.parse(props.themes).map((d, i) => {
      return {
        value: i + 1,
        label: d,
      };
    });
  return (
    <Select
      class={style.select}
      optionValue="value"
      optionTextValue="label"
      onChange={(e) => {
        props.setValue(e.value);
      }}
      value={teemat()[value() - 1]}
      options={teemat()}
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
      <Select.Description>Valitse näkökulma</Select.Description>
      <Select.Trigger class={style.select__trigger} aria-label="Fruit">
        <Select.Value class={style.select__value}>
          {teemat()[value() - 1].label}
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
