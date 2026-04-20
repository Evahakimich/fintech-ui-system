import "@/styles/fintech-banking-dashboard.css";
import DashboardActivitySection from "@/components/FintechBankingDashboard/DashboardActivitySection";
import DashboardCardsRow from "@/components/FintechBankingDashboard/DashboardCardsRow";
import DashboardChartsPanel from "@/components/FintechBankingDashboard/DashboardChartsPanel";
import DashboardHeader from "@/components/FintechBankingDashboard/DashboardHeader";
import Navigation from "@/components/layout/Navigation";

const FintechBankingDashboard = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-20 right-[-50px] opacity-20"></div>
      <div className="glow-effect bottom-60 left-[-50px] opacity-10"></div>

      <main className="flex-1 overflow-y-auto px-6 pb-24 z-10" id="dashboard-main">
      <DashboardHeader />
      <DashboardCardsRow />
      <DashboardChartsPanel />
      <DashboardActivitySection />
      </main>
      <Navigation />
    </div>
  );
};

export default FintechBankingDashboard;
