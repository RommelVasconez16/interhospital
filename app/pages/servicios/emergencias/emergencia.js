"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function PageEmergencia() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TÍTULO */}
        <h2 className="text-4xl font-bold text-[#0061A6] text-center mb-6">
          Emergencias
        </h2>

        {/* INTRO */}
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          En Interhospital nuestra área de Emergencia brinda atención las 24 horas
          durante los 365 días del año, para todo paciente que requiere atención
          médica en todas las especialidades y subespecialidades.
        </p>

        {/* IMAGEN PRINCIPAL */}
        <div className="w-full mb-12 overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/Images/hola.jpg"
            alt="Emergencias Interhospital"
            width={1600}
            height={800}
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* SUBTÍTULO */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Contamos con 14 cubículos distribuidos de la siguiente manera:
        </h3>

        {/* LISTA BONITA */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            "1 cubículo de trauma shock",
            "1 cubículo de Ginecología - Obstetricia",
            "1 cubículo de Traumatología",
            "1 cubículo de Aislamiento",
            "2 cubículos de Procedimientos Menores",
            "1 cubículo de Observación",
            "7 cubículos generales",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-[#0061A6] w-6 h-6 mt-1" />
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* TEXTO EXTRA */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Con la finalidad de brindar atención oportuna al paciente, hemos
            diseñado un <strong>Sistema de Triage</strong> que permite dar prioridad de acuerdo
            a su patología.
          </p>

          <p>
            Disponemos de un equipo multidisciplinario con médicos cirujanos,
            anestesiólogos, intensivistas, internistas, ginecólogos, pediatras,
            radiólogos de guardia; además de los médicos del staff en las
            diferentes especialidades y subespecialidades.
          </p>

          <p>
            Para agilitar la atención del usuario, el área cuenta con 
            <strong> dos cajas</strong> destinadas a la admisión y alta de pacientes.
          </p>
        </div>
      </div>
    </section>
  );
}
