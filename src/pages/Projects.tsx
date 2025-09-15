import { useEffect, useState } from "react";
import { getProjects, Project } from "../services/airtable";

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const fetchedProjects = await getProjects();
                setProjects(fetchedProjects);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Impossible de charger les projets.");
                }
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto py-12 px-4 text-center">
                <p>Chargement des projets...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto py-12 px-4 text-center">
                <p className="text-red-500">Erreur: {error}</p>
                <p className="text-gray-500 mt-2">Veuillez vérifier votre configuration Airtable dans les paramètres du projet.</p>
            </div>
        );
    }

    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nos réalisations</h1>
        {projects.length === 0 ? (
            <p className="text-center text-gray-500">Aucun projet à afficher pour le moment. Ajoutez des projets à votre base Airtable.</p>
        ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={project.image || 'https://placehold.co/600x400/f97316/white?text=Maticode'} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                    {(project.stack || []).map(tech => (
                        <span key={tech} className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded-full">{tech}</span>
                    ))}
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}
      </div>
    );
  };
  
  export default Projects;
