import React, { useState } from 'react';

const CarroselTrabalhos = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const imagens = [
    "/eel-jr.png",
    "/biosativa.png",
    "/farmacia-in.png",
    "/jovens-projetistas.png",
    "/sanpro-jr.png",
    "/scitec-jr.png",
    "/2-tons.jpg",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white py-8 pr-[5px]">
      <h2 className="text-2xl font-bold text-[#1a1a1a] text-center mb-2 font-poppins">
        Trabalhos Realizados
      </h2>
      <p className="text-base text-[#1a1a1a] text-center mb-8 font-poppins">
        Mais de <span className="text-red-600 font-semibold">50 cases</span> resolvidos 
        com sucesso, escolhidos por diversas pessoas e empresas que{' '}
        <span className="text-red-600 font-semibold">confiam</span> no nosso trabalho.
      </p>

      <div 
        className="relative flex w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex animate-carousel gap-4 ${isHovered ? 'pause-animation' : ''}`}>
          {[...imagens, ...imagens].map((img, index) => (
            <div
              key={index}
              className="flex-none p-2" // Added padding around the image container
            >
              <div className="w-20 h-20 transform transition-transform duration-300 hover:scale-110">
                <img
                  src={img}
                  alt={`Case ${index + 1}`}
                  className="w-full h-full rounded-full object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        <div className={`flex animate-carousel gap-4 ${isHovered ? 'pause-animation' : ''}`}>
          {[...imagens, ...imagens].map((img, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-none p-2" // Added padding around the image container
            >
              <div className="w-20 h-20 transform transition-transform duration-300 hover:scale-110">
                <img
                  src={img}
                  alt={`Case ${index + 1}`}
                  className="w-full h-full rounded-full object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-carousel {
          animation: carousel 20s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }

        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
        }

        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default CarroselTrabalhos;