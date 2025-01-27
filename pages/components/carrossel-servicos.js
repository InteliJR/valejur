import { useState, useRef } from "react";

const data = [
  {
    nome: "Consultoria Jurídica Básica",
    imagem: "/img_carrossel1.png",
    descricao: [
      "• Análise e revisão de contratos.",
      "• Emissão de pareceres jurídicos sobre questões específicas.",
    ],
  },
  {
    nome: "Direito Empresarial",
    imagem: "/img_carrossel1.png",
    descricao: [
      "• Orientação para constituição e registro de empresas.",
      "• Abertura de CNPJ: Assistência no processo de formalização e registro de empresas junto aos órgãos competentes.",
      "• Elaboração de estatuto social e regimentos internos.",
      "• Consultoria em compliance e governança corporativa.",
      "• Gestão de crédito e inadimplência: Estratégias e orientações para negociação e cobrança de clientes inadimplentes.",
    ],
  },
  {
    nome: "Direito Trabalhista",
    imagem: "/img_carrossel1.png",
    descricao: [
      "• Orientação sobre direitos e deveres trabalhistas para empresas.",
      "• Desenvolvimento de políticas internas e manuais de conduta.",
    ],
  },
  {
    nome: "Direito Civil",
    imagem: "/img_carrossel1.png",
    descricao: [
      "• Elaboração de termos de uso e políticas de privacidade (LGPD).",
      "• Mediação extrajudicial e negociação de conflitos.",
      "• Envio de ofícios aos órgãos públicos (como prefeituras): Auxílio na redação e envio de comunicações formais para solicitar apoio, firmar parcerias ou tratar de questões de interesse público.",
    ],
  },
  {
    nome: "Propriedade Intelectual",
    imagem: "/img_carrossel1.png",
    descricao: [
      "• Suporte no registro de marcas e patentes.",
      "• Consultoria para proteção de direitos autorais.",
    ],
  },
  {
    nome: "Direito Digital",
    imagem: "/img_carrossel1.png",
    descricao: [
      "• Consultoria para adequação à LGPD e proteção de dados.",
      "• Elaboração de termos de uso e políticas de privacidade para sites e plataformas digitais.",
      "• Orientação para conformidade de e-commerce e startups.",
    ],
  },
  {
    nome: "Planejamento Sucessório/ Direito de família",
    imagem: "/img_carrossel1.png",
    descricao: [
      "• Planejamento sucessório para empresas familiares.",
      "• Estruturação de acordos de sócios e planejamento societário.",
    ],
  },
  {
    nome: "Direito Tributário Básico",
    imagem: "/img_carrossel1.png",
    descricao: [
      "• Planejamento tributário básico e otimização de carga tributária.",
      "• Regularização fiscal para pequenas empresas e independentes.",
    ],
  },
];

function CarrosselServicos() {
  const carrosselRef = useRef(null);

  return (
    <div className="container-carrossel" backgroud-color="white">
      <h2 className="text-2xl font-bold text-[#1a1a1a] text-center mb-2 font-poppins">
        Nossos serviços
      </h2>
      <p className="text-[#1a1a1a] text-center mb-2 font-poppins">
          Arraste para o lado para visualizar todos os serviços</p>
      <div className="carrossel" ref={carrosselRef}>
        {data.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </div>
  );

  function Card({ item }) {
    const [expanded, setExpanded] = useState(false);

    return (
      <div className="item">
        <div className="imagem">
          <img src={item.imagem} alt={item.nome} />
        </div>
        <div className="info">
          <span className="nome">{item.nome}</span>
          <div className={`descricao ${expanded ? "expanded" : ""}`}>
            <ul>
              {item.descricao.map((descricaoItem, index) => (
                <li key={index}>{descricaoItem}</li>
              ))}
            </ul>
          </div>
          <button
            className="toggle-button"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Leia Menos" : "Leia Mais"}
          </button>
        </div>
      </div>
    );
  }
}

export default CarrosselServicos;
