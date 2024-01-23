'use client'

import Select from "@/components/Select";
import RangeSlider from "@/components/RangeSlider";
import Button from "@/components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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

export default function Search() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [filters, setFilters] = useState<FiltersType>({
    bedrooms: undefined,
    bathrooms: undefined,
    parking: undefined,
    range: undefined,
  })

  const handleFilters = (event: any) => {
    setFilters(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams)
    filters.bedrooms ? params.set('bedrooms', filters.bedrooms) : params.delete('bedrooms')
    filters.bathrooms ? params.set('bathrooms', filters.bathrooms) : params.delete('bathrooms')
    filters.parking ? params.set('parking', filters.parking) : params.delete('parking')
    filters.bathrooms ? params.set('bathrooms', filters.bathrooms) : params.delete('bathrooms')

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex">
      <div className="flex-1" style={{ border: '1px solid red' }}>
        <label>Bedrooms:</label>
        <Select
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleFilters}
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" }
          ]}/>
      </div>
      <div className="flex-1" style={{ border: '1px solid red' }}>
        <label>Bathrooms:</label>
        <Select options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" }
        ]}/>
      </div>
      <div className="flex-1" style={{ border: '1px solid red' }}>
        <label>Parking:</label>
        <Select options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" }
        ]}/>
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
