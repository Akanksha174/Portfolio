import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">GET IN TOUCH</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>

          {/* Using mailto form submission (basic, not recommended for production) */}
          <form
            action="mailto:akankshakumari4755@gmail.com"
            method="POST"
            encType="text/plain"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-6 h-6 mx-auto mb-2" />
              <a href="tel:+918434675911" className="text-gray-600 hover:underline">
                +91 8434675911
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-6 h-6 mx-auto mb-2" />
              <a href="mailto:akankshakumari4755@gmail.com" className="text-gray-600 hover:underline">
                akankshakumari4755@gmail.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <p className="text-gray-600">Bihar, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
