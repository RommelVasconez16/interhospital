import Header from '../../components/header'
import Footer from '../../components/footer'
import Whatsapp from '../../components/whatsapp'
import HeroSection from '@/app/components/banner/heroSection'
import Menu from './menu-alimenticio'

export default function MenuAlimenticio(){
    return (
        <section className="flex flex-col">
            <Header/>
            <HeroSection 
                image="/Images/interhospitalportada.jpg"
                title="Menu Alimenticio"
                subtitle=""
            />
            <Menu/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}