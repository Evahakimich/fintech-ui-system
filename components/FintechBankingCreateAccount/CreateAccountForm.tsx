import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as faEnvelopeRegular, faEyeSlash as faEyeSlashRegular } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faFingerprint, faLock } from '@fortawesome/free-solid-svg-icons';

        const CreateAccountForm = () => (
          <>
            <div className="glass-panel rounded-3xl p-6 space-y-5 relative overflow-hidden" id="section-2">
{/* Subtle internal glow */}
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
{/* Email/Phone Input */}
<div className="space-y-2">
<label className="text-xs text-gray-400 ml-1 uppercase tracking-wider font-medium">Email or Phone *</label>
<div className="input-field rounded-xl flex items-center px-4 h-14">
<FontAwesomeIcon icon={faEnvelopeRegular} className="text-gray-400 mr-3" />
<input className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600 text-[15px]" placeholder="name@example.com" type="text"/>
<FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-sm ml-2 hidden" />
</div>
</div>
{/* Password Input */}
<div className="space-y-2">
<label className="text-xs text-gray-400 ml-1 uppercase tracking-wider font-medium">Password *</label>
<div className="input-field rounded-xl flex items-center px-4 h-14">
<FontAwesomeIcon icon={faLock} className="text-gray-400 mr-3" />
<input className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600 text-[15px]" placeholder="••••••••" type="password"/>
<button className="text-gray-400 hover:text-white transition-colors ml-2">
<FontAwesomeIcon icon={faEyeSlashRegular} className="text-sm" />
</button>
</div>
{/* Password Strength Indicator */}
<div className="flex gap-1 mt-2 px-1">
<div className="h-1 flex-1 rounded-full bg-red-400"></div>
<div className="h-1 flex-1 rounded-full bg-yellow-400"></div>
<div className="h-1 flex-1 rounded-full bg-gray-600"></div>
<div className="h-1 flex-1 rounded-full bg-gray-600"></div>
</div>
</div>
{/* Biometric Opt-in Teaser */}
<div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-glow flex items-center justify-center p-[1px]">
<div className="w-full h-full rounded-full bg-base flex items-center justify-center">
<FontAwesomeIcon icon={faFingerprint} className="text-transparent bg-clip-text bg-gradient-glow text-lg" />
</div>
</div>
<div>
<p className="text-sm font-medium text-white">Enable Face/Touch ID</p>
<p className="text-[11px] text-gray-400">Faster &amp; safer login</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
</label>
</div>
{/* Consent Checkboxes */}
<div className="space-y-4 pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="custom-checkbox mt-0.5 shrink-0" required={true} type="checkbox" />
<span className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        I agree to the <a className="text-purple-400 hover:text-purple-300" href="#">Terms of Service</a> and <a className="text-purple-400 hover:text-purple-300" href="#">Privacy Policy</a>. *
                    </span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<input className="custom-checkbox mt-0.5 shrink-0" type="checkbox"/>
<span className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        I consent to receive marketing emails and promotional offers.
                    </span>
</label>
</div>
</div>
          </>
        );

        export default CreateAccountForm;
