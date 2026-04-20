import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';

        const EarlierNotificationsSection = () => (
          <>
            <div className="mb-6" id="section-3">
<h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-wider">Yesterday</h3>
<div className="space-y-3">
{/* Payment Success */}
<div className="glass-panel rounded-2xl p-4 border border-white/10 opacity-70">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-accent-success/10 flex items-center justify-center shrink-0">
<FontAwesomeIcon icon={faCheck} className="text-accent-success" />
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="text-sm text-white font-medium">Payment Successful</p>
<span className="text-[10px] text-white/50">Yesterday</span>
</div>
<p className="text-xs text-white/70 mt-0.5">Your auto-pay for Netflix ($15.99) was processed.</p>
</div>
</div>
</div>
{/* Card Alert */}
<div className="glass-panel rounded-2xl p-4 border border-white/10 opacity-70">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0">
<FontAwesomeIcon icon={faCreditCard} className="text-accent-purple" />
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="text-sm text-white font-medium">Virtual Card Created</p>
<span className="text-[10px] text-white/50">Yesterday</span>
</div>
<p className="text-xs text-white/70 mt-0.5">Your new virtual card is ready to use for online shopping.</p>
</div>
</div>
</div>
</div>
</div>
          </>
        );

        export default EarlierNotificationsSection;
