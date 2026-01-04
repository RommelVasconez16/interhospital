import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Whatsapp from '../../../components/whatsapp'
import InfoHospitalario from './hospitalarios'
import HeroSectionService from '../../../components/heroSectionService'

export default function Hospitalarios(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoHospitalario/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}