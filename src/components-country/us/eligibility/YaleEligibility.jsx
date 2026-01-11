import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, PenTool, MessageSquare
} from 'lucide-react';

const YaleEligibility = () => {
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
      icon: <BookOpen className="text-[#00356B]" />,
      content: [
        { label: "Undergraduate", detail: "12 years of formal education; Top 5–10% class rank typically expected." },
        { label: "Core Focus", detail: "Exceptional preparation in Mathematics, Sciences, and Critical Writing." },
        { label: "Graduate Programs", detail: "Bachelor's degree with alignment in research, publications, or professional work." }
      ]
    },
    {
      title: "Standardized Tests",
      icon: <Globe2 className="text-blue-500" />,
      content: [
        { label: "English Proficiency", detail: "IELTS 7.0+ / TOEFL 100+ / DET 120+ (Program dependent)" },
        { label: "GRE / GMAT", detail: "GRE for most grad programs; GMAT required for Yale School of Management (MBA)." },
        { label: "Policy", detail: "Holistic review; some departments offer test-optional flexibility." }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Acceptance Rate", value: "4.5%", color: "bg-[#00356B]" },
    { icon: <PenTool />, label: "Writing Intenstive", value: "100%", color: "bg-indigo-600" },
    { icon: <TrendingUp />, label: "Avg Starting Salary", value: "$155k", color: "bg-green-600" },
    { icon: <Award />, label: "Endowment", value: "$40.7B", color: "bg-blue-800" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 80, 0], y: [0, -80, 0], scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#00356B]/10 dark:bg-[#00356B]/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -120, 0], y: [0, 120, 0], scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-900/10 rounded-full blur-3xl"
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
            src="/assets/colleges/yale.jpg" 
            alt="Yale University" 
            className="w-full h-full object-cover"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-50 dark:to-slate-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00356B]/50 via-transparent to-blue-900/30 opacity-70" />
          
          {/* Animated Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
              transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="relative">
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(0, 53, 107, 0.3)", "0 0 40px rgba(0, 53, 107, 0.6)", "0 0 20px rgba(0, 53, 107, 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-blue-300" />
              Lux et Veritas (Light and Truth)
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">Yale</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl">Building Future Global Leaders</p>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#00356B] transition-all shadow-2xl relative overflow-hidden"
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
                <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent skew-x-12" />
                
                <motion.div variants={floatVariants} animate="animate" className="w-16 h-16 bg-gradient-to-br from-[#00356B] to-blue-900 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative">
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>
                
                <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">Yale <span className="text-[#00356B] italic block">University</span></h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-blue-600 fill-blue-600" />
                  Ivy League Excellence • New Haven, CT
                </p>
                
                <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-slate-800">
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-[#00356B] transition-colors">
                      <Clock size={14} className="text-[#00356B]" /> Early Action (Single)
                    </span>
                    <span className="font-bold dark:text-white">Nov 01</span>
                  </div>
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-[#00356B] transition-colors">
                      <Clock size={14} className="text-[#00356B]" /> Regular Decision
                    </span>
                    <span className="font-bold dark:text-white">Jan 02</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative bg-gradient-to-br from-[#00356B] via-blue-800 to-indigo-950 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 opacity-20" style={{ background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)" }} />
                <Lightbulb className="mb-4 text-blue-300" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "Yale looks beyond grades — it selects future leaders and change-makers who can influence society at scale."
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8, rotateY: 1 }} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent group-hover:from-blue-500/5 transition-all duration-500" />
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} className="p-3 bg-gray-50 dark:bg-slate-800 rounded-2xl">{section.icon}</motion.div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="group/item">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter group-hover/item:text-[#00356B] transition-colors flex items-center gap-2">
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
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10"><FileText className="text-[#00356B]" /> Application Roadmap</h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {["Common App / Yale Portal", "Personal SOP / Essays", "Letters of Rec (2–3)", "Academic Transcripts", "Resume / CV (Grad)", "Portfolio / Writing Sample"].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 10, scale: 1.02 }} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:border-[#00356B]/50 transition-all group">
                    <CheckCircle2 size={18} className="text-[#00356B] group-hover:text-blue-400" />
                    <span className="font-bold text-sm text-gray-300 group-hover:text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-3xl"><Target className="text-[#00356B]" size={28} /></div>
                <h2 className="text-3xl font-black dark:text-white tracking-tight">The Yale Archetype</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  {["Social Impact Focus", "Leadership in Arts/Public Service", "Independent Communication", "Strong Sense of Purpose"].map((rule, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-[#00356B] group-hover:bg-blue-400" />
                      <span className="text-md font-bold text-gray-700 dark:text-slate-300 group-hover:text-[#00356B]">{rule}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-blue-700 via-[#00356B] to-blue-950 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90 relative z-10">Financial Aid</p>
                  <h4 className="text-xl font-black mb-2 relative z-10 flex items-center gap-2"><Award size={24} /> 100% Need-Based</h4>
                  <p className="text-sm font-medium leading-relaxed relative z-10">
                    Tuition approx. $57k/yr. Yale meets full demonstrated need with grants only — no loans required.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-[#00356B] via-[#004a94] to-[#00356B] text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl overflow-hidden"
              >
                <motion.span initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }} className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500" />
                <span className="relative z-10 flex items-center gap-2"><Sparkles size={18} /> Seek Guidance</span>
              </motion.button>
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-[#00356B]" /> Deadlines strictly enforced
              </motion.p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default YaleEligibility;