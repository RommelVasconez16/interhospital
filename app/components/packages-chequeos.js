'use client';

import { useState, useRef, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import priceChequeos from './packages-chequeos/price-chequeos';

export default function PackagesChequeos() {
  const [selectedPkg, setSelectedPkg] = useState(null);
  const swiperRef = useRef(null);

  /**
   * 🔴 CONTROL TOTAL DEL AUTOPLAY
   * Cuando se abre el modal → se congela el carrusel
   * Cuando se cierra → se reanuda
   */
  useEffect(() => {
    if (!swiperRef.current) return;

    if (selectedPkg) {
      // ⛔ Detener completamente
      swiperRef.current.autoplay.stop();
      swiperRef.current.allowSlideNext = false;
      swiperRef.current.allowSlidePrev = false;
      swiperRef.current.allowTouchMove = false;
    } else {
      // ▶️ Reanudar
      swiperRef.current.allowSlideNext = true;
      swiperRef.current.allowSlidePrev = true;
      swiperRef.current.allowTouchMove = true;
      swiperRef.current.autoplay.start();
    }
  }, [selectedPkg]);

  return (
    <section className="flex flex-col justify-center items-center py-16 gap-8 md:px-10">

      {/* ───────── ENCABEZADO ───────── */}
      <div className="flex flex-col items-center text-center px-4 md:px-6">
        <div
          className="flex gap-1.5 items-center p-2 rounded-full mb-4"
          style={{ backgroundColor: 'rgba(0, 141, 54, 0.18)' }}
        >
          <Image src="/Images/icon_chequeos.png" width={14} height={14} alt="Icon" />
          <p className="text-xs font-bold" style={{ color: 'var(--btn_primary)' }}>
            Chequeos Preventivos
          </p>
        </div>

        <p className="text-2xl font-bold tracking-tight">
          Cuida tu salud con nuestros{' '}
          <span style={{ color: 'var(--btn_primary)' }}>chequeos</span>
        </p>

        <p className="text-xs text-gray-500 max-w-xl mt-1">
          Chequeos médicos completos diseñados para prevenir y detectar a tiempo
          cualquier condición
        </p>
      </div>

      {/* ───────── CONTENEDOR SWIPER ───────── */}
      <div className="relative w-full max-w-7xl flex items-center justify-between mt-6">

        {/* Flecha Izquierda */}
        <div className="swiper-button-prev-custom z-10 ml-3 cursor-pointer">
          <ChevronLeft />
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          loop
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
                <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-lg">

                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />

                  {/* Contenido */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    <div>
                      <span
                        className="inline-block px-3 py-1 text-xs rounded-full mb-2"
                        style={{ backgroundColor: `${color}cc` }}
                      >
                        Chequeo Preventivo
                      </span>

                      <h3 className="text-xl font-bold">{pkg.name}</h3>
                    </div>

                    <div>
                      <div className="text-3xl font-bold mb-4">{pkg.price}</div>

                      <button
                        className="w-full h-10 rounded-full bg-white text-sm font-medium cursor-pointer hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02]" 
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
        <div className="swiper-button-next-custom z-10 mr-3 cursor-pointer">
          <ChevronRight />
        </div>
      </div>

      {/* ───────── MODAL ───────── */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">

          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden relative shadow-2xl">

            {/* Cerrar */}
            <button
              className="absolute top-4 right-4 text-black hover:text-gray-700 z-20 cursor-pointer"
              onClick={() => setSelectedPkg(null)}
            >
              <X size={22} />
            </button>

            {/* Imagen */}
            <div className="w-full h-[160px]">
              <Image
                src={selectedPkg.image}
                alt={selectedPkg.name}
                width={900}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="px-6 py-6">
              <h3 className="text-2xl font-bold text-center mb-2">
                {selectedPkg.name}
              </h3>

              <div
                className="text-4xl font-bold text-center mb-4"
                style={{ color: selectedPkg.color }}
              >
                {selectedPkg.price}
              </div>

              <ul className="space-y-3 max-h-[250px] overflow-y-auto mb-6">
                {selectedPkg.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check size={16} style={{ color: selectedPkg.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="
                  w-full
                  h-12
                  rounded-full
                  text-white
                  font-medium
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:shadow-lg
                  hover:scale-[1.02]
                "
                style={{ backgroundColor: selectedPkg.color }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
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

/* ───────── ICONOS FLECHA ───────── */
function ChevronLeft() {
  return (
<div className="swiper-button-prev-custom left-2 ml-3 mr-3 sm:left-[-30px] md:left-[-80px] top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 bg-white cursor-pointer transition hover:scale-110"> 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0061A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" > <polyline points="15 18 9 12 15 6" /> </svg> 
</div>
  );
}

function ChevronRight() {
  return (
    <div className="swiper-button-next-custom right-2 ml-3 mr-3 sm:right-[-30px] md:right-[-80px] top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 bg-white cursor-pointer transition hover:scale-110" > 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0061A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" > <polyline points="9 18 15 12 9 6" /> </svg> 
    </div>
  );
}
