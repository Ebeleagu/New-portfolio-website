import { SiSemanticscholar } from "react-icons/si";
import { MdSettingsSuggest } from "react-icons/md";
import { TbBracketsAngleOff } from "react-icons/tb";

const Services = () => {
  return (
    <main className="p-8 md:p-15 h-auto min-h-screen bg-gray-900 flex flex-col items-center justify-center animate-fadeInUp">
      <h1 className="text-white opacity-40 text-2xl md:text-4xl text-center font-mono mb-5">
        WHAT I DO
      </h1>
      <h2 className="text-white text-3xl md:text-5xl text-center font-mono font-bold mb-10">
        MY SERVICES
      </h2>

      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-6xl px-4 space-y-10 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center text-6xl md:text-8xl text-blue-500 transform transition-transform hover:scale-105 hover:shadow-lg duration-300 animate-fadeInUp delay-100">
          <SiSemanticscholar aria-hidden="true" className="mb-4" />
          <div className="text-center">
            <p className="text-white text-xl md:text-2xl font-mono mb-2">
              Web Design
            </p>
            <p className="text-white text-xl md:text-2xl font-mono">
              Brand and Logo Design
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-6xl md:text-8xl text-blue-500 transform transition-transform hover:scale-105 hover:shadow-lg duration-300 animate-fadeInUp delay-200">
          <MdSettingsSuggest aria-hidden="true" className="mb-4" />
          <div className="text-center">
            <p className="text-white text-xl md:text-2xl font-mono mb-2">
              Web Development
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-6xl md:text-8xl text-blue-500 transform transition-transform hover:scale-105 hover:shadow-lg duration-300 animate-fadeInUp delay-300">
          <TbBracketsAngleOff aria-hidden="true" className="mb-4" />
          <div className="text-center">
            <p className="text-white text-xl md:text-2xl font-mono">
              Content Writing
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Common fadeInUp animation class applied to elements at load */
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        /* Delay helpers (adjust timing as needed) */
        .delay-100 {
          animation-delay: 0.2s;
        }
        .delay-200 {
          animation-delay: 0.4s;
        }
        .delay-300 {
          animation-delay: 0.6s;
        }
      `}</style>
    </main>
  );
};

export default Services;
