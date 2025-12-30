'use client';

import Image from 'next/image';
import convenios from './convenios/imageconvenios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Convenios() {
  return (
    <section
      className="
        relative
        flex flex-col
        gap-10
        px-6 py-16
        md:px-12
        lg:px-20
        overflow-hidden
      "
    >
      {/* 🟦 Marca de fondo (solo desktop) */}
      <div
        className="
          hidden lg:block
          absolute right-0 top-1/2 -translate-y-1/2
          w-[500px] h-[400px]
          opacity-10
          bg-no-repeat bg-contain
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/Images/interhospital_marca.png')"
        }}
      />

      {/* ================= HEADER ================= */}
      <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left max-w-2xl">

        {/* Badge */}
        <div
          className="
            flex items-center gap-1.5
            px-4 py-2
            rounded-full
            backdrop-blur-sm
          "
          style={{ backgroundColor: 'rgba(128, 159, 181, 0.35)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0061A6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span
            className="text-xs font-semibold"
            style={{ color: 'var(--text-color-one)' }}
          >
            Nuestros Convenios
          </span>
        </div>

        {/* Texto */}
        <p className="text-base sm:text-md text-gray-700 mb-5">
          Aceptamos las principales aseguradoras y convenios médicos del país,
          brindándote respaldo y tranquilidad.
        </p>
      </div>

      {/* ================= SLIDER ================= */}
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full mb-5"
      >
        {convenios.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                flex items-center justify-center
                h-[100px]
                bg-white
                transition
                hover:scale-125
              "
            >
              <Image
                src={item}
                alt="Convenio médico"
                width={250}
                height={80}
                className="object-contain max-h-[120px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
