import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

        const NumpadSection = () => (
          <>
            <div className="w-full max-w-[280px] grid grid-cols-3 gap-y-6 gap-x-8 mb-auto mt-4 text-2xl font-medium" id="numpad">
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">1</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">2</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">3</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">4</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">5</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">6</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">7</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">8</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">9</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl text-xl">.</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl">0</button>
<button className="numpad-btn h-14 flex items-center justify-center rounded-2xl text-xl">
<FontAwesomeIcon icon={faDeleteLeft} />
</button>
</div>
          </>
        );

        export default NumpadSection;
