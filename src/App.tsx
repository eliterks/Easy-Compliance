import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import AppSidebar from "@/components/AppSidebar";
import Index from "./pages/Index";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import TaskBoard from "./pages/TaskBoard";
import Documents from "./pages/Documents";
import Reminders from "./pages/Reminders";
import Team from "./pages/Team";
import SettingsPage from "./pages/Settings";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout wrapper for authenticated routes
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <AppSidebar>{children}</AppSidebar>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Index />} />
            
            {/* Protected routes with sidebar */}
            <Route path="/dashboard" element={<LayoutWrapper><Dashboard /></LayoutWrapper>} />
            <Route path="/tasks" element={<LayoutWrapper><TaskBoard /></LayoutWrapper>} />
            <Route path="/documents" element={<LayoutWrapper><Documents /></LayoutWrapper>} />
            <Route path="/reminders" element={<LayoutWrapper><Reminders /></LayoutWrapper>} />
            <Route path="/team" element={<LayoutWrapper><Team /></LayoutWrapper>} />
            <Route path="/settings" element={<LayoutWrapper><SettingsPage /></LayoutWrapper>} />
            <Route path="/help" element={<LayoutWrapper><Help /></LayoutWrapper>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
