"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import capitalizar from "../utils/capitalizar";
import { getDoctorImage } from "../helper/doctorimage";
import {
  Search,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  Mail,
  Hospital,
} from "lucide-react";

export default function InfoMedicos({ medicos }) {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [similarPage, setSimilarPage] = useState(1);

  const ITEMS_PER_PAGE = 8;
  const SIMILAR_ITEMS_PER_PAGE = 3;

  useEffect(() => {
    setSearchTerm(initialSearch);
    setCurrentPage(1);
  }, [initialSearch]);

  /* =====================================================
     FILTRAR SOLO MÉDICOS ACTIVOS (ESTADO "D")
  ===================================================== */
  const activeDoctors = medicos.filter(
    (doctor) => doctor.estado === true
  );

  /* =====================================================
     FILTRO POR BÚSQUEDA (NOMBRE + ESPECIALIDAD)
  ===================================================== */
  const filteredDoctors = activeDoctors.filter((doctor) => {
    const search = searchTerm.toLowerCase();

    const nameMatch =
      doctor.nombreCompleto?.toLowerCase().includes(search);

    const specialtyMatch =
      doctor.especialidad
        ?.map((esp) => esp.toLowerCase())
        .some((esp) => esp.includes(search));

    return nameMatch || specialtyMatch;
  });

  /* =====================================================
     PAGINACIÓN LISTADO
  ===================================================== */
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

  /* =====================================================
     DOCTOR SELECCIONADO (SOLO SI ES "D")
  ===================================================== */
  const selectedDoctorData = activeDoctors.find(
    (d) => d.id === selectedDoctor
  );

  /* =====================================================
     MÉDICOS SIMILARES (MISMA ESPECIALIDAD + ACTIVOS)
  ===================================================== */
  const similarDoctors = selectedDoctorData
    ? activeDoctors.filter(
        (d) =>
          d.id !== selectedDoctorData.id &&
          d.especialidad?.some((esp) =>
            selectedDoctorData.especialidad.includes(esp)
          )
      )
    : [];

  const totalSimilarPages = Math.max(
    1,
    Math.ceil(similarDoctors.length / SIMILAR_ITEMS_PER_PAGE)
  );

  const safeSimilarPage = Math.min(similarPage, totalSimilarPages);
  const similarStartIndex =
    (safeSimilarPage - 1) * SIMILAR_ITEMS_PER_PAGE;

  const paginatedSimilarDoctors = similarDoctors.slice(
    similarStartIndex,
    similarStartIndex + SIMILAR_ITEMS_PER_PAGE
  );

  return (
    <section className="py-14">
      <div className="container mx-auto px-4">

        {/* ================= BUSCADOR ================= */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nombre o especialidad (ej: SÁNCHEZ, Cardiología)"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-12 h-14 rounded-full text-sm border-2 w-full" 
              style={{
                    borderColor: "lab(90.952% 0 -.0000119209)",
              }}
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

        {/* ================= LISTADO ================= */}
        {!selectedDoctor ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {currentDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor.id)}
                  className="flex flex-col justify-between bg-card rounded-3xl overflow-hidden border-2 hover:shadow-xl cursor-pointer group"
                  style={{
                        borderColor: "lab(90.952% 0 -.0000119209)",
                  }}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={getDoctorImage(doctor)}
                      alt={doctor.nombreCompleto}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col p-6 justify-center">
                    <h3 className="text-lg font-bold mb-2">
                      Dr. {capitalizar(doctor.nombreCompleto)}
                    </h3>

                    <p className="text-[#008D36] font-semibold mb-3 text-sm">
                      {capitalizar(doctor.especialidad.join(", "))}
                    </p>

                    <button className="flex flex-row p-2 items-center text-sm font-semibold justify-center w-full rounded-full text-[#0061A6] hover:bg-[#0061A6]/10">
                      Ver Perfil
                      <ChevronRight className="ml-2 w-4 h-4" />
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

            {/* ================= PAGINACIÓN ================= */}
            {filteredDoctors.length > ITEMS_PER_PAGE && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  className="px-4 py-2 rounded-full border text-sm disabled:opacity-50 cursor-pointer hover:bg-gray-50"
                  style={{
                        borderColor: "lab(90.952% 0 -.0000119209)",
                  }}
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
                  className="px-4 py-2 rounded-full border text-sm disabled:opacity-50 cursor-pointer hover:bg-gray-50"
                  style={{
                        borderColor: "lab(90.952% 0 -.0000119209)",
                  }}
                >
                  Siguiente
                </button>
              </div>
            )}
          </>
        ) : (
          /* ================= PERFIL ================= */
          <div className="max-w-5xl mx-auto">

            <button
              onClick={() => setSelectedDoctor(null)}
              className="mb-6 rounded-full hover:bg-[#0061A6]/10 px-4 py-2 text-sm cursor-pointer"
            >
              ← Volver a la lista
            </button>

            <div className="bg-card rounded-3xl overflow-hidden border-2 shadow-xl"
              style={{
                    borderColor: "lab(90.952% 0 -.0000119209)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-8">

                {/* IMAGEN */}
                <div className="relative h-[260px] sm:h-[320px] md:h-full">
                  <img
                    src={getDoctorImage(selectedDoctorData)}
                    alt="Doctor"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* INFO */}
                <div className="space-y-5">

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {capitalizar(selectedDoctorData?.nombreCompleto || "")}
                  </h2>

                  <p className="text-md sm:text-xl md:text-2xl text-[#008D36] font-semibold">
                    {capitalizar(
                      (selectedDoctorData?.especialidad || []).join(", ")
                    )}
                  </p>

                  {/* TELÉFONO */}
                  {selectedDoctorData?.numeroContacto && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-[#0061A6]/5">
                      <Phone className="w-5 h-5 text-[#0061A6]" />
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Teléfono</div>
                        <a
                          href={`tel:${selectedDoctorData.numeroContacto}`}
                          className="font-semibold text-xs md:text-base"
                        >
                          {selectedDoctorData.numeroContacto}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* HORARIO */}
                  {selectedDoctorData?.horario && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-[#008D36]/5">
                      <Clock className="w-5 h-5 text-[#008D36]" />
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Horario de atención
                        </div>
                        <p className="font-semibold text-xs md:text-base">
                          {selectedDoctorData.horario}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* UBICACIÓN */}
                  {selectedDoctorData?.piso && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-[#1D70B7]/5">
                      <MapPin className="w-5 h-5 text-[#1D70B7]" />
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Ubicación</div>
                        <p className="font-semibold text-xs md:text-base">
                          Piso {selectedDoctorData.piso}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* CORREO */}
                  {selectedDoctorData?.correo && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-[#008D36]/5">
                      <Mail className="w-5 h-5 text-[#008D36]" />
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Correo Electrónico
                        </div>
                        <p className="font-semibold break-all text-xs md:text-base">
                          {selectedDoctorData.correo}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* CONSULTORIO */}
                  {selectedDoctorData?.consultorio && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-[#1D70B7]/5">
                      <Hospital className="w-5 h-5 text-[#1D70B7]" />
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Consultorio</div>
                        <p className="font-semibold text-xs md:text-base">
                          Consultorio {selectedDoctorData.consultorio}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* ================= SIMILARES ================= */}
            {paginatedSimilarDoctors.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6" style={{color: "var(--text-color-one)"}}>
                  Especialistas Similares
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  {paginatedSimilarDoctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      onClick={() => setSelectedDoctor(doctor.id)}
                      className="bg-card rounded-3xl overflow-hidden border-2 hover:shadow-xl cursor-pointer group"
                      style={{
                            borderColor: "lab(90.952% 0 -.0000119209)",
                      }}
                    >
                      <img
                        src={getDoctorImage(doctor)}
                        className="aspect-square w-full object-cover object-top"
                      />

                      <div className="p-6">
                        <h4 className="text-lg font-bold mb-2">
                          Dr. {capitalizar(doctor.nombreCompleto)}
                        </h4>

                        <p className="text-[#008D36] font-semibold mb-2">
                          {capitalizar(doctor.especialidad.join(", "))}
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
