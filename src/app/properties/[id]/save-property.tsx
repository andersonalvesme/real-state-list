'use client'

import ButtonIcon from "@/components/ButtonIcon";
import { PropertyType } from "@/lib/properties";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/contexts/app-context";

type SavePropertyType = {
  label?: string;
  invisible?: boolean;
  property: PropertyType
}

export default function SaveProperty({ label, property, ...props }: SavePropertyType) {
  const ctx = useContext(AppContext)
  const [isSaved, setIsSaved] = useState(false)

  const handleSaveProperty = () => {
    if (!isSaved) ctx.addSavedProperties(property)
    else ctx.delSavedProperties(property.Id)
  }

  useEffect(() => {
    setIsSaved(!!ctx.savedProperties.find((entry: PropertyType) => entry.Id === property.Id))
  }, [ctx.savedProperties]);

  return (
    <>
      <div className="text-right h-11">
        <ButtonIcon
          {...props}
          full={false}
          size="md"
          solid={isSaved}
          onClick={handleSaveProperty}
        >
          {label ?? null}
        </ButtonIcon>
      </div>
    </>
  )
}
