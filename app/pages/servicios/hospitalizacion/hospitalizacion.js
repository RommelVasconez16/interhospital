"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function InfoHospitalizacion() {

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const habitaciones = [
        {
        titulo: "Habitación Privada",
        imagenes: ["/Images/privada1.jpg", "/Images/privada2.jpg", "/Images/privada3.jpg"],
        items: [
            "Un solo ambiente",
            "Sillón reclinable de un cuerpo",
            "Televisión",
            "Teléfono",
            "Toma de oxígeno",
            "Armario",
            "Baño",
            "Llamado de enfermería",
        ],
        },
        {
        titulo: "Habitación Doble",
        imagenes: ["/Images/doble1.jpg", "/Images/doble2.jpg", "/Images/doble3.jpg"],
        items: [
            "Dos camas para pacientes",
            "Sillón reclinable / Sofá cama",
            "Televisión individual",
            "Teléfono",
            "Toma de oxígeno individual",
            "Armario individual",
            "Baño compartido",
            "Llamado de enfermería",
        ],
        },
        {
        titulo: "Habitación Triple",
        imagenes: ["/Images/triple1.jpg", "/Images/triple2.jpg", "/Images/triple3.jpg"],
        items: [
            "Tres camas para pacientes",
            "Sofá cama de una plaza",
            "Televisión por paciente",
            "Teléfono",
            "Toma de oxígeno por paciente",
            "Armario por paciente",
            "Baño compartido",
            "Llamado de enfermería",
        ],
        },
        {
        titulo: "Suite Estándar",
        imagenes: ["/Images/suite1.jpg", "/Images/suite2.jpg", "/Images/suite3.jpg"],
        items: [
            "Dos ambientes: habitación y sala",
            "Cama hospitalaria",
            "Sofá cama",
            "Televisión",
            "Refrigeradora",
            "Microondas",
            "Teléfono",
            "Baño amplio",
            "Toma de oxígeno",
        ],
        },
        {
        titulo: "Suite Ejecutiva",
        imagenes: ["/Images/ejecutiva1.jpg", "/Images/ejecutiva2.jpg"],
        items: [
            "Dos ambientes",
            "Cama hospitalaria",
            "Sofá cama",
            "Escritorio",
            "Televisión",
            "Refrigeradora",
            "Microondas",
            "Amplio baño",
            "Toma de oxígeno",
        ],
        },
        {
        titulo: "Suite Presidencial",
        imagenes: ["/Images/presidencial1.jpg", "/Images/presidencial2.jpg"],
        items: [
            "Dos ambientes",
            "Cama hospitalaria",
            "Sofá cama",
            "Escritorio",
            "Televisión",
            "Refrigeradora",
            "Microondas",
            "Dos baños",
            "Toma de oxígeno",
        ],
        },
    ];

    const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* --------------------------- LISTA PRINCIPAL --------------------------- */}
        {!selectedRoom && (
          <>
            <h2 className="text-4xl font-bold text-[#0061A6] text-center mb-6">Hospitalización</h2>

            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
              Interhospital cuenta con 50 habitaciones entre suite, dobles, triple y presidencial.
            </p>

            <div className="rounded-3xl overflow-hidden shadow-lg mb-16">
              <Image
                src="/Images/hola.jpg"
                width={1600}
                height={700}
                alt="Hospitalización"
                className="w-full h-[350px] object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tipos de Habitaciones</h3>

            {/* --------------------------- SWIPER PRINCIPAL --------------------------- */}
            <div className="relative">

              {/* FLECHA IZQUIERDA */}
              <div
                className={`swiper-button-prev-custom absolute -left-16 top-1/2 -translate-y-1/2
                bg-white border w-12 h-12 rounded-full shadow-md flex items-center justify-center
                transition cursor-pointer z-10
                ${isAtStart ? "opacity-40 cursor-not-allowed" : "hover:bg-[#0061A6] hover:text-white hover:scale-110"}
                `}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </div>

              {/* FLECHA DERECHA */}
              <div
                className={`swiper-button-next-custom absolute -right-16 top-1/2 -translate-y-1/2
                bg-white border w-12 h-12 rounded-full shadow-md flex items-center justify-center
                transition cursor-pointer z-10
                ${isAtEnd ? "opacity-40 cursor-not-allowed" : "hover:bg-[#0061A6] hover:text-white hover:scale-110"}
                `}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                loop={false}
                spaceBetween={25}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pb-6"
                onReachBeginning={() => {
                setIsAtStart(true);
                setIsAtEnd(false);
                }}
                onReachEnd={() => {
                setIsAtEnd(true);
                setIsAtStart(false);
                }}
                onFromEdge={() => {
                setIsAtStart(false);
                setIsAtEnd(false);
                }}
              >
                {habitaciones.map((hab, idx) => (
                  <SwiperSlide key={idx}>
                    <div 
                        className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5"
                        style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
                    >
                      <div className="rounded-xl overflow-hidden mb-4">
                        <Image
                          src={hab.imagenes[0]}
                          width={500}
                          height={350}
                          alt={hab.titulo}
                          className="w-full h-48 object-cover hover:scale-105 transition"
                        />
                      </div>

                      <h4 className="text-xl font-bold text-[#0061A6] mb-3">{hab.titulo}</h4>

                      <button
                        onClick={() => setSelectedRoom(hab)}
                        className="text-sm text-[#0061A6] font-medium hover:underline"
                      >
                        Ver más →
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* --------------------------- INFO GENERAL --------------------------- */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Servicios Generales de Nuestras Habitaciones</h3>

              <ul className="space-y-3">
                {[
                  "Sofá cama para acompañante",
                  "Televisión",
                  "Internet",
                  "Toma de oxígeno empotrada",
                  "Teléfono",
                  "Refrigerador",
                  "Baño cómodo",
                  "Muebles confortables",
                  "Llamado de enfermería",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* ------------------------ VISTA DETALLE ------------------------ */}
        {selectedRoom && (
          <div className="max-w-5xl mx-auto">

            <button
              onClick={() => setSelectedRoom(null)}
              className="mb-6 rounded-full hover:bg-[#0061A6]/10 px-4 py-2 text-sm"
            >
              ← Volver
            </button>

            <div className="bg-white rounded-3xl border shadow-xl p-8">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 2600 }}
                loop={true}
                className="rounded-3xl overflow-hidden mb-10 shadow"
              >
                {selectedRoom.imagenes.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img}
                      width={1600}
                      height={900}
                      alt={selectedRoom.titulo}
                      className="w-full h-[430px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h2 className="text-3xl font-bold text-[#0061A6] mb-6">{selectedRoom.titulo}</h2>

              <ul className="space-y-3">
                {selectedRoom.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
