import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Metadata } from 'next';
import ImageCarousel from '@/app/ui/imageCarousel';
import HeaderDayna from '@/app/ui/header';
import WhatsappButton from '@/app/ui/buttons';
import FooterDayna from '@/app/ui/footer';


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
        <div className="bg-[url(/gifmundo.gif)]  bg-cover h-96 shrink-0 rounded-lg p-6 ">
          <Image className="text-5xl text-white mx-auto size-auto flex items-center hover:scale-150 transition-all duration-700"
            src="/Logotipo Dayna Personalizados1.png"
            alt='logo Dayna'
            width={100}
            height={100}
            priority
          />
          <h1 className="text-5xl text-white  mx-auto size-auto flex items-center justify-center text-center">Bem vindos ao Mundo<br></br> de possibilidades!</h1>
        </div>

        <hr className='my-8 border-t-2 border-[#ff7d3a]' />

        <section id="catalogo" className="min-h-[700px] flex flex-row p-10 gap-6">
          <div className="flex-1">
            <ImageCarousel />
          </div>
          <div className="flex-1 max-h-[600px] bg-gradient-to-r from-[#ff7d3a] to-[#ec3236] shrink-0 rounded-lg p-6 text-white">
            <h3 className='pt-10 pr-10 pl-10 text-[35px]'>Descubra o universo de possibilidades que podemos criar para você, sua empresa, festa ou evento!</h3>
            <p className='pt-10 pr-10 pl-10 text-[25px]'>Transformamos ideias em realidade! Somos especialistas em criar soluções personalizadas para todas as ocasiões e necessidades</p>

            <div className='pt-10 pr-10 pl-10'>
              <a
                href="https://api.whatsapp.com/message/HAKWQLATC4L4C1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="
                relative z-10 overflow-hidden p-4 bg-white text-black 
                hover:bg-gradient-to-r from-[#ff7d3a] to-[#ec3236] 
                hover:text-white rounded-full hover:ring-4 hover:ring-black
                transition duration-700 hover:scale-110 transition-all duration-500
                
                overflow-hidden
                before:absolute before:inset-0 before:rounded-full 
                before:border-4 before:border-[#ec3236] 
                before:z-[-1] before:transition-transform before:duration-700 
                hover:before:rotate-180
                ">
                  Faça seu pedido
                  
                </button>
              </a>
            </div>

          </div>
        </section>
        <WhatsappButton />
      </main>
      <FooterDayna/>
    </div>
  );
}
