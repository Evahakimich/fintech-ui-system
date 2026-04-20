import "@/styles/fintech-banking-savings-accounts.css";
import AccountsCarousel from "@/components/FintechBankingSavingsAccounts/AccountsCarousel";
import CarouselIndicators from "@/components/FintechBankingSavingsAccounts/CarouselIndicators";
import Navigation from "@/components/layout/Navigation";
import PageHeader from "@/components/FintechBankingSavingsAccounts/PageHeader";
import QuickActionsGrid from "@/components/FintechBankingSavingsAccounts/QuickActionsGrid";
import RecentActivityPanel from "@/components/FintechBankingSavingsAccounts/RecentActivityPanel";

const FintechBankingSavingsAccounts = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-20 left-[-50px] opacity-20"></div>
      <div className="glow-effect bottom-40 right-[-50px] opacity-10"></div>

      <main className="flex-1 overflow-y-auto z-10 flex flex-col pt-2 pb-28" id="accounts-main">
      <PageHeader />
      <AccountsCarousel />
      <CarouselIndicators />
      <QuickActionsGrid />
      <RecentActivityPanel />
      </main>
      <Navigation />
    </div>
  );
};

export default FintechBankingSavingsAccounts;
