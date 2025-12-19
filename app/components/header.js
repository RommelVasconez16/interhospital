'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Inicio", href: "/"},
    { label: "Servicios", href: "/pages/servicios"},
    { label: "Nosotros", href: "/pages/nosotros"},
    { label: "Medicos", href: "/pages/medicos"},
    { label: "Pacientes", href: "/pages/pacientes"},
    { label: "Informate", href: "/pages/informate"},
    { label: "Contacto", href: "/pages/contactanos"}
  ]

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* === NAVBAR DESKTOP (>=1100px) === */}
      <nav className="hidden pb-5 pr-16 pl-16 pt-5 min-[1106]:flex justify-between items-center w-full bg-white">
        {/* Logo */}
        <Link href="/">
          <Image
              src="/Images/logohorizontal.png"
              alt="Logo Hospital"
              width={224}
              height={50}
              priority
          />
        </Link>

        {/* Menú principal */}
        <ul className="hidden min-[1106]:flex flex-row gap-[31px] items-center text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-bold hover:text-[#0061A6] transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </ul>

          {/* Emergency Contact */}
        <div className="hidden min-[1106]:flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Emergencia 24h</p>
            <a
              href="tel:+59343750000"
              className="text-lg font-bold text-[#0061A6] hover:text-[#1D70B7] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (04) 375 0000
            </a>
          </div>
        </div>
      </nav>

      {/* === NAVBAR MOBILE (<=1099px) === */}
      <nav className="px-6 py-4 min-[1106]:hidden w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Images/logohorizontal.png"
              alt="Logo Hospital"
              width={224}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Botón hamburguesa (a la derecha) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-[var(--btn_primary)] text-2xl focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      {/* === MENU LATERAL MOBILE === */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white shadow-lg transform transition-transform duration-300 z-50
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header del menú */}
        <div className="flex flex-col items-center border-b border-gray-200 py-4 relative">
          <Image
            src="/Images/logovertical.png"
            alt="Logo Hospital"
            width={50}
            height={50}
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-gray-700 text-xl"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Opciones del menú */}
        <ul className="flex flex-col mt-6 space-y-2 text-gray-800 text-sm font-medium">
          {navItems.map((index) => (
            <Link
              key={index.label}
              href={index.href}
              className="hover:bg-green-50 px-6 py-2"
            >
              {index.label}
            </Link>
          ))}


        </ul>

      </div>
    </header>
    </>
  );
}
