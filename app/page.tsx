"use client";

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
import RedSocial from './components/redsocial'


export default function Home() {
  return (
    <main className="flex flex-col pt-[90px]">
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
      <RedSocial/>
      <Footer/>
      <Whatsapp/>
    </main>
  );
}
