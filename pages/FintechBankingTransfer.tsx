import "@/styles/fintech-banking-transfer.css";
import AmountInputSection from "@/components/FintechBankingTransfer/AmountInputSection";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import NumpadSection from "@/components/FintechBankingTransfer/NumpadSection";
import RecipientInfoPanel from "@/components/FintechBankingTransfer/RecipientInfoPanel";
import SendButtonSection from "@/components/FintechBankingTransfer/SendButtonSection";

const FintechBankingTransfer = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-20 right-[-50px] opacity-20"></div>
      <div className="glow-effect bottom-40 left-[-50px] opacity-10"></div>
      <Header />
      <main className="flex-1 overflow-y-auto px-6 pb-24 z-10 flex flex-col items-center pt-6" id="transfer-main">
      <RecipientInfoPanel />
      <AmountInputSection />
      <NumpadSection />
      <SendButtonSection />
      </main>
      <Navigation />
    </div>
  );
};

export default FintechBankingTransfer;
