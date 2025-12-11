"use client";

import Image from 'next/image';
import Info from './informacioncifras/info';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import useCountUp from '../utils/useCountUp';
import 'swiper/css';
import 'swiper/css/pagination';

export default function NuestrasCifras() {
  return (
    <section className="flex flex-col justify-center items-center py-16 gap-8 pr-10 pl-10">

      <div className="flex flex-col items-center text-center">
        <div
          className="flex flex-row gap-1.5 items-center p-2 rounded-4xl mb-4"
          style={{ backgroundColor: 'rgba(0, 141, 54, 0.18)' }}
        >
          <Image src="/Images/icon_citas.png" width={10} height={10} alt="Icon Citas" />
          <p className="text-xs font-bold" style={{ color: 'var(--btn_primary)' }}>
            Nuestras Cifras
          </p>
        </div>

        <p className="text-2xl font-bold tracking-[-0.07em]">
          Pensando siempre en tu <span style={{ color: 'var(--btn_primary)' }}>bienestar</span>
        </p>

        <p className="text-xs" style={{ color: 'var(--textColor)' }}>
          Cifras que demuestran compromiso con la excelencia en salud
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={6}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          0: { slidesPerView: 2 },
          420: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1200: { slidesPerView: 6 }
        }}
        className="pb-10 w-full"
      >
        {Info.map((item, index) => {
          const color = index % 2 === 0 ? '#0061A6' : '#008D36';
          const finalNumber = parseInt(item.numero?.toString().replace(/\D/g, ""), 10) || 0;
          const count = useCountUp(finalNumber, 15);
          
          return (
            <SwiperSlide key={item.label}>
              <div className="flex flex-col items-center gap-3">

                {/* ICONO MÁS GRANDE Y MODERNO */}
                <div
                  className="rounded-2xl flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    width: "60px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={40}
                    height={40}
                  />
                </div>

                {/* NÚMERO */}
                <p className="text-2xl font-bold" style={{ color }}>
                  {count}
                </p>

                {/* TEXTO */}
                <p className="text-sm text-center opacity-70 leading-tight">
                  {item.label}
                </p>

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </section>
  );
}
