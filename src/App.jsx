import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CustomerReviews from "./sections/CustomerReviews";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

function App() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [showScrollBottomButton, setShowScrollBottomButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setShowScrollBottomButton(false);
      } else {
        setShowScrollBottomButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.main
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
      {showScrollTopButton && (
        <motion.button
          className="fixed bottom-10 right-2 bg-coral-red text-white px-2 py-2 rounded-full shadow-md"
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </motion.button>
      )}
      {showScrollBottomButton && (
        <motion.button
          className="fixed bottom-20 right-2 bg-coral-red text-white px-2 py-2 rounded-full shadow-md"
          onClick={scrollToBottom}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
            />
          </svg>
        </motion.button>
      )}
    </motion.main>
  );
}

export default App;
