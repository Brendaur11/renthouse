import properties  from "../data/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Propiedades destacadas</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </section>
  );
}
