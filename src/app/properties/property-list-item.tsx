import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { PropertyType } from "@/lib/properties";

type PropertyListItemType = {
  property: PropertyType
}

export default function PropertyListItem({ property }: PropertyListItemType) {
  return (
    <div className="overflow-hidden border rounded shadow hover:shadow-lg">
      <Link href={`/properties/${property.Id}`} className="relative block h-34 overflow-hidden">
        <Image
          priority
          className="object-cover w-full h-full transition-all hover:scale-110"
          src={property.ThumbnailURL}
          alt={property.Title}
          width={320}
          height={210}
        />
      </Link>
      <div className="relative p-3 flex flex-col gap-2">
        <div>
          <h1 className="text-base truncate" title={property.Title}>{property.Title}</h1>
          <h2 className="text-xs">{property.Location}</h2>
        </div>
        <p className="text-xs text-gray-400">{property.Bedrooms} beds | {property.Bathrooms} baths</p>
        <p className="text-lg">
          $ {property["Sale Price"].toString().replace(/(.{3})(?=.)/g, "$1 ")}
        </p>
        <Button size="md" label="View Details"/>
      </div>
    </div>
  )
}
