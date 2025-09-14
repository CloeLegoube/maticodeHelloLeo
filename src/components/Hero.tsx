import { Button } from "./ui/Button";

const Hero = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-orange-500 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <span>AUTOMATION NOCODE</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        Automatisez votre <span className="text-orange-500">entreprise</span> sans coder
                    </h1>
                    <p className="text-lg text-pink-500">
                        Je transforme vos processus répétitifs en workflows automatisés avec Make, N8N et des connexions API intelligentes. Gagnez du temps, réduisez les erreurs et concentrez-vous sur l'essentiel.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg">Démarrer l'automatisation &rarr;</Button>
                        <Button size="lg" variant="outline" className="rounded-lg">Voir mes projets</Button>
                    </div>
                    <div className="flex gap-12 mt-12 text-center">
                        <div>
                            <p className="text-4xl font-bold">50+</p>
                            <p className="text-gray-500">Entreprises aidées</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-blue-500">80%</p>
                            <p className="text-gray-500">Temps économisé</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-green-500">200+</p>
                            <p className="text-gray-500">Automatisations créées</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-purple-200/30 blur-3xl absolute inset-0 -z-10 rounded-full"></div>
                    <div className="p-4 bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg">
                      <img src="https://images.unsplash.com/photo-1555255707-c07969820e34?q=80&w=2070&auto=format&fit=crop" alt="Assistant IA" className="rounded-xl"/>
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                        Assistant IA
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
