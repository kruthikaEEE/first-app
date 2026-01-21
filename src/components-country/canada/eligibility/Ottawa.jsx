import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, Library, Languages
} from 'lucide-react';

const Ottawa = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax and Scroll Effects
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Track mouse for parallax depth
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const sections = [
    {
      title: "Academic Eligibility",
      icon: <Library className="text-stone-700" />,
      content: [
        { label: "Undergraduate", detail: "Minimum 75%–85%+ average (varies significantly by faculty)." },
        { label: "Bilingualism", detail: "Programs available in English, French, or both (French Immersion)." },
        { label: "Graduate Programs", detail: "70% (B) average in the final two years of undergraduate study." }
      ]
    },
    {
      title: "Language Proficiency",
      icon: <Languages className="text-amber-600" />,
      content: [
        { label: "IELTS / TOEFL", detail: "6.5+ (no band < 6.0) / 86+ (Writing 22+ recommended)." },
        { label: "DALF / DELF", detail: "Level B2 or C1 required for French-language programs." },
        { label: "Exemptions", detail: "3+ years of study in an English or French speaking country." }
      ]
    }
  ];

  const stats = [
    { icon: <TrendingUp />, label: "CO-OP Ranking", value: "Top 5", color: "bg-stone-800" },
    { icon: <Users />, label: "International", value: "26%", color: "bg-amber-700" },
    { icon: <Award />, label: "Research Growth", value: "#1", color: "bg-stone-600" },
    { icon: <Globe2 />, label: "Bilingual Scale", value: "World's Largest", color: "bg-stone-900" }
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-stone-500/10 dark:bg-stone-900/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-amber-500/10 dark:bg-amber-900/10 rounded-full blur-3xl"
        />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.div style={{ opacity, scale }} className="relative h-[100vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <img 
            src="/assets/colleges/ottawa.jpg" 
            alt="University of Ottawa" 
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-stone-950/75 via-stone-900/40 to-stone-50 dark:to-stone-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/50 via-transparent to-amber-900/20 opacity-70" />
          
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0], x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute w-2 h-2 bg-amber-200 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="relative">
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(120, 113, 108, 0.3)", "0 0 40px rgba(217, 119, 6, 0.4)", "0 0 20px rgba(120, 113, 108, 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-amber-300" />
              Defy the Conventional
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">uOttawa</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">The Heart of Canada’s Capital</p>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-stone-900 transition-all shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-1 transition-transform" /> 
            <span className="relative z-10">Back to Universities</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }} className="bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-xl relative overflow-hidden group">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-stone-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div variants={itemVariants} className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-stone-100 dark:border-stone-800 shadow-2xl relative overflow-hidden group">
                <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent skew-x-12" />
                
                <motion.div variants={floatVariants} animate="animate" className="w-16 h-16 bg-gradient-to-br from-stone-800 to-stone-950 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative">
                  <Landmark size={32} className="text-amber-500 relative z-10" />
                </motion.div>
                
                <h1 className="text-4xl font-black text-stone-900 dark:text-white mb-2 leading-tight">Univ. of <span className="text-stone-700 italic block">Ottawa</span></h1>
                <p className="text-stone-500 dark:text-stone-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-amber-500 fill-amber-500" />
                  Public Research • Ottawa, ON
                </p>
                
                <div className="space-y-4 pt-6 border-t border-stone-100 dark:border-stone-800">
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-stone-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-stone-800 transition-colors">
                      <Clock size={14} className="text-amber-600" /> Fall Intake
                    </span>
                    <span className="font-bold dark:text-white">June 1st</span>
                  </div>
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-stone-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-stone-800 transition-colors">
                      <Clock size={14} className="text-amber-600" /> Scholarship Dl
                    </span>
                    <span className="font-bold dark:text-white">Feb 1st</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 opacity-20" style={{ background: "conic-gradient(from 0deg, transparent, rgba(217, 119, 6, 0.3), transparent)" }} />
                <Lightbulb className="mb-4 text-amber-400" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "Located steps from Parliament Hill, uOttawa offers unparalleled access to federal agencies, research labs, and policy makers."
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8, rotateY: 2 }} className="bg-white dark:bg-stone-900 p-8 rounded-[2.5rem] border border-stone-50 dark:border-stone-800 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-500/0 via-amber-500/0 to-stone-500/0 group-hover:from-stone-500/5 group-hover:via-amber-500/5 group-hover:to-stone-500/5 transition-all duration-500" />
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} className="p-3 bg-stone-50 dark:bg-stone-800 rounded-2xl">{section.icon}</motion.div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="group/item">
                        <p className="text-[10px] font-black uppercase text-stone-400 tracking-tighter group-hover/item:text-amber-600 transition-colors flex items-center gap-2">
                          <Zap size={10} className="opacity-0 group-hover/item:opacity-100" /> {item.label}
                        </p>
                        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 leading-relaxed">{item.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="bg-stone-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-stone-800">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(217, 119, 6, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.2) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10"><FileText className="text-amber-400" /> Application Checklist</h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {["UOZone Student Portal", "Statement of Intent", "English/French Prof. Tests", "Digital Transcripts", "Two Letters of Reference", "Resume / CV (Graduate)"].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 10, scale: 1.02 }} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all group">
                    <CheckCircle2 size={18} className="text-amber-400 group-hover:text-stone-300" />
                    <span className="font-bold text-sm text-stone-300 group-hover:text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-stone-900 p-10 rounded-[3rem] border border-stone-100 dark:border-stone-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-3xl"><Target className="text-stone-700" size={28} /></div>
                <h2 className="text-3xl font-black dark:text-white tracking-tight">The Ideal Candidate</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  {["Global Citizenship", "Bilingual Aptitude", "Civic Engagement", "Innovative Research Mindset"].map((rule, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-stone-800 group-hover:bg-amber-500" />
                      <span className="text-md font-bold text-stone-700 dark:text-stone-300 group-hover:text-stone-900">{rule}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-stone-800 via-stone-900 to-amber-950 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90 relative z-10">Financial Aid</p>
                  <h4 className="text-xl font-black mb-2 relative z-10 flex items-center gap-2"><Award size={24} /> Merit Scholarships</h4>
                  <p className="text-sm font-medium leading-relaxed relative z-10">
                    Automatic admission scholarships up to $4,000 for averages 90%+. French-language bursaries available for international students.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-stone-800 via-stone-950 to-stone-800 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl overflow-hidden"
              >
                <motion.span initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }} className="absolute inset-0 bg-gradient-to-r from-stone-700 via-amber-700 to-stone-700" />
                <span className="relative z-10 flex items-center gap-2"><Sparkles size={18} /> Apply to uOttawa</span>
              </motion.button>
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="text-stone-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-stone-600" /> 2026 Academic Cycle Now Open
              </motion.p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Ottawa;