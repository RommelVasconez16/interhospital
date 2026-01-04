import Header from '../../components/header'
import Footer from '../../components/footer'
import InforPacientes from './informacion'
import Whatsapp from '../../components/whatsapp'
import HeroSection from '../../components/banner/heroSection'

export default function Pacientes(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSection 
                image="/Images/pacienteportada.jpg"
                title="Documentación"
                subtitle=""
            />
            <InforPacientes/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}