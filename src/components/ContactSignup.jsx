import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function ContactSignup({ id }) {
  return (
    <footer id={id} className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Main CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Sign up today to explore our Hospital Management System or get in touch
            with us for any inquiries. We’re here to help streamline your healthcare
            management.
          </p>
          <div className="flex flex-col md:flex-row justify-center">
            <a
              href="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg mb-4 md:mb-0 md:mr-4 hover:bg-gray-100 transition duration-300"
            >
              Sign Up
            </a>
            <a
              href="/contact"
              className="bg-blue-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-800 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="border-t border-blue-500 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-200 leading-relaxed">
                Our hospital management system offers efficient, reliable, and secure
                solutions tailored to meet healthcare needs. We strive to enhance patient
                care and operational efficiency.
              </p>
            </div>

            {/* Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:underline">About</a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">Services</a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">Contact</a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">FAQ</a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                </li>
              </ul>
            </div>

            {/* Newsletter and Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
              <p className="text-gray-200 mb-4">
                Subscribe to our newsletter for updates, news, and more.
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l-md text-gray-800 outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-700 px-4 py-2 rounded-r-md font-semibold hover:bg-blue-800 transition duration-300"
                >
                  Subscribe
                </button>
              </form>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FaFacebookF className="hover:text-blue-300 transition duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <FaTwitter className="hover:text-blue-300 transition duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn className="hover:text-blue-300 transition duration-300" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram className="hover:text-blue-300 transition duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-blue-500 mt-12 pt-8 text-center text-sm text-gray-200">
            © {new Date().getFullYear()} Doldam Hospital. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
