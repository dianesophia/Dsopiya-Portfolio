import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [focusedField, setFocusedField] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qjv7hun', 'template_vh01sms', form.current, {
        publicKey: 'a5qj9L1MHqBixsbuL',
      })
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you soon.",
            icon: "success"
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Error",
            text: "Message failed to send. Please try again later.",
            icon: "error"
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Information */}
          <div className="space-y-8 flex flex-col flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-yellow-200/20 dark:border-gray-700/20 transform transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:dianefuentes2002@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                      dianefuentes2002@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-gray-200">Kinasang-an Pardo Cebu City</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-yellow-200/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Connect on Social
              </h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/dianesophiaaa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center hover:bg-yellow-200 dark:hover:bg-yellow-800/50 transition-colors duration-300">
                  Instagram
                </a>
                <a href="https://www.facebook.com/dianesophiaGF" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center hover:bg-yellow-200 dark:hover:bg-yellow-800/50 transition-colors duration-300">
                  Facebook
                </a>
                <a href="https://www.linkedin.com/in/diane-sophia-fuentes-2913b6232/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center hover:bg-yellow-200 dark:hover:bg-yellow-800/50 transition-colors duration-300">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-yellow-200/20 dark:border-gray-700/20 flex-1">
            <div className="space-y-6">
              <div className="relative">
                <label htmlFor="from_name" className={`block text-sm font-medium mb-2 ${focusedField === 'name' ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-700 dark:text-gray-300'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your name"
                />
              </div>

              <div className="relative">
                <label htmlFor="from_email" className={`block text-sm font-medium mb-2 ${focusedField === 'email' ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-700 dark:text-gray-300'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your email"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${focusedField === 'message' ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-700 dark:text-gray-300'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
