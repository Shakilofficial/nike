import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <motion.section
      className="max-container flex justify-center flex-wrap gap-9"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </motion.section>
  );
};

export default Services;
