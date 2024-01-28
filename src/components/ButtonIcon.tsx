import { MouseEventHandler } from "react";
import cn from "classnames";

type ButtonType = {
  label: string;
  size?: string;
  full?: boolean;
  onClick?: MouseEventHandler;
}

export default function ButtonIcon({ label, size = 'sm', full = true, onClick }: ButtonType) {
  return (
    <button
      className={cn("bg-blue-500 text-white rounded hover:bg-blue-600", {
        "p-1": size === 'sm',
        "p-2": size === 'md',
        "w-full": full === true,
      })}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
           className="w-5 h-5 inline mr-1">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
      </svg>
      {label}
    </button>
  )
}
