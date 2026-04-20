import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

        const LogoutButton = () => (
          <>
            <Link
              to="/fintech-banking-onboarding"
              className="w-full py-4 glass-panel rounded-2xl text-accent-danger font-medium text-sm flex items-center justify-center gap-2 hover:bg-accent-danger/10 transition-colors border border-accent-danger/20"
              id="section-5"
            >
<FontAwesomeIcon icon={faArrowRightFromBracket} />
                Sign Out
            </Link>
          </>
        );

        export default LogoutButton;
