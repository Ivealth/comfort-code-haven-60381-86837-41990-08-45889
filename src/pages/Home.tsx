import { useNavigate } from "react-router-dom";
import { ShoppingBag, Utensils, Package, User, Menu, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: "Marketplace",
      description: "Buy and sell items",
      icon: ShoppingBag,
      color: "bg-primary/10 text-primary",
      route: "/marketplace"
    },
    {
      id: 2,
      title: "Food Ordering",
      description: "Order your favorite meals",
      icon: Utensils,
      color: "bg-[hsl(20,100%,50%)]/10 text-[hsl(20,100%,50%)]",
      route: "/food-ordering"
    },
    {
      id: 3,
      title: "My Orders",
      description: "Track your orders",
      icon: Package,
      color: "bg-accent/20 text-accent-foreground",
      route: "/coming-soon"
    },
    {
      id: 4,
      title: "Account",
      description: "Manage your profile",
      icon: User,
      color: "bg-muted text-muted-foreground",
      route: "/account"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Navigate through all features and services
                </p>
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="flex items-center gap-2">
            <Store className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Trovii Studsuit</h1>
          </div>
          
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome Back!</h2>
          <p className="text-muted-foreground">What would you like to do today?</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => navigate(feature.route)}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all text-left"
              >
                <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </button>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
          <Button 
            onClick={() => navigate("/marketplace")}
            variant="outline" 
            className="w-full justify-start h-14 rounded-xl"
          >
            <ShoppingBag className="w-5 h-5 mr-3" />
            Browse Marketplace
          </Button>
          <Button 
            onClick={() => navigate("/food-ordering")}
            variant="outline" 
            className="w-full justify-start h-14 rounded-xl"
          >
            <Utensils className="w-5 h-5 mr-3" />
            Order Food
          </Button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-6 py-3 shadow-lg">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button 
            onClick={() => navigate("/marketplace")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button 
            onClick={() => navigate("/food-ordering", { state: { skipLanding: true } })}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Utensils className="w-5 h-5" />
          </button>
          <button 
            onClick={() => navigate("/home")}
            className="flex flex-col items-center gap-1 text-primary"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
              </div>
            </div>
          </button>
          <button
            onClick={() => navigate("/account")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Home;
