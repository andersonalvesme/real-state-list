'use client'

import Select from "@/components/Select";
import Button from "@/components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DoubleRangeSlider from "@/components/DoubleRangeSlider";

type RangeType = [
  start: string,
  end: string,
]
type FiltersType = {
  bedrooms: string | undefined;
  bathrooms: string | undefined;
  parking: string | undefined;
  range: RangeType | undefined;
}

export default function Search({
  maxBedrooms,
  maxBathrooms,
  maxParking,
  minRange,
  maxRange,
}: {
  maxBedrooms: number;
  maxBathrooms: number;
  maxParking: number;
  minRange: number;
  maxRange: number;
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const params = new URLSearchParams(searchParams)

  const getOptions = (maxValue: number) => {
    if (!maxValue) return [{ label: '-', value: '-' }]

    const items = Array.from(Array(maxValue + 1).keys())
    items.shift()

    return [
      { label: '-', value: '-' },
      ...items.map(value => ({ label: value.toString(), value: value.toString() }))
    ]
  }

  const handleFilters = (event: any) => {
    event.target.value ? params.set(event.target.name, event.target.value) : params.delete(event.target.name)
  }

  const handleSearch = () => {
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap justify-between gap-2">
      <div>
        <label htmlFor="filterBedrooms">Bedrooms:</label>
        <Select
          id="filterBedrooms"
          name="bedrooms"
          value={searchParams.get('bedrooms')?.toString()}
          onChange={handleFilters}
          options={getOptions(maxBedrooms)}
        />
      </div>
      <div>
        <label htmlFor="filterBathrooms">Bathrooms:</label>
        <Select
          id="filterBathrooms"
          name="bathrooms"
          value={searchParams.get('bathrooms')?.toString()}
          onChange={handleFilters}
          options={getOptions(maxBathrooms)}
        />
      </div>
      <div>
        <label htmlFor="filterParking">Parking:</label>
        <Select
          id="filterParking"
          name="parking"
          value={searchParams.get('parking')?.toString()}
          onChange={handleFilters}
          options={getOptions(maxParking)}
        />
      </div>
      <div className="flex">
        <label htmlFor="filterRange" className="mt-1">Price Range:</label>
        <DoubleRangeSlider
          min={minRange}
          max={maxRange}
          onChange={({ min, max }: { min: number, max: number }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </div>
      <div className="flex-none w-24">
        <Button label="Search" onClick={handleSearch}/>
      </div>
    </div>
  )
}
