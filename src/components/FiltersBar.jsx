import { useProperties } from "../context/PropertiesContext";

export default function FiltersBar() {
  const { filters, setFilters } = useProperties();

  return (
    <div className="bg-white p-4 rounded-xl shadow flex gap-4">
      <input
        type="number"
        placeholder="Precio máximo"
        className="input"
        value={filters.price}
        onChange={(e) =>
          setFilters({ ...filters, price: e.target.value })
        }
      />

      <select
        className="input"
        value={filters.rooms}
        onChange={(e) =>
          setFilters({ ...filters, rooms: e.target.value })
        }
      >
        <option value="">Habitaciones</option>
        <option value="1">1 hab</option>
        <option value="2">2 hab</option>
        <option value="3">3 hab</option>
      </select>
    </div>
  );
}
