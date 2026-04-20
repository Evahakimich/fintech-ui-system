import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export default function Header2() {
  return (
    <div className="absolute bottom-0 left-0 w-full p-6 pt-10 bg-gradient-to-t from-base via-base to-transparent z-20">
      <button className="w-full h-14 rounded-2xl bg-white/10 text-gray-400 font-semibold text-[15px] flex items-center justify-center gap-2 transition-all cursor-not-allowed">
        <FontAwesomeIcon icon={faShieldHalved} className="text-sm" />
        Complete Tasks to Continue
      </button>
      <div className="w-full h-8 flex items-center justify-center mt-2">
        <div className="w-[120px] h-1.5 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
}
