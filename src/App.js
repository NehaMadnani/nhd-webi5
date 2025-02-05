import React, { useState } from "react";
import cloudflare from './static/cloudflare-logo.png';
import skydeck from './static/skydeck.jpg';
import product from './static/product-screen.png';
import logo from './static/nothotdog.png';
import img1 from './static/Step1.png';
import img2 from './static/Step2.jpeg';
import img3 from './static/Step3.jpg';
import img4 from './static/Step4.jpg';
import { motion } from "framer-motion";
import createImage from "./static/create.jpg";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import Footer from "./Footer";
import { img } from "framer-motion/client";

const StepIcon = ({ number }) => (
  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
    {number}
  </div>
);

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6 },
  }),
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

const RequestAccessForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-Ap9oxoIjCMRJE3kKHa4RCmAWeJeVqQOG8-AQkYKFSc3egg/formResponse";

    const formParams = new URLSearchParams({
      "entry.1433578333": email,
    });

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams.toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setEmail("");
        setTimeout(() => {
          onClose();
        }, 2000); // Close modal after 2 seconds
      })
      .catch(() => alert("An error occurred. Please try again."));
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Request Early Access</h2>
      {isSubmitted ? (
        <div className="text-green-600 font-bold">
          Thank you! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-650 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-md z-50">
      <div className="container mx-auto">
        <div className="flex items-center bg-blue-600/80 justify-between h-16 border-b border-blue-400">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-8 rounded-lg overflow-hidden">
              <img 
                src={logo} // Replace with your actual logo URL
                alt="NotHotDog Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold text-white">NotHotDog</span>
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:block flex-grow max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="bg-white/10 text-white placeholder-white px-4 py-2 pl-10 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute left-3 top-2 text-gray-400">🔍</span>
          </div>
          <button className="text-white px-5 py-2 mr-6 border border-white rounded-lg hover:bg-white hover:text-blue-900 transition">
            Sign in
          </button>
        </div>
        <div className="flex items-center justify-between h-12 text-white bg-blue-800/80">
          <div className="hidden md:flex items-center space-x-6 px-2">
            {["Individuals", "Business", "Public Sector", "Courses", "Resources"].map((menu) => (
              <div key={menu} className="relative">
                <button 
                  className="flex items-center space-x-1 hover:text-gray-300"
                  onClick={() => toggleDropdown(menu)}
                >
                  <span>{menu}</span>
                  {openDropdown === menu ? (
                    <FaChevronUp className="text-xs" />
                  ) : (
                    <FaChevronDown className="text-xs" />
                  )}
                </button>

                {/* Dropdown Content */}
                {openDropdown === menu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                      <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                      <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-m shadow-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">
            Request early access
          </button>
        </div>
      </div>
    </nav>



      {/* Hero Section */}
      {/* Hero Section */}
      <section className="pt-32 px-20 pt-40 pb-20">
  <div className="container mx-auto lg:px-8 py-20 relative z-10 bg-blue-800 rounded-3xl">
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 lg:pr-12">
        <h2 className="text-blue-300 text-xl mb-4">
          Introducing NotHotDog
        </h2>
        <h1 className="text-5xl font-bold text-white mb-6">
          Simulation, Evaluation & Experimentation platform for your AI Agents!
        </h1>
        <p className="text-xl text-blue-300 mb-8">
          NotHotDog generates comprehensive suite of scenarios, and helps you run experiments on your agents in no time. Ship fast with confidence!
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-100 transition-colors"
          >
            Request Early Access
          </button>
          <a 
            href="https://calendly.com/nehasuresh/1-1-discussion" 
            target="_blank" 
            rel="noreferrer noopener"
          > 
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Book a Demo
            </button>
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 mt-12 lg:mt-0">
        <div className="relative flex justify-center items-center">
          <img 
            src={product} 
            alt="Product Screen"
            className="border-8 border-white rounded-3xl shadow-lg object-contain max-w-full"
          />
        </div>
      </div>
    </div>
  </div>
</section>




      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RequestAccessForm onClose={() => setIsModalOpen(false)} />
      </Modal>


      {/* Four Step Procedure Section */}
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Simple 4-Step Procedure</h2>
      <p className="text-xl text-gray-600">
        Use NotHotDog to launch quickly with confidence
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto relative overflow-visible">
      {[
        {
          step: 1,
          title: "Connect",
          description:
            "Set up your agent seamlessly by integrating it with NotHotDog's platform with a single click.",
          icon: "🔌",
          img: img1
        },
        {
          step: 2,
          title: "Generate",
          description:
            "Automatically generate diverse and realistic scenarios tailored to test your agent's capabilities.",
          icon: "⚡",
          img: img2
        },
        {
          step: 3,
          title: "Evaluate",
          description:
            "Analyze your agent's performance across multiple scenarios to identify strengths and areas for improvement.",
          icon: "🧑‍💻",
          img: img3
        },
        {
          step: 4,
          title: "Experiment",
          description:
            "Continuously refine your agent through real-world simulations and rigorous experimentation for optimal reliability.",
          icon: "⚙️",
          img: img4
        },
      ].map((item, index) => (
        <motion.div
          key={item.step}
          className="relative p-8 rounded-2xl shadow-sm bg-white hover:bg-cover hover:bg-center transform hover:scale-110 transition-transform duration-900"
          style={{ backgroundImage: `url(${item.img})` }}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2 }}
          variants={fadeInVariants}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <StepIcon number={item.step} />
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold mb-3 text-white">
            {item.title}
          </h3>
          <p className="text-white">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-blue-600 text-white p-12 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">For AI Developers</h3>
              <p className="mb-8">Test and validate your AI agents with confidence</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">◆</span>
                  Connect & configure your agent with NotHotDog
                </li>
                <li className="flex items-center">
                  <span className="mr-2">◆</span>
                  Generate multiple test scenarios automatically
                </li>
                <li className="flex items-center">
                  <span className="mr-2">◆</span>
                  Run comprehensive simulations effortlessly
                </li>
              </ul>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors" >
                Request Early Access
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-12 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">For Businesses</h3>
              <p className="mb-8 text-gray-600">Ensure reliability in your AI deployments</p>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">◆</span>
                  Enter sample inputs and expected outputs
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">◆</span>
                  Validate agent behavior at scale
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">◆</span>
                  Achieve highest reliability scores
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" onClick={() => setIsModalOpen(true)}>

                Request Early Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Backed By Industry Leaders</h2>
          <div className="flex justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <img 
                src={cloudflare}
                alt="Cloudflare" 
                className="h-14 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex flex-col items-center">
              <img 
                src={skydeck} 
                alt="SkyDeck - UC Berkeley" 
                className="h-14 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />

    </div>
  );
};

export default LandingPage;





