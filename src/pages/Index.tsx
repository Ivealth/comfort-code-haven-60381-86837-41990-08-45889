import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CampusNeeds from "@/components/CampusNeeds";
import WaitlistForm from "@/components/WaitlistForm";
import WelcomeModal from "@/components/WelcomeModal";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const handleAffiliateClick = () => {
    toast("Coming soon", { duration: 1000 });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body flex flex-col">
      <Header scrolled={scrolled} onSignupClick={() => setWelcomeModalOpen(true)} />

      <main className="px-5 md:px-8 lg:px-12 flex-1 pt-20">
        <Hero />
        <CampusNeeds />
        <Features />
        <WaitlistForm />
      </main>

      <div className="w-full px-5 py-8 flex justify-center">
        <button
          onClick={handleAffiliateClick}
          className="px-6 py-2.5 rounded-full text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg"
        >
          Apply as Affiliate
        </button>
      </div>

      <footer className="w-full bg-primary text-white text-center text-sm py-8 mt-12 border-t border-border/20">
        <p className="font-medium">© 2025 Ivealth LTD – Empowering the next gen.</p>
      </footer>

      <WelcomeModal 
        open={welcomeModalOpen} 
        onOpenChange={setWelcomeModalOpen}
      />
    </div>
  );
};

export default Index;
