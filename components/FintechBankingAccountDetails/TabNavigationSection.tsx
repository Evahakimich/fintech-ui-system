import React from "react";

        const TabNavigationSection = () => (
          <>
            <div className="px-6 mb-6" id="section-2">
<div className="glass-panel p-1 rounded-2xl flex w-full segmented-control">
<input checked={true} className="hidden" id="tab-activity" name="tabs" type="radio"/>
<label className="flex-1 text-center text-xs font-medium py-2.5 rounded-xl cursor-pointer text-white/60 transition-all" htmlFor="tab-activity">Activity</label>
<input className="hidden" id="tab-analytics" name="tabs" type="radio"/>
<label className="flex-1 text-center text-xs font-medium py-2.5 rounded-xl cursor-pointer text-white/60 transition-all border border-transparent" htmlFor="tab-analytics">Analytics</label>
<input className="hidden" id="tab-details" name="tabs" type="radio"/>
<label className="flex-1 text-center text-xs font-medium py-2.5 rounded-xl cursor-pointer text-white/60 transition-all border border-transparent" htmlFor="tab-details">Details</label>
</div>
</div>
          </>
        );

        export default TabNavigationSection;
