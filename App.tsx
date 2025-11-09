import React, { useRef, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';



// ✨ Animations
const styles = `
@keyframes pulseGlow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.08); }
}

@keyframes auroraFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

const App: React.FC = () => {
  const appRef = useRef<HTMLDivElement>(null);

  // Initialize tsparticles engine
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);

    const handleMouseMove = (e: MouseEvent) => {
      if (appRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        appRef.current.style.setProperty('--mouse-x', `${x}%`);
        appRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div ref={appRef} className="min-h-screen relative text-gray-200 font-sans overflow-x-hidden">

      {/* 🧊 Animated Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed inset-0 -z-40"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: ['#ff0066', '#00ccff', '#ffffff'] },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
            links: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.2,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 2 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* 🖼️ Background Image Layer */}
      <div
        className="fixed inset-0 -z-30 bg-center bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/image.jpg')`,
          filter: 'blur(8px) brightness(0.6)',
          transform: 'scale(1.1)',
        }}
      />

      {/* 🌈 Aurora Gradient Background */}
      <div
        className="fixed inset-0 -z-20 opacity-60"
        style={{
          background:
            'linear-gradient(120deg, rgba(255,0,102,0.4), rgba(0,204,255,0.4), rgba(255,255,255,0.1))',
          backgroundSize: '300% 300%',
          animation: 'auroraFlow 20s ease-in-out infinite',
          mixBlendMode: 'overlay',
          filter: 'blur(60px)',
        }}
      />

      {/* 🌌 Radial Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(214,4,74,0.1),rgba(0,0,0,0.9))]" />

      {/* 💡 Dynamic Mouse Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
        style={{
          background: `radial-gradient(1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(214,4,74,0.3), transparent 40%)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* ⚡ Left Lens Flare — Half Visible */}
      <div
        className="pointer-events-none fixed top-0 h-full z-0"
        style={{
          left: '-40%',
          width: '50vw',
          background:
            'radial-gradient(ellipse 80% 100% at right center, rgba(255,0,102,0.55) 0%, rgba(255,0,102,0.25) 40%, transparent 75%)',
          mixBlendMode: 'screen',
          filter: 'blur(140px)',
          animation: 'pulseGlow 6s ease-in-out infinite',
        }}
      />

      {/* ⚡ Right Lens Flare — Half Visible */}
      <div
        className="pointer-events-none fixed top-0 h-full z-0"
        style={{
          right: '-40%',
          width: '50vw',
          background:
            'radial-gradient(ellipse 80% 100% at left center, rgba(160,0,255,0.55) 0%, rgba(153, 0, 255, 0.25) 40%, transparent 75%)',
          mixBlendMode: 'screen',
          filter: 'blur(140px)',
          animation: 'pulseGlow 6s ease-in-out infinite',
        }}
      />

      {/* 🧠 Main Content */}
      <div className="relative z-10 p-8">
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <section className="-mt-12 md:-mt-20 lg:-mt-34 transition-all duration-500">
            <Hero />
          </section>

          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
