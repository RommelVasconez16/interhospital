export async function getMedicos() {
  try {
    const res = await fetch(`https://interhospital.com.ec/api/medicos`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error al obtener médicos");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetch médicos:", error);
    return [];
  }
}
