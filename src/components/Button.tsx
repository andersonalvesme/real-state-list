import React, { MouseEventHandler, ReactNode } from "react";
import cn from "classnames";

export type ButtonType = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  size?: string;
  full?: boolean;
  invisible?: boolean;
  onClick?: MouseEventHandler;
}

export default function Button({
  children,
  size = 'sm',
  full = true,
  invisible = false,
  ...props
}: ButtonType) {
  return (
    <button
      {...props}
      className={cn("text-white rounded", {
        "p-1": size === 'sm',
        "p-2": size === 'md',
        "w-full": full === true,
        "bg-blue-500 hover:bg-blue-600": invisible === false,
      })}
    >
      {children}
    </button>
  )

}
