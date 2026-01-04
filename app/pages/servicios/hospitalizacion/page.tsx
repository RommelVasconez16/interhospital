import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Whatsapp from '../../../components/whatsapp'
import InfoHospitalizacion from './hospitalizacion'
import HeroSectionService from '../../../components/heroSectionService'

export default function Hospitalizacion(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoHospitalizacion/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}