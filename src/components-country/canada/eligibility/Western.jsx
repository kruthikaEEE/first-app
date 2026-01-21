import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, Shield, GraduationCap, Heart
} from 'lucide-react';

const Western = () => {
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
      icon: <GraduationCap className="text-purple-700" />,
      content: [
        { label: "Undergraduate", detail: "Minimum 83.5%–90%+ average (Competitive for Ivey AEO)." },
        { label: "Prerequisites", detail: "English (ENG4U), Advanced Functions, and Science/Arts per program." },
        { label: "Graduate Programs", detail: "70% average in final two years; 78%+ for competitive degrees." }
      ]
    },
    {
      title: "Language & Tests",
      icon: <Globe2 className="text-fuchsia-600" />,
      content: [
        { label: "IELTS Academic", detail: "6.5+ (no band lower than 6.0)." },
        { label: "TOEFL iBT", detail: "83+ (minimum 20 in each category)." },
        { label: "CASPer / GMAT", detail: "Required for Schulich Medicine and Ivey Business." }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Student Satisfaction", value: "#1", color: "bg-purple-900" },
    { icon: <Shield />, label: "World Ranking", value: "Top 1%", color: "bg-fuchsia-900" },
    { icon: <TrendingUp />, label: "Employment Rate", value: "95.2%", color: "bg-purple-700" },
    { icon: <Award />, label: "Research Citations", value: "High", color: "bg-slate-900" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 80, 0], y: [0, -80, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -120, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-fuchsia-500/10 dark:bg-fuchsia-900/10 rounded-full blur-3xl"
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
            src="/assets/colleges/western.jpg" 
            alt="Western University" 
            className="w-full h-full object-cover grayscale-[10%] contrast-110"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-fuchsia-950/40 to-slate-50 dark:to-slate-950"
          />
          
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0], y: [-20, 20] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full mb-6 font-bold tracking-widest text-xs uppercase"
            >
              <Shield size={14} className="text-purple-300" />
              Veritas et Utilitas
            </motion.div>
            <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter">Western</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto italic">Be Extraordinary</p>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ x: -8 }}
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-purple-900 transition-all shadow-xl"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span>University Directory</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div key={idx} whileHover={{ y: -10 }} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-purple-100 dark:border-slate-800 shadow-2xl overflow-hidden group">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-4xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div variants={itemVariants} className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl p-10 rounded-[3.5rem] border border-purple-100 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
                <motion.div variants={floatVariants} animate="animate" className="w-16 h-16 bg-gradient-to-br from-purple-700 to-fuchsia-950 rounded-2xl mb-8 flex items-center justify-center shadow-lg rotate-6">
                  <Landmark size={32} className="text-white" />
                </motion.div>
                
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Western <span className="text-purple-800">U</span></h2>
                <p className="text-slate-500 dark:text-slate-400 font-bold mb-8 flex items-center gap-2 text-sm uppercase">
                  <Star size={16} className="text-fuchsia-500 fill-fuchsia-500" /> London, Ontario
                </p>
                
                <div className="space-y-6 pt-6 border-t border-purple-50 dark:border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1">OUAC Deadline</span>
                    <span className="text-lg font-bold dark:text-white">January 15, 2026</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1">Scholarship Portal</span>
                    <span className="text-lg font-bold dark:text-white">February 14, 2026</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-br from-purple-900 to-slate-950 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <Lightbulb className="mb-4 text-fuchsia-300" size={32} />
                <p className="text-sm font-medium leading-relaxed italic opacity-90">
                  "Western is home to the world-renowned Ivey Business School and Schulich Medicine, fostering a culture of high-impact leadership."
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -5 }} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-purple-50 dark:border-slate-800 shadow-sm relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-2xl">{section.icon}</div>
                    <h3 className="text-xl font-black dark:text-white">{section.title}</h3>
                  </div>
                  <div className="space-y-5">
                    {section.content.map((item, i) => (
                      <div key={i}>
                        <p className="text-[10px] font-black uppercase text-purple-400 tracking-widest mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-snug">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="bg-slate-950 text-white p-12 rounded-[3.5rem] shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#9333ea 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
              <h2 className="text-3xl font-black mb-10 flex items-center gap-4"><FileText className="text-fuchsia-400" /> Application Steps</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {["Western Student Center Portal", "Ivey AEO Application", "Proof of English Mastery", "Official High School Credits", "Extracurricular Portfolio", "National Scholarship App"].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <CheckCircle2 size={18} className="text-purple-400" />
                    <span className="font-bold text-sm text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] border border-purple-50 dark:border-slate-800 shadow-sm relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-3xl"><Target className="text-fuchsia-700" size={32} /></div>
                <h2 className="text-3xl font-black dark:text-white tracking-tighter">Graduate Success</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  {["Leadership Potential", "Holistic Achievement", "Ethical Decision Making", "Community Impact"].map((trait, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-6 h-1 rounded-full bg-purple-600 group-hover:w-10 transition-all" />
                      <span className="text-md font-black text-slate-700 dark:text-slate-300">{trait}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-purple-800 to-fuchsia-950 p-8 rounded-[2.5rem] text-white shadow-2xl">
                  <h4 className="text-xl font-black mb-3 flex items-center gap-2"><Heart size={20} /> Student Life</h4>
                  <p className="text-xs font-medium leading-relaxed opacity-80">
                    With over 450 student organizations and the highest residence rankings, Western offers a social and academic balance that is second to none.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="pt-12 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-16 py-7 bg-purple-900 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-purple-800 transition-all flex items-center gap-3"
              >
                <Sparkles size={20} /> Begin Your Journey at Western
              </motion.button>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                <Clock size={12} className="text-purple-600" /> Admissions for Fall 2026 are active
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Western;