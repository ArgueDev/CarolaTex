import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTransition from "../transition/PageTransition";

export default function Nosotros() {
  return (
    <PageTransition>
      <Header />
      <div className="relative w-full h-[700px]">
        <img src="/img/bg.jpg" alt="background" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Camisetas Personalizadas</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">Ofrecemos confección de camisetas únicas, adaptadas a tus necesidades y estilo personal.</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-5 max-w-8/10 m-auto mt-30">
        <h1 className="md:text-5xl text-3xl text-(--azul-marino) font-bold">Nuestra Historia y Misión en Confección</h1>
        <p className="text-lg font-semibold max-w-[550px]">Desde nuestos inicios, nos hemos dedicado a crear camisetas que reflejen la personalidad de nuestros clientes. Nuestra misión es proporcionar a nuestros clientes productos que reflejen sus estilo y personalidad, creemos que cada camiseta cuenta una historia unica y estamos aqui para ayudarte a contarla.</p>
      </div>
      <main className="max-w-6/10 m-auto mt-20">
        <div className="mt-30">
          <h1 className="text-4xl font-bold text-(--azul-marino) text-center">Preguntas</h1>
          <p className="text-lg text-center mt-4 text-gray-900">Aqui encontraras respuestas a las preguntas mas frecuentes sobre nuestros servicios de confeccion de camisetas.</p>
          <div className="mt-5 leading-7">
            <p className="font-bold">¿Qué tipos de camisetas ofrecemos?</p>
            <p className="text-gray-900">Ofrecemos una amplia variedad de camisetas, desde modelos básicos hasta opciones personalizadas. Puedes elegir entre diferentes estilos, colores y tamaños. Nos adaptamos a tus necesidades especificas.</p>
          </div> {/* Pregunta 1 */}
          <div className="mt-5 leading-7">
            <p className="font-bold">¿Cuál es el tiempo de entega?</p>
            <p className="text-gray-900">El tiempo de entrega varia segun la cantidad y el tipo de personalización. Generalmente, procesamos los pedidos en un plazo de 7 a 14 dias habiles. Siempre informamos a nuestros clientes sobre el estado de sus pedidos.</p>
          </div> {/* Pregunta 2 */}
          <div className="mt-5 leading-7">
            <p className="font-bold">¿Ofrecen descuentos por volumen?</p>
            <p className="text-gray-900">Si, ofrecemos descuentos especiales para pedidos grandes. Cuanto mayor sea la cantidad, mayor será el descuento. Contáctanos para obtener una cotizacion personalizada.</p>
          </div> {/* Pregunta 3 */}
          <div className="mt-5 leading-7">
            <p className="font-bold">¿Puedo personalizar mi camiseta?</p>
            <p className="text-gray-900">Absolutamente, ofrecemos opciones de personalización que incluye sublimación y bordado. Puedes enviar tu diseño. Estamos aquí para hacer realidad tu visión.</p>
          </div> {/* Pregunta 4 */}
          <div className="mt-5 leading-7">
            <p className="font-bold">¿Hay garantía de calidad?</p>
            <p className="text-gray-900">Sí, garantizamos la calidad de nuestras camisetas. Si no estás sastifecho con tu pedido, contáctanos dentro de los 30 días y haremos lo posible para resolver cualquier inconveniente.</p>
          </div> {/* Pregunta 5 */}
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
