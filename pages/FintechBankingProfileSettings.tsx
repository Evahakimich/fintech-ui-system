import "@/styles/fintech-banking-profile-settings.css";
import AccountSettingsSection from "@/components/FintechBankingProfileSettings/AccountSettingsSection";
import LogoutButton from "@/components/FintechBankingProfileSettings/LogoutButton";
import Navigation from "@/components/layout/Navigation";
import PreferencesSection from "@/components/FintechBankingProfileSettings/PreferencesSection";
import ProfileHeaderSection from "@/components/FintechBankingProfileSettings/ProfileHeaderSection";
import SecuritySettingsSection from "@/components/FintechBankingProfileSettings/SecuritySettingsSection";

const FintechBankingProfileSettings = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col">

      <div className="glow-effect top-0 left-[50%] -translate-x-1/2 opacity-30 w-[300px] h-[300px]"></div>

      <main className="flex-1 overflow-y-auto z-10 flex flex-col pb-28 px-6" id="profile-main">
      <ProfileHeaderSection />
      <div className="space-y-6">
      <AccountSettingsSection />
      <SecuritySettingsSection />
      <PreferencesSection />
      <LogoutButton />
      <p className="text-center text-[10px] text-white/30 mt-4 pb-8">App Version 2.4.1</p>
      </div>
      </main>
      <Navigation />
    </div>
  );
};

export default FintechBankingProfileSettings;
