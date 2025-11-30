"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function InfoImagenes() {
  const servicios = [
    "Resonancia Magnética",
    "Tomografía",
    "Mamografía",
    "Radiología",
    "Densitometría Ósea",
    "Ecocardiografía",
  ];

  const imagenesSlider = [
    "/Images/hola.jpg",
    "/Images/hola.jpg",
    "/Images/hola.jpg",
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
          Centro de Imágenes
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          El área de diagnóstico por imágenes está comprometida en ofrecer una
          atención de calidad, con equipos modernos y personal altamente
          capacitado para ejecutar diversos estudios de imágenes.
        </p>

        {/* SLIDER DE 3 IMÁGENES */}
        <div className="mb-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            {imagenesSlider.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  width={1600}
                  height={800}
                  alt={`Imagen diagnóstica ${i + 1}`}
                  className="w-full h-[360px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SERVICIOS + IMAGEN LATERAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Nuestros servicios de diagnóstico por imágenes
            </h3>

            <ul className="space-y-3">
              {servicios.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGEN LATERAL */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/Images/hola.jpg"
              width={800}
              height={600}
              alt="Centro de imágenes"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* TEXTO FINAL */}
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          Contamos con médicos radiólogos con subespecialidades en Radiología
          Intervencionista, Imagen de Mama, Imagen de Cabeza y Cuello e Imágenes
          Urológicas.
        </p>
      </div>
    </section>
  );
}
