import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Whatsapp from '../../../components/whatsapp'
import InfoHemodinamia from './hemodinamia'
import HeroSectionService from '../../../components/heroSectionService'

export default function Emergencia(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoHemodinamia/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}