function FirstPage() {
  return (
    <main
      id="Home"
      className="text-white h-[100vh] flex items-center justify-center bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center animation-bounceSwitch">
        <div className="text-center">
          <div className="mb-4">
            <p className="text-2xl font-mono">HELLO! I'M </p>
            <p className="md:text-8xl text-6xl font-mono font-bold">
              DAVID BEN
            </p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 animation-Switch">
          <div className="text-center">
            <p className="text-2xl font-mono">I'M FROM NIGERIA</p>
            <p className="text-6xl md:text-8xl font-mono font-bold">
              A WEB DEVELOPER
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounceSwitch {
          0%,
          100% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .animation-bounceSwitch > div:nth-child(1) {
          animation: bounceSwitch 4s infinite ease-in-out;
          
          
        }
        .animation-bounceSwitch > div:nth-child(2) {
          animation: bounceSwitch 4s infinite ease-in-out;
          animation-delay: 5s;
        }
      `}</style>
    </main>
  );
}

export default FirstPage;
