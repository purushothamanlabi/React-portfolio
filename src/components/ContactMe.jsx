import { useState } from 'react';

const ContactMe = () => {
  // Add state for form fields and validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Basic validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 3 seconds
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32">
      <div className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">Contact Me</h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-28 2xl:gap-36 items-center">
          <div className="w-full sm:w-5/5 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 max-w-2xl mx-auto md:mx-0 mb-8 md:mb-0">
            {submitSuccess ? (
              <div className="bg-green-500/20 border border-green-500 text-green-200 p-4 rounded-lg mb-6">
                Thank you! Your message has been sent successfully.
              </div>
            ) : null}
            
            <form className="space-y-3 sm:space-y-4 px-1 sm:px-0" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 mb-1 text-sm sm:text-base">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-3 md:py-3.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 border border-gray-700 text-white text-sm sm:text-base"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm sm:text-base">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-3 md:py-3.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 border border-gray-700 text-white text-sm sm:text-base"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm sm:text-base">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-3 md:py-3.5 rounded-md h-24 sm:h-28 md:h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 border border-gray-700 text-white text-sm sm:text-base resize-none"
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base font-medium w-full md:w-auto disabled:bg-blue-700 disabled:opacity-70 mt-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3 flex justify-center items-center">
            <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 mt-4 md:mt-0">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/clock.webm" type="video/webm" />
                <source src="/clock.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;