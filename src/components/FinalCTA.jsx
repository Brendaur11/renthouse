import { MessageCircle, Home, House } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#155dfc] text-white py-24">
      
      {/* Decorativos */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        {/* Icono */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#155dfc] shadow-lg">
          <House size={28} />
        </div>

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          ¿Listo para Encontrar tu Próxima Propiedad?
        </h2>

        {/* Descripción */}
        <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
          Hablá con nuestros asesores ahora y encontrá la propiedad ideal para
          vos. Respondemos rápido y sin compromiso.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#155dfc] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition shadow-lg"
          >
            <MessageCircle size={20} />
            Hablar con un Asesor
          </a>

          <a
            href="/propiedades"
            className="inline-flex items-center justify-center gap-2 border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#155dfc] transition"
          >
            <Home size={20} />
            Ver Propiedades
          </a>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">+100</p>
            <p className="text-white/80 text-sm">Propiedades Disponibles</p>
          </div>
          <div>
            <p className="text-4xl font-bold">48hs</p>
            <p className="text-white/80 text-sm">Tiempo de Respuesta</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10+</p>
            <p className="text-white/80 text-sm">Años de Trayectoria</p>
          </div>
        </div>
      </div>
    </section>
  );
}
