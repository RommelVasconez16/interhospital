import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Whatsapp from '../../../components/whatsapp'
import InfoInterlab from './interlab'
import HeroSectionService from '../../../components/heroSectionService'

export default function Interlab(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoInterlab/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}