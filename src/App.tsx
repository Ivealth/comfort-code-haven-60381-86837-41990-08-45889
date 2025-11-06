import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import FeatureCollaboration from "./pages/FeatureCollaboration";
import FoodOrdering from "./pages/FoodOrdering";
import Restaurants from "./pages/Restaurants";
import Marketplace from "./pages/Marketplace";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import ComingSoon from "./pages/ComingSoon";
import Search from "./pages/Search";
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/feature/collaboration" element={<FeatureCollaboration />} />
          <Route path="/food-ordering" element={<FoodOrdering />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
