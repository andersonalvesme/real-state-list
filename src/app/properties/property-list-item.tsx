import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { PropertyType } from "@/lib/properties";
import SaveProperty from "@/app/properties/[id]/save-property";

type PropertyListItemType = {
  property: PropertyType
}

export default function PropertyListItem({ property }: PropertyListItemType) {
  return (
    <div className="overflow-hidden border rounded shadow hover:shadow-lg">
      <div className="relative block h-34 overflow-hidden">
        <div className="absolute z-10 right-0 text-white">
          <SaveProperty property={property} invisible={true}/>
        </div>
        <Link href={`/properties/${property.Id}`}>
          <Image
            priority
            className="object-cover w-full h-full transition-all hover:scale-110"
            src={property.ThumbnailURL}
            alt={property.Title}
            width={320}
            height={210}
          />
        </Link>
      </div>
      <div className="relative p-3 flex flex-col gap-2">
        <div>
          <h1 className="text-base truncate" title={property.Title}>{property.Title}</h1>
          <h2 className="text-xs">{property.Location}</h2>
        </div>
        <p className="text-xs text-gray-400">{property.Bedrooms} beds | {property.Bathrooms} baths</p>
        <p className="text-lg">
          $ {property["Sale Price"].toString().replace(/(.{3})(?=.)/g, "$1 ")}
        </p>
        <Link href={`/properties/${property.Id}`} className="w-full">
          <Button size="md">View Details</Button>
        </Link>
      </div>
    </div>
  )
}
