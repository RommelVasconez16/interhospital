export async function getMedicos() {
  try {
    const res = await fetch(`https://interhospital.com.ec/api/medicos`, {
      // Permitir que Next.js genere esta página de forma estática con revalidación
      // en lugar de forzar "no-store" (revalidate: 0), que rompe el build estático.
      next: { revalidate: 3600 }, // revalida cada hora; ajusta según tu necesidad
    });

    if (!res.ok) {
      throw new Error("Error al obtener médicos");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetch médicos:", error);
    // Devolvemos un array vacío para que el resto de la UI pueda manejar el caso sin romperse
    return [];
  }
}
