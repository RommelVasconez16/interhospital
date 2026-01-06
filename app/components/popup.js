"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopupImagen() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Mostrar popup al cargar
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
      {/* Contenedor */}
      <div className="relative w-[90%] max-w-3xl rounded-2xl overflow-hidden">
        
        {/* Botón cerrar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-black cursor-pointer"
        >
          ✕
        </button>

        {/* Imagen DESKTOP */}
        <div className="hidden md:block">
          <Image
            src="/Images/popups/aviso_construccion_horizontal.png"
            alt="Popup Desktop"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Imagen MOBILE */}
        <div className="block md:hidden">
          <Image
            src="/Images/popups/aviso_construccion_vertical.png"
            alt="Popup Mobile"
            width={600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
