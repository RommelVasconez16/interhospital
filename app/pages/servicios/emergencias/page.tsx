import Header from '../../../components/header'
import Footer from '../../../components/footer'
import InfoEmergencia from './emergencia'
import Whatsapp from '../../../components/whatsapp'
import HeroSectionService from '../../../components/heroSectionService'

export default function Emergencia(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoEmergencia/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}