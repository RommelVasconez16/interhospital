"use client";

import { marked } from "marked";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import normalizeMarkdownLists from "../utils/markdownlist";

marked.setOptions({
  gfm: true,
  breaks: true,
});

export default function BlogIndividual({ article }) {
  if (!article) return null;

  const router = useRouter();
  const normalizedContent = normalizeMarkdownLists(article.contenido || "");
  const htmlContent = marked.parse(normalizedContent);

  return (

    <section>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Images/medicosportada.jpg"
            alt="Patient care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0061A6]/40 via-[#0061A6]/30 to-[#008D36]/40" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white">Blog de Noticias</h1>
            <p className="text-lg text-white/90 text-pretty">"INFORMACION CAMBIAR"</p>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16">
        <button
          onClick={() => router.back()}
          className="mb-10 inline-flex items-center gap-2 bg-[#0061A6]/10 
                     text-[#0061A6] px-5 py-2 rounded-full font-medium
                     hover:bg-[#0061A6]/20 transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        {article.imagePrincipal && (
          <div className="relative w-full mb-10 rounded-2xl overflow-hidden">
            <img
              src={article.imagePrincipal.url}
              alt={article.imagePrincipal.alt || article.titulo}
              className="w-full h-56 object-cover"
            />
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {article.titulo}
        </h1>

        <div
          className="
            prose prose-lg max-w-none
            prose-ul:list-disc prose-ul:pl-6
            prose-li:marker:text-gray-700
          "
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

    </section>
    
  );
}
