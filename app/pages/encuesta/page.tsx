import Header from '../../components/header'
import Footer from '../../components/footer'
import Whatsapp from '../../components/whatsapp'
import HeroSection from '../../components/banner/heroSection'
import Encuesta from './encuesta'

export default function EncuestaSatisfaccion(){
    return (
        <section>
            <Header/>
            <HeroSection 
                image="/Images/pacienteportada.jpg"
                title="Encuesta de Satisfaccion"
                subtitle="En Interhospital valoramos su opinión. Por ello, deseamos conocer su experiencia, ya sea en calidad de paciente o como representante del paciente."
            />
            <Encuesta/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}