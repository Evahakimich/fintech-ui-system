import { useState } from 'react';export default function FilterButtonsRow() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Transfers', 'Security', 'System'];

  return (
    <div className="px-6 py-2 overflow-x-auto whitespace-nowrap z-20 no-scrollbar pb-4 flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`filter-chip px-4 py-2 rounded-full glass-panel text-xs font-medium transition-all ${
            activeFilter === filter
              ? 'active'
              : 'text-white/60 hover:bg-white/5'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
