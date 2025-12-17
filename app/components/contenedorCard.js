"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContenedorCard() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    router.push(`/pages/medicos?search=${encodeURIComponent(searchTerm)}`);
  };

    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % horarios.length);
    const prev = () => setIndex((prev) => (prev - 1 + horarios.length) % horarios.length);

  return (
    <section className="px-4 sm:px-6 md:px-0 items-center">
      <div
        className="
          grid grid-cols-1 md:grid-cols-3
          bg-white/90 backdrop-blur-sm
          border border-gray-200
          shadow-lg
          rounded-xl
          overflow-hidden
          relative z-20
          -mt-24 md:-mt-36 lg:-mt-32
          max-w-5xl mx-auto
        "
      >
        {/* ─────────── Columna 1 — Buscar Especialista ─────────── */}
        <div className="flex flex-col justify-center p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
          <h3 className="text-lg font-bold text-[#1D70B7] mb-4">
            Encuentre un Especialista
          </h3>

          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Puede ingresar nombres, apellidos o especialidad del doctor.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Ej: Cardiología, Pérez..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                px-4 py-2 w-full
                border border-gray-300 rounded-md
                text-sm outline-none
                focus:ring-2 focus:ring-[#1D70B7]/40
                transition
              "
            />

            <button
              onClick={handleSearch}
              className="
                px-4 py-2 bg-[#008D36] text-white rounded-md
                font-semibold text-sm
                hover:bg-[#00742c] transition
                w-full sm:w-auto
              "
            >
              Buscar
            </button>
          </div>
        </div>

        {/* ─────────── Columna 2 — Resultados de Exámenes ─────────── */}
        <div className="flex flex-col justify-center p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
        <h3 className="text-lg font-bold text-[#008D36] mb-4">
            Resultados de Exámenes
        </h3>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Consulta tus resultados de laboratorio e imágenes en los portales correspondientes.
        </p>

        <button
            onClick={() => router.push("/resultados")}
            className="
            w-full px-4 py-2 
            bg-[#008D36] text-white 
            rounded-md font-semibold text-sm
            hover:bg-[#00742c] 
            transition
            "
        >
            Ver Resultados
        </button>
        </div>


        {/* 3 — Slider de Horarios */}
        <div className="p-6 sm:p-8">
        <h3 className="text-lg font-bold text-[#1D70B7] mb-4">
            Horarios de visita y atención
        </h3>

        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3300 }}
            loop={true}
            className="w-full horarios-swiper"
        >
            <SwiperSlide>
            <div className="text-sm text-gray-700 space-y-2">
                <p className="font-semibold">Horario de visita</p>
                <p>Hospitalización: <span className="font-semibold">08h00 a 20h00</span></p>
                <p>Terapia Intensiva: <span className="font-semibold">13h00 a 13h30</span></p>
                <p>Terapia Intensiva Neonatal: <span className="font-semibold">12h00 a 12h30 / 17h00 a 17h30</span></p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="text-sm text-gray-700 space-y-2">
                <p className="font-semibold">Horario de atención</p>
                <p>Emergencia: <span className="font-semibold">24 horas</span></p>
                <p>Laboratorio: <span className="font-semibold">24 horas</span></p>
                <p>Farmacia e Imágenes: <span className="font-semibold">24 horas</span></p>
            </div>
            </SwiperSlide>
        </Swiper>

        <style jsx global>{`
            .horarios-swiper .swiper-pagination {
            position: relative !important;
            margin-top: 22px; /* Ajusta la distancia a tu gusto */
            }
        `}</style>
        </div>

      </div>
    </section>
  );
}
