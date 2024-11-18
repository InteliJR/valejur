import React from 'react';

const SobreNos = () => {
  return (
    <div className="bg-white w-full py-12">
      {/* Container principal com a mesma largura de Missão, Visão, Valores */}
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

          {/* Conteúdo - altura definida para igualar à imagem */}
          <div className="w-full md:w-1/2 h-[400px] flex flex-col justify-center">
            <h1 className="text-[32px] font-black font-poppins text-[#1A1B41] mb-6">
              Sobre nós
            </h1>
            
            <div className="text-[15px] font-poppins">
              <span className="text-[#1A1B41] font-normal">
                Lorem ipsum dolor sit amet. Sit eligendi dolorem et eveniet tempore ut nihil dicta est ducimus soluta.{' '}
              </span>
              
              <span className="text-red-600 font-bold">
                Aut vitae esse ex aliquid{' '}
              </span>
              
              <span className="text-[#1A1B41] font-normal">
                enim sit molestiae enim non suscipit doloribus. Sed fugiat corrupti nam voluptatem maxime et pariatur deleniti eos corrupti dolorem. Quo autem dolorum ex eligendi molestiae ex quia omnis. Qui fuga nesciunt quo iusto dicta{' '}
              </span>
              
              <span className="text-red-600 font-extrabold">
                aut voluptatum{' '}
              </span>
              
              <span className="text-[#1A1B41] font-normal">
                possimus. Rem beatae quibusdam et beatae odit sit saepe autem est repellat voluptatem. Vel deserunt cupiditate ea perspiciatis ullam qui voluptates dicta sed galisum necessitatibus sed.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;