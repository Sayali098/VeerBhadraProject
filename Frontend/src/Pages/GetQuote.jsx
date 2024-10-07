import React, { useState } from "react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };
  return (
    <div >
      <div data-aos="fade-left" className="flex justify-center pb-10">
        <form
          className="w-2/6   bg-white p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-1xl font-bold mb-6 text-gray-700">
            Contact Form
          </h2>
          <div className="flex flex-col gap-4">
            {/*  Name */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="fullName"
              >
                Your Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full  px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Jane"
                required
              />
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            {/* Email */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="jane.doe@example.com"
                required
              />
            </div>

            {/* Department */}

            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="number"
              >
                Mobile No.
              </label>
              <input
                type="number"
                name="number"
                id="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message here..."
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 w-1/2 text-white px-8 py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetQuote;
