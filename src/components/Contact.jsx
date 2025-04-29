import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import SocialLinks from './common/SocialLinks';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message should be at least 10 characters';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, we would send the form data to a server
      // For demo purposes, simulate a successful form submission
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.',
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      // You would typically use a service like EmailJS here
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
    }
  };

  return (
    <section id="contact" className="section bg-dark-50 dark:bg-dark-900">
      <SectionTitle 
        title="Contact Me" 
        subtitle="Interested in working together? Feel free to reach out through the form below."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="animate-on-scroll"
        >
          <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">Get In Touch</h3>
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            I'm currently available for freelance work and full-time positions. If you have a project that needs some creative touch or if you're looking to hire a frontend developer, please don't hesitate to contact me.
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 text-dark-900 dark:text-white">Connect With Me</h4>
            <SocialLinks className="justify-start" />
          </div>
          
          <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-soft">
            <h4 className="text-lg font-semibold mb-4 text-dark-900 dark:text-white">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-500 mr-3">
                  <FiMail />
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Email</p>
                  <p className="text-dark-900 dark:text-white">shikharu29@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-500 mr-3">
                  <FiUser />
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Availability</p>
                  <p className="text-dark-900 dark:text-white">Available for work</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="animate-on-scroll"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="card p-8">
            {formStatus.submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 mb-6 rounded-lg ${
                  formStatus.success 
                    ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                    : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                }`}
              >
                {formStatus.message}
              </motion.div>
            )}
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-dark-500 dark:text-dark-400">
                  <FiUser />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 rounded-lg bg-white dark:bg-dark-700 border ${
                    errors.name ? 'border-red-500' : 'border-dark-200 dark:border-dark-600'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white`}
                  placeholder="Your name"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-dark-500 dark:text-dark-400">
                  <FiMail />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 rounded-lg bg-white dark:bg-dark-700 border ${
                    errors.email ? 'border-red-500' : 'border-dark-200 dark:border-dark-600'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white`}
                  placeholder="Your email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none text-dark-500 dark:text-dark-400">
                  <FiMessageSquare />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full pl-10 pr-3 py-3 rounded-lg bg-white dark:bg-dark-700 border ${
                    errors.message ? 'border-red-500' : 'border-dark-200 dark:border-dark-600'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white`}
                  placeholder="Your message"
                ></textarea>
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            
            <motion.button
              type="submit"
              className="w-full btn btn-primary flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend className="mr-2" /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;