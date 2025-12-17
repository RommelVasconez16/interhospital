"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Clock, ShieldCheck, PackageCheck, MapPin, ArrowLeft } from "lucide-react";

export default function InfoFarmacia() {
  const router = useRouter();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <button
          onClick={() => router.back()}
          className="mb-10 inline-flex items-center gap-2 bg-[#0061A6]/10 
                     text-[#0061A6] px-5 py-2 rounded-full font-medium
                     hover:bg-[#0061A6]/20 transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        {/* TÍTULO Y DESCRIPCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#0061A6] mb-4">
            Farmacia 911
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Interhospital pone a su disposición una <strong>Farmacia Externa 24/7</strong>,
            disponible durante todo el año para cubrir las necesidades de medicamentos
            de nuestros pacientes y del público en general.
          </p>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-20">
          <Image
            src="/Images/servicios/farmacia-911/Farmacias-911-s.jpg"
            width={1500}
            height={600}
            alt="Farmacia Interhospital"
            className="w-full h-[380px] object-cover object-top"
          />
        </div>

        {/* TARJETAS DE BENEFICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

          <div 
            className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition"
            style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
          >
            <Clock className="w-12 h-12 text-[#0061A6] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#0061A6]">
              Atención Continua 24/7
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Obtén tus medicamentos en cualquier momento del día o la noche,
              los 365 días del año.
            </p>
          </div>

          <div 
            className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition"
            style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
          >
            <PackageCheck className="w-12 h-12 text-[#008D36] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#008D36]">
              Medicación Completa
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Amplia disponibilidad de medicamentos, insumos médicos
              y productos de salud.
            </p>
          </div>

          <div 
            className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition"
            style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
          >
            <ShieldCheck className="w-12 h-12 text-[#0061A6] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#0061A6]">
              Calidad y Seguridad
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Todos nuestros productos cumplen con los más altos estándares
              de calidad farmacéutica.
            </p>
          </div>

        </div>

        {/* UBICACIÓN */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#0061A6] mb-6">
            Ubicación de la Farmacia
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed max-w-2xl">
            Encuentra nuestra Farmacia 911 en la planta baja del edificio de Interhospital,
            con acceso directo desde el área externa y señalización visible durante el día y la noche.
          </p>

          {/* MAPA */}
          <div className="rounded-3xl overflow-hidden shadow-xl border mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.9258194032973!2d-79.94521447619628!3d-2.1818458583038343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d7300521ca54f%3A0x901999af5f7e866!2sFarmacia%20911%20Interhospital!5e0!3m2!1ses-419!2sec!4v1764430446867!5m2!1ses-419!2sec"
              width="100%"
              height="350"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>

          {/* BOTÓN GOOGLE MAPS */}
          <a
            href="https://www.google.com/maps/place/Farmacia+911+Interhospital/@-2.1818459,-79.9452145,17z/data=!4m6!3m5!1s0x902d7300521ca54f:0x901999af5f7e866!8m2!3d-2.1812562!4d-79.944442!16s%2Fg%2F11ld_5y19j?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" // <-- inserta tu URL real del mapa
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r 
                       from-[#0061A6] to-[#008D36] text-white px-8 py-4 
                       rounded-full font-medium shadow-lg hover:shadow-xl 
                       hover:opacity-90 transition-all"
          >
            Ver en Google Maps <MapPin className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
