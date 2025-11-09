import Image from 'next/image';

export default function BannerInfo() {
  return (
    <section className='relative flex flex-col-reverse pt-14 pb-14 pl-20 pr-20 gap-12 items-center lg:justify-between lg:flex-row overflow-hidden'>
      {/* 🔹 Imagen de fondo con blur */}
      <div
        className='absolute inset-0 -z-10'
        style={{
          backgroundImage: "url('/Images/PORTADA.jpg')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          opacity: 0.5,
          filter: 'blur(5px)',
        }}
      />

      {/* 🔹 Texto principal */}
      <aside className='flex flex-col lg:max-w-[500px] gap-9 justify-center z-10'>
        <p
          className='hidden gap-2 pt-2.5 pb-2.5 pl-3 pr-3 font-bold rounded-xl text-xs items-center w-max lg:flex lg:flex-row'
          style={{ color: 'var(--text-color-one)', backgroundColor: 'var(--btnfondo)' }}
        >
          <Image src={'/Images/icon_tecnologia_vanguardia.png'} width={24} height={24} alt='icon_vanguardia' />
          Tecnología Médica de Vanguardia
        </p>

        <p className='text-5xl font-extrabold tracking-[-0.04em] leading-tight text-black'>
          La tecnología más{' '}
          <span className='text-[#0061A6]'>avanzada</span> está en{' '}
          <span className='text-[#008D36]'>INTERHOSPITAL</span>
        </p>

        <p className='text-gray-700'>
          Ofrecemos servicios especializados de salud con los mejores especialistas y tecnología de última generación en Ecuador.
        </p>

        <div className='flex flex-row gap-3 flex-wrap'>
          <button
            className='pl-[40px] pr-[40px] pt-[18px] pb-[18px] text-white rounded-4xl w-[209px] cursor-pointer 
                       bg-[#0061A6]/80 hover:bg-[#0061A6] transition-colors duration-300 font-bold'
          >
            Ver Resultados
          </button>
          <button
            className='pl-[30px] pr-[30px] pt-[18px] pb-[18px] text-black rounded-4xl w-[209px] cursor-pointer 
                       bg-white transition-colors duration-300 font-bold'
          >
            Ver Especialidades
          </button>
        </div>
      </aside>

      {/* 🔹 Imagen principal con popup */}
      <div className='relative w-full h-[350px] lg:max-w-[643px] lg:h-[480px]'>
        <Image
          src='/Images/Electrofisiologia-scaled.jpg'
          alt='Electrofisiologia'
          fill
          className='rounded-xl object-cover'
        />

        {/* 🔹 Popup flotante */}
        <div className='absolute -bottom-1/12 right-5 bg-white rounded-xl shadow-xl p-5 w-[335px] border border-gray-100'>
          <h3 className='font-semibold text-gray-900 mb-3 text-sm'>
            Horario de visitas
          </h3>
          <ul className='text-xs text-gray-700 space-y-1'>
            <li className='flex items-center gap-2'>
              <Image 
                src='/Images/hospitalizacion.png'
                alt='Hospitalizacion Icon'
                height={15}
                width={15}
              />
              <b>Hospitalización:</b> 08:00 - 20:00
            </li>
            <li className='flex items-center gap-2'>
              <Image 
                src='/Images/terapiaintensiva.png'
                alt='Terapia Intensiva Icon'
                height={15}
                width={15}
              />
              <b>Terapia Intensiva:</b> 13:00 - 13:30
            </li>
            <li className='flex items-center gap-2'>
              <Image 
                src='/Images/terapianeonantal.png'
                alt='Terapia Neonatal Icon'
                height={15}
                width={15}
              />
              <b>Terapia Neonatal:</b> 12:00 - 12:30
                                       17:00 - 17:30
            </li>
          </ul>

          <div className='mt-4 pt-3 border-t border-gray-200 text-xs text-gray-600 text-center'>
            Emergencias / Laboratorio / Farmacia 911
            <p className='font-semibold text-green-600 mt-1'>🕓 24 horas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
