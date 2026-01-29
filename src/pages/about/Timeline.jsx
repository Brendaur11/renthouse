import { Calendar } from "lucide-react";

export const timelineData = [
  { year: "2015", title: "Fundación", description: "Comenzamos nuestra actividad inmobiliaria." },
  { year: "2018", title: "Crecimiento", description: "Ampliamos nuestra cartera de propiedades." },
  { year: "2020", title: "Digitalización", description: "Incorporamos procesos online." },
  { year: "2024", title: "Plataforma", description: "Lanzamos nuestra web moderna." },
];

export default function Timeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-center mb-12">Nuestra historia</h2>

      <div className="relative border-l-2 border-gray-200">
        {timelineData.map((item) => (
          <div key={item.year} className="ml-8 mb-12 relative">
            <div className="absolute -left-4 bg-blue-600 text-white rounded-full p-2">
              <Calendar size={16} />
            </div>
            <span className="text-sm text-blue-600 font-medium">{item.year}</span>
            <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}