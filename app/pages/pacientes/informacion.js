"use client";

import Forms from "./descargaForms";
import Portals from "./resultPortals";
import { useEffect, useRef, useState } from "react";
import {
  FileText,
  Download,
  ExternalLink
} from "lucide-react";

export default function InfoPacientes() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0061A6]/5 via-background to-[#008D36]/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Downloadable Forms */}
        <div className="mb-20">
          <div
            className={`text-center mb-12 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#008D36]/10 text-[#008D36] px-4 py-2 rounded-full mb-6">
              <FileText className="w-5 h-5" />
              <span className="font-semibold">Formularios Descargables</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Documentos para <span className="text-[#008D36]">Pacientes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descarga los formularios que necesitas para tus trámites médicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Forms.map((form, index) => (
              <div
                key={index}
                className={`bg-card rounded-3xl p-6 border-2 border-border hover:border-[#0061A6]/20 transition-all hover:shadow-xl group transform duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${form.color}15` }}
                >
                  <form.icon
                    className="w-8 h-8"
                    style={{ color: form.color }}
                  />
                </div>

                <h3 className="text-lg font-bold mb-3 text-balance">
                  {form.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {form.description}
                </p>

                <button
                  variant="outline"
                  className="w-full rounded-full border-2 hover:bg-[#0061A6]/5 bg-transparent"
                  style={{ borderColor: `${form.color}30` }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Results Portals */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#008D36]/10 text-[#008D36] px-4 py-2 rounded-full mb-6">
              <ExternalLink className="w-5 h-5" />
              <span className="font-semibold">Ver Resultados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Acceso a <span className="text-[#008D36]">Resultados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Consulta tus resultados médicos de forma rápida y segura
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Portals.map((portal, index) => (
              <a
                key={index}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-3xl p-8 border-2 border-border hover:border-[#008D36]/20 transition-all hover:shadow-xl group block"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${portal.color}15` }}
                >
                  <portal.icon
                    className="w-10 h-10"
                    style={{ color: portal.color }}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#008D36] transition-colors">
                  {portal.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {portal.description}
                </p>

                <div className="flex items-center gap-2 text-[#008D36] font-semibold">
                  Acceder al Portal
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0061A6]/10 to-[#008D36]/10 rounded-3xl p-8 border-2 border-[#0061A6]/20">
            <h3 className="text-2xl font-bold mb-4 text-center">
              ¿Necesitas Ayuda?
            </h3>
            <p className="text-center text-muted-foreground mb-6 leading-relaxed">
              Si tienes problemas para acceder a tus resultados o descargar
              formularios, nuestro equipo está disponible para asistirte
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="rounded-full bg-gradient-to-r from-[#0061A6] to-[#008D36] hover:opacity-90">
                Contactar Soporte
              </button>
              <button
                variant="outline"
                className="rounded-full border-2 border-[#0061A6]/20 hover:bg-[#0061A6]/5 bg-transparent"
              >
                Preguntas Frecuentes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
