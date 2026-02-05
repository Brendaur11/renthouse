import values from "../data/values";

export default function Values() {
  return (
    <section className="bg-white py-20 my-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegir Nuestra Inmobiliaria?
          </h2>
          <p className="text-gray-600">
            Trabajamos para que alquilar o encontrar tu propiedad sea un proceso
            simple, transparente y confiable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#155dfc]/10 p-4">
                <value.icon className="text-[#155dfc]" size={24} />
              </div>

              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#155dfc] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition shadow-md"
          >
            Quiero Más Información
          </a>

          <p className="text-gray-500 text-sm mt-3">
            Respondemos en menos de 5 minutos
          </p>
        </div>
      </div>
    </section>
  );
}