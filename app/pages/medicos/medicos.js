export async function getServerSideProps() {
  const res = await fetch("https://interhospital.com.ec/api/medicos", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_MEDICOS_TOKEN}`,
    },
  });

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Page({ data }) {
  const medicos = parseMedicos(data);

  return (
    <section className="p-10">
      <InfoMedicos medicos={medicos} />
    </section>
  );
}
