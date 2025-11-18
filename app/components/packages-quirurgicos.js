'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import priceQuirurgicos from './packages-quirurgicos/price-quirurgicos';

export default function PackageQuirurgicos(){
    const [selectedPkg, setSelectedPkg] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

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
            Paquetes Quirurgicos
          </p>
        </div>

        <p className="text-2xl font-bold tracking-[-0.07em]">
          Cuida tu salud con nuestros paquetes{' '}
          <span style={{ color: 'var(--btn_primary)' }}>quirúrgicos</span>
        </p>
        <p className="text-xs" style={{ color: 'var(--textColor)' }}>
          Ponemos a su disposición los paquetes quirúrgicos de cirugía general
        </p>
      </div>

      {/* CONTENEDOR CON FLECHAS */}
      <div className="relative w-full max-w-4xl md:max-w-5xl lg:max-w-7xl flex items-center justify-between mt-6">
        {/* Flecha Izquierda */}
        <div
          className={`swiper-button-prev-custom left-2 ml-3 mr-3 sm:left-[-30px] md:left-[-80px] top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-8 h-7 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 transition
          ${
            isBeginning
              ? 'opacity-40 cursor-not-allowed pointer-events-none'
              : 'cursor-pointer bg-white hover:scale-110'
          }`}
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

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
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
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {priceQuirurgicos.map((pkg, index) => {
            const color = index % 2 === 0 ? '#0061A6' : '#008D36';
            return (
              <SwiperSlide key={index}>
                <div
                  className="flex flex-col justify-between relative mt-2 bg-white rounded-3xl p-6 sm:p-8 border-2 transition-all hover:shadow-2xl hover:-translate-y-2 h-[480px] sm:h-[500px] overflow-hidden"
                  style={{ borderColor: color }}
                >
                  {/* ENCABEZADO DE CARD */}
                  <div className="text-center mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        width={50}
                        height={50}
                        className="p-2 rounded-xl"
                        style={{ backgroundColor: 'rgba(217,217,217,0.4)' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                      {pkg.description}
                    </p>
                    <div
                      className="text-3xl sm:text-4xl font-bold"
                      style={{ color }}
                    >
                      {pkg.price}
                    </div>
                  </div>

                  {/* LISTADO DE FEATURES */}
                  <ul className="overflow-y-hidden mb-4">
                    {pkg.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${color}20` }}
                        >
                          <Check className="w-3 h-3" style={{ color }} />
                        </div>
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* BOTONES */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setSelectedPkg({ ...pkg, color })}
                      className="w-full rounded-full h-10 border text-sm font-medium"
                      style={{ borderColor: color, color }}
                    >
                      Ver más
                    </button>
                    <button
                      className="w-full rounded-full h-10 text-sm font-medium"
                      style={{ backgroundColor: color, color: 'white' }}
                    >
                      Agendar Ahora
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Flecha Derecha */}
        <div
          className={`swiper-button-next-custom right-2 ml-3 mr-3 sm:right-[-30px] md:right-[-80px] top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-8 h-7 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 transition
          ${
            isEnd
              ? 'opacity-40 cursor-not-allowed pointer-events-none'
              : 'cursor-pointer bg-white hover:scale-110'
          }`}
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

      {/* POPUP MODAL */}
      {selectedPkg && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative">
            {/* BOTÓN CERRAR */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setSelectedPkg(null)}
            >
              <X size={20} />
            </button>

            {/* CONTENIDO MODAL */}
            <div className="text-center mb-4">
              <Image
                src={selectedPkg.image}
                alt={selectedPkg.name}
                width={60}
                height={60}
                className="p-2 rounded-xl mx-auto"
                style={{ backgroundColor: 'rgba(217,217,217,0.4)' }}
              />
              <h3 className="text-2xl font-bold mt-3 mb-2">
                {selectedPkg.name}
              </h3>
              <p className="text-sm text-gray-600">{selectedPkg.description}</p>
              <div
                className="text-4xl font-bold mt-3"
                style={{ color: selectedPkg.color }}
              >
                {selectedPkg.price}
              </div>
            </div>

            {/* FEATURES DETALLADOS */}
            <ul className="space-y-3 max-h-[250px] overflow-y-auto mb-6">
              {selectedPkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${selectedPkg.color}20`,
                    }}
                  >
                    <Check
                      className="w-3 h-3"
                      style={{ color: selectedPkg.color }}
                    />
                  </div>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* BOTÓN MODAL */}
            <button
              className="w-full rounded-full h-12 font-medium"
              style={{
                backgroundColor: selectedPkg.color,
                color: 'white',
              }}
            >
              Agendar Ahora
            </button>
          </div>
        </div>
      )}
    </section>
    )
}