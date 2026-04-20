import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

        const TodayNotificationsSection = () => (
          <>
            <div className="mb-6" id="section-2">
<h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-wider">Today</h3>
<div className="space-y-3">
{/* Actionable Alert (Transfer Request) */}
<div className="glass-panel rounded-2xl p-4 border border-white/10 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue rounded-l-2xl"></div>
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
<img alt="Sarah" className="w-10 h-10 rounded-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<p className="text-sm text-white font-medium">Sarah Jenkins</p>
<span className="text-[10px] text-white/50">2m ago</span>
</div>
<p className="text-xs text-white/70 mb-3">Requested $45.00 for Dinner split</p>
<div className="flex gap-2">
<Link to="/fintech-banking-transfer" className="flex-1">
<button className="w-full py-2 bg-btn-gradient rounded-xl text-xs font-medium text-white">Send $45.00</button>
</Link>
<button className="px-4 py-2 glass-panel rounded-xl text-xs font-medium text-white/70 hover:bg-white/10">Decline</button>
</div>
</div>
</div>
</div>
{/* Security Alert */}
<div className="glass-panel rounded-2xl p-4 border border-white/10 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-warning rounded-l-2xl"></div>
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-accent-warning/10 flex items-center justify-center shrink-0">
<FontAwesomeIcon icon={faShieldHalved} className="text-accent-warning" />
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<p className="text-sm text-white font-medium">New Login Detected</p>
<span className="text-[10px] text-white/50">1h ago</span>
</div>
<p className="text-xs text-white/70">MacBook Pro in San Francisco, CA. Was this you?</p>
<div className="flex gap-2 mt-3">
<button className="text-xs font-medium text-accent-blue">Yes, it was me</button>
<span className="text-white/20">•</span>
<Link to="/fintech-banking-set-up-security">
<button className="text-xs font-medium text-accent-danger">Secure Account</button>
</Link>
</div>
</div>
</div>
</div>
</div>
</div>
          </>
        );

        export default TodayNotificationsSection;
