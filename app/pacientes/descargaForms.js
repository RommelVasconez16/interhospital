import { FileText, Download, View, ExternalLink} from "lucide-react";

const pacientedownload = [
  {
    title: "Solicitud de Historia Clínica",
    description: "Formulario para solicitar copia de tu historia médica",
    icon: FileText,
    color: "#0061A6",
    textbtn: "Descargar PDF",
    action: "pdf",
    file: "/FCS-23 SOLICITUD DE HISTORIA CLINICA.pdf",
    btnIcon: Download
  },
  {
    title: "Instrucciones Pre-Quirúrgicas",
    description: "Guía de preparación para pacientes que se someterán a cirugía",
    icon: FileText,
    color: "#008D36",
    textbtn: "Ver Instructivo",
    action: "popup-pre",
    btnIcon: View
  },
  {
    title: "Política de Acceso",
    description: "Información sobre políticas de acceso y visitas al hospital",
    icon: FileText,
    color: "#1D70B7",
    textbtn: "Ver Instructivo",
    action: "popup-politicas",
    btnIcon: View
  },
  {
    title: "Aviso de Privacidad de Datos",
    description: "Política de protección y manejo de información personal",
    icon: FileText,
    color: "#39A935",
    textbtn: "Ver más",
    action: "link",
    url: "/pages/pacientes/privacidad-datos",
    btnIcon: ExternalLink
  }
];

export default pacientedownload;
