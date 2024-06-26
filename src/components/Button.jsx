/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <motion.button
      className={`flex items-center justify-center gap-2 px-7 py-3 border font-montserrat text-lg font-medium leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span className="inline-block">{label}</span>
      {iconURL && (
        <motion.img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 w-5 h-5 rounded-full bg-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  );
};

export default Button;
