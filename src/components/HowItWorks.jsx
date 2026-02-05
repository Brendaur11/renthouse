import { House, MapPin, Van } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="max-w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Cómo funciona
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Encontrá tu nuevo lugar en solo tres pasos simples.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col justify-center items-center border border-gray-100 rounded-xl p-12 bg-white shadow-md hover:border-2 hover:border-blue-600 hover:shadow-lg transition duration-300">
            <div className="flex flex-col justify-center items-center mb-4 bg-blue-100 rounded-full p-4 w-20 h-20"><House className="inline text-blue-600" /></div>
            <h3 className="font-semibold text-lg">Buscá</h3>
            <p className="text-gray-600 mt-2">
              Usá filtros para encontrar tu propiedad ideal.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border border-gray-100 rounded-xl p-12 bg-white shadow-md hover:border-2 hover:border-blue-600 hover:shadow-lg transition duration-300">
            <div className="flex flex-col justify-center items-center mb-4 bg-blue-100 rounded-full p-4 w-20 h-20"><MapPin className="inline text-blue-600" /></div>
            <h3 className="font-semibold text-lg">Elegí</h3>
            <p className="text-gray-600 mt-2">
              Compará precios, fotos y ubicación.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border border-gray-100 rounded-xl p-12 bg-white shadow-md hover:border-2 hover:border-blue-600 hover:shadow-lg transition duration-300">
            <div className="flex flex-col justify-center items-center mb-4 bg-blue-100 rounded-full p-4 w-20 h-20"><Van className="inline text-blue-600" /></div>
            <h3 className="font-semibold text-lg">Alquilá</h3>
            <p className="text-gray-600 mt-2">
              Contactá al dueño y mudate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
