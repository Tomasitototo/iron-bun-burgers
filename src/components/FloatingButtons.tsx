import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button only after scrolling down a bit
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Links
    const whatsappLink = "https://wa.me/5492920123456";
    const pedidosYaLink = "https://www.pedidosya.com.ar";
    const rappiLink = "https://www.rappi.com.ar";

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 flex flex-col gap-5 items-center transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
        >
            {/* Rappi */}
            <a
                href={rappiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center transition-transform hover:scale-110 hover:-translate-x-1 duration-300 filter drop-shadow-lg hover:drop-shadow-2xl"
                aria-label="Rappi"
            >
                <img
                    src="/icons/rappi.png"
                    alt="Rappi"
                    className="w-full h-full object-contain"
                />
            </a>

            {/* Pedidos Ya */}
            <a
                href={pedidosYaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center transition-transform hover:scale-110 hover:-translate-x-1 duration-300 filter drop-shadow-lg hover:drop-shadow-2xl"
                aria-label="Pedidos Ya"
            >
                <img
                    src="/icons/pedidosya.png"
                    alt="Pedidos Ya"
                    className="w-full h-full object-contain"
                />
            </a>

            {/* WhatsApp */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center transition-transform hover:scale-110 hover:-translate-x-1 duration-300 filter drop-shadow-lg hover:drop-shadow-2xl"
                aria-label="WhatsApp"
            >
                <img
                    src="/icons/whatsapp.png"
                    alt="WhatsApp"
                    className="w-full h-full object-contain p-1"
                />
            </a>
        </div>
    );
};

export default FloatingButtons;
