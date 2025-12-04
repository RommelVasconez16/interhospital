export async function getMedicos() {
  try {
    const res = await fetch("https://interhospital.com.ec/api/medicos", {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${process.env.API_MEDICOS_TOKEN}`,
      }
    });

    if (!res.ok) {
      console.error(
        "Respuesta del servidor médicos:", 
        res.status, 
        await res.text()
      );
      throw new Error("Error al obtener médicos");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetch médicos:", error);
    return [];
  }
}
