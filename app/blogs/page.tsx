export const dynamic = "force-dynamic";

import Header from '../components/header'
import Footer from '../components/footer'
import { Api } from '../lib/connectionService';
import { parseArticles } from '../lib/parseBlog';
import Blog from './blog'
import Whatsapp from '../components/whatsapp'
import HeroSection from '../components/banner/heroSection'

export default async function Medicos(){

    const data = await Api("articles?publicationState=live&populate=imagePrincipal");
    const blog = parseArticles(data);

    return(
        <section className='flex flex-col pt-[100px]'>
            <Header/>
            <HeroSection 
                image="/Images/interhospitalportada.jpg"
                title="Blog de Noticias"
                subtitle="INFORMACION CAMBIAR"
            />
            <Blog blog={blog} />
            <Footer/>     
            <Whatsapp/>       
        </section>
    )
}
