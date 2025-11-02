import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg shadow-[#d6044a]/10' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#hero" className="text-3xl font-bold text-white hover:text-[#d6044a] transition-colors duration-300">
          {'<VS>'}
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#d6044a] font-medium transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d6044a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        {/* Mobile menu could be added here if needed */}
      </nav>
    </header>
  );
};

export default Header;