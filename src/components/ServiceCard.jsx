/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <motion.div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-white transition-all duration-500 hover:shadow-xl flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-gray-900 text-center">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray text-center">
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
