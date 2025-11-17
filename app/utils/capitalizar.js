export default function capitalizarNombre(nombre) {
  if (!nombre) return "";
  return nombre
    .toLowerCase()              
    .split(" ")          
    .filter(Boolean)                 
    .map(
      (w) => w.charAt(0).toUpperCase() + w.slice(1) 
    )
    .join(" ");
}
