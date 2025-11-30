"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function PageHemodinamia() {

  const especialidades = [
    {
      title: "Cardiología Intervencionista",
      image: "/Images/cardiologia.jpg",
    },
    {
      title: "Electrofisiología",
      image: "/Images/electrofisiología.jpg",
    },
    {
      title: "Neurointervencionismo",
      image: "/Images/neurointervencionismo.jpg",
    },
    {
      title: "Radiología Intervencionista",
      image: "/Images/radiologia-intervencionista.jpg",
    },
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

        {/* TÍTULO */}
        <h2 className="text-4xl font-bold text-[#0061A6] text-center mb-6">
          Hemodinamia e Intervencionismo Endovascular
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          El servicio de Hemodinamia cuenta con equipamiento de última generación y 
          un equipo médico especializado, de enfermería y técnicos en Imagenología para 
          el diagnóstico y tratamiento de nuestros pacientes.
        </p>

        {/* IMAGEN PRINCIPAL */}
        <div className="w-full mb-14 rounded-3xl overflow-hidden shadow-md">
          <Image
            src="/Images/hola.jpg"
            alt="Hemodinamia Interhospital"
            width={1600}
            height={800}
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* GRID DE ESPECIALIDADES */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">
          Nuestras Especialidades:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {especialidades.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
            >
              {/* IMAGEN */}
              <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXTO */}
              <p className="text-lg font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
