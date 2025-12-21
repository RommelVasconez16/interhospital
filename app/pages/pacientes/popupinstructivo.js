"use client";

import { X } from "lucide-react";

export default function PopupInstructivo({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fondo oscuro */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      ></div>

      {/* Contenedor */}
      <div className="relative bg-white w-[92%] md:w-[80%] lg:w-[65%] max-h-[90vh] rounded-xl shadow-2xl overflow-y-auto p-10 z-50">

        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Título */}
        <h2 className="text-xl md:text-3xl font-bold text-[#0061A6] mb-4">
          Instructivo para Paciente Prequirúrgico
        </h2>

        {/* Contenido — idéntico al PDF */}
        <div className="space-y-4 text-gray-800 leading-relaxed text-sm md:text-base">
          <p><strong>RECUERDE:</strong></p>

          <p>
            Debe presentarse el día de su cirugía dos horas antes según la hora programada del procedimiento,
            en caja de Admisiones planta baja.
          </p>

          <p><strong>Documentos:</strong></p>

          <p>Para garantizar su admisión administrativa el día de su cirugía, por favor traer los siguientes documentos:</p>

          <ol className="list-decimal list-inside space-y-1">
            <li>Documento de identidad.</li>
          </ol>

          <p>
            Consulte con su entidad aseguradora las coberturas y exclusiones del seguro antes de la cirugía o procedimiento.
          </p>

          <p>
            Cualquier inquietud sobre su proceso de admisión se puede comunicar al teléfono:
            <strong> (04) 375 0000 ext. 102-103</strong>
          </p>

          <p><strong>Recomendaciones para el día del procedimiento:</strong></p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Debe presentarse con ropa cómoda, uñas de las manos y pies despintadas, no aplicarse maquillaje</li>
            <li>Traer los resultados de los exámenes solicitados por su médico (exámenes de laboratorio e imágenes, electrocardiograma, etc)</li>
            <li>Dejar joyas y objetos de valor en su hogar.</li>
            <li>No usar extensiones o pestañas postizas.</li>
            <li>Si tiene que llevar dinero en efectivo, por favor entrégueselo a su acompañante, al igual que las prótesis dentales, anteojos, lentes de contacto o piercing</li>
            <li>
              Si antes de la cirugía presenta algún cambio en su condición física (fiebre, escalofríos, malestar, absesos (nacidos) o lesiones en la piel) comuníquese con su médico
            </li>
            <li>Seguir las indicaciones que indique el personal asistencial.</li>
          </ul>

          <p className="italic text-center pt-4">
            Interhospital no se responsabiliza por pérdidas de objetos personales.
          </p>
        </div>
      </div>
    </div>
  );
}
