import { getMedicos, parseMedicos } from "@/lib/parseMedicos";

export const dynamic = "force-dynamic"; // para evitar que Next.js llame la API en build

export default async function Page() {
  const data = await getMedicos();
  const medicos = parseMedicos(data);

  return (
    <section className="p-10">
      <InfoMedicos medicos={medicos} />
    </section>
  );
}
