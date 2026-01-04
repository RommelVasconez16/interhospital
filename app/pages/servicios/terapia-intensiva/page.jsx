import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Whatsapp from '../../../components/whatsapp'
import InfoTerapia from './terapia'
import HeroSectionService from '../../../components/heroSectionService'

export default function Terapia(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoTerapia/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}