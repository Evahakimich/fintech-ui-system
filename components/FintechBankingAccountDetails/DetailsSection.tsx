import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy as faCopyRegular, faEyeSlash as faEyeSlashRegular } from '@fortawesome/free-regular-svg-icons';
import { faFileInvoice, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

        const DetailsSection = () => (
          <>
            <div className="px-6 flex-1 space-y-4" id="details-section">
<div className="glass-panel rounded-2xl p-5 border border-white/10">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-white/80">Account Information</h3>
<button className="text-accent-blue text-xs font-medium">Edit</button>
</div>
<div className="space-y-4">
{/* IBAN */}
<div className="flex justify-between items-center group cursor-pointer">
<div>
<p className="text-[10px] text-white/50 mb-1">IBAN</p>
<p className="text-sm font-mono text-white tracking-wider flex items-center gap-2">
                                GB29 REVO 8574 2345 1765 <FontAwesomeIcon icon={faEyeSlashRegular} className="text-white/40 text-xs" />
</p>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
<FontAwesomeIcon icon={faCopyRegular} className="text-white/70 text-xs" />
</button>
</div>
<div className="h-px w-full bg-white/5"></div>
{/* Account Number */}
<div className="flex justify-between items-center group cursor-pointer">
<div>
<p className="text-[10px] text-white/50 mb-1">Account Number</p>
<p className="text-sm font-mono text-white tracking-wider flex items-center gap-2">
                                2345 1765 <FontAwesomeIcon icon={faEyeSlashRegular} className="text-white/40 text-xs" />
</p>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
<FontAwesomeIcon icon={faCopyRegular} className="text-white/70 text-xs" />
</button>
</div>
<div className="h-px w-full bg-white/5"></div>
{/* Sort Code */}
<div className="flex justify-between items-center group cursor-pointer">
<div>
<p className="text-[10px] text-white/50 mb-1">Sort Code</p>
<p className="text-sm font-mono text-white tracking-wider">
                                85-74-32
                            </p>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
<FontAwesomeIcon icon={faCopyRegular} className="text-white/70 text-xs" />
</button>
</div>
</div>
</div>
{/* Spending Analytics Mini */}
<div className="glass-panel rounded-2xl p-5 border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-transparent"></div>
<div className="relative z-10 flex justify-between items-center">
<div>
<p className="text-xs text-white/60 mb-1">Total Spent this month</p>
<h3 className="text-lg font-semibold text-white">$2,450.00</h3>
</div>
<div className="text-right">
<div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-accent-purple border-r-accent-purple flex items-center justify-center transform -rotate-45">
<span className="text-xs font-bold text-white transform rotate-45">45%</span>
</div>
</div>
</div>
</div>
{/* Quick Actions */}
<div className="grid grid-cols-2 gap-4 mt-4">
<Link to="/fintech-banking-account-details" className="glass-panel rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors border border-white/10">
<FontAwesomeIcon icon={faFileInvoice} className="text-accent-blue text-sm" />
<span className="text-xs font-medium">Statements</span>
        </Link>
<Link to="/fintech-banking-set-up-security" className="glass-panel rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors border border-white/10">
<FontAwesomeIcon icon={faShieldHalved} className="text-accent-purple text-sm" />
<span className="text-xs font-medium">Security</span>
</Link>
</div>
</div>
          </>
        );

        export default DetailsSection;
