// Team
const teamMembers = [
  { name: "María Gómez", role: "Asesora inmobiliaria" },
  { name: "Juan Pérez", role: "Gestión comercial" },
  { name: "Lucía Fernández", role: "Atención al cliente" },
];

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-center mb-12">Nuestro equipo</h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Foto</span>
            </div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}