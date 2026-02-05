import { BedDouble, Bath, Car, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      
      {/* Imagen */}
      <img
        src={property.images[0]}
        alt={property.title}
        className="h-56 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
          <MapPin size={16} />
          {property.location}
        </div>

        <p className="text-[#155dfc] text-2xl font-bold mt-4">
          USD {property.price.toLocaleString()}
        </p>

        {/* Features */}
        <div className="flex gap-6 mt-4 text-gray-600 text-sm">
          <span className="flex items-center gap-1">
            <BedDouble size={18} /> {property.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <Bath size={18} /> {property.bathrooms}
          </span>
          <span className="flex items-center gap-1">
            <Car size={18} /> {property.garage}
          </span>
        </div>

        {/* CTA */}
        <Link
          to={`/property/${property.id}`}
          className="mt-6 block text-center bg-[#155dfc] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}
