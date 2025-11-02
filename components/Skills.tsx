import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
  </h2>
);

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-[#d6044a]/30 shadow-lg shadow-[#b0033d]/20 transition-all duration-300 hover:border-[#d6044a] hover:shadow-[#c30342]/30">
    <h3 className="text-xl font-semibold text-[#e13b78] mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-white/10 transition-all duration-300 hover:bg-[#d6044a]/70 hover:text-white hover:scale-105">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const skillsData = {
  frontend: ["JavaScript", "React", "HTML", "CSS", "Bootstrap", "Responsive Design", "Material UI", "Tailwind CSS"],
  backend: ["Java", "Spring Boot", "Node.js", "REST APIs", "Express.js", "JWT Authentication", "Microservices"],
  database: ["MySQL", "MongoDB", "Firebase (basic)", "PostgreSQL"],
  cloud: ["Firebase (basic)", "Docker", "Heroku", "AWS (basic)"],
  design: ["Git/GitHub", "Android Studio", "Figma", "Adobe Photoshop", "Agile/Scrum", "Postman", "VS Code"],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-8">
        <SectionTitle>Technical Skills</SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory title="Frontend" skills={skillsData.frontend} />
        <SkillCategory title="Backend" skills={skillsData.backend} />
        <SkillCategory title="Database" skills={skillsData.database} />
        <SkillCategory title="Cloud & Deployment" skills={skillsData.cloud} />
        <SkillCategory title="Design/Other" skills={skillsData.design} />
      </div>
    </section>
  );
};

export default Skills;