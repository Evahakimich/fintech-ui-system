import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

        const ConfirmationActions = () => (
          <>
            <div className="mt-auto space-y-3" id="actions">
<Link
  to="/fintech-banking-dashboard"
  className="w-full h-14 rounded-2xl bg-btn-gradient btn-glow text-white font-medium text-base transition-transform active:scale-95 flex items-center justify-center gap-2"
>
<FontAwesomeIcon icon={faFaceSmile} className="text-lg" />
                Confirm with Face ID
</Link>
<Link
  to="/fintech-banking-transfer"
  className="w-full h-14 rounded-2xl glass-panel text-gray-300 font-medium text-base transition-transform active:scale-95 hover:bg-white/5"
>
                Edit Transfer
</Link>
</div>
          </>
        );

        export default ConfirmationActions;
