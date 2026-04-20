import { useState } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPlane } from '@fortawesome/free-solid-svg-icons';

export default function AccountSummarySection() {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  return (
    <div className="px-6 mb-8 space-y-3" id="section-4">
      <h3 className="text-sm font-medium text-white/80 mb-3">Security</h3>
      <div className="glass-panel rounded-2xl p-4 border border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            <FontAwesomeIcon icon={faGlobe} className="text-white/70 text-xs" />
          </div>
          <div>
            <p className="text-sm text-white font-medium">Online Payments</p>
            <p className="text-[10px] text-white/50">Allow online transactions</p>
          </div>
        </div>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            checked={toggle1}
            onChange={(e) => setToggle1(e.target.checked)}
            className={`toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-transparent appearance-none cursor-pointer z-10 transition-all duration-300 ${toggle1 ? 'right-0 border-[#8B5CF6]' : 'left-0 border-white/20'}`}
            id="toggle1"
            name="toggle"
            type="checkbox"
          />
          <label
            className={`toggle-label block overflow-hidden h-5 rounded-full cursor-pointer transition-all duration-300 ${toggle1 ? 'bg-gradient-glow' : 'bg-white/10'}`}
            htmlFor="toggle1"
          />
        </div>
      </div>
      <div className="glass-panel rounded-2xl p-4 border border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            <FontAwesomeIcon icon={faPlane} className="text-white/70 text-xs" />
          </div>
          <div>
            <p className="text-sm text-white font-medium">International Use</p>
            <p className="text-[10px] text-white/50">Allow payments abroad</p>
          </div>
        </div>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            checked={toggle2}
            onChange={(e) => setToggle2(e.target.checked)}
            className={`toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-transparent appearance-none cursor-pointer z-10 transition-all duration-300 ${toggle2 ? 'right-0 border-[#8B5CF6]' : 'left-0 border-white/20'}`}
            id="toggle2"
            name="toggle"
            type="checkbox"
          />
          <label
            className={`toggle-label block overflow-hidden h-5 rounded-full cursor-pointer transition-all duration-300 ${toggle2 ? 'bg-gradient-glow' : 'bg-white/10'}`}
            htmlFor="toggle2"
          />
        </div>
      </div>
    </div>
  );
}
