/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const AuthLinks = () => {
  return (
    <motion.a
      href="/"
      className="bg-coral-red text-white border-coral-red font-montserrat leading-normal text-lg px-5 py-2 rounded-full transition-all duration-300"
      whileHover={{ scale: 1.05, backgroundColor: "#ff5a5f" }}
      whileTap={{ scale: 0.95 }}
    >
      Explore Now
    </motion.a>
  );
};

export default AuthLinks;
