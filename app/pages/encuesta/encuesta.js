"use client";

export default function Encuesta() {
  return (
    <section className="py-16 bg-[#F7FAFC]">
      <div className="max-w-4xl mx-auto px-6">

        {/* ================= TÍTULO ================= */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0061A6] text-center mb-4">
          Encuesta de Satisfacción CDI
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Su opinión es muy importante para nosotros. Por favor, complete la
          siguiente encuesta para ayudarnos a mejorar nuestros servicios.
        </p>

        <form className="space-y-12">

          {/* ================= DATOS GENERALES ================= */}
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Datos Generales
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selecciona, ¿En qué sede fuiste atendido?
                </label>
                <select className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0061A6]">
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
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0061A6]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Ingresa tu apellido"
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0061A6]"
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Edad
                </label>
                <input
                  type="number"
                  placeholder="Ej: 35"
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0061A6]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ¿Usted es?
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                        type="radio"
                        name="Paciente"
                        className="accent-[#0061A6] w-4 h-4"
                    />
                    Paciente
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

          {/* ================= SATISFACCION DEL CLIENTE ================= */}
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Satisfacción del Cliente
            </h3>

            <div className="space-y-8">

              {[
                "¿Cómo calificaría su experiencia en general?",
                "En caso de poder elegir, ¿Volvería para ser atendido en este centro de imágenes?",
              ].map((pregunta, idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-700 mb-3">
                    {pregunta}
                  </p>

                  <div className="flex gap-6">
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

          {/* ================= EXPERIENCIA ==================== */}
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Por favor califique los siguientes aspectos de su experiencia seleccionando
              la opción que mejor describa su nivel de satisfacción
            </h3>

            <div className="space-y-8">

              {[
                "Facilidad para agendar su cita",
                "Atención del personal de caja",
                "Tiempo de espera desde su llegada hasta su examen",
                "Claridad en la información e indicaciones recibidas antes del examen",
                "Trato del personal durante el examen",
                "Cumplimiento del tiempo para entrega de resultados",
                "Facilidad para acceder a sus resultados"
              ].map((pregunta, idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-700 mb-3">
                    {pregunta}
                  </p>

                  <div className="flex gap-6">
                    {["Muy Satisfecho", "Satisfecho", "Regular", "Insatisfecho", "Muy Insatisfecho"].map((valor) => (
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

          {/* ================= BOTÓN ================= */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0061A6] text-white px-12 py-3 rounded-full
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
