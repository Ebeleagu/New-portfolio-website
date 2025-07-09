import { motion } from "framer-motion";
import Rio from "/port.jpg";
import vio from "/findbook.jpg";

const Projects = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main
      id="Projects"
      className="h-full p-6 md:p-10 bg-gray-900 text-white w-full"
    >
      <div className="mx-auto" style={{ width: "80vw" }}>
        <h2 className="text-2xl mb-2 font-mono opacity-40 text-center">
          PORTFOLIO
        </h2>
        <p className="text-4xl font-mono font-bold mb-8 text-center">
          Checkout a few of my works
        </p>

        <div className="flex flex-col md:flex-row items-center md:gap-10 space-y-8 md:space-y-0">
          <motion.div
            className="flex-1 max-w-[90%] md:max-w-[40vw] mx-auto md:mx-0 rounded-lg shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUpVariants}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            <img
              src={Rio}
              alt="Screenshot of old personal portfolio website"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUpVariants}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          >
            <h3 className="mb-4 font-mono opacity-40 text-lg md:text-xl text-center">
              Old Personal Portfolio Website
            </h3>
            <p
              className="mb-4 text-white text-base md:text-xl font-mono leading-6 md:leading-10"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              This was my previous online portfolio built few months back. It
              served as my initial showcase of skills, projects, and
              accomplishments at that time. While it's outdated now, it reflects
              my early efforts and learning journey in web development. Feel
              free to explore it to see how my skills have evolved!
            </p>
            <a
              href="https://portfolio-website-0.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              <p className=" text-center">View Project</p>
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center md:gap-10 space-y-8 md:space-y-0 mt-16">
          <motion.div
            className="flex-1 max-w-[90%] md:max-w-[40vw] mx-auto md:mx-0 rounded-lg shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUpVariants}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            <img
              src={vio}
              alt="Screenshot of Book API website"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUpVariants}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          >
            <h3 className="mb-4 font-mono opacity-40 text-lg md:text-xl text-center">
              Book-Api
            </h3>
            <p
              className="mb-4 text-white text-base md:text-xl font-mono leading-6 md:leading-10"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              I developed a dynamic Book API website that allows users to
              browse, search, and filter a comprehensive collection of book
              data. Built with modern web technologies, the site fetches
              real-time information from an external API, providing a seamless
              and interactive user experience. Key features include easy
              navigation, search functionality, and detailed book pages. This
              project demonstrates my skills in API integration, front-end
              development, and creating user-friendly interfaces.
            </p>
            <a
              href="https://find-books-0.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              <p className=" text-center">View Project</p>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
