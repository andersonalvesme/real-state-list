import { getAll } from "@/lib/properties";
import PropertyListItem from "@/app/properties/property-list-item";
import { PropertyAttributesType } from "@/app/properties/search";

export default async function PropertyList({ searchParams }: { searchParams: PropertyAttributesType }) {
  const properties = await getAll(searchParams)

  return (
    <section className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
      {properties.map(property => <PropertyListItem key={property.Id} property={property}/>)}
    </section>
  )
}
