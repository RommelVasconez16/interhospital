"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* WhatsApp popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-3xl shadow-2xl border-2 border-[#008D36]/20 p-6 w-80 animate-in slide-in-from-bottom">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-lg font-bold mb-2">¿Necesitas ayuda?</h3>
          <p className="text-sm text-muted-foreground mb-4">Escríbenos por WhatsApp y te atenderemos de inmediato</p>

          <div className="space-y-3">
            <a
              href="https://wa.me/593999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#008D36]/10 hover:bg-[#008D36]/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#008D36] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold">Atención al Cliente</div>
                <div className="text-xs text-muted-foreground">Hospital Ceibos</div>
              </div>
            </a>

            <a
              href="https://wa.me/593988888888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#0061A6]/10 hover:bg-[#0061A6]/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#0061A6] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold">Centro de Imágenes</div>
                <div className="text-xs text-muted-foreground">Av. Boloña</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>
    </>
  )
}
