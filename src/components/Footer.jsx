export default function Footer() {
  return (
    <footer className="border-t py-10 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm">
        <p>© 2026 RentHouse</p>
        <div className="flex gap-6">
          <span>Contacto</span>
          <span>Términos</span>
          <span>Privacidad</span>
        </div>
      </div>
    </footer>
  );
}
