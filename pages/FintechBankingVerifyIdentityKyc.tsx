import "@/styles/fintech-banking-verify-identity-kyc.css";
import Header2 from "@/components/layout/Header2";
import KycPageHeader from "@/components/FintechBankingVerifyIdentityKyc/KycPageHeader";
import Navigation2 from "@/components/layout/Navigation2";
import PersonalInfoCard from "@/components/FintechBankingVerifyIdentityKyc/PersonalInfoCard";
import VerificationMethodsSection from "@/components/FintechBankingVerifyIdentityKyc/VerificationMethodsSection";

const FintechBankingVerifyIdentityKyc = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-10 right-[-50px] opacity-20"></div>
      <div className="glow-effect bottom-40 left-[-50px] opacity-10"></div>
      <Navigation2 />
      <main className="flex-1 overflow-y-auto px-6 pb-32 z-10" id="kyc-main">
      <KycPageHeader />
      <PersonalInfoCard />
      <h3 className="text-sm font-semibold text-white mb-4 px-1">Required Documents</h3>
      <VerificationMethodsSection />
      </main>
      <Header2 />
    </div>
  );
};

export default FintechBankingVerifyIdentityKyc;
