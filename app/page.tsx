import Image from "next/image";
import Header from './components/header'
import BannerInfo from './components/banner-info'
import NuestrasCifras from './components/nuestras-cifras'
import BannerServices from './components/banner-services'
import PackageChequeos from './components/packages-chequeos'
import Convenios from './components/convenios'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="flex flex-col pt-[100px]">
      <Header/>
      <BannerInfo/>
      <NuestrasCifras/>
      <BannerServices/>
      <PackageChequeos/>
      <Convenios/>
      <Footer/>
    </main>
  );
}
