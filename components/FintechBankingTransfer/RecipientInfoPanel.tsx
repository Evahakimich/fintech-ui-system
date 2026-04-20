import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

        const RecipientInfoPanel = () => (
          <>
            <div className="flex flex-col items-center mb-8" id="recipient-info">
<div className="w-16 h-16 rounded-2xl bg-surface border border-border p-1 mb-3 relative">
<img alt="Recipient" className="w-full h-full object-cover rounded-xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"/>
<div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-base flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-gradient-glow flex items-center justify-center">
<FontAwesomeIcon icon={faCheck} className="text-[8px] text-white" />
</div>
</div>
</div>
<p className="text-xs text-gray-400 mb-1">Paying to</p>
<h2 className="text-lg font-medium text-white">Emma Grace Johnson</h2>
</div>
          </>
        );

        export default RecipientInfoPanel;
