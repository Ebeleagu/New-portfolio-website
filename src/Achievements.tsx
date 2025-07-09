import { useEffect, useState, useRef, useCallback } from "react";

interface AchievementTarget {
  clients: number;
  projects: number;
  cups: number;
}

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [cupsCount, setCupsCount] = useState(0);

  const targets: AchievementTarget = {
    clients: 10,
    projects: 16,
    cups: 50,
  };

  const animationDuration = 1000; // in milliseconds

  // Format number with commas for better readability
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  const animateCount = useCallback(
    (setter: React.Dispatch<React.SetStateAction<number>>, target: number) => {
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / animationDuration, 1);
        const current = Math.floor(progress * target);
        setter(current);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setter(target);
        }
      };

      requestAnimationFrame(step);
    },
    [animationDuration]
  );

  useEffect(() => {
    const observerCallback = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && !hasAnimated) {
        // Animate counters
        animateCount(setClientsCount, targets.clients);
        animateCount(setProjectsCount, targets.projects);
        animateCount(setCupsCount, targets.cups);
        setHasAnimated(true);
      }
    };

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, animateCount, targets]);

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
          {/* Clients */}
          <div className="w-32 md:w-40 lg:w-48 mb-8 md:mb-0 flex flex-col items-center">
            <p className="text-white opacity-40 font-mono text-2xl mb-2">
              Clients
            </p>
            <span className="text-blue-500 text-5xl md:text-9xl font-mono">
              {formatNumber(clientsCount)}
            </span>
          </div>
          {/* Projects */}
          <div className="w-32 md:w-40 lg:w-48 mb-8 md:mb-0 flex flex-col items-center">
            <p className="text-white opacity-40 font-mono text-2xl mb-2">
              Projects done
            </p>
            <span className="text-blue-500 text-5xl md:text-9xl font-mono">
              {formatNumber(projectsCount)}
            </span>
          </div>
          {/* Cups of tea */}
          <div className="w-32 md:w-40 lg:w-48 flex flex-col items-center">
            <p className="text-white opacity-40 font-mono text-2xl mb-2">
              Cups of tea
            </p>
            <span className="text-blue-500 text-5xl md:text-9xl font-mono">
              {formatNumber(cupsCount)}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Achievements;
