import Image from "next/image";
import Header from './components/header'
import BannerInfo from './components/banner-info'
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
      <NuestrasCifras/>
      <Nosotros/>
      <PackageChequeos/>
      <BannerServices/>
      <PackageQuirurgicos/>
      <Convenios/>
      <Instalaciones/>
      <Image 
        src="/Images/INTERHOSPITAL_REDES.jpg"
        width={1000}
        height={1000}
        alt="Logo Imagen"
        className="w-full h-[500px] object-cover object-[center_10%]"
      />
      <Footer/>
      <Whatsapp/>
    </main>
  );
}
