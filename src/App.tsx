import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<div className="p-6 text-center"><h1 className="text-2xl font-bold">Upload Coming Soon</h1></div>} />
            <Route path="/messages" element={<div className="p-6 text-center"><h1 className="text-2xl font-bold">Messages Coming Soon</h1></div>} />
            <Route path="/liked" element={<div className="p-6 text-center"><h1 className="text-2xl font-bold">Liked Posts Coming Soon</h1></div>} />
            <Route path="/saved" element={<div className="p-6 text-center"><h1 className="text-2xl font-bold">Saved Posts Coming Soon</h1></div>} />
            <Route path="/settings" element={<div className="p-6 text-center"><h1 className="text-2xl font-bold">Settings Coming Soon</h1></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
