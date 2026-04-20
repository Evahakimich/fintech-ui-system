import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

        const AccountsCarousel = () => (
          <>
            <div className="w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 pb-6 pt-2" id="accounts-carousel">
<div className="flex gap-4 w-max">
{/* Checking Account Card */}
<div className="w-[300px] h-[180px] rounded-3xl bg-gradient-to-br from-accent-purple/40 via-accent-blue/20 to-base border border-white/10 p-5 flex flex-col justify-between snap-center relative overflow-hidden card-glow">
<div className="absolute inset-0 bg-gradient-glow opacity-20 filter blur-xl"></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<p className="text-xs text-white/70 mb-1">Checking A/C</p>
<p className="text-xs font-mono text-white/50">1452 2345 1765</p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/70 mb-1">Spent</p>
<p className="text-sm font-semibold text-white">45%</p>
</div>
</div>
<div className="relative z-10 flex justify-between items-end">
<div>
<p className="text-xs text-white/70 mb-1">Available Balance</p>
<h2 className="text-2xl font-bold text-white">$12,450.00</h2>
</div>
<Link
  to="/fintech-banking-account-details"
  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20"
>
  <FontAwesomeIcon icon={faArrowRight} className="text-white text-xs" />
</Link>
</div>
</div>
{/* Savings Account Card */}
<div className="w-[300px] h-[180px] rounded-3xl bg-gradient-to-br from-accent-blue/40 via-accent-pink/20 to-base border border-white/10 p-5 flex flex-col justify-between snap-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 filter blur-xl"></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<p className="text-xs text-white/70 mb-1">Savings</p>
<p className="text-xs font-mono text-white/50">9876 5432 1098</p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/70 mb-1">Earned</p>
<p className="text-sm font-semibold text-accent-blue">+5.2%</p>
</div>
</div>
<div className="relative z-10 flex justify-between items-end">
<div>
<p className="text-xs text-white/70 mb-1">Total Savings</p>
<h2 className="text-2xl font-bold text-white">$34,785.00</h2>
</div>
<Link
  to="/fintech-banking-savings-accounts"
  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20"
>
  <FontAwesomeIcon icon={faArrowRight} className="text-white text-xs" />
</Link>
</div>
</div>
{/* Vault Account Card */}
<div className="w-[300px] h-[180px] rounded-3xl bg-gradient-to-br from-accent-pink/40 via-accent-purple/20 to-base border border-white/10 p-5 flex flex-col justify-between snap-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 filter blur-xl"></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<p className="text-xs text-white/70 mb-1">Car Vault</p>
<p className="text-xs font-mono text-white/50">Target: $50k</p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/70 mb-1">Progress</p>
<p className="text-sm font-semibold text-accent-pink">60%</p>
</div>
</div>
<div className="relative z-10 flex justify-between items-end">
<div>
<p className="text-xs text-white/70 mb-1">Saved so far</p>
<h2 className="text-2xl font-bold text-white">$30,000.00</h2>
</div>
<Link
  to="/fintech-banking-savings-accounts"
  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20"
>
  <FontAwesomeIcon icon={faArrowRight} className="text-white text-xs" />
</Link>
</div>
</div>
</div>
</div>
          </>
        );

        export default AccountsCarousel;
