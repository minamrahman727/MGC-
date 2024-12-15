import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 px-4 text-center sm:px-8">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl lg:text-5xl">
          Contact <span className='text-blue-500'>Us</span> 
        </h2>
        <p className="mt-2 text-base text-gray-600 sm:text-lg lg:text-xl">
          We’d love to hear from you! Reach out for inquiries or support.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex flex-col items-start'>
            <p className="text-gray-600 mb-2">L-352 sector 4 N.karachi</p>
            <p className="text-blue-600 mb-2">
              <a href="tel:+923336928926">(92) 336-928926 </a>
            </p>
            <p className="text-blue-600 mb-2">
              <a href="mailto:info.mgckarachi@gmail.com">info@mgckarachi.com</a>
            </p>
            <p className="text-gray-600 mb-2">Working Hours:</p>
            <ul className="text-gray-800 items-start text-justify" >
                <li>Monday: 9am - 5pm</li>
                <li>Tuesday: 9am - pm</li>
                <li>Wednesday: 9am - 5pm</li>
                <li>Thursday: 9am - 5pm</li>
                <li>Friday: 4pm - 8pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: closed</li>
            
            </ul>
          </div>
          <div className="relative h-full w-full">
            <iframe
              className="absolute inset-0 rounded-2xl hover:shadow-lg hover:shadow-black"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14275.692181740942!2d67.0583741!3d24.999896349999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341d63ff87e0d%3A0xc5ac7ebfc1c79dbe!2sminam%20web%20development%20center!5e1!3m2!1sen!2s!4v1734154266724!5m2!1sen!2s"
              width="120%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
