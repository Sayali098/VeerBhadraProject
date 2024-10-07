import React, { useState } from "react";
import contactUs from "../assets/contactus.jpg";

function Contact() {
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
    <div className="min-h-1/2  flex flex-col items-center pt-10  justify-center">
      <p className="text-4xl font-semibold pb-6">Contact Us</p>
      <div className="px-8 w-1/2  pb-10">
        <img className="rounded-md" src={contactUs}></img>
      </div>
<div className="flex flex-row gap-8 my-10  ">
      <div className="w-full ">
        <div className="flex flex-col justify-center items-center  w-3/4 gap-8 m-auto  ">
         
          <div>
          <p className="text-2xl font-semibold text-center">Contact</p>
          <p> Contact Us LET'S WORK TOGETHER. Please feel free to say anything to
            us. Our staff will reply any message as soon as possible
            </p> 
          </div>
          .
          <div>
            <p className="text-center font-semibold text-2xl pb-4">Address</p>
           <p> surve no - 580 , AanandNagar , Market yard - Bibvewadi -
            kondhawa road , Pune-411037
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-center pb-4">Phone</p> 
            <p>+91 9423577600 
            </p>
            <p>Email abc@gmail.com
            </p>
            </div>
        </div>
      </div>
      <div data-aos="fade-left" className="w-full">
        <form
          className="w-full max-w-3xl   p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-700">
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.968343409182!2d73.84208030386432!3d18.44416338858986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac101655f87%3A0xcc5b0a20d60c9ac8!2sKatraj%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728283441657!5m2!1sen!2sin"  className="w-full h-60 border-none" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  );
}

export default Contact;



{/* <select
name="department"
id="department"
value={formData.department}
onChange={handleChange}
className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
>
<option value="">Select</option>
<option value="HR">HR</option>
<option value="Engineering">Engineering</option>
<option value="Marketing">Marketing</option>
</select> */}