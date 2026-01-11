import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Info, BookOpen, Globe } from 'lucide-react';

const EligibilityDetail = () => {
  const { uniName } = useParams();
  const navigate = useNavigate();

  // This data would ideally come from a central data file
  const eligibilityData = {
    "harvard university": {
      gpa: "3.9+ / 4.0",
      ielts: "7.5 or TOEFL 100+",
      gre_gmat: "Required (Optional for some 2026 courses)",
      docs: ["3 LORs", "Statement of Purpose", "Resume/CV", "Financial Proof"],
      deadline: "Early Action: Nov 1 | Regular: Jan 1"
    },
    "stanford university": {
      gpa: "3.8+ / 4.0",
      ielts: "7.0 or TOEFL 100+",
      gre_gmat: "Highly Recommended",
      docs: ["2 LORs", "SOP", "Portfolio (for Arts/Arch)", "Transcripts"],
      deadline: "Regular: Jan 5"
    },
    // Add default data for others...
  };

  const name = decodeURIComponent(uniName);
  const data = eligibilityData[name] || {
    gpa: "3.0+ / 4.0",
    ielts: "6.5+",
    gre_gmat: "Check Department website",
    docs: ["Standard University Documents"],
    deadline: "Varies by Program"
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 font-semibold transition-colors"
        >
          <ArrowLeft size={20} /> Back to Universities
        </button>

        <div className="bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 capitalize">
              {name}
            </h1>
            <p className="text-xl text-blue-600 font-bold">Minimum Eligibility Criteria - 2026 Intake</p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600"><BookOpen /></div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Academic GPA</p>
                  <p className="text-xl font-bold dark:text-white">{data.gpa}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl text-green-600"><Globe /></div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Language Proficiency</p>
                  <p className="text-xl font-bold dark:text-white">{data.ielts}</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <p className="text-sm font-bold text-gray-400 uppercase mb-4">Application Deadline</p>
              <p className="text-2xl font-black text-red-500">{data.deadline}</p>
              <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
                <Info size={16} />
                <span>Verify specific dates on the official portal.</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-slate-800 pt-10">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Required Documentation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.docs.map((doc, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-slate-800/50 rounded-2xl">
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <span className="font-bold text-gray-700 dark:text-slate-300">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <button 
             onClick={() => navigate('/enquiry')}
             className="w-full mt-12 bg-blue-600 text-white py-6 rounded-3xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            Submit Documents for Evaluation
          </button>
        </div>
      </div>
    </div>
  );
};

export default EligibilityDetail;