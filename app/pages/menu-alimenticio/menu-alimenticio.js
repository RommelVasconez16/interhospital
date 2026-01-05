import Image from "next/image";

export default function Menu() {
  return (
    <section className="py-16">
      <div className="mx-auto px-6">

        {/* CARD */}
        <div className="rounded-3xl p-10 text-center">

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
