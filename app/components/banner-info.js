import Image from "next/image";

export default function BannerInfo() {
  return (
    <section
      className="
        relative 
        flex flex-col
        gap-12
        px-6 pt-14 pb-44
        md:px-10 
        lg:px-20 lg:pt-20
        overflow-hidden
      "
    >
      {/* 🔹 Fondo con degradado izquierdo */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/Images/INTERHOSPITAL_BANNER.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          opacity: 0.9,
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 50%, black 60%, black 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 50%, black 60%, black 100%)",

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

    </section>
  );
}
