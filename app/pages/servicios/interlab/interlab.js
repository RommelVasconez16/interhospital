"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FlaskRound, Clock, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export default function InfoInterlab() {
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

        {/* TÍTULO Y DESCRIPCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#0061A6] mb-4">
            Laboratorio Interlab
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Interlab ofrece un completo servicio de medicina de laboratorio, con
            la más amplia cartera de análisis clínicos para cubrir todas las
            necesidades de nuestros pacientes, disponible las 24 horas del día,
            los 365 días del año.
          </p>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-20">
          <Image
            src="/Images/servicios/laboratorio-interlab/Laboratorio-Interlab-h.jpg"
            width={1500}
            height={600}
            alt="Laboratorio Interlab"
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* BENEFICIOS / CARACTERÍSTICAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

          {/* 1 */}
          <div 
            className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition" 
            style={{borderColor: "lab(90.952% 0 -.0000119209)"}}>
            <FlaskRound className="w-12 h-12 text-[#0061A6] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#0061A6]">
              Amplia cartera de exámenes
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Más de 600 pruebas clínicas disponibles, incluyendo pruebas de rutina,
              especializadas y emergentes.
            </p>
          </div>

          {/* 2 */}
          <div 
            className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition"
            style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
          >
            <Clock className="w-12 h-12 text-[#008D36] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#008D36]">
              Atención 24/7
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Servicios disponibles las 24 horas del día, todos los días del año,
              con resultados rápidos y confiables.
            </p>
          </div>

          {/* 3 */}
          <div 
            className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition"
            style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
          >
            <ShieldCheck className="w-12 h-12 text-[#0061A6] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#0061A6]">
              Calidad Certificada
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Procesos estandarizados y controlados, garantizando resultados
              precisos y apoyo diagnóstico confiable.
            </p>
          </div>

        </div>

        {/* SECCIÓN INTERLAB - REDIRECCIÓN */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            ¿Necesitas ver tus resultados o agendar exámenes?
          </h3>

          <p className="text-gray-600 mb-6">
            Accede al portal exclusivo de Interlab para resultados, citas,
            historial de exámenes y más.
          </p>

          <a
            href="https://interlab.com.ec"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r 
                       from-[#0061A6] to-[#008D36] text-white px-8 py-4 
                       rounded-full font-medium shadow-lg hover:shadow-xl 
                       hover:opacity-90 transition-all"
          >
            Ir al Portal Interlab <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
