// CTA
export default function CTA() {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <h2 className="text-3xl font-semibold mb-6">¿Buscás tu próximo alquiler?</h2>
      <a
        href="/propiedades"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
      >
        Ver propiedades disponibles
      </a>
    </section>
  );
}
