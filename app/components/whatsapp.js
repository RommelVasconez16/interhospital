"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const WhatsAppIcon = ({ size = 24, white = false }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={white ? "#fff" : "#25D366"}
      className="transition-transform group-hover:scale-110"
    >
      <path d="M16.004 3.2c-7.032 0-12.8 5.632-12.8 12.56 0 2.336.656 4.608 1.888 6.592L3.2 28.8l6.608-1.696c1.92 1.056 4.096 1.616 6.208 1.616 7.04 0 12.8-5.632 12.8-12.56S23.044 3.2 16.004 3.2zm0 22.816c-1.888 0-3.776-.512-5.408-1.472l-.384-.224-3.904 1.024 1.056-3.776-.256-.384c-1.12-1.728-1.696-3.744-1.696-5.76 0-5.92 4.864-10.72 10.72-10.72s10.72 4.8 10.72 10.72c0 5.92-4.864 10.592-10.72 10.592zm6.016-7.936c-.32-.16-1.92-.96-2.24-1.056-.32-.096-.544-.16-.768.16-.224.32-.864 1.056-1.056 1.28-.192.224-.384.256-.704.096-.32-.16-1.344-.48-2.56-1.568-.96-.832-1.6-1.856-1.792-2.176-.192-.32-.02-.496.14-.656.144-.144.32-.384.48-.576.16-.192.224-.32.32-.544.096-.224.032-.416-.016-.576-.16-.48-.8-2.016-1.12-2.784-.288-.688-.576-.592-.768-.592-.192 0-.416-.032-.64-.032-.224 0-.592.096-.896.416-.32.32-1.216 1.184-1.216 2.88s1.248 3.328 1.408 3.552c.16.224 2.432 3.712 5.92 5.056.832.32 1.6.512 2.144.672.896.288 1.696.248 2.336.16.704-.096 2.24-.912 2.56-1.792.32-.88.32-1.632.224-1.792-.096-.16-.288-.224-.608-.384z" />
    </svg>
  );

  return (
    <>
      {/* POPUP */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl shadow-2xl bg-white animate-in slide-in-from-bottom border border-gray-200">

          {/* HEADER */}
          <div className="bg-[#25D366] text-white rounded-t-2xl p-4 flex gap-3 relative">
            <div className="flex items-center justify-center">
              <WhatsAppIcon white size={30} />
            </div>

            <div>
              <h3 className="font-bold text-lg leading-tight">Iniciar una conversación</h3>
              <p className="text-xs opacity-90 leading-tight">
                ¡Hola! Haz clic en alguno de nuestros contactos.
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-200"
            >
              <X size={22} />
            </button>
          </div>

          {/* CONTENIDO */}
          <div className="p-4">
            <p className="text-xs text-gray-500 mb-3">
              Escríbenos. Te responderemos en breve.
            </p>

            <div className="space-y-3">

              {[
                {
                  name: "Servicio al cliente - Interhospital",
                  link: "https://wa.me/593999999999",
                },
                {
                  name: "Imágenes - Sede Ceibos",
                  link: "https://wa.me/593988888888",
                },
                {
                  name: "Imágenes - Sede Kennedy",
                  link: "https://wa.me/593977777777",
                }
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.link}
                  target="_blank"
                  className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-xl p-3 border border-gray-200 group"
                >
                  <div className="flex items-center gap-3">

                    {/* Línea verde */}
                    <div className="w-1 h-12 bg-[#25D366] rounded-xl"></div>

                    {/* Icono sin fondo */}
                    <WhatsAppIcon size={26} />

                    <span className="text-sm font-medium">{c.name}</span>
                  </div>

                </a>
              ))}

            </div>
          </div>
        </div>
      )}

      {/* BOTÓN FLOTANTE CON ANIMACIÓN */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5c] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 animate-bounce"
      >
        <WhatsAppIcon white size={32} />
      </button>
    </>
  );
}
