import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCheck, faChevronRight, faFileInvoice, faIdCard } from '@fortawesome/free-solid-svg-icons';

        const VerificationMethodsSection = () => (
          <>
            <div className="space-y-3" id="section-3">
{/* Document Task: Completed */}
<Link
to="/fintech-banking-verify-identity-kyc"
className="w-full task-card completed rounded-2xl p-4 flex items-center gap-4 text-left group"
>
<div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
<FontAwesomeIcon icon={faIdCard} className="text-green-400 text-lg" />
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-white mb-1">Government ID</h4>
<p className="text-[11px] text-gray-400">Front &amp; Back uploaded</p>
</div>
<div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
<FontAwesomeIcon icon={faCheck} className="text-white text-[10px]" />
</div>
</Link>
{/* Selfie Task: Pending */}
<Link
to="/fintech-banking-verify-identity-kyc"
className="w-full task-card rounded-2xl p-4 flex items-center gap-4 text-left group"
>
<div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 group-active:bg-purple-500/30 transition-colors">
<FontAwesomeIcon icon={faCamera} className="text-purple-400 text-lg" />
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h4 className="text-sm font-semibold text-white">Liveness Check</h4>
<span className="px-2 py-0.5 rounded text-[9px] bg-yellow-500/20 text-yellow-400 font-medium">Pending</span>
</div>
<p className="text-[11px] text-gray-400">Take a quick selfie video</p>
</div>
<FontAwesomeIcon icon={faChevronRight} className="text-gray-600 text-xs" />
</Link>
{/* Proof of Address Task: Pending */}
<Link
to="/fintech-banking-verify-identity-kyc"
className="w-full task-card rounded-2xl p-4 flex items-center gap-4 text-left group"
>
<div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-active:bg-blue-500/30 transition-colors">
<FontAwesomeIcon icon={faFileInvoice} className="text-blue-400 text-lg" />
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h4 className="text-sm font-semibold text-white">Proof of Address</h4>
<span className="px-2 py-0.5 rounded text-[9px] bg-yellow-500/20 text-yellow-400 font-medium">Pending</span>
</div>
<p className="text-[11px] text-gray-400">Utility bill or bank statement</p>
</div>
<FontAwesomeIcon icon={faChevronRight} className="text-gray-600 text-xs" />
</Link>
</div>
          </>
        );

        export default VerificationMethodsSection;
