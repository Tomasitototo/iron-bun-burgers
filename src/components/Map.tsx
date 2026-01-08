import React from 'react';

const Map = () => {
    return (
        <section id="mapa" className="w-full h-[500px] md:h-[600px] relative bg-gray-200 border-t border-gray-100">
            {/* Overlay Info */}
            <div className="absolute top-8 right-8 z-10 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-2xl max-w-sm hidden md:block border border-gray-100">
                <h3 className="text-2xl font-black text-secondary mb-1">VISITANOS</h3>
                <p className="text-gray-600 text-sm mb-4">Frente al río, el mejor spot de la ciudad.</p>

                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-secondary font-medium text-sm">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>Av. Costanera (Letras Viedma)</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-wider bg-green-50 px-3 py-1 rounded-full w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Abierto ahora
                    </div>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.23456789!2d-62.9985!3d-40.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95f69811d7c07b03%3A0xc35043681580252b!2sLetras%20Corporeas%20Viedma!5e0!3m2!1ses-419!2sar!4v1717616000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UbicaciÃ³n Iron Bun Costanera"
            ></iframe>
        </section>
    );
};

export default Map;
