"use client";

import Link from "next/link";

export default function Blog({ blog }) {
  return (
    <section className="container mx-auto px-4 py-16">


      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blog.map((item) => (
          <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow">
            {item.imagePrincipal && (
              <img
                src={item.imagePrincipal.url}
                alt={item.imagePrincipal.alt}
                className="w-full h-56 object-cover"
              />
            )}

            <div className="p-6">
              <h3 className="text-lg font-bold mb-3">{item.titulo}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.resumen}</p>

              <Link
                href={`/blogs/${item.slug}`}
                className="inline-flex items-center gap-2 font-semibold text-[#0061A6] hover:text-[#008D36]"
              >
                Ver más <span className="text-lg">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
