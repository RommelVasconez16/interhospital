"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Building2, Stethoscope, Layers, ArrowRight, ArrowLeft } from "lucide-react";

export default function InfoTorresConsultorios() {

  const router = useRouter();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#0061A6] mb-4">
            Consulta Externa – Torre de Consultorios
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Interhospital cuenta con una moderna torre médica de <strong>15 pisos</strong>,
            que alberga un total de <strong>151 consultorios</strong> equipados con tecnología de punta
            y más de <strong>300 especialistas</strong> en diversas áreas de la salud.
          </p>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-20">
          <Image
            src="/Images/hola.jpg"
            width={1500}
            height={600}
            alt="Torre de Consultorios Interhospital"
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          
          <div 
            className="p-6 bg-white border shadow-md rounded-2xl hover:shadow-xl transition"
            style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
          >
            <Building2 className="w-12 h-12 text-[#0061A6] mb-4" />
            <h3 className="text-xl font-bold text-[#0061A6] mb-2">15 Pisos Médicos</h3>
            <p className="text-gray-600 text-sm">
              Edificio moderno con distribución estratégica para cada especialidad.
            </p>
          </div>

          <div 
            className="p-6 bg-white border shadow-md rounded-2xl hover:shadow-xl transition"
            style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
          >
            <Stethoscope className="w-12 h-12 text-[#008D36] mb-4" />
            <h3 className="text-xl font-bold text-[#008D36] mb-2">Más de 300 Especialistas</h3>
            <p className="text-gray-600 text-sm">
              Expertos en medicina general, especialidades y subespecialidades.
            </p>
          </div>

          <div 
            className="p-6 bg-white border shadow-md rounded-2xl hover:shadow-xl transition"
            style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
          >
            <Layers className="w-12 h-12 text-[#0061A6] mb-4" />
            <h3 className="text-xl font-bold text-[#0061A6] mb-2">151 Consultorios</h3>
            <p className="text-gray-600 text-sm">
              Espacios amplios, cómodos y equipados con tecnología de última generación.
            </p>
          </div>

        </div>

        {/* SECCIÓN POR QUÉ ELEGIR */}
        <div className="mb-20 max-w-4xl">
          <h3 className="text-3xl font-bold text-[#0061A6] mb-6">
            ¿Por qué elegir nuestra Torre de Consultorios?
          </h3>

          <ul className="space-y-5">
            {[
              "Amplia disponibilidad de especialidades médicas.",
              "Consultorios diseñados para ofrecer privacidad y confort.",
              "Accesos ágiles, ascensores modernos y señalética clara.",
              "Atención programada y emergente en un mismo complejo.",
              "Servicios hospitalarios, farmacia y laboratorio en el mismo campus.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                <span className="w-3 h-3 bg-[#0061A6] rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* BOTÓN FINAL */}
        <div className="text-center">
          <a
            href="/pages/medicos"
            className="inline-flex items-center gap-2 bg-gradient-to-r 
                       from-[#0061A6] to-[#008D36] text-white px-8 py-4 
                       rounded-full font-semibold shadow-lg hover:shadow-xl 
                       hover:opacity-90 transition-all"
          >
            Ver Especialistas Disponibles <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
