import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowRightArrowLeft, faPiggyBank, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';

const Navigation = () => {
  const navItems = [
    { path: '/fintech-banking-dashboard', icon: faHouse },
    { path: '/fintech-banking-transfer', icon: faArrowRightArrowLeft },
    { path: '/fintech-banking-savings-accounts', icon: faPiggyBank },
    { path: '/fintech-banking-cards-wallet', icon: faCreditCard },
    { path: '/fintech-banking-profile-settings', icon: faUser }
  ];

  return (
    <nav className="absolute bottom-0 left-0 w-full glass-panel border-t border-border/50 pb-8 pt-4 px-6 z-30 bg-[#0F1115]/80 backdrop-blur-xl" id="bottom-nav">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-gray-500' : 'text-gray-500 hover:text-gray-300'
              }`
            }
          >
            <FontAwesomeIcon icon={item.icon} className="text-xl mb-1" />
          </NavLink>
        ))}
      </div>
      <div className="w-full h-1 flex items-center justify-center mt-6">
        <div className="w-[120px] h-1.5 bg-white/20 rounded-full"></div>
      </div>
    </nav>
  );
};

export default Navigation;
