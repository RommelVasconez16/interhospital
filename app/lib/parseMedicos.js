export function parseMedicos(response) {
  const rows = Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response)
    ? response
    : [];

  return rows.map((m) => ({
    id: m.id,
    nombreCompleto: `${m.NOMBRES} ${m.APELLIDOS}`,

    especialidad: [
      m.ESPECIALIDAD_1,
      m.ESPECIALIDAD_2,
      m.ESPECIALIDAD_3,
    ].filter(Boolean),

    estado: m.ESTADO,
    piso: m.PISO,
    correo: m.CORREO_ELECTRONICO,
    consultorio: m.CONSULTORIO,
    numeroContacto: m.NUMERO_CONTACTO,
    horario: m.HORARIO_ATENCION,
    imagen: m.IMAGEN,
    genero: m.GENERO,
  }));
}
