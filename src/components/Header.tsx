import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to section helper
    const handleOrderClick = () => {
        if (location.pathname === '/') {
            const element = document.getElementById('contacto');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { scrollTo: 'contacto' } });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-lg' : 'bg-black/90 backdrop-blur-sm'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-12 md:h-14">

                {/* LEFT: Logo - Compacting further */}
                <div className="flex-shrink-0 h-full flex items-center py-1">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="block h-full">
                        <img
                            src="/img/logo-ironbun.png"
                            alt="IRON BUN"
                            className="h-full object-contain"
                        />
                    </Link>
                </div>

                {/* CENTER: Text Links - Smaller fonts */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2 h-full">
                    <button
                        onClick={handleOrderClick}
                        className="text-primary font-black uppercase tracking-widest text-xs md:text-sm hover:text-white transition-colors hover:scale-105 transform duration-200"
                    >
                        Hacé tu pedido
                    </button>

                    <Link
                        to="/menu"
                        className="text-primary font-black uppercase tracking-widest text-xs md:text-sm hover:text-white transition-colors hover:scale-105 transform duration-200"
                    >
                        Ver Menú
                    </Link>
                </div>

                {/* RIGHT: Social Icons - Compact (w-4) */}
                <div className="flex items-center gap-4">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <img
                            src="/img/icon-instagram.png"
                            alt="Instagram"
                            className="w-4 h-4 object-contain brightness-0 invert transition-all duration-200 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <img
                            src="/img/icon-facebook.png"
                            alt="Facebook"
                            className="w-4 h-4 object-contain brightness-0 invert transition-all duration-200 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                    </a>

                    {/* Mobile Menu Toggle */}
                    <Link to="/menu" className="md:hidden text-primary ml-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;
