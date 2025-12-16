import React from 'react';

const CTA = () => {
    return (
    <section className="relative isolate overflow-hidden bg-background-dark py-16 sm:py-24 lg:py-32">
      {/* Background/Shape Divider */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br bg-[#0B160E] from-background-dark to-black"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-surface-dark bg-[#1A3624] shadow-xl shadow-primary/10 ring-1 ring-white/10 sm:mr-28 lg:mr-0 lg:w-[150%] xl:mr-16 lg:origin-center"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Prêt à équiper vos équipes ?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé ou des conseils sur les meilleurs équipements de protection pour votre activité.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
            <a className="rounded-lg bg-green-700 px-5 py-3 text-sm font-bold text-text-main shadow-lg hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="#">
                Demander un devis gratuit
            </a>
            <a className="text-sm font-semibold leading-6 text-white hover:text-primary" href="#">
                Appelez-nous <span aria-hidden="true">→</span>
            </a>
            </div>
        </div>
        </div>
    </section>
    );
};

export default CTA;