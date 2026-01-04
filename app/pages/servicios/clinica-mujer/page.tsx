import Header from '../../../components/header'
import Footer from '../../../components/footer'
import InfoClinicaMujer from './clinicaMujer'
import Whatsapp from '../../../components/whatsapp'
import HeroSectionService from '../../../components/heroSectionService'

export default function ClinicaMujer(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoClinicaMujer/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}