import Image from "next/image";
import Link from "next/link";

export default function SobreNosotros() {
  return (
    <section className="py-6 px-16">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
        <aside className="flex flex-col items-center lg:items-start lg:max-w-[50%]">
          <div
            className="flex flex-row gap-1.5 items-center p-2 rounded-4xl mb-4 max-w-fit"
            style={{ backgroundColor: "rgba(128, 159, 181, 0.41)" }}
          >
            <Image
              src="/Images/icon_citas.png"
              width={10}
              height={10}
              alt="Icon Citas"
            />
            <p
              className="text-xs font-bold"
              style={{ color: "var(--text-color-one)" }}
            >
              Sobre nosotros
            </p>
          </div>
          <p className="text-center lg:text-justify text-3xl lg:text-4xl font-bold tracking-[-0.07em] text-green-700">
            {" "}
            Somos <span style={{ color: "#0061A6" }}> InterHospital </span>
          </p>
          <p className="text-center lg:text-justify mt-8 mb-8">
            Llevamos nuestro compromiso con la salud un paso más allá. Fue asi,
            que con el respaldo de <b>Interlab</b>, como promotor, nació nuestro
            proyecto, que ya hoy es una realidad.
          </p>
          <Link
            href={"/pages/nosotros"}
            className="text-sm p-2 pr-10 pl-10 rounded-3xl text-white w-fit"
            style={{ backgroundColor: "var(--text-color-one)" }}
          >
            Ver más
          </Link>
        </aside>
        <Image
          src="/Images/imagenosotros.jpg"
          width={500}
          height={150}
          alt="InterLab"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
