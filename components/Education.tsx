import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
    </h2>
);

const EducationItem: React.FC<{ degree: string; institution: string; period: string; location: string; }> = ({ degree, institution, period, location }) => (
    <div className="relative pl-8 sm:pl-12 py-4 group">
        {/* Vertical line */}
        <div className="absolute left-2 sm:left-4 top-0 h-full w-0.5 bg-[#b0033d]"></div>
        {/* Dot */}
        <div className="absolute left-0 sm:left-2 top-6 w-4 h-4 rounded-full bg-[#c30342] border-2 border-[#e13b78] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#d6044a]"></div>

        <div className="transition-transform duration-300 group-hover:translate-x-2">
            <p className="text-sm text-[#e13b78] mb-1">{period}</p>
            <h3 className="text-xl font-semibold text-white">{degree}</h3>
            <p className="text-gray-400">{institution}</p>
            <p className="text-gray-500 text-sm">{location}</p>
        </div>
    </div>
);


const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="text-center mb-8">
        <SectionTitle>Education</SectionTitle>
      </div>
      <div className="max-w-2xl mx-auto">
        <EducationItem
            degree="B.Tech - Computer Science and Engineering"
            institution="Sri Venkateshwara College of Engineering and Technology"
            period="2022 - Present"
            location="Puducherry"
        />
        <EducationItem
            degree="Higher Secondary Certificate (HSC)"
            institution="Achariya Siksha Mandir - CBSE"
            period="2021"
            location="Puducherry"
        />
        <EducationItem
            degree="Secondary School Certificate (SSC)"
            institution="Achariya Siksha Mandir - CBSE"
            period="2019"
            location="Puducherry"
        />
      </div>
    </section>
  );
};

export default Education;