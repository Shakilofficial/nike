import { motion } from "framer-motion";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="max-container">
      <motion.div
        className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div className="flex flex-col items-start" variants={fadeInUp}>
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-gray-400 sm:max-w-sm">
            Find your perfect fit at your nearest Nike store. Enjoy rewards and
            exclusive offers.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <motion.div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-gray-200 transition-all duration-300"
                key={icon.alt}
                whileHover={{ scale: 1.1 }}
                variants={fadeInUp}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap"
          variants={fadeInUp}
        >
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-gray-400 hover:text-slate-gray transition-all duration-300"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-between text-gray-400 mt-24 max-sm:flex-col max-sm:items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>2024 Nike. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer hover:text-slate-gray transition-all duration-300">
          Terms & Conditions
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
