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

export async function fetchProperties(filters: PropertyAttributesType): Promise<PropertyType[]> {
  let properties = dataMocked

  if (filters.bedrooms) {
    properties = properties.filter(property => property.Bedrooms === filters.bedrooms)
  }
  if (filters.bathrooms) {
    properties = properties.filter(property => property.Bathrooms === filters.bathrooms)
  }
  if (filters.parking) {
    properties = properties.filter(property => property.Parking === filters.parking)
  }
  if (filters.range_start || filters.range_end) {
    properties = properties.filter(property => {
      return (filters.range_start ? filters.range_start <= property["Sale Price"] : true) &&
        (filters.range_end ? filters.range_end >= property["Sale Price"] : true)
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
