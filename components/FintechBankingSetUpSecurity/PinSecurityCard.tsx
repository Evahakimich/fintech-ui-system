import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

        const PinSecurityCard = () => (
          <>
            <div className="glass-panel rounded-2xl p-5 flex items-center justify-between group" id="section-3">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
<FontAwesomeIcon icon={faCircleQuestion} className="text-purple-400 text-xl" />
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-0.5">App Passcode</h4>
<p className="text-[11px] text-gray-400">4-6 digit code for transactions</p>
</div>
</div>
<Link
  to="/fintech-banking-set-up-security"
  className="px-4 py-2 rounded-full bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
>
                    Set Up
                </Link>
</div>
          </>
        );

        export default PinSecurityCard;
