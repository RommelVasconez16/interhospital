export function parseArticles(response) {
  const rows = Array.isArray(response?.data) ? response.data : [];

  return rows.map((m) => ({
    id: m.id,
    slug: m.slug,
    titulo: m.titulo,
    resumen: m.resumen,
    contenido: m.contenido,

    imagePrincipal: m.imagePrincipal
      ? {
          url: `${process.env.STRAPI_HOST}${m.imagePrincipal.formats?.small?.url || m.imagePrincipal.url}`,
          alt: m.imagePrincipal.alternativeText || m.titulo,
        }
      : null,
  }));
}
