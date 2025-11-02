import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
  </h2>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="text-center">
        <SectionTitle>Profile</SectionTitle>
      </div>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-300 leading-relaxed">
        Passionate and results-driven Computer Science and Engineering student with strong interests in app
        development and data analysis. Skilled in programming languages, data-driven problem solving, office
        applications, and design tools, with a proven ability to adapt and learn quickly. Dedicated to applying
        technical expertise and analytical skills to contribute to the growth of innovative organizations while
        continuously expanding knowledge and capabilities.
      </p>
    </section>
  );
};

export default About;