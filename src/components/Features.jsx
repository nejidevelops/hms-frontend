import { FaUserMd, FaCalendarCheck, FaChartLine } from "react-icons/fa";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 text-gray-800">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUserMd className="text-5xl text-blue-500 mb-4" />}
            title="Patient Management"
            description="Efficiently manage patient information and medical records."
          />
          <FeatureCard
            icon={<FaCalendarCheck className="text-5xl text-blue-500 mb-4" />}
            title="Appointment Scheduling"
            description="Streamline appointment booking for doctors and patients."
          />
          <FeatureCard
            icon={<FaChartLine className="text-5xl text-blue-500 mb-4" />}
            title="Analytics"
            description="Gain insights with comprehensive data analysis tools."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
