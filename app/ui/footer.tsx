import Link from 'next/link';
import Image from 'next/image';


export default function FooterDayna() {
    return (
        <footer className="bg-gradient-to-r from-[#ff7d3a] to-[#ec3236] text-xl text-white py-8 mt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Logo e descrição */}

                <div className='flex pr-10 gap-4'>
                    <div>
                        <Image

                            src='/Logotipo Dayna Personalizados3.png'
                            alt='logoRodape'
                            width={500}
                            height={100} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2 ">Dayna Personalizados</h2>
                        <p className="text-lg">
                            Dayna Personalizados – Tudo o que você precisa, do jeito que você imagina! Seja bem-vindo ao site oficial da Dayna Personalizados, a loja que transforma suas ideias em produtos únicos e criativos. Somos especialistas em soluções personalizadas para diferentes públicos e ocasiões, oferecendo uma ampla gama de produtos e serviços que unem qualidade, inovação e um atendimento humanizado.
                        </p>
                    </div>
                </div>

                {/* Links rápidos */}
                <div className='flex gap-12'>
                    <div>

                        <h3 className="text-xl font-semibold mb-2">Links rápidos</h3>
                        <ul className="space-y-1 text-lg">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="#catalogo" className="hover:underline">Catálogo</a></li>
                            <li><a href="#contato" className="hover:underline">Contato</a></li>
                            <li><a href="#sobre" className="hover:underline">Sobre nós</a></li>
                        </ul>
                    </div>

                    <div>

                        {/* Contato */}

                        <h3 className="text-xl font-semibold mb-2">Contato</h3>
                        <p className="text-lg">📍 Localização: São Paulo - SP</p>
                        <p className="text-lg">📞 (11) 91234-5678</p>
                        <p className="text-lg">📧 contato@dayna.com.br</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center  text-white/80">
                &copy; {new Date().getFullYear()} Dayna Personalizados. Todos os direitos reservados. <br />
            </div>
            <div className="mt-2 text-center  text-white/80">
                Desenvolvido por <Link className="text-blue-700" href='https://www.linkedin.com/in/mateus-araujo-amancio-577b7a1b1/' target="_blank">Mateus Araujo Amancio</Link>
            </div>

        </footer>

    );
};