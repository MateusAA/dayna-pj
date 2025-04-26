'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function HeaderDayna() {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-25 p-4">
            <div className="bg-[#ff7d3a] text-white shrink-0 rounded-full shadow-md ">
                <div className="max-w-7xl mx-auto flex items-center justify-between ">
                    {/* LOGO */}
                    <div className="flex items-center ">
                        {/* <Link href="/">MeuSite</Link> */}
                        <Image
                            className='hover:scale-125 transition-all duration-500'
                            src="/Logotipo Dayna Personalizados.png"
                            alt='logo Dayna'
                            width={100}
                            height={100}
                            priority
                        />

                    </div>

                    {/* NAVEGAÇÃO */}
                    <nav className="flex gap-8 text-xl text-white ">
                        <Link href="/" className="hover:text-[#ec3236] transition hover:scale-125 transition-all duration-500">Home</Link>
                        <Link href="#catalogo" className="hover:text-[#ec3236] transition hover:scale-125 transition-all duration-500">Catálogo</Link>
                        <Link href="/contato" className="hover:text-[#ec3236] transition hover:scale-125 transition-all duration-500">Contato</Link>
                        <Link href="/contato" className="hover:text-[#ec3236] transition hover:scale-125 transition-all duration-500">Diferenciais</Link>
                        <Link href="/contato" className="hover:text-[#ec3236] transition hover:scale-125 transition-all duration-500">Missão, Visão e Valores</Link>
                        <Link href="/contato" className="hover:text-[#ec3236] transition hover:scale-125 transition-all duration-500">Sobre nós</Link>
                    </nav>
                </div>
            </div>
        </header>
    );

}