import { Briefcase, MapPin, Calendar, CircleDot } from "lucide-react";

const experiences = [
    {
        title: "Product Manager NoCode & Transformation Digitale",
        company: "Flexliving",
        location: "France",
        period: "2023 - Présent",
        contract: "CDI",
        description: "Pilotage de projets d'automatisation et transformation digitale pour optimiser les processus métier.",
        tools: ["Make.com", "HubSpot", "Airtable", "Zapier"],
        achievements: [
            "Mise en place d'automatisations Make.com économisant 25h/semaine",
            "Intégration HubSpot CRM avec workflows personnalisés",
            "Développement de dashboards Airtable pour le suivi KPI"
        ]
    },
    {
        title: "OBM - Online Business Manager",
        company: "Consultante Indépendante",
        location: "France",
        period: "2022 - Présent",
        contract: "Freelance",
        description: "Accompagnement d'entrepreneurs et PME dans l'optimisation de leurs processus opérationnels via l'automatisation NoCode.",
        tools: [],
        achievements: [
            "Certification Make.com Advanced 👩‍💻",
            "+50 clients accompagnés en automatisation",
            "ROI moyen de 300% sur les projets d'automatisation"
        ]
    }
];

const Experience = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Mon <span className="text-orange-500">parcours</span> d'experte
                    </h2>
                    <p className="mt-4 text-lg text-pink-500 max-w-3xl mx-auto">
                        Plus de 3 ans d'expérience en automatisation NoCode et transformation digitale, avec un focus sur l'optimisation des processus B2B.
                    </p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="grid md:grid-cols-3 gap-8 p-6 border-b">
                            <div className="md:col-span-2">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                                    <div className="text-right flex-shrink-0 ml-4">
                                        <div className="flex justify-end items-center gap-2 text-pink-500">
                                            <Calendar size={16}/>
                                            <span>{exp.period}</span>
                                        </div>
                                        <span className={`mt-1 inline-block px-3 py-1 text-sm rounded-full ${exp.contract === 'CDI' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                            {exp.contract}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                                <p className="mt-6 text-gray-600">{exp.description}</p>
                                {exp.tools.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.tools.map((tool, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{tool}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="md:col-span-1">
                                 <h4 className="font-bold text-orange-500 flex items-center gap-2">
                                     <CircleDot size={20}/>
                                     Réalisations clés
                                 </h4>
                                 <ul className="mt-4 space-y-3">
                                     {exp.achievements.map((ach, i) => (
                                         <li key={i} className="flex items-start gap-3">
                                             <span className="text-pink-500 mt-1">&rarr;</span>
                                             <span className="text-gray-600 text-sm">{ach}</span>
                                         </li>
                                     ))}
                                 </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
