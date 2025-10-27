import Image from 'next/image';

export default function ContactFlash(){
    return(
        <section className='flex flex-row pt-14 flex-wrap justify-center'>
            <div className='flex flex-col p-10 border-gray-300 border-solid border w-[400px] gap-2 justify-center' style={{backgroundColor: "#FCFFFA"}}>
                <h2 className='font-bold text-2xl'>Horario de Atención</h2>
                <p>Horario de visitas</p>
                <div className='flex flex-row gap-2'>
                    <Image src={'/Images/icon_tecnologia_vanguardia.png'} width={24} height={24} alt='logo'/>
                    <p><b>Hospitalización:</b> 08:00 - 20:00 </p>
                </div>
                <div className='flex flex-row gap-2'>
                    <Image src={'/Images/icon_tecnologia_vanguardia.png'} width={24} height={24} alt='logo'/>
                    <p><b>Terapia Intensiva:</b> 13:00 - 13:30</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <Image src={'/Images/icon_tecnologia_vanguardia.png'} width={24} height={24} alt='logo'/>
                    <p><b>Terapia Neonatal:</b> 12:00 - 12:30 / 17:00 - 17:30</p>
                </div>             
            </div>
            <div className='flex flex-col p-10 border-gray-300 border-solid border w-[400px] gap-2' style={{backgroundColor: "#FCFFFA"}}>
                <h2 className='font-bold text-2xl'>Reservar una Cita</h2>
                <p>Contáctanos a los números teléfonicos</p>
                <div className='flex flex-row gap-2'>
                    <Image src={'/Images/icon_tecnologia_vanguardia.png'} width={24} height={24} alt='logo'/>
                    <p>+593 99 568 1111</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <Image src={'/Images/icon_tecnologia_vanguardia.png'} width={24} height={24} alt='logo'/>
                    <p>+593 99 568 1111</p>
                </div>
            </div>
            <div className='flex flex-col p-10 border-gray-300 border-solid border w-[400px] gap-2' style={{backgroundColor: "#FCFFFA"}}>
                <h2 className='font-bold text-2xl'>Servicio de Emergencia</h2>
                <p>Para contáctos de emergencia, utilice los siguientes números:</p>
                <div className='flex flex-row gap-2'>
                    <Image src={'/Images/icon_tecnologia_vanguardia.png'} width={24} height={24} alt='logo'/>
                    <p>+593 99 568 1111</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <Image src={'/Images/icon_tecnologia_vanguardia.png'} width={24} height={24} alt='logo'/>
                    <p>+593 99 568 1111</p>
                </div>
            </div>
        </section>
    )
}