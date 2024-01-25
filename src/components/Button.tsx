import { MouseEventHandler } from "react";

type ButtonType = {
  label: string;
  onClick?: MouseEventHandler;
}

export default function Button({ label, onClick }: ButtonType) {
  return (
    <button className="bg-blue-500 text-white p-1 w-full rounded" onClick={onClick}>
      {label}
    </button>
  )
}
