"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16">
      <div className="mx-auto px-6">

        {/* CARD */}
        <div className="rounded-3xl p-10 text-center">

          {/* IMAGEN */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg mx-auto cursor-pointer
                       transition-transform hover:scale-[1.02]"
            onClick={() => setOpen(true)}
          >
            <Image
              src="/Images/menuAlimenticio/menusemanal.jpg"
              width={1500}
              height={600}
              alt="Menú Semanal"
              className="w-full h-auto"
            />
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Haz clic sobre la imagen para ampliar
          </p>
        </div>
      </div>

      {/* ================= MODAL / LIGHTBOX ================= */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4
                     animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          {/* CONTENIDO */}
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white hover:opacity-80"
            >
              <X size={32} />
            </button>

            {/* IMAGEN GRANDE */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Images/menuAlimenticio/menusemanal.jpg"
                width={2000}
                height={1000}
                alt="Menú Semanal ampliado"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
