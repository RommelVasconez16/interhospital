export function getDoctorImage(doctor) {
  if (doctor.imagen?.url) {
    return doctor.imagen.url;
  }

  // Fallback por género
  if (doctor.genero === "M") {
    return "/Images/default_masculino.webp";
  }

  if (doctor.genero === "F") {
    return "/Images/default_femenino.webp";
  }
}
