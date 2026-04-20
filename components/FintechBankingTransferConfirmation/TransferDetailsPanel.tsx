import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

        const TransferDetailsPanel = () => (
          <>
            <div className="glass-panel rounded-3xl p-5 mb-6" id="transfer-details">
<h3 className="text-sm font-medium text-white mb-4">Transfer Details</h3>
<div className="space-y-4">
<div className="flex justify-between items-center pb-4 border-b border-border/50">
<span className="text-sm text-gray-400">From</span>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface flex items-center justify-center">
<FontAwesomeIcon icon={faWallet} className="text-[10px] text-accent-blue" />
</div>
<span className="text-sm font-medium text-white">Main Account •••• 1765</span>
</div>
</div>
<div className="flex justify-between items-center pb-4 border-b border-border/50">
<span className="text-sm text-gray-400">Delivery Speed</span>
<span className="text-sm font-medium text-white">Instant</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-border/50">
<span className="text-sm text-gray-400">Transfer Fee</span>
<span className="text-sm font-medium text-white">$0.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-gray-300">Total to Pay</span>
<span className="text-base font-semibold text-white">$1,200.00</span>
</div>
</div>
</div>
          </>
        );

        export default TransferDetailsPanel;
