import Header from '../components/header'
import Footer from '../components/footer'
import Whatsapp from '../components/whatsapp'
import HeroSection from '../components/banner/heroSection'
import Encuesta from './encuesta'

export default function EncuestaSatisfaccion(){
    return (
        <section>
            <Header/>
            <HeroSection 
                image="/Images/pacienteportada.jpg"
                title="Encuesta de Satisfaccion"
                subtitle="Su opinión es muy importante para nosotros. Por favor, complete la
          siguiente encuesta para ayudarnos a mejorar nuestros servicios."
            />
            <Encuesta/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}