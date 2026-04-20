import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

        const BiometricSecurityCard = () => (
          <>
            <div className="glass-panel rounded-2xl p-5 flex items-center justify-between group" id="section-2">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
<FontAwesomeIcon icon={faCircleQuestion} className="text-blue-400 text-xl" />
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-0.5">Face ID / Touch ID</h4>
<p className="text-[11px] text-gray-400">Fast and secure biometric login</p>
</div>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-300 ease-in-out border-gray-600" id="toggle-bio" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer transition-colors duration-300 ease-in-out" htmlFor="toggle-bio"></label>
</div>
</div>
          </>
        );

        export default BiometricSecurityCard;
