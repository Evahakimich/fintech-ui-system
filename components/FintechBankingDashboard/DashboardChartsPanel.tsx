import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCircleDollarToSlot, faCircleQuestion, faWallet } from '@fortawesome/free-solid-svg-icons';

        const DashboardChartsPanel = () => (
          <>
            <div className="flex justify-between items-center mb-8 px-2" id="section-3">
<div className="flex flex-col items-center gap-2 cursor-pointer group">
<div className="w-14 h-14 rounded-[20px] icon-btn flex items-center justify-center text-accent-blue transition-transform group-active:scale-95">
<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl" />
</div>
<span className="text-[11px] text-gray-400 font-medium">Send</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer group">
<div className="w-14 h-14 rounded-[20px] icon-btn flex items-center justify-center text-accent-green transition-transform group-active:scale-95">
<FontAwesomeIcon icon={faCircleQuestion} className="text-xl" />
</div>
<span className="text-[11px] text-gray-400 font-medium">Receive</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer group">
<div className="w-14 h-14 rounded-[20px] icon-btn flex items-center justify-center text-accent-pink transition-transform group-active:scale-95">
<FontAwesomeIcon icon={faCircleDollarToSlot} className="text-xl" />
</div>
<span className="text-[11px] text-gray-400 font-medium">Loans</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer group">
<div className="w-14 h-14 rounded-[20px] icon-btn flex items-center justify-center text-orange-400 transition-transform group-active:scale-95">
<FontAwesomeIcon icon={faWallet} className="text-xl" />
</div>
<span className="text-[11px] text-gray-400 font-medium">Wallet</span>
</div>
</div>
          </>
        );

        export default DashboardChartsPanel;
