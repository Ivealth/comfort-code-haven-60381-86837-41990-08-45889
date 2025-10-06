import { useState, FormEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signinError, setSigninError] = useState("");

  const validateEmail = (v: string) => {
    return v.includes('@') && v.includes('.');
  };

  const handleSigninSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSigninError("");

    if (!validateEmail(signinEmail)) {
      setSigninError('Please enter a valid email');
      return;
    }
    if (signinPassword.length < 6) {
      setSigninError('Password must be at least 6 characters');
      return;
    }

    // Demo success
    setSigninError('');
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white text-foreground font-body flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 h-16 bg-primary">
        <div className="w-full px-5 h-full flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back</span>
          </button>

          <div className="w-6"></div>

          <div className="text-lg font-heading text-white flex items-center">
            <span className="font-bold">Trovii</span>
            <span className="ml-1 font-body font-light text-white/90 text-xs tracking-tight">
              studsuit
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-24 px-5 flex items-start justify-center min-h-screen">
        <div className="w-full max-w-md bg-card rounded-2xl p-6 md:p-8" style={{ boxShadow: '0 8px 30px -10px hsl(348 83% 47% / 0.15), 0 2px 15px -4px hsl(348 83% 47% / 0.1)' }}>
          <div className="mb-5 md:mb-6 text-center">
            <h1 className="text-xl md:text-2xl font-heading font-bold text-primary">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to your Trovii account
            </p>
          </div>

          <form onSubmit={handleSigninSubmit} className="space-y-4 md:space-y-5">
            <div>
              <label className="text-sm text-foreground mb-2 block font-medium">Email</label>
              <input
                value={signinEmail}
                onChange={(e) => setSigninEmail(e.target.value)}
                placeholder="you@school.edu"
                className="w-full text-sm font-body px-4 py-3 rounded-xl border border-input bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm text-foreground mb-2 block font-medium">Password</label>
              <div className="relative">
                <input
                  value={signinPassword}
                  onChange={(e) => setSigninPassword(e.target.value)}
                  placeholder="Enter your password"
                  type={passwordVisible ? 'text' : 'password'}
                  className="w-full text-sm font-body px-4 py-3 rounded-xl border border-input bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <a href="#" className="text-sm text-secondary font-medium hover:underline">
                Forgot password?
              </a>
            </div>

            {signinError && <div className="text-sm text-destructive">{signinError}</div>}

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-primary-foreground bg-primary font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>

            <div className="flex items-center gap-3">
              <hr className="flex-1 border-t border-border" />
              <span className="text-xs text-muted-foreground">or continue with</span>
              <hr className="flex-1 border-t border-border" />
            </div>

            <button
              type="button"
              className="w-full py-2.5 rounded-xl bg-card border border-border text-sm flex items-center justify-center gap-3 hover:bg-pink-100 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.3H272v95.1h147.1c-6.4 34.8-25.6 64.2-54.6 83.9v69.9h88.1c51.6-47.6 81.9-117.6 81.9-198.6z"/>
                <path fill="#34A853" d="M272 544.3c73.7 0 135.6-24.3 180.8-66.1l-88.1-69.9c-24.4 16.4-55.6 26-92.7 26-71 0-131.3-47.9-152.8-112.6H27.1v70.6C72.3 486.6 165 544.3 272 544.3z"/>
                <path fill="#FBBC05" d="M119.2 327.7c-11.8-35.3-11.8-73.6 0-108.9V148.2H27.1C-10 213.1-10 331.2 27.1 396.1l92.1-68.4z"/>
                <path fill="#EA4335" d="M272 107.7c39.8 0 75.5 13.7 103.5 40.6l77.6-77.6C405.4 24.3 343.5 0 272 0 165 0 72.3 57.7 27.1 148.2l92.1 70.6C140.7 155.6 201 107.7 272 107.7z"/>
              </svg>
              <span className="font-medium font-body">Sign in with Google</span>
            </button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                Don't have an account?{' '}
                <a href="/signup" className="text-secondary font-bold hover:underline">
                  Sign Up
                </a>
              </span>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signin;
