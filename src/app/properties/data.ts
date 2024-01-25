import { dataMocked } from "@/assets/dataMocked";

type PropertyType = {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  "Sale Price": number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

export async function fetchProperties(
  query?: string,
  currentPage?: number
): Promise<PropertyType[]> {
  try {
    return dataMocked
  } catch (error) {
    throw new Error('Occurred a problem getting from https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json')
  }
}

export async function fetchPropertiesLimits(): Promise<any> {
  try {
    const properties = dataMocked

    let maxBedrooms = 0;
    let maxBathrooms = 0;
    let maxParking = 0;
    let minRange = 0;
    let maxRange = 0;

    properties.forEach((property: PropertyType) => {
      maxBedrooms = Math.max(maxBedrooms, property.Bedrooms)
      maxBathrooms = Math.max(maxBathrooms, property.Bathrooms)
      maxParking = Math.max(maxParking, property.Parking)
      minRange = Math.min(minRange, property["Sale Price"])
      maxRange = Math.max(maxRange, property["Sale Price"])
    })

    return {
      maxBedrooms,
      maxBathrooms,
      maxParking,
      minRange,
      maxRange,
    }
  } catch (error) {
    throw new Error('Occurred a problem getting from https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json')
  }
}
