'use client'

import Image from 'next/image'
import valores from './valores'
import GamaInstalaciones from './gama-instalaciones'
import politicas from './politicas'
import { Building2, Target, Heart, Award, Shield, Users } from "lucide-react"

export default function InfoNosotros(){
    return (
        <section className='flex flex-col min-h-screen'>            

            <section className='container grid lg:grid-cols-2 py-20 px-4 gap-12 items-center mx-auto'>
                <aside>
                    <div className='inline-flex items-center gap-2 bg-[#0061A6]/10 text-[#0061A6] px-4 py-2 rounded-full mb-6'>
                        <Building2 className="w-5 h-5" />
                        <span className="font-semibold">Quiénes Somos</span>
                    </div>
                    <h2 className='text-4xl font-bold mb-6 text-balance'>
                        Líderes en Tecnología Médica Avanzada
                    </h2>
                    <p className='text-lg leading-relaxed' style={{color: "var(--textColor)"}}>
                        Interhospital es una institución de salud ecuatoriana comprometida con brindar servicios médicos de la más alta calidad. Contamos con tecnología de punta y un equipo de profesionales altamente capacitados. <br/> <br/>
                        Nuestras instalaciones en Guayaquil están equipadas con la última tecnología médica, permitiéndonos ofrecer diagnósticos precisos y tratamientos efectivos en todas nuestras especialidades.
                    </p>
                </aside>
                <Image
                    src="/Images/NosotrosHospital.jpg"
                    width={500}
                    height={500}
                    alt='InterHospital'
                    className='relative h-[500px] w-auto rounded-3xl overflow-hidden'
                />
            </section>

            <section className='flex py-20 text-center px-4 justify-center from-[#0061A6]/5 to-[#008D36]/5' style={{backgroundColor: "#F2F8F8"}}>
                <div className='max-w-4xl'>
                    <div className='inline-flex items-center gap-2 bg-[#008D36]/10 text-[#008D36] px-4 py-2 rounded-full mb-6'>
                        <Award className="w-5 h-5" />
                        <span className="font-semibold">Nuestra Misión</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">
                        Nuestra razón de ser
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed" style={{color: "var(--textColor)"}}>
                        Somos una corporación médica vanguardista que ofrece servicios especializados de salud, asegurnado a la comunidad un tratamiento oportuno y eficaz, cumpliendo estándares de calidad con calidez en su atención.
                    </p>
                </div>
            </section>

            <section className='py-20 container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 bg-[#0061A6]/10 text-[#0061A6] px-4 py-2 rounded-full mb-6'>
                        <Heart className="w-5 h-5" />
                        <span className="font-semibold">Valores Institucionales</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">
                        Nuestros Valores
                    </h2>
                </div>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {valores.map((value, index) => (
                    <div 
                        key={index} 
                        className='bg-card rounded-3xl p-8 border-2 hover:border-[#0061A6]/20 transition-all hover:shadow-xl group'
                        style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
                    >
                        <div 
                            className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'
                            style={{ backgroundColor: `${value.color}15` }}
                        >
                            <value.icon className='w-8 h-8' style={{color: value.color}}/>
                        </div>
                        <h3 className='text-2xl font-bold mb-4'>
                            {value.title}
                        </h3>
                        <p className='text-muted-foreground leading-relaxed'>
                            {value.description}
                        </p>                    
                    </div>
                ))}
              </div>
            </section>

            <section className='flex py-20 text-center px-4 justify-center from-[#0061A6]/5 to-[#008D36]/5' style={{backgroundColor: "#F2F8F8"}}>
                <div className='max-w-4xl'>
                    <div className='inline-flex items-center gap-2 bg-[#008D36]/10 text-[#008D36] px-4 py-2 rounded-full mb-6'>
                        <Target className="w-5 h-5" />
                        <span className="font-semibold">Nuestra Visión</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">
                        Hacia donde vamos
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed" style={{color: "var(--textColor)"}}>
                        Ser líderes en innovación y transformación en servicios de salud, convirtiéndonos en un complejo hospitalario con reconomiento nacional e internacional, basados en atención prfesional en busca del bienestar de los pacientes y la comunidad.
                    </p>
                </div>
            </section>

            <GamaInstalaciones/>

            <section className='py-20 px-4 text-center bg-gradient-to-br from-[#008D36]/5 to-[#0061A6]/5'>
                <div className='max-w-4xl mx-auto'>
                    <div className='inline-flex items-center gap-2 bg-[#008D36]/10 text-[#008D36] px-4 py-2 rounded-full mb-6'>
                        <Shield className="w-5 h-5" />
                        <span className="font-semibold">Políticas de Calidad</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Compromiso con la Calidad</h2>
                    <p className='text-lg text-gray-500 mb-12'>
                        Interhospital es una corporación médica vanguardista que trabaja para ofrecer a nuestros clientes servicios especializados de salud, por lo cual se compromete a:
                    </p>
                    
                    <div 
                        className="bg-white rounded-3xl p-8 md:p-12 border-2"
                        style={{borderColor: "lab(90.952% 0 -.0000119209)"}}
                    >
                        <ul className='space-y-6'>
                            {politicas.map((policy, index) => (
                                <li key={index} className='flex items-center gap-4'>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0061A6] to-[#008D36] flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white font-bold">{index + 1}</span>
                                    </div>
                                    <p className="text-sm md:text-lg text-left leading-relaxed">{policy}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>

        </section>
    )
}