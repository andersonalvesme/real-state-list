import { ChangeEventHandler } from "react";

type OptionType = {
  label: string;
  value?: string;
}
type SelectType = {
  id: string;
  name: string;
  value: string | undefined;
  options: OptionType[];
  onChange: ChangeEventHandler;
}

export default function Select({ id, name, value, options, onChange }: SelectType) {
  return (
    <select
      id={id}
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
