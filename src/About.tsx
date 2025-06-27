import { motion } from "framer-motion";
import Pic from "/zavid.jpg";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function About() {
  return (
    <main className=" p-4 sm:p-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
        className="flex flex-col md:flex-row justify-around items-center md:items-start relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-shrink-0 mb-8 md:mb-0"
        >
          <img
            src={Pic}
            alt="picture of David Ben"
            className="w-full md:max-h-[80vh] max-h-[50vh] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        <div className="relative w-full md:w-[40vw] flex flex-col items-center md:items-start justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.5,
            }}
            viewport={{ once: false }}
            className="absolute top-4 inset-x-10 text-white font-mono font-bold opacity-[15%] text-[10vw] md:text-[150px] leading-none flex items-center justify-center pointer-events-none z-0"
          >
            ABOUT
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.4 }}
            viewport={{ once: false }}
            className="relative z-10 text-center md:text-left mt-20 md:mt-0"
          >
            <p className="text-white text-2xl md:text-3xl font-mono mb-4 md:mb-6">
              Hi! I'm David Ben
            </p>
            <p className="text-white text-base md:text-xl font-mono leading-6 md:leading-10 max-w-2xl mx-auto md:mx-0">
              Hello! I am a web designer and developer who creates engaging and
              user-friendly websites. My work combines creativity with technical
              expertise to deliver quality digital experiences. Passionate about
              collaborations, I work closely with clients to bring their visions
              to life, ensuring that each project meets their needs and stands
              out in the online world.
            </p>
            <p className="text-2xl mb-4 font-mono text-blue-500">
              Check me out
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              delay: 0.6,
            }}
            viewport={{ once: false }}
            className="flex text-4xl text-white gap-10 justify-center md:justify-start mt-4 md:mt-0"
          >
            <a
              href="https://twitter.com/@Idehveed"
              aria-label="Twitter profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/DavydBernard"
              aria-label="Facebook profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/iamdeh_veed"
              aria-label="Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaInstagram />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            viewport={{ once: false }}
            className="text-white font-mono mt-6"
          >
            <p className="text-2xl mb-3 md:text-start text-center">
              Contact me here!
            </p>
            <p className="text-xl">
              Email:{" "}
              <span className="text-blue-500">Davydbernard@gmail.com</span>
            </p>
            <p className="text-xl">
              Phone: <span className="text-blue-500">+234 8168 656764</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

export default About;
