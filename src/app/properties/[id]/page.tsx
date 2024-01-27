import { getById } from "@/lib/properties";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id
  const property = await getById(id)

  if (!property) {
    notFound()
  }

  return (
    <div className="grid grid-cols-2 m-4">
      <div className="flex flex-row justify-between">
        <h1>{property.Title}</h1>

      </div>
      <div>

      </div>
    </div>
  )
}
