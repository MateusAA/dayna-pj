import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Metadata } from 'next';
import ImageCarousel from '@/app/ui/imageCarousel';
import HeaderDayna from '@/app/ui/header';
import WhatsappButton from '@/app/ui/buttons';
import FooterDayna from '@/app/ui/footer';
import Catalogo from '@/app/ui/catalogo';
import MVV from '@/app/ui/missao';
import Diferenciais from '@/app/ui/diferenciais';
import Sobre from '@/app/ui/sobre';


export const metadata: Metadata = {
  title: 'Dayna Personalizados',
  description: 'Pagina principal',
};

export default function Page() {
  return (
    <div className=''>
      {/* MENU SUPERIOR */}
      <HeaderDayna />

      {/* CONTEÚDO PRINCIPAL */}
      <main className="scroll-smooth flex min-h-screen flex-col p-5 pt-40 ">
        <section id="home" className='scroll-mt-40'>
          <div className="bg-[url(/gifmundo.gif)]  bg-cover h-96 shrink-0 rounded-lg p-16 ">
            <Image className="text-5xl text-white mx-auto size-auto flex items-center hover:scale-150 transition-all duration-700"
              src="/Logotipo Dayna Personalizados1.png"
              alt='logo Dayna'
              width={100}
              height={100}
              priority
            />
            <h1 className="text-5xl text-white  mx-auto size-auto flex items-center justify-center text-center">Bem vindos ao Mundo<br></br> de possibilidades!</h1>
          </div>
        </section>

        <hr className='my-8 border-t-2 border-[#ff7d3a] ' />

        <Catalogo />

        <hr className='my-8 border-t-2 border-[#ff7d3a]' />

        <Diferenciais />

        <hr className='my-8 border-t-2 border-[#ff7d3a]' />

        <MVV />

        <hr className='my-8 border-t-2 border-[#ff7d3a]' />

        <Sobre />

        <hr className='my-8 border-t-2 border-[#ff7d3a]' />

        <WhatsappButton />
      </main>
      <FooterDayna />
    </div>
  );
}
