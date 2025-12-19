"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function InfoContact() {
  const ubicaciones = [
    {
      title: "Hospital Interhospital",
      lines: [
        "Av. del Bombero Km. 6.5 - Vía a la Costa",
        "Guayaquil, Ecuador"
      ],
    },
    {
      title: "Centro de Imágenes",
      lines: [
        "Av. Francisco Boloña #715",
        "Guayaquil, Ecuador"
      ]
    }
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-16 px-4 sm:px-6 md:px-8 lg:px-0 bg-white">
      <div className="container mx-auto px-4">

        {/* GRID FORM + INFO */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20">

          {/* FORMULARIO */}
          <div
            className="
              w-full
              max-w-none
              sm:max-w-[420px]
              lg:max-w-[520px]
              mx-auto
              p-4
              sm:p-6
              md:p-8
              rounded-3xl
              border
              shadow-sm
              bg-white
            "
            style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <FormInput
                label="Nombre Completo"
                value={formData.name}
                placeholder="Tu nombre"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <FormInput
                type="email"
                label="Correo Electrónico"
                value={formData.email}
                placeholder="tu@email.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <FormInput
                type="tel"
                label="Teléfono"
                value={formData.phone}
                placeholder="+593 99 999 9999"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <div>
                <label className="block text-sm font-medium mb-1">Mensaje</label>
                <textarea
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-sm
                    min-h-[120px]
                    resize-none
                    focus:ring-2
                    focus:ring-[#0061A6]/40
                    focus:border-[#0061A6]
                    outline-none
                    transition
                  "
                  style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0061A6] hover:bg-[#004f85] text-white h-11 rounded-full font-semibold transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* INFORMACIÓN */}
          <div
            className="
              w-full
              max-w-[520px]
              mx-auto
              space-y-6
            "
          >
            <ContactCard
              icon={<Phone className="w-6 h-6 text-[#0061A6]" />}
              title="Teléfonos"
              lines={[
                "Hospital: (04) 375 0000",
                "Centro de Imágenes Kennedy: (04) 239 0556",
              ]}
            />

            <ContactCard
              icon={<Mail className="w-6 h-6 text-[#008D36]" />}
              title="Email"
              lines={["serviciocliente@interhospital.com.ec"]}
            />

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3500 }}
              loop
              className="w-full"
            >
              {ubicaciones.map((u, i) => (
                <SwiperSlide key={i}>
                  <ContactCard
                    icon={<MapPin className="w-6 h-6 text-red-500" />}
                    title={u.title}
                    lines={u.lines}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <ContactCard
              icon={<Clock className="w-6 h-6 text-yellow-600" />}
              title="Horarios de Atención"
              lines={[
                "Emergencias: 24 horas",
                "Laboratorio: 24 horas",
                "Farmacia y Centro de Imágenes: 24 horas",
              ]}
            />
          </div>
        </div>

        {/* 🗺 MAPAS —> CONSERVADOS EXACTAMENTE COMO LOS TENÍAS */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-10 text-[#0061A6]">
            Encuéntranos
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* 🏥 Hospital Principal */}
            <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition bg-white">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d838.1485133991771!2d-79.94592436646852!3d-2.1807581729922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d73f0046c8f63%3A0x9e19923c2e8231ff!2sINTERHOSPITAL!5e0!3m2!1ses-419!2sec!4v1764482951294!5m2!1ses-419!2sec"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-[#0061A6]/10 to-[#008D36]/10">
                <h4 className="text-xl font-bold mb-2 text-[#0061A6]">
                  Hospital Principal - Ceibos
                </h4>
                <p className="text-gray-600 mb-2">Av. del Bombero km 6.5, vía a la costa</p>
                <p className="text-sm font-semibold text-[#008D36]">Abierto 24/7</p>
              </div>
            </div>

            {/* 🖼 Centro de Imágenes Kennedy */}
            <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition bg-white">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d838.1540452162849!2d-79.90136296474225!3d-2.1708048855066546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6deb40b5e637%3A0x5847e829e0d57206!2sCentro%20de%20Im%C3%A1genes%20INTERHOSPITAL%20Kennedy!5e0!3m2!1ses-419!2sec!4v1764483079280!5m2!1ses-419!2sec"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-[#008D36]/10 to-[#0061A6]/10">
                <h4 className="text-xl font-bold mb-2 text-[#008D36]">
                  Interhospital Kennedy
                </h4>
                <p className="text-gray-600 mb-2">Av. Francisco Boloña #715</p>
                <p className="text-sm font-semibold text-[#0061A6]">Lun - Vie: 7AM - 8PM</p>
              </div>
            </div>

          </div>
        </div>
        </div>
    </section>
  )
}

/* COMPONENTES */

function FormInput({ label, type = "text", value, placeholder, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        className="
          w-full
          rounded-xl
          border
          px-4
          py-2
          h-11
          text-sm
          focus:ring-2
          focus:ring-[#0061A6]/40
          focus:border-[#0061A6]
          outline-none
          transition
        "
        style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
      />
    </div>
  )
}

function ContactCard({ icon, title, lines }) {
  return (
    <div
      className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition bg-white"
      style={{ borderColor: "lab(90.952% 0 -.0000119209)" }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-gray-600 text-sm break-all leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
