import { useEffect } from "react";

import PageTransition from "../transition/PageTransition";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Servicios() {
  
  useEffect(() => {
      AOS.init({
        duration: 1000,
      })
  }, []);
  
  return (
    <PageTransition>
      
      <main className="container mx-auto mt-30 p-10">
        <h1 className="text-center text-6xl text-(--azul-marino) dark:text-white font-semibold max-w-[800px] m-auto">Servicios de Confección de camisetas personalizadas</h1>
        <p className="text-xl text-center max-w-[1000px] m-auto mt-5 text-gray-500">
          Ofrecemos una amplia gama de servicios de confección de camisetas.
          Desde diseños personalizados hasta produccion en masa, adaptamos
          nuestras soluciones a tus necesidades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          <div data-aos="fade-up" className="flex flex-col items-center bg-white dark:bg-gray-400 py-5 rounded-2xl shadow-(--shadow-3xl)">
            <img src="./img/bordado.png" alt="bordado" className="h-48 w-full object-contain" />
            <h2 className="text-black dark:text-(--azul-marino) text-4xl font-semibold mt-4">Bordados</h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center bg-white dark:bg-gray-400 py-5 rounded-2xl shadow-(--shadow-3xl)">
            <img src="./img/sublimado.png" alt="sublimado" className="h-48 w-full object-contain"/>
            <h2 className="text-black dark:text-(--azul-marino) text-4xl font-semibold mt-4">Sublimados</h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center bg-white dark:bg-gray-400 py-5 rounded-2xl shadow-(--shadow-3xl)">
            <img src="./img/about.png" alt="publicidad" className="h-48 w-full object-contain"/>
            <h2 className="text-black dark:text-(--azul-marino) text-4xl font-semibold mt-4">Publicidad</h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center bg-white dark:bg-gray-400 py-5 rounded-2xl shadow-(--shadow-3xl)">
            <img src="./img/politica.png" alt="politica" className="h-48 w-full object-contain"/>
            <h2 className="text-black dark:text-(--azul-marino) text-4xl font-semibold mt-4">Politica</h2>
          </div>
        </div>
      </main>
      
    </PageTransition>
  );
}
