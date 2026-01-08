import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ZoomParallax from '../components/ZoomParallax';
import Menu from '../components/Menu';
import Philosophy from '../components/Philosophy';
import Reviews from '../components/Reviews';
import Map from '../components/Map';
import Contact from '../components/Contact';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure render
            }
            // Clear state to avoid scroll on refresh - optional but good practice (requires navigate replace)
        }
    }, [location]);

    return (
        <>
            <ZoomParallax />
            <Menu />
            <Philosophy />
            <Reviews />
            <Map />
            <Contact />
        </>
    );
};

export default HomePage;
