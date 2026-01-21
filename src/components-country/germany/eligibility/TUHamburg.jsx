import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Globe2, FileText, Landmark, 
  Clock, Target, Lightbulb, TrendingUp, Award, 
  Sparkles, Star, Zap, Cpu, Microscope, Settings
} from 'lucide-react';
import { universityImages } from '../../../config/universityImages';

const TUHamburg = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax and Scroll Effects
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Track mouse for parallax depth with FIXED cleanup
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
      icon: <Settings className="text-emerald-600" />,
      content: [
        { label: "Undergraduate", detail: "General Higher Education Entrance Qualification (Abitur or equivalent)." },
        { label: "Selection (NC)", detail: "Admission based on grade point average (NC) and specific subject grades." },
        { label: "Graduate Programs", detail: "Relevant Bachelor's degree with strong background in Math and Science." }
      ]
    },
    {
      title: "Language Mastery",
      icon: <Globe2 className="text-green-500" />,
      content: [
        { label: "German Skills", detail: "TestDaF (4x4) or DSH-2 required for German-taught programs." },
        { label: "English Skills", detail: "IELTS 6.5 or TOEFL 90 for International Master's programs." },
        { label: "Preparatory", detail: "Studienkolleg options available for international qualification bridging." }
      ]
    }
  ];

  const stats = [
    { icon: <Cpu />, label: "Innovation Rank", value: "Top 5", color: "bg-emerald-800" },
    { icon: <Microscope />, label: "Research Focus", value: "Green Tech", color: "bg-green-700" },
    { icon: <TrendingUp />, label: "Industry Partners", value: "500+", color: "bg-emerald-950" },
    { icon: <Award />, label: "Global Presence", value: "Elite", color: "bg-slate-800" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-900/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-green-500/10 dark:bg-green-900/10 rounded-full blur-3xl"
        />
      </div>

      {/* HERO SECTION */}
      <motion.div style={{ opacity, scale }} className="relative h-[100vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <img 
            src={universityImages.tuHamburg}
            alt="Hamburg University of Technology" 
            className="w-full h-full object-cover grayscale-[10%]"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-emerald-950/40 to-slate-50 dark:to-slate-950"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="relative">
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(16, 185, 129, 0.3)", "0 0 40px rgba(16, 185, 129, 0.6)", "0 0 20px rgba(16, 185, 129, 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-emerald-300" />
              Engineering for Humanity
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">TU Hamburg</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">Innovative Studies in Germany's North</p>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-emerald-900 transition-all shadow-2xl relative overflow-hidden"
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
            <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-emerald-100 dark:border-slate-800 shadow-xl relative overflow-hidden group">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div variants={itemVariants} className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-emerald-100 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
                <motion.div variants={floatVariants} animate="animate" className="w-16 h-16 bg-gradient-to-br from-emerald-800 to-green-950 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative">
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>
                
                <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 leading-tight">TU <span className="text-emerald-700 italic block">Hamburg</span></h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-green-400 fill-green-400" />
                  Public Technical • Hamburg, GER
                </p>
                
                <div className="space-y-4 pt-6 border-t border-emerald-50 dark:border-slate-800">
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-emerald-600 transition-colors">
                      <Clock size={14} className="text-emerald-600" /> Winter Semester
                    </span>
                    <span className="font-bold dark:text-white">July 15</span>
                  </div>
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-emerald-600 transition-colors">
                      <Clock size={14} className="text-emerald-600" /> Summer Semester
                    </span>
                    <span className="font-bold dark:text-white">Jan 15</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative bg-gradient-to-br from-emerald-900 via-green-900 to-slate-950 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
                <Lightbulb className="mb-4 text-emerald-300" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "TUHH combines small-scale learning with large-scale industrial impact, fostering a unique 'startup' spirit."
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8 }} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-emerald-50 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all relative group">
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-3 bg-emerald-50 dark:bg-slate-800 rounded-2xl">{section.icon}</div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <div key={i} className="group/item">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter group-hover/item:text-emerald-600 transition-colors flex items-center gap-2">
                          <Zap size={10} /> {item.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800">
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10"><FileText className="text-emerald-400" /> Application Checklist</h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {["Online Application", "Curriculum Vitae (CV)", "Language Certificate", "Official Transcripts", "Passport Copy"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 group">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span className="font-bold text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ideal Candidate & Tuition */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-emerald-50 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl"><Target className="text-emerald-700" size={28} /></div>
                <h2 className="text-3xl font-black dark:text-white">Ideal Candidate</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {["Math Proficiency", "Sustainable Thinking", "Collaborative Mindset"].map((rule, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span className="text-md font-bold text-slate-700 dark:text-slate-300">{rule}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-emerald-900 via-green-950 to-slate-950 p-8 rounded-[2rem] text-white shadow-2xl">
                  <h4 className="text-xl font-black mb-2 flex items-center gap-2"><Award size={24} /> Semester Fee</h4>
                  <p className="text-sm font-medium leading-relaxed">
                    No tuition for most students. Approx. €340/semester covers admin and Hamburg public transport.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                className="group relative px-12 py-6 bg-emerald-800 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl"
              >
                Apply to TU Hamburg
              </motion.button>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-emerald-600" /> Winter 2026 Applications Opening Soon
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TUHamburg;