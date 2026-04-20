import React from "react";

        const AmountInputSection = () => (
          <>
            <div className="w-full flex justify-center items-center mb-10" id="amount-input">
<span className="text-3xl font-light text-white/50 mr-1">$</span>
<input className="bg-transparent text-5xl font-semibold text-white text-center w-auto outline-none max-w-[200px]" readOnly={true} type="text" value="1,200"/>
</div>
          </>
        );

        export default AmountInputSection;
