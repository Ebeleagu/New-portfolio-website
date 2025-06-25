import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Connect = () => {
  const socialLinks = {
    twitter: "https://twitter.com/@Idehveed",
    facebook: "https://facebook.com/DavydBernard",
    instagram: "https://instagram.com/iamdeh_veed",
    github: "https://github.com/Ebeleagu",
  };

  return (
    <main
      id="contact"
      className="min-h-screen p-6 bg-gray-900 text-white flex flex-col justify-center items-center"
    >
      <motion.div
        className="flex justify-center items-center gap-10 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href={socialLinks.twitter}
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-blue-400 transition-transform transform hover:scale-125 duration-300"
        >
          <FaTwitter />
        </a>

        <a
          href={socialLinks.facebook}
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-blue-600 transition-transform transform hover:scale-125 duration-300"
        >
          <FaFacebook />
        </a>

        <a
          href={socialLinks.instagram}
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-pink-500 transition-transform transform hover:scale-125 duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href={socialLinks.github}
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-gray-400 transition-transform transform hover:scale-125 duration-300"
        >
          <FaGithub />
        </a>
      </motion.div>

      <motion.div
        className="text-center mb-6 px-4 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-3xl mb-4 font-semibold font-mono">Contact Me</h1>
        <div className="flex justify-center items-center gap-5">
          <span className=" text-3xl hover:text-pink-500 transition-transform transform hover:scale-125 duration-300">
            <i>
              <CgMail />
            </i>
          </span>
          <a
            href="mailto:Davydbernard@gmail.com"
            className="text-xl hover:text-blue-300 transition-colors duration-300 font-mono"
          >
            Davydbernard@gmail.com
          </a>
        </div>
        <div className="flex justify-center items-center gap-5 mt-5">
          <span className=" text-3xl hover:text-pink-500 transition-transform transform hover:scale-125 duration-300">
            <i>
              <FaPhoneAlt />
            </i>
          </span>
          <a
            href="phone no"
            className="text-xl hover:text-blue-300 transition-colors duration-300 font-mono"
          >
            +234 8168 656764
          </a>
        </div>
      </motion.div>

      <motion.p
        className="mt-10 text-sm opacity-70 font-mono "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        ©2025 All rights reserved
      </motion.p>
    </main>
  );
};

export default Connect;
