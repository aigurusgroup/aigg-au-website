import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SellPage from "./pages/SellPage";
import InvestorsPage from "./pages/InvestorsPage";
import AboutPage from "./pages/AboutPage";
import PlatformPage from "./pages/PlatformPage";
import MarketsPage from "./pages/MarketsPage";
import PerspectivesPage from "./pages/PerspectivesPage";
import DealSourcesPage from "./pages/DealSourcesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/perspectives" element={<PerspectivesPage />} />
          <Route path="/deal-sources" element={<DealSourcesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
