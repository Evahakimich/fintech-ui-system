import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon as faAmazonBrands } from '@fortawesome/free-brands-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

        const AdditionalServicesSection = () => (
          <>
            <div className="px-6" id="section-5">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-white/80">Recent Card Activity</h3>
<Link
  to="/fintech-banking-notifications-activity"
  className="text-xs text-accent-blue font-medium"
>
  See All
</Link>
</div>
<div className="space-y-3">
<div className="glass-panel rounded-2xl p-3 border border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
<FontAwesomeIcon icon={faAmazonBrands} className="text-white text-lg" />
</div>
<div>
<p className="text-sm text-white font-medium">Amazon Prime</p>
<p className="text-xs text-white/50">Today, 10:45 AM</p>
</div>
</div>
<p className="text-sm font-medium text-white">-$14.99</p>
</div>
<div className="glass-panel rounded-2xl p-3 border border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
<FontAwesomeIcon icon={faMugHot} className="text-white text-sm" />
</div>
<div>
<p className="text-sm text-white font-medium">Starbucks</p>
<p className="text-xs text-white/50">Yesterday</p>
</div>
</div>
<p className="text-sm font-medium text-white">-$6.50</p>
</div>
</div>
</div>
          </>
        );

        export default AdditionalServicesSection;
