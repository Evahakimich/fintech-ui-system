import "@/styles/fintech-banking-cards-wallet.css";
import AccountSummarySection from "@/components/FintechBankingCardsWallet/AccountSummarySection";
import AdditionalServicesSection from "@/components/FintechBankingCardsWallet/AdditionalServicesSection";
import CardDisplaySection from "@/components/FintechBankingCardsWallet/CardDisplaySection";
import Navigation from "@/components/layout/Navigation";
import QuickActionsPanel from "@/components/FintechBankingCardsWallet/QuickActionsPanel";
import TransactionsSection from "@/components/FintechBankingCardsWallet/TransactionsSection";

const FintechBankingCardsWallet = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-20 left-[50%] -translate-x-1/2 opacity-30 w-[250px] h-[250px]"></div>

      <main className="flex-1 overflow-y-auto z-10 flex flex-col pb-28 pt-2" id="wallet-main">
      <div className="px-6 mb-8 perspective-1000">
      <CardDisplaySection />
      <QuickActionsPanel />
      </div>
      <TransactionsSection />
      <AccountSummarySection />
      <AdditionalServicesSection />
      </main>
      <Navigation />
    </div>
  );
};

export default FintechBankingCardsWallet;
