export function parseMedicos(response) {
  const rows = Array.isArray(response?.data) ? response.data : [];

  return rows.map((m) => ({
    id: m.id,
    nombreCompleto: `${m.nombres} ${m.apellidos}`,
    especialidad: [
      m.especialidad_1,
      m.especialidad_2,
      m.especialidad_3,
    ].filter(Boolean),

    estado: m.estado,
    correo: m.email,
    consultorio: m.consultorio,
    numeroContacto: m.numero_contacto,
    horario: m.horario_atencion,
    genero: m.genero,
    piso: m.piso,

    imagen: m.imagenUrl
      ? {
          url: m.imagenUrl,
          alt: m.nombreCompleto || "Doctor Interhospital",
        }
      : null,
  }));
}
