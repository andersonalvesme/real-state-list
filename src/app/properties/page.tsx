import { getAllLimits } from "@/lib/properties";
import Search, { PropertyAttributesType } from "@/app/properties/search";
import PropertyList from "@/app/properties/property-list";
import { Suspense } from "react";

export default async function Page({ searchParams }: { searchParams: PropertyAttributesType }) {
  const propertyLimits = await getAllLimits()

  return (
    <div className="flex flex-col gap-6 m-4">
      <Suspense fallback={<p>Loading...</p>}>
        <Search propertyLimits={propertyLimits}/>
      </Suspense>
      <PropertyList searchParams={searchParams}/>
    </div>
  );
}
