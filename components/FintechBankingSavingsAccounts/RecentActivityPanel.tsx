import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple as faAppleBrands } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faMugHot } from '@fortawesome/free-solid-svg-icons';

        const RecentActivityPanel = () => (
          <>
            <div className="px-6 flex-1" id="recent-activity">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-medium text-white">Recent Activity</h3>
<Link
  to="/fintech-banking-notifications-activity"
  className="text-xs text-gray-400 hover:text-white transition-colors"
>
  See all
</Link>
</div>
<div className="space-y-3">
{/* Transaction 1 */}
<div className="glass-panel rounded-2xl p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
<FontAwesomeIcon icon={faAppleBrands} className="text-white text-lg" />
</div>
<div>
<p className="text-sm font-medium text-white">Apple Store</p>
<p className="text-[10px] text-gray-400">Today, 14:32 • Checking</p>
</div>
</div>
<span className="text-sm font-medium text-white">- $999.00</span>
</div>
{/* Transaction 2 */}
<div className="glass-panel rounded-2xl p-3 flex items-center justify-between bg-gradient-to-r from-accent-blue/10 to-transparent border-l-2 border-l-accent-blue">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center">
<FontAwesomeIcon icon={faBriefcase} className="text-accent-blue text-lg" />
</div>
<div>
<p className="text-sm font-medium text-white">Salary Credited</p>
<p className="text-[10px] text-gray-400">Yesterday • Savings</p>
</div>
</div>
<span className="text-sm font-medium text-accent-blue">+ $4,500.00</span>
</div>
{/* Transaction 3 */}
<div className="glass-panel rounded-2xl p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
<FontAwesomeIcon icon={faMugHot} className="text-white text-lg" />
</div>
<div>
<p className="text-sm font-medium text-white">Starbucks</p>
<p className="text-[10px] text-gray-400">14 Oct 2024 • Checking</p>
</div>
</div>
<span className="text-sm font-medium text-white">- $5.40</span>
</div>
</div>
</div>
          </>
        );

        export default RecentActivityPanel;
