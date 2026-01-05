import { Suspense } from "react";

import Header from '../../components/header'
import Footer from '../../components/footer'
import InformacionServicios from './informacion'
import Whatsapp from '../../components/whatsapp'
import HeroSectionService from '../../components/heroSectionService'

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