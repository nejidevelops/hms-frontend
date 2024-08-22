export default function ContactSignup() {
  return (
    <section id="contact" className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-12">
          Contact us or sign up to explore our Hospital Management System.
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          <a
            href="/signup"
            className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold text-lg shadow-lg mb-4 md:mb-0 md:mr-4 hover:bg-gray-100 transition duration-300"
          >
            Sign Up
          </a>
          <a
            href="/contact"
            className="bg-blue-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
