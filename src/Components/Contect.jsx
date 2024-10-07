import React, { useState, useEffect } from 'react';
import { init, sendForm } from '@emailjs/browser';

function Contect() {
  const [formData, setFormData] = useState({
    from_name: '',
    email_id: '',
    contect_no: '',
    message: '',
  });
  const [btnText, setBtnText] = useState('Send Email');
  const [isMobile, setIsMobile] = useState(false);

  // Initialize EmailJS with your public key
  useEffect(() => {
    init('2RmuWPDWRE_d1132K');

    const handleResize = () => {
      setIsMobile(window.innerWidth < 560);
    };

    // Set the initial state based on the current window size
    handleResize();

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('Sending...');

    const serviceID = 'default_service'; // Your service ID
    const templateID = 'template_tr53gvh'; // Your template ID

    sendForm(serviceID, templateID, e.target)
      .then(() => {
        setBtnText('Send Email');
        alert('Sent!');
      }, (err) => {
        setBtnText('Send Email');
        alert(JSON.stringify(err));
      });
  };

  return (
    <section id="contact" className="bg-black py-16 flex items-center justify-center min-h-screen">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 w-screen min-h-[45vh] bg-blue-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14914.13462267956!2d73.31650937594844!3d20.850529848071158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be084c4ce468695%3A0x49855869f0b43e94!2sUnai%2C%20Gujarat%20396590%2C%20India!5e0!3m2!1sen!2sus!4v1728290786359!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
          {!isMobile && ( // Conditionally render the address info
            <div className="bg-black text-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="font-bold text-gray-dark">ADDRESS</h2>
                <p className="mt-1">Unai, Gujarat 396590, India</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-bold text-gray-dark">EMAIL</h2>
                <a href="mailto:your@email.com" className="text-teal-500 leading-relaxed">j2patel@email.com</a>
                <h2 className="font-bold text-gray-dark mt-4">PHONE</h2>
                <a href="tel:123-456-7890" className="leading-relaxed">+91 9106053831</a>
              </div>
            </div>
          )}
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-black text-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-teal-500 text-lg mb-2 font-medium">Get in Touch</h2>
          <p className="mb-5 text-gray-txt">Capture special moments with stunning photography! Contact us today for professional shooting services tailored to your needs. Let’s create beautiful memories!</p>
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div className="field">
              <label htmlFor="from_name" className="block text-sm font-medium text-white">From Name</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="mt-1 block w-full border  border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email_id" className="block text-sm font-medium text-white">Email ID</label>
              <input
                type="email"
                name="email_id"
                id="email_id"
                value={formData.email_id}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="contect_no" className="block text-sm font-medium text-white">Contact No</label>
              <input
                type="text"
                name="contect_no"
                id="contect_no"
                value={formData.contect_no}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <input
              type="submit"
              id="button"
              value={btnText}
              className="mt-4 w-full bg-green-300 border-white border-2 text-black font-bold py-2 rounded-md hover:bg-green-200 "
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contect;
