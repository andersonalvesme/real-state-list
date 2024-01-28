'use client'

import Select from "@/components/Select";
import Button from "@/components/Button";
import DoubleRangeSlider from "@/components/DoubleRangeSlider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export type PropertyAttributesType = {
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  range_start?: number;
  range_end?: number;
}

export default function Search({ propertyLimits }: { propertyLimits: PropertyAttributesType }) {
  const { replace } = useRouter()

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams])

  const [filters, setFilters] = useState<PropertyAttributesType>({
    bedrooms: searchParams.get('bedrooms') ? parseInt(searchParams.get('bedrooms') ?? '') : undefined,
    bathrooms: searchParams.get('bathrooms') ? parseInt(searchParams.get('bathrooms') ?? '') : undefined,
    parking: searchParams.get('parking') ? parseInt(searchParams.get('parking') ?? '') : undefined,
    range_start: searchParams.get('range_start') ? parseInt(searchParams.get('range_start') ?? '') : undefined,
    range_end: searchParams.get('range_end') ? parseInt(searchParams.get('range_end') ?? '') : undefined,
  })

  const getOptions = (maxValue: number | undefined) => {
    if (!maxValue) return [{ label: '-', value: '-' }]

    const items = Array.from(Array(maxValue + 1).keys())

    return [
      { label: '-', value: '-' },
      ...items.map(value => ({ label: value.toString(), value: value.toString() }))
    ]
  }

  const handleInput = (event: any, remove = false) => {
    if (event.target.value !== '-' && !remove) {
      params.set(event.target.name, event.target.value)
    } else {
      params.delete(event.target.name)
    }

    setFilters(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleSearch = () => {
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-4">
      <div>
        <label htmlFor="filterBedrooms">Bedrooms:</label>
        <Select
          id="filterBedrooms"
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleInput}
          options={getOptions(propertyLimits.bedrooms)}
        />
      </div>
      <div>
        <label htmlFor="filterBathrooms">Bathrooms:</label>
        <Select
          id="filterBathrooms"
          name="bathrooms"
          value={filters.bathrooms}
          onChange={handleInput}
          options={getOptions(propertyLimits.bathrooms)}
        />
      </div>
      <div>
        <label htmlFor="filterParking">Parking:</label>
        <Select
          id="filterParking"
          name="parking"
          value={filters.parking}
          onChange={handleInput}
          options={getOptions((propertyLimits.parking))}
        />
      </div>
      <div className="flex">
        <label htmlFor="filterRange" className="mt-1">Price Range:</label>
        <DoubleRangeSlider
          min={propertyLimits.range_start}
          max={propertyLimits.range_end}
          onChange={handleInput}
          filters={filters}
        />
      </div>
      <div className="flex-none w-24">
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  )
}
