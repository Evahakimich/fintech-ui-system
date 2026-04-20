import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FintechBankingDashboard from "./pages/FintechBankingDashboard";
import FintechBankingTransfer from "./pages/FintechBankingTransfer";
import FintechBankingTransferConfirmation from "./pages/FintechBankingTransferConfirmation";
import FintechBankingSavingsAccounts from "./pages/FintechBankingSavingsAccounts";
import FintechBankingAccountDetails from "./pages/FintechBankingAccountDetails";
import FintechBankingCardsWallet from "./pages/FintechBankingCardsWallet";
import FintechBankingNotificationsActivity from "./pages/FintechBankingNotificationsActivity";
import FintechBankingProfileSettings from "./pages/FintechBankingProfileSettings";
import FintechBankingSetUpSecurity from "./pages/FintechBankingSetUpSecurity";
import FintechBankingVerifyIdentityKyc from "./pages/FintechBankingVerifyIdentityKyc";
import FintechBankingCreateAccount from "./pages/FintechBankingCreateAccount";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fintech-banking-dashboard" element={<FintechBankingDashboard />} />
          <Route path="/fintech-banking-transfer" element={<FintechBankingTransfer />} />
          <Route path="/fintech-banking-transfer-confirmation" element={<FintechBankingTransferConfirmation />} />
          <Route path="/fintech-banking-savings-accounts" element={<FintechBankingSavingsAccounts />} />
          <Route path="/fintech-banking-account-details" element={<FintechBankingAccountDetails />} />
          <Route path="/fintech-banking-cards-wallet" element={<FintechBankingCardsWallet />} />
          <Route path="/fintech-banking-notifications-activity" element={<FintechBankingNotificationsActivity />} />
          <Route path="/fintech-banking-profile-settings" element={<FintechBankingProfileSettings />} />
          <Route path="/fintech-banking-set-up-security" element={<FintechBankingSetUpSecurity />} />
          <Route path="/fintech-banking-verify-identity-kyc" element={<FintechBankingVerifyIdentityKyc />} />
          <Route path="/fintech-banking-create-account" element={<FintechBankingCreateAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
