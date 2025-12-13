import Header from '../../components/header'
import Footer from '../../components/footer'
import InforPacientes from './informacion'
import Whatsapp from '../../components/whatsapp'

export default function Pacientes(){
    return (
        <section className='flex flex-col pt-[100px]'>
            <Header/>
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                <img
                    src="/Images/pacienteportada.jpg"
                    alt="Patient care"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0061A6]/40 via-[#0061A6]/30 to-[#008D36]/40" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white">Documentación</h1>
                </div>
                </div>
            </section>
            <InforPacientes/>
            <Footer/>
            <Whatsapp/>
        </section>
    )
}