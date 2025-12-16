import React from 'react';
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
const Footer = () => {
    return (
    <footer className="bg-surface-light border-t border-gray-200 dark:bg-surface-dark dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
            <div>
            <div className="flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded bg-primary text-text-main">
                <span className="material-symbols-outlined text-sm"><MdOutlineHealthAndSafety className="text-3xl text-green-600"/></span>
                </div>
                <span className="text-lg font-bold text-text-main dark:text-black ">Epipharme CI</span>
            </div>
            <p className="mt-4 text-sm text-text-muted dark:text-green-400">
                Votre partenaire de confiance pour la sécurité au travail en Côte d'Ivoire.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Icônes de réseaux sociaux (SVG simplifiés) */}
                <a className="text-gray-400 hover:text-primary" href="#"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg></a>
                <a className="text-gray-400 hover:text-primary" href="#"><span className="sr-only">LinkedIn</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
            </div>
            </div>
          {/* Links Column */}
            <div>
            <h3 className="text-sm font-semibold text-text-main dark:text-black">Navigation</h3>
            <ul className="mt-4 space-y-2">
                {['Accueil', 'Produits', 'À propos', 'Contact'].map((item) => (
                <li key={item}><a className="text-sm text-text-muted hover:text-primary dark:text-green-400" href="#">{item}</a></li>
                ))}
            </ul>
            </div>
          {/* Products Column */}
            <div>
            <h3 className="text-sm font-semibold text-text-main dark:text-black">Produits Populaires</h3>
            <ul className="mt-4 space-y-2">
                {['Casques de sécurité', 'Gants de protection', 'Chaussures de sécurité', 'Masques respiratoires'].map((item) => (
                <li key={item}><a className="text-sm text-text-muted hover:text-primary dark:text-green-400" href="#">{item}</a></li>
                ))}
            </ul>
            </div>
          {/* Contact Column */}
            <div>
            <h3 className="text-sm font-semibold text-text-main dark:text-black">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-muted dark:text-green-400">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg"><CiLocationOn /></span>Cocody Riviera, Abidjan, CI</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg"><CiPhone /></span>+225 01 52 06 57 89 / +32 46 62 20 605</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg"><CiMail /></span>contact@epipharme.ci@gmail.com</li>
            </ul>
            </div>
            <hr className="w-screen h-1 bg-gray-400 border-4 scale-75 -translate-x-10"  />
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-white/10">
            <p className="text-center text-xs text-text-muted dark:text-gray-500">
            © 2025 Epipharme CI. Tous droits réservés.
            </p>
        </div>
        </div>
    </footer>
    );
};

export default Footer;