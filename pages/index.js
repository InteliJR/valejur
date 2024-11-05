import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <header className="navbar">
        <Link href="/" className="logo">
          <img src="/logoValejur.png" alt="VALEJUR Logo" /> {/* Altere para o caminho da logo */}
        </Link>
        <nav>
        <ul>
  {['Home', 'Sobre nós', 'Serviços', 'Cases e resultados', 'Contato'].map((section) => (
    <li
      key={section}
      className={activeSection === section.toLowerCase() ? 'active' : ''}
      onClick={() => handleNavigation(section.toLowerCase())}
    >
      {section}
    </li>
  ))}
</ul>
        </nav>
      </header>

      <main className="hero-content">
        <h1>Excelência Jurídica para Soluções Inteligentes.</h1>
        <p>Lorem ipsum dolor sit amet. Qui cupiditate quia qui error dolor ut autem quia qui unde autem aut dolor dicta et magni neque. Et accusantium aut.</p>
        <div className="buttons">
          <button onClick={() => handleNavigation('contato')}>Entre em contato</button>
          <button onClick={() => handleNavigation('servicos')}>Conheça nossos serviços</button>
        </div>
      </main>
    </div>
  );
}
