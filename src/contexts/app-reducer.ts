import { IAppState } from "@/contexts/app-provider";
import { PropertyType } from "@/lib/properties";

export const SET_SAVED_PROPERTIES = 'setSavedProperties';
export const ADD_SAVED_PROPERTIES = 'addSavedProperties';
export const DEL_SAVED_PROPERTIES = 'delSavedProperties';

type AppActionType =
  | { type: 'setSavedProperties'; payload: { properties: PropertyType[] } }
  | { type: 'addSavedProperties'; payload: { property: PropertyType } }
  | { type: 'delSavedProperties'; payload: { id: number } }

export const appReducer = (state: IAppState, action: AppActionType): IAppState => {
  switch (action.type) {
    case SET_SAVED_PROPERTIES:
      return {
        ...state,
        savedProperties: action.payload.properties,
      }
    case ADD_SAVED_PROPERTIES:
      return {
        ...state,
        savedProperties: [...state.savedProperties, action.payload.property],
      }
    case DEL_SAVED_PROPERTIES:
      return {
        ...state,
        savedProperties: state.savedProperties.filter(property => property.Id !== action.payload.id),
      }
    default:
      return state
  }
}
