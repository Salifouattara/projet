import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const categoryItems = [
    { 
    title: 'Protection de la Tête', 
    description: 'Casques de chantier, casquettes anti-heurt, visières.', 
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB375qtG3xrUgoD6seqvI8AwGvwd6Z4Zm0b24SFIvctlANz6nwB4o4Zmz29xlx0vssJAgoWB3zFE-p4z61bRYb85yfkVTEe9muqUxE1kcIVJIfowx-NkKyeUyUjsoyZ0KSGgJOQBAzTiFbVQZKpn12VLqm-MTNF4L6NO4rrAh7x7RJsZiTlnTbHJtrxB3Bf3Qbxal0Ikk4G94K7pBOsJqGjlkwiGRX8Qu-XkQezgUsMqBEPWs2zgquRALqh9Nc5291dB6yQ5yqh_g' 
    },
    { 
    title: 'Protection Respiratoire', 
    description: 'Masques FFP2/FFP3, demi-masques, masques complets.', 
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcvZ8OeFLbaitapEuNhv8RqjmuNJJd9wKMJlAh-mM7TcbyazoVbgXtKTxZx-lpzcOT_dpW3bSkeGRf7cOs1fJSwp-YvfhnERPoM4Wx0dFvmHLCtucFm98iLtIKUzQdtC7RB9m7zuIFw2z8mlaJViZmblkdSlno1J56sbO6pdJ4y-eeZjXzCa4I2cZ-2agpebWqB-5vn3FmnWkLqL4hIiAG_sXf7KZb_GoOLViBkIu_GFPSQt1Kj9dk_lGVx8DLRhNLjRBebjT6HA' 
    },
    { 
    title: 'Chaussures de Sécurité', 
    description: 'Bottes industrielles, chaussures S1P/S3, anti-dérapantes.', 
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF1K64CwsxIAv88wPZ8SQ12fmf_sslyCPTLgEGbRtVlHOTK7-5mnx0nqLnOmS5In6XbYLZzvn1UCMrf4OEHiSneNqahxf04lAZ6bT0KEbjXgGBwdjJaJ5RgHuNl3YfERm9IaF2I5WjPkpARnGW1Wvi1o2wXYWoDeWEjcXXyjt9IshhliKfBdOP79eazZRhzQ0jORALz0ilA22aTN3SQBIxuP4Jf9YZ5t_Y1LefkYEezWcfuTPkC12RZvSFPpMITqyvyvP_H7X1kQ' 
    },
    { 
    title: 'Protection des Mains', 
    description: 'Gants anti-coupure, chimiques, thermiques, manutention.', 
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA9NWHdKz_zrcWrE1btdOlyZ8upx6dW8UgbLskkyajq-iBEReUM0waV5GomaNIoFMwpgVasHHrAC0UnCfGvNr3rmUgJ--jEdYz4Th9Q74Eg7yYzczLBRf5ID_PxSSl9eK2swbH4__aGJx6QCbXeyMp6J0u98A06fSwUNwYZkYZGcYgarOtLEtJydqvqfToG8-tuMIyPhH7xaebKzqQYyGUtXtL61lNuIKc2xjJDYSZhLUCFXTS9nVDY2wQsvurjxgtHNMmuhEKYg' 
    },
];

const CategoryCard = ({ title, description, imageUrl }) => (
    <a className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg" href="#">
    <div className="aspect-[4/3] w-full overflow-hidden bg-[#FFFFFF]">
        <div 
        className="h-full w-full bg-cover   bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
    </div>
    <div className="flex flex-1 flex-col justify-between p-5">
        <div>
        <h3 className="text-lg font-bold text-text-main dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-text-muted dark:text-green-400">{description}</p>
        </div>
        <div className="mt-4 flex items-center text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Voir les produits
        </div>
    </div>
    </a>
);

const CategoriesGrid = () => {
    return (
    <section className="bg-gray-700-500/20 p-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-green-600">Catalogue</span>
            <h2 className="mt-2 text-3xl font-bold text-text-main dark:text-black sm:text-4xl">Nos Catégories de Produits</h2>
            <p className="mt-4 text-lg text-text-muted dark:text-green-400">Découvrez notre gamme complète d'équipements pour tous les secteurs d'activité.</p>
            </div>
            <a className="group hidden items-center gap-2 font-bold text-text-main hover:text-primary dark:text-black dark:hover:text-primary md:flex" href="#">
            Voir tout le catalogue
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
            </a>
        </div>
        
        {/* Grille des Catégories */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryItems.map((category) => (
            <CategoryCard key={category.title} {...category} />
            ))}
        </div>
        
        {/* Lien Mobile */}
        <div className="mt-8 flex justify-center md:hidden">
            <a className="group flex items-center gap-2 font-bold text-text-main hover:text-primary dark:text-white dark:hover:text-primary" href="#">
            Voir tout le catalogue
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
            </a>
        </div>
        </div>
    </section>
    );
};

export default CategoriesGrid;