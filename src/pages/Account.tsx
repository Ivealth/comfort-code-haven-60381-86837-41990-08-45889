import { ChevronLeft, User, Mail, Phone, MapPin, CreditCard, Settings, LogOut, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: "Edit Profile", action: () => {} },
    { icon: MapPin, label: "Delivery Address", action: () => {} },
    { icon: CreditCard, label: "Payment Methods", action: () => {} },
    { icon: Settings, label: "Settings", action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate("/food-ordering")}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-base font-semibold text-foreground">My Account</h1>
          <div className="w-9"></div>
        </div>
      </header>

      {/* Profile Section */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-foreground">John Doe</h2>
            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-4 pb-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm text-foreground">john.doe@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm text-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 pb-4">
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors border-b border-border last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-4">
        <button className="w-full flex items-center justify-center gap-2 p-4 bg-destructive/10 text-destructive rounded-xl hover:bg-destructive/20 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Account;
