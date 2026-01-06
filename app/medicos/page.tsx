export const dynamic = "force-dynamic";

import { Metadata } from 'next';
import Header from '../components/header'
import Footer from '../components/footer'
import { Api } from '../lib/connectionService';
import { parseMedicos } from '../lib/parseMedicos';
import InfoMedico from './informacion'
import Whatsapp from '../components/whatsapp'
import HeroSection from '../components/banner/heroSection'

export const metadata: Metadata = {
    title: "Medicos",
    description: "Nuestros especialistas en las áreas respectivas del Interhospital"
}

export default async function Medicos(){

    const data = await Api("medicos");
    const medicos = parseMedicos(data);

    console.log("Medicos: {}", medicos)

    return(
        <section className='flex flex-col'>
            <Header/>
            <HeroSection 
                image="/Images/medicosportada.jpg"
                title="Nuestros Médicos"
                subtitle="Equipo de profesionales altamente calificados comprometidos con tu salud"
            />
            <InfoMedico medicos={medicos} />
            <Footer/>     
            <Whatsapp/>       
        </section>
    )
}
