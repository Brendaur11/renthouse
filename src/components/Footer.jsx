import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-[#050a14] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Grid principal */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#155dfc] mb-4">
              Renthouse
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              La plataforma líder para encontrar tu hogar ideal. 
              Explora miles de propiedades, desde acogedores apartamentos hasta lujosas casas, todo en un solo lugar. 
              ¡Tu próximo hogar te espera en Renthouse!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {["Nosotros", "Servicios", "Productos", "Testimonios"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-[#155dfc] transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@renthouse.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Renthouse. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
