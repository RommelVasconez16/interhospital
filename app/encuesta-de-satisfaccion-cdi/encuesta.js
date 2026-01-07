"use client";
import { useState } from "react";

export default function Encuesta() {
  const [mostrarComentarios, setMostrarComentarios] = useState(false);

  return (
    <section className="py-10 sm:py-16 bg-[#F7FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <form className="space-y-8 sm:space-y-12">

          {/* ================= DATOS GENERALES ================= */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md p-5 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Datos Generales
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selecciona, ¿En qué sede fuiste atendido?
                </label>
                <select 
                    className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0061A6]"
                    style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}>  
                  <option value="">Seleccione</option>
                  <option>Ceibos</option>
                  <option>Kennedy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
                  className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0061A6]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Apellido
                </label>
                <input
                  type="text"
                  style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
                  placeholder="Ingresa tu apellido"
                  className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0061A6]"
                />
              </div>

              {/* ¿USTED ES? */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Usted es?
                </label>

                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="Paciente"
                      style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
                      className="accent-[#0061A6] w-4 h-4"
                    />
                    Paciente
                  </label>

                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="Paciente"
                      className="accent-[#0061A6] w-4 h-4"
                    />
                    Familiar
                  </label>
                </div>
              </div>

            </div>
          </div>

          {/* ================= SATISFACCIÓN ================= */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md p-5 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Satisfacción del Cliente
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {[
                "¿Cómo calificaría su experiencia en general?",
                "En caso de poder elegir, ¿Volvería para ser atendido en este centro de imágenes?",
              ].map((pregunta, idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-700 mb-3 text-sm sm:text-base">
                    {pregunta}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {["Excelente", "Bueno", "Regular", "Malo"].map((valor) => (
                      <label key={valor} className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                          type="radio"
                          name={`pregunta-${idx}`}
                          value={valor}
                          className="accent-[#0061A6] w-4 h-4"
                        />
                        {valor}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= EXPERIENCIA ================= */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md p-5 sm:p-8">
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-6">
              Por favor califique los siguientes aspectos de su experiencia
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {[
                "Facilidad para agendar su cita",
                "Atención del personal de caja",
                "Tiempo de espera desde su llegada hasta su examen",
                "Claridad en la información e indicaciones recibidas antes del examen",
                "Trato del personal durante el examen",
                "Cumplimiento del tiempo para entrega de resultados",
                "Facilidad para acceder a sus resultados"
              ].map((pregunta, idx, arr) => (
                <div key={idx}>
                  <p className="font-medium text-gray-700 mb-3 text-sm sm:text-base">
                    {pregunta}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {[
                      "Muy Satisfecho",
                      "Satisfecho",
                      "Regular",
                      "Insatisfecho",
                      "Muy Insatisfecho",
                    ].map((valor) => (
                      <label key={valor} 
                        className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                          type="radio"
                          name={`experiencia-${idx}`}
                          value={valor}
                          className="accent-[#0061A6] w-4 h-4"
                          onChange={() => {
                            if (idx === arr.length - 1) {
                              setMostrarComentarios(true);
                            }
                          }}
                        />
                        {valor}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= COMENTARIOS (DINÁMICO) ================= */}
          <div
            className={`transition-all duration-500 ease-out overflow-hidden
              ${mostrarComentarios ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Comentarios adicionales
              </h3>

              <textarea
                rows={4}
                placeholder="Si desea, deje aquí sus comentarios o sugerencias adicionales"
                className="w-full border rounded-xl px-4 py-3 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-[#0061A6]"
                style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
              />
            </div>
          </div>

          {/* ================= BOTÓN ================= */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#0061A6] text-white px-10 sm:px-12 py-3 rounded-full
                         font-semibold hover:bg-[#004f87] transition"
            >
              Enviar encuesta
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}