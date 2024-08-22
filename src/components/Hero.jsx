import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-blue-500 to-green-500 text-white h-screen flex">
      {/* Background Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-green-600 to-transparent opacity-50 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      </div> */}

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Revolutionize Your Hospital Management
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 font-light leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Streamline operations and enhance patient care with our cutting-edge system.
          </motion.p>
          <motion.a
            href="#features"
            className="inline-block bg-white text-blue-500 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Discover Features
          </motion.a>
        </div>

        {/* Image Content */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://images.pexels.com/photos/249348/pexels-photo-249348.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Hospital Management"
            className="w-full rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
