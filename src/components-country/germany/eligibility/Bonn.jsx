import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { universityImages } from '../../../config/universityImages';
import { 
  ArrowLeft, CheckCircle2, Globe2, FileText, Landmark, 
  Clock, Target, Lightbulb, TrendingUp, Award, 
  Sparkles, Star, Zap, Library, Beaker, BookOpen
} from 'lucide-react';

const Bonn = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

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

  const sections = [
    {
      title: "Academic Admission",
      icon: <Library className="text-violet-600" />,
      content: [
        { label: "Undergraduate", detail: "University entrance qualification (Abitur or equivalent recognition)." },
        { label: "Master's Entry", detail: "Bachelor’s degree in a related field with a strong academic record." },
        { label: "Excellence Clusters", detail: "Higher requirements for Mathematics and Physics elite programs." }
      ]
    },
    {
      title: "Language Proficiency",
      icon: <Globe2 className="text-indigo-500" />,
      content: [
        { label: "German Programs", detail: "DSH-2 or TestDaF (TDN 4) is mandatory for most Bachelor's." },
        { label: "English Programs", detail: "IELTS 6.5-7.0 or TOEFL 95+ for international Master's." },
        { label: "Support", detail: "Internal German language courses available for enrolled students." }
      ]
    }
  ];

  const stats = [
    { icon: <Beaker />, label: "Nobel Prizes", value: "2", color: "bg-violet-800" },
    { icon: <BookOpen />, label: "Students", value: "35k+", color: "bg-indigo-700" },
    { icon: <TrendingUp />, label: "Global Rank", value: "#84", color: "bg-violet-950" },
    { icon: <Award />, label: "Status", value: "Excellence", color: "bg-slate-800" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Violet Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 80, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-violet-500/10 dark:bg-violet-900/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.div style={{ opacity, scale }} className="relative h-[100vh] w-full overflow-hidden">
        <motion.div 
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <img 
            src="/assets/colleges/bonn.jpg"
            alt="University of Bonn" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-violet-950/40 to-slate-50 dark:to-slate-950" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold">
              <Sparkles size={16} className="text-violet-300" />
              University of Excellence
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">University of Bonn</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">Tradition and Innovation on the Rhine</p>
          </motion.div>
        </div>

        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <button onClick={() => navigate(-1)} className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-violet-900 transition-all">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span>Back</span>
          </button>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-violet-100 dark:border-slate-800 shadow-xl">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-violet-100 dark:border-slate-800 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-800 to-indigo-950 rounded-2xl mb-6 flex items-center justify-center shadow-xl">
                  <Landmark size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 leading-tight">Uni <span className="text-violet-700 italic block">Bonn</span></h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-violet-400 fill-violet-400" />
                  Public Research • Bonn, GER
                </p>
                <div className="space-y-4 pt-6 border-t border-violet-50 dark:border-slate-800 text-sm">
                  <div className="flex justify-between font-bold">
                    <span className="text-slate-400">WINTER DEADLINE</span>
                    <span className="dark:text-white">July 15</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-slate-400">SUMMER DEADLINE</span>
                    <span className="dark:text-white">Jan 15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-violet-50 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-violet-50 dark:bg-slate-800 rounded-2xl">{section.icon}</div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((item, i) => (
                      <div key={i}>
                        <p className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2">
                          <Zap size={10} className="text-violet-500" /> {item.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800">
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3"><FileText className="text-violet-400" /> Application Checklist</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {["Online Application", "Academic Transcripts", "Language Certificate", "Health Insurance", "Motivation Letter"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <CheckCircle2 size={18} className="text-violet-400" />
                    <span className="font-bold text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 flex flex-col items-center gap-6">
              <button onClick={() => navigate('/enquiry')} className="px-12 py-6 bg-violet-800 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-violet-700 transition-colors">
                Apply to Uni Bonn
              </button>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-violet-600" /> Applications Open for 2026
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Bonn;