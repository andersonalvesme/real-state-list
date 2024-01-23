'use client'

import Select from "@/components/Select";
import RangeSlider from "@/components/RangeSlider";
import Button from "@/components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    if (!maxValue) return [{ label: '-', value: undefined }]

    const items = Array.from(Array(maxValue + 1).keys())
    items.shift()

    return [
      { label: '-', value: undefined },
      ...items.map(value => ({ label: value.toString(), value: value.toString() }))
    ]
  }

  const handleFilters = (event: any) => {
    event.target.value ? params.set(event.target.name, event.target.value) : params.delete(event.target.name)
  }

  const handleSearch = () => {
    console.log(params.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex">

      <div className="flex-1" style={{ border: '1px solid red' }}>
        <label htmlFor="filterBedrooms">Bedrooms:</label>
        <Select
          id="filterBedrooms"
          name="bedrooms"
          value={searchParams.get('bedrooms')?.toString()}
          onChange={handleFilters}
          options={getOptions(maxBedrooms)}
        />
      </div>

      <div className="flex-1" style={{ border: '1px solid red' }}>
        <label>Bathrooms:</label>
        <Select
          name="bathrooms"
          value={searchParams.get('bathrooms')?.toString()}
          onChange={handleFilters}
          options={getOptions(maxBathrooms)}
        />
      </div>
      <div className="flex-1" style={{ border: '1px solid red' }}>
        <label>Parking:</label>
        <Select
          name="parking"
          value={searchParams.get('parking')?.toString()}
          onChange={handleFilters}
          options={getOptions(maxParking)}
        />
      </div>

      <div className="flex-1" style={{ border: '1px solid red' }}>
        <label>Price Range:</label>
        <RangeSlider/>
      </div>

      <div className="flex-none w-24" style={{ border: '1px solid red' }}>
        <Button label="Search" onClick={handleSearch}/>
      </div>

    </div>
  )
}
