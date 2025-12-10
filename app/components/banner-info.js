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

      {/* ▬▬▬▬▬ BLOQUE DE 3 CARDS RE-DISEÑADO ▬▬▬▬▬ */}
      <div className="
        grid grid-cols-1 md:grid-cols-3 
        gap-6 mt-10
      ">

        {/* CARD — Horario */}
        <div className="
          bg-white rounded-xl p-6 
          border border-gray-200 
          shadow-sm hover:shadow-md 
          transition
        ">
          <h3 className="text-lg font-semibold text-[#0061A6]">
            Horario de Atención
          </h3>

          <div className="mt-4 text-sm text-gray-700 space-y-2">
            <p className="flex justify-between">
              <span>Lunes a Viernes</span>
              <span className="font-medium">8:00 – 17:00</span>
            </p>

            <p className="flex justify-between">
              <span>Sábado</span>
              <span className="font-medium">9:00 – 14:00</span>
            </p>

            <p className="flex justify-between">
              <span>Domingo</span>
              <span className="font-medium text-red-600">Cerrado</span>
            </p>
          </div>
        </div>

        {/* CARD — Resultados */}
        <div className="
          bg-white rounded-xl p-6 
          border border-gray-200 
          shadow-sm hover:shadow-md 
          transition flex flex-col
        ">
          <h3 className="text-lg font-semibold text-[#008D36]">
            Resultados de Exámenes
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            Consulta tus resultados de laboratorio de manera rápida y segura.
          </p>

          <button className="
            mt-4 py-2 w-full 
            bg-[#008D36] text-white 
            rounded-lg font-semibold 
            hover:bg-[#00742c] 
            transition shadow
          ">
            Ver Resultados
          </button>
        </div>

        {/* CARD — Buscador Médico */}
        <div className="
          bg-white rounded-xl p-6 
          border border-gray-200 
          shadow-sm hover:shadow-md 
          transition flex flex-col
        ">

          <h3 className="text-lg font-semibold text-[#1D70B7]">
            Buscar Médico
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            Encuentra especialistas por nombre o área médica.
          </p>

          {/* Campo de búsqueda */}
          <input 
            type="text"
            placeholder="Ej: Cardiología, Pérez..."
            className="
              mt-4 px-4 py-2 w-full
              border border-gray-300 rounded-lg
              text-sm outline-none
              focus:ring-2 focus:ring-[#1D70B7]/40 
              focus:border-[#1D70B7]
              transition
            "
          />

          <button className="
            mt-3 py-2 w-full 
            bg-[#1D70B7] text-white 
            rounded-lg font-semibold 
            hover:bg-[#155991] 
            transition shadow
          ">
            Buscar
          </button>
        </div>

      </div>

    </section>
  );
}
