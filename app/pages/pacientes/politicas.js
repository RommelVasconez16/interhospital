"use client";

import { X } from "lucide-react";
import Image from 'next/image'

export default function PopupPoliticas({ open, onClose }) {
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
        <h2 className="text-xl md:text-3xl font-bold text-[#0061A6] mb-6">
          Políticas de acceso de visitantes a las áreas hospitalarias
        </h2>

        {/* Contenido */}
        <div className="space-y-4 text-gray-800 leading-relaxed text-sm md:text-base">

          <p>
            Por la seguridad del paciente y sus acompañantes, Interhospital tiene las siguientes políticas
            de visitas durante su permanencia.
          </p>

          <p><strong>PROPÓSITO:</strong></p>

          <p>
            Los visitantes son importantes para el bienestar del paciente y ayudan a su recuperación.
            El propósito de la política de visitas es dar orientación para:
          </p>

          {/* Lista 1 */}
          <ul className="list-decimal list-inside space-y-1 ml-4">
            <li>Reducir la transmisión de enfermedades.</li>
            <li>Promover atención centrada en la familia y el paciente.</li>
            <li>Controlar el acceso adecuado a los hospitales.</li>
          </ul>

          <p>
            Se cree que la aceptación a esta política junto con la educación a los pacientes, familiares y/o
            personal de apoyo contribuirá a un entorno de salud seguro y propicio para el descanso.
          </p>

          <p><strong>POLÍTICA:</strong></p>

          {/* Lista PRINCIPAL */}
          <ul className="list-decimal list-inside space-y-3 ml-4">

            <li>
              El personal de Interhospital informará al paciente o a su persona de apoyo el derecho a recibir visitas,
              incluyendo restricciones clínicas si fuera el caso.
            </li>

            <li>
              Los pacientes y visitantes tienen la responsabilidad de seguir las políticas del hospital.
              <ul className="list-disc space-y-1 ml-8">
                <li>Respetar al personal y a las propiedades del hospital.</li>
                <li>Controlar el ruido y el número de visitantes.</li>
                <li>
                  Reconocer que la enfermera puede solicitar el retiro de visitantes que afecten la salud o seguridad del paciente.
                </li>
              </ul>
            </li>

            <li>
              Los pacientes menores de edad deberán estar siempre acompañados de su padre, madre, tutor o persona designada.
            </li>

            <li>
              Se permite el ingreso de arreglos florales en hospitalización; deben retirarse a las 24 horas.
            </li>

            <li>
              Durante temporadas de gripe o emergencias de salud, estas reglas pueden modificarse según Control de Infecciones.
            </li>

            <li>
              Pacientes en aislamiento hospitalario:
              <ul className="list-disc space-y-1 ml-8">
                <li>Un solo visitante por paciente.</li>
                <li>Prohibido el ingreso de menores de edad.</li>
              </ul>
            </li>

            <li>
              Se restringe el ingreso a visitantes con síntomas respiratorios.
            </li>

            <li>
              No se permitirá el ingreso a áreas quirúrgicas o de procedimientos,
              salvo en cesáreas donde una persona de apoyo puede ingresar.
            </li>

            <li>
              El personal respetará el derecho del paciente a designar sus visitantes.
              En situaciones especiales se pueden restringir visitas:
              <ul className="list-disc space-y-1 ml-8">
                <li>Peticiones del paciente.</li>
                <li>Normativas de control de infecciones.</li>
                <li>Interferencia en la atención de otros pacientes.</li>
                <li>Paciente bajo custodia policial.</li>
              </ul>
            </li>

            <li>
              Horarios de visita Interhospital:
              <ul className="list-decimal ml-8 space-y-3">

                <li>
                  Hospitalización: 08h00 a 20h00
                  <ul className="list-disc ml-8 space-y-1">
                    <li>Máximo dos visitantes por paciente.</li>
                    <li>
                      Menores de 14 años pueden ingresar acompañados y supervisados.  
                      El paciente <strong>no</strong> puede supervisar al menor.
                    </li>
                    <li>Tiempo de visita para menores: 1 hora.</li>
                  </ul>
                </li>

                <li>
                  UCI: Lunes a domingo de 13h00 a 14h00
                  <ul className="list-disc ml-8 space-y-1">
                    <li>Máximo un visitante por paciente.</li>
                    <li>No se permiten menores.</li>
                  </ul>
                </li>

                <li>
                  UCIN: 12h00–12h30 y 17h00–17h30
                  <ul className="list-disc ml-8 space-y-1">
                    <li>Plan Canguro: 12h00 a 16h00</li>
                    <li>
                      Lactario: 24 horas.  
                      Interhospital no se responsabiliza por objetos perdidos.
                      Contactos: Caja Ext 102-103 – Convenios Ext 101 – Servicio al Cliente Ext 106.
                    </li>
                  </ul>
                </li>

              </ul>
            </li>

          </ul>

          <p>
            Si tiene alguna queja o sugerencia, escribir a  
            <strong> servicioalcliente@interhospital.com.ec</strong>.
          </p>

        </div>
        <Image 
            src="/Images/Politica-de-acceso.jpg"
            width={800}
            height={800}
            className="mt-5"
        />
      </div>


    </div>

  );
}
