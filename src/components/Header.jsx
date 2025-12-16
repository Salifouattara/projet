import React from 'react';
import { MdOutlineHealthAndSafety } from "react-icons/md";

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
        <div className="flex items-center gap-4">
            <button className="px-6 py-3
        bg-green-700 text-black font-semibold
        rounded-xl
        transition-all duration-300 ease-in-out
        hover:bg-green-700 hover:scale-105
        active:scale-95
        shadow-md hover:shadow-xl  ">
            Demander un devis
            </button>
            


            <button className="md:hidden flex size-10 items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-text-main dark:text-white">
            <span className="material-symbols-outlined">menu</span>
            </button>
        </div>
        </div>
    </header>
    );
};

export default Header;