import { useNavigate } from "react-router-dom";
import { Store, Utensils, User, Settings, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Store,
      title: "Marketplace",
      description: "Buy and sell items with fellow students",
      path: "/marketplace",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: Utensils,
      title: "Food Ordering",
      description: "Order food from campus restaurants",
      path: "/food-ordering",
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      icon: Package,
      title: "My Orders",
      description: "Track your orders and purchases",
      path: "/coming-soon",
      color: "bg-green-500/10 text-green-500"
    },
    {
      icon: User,
      title: "Account",
      description: "Manage your profile and preferences",
      path: "/account",
      color: "bg-purple-500/10 text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-1">Trovii Studsuit</h1>
            <p className="text-sm opacity-90">Your campus companion</p>
          </div>
          <button 
            onClick={() => navigate("/settings")}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Welcome Section */}
      <div className="px-6 py-8">
        <h2 className="text-xl font-semibold text-foreground mb-2">Welcome back!</h2>
        <p className="text-sm text-muted-foreground mb-8">
          What would you like to do today?
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(feature.path)}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all text-left"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-4">
        <h3 className="text-sm font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => navigate("/restaurants")}
            variant="outline"
            className="h-auto py-4 flex flex-col items-center gap-2"
          >
            <Utensils className="w-5 h-5" />
            <span className="text-xs">Browse Restaurants</span>
          </Button>
          <Button
            onClick={() => navigate("/marketplace")}
            variant="outline"
            className="h-auto py-4 flex flex-col items-center gap-2"
          >
            <Store className="w-5 h-5" />
            <span className="text-xs">Browse Marketplace</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
