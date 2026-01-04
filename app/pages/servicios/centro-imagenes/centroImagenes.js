"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function DiagnosticoImagenes() {
  const router = useRouter();

  /* =========================
     CENTRO DE IMÁGENES
  ========================= */

  const serviciosImagenes = [
    "Resonancia Magnética",
    "Tomografía",
    "Mamografía",
    "Radiología",
    "Densitometría Ósea",
    "Ecocardiografía",
  ];

  const imagenesCentro = [
    "/Images/servicios/centro-imagenes/Centro-de-imagenes-002.jpg",
    "/Images/servicios/centro-imagenes/Centro-de-imagenes-003.jpg",
    "/Images/servicios/centro-imagenes/Centro-de-imagenes-004.jpg",
  ];

  /* =========================
     CLÍNICA DE LA MUJER
  ========================= */

  const imagenesMujer = [
    "/Images/servicios/clinica-mujer/Centro-de-imagenes-005.jpg",
    "/Images/servicios/clinica-mujer/Centro-de-imagenes-006.jpg",
    "/Images/servicios/clinica-mujer/Clinica-de-la-mujer-h.jpg",
  ];

  const serviciosGeneralesMujer = [
    "Citopunción de Tiroides",
    "Monitoreo Folicular",
    "Valoración de Gestación Vía Vaginal",
    "Mamografía",
  ];

  const ecografiasMujer = [
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
    "Ecografía de Cadera",
    "Ecografía de Valoración de gestación Doppler + 4D",
    "Ecografía Doppler Obstétrico"
  ];

  const densitometriasMujer = [
    "Densitometría Ósea Cuello de Fémur",
    "Densitometría Ósea Cuerpo Total",
    "Densitometría Ósea Columna Lumbar / Cuello de Fémur",
    "Densitometría Ósea Columna Lumbar / Cuello de Fémur / Cuerpo Total",
    "Densitometría Ósea Columna Lumbar",
    "Densitometría Ósea Antebrazo",
    "Densitometría Ósea de Mano"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* BOTÓN VOLVER */}
        <button
          onClick={() => router.back()}
          className="mb-10 inline-flex items-center gap-2 bg-[#0061A6]/10 
                     text-[#0061A6] px-5 py-2 rounded-full font-medium
                     hover:bg-[#0061A6]/20 transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        {/* =====================================================
            CENTRO DE IMÁGENES (CARD PRINCIPAL)
        ===================================================== */}

        <h2 className="text-4xl font-bold text-[#0061A6] text-center mb-6">
          Centro de Imágenes
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          El área de diagnóstico por imágenes está comprometida en ofrecer una
          atención de calidad, con equipos modernos y personal altamente
          capacitado.
        </p>

        {/* SLIDER CENTRO DE IMÁGENES */}
        <div className="mb-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            {imagenesCentro.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  width={1600}
                  height={800}
                  alt={`Centro de Imágenes ${i + 1}`}
                  className="w-full h-[360px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SERVICIOS + IMAGEN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Nuestros servicios
            </h3>

            <ul className="space-y-3">
              {serviciosImagenes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/Images/servicios/centro-imagenes/Centro-de-Imagenes-sede-Av.Bolona.jpg"
              width={800}
              height={600}
              alt="Centro de Imágenes"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* =====================================================
            CLÍNICA DE LA MUJER (SUBTÍTULO / SECCIÓN APARTE)
        ===================================================== */}

        <h2 className="text-3xl font-bold text-[#0061A6] text-center mb-6">
          Clínica de la Mujer
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Espacio especializado para la atención integral de la mujer, con
          estudios diagnósticos realizados en una sola visita.
        </p>

        {/* SLIDER CLÍNICA DE LA MUJER */}
        <div className="mb-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            {imagenesMujer.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  width={1600}
                  height={800}
                  alt={`Clínica de la Mujer ${i + 1}`}
                  className="w-full h-[360px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* SERVICIOS GENERALES */}
          <div>
            <h4 className="text-xl font-semibold text-[#0061A6] mb-4">
              Servicios Generales
            </h4>
            <ul className="space-y-3">
              {serviciosGeneralesMujer.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ECOGRAFÍAS */}
          <div>
            <h4 className="text-xl font-semibold text-[#0061A6] mb-4">
              Ecografías
            </h4>
            <ul className="space-y-3">
              {ecografiasMujer.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DENSITOMETRÍAS */}
          <div>
            <h4 className="text-xl font-semibold text-[#0061A6] mb-4">
              Densitometría Ósea
            </h4>
            <ul className="space-y-3">
              {densitometriasMujer.map((item, i) => (
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
