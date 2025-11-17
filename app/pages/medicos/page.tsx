import Header from '../../components/header'
import Footer from '../../components/footer'
import { getMedicos } from '../../lib/medicoService';
import { parseMedicos } from '../../lib/parseMedicos';
import InfoMedico from './informacion'

export default async function Medicos(){

    const data = await getMedicos();
    const medicos = parseMedicos(data);

    return(
        <section className='flex flex-col pt-[150px]'>
            <Header/>
            <InfoMedico medicos={medicos} />
            <Footer/>            
        </section>
    )
}