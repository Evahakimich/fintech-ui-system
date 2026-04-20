import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

        const SecurityInfo = () => (
          <>
            <div className="flex items-center justify-center gap-2 mb-8 text-xs text-gray-400" id="security-info">
<FontAwesomeIcon icon={faShieldHalved} className="text-accent-purple" />
<p>Protected by end-to-end encryption</p>
</div>
          </>
        );

        export default SecurityInfo;
