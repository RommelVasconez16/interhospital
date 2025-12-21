"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const WhatsAppIcon = ({ size = 26, white = false }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={white ? "#fff" : "#25D366"}
      className="transition-transform"
    >
      <path d="M16.004 3.2c-7.032 0-12.8 5.632-12.8 12.56 0 2.336.656 4.608 1.888 6.592L3.2 28.8l6.608-1.696c1.92 1.056 4.096 1.616 6.208 1.616 7.04 0 12.8-5.632 12.8-12.56S23.044 3.2 16.004 3.2zm0 22.816c-1.888 0-3.776-.512-5.408-1.472l-.384-.224-3.904 1.024 1.056-3.776-.256-.384c-1.12-1.728-1.696-3.744-1.696-5.76 0-5.92 4.864-10.72 10.72-10.72s10.72 4.8 10.72 10.72c0 5.92-4.864 10.592-10.72 10.592zm6.016-7.936c-.32-.16-1.92-.96-2.24-1.056-.32-.096-.544-.16-.768.16-.224.32-.864 1.056-1.056 1.28-.192.224-.384.256-.704.096-.32-.16-1.344-.48-2.56-1.568-.96-.832-1.6-1.856-1.792-2.176-.192-.32-.02-.496.14-.656.144-.144.32-.384.48-.576.16-.192.224-.32.32-.544.096-.224.032-.416-.016-.576-.16-.48-.8-2.016-1.12-2.784-.288-.688-.576-.592-.768-.592-.192 0-.416-.032-.64-.032-.224 0-.592.096-.896.416-.32.32-1.216 1.184-1.216 2.88s1.248 3.328 1.408 3.552c.16.224 2.432 3.712 5.92 5.056.832.32 1.6.512 2.144.672.896.288 1.696.248 2.336.16.704-.096 2.24-.912 2.56-1.792.32-.88.32-1.632.224-1.792-.096-.16-.288-.224-.608-.384z" />
    </svg>
  );

  const contactos = [
    {
      name: "Atención al Cliente",
      sede: "Hospital Ceibos",
      link: "593999999999",
      message: "Hola, necesito información sobre Interhospital.",
      hora: "24/7",
      color: "#008D36",
      bg: "bg-[#008D36]/10 hover:bg-[#008D36]/20",
    },
    {
      name: "Centro de Imágenes",
      sede: "Sede Ceibos",
      link: "593911111111",
      message: "Hola, quiero agendar una cita en Centro de Imágenes Ceibos.",
      hora: "7am - 7pm",
      color: "#0061A6",
      bg: "bg-[#0061A6]/10 hover:bg-[#0061A6]/20",
    },
    {
      name: "Centro de Imágenes",
      sede: "Sede Kennedy",
      link: "593922222222",
      message: "Hola, me gustaría consultar disponibilidad en la sede Kennedy.",
      hora: "7am - 8pm",
      color: "#008D36",
      bg: "bg-[#008D36]/10 hover:bg-[#008D36]/20",
    },
  ];

  return (
    <>
      {/* ───────── TOOLTIP ───────── */}
      {!isOpen && (
        <div className="fixed bottom-[92px] right-6 z-50 block">
          <div className="relative bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-200 animate-bounce-slow">
            <p className="font-semibold text-gray-800 text-sm">
              ¿Necesitas ayuda?
            </p>
            <p className="text-xs text-gray-500">
              Escríbenos por WhatsApp
            </p>

            {/* Flechita */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45"></div>
          </div>
        </div>
      )}

      {/* ───────── POPUP ───────── */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-72 md:w-80 rounded-3xl bg-white shadow-2xl border-2 border-[#008D36]/20 p-4 md:p-6 animate-in slide-in-from-bottom">

          {/* Cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Título */}
          <h3 className="text-lg font-bold mb-2">¿Necesitas ayuda?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Escríbenos nuestro personal te responderá en la brevedad posible.
          </p>

          {/* Lista */}
          <div className="space-y-3">
            {contactos.map((c, i) => (
              <a
                key={i}
                href={`https://wa.me/${c.link}?text=${encodeURIComponent(c.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-2xl transition-colors ${c.bg}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: c.color }}
                >
                  <WhatsAppIcon white size={24} />
                </div>

                <div>
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.sede}</div>
                  <div className="text-xs text-muted-foreground">{c.hora}</div>

                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ───────── BOTÓN FLOTANTE ───────── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed cursor-pointer bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <WhatsAppIcon white size={32} />
      </button>
    </>
  );
}
