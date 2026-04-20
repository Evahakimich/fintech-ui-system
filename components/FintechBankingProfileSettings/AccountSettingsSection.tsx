import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard as faCreditCardRegular, faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

        const AccountSettingsSection = () => (
          <>
            <div id="section-2">
<h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-wider pl-2">Account</h3>
<div className="glass-panel rounded-2xl overflow-hidden">
<Link
  to="/fintech-banking-profile-settings"
  className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5"
>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
<FontAwesomeIcon icon={faUserRegular} className="text-sm" />
</div>
<span className="text-sm font-medium text-white">Personal Details</span>
</div>
<FontAwesomeIcon icon={faChevronRight} className="text-white/30 text-xs" />
</Link>
<Link
  to="/fintech-banking-set-up-security"
  className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5"
>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple">
<FontAwesomeIcon icon={faShieldHalved} className="text-sm" />
</div>
<span className="text-sm font-medium text-white">Security &amp; 2FA</span>
</div>
<FontAwesomeIcon icon={faChevronRight} className="text-white/30 text-xs" />
</Link>
<Link
  to="/fintech-banking-cards-wallet"
  className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5"
>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-accent-pink/10 flex items-center justify-center text-accent-pink">
<FontAwesomeIcon icon={faCreditCardRegular} className="text-sm" />
</div>
<span className="text-sm font-medium text-white">Card Management</span>
</div>
<FontAwesomeIcon icon={faChevronRight} className="text-white/30 text-xs" />
</Link>
</div>
</div>
          </>
        );

        export default AccountSettingsSection;
