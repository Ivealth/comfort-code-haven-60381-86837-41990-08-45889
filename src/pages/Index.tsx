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

      <main className="px-5 flex-1 pt-20">
        <Hero />
        <CampusNeeds />
        <Features />
        <WaitlistForm />
      </main>

      <div className="w-full px-5 py-6 flex justify-center">
        <button
          onClick={handleAffiliateClick}
          className="px-4 py-1.5 rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
        >
          Apply as Affiliate
        </button>
      </div>

      <footer className="w-full bg-black text-white text-center text-xs py-6 mt-10">
        <p>© 2025 Ivealth LTD – Empowering the next gen.</p>
      </footer>

      <WelcomeModal 
        open={welcomeModalOpen} 
        onOpenChange={setWelcomeModalOpen}
      />
    </div>
  );
};

export default Index;
