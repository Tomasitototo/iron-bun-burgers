import React from 'react';
import { AnimatedGroup } from './ui/AnimatedGroup';

const Philosophy = () => {
    const features = [
        {
            icon: "🥩",
            title: "Carne Premium",
            subtitle: "Selección 100% real"
        },
        {
            icon: "🍔",
            title: "Pan Brioche",
            subtitle: "Horneado del día"
        },
        {
            icon: "🍟",
            title: "Sides Únicos",
            subtitle: "Abundantes y caseros"
        },
        {
            icon: "📍",
            title: "Experiencia",
            subtitle: "En Buenos Aires"
        }
    ];

    return (
        <section className="bg-secondary py-16 relative overflow-hidden">
            {/* Background Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

            <div className="container mx-auto px-6">
                <AnimatedGroup
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    preset="blur-slide"
                >
                    {features.map((feature, index) => (
                        <div key={index} className="group flex flex-col items-center justify-center text-center p-6 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-default h-full">
                            {/* Emoji Container */}
                            <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 filter drop-shadow-lg">
                                {feature.icon}
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-1 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">
                                {feature.subtitle}
                            </p>
                        </div>
                    ))}
                </AnimatedGroup>
            </div>
        </section>
    );
};

export default Philosophy;
