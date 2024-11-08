import { motion } from "framer-motion";

export default function HowItWorks({ id }) {
  return (
    <section id={id} className="py-24 bg-gradient-to-r from-blue-100 via-white to-gray-100">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl shadow-lg rounded-lg bg-white py-12">
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How It Works
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-20">
          {/* Description Section */}
          <motion.div
            className="md:w-2/3 lg:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Our hospital management system streamlines and automates key
              operations, delivering an efficient experience for both patients and
              healthcare providers. Watch the video to explore its capabilities in detail.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="md:w-2/3 lg:w-1/3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
              <iframe
                className="w-full h-64 md:h-72 lg:h-80 rounded-lg"
                src="https://www.youtube.com/embed/your-video-id"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="How It Works"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
