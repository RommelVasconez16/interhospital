'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import priceQuirurgicos from './packages-quirurgicos/price-quirurgicos';

export default function PackageQuirurgicos() {
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
          <p className="text-xs font-bold" style={{ color: 'var(--btn_primary)' }}>
            Paquetes Quirúrgicos
          </p>
        </div>

        <p className="text-2xl font-bold tracking-[-0.07em]">
          Cuida tu salud con nuestros{' '}
          <span style={{ color: 'var(--btn_primary)' }}>paquetes quirúrgicos</span>
        </p>
        <p className="text-xs" style={{ color: 'var(--textColor)' }}>
          Ponemos a su disposición los paquetes quirúrgicos de cirugía general
        </p>
      </div>

      {/* CONTENEDOR */}
      <div className="relative w-full max-w-4xl md:max-w-5xl lg:max-w-7xl flex items-center justify-between mt-6">

        {/* Flecha izquierda */}
        <div
          className="swiper-button-prev-custom left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-10
          rounded-full shadow-md w-10 h-10 flex items-center justify-center border border-gray-300 bg-white cursor-pointer hover:scale-110 transition"
        >
          <svg width="16" height="16" stroke="#0061A6" strokeWidth="3" fill="none" viewBox="0 0 24 24">
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
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="max-w-5xl w-full"
        >
          {priceQuirurgicos.map((pkg, index) => {
            const color = index % 2 === 0 ? '#0061A6' : '#008D36';

            return (
              <SwiperSlide key={index}>
                <div
                  className="flex flex-col relative mt-2 bg-white rounded-3xl border-2 transition-all 
                  hover:shadow-2xl hover:-translate-y-2 h-[480px] sm:h-[500px] overflow-hidden"
                  style={{ borderColor: color }}
                >
                  {/* IMAGEN FULL WIDTH */}
                  <div className="w-full h-[100px] overflow-hidden rounded-t-3xl">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENIDO */}
                  <div className="flex flex-col p-4 lg:p-6 justify-between">
                    <div className="text-center mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 sm:mb-4">{pkg.description}</p>

                      <div className="text-3xl sm:text-4xl font-bold" style={{ color }}>
                        {pkg.price}
                      </div>
                    </div>

                    {/* FEATURES */}
                    <ul className="overflow-y-hidden mb-4">
                      {pkg.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                            style={{ backgroundColor: `${color}20` }}
                          >
                            <Check className="w-3 h-3" style={{ color }} />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* BOTONES */}
                    <div className="flex flex-col gap-3">
                      {pkg.features.length > 4 && (
                        <button
                          onClick={() => setSelectedPkg({ ...pkg, color })}
                          className="w-full rounded-full h-10 border text-sm font-medium"
                          style={{ borderColor: color, color }}
                        >
                          Ver más
                        </button>
                      )}
                      <button
                        className="w-full rounded-full h-10 text-sm font-medium text-white"
                        style={{ backgroundColor: color }}
                      >
                        Agendar Ahora
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Flecha derecha */}
        <div
          className="swiper-button-next-custom right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-10 
          rounded-full shadow-md w-10 h-10 flex items-center justify-center border border-gray-300 bg-white cursor-pointer hover:scale-110 transition"
        >
          <svg width="16" height="16" stroke="#0061A6" strokeWidth="3" fill="none" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedPkg && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">

          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden relative shadow-2xl">
            
            {/* Cerrar */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black z-20"
              onClick={() => setSelectedPkg(null)}
            >
              <X size={22} />
            </button>

            {/* IMAGEN FULL WIDTH */}
            <div className="w-full h-[160px] overflow-hidden">
              <Image
                src={selectedPkg.image}
                alt={selectedPkg.name}
                width={900}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Espaciado */}
            <div className="h-[18px]"></div>

            {/* CONTENIDO */}
            <div className="px-6 pb-8 flex flex-col justify-between">

              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">{selectedPkg.name}</h3>

                {selectedPkg.description && (
                  <p className="text-sm text-gray-600 mb-3">{selectedPkg.description}</p>
                )}

                <div className="text-4xl font-bold" style={{ color: selectedPkg.color }}>
                  {selectedPkg.price}
                </div>
              </div>

              <ul className="space-y-3 max-h-[250px] overflow-y-auto mb-6 pr-1">
                {selectedPkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${selectedPkg.color}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: selectedPkg.color }} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

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
