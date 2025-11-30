"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function InfoIntergastro() {
  const procedimientos = [
    "Vídeo endoscopia",
    "Vídeo colonoscopia",
    "Ecoendoscopía",
    "Colangiopancreatografía Retrógrada Endoscópica",
    "Ligadura de varices esofágicas",
    "Polipectomía de colón y estómago",
    "Gastrostomía",
    "Colocación de balón gástrico",
    "Argón Plasma",
    "Cápsula endoscópica",
    "Embolización de varices gástricas guiadas por ecoendoscopía",
    "Coledocoscopia endoscópica",
  ];

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
          Intergastro
        </h2>

        {/* INTRODUCCIÓN */}
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          Interhospital cuenta con una unidad de gastroenterología equipada con 
          tecnología de alta precisión y un equipo médico especializado para 
          brindar bienestar, seguridad y una atención de excelencia.
        </p>

        {/* IMAGEN PRINCIPAL */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-14">
          <Image
            src="/Images/hola.jpg"
            alt="Unidad de gastroenterología"
            width={1600}
            height={800}
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* SECCIÓN DE PROCEDIMIENTOS */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Procedimientos que realizamos en nuestra unidad Intergastro
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {procedimientos.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
