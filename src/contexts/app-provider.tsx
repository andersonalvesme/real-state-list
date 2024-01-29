'use client'

import { ReactNode, useEffect, useReducer, useRef } from "react";
import { PropertyType } from "@/lib/properties";
import { ADD_SAVED_PROPERTIES, appReducer, DEL_SAVED_PROPERTIES, SET_SAVED_PROPERTIES } from "@/contexts/app-reducer";
import { AppContext } from "@/contexts/app-context";
import { toast } from "sonner";

export interface IAppState {
  savedProperties: PropertyType[];
}

const INITIAL_STATE: IAppState = {
  savedProperties: [],
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE)
  const hasUpdate = useRef(false)

  const setSavedProperties = (properties: PropertyType[]) => {
    dispatch({
      type: SET_SAVED_PROPERTIES,
      payload: { properties }
    })
  }

  const addSavedProperties = (property: PropertyType) => {
    dispatch({
      type: ADD_SAVED_PROPERTIES,
      payload: { property }
    })
    hasUpdate.current = true
  }

  const delSavedProperties = (id: number) => {
    dispatch({
      type: DEL_SAVED_PROPERTIES,
      payload: { id }
    })
    hasUpdate.current = true
  }

  useEffect(() => {
    setSavedProperties(JSON.parse(localStorage.getItem('savedProperties') ?? '[]'))
  }, []);

  useEffect(() => {
    if (hasUpdate.current) {
      localStorage.setItem('savedProperties', JSON.stringify(state.savedProperties))

      toast.message('Saved properties:', {
        description: state.savedProperties.map((entry: PropertyType) => (
          <div className="flex flex-row gap-2 w-full" key={entry.Id}>
            <div>{entry.Title}</div>
            <div className="text-right">$ {entry["Sale Price"].toString().replace(/(.{3})(?=.)/g, "$1 ")}</div>
          </div>
        ))
      })

      hasUpdate.current = false
    }
  }, [state]);

  return (
    <AppContext.Provider value={{
      ...state,
      setSavedProperties,
      addSavedProperties,
      delSavedProperties,
    }}>
      {children}
    </AppContext.Provider>
  )
}
