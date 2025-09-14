import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import { Testimonials } from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
