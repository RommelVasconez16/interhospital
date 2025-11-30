"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Star } from "lucide-react";

export default function LocationShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 md:py-24 min-h-screen"
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Images/interlab.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0061A6]/95 via-[#008D36]/90 to-[#0061A6]/95" />
      </div>

      {/* CONTENEDOR */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER */}
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full mb-4 text-xs sm:text-sm">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold">Nuestras Instalaciones</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 text-white leading-tight">
            Instalaciones de Primera Clase
          </h2>

          <p className="text-sm sm:text-base md:text-xl text-white/90 max-w-xl mx-auto">
            Espacios modernos y equipados con la última tecnología para tu comodidad.
          </p>
        </div>

        {/* GRID RESPONSIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div
            className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="aspect-[4/3] sm:aspect-[16/11] md:aspect-video relative">
              <img
                src="/Images/instalacioninterhospital.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <div className="flex gap-1 mb-2 sm:mb-3">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Hospital Principal - Ceibos
                </h3>

                <p className="text-white/90 text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
                  Av. del Bombero km 6.5, vía a la costa
                </p>

                <span className="inline-flex items-center bg-[#008D36] px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold">
                  Abierto 24/7
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="aspect-[4/3] sm:aspect-[16/11] md:aspect-video relative">
              <img
                src="/Images/medicosportada.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <div className="flex gap-1 mb-2 sm:mb-3">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Centro de Imágenes
                </h3>

                <p className="text-white/90 text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
                  Av. Francisco Boloña #715
                </p>

                <span className="inline-flex items-center bg-[#0061A6] px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold">
                  Lun - Vie: 7AM - 8PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto px-1">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <video
              src="/videos/hospital-interior-tour.mp4"
              className="w-full h-full object-cover"
              autoPlay loop muted playsInline
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <p className="text-center mt-6 text-sm sm:text-base md:text-lg text-white/90">
            Conoce nuestras instalaciones en un recorrido virtual
          </p>
        </div>

      </div>
    </section>
  );
}
