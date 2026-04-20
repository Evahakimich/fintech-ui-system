import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

        const ProfileHeaderSection = () => (
          <>
            <div className="flex flex-col items-center mt-2 mb-8" id="section-1">
<div className="relative mb-4">
<div className="w-24 h-24 rounded-full p-1 bg-gradient-glow">
<img alt="User Avatar" className="w-full h-full rounded-full object-cover border-2 border-base" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"/>
</div>
<button className="absolute bottom-0 right-0 w-8 h-8 rounded-full glass-panel bg-base flex items-center justify-center text-white border border-white/10">
<FontAwesomeIcon icon={faCamera} className="text-xs" />
</button>
</div>
<h2 className="text-xl font-semibold text-white mb-1">John Doe</h2>
<div className="flex items-center gap-1.5 text-accent-success bg-accent-success/10 px-3 py-1 rounded-full border border-accent-success/20">
<FontAwesomeIcon icon={faCircleCheck} className="text-xs" />
<span className="text-xs font-medium">Identity Verified</span>
</div>
</div>
          </>
        );

        export default ProfileHeaderSection;
