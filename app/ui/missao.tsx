'use client'

export default function MVV() {

    return (
        <section id="missao" className="scroll-mt-40 min-h-[500px] pt-8">
            <div className="bg-gradient-to-r from-[#ec3236] to-[#ff7d3a] rounded-lg text-white flex flex-col items-center p-8">
                {/* Título centralizado */}
                <h3 className="text-3xl font-bold mb-8">Missão, Visão e Valores</h3>
                <h3 className="text-2xl mb-8">
                    Na Dayna Personalizados, somos guiados por um propósito claro e valores sólidos que definem quem somos e como trabalhamos:
                </h3>

                {/* Divs lado a lado */}
                <div className="flex w-full gap-6">
                    <div className="flex-1 bg-white/20 rounded-xl p-6 text-center">
                        <h2 className='text-2xl p-3'>Missão</h2>
                        <p className='p-5 text-lg'>
                            Oferecer produtos gráficos criativos e de alta qualidade, com inovação, agilidade e excelência,
                            transformando ideias em realidade e superando as expectativas de nossos clientes.
                        </p>
                    </div>
                    <div className="flex-1 bg-white/20 rounded-xl p-6  text-center">
                        <h2 className='text-2xl p-3'>Visão</h2>
                        <p className='p-5 text-lg'>
                            Tornar-se a principal referência nacional em produtos gráficos e personalizados,
                            sendo reconhecida pela qualidade, criatividade, sustentabilidade e excelência no atendimento.
                        </p>
                    </div>
                    <div className="flex-1 bg-white/20 rounded-xl p-6  ">
                        <h2 className='text-2xl p-3 text-center'>Valores</h2>
                        <ul className='p-5 text-lg'>
                            <li><b className='font-bold mb-10'>Criatividade e Inovação</b>: Desenvolvemos soluções originais que destacam nossos produtos e serviços.</li>
                            <li><b className='font-bold mb-10'>Qualidade e Excelência</b>: Priorizamos o cuidado e a perfeição em cada detalhe do que entregamos.</li>
                            <li><b className='font-bold mb-10'>Sustentabilidade e Responsabilidade</b>: Adotamos práticas ecológicas e sustentáveis em nossos processos.</li>
                            <li><b className='font-bold mb-10'>Colaboração e Parcerias</b>: Valorizamos o trabalho em equipe e o fortalecimento de relacionamentos.</li>
                            <li><b className='font-bold mb-10'>Transparência e Confiança</b>: Construímos relações sólidas baseadas no respeito e na honestidade</li>
                        </ul>
                    </div>

                </div>
                <h3 className="text-2xl p-6">
                    Esses pilares nos impulsionam a inovar e oferecer soluções personalizadas que fazem a diferença na vida de nossos clientes e parceiros.
                </h3>
            </div>
        </section>
    )
};