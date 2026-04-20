import "@/styles/fintech-banking-set-up-security.css";
import BiometricSecurityCard from "@/components/FintechBankingSetUpSecurity/BiometricSecurityCard";
import Navigation2 from "@/components/layout/Navigation2";
import PinSecurityCard from "@/components/FintechBankingSetUpSecurity/PinSecurityCard";
import SecurityPageHeader from "@/components/FintechBankingSetUpSecurity/SecurityPageHeader";
import TwoFactorAuthCard from "@/components/FintechBankingSetUpSecurity/TwoFactorAuthCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FintechBankingSetUpSecurity = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-10 right-[-50px] opacity-20"></div>
      <div className="glow-effect bottom-40 left-[-50px] opacity-10"></div>
      <Navigation2 />
      <main className="flex-1 overflow-y-auto px-6 pb-32 z-10" id="security-main">
      <SecurityPageHeader />
      <div className="space-y-4">
      <BiometricSecurityCard />
      <PinSecurityCard />
      <TwoFactorAuthCard />
      </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full p-6 pt-10 bg-gradient-to-t from-base via-base to-transparent z-20">
      <button className="w-full h-14 rounded-2xl bg-gradient-glow btn-glow text-white font-semibold text-[15px] flex items-center justify-center gap-2">
                  Finish Setup{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
      </button>
      <div className="w-full h-8 flex items-center justify-center mt-2">
      <div className="w-[120px] h-1.5 bg-white/20 rounded-full"></div>
      </div>
      </div>
    </div>
  );
};

export default FintechBankingSetUpSecurity;
