import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Search, Heart, ShoppingCart, Star, Filter, MapPin, User, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

const Marketplace = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "All Items" },
    { id: "textbooks", name: "Textbooks" },
    { id: "electronics", name: "Electronics" },
    { id: "furniture", name: "Furniture" },
    { id: "clothing", name: "Clothing" },
  ];

  const marketplaceItems = [
    {
      id: 1,
      name: "Calculus Textbook",
      category: "Textbooks",
      price: 45.00,
      originalPrice: 120.00,
      condition: "Like New",
      seller: "Sarah M.",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "MacBook Pro 2019",
      category: "Electronics",
      price: 650.00,
      originalPrice: 1299.00,
      condition: "Good",
      seller: "Mike T.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Mini Fridge",
      category: "Furniture",
      price: 80.00,
      originalPrice: 150.00,
      condition: "Excellent",
      seller: "Alex K.",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571175351734-1f0de4bfad03?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "University Hoodie",
      category: "Clothing",
      price: 25.00,
      originalPrice: 60.00,
      condition: "Like New",
      seller: "Emma L.",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Desk Lamp",
      category: "Furniture",
      price: 15.00,
      originalPrice: 35.00,
      condition: "Good",
      seller: "Jake P.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 85.00,
      originalPrice: 180.00,
      condition: "Like New",
      seller: "Chris R.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (item: typeof marketplaceItems[0]) => {
    toast({
      title: "Added to cart!",
      description: `${item.name} - $${item.price.toFixed(2)}`,
    });
  };

  const filteredItems = selectedCategory === "all" 
    ? marketplaceItems 
    : marketplaceItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-white/10 p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-white/10 rounded-xl transition-all duration-300">
                <Menu className="w-5 h-5 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Student Marketplace</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Buy and sell items with fellow students on campus
                </p>
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="text-lg font-bold text-foreground">Student Marketplace</h1>
          <button className="p-2 hover:bg-white/10 rounded-xl transition-all duration-300">
            <ShoppingCart className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      <div className="px-4 pt-4">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for items..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-background border border-input text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-primary/10 rounded-lg transition-all duration-300">
            <Filter className="w-4 h-4 text-primary" />
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent/10 text-foreground hover:bg-accent/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">Student Deals</h2>
          <p className="text-sm opacity-90 mb-4">Save up to 70% on used items from fellow students</p>
          <Button 
            variant="secondary" 
            size="sm"
            className="rounded-full"
          >
            Browse Deals
          </Button>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-2 right-2 w-8 h-8 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full flex items-center justify-center transition-all"
                >
                  <Heart 
                    className={`w-4 h-4 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-foreground'}`}
                  />
                </button>
                <div className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                  {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-foreground line-clamp-1 mb-1">{item.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                  <span className="text-xs text-muted-foreground">{item.rating} • {item.seller}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-lg font-bold text-foreground">${item.price.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground line-through">${item.originalPrice.toFixed(2)}</div>
                  </div>
                  <span className="text-xs bg-accent/20 text-foreground px-2 py-1 rounded-full">
                    {item.condition}
                  </span>
                </div>
                <Button 
                  onClick={() => handleAddToCart(item)}
                  size="sm" 
                  className="w-full rounded-full text-xs"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-6 py-3 shadow-lg">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-primary">
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
            onClick={() => navigate("/food-ordering")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Utensils className="w-5 h-5" />
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingCart className="w-5 h-5" />
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

export default Marketplace;
