import { useState, useEffect } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const generateHearts = () => {
    setShowResponse(true);
    const newHearts = Array.from({ length: 100 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() * 40 + 30
    }));
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 6000);
    
    // Abrir WhatsApp después de 5 segundos
    setTimeout(() => {
      const phoneNumber = '50498295612';
      const message = encodeURIComponent('Sí Josue te perdono ❤️');
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 relative overflow-hidden">
      {/* Nubes animadas flotando */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Nube 1 - Grande y esponjosa */}
        <div className="absolute top-10 animate-cloud-1">
          <div className="relative w-48 h-24">
            <div className="absolute bottom-0 left-8 w-32 h-16 bg-white rounded-full opacity-80"></div>
            <div className="absolute bottom-4 left-0 w-24 h-24 bg-white rounded-full opacity-80"></div>
            <div className="absolute bottom-4 left-16 w-28 h-28 bg-white rounded-full opacity-80"></div>
            <div className="absolute bottom-4 left-28 w-24 h-24 bg-white rounded-full opacity-80"></div>
            <div className="absolute bottom-2 left-36 w-20 h-20 bg-white rounded-full opacity-80"></div>
          </div>
        </div>
        
        {/* Nube 2 - Mediana con volumen */}
        <div className="absolute top-32 animate-cloud-2">
          <div className="relative w-40 h-20">
            <div className="absolute bottom-0 left-6 w-28 h-12 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-3 left-0 w-20 h-20 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-3 left-12 w-24 h-24 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-3 left-24 w-20 h-20 bg-white rounded-full opacity-70"></div>
          </div>
        </div>
        
        {/* Nube 3 - Pequeña y esponjosa */}
        <div className="absolute top-1/4 animate-cloud-3">
          <div className="relative w-36 h-20">
            <div className="absolute bottom-0 left-4 w-24 h-10 bg-white rounded-full opacity-75"></div>
            <div className="absolute bottom-2 left-0 w-18 h-18 bg-white rounded-full opacity-75"></div>
            <div className="absolute bottom-2 left-10 w-20 h-20 bg-white rounded-full opacity-75"></div>
            <div className="absolute bottom-2 left-20 w-16 h-16 bg-white rounded-full opacity-75"></div>
          </div>
        </div>
        
        {/* Nube 4 - Extra grande */}
        <div className="absolute top-1/2 animate-cloud-4">
          <div className="relative w-56 h-28">
            <div className="absolute bottom-0 left-10 w-36 h-16 bg-white rounded-full opacity-65"></div>
            <div className="absolute bottom-4 left-0 w-26 h-26 bg-white rounded-full opacity-65"></div>
            <div className="absolute bottom-4 left-14 w-32 h-32 bg-white rounded-full opacity-65"></div>
            <div className="absolute bottom-4 left-30 w-28 h-28 bg-white rounded-full opacity-65"></div>
            <div className="absolute bottom-4 left-42 w-24 h-24 bg-white rounded-full opacity-65"></div>
            <div className="absolute bottom-2 left-48 w-20 h-20 bg-white rounded-full opacity-65"></div>
          </div>
        </div>
        
        {/* Nube 5 - Mediana redondeada */}
        <div className="absolute bottom-32 animate-cloud-5">
          <div className="relative w-44 h-22">
            <div className="absolute bottom-0 left-8 w-28 h-14 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-3 left-0 w-22 h-22 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-3 left-14 w-26 h-26 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-3 left-28 w-22 h-22 bg-white rounded-full opacity-70"></div>
          </div>
        </div>
        
        {/* Nube 6 - Grande y suave */}
        <div className="absolute top-3/4 animate-cloud-6">
          <div className="relative w-52 h-26">
            <div className="absolute bottom-0 left-12 w-32 h-16 bg-white rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-2 w-24 h-24 bg-white rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-18 w-30 h-30 bg-white rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-34 w-26 h-26 bg-white rounded-full opacity-60"></div>
            <div className="absolute bottom-2 left-44 w-22 h-22 bg-white rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Corazones flotantes */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float pointer-events-none z-50"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            bottom: '-50px',
            fontSize: `${heart.size}px`
          }}
        >
          ❤️
        </div>
      ))}

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header con imagen de Snoopy */}
        <div className="text-center mb-8">
          <div className="inline-block animate-float-soft">
            <img 
              src="https://i.pinimg.com/736x/8e/e5/db/8ee5dba7a8c2536408adff0f33459eef.jpg" 
              alt="Snoopy en su casita"
              className="w-48 h-48 object-contain mx-auto drop-shadow-2xl rounded-3xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-red-600 mt-6 drop-shadow-lg" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            Para Alejandra Paola 💕
          </h1>
        </div>

        {/* Tarjeta principal */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-red-200">
            
            {/* Mensaje con Snoopy pensativo */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-6 border-2 border-pink-300">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHzWQujV9AdXjgzyc12t_0OoXMlLFTna4zQ&s" 
                  alt="Snoopy pensativo"
                  className="w-32 h-32 object-contain drop-shadow-lg"
                />
                <div>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold">
                    🐾 Como Snoopy en su casita roja... 🐾
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-3">
                    A veces me quedo pensando en mis errores y me doy cuenta de lo mucho que te extraño...
                  </p>
                </div>
              </div>

              <div className="text-center my-8">
                <div className="inline-block bg-red-100 rounded-full p-4 animate-pulse">
                  <span className="text-6xl">💔</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-6 border-2 border-red-300">
                <p className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-4">
                  Lo Siento Mucho 🥺
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                  Como cuando Snoopy pierde a Woodstock, me siento perdido sin tu sonrisa...
                  Metí la pata y lo sé. Cada día sin tu perdón es como una tira cómica sin final feliz.
                </p>
              </div>

              {/* Snoopy y Woodstock juntos */}
              <div className="flex justify-center my-8">
                <div className="relative">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmvVZAsXEpiqkujWZqn4x4TpiyWQSQ_2fPw&s" 
                    alt="Snoopy con Woodstock"
                    className="w-64 h-64 object-contain drop-shadow-2xl rounded-2xl bg-white p-4"
                  />
                  <div className="absolute -top-4 -right-4 text-5xl animate-pulse">💕</div>
                  <div className="absolute -bottom-4 -left-4 text-4xl animate-pulse" style={{animationDelay: '0.5s'}}>❤️</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 border-2 border-pink-300">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-4">
                  Tú eres mi Woodstock, la que hace que mi mundo tenga sentido. 
                  Sin ti, soy solo un beagle triste mirando las nubes pasar.
                </p>
                <p className="text-xl md:text-2xl font-bold text-pink-600 text-center">
                  ¿Me das otra oportunidad? 🙏✨
                </p>
              </div>

              {/* Botón grande */}
              <div className="text-center pt-6">
                <button
                  onClick={generateHearts}
                  className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-6 px-12 rounded-full text-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white"
                >
                  🐾 ¿Me Perdonas? 🐾
                </button>
              </div>

              {/* Mensaje de respuesta */}
              {showResponse && (
                <div className="text-center mt-8 bg-green-100 rounded-2xl p-6 border-4 border-green-300 animate-fade-in">
                  <p className="text-3xl font-bold text-green-600 drop-shadow-lg mb-4">
                    ¡Gracias por darme otra oportunidad! 💖✨
                  </p>
                  <div className="flex justify-center">
                    <img 
                      src="https://i.pinimg.com/736x/8e/e5/db/8ee5dba7a8c2536408adff0f33459eef.jpg" 
                      alt="Snoopy feliz"
                      className="w-40 h-40 object-contain drop-shadow-xl"
                    />
                  </div>
                  <p className="text-2xl text-green-700 mt-4 font-semibold">
                    ¡Prometo ser mejor! 🐾💕
                  </p>
                </div>
              )}

              {/* Firma */}
              <div className="text-center mt-8 pt-6 border-t-2 border-pink-200">
                <p className="text-gray-600 italic text-xl mb-2">
                  "La felicidad es tener a alguien especial a quien pedirle perdón"
                </p>
                <p className="text-red-600 font-bold text-3xl">
                  Con todo mi amor 💖
                </p>
                <p className="text-gray-500 text-sm mt-4">🐾 Snoopy y Woodstock aprueban este mensaje 🐾</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer decorativo */}
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-4">
            <span className="text-4xl animate-bounce" style={{animationDelay: '0s'}}>🐾</span>
            <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>❤️</span>
            <span className="text-4xl animate-bounce" style={{animationDelay: '0.4s'}}>🐾</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 4s ease-out forwards;
        }
        @keyframes float-soft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float-soft {
          animation: float-soft 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        @keyframes cloud-float-1 {
          0% {
            transform: translateX(-20vw);
          }
          100% {
            transform: translateX(120vw);
          }
        }
        @keyframes cloud-float-2 {
          0% {
            transform: translateX(-30vw);
          }
          100% {
            transform: translateX(130vw);
          }
        }
        @keyframes cloud-float-3 {
          0% {
            transform: translateX(-15vw);
          }
          100% {
            transform: translateX(125vw);
          }
        }
        @keyframes cloud-float-4 {
          0% {
            transform: translateX(-25vw);
          }
          100% {
            transform: translateX(135vw);
          }
        }
        @keyframes cloud-float-5 {
          0% {
            transform: translateX(-10vw);
          }
          100% {
            transform: translateX(120vw);
          }
        }
        @keyframes cloud-float-6 {
          0% {
            transform: translateX(-35vw);
          }
          100% {
            transform: translateX(140vw);
          }
        }
        .animate-cloud-1 {
          animation: cloud-float-1 50s linear infinite;
        }
        .animate-cloud-2 {
          animation: cloud-float-2 60s linear infinite;
        }
        .animate-cloud-3 {
          animation: cloud-float-3 55s linear infinite;
        }
        .animate-cloud-4 {
          animation: cloud-float-4 65s linear infinite;
        }
        .animate-cloud-5 {
          animation: cloud-float-5 58s linear infinite;
        }
        .animate-cloud-6 {
          animation: cloud-float-6 62s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;