import Image from "next/image";
import Header from './components/header'
import BannerInfo from './components/banner-info'
import ContactFlash from './components/contacto-rapido'

export default function Home() {
  return (
    <main className="flex flex-col pr-14 pl-14 pt-11 pb-11">
      <Header/>
      <BannerInfo/>
      <ContactFlash/>
    </main>
  );
}
