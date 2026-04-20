import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faStar } from '@fortawesome/free-solid-svg-icons';

        const IllustrationPanel = () => (
          <>
            <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-10 flex items-center justify-center" id="illustration-container">
{/* Decorative background elements */}
<div className="absolute inset-0 border border-white/5 rounded-full animate-pulse" style={{ animationDuration: "3s" }}></div>
<div className="absolute inset-4 border border-white/10 rounded-full animate-pulse" style={{ animationDuration: "2s", animationDelay: "0.5s" }}></div>
{/* Central Icon */}
<div className="relative w-48 h-48 flex items-center justify-center">
<img alt="3d neon glowing piggy bank icon, purple and pink gradient, dark background, premium glassmorphism style, highly detailed" className="w-full h-full object-contain drop-shadow-2xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/88bdddf913-59b9555d2a4b8dde8de1.png"/>
</div>
{/* Floating Sparkles */}
<FontAwesomeIcon icon={faCircleQuestion} className="absolute top-10 right-10 text-pink-400 text-xl opacity-80" />
<FontAwesomeIcon icon={faStar} className="absolute bottom-12 left-8 text-purple-400 text-sm opacity-60" />
</div>
          </>
        );

        export default IllustrationPanel;
