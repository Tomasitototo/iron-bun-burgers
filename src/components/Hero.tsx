import React from 'react';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero.png"
                    alt="Hamburguesa Gourmet Iron Bun"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-secondary/70 to-secondary/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
                <span className="block text-primary font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
                    Bienvenidos a Iron Bun
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight drop-shadow-lg tracking-tight">
                    HAMBURGUESAS <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        QUE SE TOMAN EN SERIO
                    </span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    Ingredientes reales. Carne premium seleccionada. <br />
                    Una experiencia de sabor inolvidable en cada mordida.
                </p>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
