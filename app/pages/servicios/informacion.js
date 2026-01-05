"use client";

import Image from "next/image";
import servicios from "./servicios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function InfoServicios() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const ITEMS_PER_PAGE = 6;

  // 1️⃣ Leer página desde la URL
  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  // 2️⃣ Sincronizar estado → URL
  useEffect(() => {
    router.replace(`?page=${currentPage}`, { scroll: false });
  }, [currentPage, router]);

  const totalPages = Math.max(1, Math.ceil(servicios.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;

  const currentServicios = servicios.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="py-14 px-5 sm:px-10 md:px-16 relative overflow-hidden">

      {/* GRID RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentServicios.map((servicio, index) => (
          <div
            key={index}
            className="
              flex flex-col justify-between 
              group overflow-hidden hover:shadow-xl
              transition-all duration-500 
              border-2 rounded-2xl cursor-pointer gap-4
            "
            style={{
              transitionDelay: `${index * 80}ms`,
              borderColor: "lab(90.952% 0 -.0000119209)",
            }}
          >
            <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
              <Image
                src={servicio.image}
                width={300}
                height={200}
                alt={servicio.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="px-5 pb-6 flex flex-col gap-3">
              <p className="text-lg sm:text-xl font-bold leading-snug">
                {servicio.title}
              </p>

              <p className="text-sm text-gray-500 line-clamp-2">
                {servicio.description}
              </p>

              <div className="flex justify-center mt-2">
                <Link
                  href={servicio.url}
                  className="
                    text-white text-sm px-8 py-2 
                    rounded-lg w-fit cursor-pointer
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

      {/* PAGINACIÓN */}
      {servicios.length > ITEMS_PER_PAGE && (
        <div className="flex flex-row items-center justify-center gap-4 mt-10">

          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={safePage === 1}
            className={`px-5 py-2 rounded-full border text-sm
              ${safePage === 1 
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#0061A6]/10 cursor-pointer"
              }`}
            style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
          >
            Anterior
          </button>

          <span className="text-sm text-gray-700">
            Página {safePage} de {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            className={`px-5 py-2 rounded-full border text-sm
              ${safePage === totalPages 
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#0061A6]/10 cursor-pointer"
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
