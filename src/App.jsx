import React, { useState } from 'react';
import { Menu, X, Scissors, Sparkles, Smartphone, ArrowRight, ExternalLink, CheckCircle, BookOpen, Briefcase, ShoppingBag } from 'lucide-react';

// --- CUSTOM ICONS ---
const BarberPole = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="10" height="20" x="7" y="2" rx="2" />
    <path d="m7 7 10-5" />
    <path d="m7 12 10-5" />
    <path d="m7 17 10-5" />
    <path d="m7 22 10-5" />
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- BUSINESS LOGIC ---
  const LINKS = {
    booking: "https://www.vagaro.com/cl/5pbq7wZzdhntY0fpH~P3eEZMbvZVP8Oy5f~MRiDXd9o=",
    webApp: "https://www.lifestyleexamedge.com",
    store: "#store",
    // UPDATED: High-speed Vercel Blob URL
    videoDemo: "https://9ol2kar7xqxz22xi.public.blob.vercel-storage.com/app-demo.mp4"
  };

  // --- STORE PRODUCTS DATA ---
  const PRODUCTS = [
    {
      id: 'cosmo-kit',
      name: 'WA Cosmo Consumables Kit',
      price: '$69.99',
      badge: 'D.L. Roope Compliant',
      features: ['EPA Disinfecting Wipes (No Spray)', 'Simulated Color & Relaxer', 'Blood Spill & First Aid', 'Pre-Labeled Compliance Bags'],
      link: '#',
    },
    {
      id: 'barber-kit',
      name: 'WA Barber 1 (No Chem) Kit',
      price: '$59.99',
      badge: '100% Verified 2026',
      features: ['Shave & Fade Supplies', 'EPA Disinfecting Wipes', 'Pre-Labeled Steam Towel Bags', 'Zero Chemical Supplies (Compliance)'],
      link: '#',
    }
  ];

  return (
    <div className="min-h-screen bg-midnight text-white font-sans selection:bg-gold-glow/30 overflow-x-hidden">

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-barber-glow/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cosmo-glow/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-midnight/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter text-white">
            LifeStyle<span className="text-gold-glow">.</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest">Services</a>
            <a href="#app" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest">State Board</a>
            <a href="#store" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest">Shop</a>
            <a href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest">About</a>
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
            >
              Book Now <ExternalLink size={14} />
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white/80">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-midnight/95 backdrop-blur-xl border-b border-white/10 p-6 space-y-4 shadow-2xl">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-white/80">Services</a>
            <a href="#app" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-white/80">State Board App</a>
            <a href="#store" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-white/80">Shop Merch</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-white/80">About</a>
            <a href={LINKS.booking} target="_blank" className="block text-lg font-bold text-gold-glow">Book Now &rarr;</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT CONTENT */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-float">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-glow">Passion</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-glow">Discipline</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-glow">Execution</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
              <span className="block text-2xl lg:text-4xl italic font-normal text-white/50 mb-2">
                Envision your destiny.
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                Cut Your Own Path.
              </span>
            </h1>

            <p className="text-lg text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The complete ecosystem for the modern professional.
              We provide <span className="text-white">WA State Exam Prep</span>, fully compliant <span className="text-white">Practical Kits</span>, and private mentorship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={LINKS.webApp} target="_blank" className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-glow to-orange-400 text-black font-bold hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all">
                Start Exam Prep
              </a>
              <a href={LINKS.booking} target="_blank" className="glass-button px-8 py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 group">
                Book Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-xs font-medium text-white/40 uppercase tracking-wider">
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-gold-glow rounded-full"></div> Practical Kits</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-gold-glow rounded-full"></div> Exam Walkthroughs</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-gold-glow rounded-full"></div> Apparel & Inspo</span>
            </div>
          </div>

          {/* VISUAL HERO */}
          <div className="relative h-[700px] w-full hidden lg:flex items-end justify-center">
            <div className="absolute top-20 right-10 w-[400px] h-[500px] bg-white/5 rounded-[3rem] rotate-6 border border-white/10 backdrop-blur-sm z-0" />
            <div className="absolute top-10 right-20 w-[400px] h-[500px] bg-white/5 rounded-[3rem] -rotate-3 border border-white/10 backdrop-blur-sm z-0" />

            <img
              src="/images/hero-cutout.png"
              alt="Master Barber"
              className="relative z-10 w-auto h-[90%] object-contain hero-glow hover:scale-105 transition-transform duration-700 ease-out origin-bottom"
            />

            <div className="absolute bottom-24 -left-4 p-4 glass-panel rounded-2xl flex items-center gap-4 max-w-xs z-20 animate-float bg-midnight/80">
              <div className="bg-gold-glow/20 p-3 rounded-xl text-gold-glow">
                <Scissors size={24} />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Washington State</p>
                <p className="font-bold text-white">Licensed & Fully Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-serif mb-4">The Ecosystem</h2>
            <p className="text-white/50">Professional grooming services and state-of-the-art educational tools.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 hover:border-barber-glow/50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/90 z-10" />
              <img src="/images/barber-service.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Barber Station" />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
                <div className="w-14 h-14 rounded-2xl bg-barber-glow/20 backdrop-blur-md flex items-center justify-center mb-6 text-barber-glow">
                  <Scissors size={28} />
                </div>
                <h3 className="text-4xl font-serif mb-2 group-hover:text-barber-glow transition-colors">Barber Studio</h3>
                <p className="text-white/70 mb-4 max-w-sm">Precision cuts at Capital Barbershop. Bookings handled via Vagaro.</p>
                <a href={LINKS.booking} target="_blank" className="w-full py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-barber-glow hover:text-white transition-colors flex justify-center items-center gap-2">
                  Book with Michael <ExternalLink size={16}/>
                </a>
                <p className="mt-3 text-[10px] text-white/50 uppercase tracking-widest text-center">
                  Select <span className="text-gold-glow font-bold">Michael</span> if prompted
                </p>
              </div>
            </div>

            <div className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 hover:border-cosmo-glow/50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/90 z-10" />
              <img src="/images/app-card.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="State Board App" />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
                <div className="w-14 h-14 rounded-2xl bg-cosmo-glow/20 backdrop-blur-md flex items-center justify-center mb-6 text-cosmo-glow">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-4xl font-serif mb-2 group-hover:text-cosmo-glow transition-colors">State Board Pro</h3>
                <p className="text-white/70 mb-8 max-w-sm">The #1 practical & written exam tool for Washington State.</p>
                <a href={LINKS.webApp} target="_blank" className="w-full py-4 rounded-xl glass-button text-center font-bold hover:bg-cosmo-glow/20">
                  Launch Web App (Free Beta)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- APP SHOWCASE --- */}
      <section id="app" className="relative py-32 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto glass-panel rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-16 items-start relative z-10">
            <div>
              <div className="inline-block px-4 py-1 rounded-full border border-gold-glow/30 bg-gold-glow/10 text-gold-glow text-xs font-bold uppercase tracking-widest mb-6">
                Open Beta Live
              </div>
              <h2 className="text-5xl font-serif mb-6">State Board Pro.</h2>
              <p className="text-lg text-white/60 mb-10">
                The only all-in-one platform engineered specifically for Washington State licensure. Two powerful tools, one app.
              </p>

              <div className="space-y-6">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cosmo-glow/20 rounded-lg text-cosmo-glow">
                      <BookOpen size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Written Exam Suite</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "1,000+ Flashcards per discipline",
                      "Adaptive Quiz Logic (Targets weak spots)",
                      "WA State Weighted Exam Simulator",
                      "Readiness Meter & Streak Tracking"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-barber-glow/20 rounded-lg text-barber-glow">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Practical Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Interactive Kit Checker",
                      "Proctor Script Reader with Timer",
                      "Universal Label Printer",
                      "Step-by-Step Service Guides",
                      "AI Study Buddy"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <a href={LINKS.webApp} target="_blank" className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform inline-flex items-center gap-2">
                  Start Studying Free <ArrowRight size={16}/>
                </a>
              </div>
            </div>

            {/* Right: Video Phone with UPDATED URL */}
            <div className="relative group cursor-pointer flex justify-center md:sticky md:top-24">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-glow/20 to-cosmo-glow/20 blur-[60px] animate-pulse" />
              <div className="relative w-[300px] h-[600px] bg-black border-[8px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden z-10">
                <div className="absolute top-0 w-full h-8 bg-black z-20 flex justify-center">
                  <div className="w-32 h-6 bg-black rounded-b-xl" />
                </div>
                {/* VIDEO PLAYER - NOW USING VERCEL BLOB */}
                <video
                  src={LINKS.videoDemo}
                  className="w-full h-full object-cover"
                  autoPlay loop muted playsInline
                  poster="/images/app-card.png"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                   <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT FOUNDER --- */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 h-[600px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent z-10" />
            <img
              src="/images/founder-standing.jpg"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="The Architect"
            />
            <div className="absolute bottom-8 left-8 z-20">
               <h3 className="text-3xl font-serif text-white">Michael</h3>
               <p className="text-gold-glow uppercase tracking-widest text-xs font-bold">Founder & Architect</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
              <BarberPole className="text-gold-glow w-8 h-8" />
            </div>
            <div>
              <h2 className="text-5xl font-serif mb-6 leading-tight">
                Built from experience. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Designed for your future.</span>
              </h2>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                <p>
                  I've spent years in this industry, facing the same doubts and obstacles that everyone else does. I learned quickly that success isn't given—it's engineered through discipline and real work.
                </p>
                <p>
                  I didn't outsource this vision. I sat down and did the work—funding it myself and coding it myself—because I wanted to build tools that actually solve the problems we face in this business.
                </p>
                <p>
                  LifeStyle Beauty is the result of that focus. These aren't just products; they are a blueprint to help you execute your own vision faster and more effectively than I did.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-serif text-white">100%</span>
                  <span className="text-xs uppercase tracking-widest text-white/40">Self Funded</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif text-white">100%</span>
                  <span className="text-xs uppercase tracking-widest text-white/40">Real Experience</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STORE --- */}
      <section id="store" className="relative py-32 px-4 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-store-glow/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full border border-store-glow/30 bg-store-glow/10 text-store-glow text-xs font-bold uppercase tracking-widest mb-6">
              Verified 2026 Compliance
            </div>
            <h2 className="text-5xl font-serif mb-4">The Practical Kits.</h2>
            <p className="text-white/60">D.L. Roope & NIC Compliant. No banned items. No spray disinfectants.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="glass-panel p-8 rounded-3xl relative group hover:border-store-glow/30 transition-colors">
                <div className="absolute top-6 right-6 text-store-glow">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-3xl font-serif text-gold-glow mb-6">{product.price}</p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-store-glow" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-store-glow hover:text-white transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag size={18} /> Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
                <img src="/images/BlindFaith1.png" className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" alt="Merch" />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-4xl font-serif mb-4">Blind Faith Collection</h3>
              <p className="text-white/60 mb-8 text-lg">"Forged in the Dark." The official streetwear of the LifeStyle Architect.</p>
              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors font-bold">
                Shop Apparel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-white/30 text-sm border-t border-white/5 mt-12">
        <p>&copy; 2026 LifeStyle Beauty LLC. Crafted in Walla Walla.</p>
      </footer>

    </div>
  );
};

export default App;