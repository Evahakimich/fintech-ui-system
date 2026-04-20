import "@/styles/fintech-banking-account-details.css";
import AccountHeaderSection from "@/components/FintechBankingAccountDetails/AccountHeaderSection";
import DetailsSection from "@/components/FintechBankingAccountDetails/DetailsSection";
import Navigation from "@/components/layout/Navigation";
import TabNavigationSection from "@/components/FintechBankingAccountDetails/TabNavigationSection";

const FintechBankingAccountDetails = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-10 left-[50%] -translate-x-1/2 opacity-20 w-[300px] h-[300px]"></div>

      <main className="flex-1 overflow-y-auto z-10 flex flex-col pb-28" id="account-details-main">
      <AccountHeaderSection />
      <TabNavigationSection />
      <DetailsSection />
      </main>
      <Navigation />
    </div>
  );
};

export default FintechBankingAccountDetails;
