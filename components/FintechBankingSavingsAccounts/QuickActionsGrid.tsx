import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBullseye, faEllipsis, faPlus } from '@fortawesome/free-solid-svg-icons';

        const QuickActionsGrid = () => (
          <>
            <div className="px-6 grid grid-cols-4 gap-4 mb-8" id="quick-actions">
<div className="flex flex-col items-center gap-2">
<Link
  to="/fintech-banking-create-account"
  className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center bg-accent-blue/10 border-accent-blue/20 hover:bg-accent-blue/20 transition-colors"
>
<FontAwesomeIcon icon={faPlus} className="text-accent-blue text-lg" />
</Link>
<span className="text-[10px] text-gray-400">Add</span>
</div>
<div className="flex flex-col items-center gap-2">
<Link
  to="/fintech-banking-transfer"
  className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center bg-accent-purple/10 border-accent-purple/20 hover:bg-accent-purple/20 transition-colors"
>
<FontAwesomeIcon icon={faArrowDown} className="text-accent-purple text-lg" />
</Link>
<span className="text-[10px] text-gray-400">Withdraw</span>
</div>
<div className="flex flex-col items-center gap-2">
<Link
  to="/fintech-banking-savings-accounts"
  className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center bg-accent-pink/10 border-accent-pink/20 hover:bg-accent-pink/20 transition-colors"
>
<FontAwesomeIcon icon={faBullseye} className="text-accent-pink text-lg" />
</Link>
<span className="text-[10px] text-gray-400">Goal</span>
</div>
<div className="flex flex-col items-center gap-2">
<Link
  to="/fintech-banking-dashboard"
  className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
>
<FontAwesomeIcon icon={faEllipsis} className="text-white text-lg" />
</Link>
<span className="text-[10px] text-gray-400">More</span>
</div>
</div>
          </>
        );

        export default QuickActionsGrid;
