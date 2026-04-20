import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

        const SecurityPageHeader = () => (
          <>
            <div className="mb-8" id="section-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase font-bold tracking-wider mb-4">
<FontAwesomeIcon icon={faCircleQuestion} className="text-[10px]" />
                Account Security
            </div>
<h1 className="text-3xl font-bold mb-2">Secure Your Account</h1>
<p className="text-gray-400 text-sm leading-relaxed">Set up these extra layers of security to protect your funds and personal data.</p>
</div>
          </>
        );

        export default SecurityPageHeader;
