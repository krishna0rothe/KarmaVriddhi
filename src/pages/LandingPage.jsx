import { useState } from "react";
import {
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  FileText,
  Clock,
  AlertTriangle,
  Search,
} from "lucide-react";

export default function LandingPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-400 overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                Redefining Faculty Appraisals for the Modern Era
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
                कर्मवृद्धि: Empowering universities with an intelligent,
                paperless faculty appraisal system. Built for efficiency,
                transparency, and growth.
              </p>
              <div className="space-x-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-full transition duration-300">
                  Discover the Future of Faculty Evaluations
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center">
                  Explore How It Works
                  <ChevronDown className="ml-2" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full h-96">
                <img
                  src="/placeholder.svg"
                  alt="Faculty using कर्मवृद्धि"
                  className="rounded-lg shadow-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            The Faculty Appraisal Challenge
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Traditional paper-based faculty appraisal processes are slow,
            inefficient, and lack transparency, creating frustration for faculty
            and administrators alike. Delays in tracking research output,
            excessive paperwork, and non-streamlined evaluations slow down
            university growth. Institutions need a smarter solution.
          </p>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            कर्मवृद्धि was built to address these pain points:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "file-text", text: "Complex paperwork" },
              { icon: "clock", text: "Lack of real-time insights" },
              { icon: "alert-triangle", text: "Delays in decision-making" },
              {
                icon: "search",
                text: "Poor tracking of academic contributions beyond teaching",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-6 rounded-lg shadow-md"
              >
                <span className="text-blue-500 mr-4">
                  {item.icon === "file-text" && <FileText size={24} />}
                  {item.icon === "clock" && <Clock size={24} />}
                  {item.icon === "alert-triangle" && (
                    <AlertTriangle size={24} />
                  )}
                  {item.icon === "search" && <Search size={24} />}
                </span>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Solution: कर्मवृद्धि
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            कर्मवृद्धि offers a user-friendly, data-driven solution designed to
            transform the faculty appraisal process. It simplifies every stage
            from self-reporting to administrator reviews, creating a faster,
            more transparent system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Real-Time Tracking",
                description:
                  "Publications automatically tracked using APIs (like Google Scholar).",
              },
              {
                title: "Self-Appraisal Dashboard",
                description:
                  "Faculty can log seminars, events, and projects efficiently.",
              },
              {
                title: "Secure & Role-Based Login",
                description: "Ensures data security and personalized access.",
              },
              {
                title: "Admin Tools",
                description:
                  "Dashboards for easy review, sorting, and exporting of faculty reports.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="w-1/3">
                  <img
                    src={`/placeholder.svg?height=100&width=100&text=${
                      index + 1
                    }`}
                    alt={feature.title}
                    className="rounded-full"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How कर्मवृद्धि Works: A Step-by-Step Guide
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Effortlessly streamline the entire appraisal process with these 4
            steps:
          </p>
          <div className="space-y-8">
            {[
              {
                title: "Secure Registration & Login",
                description:
                  "Faculty and administrators access the platform through a personalized, encrypted portal.",
              },
              {
                title: "Self-Appraisal Submission",
                description:
                  "Faculty track and submit their publications, projects, and seminars in real time.",
              },
              {
                title: "Automated Data Processing",
                description:
                  "The platform automatically collates academic contributions and updates records.",
              },
              {
                title: "Admin Review & Reporting",
                description:
                  "Administrators access, sort, and export detailed data for performance evaluations and resource allocation.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 p-6">
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-lg">{step.description}</p>
                </div>
                <div className="w-1/2">
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=Step ${
                      index + 1
                    }`}
                    alt={`Step ${index + 1}`}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact, Benefits, Testimonials, Team, Call to Action, and Footer Sections go here */}
    </div>
  );
}
