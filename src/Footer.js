import React, { useState } from "react";

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
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact the Founders
        </button>

        {/* Modal */}
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
      </div>
    </footer>
  );
};

export default Footer;



// import React, { useState } from "react";

// const Footer = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     comment: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Google Form endpoint for submission (replace with your form ID)
//     const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-UpizvnjXgebn82TbY2b7zljiTtbjWOunknqO-QmqqeXuOQ/formResponse";


//     // Map your fields to the Google Form's input names
//     const formParams = new URLSearchParams({
//       "entry.715981385": formData.name, // Replace with actual Google Form entry ID
//       "entry.748327702": formData.email, // Replace with actual Google Form entry ID
//       "entry.1195808275": formData.comment, // Replace with actual Google Form entry ID
//     });

//     fetch(googleFormURL, {
//       method: "POST",
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: formParams.toString(),
//     })
//       .then(() => alert("Your response has been submitted successfully!"))
//       .catch((error) => alert("An error occurred. Please try again later."));

//     setShowModal(false);
//   };

//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto text-center">
//         <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Contact the Founders
//         </button>

//         {/* Modal */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//               <h2 className="text-xl font-bold mb-4">Contact Us</h2>
//               <form onSubmit={handleSubmit}>
//                 <label className="block mb-2">
//                   Name:
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="block w-full border px-3 py-2 rounded mb-4"
//                     required
//                   />
//                 </label>
//                 <label className="block mb-2">
//                   Email:
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="block w-full border px-3 py-2 rounded mb-4"
//                     required
//                   />
//                 </label>
//                 <label className="block mb-2">
//                   Question/Comment:
//                   <textarea
//                     name="comment"
//                     value={formData.comment}
//                     onChange={handleInputChange}
//                     className="block w-full border px-3 py-2 rounded mb-4"
//                     required
//                   ></textarea>
//                 </label>
//                 <div className="flex justify-between items-center">
//                   <button
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                     className="text-gray-500 hover:text-gray-800"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </footer>
//   );
// };

// export default Footer;
