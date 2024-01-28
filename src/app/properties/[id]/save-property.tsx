'use client'

import ButtonIcon from "@/components/ButtonIcon";
import { PropertyType } from "@/lib/properties";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

type SavePropertyType = {
  property: PropertyType
}

export default function SaveProperty({ property }: SavePropertyType) {
  const KEY = 'savedProperties'
  const savedProperties = useRef<PropertyType[]>([])
  const [isSaved, setIsSaved] = useState(false)
  const handleSaveProperty = () => {
    if (!isSaved) addItem()
    else removeItem()

    toast.message('Saved properties:', {
      description: savedProperties.current.map((entry: PropertyType) => (
        <div className="flex flex-row gap-2 w-full" key={entry.Id}>
          <div>{entry.Title}</div>
          <div className="text-right">$ {entry["Sale Price"].toString().replace(/(.{3})(?=.)/g, "$1 ")}</div>
        </div>
      )),
      position: 'top-center'
    })
  }
  const addItem = () => {
    savedProperties.current = [...savedProperties.current, property]
    localStorage.setItem(KEY, JSON.stringify(savedProperties.current))
    setIsSaved(true)
  }
  const removeItem = () => {
    savedProperties.current = savedProperties.current.filter((entry: PropertyType) => entry.Id !== property.Id)
    localStorage.setItem(KEY, JSON.stringify(savedProperties.current))
    setIsSaved(false)
  }

  useEffect(() => {
    savedProperties.current = JSON.parse(localStorage.getItem(KEY) ?? '[]')
    setIsSaved(!!savedProperties.current.find((entry: PropertyType) => entry.Id === property.Id))
  }, []);

  return (
    <>
      <div className="text-right h-11">
        <ButtonIcon full={false} size="md" solid={isSaved} onClick={handleSaveProperty}>Save Property</ButtonIcon>
      </div>
    </>
  )
}
