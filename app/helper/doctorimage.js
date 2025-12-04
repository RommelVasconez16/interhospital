export default function getDoctorImage(doctor) {
  if (doctor.imagen && doctor.imagen.trim() !== "") {
    return doctor.imagen;
  }

  if (doctor.genero === "M") {
    return "/Images/default_masculino.webp";
  }

  if (doctor.genero === "F") {
    return "/Images/default_femenino.webp";
  }
}
