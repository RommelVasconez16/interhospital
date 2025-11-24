"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Star } from "lucide-react";

export default function LocationShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Images/interlab.jpg"
          alt="Hospital background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0061A6]/95 via-[#008D36]/90 to-[#0061A6]/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Nuestras Instalaciones</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">
            Instalaciones de Primera Clase
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Espacios modernos y equipados con la última tecnología para tu
            comodidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Hospital Ceibos */}
          <div
            className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="aspect-video relative">
              <img
                src="/Images/instalacioninterhospital.jpg"
                alt="Hospital Ceibos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Hospital Principal - Ceibos
                </h3>
                <p className="text-white/90 mb-3">
                  Av. del Bombero km 6.5, vía a la costa
                </p>
                <div className="inline-flex items-center gap-2 bg-[#008D36] px-4 py-2 rounded-full text-sm font-semibold">
                  Abierto 24/7
                </div>
              </div>
            </div>
          </div>

          {/* Centro de Imágenes Boloña */}
          <div
            className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="aspect-video relative">
              <img
                src="/Images/medicosportada.jpg"
                alt="Centro de Imágenes Boloña"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Centro de Imágenes</h3>
                <p className="text-white/90 mb-3">Av. Francisco Boloña #715</p>
                <div className="inline-flex items-center gap-2 bg-[#0061A6] px-4 py-2 rounded-full text-sm font-semibold">
                  Lun - Vie: 7AM - 8PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <video
              src="/videos/hospital-interior-tour.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Si quieres mantener el overlay oscuro, puedes dejarlo */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <p className="text-center mt-6 text-lg text-white/90">
            Conoce nuestras instalaciones en un recorrido virtual
          </p>
        </div>
      </div>
    </section>
  );
}
