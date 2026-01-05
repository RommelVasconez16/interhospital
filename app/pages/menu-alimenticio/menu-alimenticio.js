import Image from "next/image";

export default function Menu() {
  return (
    <section className="py-16">
      <div className="mx-auto px-6">

        {/* CARD */}
        <div className="rounded-3xl p-10 text-center">

          {/* TÍTULO */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0061A6] mb-4">
            Menú Alimenticio
          </h2>

          {/* SUBTÍTULO */}
          <p className="text-lg text-gray-600 mb-8">
            Te presentamos nuestro menú semanal, diseñado para brindar una
            alimentación equilibrada y saludable.
          </p>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg mx-auto">
            <Image
              src="/Images/menuAlimenticio/menusemanal.jpg"
              width={1500}
              height={600}
              alt="Menú Semanal"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
