'use client';

import Link from "next/link";

export default function BannerServices() {
  return (
    <section
      className="
        relative
        overflow-hidden
        flex flex-col
        items-center md:items-start
        justify-center
        px-6 py-16
        md:px-12 md:py-20
        lg:px-20 lg:py-28
        gap-6
        text-center md:text-left
        min-h-[420px] md:min-h-[520px]
      "
    >
      {/* 🎥 CONTENEDOR DE VIDEO */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            min-w-full
            h-150
            md:min-h-full
            object-cover
            object-bottom-right
            md:object-bottom
            scale-130
            lg:scale-150
          "
          src="/Videos/VideoService.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>


      {/* 🌫 OVERLAY PARA CONTRASTE */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 -z-10" />

      {/* 🔹 BADGE */}
      <div
        className="
          flex items-center
          gap-1.5
          px-3 py-2
          rounded-3xl
          backdrop-blur-sm
        "
        style={{ backgroundColor: "rgba(128, 159, 181, 0.41)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0061A6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <p
          className="text-xs font-bold"
          style={{ color: "var(--text-color-one)" }}
        >
          Nuestros Servicios
        </p>
      </div>

      {/* 🔹 TÍTULO */}
      <p
        className="
          text-lg
          md:text-2xl
          lg:text-3xl
          font-bold
          tracking-[-0.03em]
          leading-snug
          text-white
          max-w-2xl
        "
      >
        Servicios especializados de salud
        con tecnología de vanguardia y
        atención personalizada
      </p>

      {/* 🔹 BOTÓN */}
      <Link href="/pages/servicios">
        <button
          className="
            text-xs md:text-sm
            px-6 py-3
            rounded-3xl
            font-semibold
            text-white
            shadow-md
            hover:shadow-lg
            hover:scale-105
            transition-all
            w-max
            cursor-pointer
          "
          style={{ backgroundColor: "var(--text-color-one)" }}
        >
          Conoce todos nuestros servicios ➤
        </button>
      </Link>
    </section>
  );
}
