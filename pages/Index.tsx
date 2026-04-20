import "@/styles/fintech-banking-onboarding.css";
import IllustrationPanel from "@/components/Index/IllustrationPanel";
import OnboardingActions from "@/components/Index/OnboardingActions";
import OnboardingTextContent from "@/components/Index/OnboardingTextContent";
import ProgressIndicator from "@/components/Index/ProgressIndicator";

const Index = () => {
  return (
    <div className="h-[840px] w-full max-w-[375px] mx-auto relative overflow-hidden flex flex-col justify-between">

      <div className="glow-effect top-20 left-10"></div>
      <div className="glow-effect bottom-40 right-[-50px]"></div>
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-8 z-10" id="onboarding-main">
      <IllustrationPanel />
      <OnboardingTextContent />
      <ProgressIndicator />
      <OnboardingActions />
      </main>
      <div className="w-full h-8 flex items-center justify-center absolute bottom-0 z-50">
      <div className="w-[120px] h-1.5 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default Index;
