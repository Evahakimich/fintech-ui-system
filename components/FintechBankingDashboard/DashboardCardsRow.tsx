import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

        const DashboardCardsRow = () => (
          <>
            <div className="w-full h-[180px] rounded-3xl bg-card-gradient card-glow p-6 relative overflow-hidden mb-8 flex flex-col justify-between" id="section-2">
{/* Card Background Decoration */}
<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="flex justify-between items-start z-10">
<div>
<p className="text-white/70 text-xs mb-1">Saving A/C</p>
<p className="text-white/90 text-sm font-medium tracking-wider">1452 2345 1765</p>
</div>
<div className="text-right">
<p className="text-white/70 text-xs mb-1">Your Spent</p>
<p className="text-white text-sm font-semibold">15%</p>
</div>
</div>
<div className="flex justify-between items-end z-10">
<div>
<p className="text-white/70 text-xs mb-1">Available Balance</p>
<h2 className="text-3xl font-bold text-white">$34,785</h2>
</div>
<Link
  to="/fintech-banking-account-details"
  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"
>
  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
</Link>
</div>
{/* Pagination Dots */}
<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
</div>
</div>
          </>
        );

        export default DashboardCardsRow;
