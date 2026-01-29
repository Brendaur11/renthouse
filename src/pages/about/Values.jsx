import { Handshake, Home, MapPin, MessageCircle } from "lucide-react";

// Values
const values = [
  { icon: Handshake, title: "Transparencia", description: "Procesos claros y sin sorpresas." },
  { icon: Home, title: "Compromiso", description: "Acompañamos a cada cliente." },
  { icon: MapPin, title: "Conocimiento local", description: "Dominamos el mercado local." },
  { icon: MessageCircle, title: "Cercanía", description: "Comunicación directa y humana." },
];

export default function Values() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Nuestros valores</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <value.icon className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}