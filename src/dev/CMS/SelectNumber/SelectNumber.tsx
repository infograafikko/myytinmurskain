import { Select } from "@kobalte/core/select";
import style from "./SelectNumber.module.css";
import { Setter } from "solid-js";
import CaretSortIcon from "./CaretSortIcon";

export default function SelectNumber(props: {
  value: string;
  setValue: Setter<string>;
}) {
  const value = () => props.value;
  return (
    <Select
      class={style.select}
      value={value()}
      onChange={(e) => props.setValue(e)}
      options={["1", "2", "3", "4", "5", "6"]}
      placeholder="Valitse näkökulma"
      itemComponent={(props) => (
        <Select.Item item={props.item} class={style.select__item}>
          <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
          <Select.ItemIndicator
            class={style.select__item_indicator}
          ></Select.ItemIndicator>
        </Select.Item>
      )}
    >
      <Select.Description>Valitse näkökulma</Select.Description>
      <Select.Trigger class={style.select__trigger} aria-label="Fruit">
        <Select.Value class={style.select__value}>{value()}</Select.Value>
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
