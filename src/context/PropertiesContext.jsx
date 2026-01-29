import { createContext, useContext, useState } from "react";
import { properties as mockProperties } from "../data/properties";

const PropertiesContext = createContext();

export function PropertiesProvider({ children }) {
  const [filters, setFilters] = useState({
    price: "",
    rooms: "",
  });

  const filteredProperties = mockProperties.filter((p) => {
    if (filters.price && p.price > filters.price) return false;
    if (filters.rooms && p.rooms !== Number(filters.rooms)) return false;
    return true;
  });

  return (
    <PropertiesContext.Provider
      value={{ properties: filteredProperties, filters, setFilters }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

export const useProperties = () => useContext(PropertiesContext);
