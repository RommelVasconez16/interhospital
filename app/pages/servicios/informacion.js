"use client";

import Image from "next/image";
import servicios from "./servicios";
import Link from "next/link";
import { useState } from "react";

export default function InfoServicios() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Total de páginas
  const totalPages = Math.max(1, Math.ceil(servicios.length / ITEMS_PER_PAGE));

  // Asegurar que la página actual no sobrepase el total
  const safePage = Math.min(currentPage, totalPages);

  // Índices para el slice
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;

  const currentServicios = servicios.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="py-16 px-16 relative overflow-hidden">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentServicios.map((servicio, index) => (
          <div
            key={index}
            className="flex flex-col justify-between group overflow-hidden hover:shadow-xl transition-all duration-500 border-2 rounded-2xl cursor-pointer transform gap-4"
            style={{
              transitionDelay: `${index * 100}ms`,
              borderColor: "lab(90.952% 0 -.0000119209)",
            }}
          >
            <Image
              src="/Images/fondo.jpg"
              width={150}
              height={100}
              alt={servicio.title}
              className="object-cover w-full h-[200px]"
            />

            <div className="px-6 pb-6 flex flex-col gap-4">
              <p className="text-xl font-bold">{servicio.title}</p>
              <p className="text-sm text-gray-500 line-clamp-2">{servicio.description}</p>

              <div className="flex justify-center mt-3">
                <Link
                  href={servicio.url}
                  className="
                    text-white text-sm p-2 px-20 rounded-lg w-fit cursor-pointer
                    transition-all
                    bg-[var(--text-color-one)]
                    hover:bg-[var(--text-color-one-hover)]
                  "
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔢 CONTROLES DE PAGINACIÓN */}
      {servicios.length > ITEMS_PER_PAGE && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
            className={`px-4 py-2 rounded-full border text-sm cursor-pointer ${
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
            className={`px-4 py-2 rounded-full border text-sm cursor-pointer ${
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
    </section>
  );
}
