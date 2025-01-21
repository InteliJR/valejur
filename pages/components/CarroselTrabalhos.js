import React from "react";

const CarroselTrabalhos = () => {
  const imagens = [
    "../public/backgroundValejur.png", // Lembrete para trocar pelas imagens da Valejur
    "../public/backgroundValejur.png",
    "../public/backgroundValejur.png",
    "../public/backgroundValejur.png",
    "../public/backgroundValejur.png",
    "../public/backgroundValejur.png",
    "../public/backgroundValejur.png",
    "../public/backgroundValejur.png",
  ];

  return (
    <div>
      {/* conteúdo CSS para o componente */}
      <style>{`
        .carrosel-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          background-color: white;
          padding: 30px 0;
          text-align: center;
        }

        .titulo {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
          font-size: 24px;
        }

        .subtitulo {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          color: #1a1a1a;
          margin-bottom: 30px;
          font-size: 16px;
        }

        .subtitulo .destaque {
          color: #ff0000;
          font-weight: 600;
        }

        .carrosel-track {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        .carrosel-item {
          flex: 0 0 auto;
          margin: 0 10px;
        }

        .carrosel-item img {
          width: 100px; /* Tamanho do círculo */
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Conteúdo do componente */}
      <div className="carrosel-container">
        <h2 className="titulo">Trabalhos Realizados</h2>
        <p className="subtitulo">
          Mais de <span className="destaque">50 cases</span> resolvidos com sucesso, escolhidos por diversas pessoas e empresas que <span className="destaque">confiam</span> no nosso trabalho.
        </p>
        <div className="carrosel-track">
          {imagens.concat(imagens).map((img, index) => (
            <div className="carrosel-item" key={index}>
              <img src={img} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarroselTrabalhos;
