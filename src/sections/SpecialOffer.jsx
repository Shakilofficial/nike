import { motion } from "framer-motion";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container py-16'>
      <motion.div
        className='flex-1'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </motion.div>
      <motion.div
        className='flex flex-1 flex-col'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className='text-4xl font-palanquin font-bold text-gray-900'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 text-lg leading-7 text-gray-700'>
          Discover unbeatable deals on top-notch products. Enjoy incredible savings and premier selections that make your shopping experience exceptional.
        </p>
        <p className='mt-6 text-lg leading-7 text-gray-700'>
          Explore a realm of possibilities tailored to your unique needs. Surpass your expectations with our exclusive offers and start your journey with us today.
        </p>
        <div className='mt-11 flex justify-center items-center flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
