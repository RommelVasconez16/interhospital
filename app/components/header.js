'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* === NAVBAR DESKTOP (>=1100px) === */}
      <nav className="hidden lg:flex justify-between items-center w-full">
        {/* Logo */}
        <Image
            src="/Images/logohorizontal.png"
            alt="Logo Hospital"
            width={224}
            height={50}
            priority
        />

        {/* Menú principal */}
        <ul className="flex flex-row gap-[31px] items-center text-sm">
          <li className="hover:text-[var(--btn_primary)] cursor-pointer">Inicio</li>
          <li className="hover:text-[var(--btn_primary)] cursor-pointer">Nosotros</li>
          <li className="hover:text-[var(--btn_primary)] cursor-pointer">Servicios</li>
          <li className="hover:text-[var(--btn_primary)] cursor-pointer">Especialidades</li>
          <li className="hover:text-[var(--btn_primary)] cursor-pointer">Preguntas Frecuentes</li>
          <li className="text-sm">
            <a className="flex flex-row pr-3.5 pt-2 pb-2 pl-3.5 gap-3 text-white rounded-sm" style={{backgroundColor: "var(--btn_primary)"}}>
                Contáctanos
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4"/>
            </a>
          </li>
        </ul>
      </nav>

      {/* === NAVBAR MOBILE (<=1099px) === */}
      <nav className="lg:hidden w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Images/logohorizontal.png"
            alt="Logo Hospital"
            width={224}
            height={40}
            priority
          />
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
            width={120}
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
          <li className="hover:bg-green-50 px-6 py-2">Inicio</li>
          <li className="hover:bg-green-50 px-6 py-2">Nosotros</li>
          <li className="hover:bg-green-50 px-6 py-2">Servicios</li>
          <li className="hover:bg-green-50 px-6 py-2">Especialidades</li>
          <li className="hover:bg-green-50 px-6 py-2 ">Preguntas Frecuentes</li>
        </ul>

        <div className='flex flex-row text-sm px-6 py-2 items-center mt-4 border-gray-200 border-t'>
            <a className="flex flex-row mt-2 pr-3.5 pt-2 pb-2 pl-3.5 gap-3 items-center text-white rounded-sm w-full justify-center" style={{backgroundColor: "var(--btn_primary)"}}>
                Contáctanos
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4"/>
            </a>
        </div>
      </div>
    </>
  );
}
