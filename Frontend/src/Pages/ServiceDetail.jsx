// import React from 'react'
// import { useParams } from 'react-router-dom';

// const ServiceDetail = () => {
//     const { serviceId } = useParams();
  
//   // In a real-world app, you might fetch this data from an API
//   const serviceDetails = {
//     1: { name: 'Residential Electrical installations', description:'We provide complete electrical installations for homes ensuring safe and efficient power distribution From wiring and lighting to  switchboards and safety systems our team handles every detail  with precision. Whether its a new build or a renovation we tailor  our services to meet your unique requirements '},
//     2: { name: ' Commertial electrical services', description: ' Our commercial electrical services ensure reliable power solutions for offices, retail spaces, and other business environments. From wiring and lighting to advanced control systems, we design and install systems that meet your businesss specific needs. electrical expertise.' },
//     3: { name: ' Industrial electrical services', description: 'Our industrial electrical services are designed to handle the demands of high-voltage systems and complex machinery. We provide end-to-end solutions, including power distribution, equipment wiring, and electrical safety systems. With a focus on efficiency and safety, we ensure smooth operations  in even the most challenging industrial environments' }
//   };

//   const service = serviceDetails[serviceId];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold">{service.name}</h1>
//       <p>{service.description}</p>
//     </div>
//   );
// }
// export default ServiceDetail;


import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  // In a real-world app, you would fetch this data from an API
  const serviceDetails = {
    1: { name: 'Residential Electrical Installations', description: 'We provide complete electrical installations for homes ensuring safe and efficient power distribution. From wiring and lighting to switchboards and safety systems, our team handles every detail with precision.' },
    2: { name: 'Commercial Electrical Services', description: 'Our commercial electrical services ensure reliable power solutions for offices, retail spaces, and other business environments. We design and install systems that meet your business needs.' },
    3: { name: 'Industrial Electrical Services', description: 'Our industrial electrical services handle high-voltage systems and complex machinery. We provide end-to-end solutions with a focus on efficiency and safety.' },
    4: { name: 'Electrical System Upgrades', description: 'We offer comprehensive electrical system upgrade services to meet the increasing power needs of your home or business.' },
    5: { name: 'Lighting Solutions', description: 'Our lighting solutions are designed to enhance both the functionality and aesthetic of your space.' },
    6: { name: 'Solar Power Installations', description: 'We provide solar power installation services to help you harness renewable energy and reduce your electricity costs.' },
    7: { name: 'HT/LT Substation Installation', description: 'We specialize in HT and LT substation installations, ensuring high-quality power distribution for industrial and commercial use.' },
    8: { name: 'Erectors for Power Transmission', description: 'Our power transmission services ensure the safe and efficient distribution of electricity through high-voltage power lines.' },
    9: { name: 'Backup Power Solutions', description: 'We provide backup power solutions to ensure your operations continue smoothly during power outages.' }
  };

  const service = serviceDetails[serviceId];

  return (
    <div className="container mx-auto p-4">
      {service ? (
        <>
          <h1 className="text-3xl font-bold">{service.name}</h1>
          <p className="mt-4">{service.description}</p>
        </>
      ) : (
        <p>Service not found.</p>
      )}
    </div>
  );
};

export default ServiceDetail;
