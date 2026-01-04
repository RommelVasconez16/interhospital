export default function HeroSection({
  image,
  title,
  subtitle,
  height = "py-20",
  titleSize = "text-4xl md:text-5xl",
  subtitleSize = "text-base md:text-lg",
  offsetTop = true,
}) {
  return (
    <section className={`${height} relative overflow-hidden flex items-center`}>
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0061A6]/40 via-[#0061A6]/30 to-[#008D36]/40" />
      </div>

      {/* Contenido */}
      <div
        className={`container mx-auto px-4 relative z-10 ${
          offsetTop ? "top-12" : ""
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className={`${titleSize} font-semibold text-white mb-4 text-balance`}
          >
            {title}
          </h1>

          {subtitle && (
            <p className={`${subtitleSize} text-white/90 leading-relaxed`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
