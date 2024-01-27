import { MouseEventHandler } from "react";
import cn from "classnames";

type ButtonType = {
  label: string;
  size?: string;
  onClick?: MouseEventHandler;
}

export default function Button({ label, size = 'sm', onClick }: ButtonType) {
  return (
    <button
      className={cn("bg-blue-500 text-white w-full rounded hover:bg-blue-600", {
        "p-1": size === 'sm',
        "p-2": size === 'md'
      })}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
