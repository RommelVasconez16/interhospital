"use client";

import Image from "next/image";
import { CheckCircle, ArrowLeft } from "lucide-react";
import PackageQuirurgicos from "@/app/components/packages-quirurgicos";
import { useRouter } from "next/navigation";

export default function PageCirugia() {
  const quirurgico = [
    "6 quirófanos generales",
    "1 quirófano para parto",
    "1 quirófano para cirugía robótica",
    "1 sala de labor de parto",
    "1 sala de pre-operatoria",
    "1 sala de post-operatorio",
  ];

  const equipamiento = [
    "6 Torres de Laparoscopía",
    "Robot Quirúrgico SSI MANTRA",
    "Equipos para Astroscopía",
    "Microscopio para Neurocirugía",
    "Bomba de Circulación Extracorpórea",
    "Recuperador de sangre",
    "Electrobisturí Armónico",
    "Electrobisturí monopoloar",
    "Electrobisturí bipolar y para solución salina",
    "Laser de Argón",
    "Laser de Holmio Multipropósito",
    "Morcelador laparoscópico",
    "Termocuna",
    "Reanimador neonatal Neopuff",
    "Intensificador de imágenes 360",
    "Arco en C",
    "Máquinas de anestesia eficientes con sistema de extractor de gases",
    "Monitores Neurológicos de nivel de conciencia y dolor",
    "Video laringoscopio",
    "Broncoscopio",
    "Equipos para medición de tiempo de coagulación activada",
  ];

  const router = useRouter();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <button
          onClick={() => router.back()}
          className="mb-10 inline-flex items-center gap-2 bg-[#0061A6]/10 
                     text-[#0061A6] px-5 py-2 rounded-full font-medium
                     hover:bg-[#0061A6]/20 transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        {/* TÍTULO PRINCIPAL */}
        <h2 className="text-4xl font-bold text-[#0061A6] text-center mb-6">
          Cirugía
        </h2>

        {/* DESCRIPCIÓN INTRO */}
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          En Interhospital contamos con tecnología de vanguardia y personal 
          altamente calificado para realizar cirugías de alta complejidad, 
          brindando seguridad y resultados de excelencia a nuestros pacientes.
        </p>

        {/* IMAGEN PRINCIPAL */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-14">
          <Image
            src="/Images/servicios/cirugia/Cirugia-h1.jpg"
            alt="Área de cirugía Interhospital"
            width={1600}
            height={800}
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* SECCIONES DE INFORMACIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          {/* CENTRO QUIRÚRGICO */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Centro Quirúrgico
            </h3>
            <p className="text-gray-600 mb-4">
              Contamos con 8 quirófanos equipados con flujo laminar y 
              presión positiva, diseñados para garantizar la máxima seguridad.
            </p>

            <ul className="space-y-3">
              {quirurgico.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          {/* EQUIPAMIENTO */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Equipamiento de Última Tecnología
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {equipamiento.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0061A6] w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PAQUETES QUIRÚRGICOS */}
        <div className="mt-20">
          <PackageQuirurgicos />
        </div>
      </div>
    </section>
  );
}
