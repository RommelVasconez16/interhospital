import { Suspense } from "react";
import type { Metadata } from "next";

import Header from '../components/header'
import Footer from '../components/footer'
import InformacionServicios from './informacion'
import Whatsapp from '../components/whatsapp'
import HeroSectionService from '../components/heroSectionService'

export const metadata: Metadata = {
    title: "Servicios",
    description: "Encuentra todos nuestros servicios disponibles para ti"
}

export default function Servicios(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <Suspense fallback={null}>
                <InformacionServicios/>
            </Suspense>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}