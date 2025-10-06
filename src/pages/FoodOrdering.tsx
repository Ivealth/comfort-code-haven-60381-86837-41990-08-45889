import { useState } from "react";
import { Menu, Search, Heart, ChevronLeft, Clock, MapPin, Bell, User, Filter, Plus, Minus, ShoppingBag, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Star, Gift, Truck, Shield } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type Screen = "landing" | "listing" | "detail";

const FoodOrdering = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [selectedCategory, setSelectedCategory] = useState("burger");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<number | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const categories = [
    { id: "pizza", name: "Pizza", icon: "🍕" },
    { id: "burger", name: "Burger", icon: "🍔" },
    { id: "chinese", name: "Chinese", icon: "🥡" },
    { id: "chicken", name: "Chicken", icon: "🍗" },
    { id: "fastfood", name: "Fast Food", icon: "🍟" }
  ];

  const foodItems = [
    {
      id: 1,
      name: "Beef Burger",
      category: "Burger",
      time: "20 min",
      price: 8.40,
      rating: 4.5,
      calories: 545,
      description: "A zesty, creamy sauce blend is generously spread on the bun creating delightful balance of tangy and rich flavors.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
      badge: "Free delivery"
    },
    {
      id: 2,
      name: "Cheese Pizza",
      category: "Pizza",
      time: "20-25 min",
      price: 12.50,
      rating: 4.8,
      calories: 680,
      description: "Classic cheese pizza with fresh mozzarella and tomato sauce on a perfectly crispy crust.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
      badge: "Popular"
    },
    {
      id: 3,
      name: "Spicy Chicken Wings",
      category: "Chicken",
      time: "15 min",
      price: 9.99,
      rating: 4.6,
      calories: 420,
      description: "Crispy chicken wings tossed in spicy buffalo sauce with a side of ranch dressing.",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      name: "Fried Chicken Bucket",
      category: "Chicken",
      time: "25 min",
      price: 15.99,
      rating: 4.7,
      calories: 850,
      description: "Crispy fried chicken pieces with secret herbs and spices, served with fries.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      name: "Sweet & Sour Chicken",
      category: "Chinese",
      time: "30 min",
      price: 11.20,
      rating: 4.4,
      calories: 520,
      description: "Tender chicken pieces in sweet and sour sauce with bell peppers and pineapple.",
      image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&h=600&fit=crop"
    }
  ];

  const popularItems = [
    {
      id: 6,
      name: "Double Cheese Burger",
      category: "Burger",
      time: "15-20 min",
      price: 10.50,
      rating: 4.9,
      calories: 720,
      description: "Double beef patties with melted cheese, fresh lettuce, tomatoes, and special sauce.",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Pepperoni Pizza",
      category: "Pizza",
      time: "25 min",
      price: 14.99,
      rating: 4.8,
      calories: 780,
      description: "Classic pepperoni pizza with extra cheese and our signature tomato sauce.",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Chicken Nuggets",
      category: "Fast Food",
      time: "10 min",
      price: 6.99,
      rating: 4.5,
      calories: 340,
      description: "Crispy golden chicken nuggets served with your choice of dipping sauce.",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop"
    }
  ];


  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleFoodClick = (foodId: number) => {
    setSelectedFood(foodId);
    setQuantity(1);
    setCurrentScreen("detail");
  };

  const handleAddToCart = () => {
    const food = [...foodItems, ...popularItems].find(f => f.id === selectedFood);
    if (food) {
      toast({
        title: "Added to cart!",
        description: `${quantity}x ${food.name} - $${(food.price * quantity).toFixed(2)}`,
      });
    }
  };

  // Landing Screen
  if (currentScreen === "landing") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop" 
                alt="Delicious food" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Order Your
          </h1>
          <h1 className="text-4xl font-bold text-muted-foreground mb-4">
            Favorite
          </h1>
          <h1 className="text-4xl font-bold text-muted-foreground mb-6">
            <span className="underline decoration-2">Food</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
            Fast delivery of your favorite meals from the best restaurants near you
          </p>
          <Button 
            onClick={() => setCurrentScreen("listing")}
            className="w-full h-12 text-base rounded-full bg-[hsl(20,100%,50%)] text-white hover:bg-[hsl(20,100%,45%)]"
          >
            Order Now
          </Button>
        </div>
      </div>
    );
  }

  // Food Detail Screen
  if (currentScreen === "detail" && selectedFood) {
    const food = [...foodItems, ...popularItems].find(f => f.id === selectedFood);
    if (!food) return null;

    const totalPrice = food.price * quantity;

    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg p-4 flex items-center justify-between">
          <button 
            onClick={() => setCurrentScreen("listing")}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-base font-semibold text-foreground">Orders</h1>
          <button
            onClick={() => toggleFavorite(food.id)}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <Heart 
              className={`w-5 h-5 ${favorites.includes(food.id) ? 'fill-red-500 text-red-500' : 'text-foreground'}`}
            />
          </button>
        </header>

        {/* Food Image */}
        <div className="relative bg-background flex items-center justify-center py-8">
          <img 
            src={food.image} 
            alt={food.name} 
            className="w-80 h-80 object-cover rounded-3xl"
          />
        </div>

        {/* Food Details */}
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">{food.name}</h2>
            <p className="text-sm text-muted-foreground">{food.category}</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Description</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {food.description || `Delicious ${food.name.toLowerCase()} made with fresh ingredients and served hot.`}
              {food.description && food.description.length > 100 && (
                <button className="text-primary ml-1">see more</button>
              )}
            </p>
          </div>
          
          {/* Info Pills */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-accent/10">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-foreground">{food.rating}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-accent/10">
              <Flame className="w-4 h-4 text-[hsl(20,100%,50%)]" />
              <span className="text-sm font-semibold text-foreground">{food.calories} kcal</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-accent/10">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">{food.time}</span>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Minus className="w-4 h-4 text-foreground" />
              </button>
              <span className="text-lg font-semibold text-foreground min-w-[2rem] text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full bg-[hsl(20,100%,50%)] flex items-center justify-center hover:bg-[hsl(20,100%,45%)] transition-colors"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex-1 flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Total Amount</span>
              <span className="text-2xl font-bold text-foreground">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart}
            className="w-full h-14 text-base rounded-full bg-[hsl(20,100%,50%)] text-white hover:bg-[hsl(20,100%,45%)] font-semibold"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    );
  }

  // Recipe Listing Screen
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header with Glassmorphism */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-white/10 p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-white/10 rounded-xl transition-all duration-300">
                <Menu className="w-5 h-5 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Features & Perks</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">Rewards Program</h3>
                    <p className="text-xs text-muted-foreground">Earn points with every order</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">Special Offers</h3>
                    <p className="text-xs text-muted-foreground">Get exclusive deals and discounts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">Fast Delivery</h3>
                    <p className="text-xs text-muted-foreground">Quick delivery to your doorstep</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">Quality Guarantee</h3>
                    <p className="text-xs text-muted-foreground">100% fresh and quality food</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <span className="text-sm text-primary font-medium">📍 172 Grand St, NY</span>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-xl transition-all duration-300">
            <Bell className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      <div className="px-4 pt-4">
        {/* Promotional Banner */}
        <div className="bg-foreground text-background rounded-2xl p-4 mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold mb-1">DashPass on Caviar</h3>
            <p className="text-xs opacity-80 mb-3">Free delivery, lower fees, 5%<br />cashback on pickup</p>
            <button className="bg-[hsl(20,100%,50%)] text-white px-4 py-1.5 rounded-full text-xs font-medium">
              Order Now
            </button>
          </div>
          <div className="w-24 h-24 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop" 
              alt="Featured food" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Search Bar with Filter Icon */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search Food, groceries, drink, etc"
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-background border border-input text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
            <SheetTrigger asChild>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-primary/10 rounded-lg transition-all duration-300">
                <Filter className="w-4 h-4 text-primary" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Search Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-3">Price Range</h3>
                  <Slider defaultValue={[50]} max={100} step={1} className="mb-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$0</span>
                    <span>$100</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-3">Cooking Time</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <Checkbox id="time-5" />
                      <span className="text-sm">Under 15 min</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <Checkbox id="time-15" />
                      <span className="text-sm">15-30 min</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <Checkbox id="time-30" />
                      <span className="text-sm">30+ min</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-3">Dietary</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <Checkbox id="vegan" />
                      <span className="text-sm">Vegan</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <Checkbox id="vegetarian" />
                      <span className="text-sm">Vegetarian</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <Checkbox id="gluten-free" />
                      <span className="text-sm">Gluten-free</span>
                    </label>
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary/10 text-primary"
                  : "bg-background text-foreground"
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="pb-4">
        {/* Select by Category */}
        <div className="mb-6 px-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground">Select by Category</h2>
            <button className="text-xs text-[hsl(20,100%,50%)] font-medium">See All</button>
          </div>
        </div>

        {/* Fastest Near You - Horizontal Scroll */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4 px-4">Fastest Near You</h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 pb-2">
            {foodItems.map((food) => (
              <button
                key={food.id}
                onClick={() => handleFoodClick(food.id)}
                className="flex-none w-[180px] snap-center group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border/30 text-left hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={food.image} 
                      alt={food.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {food.badge && (
                      <div className="absolute top-2 left-2 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                        <Truck className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-foreground">{food.badge}</span>
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(food.id);
                      }}
                      className="absolute top-2 right-2 w-7 h-7 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <Heart 
                        className={`w-3.5 h-3.5 ${favorites.includes(food.id) ? 'fill-red-500 text-red-500' : 'text-foreground'}`}
                      />
                    </button>
                  </div>
                  <div className="p-3">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-sm text-foreground line-clamp-1 flex-1">{food.name}</h3>
                      <span className="text-sm font-bold text-[hsl(20,100%,50%)] ml-2">${food.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-primary fill-primary" />
                        <span className="font-medium">{food.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{food.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium text-primary px-2 py-0.5 bg-primary/10 rounded">{food.category}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Now - Vertical List */}
        <div className="px-4 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-3">Popular Now</h2>
          <div className="space-y-3">
            {popularItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleFoodClick(item.id)}
                className="w-full bg-card rounded-xl overflow-hidden border border-border text-left hover:shadow-lg transition-shadow flex gap-3 p-3"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">{item.name}</h3>
                    <span className="inline-block text-xs text-muted-foreground">{item.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-primary fill-primary" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[hsl(20,100%,50%)]">${item.price}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* All Menu Items - Grid */}
        <div className="px-4">
          <h2 className="text-lg font-bold text-foreground mb-3">All Menu</h2>
          <div className="grid grid-cols-2 gap-3">
            {foodItems.map((food) => (
              <button
                key={food.id}
                onClick={() => handleFoodClick(food.id)}
                className="bg-card rounded-2xl overflow-hidden border border-border text-left hover:shadow-lg transition-shadow"
              >
                <div className="relative h-32">
                  <img 
                    src={food.image} 
                    alt={food.name} 
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(food.id);
                    }}
                    className="absolute top-2 right-2 w-7 h-7 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full flex items-center justify-center transition-all"
                  >
                    <Heart 
                      className={`w-3.5 h-3.5 ${favorites.includes(food.id) ? 'fill-red-500 text-red-500' : 'text-foreground'}`}
                    />
                  </button>
                </div>
                <div className="p-3">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-sm text-foreground line-clamp-1 flex-1">{food.name}</h3>
                    <span className="text-sm font-bold text-[hsl(20,100%,50%)] ml-2">${food.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      <span>{food.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{food.time}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

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
            onClick={() => navigate("/marketplace")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <MapPin className="w-5 h-5" />
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

export default FoodOrdering;
