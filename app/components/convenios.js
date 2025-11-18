'use client'
import Image from 'next/image'
import convenios from './convenios/imageconvenios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Convenios(){
    return (
        <section className='flex flex-col px-10' 
            style={{
                backgroundImage: "url(/Images/interhospital_marca.png)",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}>
            <div className='flex flex-col justify-center items-center md:items-start gap-4'>
                <div className="flex flex-row items-center p-2.5 pr-3.5 pl-3.5 w-fit rounded-4xl gap-1" style={{backgroundColor: "rgba(128, 159, 181, 0.41)"}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0061A6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="text-xs font-bold" style={{color: "var(--text-color-one)"}}> Nuestros Convenios </p>
                </div>
                <p className='text-center md:text-left'>
                    Aceptamos las principales aseguradoras y convenios médicos del país
                </p>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={4}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    420: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4}
                }}
                className="pb-10 w-full"
            >
                {convenios.map((item, index) => {
                const color = index % 2 === 0 ? '#0061A6' : '#008D36';
                return (
                    <SwiperSlide key={index}>
                    <div className="flex flex-col items-center">
                        <Image
                            src={item}
                            alt={item}
                            width={200}
                            height={200}
                            className="p-2 rounded-xl"
                        />
                    </div>
                    </SwiperSlide>
                );
                })}
            </Swiper>
        </section>
    )
}