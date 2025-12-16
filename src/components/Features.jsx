import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

const featureItems = [
  { icon: <LiaCertificateSolid />, title: 'Normes Internationales', description: 'Tous nos produits sont certifiés CE et conformes aux exigences de sécurité les plus rigoureuses pour garantir votre protection.' },
  { icon: <IoRocketOutline />, title: 'Livraison Rapide', description: 'Service logistique performant assurant une livraison express partout à Abidjan et expédition rapide à l\'intérieur du pays.' },
  { icon: <FaRegHandshake />, title: 'Expertise Locale', description: 'Une équipe dédiée basée en Côte d\'Ivoire pour vous conseiller et vous accompagner dans le choix des EPI adaptés.' },
  { icon: <MdSupportAgent />, title: 'Support Client', description: 'Service client réactif et professionnel disponible pour répondre à vos demandes de devis et questions techniques.' },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/5 dark:bg-background-dark">
    <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-[#e7f3eb] text-primary dark:bg-primary/10">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-text-main dark:text-black">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-text-muted dark:text-green-400">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="bg-surface-light py-24 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Bloc de Texte */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-black sm:text-4xl">
              Pourquoi choisir <span className="text-green-600 block">Epipharme CI ?</span>
            </h2>
            <p className="mt-4 text-lg text-text-muted dark:text-green-400">
              Nous nous engageons à fournir des équipements de protection répondant aux normes internationales les plus strictes, adaptés aux réalités du marché ivoirien.
            </p>
            <div className="mt-8">
              <a className="group inline-flex items-center gap-2 text-base font-bold text-green-600 hover:text-primary-hover" href="#">
                En savoir plus sur nous
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
              </a>
            </div>
          </div>
          {/* Grille des Features */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {featureItems.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Features;