import { useState } from "react";
import { Menu, Search, Heart, ChevronLeft, Clock, Users, ChefHat, Bell, User, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Star, Gift, Truck, Shield } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

type Screen = "landing" | "listing" | "detail";

const FoodOrdering = () => {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [selectedCategory, setSelectedCategory] = useState("steak");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const categories = [
    { id: "steak", name: "Steak", icon: "🥩" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "breakfast", name: "Breakfast", icon: "🍳" },
    { id: "fast-food", name: "Fast Food", icon: "🍔" },
    { id: "sea-food", name: "Sea Food", icon: "🦞" }
  ];


  const recipes = [
    {
      id: 1,
      name: "Flavorful Fried Spell Retro",
      category: "Good Life",
      time: "15 min",
      ingredients: 13,
      image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Playful Fried",
      category: "Breakfast",
      time: "5 min",
      ingredients: 8,
      image: "https://images.unsplash.com/photo-1604908815453-e71d7b8e2dc3?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Savor the Aromas: Exquisite Exotic Spice Infusion Rice Bowl",
      category: "Steak",
      author: "Anindya Rahma",
      time: "15 Mins",
      ingredients: 21,
      servings: 2,
      description: "This dish features fragrant jasmine rice meticulously infused with a blend of rare and aromatic spices that will transport your senses to exotic lands.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      name: "Classic Burger Deluxe",
      category: "Fast Food",
      time: "20 min",
      ingredients: 10,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Grilled Salmon",
      category: "Sea Food",
      time: "25 min",
      ingredients: 12,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop"
    }
  ];

  const popularDishes = [
    {
      id: 6,
      name: "Pasta Carbonara",
      category: "Italian",
      time: "30 min",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Sushi Platter",
      category: "Japanese",
      time: "45 min",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Caesar Salad",
      category: "Healthy",
      time: "10 min",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop"
    }
  ];


  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleRecipeClick = (recipeId: number) => {
    setSelectedRecipe(recipeId);
    setCurrentScreen("detail");
  };

  // Landing Screen
  if (currentScreen === "landing") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop" 
                alt="Delicious food bowl" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Cooking
          </h1>
          <h1 className="text-4xl font-bold text-muted-foreground mb-4">
            Delicious
          </h1>
          <h1 className="text-4xl font-bold text-muted-foreground mb-6">
            Like a <span className="underline decoration-2">Chef</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
            This recipe app offers a wide selection of diverse and easy recipes suitable for all cooking levels
          </p>
          <Button 
            onClick={() => setCurrentScreen("listing")}
            className="w-full h-12 text-base rounded-full bg-[hsl(348,100%,47%)] text-white hover:bg-[hsl(348,100%,42%)]"
          >
            Get Started
          </Button>
        </div>
      </div>
    );
  }

  // Recipe Detail Screen
  if (currentScreen === "detail" && selectedRecipe) {
    const recipe = recipes.find(r => r.id === selectedRecipe);
    if (!recipe) return null;

    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card p-4 flex items-center justify-between">
          <button 
            onClick={() => setCurrentScreen("listing")}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-base font-semibold text-foreground">Food Recipes</h1>
          <button
            onClick={() => toggleFavorite(recipe.id)}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <Heart 
              className={`w-5 h-5 ${favorites.includes(recipe.id) ? 'fill-red-500 text-red-500' : 'text-foreground'}`}
            />
          </button>
        </header>

        {/* Recipe Image */}
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
        </div>

        {/* Recipe Details */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-2">{recipe.name}</h2>
          {recipe.author && (
            <p className="text-sm text-muted-foreground mb-4">By {recipe.author}</p>
          )}
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-foreground">{recipe.time}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <ChefHat className="w-4 h-4 text-primary" />
              <span className="text-foreground">{recipe.ingredients} Ingredients</span>
            </div>
            {recipe.servings && (
              <div className="flex items-center gap-1 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-foreground">{recipe.servings} Servings</span>
              </div>
            )}
          </div>

          {recipe.description && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {recipe.description}
            </p>
          )}

          <Button 
            className="w-full h-12 text-base rounded-full bg-foreground text-background hover:bg-foreground/90"
          >
            Start Cooking
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
        {/* New Recipe Card */}
        <div className="bg-foreground text-background rounded-2xl p-4 mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold mb-1">New recipe</h3>
            <p className="text-xs opacity-80 mb-3">Automatically applied</p>
            <button className="bg-background text-foreground px-4 py-1.5 rounded-full text-xs font-medium">
              Order now
            </button>
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop" 
              alt="New recipe" 
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
        {/* Featured Recipes - Minimal Horizontal Scroll */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4 px-4">Featured Recipes</h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 pb-2">
            {recipes.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => handleRecipeClick(recipe.id)}
                className="flex-none w-[240px] snap-center group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border/30 text-left hover:border-primary/30 hover:shadow-sm transition-all duration-300">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(recipe.id);
                      }}
                      className="absolute top-2 right-2 w-7 h-7 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <Heart 
                        className={`w-3.5 h-3.5 ${favorites.includes(recipe.id) ? 'fill-red-500 text-red-500' : 'text-foreground'}`}
                      />
                    </button>
                  </div>
                  <div className="p-3">
                    <span className="inline-block text-xs text-primary font-medium mb-1">{recipe.category}</span>
                    <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 min-h-[2.5rem]">{recipe.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChefHat className="w-3 h-3" />
                        <span>{recipe.ingredients}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Dishes - Vertical List */}
        <div className="px-4 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-3">Popular Dishes</h2>
          <div className="space-y-3">
            {popularDishes.map((dish) => (
              <button
                key={dish.id}
                onClick={() => handleRecipeClick(dish.id)}
                className="w-full bg-card rounded-xl overflow-hidden border border-border text-left hover:shadow-lg transition-shadow flex gap-3 p-3"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <span className="inline-block text-xs text-primary font-medium mb-1">{dish.category}</span>
                  <h3 className="font-semibold text-sm text-foreground mb-1">{dish.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{dish.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span>{dish.rating}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* All Recipes - Grid */}
        <div className="px-4">
          <h2 className="text-lg font-bold text-foreground mb-3">All Recipes</h2>
          <div className="grid grid-cols-2 gap-3">
            {recipes.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => handleRecipeClick(recipe.id)}
                className="bg-card rounded-2xl overflow-hidden border border-border text-left hover:shadow-lg transition-shadow"
              >
                <div className="relative h-32">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-background/90 text-foreground px-2 py-1 rounded-lg text-xs font-medium">
                    {recipe.category}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2">{recipe.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChefHat className="w-3 h-3" />
                      <span>{recipe.ingredients}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-6 py-3">
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
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <Users className="w-5 h-5" />
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
