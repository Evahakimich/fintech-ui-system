import "@/styles/fintech-banking-notifications-activity.css";
import EarlierNotificationsSection from "@/components/FintechBankingNotificationsActivity/EarlierNotificationsSection";
import FilterButtonsRow from "@/components/FintechBankingNotificationsActivity/FilterButtonsRow";
import Navigation from "@/components/layout/Navigation";
import TodayNotificationsSection from "@/components/FintechBankingNotificationsActivity/TodayNotificationsSection";

const FintechBankingNotificationsActivity = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-20 left-[50%] -translate-x-1/2 opacity-30 w-[250px] h-[250px]"></div>

      <FilterButtonsRow />
      <main className="flex-1 overflow-y-auto z-10 flex flex-col pb-28 pt-2 px-6" id="notifications-main">
      <TodayNotificationsSection />
      <EarlierNotificationsSection />
      </main>
      <Navigation />
    </div>
  );
};

export default FintechBankingNotificationsActivity;
