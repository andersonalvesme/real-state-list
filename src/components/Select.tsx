import { ChangeEventHandler } from "react";

type OptionType = {
  label: string;
  value: string;
}
type SelectType = {
  name: string;
  value: string | undefined;
  options: OptionType[];
  onChange: ChangeEventHandler;
}

export default function Select({ name, value, options, onChange }: SelectType) {
  return (
    <select
      name={name}
      className="p-1 rounded border border-slate-300"
      value={value}
      onChange={onChange}>
      {options.map((option: OptionType) => {
        return <option key={option.value} value={option.value}>{option.label}</option>
      })}
    </select>
  )
}
