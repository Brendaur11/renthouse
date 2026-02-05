import services from "../data/services";

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* Imagen */}
        <div className="relative" >
          <div className="w-full h-[420px] rounded-2xl shadow-lg bg-cover bg-center"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1714974528704-befac88c2fd6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                }}
          ></div>
          

          {/* Badge */}
          <div className="absolute bottom-6 right-[-20px] bg-[#155dfc] text-white rounded-xl px-6 py-4 shadow-xl">
            <p className="text-3xl font-bold">+10</p>
            <p className="text-sm">Años de Experiencia</p>
          </div>
        </div>

        {/* Contenido */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios para Vos
          </h2>

          <p className="text-gray-600 mb-8">
            Te acompañamos en todo el proceso inmobiliario, desde la búsqueda
            hasta la firma del contrato.
          </p>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-[#155dfc]/10 p-3 rounded-lg">
                  <service.icon className="text-[#155dfc]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-10 inline-flex items-center gap-2 bg-[#155dfc] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition">
            Necesito Asesoramiento
          </button>
        </div>
      </div>
    </section>
  );
}
