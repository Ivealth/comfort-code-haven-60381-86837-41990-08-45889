import { Menu, ShoppingCart, Store, Search } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface MarketplaceHeaderProps {
  title?: string;
  onCartClick?: () => void;
}

const MarketplaceHeader = ({ title = "Student Marketplace", onCartClick }: MarketplaceHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Promotional Banner */}
      <div className="relative h-12 bg-gradient-to-r from-[#8B1538] via-[#A01B4A] to-[#6B2C3E] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between px-4">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="bg-[#FFD700] text-[#8B1538] px-2 py-1 rounded-md text-xs font-bold">
              Okonga<br/>YAKATA
            </div>
            <div>
              <div className="text-white text-lg font-bold leading-tight">xiaomi</div>
              <div className="text-white text-xs font-semibold">Brand Gear</div>
            </div>
          </div>
          
          {/* Center - Offer Text */}
          <div className="flex-1 flex flex-col items-center justify-center mx-4">
            <div className="text-white text-xs font-medium">Unbeatable Price</div>
            <div className="text-[#FFD700] text-sm font-bold">UP TO 10% OFF</div>
          </div>
          
          {/* Right side - CTA and Image */}
          <div className="flex items-center gap-2">
            <button className="bg-[#FFD700] text-[#8B1538] text-xs font-bold px-3 py-1.5 rounded-md hover:bg-[#FFC700] transition-colors">
              Shop Now
            </button>
            <img 
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=120&h=80&fit=crop" 
              alt="Product" 
              className="w-16 h-12 object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">{title}</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">Browse by Category</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Textbooks", icon: "📚", color: "from-blue-500 to-blue-600" },
                    { name: "Electronics", icon: "💻", color: "from-purple-500 to-purple-600" },
                    { name: "Furniture", icon: "🪑", color: "from-green-500 to-green-600" },
                    { name: "Clothing", icon: "👕", color: "from-pink-500 to-pink-600" },
                    { name: "Food", icon: "🍕", color: "from-orange-500 to-orange-600" },
                    { name: "Stationery", icon: "✏️", color: "from-yellow-500 to-yellow-600" },
                  ].map((category, index) => (
                    <button
                      key={index}
                      className="aspect-square bg-card rounded-xl border border-border hover:shadow-lg transition-all overflow-hidden group"
                    >
                      <div className={`h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${category.color} bg-opacity-10`}>
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {category.icon}
                        </span>
                        <span className="text-xs font-medium text-foreground">
                          {category.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 text-foreground" />
            <button 
              onClick={onCartClick}
              className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <button
          onClick={() => window.location.href = '/search'}
          className="w-full relative"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <div className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-accent/10 border border-border text-sm text-muted-foreground text-left">
            Search Food, groceries, drink, etc
          </div>
        </button>
      </div>
    </header>
  );
};

export default MarketplaceHeader;
