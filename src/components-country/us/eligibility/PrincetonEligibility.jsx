import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, PenTool, Search
} from 'lucide-react';

const PrincetonEligibility = () => {
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
      icon: <BookOpen className="text-[#EE7F2D]" />,
      content: [
        { label: "Undergraduate", detail: "12 years of formal schooling; Top 5% class rank typically required." },
        { label: "Evaluation Style", detail: "Academic rigor (AP/IB/Honors) matters more than raw GPA marks." },
        { label: "Graduate Programs", detail: "Bachelor's degree with strong alignment in research or chosen discipline." }
      ]
    },
    {
      title: "Standardized Tests",
      icon: <Globe2 className="text-blue-600" />,
      content: [
        { label: "IELTS / TOEFL", detail: "7.0+ / 100+ (Required for non-native English speakers)" },
        { label: "GRE Requirement", detail: "Recommended for most grad programs; GMAT not applicable (No MBA)." },
        { label: "Duolingo", detail: "120+ (Program dependent acceptance)" }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Acceptance Rate", value: "4.4%", color: "bg-[#EE7F2D]" },
    { icon: <Search />, label: "Research Focus", value: "High", color: "bg-green-700" },
    { icon: <TrendingUp />, label: "Graduation Rate", value: "98%", color: "bg-blue-600" },
    { icon: <Award />, label: "Student-Faculty", value: "5:1", color: "bg-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#EE7F2D]/10 dark:bg-[#EE7F2D]/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-black/5 dark:bg-white/5 rounded-full blur-3xl"
        />
      </div>

      {/* --- HERO SECTION WITH PARALLAX --- */}
      <motion.div style={{ opacity, scale }} className="relative h-[70vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <img 
            src="/assets/colleges/princeton.jpg" 
            alt="Princeton University" 
            className="w-full h-full object-cover"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-50 dark:to-slate-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-transparent to-black/30 opacity-70" />
          
          {/* Animated Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.4, 0], scale: [0, 1, 0], x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute w-2 h-2 bg-orange-200 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="relative">
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(238, 127, 45, 0.3)", "0 0 40px rgba(238, 127, 45, 0.6)", "0 0 20px rgba(238, 127, 45, 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-[#EE7F2D]" />
              In the Nation's Service and the Service of Humanity
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">Princeton</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl">Excellence Through Independent Thinking</p>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#EE7F2D] transition-all shadow-2xl relative overflow-hidden"
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
            <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl relative overflow-hidden group">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div variants={itemVariants} className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-gray-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
                <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                
                <motion.div variants={floatVariants} animate="animate" className="w-16 h-16 bg-gradient-to-br from-[#EE7F2D] to-orange-700 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative">
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>
                
                <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">Princeton <span className="text-[#EE7F2D] italic block">University</span></h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-orange-400 fill-orange-400" />
                  Ivy League Leader • Princeton, NJ
                </p>
                
                <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-slate-800">
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-[#EE7F2D] transition-colors">
                      <Clock size={14} className="text-[#EE7F2D]" /> Single-Choice Early
                    </span>
                    <span className="font-bold dark:text-white">Nov 01</span>
                  </div>
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-[#EE7F2D] transition-colors">
                      <Clock size={14} className="text-[#EE7F2D]" /> Regular Decision
                    </span>
                    <span className="font-bold dark:text-white">Jan 01</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative bg-gradient-to-br from-[#EE7F2D] via-orange-600 to-amber-700 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 opacity-30" style={{ background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)" }} />
                <Lightbulb className="mb-4 text-white" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "Princeton doesn’t chase volume — it selects thinkers, researchers, and future scholars."
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8, rotateY: 2 }} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-amber-500/0 to-transparent group-hover:from-orange-500/5 group-hover:via-amber-500/5 transition-all duration-500" />
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} className="p-3 bg-gray-50 dark:bg-slate-800 rounded-2xl">{section.icon}</motion.div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="group/item">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter group-hover/item:text-[#EE7F2D] transition-colors flex items-center gap-2">
                          <Zap size={10} className="opacity-0 group-hover/item:opacity-100" /> {item.label}
                        </p>
                        <p className="text-sm font-semibold text-gray-700 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10"><FileText className="text-[#EE7F2D]" /> Submission Package</h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {["Common App / Princeton Portal", "Personal Statement / SOP", "Letters of Rec (2–3)", "Official Transcripts", "Resume / CV", "Writing Samples / Portfolio"].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 10, scale: 1.02 }} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:border-[#EE7F2D]/50 transition-all group">
                    <CheckCircle2 size={18} className="text-[#EE7F2D] group-hover:text-orange-400" />
                    <span className="font-bold text-sm text-gray-300 group-hover:text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-3xl"><Target className="text-[#EE7F2D]" size={28} /></div>
                <h2 className="text-3xl font-black dark:text-white tracking-tight">Holistic Criteria</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  {["Intellectual Curiosity", "Writing Clarity", "Research Orientation", "Community Impact"].map((rule, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-[#EE7F2D] group-hover:bg-orange-400" />
                      <span className="text-md font-bold text-gray-700 dark:text-slate-300 group-hover:text-[#EE7F2D]">{rule}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90 relative z-10 text-orange-400">Financial Aid</p>
                  <h4 className="text-xl font-black mb-2 relative z-10 flex items-center gap-2"><Award size={24} /> No-Loans Policy</h4>
                  <p className="text-sm font-medium leading-relaxed relative z-10">
                    Tuition approx. $56k/yr. Aid is 100% need-based grants only. Princeton meets full demonstrated need for all.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-[#EE7F2D] via-orange-600 to-[#EE7F2D] text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl overflow-hidden"
              >
                <motion.span initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }} className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400" />
                <span className="relative z-10 flex items-center gap-2"><Sparkles size={18} /> Apply for Counseling</span>
              </motion.button>
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-[#EE7F2D]" /> Strict Application Deadlines
              </motion.p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrincetonEligibility;