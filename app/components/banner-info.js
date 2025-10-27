import Image from 'next/image';

export default function BannerInfo(){
    return(
        <section className='flex flex-col-reverse pt-10 gap-12 items-center lg:justify-between lg:flex-row'>
            <aside className='flex flex-col lg:min-w-[45%] lg:max-w-[40%] gap-9 justify-center'>
                <p className='hidden gap-2 pt-2.5 pb-2.5 pl-3 pr-3 font-bold rounded-xl text-xs items-center w-max lg:flex lg:flex-row' style={{color: "var(--text-color-one)", backgroundColor: "var(--btnfondo)"}}>
                    <Image src={"/Images/icon_tecnologia_vanguardia.png"} width={24} height={24} alt='icon_vanguardia'/>
                    Tecnología Médica de Vanguardia
                </p>
                <p className="text-5xl font-bold leading-tight">
                La tecnología más
                <span className="bg-gradient-to-r from-[#006C00] to-[#6B66FF] bg-clip-text text-transparent"> avanzada
                </span>{" "}
                está en <span style={{color: "#0061A6"}}>Inter</span><span style={{color: "#008D36"}}>Hospital</span>
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor felis sit amet hendrerit placerat. In tortor ligula, imperdiet a nulla id, vulputate lobortis dolor
                </p>
                <div className='flex flex-row gap-3 flex-wrap'>
                    <button
                    className="pl-16 pr-16 pt-4 pb-4 text-white rounded-lg w-[209px] cursor-pointer 
                            bg-[#0061A6]/80 hover:bg-[#0061A6] transition-colors duration-300"
                    >
                    Ver más
                    </button>
                </div>
            </aside>
            <div className="relative w-full h-[350px] lg:min-w-[50%] lg:max-w-[50%] lg:h-[583px]">
                <Image
                    src="/Images/PORTADA.jpg"
                    alt="Portada"
                    fill
                    className='rounded-xl'
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </section>
    )
}

