import React from "react";

const SobreNos = () => {
  return (
    <div className="bg-white w-full py-12">
      {/* Container principal */}
      <div className="w-[88%] mx-auto bg-white">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Imagem */}
          <div className="w-full md:w-1/2">
            <img
              src="/backgroundValejur.png"
              alt="Sobre Nós"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="w-full md:w-1/2 h-[400px] flex flex-col justify-center">
            <h1 className="text-[32px] font-black font-poppins text-[#1A1B41] mb-6">
              Sobre nós
            </h1>

            <p className="subtitulo">
              Na ValeJur, transformamos o Direito em{" "}
              <span className="destaque">soluções práticas e acessíveis</span>.
              Somos uma equipe jovem e dedicada, comprometida em oferecer
              serviços como{" "}
              <span className="destaque">
                revisão de estatutos, elaboração de contratos, registro de
                marcas
              </span>{" "}
              e <span className="destaque">adequação à LGPD</span>. Aqui,
              aliamos <span className="destaque">conhecimento e inovação</span>{" "}
              para construir o sucesso e a segurança jurídica dos nossos
              clientes. Além disso, somos{" "}
              <span className="destaque">EJ Destaque do triênio 21-24</span>,{" "}
              <span className="destaque">EJ Constância em 2024</span>, e uma das{" "}
              <span className="destaque">
                TOP 3 EJ mais premiadas do NSP no EPEJ em 2024
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
