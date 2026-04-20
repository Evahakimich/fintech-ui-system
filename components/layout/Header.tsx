import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/fintech-banking-transfer':
        return 'Transfer';
      case '/fintech-banking-transfer-confirmation':
        return 'Review Transfer';
      default:
        return '';
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="flex items-center justify-between px-6 pt-12 pb-4 z-20" id="header">
      <button 
        onClick={handleBack}
        className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
      </button>
      <h1 className="text-base font-medium">{getTitle()}</h1>
      <div className="w-10 h-10"></div>
    </header>
  );
}
