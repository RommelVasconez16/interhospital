"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function InfoClinicaMujer() {
  const imagenes = [
    "/Images/servicios/clinica-mujer/Centro-de-imagenes-005.jpg",
    "/Images/servicios/clinica-mujer/Centro-de-imagenes-006.jpg",
    "/Images/servicios/clinica-mujer/Clinica-de-la-mujer-h.jpg"
  ];

  // Servicios bien estructurados
  const serviciosGenerales = [
    "Citopunción de Tiroides",
    "Monitoreo Folicular",
    "Valoración de Gestación Via Vaginal",
    "Mamografía",
  ];

  const ecografias = [
    "Ecografía de Abdomen Total",
    "Ecografía de Cuello",
    "Ecografía de Canal pilórico",
    "Ecografía de Doppler de Ovarios",
    "Ecografía de Hemiabdomen Superior y Boyden",
    "Ecografía de Pelvis",
    "Ecografía de Tiroides",
    "Ecografía de Urológico",
    "Ecografía Vaginal",
    "Ecografía de Axilas",
    "Ecografía de cadera",
    "Ecografía de Valoración de gestación Doppler + 4D",
    "Ecografía Doppler obstétrico (materno-fetal)",
  ];

  const densitometrias = [
    "Densitometría Ósea Cuello de Fémur",
    "Densitometría Ósea Cuerpo Total",
    "Densitometría Ósea Columna Lumbar / Cuello de Fémur",
    "Densitometría Ósea Columna Lumbar / Cuello de Fémur / Cuerpo Total",
    "Densitometría Ósea Columna Lumbar",
    "Densitometría Ósea Antebrazo",
    "Densitometría Ósea de Mano",
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
          Clínica de la Mujer
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          Contamos con un espacio diseñado especialmente para la mujer, con diversos
          servicios que permiten realizar todos los exámenes en una sola visita.
          <br /><br />
          Nuestros médicos están altamente entrenados en imágenes de la mujer,
          garantizando resultados confiables tanto en la atención como en la interpretación de estudios.
        </p>

        {/* SLIDER DE IMÁGENES */}
        <div className="mb-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            {imagenes.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  width={1600}
                  height={800}
                  alt={`Imagen Clínica de la Mujer ${i + 1}`}
                  className="w-full h-[360px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SERVICIOS */}
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Nuestros servicios de diagnóstico por clínica de la mujer
        </h3>

        {/* SERVICIOS GENERALES */}
        <div className="mt-14 mb-12 mx-auto">
          <div>
            <h4 className="text-xl font-semibold text-[#0061A6] mb-4">Servicios Generales</h4>

            <ul className="space-y-3">
                {serviciosGenerales.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                    <span className="text-gray-700">{item}</span>
                </li>
                ))}
            </ul>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* ECOGRAFÍAS */}
          <div>
            <h4 className="text-xl font-semibold text-[#0061A6] mb-4">Ecografías</h4>

            <ul className="space-y-3">
              {ecografias.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DENSITOMETRÍAS */}
          <div>
            <h4 className="text-xl font-semibold text-[#0061A6] mb-4">Densitometría Ósea</h4>

            <ul className="space-y-3">
              {densitometrias.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
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
