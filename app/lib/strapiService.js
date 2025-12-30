const { STRAPI_HOST, STRAPI_TOKEN } = process.env

export async function Api(url){
  try {
    const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      }
    });

    if (!res.ok) {
      console.error(
        "Respuesta del servidor:", 
        res.status, 
        await res.text()
      );
      throw new Error("Error al obtener la información");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetch del servidor:", error);
    return [];
  }
}