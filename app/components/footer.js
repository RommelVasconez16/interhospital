import Image from 'next/image'
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  
  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/InterhospitalEcuador/",
      label: "Facebook"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/interhospitalec/",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      url: "https://ec.linkedin.com/company/interhospital?trk=public_post_feed-actor-image",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0061A6] via-[#1D70B7] to-[#008D36] text-white">
      <section className="container mx-auto px-4 py-12">

        {/* GRID RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* LOGO + REDES */}
          <section>
            <Image
              src="/Images/logo-blanco.png"
              width={120}
              height={120}
              alt="Logo Interhospital"
              className="mb-4"
            />

            <p className="text-sm text-white/90 leading-relaxed mb-4 max-w-xs">
              Tecnología médica avanzada y atención personalizada en Ecuador.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url, label}, idx) => (
                <a
                  key={idx}
                  href={url}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10
                    rounded-full
                    bg-white/20
                    hover:bg-white
                    hover:text-[#0061A6]
                    flex items-center justify-center
                    transition-colors
                  "
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </section>

          {/* HOSPITAL PRINCIPAL */}
          <section>
            <h3 className="font-bold mb-4 text-white text-lg">Hospital</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white/90">
                  Av. del Bombero km 6.5, vía a la costa
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Abierto 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+59343750000"
                  className="text-white/90 hover:text-white transition"
                >
                  (04) 375 0000
                </a>
              </li>
            </ul>
          </section>

          {/* CENTRO DE IMÁGENES */}
          <section>
            <h3 className="font-bold mb-4 text-white text-lg">Centro de Imágenes</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Av. Francisco Boloña #715</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <div className="text-white/90">
                  <div>Lunes - Viernes</div>
                  <div>7:00 AM - 8:00 PM</div>
                </div>
              </li>
            </ul>
          </section>

          {/* ENLACES RÁPIDOS */}
          <section>
            <h3 className="font-bold mb-4 text-white text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Inicio", "/"],
                ["Servicios", "/pages/servicios"],
                ["Nosotros", "/pages/nosotros"],
                ["Médicos", "/pages/medicos"],
                ["Pacientes", "/pages/pacientes"],
                ["Infórmate", "/pages/informate"],
                ["Contacto", "/pages/contactanos"]

              ].map(([name, link], i) => (
                <li key={i}>
                  <Link href={link} className="text-white/90 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* COPYRIGHT */}
        <section className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/90">
          <p>© 2025 Interhospital. Todos los derechos reservados.</p>

          <div className="flex gap-6">
            <Link href="/pages/pacientes/privacidad-datos" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
}
