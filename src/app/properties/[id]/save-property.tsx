'use client'

import ButtonIcon from "@/components/ButtonIcon";
import { useState } from "react";
import { PropertyType } from "@/lib/properties";

type SavePropertyType = {
  property: PropertyType
}

export default function SaveProperty({ property }: SavePropertyType) {
  const [savedProperties, setSavedProperties] = useState<PropertyType[]>([])
  const isSaved = !!savedProperties.find(savedProperty => savedProperty.Id === property.Id);
  const handleSaveProperty = () => {

    if (isSaved) {
      setSavedProperties(prevState => (prevState.filter(entry => entry.Id !== property.Id)))
      return
    }

    setSavedProperties(prevState => ([...prevState, property]))
  }

  return (
    <>
      <div className="text-right h-11">
        <ButtonIcon full={false} size="md" solid={isSaved} onClick={handleSaveProperty}>Save Property</ButtonIcon>
      </div>
    </>
  )
}
