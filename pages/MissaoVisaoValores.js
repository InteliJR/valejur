import React, { useState } from "react";

const MissaoVisaoValores = () => {
  // Estado para controlar a visibilidade dos blocos
  const [openSections, setOpenSections] = useState({
    mission: false,
    vision: false,
    values: false,
  });

  // Função para alternar a visibilidade dos blocos
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Inverte o valor do estado para a seção clicada
    }));
  };

  // Dados das seções com título e conteúdo
  const sections = [
    {
      id: "mission",
      title: "Missão",
      content:
        "Proporcionar acesso facilitado à assistência jurídica empresarial, promovendo o empreendedorismo, a liderança e o desenvolvimento pessoal e profissional de nossos membros, impactando positivamente a sociedade e contribuindo para a equidade e igualdade através da inovação e da vivência prática.",
    },
    {
      id: "vision",
      title: "Visão",
      content:
        "Ser reconhecida como a principal referência em inovação e excelência no movimento Empresa Júnior, liderando com ética e responsabilidade social, impulsionando o desenvolvimento empresarial e formando futuros profissionais comprometidos com o crescimento sustentável da sociedade.",
    },
    {
      id: "values",
      title: "Valores",
      content:
        "Inovação, ética e integridade, responsabilidade social, compromisso, colaboração, transparência, disciplina, proatividade, excelência e orgulho de ser MEJ.",
    },
  ];

  return (
    <div className="w-full flex justify-center bg-white overflow-hidden p-5">
      <div className="w-[90%] flex flex-col items-center mx-auto">
        {sections.map((section) => (
          <div key={section.id} className="w-full">
            {/* Botão para abrir e fechar a seção */}
            <button
              onClick={() => toggleSection(section.id)} // Alterna a visibilidade da seção
              className="w-full px-6 py-[15px] bg-[#1A1B41] flex items-center justify-between"
            >
              <span className="text-white text-xl font-normal">
                {section.title}
              </span>
              <span
                className={`text-white text-5xl font-extrabold font-['Poppins'] leading-none transition-transform ${
                  openSections[section.id] ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* Conteúdo da seção com animação de transição */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openSections[section.id] ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <div className="w-full flex">
                {/* Barra vermelha indicativa do conteúdo expandido */}
                <div className="w-[10px] bg-red-600"></div>
                <div className="flex-1 px-6 py-[15px] bg-[#21234F]">
                  <p className="text-[#F5F5F5] text-[15px] font-normal font-['Poppins']">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissaoVisaoValores;
