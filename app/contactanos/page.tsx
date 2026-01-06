import InfoContact from './contactanos'
import Header from '../components/header'
import Footer from '../components/footer'
import Whatsapp from '../components/whatsapp'
import HeroSection from '../components/banner/heroSection'

export default function Contact(){
    return(
        <section className="flex flex-col">
            <Header/>
            <HeroSection 
                image="/Images/interhospitalportada.jpg"
                title="Contáctanos"
                subtitle="Estaremos gustosos de conversar con usted"
            />
            <InfoContact/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}