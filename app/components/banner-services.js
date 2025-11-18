export default function BannerServices(){
    return (
        <section
        className="flex flex-col p-10 gap-8 h-[300px] md:h-[400px] lg:h-[500px] justify-center bg-cover bg-center"
        style={{
            backgroundImage: "url('/Images/fondoservices.png')",
            backgroundRepeat: "no-repeat",
        }}
        >
            <div className="flex flex-row items-center p-2.5 pr-3.5 pl-3.5 w-fit rounded-4xl gap-1" style={{backgroundColor: "rgba(128, 159, 181, 0.41)"}}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0061A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-xs font-bold" style={{color: "var(--text-color-one)"}}> Nuestros Servicios </p>
            </div>
            <p className="flex flex-col text-3xl font-bold tracking-[-0.05em]">
                Servicios especializados de salud <br/>
                con tecnología de vanguardia y <br/>
                atención personalizada
            </p>
            <button className="text-md p-3 pr-5 pl-5 rounded-4xl text-white w-fit" style={{backgroundColor: "var(--text-color-one)"}}>
                Conoce todos nuestros servicios ➤
            </button>
        </section>
    )
}