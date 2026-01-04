import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Whatsapp from '../../../components/whatsapp'
import InfoFarmacia from './farmacia'
import HeroSectionService from '../../../components/heroSectionService'

export default function Interlab(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoFarmacia/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}