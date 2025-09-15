const Projects = () => {
    const projects = [
      {
        title: "Automatisation de la facturation",
        description: "Mise en place d'un système automatisé pour la génération et l'envoi de factures mensuelles, réduisant le temps de traitement de 90%.",
        stack: ["Airtable", "Make", "Stripe"],
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "CRM sur-mesure pour PME",
        description: "Création d'un outil de gestion de la relation client personnalisé pour suivre les prospects et les contrats, centralisant toutes les informations.",
        stack: ["Notion", "Zapier"],
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Dashboard de suivi de performance",
        description: "Développement d'un tableau de bord interactif pour visualiser les KPIs en temps réel, aidant à la prise de décision stratégique.",
        stack: ["Google Sheets", "Looker Studio"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      }
    ];
  
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nos réalisations</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
