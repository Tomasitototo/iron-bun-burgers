import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedBurgers = () => {
    return (
        <section id="menu-preview" className="py-24 bg-secondary text-white relative overflow-hidden">
            {/* Texture/Noise overlay optional */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Side: Big Typography Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                            DESCUBRÍ <br />
                            <span className="text-white">NUESTROS</span> <br />
                            <span className="text-primary italic">SABORES</span>
                        </h2>
                        <div className="h-2 w-32 bg-primary mt-8"></div>
                    </motion.div>

                    {/* Right Side: Description & Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:w-1/2 max-w-xl"
                    >
                        <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 leading-relaxed">
                            Nuestro menú reúne una selección de hamburguesas artesanales elaboradas con carne premium, panes horneados a diario y combinaciones de ingredientes pensadas para resaltar el sabor en cada detalle. Cada receta equilibra técnica, producto y creatividad para ofrecer una experiencia auténtica y memorable.
                        </p>
                        <p className="text-lg text-gray-400 mb-10 leading-relaxed border-l-4 border-gray-600 pl-6">
                            Acompañan la propuesta guarniciones clásicas y especiales, opciones para compartir y una cuidada selección de bebidas.
                        </p>

                        <Link to="/menu">
                            <button className="bg-primary text-white hover:bg-white hover:text-black hover:scale-105 transform transition-all duration-300 px-10 py-4 text-lg font-bold uppercase tracking-widest rounded-sm shadow-lg">
                                Ver Menú Completo
                            </button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedBurgers;
