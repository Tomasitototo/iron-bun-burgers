import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Menu data extended for the "Full Digital Board" look
const menuData = {
    burgers: [
        {
            id: 1,
            name: "CLASSIC BURGER",
            price: "12.500",
            description: "Doble carne smash, queso cheddar, cebolla, pepinillos, salsa secreta.",
        },
        {
            id: 2,
            name: "ZINGER CRISPY",
            price: "13.500",
            description: "Pollo crispy extra crujiente, lechuga fresca, mayonesa casera.",
        },
        {
            id: 3,
            name: "STEAK HOUSE",
            price: "15.000",
            description: "Doble carne, bacon ahumado, aros de cebolla, salsa BBQ.",
        },
        {
            id: 4,
            name: "CHEESE LOVER",
            price: "14.500",
            description: "Triple carne, extra cheddar, salsa de queso, cebolla morada.",
        },
        {
            id: 5,
            name: "TRUFFLE DELUXE",
            price: "14.900",
            description: "Carne premium, hongos salteados, aceite de trufa, queso suizo.",
        },
        {
            id: 6,
            name: "VEGGIE MASTER",
            price: "13.000",
            description: "Medallón de lentejas, palta, tomate confitado, mayonesa vegana.",
        }
    ],
    sides: [
        { name: "PAPAS FRITAS", price: "4.500" },
        { name: "AROS DE CEBOLLA", price: "5.000" },
        { name: "NUGGETS (6u)", price: "4.800" },
        { name: "BASTONES MOZZA", price: "5.500" },
    ],
    drinks: [
        { name: "GASEOSA 500ml", price: "2.500" },
        { name: "CERVEZA ARTESANAL", price: "4.000" },
        { name: "AGUA SIN GAS", price: "2.000" },
        { name: "MILKSHAKE", price: "5.000" },
    ]
};

const MenuPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-20 pb-20 bg-black text-white font-sans relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: "url('/img/menu-bg.png')" }}
            ></div>

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-10 max-w-7xl">

                {/* Header Title */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-yellow-500 drop-shadow-lg" style={{ fontFamily: 'Impact, sans-serif' }}>
                        MENÚ
                    </h1>
                    <div className="w-32 h-2 bg-white mx-auto mt-2 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT COLUMN: BURGERS (Span 7) */}
                    <div className="lg:col-span-7">
                        <div className="mb-6">
                            <span className="bg-yellow-500 text-black text-2xl font-black px-6 py-2 uppercase transform -skew-x-12 inline-block">
                                HAMBURGUESAS
                            </span>
                        </div>

                        <div className="space-y-8">
                            {menuData.burgers.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="flex items-end justify-between w-full">
                                        <h3 className="text-3xl md:text-4xl font-bold uppercase text-white group-hover:text-yellow-400 transition-colors shrink-0">
                                            {item.name}
                                        </h3>
                                        <div className="flex-grow mx-4 mb-2 border-b-[4px] border-dotted border-gray-600/50"></div>
                                        <span className="text-3xl md:text-4xl font-bold text-yellow-500 shrink-0">
                                            ${item.price}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-lg md:text-xl mt-1 font-medium max-w-[90%]">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: IMAGE + SIDES + DRINKS (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col gap-12">

                        {/* Hero Image in Menu */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center mb-8"
                        >
                            {/* Circle Background */}
                            <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-3xl transform scale-75"></div>

                            <img
                                src="/images/burger4.png"
                                alt="Featured Burger"
                                className="relative w-full h-full object-contain transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                            />
                        </motion.div>

                        {/* SIDES & DRINKS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 relative">

                            {/* Sides */}
                            <div className="relative">
                                {/* Decorative Fries Image */}
                                <div className="absolute -right-4 -top-16 w-32 md:w-40 pointer-events-none opacity-80 z-0">
                                    <img src="/images/fries_box.png" alt="Fries" className="w-full h-auto object-contain transform rotate-12 drop-shadow-lg" />
                                </div>

                                <div className="mb-4 relative z-10">
                                    <span className="bg-red-600 text-white text-xl font-black px-4 py-1 uppercase transform -skew-x-12 inline-block shadow-md">
                                        SIDES & EXTRAS
                                    </span>
                                </div>
                                <ul className="space-y-4 relative z-10">
                                    {menuData.sides.map((side, i) => (
                                        <li key={i} className="flex items-end justify-between bg-black/40 p-2 rounded backdrop-blur-sm">
                                            <span className="text-xl font-bold uppercase text-gray-200">{side.name}</span>
                                            <div className="flex-grow mx-2 mb-2 border-b-[3px] border-dotted border-gray-700"></div>
                                            <span className="text-xl font-bold text-yellow-500">${side.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Drinks */}
                            <div className="relative">
                                {/* Decorative Coke Image */}
                                <div className="absolute -right-8 -bottom-8 w-24 md:w-28 pointer-events-none opacity-80 z-0">
                                    <img src="/images/coke_bottle.png" alt="Coke" className="w-full h-auto object-contain transform -rotate-12 drop-shadow-lg opacity-80" />
                                </div>

                                <div className="mb-4 relative z-10">
                                    <span className="bg-blue-600 text-white text-xl font-black px-4 py-1 uppercase transform -skew-x-12 inline-block shadow-md">
                                        BEBIDAS
                                    </span>
                                </div>
                                <ul className="space-y-4 relative z-10">
                                    {menuData.drinks.map((drink, i) => (
                                        <li key={i} className="flex items-end justify-between bg-black/40 p-2 rounded backdrop-blur-sm">
                                            <span className="text-xl font-bold uppercase text-gray-200">{drink.name}</span>
                                            <div className="flex-grow mx-2 mb-2 border-b-[3px] border-dotted border-gray-700"></div>
                                            <span className="text-xl font-bold text-yellow-500">${drink.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default MenuPage;
