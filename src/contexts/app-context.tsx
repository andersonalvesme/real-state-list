import { PropertyType } from "@/lib/properties";
import { createContext } from "react";

interface IContextProps {
  savedProperties: PropertyType[];

  setSavedProperties: (properties: PropertyType[]) => void;
  addSavedProperties: (property: PropertyType) => void;
  delSavedProperties: (id: number) => void;
}

export const AppContext = createContext({} as IContextProps)
