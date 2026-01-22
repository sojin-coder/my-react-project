import React from 'react'
import {Facebook,Twitter ,Instagram,Linkedin,Youtube,MapPin ,Phone,Mail} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-50 ">
      <div className="w-full md:w-4/5 m-auto p-5 grid gap-6 
                      md:grid-cols-2 
                      lg:grid-cols-3 
                      xl:grid-cols-4">

        {/* Logo & Name */}
        <div>
          <div className="flex gap-2 items-center">
            <img
              src="https://etec-system.42web.io/assets/etec.png"
              className="w-14 rounded-2xl"
              alt="ETEC Logo"
            />
            <h1 className="font-bold text-2xl">ECTE Center</h1>
          </div>
          <p className="text-sm text-gray-400 mt-3">
           Empowering learners worldwide with high-quality online courses. Learn new skills, advance your career, and achieve your goals.
          </p>
           <p className="text-gray-400 flex gap-3 items-center p-2"><MapPin size={20} /> Phnom Penh</p>
          <p className="text-gray-400 flex gap-3 items-center p-2"><Phone size={20} /> 012 345 678</p>
          <p className="text-gray-400 flex gap-3 items-center p-2"><Mail  size={20}/> info@ecte.com</p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Instructors</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Categories</h2>
         <p className="hover:text-white cursor-pointer">Web Development</p>
            <p className="hover:text-white cursor-pointer">Mobile Development</p>
            <p className="hover:text-white cursor-pointer">Design</p>
            <p className="hover:text-white cursor-pointer">Marketing</p>
            <p className="hover:text-white cursor-pointer">Business</p>
            <p className="hover:text-white cursor-pointer">Marketing</p>
            <p className="hover:text-white cursor-pointer">Data Science</p>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Support</h2>
           <p className="hover:text-white cursor-pointer">Help Center</p>
           <p className="hover:text-white cursor-pointer">Terms of Service</p>
           <p className="hover:text-white cursor-pointer">Privacy Policy</p>
           <p className="hover:text-white cursor-pointer">Refund Policy</p>
           <p className="hover:text-white cursor-pointer">FAQ</p>
           <p className="hover:text-white cursor-pointer">Career</p>
           <h4 className="hover:text-white cursor-pointer">Subscribe to Newsletter</h4>
         <div className="flex gap-2.5 mt-2.5">
            <input type="text" className="border border-b-blue-700 py-1.5 px-4 focus:outline" placeholder='Enter your Email...' />
            <button className="bg-blue-700 px-3.5 py-2 ">Submit</button>
         </div>
            
        </div>

      </div>

      {/* Bottom */}
      <div className="flex justify-around mt-5 p-5  border-t-2 border-gray-700">
         <div className="text-center text-sm text-gray-400 py-4 mt-2">
             © 2026 ECTE Center. All rights reserved.
        </div>
        <div className="flex gap-5 items-center mt-2">
          <div className="w-12 h-12 bg-gray-600  rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600 ">
            <Facebook />
          </div>
          <div className="w-12 h-12 bg-gray-600  rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600">
            <Twitter />
          </div>
          <div className="w-12 h-12 bg-gray-600  rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600">
           <Instagram />
          </div>
          <div className="w-12 h-12 bg-gray-600  rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600">
             <Linkedin />

          </div>
          <div className=" w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600">
             <Youtube />

          </div>
    
        </div>
        <div className="flex gap-5 items-center mt-2">
          <p>We Accept:</p>
          <div className="p-2 rounded-sm bg-gray-600">VISA</div>
          <div className="p-2 rounded-sm bg-gray-600">MC</div>
          <div className="p-2 rounded-sm bg-gray-600">AMEX</div>


        </div>
        
      </div>
      
    </footer>
  )
}

export default Footer
