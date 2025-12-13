"use client";

import Image from "next/image";
import Link from "next/link";

export default function SobreNosotros() {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-14">

        {/* ───────── IMAGEN ───────── */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/Images/imagenosotros.jpg"
              width={520}
              height={360}
              alt="InterHospital"
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>

        {/* ───────── CONTENIDO ───────── */}
        <aside className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Badge */}
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-semibold"
            style={{ backgroundColor: "rgba(0, 97, 166, 0.12)", color: "#0061A6" }}
          >
            <span>Sobre nosotros</span>
          </div>

          {/* Título */}
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            Somos{" "}
            <span style={{ color: "#0061A6" }}>
              InterHospital
            </span>
          </h2>

          {/* Descripción */}
          <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
            Llevamos nuestro compromiso con la salud un paso más allá.
            Fue así que, con el respaldo de <strong>Interlab</strong> como
            promotor, nació nuestro proyecto, que hoy es una realidad.
          </p>

          {/* Botón */}
          <Link
            href="/pages/nosotros"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-2.5
              rounded-full
              text-sm
              font-medium
              text-white
              transition
              hover:opacity-90
            "
            style={{ backgroundColor: "#0061A6" }}
          >
            Ver más
          </Link>

        </aside>
      </div>
    </section>
  );
}
