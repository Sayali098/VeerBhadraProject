import React from "react";
import aboutImg from "../assets/aboutImg.jpg";
import collaborate from '../assets/collaborate.png'

const About = () => {
  return (
    <div className="pt-10">
        <h1 className="text-center text-4xl font-bold pb-12">About Us</h1>
      <div className="grid grid-cols-2 gap-10 place-items-center  px-20">
        <div className="w-full">
          <img src={aboutImg}></img>
        </div>
        <div className="w-full text-base">
        <p className="font-semibold text-lg">About us :- </p>
        <div>
          Established in 2009 by visionary founder Santosh Kumbhar, Veerbhadra
          Electromech has grown to become a trusted provider of electrical
          contracting services in Pune and beyond. With over 15 years of
          industry experience, we specialize in a wide range of electrical
          solutions, including HT/LT substation installations, power
          transmission systems, solar power setups, and more.
          <p> Our commitment to
          quality, safety, and innovation drives us to deliver top-notch
          services for residential, commercial, and industrial projects. Whether
          it's installing a backup power system or upgrading complex electrical
          infrastructures, we provide tailored solutions to meet your unique
          needs. Backed by a skilled team of professionals, we ensure every
          project is completed with precision and efficiency. At Veerbhadra
          Electromech, we pride ourselves on being a reliable partner that
          powers progress and helps create sustainable, future-ready electrical
          systems.
          </p>
          </div>
        </div>
      </div>
      <div className="my-20">
      <div className="flex flex-col  px-10 ">
        <p className="text-3xl font-bold  text-center py-10">Mission</p>
        <p className="text-lg">Our mission is to deliver innovative, safe, and efficient electrical solutions that empower our clients and enhance their operations. We are committed to providing exceptional service, fostering sustainable practices, and ensuring customer satisfaction through continuous improvement and a dedicated team of professionals.
       </p>
       </div>
      </div>
      <div  className="flex flex-col justify-center items-center px-10">
        <p className="text-3xl font-bold  py-10">Vision</p>
        <p className="text-lg">
       Our vision is to be the leading electrical contractor in Pune, recognized for our expertise and commitment to excellence. We aspire to drive the transition to sustainable energy solutions and set new industry standards, creating a brighter and more efficient future for our clients and the communities we serve.
      </p>
      </div>

<div className="py-10 mt-20 bg-gray-50">
<p className="text-center font-bold text-3xl pb-6">Our Values</p>

<div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-4 space-x-6 space-y-4 px-10">
     
<div className="px-8 pt-6">
<p className="text-2xl font-semibold text-center pb-3"> Integrity </p>
   <p>We conduct our business with honesty and transparency, ensuring trust and accountability in all our relationships.</p>
   </div>
<div>
<p className="text-2xl font-semibold text-center pb-3">Quality  </p>

   <p>We are committed to delivering the highest quality services and solutions, adhering to industry standards and best practices to ensure client satisfaction.</p>
   </div>
<div>
<p className="text-2xl font-semibold text-center pb-3"> Safety </p> 
   <p>We prioritize the safety of our team, clients, and communities by adhering to strict safety protocols and regulations in all our operations.</p>
   </div>
<div>
<p className="text-2xl font-semibold text-center pb-3"> Innovation</p>  
 <p> We embrace technology and creativity to develop innovative solutions that meet the evolving needs of our clients and promote sustainability.</p>
   </div>
<div>
<p className="text-2xl font-semibold text-center pb-3">Customer Focus  </p>
   <p>We strive to understand our clients' unique needs and provide personalized service, ensuring their goals are met with excellence and efficiency.</p>
   </div>
<div>

<p className="text-2xl font-semibold text-center pb-3"> Collaboration </p>
 <p>  We believe in the power of teamwork and collaboration, both within our organization and with our clients, to achieve shared success.</p>
 </div>
<div>
<p className="text-2xl font-semibold text-center pb-3">Sustainability</p>
   <p>We are dedicated to promoting sustainable practices in our operations and solutions, contributing to a greener future for our communities.</p>
   </div>
    </div>

    </div>
    </div>
  );
};

export default About;
