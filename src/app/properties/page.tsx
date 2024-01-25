import { fetchProperties, fetchPropertiesLimits } from "@/app/properties/data";
import Image from "next/image";
import Search from "@/app/properties/search";
import Button from "@/components/Button";
import Link from "next/link";

export default async function Home() {
  const properties = await fetchProperties()
  const {
    maxBedrooms,
    maxBathrooms,
    maxParking,
    minRange,
    maxRange
  } = await fetchPropertiesLimits()

  return (
    <>
      <Search
        maxBedrooms={maxBedrooms}
        maxBathrooms={maxBathrooms}
        maxParking={maxParking}
        minRange={minRange}
        maxRange={maxRange}
      />

      <div className="mt-10 grid gap-y-6 gap-x-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
        {properties.map(property => {
          return (
            <div key={property.Id} className="max-w-[150px] border rounded-lg">
              <Link href="opa">
                <Image
                  className="rounded-tr-lg rounded-tl-lg"
                  src={property.ThumbnailURL}
                  alt={property.Title}
                  width={150}
                  height={150}
                />
              </Link>
              <div className="p-2">
                <h1 className="truncate" title={property.Title}>{property.Title}</h1>
                <div className="text-xs">{property.Location}</div>
                <div className="my-1 text-xs text-gray-400">{property.Bedrooms} beds | {property.Bathrooms} baths</div>
                <div className="mt-1 text-lg">$ {property["Sale Price"].toString().replace(/(.{3})(?=.)/g, "$1 ")}</div>
                <Button label="View Details"/>
              </div>
            </div>
          )
        })}
      </div>

    </>
  );
}
