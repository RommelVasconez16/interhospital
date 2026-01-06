import { headers } from "next/headers";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Whatsapp from "../../components/whatsapp";
import BlogIndividual from "../../components/blogOne";
import { Api } from "../../lib/connectionService";
import { parseArticles } from "../../lib/parseBlog";

export default async function BlogDetail() {
  const headersList = await headers();

  const slug = headersList.get("x-slug");

  console.log("👉 Slug recibido por middleware:", slug);

  if (!slug) {
    return <h1>Slug no encontrado</h1>;
  }

  const data = await Api(
    `articles?publicationState=live&filters[slug][$eq]=${encodeURIComponent(
      slug
    )}&populate=imagePrincipal`
  );

  const articles = parseArticles(data);
  const article = articles[0];

  if (!article) {
    return <h1>Artículo no encontrado</h1>;
  }

  return (
    <section className="flex flex-col pt-[100px]">
      <Header />
      <BlogIndividual article={article} />
      <Footer />
      <Whatsapp />
    </section>
  );
}
