import Image from "next/image";

export default function BannerInfo() {
  return (
    <section
      className="
        relative 
        flex flex-col
        gap-12
        px-6 pt-14
        md:px-10 
        lg:px-20 lg:pt-20
        overflow-hidden
      "
    >
      {/* 🔹 Fondo con degradado izquierdo */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/Images/PORTADA.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
          opacity: 0.45,
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 80%, black 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 80%, black 100%)",
        }}
      />

      {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CONTENIDO PRINCIPAL ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */}
      <aside className="flex flex-col gap-6 max-w-[520px] z-10">

        {/* Etiqueta */}
        <p
          className="
            hidden lg:flex
            items-center gap-2 
            px-3 py-2.5 
            rounded-xl 
            text-xs font-bold
            w-max
          "
          style={{
            color: "var(--text-color-one)",
            backgroundColor: "var(--btnfondo)",
          }}
        >
          <Image
            src={"/Images/icon_tecnologia_vanguardia.png"}
            width={24}
            height={24}
            alt="icon_vanguardia"
          />
          Tecnología Médica de Vanguardia
        </p>

        {/* Título */}
        <p
          className="
            text-3xl md:text-4xl lg:text-5xl 
            font-extrabold 
            tracking-[-0.04em] 
            leading-tight 
            text-black
          "
        >
          La tecnología más{" "}
          <span className="text-[#0061A6]">avanzada</span> está en{" "}
          <span className="text-[#008D36]">INTERHOSPITAL</span>
        </p>

        {/* Descripción */}
        <p className="text-gray-700 text-sm md:text-base">
          Ofrecemos servicios especializados de salud con los mejores
          especialistas y tecnología de última generación en Ecuador.
        </p>
      </aside>

      {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ BLOQUE DE 3 COLUMNAS (NUEVO) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */}
      <div
        className="
          w-full 
          bg-[#595959]/95
          rounded-2xl
          grid grid-cols-1 md:grid-cols-3
          text-white
        "
      >
        {/* Horario */}
        <div className="p-6 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10">
          <div className="w-20 h-20 rounded-full bg-[#4D4D4D] flex items-center justify-center -mt-10 shadow-lg">
            <Image src="/Images/icon-clock-white.png" width={38} height={38} alt="clock" />
          </div>

          <h3 className="text-lg font-semibold mt-4">Horario de atención</h3>

          <ul className="mt-4 text-sm space-y-1 text-white/90 text-center">
            <li>Mon - Fri <span className="ml-4">8:00 AM - 5:00 PM</span></li>
            <li>Saturday <span className="ml-4">9:00 AM - 2:00 PM</span></li>
            <li>Sunday <span className="ml-4">Cerrado</span></li>
          </ul>
        </div>

        {/* Resultados */}
        <div className="p-6 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10">
          <div className="w-20 h-20 rounded-full bg-[#0A82C8] flex items-center justify-center -mt-10 shadow-lg">
            <Image src="/Images/icon-user-group.png" width={40} height={40} alt="patients" />
          </div>

          <h3 className="text-lg font-semibold mt-4">Resultados</h3>

          <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
            Ver Resultados
          </button>

          <div className="text-sm mt-4 text-white/80">
            Preparaciones • Políticas de facturación
          </div>
        </div>

        {/* Buscador por Médico */}
        <div className="p-6 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#4D4D4D] flex items-center justify-center -mt-10 shadow-lg">
            <Image src="/Images/icon-search-white.png" width={38} height={38} alt="search" />
          </div>

          <h3 className="text-lg font-semibold mt-4">Buscador por Médico</h3>

          <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
            Buscar Médico
          </button>

          <div className="text-sm mt-4 text-white/80">
            Accede y encuentra especialistas por área
          </div>
        </div>
      </div>
    </section>
  );
}
