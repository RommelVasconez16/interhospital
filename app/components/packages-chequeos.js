'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import priceChequeos from './packages-chequeos/price-chequeos';

export default function PackagesChequeos() {
  const [selectedPkg, setSelectedPkg] = useState(null);

  return (
    <section className="flex flex-col justify-center items-center py-16 gap-8 md:px-10">
      {/* ENCABEZADO */}
      <div className="flex flex-col items-center text-center px-4 md:px-6">
        <div
          className="flex flex-row gap-1.5 items-center p-2 rounded-4xl mb-4"
          style={{ backgroundColor: 'rgba(0, 141, 54, 0.18)' }}
        >
          <Image
            src="/Images/icon_chequeos.png"
            width={10}
            height={10}
            alt="Icon Citas"
          />
          <p
            className="text-xs font-bold"
            style={{ color: 'var(--btn_primary)' }}
          >
            Chequeos Preventivos
          </p>
        </div>

        <p className="text-2xl font-bold tracking-[-0.07em]">
          Cuida tu salud con nuestros{' '}
          <span style={{ color: 'var(--btn_primary)' }}>chequeos</span>
        </p>
        <p className="text-xs" style={{ color: 'var(--textColor)' }}>
          Chequeos médicos completos diseñados para prevenir y detectar a tiempo
          cualquier condición
        </p>
      </div>

      {/* CONTENEDOR */}
      <div className="relative w-full max-w-4xl md:max-w-5xl lg:max-w-7xl flex items-center justify-between mt-6">

        {/* Flecha Izquierda */}
        <div
          className="swiper-button-prev-custom left-2 ml-3 mr-3 sm:left-[-30px] md:left-[-80px]
          top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-10 h-8 sm:w-10 sm:h-10
          flex items-center justify-center border border-gray-300 bg-white cursor-pointer 
          transition hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0061A6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="max-w-5xl w-full"
        >
          {priceChequeos.map((pkg, index) => {
            const color = index % 2 === 0 ? '#0061A6' : '#008D36';
            return (
              <SwiperSlide key={index}>
                <div
                  className="
                    relative
                    h-[420px]
                    rounded-3xl
                    overflow-hidden
                    shadow-lg
                    transition-all
                    hover:scale-[1.02]
                  "
                >

                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  priority={index === 0}
                  className="
                    object-cover
                    object-[center_50%]
                    sm:object-[center_30%]
                  "
                />

                  {/* OVERLAY (degradado) */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.15),
                        rgba(0,0,0,0.75)
                      )`
                    }}
                  />

                  {/* CONTENIDO ENCIMA */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">

                    {/* HEADER */}
                    <div>
                      <span
                        className="inline-block px-3 py-1 text-xs rounded-full mb-2"
                        style={{ backgroundColor: `${color}cc` }}
                      >
                        Chequeo Preventivo
                      </span>

                      <h3 className="text-xl font-bold leading-tight">
                        {pkg.name}
                      </h3>
                    </div>

                    {/* FOOTER */}
                    <div>
                      <div className="text-3xl font-bold mb-4">
                        {pkg.price}
                      </div>

                      <button
                        className="w-full rounded-full h-10 text-sm font-medium bg-white"
                        style={{ color }}
                        onClick={() => setSelectedPkg({ ...pkg, color })}
                      >
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Flecha Derecha */}
        <div
          className="swiper-button-next-custom right-2 ml-3 mr-3 sm:right-[-30px] md:right-[-80px]
          top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-10 h-8 sm:w-10 sm:h-10
          flex items-center justify-center border border-gray-300 bg-white cursor-pointer 
          transition hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0061A6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* MODAL */}
      {selectedPkg && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">

          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden relative shadow-2xl">

            {/* BOTÓN CERRAR */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black z-20"
              onClick={() => setSelectedPkg(null)}
            >
              <X size={22} />
            </button>

            {/* 🔵 IMAGEN FULL WIDTH (MISMO ESTILO DEL CARD) */}
            <div className="w-full h-[160px] overflow-hidden">
              <Image
                src={selectedPkg.image}
                alt={selectedPkg.name}
                width={900}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 🔵 ESPACIADO ELEGANTE BAJO IMAGEN */}
            <div className="h-[18px]"></div>

            {/* 🔵 CONTENIDO */}
            <div className="px-6 pb-8 flex flex-col justify-between">

              {/* HEADER */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">{selectedPkg.name}</h3>

                {selectedPkg.description && (
                  <p className="text-sm text-gray-600 mb-3">
                    {selectedPkg.description}
                  </p>
                )}

                <div
                  className="text-4xl font-bold"
                  style={{ color: selectedPkg.color }}
                >
                  {selectedPkg.price}
                </div>
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 max-h-[250px] overflow-y-auto mb-6 pr-1">
                {selectedPkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${selectedPkg.color}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: selectedPkg.color }} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* BOTÓN AGENDAR */}
              <button
                className="w-full rounded-full h-12 font-medium text-white"
                style={{ backgroundColor: selectedPkg.color }}
              >
                Agendar Ahora
              </button>
            </div>

          </div>

        </div>
      )}
    </section>
  );
}
