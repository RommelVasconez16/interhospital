import InfoNosotros from './informacion'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Whatsapp from '../../components/whatsapp'
import HeroSection from '../../components/banner/heroSection'

export default function Nosotros(){
    return(
        <section className="flex flex-col">
            <Header/>
            <HeroSection
                image="/Images/interhospitalportada.jpg"
                title="Sobre Nosotros"
                subtitle="Más de 20 años brindando atención médica de excelencia en Ecuador"
            />
            <InfoNosotros/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}