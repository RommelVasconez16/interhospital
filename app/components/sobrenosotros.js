"use client";

import Image from "next/image";
import Link from "next/link";
import { Hospital } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function SobreNosotros() {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-14">

        {/* ───────── CARRUSEL ───────── */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[1100px]">
            <Swiper
              modules={[Autoplay]}
              loop
              spaceBetween={0}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1, // mobile
                },
                768: {
                  slidesPerView: 2, // tablet y desktop
                },
              }}
              className="rounded-2xl shadow-xl"
            >
              {[
                "/Images/inicio/Interhospital-1.jpg",
                "/Images/inicio/Interhospital-2.jpg",
                "/Images/inicio/Interhospital-3.jpg",
                "/Images/inicio/Interhospital-4.jpg",
                "/Images/inicio/Interhospital-5.jpg",
                "/Images/inicio/Interhospital-6.jpg",
              ].map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    width={520}
                    height={360}
                    alt="InterHospital"
                    className="w-full h-[360px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ───────── CONTENIDO ───────── */}
        <aside className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Badge */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-full mb-4 text-xs font-semibold"
            style={{ backgroundColor: "rgba(0, 97, 166, 0.12)", color: "#0061A6" }}
          >
            <Hospital width={20} height={20} />
            <span>Sobre nosotros</span>
          </div>

          {/* Título */}
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-6"
            style={{ color: "#008D36" }}
          >
            Somos{" "}
            <span style={{ color: "#0061A6" }}>
              InterHospital
            </span>
          </h2>

          {/* Descripción */}
          <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
            Llevamos nuestro compromiso con la salud un paso más allá.
            Fue así que, con el respaldo de <strong>Interlab</strong> como
            promotor, nació nuestro proyecto, que hoy es una realidad.
          </p>

          {/* Botón */}
          <Link
            href="/nosotros"
            className="
              inline-flex
              items-center
              justify-center
              px-15
              py-2.5
              rounded-full
              text-sm
              font-medium
              text-white
              transition
              hover:opacity-90
            "
            style={{ backgroundColor: "#0061A6" }}
          >
            Ver más
          </Link>

        </aside>
      </div>
    </section>
  );
}
