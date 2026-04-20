import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion as faCircleQuestionRegular } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faFileContract } from '@fortawesome/free-solid-svg-icons';

        const PreferencesSection = () => (
          <>
            <div id="section-4">
<h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-wider pl-2">Support</h3>
<div className="glass-panel rounded-2xl overflow-hidden">
<Link to="/fintech-banking-profile-settings" className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<FontAwesomeIcon icon={faCircleQuestionRegular} className="text-sm" />
</div>
<span className="text-sm font-medium text-white">Help Center</span>
</div>
<FontAwesomeIcon icon={faChevronRight} className="text-white/30 text-xs" />
</Link>
<Link to="/fintech-banking-profile-settings" className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<FontAwesomeIcon icon={faFileContract} className="text-sm" />
</div>
<span className="text-sm font-medium text-white">Terms &amp; Privacy</span>
</div>
<FontAwesomeIcon icon={faChevronRight} className="text-white/30 text-xs" />
</Link>
</div>
</div>
          </>
        );

        export default PreferencesSection;
