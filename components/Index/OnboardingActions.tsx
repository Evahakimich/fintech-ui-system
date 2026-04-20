import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

        const OnboardingActions = () => (
          <>
            <div className="w-full mt-auto space-y-4" id="action-container">
{/* Primary CTA */}
<Link
  to="/fintech-banking-create-account"
  className="w-full h-14 rounded-2xl bg-gradient-glow text-white font-semibold text-lg btn-glow flex items-center justify-center gap-2 group"
>
                Get Started{" "}
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
</Link>
{/* Secondary Actions */}
<div className="flex items-center justify-center gap-4 text-sm font-medium">
<Link
  to="/fintech-banking-dashboard"
  className="text-gray-400 hover:text-white transition-colors py-2 px-4"
>
                    Sign In
                </Link>
<div className="w-1 h-1 rounded-full bg-gray-600"></div>
<button className="text-gray-400 hover:text-white transition-colors py-2 px-4">
                    Learn More
                </button>
</div>
</div>
          </>
        );

        export default OnboardingActions;
