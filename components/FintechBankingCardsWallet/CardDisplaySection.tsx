import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa as faCcVisaBrands } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

        const CardDisplaySection = () => (
          <>
            <div className="credit-card bg-card-gradient rounded-3xl p-6 relative overflow-hidden h-[200px] flex flex-col justify-between border border-white/20 backdrop-blur-md" id="section-1">
{/* Card Network Logo (Visa/Mastercard) */}
<div className="flex justify-between items-start z-10">
<FontAwesomeIcon icon={faCcVisaBrands} className="text-4xl text-white opacity-90" />
<FontAwesomeIcon icon={faWifi} className="text-white/70 rotate-90 text-lg" />
</div>
{/* Card Details */}
<div className="z-10 mt-auto">
<p className="text-white/70 text-xs mb-1 uppercase tracking-wider">Virtual Card</p>
<p className="text-white text-xl font-mono tracking-widest mb-4">**** **** **** 4289</p>
<div className="flex justify-between items-center">
<div>
<p className="text-[10px] text-white/50 uppercase tracking-wider">Cardholder</p>
<p className="text-sm text-white font-medium">John Doe</p>
</div>
<div>
<p className="text-[10px] text-white/50 uppercase tracking-wider">Expires</p>
<p className="text-sm text-white font-medium font-mono">12/28</p>
</div>
<div>
<p className="text-[10px] text-white/50 uppercase tracking-wider">CVC</p>
<p className="text-sm text-white font-medium font-mono">***</p>
</div>
</div>
</div>
{/* Decorative Elements */}
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute -left-10 -top-10 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
</div>
          </>
        );

        export default CardDisplaySection;
