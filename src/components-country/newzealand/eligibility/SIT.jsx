import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, GraduationCap, Mountain, MapPin
} from 'lucide-react';

const SIT = () => {
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
    // DEBUG FIXED: Corrected event listener attachment
    window.addEventListener('mousemove', handleMouseMove);
    
    // DEBUG FIXED: Changed window.removeMouseMove to window.removeEventListener
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
      icon: <GraduationCap className="text-zinc-400" />,
      content: [
        { label: "Undergraduate", detail: "NCEA Level 3 or international equivalent (High School Year 12/13)." },
        { label: "Vocational Entry", detail: "Specific certificates may require relevant work experience or portfolios." },
        { label: "Postgraduate", detail: "Recognized Bachelor's degree with a B average in the relevant field." }
      ]
    },
    {
      title: "English Proficiency",
      icon: <Globe2 className="text-slate-400" />,
      content: [
        { label: "IELTS Academic", detail: "6.0 (no band < 5.5) for Degrees; 6.5 for Post-Graduate programs." },
        { label: "PTE / TOEFL", detail: "50+ (PTE) / 60-79+ (TOEFL iBT) depending on study level." },
        { label: "SIT English Test", detail: "Internal assessment options available for qualifying international students." }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Student Community", value: "13,000+", color: "bg-zinc-800" },
    { icon: <Mountain />, label: "Southern Spirit", value: "#1", color: "bg-slate-700" },
    { icon: <TrendingUp />, label: "Employment Rate", value: "88%+", color: "bg-neutral-800" },
    { icon: <Award />, label: "NZQA Rating", value: "Cat 1", color: "bg-zinc-900" }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-zinc-500/10 dark:bg-zinc-400/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-slate-500/10 dark:bg-slate-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.div style={{ opacity, scale }} className="relative h-[100vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <img 
            src="/assets/colleges/sit.jpg" 
            alt="Southern Institute of Technology" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-75"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-slate-900/40 to-zinc-50 dark:to-zinc-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-transparent to-slate-900/40 opacity-70" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(113, 113, 122, 0.3)", "0 0 40px rgba(113, 113, 122, 0.6)", "0 0 20px rgba(113, 113, 122, 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-zinc-300" />
              Work-Ready Education
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">SIT</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto uppercase tracking-widest">Te Pūkenga • Southland</p>
          </motion.div>
        </div>

        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-zinc-900 transition-all shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-1 transition-transform" /> 
            <span className="relative z-10">Back to Institutes</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }} className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden group">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-zinc-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Info Sections */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div variants={itemVariants} className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl relative overflow-hidden group">
                <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-zinc-100/30 to-transparent skew-x-12" />
                <motion.div variants={floatVariants} animate="animate" className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-950 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative border border-zinc-600">
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>
                <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-2 leading-tight">Southern <span className="text-zinc-600 italic block">Institute</span></h1>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-6 flex items-center gap-2">
                  <MapPin size={16} className="text-zinc-400" /> Invercargill, New Zealand
                </p>
                <div className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                      <Clock size={14} className="text-zinc-600" /> Semester 1
                    </span>
                    <span className="font-bold dark:text-white">February</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                      <Clock size={14} className="text-zinc-600" /> Semester 2
                    </span>
                    <span className="font-bold dark:text-white">July</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8 }} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">{section.icon}</div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <div key={i}>
                        <p className="text-[10px] font-black uppercase text-zinc-400 tracking-tighter flex items-center gap-2">
                          <Zap size={10} className="text-zinc-500" /> {item.label}
                        </p>
                        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="bg-zinc-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-zinc-800">
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10"><FileText className="text-zinc-400" /> Enrollment Checklist</h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {["Online SIT Application", "Certified Passport Copy", "Official High School Transcripts", "English Proficiency Results", "Updated CV / Resume", "Financial Support Documents"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                    <CheckCircle2 size={18} className="text-zinc-400" />
                    <span className="font-bold text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-zinc-800 via-black to-zinc-800 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl overflow-hidden border border-zinc-700"
              >
                <span className="relative z-10 flex items-center gap-2"><Sparkles size={18} /> Apply to SIT Southland</span>
              </motion.button>
              <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-zinc-500" /> 2026 International Admissions are Open
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SIT;