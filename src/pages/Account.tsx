import { ChevronLeft, Phone, Settings, LogOut, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Profile {
  username: string;
  full_name: string;
  email: string;
  phone_number: string | null;
  profile_picture_url: string | null;
}

const Account = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    checkAuthAndFetchProfile();
  }, []);

  const checkAuthAndFetchProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/signin');
        return;
      }

      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      setProfile(profileData);
    } catch (error: any) {
      toast.error('Error loading profile');
      navigate('/signin');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Logged out successfully', { duration: 800 });
      navigate('/');
    } catch (error: any) {
      toast.error('Error logging out', { duration: 800 });
    }
  };

  const menuItems = [
    { icon: Settings, label: "Settings", action: () => navigate('/settings') },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

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
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border shadow-sm">
          <Avatar className="w-14 h-14 border-2 border-primary/20">
            <AvatarImage src={profile?.profile_picture_url || ''} alt={profile?.username || 'User'} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-lg font-bold">
              {profile?.username?.charAt(0).toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-base font-bold text-foreground">@{profile?.username || 'user'}</h2>
            {profile?.phone_number && (
              <div className="flex items-center gap-1.5 mt-1">
                <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{profile.phone_number}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 pb-3">
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full flex items-center justify-between p-3 hover:bg-accent/10 transition-colors border-b border-border last:border-b-0"
            >
              <div className="flex items-center gap-2.5">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{item.label}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-4">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 p-3 bg-destructive/10 text-destructive rounded-xl hover:bg-destructive/20 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Account;
