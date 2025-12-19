import Image from 'next/image'

export default function RedSocial(){
    return (
        <>
            <div className="relative w-full h-[500px] hidden sm:block">
            <Image
                src="/Images/INTERHOSPITAL_REDES_WEB.png"
                fill
                alt="Síguenos en redes"
                className="hidden sm:block w-full h-[500px] object-cover object-[center_10%]"
            />

            {/* MITAD IZQUIERDA – Instagram */}
            <a
                href="https://www.instagram.com/interhospitalec"
                target="_blank"
                aria-label="Instagram"
                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
            />

            {/* MITAD DERECHA – Facebook */}
            <a
                href="https://www.facebook.com/InterhospitalEcuador"
                target="_blank"
                aria-label="Facebook"
                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
            />
            </div>


            {/* Imagen para mobile */}
            <div className="relative w-full h-[500px] sm:hidden">
            <Image
                src="/Images/REDES_SOCIALES_CELULAR.webp"
                fill
                alt="Redes sociales"
                className="block sm:hidden w-full h-[500px] object-cover object-center"
            />

            <a
                href="https://www.instagram.com/interhospitalec"
                target="_blank"
                className="absolute left-0 top-0 w-1/2 h-full"
            />

            <a
                href="https://www.facebook.com/InterhospitalEcuador"
                target="_blank"
                className="absolute right-0 top-0 w-1/2 h-full"
            />
            </div>
        </>
    )
}