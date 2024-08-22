import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 lg:w-2/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg lg:text-xl text-center md:text-left mb-6 text-gray-700">
              Our hospital management system simplifies and automates hospital operations.
              Watch the video to see how it works.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <iframe
              className="w-full h-64 md:h-72 lg:h-96 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              src="https://www.youtube.com/embed/your-video-id"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="How It Works"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
