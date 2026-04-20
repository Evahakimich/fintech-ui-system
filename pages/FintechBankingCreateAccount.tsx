import "@/styles/fintech-banking-create-account.css";
import CreateAccountForm from "@/components/FintechBankingCreateAccount/CreateAccountForm";
import CreateAccountHeader from "@/components/FintechBankingCreateAccount/CreateAccountHeader";
import FloatingActionPanel from "@/components/FintechBankingCreateAccount/FloatingActionPanel";
import Navigation2 from "@/components/layout/Navigation2";

const FintechBankingCreateAccount = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-0 left-[-50px]"></div>
      <div className="glow-effect bottom-20 right-[-50px]"></div>
      <Navigation2 />
      <main className="flex-1 overflow-y-auto px-6 pb-24 z-10" id="create-account-main">
      <CreateAccountHeader />
      <CreateAccountForm />
      </main>
      <FloatingActionPanel />
    </div>
  );
};

export default FintechBankingCreateAccount;
