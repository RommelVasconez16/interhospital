"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import styles
import "swiper/css";
import "swiper/css/pagination";

export default function PageTerapia() {
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
          Unidad de Cuidados Intensivos
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-6">
          Los pacientes críticos requieren atención médica de alta complejidad debido a disfunciones orgánicas.
          Las Unidades de Cuidados Intensivos están ubicadas en el segundo y tercer piso, con 26 cubículos 
          equipados con tecnología de monitoreo avanzada.
        </p>

        {/* SWIPER (3 imágenes automáticas) */}
        <div className="mb-16">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-2xl shadow-lg"
          >
            {[
              "/Images/servicios/terapia-intensiva/Interhospital-Camilla.jpg",
              "/Images/servicios/terapia-intensiva/Interhospital-uci.jpg",
              "/Images/servicios/terapia-intensiva/servicio-hospitalario.jpg"
            ].map((imgSrc, i) => (
              <SwiperSlide key={i}>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={imgSrc}
                    alt={`Unidad UCI imagen ${i + 1}`}
                    width={1200}
                    height={700}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed text-justify mx-auto mb-12">
          La atención directa de los pacientes durante las 24 horas está a cargo de un médico especialista 
          en Medicina Crítica y Cuidados Intensivos, junto con personal de enfermería, terapia respiratoria y 
          terapia física, capacitados para el manejo integral del paciente crítico.
        </p>

        {/* SECCIONES DE INFORMACIÓN */}
        <div className="space-y-16">

          {/* UNIDAD */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cada unidad cuenta con:
            </h3>

            <ul className="space-y-3">
              {[
                "10 cubículos individuales y 2 cubículos dobles de cuidados intermedios",
                "Cubículo para servicio de Hemodiálisis",
                "3 cubículos de aislamiento con barreras de bioseguridad"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MONITOREO HEMODINÁMICO */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Monitoreo Hemodinámico Invasivo
            </h3>

            <ul className="space-y-3">
              {[
                "Catéter de flotación",
                "Monitores con capnografía",
                "Monitoreo hemodinámico EsCCO",
                "Ecocardiografía",
                "Soporte vial extracorpóreo",
                "Unidad de Terapia ECMO",
                "Ultrasonido a la cabecera del paciente"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MONITOREO NEUROLÓGICO */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Monitoreo Neurológico
            </h3>

            <ul className="space-y-3">
              {[
                "Actividad electroencefaolográfica continua",
                "Monitor de nivel de sedación",
                "USG: Doppler transcraneal y neuromonitoreo"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOPORTE RENAL */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Soporte Renal
            </h3>

            <ul className="space-y-3">
              {[
                "Terapias de reemplazo renal / hemodiálisis",
                "Terapias de reemplazo renal continuo / hemodiafiltración"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOPORTE RESPIRATORIO */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Soporte Respiratorio
            </h3>

            <ul className="space-y-3">
              {[
                "Video broncoscopia diagnóstica y terapéutica",
                "Ventilación mecánica invasiva con modalidades adaptativas",
                "Ventilación no invasiva: cánulas de alto flujo",
                "VMNI"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
