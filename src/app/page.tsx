import Search from "@/app/search";
import { fetchPropertiesLimits } from "@/app/data";

export default async function Home() {
  const {
    maxBedrooms,
    maxBathrooms,
    maxParking,
    minRange,
    maxRange
  } = await fetchPropertiesLimits()

  return (
    <Search
      maxBedrooms={maxBedrooms}
      maxBathrooms={maxBathrooms}
      maxParking={maxParking}
      minRange={minRange}
      maxRange={maxRange}
    />
  );
}
