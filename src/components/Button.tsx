import { MouseEventHandler } from "react";
import cn from "classnames";

type ButtonType = {
  label: string;
  size?: string;
  full?: boolean;
  onClick?: MouseEventHandler;
}

export default function Button({ label, size = 'sm', full = true, onClick }: ButtonType) {
  return (
    <button
      className={cn("bg-blue-500 text-white rounded hover:bg-blue-600", {
        "p-1": size === 'sm',
        "p-2": size === 'md',
        "w-full": full === true,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
