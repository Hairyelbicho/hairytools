
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WalletProvider } from "./contexts/WalletContext";
import { AuthProvider } from "./contexts/AuthContext";

// Layout
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import WelcomeScreen from "./pages/WelcomeScreen";
import Dashboard from "./pages/Dashboard";
import ReceiveScreen from "./pages/ReceiveScreen";
import SeedPhrasePage from "./pages/SeedPhrasePage";
import VerifySeedPage from "./pages/VerifySeedPage";
import CryptoDetailPage from "./pages/CryptoDetailPage";
import DefiConnectionsPage from "./pages/DefiConnectionsPage";
import SettingsPage from "./pages/SettingsPage";
import SendPage from "./pages/SendPage";
import CryptoAIPage from "./pages/CryptoAIPage";
import AuthScreen from "./pages/AuthScreen";
import EmailSignupPage from "./pages/EmailSignupPage";
import ImportWalletPage from "./pages/ImportWalletPage";
import SellPage from "./pages/SellPage";
import DiscoverPage from "./pages/DiscoverPage";
import MyAssetsPage from "./pages/MyAssetsPage";
import AssetTransactionsPage from "./pages/AssetTransactionsPage";
import NftCollectionsPage from "./pages/NftCollectionsPage";
import VeterinariansPage from "./pages/VeterinariansPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AdvertisingFormPage from "./pages/AdvertisingFormPage";
import PetStoresPage from "./pages/PetStoresPage";

// New DeFi pages
import SwapPage from "./pages/SwapPage";
import TradePage from "./pages/TradePage";
import BridgePage from "./pages/BridgePage";
import GovernancePage from "./pages/GovernancePage";
import PoolsPage from "./pages/PoolsPage";
import SolarflarePage from "./pages/SolarflarePage";
import MetricsPage from "./pages/MetricsPage";
import FiatPage from "./pages/FiatPage";

const queryClient = new QueryClient();

// Function to wrap routes with AppLayout
const WithAppLayout = ({ children }: { children: React.ReactNode }) => (
  <AppLayout>{children}</AppLayout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <WalletProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/welcome" element={<WelcomeScreen />} />
              <Route path="/email-signup" element={<EmailSignupPage />} />
              <Route path="/seed-phrase" element={<SeedPhrasePage />} />
              <Route path="/verify-seed" element={<VerifySeedPage />} />
              <Route path="/import" element={<ImportWalletPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              
              {/* Auth screen - protected but no AppLayout */}
              <Route path="/auth" element={<ProtectedRoute><AuthScreen /></ProtectedRoute>} />
              
              {/* Protected routes with AppLayout */}
              <Route path="/discover" element={<ProtectedRoute><WithAppLayout><DiscoverPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/dashboard" element={<ProtectedRoute><WithAppLayout><Dashboard /></WithAppLayout></ProtectedRoute>} />
              <Route path="/my-assets" element={<ProtectedRoute><WithAppLayout><MyAssetsPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/my-assets/:assetId/transactions" element={<ProtectedRoute><WithAppLayout><AssetTransactionsPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/nft-collections" element={<ProtectedRoute><WithAppLayout><NftCollectionsPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/receive" element={<ProtectedRoute><WithAppLayout><ReceiveScreen /></WithAppLayout></ProtectedRoute>} />
              <Route path="/crypto/:id" element={<ProtectedRoute><WithAppLayout><CryptoDetailPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/defi" element={<ProtectedRoute><WithAppLayout><DefiConnectionsPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><WithAppLayout><SettingsPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/send" element={<ProtectedRoute><WithAppLayout><SendPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/sell" element={<ProtectedRoute><WithAppLayout><SellPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/ai-trading" element={<ProtectedRoute><WithAppLayout><CryptoAIPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/veterinarians" element={<ProtectedRoute><WithAppLayout><VeterinariansPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/pet-stores" element={<ProtectedRoute><WithAppLayout><PetStoresPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/advertising-form" element={<ProtectedRoute><WithAppLayout><AdvertisingFormPage /></WithAppLayout></ProtectedRoute>} />
              
              {/* New DeFi routes */}
              <Route path="/swap" element={<ProtectedRoute><WithAppLayout><SwapPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/trade" element={<ProtectedRoute><WithAppLayout><TradePage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/bridge" element={<ProtectedRoute><WithAppLayout><BridgePage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/governance" element={<ProtectedRoute><WithAppLayout><GovernancePage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/pools" element={<ProtectedRoute><WithAppLayout><PoolsPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/solarflare" element={<ProtectedRoute><WithAppLayout><SolarflarePage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/metrics" element={<ProtectedRoute><WithAppLayout><MetricsPage /></WithAppLayout></ProtectedRoute>} />
              <Route path="/fiat" element={<ProtectedRoute><WithAppLayout><FiatPage /></WithAppLayout></ProtectedRoute>} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WalletProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
