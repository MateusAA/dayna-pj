'use client'
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Metadata } from 'next';
import ImageCarousel from '@/app/ui/imageCarousel';
import HeaderDayna from '@/app/ui/header';
import WhatsappButton from '@/app/ui/buttons';
import FooterDayna from '@/app/ui/footer';


export default function Catalogo() {
    return (
        <section id="catalogo" className="scroll-mt-40 min-h-[500px] flex flex-row p-10 gap-6">
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
    )
};