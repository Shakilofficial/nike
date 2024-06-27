/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <motion.div
      className='flex justify-center items-center flex-col'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px] border-4 border-coral-red'
      />
      <p className='mt-6 max-w-sm text-center text-gray-700 text-lg leading-relaxed'>
        {feedback}
      </p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain'
        />
        <p className='text-lg font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold text-gray-900'>
        {customerName}
      </h3>
    </motion.div>
  );
};

export default ReviewCard;
