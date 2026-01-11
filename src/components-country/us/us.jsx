import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  Search, 
  ChevronRight, 
  Star,
  Building2,
  Briefcase
} from 'lucide-react';

const UniversityCard = ({ uni }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      {/* Top Section: Visual Branding */}
      <div className={`h-32 ${uni.color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-6 right-6">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
            {uni.rank}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
              {uni.name}
            </h3>
            <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mt-1">
              <MapPin size={14} />
              <span className="text-sm font-medium">{uni.location}</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-2xl">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Avg Salary</p>
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-bold">
              <TrendingUp size={14} />
              <span>{uni.salary}</span>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-2xl">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Tuition/Year</p>
            <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold">
              <DollarSign size={14} />
              <span>{uni.fees}</span>
            </div>
          </div>
        </div>

        {/* Deep Dive Highlights */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Why this University?</h4>
          <ul className="space-y-3">
            {uni.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 bg-blue-50 dark:bg-blue-900/30 p-1 rounded-md">
                  <Star size={12} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-6 pt-0 mt-auto">
        <button 
          /* UPDATED: Navigates to uni.path instead of generic /eligibility */
          onClick={() => navigate(uni.path)}
          className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all group-hover:scale-[1.02]"
        >
          Check Eligibility <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

const USUniversities = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const universities = [
    {
      name: "Harvard University",
      location: "Cambridge, MA",
      rank: "#1 Global Brand",
      salary: "$160k+",
      fees: "$55k",
      color: "bg-red-800",
      path: "/eligibility/harvard",
      highlights: ["World's most powerful alumni network", "Top-tier Research & Business programs", "High endowment for scholarships"]
    },
    {
      name: "Stanford University",
      location: "Stanford, CA",
      rank: "#2 Global Brand",
      salary: "$155k+",
      fees: "$58k",
      color: "bg-red-600",
      path: "/eligibility/stanford",
      highlights: ["Hub for tech and entrepreneurship", "Proximity to Silicon Valley giants", "Interdisciplinary research focus"]
    },
    {
      name: "MIT",
      location: "Cambridge, MA",
      rank: "#1 Engineering",
      salary: "$150k+",
      fees: "$54k",
      color: "bg-slate-700",
      path: "/eligibility/mit",
      highlights: ["Global leader in Science & Tech", "Intense innovation-driven culture", "Strongest industry-lab partnerships"]
    },
    {
      name: "Princeton University",
      location: "Princeton, NJ",
      rank: "#1 National Univ",
      salary: "$145k+",
      fees: "$57k",
      color: "bg-orange-600",
      path: "/eligibility/princeton",
      highlights: ["World-class Undergraduate focus", "Elite academic research environment", "Generous financial aid packages"]
    },
    {
      name: "Yale University",
      location: "New Haven, CT",
      rank: "#3 Ivy League",
      salary: "$140k+",
      fees: "$59k",
      color: "bg-blue-800",
      path: "/eligibility/yale",
      highlights: ["Elite Law and Arts programs", "Historical prestige & global influence", "Residential college system"]
    },
    {
      name: "Carnegie Mellon",
      location: "Pittsburgh, PA",
      rank: "#1 Computer Science",
      salary: "$135k+",
      fees: "$52k",
      color: "bg-red-700",
      path: "/eligibility/carnegie-mellon",
      highlights: ["World-renowned for AI & Robotics", "Top recruiters: Google, Meta, Tesla", "High project-based learning focus"]
    },
    {
      name: "UC Berkeley",
      location: "Berkeley, CA",
      rank: "#1 Public Univ",
      salary: "$120k+",
      fees: "$44k",
      color: "bg-blue-800",
      path: "/eligibility/uc-berkeley",
      highlights: ["Elite STEM and Liberal Arts", "Massive startup incubator network", "Highly competitive research grants"]
    },
    {
      name: "Wharton (UPenn)",
      location: "Philadelphia, PA",
      rank: "#1 Business",
      salary: "$175k+",
      fees: "$62k",
      color: "bg-blue-900",
      path: "/eligibility/wharton",
      highlights: ["Top-ranked Finance program", "Elite Ivy League status", "Direct pipeline to Wall Street"]
    },
    {
      name: "Columbia University",
      location: "New York, NY",
      rank: "#2 Research",
      salary: "$145k+",
      fees: "$63k",
      color: "bg-sky-700",
      path: "/eligibility/columbia",
      highlights: ["Manhattan location for internships", "Global center for Finance & Media", "Renowned Core Curriculum"]
    },
    {
      name: "Cornell University",
      location: "Ithaca, NY",
      rank: "#1 Engineering Ivy",
      salary: "$130k+",
      fees: "$60k",
      color: "bg-red-900",
      path: "/eligibility/cornell",
      highlights: ["Diverse range of specialized majors", "Tech campus in New York City", "Top-tier Architecture & Hospitality"]
    },
    {
      name: "Georgia Institute of Tech",
      location: "Atlanta, GA",
      rank: "#4 Engineering",
      salary: "$115k+",
      fees: "$32k",
      color: "bg-amber-600",
      path: "/eligibility/georgia-tech",
      highlights: ["High ROI for Engineering students", "Strong ties to Fortune 500 companies", "Leader in Cybersecurity research"]
    },
    {
      name: "UCLA",
      location: "Los Angeles, CA",
      rank: "#1 Public School",
      salary: "$110k+",
      fees: "$42k",
      color: "bg-blue-600",
      path: "/eligibility/ucla",
      highlights: ["World-class film & medical schools", "Vibrant campus life in LA", "Highest application volume globally"]
    },
    {
      name: "UT Austin",
      location: "Austin, TX",
      rank: "#1 Business Public",
      salary: "$105k+",
      fees: "$39k",
      color: "bg-orange-700",
      path: "/eligibility/ut-austin",
      highlights: ["Fast-growing tech hub (Silicon Hills)", "Top-ranked Accounting program", "Strong Texas alumni network"]
    },
    {
      name: "University of Washington",
      location: "Seattle, WA",
      rank: "#5 CS Global",
      salary: "$125k+",
      fees: "$38k",
      color: "bg-purple-800",
      path: "/eligibility/university-of-washington",
      highlights: ["Proximity to Amazon & Microsoft HQ", "Global leader in Health Sciences", "Stunning Pacific Northwest campus"]
    },
    {
      name: "Purdue University",
      location: "West Lafayette, IN",
      rank: "#3 Aerospace",
      salary: "$95k+",
      fees: "$28k",
      color: "bg-yellow-600",
      path: "/eligibility/purdue",
      highlights: ["Cradle of Astronauts", "Elite Flight and Engineering programs", "Fixed tuition rate for 10+ years"]
    }
  ];

  const filteredUnis = universities.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none">
              Elite <span className="text-blue-600">US</span> Institutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
              Explore 15+ detailed profiles of top-ranked universities for your 2026 intake.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search by name or location..." 
              className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4 bg-blue-600 p-6 rounded-[2.5rem] text-white">
                <div className="p-3 bg-white/20 rounded-2xl"><Building2 /></div>
                <div>
                    <div className="text-2xl font-black">15+</div>
                    <div className="text-sm opacity-80 font-bold">Total Universities</div>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 dark:bg-slate-800 p-6 rounded-[2.5rem] text-white">
                <div className="p-3 bg-white/20 rounded-2xl"><Briefcase /></div>
                <div>
                    <div className="text-2xl font-black">3 Years</div>
                    <div className="text-sm opacity-80 font-bold">OPT Work Permit</div>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-amber-500 p-6 rounded-[2.5rem] text-white">
                <div className="p-3 bg-white/20 rounded-2xl"><GraduationCap /></div>
                <div>
                    <div className="text-2xl font-black">STEM</div>
                    <div className="text-sm opacity-80 font-bold">Priority Programs</div>
                </div>
            </div>
        </div>

        {/* Dynamic Grid */}
        {filteredUnis.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUnis.map((uni, idx) => (
              <UniversityCard key={idx} uni={uni} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-slate-800">
            <p className="text-2xl font-bold text-gray-400">No universities found matching your search.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default USUniversities;