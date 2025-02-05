import React, { useState } from "react";
import logo from './static/nothotdog.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Google Form endpoint for submission (replace with your form ID)
    const googleFormURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-UpizvnjXgebn82TbY2b7zljiTtbjWOunknqO-QmqqeXuOQ/formResponse";

    // Map your fields to the Google Form's input names
    const formParams = new URLSearchParams({
      "entry.922148394": formData.name, // Replace with actual Google Form entry ID
      "entry.1042834200": formData.email, // Replace with actual Google Form entry ID
      "entry.911103551": formData.comment, // Replace with actual Google Form entry ID
    });

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams.toString(),
    })
      .then(() => alert("Your response has been submitted successfully!"))
      .catch((error) => alert("An error occurred. Please try again later."));

    setShowModal(false);
  };

  return (
    <footer className="bg-gray-900 text-white py-16 min-h-200" style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}>
  {/* Logo and tagline outside the container */}
  <div className="flex justify-between px-32">
    <div className="mb-8 flex flex-col items-start justify-start">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="NotHotDog Logo" className="w-12 h-12" />
        <h1 className="text-3xl font-bold">NotHotDog</h1>
      </div>
      <p className="text-sm text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact the Founders
        </button>
    </div>
    
  </div>

  {/* Footer content in a single line */}
  <div className="container mx-auto flex justify-between px-32 space-x-16 py-16">
    {/* Product */}
    <div>
      <h3 className="font-bold mb-4 text-2xl">Product</h3>
      <ul className="space-y-2 text-lg font-barlow-condensed">
        <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Feature Roadmap</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Join our community</a></li>
      </ul>
    </div>

    {/* Features */}
    <div>
      <h3 className="font-bold mb-4 text-2xl">Features</h3>
      <ul className="space-y-2 text-lg font-barlow-condensed">
        <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn Outreach</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Leads Database</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Unibox</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Team Management</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="font-bold mb-4 text-2xl">Resources</h3>
      <ul className="space-y-2 text-lg font-barlow-condensed">
        <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
      </ul>
    </div>

    {/* Solutions */}
    <div>
      <h3 className="font-bold mb-4 text-2xl">Solutions</h3>
      <ul className="space-y-2 text-lg font-barlow-condensed">
        <li><a href="#" className="text-gray-400 hover:text-white">Sales Teams</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Marketing Agencies</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Recruiters</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Business Owners</a></li>
      </ul>
    </div>
  </div>

  <div className="mt-8 text-center text-sm text-gray-400">
    © 2025 SocialGrowth LLC FZ. All rights reserved. | Terms of Service | Privacy Policy | Partner Guidelines
  </div>

  {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                  <span className="text-gray-700 font-medium" style={{float: 'left'}}>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                    placeholder="Enter your name"
                    required
                  />
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700 font-medium" style={{float: 'left'}}>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                    placeholder="Enter your email"
                    required
                  />
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700 font-medium" style={{float: 'left'}}>
                    Question/Comment
                  </span>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                    placeholder="Write your questions/suggestions here"
                    rows="4"
                    required
                  ></textarea>
                </label>
                <div className="flex justify-between items-center mt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
</footer>
  );
};

export default Footer;



