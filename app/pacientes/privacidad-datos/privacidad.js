"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Privacidad() {
  const router = useRouter();

  const Informacion = [
    {
      image: "/Images/fondoservices.png",
      title: "L.O.P.D PACIENTES",
      description:
        "Este Aviso de Privacidad se pone a disposición de los Pacientes que han entregado datos conforme a la Ley Orgánica de Protección de Datos del Ecuador, antes o después de su vigencia, y solo para los propósitos de los servicios ofrecidos por INTERHOSPITAL S.A.",
      url: "/pacientes/privacidad-datos/pacientes",
    },
    {
      image: "/Images/fondoservices.png",
      title: "L.O.P.D PROVEEDORES",
      description:
        "Este Aviso de Privacidad se pone a disposición de los Proveedores que han entregado datos conforme a la Ley Orgánica de Protección de Datos del Ecuador, antes o después de su vigencia, y solo para los propósitos de los servicios ofrecidos por INTERHOSPITAL S.A.",
      url: "/pacientes/privacidad-datos/proveedores",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <button
          onClick={() => router.push("/pacientes")}
          className="mb-10 inline-flex items-center gap-2 bg-[#0061A6]/10 
                     text-[#0061A6] px-5 py-2 rounded-full font-medium
                     hover:bg-[#0061A6]/20 transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Volver
        </button>

      {/* Título principal */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0061A6]">
          Avisos de Privacidad
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Consulta la información relacionada con el tratamiento de tus datos personales
          según la Ley Orgánica de Protección de Datos.
        </p>
      </div>

      {/* ░░ CARDS DE INFORMACIÓN ░░ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {Informacion.map((info, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col"
          >
            <Image
              src={info.image}
              width={450}
              height={200}
              alt={info.title}
              className="rounded-2xl w-full object-cover mb-5"
            />

            <h3 className="text-xl font-bold text-[#0061A6] mb-3">
              {info.title}
            </h3>

            <p className="text-gray-600 mb-5">{info.description}</p>

            <button
              onClick={() => (window.location.href = info.url)}
              className="mt-auto cursor-pointer px-5 py-2 rounded-full bg-[#0061A6] text-white font-semibold hover:bg-[#004d82] transition"
            >
              Ver más detalles
            </button>
          </div>
        ))}
      </div>

      {/* ░░ FORMULARIO DE DERECHOS ░░ */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 border-l-4 border-[#008D36]">
        <div className="flex flex-col md:flex-row gap-6 items-center">

          <div>
            <h3 className="text-2xl font-bold text-[#008D36] mb-3">
              Formulario de Ejercicio de Derechos sobre Datos Personales
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Si desea ejercer los derechos que la Ley Orgánica de Protección de Datos le
              otorga, siga estos pasos:
              <br /><br />
              1. Descargue el formulario.<br />
              2. Complete todas las secciones requeridas.<br />
              3. Firme el documento.<br />
              4. Envíelo junto con los documentos solicitados al correo:{" "}
              <strong>datospersonales@interhospital.com.ec</strong>
              <br /><br />
              Una vez recibido, le daremos respuesta dentro de los plazos legales.
            </p>

            <button className="px-5 py-2 cursor-pointer rounded-full bg-[#008D36] text-white font-semibold hover:bg-[#00762c] transition">
              <a href="/PDFS/FSTM-04.V2-FORMULARIO-DE-EJERCICIO-DE-DERECHOS-SOBRE-DATOS-PERSONALES.docx">
                Descargar Formulario
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
