import Header from '../../components/header'
import Footer from '../../components/footer'
import Whatsapp from '../../components/whatsapp'
import InfoIntergastro from './intergastro'
import HeroSectionService from '../../components/heroSectionService'

export default function InterGastro(){
    return (
        <section className='flex flex-col'>
            <Header/>
            <HeroSectionService/>
            <InfoIntergastro/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}