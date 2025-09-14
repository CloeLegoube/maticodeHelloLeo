import { Button } from "./ui/Button";
import { Blocks, Zap, Share2 } from 'lucide-react';

const services = [
    {
        icon: <Blocks className="w-8 h-8 text-orange-500" />,
        title: "Automatisation Make.com",
        description: "Créez des workflows puissants qui connectent vos outils et automatisent vos processus métier sans une ligne de code.",
        features: ["Intégrations 1000+ apps", "Workflows complexes", "Triggers intelligents"],
    },
    {
        icon: <Zap className="w-8 h-8 text-purple-500" />,
        title: "Développement N8N",
        description: "Solutions d'automatisation sur mesure avec N8N pour des besoins spécifiques et des flux de données avancés.",
        features: ["Self-hosted", "Logique personnalisée", "API REST/GraphQL"],
        highlighted: true,
    },
    {
        icon: <Share2 className="w-8 h-8 text-green-500" />,
        title: "Connexions API",
        description: "Intégrez vos systèmes existants grâce à des connexions API robustes et des synchronisations en temps réel.",
        features: ["APIs REST/SOAP", "Webhook management", "Data mapping"],
    },
];

const Services = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Expertise en <span className="text-orange-500">automatisation</span>
                </h2>
                <p className="mt-4 text-lg text-pink-500 max-w-2xl mx-auto">
                    Je vous accompagne dans la transformation digitale de votre entreprise avec des solutions NoCode adaptées à vos besoins spécifiques.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                    {services.map((service, index) => (
                        <div key={index} className={`p-8 rounded-2xl flex flex-col ${service.highlighted ? 'border-2 border-purple-500 bg-white shadow-xl' : 'bg-white shadow-lg'}`}>
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${service.highlighted ? 'bg-purple-100' : 'bg-orange-100'}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mt-6">{service.title}</h3>
                            <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
                            <ul className="mt-6 space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" className="mt-8 w-full rounded-lg">En savoir plus &rarr;</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
