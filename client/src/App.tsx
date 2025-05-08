import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import Work from "@/pages/work";
import Book from "@/pages/book";
import Success from "@/pages/success";
import Team from "@/pages/team";
import Logo from "@/pages/logo";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0C10] text-white">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/team" component={Team} />
          <Route path="/book" component={Book} />
          <Route path="/success" component={Success} />
          <Route path="/logo" component={Logo} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
