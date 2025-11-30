import Link from "next/link";

export default function BannerServices() {
  return (
    <section
      className="
        relative 
        flex flex-col 
        items-center md:items-start 
        justify-center 
        px-6 py-16 
        md:px-12 md:py-20 
        lg:px-20 lg:py-28 
        gap-6 
        text-center md:text-left
      "
      style={{
        backgroundImage: "url('/Images/fondoservices.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔵 Overlay para más contraste */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/10 lg:bg-transparent -z-10"></div>

      {/* 🔹 Badge */}
      <div
        className="
          flex items-center 
          gap-1.5 
          px-3 py-2 
          rounded-3xl 
          backdrop-blur-sm
        "
        style={{ backgroundColor: "rgba(128, 159, 181, 0.41)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0061A6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <p
          className="text-xs font-bold"
          style={{ color: "var(--text-color-one)" }}
        >
          Nuestros Servicios
        </p>
      </div>

      {/* 🔹 Título */}
      <p
        className="
          text-xl 
          md:text-3xl 
          lg:text-4xl 
          font-bold 
          tracking-[-0.03em] 
          leading-snug
        "
      >
        Servicios especializados de salud <br className="hidden md:block" />
        con tecnología de vanguardia y <br className="hidden md:block" />
        atención personalizada
      </p>

      {/* 🔹 Botón */}
      <Link href="/servicios">
        <button
          className="
            text-sm md:text-base 
            px-6 py-3 
            rounded-3xl 
            font-semibold 
            text-white 
            shadow-md 
            hover:shadow-lg 
            hover:scale-105 
            transition-all 
            w-max
          "
          style={{ backgroundColor: "var(--text-color-one)" }}
        >
          Conoce todos nuestros servicios ➤
        </button>
      </Link>
    </section>
  );
}
