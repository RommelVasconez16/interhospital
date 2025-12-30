export const dynamic = "force-dynamic";

import Header from '../../components/header'
import Footer from '../../components/footer'
import { Api } from '../../lib/strapiService';
import { parseArticles } from '../../lib/parseStrapi';
import Blog from './blog'
import Whatsapp from '../../components/whatsapp'

export default async function Medicos(){

    const data = await Api("articles?publicationState=live&populate=imagePrincipal");
    const blog = parseArticles(data);

    return(
        <section className='flex flex-col pt-[100px]'>
            <Header/>
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
            <Blog blog={blog} />
            <Footer/>     
            <Whatsapp/>       
        </section>
    )
}
