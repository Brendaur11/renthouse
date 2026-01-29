// Quiénes somos
export default function WhoWeAre() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-semibold mb-4">Quiénes somos</h2>
        <p className="text-gray-600 mb-4">
          Nacimos con el objetivo de simplificar el proceso de alquiler y acompañar a cada cliente
          en una de las decisiones más importantes de su vida.
        </p>
        <p className="text-gray-600">
          Con años de experiencia en el mercado inmobiliario, apostamos por la innovación,
          el conocimiento local y la atención personalizada.
        </p>
      </div>
      <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
        <span className="text-gray-500">Imagen institucional</span>
      </div>
    </section>
  );
}