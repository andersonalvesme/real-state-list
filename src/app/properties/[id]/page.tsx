import { getById } from "@/lib/properties";
import { notFound } from "next/navigation";
import { getFormattedDate } from "@/utils/date.utils";
import Image from "next/image";
import Contact from "@/app/properties/[id]/contact";
import SaveProperty from "@/app/properties/[id]/save-property";
import GoBack from "@/app/properties/[id]/go-back";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id
  const property = await getById(id)

  if (!property) {
    notFound()
  }

  return (
    <>
      <div>
        <GoBack/>
      </div>
      <div className="grid grid-cols-6 gap-3 m-4">
        <div className="col-span-4">
          <div className="flex flex-col gap-3">
            <section className="flex flex-row justify-between">
              <div>
                <h1 className="text-lg">{property.Title}</h1>
                <h2 className="text-xs">{property.Location}</h2>
              </div>
              <div className="text-right">
                <div className="text-xl">$ {property["Sale Price"].toString().replace(/(.{3})(?=.)/g, "$1 ")}</div>
                <div className="text-xs text-gray-400">Date Listed: {getFormattedDate(property.DateListed)}</div>
              </div>
            </section>
            <section>
              <Image
                priority
                className="w-full h-full rounded border border-gray-300"
                src={property.PictureURL}
                alt={property.Title}
                width={660}
                height={440}
              />
            </section>
            <section className="flex flex-row justify-between border border-gray-300 rounded text-center gap-6 p-3">
              <div>
                <p className="text-xl">{property.Bedrooms}</p>
                <p className="text-gray-400">BED</p>
              </div>
              <div>
                <p className="text-xl">{property.Bathrooms}</p>
                <p className="text-gray-400">BATH</p>
              </div>
              <div>
                <p className="text-xl">{property.Parking}</p>
                <p className="text-gray-400">PARKING</p>
              </div>
              <div>
                <p className="text-xl">{property.Sqft}</p>
                <p className="text-gray-400">SQFT</p>
              </div>
              <div>
                <p className="text-xl">{property.YearBuilt}</p>
                <p className="text-gray-400">YEAR BUILT</p>
              </div>
            </section>
            <section>
              <p className="text-gray-400">
                {property.Description}
              </p>
            </section>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-3">
            <section>
              <SaveProperty property={property}/>
            </section>
            <section>
              <Contact/>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
