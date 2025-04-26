'use client';

import Image from 'next/image';
import { useEffect ,useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const images = [
    '/Logotipo Dayna Personalizados.png',
    '/Logotipo Dayna Personalizados1.png',
    '/Logotipo Dayna Personalizados2.png',
];

export default function ImageCarousel() {
    const [current, setCurrent] = useState(0);
    const total = images.length;

    
    const nextImage = () => setCurrent((current + 1) % total);
    const prevImage = () => setCurrent((current - 1 + total) % total);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 4000); // Troca a cada 4 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, [current]);

    
    return (
        <div className="relative max-h-[1300px] mx-auto rounded-lg shadow-lg  shrink-0 rounded-lg">
            <Image
                src={images[current]}
                alt={`Imagem ${current + 1}`}
                width={600}
                height={300}
                className="mx-auto object-cover transition-all duration-500"
                priority
            />

            {/* Botão esquerdo */}
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Botão direito */}
            <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
    );
}
