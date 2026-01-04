import Header from '../../../components/header'
import Footer from '../../../components/footer'
import InfoCentroImagenes from './centroImagenes'
import Whatsapp from '../../../components/whatsapp'
import HeroSectionService from '../../../components/heroSectionService'

export default function CentroImagenes(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoCentroImagenes/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}