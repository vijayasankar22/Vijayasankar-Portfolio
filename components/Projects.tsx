import React from 'react';
import { ExternalLinkIcon, GithubIcon } from './icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
  </h2>
);

const ProjectCard: React.FC<{ title: string; description: string; tech: string[]; }> = ({ title, description, tech }) => (
  <div className="group relative bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-[#d6044a]/30 shadow-lg shadow-[#b0033d]/20 overflow-hidden transition-all duration-500 hover:shadow-[#FF007F]/30 hover:border-[#FF007F] hover:-translate-y-2 hover:scale-[1.03]">
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#d6044a]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-150"></div>
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 my-4">
            {tech.map((item) => (
                <span key={item} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                    {item}
                </span>
            ))}
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-auto">
          <a href="#" className="text-gray-400 hover:text-[#FF007F] transition-colors duration-300" aria-label="Source Code">
            <GithubIcon />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#FF007F] transition-colors duration-300" aria-label="Live Demo">
            <ExternalLinkIcon />
          </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-8">
        <SectionTitle>Projects</SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ProjectCard
          title="E-Commerce Website"
          description="A responsive e-commerce website for an online gift store using HTML, CSS, and JavaScript. Implemented product listing, cart functionality, and order placement workflow, enhancing UI/UX with responsive layouts."
          tech={['HTML', 'CSS', 'JavaScript']}
        />
        <ProjectCard
          title="Self-Development Mobile App"
          description="A productivity-focused mobile application using Java and Android Studio. Integrated task management features to streamline daily activities, built using clean architecture principles for scalability."
          tech={['Java', 'Android Studio']}
        />
      </div>
    </section>
  );
};

export default Projects;
