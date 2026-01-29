import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.title}
        className="h-48 w-full object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="font-semibold">{property.title}</h3>
        <p className="text-blue-600 font-bold mt-1">
          ${property.price} / mes
        </p>
        <p className="text-sm text-gray-500 mt-2">
          {property.rooms} hab · {property.bathrooms} baño · {property.size} m²
        </p>
        <Link to={`/property/${property.id}`}>
          <button className="mt-4 w-full border rounded-lg py-2">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
}
