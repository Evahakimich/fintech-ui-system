import React from "react";

        const AccountHeaderSection = () => (
          <>
            <div className="px-6 flex flex-col items-center justify-center py-6" id="section-1">
<p className="text-sm text-white/60 mb-2">Available Balance</p>
<h1 className="text-5xl font-bold text-white mb-2 tracking-tight">$12,450<span className="text-white/50 text-3xl">.00</span></h1>
<div className="flex items-center gap-2 mt-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-xs text-white/80">Active</span>
</div>
</div>
          </>
        );

        export default AccountHeaderSection;
