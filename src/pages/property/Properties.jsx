import properties from "../../data/properties";
import PropertyCard from "./PropertyCard";

export default function Properties() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center my-16">
          Propiedades Disponibles
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
