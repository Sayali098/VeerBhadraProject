import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from "react";

import { PiArrowsCounterClockwiseDuotone } from "react-icons/pi";
import heroImg from '../assets/Hero.png'
import residential from '../assets/residential.jpeg'
import commercial from '../assets/commertial.jpg'
import aboutImg from '../assets/aboutImg.jpg'
import industrial from '../assets/Industrial_ele.png'
const Home= () => {
 

  const [years, setYears] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [ongoingProjects, setOngoingProjects] = useState(0);

  useEffect(() => {
    // Function to increment numbers
    const incrementCounter = (target, setState) => {
      let count = 0;
      const increment = Math.ceil(target / 100); // Control the speed of the increment
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          setState(target);
          clearInterval(interval);
        } else {
          setState(count);
        }
      }, 50); // Adjust the interval speed here (e.g., 30ms)
    };

    incrementCounter(2, setYears); // Years of Experience
    incrementCounter(15, setCompletedProjects); // Projects Completed
    incrementCounter(100, setReviews); // Project Reviews
    incrementCounter(8, setOngoingProjects); // Projects Ongoing
  }, []);

  return (
    <div>

      {/* //Hero section */}
    <div className=' flex gap-6 flex-col   md:flex-row  lg:flex-row my-4 w-full px-8  items-center'>
        <div   className='lg:w-full flex items-center justify-center md:w-full '>
            <img src={heroImg} ></img>
        </div>
        <div  className='w-full'>
            <p className='font-bold text-3xl  md:text-3xl lg:text-4xl xl:text-5xl flex flex-col gap-4 opacity-85'><span>We are Masters of</span> <span className='text-violet-600 animate-upDown   '> Electricity Services.</span></p>
            <p className='text-lg m-2 pt-3'>At Veerbhadra Electromech, we excel in delivering innovative 
                electrical solutions with precision and expertise. Our skilled 
                team ensures reliable installations and services for residential,
                 commercial, and industrial projects. 
                Trust us to power your future with efficiency and safety.</p>
        </div>
    </div>

    {/* // hero footer */}
    <div className='flex py-14 flex-col sm:flex-row md:flex-row lg:flex-row   gap-10  items-center justify-center  pb-20' >
    <div  data-aos="fade-right" className='w-72 bg-white min-h-96 border py-4 border-gray-300 rounded-lg 
     overflow-hidden shadow-lg hover:scale-105  transition-all duration-500'>
     <div>
     <p className='text-2xl font-semibold  text-center pb-2'>Residential</p> 
     </div>
     <img src={residential}  className='h-72 w-full  object-cover'></img>
     <div className='flex justify-center  pt-3'>
     <button className='w-32 text-center m-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>Read More</button>
     </div>
    </div>
    
    <div data-aos="fade-down" className='w-72 bg-white min-h-96 border py-4 border-gray-300 rounded-lg shadow-lg 
    overflow-hidden hover:scale-105  transition-all duration-500'>
     <div>
     <p className='text-2xl font-semibold text-center pb-2'>Commercial</p> 
     </div>
     <img src={commercial}  className='h-72 w-full  object-cover'></img>
     <div className='flex justify-center  pt-3'>
     <button className='w-32 text-center m-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>Read More</button>
     </div>
    </div>

    <div data-aos="fade-left" className='w-72 bg-white min-h-96 border py-4 border-gray-200 
    rounded-lg shadow-lg overflow-hidden hover:scale-105  transition-all duration-500 '>
     <div>
     <p className='text-2xl font-semibold text-center pb-2'>Industrial</p> 
     </div>
     <img src={industrial}  className='h-72 w-full  object-cover'></img>
     <div className='flex justify-center  pt-3'>
     <button className='w-32 text-center   m-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>Read More</button>
     </div>
    </div>
    
   
</div>


{/* // about section */}
<div className= ' w-full px-8 flex py-8 flex-col md:flex-row lg:flex-row  justify-between items-center   gap-5'>
            <div data-aos="fade-right" className='w-3/4 flex flex-col items-center gap-2 justify-center  '>
                <p className='text-4xl font-bold '>About Us</p>
                <p> Founded in 2009 by visionary leader Santosh Kumbhar, Veerbhadra Electromech has become a trusted name in electrical contracting services across Pune and beyond. With over a decade of expertise, the company specializes in providing comprehensive electrical solutions, including HT/LT substation installations, cable laying, switchgear systems, and solar power installations. Under Santosh Kumbhar’s guidance, the company has consistently delivered high-quality, reliable, and safe electrical services to residential, commercial, and industrial clients.</p>
                <button className='bg-gradient-to-r from-green-600 to-lime-300 font-semibold text-center text-lg  text-white rounded-full px-8 py-2'>Read more</button>
            </div>
            <div data-aos="fade-left"  className='w-full'>
                <img className='' src={aboutImg}></img>
            </div>
        </div>


   {/* Services section */}
<div className='p-12'>
      <p className='text-4xl font-semibold text-center pb-8 '>Our Services </p>
  <div data-aos="fade-right" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  '>
    <div className="border-b border-gray-300  gap-3 p-4">
      <p className="font-bold  font-serif text-2xl pb-1">Residential Electrical Installations</p>
      <p>We provide complete electrical installations for homes, ensuring safe and efficient power distribution.</p>  
      <button className="mt-4 bg-blue-500   hover:bg-blue-600  transition duration-150 text-white py-2 px-4  rounded">Read more</button>
    </div>

    <div className="border-l border-gray-300 p-4">
      <p className="font-bold  font-serif text-2xl pb-1">Commercial Electrical Services</p>
      <p>Our commercial electrical services ensure reliable power solutions for offices, retail spaces, and other business environments.</p>  
      <button className="mt-4 bg-blue-500  hover:bg-blue-600  transition duration-150 text-white py-2 px-4 rounded">Read more</button>
    </div>

    <div className="border-l border-b border-gray-300  p-4">
      <p className="font-bold  font-serif text-2xl pb-1">Industrial Electrical Services</p>
      <p>Our industrial electrical services are designed to handle the demands of high-voltage systems and complex machinery.</p>  
      <button className="mt-4 bg-blue-500   hover:bg-blue-600  transition duration-150 text-white py-2 px-4 rounded">Read more</button>
    </div>

    <div className="border-b border-gray-300 p-4">
      <p className="font-bold  font-serif text-2xl pb-1">Electrical System Upgrades</p>
      <p>We specialize in upgrading outdated electrical systems to enhance safety, efficiency, and performance.</p>  
      <button className="mt-4  bg-blue-500  hover:bg-blue-600  transition duration-150 text-white py-2 px-4 rounded">Read more</button>
    </div>

    <div className="border border-gray-300 p-4">
      <p className="font-bold  font-serif text-2xl pb-1">Lighting Solutions</p>
      <p>Our lighting solutions offer customized designs for homes, businesses, and more.</p>  
      <button className="mt-4 bg-blue-500  hover:bg-blue-600  transition duration-150 text-white py-2 px-4 rounded">Read more</button>
    </div>

    <div className="border-b border-gray-300 p-4">
      <p className="font-bold  font-serif text-2xl pb-1">Solar Power Installations</p>
      <p>Our solar power installations provide eco-friendly, cost-effective energy solutions.</p>  
      <button className="mt-4 bg-blue-500  border-none hover:bg-blue-600  transition duration-150 text-white py-2 px-4 rounded">Read more</button>
    </div>

    <div className=" p-4">
      <p className="font-bold  font-serif text-2xl pb-1">HT/LT Substation Installation</p>
      <p>We specialize in the design, installation, and maintenance of HT and LT substations for industrial, commercial, and residential projects.</p>  
      <button className="mt-4 bg-blue-500  hover:bg-blue-600  transition duration-150 text-white py-2 px-4 rounded">Read more</button>
    </div>

    <div className="border-l border-gray-300 p-4">
      <p className="font-bold  font-serif text-2xl pb-1">Erectors for Power Transmission</p>
      <p>Our team of skilled erectors specializes in the installation of power transmission infrastructure, including overhead lines, poles, and towers.</p>  
      <button className="mt-4 bg-blue-500  hover:bg-blue-600  transition duration-150 text-white py-2 px-4 rounded">Read more</button>
    </div>

    <div className="border-l  border-gray-300 p-4">
      <p className="font-bold  font-serif text-2xl pb-1 ">Backup Power Solutions</p>
      <p>We provide reliable backup power solutions, including generators and UPS systems, to ensure uninterrupted power supply during outages.</p>  
      <button className="mt-4 bg-blue-500 hover:bg-blue-600  transition duration-150 text-white py-2 px-4 rounded">Read more</button>
    </div>
  </div>
</div>

 {/* //counter section */}
<div className=" flex justify-center items-center min-h-64 ">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className=" flex flex-col justify-center items-center  bg-orange-300 rounded-full w-40 h-40 
        md:w-48 md:h-48 shadow-lg  animate-imgup" 
              style={{ animationDelay: "0.3s" }}>
          <h2 className="text-lg font-bold text-blue-700">Years of Experience</h2>
          <p className="text-2xl font-semibold text-blue-600">{years}+</p>
        </div>
        <div className=" flex flex-col justify-center items-center bg-orange-300 rounded-full w-40 h-40 
        md:w-48 md:h-48 shadow-lg  animate-imgup" 
              style={{ animationDelay: "0.5s" }} >

          <h2 className="text-lg font-bold text-blue-700">Projects Completed</h2>
          <p className="text-2xl font-semibold text-blue-600">{completedProjects}+ platforms</p>
        </div>
        <div className=" flex flex-col justify-center items-center bg-orange-300 rounded-full w-40 h-40
        md:w-48 md:h-48 shadow-lg  animate-imgup" 
              style={{ animationDelay: "0.7s" }}>
          <h2 className="text-lg font-bold text-blue-700">Project Reviews</h2>
          <p className="text-2xl font-semibold text-blue-600">{reviews}</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-orange-300 rounded-full w-40 h-40 
        md:w-48 md:h-48 shadow-lg  animate-imgup" 
              style={{ animationDelay: "1s" }}>
          <h2 className="text-lg font-bold text-blue-700">Projects Ongoing</h2>
          <p className="text-2xl font-semibold text-blue-600">{ongoingProjects}</p>
        </div>
      </div>
    </div>

{/* // testimonial section */}
    <div className="bg-gray-100 py-12 flex justify-center">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div class="bg-white p-6 max-w-sm rounded-lg shadow-lg text-center">
      <p class="italic text-lg text-gray-700 mb-6">
        "This product is simply amazing! It has helped me increase my productivity by 200%. Highly recommended!"
      </p>
      <div class="flex items-center justify-center space-x-4">
        <img src="https://via.placeholder.com/50" alt="Author" class="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 class="text-lg font-bold">John Doe</h4>
          <p class="text-sm text-gray-500">CEO, Example Company</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 max-w-sm rounded-lg shadow-lg text-center">
      <p class="italic text-lg text-gray-700 mb-6">
        "The support team was very responsive, and the product quality is top-notch. Highly recommended!"
      </p>
      <div class="flex items-center justify-center space-x-4">
        <img src="https://via.placeholder.com/50" alt="Author" class="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 class="text-lg font-bold">Jane Smith</h4>
          <p class="text-sm text-gray-500">Marketing Director, Sample Co.</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 max-w-sm  rounded-lg shadow-lg text-center">
      <p class="italic text-lg text-gray-700 mb-6">
        "Using this service has improved my business efficiency by 50%. It's simple, reliable, and easy to integrate!"
      </p>
      <div class="flex items-center justify-center space-x-4">
        <img src="https://via.placeholder.com/50" alt="Author" class="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 class="text-lg font-bold">Sam Wilson</h4>
          <p class="text-sm text-gray-500">Product Manager, Tech Hub</p>
        </div>
      </div>
    </div>
    
  </div>
</div>


<div className='w-1/2 mx-auto my-10 ' >
      <Carousel
     
        showArrows={true}           // Show left and right navigation arrows
        autoPlay={true}             // Automatically play the carousel
        infiniteLoop={true}         // Enable infinite looping
        interval={3000}             // Set autoplay interval to 3 seconds
        showThumbs={false}          // Hide the thumbnail navigation
        showStatus={false}          // Hide the slide status (e.g., 1/4)
        stopOnHover={true}          // Stop autoplay on hover
      >
        {/* Years of Experience */}
        <div className='p-5  border border-gray-100 '>
          <h2>Years of Experience</h2>
          <p>  "Using this service has improved my business
             efficiency by 50%. It's simple, reliable, and easy to integrate!"</p>
        
        </div>

        {/* Projects Completed */}
        <div  className='p-5  border border-gray-100 '>
          <h2>Projects Completed</h2>
          <p>15+ Completed Projects including real estate and e-commerce platforms.</p>
       
      
        </div>

        {/* Project Reviews */}
        <div  className='p-5  border border-gray-100 '>
          <h2>Project Reviews</h2>
          <p>Positive feedback from clients, with 4.8/5 average reviews.</p>
        </div>

        {/* Projects Ongoing */}
        <div  className='p-5  border border-gray-100 '>
          <h2>Projects Ongoing</h2>
          <p>Currently working on 3 active projects in web and mobile development.</p>
        </div>
      </Carousel>
    </div>
      

     
 

</div>
  )
}

export default Home;