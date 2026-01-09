import React from 'react';

import { RevealText } from './RevealText';

const Contact = () => {
    // Links
    const whatsappLink = "https://wa.me/5492920123456";
    const mapsLink = "https://www.google.com/maps/search/?api=1&query=Letras+Corpóreas+Viedma+Rio+Negro";

    return (
        <section id="contacto" className="py-20 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background gradient deco */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
                    TU <RevealText text="IRON BUN" image="/images/bite_action.png" className="text-primary" /> TE ESPERA
                </h2>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Contactanos */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">Contactanos</h3>

                        <div className="space-y-6">
                            {/* Address Link */}
                            <a
                                href={mapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                            >
                                <span className="text-white text-lg font-medium leading-tight group-hover:text-primary transition-colors">
                                    Costanera de Viedma (Letras Corpóreas)
                                </span>
                            </a>

                            {/* Phone Link (WhatsApp) */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                            >
                                <span className="text-white text-lg font-medium group-hover:text-primary transition-colors">
                                    +54 9 2920 12-3456
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Horarios */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">Horarios</h3>

                        <div className="space-y-6 text-lg">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <span className="text-gray-400">Martes a viernes</span>
                                <span className="font-bold text-white">12:00 - 15:00</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <span className="text-gray-400">Martes a domingo</span>
                                <span className="font-bold text-white">20:00 - 00:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
