import React,{useState} from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
    const [formData,setformData]=useState({
      name:"",
      email:"",
      message:"",
    });
    const [errors,setErrors]=useState({});

    const handleChange=(e)=>{
      setformData({...formData,[e.target.name]:e.target.value});
      setErrors({...errors,[e.target.name]:""});
    };
    const validateEmail=(email)=>{
      return /\S+@\S+\.\S+/.test(email);
    };
    const handleSubmit=(e)=>{
      e.preventDefault();

      let formErrors={};
      if(!formData.name.trim()) formErrors.name="Name is Required";
      if(!formData.email.trim()) formErrors.email="Email is Required";
      else if(!validateEmail(formData.email)) formErrors.email="Invalid Email.";
      if(!formData.message.trim()) formErrors.message="Message is Required";

      if(Object.keys(formErrors).length>0){
        setErrors(formErrors);
        return;
      }

      alert("Message sent succesfully");
      setformData({name:"",email:"",message:""});
    }
    
  return (
    <div className="py-20 bg-white dark:bg-black transition-colors duration-500" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
          Contact me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          
          <div className="flex-1 text-gray-800 dark:text-gray-200">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-purple-600 mb-4">
              Let's Talk
            </h3>
            <p className="mb-4">I'm open to discuss web development projects or partnership opportunities</p>

            <div className="mb-4">
              <FaEnvelope className="inline-block text-pink-400 mr-2" />
              <a href="mailto:rosalinnayak063@gmail.com" className="hover:underline">
                rosalinnayak063@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <FaPhone className="inline-block text-pink-400 mr-2" />
              <span>+91 9827131179</span>
            </div>

            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-pink-400 mr-2" />
              <span>KHR, Odisha University Of Technology and Research, Bhubaneswar</span>
            </div>
          </div>

         
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4 text-gray-800 dark:text-gray-200">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div> 
               <button className="bg-gradient-to-r from-red-300 to-purple-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Send
              </button>           
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;