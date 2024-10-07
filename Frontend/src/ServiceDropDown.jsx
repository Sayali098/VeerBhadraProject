
import React from 'react';
import { Link } from 'react-router-dom';

function ServiceDropDown({ closeDropdown }) {
  const services = [
    { id: 1, name: 'Residential Electrical installations' },
    { id: 2, name: 'commercial electrical services' },
    { id: 3, name: 'Industrial electrical services' },
    { id: 4, name: 'Electrical System Upgrades'} ,
    { id: 5, name: 'Lighting Solutions'} ,
    { id: 6, name: 'Solar Power Installations'} ,
    { id: 7, name: 'HT/LT Substation Installation '} ,
    { id: 8, name: 'Erectors for Power Transmission'} ,
    { id: 9, name: ' Backup Power Solutions'} 

  ];

  return (
    <ul className="py-2 shadow-lg rounded-md ">
      {services.map((service) => (
        <li key={service.id}>
          <Link
            to={`/services/${service.id}`}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            // onClick={closeDropdown} // Close dropdown after click
          >
            {service.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ServiceDropDown;
