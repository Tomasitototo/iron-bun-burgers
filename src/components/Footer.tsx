import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-6 border-t border-gray-900">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-medium tracking-wide">

                {/* Copyright */}
                <div className="text-center md:text-left">
                    <p>Copyright 2025 &copy; IRON BUN</p>
                </div>

                {/* Developer Credit */}
                <div className="text-center md:text-right md:pr-24">
                    <span>Desarrollado por: </span>
                    <a
                        href="https://synapsestudio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white transition-colors"
                    >
                        Synapse
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
