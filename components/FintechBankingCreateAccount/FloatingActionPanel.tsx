import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

        const FloatingActionPanel = () => (
          <>
            <div className="absolute bottom-0 left-0 w-full p-6 pt-10 bg-gradient-to-t from-base via-base to-transparent z-20" id="section-3">
<Link
  to="/fintech-banking-create-account"
  className="w-full h-14 rounded-2xl bg-gradient-glow text-white font-semibold text-[15px] btn-glow flex items-center justify-center gap-2 group"
>
            Continue{" "}
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform text-sm" />
</Link>
{/* iOS Home Indicator */}
<div className="w-full h-8 flex items-center justify-center mt-2">
<div className="w-[120px] h-1.5 bg-white/20 rounded-full"></div>
</div>
</div>
          </>
        );

        export default FloatingActionPanel;
