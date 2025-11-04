import { Menu, Search, Store, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface MarketplaceHeaderProps {
  title?: string;
  onSearch?: (query: string) => void;
}

const MarketplaceHeader = ({ title, onSearch }: MarketplaceHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-background">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded">
              <span className="text-white text-xs font-bold">Okonga YAKATA</span>
            </div>
            <div>
              <span className="text-white text-sm font-bold">xiaomi </span>
              <span className="text-white text-lg font-bold">Brand Gear</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="text-white text-[10px]">Unbeatable Price</div>
              <div className="text-white text-xs font-bold">UP TO 10% OFF</div>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">{title || "Menu"}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Browse and shop from a wide selection of items
                </p>
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-4">
            <button className="p-2" onClick={() => navigate("/")}>
              <Store className="w-6 h-6 text-foreground" />
            </button>
            <button className="p-2">
              <ShoppingCart className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, brands and categories..."
            className="w-full pl-4 pr-12 py-3 rounded-lg bg-muted/50 border border-input text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            onChange={(e) => onSearch?.(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
            <Search className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      {/* Four Dots Navigation */}
      <div className="bg-background border-b px-4 py-2">
        <button 
          onClick={() => navigate("/home")}
          className="flex items-center justify-center w-full py-2 hover:bg-muted/50 rounded-lg transition-colors"
        >
          <div className="grid grid-cols-2 gap-1.5">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MarketplaceHeader;
