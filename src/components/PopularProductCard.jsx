/* eslint-disable react/prop-types */
import { star } from "../assets/icons";
import { motion } from "framer-motion";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <motion.div
      className="flex flex-1 flex-col w-full max-sm:w-full bg-white rounded-lg shadow-xl overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={imgURL}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <div className="flex justify-center items-center gap-2.5">
          <img src={star} alt="rating icon" width={20} height={20} />
          <p className="font-montserrat text-lg leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
          {price}
        </p>
        <button className="mt-4 px-4 py-2 bg-coral-red rounded-full font-semibold text-white">Buy Now</button>
      </div>
    </motion.div>
  );
};

export default PopularProductCard;
