import Header from '../../components/header'
import Footer from '../../components/footer'
import Whatsapp from '../../components/whatsapp'
import InfoTorresConsultorios from './torreconsultorios'
import HeroSectionService from '../../components/heroSectionService'

export default function TorreConsultorios(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoTorresConsultorios/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}