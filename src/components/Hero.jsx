import React from 'react';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";

// URL pour l'image de fond (remplacez par votre URL réelle si nécessaire)
const HERO_BACKGROUND_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuAlKEc1Vfm1PARdj09j-Yab7_YLSzd-2UPfJH9zhkVcnknBi1ycIFh1mTKNraNqcCIRYmZIP1udBt9FNRbIh14RzEa39IqOFMWvZtexVXQuUI4UBs90HUQAq8GitHN0YreZsUfgV9wF9nIVFFv1cpQ-WR2LTbTNTQzJy4bDI2LhMVk4_0IGf3BajKu11guvmos8iwNqD0OW7g7hlGNEnKkaGU9jaz1Do4Yi-n2jC9yim1EcyS9985CKNWUegyABYXI3tNDtT3acRg";

const Hero = () => {
    return (
    <section className="relative overflow-hidden bg-background-light dark:bg-background-dark">
        <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to right, rgba(16, 34, 22, 0.9) 0%, rgba(16, 34, 22, 0.7) 100%), url("${HERO_BACKGROUND_URL}")` }}
        ></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-green-700 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Leader EPI en Côte d'Ivoire
            </div>
            
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Votre Sécurité, <br/><span className="text-green-700">Notre Priorité.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-xl">
            Solutions complètes d'équipements de protection individuelle pour les professionnels du BTP, de l'industrie et de la santé. Qualité certifiée et expertise locale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-green-700 px-6 text-base font-bold text-text-main shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:-translate-y-0.5">
                Découvrir nos produits
            </button>
            <button className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5">
                Nous contacter
            </button>
            </div>
            <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-8 text-white/80">
            <div className="flex items-center gap-2">
                <AiFillSafetyCertificate className="text-3xl text-green-700" />
                <span className="text-sm font-medium">Certifié CE & ISO</span>
            </div>
            <div className="flex items-center gap-2">
            <FaTruckFast className="text-3xl text-green-700"/>
                <span className="text-sm font-medium">Livraison Express Abidjan</span>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
};

export default Hero;