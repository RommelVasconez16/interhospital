const {API_MEDICOS_TOKEN, HOST_INTERHOSPITAL} = process.env

export async function getMedicos(url) {
  try {
    const res = await fetch(`${HOST_INTERHOSPITAL}/api/${url}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${API_MEDICOS_TOKEN}`,
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
