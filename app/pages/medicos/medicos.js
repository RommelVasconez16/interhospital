import { parseMedicos } from "@/lib/parseMedicos";

async function getMedicos() {
  const res = await fetch("https://interhospital.com.ec/api/medicos", {
    method: "GET",
    cache: "no-store",
    headers: {
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    }
  });

  if (!res.ok) {
    console.error("Error al obtener médicos:", await res.text());
    return { data: [] };
  }

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
