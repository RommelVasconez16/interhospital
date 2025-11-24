"use client";

import Image from "next/image";

export default function GamaInstalaciones() {
  const info = [
    {
      image: "/Images/vanguardista.svg",
      title: "Vanguardista",
      description:
        "Somos una corporación médica vanguardista que ofrece servicios especializados de salud",
    },
    {
      image: "/Images/tecnologia.svg",
      title: "Tecnología de Punta",
      description:
        "Cada área del hospital cuenta con equipos de última tecnología",
    },
    {
      image: "/Images/compromiso-salud.svg",
      title: "Compromiso con la Salud",
      description:
        "Ponemos a su disposición el profesionalismo y vocación de servicio, con más de 300 especialistas",
    },
    {
      image: "/Images/enfermera.svg",
      title: "Atención de Alta Calidad",
      description:
        "Cada área cuenta con personal médico y de enfermería preparado para brindar una atención de calidad",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0061A6]">
          Nuestra Gama de Instalaciones
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {info.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icono */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0061A6]/10 mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Título */}
              <p className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </p>

              {/* Descripción */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
