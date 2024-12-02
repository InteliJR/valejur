import Link from "next/link";
import { useState } from "react";
import SobreNos from "./SobreNos";
import MissaoVisaoValores from "./MissaoVisaoValores";
import CarroselTrabalhos from "./CarroselTrabalhos";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigation = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar e Hero Section */}
      <div className="hero">
        <header className="navbar">
          <Link href="/" className="logo">
            <img src="/logoValejur.png" alt="VALEJUR Logo" />
          </Link>
          <nav>
            <ul>
              {[
                "Home",
                "Sobre nós",
                "Serviços",
                "Cases e resultados",
                "Contato",
              ].map((section) => (
                <li
                  key={section}
                  className={
                    activeSection === section.toLowerCase() ? "active" : ""
                  }
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
          <p>
            Lorem ipsum dolor sit amet. Qui cupiditate quia qui error dolor ut
            autem quia qui unde autem aut dolor dicta et magni neque. Et
            accusantium aut.
          </p>
          <div className="buttons">
            <button onClick={() => handleNavigation("contato")}>
              Entre em contato
            </button>
            <button onClick={() => handleNavigation("servicos")}>
              Conheça nossos serviços
            </button>
          </div>
        </main>
      </div>

      {/* Seção Sobre Nós  */}
      <div id="sobre-nos">
        <SobreNos />
      </div>

      {/* Seção Missão, Visão e Valores  */}
      <div id="missao-visao-valores">
        <MissaoVisaoValores />
      </div>

      <div>
        <CarroselTrabalhos />
      </div>

      {/* Footer */}
      <footer className="footer bg-[#1e2a48] text-white py-8 flex flex-wrap gap-y-4 gap-x-8">
        <div className="footer-column">
          <Link href="/" className="logo">
            <img
              src="/logoValejur.png"
              alt="VALEJUR Logo"
              className="w-36 mb-4"
            />
          </Link>
          <p>CNPJ: 33.219.414/0001-65</p>
          <div className="flex items-center gap-2">
            <img src="/mail.png" alt="Email" className="w-4 h-4" />
            <a href="mailto:email@email.com" className="hover:underline">
              email@email.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img src="/phone.png" alt="Telefone" className="w-4 h-4" />
            <a href="tel:+55123456789" className="hover:underline">
              12 3456 789
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/company/valejur/?originalSubdomain=br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/ValeJur/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.png" alt="Facebook" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="text-lg font-bold mb-2">Mapa do site</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#sobre-nos" className="hover:underline">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="#servicos" className="hover:underline">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="#cases-e-resultados" className="hover:underline">
                Cases e Resultados
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="text-lg font-bold mb-2">Instagram</h4>
          <a
            href="https://www.instagram.com/ej.valejur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram-feed-sample.png"
              alt="Instagram Feed"
              className="w-full rounded-md mt-4"
            />
          </a>
        </div>

        <div className="footer-column footer-column-wide">
          <h4 className="text-lg font-bold mb-2">Onde estamos</h4>
          <p>
            Rua Dom Bosco 284, Lorena, São Paulo
            <br />
            12600-100, BR
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.861771303627!2d-45.1220589!3d-22.733378599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc8e86da3b593%3A0x400550af63927cf1!2sR.%20Dom%20B%C3%B4sco%2C%20284%20-%20Centro%2C%20Lorena%20-%20SP%2C%2012600-100!5e0!3m2!1spt-BR!2sbr!4v1730821446042!5m2!1spt-BR!2sbr"
            className="w-full h-64 mt-4 border-2 border-red-600 rounded-md" /* Borda menor */
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  );
}
