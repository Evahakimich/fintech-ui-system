import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

        const KycPageHeader = () => (
          <>
            <div className="mb-8" id="section-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] uppercase font-bold tracking-wider mb-4">
<FontAwesomeIcon icon={faLock} className="text-[10px]" />
                256-bit Encrypted
            </div>
<h1 className="text-3xl font-bold mb-2">Verify Identity</h1>
<p className="text-gray-400 text-sm leading-relaxed">To secure your account and comply with regulations, we need to verify it's really you.</p>
</div>
          </>
        );

        export default KycPageHeader;
