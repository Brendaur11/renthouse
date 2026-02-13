import { Link, useParams } from "react-router-dom";
import properties from "../../data/properties";
import ImageGallery from "../../components/ImageGallery";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) return <p>Propiedad no encontrada</p>;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <Link to="/propiedades">
          <button className="bg-blue-600 text-white my-4 px-4 py-2 rounded-lg cursor-pointer">
            Volver
          </button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">
          {property.title}
        </h1>

        <p className="text-gray-500 mb-6">
          {property.location}
        </p>

        <img
          src={property.images[0]}
          className="h-56 w-full rounded-xl object-cover"
        />


        <p className="text-3xl font-bold text-[#155dfc] mt-8">
          USD {property.price.toLocaleString()}
        </p>

        <p className="text-gray-700 mt-6 leading-relaxed">
          {property.description}
        </p>
        
        <ImageGallery images={property.images} />
      </div>
    </section>
  );
}
