import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.png'
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Hide header on scroll down, show on scroll up
        if (scrollY > lastScrollY) {
            setIsHeaderVisible(false);
        } else {
            setIsHeaderVisible(true);
        }

        setLastScrollY(scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div>
            {/* Header with conditional visibility */}
            <motion.header
                className="fixed inset-x-0 top-0 bg-black/50 z-10 py-8 xl:py-12 transition-transform duration-300"
                style={{ transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)' }}
            >
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-shrink-0">
                            <Link
                                to="/"
                                title="BakerStreet"
                                className="inline-flex rounded-md focus:outline-none"
                            >
                                <img className="w-auto h-14" src={logo} alt="BakerStreet" />
                            </Link>
                        </div>

                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none"
                            >
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                            <Link
                                to="/about"
                                className="font-sans text-base font-normal text-white transition-none"
                            >
                                About
                            </Link>

                            <Link
                                to="/service"
                                className="font-sans text-base font-normal text-white transition-none"
                            >
                                Services
                            </Link>

                            <Link
                                to="/contact"
                                className="font-sans text-base font-normal text-white transition-none"
                            >
                                Contacts
                            </Link>
                        </nav>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-20 bg-gray-800 bg-opacity-80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleCloseMenu} // Close on backdrop click
                    >
                        <motion.div
                            className="absolute left-0 top-0 h-full w-2/3 bg-white p-6 shadow-lg rounded-tr-lg rounded-br-lg"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
                        >
                            <button onClick={handleCloseMenu} className="absolute top-4 right-4 text-gray-800">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <nav className="mt-16 space-y-6">
                                <Link to="/about" className="block text-gray-800 text-2xl transition-none" onClick={handleCloseMenu}>
                                    About
                                </Link>
                                <Link to="/services" className="block text-gray-800 text-2xl transition-none" onClick={handleCloseMenu}>
                                    Services
                                </Link>
                                <Link to="/contact" className="block text-gray-800 text-2xl transition-none" onClick={handleCloseMenu}>
                                    Contacts
                                </Link>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Header;
