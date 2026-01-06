"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function Hospitalario() {
  const router = useRouter();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <button
          onClick={() => router.back()}
          className="mb-10 inline-flex items-center gap-2 bg-[#0061A6]/10 
                     text-[#0061A6] px-5 py-2 rounded-full font-medium
                     hover:bg-[#0061A6]/20 transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        {/* TÍTULO PRINCIPAL */}
        <h2 className="text-4xl font-bold text-[#0061A6] text-center mb-6">
          Servicios Hospitalarios de Pediatría
        </h2>

        {/* DESCRIPCIÓN INTRO */}
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-12">
          El Servicio de Pediatría fomenta y protege la salud integral y el 
          bienestar de los niños y sus familias en cada una de nuestras áreas: 
          Emergencia, Hospitalización, Unidad de Cuidados Intensivos Neonatales, 
          Cirugía Pediátrica, Recepción Neonatal y Unidad de Cuidados Intensivos Pediátricos.
        </p>

        {/* IMAGEN PRINCIPAL */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-16">
          <Image
            src="/Images/servicios/servicios-hospitalarios/Servicios-Hospitalarios-de-Pediatria-h.jpg"
            alt="Servicios de Pediatría"
            width={1600}
            height={800}
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* SECCIÓN 1: UCIN */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Unidad de Cuidados Intensivos Neonatales
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Disponemos de 7 espacios físicos, incluyendo 1 cubículo de aislamiento 
            con Filtros HEPA, asegurando que nuestros neonatos reciban atención con 
            tecnología de vanguardia:
          </p>

          <ul className="space-y-3">
            {[
              "Termocunas para controlar la termorregulación",
              "Monitorización invasiva y no invasiva",
              "Monitorización continua a través de video EEG",
              "Monitoreo central de constantes vitales y bombas de infusión",
              "Ventilación invasiva y no invasiva",
              "Ventilación de alta frecuencia",
              "Servicios de apoyo diagnóstico por imágenes y laboratorio las 24 horas"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SECCIÓN 2: CIRUGÍA PEDIÁTRICA */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Cirugía Pediátrica
          </h3>

          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Contamos con un equipo de Cirujanos Pediátricos con amplia experiencia, 
            profesionales anestesistas pediátricos y el apoyo de un médico pediatra 
            disponible durante las 24 horas del día, garantizando procedimientos 
            quirúrgicos seguros y de alta calidad para nuestros niños.
          </p>
        </div>

      </div>
    </section>
  );
}
