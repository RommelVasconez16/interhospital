import Header from '../../../components/header'
import Footer from '../../../components/footer'
import InfoProveedoresPoliticas from './proveedores'
import Whatsapp from '../../../components/whatsapp'
import HeroSection from '../../../components/banner/heroSection'

export default function Pacientes(){
    return (
        <section className='flex flex-col pt-[100px]'>
            <Header/>
            <HeroSection
                image="/Images/pacienteportada.jpg"
                title="Política de Datos Personales"
                subtitle="Aviso de Privacidad para Pacientes y Proveedores del Interhospital"
            />
            <InfoProveedoresPoliticas/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}