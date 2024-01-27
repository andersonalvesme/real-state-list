import { dataMocked } from "@/assets/dataMocked";
import { PropertyAttributesType } from "@/app/properties/search";

export type PropertyType = {
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

export async function fetchProperties(searchParams: PropertyAttributesType): Promise<PropertyType[]> {
  let properties = dataMocked

  if (searchParams?.bedrooms) {
    properties = properties.filter(property => {
      return property.Bedrooms == searchParams.bedrooms
    })
  }
  if (searchParams?.bathrooms) {
    properties = properties.filter(property => property.Bathrooms == searchParams.bathrooms)
  }
  if (searchParams?.parking) {
    properties = properties.filter(property => property.Parking == searchParams.parking)
  }
  if (searchParams?.range_start || searchParams?.range_end) {
    properties = properties.filter(property => {
      return (searchParams?.range_start ? searchParams.range_start <= property["Sale Price"] : true) &&
        (searchParams?.range_end ? searchParams.range_end >= property["Sale Price"] : true)
    })
  }

  return properties.slice(0, 8)
}

export async function fetchPropertiesLimits(): Promise<PropertyAttributesType> {
  const properties = dataMocked

  let bedrooms = 0;
  let bathrooms = 0;
  let parking = 0;
  let range_start = 0;
  let range_end = 0;

  properties.forEach((property: PropertyType) => {
    bedrooms = Math.max(bedrooms, property.Bedrooms)
    bathrooms = Math.max(bathrooms, property.Bathrooms)
    parking = Math.max(parking, property.Parking)
    range_start = Math.min(range_start, property["Sale Price"])
    range_end = Math.max(range_end, property["Sale Price"])
  })

  return { bedrooms, bathrooms, parking, range_start, range_end }
}
