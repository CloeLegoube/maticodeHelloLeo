import { Button } from "./ui/Button";

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-orange-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <h1 className="text-2xl font-bold">
                Mati<span className="font-mono text-gray-600">code</span>
            </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-gray-600">
          <a href="#" className="hover:text-black">Services</a>
          <a href="#" className="hover:text-black">Projets</a>
          <a href="#" className="hover:text-black">À propos</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
          Démarrer un projet
        </Button>
      </div>
    </header>
  );
};

export default Header;
