import { useEffect, useState, useRef } from "react";

const Achievements = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [cupsCount, setCupsCount] = useState(0);

  const targets = {
    clients: 10,
    projects: 16,
    cups: 50,
  };

  const animateCount = (setter, target) => {
    let startTimestamp = null;
    const duration = 1000;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * target);
      setter(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setter(target);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount(setClientsCount, targets.clients);
          animateCount(setProjectsCount, targets.projects);
          animateCount(setCupsCount, targets.cups);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <main
      ref={sectionRef}
      className="mt-20 pt-20 flex items-center justify-center md:h-[96vh]"
    >
      <div className="relative max-w-4xl w-full text-center px-4">
        <h1 className="text-white font-mono opacity-40 mb-3 text-xl md:text-2xl">
          Portfolio
        </h1>
        <p className="text-white font-mono text-3xl md:text-4xl mb-2">
          I love to share my
        </p>
        <p className="text-white font-mono text-3xl md:text-4xl mb-8">
          achievements
        </p>

        <div className="w-full flex flex-col md:flex-row md:justify-center md:space-x-32 items-center md:items-start">
          <div className="w-32 md:w-40 lg:w-48 mb-8 md:mb-0 flex flex-col items-center">
            <p className="text-white opacity-40 font-mono text-2xl mb-2">
              Clients
            </p>

            <span className="text-blue-500 text-5xl md:text-9xl font-mono">
              {clientsCount}
            </span>
          </div>

          <div className="w-32 md:w-40 lg:w-48 mb-8 md:mb-0 flex flex-col items-center">
            <p className="text-white opacity-40 font-mono text-2xl mb-2">
              Projects done
            </p>
            <span className="text-blue-500 text-5xl md:text-9xl font-mono">
              {projectsCount}
            </span>
          </div>

          <div className="w-32 md:w-40 lg:w-48 flex flex-col items-center">
            <p className="text-white opacity-40 font-mono text-2xl mb-2">
              Cups of tea
            </p>
            <span className="text-blue-500 text-5xl md:text-9xl font-mono">
              {cupsCount}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Achievements;
