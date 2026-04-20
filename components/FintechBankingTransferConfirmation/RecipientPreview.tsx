import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

        const RecipientPreview = () => (
          <>
            <div className="flex flex-col items-center mb-8" id="recipient-preview">
<div className="w-20 h-20 rounded-full bg-surface border border-border p-1.5 mb-4 relative">
<img alt="Recipient" className="w-full h-full object-cover rounded-full" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"/>
<div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-base flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-gradient-glow flex items-center justify-center">
<FontAwesomeIcon icon={faCheck} className="text-[8px] text-white" />
</div>
</div>
</div>
<h2 className="text-2xl font-semibold text-white mb-1">$1,200.00</h2>
<p className="text-sm text-gray-400">To Emma Grace Johnson</p>
</div>
          </>
        );

        export default RecipientPreview;
