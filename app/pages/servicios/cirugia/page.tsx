import Header from '../../../components/header'
import Footer from '../../../components/footer'
import InfoCirugia from './cirugia'
import Whatsapp from '../../../components/whatsapp'
import HeroSectionService from '../../../components/heroSectionService'

export default function Cirugia(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoCirugia/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}