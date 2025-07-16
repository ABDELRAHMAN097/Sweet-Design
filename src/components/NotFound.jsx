import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 10 } },
  };

  const bounce = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center max-w-md md:max-w-lg lg:max-w-xl"
        >
          {/* 404 Number */}
          <motion.h1
            variants={bounce}
            className="text-8xl md:text-9xl font-bold text-gray-800 mb-4"
          >
            404
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2"
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-gray-500 mb-8 text-lg md:text-xl"
          >
            Sorry, the page you're looking for doesn't exist or has been moved.
          </motion.p>

          {/* Home Button */}
          <motion.div variants={item}>
            <Link to="/" passHref legacyBehavior>
              <motion.a
                variants={bounce}
                whileHover="hover"
                whileTap="tap"
                className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Return Home
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;