export default function HeroSearch() {
  return (
    <section
      className="h-[90vh] flex items-center rounded-[3rem] p-8 relative top-20"
    >
      
      <div className="bg-cover bg-center w-full h-full rounded-[3rem]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505691938895-1758d7feb511)",
        }}
      >
        <div className="flex justify-center items-center bg-black/40 w-full h-full rounded-[3rem]">

          <div className="flex flex-col text-center max-w-5xl px-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Encontrá tu hogar ideal
            </h2>
            <p className="mb-8 text-lg">
              Buscá casas y departamentos en alquiler de forma facil y rápida
            </p>

            <div className="flex justify-between bg-white rounded-md p-4 grid grid-cols-1 gap-3 text-gray-800 md:grid-cols-3 md:rounded-full">
              <input className="input border-1 border-gray-200 rounded-full py-2 px-4 outline-blue-600" placeholder="¿Dónde?" />
              <input className="input border-1 border-gray-200 rounded-full py-2 px-4 outline-blue-600" placeholder="Precio máx" />
              <button className="bg-blue-600 text-white rounded-full py-2 cursor-pointer hover:bg-blue-700 transition-colors">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
