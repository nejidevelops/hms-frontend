import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 text-gray-800">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            text="This system has revolutionized our hospital's operations!"
            author="Dr. John Doe"
          />
          <TestimonialCard
            text="The appointment scheduling feature is a game-changer."
            author="Nurse Jane Smith"
          />
          <TestimonialCard
            text="Incredible data analysis tools that provide deep insights."
            author="Admin Mark Johnson"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ text, author }) {
  return (
    <motion.div
      className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-lg italic text-gray-700 mb-4">{`"${text}"`}</p>
      <h3 className="text-xl font-semibold text-gray-800">{`- ${author}`}</h3>
    </motion.div>
  );
}
