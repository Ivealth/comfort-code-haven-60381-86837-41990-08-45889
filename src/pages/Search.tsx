import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search as SearchIcon, TrendingUp, Clock, X } from "lucide-react";

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Calculus Textbook",
    "Wireless Headphones",
    "Mini Fridge",
  ]);

  const trendingSearches = [
    "MacBook Pro",
    "University Hoodie",
    "Desk Lamp",
    "Chemistry Lab Manual",
    "Gaming Mouse",
  ];

  const popularCategories = [
    { name: "Textbooks", icon: "📚", color: "from-blue-500 to-blue-600" },
    { name: "Electronics", icon: "💻", color: "from-purple-500 to-purple-600" },
    { name: "Furniture", icon: "🪑", color: "from-green-500 to-green-600" },
    { name: "Clothing", icon: "👕", color: "from-pink-500 to-pink-600" },
    { name: "Food", icon: "🍕", color: "from-orange-500 to-orange-600" },
    { name: "Stationery", icon: "✏️", color: "from-yellow-500 to-yellow-600" },
  ];

  const removeRecentSearch = (search: string) => {
    setRecentSearches(recentSearches.filter(s => s !== search));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Search */}
      <div className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products, food, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-accent/10 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              autoFocus
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Recent Searches
              </h2>
              <button
                onClick={() => setRecentSearches([])}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Clear all
              </button>
            </div>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-card rounded-lg border border-border hover:bg-accent/5 transition-colors"
                >
                  <button
                    onClick={() => setSearchQuery(search)}
                    className="flex-1 text-left text-sm text-foreground"
                  >
                    {search}
                  </button>
                  <button
                    onClick={() => removeRecentSearch(search)}
                    className="p-1 hover:bg-accent/20 rounded transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trending Searches */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Trending Searches
          </h2>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(search)}
                className="px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-full text-xs font-medium text-foreground transition-colors border border-border"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Categories */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3">
            Browse by Category
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {popularCategories.map((category, index) => (
              <button
                key={index}
                className="aspect-square bg-card rounded-2xl border border-border hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className={`h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${category.color} bg-opacity-10`}>
                  <span className="text-3xl group-hover:scale-110 transition-transform">
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

        {/* Quick Search Suggestions */}
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-foreground mb-3">
            Popular Right Now
          </h2>
          <div className="space-y-2">
            {["Student Desk Setup", "Dorm Room Essentials", "Study Materials"].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(suggestion)}
                className="w-full p-3 bg-card rounded-lg border border-border hover:bg-accent/5 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <SearchIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{suggestion}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
