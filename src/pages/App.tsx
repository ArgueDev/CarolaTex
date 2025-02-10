import Header from "../components/Header";
import {Zap, Palette, BadgeCheck} from "lucide-react";

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
      </div>{/* Fin de la sección de hero */}

      <div className="flex md:flex-row flex-col max-w-9/10 m-auto py-20 mt-8 gap-4 items-center">
        <h1 className="text-(--azul-marino) md:text-6xl text-4xl font-bold">Camisetas personalizadas que reflejen tu estilo</h1>
        <div>
          <p className="text-xl mb-8">En nuestra empresa, transformamos tus ideas en camisetas unicas y de alta calidad. Descubre como podemos ayudarte a descatar con estilo.</p>
          <button className="bg-(--verde-menta) text-white px-4 py-2 rounded-lg">
            <a href="#">Saber Más</a>
          </button>
        </div>
      </div> {/* Fin de la sección de camisetas */}

      <div className="max-w-9/10 m-auto mt-20">
        <h1 className="text-(--azul-marino) text-4xl font-semibold text-center mx-auto leading-tight">Descubre las ventajas de nuestas camisetas personalizadas y de alta calidad</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 text-center">
          <div className="flex flex-col items-center">
            <Zap size={40} color="#dedb2b" />
            <h2 className="text-xl mt-4 mb-2 font-semibold">Confección rápida y eficiente para satisface todas tus necesidades de camisetas.</h2>
            <p>Ofrecemos un servicio de confeccion de camisetas que se adapta a tus ideas.</p>
          </div>
          <div className="flex flex-col items-center">
            <Palette size={40} color="#f30505"/>
            <h2 className="text-xl mt-4 mb-2 font-semibold">Personalización completa: elige colores, diseños y tallas a tu gusto.</h2>
            <p>Cada camiseta es única, diseñada para reflejar tu estlo personal.</p>
          </div>
          <div className="flex flex-col items-center">
            <BadgeCheck size={40} color="#00aeff" />
            <h2 className="text-xl mt-4 mb-2 font-semibold">Materiales de alta calidad que garantizan comodidad y durabilidad en cada prenda.</h2>
            <p>Nuestras camisetas son perfectas para cualquier ocasion, desde eventos hasta uso diario.</p>
          </div>
        </div>
      </div>
    </>
  );
}
