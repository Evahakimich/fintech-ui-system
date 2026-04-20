import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple as faAppleBrands } from '@fortawesome/free-brands-svg-icons';
import { faEye, faSliders, faSnowflake } from '@fortawesome/free-solid-svg-icons';

        const TransactionsSection = () => (
          <>
            <div className="px-6 grid grid-cols-4 gap-4 mb-8" id="section-3">
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
<FontAwesomeIcon icon={faSnowflake} className="text-accent-blue text-xl" />
</button>
<span className="text-[10px] text-white/70 font-medium">Freeze</span>
</div>
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
<FontAwesomeIcon icon={faSliders} className="text-accent-purple text-xl" />
</button>
<span className="text-[10px] text-white/70 font-medium">Limits</span>
</div>
<div className="flex flex-col items-center gap-2">
<Link
  to="/fintech-banking-cards-wallet"
  className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
>
  <FontAwesomeIcon icon={faAppleBrands} className="text-white text-xl" />
</Link>
<span className="text-[10px] text-white/70 font-medium text-center leading-tight">Apple<br/>Wallet</span>
</div>
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
<FontAwesomeIcon icon={faEye} className="text-accent-pink text-xl" />
</button>
<span className="text-[10px] text-white/70 font-medium">View PIN</span>
</div>
</div>
          </>
        );

        export default TransactionsSection;
