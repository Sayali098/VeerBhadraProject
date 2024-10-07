import React from 'react'

const Footer = () => {
  return (
    <div>

<footer className="bg-gray-800 text-white py-10 ">
  <div className="min-w-full  grid   place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  
    <div>
      <h3 className="text-xl font-bold mb-4">Veerbhadra</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400">© 2024 Sandbox.
                   All rights reserved.</a></li>
        <li><a href="#" className="hover:text-gray-400">Insta</a></li>
        <li><a href="#" className="hover:text-gray-400">whatsapp</a></li>
        <li><a href="#" className="hover:text-gray-400">facebook</a></li>
        <li><a href="#" className="hover:text-gray-400">twitter</a></li>
        <li><a href="#" className="hover:text-gray-400">youtube</a></li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400">  surve no - 580 , 
          AanandNagar , Market yard - Bibvewadi - kondhawa road ,
           Pune-411037</a></li>
        <li><a href="#" className="hover:text-gray-400">9423577600</a></li>

      </ul>
    </div>
    
    
    <div>
      <h3 className="text-xl font-bold mb-4">Learn more</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
        <li><a href="#" className="hover:text-gray-400">Our Story</a></li>
        <li><a href="#" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#" className="hover:text-gray-400">Terms of use</a></li>
        <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
      
      </ul>
    </div>
    
   
    
  </div>

 
  <div className="mt-8 border-t border-gray-700 pt-4 text-center">
    <p>&copy; 2024 Atul Softwares Technology & Digital Solutions. All rights reserved.</p>
  </div>
</footer>
    </div>
  )
}

export default Footer