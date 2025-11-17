"use client";

import capitalizar from "../../utils/capitalizar";
import { useState } from "react";
import { Search, Phone, Clock, MapPin, ChevronRight } from "lucide-react";

export default function InfoMedicos({ medicos }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  // Filtro NOMBRE + ESPECIALIDAD
  const filteredDoctors = medicos.filter((doctor) => {
    const search = searchTerm.toLowerCase();

    const nameMatch = doctor.nombreCompleto.toLowerCase().includes(search);

    const specialtyMatch = doctor.especialidad
      .map((esp) => esp.toLowerCase())
      .some((esp) => esp.includes(search));

    return nameMatch || specialtyMatch;
  });

  // 🔢 Paginación
  const totalPages = Math.max(
    1,
    Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE)
  );
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const currentDoctors = filteredDoctors.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Doctor seleccionado
  const selectedDoctorData = medicos.find((d) => d.id === selectedDoctor);

  // Doctores similares por especialidad
  const similarDoctors = selectedDoctorData
    ? medicos.filter(
        (d) =>
          d.id !== selectedDoctorData.id &&
          d.especialidad.some((esp) =>
            selectedDoctorData.especialidad.includes(esp)
          )
      )
    : [];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* 🔍 BARRA DE BÚSQUEDA UNIFICADA */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nombre o especialidad (ej: SÁNCHEZ, Cardiología)"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // 🔄 reset de página al buscar
              }}
              className="pl-12 h-14 rounded-full text-sm border-2 focus:border-[#0061A6] w-full"
              style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
            />
          </div>

          {searchTerm && (
            <p className="text-sm text-muted-foreground mt-3 text-center">
              {filteredDoctors.length}{" "}
              {filteredDoctors.length === 1
                ? "médico encontrado"
                : "médicos encontrados"}
            </p>
          )}
        </div>

        {/* RESULTADOS */}
        {!selectedDoctor ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {currentDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor.id)}
                  className="flex flex-col justify-between bg-card rounded-3xl overflow-hidden border-2 border-border hover:border-[#0061A6]/20 transition-all hover:shadow-xl cursor-pointer group"
                  style={{
                    borderColor: "lab(90.952% 0 -.0000119209)",
                  }}
                >
                  {/* Imagen */}
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={doctor.imagen || "/placeholder.svg"}
                      alt={doctor.nombreCompleto}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col p-6 justify-center">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#0061A6] transition-colors">
                      Dr. {capitalizar(doctor.nombreCompleto)}
                    </h3>

                    <p className="text-[#008D36] font-semibold mb-3 text-sm">
                      {capitalizar(doctor.especialidad.join(", "))}
                    </p>

                    <button
                      className="flex flex-row p-2 items-center text-sm font-semibold justify-center w-full rounded-full group/btn text-[#0061A6] hover:text-black hover:bg-[#0061A6]/10"
                    >
                      Ver Perfil
                      <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}

              {currentDoctors.length === 0 && (
                <p className="col-span-full text-center text-sm text-muted-foreground">
                  No se encontraron médicos con ese criterio.
                </p>
              )}
            </div>

            {/* 🔢 CONTROLES DE PAGINACIÓN */}
            {filteredDoctors.length > ITEMS_PER_PAGE && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  className={`px-4 py-2 rounded-full border text-sm ${
                    safePage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#0061A6]/10"
                  }`}
                  style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
                >
                  Anterior
                </button>

                <span className="text-sm text-muted-foreground">
                  Página {safePage} de {totalPages}
                </span>

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={safePage === totalPages}
                  className={`px-4 py-2 rounded-full border text-sm ${
                    safePage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#0061A6]/10"
                  }`}
                  style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
                >
                  Siguiente
                </button>
              </div>
            )}
          </>
        ) : (
          // 📌 PERFIL DEL DOCTOR
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="mb-6 rounded-full hover:bg-[#0061A6]/10 px-4 py-2 text-sm"
            >
              ← Volver a la lista
            </button>

            <div className="bg-card rounded-3xl overflow-hidden border-2 border-border shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <img
                    src={selectedDoctorData?.imagen || "/placeholder.svg"}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">
                    {capitalizar(selectedDoctorData?.nombreCompleto || "")}
                  </h2>

                  <p className="text-2xl text-[#008D36] font-semibold">
                    {capitalizar(
                      (selectedDoctorData?.especialidad || []).join(", ")
                    )}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#0061A6]/5">
                      <Phone className="w-5 h-5 text-[#0061A6]" />
                      <a
                        href={`tel:${selectedDoctorData?.numeroContacto}`}
                        className="font-semibold"
                      >
                        {selectedDoctorData?.numeroContacto}
                      </a>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#008D36]/5">
                      <Clock className="w-5 h-5 text-[#008D36]" />
                      <p className="font-semibold">
                        {selectedDoctorData?.horario}
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#1D70B7]/5">
                      <MapPin className="w-5 h-5 text-[#1D70B7]" />
                      <p className="font-semibold">
                        Piso {selectedDoctorData?.piso}
                      </p>
                    </div>
                  </div>

                  <button className="w-full rounded-full h-12 bg-gradient-to-r from-[#0061A6] to-[#008D36] hover:opacity-90">
                    Agendar Cita
                  </button>
                </div>
              </div>
            </div>

            {/* SIMILARES */}
            {similarDoctors.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">
                  Especialistas Similares
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  {similarDoctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      onClick={() => setSelectedDoctor(doctor.id)}
                      className="bg-card rounded-3xl overflow-hidden border-2 border-border hover:border-[#0061A6]/20 transition-all hover:shadow-xl cursor-pointer group"
                    >
                      <img
                        src={doctor.imagen || "/placeholder.svg"}
                        className="aspect-square w-full object-cover"
                      />

                      <div className="p-6">
                        <h4 className="text-lg font-bold mb-2 group-hover:text-[#0061A6] transition-colors">
                          {capitalizar(doctor.nombreCompleto)}
                        </h4>

                          <p className="text-[#008D36] font-semibold mb-2">
                          {capitalizar(doctor.especialidad.join(", "))}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          Consultorio {doctor.consultorio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
