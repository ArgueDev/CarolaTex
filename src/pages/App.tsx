import Header from "../components/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen">
        <img src="/img/bg.jpg" alt="background" className="w-full h-full object-cover" />
        
        <div className="absolute top-1/2 left-10 right-10 transform -translate-y-1/2 bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-4xl font-bold text-(--azul-marino)">Diseña tu Estilo</h1>
          <p className="text-black/70 text-lg mt-4">
            Explora nuestra colección de diseños para que puedas elegir el que mejor se adapte a tus necesidades, descubre la camiseta perfecta que refleja tu estilo y personalidad.
          </p>
        </div>
      </div>
    </>
  );
}
