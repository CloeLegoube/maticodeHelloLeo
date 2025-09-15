import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-20">
            <div className="container mx-auto py-12 px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <img src="/logo.png" alt="Maticode logo" className="h-8" />
                        <p className="text-gray-400 mt-4">Automatisez votre entreprise sans coder.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Navigation</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/#services" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><Link to="/projets" className="text-gray-400 hover:text-white">Projets</Link></li>
                            <li><a href="/#a-propos" className="text-gray-400 hover:text-white">À propos</a></li>
                            <li><a href="/#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Légal</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Réseaux sociaux</h4>
                        <div className="flex gap-4 mt-4">
                            {/* Social icons here */}
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
                    <p>&copy; 2025 Maticode. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
