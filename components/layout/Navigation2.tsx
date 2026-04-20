import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Navigation2 = () => {
  const navigate = useNavigate();

  const getStepText = () => {
    const path = window.location.pathname;
    if (path === '/fintech-banking-create-account') return 'Step 1 of 3';
    if (path === '/fintech-banking-verify-identity-kyc') return 'Step 2 of 3';
    if (path === '/fintech-banking-set-up-security') return 'Step 3 of 3';
    return '';
  };

  return (
    <header className="flex items-center justify-between px-6 pt-12 pb-4 z-20">
      <button
        onClick={() => navigate(-1)}
        className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
      </button>
      <span className="text-sm font-medium text-gray-400">{getStepText()}</span>
      <div className="w-10"></div>
    </header>
  );
};

export default Navigation2;
