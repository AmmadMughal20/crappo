'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';

const Navigation = () =>
{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = ['Inquire', 'Features', 'About', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-crypto-dark/90 backdrop-blur-lg border-b border-white/10"
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-54">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                        onClick={(e) =>
                        {
                            e.preventDefault();
                            const target = document.getElementById('hero');
                            if (target)
                            {
                                window.scrollTo({
                                    top: target.offsetTop - 100, // adjust for navbar height
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <span className="text-white font-bold text-xl">CRAPPO</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase().trim().replace(/\s+/g, '')}`}
                                onClick={(e) =>
                                {
                                    e.preventDefault();
                                    const target = document.getElementById(item.toLowerCase());
                                    if (target)
                                    {
                                        window.scrollTo({
                                            top: target.offsetTop - 100, // adjust for navbar height
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className="text-gray-300 hover:text-white transition-colors duration-200"
                                whileHover={{ y: -2 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href='/login'>
                            <Button variant="ghost" className="cursor-pointer text-white hover:text-crypto-purple">
                                Login
                            </Button>
                        </a>
                        <a href='/register'>
                            <Button className="bg-accent cursor-pointer rounded-full hover:opacity-90 text-white px-6">
                                Register
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-crypto-dark/95 backdrop-blur-lg border-t border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="flex flex-col space-y-2 px-3 pt-4">
                                <Button variant="ghost" className="text-white justify-start">
                                    Login
                                </Button>
                                <Button className="bg-gradient-purple text-white">
                                    Register
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navigation;