import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble as faDribbbleBrands, faTwitch as faTwitchBrands } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

        const DashboardActivitySection = () => (
          <>
            <div id="section-4">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-semibold">Transaction</h3>
<Link
  to="/fintech-banking-notifications-activity"
  className="text-xs text-gray-400 hover:text-white transition-colors"
>
  See all
</Link>
</div>
<div className="space-y-3">
{/* Transaction 1 */}
<div className="glass-card rounded-2xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gray-300">
<FontAwesomeIcon icon={faTwitchBrands} className="text-lg" />
</div>
<div>
<h4 className="text-sm font-medium text-white mb-0.5">Twitch Turbo</h4>
<p className="text-[10px] text-gray-500">14 Oct 2024</p>
</div>
</div>
<span className="text-sm font-medium text-accent-red">-$45.00</span>
</div>
{/* Transaction 2 */}
<div className="glass-card rounded-2xl p-4 flex items-center justify-between border-l-2 border-l-accent-green">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gray-300">
<FontAwesomeIcon icon={faBriefcase} className="text-lg" />
</div>
<div>
<h4 className="text-sm font-medium text-white mb-0.5">Salary Credited</h4>
<p className="text-[10px] text-gray-500">08 Oct 2024</p>
</div>
</div>
<span className="text-sm font-medium text-accent-green">+$120.00</span>
</div>
{/* Transaction 3 */}
<div className="glass-card rounded-2xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gray-300">
<FontAwesomeIcon icon={faDribbbleBrands} className="text-lg" />
</div>
<div>
<h4 className="text-sm font-medium text-white mb-0.5">Dribbble Subscription</h4>
<p className="text-[10px] text-gray-500">04 Oct 2024</p>
</div>
</div>
<span className="text-sm font-medium text-accent-red">-$17.00</span>
</div>
</div>
</div>
          </>
        );

        export default DashboardActivitySection;
