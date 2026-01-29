import { Link, useParams } from "react-router-dom";
import { properties } from "../data/properties";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) return <p>No encontrada</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Link to="/">
        <button className="bg-blue-600 text-white my-4 px-4 py-2 rounded-lg cursor-pointer">
          Volver
        </button>
      </Link>

      <img
        src={property.image}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold">{property.title}</h1>
          <p className="text-gray-600 mt-4">
            {property.rooms} habitaciones · {property.bathrooms} baño ·{" "}
            {property.size} m²
          </p>

          <p className="mt-6 text-gray-700">
            Descripción completa de la propiedad. Acá iría texto real
            del propietario.
          </p>
        </div>

        <div className="border rounded-xl p-6 h-fit">
          <p className="text-2xl font-bold text-blue-600">
            ${property.price} / mes
          </p>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
}
