import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faFingerprint, faPalette } from '@fortawesome/free-solid-svg-icons';

        const SecuritySettingsSection = () => (
          <>
            <div id="section-3">
<h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-wider pl-2">Preferences</h3>
<div className="glass-panel rounded-2xl overflow-hidden">
<div className="w-full flex items-center justify-between p-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<FontAwesomeIcon icon={faBellRegular} className="text-sm" />
</div>
<span className="text-sm font-medium text-white">Push Notifications</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-transform duration-300 ease-in-out" id="toggle-notifications" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer transition-colors duration-300 ease-in-out" htmlFor="toggle-notifications"></label>
</div>
</div>
<div className="w-full flex items-center justify-between p-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<FontAwesomeIcon icon={faFingerprint} className="text-sm" />
</div>
<span className="text-sm font-medium text-white">Biometric Login</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-transform duration-300 ease-in-out" id="toggle-biometrics" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer transition-colors duration-300 ease-in-out" htmlFor="toggle-biometrics"></label>
</div>
</div>
<Link
  to="/fintech-banking-profile-settings"
  className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<FontAwesomeIcon icon={faPalette} className="text-sm" />
</div>
<span className="text-sm font-medium text-white">Appearance</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-white/50">Dark</span>
<FontAwesomeIcon icon={faChevronRight} className="text-white/30 text-xs" />
</div>
</Link>
</div>
</div>
          </>
        );

        export default SecuritySettingsSection;
