import { ChangeEvent, FormEvent, useRef, useState } from "react";

import emailjs from '@emailjs/browser';

import PageTransition from "../transition/PageTransition";
import Alert from "../components/Alert";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contacto() {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'El Nombre Es Obligatorio';

    if (!formData.email.trim()) {
      newErrors.email = 'El Email Es Obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El Email No Es Valido';
    }

    if (!formData.message.trim()) newErrors.message = 'El Mensaje Es Obligatorio';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // No enviar si hay errores

    console.log("SERVICE_ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE_ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC_KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    try {
      if (!form.current) return;

      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      if (response.status === 200) {
        setShowAlert(true);
        setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
        setTimeout(() => setShowAlert(false), 4000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  return (
    <PageTransition>
      <main className="container m-auto mt-30 p-10">
        <div className="container px-4 mx-auto">
          <div className="mx-auto">
            <div className="max-w-md mx-auto px-8 py-6 bg-(--gris-claro) dark:bg-gray-400 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contáctanos</h2>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="name">Nombre</label>
                  <input
                    className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-(--verde-menta) transition duration-300"
                    placeholder="Ingrese su nombre"
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="email">Email</label>
                  <input
                    className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-(--verde-menta) transition duration-300"
                    placeholder="Ingrese su correo"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="message">Mensaje</label>
                  <textarea
                    className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-(--verde-menta) transition duration-300"
                    rows={4}
                    placeholder="Ingrese su mensaje"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
                <button
                  className="w-full bg-(--verde-menta) text-white py-2 px-4 rounded-lg hover:bg-(--rosa-palo) hover:text-(--azul-marino) hover:cursor-pointer transition duration-300"
                  type="submit"
                >
                  Enviar Mensaje
                </button>
              </form>
              <br />
              {showAlert && <Alert />}
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
