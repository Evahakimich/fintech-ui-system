import "@/styles/fintech-banking-transfer-confirmation.css";
import ConfirmationActions from "@/components/FintechBankingTransferConfirmation/ConfirmationActions";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import RecipientPreview from "@/components/FintechBankingTransferConfirmation/RecipientPreview";
import SecurityInfo from "@/components/FintechBankingTransferConfirmation/SecurityInfo";
import TransferDetailsPanel from "@/components/FintechBankingTransferConfirmation/TransferDetailsPanel";

const FintechBankingTransferConfirmation = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-20 right-[-50px] opacity-20"></div>
      <div className="glow-effect bottom-40 left-[-50px] opacity-10"></div>
      <Header />
      <main className="flex-1 overflow-y-auto px-6 pb-28 z-10 flex flex-col pt-4" id="review-main">
      <RecipientPreview />
      <TransferDetailsPanel />
      <SecurityInfo />
      <ConfirmationActions />
      </main>
      <Navigation />
    </div>
  );
};

export default FintechBankingTransferConfirmation;
