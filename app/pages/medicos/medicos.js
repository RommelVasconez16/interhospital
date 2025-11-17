import { parseMedicos } from "@/lib/parseMedicos";

async function getMedicos() {
  const res = await fetch("https://interhospital.com.ec/api/medicos", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const data = await getMedicos();
  const medicos = parseMedicos(data);

  return (
    <section className="p-10">
      <InfoMedicos medicos={medicos} />
    </section>
  );
}
