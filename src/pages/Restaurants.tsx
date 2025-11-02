import { useState } from "react";
import { ChevronLeft, Search, Star, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Restaurants = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const restaurants = [
    {
      id: 1,
      name: "Sweet Sensation",
      cuisine: "Fast Food & Bakery",
      rating: 4.5,
      reviews: 415,
      deliveryTime: "25-35 min",
      deliveryFee: "Free",
      distance: "1.2 km",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Chicken Republic",
      cuisine: "Fast Food & Chicken",
      rating: 4.7,
      reviews: 892,
      deliveryTime: "20-30 min",
      deliveryFee: "$2.99",
      distance: "2.1 km",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Mama Put Kitchen",
      cuisine: "Local Nigerian Food",
      rating: 4.8,
      reviews: 567,
      deliveryTime: "30-40 min",
      deliveryFee: "Free",
      distance: "0.8 km",
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Domino's Pizza",
      cuisine: "Pizza & Italian",
      rating: 4.6,
      reviews: 1234,
      deliveryTime: "25-35 min",
      deliveryFee: "$1.99",
      distance: "3.5 km",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Chinese Kitchen",
      cuisine: "Chinese & Asian",
      rating: 4.4,
      reviews: 345,
      deliveryTime: "35-45 min",
      deliveryFee: "$3.99",
      distance: "4.2 km",
      image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Burger Haven",
      cuisine: "Burgers & Fast Food",
      rating: 4.9,
      reviews: 1567,
      deliveryTime: "15-25 min",
      deliveryFee: "Free",
      distance: "1.5 km",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Healthy Bites",
      cuisine: "Healthy & Salads",
      rating: 4.3,
      reviews: 234,
      deliveryTime: "20-30 min",
      deliveryFee: "$2.49",
      distance: "2.8 km",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Ice Cream Paradise",
      cuisine: "Desserts & Ice Cream",
      rating: 4.7,
      reviews: 678,
      deliveryTime: "10-20 min",
      deliveryFee: "$1.49",
      distance: "1.0 km",
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop"
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg p-4 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Restaurants</h1>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 rounded-full"
          />
        </div>
      </header>

      {/* Restaurants List */}
      <div className="p-4 space-y-4">
        <p className="text-sm text-muted-foreground">
          {filteredRestaurants.length} restaurants found
        </p>

        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate("/food-ordering", { state: { skipLanding: true } })}
          >
            <div className="relative h-40">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                <span className="text-xs font-semibold">{restaurant.rating}</span>
                <span className="text-xs text-muted-foreground">({restaurant.reviews})</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-foreground mb-1">{restaurant.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{restaurant.cuisine}</p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{restaurant.distance}</span>
                </div>
                <div className="font-semibold text-primary">
                  {restaurant.deliveryFee}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
