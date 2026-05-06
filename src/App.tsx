import { useState, useRef } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Map, Clock, Heart, Coffee, Utensils, UtensilsCrossed, CheckCircle2, Navigation, Star, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function App() {
  const WHATSAPP_NUMBER = "+12097075801";
  const PHONE_NUMBER = "+12097075801";
  const EMAIL = "besitosfinecuisine@gmail.com";
  const MAPS_LINK = "https://maps.app.goo.gl/YHP2yyyJuFZHZVEQ6";
  const ADDRESS = "216 W Yosemite Ave, Manteca, CA 95336";

  const handleCall = () => window.open(`tel:${PHONE_NUMBER}`, '_self');
  const handleWhatsApp = () => window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`, '_blank');
  const handleEmail = () => window.open(`mailto:${EMAIL}`, '_self');
  const handleDirections = () => window.open(MAPS_LINK, '_blank');

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Framer Motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-ink-950 text-paper selection:bg-gold-400 selection:text-ink-950 font-sans relative overflow-x-hidden">
      
      {/* OVERLAY ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none noise-bg z-[100]"></div>
      <div className="fixed top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent z-[100]"></div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 inset-x-0 z-50 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-28 flex items-center justify-between">
          <div className="serif text-2xl tracking-[0.25em] font-medium text-white">
            BESITOS
          </div>
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/70">
               <a href="#about" className="hover:text-white transition-colors">About</a>
               <a href="#menu" className="hover:text-white transition-colors">Menu</a>
               <a href="#visit" className="hover:text-white transition-colors">Visit</a>
            </div>
          </div>
          <button onClick={handleCall} className="border border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500">
            Reservation
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ink-950/30 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-ink-950/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop" 
            alt="Interior" 
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 text-center flex flex-col items-center mt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
               <span className="w-8 h-px bg-gold-400"></span>
               <span className="text-gold-400 uppercase tracking-[0.3em] text-[10px] font-medium">Fine Cuisine • Manteca</span>
               <span className="w-8 h-px bg-gold-400"></span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="serif text-5xl md:text-8xl lg:text-[11rem] leading-[0.8] tracking-tighter mb-8 font-light text-white">
              BESITOS<br/>
              <span className="italic font-light text-gold-300">Cuisine</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="max-w-xl text-white/60 font-light text-sm md:text-base leading-relaxed tracking-wide mb-12 mix-blend-difference">
              An inclusive gastronomic experience. We redefine comfort food with genuine hospitality, local specialties, and an atmosphere that feels like home.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6">
              <button onClick={handleDirections} className="bg-gold-400 text-ink-950 px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold-300 transition-colors flex items-center justify-center gap-3">
                Plan Your Visit <ArrowUpRight size={14} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY - ASYMMETRICAL */}
      <section id="about" className="py-32 md:py-48 relative">
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
         <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1 }}
               >
                 <h2 className="serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-10">
                   A Sanctuary of <br/><span className="italic text-gold-400 border-b border-gold-400/30 pb-2">Excellence</span>
                 </h2>
                 <p className="text-paper/60 font-light text-lg mb-10 leading-relaxed max-w-lg">
                   Besitos Fine Cuisine was founded on the belief that excellent food should be paired with an atmosphere where everyone feels completely at home. 
                 </p>
                 <ul className="space-y-6">
                   {[
                     "Certified safe space for the LGBTQ+ and transgender community.",
                     "Fully wheelchair-accessible across all facilities.",
                     "Family, group, and dog-friendly environments."
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-5 group">
                       <div className="mt-1 w-6 h-6 rounded-full border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 transition-colors shrink-0">
                         <CheckCircle2 className="text-gold-400" size={12} strokeWidth={3} />
                       </div>
                       <span className="text-paper/80 font-light text-sm leading-relaxed">{item}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>

               <div className="relative h-[600px] lg:h-[800px] w-full rounded-[2rem] overflow-hidden group">
                 <div className="absolute inset-0 bg-ink-900/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                 <motion.img 
                   initial={{ scale: 1.1 }}
                   whileInView={{ scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                   alt="Plated dish"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-8 left-8 right-8 glass-panel p-8 rounded-3xl z-20 shadow-2xl">
                   <p className="serif italic text-2xl text-gold-300 mb-2">"Genuinely extraordinary."</p>
                   <p className="text-[10px] uppercase tracking-[0.2em] text-paper/60">A culinary journey.</p>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* SERVICES BENTO GRID */}
      <section id="menu" className="py-32 bg-ink-900 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10"
          >
            <div>
              <p className="text-gold-400 uppercase tracking-[0.2em] text-[10px] font-semibold mb-4">Our Offerings</p>
              <h2 className="serif text-5xl md:text-7xl font-light">
                Curated <span className="italic text-gold-400">Experiences</span>
              </h2>
            </div>
            <p className="max-w-xs text-paper/50 text-sm font-light leading-relaxed">
               Whether you're here for a quick premium coffee or a lingering family brunch, we deliver exceptional quality without the pretense.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="md:col-span-2 glass-panel border border-white/5 bg-ink-950/40 p-10 md:p-14 rounded-[2rem] hover:border-gold-400/20 transition-all duration-700 group flex items-end min-h-[400px] relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dining" />
              </div>
              <div className="relative z-10 w-full flex justify-between items-end">
                <div>
                  <div className="w-14 h-14 rounded-full border border-gold-400/30 text-gold-400 flex items-center justify-center mb-8 bg-ink-950/50 backdrop-blur-md">
                    <UtensilsCrossed size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="serif text-4xl mb-4">Dining & Service</h3>
                  <p className="text-paper/60 font-light leading-relaxed max-w-md">Full-service dining for breakfast, brunch, and lunch. Outdoor seating, expert catering, and fast takeaway.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="glass-panel border border-white/5 bg-ink-950/40 p-10 md:p-12 rounded-[2rem] hover:border-gold-400/20 transition-all duration-700 flex flex-col justify-end min-h-[400px]"
            >
              <div className="w-14 h-14 rounded-full border border-gold-400/30 text-gold-400 flex items-center justify-center mb-8">
                <Coffee size={20} strokeWidth={1.5} />
              </div>
              <h3 className="serif text-3xl mb-4">Premium Selection</h3>
              <p className="text-paper/60 font-light leading-relaxed text-sm">Small plates, premium coffee, curated alcohol, and exquisite comfort food tailored for all diets.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="glass-panel border border-white/5 bg-ink-950/40 p-10 md:p-12 rounded-[2rem] hover:border-gold-400/20 transition-all duration-700 flex flex-col justify-end min-h-[400px]"
            >
              <div className="w-14 h-14 rounded-full border border-gold-400/30 text-gold-400 flex items-center justify-center mb-8">
                <Heart size={20} strokeWidth={1.5} />
              </div>
              <h3 className="serif text-3xl mb-4">Safe & Cozy</h3>
              <p className="text-paper/60 font-light leading-relaxed text-sm">A certified safe space. Cozy up by the fireplace in our trendy, dog-friendly environment.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="md:col-span-2 glass-panel border border-white/5 bg-ink-950/40 p-10 md:p-14 rounded-[2rem] hover:border-gold-400/20 transition-all duration-700 flex items-center gap-10"
            >
               <h3 className="serif text-3xl md:text-5xl italic font-light text-gold-300">"A standard of excellence in every dish."</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 text-center">
            <h2 className="serif text-5xl md:text-7xl font-light mb-6">Visual <span className="italic text-gold-400">Atmosphere</span></h2>
            <div className="w-px h-16 bg-gradient-to-b from-gold-400 to-transparent mx-auto"></div>
        </div>
        
        <div className="flex gap-6 px-6 md:px-12 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
           {[
             "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1000&auto=format&fit=crop",
             "https://images.unsplash.com/photo-1550966871-3ed3cdb1edd1?q=80&w=1000&auto=format&fit=crop",
             "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop",
             "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1000&auto=format&fit=crop",
             "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
           ].map((src, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: i * 0.1, duration: 0.8 }}
               className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] aspect-[4/5] rounded-[2rem] overflow-hidden snap-center relative group"
             >
               <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-transparent transition-colors z-10 duration-700"></div>
               <img src={src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
             </motion.div>
           ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-ink-900 relative">
        <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-gold-600/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-gold-400 uppercase tracking-[0.2em] text-[10px] font-semibold mb-6">Testimonials</span>
            <h2 className="serif text-5xl md:text-6xl font-light">Voices of our <br/><span className="italic text-gold-400">Community</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The brunch menu here is absolutely unmatched in Manteca. The cozy atmosphere and genuinely inclusive environment make every visit feel like coming home.", name: "Sarah Jenkins", role: "Local Guide" },
              { text: "I love that I can bring my dog and still enjoy an upscale dining experience. The attention to detail in every dish is incredible.", name: "Michael T.", role: "Regular Guest" },
              { text: "A true hidden gem! Their premium coffee is the perfect way to start the weekend. Fast service but you never feel rushed.", name: "Elena Rodriguez", role: "First-time Visitor" }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="p-10 lg:p-12 glass-panel border border-white/5 rounded-[2rem] hover:border-gold-400/30 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex gap-2 mb-8 text-gold-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-paper/80 font-light mb-10 leading-relaxed text-sm lg:text-base">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center serif text-gold-400">{test.name[0]}</div>
                  <div>
                    <p className="font-medium tracking-[0.1em] uppercase text-[10px]">{test.name}</p>
                    <p className="text-paper/40 text-[10px] mt-1">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section id="visit" className="py-32 md:py-48 relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            <div>
              <div className="mb-20">
                <span className="text-gold-400 uppercase tracking-[0.2em] text-[10px] font-semibold mb-6 block">Location & Contact</span>
                <h2 className="serif text-5xl md:text-7xl font-light mb-6">Visit <span className="italic text-gold-400">Us</span></h2>
                <p className="text-paper/50 font-light">We accept Credit, Debit, and NFC payments.</p>
              </div>

              <div className="space-y-12">
                <div className="group flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold-400/50 transition-colors">
                    <MapPin size={22} className="text-gold-400" />
                  </div>
                  <div>
                    <h4 className="uppercase tracking-[0.2em] text-[10px] text-paper/40 mb-3 font-semibold">Location</h4>
                    <p className="text-xl font-light mb-4">{ADDRESS}</p>
                    <button onClick={handleDirections} className="text-[11px] text-gold-400 hover:text-gold-300 uppercase tracking-[0.1em] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Open in Google Maps <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="group flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold-400/50 transition-colors">
                    <Clock size={22} className="text-gold-400" />
                  </div>
                  <div className="w-full">
                    <h4 className="uppercase tracking-[0.2em] text-[10px] text-paper/40 mb-4 font-semibold">Hours</h4>
                    <div className="space-y-4 max-w-sm font-light text-sm">
                      <div className="flex justify-between border-b border-white/5 pb-3"><span>Monday</span> <span className="text-gold-400">5:00 PM – 6:30 PM</span></div>
                      <div className="flex justify-between border-b border-white/5 pb-3 text-paper/30"><span>Tuesday – Friday</span> <span>Closed</span></div>
                      <div className="flex justify-between border-b border-white/5 pb-3"><span>Saturday</span> <span className="text-gold-400">10:00 AM – 1:00 PM</span></div>
                      <div className="flex justify-between pb-3"><span>Sunday</span> <span className="text-gold-400">10:00 AM – 1:00 PM</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[500px] rounded-[2rem] overflow-hidden glass-panel border border-white/5 p-8 lg:p-12 flex items-center justify-center group shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center group-hover:opacity-20 transition-opacity duration-1000 grayscale"></div>
              <div className="absolute inset-0 bg-ink-950/80"></div>
              
              <div className="relative z-10 w-full text-center">
                <div className="w-20 h-20 bg-gold-400/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold-400/20 group-hover:scale-110 transition-transform duration-700">
                  <Phone size={24} className="text-gold-400" />
                </div>
                <h3 className="serif text-4xl mb-4 italic text-white">Get in Touch</h3>
                <p className="text-paper/50 mb-12 max-w-xs mx-auto font-light text-sm">Have a question or want to make a reservation for a large group?</p>
                
                <div className="flex flex-col gap-4 max-w-xs mx-auto">
                  <button onClick={handleCall} className="w-full border border-white/10 hover:border-gold-400 bg-ink-900/50 backdrop-blur-sm px-6 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 hover:bg-gold-400/5">
                    <Phone size={14} /> {PHONE_NUMBER}
                  </button>
                  <button onClick={handleWhatsApp} className="w-full border border-white/10 hover:border-gold-400 bg-ink-900/50 backdrop-blur-sm px-6 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 hover:bg-gold-400/5">
                    <MessageCircle size={14} /> WhatsApp
                  </button>
                  <button onClick={handleEmail} className="w-full border border-white/10 hover:border-gold-400 bg-ink-900/50 backdrop-blur-sm px-6 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 hover:bg-gold-400/5">
                    <Mail size={14} /> Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink-950 py-12 lg:py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] lg:h-[20vw] bg-gold-600/10 rounded-t-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
          <div className="serif text-6xl md:text-8xl tracking-[0.2em] font-medium text-white/5 mb-12 select-none">BESITOS</div>
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-paper/30">
            <p>© {new Date().getFullYear()} Besitos Fine Cuisine. A Taste of Home.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
