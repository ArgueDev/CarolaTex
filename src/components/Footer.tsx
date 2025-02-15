// import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {

    const date = new Date().getFullYear();

  return (
      <>
          <footer>
              <div className="flex md:flex-row flex-col md:items-start items-center justify-around md:mt-50 mt-20">
                <img src="./img/logo_nav.png" alt="logo"/>
                <div className="flex flex-col gap-4 md:mt-0 mt-8">
                    <h2 className="font-semibold text-xl">Contáctanos</h2>
                    <a href="" className="text-sm text-gray-500 hover:font-semibold">Sobre Nosotros</a>
                    <a href="" className="text-sm text-gray-500 hover:font-semibold">Servicios</a>
                    <a href="" className="text-sm text-gray-500 hover:font-semibold">Galeria</a>
                    <a href="" className="text-sm text-gray-500 hover:font-semibold">Testimonios</a>
                    <a href="" className="text-sm text-gray-500 hover:font-semibold">Contacto</a>
                </div>
                <div className="flex flex-col gap-4 md:mt-0 mt-8">
                    <h2 className="font-semibold text-xl">Síguenos</h2>
                    <a href="https://www.facebook.com/technologytetil/" target="_blank" className="text-sm text-gray-500 hover:font-semibold">Facebook</a>
                    <a href="https://www.instagram.com/carola_textiles/?hl=es" target="_blank" className="text-sm text-gray-500 hover:font-semibold">Instagram</a>
                </div>
              </div>
              <div className="flex mt-20 mb-5 justify-center font-semibold">
                  <p>© {date} Carola-Tex. Todos los derechos reservados.</p>
                  {/* <a href="">
                    <FaFacebook color="#001d6a" size={ 24 } />
                  </a>
                  <a href="">
                    <FaInstagram color="f8084d" size={ 24 } />
                  </a> */}
              </div>
          </footer>
      </>
  )
}
