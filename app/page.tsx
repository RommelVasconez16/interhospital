import Image from "next/image";
import Header from './components/header'
import BannerInfo from './components/banner-info'
import ContenedorCard from './components/contenedorCard'
import NuestrasCifras from './components/nuestras-cifras'
import Nosotros from './components/sobrenosotros'
import BannerServices from './components/banner-services'
import PackageChequeos from './components/packages-chequeos'
import PackageQuirurgicos from './components/packages-quirurgicos'
import Convenios from './components/convenios'
import Instalaciones from './components/instalaciones'
import Encuentranos from './components/encuentranos'
import Whatsapp from './components/whatsapp'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="flex flex-col pt-[100px]">
      <Header/>
      <BannerInfo/>
      <ContenedorCard/>
      <NuestrasCifras/>
      <Nosotros/>
      <PackageChequeos/>
      <BannerServices/>
      <PackageQuirurgicos/>
      <Convenios/>
      <Instalaciones/>
      <>
        {/* Imagen para desktop */}
        <Image
          src="/Images/INTERHOSPITAL_REDES_WEB.png"
          width={1000}
          height={1000}
          alt="Banner Desktop"
          className="hidden md:block w-full h-[500px] object-cover object-[center_10%]"
        />

        {/* Imagen para mobile */}
        <Image
          src="/Images/INTERHOSPITAL_REDES_MOBILE.png"
          width={600}
          height={600}
          alt="Banner Mobile"
          className="block md:hidden w-full h-[500px] object-cover object-center"
        />
      </>

      <Footer/>
      <Whatsapp/>
    </main>
  );
}
