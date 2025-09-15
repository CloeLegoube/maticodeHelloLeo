import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="Maticode logo" className="h-8" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-gray-600">
          <a href="/#services" className="hover:text-black">Services</a>
          <Link to="/projets" className="hover:text-black">Projets</Link>
          <a href="/#a-propos" className="hover:text-black">À propos</a>
          <a href="/#contact" className="hover:text-black">Contact</a>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
          Démarrer un projet
        </Button>
      </div>
    </header>
  );
};

export default Header;
