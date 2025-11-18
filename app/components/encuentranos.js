"use client"

import React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    };


  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="gradient-text">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Estamos aquí para atenderte. Escríbenos y te responderemos a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  id="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+593 99 999 9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" size="lg" className="w-full rounded-full">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Teléfonos</h3>
                  <p className="text-muted-foreground mb-2">Hospital: (04) 375 0000</p>
                  <p className="text-muted-foreground">Centro de Imágenes Kennedy: (04) 239 0556</p>
                </div>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">serviciocliente@interhospital.com.ec</p>
                </div>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Av. Del Bombero Km. 6.5 Vía a la Costa
                    <br />
                    Guayaquil, Ecuador
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horarios de Atención</h3>
                  <p className="text-muted-foreground mb-1">Emergencias: 24 horas</p>
                  <p className="text-muted-foreground mb-1">Laboratorio: 24 horas</p>
                  <p className="text-muted-foreground">Farmacia y Centro de Imágenes: 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Encuéntranos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Hospital Principal */}
            <div className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.9947!2d-79.9247!3d-2.1447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDgnNDEuMCJTIDc5wrA1NSczMC45Ilc!5e0!3m2!1sen!2sec!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-[#0061A6]/10 to-[#008D36]/10">
                <h4 className="text-xl font-bold mb-2 text-[#0061A6]">Hospital Principal - Ceibos</h4>
                <p className="text-muted-foreground mb-2">Av. del Bombero km 6.5, vía a la costa</p>
                <p className="text-sm font-semibold text-[#008D36]">Abierto 24/7</p>
              </div>
            </div>

            {/* Centro de Imágenes */}
            <div className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0234!2d-79.9012!3d-2.1389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDgnMjAuMCJTIDc5wrA1NCcwNC4zIlc!5e0!3m2!1sen!2sec!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-[#008D36]/10 to-[#0061A6]/10">
                <h4 className="text-xl font-bold mb-2 text-[#008D36]">Centro de Imágenes Kennedy</h4>
                <p className="text-muted-foreground mb-2">Av. Francisco Boloña #715</p>
                <p className="text-sm font-semibold text-[#0061A6]">Lun - Vie: 7AM - 8PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
