import React from 'react';
import { MailIcon, PhoneIcon, LocationIcon } from './icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
    </h2>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24">
            <div className="text-center mb-12">
                <SectionTitle>Get In Touch</SectionTitle>
                <p className="max-w-2xl mx-auto text-gray-400 mt-4">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <a href="mailto:vijayasankar2225@gmail.com" className="flex items-center space-x-4 group">
                    <div className="p-3 bg-[#d6044a]/10 backdrop-blur-sm rounded-full border border-[#d6044a]/30 group-hover:bg-[#d6044a]/20 transition-all duration-300">
                        <MailIcon className="w-6 h-6 text-[#e13b78]" />
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-[#e13b78] transition-colors duration-300">vijayasankar2225@gmail.com</span>
                </a>
                <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-[#d6044a]/10 backdrop-blur-sm rounded-full border border-[#d6044a]/30 group-hover:bg-[#d6044a]/20 transition-all duration-300">
                        <PhoneIcon className="w-6 h-6 text-[#e13b78]" />
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-[#e13b78] transition-colors duration-300">+91 9342898476</span>
                </div>
                 <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-[#d6044a]/10 backdrop-blur-sm rounded-full border border-[#d6044a]/30 group-hover:bg-[#d6044a]/20 transition-all duration-300">
                        <LocationIcon className="w-6 h-6 text-[#e13b78]" />
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-[#e13b78] transition-colors duration-300">Puducherry, India</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;