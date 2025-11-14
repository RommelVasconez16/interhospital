import Image from 'next/image'
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className='bg-gradient-to-br from-[#0061A6] via-[#1D70B7] to-[#008D36] text-white'>
            <section className='container mx-auto px-4 py-12 '> 
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 container mx-auto px-4 py-12'>
                    <section className='items-center gap-3 mb-4'>
                        <Image 
                            src="/Images/logovertical.png"
                            width={100}
                            height={100}
                            alt='Logo Interhospital'
                            className='mb-4'
                        />
                        <p className="text-sm text-white/90 leading-relaxed mb-4">
                            Tecnología médica avanzada y atención personalizada en Ecuador
                        </p>
                        <div className="flex gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-[#0061A6] flex items-center justify-center transition-colors"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-[#0061A6] flex items-center justify-center transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-[#0061A6] flex items-center justify-center transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-[#0061A6] flex items-center justify-center transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        </div>
                    </section>
                    <section>
                        <h3 className="font-bold mb-4 text-white">Hospital Principal</h3>
                        <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                            <span className="text-white/90">Av. del Bombero km 6.5, vía a la costa</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                            <span className="text-white/90">Abierto 24/7</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Phone className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                            <a href="tel:+59343750000" className="text-white/90 hover:text-white">
                            (04) 375 0000
                            </a>
                        </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-bold mb-4 text-white">Centro de Imágenes</h3>
                        <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                            <span className="text-white/90">Av. Francisco Boloña #715</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                            <div className="text-white/90">
                            <div>Lunes - Viernes</div>
                            <div>7:00 AM - 8:00 PM</div>
                            </div>
                        </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-bold mb-4 text-white">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="text-white/90 hover:text-white transition-colors">
                            Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/nosotros" className="text-white/90 hover:text-white transition-colors">
                            Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link href="/medicos" className="text-white/90 hover:text-white transition-colors">
                            Médicos
                            </Link>
                        </li>
                        <li>
                            <Link href="/servicios" className="text-white/90 hover:text-white transition-colors">
                            Servicios
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="text-white/90 hover:text-white transition-colors">
                            Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/pacientes" className="text-white/90 hover:text-white transition-colors">
                            Pacientes
                            </Link>
                        </li>
                        </ul>
                    </section>
                </div>
                <section className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/90">
                        <p>© 2025 Interhospital. Todos los derechos reservados.</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-white transition-colors">
                            Política de Privacidad
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                            Términos de Servicio
                            </Link>
                        </div>
                </section>
            </section>
        </footer>
    )
}