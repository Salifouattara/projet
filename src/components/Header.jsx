import React, { useState } from 'react';
import { MdOutlineHealthAndSafety, MdMenu, MdClose } from "react-icons/md";

const Header = () => {
    return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7f3eb] bg-surface-light/95 backdrop-blur supports-[backdrop-filter]:bg-surface-light/60 dark:bg-surface-dark/95 dark:border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
            
            <div className="flex items-center gap-2 text-gray-700">
    <MdOutlineHealthAndSafety className="text-3xl text-green-600"/>
        <span className="text-lg font-semibold text-black">Epipharme-CI</span>
    </div>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
            {['Accueil', 'Produits', 'À propos', 'Contact'].map((item) => (
            <a key={item} className="text-sm font-medium text-text-main hover:text-primary dark:text-black-300 dark:hover:text-primary transition-colors" href="#">
                {item}
            </a>
            ))}
        </nav>
        {/* CTA & Menu Mobile */}
        <div className="flex items-center gap-4 relative">
            <button className="px-4 py-2 bg-green-700 text-black font-semibold rounded-lg text-sm transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-md">
                Demander un devis
            </button>

            {/* Mobile menu toggle */}
            <MobileMenuToggle />
        </div>
        </div>
    </header>
    );
};

const MobileMenuToggle = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-text-main dark:text-white"
            >
                {open ? <MdClose className="text-2xl"/> : <MdMenu className="text-2xl"/>}
            </button>

            <div className={`md:hidden absolute left-0 right-0 top-full bg-surface-light/95 backdrop-blur supports-[backdrop-filter]:bg-surface-light/60 dark:bg-surface-dark/95 border-b dark:border-white/10 transition-all ${open ? 'block' : 'hidden'}`}>
                <nav className="flex flex-col gap-1 px-4 py-4">
                    {['Accueil', 'Produits', 'À propos', 'Contact'].map((item) => (
                        <a key={item} className="block text-base font-medium text-text-main hover:text-primary dark:text-black-300 dark:hover:text-primary transition-colors py-2" href="#" onClick={() => setOpen(false)}>
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Header;