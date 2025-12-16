import React from 'react';
import { MdApartment } from "react-icons/md";
import { MdOutlineFactory } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdOutlineOilBarrel } from "react-icons/md";
const partners = [
    { name: 'BTP Ivoire', icon: <MdApartment /> },
    { name: 'InduCI', icon: <MdOutlineFactory /> },
    { name: 'SantéPlus', icon: <MdOutlineMedicalServices /> },
    { name: 'PetroServe', icon: <MdOutlineOilBarrel />},
];

const Partners = () => {
    return (
    <section className="border-y border-gray-200 bg-surface-light py-12 dark:border-white/5 dark:bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wider text-text-muted dark:text-green-600 mb-8">Ils nous font confiance</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:gap-16">
            {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-2 text-xl font-bold text-gray-400">
                <span className="material-symbols-outlined text-3xl">{partner.icon}</span>
                {partner.name}
            </div>
            ))}
        </div>
        </div>
    </section>
    );
};

export default Partners;