import Image from "next/image";

export default function BannerInfo() {
  return (
    <section
      className="
        relative 
        flex flex-col-reverse 
        items-center 
        gap-12
        px-6 py-14

        md:px-10 
        lg:px-20 lg:py-20 lg:flex-row lg:justify-between
        overflow-hidden
      "
    >
      {/* 🔹 Imagen de fondo con blur */}

      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/Images/PORTADA.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
          filter: "blur(6px)",
        }}
      />

      {/* 🔹 Texto principal */}
      <aside className="flex flex-col gap-6 lg:max-w-[500px] z-10">
        {/* Etiqueta solo desktop */}
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

        {/* TITULO RESPONSIVE */}
        <p
          className="
            text-3xl md:text-4xl lg:text-5xl 
            font-extrabold 
            tracking-[-0.04em] 
            leading-tight 
            text-center lg:text-left
            text-black
          "
        >
          La tecnología más{" "}
          <span className="text-[#0061A6]">avanzada</span> está en{" "}
          <span className="text-[#008D36]">INTERHOSPITAL</span>
        </p>

        {/* DESCRIPCIÓN */}
        <p className="text-gray-700 text-center lg:text-left text-sm md:text-base">
          Ofrecemos servicios especializados de salud con los mejores
          especialistas y tecnología de última generación en Ecuador.
        </p>

        {/* 🔹 BOTONES RESPONSIVE */}
        <div
          className="
            flex flex-col sm:flex-row 
            w-full 
            gap-3 
            justify-center lg:justify-start
          "
        >
          <button
            className="
              w-full sm:w-auto 
              px-8 py-4 
              text-white rounded-4xl 
              bg-[#0061A6]/80 
              hover:bg-[#0061A6] 
              transition-colors 
              duration-300 
              font-bold
            "
          >
            Ver Resultados
          </button>

          <button
            className="
              w-full sm:w-auto 
              px-8 py-4 
              text-black rounded-4xl 
              bg-white 
              transition-colors 
              duration-300 
              font-bold
            "
          >
            Ver Especialidades
          </button>
        </div>
      </aside>

      {/* 🔹 Imagen principal con popup */}
      <div
        className="
          relative 
          w-full 
          h-[280px] 
          sm:h-[350px] 
          md:h-[400px]
          lg:h-[480px] 
          lg:max-w-[620px]
        "
      >
        <Image
          src="/Images/Electrofisiologia-scaled.jpg"
          alt="Electrofisiologia"
          fill
          className="rounded-xl object-cover"
        />

        {/* Popup visible solo desktop */}
        <div
          className="
            hidden lg:block
            absolute
            bottom-4 right-4
            bg-white 
            rounded-xl 
            shadow-xl 
            p-5 
            w-[335px]
            border border-gray-100
          "
        >
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">
            Horario de visitas
          </h3>
          <ul className="text-xs text-gray-700 space-y-1">
            <li className="flex items-center gap-2">
              <Image
                src="/Images/hospitalizacion.png"
                alt="Hospitalizacion Icon"
                height={15}
                width={15}
              />
              <b>Hospitalización:</b> 08:00 - 20:00
            </li>

            <li className="flex items-center gap-2">
              <Image
                src="/Images/terapiaintensiva.png"
                alt="Terapia Intensiva Icon"
                height={15}
                width={15}
              />
              <b>Terapia Intensiva:</b> 13:00 - 13:30
            </li>

            <li className="flex items-center gap-2">
              <Image
                src="/Images/terapianeonantal.png"
                alt="Terapia Neonatal Icon"
                height={15}
                width={15}
              />
              <b>Terapia Neonatal:</b> 12:00 - 12:30 / 17:00 - 17:30
            </li>
          </ul>

          <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-600 text-center">
            Emergencias / Laboratorio / Farmacia Externa <br />
            Av. Del Bombero Km. 6.5 Via a la Costa
            <p className="font-semibold text-green-600 mt-1">24 horas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
