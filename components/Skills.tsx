import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMaterialui,
  SiTailwindcss,
  SiJava,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiDocker,
  SiHeroku,
  SiAmazonaws,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiFigma,
  SiAdobephotoshop,
  SiPostman,
  SiJirasoftware,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

// Reusable title
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
  </h2>
);

// Skill Category Card
const SkillCategory: React.FC<{ title: string; skills: { name: string; icon: JSX.Element }[] }> = ({ title, skills }) => (
  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-[#d6044a]/30 shadow-lg shadow-[#b0033d]/20 transition-all duration-300 hover:border-[#d6044a] hover:shadow-[#c30342]/30">
    <h3 className="text-xl font-semibold text-[#e13b78] mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="flex items-center gap-2 bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-white/10 transition-all duration-300 hover:bg-[#d6044a]/70 hover:text-white hover:scale-105"
        >
          {skill.icon}
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

// Skills Data with Icons
const skillsData = {
  frontend: [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'Material UI', icon: <SiMaterialui /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Responsive Design', icon: <SiCss3 /> },
  ],
  backend: [
    { name: 'Java', icon: <SiJava /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'REST APIs', icon: <SiJsonwebtokens /> },
    { name: 'JWT Authentication', icon: <SiJsonwebtokens /> },
    { name: 'Microservices', icon: <SiMicroservices /> },
  ],
  database: [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Firebase (basic)', icon: <SiFirebase /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
  ],
  cloud: [
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Heroku', icon: <SiHeroku /> },
    { name: 'AWS (basic)', icon: <SiAmazonaws /> },
  ],
  design: [
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Android Studio', icon: <SiAndroidstudio /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop /> },
    { name: 'Agile/Scrum', icon: <SiJirasoftware /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'VS Code', icon: <SiVisualstudiocode /> },
  ],
};

// Main Skills Section
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
        <SkillCategory title="Design / Tools" skills={skillsData.design} />
      </div>
    </section>
  );
};

export default Skills;
