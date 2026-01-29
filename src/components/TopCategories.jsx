export default function TopCategories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-center font-bold mb-2">Top categorías</h2>
        <div className="w-1/9 text-center font-bold mb-10 py-1 px-4 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-end h-[25rem] bg-black/40 w-full shadow-md text-start text-white border-1 border-gray-100 bg-cover bg-center rounded-lg" style={{backgroundImage: "url(https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
          <div className="flex flex-col justify-end bg-black/40 w-full h-full p-8 rounded-lg">
            <h1 className="font-bold text-xl">Casas</h1>
            <p className="font-base text-md">Encontrá tu casa ideal</p>
          </div>
        </div>
        <div className="flex flex-col justify-end h-[25rem] bg-black/40 w-full shadow-md text-start text-white border-1 border-gray-100 bg-cover bg-center rounded-lg" style={{backgroundImage: "url(https://images.unsplash.com/photo-1768063475871-4d9e271d2923?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
          <div className="flex flex-col justify-end bg-black/40 w-full h-full p-8 rounded-lg">
            <h1 className="font-bold text-xl">Departamentos</h1>
            <p className="font-base text-md">Encontrá tu departamento ideal</p>
          </div>
        </div>
        <div className="flex flex-col justify-end h-[25rem] bg-black/40 w-full shadow-md text-start text-white border-1 border-gray-100 bg-cover bg-center rounded-lg" style={{backgroundImage: "url(https://images.unsplash.com/photo-1558468820-c14c3bdb0c22?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
          <div className="flex flex-col justify-end bg-black/40 w-full h-full p-8 rounded-lg">
            <h1 className="font-bold text-xl">Locales comerciales</h1>
            <p className="font-base text-md">Encontrá locales y hace crecer tu negocio</p>
          </div>
        </div>
      </div>
    </section>
  );
}
