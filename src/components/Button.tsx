import React, { ReactNode } from "react";
import cn from "classnames";

export type ButtonType = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  size?: string;
  full?: boolean;
}

export default function Button({ children, size = 'sm', full = true, ...props }: ButtonType) {
  return (
    <button
      {...props}
      className={cn("bg-blue-500 text-white rounded hover:bg-blue-600", {
        "p-1": size === 'sm',
        "p-2": size === 'md',
        "w-full": full === true,
      })}
    >
      {children}
    </button>
  )
}
