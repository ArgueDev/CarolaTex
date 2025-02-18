import { useEffect } from "react";

import { Zap } from "lucide-react";
import { Palette } from "lucide-react";
import { BadgeCheck } from "lucide-react";

import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

import PageTransition from "../transition/PageTransition";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, []);

  return (
    <PageTransition>
      <div className="relative w-full h-screen">
        <picture>
          <source srcSet="/img/bg.webp" type="image/webp" />
          <source srcSet="/img/bg.jpg" type="image/jpeg" />
          <img src="/img/bg.jpg" alt="background" className="w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 flex flex-col items-center justify-center dark:bg-black/50 text-white text-center px-4">
          <div className="absolute top-1/2 left-10 right-10 transform -translate-y-1/2 bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md">
            <h1 className="text-4xl font-bold text-(--azul-marino)">Diseña tu Estilo</h1>
            <p className="text-black/70 text-lg mt-4">
              Explora nuestra colección de diseños para que puedas elegir el que mejor se adapte a tus necesidades, descubre la camiseta perfecta que refleja tu estilo y personalidad.
            </p>
          </div>
        </div>
      </div>{/* Fin de la sección de hero */}
      
      <main>
        <div data-aos="zoom-in" className="flex md:flex-row flex-col max-w-8/10 m-auto py-20 md:mt-40 mt-10 gap-4 items-center">
          <h1 className="text-(--azul-marino) md:text-6xl text-4xl font-bold dark:text-(--blanco-roto)">Camisetas personalizadas que reflejen tu estilo</h1>
          <div>
            <p className="text-xl mb-8 dark:text-(--blanco-roto)">En nuestra empresa, transformamos tus ideas en camisetas unicas y de alta calidad. Descubre como podemos ayudarte a descatar con estilo.</p>
            <button className="bg-(--verde-menta) text-white px-4 py-2 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-(--rosa-palo)">
              <NavLink to="/nosotros">Saber Más</NavLink>
            </button>
          </div>
        </div> {/* Fin de la sección de camisetas */}

        <div className="max-w-8/10 m-auto md:mt-20 mt-10 dark:text-(--blanco-roto)">
          <h1 data-aos="zoom-in" className="text-(--azul-marino) text-4xl xl:mx-80 font-semibold text-center mx-auto leading-tight dark:text-(--blanco-roto)">Descubre las ventajas de nuestas camisetas personalizadas y de alta calidad</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-center">
            <div data-aos="fade-up" className="flex flex-col items-center">
              <Zap size={40} color="#dedb2b" />
              <h2 className="text-xl mt-4 mb-2 font-semibold">Confección rápida y eficiente para satisface todas tus necesidades de camisetas.</h2>
              <p className="dark:text-gray-500">Ofrecemos un servicio de confeccion de camisetas que se adapta a tus ideas.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col items-center">
              <Palette size={40} color="#f30505"/>
              <h2 className="text-xl mt-4 mb-2 font-semibold">Personalización completa: elige colores, diseños y tallas a tu gusto.</h2>
              <p className="dark:text-gray-500">Cada camiseta es única, diseñada para reflejar tu estlo personal.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="1000"className="flex flex-col items-center">
              <BadgeCheck size={40} color="#00aeff" />
              <h2 className="text-xl mt-4 mb-2 font-semibold">Materiales de alta calidad que garantizan comodidad y durabilidad en cada prenda.</h2>
              <p className="dark:text-gray-500">Nuestras camisetas son perfectas para cualquier ocasion, desde eventos hasta uso diario.</p>
            </div>
          </div>
        </div> {/* Fin de la sección de ventajas */}

        <div data-aos="zoom-out" className="max-w-8/10 m-auto md:mt-50 mt-20 flex items-center gap-10 lg:flex-row flex-col">
          <img src="/img/saludinc.webp" alt="saludinc" loading="lazy" decoding="async" className="lg:h-[400px] h-96"/>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <FaStar color="#fff300" size={ 30 } />
              <FaStar color="#fff300" size={ 30 } />
              <FaStar color="#fff300" size={ 30 } />
              <FaStar color="#fff300" size={ 30 } />
              <FaStar color="#fff300" size={ 30 } />
            </div>
            <p className="font-semibold text-xl mt-8 dark:text-(--blanco-roto)">"La calidad de las camisetas es excepcional y el servicio al cliente es insuperable. Sin duda, volvere a trabajar con ellos."</p>
            <div className="mt-8 text-sm text-gray-500">
              <p>Andres Mera</p>
              <p>Jefe de ventas, Saludinc</p>
            </div>
          </div>
        </div>

      </main>
    </PageTransition>
  );
}
