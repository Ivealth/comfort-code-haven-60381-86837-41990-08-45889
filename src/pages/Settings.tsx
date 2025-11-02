import { useState, useEffect } from "react";
import { ChevronLeft, Camera, User, Mail, Phone, Save, MapPin, CreditCard, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Settings = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/signin');
        return;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      if (profile) {
        setUsername(profile.username || '');
        setEmail(profile.email || '');
        setPhoneNumber(profile.phone_number || '');
        setProfilePictureUrl(profile.profile_picture_url || '');
      }
    } catch (error: any) {
      toast.error('Error loading profile', { duration: 500 });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file', { duration: 500 });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be less than 5MB', { duration: 500 });
      return;
    }

    setUploading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;

      // Convert file to base64 for temporary display
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePictureUrl(reader.result as string);
      };
      reader.readAsDataURL(file);

      toast.success('Image uploaded successfully', { duration: 500 });
    } catch (error: any) {
      toast.error('Error uploading image', { duration: 500 });
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!username.trim()) {
      toast.error('Please enter a username', { duration: 500 });
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email', { duration: 500 });
      return;
    }

    if (phoneNumber && !phoneNumber.startsWith('+234')) {
      toast.error('Phone number must start with +234', { duration: 500 });
      return;
    }

    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/signin');
        return;
      }

      // Update profile in database
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          username: username,
          email: email,
          phone_number: phoneNumber || null,
          profile_picture_url: profilePictureUrl || null
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      // Update email in auth if changed
      if (email !== user.email) {
        const { error: authError } = await supabase.auth.updateUser({
          email: email
        });
        if (authError) throw authError;
        toast.success('Profile updated! Please check your new email to confirm the change.', { duration: 500 });
      } else {
        toast.success('Profile updated successfully!', { duration: 500 });
      }

      navigate('/account');
    } catch (error: any) {
      if (error.message.includes('duplicate key')) {
        toast.error('Username already taken', { duration: 500 });
      } else {
        toast.error('Error updating profile', { duration: 500 });
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50 p-3">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="p-1.5 hover:bg-accent/10 rounded-lg transition-all active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <h1 className="text-sm font-semibold text-foreground">Settings</h1>
          <div className="w-7"></div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 pt-4 space-y-4">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative group">
            <Avatar className="w-20 h-20 border-2 border-primary/20 shadow-lg">
              <AvatarImage src={profilePictureUrl} alt={username} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-lg font-bold">
                {username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <label 
              htmlFor="profile-picture" 
              className="absolute bottom-0 right-0 p-1.5 bg-primary text-primary-foreground rounded-full cursor-pointer shadow-md hover:bg-primary/90 transition-all hover:scale-110 active:scale-95"
            >
              <Camera className="w-3.5 h-3.5" />
              <input
                id="profile-picture"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>
          {uploading && (
            <p className="text-xs text-muted-foreground animate-pulse">Uploading...</p>
          )}
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          {/* Username */}
          <div className="group">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-1.5">
              <User className="w-3 h-3 text-primary" />
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-3 py-2.5 rounded-xl border border-border bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-1.5">
              <Mail className="w-3 h-3 text-primary" />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2.5 rounded-xl border border-border bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
            <p className="text-[10px] text-muted-foreground mt-1 ml-0.5">
              Changing email will require verification
            </p>
          </div>

          {/* Phone Number */}
          <div className="group">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-1.5">
              <Phone className="w-3 h-3 text-primary" />
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-foreground font-medium">
                +234
              </span>
              <input
                type="tel"
                value={phoneNumber.startsWith('+234') ? phoneNumber.slice(4) : phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPhoneNumber(value ? `+234${value}` : '');
                }}
                placeholder="8012345678"
                className="w-full pl-14 pr-3 py-2.5 rounded-xl border border-border bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-1.5"
        >
          <Save className="w-3.5 h-3.5" />
          {saving ? 'Saving...' : 'Save Changes'}
        </button>

        {/* Additional Options */}
        <div className="mt-3 bg-card rounded-xl border border-border overflow-hidden">
          <button
            onClick={() => toast("Coming soon", { duration: 500 })}
            className="w-full flex items-center justify-between p-2.5 hover:bg-accent/10 transition-colors border-b border-border"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-foreground">Delivery Address</span>
            </div>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          </button>
          <button
            onClick={() => toast("Coming soon", { duration: 500 })}
            className="w-full flex items-center justify-between p-2.5 hover:bg-accent/10 transition-colors"
          >
            <div className="flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-foreground">Payment Methods</span>
            </div>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
